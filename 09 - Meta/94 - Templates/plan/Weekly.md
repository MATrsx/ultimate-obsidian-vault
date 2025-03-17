---
created: '[[<% tp.file.creation_date("YYYY-MM-DD") %>|<% tp.file.creation_date("dddd, Do MMMM YYYY, HH:mm") %>]]'
modified:
---

⏮️ <% tp.user.weeklyZoomOutRibbon(tp.file.title) %> ⏭️

⬅️ <% tp.user.weeklyNextPrevRibbon(tp.file.title) %> ➡️

---

<% tp.user.weeklyDateInfo(tp.file.title) %>

---

<% tp.user.render('weekly_declutter', app.plugins.plugins["obsibrain-plugin"]) %>

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "remaining", onDate: "<% tp.file.title %> " , scope: "all", withContainer: true})
```

```dataviewjs
dv.view("JavaScript/Dataview/views/tasks", {type: "unplanned", onDate: "<% tp.file.title %> ", scope: "all", withContainer: true})
```

> [!TODO] All Tasks <js-todo-callout></js-todo-callout>



```dataviewjs
await dv.view("JavaScript/Dataview/views/notes", {type: "unsorted", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "completed", onDate: "<% tp.file.title %> ", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/projects", {type: "completed", onDate: "<% tp.file.title %> ", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "completed", onDate: "<% tp.file.title %> ", scope: "all", withContainer: true})
```

---

<% tp.user.render('weeklyReview', app.plugins.plugins["obsibrain-plugin"]) %>

---

<% tp.user.render('weekly_plan', app.plugins.plugins["obsibrain-plugin"]) %>

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "ongoing", onDate: "<% tp.file.title %> ", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-goal"})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/projects", {type: "ongoing", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-project"})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "due-next", onDate: "<% tp.file.title %>", scope: "all", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "ongoing", onDate: "<% tp.file.title %> ", scope: "all", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-task"})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/meetings", {type: "scheduled-next", onDate: "<% tp.file.title %> ", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-meeting"})
```
