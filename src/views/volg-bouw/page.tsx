import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Icon from "@/components/icons/Icon";
import Landscape from "@/components/ui/Landscape";
import "./follow.css";

const title = "Volg BOUW — BOUW";
const description = "Blijf betrokken bij BOUW: volg voorstellen en projecten op deze website. Onderzoek, bewijs en resultaten worden zichtbaar zodra ze er werkelijk zijn.";
export async function generateMetadata(): Promise<Metadata> { return pageMetadata(title, description, "/volg-bouw"); }

export default async function FollowPage() {
  const { t, l } = await getI18n();
  return <>
    <a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a>
    <div id="home"><Header homePath={l("/")} activeHref="/volg-bouw" /></div>
    <main id="main" className="follow-page">
      <header className="follow-hero">
        <Landscape eager />
        <p className="eyebrow">{t("Van idee naar inzicht")}</p>
        <h1>{t("Volg BOUW")}</h1>
        <p>{t("Volg hoe ideeën zich ontwikkelen: van voorstel naar een toetsbaar plan, en uiteindelijk naar bewijs en resultaten. Ook wanneer een idee moet veranderen.")}</p>
        <span className="follow-image-caption">{t("Conceptbeeld / de horizon van het onderzoek")}</span>
      </header>
      <section className="follow-section" aria-labelledby="follow-work-heading">
        <p className="eyebrow">{t("Wat je kunt volgen")}</p>
        <h2 id="follow-work-heading">{t("Het werk. En wat we ervan leren.")}</h2>
        <dl className="follow-topics">
          <div><dt>{t("Voorstellen")}</dt><dd>{t("Ideeën voor Nederland, open vragen en aanpassingen wanneer nieuwe kennis daar aanleiding toe geeft.")}</dd></div>
          <div><dt>{t("Projecten")}</dt><dd>{t("De ontwikkeling van LOOP, GROW, HIVE, RISE en MEND. Wat willen we bouwen, wat is nog onzeker en wat moet eerst worden onderzocht?")}</dd></div>
          <div><dt>{t("Experimenten")}</dt><dd>{t("Als een plan klaar is voor een echte proef: de vraag, de methode en wat we willen meten. Een onderzoeksrichting is nog geen gestarte pilot.")}</dd></div>
          <div><dt>{t("Resultaten")}</dt><dd>{t("Wat daadwerkelijk is gemeten, met bronnen, beperkingen en de volgende beslissing. Ook tegenvallers, veranderingen van richting en redenen om te stoppen horen erbij.")}</dd></div>
        </dl>
        <p className="follow-note">{t("BOUW heeft nog geen gepubliceerde pilotresultaten. Experimenten en uitkomsten horen hier pas bij zodra ze werkelijk bestaan en verantwoord kunnen worden gepubliceerd.")}</p>
        <blockquote>{t("Mislukken mag. Verbergen niet.")}</blockquote>
      </section>
      <section className="follow-section follow-channel" aria-labelledby="follow-channel-heading">
        <div><p className="eyebrow">{t("Het huidige kanaal")}</p><h2 id="follow-channel-heading">{t("Hier kun je BOUW volgen.")}</h2></div>
        <div>
          <p>{t("Op ontdekbouw.nl kun je de huidige voorstellen en projectplannen lezen. Bewaar deze website als bladwijzer en kom terug om te zien wat er is veranderd.")}</p>
          <p>{t("Er is op deze website nog geen geverifieerd sociaal volgkanaal of werkende update-inschrijving gekoppeld. Je hoeft geen gegevens achter te laten; deze pagina verstuurt geen meldingen.")}</p>
          <div className="follow-links"><Link href={l("/#voorstellen")}>{t("Bekijk onze voorstellen")} <Icon name="arrow-right" /></Link><Link href={l("/projecten")}>{t("Bekijk onze projecten")} <Icon name="arrow-right" /></Link></div>
        </div>
      </section>
      <section className="follow-section follow-contribute" aria-labelledby="follow-contribute-heading">
        <p className="eyebrow">{t("Volgen of meedoen")}</p><h2 id="follow-contribute-heading">{t("Wil je het werk ook beter maken?")}</h2>
        <p>{t("Volgen is op de hoogte blijven. Meedoen is kritiek, kennis of een bron bijdragen, of helpen een toekomstige proef te ontwerpen. Je hoeft het niet met BOUW eens te zijn om iets toe te voegen.")}</p>
        <Button href={l("/doe-mee")} variant="light">{t("Doe mee")}</Button>
      </section>
    </main>
    <Footer homePath={l("/")} />
  </>;
}
