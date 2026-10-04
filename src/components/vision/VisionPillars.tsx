import { visionPillars } from "@/data/vision";

export default function VisionPillars() {
  return <section id="pijlers" className="vision-pillars vision-section" aria-labelledby="pillars-heading">
    <div className="vision-section-heading"><p className="eyebrow">Principes / Vier pijlers</p><h2 id="pillars-heading">Waar we op bouwen.</h2><p>Dit zijn overtuigingen over de richting die we kiezen. Hoe we die waarmaken, moet zorgvuldig worden uitgewerkt en getoetst.</p></div>
    <div className="vision-pillar-grid">{visionPillars.map(pillar => <article className="vision-pillar" key={pillar.id} aria-labelledby={`pillar-${pillar.id}`}>
      <p className="vision-number">{pillar.id} / Principe</p><h3 id={`pillar-${pillar.id}`}>{pillar.title}</h3><p className="vision-pillar-intro">{pillar.introduction}</p>
      <ul>{pillar.beliefs.map(belief => <li key={belief}>{belief}</li>)}</ul><p className="vision-pillar-note">{pillar.note}</p>
    </article>)}</div>
  </section>;
}
