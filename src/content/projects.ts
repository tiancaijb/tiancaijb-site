export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  url: string
  github?: string
  tags: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "sobriety-tracker",
    title: "Sobriety Tracker",
    tagline: "Obsidian 戒色打卡插件",
    description:
      "An Obsidian plugin for sobriety recovery tracking. Features an urge timer with countdown, daily check-in reminders with missed-reminder catch-up, a dashboard with streak & success rate visualization, victory celebration animations, and full bilingual support (EN/CN). All data stored in plain Markdown — no cloud, no accounts.",
    url: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    github: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    tags: ["Obsidian", "TypeScript", "Self-Improvement"],
    featured: true,
  },
  {
    slug: "ai-flow",
    title: "AI Flow",
    tagline: "AI 友好的工作流引擎",
    description:
      "A YAML-defined pipeline engine designed for AI consumption, not humans. DAG-based execution with plugin architecture, automatic retry with exponential backoff, template engine ({{key}} expressions), and built-in nodes for RSS, LLM, CSV, HTTP, filter, and delay. Error messages optimized for AI readability.",
    url: "https://github.com/tiancaijb/ai-flow",
    github: "https://github.com/tiancaijb/ai-flow",
    tags: ["Python", "Workflow", "AI"],
    featured: true,
  },
  {
    slug: "llm-wiki",
    title: "LLM Wiki",
    tagline: "Karpathy 风格知识库",
    description:
      "A personal knowledge base built on Karpathy-style LLM Wiki principles, powered by Emacs + org-roam. Automatically ingests Bilibili and YouTube video subtitles, summarizes with LLM, and organizes into interconnected org-roam notes with OKF (Open Knowledge Format) alignment.",
    url: "https://github.com/tiancaijb/llm-wiki",
    github: "https://github.com/tiancaijb/llm-wiki",
    tags: ["Emacs", "org-roam", "Knowledge Base"],
    featured: true,
  },
]
