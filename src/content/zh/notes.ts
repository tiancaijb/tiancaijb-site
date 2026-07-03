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

关于成本：[[indie-dev-zero-cost]]
关于工具观：[[why-build-tools]]
关于 GTD 系统：[[my-gtd-system]]
关于 AI 时代知识管理：[[knowledge-management-ai]]
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
## 两套系统，各司其职

我同时维护两套 GTD 系统，分工明确：

### ① Emacs org-agenda（个人事务）

文件在 \`~/org/todo.org\`，用 \`org-agenda\` 管理日常：

- **习惯追踪**——戒色打卡、站桩、冥想
- **定时提醒**——Emacs timer + message/ding，不开桌面也能弹
- **个人 TODO**——买东西、缴费、杂事
- **笔记整理**——org-roam 随手记，定期回顾

这套系统的核心优势：**在 Emacs 里不需要离开键盘**。

### ② agent-projects.org（开发项目）

文件在 \`~/org/dev/agent-projects.org\`，由 pi-coding-agent 维护：

- **状态体系**——TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- **优先级**——[#A] [#B] [#C]
- **工作流**——每次对话先读 TODO → 完成标记 → commit 更新
- **日志**——操作日志记录每次改动

这套系统的核心原则：**先写 TODO 再动手**。

### 两者关系

- org-agenda 管「我要做什么」——生活、习惯、长期目标
- agent-projects 管「正在做什么」——开发项目、功能点、发布计划
- AI 只操作 agent-projects，不动我的个人 agenda

见我的工作流全貌：[[my-workflow]]
关于 Emacs 提醒系统：[[emacs-reminder-systems]]
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

- **久坐提醒**——每 30 分钟提示站起来活动
- **站桩提醒**——到点提醒去站桩
- **喝水提醒**——定时通知喝水
- **任意自定义间隔**——用 Emacs Lisp 配置，改起来极快

### 技术实现

核心代码很简单：

\`\`\`elisp
;; 戒色每日打卡提醒
(run-at-time "09:00" (* 60 60 24) 'my/sobriety-reminder)

;; 站立提醒（每 30 分钟）
(run-with-timer (* 30 60) (* 30 60) 'my/stand-up-reminder)
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
    slug: "emacs-timeline",
    title: "Emacs 时间轴系统",
    date: "2026-07-04",
    excerpt: "在 Emacs 里直观记录时间，不打断心流。",
    tags: ["Emacs", "时间管理", "工具"],
    content: `
## 为什么做时间轴

番茄钟对我来说太死板了。我不想被 25 分钟打断，我想要：

- 开始做一件事时记下时间
- 切换任务时自动记录跨度
- 回头看时能看到一天的时间流向

## 实现思路

在 Emacs 里用一个简单的时间轴 buffer：

\`\`\`
09:00 ───── 开始写代码
09:45    ├ 查资料 (15m)
10:30 ───── 戒色打卡
10:35 ───── 写笔记
12:00 ───── 午饭
\`\`\`

每一条就是一个时间点 + 事件。跨度的通过缩进来表示。

## 为什么要放在 Emacs 里

- 不需要切换窗口——在 Emacs 里按个快捷键就记录了
- 和 [[my-gtd-system|org-agenda]] 联动——TODO 完成时自动打时间戳
- 和 [[emacs-reminder-systems|timer-reminder]] 联动——提醒时也记录
- 数据是纯文本 org 格式，随便处理

## 用法

\`\`\`elisp
;; 记录一个时间点
M-x timeline/record-at-point

;; 查看今天的时间轴
M-x timeline/show-today
\`\`\`

时间轴不是为了精确到秒——是为了回答「我今天做了什么」。
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
