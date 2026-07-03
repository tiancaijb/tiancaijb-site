export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-sobriety-tracker-obsidian-plugin",
    title: "From Emacs to Obsidian: Porting a Sobriety Tracker Plugin",
    date: "2026-07-03",
    excerpt:
      "Why and how I ported a two-year-old Emacs sobriety system to an Obsidian plugin.",
    tags: ["Obsidian", "TypeScript", "Indie Dev"],
    content: `
## Why

For two years I ran a sobriety system in Emacs — scheduled reminders, urge timer, streak tracking. It worked, until Obsidian became the app I keep open all day.

## The port

- Emacs is only open when coding. Obsidian is always open.
- Better reminder timing, easier check-ins.
- Data stays in plain Markdown.

## Tech

Obsidian plugins are essentially web apps: TypeScript + DOM API + Obsidian SDK.

Core modules:
- **Urge Timer**: countdown in status bar, cancel = relapse logged
- **Daily Reminder**: scheduled notification with catch-up on restart
- **Dashboard**: streak, success rate, weekly/monthly breakdown

## Key gotcha

Obsidian's \`setInterval\` pauses during note switching. Start timers in \`onload\`, not in view lifecycle.

## Ship

Submitted to Obsidian community store. Free, open source.
`,
  },
  {
    slug: "indie-dev-zero-cost-stack",
    title: "The Broke Dev Stack: Ship for Free",
    date: "2026-07-04",
    excerpt:
      "A complete zero-cost development-to-deployment stack inspired by a Bilibili video.",
    tags: ["Indie Dev", "Tooling"],
    content: `
## Inspiration

A Bilibili video showed how to ship a complete app without spending a dime. The approach clicked with me.

## The full stack

| Layer | Tool |
|-------|------|
| Framework | Next.js |
| Code | GitHub |
| Deploy | Vercel |
| DB | Neon / Supabase |
| Domain | NameSilo + Cloudflare |
| AI Assist | Claude + OpenRouter |
| Analytics | Microsoft Clarity |
| Email | Resend |

## My setup

This very site runs on this stack. Next.js + Tailwind + Vercel, zero cost.

Same principle for future projects: free tier first, scale when real users show up.
`,
  },
]
