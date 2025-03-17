let command = input.command || "add-meeting"; 
let templatePath = input.templatePath || "09 - Meta/94 - Templates/work/Meeting.md"; 
let attachedFilePath = input.attachedFilePath || dv.current().file.name;
let commandTitleMapping = {
    "add-meeting": "🗨️ New Meeting",
    "add-daily": "📆 New Daily Note",
    "add-task": "📝 New Task",
};
let buttonTitle = input.buttonTitle || commandTitleMapping[command] || "Custom Button";

// Dynamic button for meeting notes
const createCustomButton = dv.el("button", buttonTitle, {
    onclick: async () => {
        async function handleCommands(command, templatePath, attachedFilePath) {
            const vault = app.vault;
            const quickAdd = app.plugins.plugins["quickadd"];
            const today = window.moment().format("YYYY-MM-DD");

            // Check if QuickAdd is installed and enabled
            if (!quickAdd) {
                new Notice("The QuickAdd plugin is not installed or enabled.");
                throw new Error("QuickAdd plugin required.");
            }

            // **Branching based on the command**
            switch (command) {
                case "add-meeting":
                    // Get the current file using dv.current()
                    const currentFile = dv.current().file.path;
                    if (!currentFile) {
                        new Notice("No valid file found with dv.current().");
                        throw new Error("A current file is required to determine the nearest meetings folder.");
                    }

                    // Define suggestions for meeting titles
                    const suggestions = [
                        `${today} ~ Daily`,
                        `${today} ~ Weekly`,
                        "Team Meeting",
                        "Project Discussion",
                        "Sprint Planning",
                        "Retrospective",
                        "Client Meeting",
                    ];

                    // QuickAdd dropdown for meeting titles
                    const noteTitle = await quickAdd.api.suggester(
                        [...suggestions, "Enter a custom title"],
                        [...suggestions, "Enter a custom title"],
                        `${today} ~ Daily`
                    );

                    // **Check: If the user closes the modal or makes no selection**
                    if (!noteTitle) {
                        new Notice("Note creation cancelled – no selection made.");
                        return; // Abort process if no selection is made
                    }

                    // Prompt for a custom title
                    let finalTitle = noteTitle;
                    if (noteTitle === "Enter a custom title") {
                        finalTitle = await quickAdd.api.inputPrompt(
                            "Enter your custom title:",
                            "Meeting Name"
                        );

                        if (!finalTitle || finalTitle.trim() === "") {
                            new Notice("Note creation cancelled – no title entered.");
                            return;
                        }
                    }

                    // Search for the nearest "Meetings" folder
                    const pathSegments = currentFile.split("/");
                    let meetingsFolderPath = null;
                    for (let i = pathSegments.length - 2; i >= 0; i--) {
                        const potentialPath = pathSegments.slice(0, i + 1).join("/") + "/Meetings";
                        if (await vault.adapter.exists(potentialPath)) {
                            meetingsFolderPath = potentialPath;
                            break;
                        }
                    }

                    // If no "Meetings" folder is found
                    if (!meetingsFolderPath) {
                        new Notice('No "Meetings" folder found for current file path. Please select a Folder manually.');
                        const allFolders = app.vault.getAllLoadedFiles().filter(file => file.children);
                        const meetingsFolders = allFolders.filter(folder => folder.name.toLowerCase() === "meetings");
    
                        // If no "Meetings" folders are found
                        if (meetingsFolders.length === 0) {
                            new Notice('No "Meetings" folder found.');
                            return;
                        }

                        // **Show project selector**
                        meetingsFolderPath = await quickAdd.api.suggester(
                            meetingsFolders.map(folder => folder.path), // Paths of the "Meetings" folders
                            meetingsFolders.map(folder => folder.path), // Display the paths
                            "Select a Meetings folder"
                        );

                        // Check if the user selected a project
                        if (!meetingsFolderPath) {
                            new Notice("Note creation cancelled – no Meetings folder selected.");
                            return;
                        }
                    }

                    // File existence check
                    const newFilePath = `${meetingsFolderPath}/${finalTitle}.md`;
                    if (await vault.adapter.exists(newFilePath)) {
                        new Notice(`The file "${finalTitle}" already exists in the folder "${meetingsFolderPath}".`);
                        return;
                    }

                    // Check template
                    const templateFile = await vault.getAbstractFileByPath(templatePath);
                    if (!templateFile) {
                        new Notice(`The template "${templatePath}" was not found.`);
                        throw new Error(`The template is required: ${templatePath}`);
                    }

                    // Create a new note
                    await vault.create(newFilePath, await vault.adapter.read(templatePath));
                    new Notice(`The note "${finalTitle}" was successfully created.`);
                    await app.workspace.openLinkText(newFilePath, "/", true);
                    break;

                case "add-daily":
                    app.commands.executeCommandById("obsibrain-plugin:new-daily");
                    break;

                case "add-task":
                    app.commands.executeCommandById("obsibrain-plugin:new-task");
                    break;

                default:
                    new Notice("Unknown command!");
            }
        }

        // Call function based on the command
        try {
            await handleCommands(command, templatePath, attachedFilePath);
        } catch (error) {
            console.error(error);
        }
    },
});
createCustomButton.addClass("custom-button");


return createCustomButton;
