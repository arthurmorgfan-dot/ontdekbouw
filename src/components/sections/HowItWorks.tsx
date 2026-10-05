import Icon from "@/components/icons/Icon";
const steps = [
  { title: "Problemen begrijpen", copy: "We onderzoeken wat er werkelijk misgaat en waar de grootste kansen liggen.", icon: "understand" as const },
  { title: "Oplossingen testen", copy: "We beginnen klein, meten resultaten en delen eerlijk wat werkt — en wat niet.", icon: "experiment" as const },
  { title: "Oplossingen opschalen", copy: "Wat zich bewijst, kan groter worden.", icon: "scale" as const },
];
const methodology = ["Probleem", "Idee", "Pilot", "Kosten", "Bewijs", "Resultaten", "Volgende stap"];

export default function HowItWorks() {
  return <section id="werkwijze" className="how-it-works section" aria-labelledby="method-heading">
    <h2 id="method-heading" className="sr-only">Hoe BOUW werkt</h2>
    <ol className="steps">{steps.map((step, index) => <li key={step.title}><span className="step-icon" aria-hidden="true"><Icon name={step.icon} size={32} /></span><p className="step-number">0{index + 1}</p><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    <ol className="methodology" aria-label="Van probleem naar volgende stap">{methodology.map((step, index) => <li key={step}>{step}{index < methodology.length - 1 && <Icon name="arrow-right" className="method-arrow" size={12} />}</li>)}</ol>
    <div className="freedom-test" aria-labelledby="freedom-test-heading"><div><p className="eyebrow">Een bouwplan beoordelen</p><h3 id="freedom-test-heading">De vrijheidstest</h3><p className="freedom-test-question">Geeft dit mensen meer zeggenschap over hun eigen leven, of minder?</p></div><div><p>Een oplossing die technisch werkt maar onnodig vrijheid wegneemt, is nog geen goed bouwplan. We toetsen bewijs, haalbaarheid, kosten, risico’s, resultaten én persoonlijke zeggenschap — ook wanneer onze eigen ideeën daardoor afvallen.</p><p>Overheid en samenleving hebben verantwoordelijkheden voor wetgeving, veiligheid, infrastructuur en gezamenlijke voorzieningen. De toets vraagt of een beperking noodzakelijk en proportioneel is, en of een vrijer alternatief hetzelfde doel kan bereiken.</p><ul aria-label="Beoordelingsvragen"><li>Werkt het?</li><li>Wat kost het?</li><li>Wat is het bewijs?</li><li>Wat kan er misgaan?</li><li>Geeft het mensen meer zeggenschap of minder?</li></ul></div></div>
  </section>;
}
