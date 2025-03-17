---
status: ongoing
priority:
goal: '[[]]'
deadline:
completed:
created: '[[<% tp.file.creation_date("YYYY-MM-DD") %>|<% tp.file.creation_date("dddd, Do MMMM YYYY, HH:mm") %>]]'
modified:
---

---

> [!SUMMARY]+
> %%OVERVIEW%%
> → %%OUTCOME%%

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
