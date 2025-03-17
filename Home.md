---
icon: 🏠
created: "[[2025-03-10|Monday, 10th March 2025, 20:00]]"
modified: "[[2025-03-17|Monday, 17th March 2025, 20:49]]"
cssclasses:
  - cards
banner-x: 51
banner-y: 73
sticker: emoji//1f3e1
banner: 09 - Meta/92 - Banners/MoonBowl.gif
banner_y: "65"
---


# Areas
```dataviewjs
dv.table(["Cover", "Name", "Related Notes", "Created"],
    dv.pages()
    .filter(p => p.file.path.startsWith("03 - Areas/"))
    .filter(p => {
        let parentFolder = p.file.path.split("/").slice(-2, -1)[0];
        return p.file.name === parentFolder;
    })
    .map(p => {
        let banner = p.banner ? p.banner : "";console.log(banner);
        let cover = banner ? dv.paragraph(`![[${banner}]]`) : "No Banner";
        let relatedNotes = `*Verknüpfte Notizen*: **${p.file.inlinks.length}**`;
        
        const tasks = p.file.tasks || [];
	    const totalTasks = tasks.length;
	    const completedTasks = tasks.filter(t => t.completed).length;
        let relatedTasks = totalTasks > 0 ? `*Completed Tasks*: ${completedTasks}/${totalTasks}` : `*Linked Tasks*: ${totalTasks}`

		const goals = dv.pages()
		    .filter(p => p.file.path.startsWith("01 - Journal/10 - Goals"))
            .where(g => g.file.outlinks.some(l => l.path === p.file.path)) || [];
	    const totalGoals = goals.length;
	    const completedGoals = goals.filter(t => t.status === "done").length;
        let relatedGoalsCount = totalGoals > 0 ? `*Completed Goals*: ${completedGoals}/${totalGoals}` : `*Related Goals*: ${totalGoals}`
		let relatedGoals = totalGoals > 0 ? "**View Goals** \n" + dv.pages()
		    .filter(p => p.file.path.startsWith("01 - Journal/10 - Goals"))
            .where(g => g.file.outlinks.some(l => l.path === p.file.path))
            .map(g => g.file.link)
            .join(", ") : null;
        
       //let created = `Erstellt am: ${p.file.ctime.toISODate()}`;
        
        let returnElements = [cover, p.file.link, relatedNotes, relatedTasks, relatedGoalsCount];
        totalGoals > 0 ? returnElements.push(relatedGoals) : "";
        return returnElements;
    })
);
```


