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
    title: "My Development Workflow",
    date: "2026-07-04",
    excerpt: "WSL2 + Doom Emacs + pi-coding-agent + DeepSeek V4 Flash + org-roam.",
    tags: ["workflow", "indie-dev", "Emacs"],
    content: `
## Current Setup

My daily dev environment, each layer carefully chosen:

| Layer | Tool | Why |
|-------|------|-----|
| OS | **WSL2** (Windows) | Native Linux experience, no dual boot |
| Editor | **Doom Emacs** | 27 years of ecosystem, org-mode unmatched |
| AI Assist | **pi-coding-agent** + DeepSeek V4 Flash API | Inside Emacs, never leave the editor |
| Notes | **org-roam** | OG bidirectional linking, plain text |
| Knowledge | **LLM Wiki skill** | Auto-summarize Bilibili/YouTube to org-roam |

## Emacs first, Obsidian for learning

My daily driver is still **Emacs**. Knowledge base in org-roam, TODO management, daily notes — all in Emacs.

So why build Obsidian plugins? Two reasons:

1. **Gain indie dev experience** — Obsidian plugin dev is TypeScript + frontend ecosystem. It gives me real users, a release pipeline, community engagement. You don't get that in pure Emacs land.
2. **Validate ideas** — Obsidian has a large user base. Someone actually downloads and uses your plugin. That's more motivating than building things only for yourself.

## Why indie dev

I don't want to be a cog in a big corp assembly line forever. Indie dev means:

- **Ownership** — the code, product, users are mine
- **Small team efficiency** — one person can do a lot without alignment meetings
- **Direct with users** — they tell you what they need, you decide what to build
- **Location freedom** — all you need is an internet connection

Indie dev isn't the easy path — but it's **my path**.

## LLM Wiki: my most-used knowledge workflow

Of all the tools I use, [[llm-wiki-workflow|LLM Wiki]] is what I reach for most every day. The core loop is simple: find a good video → copy link → run script → LLM auto-summarizes → writes to org-roam → permanently searchable.

I couldn't do this before — I'd bookmark videos and never open them again. Now every piece of knowledge lives in my knowledge base, directly retrievable by any AI agent.

This follows the [[knowledge-management-ai|AI-era knowledge management]] philosophy exactly: don't memorize, make it retrievable.

On costs: [[indie-dev-zero-cost]]
On building tools: [[why-build-tools]]
On GTD systems: [[my-gtd-system]]
On timeline system: [[emacs-timeline]]
On Emacs reminders: [[emacs-reminder-systems]]
`,
  },
  {
    slug: "my-gtd-system",
    title: "My Two GTD Systems",
    date: "2026-07-04",
    excerpt: "org-agenda for life, agent-projects.org for dev.",
    tags: ["GTD", "workflow", "Emacs", "org-mode"],
    content: `
## Two systems, different purposes

I run two systems, but not both for GTD:

### ① Emacs org-agenda (personal)

File at \`~/org/todo.org\`, managed via \`org-agenda\`:

- **Habit tracking** — sobriety check-ins, meditation, standing practice
- **Scheduled reminders** — Emacs timer + message/ding
- **Personal TODOs** — errands, bills, chores
- **Quick notes** — org-roam for capture, periodic review

### ② agent-projects.org (agent task log)

File at \`~/org/dev/agent-projects.org\`, maintained by pi-coding-agent. This file isn't for me — it's **for the agent**:

- At session start, the agent reads it to understand project context
- Before each task, the agent writes **TODO**, marks **DONE** after
- States: TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- Priorities: [#A] [#B] [#C]
- Auto git commit after every change

Key rule: **write TODO first, then act** — this is the agent's work discipline.

### The difference

- org-agenda is **mine** — things I plan for myself
- agent-projects is **for the agent** — project context, so the agent knows what to do
- AI only touches agent-projects, never my personal agenda

See my full workflow: [[my-workflow]]
On Emacs reminders: [[emacs-reminder-systems]]
`,
  },
  {
    slug: "emacs-reminder-systems",
    title: "Emacs Reminder Systems: Sobriety + Timer Reminders",
    date: "2026-07-04",
    excerpt: "Self-discipline reminders via Emacs timer, always-on Emacs GUI.",
    tags: ["Emacs", "self-discipline", "habits", "tools"],
    content: `
## Emacs for habit reminders

I keep Emacs GUI (Doom Emacs) running all day. So having Emacs manage reminders is the most natural choice — when it's time, it just pops up.

Two systems:

### ① sobriety-reminder (daily check-in)

Built with Emacs \`run-with-timer\`:

- Scheduled reminder fires \`message\` + \`ding\` at the set time
- Emacs GUI is always on, so reminders never miss
- Logs data to org files for tracking

Later ported to an Obsidian plugin: [[sobriety-as-habit]]

### ② Generic timer-reminder (zhanzhuang, water, etc.)

Same Emacs timer mechanism, broader use:

- **Meditation reminder** — scheduled practice
- **Water reminder** — drink up
- **Any custom interval** — configured in Emacs Lisp, easy to tweak

### Technical implementation

Core code is minimal:

\`\`\`elisp
;; Daily sobriety check-in at 9 AM
(run-at-time "09:00" (* 60 60 24) 'my/sobriety-reminder)

;; Zhanzhuang (standing meditation) reminder
(run-at-time "07:00" (* 60 60 24) 'my/zhanzhuang-reminder)
\`\`\`

Two principles:

1. **Remind, don't enforce** — \`ding\` at the right time, the choice is yours. But that sound keeps nudging you.
2. **Emacs GUI always on** — consistent with my [[my-workflow|WSL + Doom Emacs workflow]], as long as Emacs is running, reminders work.

On habit system design philosophy: [[sobriety-as-habit]]
On knowledge management: [[knowledge-management-ai]]
On timeline system: [[emacs-timeline]]
`,
  },
  {
    slug: "knowledge-management-ai",
    title: "Knowledge Management in the AI Era",
    date: "2026-07-04",
    excerpt: "Don't memorize. Make it retrievable by AI.",
    tags: ["knowledge management", "AI", "methodology"],
    content: `
## Anki's era is over

Anki, spaced repetition, flashcards — these were core to knowledge management before AI.

They're still useful in exactly two scenarios:

1. **Exams** — need precise recall of testable facts
2. **Language learning** — vocabulary is the basic building block

Everything else? No longer needed.

## AI era principle: retrievable > memorizable

We used to spend hours memorizing facts. Now you should spend that time making your knowledge retrievable by AI.

Two things:

1. **Write it down** — don't trust your brain. Put it in org-roam, notes, Markdown.
2. **Make it retrievable** — structure it, tag it, link it. AI needs to find that one paragraph you wrote months ago.

This is why I built [[my-workflow|LLM Wiki]]: auto-summarize videos → write to org-roam → query anytime.

## Digital garden follows the same logic

Every note here isn't for "memorizing" — it's for finding when needed.

Bidirectional links aren't for helping you remember. They help AI (and future you) build context.
`,
  },
  {
    slug: "llm-wiki-workflow",
    title: "LLM Wiki: My Knowledge Base Workflow",
    date: "2026-07-04",
    excerpt: "Auto-fetch Bilibili/YouTube subtitles → LLM summarize → org-roam → query anytime.",
    tags: ["LLM Wiki", "workflow", "Emacs", "org-roam", "knowledge management"],
    content: `
## My most-used workflow

LLM Wiki is one of my most-used tools. I use it daily — watch videos, summarize, store in the knowledge base.

The workflow is simple:

> Copy video link → run script → LLM auto-summarizes → write to org-roam → permanently searchable

Covers both Bilibili and YouTube in one flow.

## How it works

The core script \`ingest_bv.py\` handles everything:

1. Identify platform (Bilibili / YouTube)
2. Download subtitles
3. Call LLM to summarize (chunked + synthesized)
4. Write to org-roam note (with OKF metadata)
5. Update index.org + log.org
6. git commit

There's also \`ingest_article.py\` for text articles.

## Why it matters

- **Knowledge retention** — used to bookmark videos and never watch again. Now they're in my knowledge base, searchable anytime.
- **Serendipitous discovery** — org-roam's linking connects notes automatically. I often discover connections between pieces of knowledge.
- **AI-retrievable** — all content is structured, tagged, and linked. AI agents can query directly.

This follows the [[knowledge-management-ai|AI-era knowledge management]] philosophy exactly: don't memorize, make it retrievable.
`,
  },
  {
    slug: "emacs-timeline",
    title: "Emacs Timeline System (timeline-html.el)",
    date: "2026-07-04",
    excerpt: "Generate a visual HTML timeline from org-clock CLOCK records.",
    tags: ["Emacs", "time management", "tools"],
    content: `
## timeline-html.el

Location: \`~/.config/doom/lisp/timeline-html.el\`

Inspired by obsidian-gtd TimelineView. Reads org-clock records, generates an HTML timeline, opens in browser.

## Loading

\`\`\`elisp
;; config.el
(condition-case nil (load "/home/wangy/.config/doom/lisp/timeline-html") (error nil))
(map! :leader
      :desc "HTML timeline" "t h" #'tlh-show)
\`\`\`

Key: \`SPC t h\`

## Data source: org-clock

\`\`\`org
* TODO Write code [#A]
  CLOCK: [2026-07-04 Sat 09:00]--[2026-07-04 Sat 10:30] => 1:30
\`\`\`

\`SPC c i\` (org-clock-in) to start, \`SPC c o\` (org-clock-out) to stop.

## Color matching

\`\`\`elisp
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
\`\`\`

Substring match on task name, defaults to purple.

## Pipeline

\`\`\`elisp
;; 1. Scan ~/org/*.org for today's CLOCK lines
(defun tlh--collect-today ()
  (dolist (f (directory-files "~/org/" t "\\.org$"))
    ...))

;; 2. Merge adjacent same-task segments
(defun tlh--merge (records)
  ...)

;; 3. Generate HTML
(defun tlh--html (segments date-str)
  ;; 6AM-11PM, 42px/hour, absolute positioning
  ...)
\`\`\`

## Output

Writes \`~/tlh-YYYY-MM-DD.html\`, then runs \`explorer.exe\` to open in Windows browser.
Dark theme, 6AM-11PM timeline, CLOCK blocks positioned proportionally.
`,
  },
  {
    slug: "why-build-tools",
    title: "Why Build Your Own Tools",
    date: "2026-07-01",
    excerpt: "Off-the-shelf vs. custom — my decision framework.",
    tags: ["tool-building", "indie-dev"],
    content: `
## Two sides of tools

Off-the-shelf tools are fast, but never perfectly match your workflow. Custom tools take longer, but every detail serves you.

My rule of thumb:

- **Core workflow** — build it yourself. Daily check-ins, urge timer, knowledge management. I use these daily, worth optimizing to 100%.
- **Infrastructure** — use existing solutions. Deployment, databases, DNS. Commodities, not worth reinventing.

## Tools shape thinking

Tools aren't neutral. The tools you use shape how you think.

Writing notes in Notion vs. Vim — completely different thinking modes. One asks you to fill forms, the other asks you to construct.

That's why I lean toward building my own tools. Not for the cool factor, but to preserve my own way of thinking in the tools I use.

See also: [[my-workflow]], [[my-gtd-system]], and [[indie-dev-zero-cost]]
`,
  },
  {
    slug: "indie-dev-zero-cost",
    title: "Zero-Cost Indie Dev Stack",
    date: "2026-07-04",
    excerpt: "A fully free development-to-deployment stack inspired by a Bilibili video.",
    tags: ["indie-dev", "tooling"],
    content: `
## The Broke Dev Stack

Inspired by [[why-build-tools|my tool-building philosophy]], here's the full free stack:

| Layer | Tool |
|-------|------|
| Framework | Next.js |
| Hosting | GitHub (free private repos) |
| Deploy | Vercel (Hobby) |
| Database | Neon / Supabase (500MB free) |
| Domain | NameSilo ($0.99 .xyz) + Cloudflare |
| AI Assist | Claude + OpenRouter free API |
| Analytics | Microsoft Clarity |
| Email | Resend (100/day free) |

## My Setup

This very site runs on this stack. See [[my-workflow]] for my full daily setup.

Ship first, optimize later when there are real users.
`,
  },
  {
    slug: "sobriety-as-habit",
    title: "Sobriety as a Habit System",
    date: "2026-07-03",
    excerpt: "Don't rely on willpower. Design a system. How I built check-in tools from Emacs to Obsidian.",
    tags: ["self-discipline", "habits", "Obsidian"],
    content: `
## Willpower is finite

This is the fundamental premise. Any system that relies on willpower is doomed — willpower is a consumable resource.

## System design principles

1. **Low friction**: One tap to check in. No app → find feature → navigate menu.
2. **Immediate feedback**: See your streak instantly after check-in. Your brain craves that reward.
3. **Forgiveness**: Missed the reminder? You get a catch-up window after reopening.
4. **Visualization**: Dashboard shows success rate and trends. The data itself becomes motivation.

## From Emacs to Obsidian

I used to run a sobriety reminder system in Emacs. Problem: Emacs is only open when coding. Obsidian is open all day. That alone made the port worthwhile.

On why I build my own tools: [[why-build-tools]]
My Emacs reminder systems: [[emacs-reminder-systems]]
For my full workflow: [[my-workflow]]
`,
  },
]
