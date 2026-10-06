import type { Experiment, PublishedExperiment } from "@/types/experiment";
import { routableProjects } from "@/data/projects";
import { loopExperiment001 } from "@/data/experiment-records/loop-001";
import type { ResearchNotebook } from "@/types/experiment";

// Public research notes can exist before results. Never insert sample outcomes here.
export const experiments: Experiment[] = [loopExperiment001];

/** An explicitly public in-progress notebook is never a completed/published result. */
export function getResearchExperiment(slug: string): (Experiment & { notebook: ResearchNotebook }) | undefined {
  return experiments.find((item): item is Experiment & { notebook: ResearchNotebook } => item.slug === slug && item.status === "lopend" && !!item.notebook);
}

/** Publication requires recorded observations and traceable evidence, not just a plan. */
export function isPublishableExperiment(experiment: Experiment): experiment is PublishedExperiment {
  if (experiment.status !== "gepubliceerd") return false;
  const sourceIds = new Set(experiment.sources.map(source => source.id));
  const traceable = (ids: string[]) => ids.length > 0 && ids.every(id => sourceIds.has(id));
  const required = [experiment.id, experiment.slug, experiment.title, experiment.question, experiment.hypothesis, experiment.plannedMethod, experiment.publishedAt, experiment.reviewedAt, ...Object.values(experiment.completed).filter(value => typeof value === "string")];
  return required.every(value => value.trim().length > 0)
    && routableProjects.some(project => project.slug === experiment.projectSlug)
    && sourceIds.size === experiment.sources.length
    && new Set(experiment.measurements.map(item => item.id)).size === experiment.measurements.length
    && new Set(experiment.artifacts.map(item => item.id)).size === experiment.artifacts.length
    && experiment.sources.every(source => source.title.trim() && source.verifiedAt.trim() && source.limitations.trim() && /^https?:\/\//.test(source.url))
    && traceable(experiment.completed.outcomeSourceIds)
    && experiment.measurements.some(item => item.state === "gemeten")
    && experiment.measurements.every(item => item.state !== "gemeten" || (item.value.trim() && item.measuredAt.trim() && item.method.trim() && item.limitations.trim() && traceable(item.sourceIds)))
    && (experiment.cost.state === "onbekend" || (Number.isFinite(experiment.cost.amount) && experiment.cost.amount >= 0 && experiment.cost.currency.trim().length > 0))
    && (experiment.cost.state !== "geraamd" || experiment.cost.basis.trim().length > 0)
    && (experiment.cost.state !== "werkelijk" || traceable(experiment.cost.sourceIds))
    && experiment.artifacts.every(item => item.kind !== "prototypebewijs" || traceable(item.sourceIds));
}

// Only verified, measured results can enter a future /resultaten/[slug] route.
export function getPublishedExperiment(slug: string): PublishedExperiment | undefined {
  return experiments.find((experiment): experiment is PublishedExperiment => experiment.slug === slug && isPublishableExperiment(experiment));
}
