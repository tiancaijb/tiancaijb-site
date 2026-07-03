---
title: "Emacs リマインダーシステム：禁欲 + 定期通知"
slug: emacs-reminder-systems
date: 2026-07-04
excerpt: "Emacs timer ベースの自律リマインダー、Emacs GUI 常駐。"
tags: ["Emacs", "自律", "習慣", "ツール"]
---

## Emacs で習慣を管理

Emacs GUI（Doom Emacs）を一日中起動している。だから Emacs にリマインダーを任せるのが最も自然な選択だ——時間になればポップアップする。

二つのシステム：

### ① sobriety-reminder（禁欲チェックイン）

Emacs の `run-with-timer` で実装：

- 毎日指定時間に `message` + `ding`
- Emacs GUI は常時稼働、リマインダーを逃さない
- データは org ファイルに記録

後に Obsidian プラグインに移植：[[sobriety-as-habit]]

### ② 汎用 timer-reminder（站桩、水分補給など）

同じ Emacs timer 機構、より広い用途：

- **站桩リマインダー** — 決まった時間に立禅
- **水分補給通知** — 水を飲め
- **任意のカスタム間隔** — Emacs Lisp で設定、変更も一瞬

### 技術的な実装

コアコードは最小限：

```elisp
;; 毎日 9 時に禁欲チェックイン
(run-at-time "09:00" (* 60 60 24) 'my/sobriety-reminder)

;; 站桩リマインダー（毎日7時）
(run-at-time "07:00" (* 60 60 24) 'my/zhanzhuang-reminder)
```

二つの原則：

1. **強制ではなく通知** — `ding` が鳴るだけ。行動するかはあなた次第。でもその音がずっと気になる。
2. **Emacs GUI 常駐** — [[my-workflow|WSL + Doom Emacs ワークフロー]] と一貫性あり。Emacs が動いている限り、リマインダーは届く。

習慣システムの設計哲学：[[sobriety-as-habit]]
知識管理について：[[knowledge-management-ai]]
タイムラインについて：[[emacs-timeline]]
