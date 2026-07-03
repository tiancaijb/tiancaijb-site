---
title: "From Emacs to Obsidian: Porting a Sobriety Tracker Plugin"
slug: building-sobriety-tracker-obsidian-plugin
date: 2026-07-03
excerpt: "Why and how I ported a two-year-old Emacs sobriety system to an Obsidian plugin."
tags: ["Obsidian", "TypeScript", "Indie Dev"]
---

## Why

For two years I ran a sobriety system in Emacs — scheduled reminders, urge timer, streak tracking. It worked, until Obsidian became the app I keep open all day.

## The port

- Emacs is only open when coding. Obsidian is always open.
- Better reminder timing, easier check-ins.
- Data stays in plain Markdown.

## Tech

Obsidian plugins are essentially web apps: TypeScript + DOM API + Obsidian SDK.

Core modules:
- **Urge Timer**: countdown in status bar, cancel = relapse logged
- **Daily Reminder**: scheduled notification with catch-up on restart
- **Dashboard**: streak, success rate, weekly/monthly breakdown

## Key gotcha

Obsidian's `setInterval` pauses during note switching. Start timers in `onload`, not in view lifecycle.

## Ship

Submitted to Obsidian community store. Free, open source.
