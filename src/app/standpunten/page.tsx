import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PositionEntry from "@/components/positions/PositionEntry";
import { positions, positionDefinitions } from "@/data/positions";
import "./positions.css";

const title = "Standpunten — BOUW";
const description = "Waar staat BOUW voor? Ontdek de richting waarin BOUW Nederland wil bewegen, en de voorstellen die nog onderzoek en toetsing nodig hebben.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/standpunten" },
  openGraph: { title, description, url: "/standpunten", locale: "nl_NL", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function PositionsPage() {
  return <>
    <a className="skip-link" href="#main">Ga naar inhoud</a>
    <div id="home"><Header homePath="/" activeHref="/standpunten" /></div>
    <main id="main" className="positions-page">
      <section className="positions-hero positions-section" aria-labelledby="positions-title">
        <p className="eyebrow">Waar we voor bouwen</p><h1 id="positions-title">Standpunten</h1>
        <p className="positions-lead">Geen lijst met beloftes voor over vier jaar. Dit is de richting waarin BOUW Nederland wil bewegen — en de ideeën die we willen onderzoeken om daar te komen.</p>
        <nav className="positions-chapters" aria-label="Thema’s op deze pagina"><a href="#gezonde-basis">01—04 / Een gezonde basis <span aria-hidden="true">↓</span></a><a href="#voedselknooppunt">05 / Een sterker voedselsysteem <span aria-hidden="true">↓</span></a><a href="#dagelijks-leven">06—10 / Ruimte om te leven <span aria-hidden="true">↓</span></a><a href="#vooruitgang">11—13 / Vooruitgang die werkt <span aria-hidden="true">↓</span></a></nav>
      </section>
      <section className="positions-definitions positions-section" aria-labelledby="definitions-heading"><p className="eyebrow">Overtuiging is nog geen bewijs</p><h2 id="definitions-heading">Richting kiezen. Uitvoering onderzoeken.</h2><dl>{positionDefinitions.map(item => <div key={item.label}><dt>{item.label}{item.status && <span className="positions-status">{item.status}</span>}</dt><dd>{item.description}</dd></div>)}</dl></section>
      <section id="gezonde-basis" className="positions-section positions-group" aria-labelledby="healthy-heading"><div className="positions-group-heading"><p className="eyebrow">01—04 / Goed opgroeien</p><h2 id="healthy-heading">Een gezonde basis moet bereikbaar zijn.</h2></div>{positions.slice(0, 4).map(position => <PositionEntry key={position.id} position={position} />)}</section>
      <section className="positions-interruption positions-section" aria-labelledby="interruption-heading"><h2 id="interruption-heading">Nederland draait al.</h2><p>Dus misschien moeten we minder vragen hoe we Nederland draaiende houden — en meer hoe we het beter laten draaien.</p></section>
      <section id="voedselknooppunt" className="positions-food-hub positions-section" aria-label="Een sterker voedselsysteem"><PositionEntry position={positions[4]} featured /></section>
      <section id="dagelijks-leven" className="positions-section positions-group" aria-labelledby="living-heading"><div className="positions-group-heading"><p className="eyebrow">06—10 / Meer ruimte om te leven</p><h2 id="living-heading">Bouw aan wat mensen nodig hebben.</h2></div>{positions.slice(5, 10).map(position => <PositionEntry key={position.id} position={position} />)}</section>
      <section id="vooruitgang" className="positions-section positions-group positions-progress" aria-labelledby="progress-heading"><div className="positions-group-heading"><p className="eyebrow">11—13 / Open ogen, betere ideeën</p><h2 id="progress-heading">Vooruitgang moet zich laten toetsen.</h2></div>{positions.slice(10).map(position => <PositionEntry key={position.id} position={position} />)}</section>
      <section className="positions-closing positions-section" aria-labelledby="closing-heading"><p className="eyebrow">Geen beloftes. Bouwplannen.</p><h2 id="closing-heading">Van richting naar een toetsbaar plan.</h2><p>Onze overtuigingen geven koers. De volgende stap is onderzoeken, doorrekenen en eerlijk toetsen wat werkelijk kan werken.</p><div className="positions-closing-links"><Link href="/#voorstellen" className="button button-light">Bekijk onze voorstellen <span aria-hidden="true">→</span></Link><Link href="/#projecten" className="button button-outline">Bekijk onze projecten <span aria-hidden="true">→</span></Link></div></section>
    </main>
    <Footer homePath="/" />
  </>;
}
