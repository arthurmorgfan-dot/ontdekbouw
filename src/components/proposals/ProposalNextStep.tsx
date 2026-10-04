import Link from "next/link";
import type { ProposalPlan } from "@/types/proposal";
import Button from "@/components/ui/Button";
import PlanSection from "./PlanSection";

export default function ProposalNextStep({ plan }: { plan: ProposalPlan }) {
  return <>
    <PlanSection id="volgende-stap" number="07" label="Volgende stap" title="Van idee naar pilot." dark>
      <p>{plan.nextStep.introduction}</p>
      <ol className="plan-next-tasks">{plan.nextStep.tasks.map(task => <li key={task}>{task}</li>)}</ol>
      <div className="plan-actions"><Button href="#meedenken" variant="light">Denk mee over dit voorstel</Button><Link href="/#voorstellen" className="plan-text-link">Bekijk alle voorstellen <span aria-hidden="true">→</span></Link><a href="#meedenken" className="plan-text-link">Daag dit voorstel uit <span aria-hidden="true">↗</span></a></div>
    </PlanSection>
    <PlanSection id="meedenken" label="Daag dit voorstel uit" title={plan.challenge.heading}>
      <p className="plan-challenge-lead">{plan.challenge.lead}</p>
      <ul className="plan-questions">{plan.challenge.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul>
      <p className="plan-participation-note">{plan.challenge.availability}</p>
    </PlanSection>
  </>;
}
