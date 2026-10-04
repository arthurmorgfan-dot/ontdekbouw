import Button from "@/components/ui/Button";

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <div className="hero-content"><p className="eyebrow">Nederland kan meer</p>
      <h1 id="hero-heading">We hoeven<br />de toekomst niet<br />af te wachten.<em>We kunnen hem bouwen.</em></h1>
      <p className="hero-copy">BOUW is een beweging voor concrete oplossingen. Geen beloftes, maar bouwplannen. Van wonen en voedsel tot jongeren, werk, schulden en innovatie — we testen ideeën in de praktijk en laten zien wat werkt.</p>
      <div className="hero-buttons"><Button href="#projecten" variant="outline">Ontdek de projecten</Button><Button href="/onze-visie" variant="outline" arrow={false}>Onze visie</Button></div>
    </div>
    <div id="visie" className="hero-position"><p><strong>Niet links tegen rechts.</strong><br />Niet optimisme tegen pessimisme.<br /><strong>Bouwen tegen stilstaan.</strong></p></div>
  </section>;
}
