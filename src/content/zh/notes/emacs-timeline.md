---
title: "Emacs 时间轴系统（timeline-html.el）"
slug: emacs-timeline
date: 2026-07-04
excerpt: "基于 org-clock CLOCK 记录，一键生成今日时间轴 HTML。"
tags: ["Emacs", "时间管理", "工具"]
---

## timeline-html.el

位置：`~/.config/doom/lisp/timeline-html.el`

参考 obsidian-gtd TimelineView 的设计实现。读取 org-clock 记录，生成 HTML 时间轴并用浏览器打开。

## 加载方式

```elisp
;; config.el
(condition-case nil (load "/home/wangy/.config/doom/lisp/timeline-html") (error nil))
(map! :leader
      :desc "HTML timeline" "t h" #'tlh-show)
```

快捷键：`SPC t h`

## 数据来源：org-clock

```org
* TODO 写代码 [#A]
  CLOCK: [2026-07-04 Sat 09:00]--[2026-07-04 Sat 10:30] => 1:30
```

`SPC c i`（org-clock-in）开始，`SPC c o`（org-clock-out）停止。

## 颜色匹配

```elisp
(defvar tlh-colors
  '(("#e74c3c" . "コード")   ;; 代码
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

按任务名子串匹配，不匹配则默认紫色。

## 处理流程

```elisp
;; 1. 扫描 ~/org/*.org，提取今天的 CLOCK 行
(defun tlh--collect-today ()
  (dolist (f (directory-files "~/org/" t "\.org$"))
    ;; 解析 heading 层级 + CLOCK 行
    ...))

;; 2. 合并相邻同任务时间段
(defun tlh--merge (records)
  ;; 时间连续且任务名相同则合并
  ...)

;; 3. 生成 HTML
(defun tlh--html (segments date-str)
  ;; 6AM-11PM，42px/小时，绝对定位
  ...)
```

## 输出

生成 `~/tlh-YYYY-MM-DD.html`，自动调用 `explorer.exe` 在 Windows 浏览器打开。
深色主题，6AM-11PM 时间轴，每个 CLOCK 区块按时间比例定位。
