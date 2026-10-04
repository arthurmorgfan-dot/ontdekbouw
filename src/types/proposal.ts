/** Proposals are ideas to investigate, not demonstrated solutions. */
export type Proposal = {
  id: string;
  featured: boolean;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  /** Only linked when page content is available. */
  href: string;
  status: "In onderzoek";
  researchNote: string;
  page?: ProposalPlan;
};

export type ProposalSource = {
  id: string;
  title: string;
  url: string;
  publisher: string;
  publishedAt: string;
  verifiedAt: string;
  kind: "Onderzoek" | "Pilot";
  finding: string;
  limitations: string;
};

export type ProposalPlan = {
  headings: { problem: string; concept: string; context: string; delivery: string; costs: string; evidence: string; objections: string };
  categoryListLabel: string;
  lead: string;
  introduction: string;
  problem: { paragraphs: string[]; callout: string };
  concept: {
    introduction: string;
    categories: string[];
    caveat: string;
    context: string;
    designQuestion?: {
      heading: string;
      introduction: string;
      options: { title: string; description: string }[];
      unresolved: string;
    };
  };
  delivery: { flow: string[]; options: string[]; unresolved: string };
  pilot: { introduction: string; dimensions: { label: string; value: string }[] };
  costs: { status: string; items: string[]; note: string };
  evidence: {
    sources: ProposalSource[];
    knownEmptyState: string;
    questions: string[];
  };
  objections: string[];
  results: { status: string; description: string; outcomes: { label: string; value: string; context: string; sourceId: string }[] };
  challenge: { heading: string; lead: string; prompts: string[]; availability: string };
  nextStep: { introduction: string; tasks: string[] };
};
