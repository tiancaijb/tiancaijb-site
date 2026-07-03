import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { renderMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.content);

  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Link
        href="/blog"
        className="text-sm text-zinc-400 transition-colors hover:text-zinc-800 dark:hover:text-zinc-200"
      >
        ← Back to blog
      </Link>

      <article className="mt-8">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-2 flex items-center gap-3 text-xs text-zinc-400">
            <time>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.excerpt}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose-content mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}
