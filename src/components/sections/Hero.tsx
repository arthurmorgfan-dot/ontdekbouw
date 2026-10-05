import Button from "@/components/ui/Button";
import Landscape from "@/components/ui/Landscape";

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <Landscape eager />
    <div className="hero-content"><p className="eyebrow">Een vrijere toekomst begint met bouwen</p>
      <h1 id="hero-heading">Minder<br />afhankelijk.<br />Meer mogelijk.</h1>
      <p className="hero-copy">We hoeven de toekomst niet af te wachten. We kunnen hem bouwen. BOUW ontwikkelt en onderzoekt concrete ideeën voor een vrijer, gezonder en veerkrachtiger leven.</p>
      <div className="hero-buttons"><Button href="#projecten" variant="light">Ontdek de projecten</Button><Button href="/onze-visie" variant="outline">Onze visie</Button></div>
    </div>
    <div id="visie" className="hero-position"><p className="eyebrow">De horizon is open</p><p>Geen beloftes.<br />Bouwplannen.</p></div>
    <p className="hero-caption">Conceptbeeld / een mogelijke toekomst</p>
  </section>;
}
