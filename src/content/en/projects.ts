import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "sobriety-tracker",
    title: "Sobriety Tracker",
    tagline: "Obsidian plugin for recovery tracking",
    description:
      "An Obsidian plugin for sobriety recovery tracking. Features: urge timer with countdown, daily check-in with missed-reminder catch-up, dashboard with streak & success rate, victory celebration animations, and full bilingual support (EN/CN). All data in plain Markdown — no cloud, no accounts.",
    url: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    github: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    tags: ["Obsidian", "TypeScript", "Self-Improvement"],
    featured: true,
  },
  {
    slug: "ai-flow",
    title: "AI Flow",
    tagline: "AI-friendly workflow engine",
    description:
      "A YAML-defined pipeline engine designed for AI consumption. DAG execution with plugin architecture, automatic retry with exponential backoff, template engine, and built-in nodes for RSS, LLM, CSV, HTTP, filter, and delay. Error messages optimized for AI readability.",
    url: "https://github.com/tiancaijb/ai-flow",
    github: "https://github.com/tiancaijb/ai-flow",
    tags: ["Python", "Workflow", "AI"],
    featured: true,
  },
  {
    slug: "llm-wiki",
    title: "LLM Wiki",
    tagline: "Karpathy-style knowledge base",
    description:
      "A personal knowledge base built on Karpathy-style LLM Wiki principles. Powered by Emacs + org-roam. Automatically ingests and summarizes Bilibili/YouTube videos, organizes into interconnected notes with Open Knowledge Format alignment.",
    url: "https://github.com/tiancaijb/llm-wiki",
    github: "https://github.com/tiancaijb/llm-wiki",
    tags: ["Emacs", "org-roam", "Knowledge Base"],
    featured: true,
  },
  {
    slug: "gtd-workflow",
    title: "GTD Workflow",
    tagline: "Obsidian GTD plugin",
    description:
      "Org-mode style GTD workflow in Obsidian. Features: TODO/DONE states, [#A/#B/#C] priorities, scheduled/deadline dates, right-side Agenda view (today/this week/this month), quick capture Ctrl+Shift+C, task timer with CLOCK records, Pomodoro, 24h timeline view, per-task time stats with pie chart, CSV export, bilingual EN/CN.",
    url: "https://github.com/tiancaijb/obsidian-gtd",
    github: "https://github.com/tiancaijb/obsidian-gtd",
    tags: ["Obsidian", "TypeScript", "GTD"],
    featured: true,
  },
]
