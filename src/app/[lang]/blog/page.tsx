import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { getLangOrFallback } from "@/lib/lang";
import { loadBlogPosts } from "@/lib/content-loader";
import type { Lang } from "@/lib/i18n";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string }>;
}

async function getBlogPosts(lang: Lang) {
  return loadBlogPosts(lang);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(getLangOrFallback(lang));
  return { title: dict.blog.title, description: dict.blog.description };
}

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);
  const dict = getDictionary(validLang);
  const posts = await getBlogPosts(validLang);

  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        ✍️ {dict.blog.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {dict.blog.description}
      </p>

      <div className="mt-10 divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/${validLang}/blog/${post.slug}`}
            className="group block py-5"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-base font-medium transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {post.excerpt}
                </p>
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
