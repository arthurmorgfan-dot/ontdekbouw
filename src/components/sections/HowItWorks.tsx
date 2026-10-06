import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
const steps = [
  { title: "Problemen begrijpen", copy: "We onderzoeken wat er werkelijk misgaat en waar de grootste kansen liggen.", icon: "understand" as const },
  { title: "Oplossingen testen", copy: "We beginnen klein, meten resultaten en delen eerlijk wat werkt — en wat niet.", icon: "experiment" as const },
  { title: "Oplossingen opschalen", copy: "Wat zich bewijst, kan groter worden.", icon: "scale" as const },
];
const methodology = ["Probleem", "Idee", "Pilot", "Kosten", "Bewijs", "Resultaten", "Volgende stap"];

export default async function HowItWorks() {
  const { t } = await getI18n();
  return <section id="werkwijze" className="how-it-works section" aria-labelledby="method-heading">
    <div className="method-intro"><p className="eyebrow">{t("Hoe BOUW werkt")}</p><h2 id="method-heading">{t("Groot durven denken.")}<br />{t("Precies durven toetsen.")}</h2><p>{t("Een idee verdient onderzoek. Bewijs bepaalt de volgende stap.")}</p></div>
    <ol className="steps">{steps.map((step, index) => <li key={step.title}><span className="step-icon" aria-hidden="true"><Icon name={step.icon} size={32} /></span><p className="step-number">0{index + 1}</p><h3>{t(step.title)}</h3><p>{t(step.copy)}</p></li>)}</ol>
    <ol className="methodology" aria-label={t("Van probleem naar volgende stap")}>{methodology.map((step, index) => <li key={step}>{t(step)}{index < methodology.length - 1 && <Icon name="arrow-right" className="method-arrow" size={12} />}</li>)}</ol>
    <div className="freedom-test" aria-labelledby="freedom-test-heading"><div><p className="eyebrow">{t("Een bouwplan beoordelen")}</p><h3 id="freedom-test-heading">{t("De vrijheidstest")}</h3><p className="freedom-test-question">{t("Geeft dit mensen meer zeggenschap over hun eigen leven, of minder?")}</p></div><div><p>{t("Een oplossing die technisch werkt maar onnodig vrijheid wegneemt, is nog geen goed bouwplan. We toetsen bewijs, haalbaarheid, kosten, risico’s, resultaten én persoonlijke zeggenschap — ook wanneer onze eigen ideeën daardoor afvallen.")}</p><p>{t("Overheid en samenleving hebben verantwoordelijkheden voor wetgeving, veiligheid, infrastructuur en gezamenlijke voorzieningen. De toets vraagt of een beperking noodzakelijk en proportioneel is, en of een vrijer alternatief hetzelfde doel kan bereiken.")}</p><ul aria-label={t("Beoordelingsvragen")}><li>{t("Werkt het?")}</li><li>{t("Wat kost het?")}</li><li>{t("Wat is het bewijs?")}</li><li>{t("Wat kan er misgaan?")}</li><li>{t("Geeft het mensen meer zeggenschap of minder?")}</li></ul></div></div>
  </section>;
}
