---
created: '[[<% tp.file.creation_date("YYYY-MM-DD") %>|<% tp.file.creation_date("dddd, Do MMMM YYYY, HH:mm") %>]]'
modified:
---

⏮️<% tp.user.dailyZoomOutRibbon(tp.file.title) %>⏭️

⬅️ <% tp.user.dailyNextPrevRibbon(tp.file.title) %> ➡️

---

<% tp.user.dailyDateInfo(tp.file.title) %>

---

# 📝 Daily overview

```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "overdue", onDate: "<% tp.file.title %>", scope: "all", withContainer: true})
```
```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "due", onDate: "<% tp.file.title %>", scope: "all", withContainer: true})
```
```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "scheduled", onDate: "<% tp.file.title %>", scope: "all", withContainer: true})
```
```dataviewjs
await dv.view("JavaScript/Dataview/views/habits")
```
```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "ongoing", onDate: "<% tp.file.title %>", scope: "all", withContainer: true})
```
```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "completed", onDate: "<% tp.file.title %>", scope: "all", withContainer: true})
```
```dataviewjs
await dv.view("JavaScript/Dataview/views/meetings", {type: "scheduled", onDate: "<% tp.file.title %>", withContainer: true})
```

---

# 🧠 Daily reflection

<% tp.user.render('dailyReview', app.plugins.plugins["obsibrain-plugin"]) %>

---

# 📚 Knowledge management

```dataviewjs
await dv.view("JavaScript/Dataview/views/links", {type:"notes-created", onDate: "<% tp.file.title %>", withContainer: true})
```

```dataviewjs
await dv.view("JavaScript/Dataview/views/links", {type:"notes-updated", onDate: "<% tp.file.title %>", withContainer: true})
```

# 🎯 Weekly tasks and goals

### 📅 Tasks due (this week)
```dataviewjs
await dv.view("JavaScript/Dataview/views/tasks", {type: "due", onDate: "<% tp.file.title %>", forceFormat: "isoWeek", scope: "all", withContainer: true})
```

### 🎯 Current goals
```dataviewjs
await dv.view("JavaScript/Dataview/views/goals", {type: "ongoing", withContainer: true})
```

### 📈 Ongoing projects
```dataviewjs
await dv.view("JavaScript/Dataview/views/projects", {type: "ongoing", withContainer: true})
```
