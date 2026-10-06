import type { Metadata } from "next";
import { getI18n } from "./server";
import { localizedPath } from "./shared";
export async function pageMetadata(title: string, description: string, path: string, type: "website" | "article" = "website"): Promise<Metadata> {
  const { t, l, locale } = await getI18n();
  title = t(title); description = t(description);
  const canonical = l(path);
  return { title, description, alternates: { canonical, languages: { nl: localizedPath(path, "nl"), en: localizedPath(path, "en"), "x-default": localizedPath(path, "nl") } },
    openGraph: { title, description, url: canonical, siteName: "BOUW", locale: locale === "en" ? "en_GB" : "nl_NL", alternateLocale: locale === "en" ? "nl_NL" : "en_GB", type },
    twitter: { card: "summary", title, description } };
}
