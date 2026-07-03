---
title: "LLM Wiki：知識ベースワークフロー"
slug: llm-wiki-workflow
date: 2026-07-04
excerpt: "Bilibili/YouTube 字幕を自動取得 → LLM 要約 → org-roam → いつでも検索。"
tags: ["LLM Wiki", "ワークフロー", "Emacs", "org-roam", "知識管理"]
---

## 最も使うワークフロー

LLM Wiki は私が最も頻繁に使うツールの一つ。毎日使っている——動画を見て、要約し、知識ベースに保存する。

ワークフローはシンプル：

> 動画リンクをコピー → スクリプト実行 → LLM が自動要約 → org-roam に保存 → 永久に検索可能

Bilibili と YouTube の両方をカバー。

## 仕組み

コアスクリプト `ingest_bv.py` がすべてを自動処理：

1. プラットフォーム識別（Bilibili / YouTube）
2. 字幕ダウンロード
3. LLM 要約（分割 + 統合）
4. org-roam ノートに書き込み（OKF メタデータ付き）
5. index.org + log.org 更新
6. git commit

`ingest_article.py` は記事用。

## なぜ重要か

- **知識の定着**——以前はブックマークして終わり。今は知識ベースに入って、いつでも検索できる。
- **偶然の発見**——org-roam のリンク機構が自動的につながりを作る。知識間の関係に気づくことがよくある。
- **AI が検索可能**——すべて構造化・タグ付け・リンク済み。AI エージェントが直接クエリできる。

これは [[knowledge-management-ai|AI 時代の知識管理]] の考え方と完全に一致する：暗記するな、検索可能にせよ。
