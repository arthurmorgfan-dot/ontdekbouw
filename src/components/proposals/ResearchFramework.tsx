import { getI18n } from "@/i18n/server";
import type { ProposalPlan } from "@/types/proposal";
import PlanSection from "./PlanSection";

export async function PilotFramework({ pilot }: { pilot: ProposalPlan["pilot"] }) {
  const { t } = await getI18n();
  return <PlanSection id="pilot" number="03" label={t("Begin met een pilot")} title={t("Eerst klein. Dan meten. Dan beslissen.")} dark>
    <p>{t(pilot.introduction)}</p>
    <p className="plan-panel-label">{t("Hypothetisch pilotkader · nog geen gestarte proef")}</p>
    <dl className="plan-framework">{pilot.dimensions.map(dimension => <div key={dimension.label}><dt>{t(dimension.label)}</dt><dd>{t(dimension.value)}</dd></div>)}</dl>
  </PlanSection>;
}

export async function CostModel({ costs, title }: { costs: ProposalPlan["costs"]; title: string }) {
  const { t } = await getI18n();
  return <PlanSection id="kosten" number="04" label={t("Kosten")} title={t(title)}>
    <span className="plan-status">{t(costs.status)}</span>
    <p>{t("Dit is de structuur voor een kostenmodel. De bedragen, volumes en aannames moeten nog worden uitgewerkt; er is nog geen begroting.")}</p>
    <ul className="plan-costs">{costs.items.map((item, index) => <li key={item}><span aria-hidden="true">{t(String(index + 1).padStart(2, "0"))}</span>{t(item)}</li>)}</ul>
    <blockquote className="plan-callout">{t(costs.note)}</blockquote>
  </PlanSection>;
}
