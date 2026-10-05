/** Hypotheses, plans and completed observations are deliberately separate. */
export type EvidenceSource = {
  id: string; title: string; url: string; kind: "data" | "onderzoek" | "verslag";
  verifiedAt: string; limitations: string;
};
export type ExperimentCost =
  | { state: "onbekend" }
  | { state: "geraamd"; amount: number; currency: string; basis: string }
  | { state: "werkelijk"; amount: number; currency: string; sourceIds: string[] };
export type ExperimentMeasurement = {
  id: string; label: string; method: string;
} & (
  | { state: "gepland"; target: string }
  | { state: "gemeten"; value: string; measuredAt: string; sourceIds: string[]; limitations: string }
);
export type ExperimentArtifact = {
  id: string; title: string; url: string;
  kind: "conceptbeeld" | "model" | "prototypebewijs";
  sourceIds: string[];
};
export type ExperimentPlan = {
  id: string; slug: string; title: string; projectSlug: string;
  question: string; hypothesis: string; plannedMethod: string;
  cost: ExperimentCost; measurements: ExperimentMeasurement[];
  sources: EvidenceSource[]; artifacts: ExperimentArtifact[];
};
export type CompletedExperiment = {
  actualMethod: string; outcome: string; failures: string; limitations: string;
  conclusion: string; cannotConclude: string;
  decision: "doorgaan" | "aanpassen" | "opnieuw testen" | "stoppen";
  nextStep: string; outcomeSourceIds: string[];
};
export type Experiment = ExperimentPlan & (
  | { status: "gepland" | "in voorbereiding" | "lopend"; completed?: never }
  | { status: "afgerond"; completed: CompletedExperiment }
  | { status: "gepubliceerd"; completed: CompletedExperiment; publishedAt: string; reviewedAt: string }
);
export type PublishedExperiment = Extract<Experiment, { status: "gepubliceerd" }>;
