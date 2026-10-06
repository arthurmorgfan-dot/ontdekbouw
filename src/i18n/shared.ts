import english from "./en.json";
export type Locale = "nl" | "en";
const dictionary: Record<string, string> = english;
export function localizedPath(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//") || /^\/(?:images|_next)(?:\/|$)/.test(href)) return href;
  const base = href.replace(/^\/en(?=\/|\?|#|$)/, "") || "/";
  const suffix = base.replace(/^\/(?=[?#])/, "");
  return locale === "en" ? `/en${suffix === "/" ? "" : suffix}` : /^[?#]/.test(suffix) ? `/${suffix}` : suffix;
}
export function createI18n(locale: Locale) {
  function t<T extends string | null | undefined>(text: T): T {
    if (locale === "nl" || text == null) return text;
    return (dictionary[text] ?? dictionary[text.replace(/\s+/g, " ").trim()] ?? text) as T;
  }
  return { locale, t, l: (href: string) => localizedPath(href, locale) };
}
