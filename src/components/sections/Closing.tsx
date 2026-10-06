import { getI18n } from "@/i18n/server";
import Button from "@/components/ui/Button";
import Landscape from "@/components/ui/Landscape";

export default async function Closing() {
  const { t, l } = await getI18n();
  return <section id="doe-mee" className="closing" aria-labelledby="closing-heading">
    <div className="closing-content"><p className="eyebrow">{t("Een sterker Nederland")}</p><h2 id="closing-heading">{t("Meer bouwen.")}<br />{t("Gezondere mensen.")}<br />{t("Sterkere gemeenschappen.")}</h2>
      <p>{t("Van voedsel en woningen tot werk en gezondheid. BOUW brengt mensen, technologie en praktische oplossingen samen om een sterkere, vrijere en gezondere toekomst te bouwen.")}</p>
      <div className="closing-actions"><Button href={l("/doe-mee")} variant="light" build>{t("Doe mee")}</Button><Button href={l("/volg-bouw")} variant="outline" build>{t("Volg BOUW")}</Button></div>
      <div id="meebouwen" className="participation"><strong>{t("De toekomst bouwen we samen.")}</strong><p>{t("Je hoeft het niet met ons eens te zijn. Denk mee, deel kennis of bewijs, of help een toekomstige proef ontwerpen.")}</p></div>
    </div>
    <div className="closing-image"><Landscape sizes="(max-width: 767px) 700px, 50vw" /><span>{t("Conceptbeeld / een mogelijke toekomst")}</span></div>
  </section>;
}
