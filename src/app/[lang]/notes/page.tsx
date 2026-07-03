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
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        📝 {dict.notes.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {dict.notes.description}
      </p>

      <div className="mt-10 space-y-4">
        {notes.map((note: any) => (
          <Link
            key={note.slug}
            href={`/${validLang}/notes/${note.slug}`}
            className="group block rounded-xl border border-zinc-200/60 p-5 transition-colors hover:border-emerald-300/60 dark:border-zinc-800/60 dark:hover:border-emerald-700/60"
          >
            <h2 className="text-base font-semibold tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              {note.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {note.excerpt}
            </p>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
