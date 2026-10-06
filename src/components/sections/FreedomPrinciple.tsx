import { getI18n } from "@/i18n/server";
export default async function FreedomPrinciple() {
  const { t } = await getI18n();
  return <section id="mogelijkheden" className="freedom-principle section" aria-labelledby="freedom-heading">
    <p className="eyebrow">{t("Waarom BOUW / Meer mogelijkheden, niet meer regels")}</p>
    <h2 id="freedom-heading">{t("BOUW bouwt mogelijkheden, geen verplichtingen.")}</h2>
    <p className="freedom-intro">{t("Een goed systeem geeft mensen meer keuzes over hun eigen leven — niet minder. Onze projecten onderzoeken alternatieven die mensen vrijwillig kunnen gebruiken als ze daadwerkelijk beter werken.")}</p>
    <blockquote>{t("Werkt iets alleen wanneer mensen gedwongen worden eraan mee te doen? Dan is dat zelf een probleem met het ontwerp.")}</blockquote>
  </section>;
}
