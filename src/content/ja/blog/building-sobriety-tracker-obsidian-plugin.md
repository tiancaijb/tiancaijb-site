---
title: "Emacs から Obsidian へ：禁欲トラッカープラグイン移植記"
slug: building-sobriety-tracker-obsidian-plugin
date: 2026-07-03
excerpt: "2年使ってきた Emacs 禁欲システムを Obsidian プラグインに移植した理由と過程。"
tags: ["Obsidian", "TypeScript", "Indie Dev"]
---

## きっかけ

2年間、Emacs で禁欲システムを動かしていた。定時リマインダー、衝動タイマー、連続日数記録。十分使えていたが、Obsidian が毎日開くツールになった。

## 移植の理由

- Emacs はコーディング中だけ。Obsidian は一日中。
- リマインダーが届きやすく、チェックインも簡単。
- データは Markdown で完全に自分管理。

## 技術面

Obsidian プラグインは Web アプリの一種：TypeScript + DOM API + Obsidian SDK。

コアモジュール：
- **Urge Timer**：ステータスバーにカウントダウン、キャンセル＝破戒記録
- **Daily Reminder**：通知＋再起動後のキャッチアップ機能
- **Dashboard**：連続日数、成功率、週/月内訳

## ハマりポイント

Obsidian の `setInterval` はノート切り替え時に一時停止する。`onload` でタイマーを起動すべし。

## リリース

Obsidian コミュニティストアに提出。無料、オープンソース。
