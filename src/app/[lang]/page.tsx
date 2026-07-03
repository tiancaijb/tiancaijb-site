import Link from "next/link";
import { getDictionary, type Lang } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";

function getNotes(lang: Lang) {
  const map: Record<string, any> = {
    zh: () => import("@/content/zh/notes").then((m) => m.notes),
    en: () => import("@/content/en/notes").then((m) => m.notes),
    ja: () => import("@/content/ja/notes").then((m) => m.notes),
  };
  return (map[lang] ?? map.zh)();
}

function getProjects(lang: Lang) {
  const map: Record<string, any> = {
    zh: () => import("@/content/zh/projects").then((m) => m.projects),
    en: () => import("@/content/en/projects").then((m) => m.projects),
    ja: () => import("@/content/ja/projects").then((m) => m.projects),
  };
  return (map[lang] ?? map.zh)();
}

export default async function GardenHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);

  const [notesList, projectsList] = await Promise.all([
    getNotes(validLang),
    getProjects(validLang),
  ]);

  const recentNotes = notesList.slice(0, 3);
  const featuredProjects = projectsList.filter((p: any) => p.featured);

  return (
    <>
      {/* ── Garden Entrance ── */}
      <section className="relative mx-auto max-w-4xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-24">
        {/* Decorative leaf accent */}
        <div className="absolute left-6 top-20 select-none text-6xl leading-none opacity-20 sm:left-10 sm:top-24 sm:text-8xl">
          🌿
        </div>

        <div className="relative">
          <div className="fade-in">
            <span className="tag-pill mb-4 inline-block">✦ {dict.home.subtitle}</span>
          </div>

          <h1 className="fade-in-1 mt-2 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {dict.home.title.split("'")[0]}
            <span className="text-emerald-500 dark:text-emerald-400">
              &apos;
            </span>
            {dict.home.title.includes("'") ? dict.home.title.split("'")[1] : ""}
          </h1>

          <p className="fade-in-2 mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {dict.home.description}
          </p>

          <div className="fade-in-3 mt-8 flex items-center gap-4">
            <Link
              href={`/${validLang}/notes`}
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
            >
              {dict.home.explore}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href={`/${validLang}/about`}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {dict.nav.about} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className="garden-divider mx-auto max-w-4xl" />

      {/* ── Recently Planted ── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            <span className="mr-2">🌱</span>
            {dict.home.recentNotes}
          </h2>
          <Link
            href={`/${validLang}/notes`}
            className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
          >
            {dict.home.viewAllNotes}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {recentNotes.map((note: any, i: number) => (
            <Link
              key={note.slug}
              href={`/${validLang}/notes/${note.slug}`}
              className={`garden-card p-5 fade-in-${Math.min(i + 1, 4)}`}
            >
              <h3 className="text-sm font-semibold tracking-tight text-[var(--fg)]">
                {note.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {note.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {note.tags?.slice(0, 2).map((tag: string) => (
                  <span key={tag} className="tag-pill text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className="garden-divider mx-auto max-w-4xl" />

      {/* ── Featured Projects ── */}
      <section className="mx-auto max-w-4xl px-6 py-16 pb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            <span className="mr-2">🛠</span>
            {dict.home.featuredProjects}
          </h2>
          <Link
            href={`/${validLang}/projects`}
            className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
          >
            {dict.home.viewAllProjects}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredProjects.map((project: any, i: number) => (
            <Link
              key={project.slug}
              href={`/${validLang}/projects/${project.slug}`}
              className={`garden-card p-5 fade-in-${Math.min(i + 1, 4)}`}
            >
              <h3 className="text-sm font-semibold tracking-tight text-[var(--fg)]">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-[var(--muted)]">{project.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags?.slice(0, 2).map((tag: string) => (
                  <span key={tag} className="tag-pill text-[10px]">
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
