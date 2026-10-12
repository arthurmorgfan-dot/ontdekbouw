import type { Metadata } from "next";
import { getI18n } from "./server";
import { localizedPath } from "./shared";
export async function pageMetadata(title: string, description: string, path: string, type: "website" | "article" = "website"): Promise<Metadata> {
  const { t, l, locale } = await getI18n();
  title = t(title); description = t(description);
  const canonical = new URL(l(path), "https://www.ontdekbouw.nl").href;
  const projectPreview: Record<string, string> = {
    "/bouwjaar": "bouwjaar",
    "/projecten/loop": "loop",
    "/projecten/hive": "hive",
  };
  const preview = projectPreview[path];
  const image = {
    url: preview ? `https://www.ontdekbouw.nl/social/${preview}-${locale}.jpg` : "https://www.ontdekbouw.nl/og-image.jpg",
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: preview ? `${title} — ${locale === "en" ? "Concept image. In development; not an operational BOUW project." : "Conceptbeeld. In ontwikkeling; geen operationeel BOUW-project."}` : locale === "en"
      ? "Dutch polders, dikes, water and homes at golden hour."
      : "Nederlandse polders, dijken, water en woningen in de avondzon.",
  };
  return { title, description, alternates: { canonical, languages: { nl: localizedPath(path, "nl"), en: localizedPath(path, "en"), "x-default": localizedPath(path, "nl") } },
    openGraph: { title, description, url: canonical, siteName: "BOUW", locale: locale === "en" ? "en_GB" : "nl_NL", alternateLocale: locale === "en" ? "nl_NL" : "en_GB", type, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [{ url: image.url, alt: image.alt }] } };
}
