---
title: "我的开发工作流"
slug: my-workflow
date: 2026-07-04
excerpt: "WSL2 + Emacs + Doom Emacs + org-mode + GTD + pi-coding-agent + DeepSeek V4 Flash + LLM Wiki。"
tags: ["工作流", "indie-dev", "Emacs"]
---

## 当前配置

这是我的日常开发环境，每一层都经过反复筛选：

| 层 | 工具 | 原因 |
|------|------|------|
| 系统 | **WSL2** (Windows Subsystem for Linux) | 在 Windows 上跑原生 Linux |
| 编辑器 | **Emacs** + **Doom Emacs** | Emacs 本身是平台，Doom 是加速器 |
| 笔记系统 | **org-mode** + **org-roam** | 纯文本，双向链接，无可替代 |
| 任务管理 | **org-agenda** + **GTD** | 习惯追踪、定时提醒、TODO 管理 |
| AI 辅助 | **pi-coding-agent** + DeepSeek V4 Flash API | 在 Emacs 内完成，不离开编辑器 |
| 知识库 | **LLM Wiki** | 自动总结 B站/YouTube 视频到 org-roam |

## Emacs 为主，Obsidian 为辅

我目前主力编辑器仍然是 **Emacs**。org-roam 里的知识库、TODO 管理、日常笔记都在 Emacs 里。

那为什么做 Obsidian 插件？两个原因：

1. **获取独立开发经验**——Obsidian 插件开发是 TypeScript + 前端生态，能接触到真实用户、发布流程、社区运营。这些经验在纯 Emacs 生态里得不到。
2. **验证想法**——Obsidian 的用户群大，一个插件有人下载、有人反馈，比在 Emacs 里自娱自乐更有动力。

## 为什么想从事独立开发

我不想一辈子做大厂流水线上的螺丝钉。独立开发意味着：

- **ownership**——代码、产品、用户，都是我的
- **小团队效率**——一个人可以做很多事情，不需要开会对齐
- **直接面对用户**——用户告诉你需求，你决定做什么
- **地理自由**——有网络就能工作

独立开发不是轻松的路，但它是**属于我的路**。

## LLM Wiki：最重要的知识工作流

在所有工具中，[[llm-wiki-workflow|LLM Wiki]] 是我每天用得最多的。它的核心很简单：看到好视频 → 复制链接 → 运行脚本 → LLM 自动总结 → 写入 org-roam → 永久可查。

这件事以前我做不了——收藏了视频就再也没打开过。现在所有知识都在我的知识库里，任何 AI agent 都能直接检索。

这和 [[knowledge-management-ai|AI 时代知识管理]]的理念完全一致：不靠记忆，靠检索。

关于成本：[[indie-dev-zero-cost]]
关于工具观：[[why-build-tools]]
关于 GTD 系统：[[my-gtd-system]]
关于时间轴系统：[[emacs-timeline]]
