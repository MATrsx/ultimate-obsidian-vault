---
created: '[[2025-03-11]]'
modified:
---

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "remaining", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "completed", withContainer: true})
```

> [!TODO] All Tasks <js-todo-callout></js-todo-callout>

---

```dataviewjs
await dv.view("JavaScript/Dataview/views/links", {type:"goals", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-goal", withContainer: true })
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/links", {type:"notes", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-note", withContainer:true })
```
