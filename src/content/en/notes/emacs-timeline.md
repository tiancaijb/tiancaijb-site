---
title: "Emacs Timeline System (timeline-html.el)"
slug: emacs-timeline
date: 2026-07-04
excerpt: "Generate a visual HTML timeline from org-clock CLOCK records."
tags: ["Emacs", "time management", "tools"]
---

## timeline-html.el

Location: `~/.config/doom/lisp/timeline-html.el`

Inspired by obsidian-gtd TimelineView. Reads org-clock records, generates an HTML timeline, opens in browser.

## Loading

```elisp
;; config.el
(condition-case nil (load "/home/wangy/.config/doom/lisp/timeline-html") (error nil))
(map! :leader
      :desc "HTML timeline" "t h" #'tlh-show)
```

Key: `SPC t h`

## Data source: org-clock

```org
* TODO Write code [#A]
  CLOCK: [2026-07-04 Sat 09:00]--[2026-07-04 Sat 10:30] => 1:30
```

`SPC c i` (org-clock-in) to start, `SPC c o` (org-clock-out) to stop.

## Color matching

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

Substring match on task name, defaults to purple.

## Pipeline

```elisp
;; 1. Scan ~/org/*.org for today's CLOCK lines
(defun tlh--collect-today ()
  (dolist (f (directory-files "~/org/" t "\.org$"))
    ...))

;; 2. Merge adjacent same-task segments
(defun tlh--merge (records)
  ...)

;; 3. Generate HTML
(defun tlh--html (segments date-str)
  ;; 6AM-11PM, 42px/hour, absolute positioning
  ...)
```

## Output

Writes `~/tlh-YYYY-MM-DD.html`, then runs `explorer.exe` to open in Windows browser.
Dark theme, 6AM-11PM timeline, CLOCK blocks positioned proportionally.
