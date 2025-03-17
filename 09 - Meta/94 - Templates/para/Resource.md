---
created: '[[<% tp.file.creation_date("YYYY-MM-DD") %>|<% tp.file.creation_date("dddd, Do MMMM YYYY, HH:mm") %>]]'
modified:
---

---

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "remaining", withContainer: true })
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "completed", withContainer: true})
```

> [!TODO] All Tasks <js-todo-callout></js-todo-callout>

---

```dataviewjs
await dv.view("JavaScript/Dataview/views/links", {type:"notes", withContainer: true})
```
