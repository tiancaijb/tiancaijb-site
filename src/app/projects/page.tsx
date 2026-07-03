import Link from "next/link";
import { projects } from "@/content/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source projects by tiancaijb",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Projects
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Open-source tools I&apos;ve built.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
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
              {project.tags.map((tag) => (
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
