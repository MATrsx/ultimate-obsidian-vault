---
created: '[[<% tp.file.creation_date("YYYY-MM-DD") %>|<% tp.file.creation_date("dddd, Do MMMM YYYY, HH:mm") %>]]'
modified:
---

⏮️ <% tp.user.quarterlyZoomOutRibbon(tp.file.title) %> ⏭️

⬅️ <% tp.user.quarterlyNextPrevRibbon(tp.file.title) %> ➡️

---

<% tp.user.quarterlyDateInfo(tp.file.title) %>

---

<% tp.user.render('quarterly_declutter', app.plugins.plugins["obsibrain-plugin"]) %>

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "completed", onDate: "<% tp.file.title %> " , scope: "all", withContainer: true })
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/projects", {type: "completed", onDate: "<% tp.file.title %> " , scope: "all", withContainer: true})
```

---

<% tp.user.render('quarterlyReview', app.plugins.plugins["obsibrain-plugin"]) %>

---

<% tp.user.render('quarterly_plan', app.plugins.plugins["obsibrain-plugin"]) %>

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "ongoing", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "on-hold", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-goal"})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/projects", {type: "ongoing", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/projects", {type: "on-hold", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/button", {command: "add-project"})
```
