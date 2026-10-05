import Icon from "@/components/icons/Icon";
import Link from "next/link";
import SceneImage from "@/components/ui/SceneImage";
import { proposalArtwork } from "@/lib/visuals";
import type { Proposal, ProposalPlan } from "@/types/proposal";

export default function ProposalHero({ proposal, plan }: { proposal: Proposal; plan: ProposalPlan }) {
  return (
    <section className="plan-hero" aria-labelledby="plan-title">
      <div className="plan-hero-copy">
        <Link className="plan-back" href="/#voorstellen"><Icon name="arrow-left" /> Alle voorstellen</Link>
        <div className="plan-meta"><p className="eyebrow">{proposal.category}</p><span className="plan-status">{proposal.status}</span></div>
        <p className="plan-kicker">BOUWPLAN / {proposal.id}</p>
        <h1 id="plan-title">{proposal.title}</h1>
        <p className="plan-lead">{plan.lead}</p>
        <p className="plan-introduction">{plan.introduction}</p>
        <a className="plan-text-link" href="#probleem">Verken het bouwplan <span aria-hidden="true"><Icon name="arrow-down" /></span></a>
      </div>
      <div className="plan-hero-image"><SceneImage src={proposalArtwork[proposal.slug]} sizes="(max-width: 767px) 100vw, 35vw" eager /><span>Conceptbeeld / werkidee, nog te onderzoeken</span></div>
    </section>
  );
}
