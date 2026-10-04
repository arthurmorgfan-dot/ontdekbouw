import Link from "next/link";
import Image from "next/image";
import type { Proposal, ProposalPlan } from "@/types/proposal";

export default function ProposalHero({ proposal, plan }: { proposal: Proposal; plan: ProposalPlan }) {
  return (
    <section className="plan-hero" aria-labelledby="plan-title">
      <div className="plan-hero-copy">
        <Link className="plan-back" href="/#voorstellen">← Alle voorstellen</Link>
        <div className="plan-meta"><p className="eyebrow">{proposal.category}</p><span className="plan-status">{proposal.status}</span></div>
        <p className="plan-kicker">BOUWPLAN / {proposal.id}</p>
        <h1 id="plan-title">{proposal.title}</h1>
        <p className="plan-lead">{plan.lead}</p>
        <p className="plan-introduction">{plan.introduction}</p>
        <a className="plan-text-link" href="#probleem">Verken het bouwplan <span aria-hidden="true">↓</span></a>
      </div>
      <div className="plan-hero-image"><Image src={proposal.image} alt="" fill sizes="(max-width: 800px) 100vw, 46vw" loading="eager" /><span>Werkidee · nog te onderzoeken</span></div>
    </section>
  );
}
