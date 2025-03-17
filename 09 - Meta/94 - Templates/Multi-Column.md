<%*
const multi_column_types = {
    'callout':        '💥 Callout',
    'dataview':       '🔤 Dataview',
    'image':          '🖼️ Image',
    'text':           '📄 Text',
    'blockquote':     '📒 Blockquote',
    'table':          '🗄️ Table',
};
const column_types = {
	'list-cards':        '🗂️ List Cards (Minimal Theme)',
	'cards':             '🗃️ Dataview Cards (Minimal Theme)',
    'list_column':       '🔢 List Column (No header)',
    'list_grid':         '🔠 List Grid (Has header)',
    'card_grid':         '🎴 Cards Grid (Has header)',
    'custom':            '❓ Custom',
};
const custom_column_options = {
    2:     '2️⃣ 2 Columns',
    3:     '3️⃣ 3 Columns',
    4:     '4️⃣ 4 Columns',
    5:     '5️⃣ 5 Columns',
    6:     '6️⃣ 6 Columns',
    7:     '7️⃣ 7 Columns',
    8:     '8️⃣ 8 Columns',
    9:     '9️⃣ 9 Columns',
    10:     '🔟 10 Columns',
};
const list_column_options = {
    2:     '2️⃣ 2 Columns',
    3:     '3️⃣ 3 Columns',
    4:     '4️⃣ 4 Columns',
};

const list_card_grid_options = {
    2:       '2️⃣ 2 Columns',
    3:       '3️⃣ 3 Columns',
};

const typeColumn = await tp.system.suggester(Object.values(column_types), Object.keys(column_types), true, `Welche Art von Columns soll erstellt werden?`)
let numColumns;
let header;

if (typeColumn == 'custom') {
    header = `> [!multi-column]\n>\n`;
    numColumns = await tp.system.suggester(Object.values(custom_column_options), Object.keys(custom_column_options), true, `Wie viele Spalten sollen erstellt werden?`);
} else if (typeColumn == 'list_column'){
	header = `> [!blank-container]\n>\n`;
    numColumns = await tp.system.suggester(Object.values(list_column_options), Object.keys(list_column_options), true, `Wie viele Spalten sollen erstellt werden?`);
} else if (typeColumn == 'list-cards' || typeColumn == 'cards'){
	header = `> [!blank-container|${typeColumn}]\n>\n`;
    numColumns = 1;
} else {
	header = `> [!blank-container]\n>\n`;
    numColumns = await tp.system.suggester(Object.values(list_card_grid_options), Object.keys(list_card_grid_options), true, `Wie viele Spalten sollen erstellt werden?`);
}

for (let i = 0; i < numColumns; i++) {
    if (typeColumn == 'custom') {
        let content;
        const type = await tp.system.suggester(Object.values(multi_column_types), Object.keys(multi_column_types), true, `Select Column Type [${i+1}/${numColumns}].`);

        if (type == 'callout') {
            content = `> >[!note] Titel\n> > Content\n>\n`;
        } else if (type == 'text') {
	        const textContent = await tp.system.prompt('Enter your Text:', 'Content', true);
            content = `> >[!blank-container]\n> >${textContent}\n>\n`;
        } else if (type == 'blockquote') {
	        const textContent = await tp.system.prompt('Enter your Text:', 'Content', true);
            content = `> >${textContent}\n>\n`;
        } else if (type == 'dataview') {
	         content = "> ```dataview\n> TABLE " + tp.file.cursor(i) + "\n> ```\n>\n";
        } else if (type == 'image') {
            const vaultImages = app.vault.getFiles().filter(file => file.extension === 'png' || file.extension === 'jpg' || file.extension === 'svg');

            const imageNames = vaultImages.map(file => file.name);
            const selectedImage = await tp.system.suggester((item) => item, imageNames, true, 'Select image from Vault:');
            content = `> >[!blank]\n> > ![[${selectedImage}]]\n>\n`;
        } else if (type == 'table') {
            content = ">|     |     |\n>| --- | --- |\n>|     |     |\n>\n";
        }

        header += content;
    } else if (typeColumn == 'list-cards'){
		header += `> - List Item 1\n> - List Item 2\n> - List Item 3\n> - List Item 4\n`;
	} else if (typeColumn == 'cards'){
		header += "> ```dataview\n> TABLE " + tp.file.cursor() + "\n> ```\n";
	} else if (typeColumn == 'list_column') {
        if (numColumns == 2) {
            if (i == 0) {
                header += `> - List Item Col-${i+1} #mcl/list-column\n> - List Item Col-${i+1}\n`;
            } else {
                header += `> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n`;
            }
        } else if (numColumns == 3) {
            if (i == 0) {
                header += `> - List Item Col-${i+1} #mcl/list-column\n> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n`;
            } else {
                header += `> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n`;
            }
        } else if (numColumns == 4) {
            if (i == 0) {
                header += `> - List Item Col-${i+1} #mcl/list-column\n> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n`;
            } else {
                header += `> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n> - List Item Col-${i+1}\n`;
            }
        }
    } else if (typeColumn == 'list_grid') {
        if (numColumns == 2) {
            if (i == 0) {
                header += `> - #### List Item ${i+1} #mcl/list-grid\n>    - Sublist Item\n`;
            } else {
                header += `> - #### List Item ${i+1}\n>    - Sublist Item\n`;
            }
        } else if (numColumns == 3) {
            if (i == 0) {
                header += `> - #### List Item ${i+1} #mcl/list-grid\n>    - Sublist Item\n>    - Sublist Item\n`;
            } else {
                header += `> - #### List Item ${i+1}\n>    - Sublist Item\n>    - Sublist Item\n`;
            }
        }
    } else if (typeColumn == 'card_grid') {
        if (numColumns == 2) {
            if (i == 0) {
                header += `> - #### Card Title ${i+1} #mcl/list-card-grid\n>    - Sublist Item\n`;
            } else {
                header += `> - #### Card Title ${i+1}\n>    - Sublist Item\n`;
            }
        } else if (numColumns == 3) {
            if (i == 0) {
                header += `> - #### Card Title ${i+1} #mcl/list-card-grid\n>    - Sublist Item\n>    - Sublist Item\n`;
            } else {
                header += `> - #### Card Title ${i+1}\n>    - Sublist Item\n>    - Sublist Item\n`;
            }
        }
    }
}

tR += header;
%>