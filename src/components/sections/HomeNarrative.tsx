import { getI18n } from "@/i18n/server";
import Button from "@/components/ui/Button";
import SceneImage from "@/components/ui/SceneImage";

export async function OpeningChapter() {
  const { t, l } = await getI18n();
  return <section className="rediscovery-opening" aria-labelledby="hero-heading">
    <div className="atlas-opening-heading"><div><p className="opening-note">{t("Geen beloftes. Bouwplannen.")}</p><h1 id="hero-heading">{t("De toekomst")}<br /><em>{t("is mensenwerk.")}</em></h1></div><div className="atlas-opening-aside"><p className="opening-philosophy">{t("We waren allemaal ooit kinderen.")}<br />{t("Misschien zijn we dat nog steeds.")}</p><p>{t("De toekomst begint")} {t("met verwondering.")}</p><p>{t("BOUW ontwikkelt praktische plannen voor het dagelijks leven. Een gezonde basis. Meer vaardigheden. Meer ruimte om je eigen leven te bouwen.")}</p><Button href={l("#toekomstatlas")} variant="light" build>{t("Verken de toekomstatlas")}</Button></div></div>
    <figure className="atlas-opening-window"><div className="opening-landscape"><SceneImage src="/images/homepage/polders.webp" alt={t("Illustratief beeld van polders, water en dijken in de avondzon")} sizes="100vw" eager /></div><figcaption>{t("Illustratief landschap / AI-gegenereerd")}</figcaption><a className="atlas-window-link" href={l("#generaties")}>{t("Ontdek het verhaal")} <span aria-hidden="true">↓</span></a></figure>
  </section>;
}

export async function InheritedChapter() {
  const { t } = await getI18n();
  return <section id="generaties" className="inherited-chapter section" aria-labelledby="inherited-heading">
    <div className="chapter-label"><span aria-hidden="true">01 /</span><p>{t("Wat we hebben geërfd")}</p><span>{t("Toen")}</span></div>
    <div className="inherited-heading"><h2 id="inherited-heading">{t("Ooit was dit ook")}<br /><em>{t("maar een idee.")}</em></h2><p>{t("Een dijk. Een school. Een huis. Wat vandaag vanzelfsprekend lijkt, moest ooit door iemand worden bedacht, geprobeerd en gebouwd.")}</p></div>
    <div className="inherited-composition"><figure><SceneImage src="/images/homepage/polders.webp" alt={t("Illustratief beeld van polders, water en dijken in de avondzon")} sizes="(max-width: 767px) 100vw, 60vw" /><figcaption className="image-caption">{t("Illustratief landschap / AI-gegenereerd")}</figcaption></figure><div className="inherited-margin"><span className="margin-rule" aria-hidden="true" /><p>{t("We leven verder op wat anderen begonnen.")}</p><p>{t("Vorige generaties maakten land bewoonbaar, legden verbindingen en bouwden voorzieningen. Geen volmaakte wereld. Wel een basis om op verder te bouwen.")}</p><p className="inherited-question">{t("Wat laten wij achter?")}</p></div></div>
  </section>;
}

export async function PresentChapter() {
  const { t, l } = await getI18n();
  return <section id="vandaag" className="present-chapter section" aria-labelledby="present-heading">
    <div className="chapter-label"><span aria-hidden="true">02 /</span><p>{t("De vragen van vandaag")}</p><span>{t("Nu")}</span></div>
    <div className="present-heading"><h2 id="present-heading">{t("Vooruit willen.")}<br /><em>{t("En toch vastlopen.")}</em></h2><div><p>{t("Een eigen plek. Goed eten. Het gevoel dat je ergens aan kunt beginnen. Het zijn gewone wensen. Maar de weg ernaartoe voelt niet voor iedereen open.")}</p><p className="present-position">{t("Minder afhankelijk.")}<br />{t("Meer mogelijk.")}</p></div></div>
    <div className="present-questions">
      <article><span aria-hidden="true">I</span><h3>{t("Een plek om te beginnen.")}</h3><p>{t("Hoe maken we wonen tot een basis om een leven op te bouwen?")}</p><a href={l("/projecten/hive")}>{t("Verken de woonvraag")} <span aria-hidden="true">↗</span></a></article>
      <article><span aria-hidden="true">II</span><h3>{t("Ruimte voor elke dag.")}</h3><p>{t("Hoe wordt voedzaam eten praktisch en betaalbaar bereikbaar?")}</p><a href={l("/projecten/loop")}>{t("Verken de voedselvraag")} <span aria-hidden="true">↗</span></a></article>
      <article><span aria-hidden="true">III</span><h3>{t("Zicht op wat je kunt.")}</h3><p>{t("Hoe ontdekken mensen hun vaardigheden en mogelijke volgende stappen?")}</p><a href={l("/bouwjaar")}>{t("Verken de ontwikkelvraag")} <span aria-hidden="true">↗</span></a></article>
    </div>
    <p id="visie" className="present-footnote">{t("Geen eenvoudig antwoord op alles. Wel vragen die het onderzoeken waard zijn.")}</p>
  </section>;
}

export async function InvitationChapter() {
  const { t, l } = await getI18n();
  return <section id="doe-mee" className="invitation-chapter section" aria-labelledby="closing-heading">
    <div className="chapter-label"><span aria-hidden="true">07 /</span><p>{t("Samen verder bouwen")}</p><span>{t("Verder")}</span></div>
    <p className="invitation-philosophy">{t("We waren allemaal ooit kinderen.")}<br />{t("Misschien zijn we dat nog steeds.")}</p>
    <h2 id="closing-heading">{t("De horizon")}<br /><em>{t("is nog open.")}</em></h2>
    <div className="invitation-bottom"><div><p className="invitation-lead">{t("Test de ideeën.")} {t("Maak ze beter.")} {t("Bouw mee.")}</p><p>{t("Van verse maaltijden tot praktische vaardigheden en een plek om te wonen. Help onderzoeken wat kan werken en wat eerst anders moet.")}</p><div className="closing-actions"><Button href={l("/doe-mee")} variant="light" build>{t("Doe mee")}</Button><Button href={l("/volg-bouw")} variant="outline" build>{t("Volg BOUW")}</Button></div></div><div id="meebouwen" className="invitation-participation"><strong>{t("Kennis, kritiek en praktische ervaring zijn welkom.")}</strong><p>{t("Je hoeft het niet met ons eens te zijn. Denk mee, deel kennis of bewijs, of help een toekomstige proef ontwerpen.")}</p><p className="invitation-signature">{t("Geen beloftes. Bouwplannen.")}</p></div></div>
  </section>;
}
