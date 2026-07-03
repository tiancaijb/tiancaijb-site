---
title: "Emacs タイムラインシステム（timeline-html.el）"
slug: emacs-timeline
date: 2026-07-04
excerpt: "org-clock の CLOCK 記録から今日の HTML タイムラインを自動作成。"
tags: ["Emacs", "時間管理", "ツール"]
---

## timeline-html.el

パス：`~/.config/doom/lisp/timeline-html.el`

obsidian-gtd TimelineView に触発されて実装。org-clock 記録を読み取り、HTML タイムラインを生成してブラウザで開く。

## ロード方法

```elisp
;; config.el
(condition-case nil (load "/home/wangy/.config/doom/lisp/timeline-html") (error nil))
(map! :leader
      :desc "HTML timeline" "t h" #'tlh-show)
```

キーバインド：`SPC t h`

## データソース：org-clock

```org
* TODO コードを書く [#A]
  CLOCK: [2026-07-04 Sat 09:00]--[2026-07-04 Sat 10:30] => 1:30
```

`SPC c i`（org-clock-in）開始、`SPC c o`（org-clock-out）停止。

## 色分け

```elisp
(defvar tlh-colors
  '(("#e74c3c" . "代码")
    ("#e67e22" . "吃饭")
    ("#f1c40f" . "听书")
    ("#2ecc71" . "学习")
    ("#3498db" . "看番")
    ("#9b59b6" . "游戏")
    ("#e84393" . "色情")
    ("#1abc9c" . "运动")
    ("#6c5ce7" . "洗漱")
    ("#00cec9" . "刷")
    ("#fd79a8" . "开会")
    ("#0abde3" . "睡眠")
    ("#48dbfb" . "休息")))

(defun tlh--color (name)
  (or (car (seq-find (lambda (p) (string-match-p (cdr p) name)) tlh-colors))
      "#6c5ce7"))
```

タスク名の部分一致、デフォルトは紫。

## 処理パイプライン

```elisp
;; 1. ~/org/*.org をスキャン、今日の CLOCK 行を抽出
(defun tlh--collect-today ()
  (dolist (f (directory-files "~/org/" t "\.org$"))
    ...))

;; 2. 隣接する同一タスクをマージ
(defun tlh--merge (records)
  ...)

;; 3. HTML 生成
(defun tlh--html (segments date-str)
  ;; 6AM-11PM, 42px/時間, 絶対配置
  ...)
```

## 出力

`~/tlh-YYYY-MM-DD.html` に書き出し、`explorer.exe` で Windows ブラウザを開く。
ダークテーマ、6AM-11PM タイムライン、CLOCK ブロックは時間比例で配置。
