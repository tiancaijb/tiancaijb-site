---
title: "My Two GTD Systems"
slug: my-gtd-system
date: 2026-07-04
excerpt: "org-agenda for life, agent-projects.org for dev."
tags: ["GTD", "workflow", "Emacs", "org-mode"]
---

## Two systems, different purposes

I run two systems, but not both for GTD:

### ① Emacs org-agenda (personal)

File at `~/org/todo.org`, managed via `org-agenda`:

- **Habit tracking** — sobriety check-ins, meditation, standing practice
- **Scheduled reminders** — Emacs timer + message/ding
- **Personal TODOs** — errands, bills, chores
- **Quick notes** — org-roam for capture, periodic review

### ② agent-projects.org (agent task log)

File at `~/org/dev/agent-projects.org`, maintained by pi-coding-agent. This file isn't for me — it's **for the agent**:

- At session start, the agent reads it to understand project context
- Before each task, the agent writes **TODO**, marks **DONE** after
- States: TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- Priorities: [#A] [#B] [#C]
- Auto git commit after every change

Key rule: **write TODO first, then act** — this is the agent's work discipline.

### The difference

- org-agenda is **mine** — things I plan for myself
- agent-projects is **for the agent** — project context, so the agent knows what to do
- AI only touches agent-projects, never my personal agenda

See my full workflow: [[my-workflow]]
On Emacs reminders: [[emacs-reminder-systems]]
