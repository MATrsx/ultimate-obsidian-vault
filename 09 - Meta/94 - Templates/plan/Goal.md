---
area: '[[]]'
status: ongoing
deadline:
achieved:
created: '[[<% tp.file.creation_date("YYYY-MM-DD") %>|<% tp.file.creation_date("dddd, Do MMMM YYYY, HH:mm") %>]]'
modified:
---

---

```dataviewjs
await dv.view('JavaScript/Dataview/views/progress-bar', {type: "linked-completed-projects", withContainer: true})
```

---

```dataviewjs
await dv.view("JavaScript/Dataview/views/links", {type:"projects", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-project"  })
```
