---
title: "My Development Workflow"
slug: my-workflow
date: 2026-07-04
excerpt: "WSL2 + Emacs + Doom Emacs + org-mode + GTD + pi-coding-agent + DeepSeek V4 Flash + LLM Wiki."
tags: ["workflow", "indie-dev", "Emacs"]
---

## Current Setup

My daily dev environment, each layer carefully chosen:

| Layer | Tool | Why |
|-------|------|-----|
| OS | **WSL2** (Windows Subsystem for Linux) | Native Linux on Windows |
| Editor | **Emacs** + **Doom Emacs** | Emacs is the platform, Doom is the accelerator |
| Notes | **org-mode** + **org-roam** | Plain text, bidirectional links, unmatched |
| Task Management | **org-agenda** + **GTD** | Habit tracking, reminders, TODO management |
| AI Assist | **pi-coding-agent** + DeepSeek V4 Flash API | Inside Emacs, never leave the editor |
| Knowledge | **LLM Wiki** | Auto-summarize Bilibili/YouTube to org-roam |

## Emacs first, Obsidian for learning

My daily driver is still **Emacs**. Knowledge base in org-roam, TODO management, daily notes — all in Emacs.

So why build Obsidian plugins? Two reasons:

1. **Gain indie dev experience** — Obsidian plugin dev is TypeScript + frontend ecosystem. It gives me real users, a release pipeline, community engagement. You don't get that in pure Emacs land.
2. **Validate ideas** — Obsidian has a large user base. Someone actually downloads and uses your plugin. That's more motivating than building things only for yourself.

## Why indie dev

I don't want to be a cog in a big corp assembly line forever. Indie dev means:

- **Ownership** — the code, product, users are mine
- **Small team efficiency** — one person can do a lot without alignment meetings
- **Direct with users** — they tell you what they need, you decide what to build
- **Location freedom** — all you need is an internet connection

Indie dev isn't the easy path — but it's **my path**.

## LLM Wiki: my most-used knowledge workflow

Of all the tools I use, [[llm-wiki-workflow|LLM Wiki]] is what I reach for most every day. The core loop is simple: find a good video → copy link → run script → LLM auto-summarizes → writes to org-roam → permanently searchable.

I couldn't do this before — I'd bookmark videos and never open them again. Now every piece of knowledge lives in my knowledge base, directly retrievable by any AI agent.

This follows the [[knowledge-management-ai|AI-era knowledge management]] philosophy exactly: don't memorize, make it retrievable.

On costs: [[indie-dev-zero-cost]]
On building tools: [[why-build-tools]]
On GTD systems: [[my-gtd-system]]
On timeline system: [[emacs-timeline]]
On Emacs reminders: [[emacs-reminder-systems]]
