---
title: "二つの GTD システム"
slug: my-gtd-system
date: 2026-07-04
excerpt: "org-agenda は生活、agent-projects.org は開発。"
tags: ["GTD", "ワークフロー", "Emacs", "org-mode"]
---

## 二つのシステム、違う目的

二つのシステムを動かしているが、どちらも GTD というわけではない：

### ① Emacs org-agenda（個人用）

ファイル：`~/org/todo.org`、`org-agenda` で管理：

- **習慣トラッキング**——禁欲チェックイン、瞑想、站桩
- **定期リマインダー**——Emacs timer + message/ding
- **個人 TODO**——買い物、支払い、雑用
- **クイックノート**——org-roam でキャプチャ、定期レビュー

### ② agent-projects.org（agent タスクログ）

ファイル：`~/org/dev/agent-projects.org`、pi-coding-agent が管理。このファイルは自分のためではなく、**agent のため**：

- セッション開始時に agent が読み、プロジェクトのコンテキストを把握
- 各タスクの前に agent が **TODO** を書き、完了後に **DONE** をマーク
- 状態：TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- 優先度：[#A] [#B] [#C]
- 変更ごとに自動 git commit

核心のルール：**TODO を先に書いてから手を動かす**——これが agent の仕事の規律。

### 違い

- org-agenda は **自分のもの**——自分で計画するタスク
- agent-projects は **agent のもの**——プロジェクトのコンテキスト、agent が何をすべきか把握するため
- AI は agent-projects だけを操作し、個人の agenda には触れない

フルワークフロー：[[my-workflow]]
Emacs リマインダー：[[emacs-reminder-systems]]
