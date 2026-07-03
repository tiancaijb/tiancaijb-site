import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";
import { loadProjects } from "@/lib/content-loader";
import type { Lang } from "@/lib/i18n";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

async function getProjects(lang: Lang) {
  return loadProjects(lang);
}

export async function generateStaticParams() {
  const slugs: { lang: string; slug: string }[] = [];
  for (const lang of ["en", "zh", "ja"] as Lang[]) {
    const projects = await getProjects(lang);
    slugs.push(...projects.map((p: any) => ({ lang, slug: p.slug })));
  }
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLang = getLangOrFallback(lang);
  const projects = await getProjects(validLang);
  const project = projects.find((p: any) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);
  const projects = await getProjects(validLang);
  const project = projects.find((p: any) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Link
        href={`/${validLang}/projects`}
        className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:hover:text-zinc-200"
      >
        {dict.projects.backToProjects}
      </Link>

      <article className="mt-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h1>
        <p className="mt-1 text-sm text-zinc-400">{project.tagline}</p>

        <p className="mt-6 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags?.map((tag: string) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-opacity hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {dict.projects.viewSource}
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
