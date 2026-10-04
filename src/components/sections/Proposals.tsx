import { featuredProposals } from "@/data/proposals";
import ProposalCard from "@/components/ui/ProposalCard";

export default function Proposals() {
  return (
    <section
      id="voorstellen"
      className="proposals section"
      aria-labelledby="proposals-heading"
    >
      <div className="section-heading proposals-heading">
        <div>
          <p className="eyebrow">Ideeën voor Nederland</p>
          <h2 id="proposals-heading">Onze voorstellen</h2>
        </div>
        <p className="proposals-intro">
          Sommige ideeën beginnen niet als beleid, maar als een vraag: kan het
          beter? BOUW werkt voorstellen uit, onderzoekt de gevolgen en maakt
          zichtbaar wat ervoor nodig is.
        </p>
      </div>
      <div className="proposal-grid">
        {featuredProposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </section>
  );
}
