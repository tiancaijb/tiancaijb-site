export interface Note {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
  linkedNotes?: string[]
}

export const notes: Note[] = [
  {
    slug: "my-workflow",
    title: "我的开发工作流",
    date: "2026-07-04",
    excerpt: "WSL2 + Doom Emacs + pi-coding-agent + DeepSeek V4 Flash + org-roam。",
    tags: ["工作流", "indie-dev", "Emacs"],
    content: `
## 当前配置

这是我的日常开发环境，每一层都经过反复筛选：

| 层 | 工具 | 原因 |
|------|------|------|
| 系统 | **WSL2** (Windows) | 原生 Linux 体验，无需双系统 |
| 编辑器 | **Doom Emacs** | 27 年积累的生态，org-mode 无可替代 |
| AI 辅助 | **pi-coding-agent** + DeepSeek V4 Flash API | 在 Emacs 内完成，不离开编辑器 |
| 笔记 | **org-roam** | 双链笔记鼻祖，纯文本 |
| 知识库 | **LLM Wiki skill** | 自动总结 B站/YouTube 视频到 org-roam |

## Emacs 为主，Obsidian 为辅

我目前主力编辑器仍然是 **Emacs**。org-roam 里的知识库、TODO 管理、日常笔记都在 Emacs 里。

那为什么做 Obsidian 插件？两个原因：

1. **获取独立开发经验**——Obsidian 插件开发是 TypeScript + 前端生态，能接触到真实用户、发布流程、社区运营。这些经验在纯 Emacs 生态里得不到。
2. **验证想法**——Obsidian 的用户群大，一个插件有人下载、有人反馈，比在 Emacs 里自娱自乐更有动力。

## 为什么想从事独立开发

我不想一辈子做大厂流水线上的螺丝钉。独立开发意味着：

- **ownership**——代码、产品、用户，都是我的
- **小团队效率**——一个人可以做很多事情，不需要开会对齐
- **直接面对用户**——用户告诉你需求，你决定做什么
- **地理自由**——有网络就能工作

独立开发不是轻松的路，但它是**属于我的路**。

## LLM Wiki：最重要的知识工作流

在所有工具中，[[llm-wiki-workflow|LLM Wiki]] 是我每天用得最多的。它的核心很简单：看到好视频 → 复制链接 → 运行脚本 → LLM 自动总结 → 写入 org-roam → 永久可查。

这件事以前我做不了——收藏了视频就再也没打开过。现在所有知识都在我的知识库里，任何 AI agent 都能直接检索。

这和 [[knowledge-management-ai|AI 时代知识管理]]的理念完全一致：不靠记忆，靠检索。

关于成本：[[indie-dev-zero-cost]]
关于工具观：[[why-build-tools]]
关于 GTD 系统：[[my-gtd-system]]
关于时间轴系统：[[emacs-timeline]]
`,
  },
  {
    slug: "my-gtd-system",
    title: "我的两套 GTD 系统",
    date: "2026-07-04",
    excerpt: "org-agenda 管生活，agent-projects.org 管开发。",
    tags: ["GTD", "工作流", "Emacs", "org-mode"],
    content: `
## ## 两套系统，各司其职

我同时维护两套系统，但不是你想的那种 GTD：

### ① Emacs org-agenda（个人事务）

文件在 \`~/org/todo.org\`，用 \`org-agenda\` 管理日常：

- **习惯追踪**——戒色打卡、站桩、冥想
- **定时提醒**——Emacs timer + message/ding
- **个人 TODO**——买东西、缴费、杂事
- **笔记整理**——org-roam 随手记，定期回顾

### ② agent-projects.org（agent 任务日志）

文件在 \`~/org/dev/agent-projects.org\`，由 pi-coding-agent 维护。这个文件不是给我自己看的，是**给 agent 用的**：

- 每次对话开始时，agent 先读这个文件，了解当前项目的上下文
- 每个任务前，agent 先写 **TODO**，执行完再标记 **DONE**
- 状态：TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- 优先级：[#A] [#B] [#C]
- 每次改动后自动 git commit

核心原则：**先写 TODO 再动手**——这是 agent 的工作纪律。

### 两者区别

- org-agenda 是**我的**——我给自己安排的事
- agent-projects 是**给 agent 的**——记录当前项目上下文，让 agent 知道该做什么
- AI 只读写 agent-projects，不碰我的个人 agenda

见我的工作流全貌：[[my-workflow]]
关于 Emacs 提醒系统：[[emacs-reminder-systems]]
我还把 GTD 工作流移植到了 [GTD Workflow 插件](https://github.com/tiancaijb/obsidian-gtd)。
`,
  },
  {
    slug: "emacs-reminder-systems",
    title: "Emacs 提醒系统：戒色 + 定时提醒",
    date: "2026-07-04",
    excerpt: "基于 Emacs timer 的自律提醒体系，Emacs GUI 常驻后台。",
    tags: ["Emacs", "自律", "习惯", "工具"],
    content: `
## 用 Emacs 管习惯

我每天开着 Emacs GUI（Doom Emacs），Emacs 常驻后台。所以让 Emacs 管提醒，是最自然的选择——到点它就弹出来。

两套系统：

### ① sobriety-reminder（戒色打卡提醒）

Emacs \`run-with-timer\` 实现的定时打卡提醒：

- 每天指定时间弹出 \`message\` 通知 + \`ding\` 响铃
- Emacs GUI 一直在，提醒永远不会错过
- 数据记录到 org 文件，方便追踪

后来移植到了 Obsidian 插件，见 [[sobriety-as-habit]]。

### ② 通用 timer-reminder（站立提醒等）

也是 Emacs timer 机制，用途更广：

- **站桩提醒**——到点提醒去站桩
- **喝水提醒**——定时通知喝水
- **任意自定义间隔**——用 Emacs Lisp 配置，改起来极快

### 技术实现

核心代码很简单：

\`\`\`elisp
;; 戒色每日打卡提醒
(run-at-time "09:00" (* 60 60 24) 'my/sobriety-reminder)

;; 站桩提醒（每天固定时间）
(run-at-time "07:00" (* 60 60 24) 'my/zhanzhuang-reminder)
\`\`\`

两条原则：

1. **提醒即可，不强制**——到了时间弹一下，做不做随你。但那个 \`ding\` 的声音会一直提醒你。
2. **Emacs GUI 常驻**——和 [[my-workflow|WSL + Doom Emacs 工作流]] 一致，Emacs 开着，提醒就在。

关于我的习惯系统设计哲学：[[sobriety-as-habit]]
关于知识管理：[[knowledge-management-ai]]
关于时间轴：[[emacs-timeline]]
`,
  },
  {
    slug: "knowledge-management-ai",
    title: "AI 时代的知识管理",
    date: "2026-07-04",
    excerpt: "不需要记忆，让 AI 能检索到就够了。",
    tags: ["知识管理", "AI", "方法论"],
    content: `
## Anki 的时代过去了

Anki、间隔重复、抽认卡——这些工具在 AI 出现之前是知识管理的核心。

它们只有两个场景还有价值：

1. **考试**——需要精确记忆考点
2. **学语言**——词汇量是最基础的砖块

除此之外呢？不再需要了。

## AI 时代的新原则：可检索 > 可记忆

过去我们花大量时间「把知识记在脑子里」。

现在你应该花时间「把知识写得让 AI 能检索到」。

两件事：

1. **写下来**——不要相信你的大脑。记到 org-roam、笔记、Markdown 里。
2. **让它可检索**——结构化、加标签、建立链接。AI 要能精确找到你几个月前写的某段话。

这就是我做 [[my-workflow|LLM Wiki]] 的原因：自动总结视频 → 写入 org-roam → 随时查询。

## 数字花园也是这个逻辑

每一篇笔记不是为了「背下来」，而是为了「需要的时候能找到」。

双链的作用不是帮你记忆——是帮 AI（和你未来的自己）建立上下文。
`,
  },
  {
    slug: "llm-wiki-workflow",
    title: "LLM Wiki：我的知识库工作流",
    date: "2026-07-04",
    excerpt: "自动抓取 B站/YouTube 字幕 → LLM 总结 → org-roam 笔记 → 随时查询。",
    tags: ["LLM Wiki", "工作流", "Emacs", "org-roam", "知识管理"],
    content: `
## 最核心的工作流

LLM Wiki 是我最常用的工具之一。每天我都在用它——看视频、总结、存入知识库。

工作流很简单：

> 复制视频链接 → 运行脚本 → LLM 自动总结 → 写入 org-roam → 永久可查

就这一个流程，覆盖了 B 站和 YouTube。

## 技术实现

核心脚本 \`ingest_bv.py\` 自动处理：

1. 识别平台（B站 / YouTube）
2. 下载字幕
3. 调用 LLM 总结（内容分块 + 综合）
4. 写入 org-roam 笔记（带 OKF 元数据）
5. 更新 index.org + log.org
6. git commit

另外还有一个 \`ingest_article.py\` 处理图文文章。

## 为什么 LLM Wiki 对我这么重要

- **知识不流失**——以前看到好视频，收藏了就再也不看了。现在自动总结进知识库，随时能搜到。
- **关联发现**——org-roam 的链接机制让笔记自动互联，经常发现两段知识之间的联系。
- **AI 可检索**——所有内容结构化、带标签、带链接，AI agent 可以直接查询。

这和 [[knowledge-management-ai|AI 时代知识管理]] 的理念完全一致：不是记住，而是让 AI 能检索。
`,
  },
  {
    slug: "emacs-timeline",
    title: "Emacs 时间轴系统（timeline-html.el）",
    date: "2026-07-04",
    excerpt: "基于 org-clock CLOCK 记录，一键生成今日时间轴 HTML。",
    tags: ["Emacs", "时间管理", "工具"],
    content: `
## timeline-html.el

位置：\`~/.config/doom/lisp/timeline-html.el\`

参考 obsidian-gtd TimelineView 的设计实现。读取 org-clock 记录，生成 HTML 时间轴并用浏览器打开。

## 加载方式

\`\`\`elisp
;; config.el
(condition-case nil (load "/home/wangy/.config/doom/lisp/timeline-html") (error nil))
(map! :leader
      :desc "HTML timeline" "t h" #'tlh-show)
\`\`\`

快捷键：\`SPC t h\`

## 数据来源：org-clock

\`\`\`org
* TODO 写代码 [#A]
  CLOCK: [2026-07-04 Sat 09:00]--[2026-07-04 Sat 10:30] => 1:30
\`\`\`

\`SPC c i\`（org-clock-in）开始，\`SPC c o\`（org-clock-out）停止。

## 颜色匹配

\`\`\`elisp
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
\`\`\`

按任务名子串匹配，不匹配则默认紫色。

## 处理流程

\`\`\`elisp
;; 1. 扫描 ~/org/*.org，提取今天的 CLOCK 行
(defun tlh--collect-today ()
  (dolist (f (directory-files "~/org/" t "\\.org$"))
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
\`\`\`

## 输出

生成 \`~/tlh-YYYY-MM-DD.html\`，自动调用 \`explorer.exe\` 在 Windows 浏览器打开。
深色主题，6AM-11PM 时间轴，每个 CLOCK 区块按时间比例定位。
`,
  },
  {
    slug: "why-build-tools",
    title: "为什么要自己造工具",
    date: "2026-07-01",
    excerpt: "用现成的还是自己写？我的选择标准。",
    tags: ["工具观", "indie-dev"],
    content: `
## 工具的两面

现成的工具快，但永远不完全贴合你的需求。自己写的慢，但每个细节都服务于你。

我有一条简单的分界线：

- **核心流程**——自己写。每日打卡、冲动计时、知识管理。这些是我每天用的，值得做到 100% 贴合。
- **基础设施**——用现成的。部署、数据库、域名管理。这些是 commodity，不值得自己造轮子。

## 工具即思考

工具不只是工具。你用的工具塑造你的思维方式。

用 Notion 写笔记和用 Vim 写笔记，思考方式完全不同。前者让你填空，后者让你构建。

所以我倾向于自己造工具——不是为了酷，而是为了在工具中保留我自己的思考方式。

参见：[[my-workflow]] 和 [[indie-dev-zero-cost]]
`,
  },
  {
    slug: "indie-dev-zero-cost",
    title: "独立开发者零成本方案",
    date: "2026-07-04",
    excerpt: "受一条 B 站视频启发，整理了一份全免费的开发上线方案。",
    tags: ["indie-dev", "工具"],
    content: `
## 穷鬼套餐

受 [[BV1kY5XzrE6L|一条 B 站视频]] 启发，整理的全免费独立开发方案：

| 环节 | 工具 |
|------|------|
| 框架 | Next.js |
| 代码 | GitHub（私有仓库免费） |
| 部署 | Vercel（Hobby 计划） |
| 数据库 | Neon / Supabase（500MB 免费） |
| 域名 | NameSilo（.xyz 约 $0.99/年） + Cloudflare |
| AI 辅助 | Claude + OpenRouter 免费 API |
| 分析 | Microsoft Clarity |
| 邮件 | Resend（100封/天免费） |

## 我的配置

这个站就是这套方案。关于工具观，见 [[why-build-tools]]。

先跑起来再说，有真实用户再考虑升级。
`,
  },
  {
    slug: "sobriety-as-habit",
    title: "把戒色当成习惯系统来设计",
    date: "2026-07-03",
    excerpt: "不靠意志力，靠系统。从 Emacs 到 Obsidian，我怎么做打卡工具的。",
    tags: ["自律", "习惯", "Obsidian"],
    content: `
## 意志力有限

这是最基本的前提。任何依赖意志力的系统都注定失败——因为意志力是消耗品。

## 系统设计原则

1. **低 friction**：打卡只需点一下，不需要打开 app → 找功能 → 点菜单。
2. **即时反馈**：点完立刻看到连续天数，让大脑获得即时奖励。
3. **容错机制**：错过提醒时间？重启后还给一次补卡机会（在规定时间内）。
4. **视觉化**：仪表盘显示成功率和趋势，数据本身就是动力。

## 从 Emacs 到 Obsidian

之前用 Emacs 跑了一套戒色提醒系统，但 Emacs 只在写代码时开着。Obsidian 全天开着，提醒更及时——这就是移植的原因。

关于我的 Emacs 提醒系统：[[emacs-reminder-systems]]
我为什么更倾向自己造工具？见 [[why-build-tools]]。
`,
  },
]
