export type Project = {
  name: string;
  slug: string;
  route: string;
  tagline: string;
  description: string;
  image: string;
  accent: "green" | "sand" | "blue" | "violet";
  page?: ProjectBlueprint;
};

export type ProjectBlueprint = {
  status: "In ontwikkeling" | "Extreem vroeg";
  category: string;
  statement: string;
  lead: string;
  question: string;
  stageNote: string;
  heroImage: string;
  compactWordmark?: boolean;
  heroImagePresentation?: { position: string; hideCaption: boolean };
  problem?: { title: string; paragraphs: string[]; principle: string };
  accessPoint?: { title: string; question: string; introduction: string; options: string[]; note: string };
  affordability?: { title: string; introduction: string; formula: string; definition: string; note: string };
  hypothesis: {
    title: string; introduction: string; steps: string[]; note: string;
    principle?: string;
    metric?: { label: string; definition: string; status: "Nog te meten"; note: string };
  };
  dailyRhythm?: { label: string; title: string; introduction: string; steps: string[]; explanation: string; note: string };
  system: { illustration?: { image: string; alt: string }; title: string; introduction: string; elements: { title: string; description: string; questions?: string[] }[] };
  designSections?: { id: string; title: string; introduction: string; items: string[]; note: string; tone?: "paper" | "sand" | "dark" }[];
  planning?: {
    housing: { title: string; introduction: string; criteria: string[]; note: string };
    amenities: { title: string; question: string; introduction: string; elements: { title: string; description: string; href?: string; linkLabel?: string }[] };
    adaptation: { title: string; introduction: string; factors: string[]; note: string };
    scaling: { title: string; principle: string; introduction: string; stages: { label: string; question: string }[]; note: string };
  };
  resultsAfterCriticism?: boolean;
  collection?: {
    title: string; introduction: string; image: string; imageAlt: string;
    categories: string[]; unknowns: { label: string; value: string }[]; note: string;
  };
  context?: { title: string; paragraphs: string[]; opportunities: string[]; principle: string; href: string; linkLabel: string };
  proof?: { title: string; introduction: string; questions: string[] };
  prototype: {
    title: string; introduction: string; statement?: string; scope: { label: string; value: string }[]; prerequisites: string[]; note: string;
    baseline?: { title: string; introduction: string; steps: string[]; benchmarks: string[]; note: string };
  };
  measurements: { title: string; introduction: string; items: { label: string; question: string; status: "Nog te meten" }[] };
  research?: {
    name: string; title: string; status: "Onderzoeksvraag"; introduction: string[];
    potentialOutcomes: string[]; questions: { title: string; question: string }[];
    possibilities: string[]; boundary: string; note: string;
  };
  results: { statement: string; description: string; principle: string };
  criticism: { title: string; introduction: string; risks: string[]; invitation: string; question: string; availability: string };
  nextStep: { title: string; introduction: string; steps: string[]; researchSequence?: string[]; note: string };
  relationships: { label: string; title: string; href: string; note?: string }[];
};
