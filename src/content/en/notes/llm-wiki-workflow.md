---
title: "LLM Wiki: My Knowledge Base Workflow"
slug: llm-wiki-workflow
date: 2026-07-04
excerpt: "Auto-fetch Bilibili/YouTube subtitles → LLM summarize → org-roam → query anytime."
tags: ["LLM Wiki", "workflow", "Emacs", "org-roam", "knowledge management"]
---

## My most-used workflow

LLM Wiki is one of my most-used tools. I use it daily — watch videos, summarize, store in the knowledge base.

The workflow is simple:

> Copy video link → run script → LLM auto-summarizes → write to org-roam → permanently searchable

Covers both Bilibili and YouTube in one flow.

## How it works

The core script `ingest_bv.py` handles everything:

1. Identify platform (Bilibili / YouTube)
2. Download subtitles
3. Call LLM to summarize (chunked + synthesized)
4. Write to org-roam note (with OKF metadata)
5. Update index.org + log.org
6. git commit

There's also `ingest_article.py` for text articles.

## Why it matters

- **Knowledge retention** — used to bookmark videos and never watch again. Now they're in my knowledge base, searchable anytime.
- **Serendipitous discovery** — org-roam's linking connects notes automatically. I often discover connections between pieces of knowledge.
- **AI-retrievable** — all content is structured, tagged, and linked. AI agents can query directly.

This follows the [[knowledge-management-ai|AI-era knowledge management]] philosophy exactly: don't memorize, make it retrievable.
