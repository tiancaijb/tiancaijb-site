---
title: "開発ワークフロー"
slug: my-workflow
date: 2026-07-04
excerpt: "WSL2 + Emacs + Doom Emacs + org-mode + GTD + pi-coding-agent + DeepSeek V4 Flash + LLM Wiki。"
tags: ["ワークフロー", "indie-dev", "Emacs"]
---

## 現在の構成

私の日常的な開発環境：

| レイヤー | ツール | 理由 |
|---------|--------|------|
| OS | **WSL2** (Windows Subsystem for Linux) | Windows でネイティブ Linux |
| エディタ | **Emacs** + **Doom Emacs** | Emacs が基盤、Doom がアクセラレーター |
| ノート | **org-mode** + **org-roam** | プレーンテキスト、双方向リンク |
| タスク管理 | **org-agenda** + **GTD** | 習慣追跡、リマインダー、TODO 管理 |
| AI 支援 | **pi-coding-agent** + DeepSeek V4 Flash API | Emacs 内で完結 |
| 知識ベース | **LLM Wiki** | Bilibili/YouTube を自動要約して org-roam に |

## Emacs が主、Obsidian は従

メインエディタは今も **Emacs**。org-roam の知識ベース、TODO 管理、日次ノート——すべて Emacs。

ではなぜ Obsidian プラグインを作るのか？二つの理由：

1. **独立開発の経験を積むため**——Obsidian プラグイン開発は TypeScript ＋フロントエンド。本物のユーザー、リリースフロー、コミュニティとの交流が得られる。ピュア Emacs では得られない経験だ。
2. **アイデアの検証**——Obsidian には大きなユーザーベースがある。誰かが実際にダウンロードして使ってくれる。自分だけのためのツール作りより、はるかにモチベーションになる。

## 独立開発を志す理由

大企業の流れ作業の歯車で一生終わりたくない。独立開発とは：

- **所有権**——コード、プロダクト、ユーザーが自分のもの
- **少人数の効率**——一人でも多くのことができる、調整ミーティング不要
- **ユーザーとの直接対話**——彼らが必要なものを教え、あなたが作るものを決める
- **場所の自由**——インターネットがあればどこでも

独立開発は楽な道ではない——でも **私の道** だ。

## LLM Wiki：最も重要な知識ワークフロー

すべてのツールの中で、[[llm-wiki-workflow|LLM Wiki]] が私が毎日最も使うものだ。コアループはシンプル：良い動画を見つける → リンクをコピー → スクリプト実行 → LLM が自動要約 → org-roam に保存 → 永久に検索可能。

以前はできなかったことだ——動画をブックマークしても二度と開かなかった。今はすべての知識が知識ベースにあり、どんな AI エージェントでも直接検索できる。

これは [[knowledge-management-ai|AI 時代の知識管理]]の考え方と完全に一致する：暗記するな、検索可能にせよ。

[Karpathy の LLM Wiki コンセプト](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) に触発され、知識ベースを個人の記憶ツールから AI が検索可能なシステムへと変革した。

___

コストについて：[[indie-dev-zero-cost]]
ツール哲学について：[[why-build-tools]]
GTD システムについて：[[my-gtd-system]]
タイムラインシステム：[[emacs-timeline]]
Emacs リマインダーについて：[[emacs-reminder-systems]]
