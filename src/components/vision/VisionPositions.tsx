import Link from "next/link";
import { positionChapters } from "@/data/vision";

export default function VisionPositions() {
  return <section id="standpunten" className="vision-positions vision-section" aria-labelledby="positions-heading">
    <div className="vision-section-heading"><p className="eyebrow">Standpunten / Onze richting</p><h2 id="positions-heading">Wat we willen veranderen.</h2><p>Twaalf richtingen, met ruimte voor onderzoek. De doelen geven koers; de uitwerking is geen vaststaand beleid.</p></div>
    {positionChapters.map(chapter => <section className="vision-chapter" key={chapter.id} aria-labelledby={`chapter-${chapter.id}`}>
      <div className="vision-chapter-heading"><p className="eyebrow">{chapter.label}</p><h3 id={`chapter-${chapter.id}`}>{chapter.title}</h3></div>
      <div className="vision-position-list">{chapter.positions.map(position => position.featured ?
        <article id={`standpunt-${position.id}`} key={position.id} className="vision-featured-position" aria-labelledby={`position-${position.id}`}>
          <p className="eyebrow">{position.id} / Standpunt</p><h4 id={`position-${position.id}`}>{position.title}</h4><p>{position.description}</p>
          <blockquote>{position.principle}</blockquote>{position.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <div className="vision-investigation"><p className="vision-small-label">Voorstellen / Nog te onderzoeken</p><p>{position.investigation}</p></div>
          <aside className="vision-legal-note" aria-label="Onderwijsvoorwaarden"><p>{position.legalNote}</p>{position.source && <a href={position.source.href}>{position.source.title} <span aria-hidden="true">↗</span></a>}</aside>
          {position.href && <Link href={position.href} className="vision-text-link">{position.linkLabel} <span aria-hidden="true">→</span></Link>}
        </article> :
        <details id={`standpunt-${position.id}`} key={position.id} className="vision-position">
          <summary><span className="vision-position-number">{position.id}</span><h4>{position.title}</h4><span className="vision-disclosure-icon" aria-hidden="true">+</span></summary>
          <div className="vision-position-body"><p className="vision-small-label">Standpunt / Gewenste richting</p><p>{position.description}</p>
            {position.investigation && <div className="vision-investigation"><p className="vision-small-label">Uitwerking / Nog te onderzoeken</p><p>{position.investigation}</p></div>}
            {position.href && <Link href={position.href} className="vision-text-link">{position.linkLabel} <span aria-hidden="true">→</span></Link>}
          </div>
        </details>
      )}</div>
    </section>)}
  </section>;
}
