import { getI18n } from "@/i18n/server";
import type { ProjectBlueprint } from "@/types/project";

export default async function ProjectResearch({ research }: { research: NonNullable<ProjectBlueprint["research"]> }) {
  const { t } = await getI18n();
  return <div className="blueprint-research">
    <p className="blueprint-status">{t("Status —")} {t(research.status)}</p><h3 className="blueprint-research-question">{t(research.title)}</h3>
    <div className="blueprint-research-intro">{research.introduction.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}</div>
    <p className="blueprint-small-label">{t("Mogelijke uitkomsten / niet aangetoond")}</p><ul className="blueprint-research-outcomes">{research.potentialOutcomes.map(outcome => <li key={outcome}>{t(outcome)}</li>)}</ul>
    <dl className="blueprint-research-questions">{research.questions.map(item => <div key={item.title}><dt>{t(item.title)}</dt><dd>{t(item.question)}</dd></div>)}</dl>
    <div className="blueprint-research-options"><h4>{t("De vorm staat open.")}</h4><ul>{research.possibilities.map(possibility => <li key={possibility}>{t(possibility)}</li>)}</ul></div>
    <blockquote className="blueprint-research-boundary">{t(research.boundary)}</blockquote><p className="blueprint-note">{t(research.note)}</p>
  </div>;
}
