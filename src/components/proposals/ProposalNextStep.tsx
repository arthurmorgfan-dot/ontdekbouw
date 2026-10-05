import Icon from "@/components/icons/Icon";
import Link from "next/link";
import type { ProposalPlan, Proposal } from "@/types/proposal";
import Button from "@/components/ui/Button";
import PlanSection from "./PlanSection";

export default function ProposalNextStep({ plan, proposal }: { plan: ProposalPlan; proposal: Proposal }) {
  return <>
    <PlanSection id="volgende-stap" number="07" label="Volgende stap" title="Van idee naar pilot." dark>
      <p>{plan.nextStep.introduction}</p>
      <ol className="plan-next-tasks">{plan.nextStep.tasks.map(task => <li key={task}>{task}</li>)}</ol>
      <div className="plan-actions"><Button href={`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`} variant="light">Denk mee over dit voorstel</Button><Link href="/#voorstellen" className="plan-text-link">Bekijk alle voorstellen <span aria-hidden="true"><Icon name="arrow-right" /></span></Link><a href={`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`} className="plan-text-link">Daag dit voorstel uit <span aria-hidden="true"><Icon name="arrow-right" /></span></a></div>
    </PlanSection>
    <PlanSection id="meedenken" label="Daag dit voorstel uit" title={plan.challenge.heading}>
      <p className="plan-challenge-lead">{plan.challenge.lead}</p>
      <ul className="plan-questions">{plan.challenge.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul>
      <Link className="plan-text-link" href={`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`}>Deel je vraag of kritiek <Icon name="arrow-right" /></Link>
    </PlanSection>
  </>;
}
