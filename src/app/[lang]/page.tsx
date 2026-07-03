import Link from "next/link";
import { getDictionary, type Lang } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";

// Content loaders
function getNotes(lang: Lang) {
  // Dynamic import per language
  const notesMap: Record<string, any> = {
    zh: () => import("@/content/zh/notes").then((m) => m.notes),
    en: () => import("@/content/en/notes").then((m) => m.notes),
    ja: () => import("@/content/ja/notes").then((m) => m.notes),
  };
  return notesMap[lang]?.() ?? notesMap.zh();
}

function getProjects(lang: Lang) {
  const map: Record<string, any> = {
    zh: () => import("@/content/zh/projects").then((m) => m.projects),
    en: () => import("@/content/en/projects").then((m) => m.projects),
    ja: () => import("@/content/ja/projects").then((m) => m.projects),
  };
  return map[lang]?.() ?? map.zh();
}

export default async function GardenHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);

  // Load data in parallel (avoid blocking the whole page on one file)
  const [notesList, projectsList] = await Promise.all([
    getNotes(validLang),
    getProjects(validLang),
  ]);

  const recentNotes = notesList.slice(0, 3);
  const featuredProjects = projectsList.filter((p: any) => p.featured);

  return (
    <>
      {/* Garden entrance — hero but make it garden-like */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {dict.home.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {dict.home.subtitle}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          {dict.home.description}
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            href={`/${validLang}/notes`}
            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-emerald-500 dark:text-zinc-950"
          >
            {dict.home.explore}
          </Link>
          <Link
            href={`/${validLang}/about`}
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            {dict.nav.about} →
          </Link>
        </div>
      </section>

      {/* Recently planted notes */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            🌱 {dict.home.recentNotes}
          </h2>
          <Link
            href={`/${validLang}/notes`}
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            {dict.home.viewAllNotes}
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {recentNotes.map((note: any) => (
            <Link
              key={note.slug}
              href={`/${validLang}/notes/${note.slug}`}
              className="group rounded-xl border border-zinc-200/60 p-4 transition-colors hover:border-emerald-300/60 dark:border-zinc-800/60 dark:hover:border-emerald-700/60"
            >
              <h3 className="text-sm font-semibold tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                {note.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {note.excerpt}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {note.tags?.slice(0, 2).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            🛠 {dict.home.featuredProjects}
          </h2>
          <Link
            href={`/${validLang}/projects`}
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            {dict.home.viewAllProjects}
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {featuredProjects.map((project: any) => (
            <Link
              key={project.slug}
              href={`/${validLang}/projects/${project.slug}`}
              className="group rounded-xl border border-zinc-200/60 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800/60 dark:hover:border-zinc-700/60"
            >
              <h3 className="text-sm font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-400">{project.tagline}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags?.slice(0, 2).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
