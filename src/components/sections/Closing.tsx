import { getI18n } from "@/i18n/server";
import Button from "@/components/ui/Button";
import Landscape from "@/components/ui/Landscape";

export default async function Closing() {
  const { t, l } = await getI18n();
  return <section id="doe-mee" className="closing" aria-labelledby="closing-heading">
    <div className="closing-content"><p className="eyebrow">{t("Samen verder bouwen")}</p><h2 id="closing-heading">{t("Test de ideeën.")}<br />{t("Maak ze beter.")}<br />{t("Bouw mee.")}</h2>
      <p>{t("Van verse maaltijden tot praktische vaardigheden en een plek om te wonen. Help onderzoeken wat kan werken en wat eerst anders moet.")}</p>
      <div className="closing-actions"><Button href={l("/doe-mee")} variant="light" build>{t("Doe mee")}</Button><Button href={l("/volg-bouw")} variant="outline" build>{t("Volg BOUW")}</Button></div>
      <div id="meebouwen" className="participation"><strong>{t("Kennis, kritiek en praktische ervaring zijn welkom.")}</strong><p>{t("Je hoeft het niet met ons eens te zijn. Denk mee, deel kennis of bewijs, of help een toekomstige proef ontwerpen.")}</p></div>
    </div>
    <div className="closing-image"><Landscape sizes="(max-width: 767px) 700px, 50vw" /><span>{t("Conceptbeeld / een mogelijke toekomst")}</span></div>
  </section>;
}
