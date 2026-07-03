import { getDictionary } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";
import type { Lang } from "@/lib/i18n";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string }>;
}

async function getNow(lang: Lang) {
  const map: Record<string, () => Promise<any>> = {
    zh: () => import("@/content/zh/now").then((m) => m.now),
    en: () => import("@/content/en/now").then((m) => m.now),
    ja: () => import("@/content/ja/now").then((m) => m.now),
  };
  return (map[lang] ?? map.zh)();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(getLangOrFallback(lang));
  return { title: dict.now.title, description: dict.now.description };
}

export default async function NowPage({ params }: Props) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);
  const now = await getNow(validLang);

  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        ⏳ {dict.now.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {dict.now.description}
      </p>

      <div className="mt-10">
        <p className="text-xs text-zinc-400">
          {dict.now.updated}: {now.date}
        </p>
        <ul className="mt-4 space-y-3">
          {now.items.map((item: string, i: number) => (
            <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
              <span className="mt-0.5 shrink-0 text-emerald-500">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
