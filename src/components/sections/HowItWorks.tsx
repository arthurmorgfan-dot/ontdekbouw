const steps = [
  { title: "Problemen begrijpen", copy: "We onderzoeken wat er werkelijk misgaat en waar de grootste kansen liggen.", icon: "◎" },
  { title: "Oplossingen testen", copy: "We beginnen klein, meten resultaten en delen eerlijk wat werkt — en wat niet.", icon: "△" },
  { title: "Oplossingen opschalen", copy: "Wat zich bewijst, kan groter worden.", icon: "↗" },
];
const methodology = ["Probleem", "Idee", "Pilot", "Kosten", "Bewijs", "Resultaten", "Volgende stap"];

export default function HowItWorks() {
  return <section id="werkwijze" className="how-it-works section" aria-labelledby="method-heading">
    <h2 id="method-heading" className="sr-only">Hoe BOUW werkt</h2>
    <ol className="steps">{steps.map((step, index) => <li key={step.title}><span className="step-icon" aria-hidden="true">{step.icon}</span><p className="step-number">0{index + 1}</p><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    <ol className="methodology" aria-label="Van probleem naar volgende stap">{methodology.map(step => <li key={step}>{step}</li>)}</ol>
  </section>;
}
