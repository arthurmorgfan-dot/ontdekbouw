import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons/Icon";
import Button from "@/components/ui/Button";
import type { Proposal, ProposalPlan, ProposalOverviewContent } from "@/types/proposal";
import PlanSection from "./PlanSection";
import { EvidenceState, ResultsState } from "./EvidenceAndResults";
import "./proposal-overview.css";

/** Uses the same ruler interaction as navigation and proposal-card links. */
export function ProposalTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="proposal-overview-link ruler-link-trigger"><span className="ruler-link">{children}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link>;
}

export function ProposalFlow({ steps, label, conditional = false }: { steps: string[]; label: string; conditional?: boolean }) {
  return <ol className={`proposal-overview-flow${conditional ? " proposal-overview-stages" : ""}`} aria-label={label}>{steps.map((step, index) => <li key={step}><span className="proposal-overview-step-label">{conditional ? index === 0 ? "Voorgestelde proef" : "Alleen bij voldoende bewijs" : `0${index + 1}`}</span><strong>{step}</strong>{index < steps.length - 1 && <Icon name="arrow-right" size={20} />}</li>)}</ol>;
}

export function ProposalMetrics({ labels, status }: { labels: string[]; status: string }) {
  return <dl className="proposal-overview-metrics">{labels.map(label => <div key={label}><dt>{label}</dt><dd>{status}</dd></div>)}</dl>;
}

export default function ProposalOverview({ proposal, plan, overview }: { proposal: Proposal; plan: ProposalPlan; overview: ProposalOverviewContent }) {
  return <main id="main" className="proposal-document proposal-overview">
    <section className="proposal-overview-hero" aria-labelledby="overview-title">
      <p className="eyebrow">BOUW VOORSTEL {proposal.id} — VOEDSEL</p>
      <div className="proposal-overview-hero-grid"><div><h1 id="overview-title">{overview.headline}</h1><p className="proposal-overview-lead">{plan.lead}</p><div className="proposal-overview-actions"><Button href="#hoe-het-werkt" variant="light" build>Bekijk hoe het werkt</Button><ProposalTextLink href="#berekening">Bekijk de berekening</ProposalTextLink></div></div><aside className="proposal-overview-dossier" aria-label="Status van het voorstel"><p className="eyebrow">{overview.name}</p><p className="proposal-overview-status">{proposal.status}</p><p>Een voorstel om te onderzoeken.<br />Nog geen gestarte proef.<br />Nog geen gemeten resultaten.</p><span className="proposal-overview-dossier-line" aria-hidden="true" /><p>Show the idea.<br />Show the system.<br />Then show the math.</p></aside></div>
    </section>
    <PlanSection id="principe" number="01" label="Het principe" title={overview.principle}>
      <p>{plan.introduction}</p><ol className="proposal-overview-layers">{overview.layers.map((layer, index) => <li key={layer.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{layer.title}</h3><p>{layer.description}</p></div></li>)}</ol><p className="plan-research-note">{plan.concept.caveat}</p>
    </PlanSection>
    <section id="basispakket" className="proposal-overview-box section" aria-labelledby="box-heading"><div className="proposal-overview-box-copy"><p className="eyebrow">02 / De basis</p><h2 id="box-heading">Wat zit er in de basis?</h2><p className="proposal-overview-box-statement">{overview.boxStatement}</p><p>Mogelijke productcategorieën. De samenstelling staat nog niet vast.</p><ul className="proposal-overview-categories">{plan.concept.categories.map(category => <li key={category}>{category}</li>)}</ul></div><figure><Image src="/images/projects/loop-crate.svg" alt="Illustratie van een voedselkrat met verse producten en een voorraadpot" width={1000} height={760} /><figcaption><span>BOUW Basispakket</span>Conceptillustratie / geen vastgesteld pakket of bestaande levering</figcaption></figure></section>
    <PlanSection id="hoe-het-werkt" number="03" label="Het systeem" title="Van productie naar huishouden.">
      <ProposalFlow steps={plan.delivery.flow} label="Voorgestelde voedselketen" /><p>{plan.concept.context}</p><ul className="plan-options">{plan.delivery.options.map(option => <li key={option}>{option}</li>)}</ul><p className="plan-research-note">{plan.delivery.unresolved}</p>
    </PlanSection>
    <PlanSection id="berekening" number="04" label="Laat de berekening zien" title={plan.headings.costs} dark>
      <p>{overview.mathStatement}</p><ProposalMetrics labels={overview.metrics} status={plan.costs.status} /><p className="plan-research-note">Nog geen begroting, vastgesteld pakket of berekende voedingswaarde. Hoeveelheden, kosten en capaciteit worden hier pas gepubliceerd met aannames, bronnen en beperkingen.</p>
    </PlanSection>
    <PlanSection id="pilot" number="05" label="Begin klein" title={overview.pilotHeadline}>
      <p>{plan.pilot.introduction}</p><ProposalFlow steps={overview.stages} label="Voorwaardelijk groeipad, geen toegezegde opschaling" conditional /><p className="plan-research-note">Het aantal van 100 deelnemers is een voorgestelde proefomvang, geen bestaande pilot. Latere stappen volgen alleen als resultaten dat rechtvaardigen. Ook aanpassen of stoppen is een mogelijke uitkomst.</p><ul className="plan-questions">{plan.nextStep.tasks.map(task => <li key={task}>{task}</li>)}</ul>
    </PlanSection>
    <EvidenceState evidence={plan.evidence} title={plan.headings.evidence} number="06" />
    <ResultsState results={plan.results} number="07" />
    <section className="proposal-overview-closing section" aria-labelledby="overview-closing-heading"><p className="eyebrow">Van voorstel naar bewijs</p><h2 id="overview-closing-heading">{overview.closingHeadline}</h2><p>Volg hoe we het voorstel afbakenen, de aannames doorrekenen en een mogelijke proef voorbereiden.</p><div className="proposal-overview-actions"><Button href="/volg-bouw" variant="light" build>Volg de ontwikkeling</Button><ProposalTextLink href="/projecten">Terug naar projecten</ProposalTextLink></div><ProposalTextLink href={`/doe-mee?type=meedenken&context=${proposal.slug}#bijdrage`}>Deel je vraag of kritiek</ProposalTextLink></section>
  </main>;
}
