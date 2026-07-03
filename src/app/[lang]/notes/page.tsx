import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";
import type { Lang } from "@/lib/i18n";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string }>;
}

async function getNotes(lang: Lang) {
  const map: Record<string, () => Promise<any[]>> = {
    zh: () => import("@/content/zh/notes").then((m) => m.notes),
    en: () => import("@/content/en/notes").then((m) => m.notes),
    ja: () => import("@/content/ja/notes").then((m) => m.notes),
  };
  return (map[lang] ?? map.zh)();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(getLangOrFallback(lang));
  return { title: dict.notes.title, description: dict.notes.description };
}

export default async function NotesPage({ params }: Props) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);
  const notes = await getNotes(validLang);

  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 pb-24">
      <div className="fade-in">
        <span className="tag-pill mb-4 inline-block">📝</span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.notes.title}
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          {dict.notes.description}
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {notes.map((note: any, i: number) => (
          <Link
            key={note.slug}
            href={`/${validLang}/notes/${note.slug}`}
            className={`garden-card p-5 fade-in-${Math.min(i + 1, 4)}`}
          >
            <h2 className="text-base font-semibold tracking-tight" style={{ color: "var(--fg)" }}>
              {note.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {note.excerpt}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {note.tags?.map((tag: string) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
