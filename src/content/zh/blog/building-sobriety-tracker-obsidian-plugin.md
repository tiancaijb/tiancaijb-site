---
title: "从 Emacs 到 Obsidian：我为什么移植了一个戒色打卡插件"
slug: building-sobriety-tracker-obsidian-plugin
date: 2026-07-03
excerpt: "把一个用了两年的 Emacs 戒色系统移植到 Obsidian 插件的过程、思考和一些技术细节。"
tags: ["Obsidian", "TypeScript", "Indie Dev"]
---

## 起因

两年前我用 Emacs 写了一套戒色系统：定时提醒打卡、冲动计时器、连续天数统计。一直够用，直到 Obsidian 成了我每天开着的工具。

## 为什么移植

- Emacs 只在 coding 时开着，Obsidian 全天开着
- 提醒更及时，打卡更方便
- 数据用 Markdown 存，完全自制

## 技术选型

Obsidian 插件本质就是一个修改过的 web app：TypeScript + 原生 DOM 操作 + Obsidian API。

核心模块：
- **Urge Timer**：倒计时 + 状态栏显示，取消 = 破戒记录
- **Daily Reminder**：定时通知，重启后还有容差补发机制
- **Dashboard**：连续天数、成功率、周/月分解

## 最大的坑

Obsidian 的 `setInterval` 在笔记切换时会暂停。提醒逻辑要从 `onload` 里启动，不能依赖 view 生命周期。

## 上线

提交到 Obsidian 社区插件市场审核后上线。零成本，全免费。
