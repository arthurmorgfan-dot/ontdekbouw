import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import SceneImage from "@/components/ui/SceneImage";
import { proposalArtwork } from "@/lib/visuals";
import type { Proposal, ProposalPlan } from "@/types/proposal";

export default async function ProposalHero({ proposal, plan }: { proposal: Proposal; plan: ProposalPlan }) {
  const { t, l } = await getI18n();
  return (
    <section className="plan-hero" aria-labelledby="plan-title">
      <div className="plan-hero-copy">
        <Link className="plan-back" href={l("/#voorstellen")}><Icon name="arrow-left" /> {t("Alle voorstellen")}</Link>
        <div className="plan-meta"><p className="eyebrow">{t(proposal.category)}</p><span className="plan-status">{t(proposal.status)}</span></div>
        <p className="plan-kicker">{t("BOUWPLAN /")} {t(proposal.id)}</p>
        <h1 id="plan-title">{t(proposal.title)}</h1>
        <p className="plan-lead">{t(plan.lead)}</p>
        <p className="plan-introduction">{t(plan.introduction)}</p>
        <a className="plan-text-link" href={l("#probleem")}>{t("Verken het bouwplan")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a>
      </div>
      <div className="plan-hero-image"><SceneImage src={proposalArtwork[proposal.slug]} sizes="(max-width: 767px) 100vw, 35vw" eager /><span>{t("Conceptbeeld / werkidee, nog te onderzoeken")}</span></div>
    </section>
  );
}
