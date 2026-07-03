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

See also: [[indie-dev-zero-cost]]
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

This very site runs on this stack. Next.js 16 + Tailwind v4 + Geist, deployed on Vercel. Zero cost.

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
`,
  },
]
