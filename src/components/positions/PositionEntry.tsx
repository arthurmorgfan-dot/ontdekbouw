import Link from "next/link";
import type { Position } from "@/data/positions";

export default function PositionEntry({ position, featured = false }: { position: Position; featured?: boolean }) {
  return <article id={`standpunt-${position.id}`} className={`positions-entry${featured ? " positions-entry-featured" : ""}`} aria-labelledby={`position-heading-${position.id}`}>
    <div className="positions-entry-heading"><p className="eyebrow">{position.id} / Standpunt</p><span className="positions-status">Richting</span><h3 id={`position-heading-${position.id}`}>{position.title}</h3><p className="positions-direction">{position.direction}</p></div>
    <div className="positions-entry-content">
      {position.principle && <blockquote className="positions-principle">{position.principle}</blockquote>}
      <div className="positions-research"><p className="positions-small-label"><span className="positions-status">In onderzoek</span> Mogelijke uitwerking</p><p>{position.investigation}</p></div>
      {position.detail && <div className="positions-detail"><h4>{position.detail.title}</h4>{position.detail.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{position.detail.items && <ul>{position.detail.items.map(item => <li key={item}>{item}</li>)}</ul>}</div>}
      {position.questions && <details className="positions-questions"><summary>Wat moeten we nog uitzoeken? <span aria-hidden="true">+</span></summary><ul>{position.questions.map(question => <li key={question}>{question}</li>)}</ul></details>}
      {position.note && <p className="positions-note">{position.note}</p>}
      {position.pilotNeeded && <p className="positions-pilot-note"><span className="positions-status">Pilot nodig</span> Een toetsbaar ontwerp is nodig vóór een proef. Er loopt nog geen BOUW-pilot.</p>}
      {position.source && <a className="positions-source" href={position.source.href}>{position.source.label} <span aria-hidden="true">↗</span></a>}
      {position.links && <div className="positions-links">{position.links.map(link => <Link key={link.href} href={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}</div>}
    </div>
  </article>;
}
