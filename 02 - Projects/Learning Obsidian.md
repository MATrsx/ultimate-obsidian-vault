---
banner: "[[LonelyRain.gif]]"
banner-x: 50
banner-y: 50
banner-display: cover
banner-height: 350
created: "[[2025-03-08|Saturday, 8th March 2025, 16:29]]"
modified: "[[2025-03-11|Tuesday, 11th March 2025, 20:53]]"
---

> [!SUMMARY]+
> **This Project aims to introduce the main features of Obsidian and specifically this vault to new Users.**
> 🎯→ After reading these notes the User should be able to have a general understanding of what Obsidian is and how to tailor this vault to their own needs.

```dataviewjs
await dv.view('JavaScript/Dataview/views/progress-bar', {type: "completed-tasks", withContainer: true})
```

---

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "remaining", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-task", withContainer: true })
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "all-completed", withContainer: true})
```

> [!TODO] All Tasks <js-todo-callout></js-todo-callout>


---

```dataviewjs
await dv.view("JavaScript/Dataview/views/links", {type:"notes", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-note" })
```
