const stages = [
  ["Probleem", "probleem"], ["Voorstel", "voorstel"], ["Pilot", "pilot"],
  ["Kosten", "kosten"], ["Bewijs", "bewijs"], ["Kritiek & risico’s", "kritiek"], ["Resultaten", "resultaten"], ["Volgende stap", "volgende-stap"],
];

export default function ProposalMethodology() {
  return <nav className="plan-methodology" aria-label="Onderdelen van dit bouwplan">
    <p>Van vraag naar toetsbaar plan</p>
    <ol>{stages.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
  </nav>;
}
