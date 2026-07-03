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

On costs: [[indie-dev-zero-cost]]
On building tools: [[why-build-tools]]
On GTD systems: [[my-gtd-system]]
`,
  },
  {
    slug: "my-gtd-system",
    title: "My Two GTD Systems",
    date: "2026-07-04",
    excerpt: "org-agenda for life, agent-projects.org for dev.",
    tags: ["GTD", "workflow", "Emacs", "org-mode"],
    content: `
## Two systems, one purpose

I run two GTD systems in parallel, with clear division:  

### ① Emacs org-agenda (personal)

File at \`~/org/todo.org\`, managed via \`org-agenda\`:

- **Habit tracking** — sobriety check-ins, meditation, standing practice
- **Scheduled reminders** — Emacs timer + message/ding, no desktop needed
- **Personal TODOs** — errands, bills, chores
- **Quick notes** — org-roam for capture, periodic review

Key advantage: **never leave the keyboard in Emacs**.  

### ② agent-projects.org (dev projects)

File at \`~/org/dev/agent-projects.org\`, maintained by pi-coding-agent:

- **State system** — TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- **Priority** — [#A] [#B] [#C]
- **Workflow** — read TODO at session start → mark done → commit update
- **Log** — operation log tracks every change

Key rule: **write TODO first, then act**.  

### How they relate

- org-agenda: **what I should do** — life, habits, long-term goals
- agent-projects: **what I'm building** — dev projects, features, releases
- AI only touches agent-projects, never my personal agenda

See my full workflow: [[my-workflow]]
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
For my full workflow: [[my-workflow]]
`,
  },
]
