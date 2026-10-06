import { getI18n } from "@/i18n/server";
import Button from "@/components/ui/Button";
import Landscape from "@/components/ui/Landscape";

export default async function Hero() {
  const { t, l } = await getI18n();
  return <section className="hero" aria-labelledby="hero-heading">
    <Landscape eager />
    <div className="hero-content"><p className="eyebrow">{t("Een vrijere toekomst begint met bouwen")}</p>
      <h1 id="hero-heading">{t("Minder")}<br />{t("afhankelijk.")}<br />{t("Meer mogelijk.")}</h1>
      <p className="hero-copy">{t("We hoeven de toekomst niet af te wachten. We kunnen hem bouwen. BOUW ontwikkelt en onderzoekt concrete ideeën voor een vrijer, gezonder en veerkrachtiger leven.")}</p>
      <div className="hero-buttons"><Button href={l("#projecten")} variant="light" build>{t("Ontdek de projecten")}</Button><Button href={l("/onze-visie")} variant="outline" build>{t("Onze visie")}</Button></div>
    </div>
    <div id="visie" className="hero-position"><p className="eyebrow">{t("De horizon is open")}</p><p>{t("Geen beloftes.")}<br />{t("Bouwplannen.")}</p></div>
    <p className="hero-caption">{t("Conceptbeeld / een mogelijke toekomst")}</p>
  </section>;
}
