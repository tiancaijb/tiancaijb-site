import { marked } from "marked";

/**
 * Parse wiki-style [[slug]] and [[slug|display text]] links from markdown.
 * Returns the linked slugs found.
 */
export function extractWikiLinks(content: string): string[] {
  const regex = /\[\[([\w-]+)(?:\|[^\]]+)?\]\]/g;
  const slugs: string[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return [...new Set(slugs)];
}

/**
 * Pre-process content: replace [[slug]] and [[slug|text]] with placeholder HTML,
 * so marked doesn't mangle them.
 */
function preprocessWikiLinks(content: string, lang: string): string {
  return content.replace(
    /\[\[([\w-]+)(?:\|([^\]]+))?\]\]/g,
    (_, slug, displayText) => {
      const text = displayText || slug;
      return `<wikilink href="/${lang}/notes/${slug}" data-slug="${slug}">${text}</wikilink>`;
    }
  );
}

/**
 * Post-process HTML: replace <wikilink> placeholders with styled anchor tags.
 */
function postprocessWikiLinks(html: string, notes: any[]): string {
  return html.replace(
    /<wikilink href="([^"]+)" data-slug="([^"]+)">([^<]+)<\/wikilink>/g,
    (_, href, slug, text) => {
      const exists = notes.some((n: any) => n.slug === slug);
      const cls = exists ? "wikilink wikilink-existing" : "wikilink wikilink-missing";
      return `<a href="${href}" class="${cls}">${text}</a>`;
    }
  );
}

export async function renderMarkdown(
  content: string,
  lang: string = "zh",
  allNotes: any[] = []
): Promise<string> {
  // Step 1: pre-process wiki links
  const preprocessed = preprocessWikiLinks(content, lang);

  // Step 2: render markdown
  const html = await marked.parse(preprocessed);

  // Step 3: post-process wiki link placeholders
  return postprocessWikiLinks(html, allNotes);
}
