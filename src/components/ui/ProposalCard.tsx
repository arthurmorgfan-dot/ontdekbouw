import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import Image from "next/image";
import type { Proposal } from "@/types/proposal";

export default async function ProposalCard({ proposal }: { proposal: Proposal }) {
  const { t, l } = await getI18n();
  const headingId = `proposal-heading-${proposal.slug}`;

  return (
    <article className="proposal-card" aria-labelledby={headingId}>
      <div className="proposal-image">
        <Image
          src={proposal.image}
          alt={t("")}
          fill
          sizes="(max-width: 800px) 90vw, (min-width: 1600px) 780px, 46vw"
        />
      </div>
      <div className="proposal-body">
        <div className="proposal-meta">
          <p className="proposal-category">
            <span>{t(proposal.id)}</span> — {t(proposal.category)}
          </p>
          <span className="proposal-status">{t(proposal.status)}</span>
        </div>
        <h3 id={headingId}>{t(proposal.title)}</h3>
        <p className="proposal-description">{t(proposal.description)}</p>
        {proposal.page ? (
          <div className="proposal-details">
            <Link className="proposal-page-link ruler-link ruler-link-with-arrow" href={l(proposal.href)}> {t("Bekijk het voorstel")} <span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span>
              <span className="sr-only">: {t(proposal.title)}</span>
            </Link>
          </div>
        ) : <details className="proposal-details" id={`voorstel-${proposal.slug}`}>
          <summary className="ruler-link ruler-link-with-arrow"> {t("Bekijk het voorstel")} <span aria-hidden="true"><span className="ruler-link-arrow"><Icon name="arrow-right" /></span></span>
            <span className="sr-only">: {t(proposal.title)}</span>
          </summary>
          <div className="proposal-research">
            <p className="proposal-research-label">{t("Wat nog onderzocht moet worden")}</p>
            <p>{t(proposal.researchNote)}</p>
          </div>
        </details>}
      </div>
    </article>
  );
}
