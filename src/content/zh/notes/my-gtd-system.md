---
title: "我的两套 GTD 系统"
slug: my-gtd-system
date: 2026-07-04
excerpt: "org-agenda 管生活，agent-projects.org 管开发。"
tags: ["GTD", "工作流", "Emacs", "org-mode"]
---

## ## 两套系统，各司其职

我同时维护两套系统，但不是你想的那种 GTD：

### ① Emacs org-agenda（个人事务）

文件在 `~/org/todo.org`，用 `org-agenda` 管理日常：

- **习惯追踪**——戒色打卡、站桩、冥想
- **定时提醒**——Emacs timer + message/ding
- **个人 TODO**——买东西、缴费、杂事
- **笔记整理**——org-roam 随手记，定期回顾

### ② agent-projects.org（agent 任务日志）

文件在 `~/org/dev/agent-projects.org`，由 pi-coding-agent 维护。这个文件不是给我自己看的，是**给 agent 用的**：

- 每次对话开始时，agent 先读这个文件，了解当前项目的上下文
- 每个任务前，agent 先写 **TODO**，执行完再标记 **DONE**
- 状态：TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- 优先级：[#A] [#B] [#C]
- 每次改动后自动 git commit

核心原则：**先写 TODO 再动手**——这是 agent 的工作纪律。

### 两者区别

- org-agenda 是**我的**——我给自己安排的事
- agent-projects 是**给 agent 的**——记录当前项目上下文，让 agent 知道该做什么
- AI 只读写 agent-projects，不碰我的个人 agenda

见我的工作流全貌：[[my-workflow]]
关于 Emacs 提醒系统：[[emacs-reminder-systems]]
我还把 GTD 工作流移植到了 [GTD Workflow 插件](https://github.com/tiancaijb/obsidian-gtd)。
