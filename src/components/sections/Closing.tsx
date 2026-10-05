import Button from "@/components/ui/Button";

export default function Closing() {
  return <section id="doe-mee" className="closing" aria-labelledby="closing-heading">
    <div className="closing-content"><p className="eyebrow">Een sterker Nederland</p><h2 id="closing-heading">Meer bouwen.<br />Gezondere mensen.<br />Sterkere gemeenschappen.</h2>
      <p>Van voedsel en woningen tot werk en gezondheid. BOUW brengt mensen, technologie en praktische oplossingen samen om een sterkere, vrijere en gezondere toekomst te bouwen.</p>
      <Button href="/doe-mee" variant="light">Doe mee</Button>
      <div id="meebouwen" className="participation"><strong>De toekomst bouwen we samen.</strong><p>Je hoeft het niet met ons eens te zijn. Denk mee, deel kennis of bewijs, of help een toekomstige proef ontwerpen.</p></div>
    </div>
    <div className="closing-image" role="img" aria-label="Architecturale illustratie van een groene leefomgeving, als tijdelijke beeldplaceholder"><span>Ruimte voor een nieuwe toekomst.</span></div>
  </section>;
}
