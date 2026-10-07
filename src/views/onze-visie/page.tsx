import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VisionPillars from "@/components/vision/VisionPillars";
import VisionPositions from "@/components/vision/VisionPositions";
import { visionDistinctions } from "@/data/vision";
import Landscape from "@/components/ui/Landscape";
import "./vision.css";

const title = "Onze visie — BOUW";
const description = "Nederland hoeft problemen niet alleen te beheren. We kunnen oplossingen bouwen. Ontdek de vier pijlers en twaalf standpunten van BOUW.";
export async function generateMetadata(): Promise<Metadata> { return pageMetadata(title, description, "/onze-visie"); }

export default async function VisionPage() {
  const { t, l } = await getI18n();
  return <>
    <a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a>
    <div id="home"><Header homePath={l("/")} activeHref="/onze-visie" /></div>
    <main id="main" className="vision-page">
      <section className="vision-hero" aria-labelledby="vision-heading">
        <Landscape eager />
        <div><p className="eyebrow">{t("Onze visie / Geen beloftes. Bouwplannen.")}</p><h1 id="vision-heading">{t("Nederland hoeft problemen niet alleen te beheren.")}<em>{t("We kunnen oplossingen bouwen.")}</em></h1>
          <p className="vision-hero-intro">{t("BOUW kiest voor een land dat ideeën uitwerkt, onzekerheid erkent en in de praktijk onderzoekt wat werkt. Onze overtuigingen geven richting. Bewijs moet laten zien welke oplossingen die richting werkelijk dichterbij brengen.")}</p>
          <div className="vision-hero-links"><a href={l("#pijlers")}>{t("Onze vier pijlers")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a><a href={l("#standpunten")}>{t("Onze standpunten")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a></div>
        </div>
        <div className="vision-positioning"><p>{t("Niet links tegen rechts.")}<br />{t("Niet optimisme tegen pessimisme.")}<br /><strong>{t("Bouwen tegen stilstaan.")}</strong></p><span>{t("Geen beloftes.")}<br />{t("Bouwplannen.")}</span><p className="concept-label">{t("Conceptbeeld / een mogelijke toekomst")}</p></div>
      </section>
      <section id="onderscheid" className="vision-distinction vision-section" aria-labelledby="distinction-heading">
        <div className="vision-section-heading"><p className="eyebrow">{t("Ambitie met open ogen")}</p><h2 id="distinction-heading">{t("Een overtuiging is nog geen uitkomst.")}</h2><p>{t("We maken zichtbaar wat we geloven, waar we naartoe willen en wat nog onderzocht moet worden.")}</p></div>
        <dl>{visionDistinctions.map(item => <div key={item.label}><dt>{t(item.label)}</dt><dd>{t(item.description)}</dd></div>)}</dl>
      </section>
      <VisionPillars />
      <section id="vrijheidstest" className="vision-section" aria-labelledby="freedom-test-heading">
    <div className="freedom-test" aria-labelledby="freedom-test-heading"><div><p className="eyebrow">{t("Een bouwplan beoordelen")}</p><h3 id="freedom-test-heading">{t("De vrijheidstest")}</h3><p className="freedom-test-question">{t("Geeft dit mensen meer zeggenschap over hun eigen leven, of minder?")}</p></div><div><p>{t("Een oplossing die technisch werkt maar onnodig vrijheid wegneemt, is nog geen goed bouwplan. We toetsen bewijs, haalbaarheid, kosten, risico’s, resultaten én persoonlijke zeggenschap — ook wanneer onze eigen ideeën daardoor afvallen.")}</p><p>{t("Overheid en samenleving hebben verantwoordelijkheden voor wetgeving, veiligheid, infrastructuur en gezamenlijke voorzieningen. De toets vraagt of een beperking noodzakelijk en proportioneel is, en of een vrijer alternatief hetzelfde doel kan bereiken.")}</p><ul aria-label={t("Beoordelingsvragen")}><li>{t("Werkt het?")}</li><li>{t("Wat kost het?")}</li><li>{t("Wat is het bewijs?")}</li><li>{t("Wat kan er misgaan?")}</li><li>{t("Geeft het mensen meer zeggenschap of minder?")}</li></ul></div></div>
      </section>
      <VisionPositions />
      <section className="vision-closing vision-section" aria-labelledby="vision-closing-heading"><p className="eyebrow">{t("Bouwen tegen stilstaan")}</p><h2 id="vision-closing-heading">{t("Maak de basis overvloediger en betaalbaarder. Geef mensen daarna meer ruimte om hun eigen leven te bouwen.")}</h2><div className="vision-closing-links"><Link href={l("/#voorstellen")} className="button button-light">{t("Bekijk onze voorstellen")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link><Link href={l("/#projecten")} className="button button-outline">{t("Bekijk onze projecten")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link></div></section>
    </main>
    <Footer homePath={l("/")} />
  </>;
}
