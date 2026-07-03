---
title: "Emacs Reminder Systems: Sobriety + Timer Reminders"
slug: emacs-reminder-systems
date: 2026-07-04
excerpt: "Self-discipline reminders via Emacs timer, always-on Emacs GUI."
tags: ["Emacs", "self-discipline", "habits", "tools"]
---

## Emacs for habit reminders

I keep Emacs GUI (Doom Emacs) running all day. So having Emacs manage reminders is the most natural choice — when it's time, it just pops up.

Two systems:

### ① sobriety-reminder (daily check-in)

Built with Emacs `run-with-timer`:

- Scheduled reminder fires `message` + `ding` at the set time
- Emacs GUI is always on, so reminders never miss
- Logs data to org files for tracking

Later ported to an Obsidian plugin: [[sobriety-as-habit]]

### ② Generic timer-reminder (zhanzhuang, water, etc.)

Same Emacs timer mechanism, broader use:

- **Meditation reminder** — scheduled practice
- **Water reminder** — drink up
- **Any custom interval** — configured in Emacs Lisp, easy to tweak

### Technical implementation

Core code is minimal:

```elisp
;; Daily sobriety check-in at 9 AM
(run-at-time "09:00" (* 60 60 24) 'my/sobriety-reminder)

;; Zhanzhuang (standing meditation) reminder
(run-at-time "07:00" (* 60 60 24) 'my/zhanzhuang-reminder)
```

Two principles:

1. **Remind, don't enforce** — `ding` at the right time, the choice is yours. But that sound keeps nudging you.
2. **Emacs GUI always on** — consistent with my [[my-workflow|WSL + Doom Emacs workflow]], as long as Emacs is running, reminders work.

On habit system design philosophy: [[sobriety-as-habit]]
On knowledge management: [[knowledge-management-ai]]
On timeline system: [[emacs-timeline]]
