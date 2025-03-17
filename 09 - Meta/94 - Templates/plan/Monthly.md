---
created: '[[<% tp.file.creation_date("YYYY-MM-DD") %>|<% tp.file.creation_date("dddd, Do MMMM YYYY, HH:mm") %>]]'
modified:
---

⏮️ <% tp.user.monthlyZoomOutRibbon(tp.file.title) %> ⏭️

⬅️ <% tp.user.monthlyNextPrevRibbon(tp.file.title) %> ➡️

---

<% tp.user.render('monthly_declutter', app.plugins.plugins["obsibrain-plugin"]) %>

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "completed", onDate: "<% tp.file.title %> ", scope: "all", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/projects", {type: "completed", onDate: "<% tp.file.title %> ", scope: "all", withContainer: true})
```

```dataviewjs
dv.view("JavaScript/Dataview/views/areas", {type:"all", withContainer: true})
```

<% tp.user.render('monthlyReview', app.plugins.plugins["obsibrain-plugin"]) %>

<% tp.user.render('monthly_plan', app.plugins.plugins["obsibrain-plugin"]) %>

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "ongoing", onDate: "<% tp.file.title %> ", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "on-hold", onDate: "<% tp.file.title %> ", withContainer: true})
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
