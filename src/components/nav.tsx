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
    <header className="sticky top-0 z-50 w-full" style={{ background: "var(--nav-bg)", backdropFilter: "blur(12px", borderBottom: "1px solid var(--card-border)" }}>
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "var(--accent)", color: "white", fontSize: "0.875rem", lineHeight: 1 }}>
            T
          </span>
          tiancaijb
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
                    ? "font-medium"
                    : ""
                }`}
                style={{
                  color: isActive ? "var(--fg)" : "var(--muted)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
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
  const switchPath = pathname.replace(/^\/(en|zh|ja)/, `/${next.lang}`);

  return (
    <Link
      href={switchPath}
      className="rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all"
      style={{
        color: "var(--accent)",
        border: "1px solid var(--accent-soft)",
      }}
      suppressHydrationWarning
    >
      {next.label}
    </Link>
  );
}
