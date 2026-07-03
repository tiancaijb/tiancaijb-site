import { getDictionary, type Lang } from "@/lib/i18n";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const dict = getDictionary(lang);

  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {dict.footer.copyright}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-xs text-zinc-400">{dict.footer.builtWith}</p>
          <a
            href="https://github.com/tiancaijb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
