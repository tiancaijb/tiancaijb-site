import Link from "next/link";
import { blogPosts } from "@/content/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on indie development, tools, and building.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Blog
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Thoughts on indie development, tools, and building things that matter.
      </p>

      <div className="mt-10 divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-base font-medium transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <time className="shrink-0 text-xs text-zinc-400 sm:ml-4 sm:mt-0.5">
                {post.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
