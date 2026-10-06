import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import { positionChapters } from "@/data/vision";

export default async function VisionPositions() {
  const { t, l } = await getI18n();
  return <section id="standpunten" className="vision-positions vision-section" aria-labelledby="positions-heading">
    <div className="vision-section-heading"><p className="eyebrow">{t("Standpunten / Onze richting")}</p><h2 id="positions-heading">{t("Wat we willen veranderen.")}</h2><p>{t("Twaalf richtingen, met ruimte voor onderzoek. De doelen geven koers; de uitwerking is geen vaststaand beleid.")}</p></div>
    {positionChapters.map(chapter => <section className="vision-chapter" key={chapter.id} aria-labelledby={`chapter-${chapter.id}`}>
      <div className="vision-chapter-heading"><p className="eyebrow">{t(chapter.label)}</p><h3 id={`chapter-${chapter.id}`}>{t(chapter.title)}</h3></div>
      <div className="vision-position-list">{chapter.positions.map(position => position.featured ?
        <article id={`standpunt-${position.id}`} key={position.id} className="vision-featured-position" aria-labelledby={`position-${position.id}`}>
          <p className="eyebrow">{t(position.id)} {t("/ Standpunt")}</p><h4 id={`position-${position.id}`}>{t(position.title)}</h4><p>{t(position.description)}</p>
          <blockquote>{t(position.principle)}</blockquote>{position.paragraphs?.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}
          <div className="vision-investigation"><p className="vision-small-label">{t("Voorstellen / Nog te onderzoeken")}</p><p>{t(position.investigation)}</p></div>
          <aside className="vision-legal-note" aria-label={t("Onderwijsvoorwaarden")}><p>{t(position.legalNote)}</p>{position.source && <a href={l(position.source.href)}>{t(position.source.title)} <span aria-hidden="true"><Icon name="external" /></span></a>}</aside>
          {position.href && <Link href={l(position.href)} className="vision-text-link">{t(position.linkLabel)} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link>}
        </article> :
        <details id={`standpunt-${position.id}`} key={position.id} className="vision-position">
          <summary><span className="vision-position-number">{t(position.id)}</span><h4>{t(position.title)}</h4><span className="vision-disclosure-icon" aria-hidden="true"><Icon name="plus" size={20} /></span></summary>
          <div className="vision-position-body"><p className="vision-small-label">{t("Standpunt / Gewenste richting")}</p><p>{t(position.description)}</p>
            {position.investigation && <div className="vision-investigation"><p className="vision-small-label">{t("Uitwerking / Nog te onderzoeken")}</p><p>{t(position.investigation)}</p></div>}
            {position.href && <Link href={l(position.href)} className="vision-text-link">{t(position.linkLabel)} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link>}
          </div>
        </details>
      )}</div>
    </section>)}
  </section>;
}
