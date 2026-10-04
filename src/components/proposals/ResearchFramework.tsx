import type { ProposalPlan } from "@/types/proposal";
import PlanSection from "./PlanSection";

export function PilotFramework({ pilot }: { pilot: ProposalPlan["pilot"] }) {
  return <PlanSection id="pilot" number="03" label="Begin met een pilot" title="Eerst klein. Dan meten. Dan beslissen." dark>
    <p>{pilot.introduction}</p>
    <p className="plan-panel-label">Hypothetisch pilotkader · nog geen gestarte proef</p>
    <dl className="plan-framework">{pilot.dimensions.map(dimension => <div key={dimension.label}><dt>{dimension.label}</dt><dd>{dimension.value}</dd></div>)}</dl>
  </PlanSection>;
}

export function CostModel({ costs, title }: { costs: ProposalPlan["costs"]; title: string }) {
  return <PlanSection id="kosten" number="04" label="Kosten" title={title}>
    <span className="plan-status">{costs.status}</span>
    <p>Dit is de structuur voor een kostenmodel. De bedragen, volumes en aannames moeten nog worden uitgewerkt; er is nog geen begroting.</p>
    <ul className="plan-costs">{costs.items.map((item, index) => <li key={item}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
    <blockquote className="plan-callout">{costs.note}</blockquote>
  </PlanSection>;
}
