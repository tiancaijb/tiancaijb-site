import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface NoteDoc {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
  linkedNotes?: string[]
}

export interface ProjectDoc {
  slug: string
  title: string
  tagline: string
  description: string
  url: string
  github?: string
  tags: string[]
  featured: boolean
}

export interface BlogDoc {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

export interface NowDoc {
  date: string
  items: string[]
}

const contentRoot = path.join(process.cwd(), "src/content")

function parse<T>(filePath: string): T & { content?: string } {
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const cleaned: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(data)) {
    cleaned[k] = v instanceof Date ? v.toISOString().slice(0, 10) : v
  }
  return { ...(cleaned as T), content: content || "" }
}

function listFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(f => f.endsWith(".md"))
}

// ── Notes ──

export function loadNotes(lang: string): NoteDoc[] {
  const dir = path.join(contentRoot, lang, "notes")
  return listFiles(dir)
    .map(f => parse<NoteDoc>(path.join(dir, f)))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function loadNote(lang: string, slug: string): NoteDoc | undefined {
  const fp = path.join(contentRoot, lang, "notes", `${slug}.md`)
  if (!fs.existsSync(fp)) return undefined
  return parse<NoteDoc>(fp)
}

// ── Projects ──

export function loadProjects(lang: string): ProjectDoc[] {
  const dir = path.join(contentRoot, lang, "projects")
  return listFiles(dir)
    .map(f => parse<ProjectDoc>(path.join(dir, f)))
}

export function loadProject(lang: string, slug: string): ProjectDoc | undefined {
  const fp = path.join(contentRoot, lang, "projects", `${slug}.md`)
  if (!fs.existsSync(fp)) return undefined
  return parse<ProjectDoc>(fp)
}

// ── Blog ──

export function loadBlogPosts(lang: string): BlogDoc[] {
  const dir = path.join(contentRoot, lang, "blog")
  return listFiles(dir)
    .map(f => parse<BlogDoc>(path.join(dir, f)))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function loadBlogPost(lang: string, slug: string): BlogDoc | undefined {
  const fp = path.join(contentRoot, lang, "blog", `${slug}.md`)
  if (!fs.existsSync(fp)) return undefined
  return parse<BlogDoc>(fp)
}

// ── Now ──

export function loadNow(lang: string): NowDoc | undefined {
  const fp = path.join(contentRoot, lang, "now.md")
  if (!fs.existsSync(fp)) return undefined
  return parse<NowDoc>(fp)
}
