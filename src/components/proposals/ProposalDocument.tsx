import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import type { Proposal, ProposalPlan } from "@/types/proposal";
import ProposalHero from "./ProposalHero";
import ProposalMethodology from "./ProposalMethodology";
import PlanSection from "./PlanSection";
import { PilotFramework, CostModel } from "./ResearchFramework";
import { EvidenceState, ResultsState } from "./EvidenceAndResults";
import ProposalNextStep from "./ProposalNextStep";
import ProposalOverview from "./ProposalOverview";

export default async function ProposalDocument({ proposal, plan }: { proposal: Proposal; plan: ProposalPlan }) {
  const { t } = await getI18n();
  if (plan.overview) return <ProposalOverview proposal={proposal} plan={plan} overview={plan.overview} />;
  return <main id="main" className="proposal-document">
    <ProposalHero proposal={proposal} plan={plan} />
    <ProposalMethodology />
    <PlanSection id="probleem" number="01" label={t("Het probleem")} title={t(plan.headings.problem)}>
      {plan.problem.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}
      <blockquote className="plan-callout">{t(plan.problem.callout)}</blockquote>
    </PlanSection>
    <PlanSection id="voorstel" number="02" label={t("Het voorstel")} title={t(plan.headings.concept)}>
      <p>{t(plan.concept.introduction)}</p>
      <p className="plan-panel-label">{t(plan.categoryListLabel)}</p>
      <ul className="plan-categories">{plan.concept.categories.map(category => <li key={category}>{t(category)}</li>)}</ul>
      <p className="plan-research-note">{t(plan.concept.caveat)}</p>
      <h3>{t(plan.headings.context)}</h3><p>{t(plan.concept.context)}</p>
      {plan.concept.designQuestion && <div className="plan-design-question">
        <h3>{t(plan.concept.designQuestion.heading)}</h3>
        <p>{t(plan.concept.designQuestion.introduction)}</p>
        <dl className="plan-framework">{plan.concept.designQuestion.options.map(option => <div key={option.title}><dt>{t(option.title)}</dt><dd>{t(option.description)}</dd></div>)}</dl>
        <p className="plan-research-note">{t(plan.concept.designQuestion.unresolved)}</p>
      </div>}
    </PlanSection>
    <PlanSection id="uitvoering" label={t("Mogelijke uitvoering")} title={t(plan.headings.delivery)}>
      <ol className="plan-flow" aria-label={t("Conceptuele uitvoering")}>{plan.delivery.flow.map((step, index) => <li key={step}><span className="plan-flow-meta" aria-hidden="true">{t(String(index + 1).padStart(2, "0"))} <Icon name="arrow-right" size={12} /></span>{t(step)}</li>)}</ol>
      <h3>{t("Mogelijke uitvoering")}</h3><ul className="plan-options">{plan.delivery.options.map(option => <li key={option}>{t(option)}</li>)}</ul>
      <div className="plan-research-note"><h3>{t("Nog te onderzoeken")}</h3><p>{t(plan.delivery.unresolved)}</p></div>
    </PlanSection>
    <PilotFramework pilot={plan.pilot} />
    <CostModel costs={plan.costs} title={t(plan.headings.costs)} />
    <EvidenceState evidence={plan.evidence} title={t(plan.headings.evidence)} />
    <PlanSection id="kritiek" label={t("Kritiek & risico’s")} title={t(plan.headings.objections)}>
      <p>{t("Dit zijn open vragen, geen bezwaren waarvoor al een antwoord klaarligt. Ze moeten onderdeel zijn van het onderzoek en van de beslissing om wel of niet te testen.")}</p>
      <ul className="plan-objections">{plan.objections.map((question, index) => <li key={question}><span aria-hidden="true">{t(String(index + 1).padStart(2, "0"))}</span>{t(question)}</li>)}</ul>
    </PlanSection>
    <ResultsState results={plan.results} />
    <ProposalNextStep plan={plan} proposal={proposal} />
  </main>;
}
