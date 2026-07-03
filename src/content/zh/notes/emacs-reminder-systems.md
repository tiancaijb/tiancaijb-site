---
title: "Emacs 提醒系统：戒色 + 定时提醒"
slug: emacs-reminder-systems
date: 2026-07-04
excerpt: "基于 Emacs timer 的自律提醒体系，Emacs GUI 常驻后台。"
tags: ["Emacs", "自律", "习惯", "工具"]
---

## 用 Emacs 管习惯

我每天开着 Emacs GUI（Doom Emacs），Emacs 常驻后台。所以让 Emacs 管提醒，是最自然的选择——到点它就弹出来。

两套系统：

### ① sobriety-reminder（戒色打卡提醒）

Emacs `run-with-timer` 实现的定时打卡提醒：

- 每天指定时间弹出 `message` 通知 + `ding` 响铃
- Emacs GUI 一直在，提醒永远不会错过
- 数据记录到 org 文件，方便追踪

后来移植到了 Obsidian 插件，见 [[sobriety-as-habit]]。

### ② 通用 timer-reminder（站立提醒等）

也是 Emacs timer 机制，用途更广：

- **站桩提醒**——到点提醒去站桩
- **喝水提醒**——定时通知喝水
- **任意自定义间隔**——用 Emacs Lisp 配置，改起来极快

### 技术实现

核心代码很简单：

```elisp
;; 戒色每日打卡提醒
(run-at-time "09:00" (* 60 60 24) 'my/sobriety-reminder)

;; 站桩提醒（每天固定时间）
(run-at-time "07:00" (* 60 60 24) 'my/zhanzhuang-reminder)
```

两条原则：

1. **提醒即可，不强制**——到了时间弹一下，做不做随你。但那个 `ding` 的声音会一直提醒你。
2. **Emacs GUI 常驻**——和 [[my-workflow|WSL + Doom Emacs 工作流]] 一致，Emacs 开着，提醒就在。

关于我的习惯系统设计哲学：[[sobriety-as-habit]]
关于知识管理：[[knowledge-management-ai]]
关于时间轴：[[emacs-timeline]]
