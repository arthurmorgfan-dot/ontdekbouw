import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import type { ProposalPlan, Proposal } from "@/types/proposal";
import Button from "@/components/ui/Button";
import PlanSection from "./PlanSection";

export default async function ProposalNextStep({ plan, proposal }: { plan: ProposalPlan; proposal: Proposal }) {
  const { t, l } = await getI18n();
  return <>
    <PlanSection id="volgende-stap" number="07" label={t("Volgende stap")} title={t("Van idee naar pilot.")} dark>
      <p>{t(plan.nextStep.introduction)}</p>
      <ol className="plan-next-tasks">{plan.nextStep.tasks.map(task => <li key={task}>{t(task)}</li>)}</ol>
      <div className="plan-actions"><Button href={l(`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`)} variant="light">{t("Denk mee over dit voorstel")}</Button><Link href={l("/#voorstellen")} className="plan-text-link">{t("Bekijk alle voorstellen")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link><a href={l(`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`)} className="plan-text-link">{t("Daag dit voorstel uit")} <span aria-hidden="true"><Icon name="arrow-right" /></span></a></div>
    </PlanSection>
    <PlanSection id="meedenken" label={t("Daag dit voorstel uit")} title={t(plan.challenge.heading)}>
      <p className="plan-challenge-lead">{t(plan.challenge.lead)}</p>
      <ul className="plan-questions">{plan.challenge.prompts.map(prompt => <li key={prompt}>{t(prompt)}</li>)}</ul>
      <Link className="plan-text-link" href={l(`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`)}>{t("Deel je vraag of kritiek")} <Icon name="arrow-right" /></Link>
    </PlanSection>
  </>;
}
