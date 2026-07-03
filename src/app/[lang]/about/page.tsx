import { getDictionary } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(getLangOrFallback(lang));
  return { title: dict.about.title, description: dict.about.description };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);

  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        👤 {dict.about.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {dict.about.description}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        <p>{dict.about.bio}</p>

        <div>
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            {dict.about.interests}
          </h2>
          <ul className="mt-3 space-y-2">
            {[1, 2, 3, 4].map((i) => {
              const interest = (dict.about as any)[`interest${i}`];
              if (!interest) return null;
              return (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{interest}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
