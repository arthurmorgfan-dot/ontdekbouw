import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ontdekbouw.nl"),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: site.title, description: site.description, url: "/", siteName: site.name, locale: "nl_NL", type: "website" },
  twitter: { card: "summary", title: site.title, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="nl"><body>{children}</body></html>;
}
