import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";
import { loadProjects } from "@/lib/content-loader";
import type { Lang } from "@/lib/i18n";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string }>;
}

async function getProjects(lang: Lang) {
  return loadProjects(lang);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(getLangOrFallback(lang));
  return { title: dict.projects.title, description: dict.projects.description };
}

export default async function ProjectsPage({ params }: Props) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);
  const projects = await getProjects(validLang);

  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        🛠 {dict.projects.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {dict.projects.description}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => (
          <Link
            key={project.slug}
            href={`/${validLang}/projects/${project.slug}`}
            className="group rounded-xl border border-zinc-200/60 p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800/60 dark:hover:border-zinc-700/60"
          >
            <h2 className="text-base font-semibold tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-xs text-zinc-400">{project.tagline}</p>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags?.map((tag: string) => (
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
