import Link from "next/link";
import { projects } from "@/content/projects";
import { blogPosts } from "@/content/blog";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Building tools{" "}
          <span className="text-emerald-500 dark:text-emerald-400">
            that matter
          </span>
          .
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg">
          Independent developer crafting Obsidian plugins, workflow engines, and
          AI-powered knowledge systems. Everything open-source.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-200"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-xl border border-zinc-200/60 p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800/60 dark:hover:border-zinc-700/60"
            >
              <h3 className="text-base font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1.5 text-xs text-zinc-400">{project.tagline}</p>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
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
      </section>

      {/* Recent Blog Posts */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Recent Posts
          </h2>
          <Link
            href="/blog"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-200"
          >
            View all →
          </Link>
        </div>
        <div className="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-sm font-medium transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                  {post.title}
                </h3>
                <p className="mt-0.5 text-xs text-zinc-400">{post.excerpt}</p>
              </div>
              <time className="shrink-0 text-xs text-zinc-400 sm:ml-4">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
