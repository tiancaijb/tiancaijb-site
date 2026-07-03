import { Lang, defaultLang, langs } from "./i18n";

export function isValidLang(s: string): s is Lang {
  return langs.includes(s as Lang);
}

export function getLangOrFallback(s: string | undefined): Lang {
  if (s && isValidLang(s)) return s;
  return defaultLang;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === "en" ? "zh" : "en";
}
