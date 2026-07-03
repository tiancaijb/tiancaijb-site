---
title: "LLM Wiki：我的知识库工作流"
slug: llm-wiki-workflow
date: 2026-07-04
excerpt: "自动抓取 B站/YouTube 字幕 → LLM 总结 → org-roam 笔记 → 随时查询。"
tags: ["LLM Wiki", "工作流", "Emacs", "org-roam", "知识管理"]
---

## 最核心的工作流

LLM Wiki 是我最常用的工具之一。每天我都在用它——看视频、总结、存入知识库。

工作流很简单：

> 复制视频链接 → 运行脚本 → LLM 自动总结 → 写入 org-roam → 永久可查

就这一个流程，覆盖了 B 站和 YouTube。

## 技术实现

核心脚本 `ingest_bv.py` 自动处理：

1. 识别平台（B站 / YouTube）
2. 下载字幕
3. 调用 LLM 总结（内容分块 + 综合）
4. 写入 org-roam 笔记（带 OKF 元数据）
5. 更新 index.org + log.org
6. git commit

另外还有一个 `ingest_article.py` 处理图文文章。

## 为什么 LLM Wiki 对我这么重要

- **知识不流失**——以前看到好视频，收藏了就再也不看了。现在自动总结进知识库，随时能搜到。
- **关联发现**——org-roam 的链接机制让笔记自动互联，经常发现两段知识之间的联系。
- **AI 可检索**——所有内容结构化、带标签、带链接，AI agent 可以直接查询。

这和 [[knowledge-management-ai|AI 时代知识管理]] 的理念完全一致：不是记住，而是让 AI 能检索。
