import type { ProjectBlueprint } from "@/types/project";

export default function ProjectResearch({ research }: { research: NonNullable<ProjectBlueprint["research"]> }) {
  return <div className="blueprint-research">
    <p className="blueprint-status">Status — {research.status}</p><h3 className="blueprint-research-question">{research.title}</h3>
    <div className="blueprint-research-intro">{research.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    <p className="blueprint-small-label">Mogelijke uitkomsten / niet aangetoond</p><ul className="blueprint-research-outcomes">{research.potentialOutcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>
    <dl className="blueprint-research-questions">{research.questions.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.question}</dd></div>)}</dl>
    <div className="blueprint-research-options"><h4>De vorm staat open.</h4><ul>{research.possibilities.map(possibility => <li key={possibility}>{possibility}</li>)}</ul></div>
    <blockquote className="blueprint-research-boundary">{research.boundary}</blockquote><p className="blueprint-note">{research.note}</p>
  </div>;
}
