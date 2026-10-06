import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import type { Position } from "@/data/positions";

export default async function PositionEntry({ position, featured = false }: { position: Position; featured?: boolean }) {
  const { t, l } = await getI18n();
  return <article id={`standpunt-${position.id}`} className={`positions-entry${featured ? " positions-entry-featured" : ""}`} aria-labelledby={`position-heading-${position.id}`}>
    <div className="positions-entry-heading"><p className="eyebrow">{t(position.id)} {t("/ Standpunt")}</p><span className="positions-status">{t("Richting")}</span><h3 id={`position-heading-${position.id}`}>{t(position.title)}</h3><p className="positions-direction">{t(position.direction)}</p></div>
    <div className="positions-entry-content">
      {position.principle && <blockquote className="positions-principle">{t(position.principle)}</blockquote>}
      <div className="positions-research"><p className="positions-small-label"><span className="positions-status">{t("In onderzoek")}</span> {t("Mogelijke uitwerking")}</p><p>{t(position.investigation)}</p></div>
      {position.detail && <div className="positions-detail"><h4>{t(position.detail.title)}</h4>{position.detail.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}{position.detail.items && <ul>{position.detail.items.map(item => <li key={item}>{t(item)}</li>)}</ul>}</div>}
      {position.questions && <details className="positions-questions"><summary>{t("Wat moeten we nog uitzoeken?")} <span aria-hidden="true"><Icon name="plus" size={20} /></span></summary><ul>{position.questions.map(question => <li key={question}>{t(question)}</li>)}</ul></details>}
      {position.note && <p className="positions-note">{t(position.note)}</p>}
      {position.pilotNeeded && <p className="positions-pilot-note"><span className="positions-status">{t("Pilot nodig")}</span> {t("Een toetsbaar ontwerp is nodig vóór een proef. Er loopt nog geen BOUW-pilot.")}</p>}
      {position.source && <a className="positions-source" href={l(position.source.href)}>{t(position.source.label)} <span aria-hidden="true"><Icon name="external" /></span></a>}
      {position.links && <div className="positions-links">{position.links.map(link => <Link key={link.href} href={l(link.href)}>{t(link.label)} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link>)}</div>}
    </div>
  </article>;
}
