import Icon from "@/components/icons/Icon";
import type { ProposalPlan } from "@/types/proposal";
import PlanSection from "./PlanSection";

export function EvidenceState({ evidence, title, number = "05" }: { evidence: ProposalPlan["evidence"]; title: string; number?: string }) {
  return <PlanSection id="bewijs" number={number} label="Bewijs" title={title}>
    <div className="plan-evidence-columns"><div><h3>Wat we al weten</h3>
      {evidence.sources.length === 0 ? <p>{evidence.knownEmptyState}</p> : <ul className="plan-sources">{evidence.sources.map(source => <li id={`bron-${source.id}`} key={source.id}>
        <p className="plan-panel-label">{source.kind} · {source.publisher}</p>
        <h4><a href={source.url}>{source.title} <span aria-hidden="true"><Icon name="external" /></span></a></h4>
        <p>{source.finding}</p><p><strong>Beperkingen:</strong> {source.limitations}</p>
        <p className="plan-source-dates">Publicatie: <time dateTime={source.publishedAt}>{source.publishedAt}</time> · Gecontroleerd: <time dateTime={source.verifiedAt}>{source.verifiedAt}</time></p>
      </li>)}</ul>}
    </div><div><h3>Wat we nog moeten bewijzen</h3><ul className="plan-questions">{evidence.questions.map(question => <li key={question}>{question}</li>)}</ul></div></div>
  </PlanSection>;
}

export function ResultsState({ results, number = "06" }: { results: ProposalPlan["results"]; number?: string }) {
  return <PlanSection id="resultaten" number={number} label="Resultaten" title={results.status}>
    <div className="plan-empty-state"><span className="plan-empty-symbol" aria-hidden="true"><Icon name="empty" size={32} /></span><p>{results.description}</p></div>
    {results.outcomes.length > 0 && <dl className="plan-framework">{results.outcomes.map(outcome => <div key={outcome.label}><dt>{outcome.label}</dt><dd>{outcome.value}<p>{outcome.context}</p><a href={`#bron-${outcome.sourceId}`}>Bekijk de bron <Icon name="arrow-right" /></a></dd></div>)}</dl>}
  </PlanSection>;
}
