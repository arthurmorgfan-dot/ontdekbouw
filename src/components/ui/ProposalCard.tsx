import Link from "next/link";
import Image from "next/image";
import type { Proposal } from "@/types/proposal";

export default function ProposalCard({ proposal }: { proposal: Proposal }) {
  const headingId = `proposal-heading-${proposal.slug}`;

  return (
    <article className="proposal-card" aria-labelledby={headingId}>
      <div className="proposal-image">
        <Image
          src={proposal.image}
          alt=""
          fill
          sizes="(max-width: 800px) 90vw, (min-width: 1600px) 780px, 46vw"
        />
      </div>
      <div className="proposal-body">
        <div className="proposal-meta">
          <p className="proposal-category">
            <span>{proposal.id}</span> — {proposal.category}
          </p>
          <span className="proposal-status">{proposal.status}</span>
        </div>
        <h3 id={headingId}>{proposal.title}</h3>
        <p className="proposal-description">{proposal.description}</p>
        {proposal.page ? (
          <div className="proposal-details">
            <Link className="proposal-page-link" href={proposal.href}>
              Bekijk het voorstel <span aria-hidden="true">→</span>
              <span className="sr-only">: {proposal.title}</span>
            </Link>
          </div>
        ) : <details className="proposal-details" id={`voorstel-${proposal.slug}`}>
          <summary>
            Bekijk het voorstel <span aria-hidden="true">→</span>
            <span className="sr-only">: {proposal.title}</span>
          </summary>
          <div className="proposal-research">
            <p className="proposal-research-label">Wat nog onderzocht moet worden</p>
            <p>{proposal.researchNote}</p>
          </div>
        </details>}
      </div>
    </article>
  );
}
