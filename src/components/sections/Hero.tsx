import { getI18n } from "@/i18n/server";
import Button from "@/components/ui/Button";
import Landscape from "@/components/ui/Landscape";

export default async function Hero() {
  const { t, l } = await getI18n();
  return <section className="hero" aria-labelledby="hero-heading">
    <Landscape eager />
    <div className="hero-content"><p className="eyebrow">{t("BOUW / praktische plannen voor Nederland")}</p>
      <h1 id="hero-heading">{t("Minder")}<br />{t("afhankelijk.")}<br />{t("Meer mogelijk.")}</h1>
      <p className="hero-brand-line">{t("Geen beloftes. Bouwplannen.")}</p>
      <p className="hero-copy">{t("BOUW ontwikkelt praktische plannen voor het dagelijks leven. Een gezonde basis. Meer vaardigheden. Meer ruimte om je eigen leven te bouwen.")}</p>
      <div className="hero-buttons"><Button href={l("#mogelijkheden")} variant="light" build>{t("Ontdek het verhaal")}</Button><Button href={l("/onze-visie")} variant="outline" build>{t("Onze visie")}</Button></div>
    </div>
    <div id="visie" className="hero-position"><p className="eyebrow">{t("De horizon is open")}</p><p>{t("Geen beloftes.")}<br />{t("Bouwplannen.")}</p></div>
    <p className="hero-caption">{t("Conceptbeeld / een mogelijke toekomst")}</p>
  </section>;
}
