import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";
import { renderMarkdown, extractWikiLinks } from "@/lib/markdown";
import { loadNotes } from "@/lib/content-loader";
import type { Lang } from "@/lib/i18n";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

async function getNotes(lang: Lang) {
  return loadNotes(lang);
}

export async function generateStaticParams() {
  const slugs: { lang: string; slug: string }[] = [];
  for (const lang of ["en", "zh", "ja"] as const) {
    const notes = await getNotes(lang);
    slugs.push(...notes.map((n: any) => ({ lang, slug: n.slug })));
  }
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLang = getLangOrFallback(lang);
  const notes = await getNotes(validLang);
  const note = notes.find((n: any) => n.slug === slug);
  if (!note) return {};
  return { title: note.title, description: note.excerpt };
}

export default async function NotePage({ params }: Props) {
  const { lang, slug } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);
  const allNotes = await getNotes(validLang);
  const note = allNotes.find((n: any) => n.slug === slug);
  if (!note) notFound();

  const html = await renderMarkdown(note.content, validLang, allNotes);

  // Compute backlinks: which notes link to this one?
  const backlinks = allNotes.filter((n: any) => {
    if (n.slug === slug) return false;
    const linked = extractWikiLinks(n.content);
    return linked.includes(slug);
  });

  // Forward links: wiki links in this note's content
  const forwardSlugs = extractWikiLinks(note.content);
  const forwardLinks = forwardSlugs
    .map((s: string) => allNotes.find((n: any) => n.slug === s))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Link
        href={`/${validLang}/notes`}
        className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:hover:text-zinc-200"
      >
        ← {dict.notes.title}
      </Link>

      <article className="mt-8">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {note.title}
          </h1>
          <div className="mt-2 flex items-center gap-3 text-xs text-zinc-400">
            <time>{note.date}</time>
            <span aria-hidden="true">·</span>
            <span>{note.excerpt}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {note.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose-content mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* 双向链接 / Bidirectional links */}
        <div className="mt-12 space-y-4">
          {/* Forward links */}
          {forwardLinks.length > 0 && (
            <div className="rounded-xl border border-emerald-200/60 p-5 dark:border-emerald-900/60">
              <h3 className="text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                → 正向链接 / linked from here
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {forwardLinks.map((linked: any) => (
                  <Link
                    key={linked.slug}
                    href={`/${validLang}/notes/${linked.slug}`}
                    className="rounded-lg border border-zinc-200/60 px-3 py-2 text-sm transition-colors hover:border-emerald-300/60 dark:border-zinc-800/60 dark:hover:border-emerald-700/60"
                  >
                    <span className="font-medium">{linked.title}</span>
                    <span className="ml-1 text-zinc-400">— {linked.excerpt}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Backlinks */}
          {backlinks.length > 0 && (
            <div className="rounded-xl border border-zinc-200/60 p-5 dark:border-zinc-800/60">
              <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                ← 反向链接 / linked from
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {backlinks.map((source: any) => (
                  <Link
                    key={source.slug}
                    href={`/${validLang}/notes/${source.slug}`}
                    className="rounded-lg border border-zinc-200/60 px-3 py-2 text-sm transition-colors hover:border-zinc-300/60 dark:border-zinc-800/60 dark:hover:border-zinc-700/60"
                  >
                    <span className="font-medium">{source.title}</span>
                    <span className="ml-1 text-zinc-400">— {source.excerpt}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
