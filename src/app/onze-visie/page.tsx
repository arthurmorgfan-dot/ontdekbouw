import Icon from "@/components/icons/Icon";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VisionPillars from "@/components/vision/VisionPillars";
import VisionPositions from "@/components/vision/VisionPositions";
import { visionDistinctions } from "@/data/vision";
import "./vision.css";

const title = "Onze visie — BOUW";
const description = "Nederland hoeft problemen niet alleen te beheren. We kunnen oplossingen bouwen. Ontdek de vier pijlers en twaalf standpunten van BOUW.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/onze-visie" },
  openGraph: { title, description, url: "/onze-visie", locale: "nl_NL", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function VisionPage() {
  return <>
    <a className="skip-link" href="#main">Ga naar inhoud</a>
    <div id="home"><Header homePath="/" activeHref="/onze-visie" /></div>
    <main id="main" className="vision-page">
      <section className="vision-hero" aria-labelledby="vision-heading">
        <div><p className="eyebrow">Onze visie / Geen beloftes. Bouwplannen.</p><h1 id="vision-heading">Nederland hoeft problemen niet alleen te beheren.<em>We kunnen oplossingen bouwen.</em></h1>
          <p className="vision-hero-intro">BOUW kiest voor een land dat ideeën uitwerkt, onzekerheid erkent en in de praktijk onderzoekt wat werkt. Onze overtuigingen geven richting. Bewijs moet laten zien welke oplossingen die richting werkelijk dichterbij brengen.</p>
          <div className="vision-hero-links"><a href="#pijlers">Onze vier pijlers <span aria-hidden="true"><Icon name="arrow-down" /></span></a><a href="#standpunten">Onze standpunten <span aria-hidden="true"><Icon name="arrow-down" /></span></a></div>
        </div>
        <div className="vision-positioning"><p>Niet links tegen rechts.<br />Niet optimisme tegen pessimisme.<br /><strong>Bouwen tegen stilstaan.</strong></p><span>Geen beloftes.<br />Bouwplannen.</span></div>
      </section>
      <section id="onderscheid" className="vision-distinction vision-section" aria-labelledby="distinction-heading">
        <div className="vision-section-heading"><p className="eyebrow">Ambitie met open ogen</p><h2 id="distinction-heading">Een overtuiging is nog geen uitkomst.</h2><p>We maken zichtbaar wat we geloven, waar we naartoe willen en wat nog onderzocht moet worden.</p></div>
        <dl>{visionDistinctions.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.description}</dd></div>)}</dl>
      </section>
      <VisionPillars />
      <VisionPositions />
      <section className="vision-closing vision-section" aria-labelledby="vision-closing-heading"><p className="eyebrow">Bouwen tegen stilstaan</p><h2 id="vision-closing-heading">Maak de basis overvloediger en betaalbaarder. Geef mensen daarna meer ruimte om hun eigen leven te bouwen.</h2><div className="vision-closing-links"><Link href="/#voorstellen" className="button button-light">Bekijk onze voorstellen <span aria-hidden="true"><Icon name="arrow-right" /></span></Link><Link href="/#projecten" className="button button-outline">Bekijk onze projecten <span aria-hidden="true"><Icon name="arrow-right" /></span></Link></div></section>
    </main>
    <Footer homePath="/" />
  </>;
}
