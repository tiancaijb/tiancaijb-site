"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, type Lang } from "@/lib/i18n";

interface NavProps {
  lang: Lang;
}

export function Nav({ lang }: NavProps) {
  const pathname = usePathname();
  const dict = getDictionary(lang);
  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/notes`, label: dict.nav.notes },
    { href: `/${lang}/projects`, label: dict.nav.projects },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/now`, label: dict.nav.now },
    { href: `/${lang}/about`, label: dict.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          className="text-sm font-semibold tracking-tight"
        >
          🌱 tiancaijb
        </Link>
        <div className="flex items-center gap-5">
          {links.map((link) => {
            const isActive =
              link.href === `/${lang}`
                ? pathname === `/${lang}`
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-medium text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Language switcher */}
          <LangSwitcher currentLang={lang} pathname={pathname} />
        </div>
      </nav>
    </header>
  );
}

function LangSwitcher({
  currentLang,
  pathname,
}: {
  currentLang: Lang;
  pathname: string;
}) {
  const alt: Record<Lang, { lang: Lang; label: string }> = {
    en: { lang: "zh", label: "中" },
    zh: { lang: "ja", label: "日" },
    ja: { lang: "en", label: "EN" },
  };

  const next = alt[currentLang];

  // Switch lang in pathname
  const switchPath = pathname.replace(/^\/(en|zh|ja)/, `/${next.lang}`);

  return (
    <Link
      href={switchPath}
      className="ml-2 rounded-md border border-zinc-200 px-2 py-0.5 text-[11px] font-medium text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
    >
      {next.label}
    </Link>
  );
}
