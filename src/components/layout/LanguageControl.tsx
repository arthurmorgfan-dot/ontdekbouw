"use client";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/client";
import { localizedPath } from "@/i18n/shared";
export default function LanguageControl() {
  const pathname = usePathname();
  const { locale } = useI18n();
  const base = pathname;
  return <nav className="language-control" aria-label={locale === "en" ? "Language" : "Taal"}>
    {(["nl", "en"] as const).map(language => <a key={language} href={localizedPath(base, language)} lang={language} hrefLang={language} aria-current={locale === language ? "true" : undefined} aria-label={language === "nl" ? "Nederlands" : "English"} onClick={event => { event.currentTarget.href = localizedPath(window.location.pathname, language) + window.location.search + window.location.hash; }}>{language.toUpperCase()}</a>)}
  </nav>;
}
