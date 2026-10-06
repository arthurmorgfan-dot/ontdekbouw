import { getI18n } from "@/i18n/server";
import { visionPillars } from "@/data/vision";

export default async function VisionPillars() {
  const { t } = await getI18n();
  return <section id="pijlers" className="vision-pillars vision-section" aria-labelledby="pillars-heading">
    <div className="vision-section-heading"><p className="eyebrow">{t("Principes / Vier pijlers")}</p><h2 id="pillars-heading">{t("Waar we op bouwen.")}</h2><p>{t("Dit zijn overtuigingen over de richting die we kiezen. Hoe we die waarmaken, moet zorgvuldig worden uitgewerkt en getoetst.")}</p></div>
    <div className="vision-pillar-grid">{visionPillars.map(pillar => <article className="vision-pillar" key={pillar.id} aria-labelledby={`pillar-${pillar.id}`}>
      <p className="vision-number">{t(pillar.id)} {t("/ Principe")}</p><h3 id={`pillar-${pillar.id}`}>{t(pillar.title)}</h3><p className="vision-pillar-intro">{t(pillar.introduction)}</p>
      <ul>{pillar.beliefs.map(belief => <li key={belief}>{t(belief)}</li>)}</ul><p className="vision-pillar-note">{t(pillar.note)}</p>
    </article>)}</div>
  </section>;
}
