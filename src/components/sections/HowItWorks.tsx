import { getI18n } from "@/i18n/server";
import Link from "next/link";
import Icon from "@/components/icons/Icon";
const steps = [
  { title: "Problemen begrijpen", copy: "We onderzoeken wat er werkelijk misgaat en waar de grootste kansen liggen.", icon: "understand" as const },
  { title: "Oplossingen testen", copy: "We beginnen klein, meten resultaten en delen eerlijk wat werkt — en wat niet.", icon: "experiment" as const },
  { title: "Oplossingen opschalen", copy: "Wat zich bewijst, kan groter worden.", icon: "scale" as const },
];
const methodology = ["Probleem", "Idee", "Pilot", "Kosten", "Bewijs", "Resultaten", "Volgende stap"];

export default async function HowItWorks() {
  const { t, l } = await getI18n();
  return <section id="werkwijze" className="how-it-works section" aria-labelledby="method-heading">
    <div className="method-intro"><p className="eyebrow">{t("Hoe BOUW werkt")}</p><h2 id="method-heading">{t("Groot durven denken.")}<br />{t("Precies durven toetsen.")}</h2><p>{t("We ontwikkelen ideeën, testen aannames en meten uitkomsten. Ondersteunt het bewijs een plan niet? Dan passen we het aan of stoppen we.")}</p></div>
    <ol className="steps">{steps.map((step, index) => <li key={step.title}><span className="step-icon" aria-hidden="true"><Icon name={step.icon} size={32} /></span><p className="step-number">0{index + 1}</p><h3>{t(step.title)}</h3><p>{t(step.copy)}</p></li>)}</ol>
    <ol className="methodology" aria-label={t("Van probleem naar volgende stap")}>{methodology.map((step, index) => <li key={step}>{t(step)}{index < methodology.length - 1 && <Icon name="arrow-right" className="method-arrow" size={12} />}</li>)}</ol>
    <div className="method-support"><p>{t("Werking, kosten, risico’s en persoonlijke keuze horen bij iedere toets.")}</p><Link href={l("/onze-visie#vrijheidstest")} className="ruler-link">{t("Lees de vrijheidstest en onze onderzoeksprincipes")}</Link></div>
  </section>;
}
