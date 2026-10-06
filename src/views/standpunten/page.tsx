import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PositionEntry from "@/components/positions/PositionEntry";
import { positions, positionDefinitions } from "@/data/positions";
import "./positions.css";

const title = "Standpunten — BOUW";
const description = "Waar staat BOUW voor? Ontdek de richting waarin BOUW Nederland wil bewegen, en de voorstellen die nog onderzoek en toetsing nodig hebben.";
export async function generateMetadata(): Promise<Metadata> { return pageMetadata(title, description, "/standpunten"); }

export default async function PositionsPage() {
  const { t, l } = await getI18n();
  return <>
    <a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a>
    <div id="home"><Header homePath={l("/")} activeHref="/standpunten" /></div>
    <main id="main" className="positions-page">
      <section className="positions-hero positions-section" aria-labelledby="positions-title">
        <p className="eyebrow">{t("Waar we voor bouwen")}</p><h1 id="positions-title">{t("Standpunten")}</h1>
        <p className="positions-lead">{t("Geen lijst met beloftes voor over vier jaar. Dit is de richting waarin BOUW Nederland wil bewegen — en de ideeën die we willen onderzoeken om daar te komen.")}</p>
        <nav className="positions-chapters" aria-label={t("Thema’s op deze pagina")}><a href={l("#gezonde-basis")}>{t("01—04 / Een gezonde basis")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a><a href={l("#voedselknooppunt")}>{t("05 / Een sterker voedselsysteem")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a><a href={l("#dagelijks-leven")}>{t("06—10 / Ruimte om te leven")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a><a href={l("#vooruitgang")}>{t("11—13 / Vooruitgang die werkt")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a></nav>
      </section>
      <section className="positions-definitions positions-section" aria-labelledby="definitions-heading"><p className="eyebrow">{t("Overtuiging is nog geen bewijs")}</p><h2 id="definitions-heading">{t("Richting kiezen. Uitvoering onderzoeken.")}</h2><dl>{positionDefinitions.map(item => <div key={item.label}><dt>{t(item.label)}{item.status && <span className="positions-status">{t(item.status)}</span>}</dt><dd>{t(item.description)}</dd></div>)}</dl></section>
      <section id="gezonde-basis" className="positions-section positions-group" aria-labelledby="healthy-heading"><div className="positions-group-heading"><p className="eyebrow">{t("01—04 / Goed opgroeien")}</p><h2 id="healthy-heading">{t("Een gezonde basis moet bereikbaar zijn.")}</h2></div>{positions.slice(0, 4).map(position => <PositionEntry key={position.id} position={position} />)}</section>
      <section className="positions-interruption positions-section" aria-labelledby="interruption-heading"><h2 id="interruption-heading">{t("Nederland draait al.")}</h2><p>{t("Dus misschien moeten we minder vragen hoe we Nederland draaiende houden — en meer hoe we het beter laten draaien.")}</p></section>
      <section id="voedselknooppunt" className="positions-food-hub positions-section" aria-label={t("Een sterker voedselsysteem")}><PositionEntry position={positions[4]} featured /></section>
      <section id="dagelijks-leven" className="positions-section positions-group" aria-labelledby="living-heading"><div className="positions-group-heading"><p className="eyebrow">{t("06—10 / Meer ruimte om te leven")}</p><h2 id="living-heading">{t("Bouw aan wat mensen nodig hebben.")}</h2></div>{positions.slice(5, 10).map(position => <PositionEntry key={position.id} position={position} />)}</section>
      <section id="vooruitgang" className="positions-section positions-group positions-progress" aria-labelledby="progress-heading"><div className="positions-group-heading"><p className="eyebrow">{t("11—13 / Open ogen, betere ideeën")}</p><h2 id="progress-heading">{t("Vooruitgang moet zich laten toetsen.")}</h2></div>{positions.slice(10).map(position => <PositionEntry key={position.id} position={position} />)}</section>
      <section className="positions-closing positions-section" aria-labelledby="closing-heading"><p className="eyebrow">{t("Geen beloftes. Bouwplannen.")}</p><h2 id="closing-heading">{t("Van richting naar een toetsbaar plan.")}</h2><p>{t("Onze overtuigingen geven koers. De volgende stap is onderzoeken, doorrekenen en eerlijk toetsen wat werkelijk kan werken.")}</p><div className="positions-closing-links"><Link href={l("/#voorstellen")} className="button button-light">{t("Bekijk onze voorstellen")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link><Link href={l("/#projecten")} className="button button-outline">{t("Bekijk onze projecten")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link></div></section>
    </main>
    <Footer homePath={l("/")} />
  </>;
}
