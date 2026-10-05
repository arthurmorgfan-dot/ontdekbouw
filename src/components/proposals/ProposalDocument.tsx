import type { Proposal, ProposalPlan } from "@/types/proposal";
import ProposalHero from "./ProposalHero";
import ProposalMethodology from "./ProposalMethodology";
import PlanSection from "./PlanSection";
import { PilotFramework, CostModel } from "./ResearchFramework";
import { EvidenceState, ResultsState } from "./EvidenceAndResults";
import ProposalNextStep from "./ProposalNextStep";

export default function ProposalDocument({ proposal, plan }: { proposal: Proposal; plan: ProposalPlan }) {
  return <main id="main" className="proposal-document">
    <ProposalHero proposal={proposal} plan={plan} />
    <ProposalMethodology />
    <PlanSection id="probleem" number="01" label="Het probleem" title={plan.headings.problem}>
      {plan.problem.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <blockquote className="plan-callout">{plan.problem.callout}</blockquote>
    </PlanSection>
    <PlanSection id="voorstel" number="02" label="Het voorstel" title={plan.headings.concept}>
      <p>{plan.concept.introduction}</p>
      <p className="plan-panel-label">{plan.categoryListLabel}</p>
      <ul className="plan-categories">{plan.concept.categories.map(category => <li key={category}>{category}</li>)}</ul>
      <p className="plan-research-note">{plan.concept.caveat}</p>
      <h3>{plan.headings.context}</h3><p>{plan.concept.context}</p>
      {plan.concept.designQuestion && <div className="plan-design-question">
        <h3>{plan.concept.designQuestion.heading}</h3>
        <p>{plan.concept.designQuestion.introduction}</p>
        <dl className="plan-framework">{plan.concept.designQuestion.options.map(option => <div key={option.title}><dt>{option.title}</dt><dd>{option.description}</dd></div>)}</dl>
        <p className="plan-research-note">{plan.concept.designQuestion.unresolved}</p>
      </div>}
    </PlanSection>
    <PlanSection id="uitvoering" label="Mogelijke uitvoering" title={plan.headings.delivery}>
      <ol className="plan-flow" aria-label="Conceptuele uitvoering">{plan.delivery.flow.map(step => <li key={step}>{step}</li>)}</ol>
      <h3>Mogelijke uitvoering</h3><ul className="plan-options">{plan.delivery.options.map(option => <li key={option}>{option}</li>)}</ul>
      <div className="plan-research-note"><h3>Nog te onderzoeken</h3><p>{plan.delivery.unresolved}</p></div>
    </PlanSection>
    <PilotFramework pilot={plan.pilot} />
    <CostModel costs={plan.costs} title={plan.headings.costs} />
    <EvidenceState evidence={plan.evidence} title={plan.headings.evidence} />
    <PlanSection id="kritiek" label="Kritiek & risico’s" title={plan.headings.objections}>
      <p>Dit zijn open vragen, geen bezwaren waarvoor al een antwoord klaarligt. Ze moeten onderdeel zijn van het onderzoek en van de beslissing om wel of niet te testen.</p>
      <ul className="plan-objections">{plan.objections.map((question, index) => <li key={question}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{question}</li>)}</ul>
    </PlanSection>
    <ResultsState results={plan.results} />
    <ProposalNextStep plan={plan} proposal={proposal} />
  </main>;
}
