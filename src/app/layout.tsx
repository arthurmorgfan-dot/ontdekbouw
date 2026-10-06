import type { Metadata } from "next";
import localFont from "next/font/local";
import { getI18n } from "@/i18n/server";
import { LocaleProvider } from "@/i18n/client";
import { site } from "@/data/site";
import { pageMetadata } from "@/i18n/metadata";
import "./globals.css";
import "@/styles/documents.css";
const bouwFont = localFont({ src: "./fonts/Manrope-Variable.ttf", variable: "--font-bouw", display: "swap", weight: "200 800" });
export async function generateMetadata(): Promise<Metadata> {
  return { metadataBase: new URL("https://ontdekbouw.nl"), ...await pageMetadata(site.title, site.description, "/") };
}
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale } = await getI18n();
  return <html lang={locale} className={bouwFont.variable}><body><LocaleProvider locale={locale}>{children}</LocaleProvider></body></html>;
}
