import { getI18n } from "@/i18n/server";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons/Icon";
import Button from "@/components/ui/Button";
import type { Proposal, ProposalPlan, ProposalOverviewContent } from "@/types/proposal";
import PlanSection from "./PlanSection";
import { EvidenceState, ResultsState } from "./EvidenceAndResults";
import "./proposal-overview.css";

/** Uses the same ruler interaction as navigation and proposal-card links. */
export async function ProposalTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { l } = await getI18n();
  return <Link href={l(href)} className="proposal-overview-link ruler-link-trigger"><span className="ruler-link">{children}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link>;
}

export async function ProposalFlow({ steps, label, conditional = false }: { steps: string[]; label: string; conditional?: boolean }) {
  const { t } = await getI18n();
  return <ol className={`proposal-overview-flow${conditional ? " proposal-overview-stages" : ""}`} aria-label={t(label)}>{steps.map((step, index) => <li key={step}><span className="proposal-overview-step-label">{t(conditional ? index === 0 ? "Voorgestelde proef" : "Alleen bij voldoende bewijs" : `0${index + 1}`)}</span><strong>{t(step)}</strong>{index < steps.length - 1 && <Icon name="arrow-right" size={20} />}</li>)}</ol>;
}

export async function ProposalMetrics({ labels, status }: { labels: string[]; status: string }) {
  const { t } = await getI18n();
  return <dl className="proposal-overview-metrics">{labels.map(label => <div key={label}><dt>{t(label)}</dt><dd>{t(status)}</dd></div>)}</dl>;
}

export default async function ProposalOverview({ proposal, plan, overview }: { proposal: Proposal; plan: ProposalPlan; overview: ProposalOverviewContent }) {
  const { t, l } = await getI18n();
  return <main id="main" className="proposal-document proposal-overview">
    <section className="proposal-overview-hero" aria-labelledby="overview-title">
      <p className="eyebrow">{t("BOUW VOORSTEL")} {t(proposal.id)} {t("— VOEDSEL")}</p>
      <div className="proposal-overview-hero-grid"><div><h1 id="overview-title">{t(overview.headline)}</h1><p className="proposal-overview-lead">{t(plan.lead)}</p><div className="proposal-overview-actions"><Button href={l("#hoe-het-werkt")} variant="light" build>{t("Bekijk hoe het werkt")}</Button><ProposalTextLink href={l("#berekening")}>{t("Bekijk de berekening")}</ProposalTextLink></div></div><aside className="proposal-overview-dossier" aria-label={t("Status van het voorstel")}><p className="eyebrow">{t(overview.name)}</p><p className="proposal-overview-status">{t(proposal.status)}</p><p>{t("Een voorstel om te onderzoeken.")}<br />{t("Nog geen gestarte proef.")}<br />{t("Nog geen gemeten resultaten.")}</p><span className="proposal-overview-dossier-line" aria-hidden="true" /><p>{t("Show the idea.")}<br />{t("Show the system.")}<br />{t("Then show the math.")}</p></aside></div>
    </section>
    <PlanSection id="principe" number="01" label={t("Het principe")} title={t(overview.principle)}>
      <p>{t(plan.introduction)}</p><ol className="proposal-overview-layers">{overview.layers.map((layer, index) => <li key={layer.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{t(layer.title)}</h3><p>{t(layer.description)}</p></div></li>)}</ol><p className="plan-research-note">{t(plan.concept.caveat)}</p>
    </PlanSection>
    <section id="basispakket" className="proposal-overview-box section" aria-labelledby="box-heading"><div className="proposal-overview-box-copy"><p className="eyebrow">{t("02 / De basis")}</p><h2 id="box-heading">{t("Wat zit er in de basis?")}</h2><p className="proposal-overview-box-statement">{t(overview.boxStatement)}</p><p>{t("Mogelijke productcategorieën. De samenstelling staat nog niet vast.")}</p><ul className="proposal-overview-categories">{plan.concept.categories.map(category => <li key={category}>{t(category)}</li>)}</ul></div><figure><Image src="/images/projects/loop-crate.svg" alt={t("Illustratie van een voedselkrat met verse producten en een voorraadpot")} width={1000} height={760} /><figcaption><span>{t("BOUW Basispakket")}</span>{t("Conceptillustratie / geen vastgesteld pakket of bestaande levering")}</figcaption></figure></section>
    <PlanSection id="hoe-het-werkt" number="03" label={t("Het systeem")} title={t("Van productie naar huishouden.")}>
      <ProposalFlow steps={plan.delivery.flow} label={t("Voorgestelde voedselketen")} /><p>{t(plan.concept.context)}</p><ul className="plan-options">{plan.delivery.options.map(option => <li key={option}>{t(option)}</li>)}</ul><p className="plan-research-note">{t(plan.delivery.unresolved)}</p>
    </PlanSection>
    <PlanSection id="berekening" number="04" label={t("Laat de berekening zien")} title={t(plan.headings.costs)} dark>
      <p>{t(overview.mathStatement)}</p><ProposalMetrics labels={overview.metrics} status={plan.costs.status} /><p className="plan-research-note">{t("Nog geen begroting, vastgesteld pakket of berekende voedingswaarde. Hoeveelheden, kosten en capaciteit worden hier pas gepubliceerd met aannames, bronnen en beperkingen.")}</p>
    </PlanSection>
    <PlanSection id="pilot" number="05" label={t("Begin klein")} title={t(overview.pilotHeadline)}>
      <p>{t(plan.pilot.introduction)}</p><ProposalFlow steps={overview.stages} label={t("Voorwaardelijk groeipad, geen toegezegde opschaling")} conditional /><p className="plan-research-note">{t("Het aantal van 100 deelnemers is een voorgestelde proefomvang, geen bestaande pilot. Latere stappen volgen alleen als resultaten dat rechtvaardigen. Ook aanpassen of stoppen is een mogelijke uitkomst.")}</p><ul className="plan-questions">{plan.nextStep.tasks.map(task => <li key={task}>{t(task)}</li>)}</ul>
    </PlanSection>
    <EvidenceState evidence={plan.evidence} title={t(plan.headings.evidence)} number="06" />
    <ResultsState results={plan.results} number="07" />
    <section className="proposal-overview-closing section" aria-labelledby="overview-closing-heading"><p className="eyebrow">{t("Van voorstel naar bewijs")}</p><h2 id="overview-closing-heading">{t(overview.closingHeadline)}</h2><p>{t("Volg hoe we het voorstel afbakenen, de aannames doorrekenen en een mogelijke proef voorbereiden.")}</p><div className="proposal-overview-actions"><Button href={l("/volg-bouw")} variant="light" build>{t("Volg de ontwikkeling")}</Button><ProposalTextLink href={l("/projecten")}>{t("Terug naar projecten")}</ProposalTextLink></div><ProposalTextLink href={l(`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`)}>{t("Deel je vraag of kritiek")}</ProposalTextLink></section>
  </main>;
}
