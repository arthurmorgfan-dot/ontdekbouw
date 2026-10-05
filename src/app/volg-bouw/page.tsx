import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Icon from "@/components/icons/Icon";
import "./follow.css";

const title = "Volg BOUW — BOUW";
const description = "Blijf betrokken bij BOUW: volg voorstellen en projecten op deze website. Onderzoek, bewijs en resultaten worden zichtbaar zodra ze er werkelijk zijn.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/volg-bouw" },
  openGraph: { title, description, url: "/volg-bouw", locale: "nl_NL", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function FollowPage() {
  return <>
    <a className="skip-link" href="#main">Ga naar inhoud</a>
    <div id="home"><Header homePath="/" activeHref="/volg-bouw" /></div>
    <main id="main" className="follow-page">
      <header className="follow-hero">
        <p className="eyebrow">Van idee naar inzicht</p>
        <h1>Volg BOUW</h1>
        <p>Volg hoe ideeën zich ontwikkelen: van voorstel naar een toetsbaar plan, en uiteindelijk naar bewijs en resultaten. Ook wanneer een idee moet veranderen.</p>
      </header>
      <section className="follow-section" aria-labelledby="follow-work-heading">
        <p className="eyebrow">Wat je kunt volgen</p>
        <h2 id="follow-work-heading">Het werk. En wat we ervan leren.</h2>
        <dl className="follow-topics">
          <div><dt>Voorstellen</dt><dd>Ideeën voor Nederland, open vragen en aanpassingen wanneer nieuwe kennis daar aanleiding toe geeft.</dd></div>
          <div><dt>Projecten</dt><dd>De ontwikkeling van LOOP, GROW, HIVE, RISE en MEND. Wat willen we bouwen, wat is nog onzeker en wat moet eerst worden onderzocht?</dd></div>
          <div><dt>Experimenten</dt><dd>Als een plan klaar is voor een echte proef: de vraag, de methode en wat we willen meten. Een onderzoeksrichting is nog geen gestarte pilot.</dd></div>
          <div><dt>Resultaten</dt><dd>Wat daadwerkelijk is gemeten, met bronnen, beperkingen en de volgende beslissing. Ook tegenvallers, veranderingen van richting en redenen om te stoppen horen erbij.</dd></div>
        </dl>
        <p className="follow-note">BOUW heeft nog geen gepubliceerde pilotresultaten. Experimenten en uitkomsten horen hier pas bij zodra ze werkelijk bestaan en verantwoord kunnen worden gepubliceerd.</p>
        <blockquote>Mislukken mag. Verbergen niet.</blockquote>
      </section>
      <section className="follow-section follow-channel" aria-labelledby="follow-channel-heading">
        <div><p className="eyebrow">Het huidige kanaal</p><h2 id="follow-channel-heading">Hier kun je BOUW volgen.</h2></div>
        <div>
          <p>Op ontdekbouw.nl kun je de huidige voorstellen en projectplannen lezen. Bewaar deze website als bladwijzer en kom terug om te zien wat er is veranderd.</p>
          <p>Er is op deze website nog geen geverifieerd sociaal volgkanaal of werkende update-inschrijving gekoppeld. Je hoeft geen gegevens achter te laten; deze pagina verstuurt geen meldingen.</p>
          <div className="follow-links"><Link href="/#voorstellen">Bekijk onze voorstellen <Icon name="arrow-right" /></Link><Link href="/projecten">Bekijk onze projecten <Icon name="arrow-right" /></Link></div>
        </div>
      </section>
      <section className="follow-section follow-contribute" aria-labelledby="follow-contribute-heading">
        <p className="eyebrow">Volgen of meedoen</p><h2 id="follow-contribute-heading">Wil je het werk ook beter maken?</h2>
        <p>Volgen is op de hoogte blijven. Meedoen is kritiek, kennis of een bron bijdragen, of helpen een toekomstige proef te ontwerpen. Je hoeft het niet met BOUW eens te zijn om iets toe te voegen.</p>
        <Button href="/doe-mee" variant="light">Doe mee</Button>
      </section>
    </main>
    <Footer homePath="/" />
  </>;
}
