import type { PublishedExperiment } from "@/types/experiment";
import { isPublishableExperiment } from "@/data/experiments";
import { routableProjects } from "@/data/projects";
import ProjectSection from "@/components/projects/ProjectSection";
import "@/app/projecten/[slug]/project.css";

/** Rendering a result is gated as well as its future route lookup. */
export default function ExperimentDocument({ experiment }: { experiment: PublishedExperiment }) {
  if (!isPublishableExperiment(experiment)) throw new Error("Resultaat mist gemeten uitkomsten of verifieerbare bronverwijzingen.");
  const project = routableProjects.find(item => item.slug === experiment.projectSlug)!;
  const result = experiment.completed;
  return <main id="main" className="project-blueprint">
    <header className="blueprint-section blueprint-wide"><p className="eyebrow">{project.name} / Experiment / Gepubliceerd</p><h1>{experiment.title}</h1><p>Gepubliceerd: {experiment.publishedAt}. Beoordeeld: {experiment.reviewedAt}.</p></header>
    <ProjectSection id="vraag" number="01" title="Vraag"><p>{experiment.question}</p></ProjectSection>
    <ProjectSection id="hypothese" number="02" label="Verwachting vóór de test" title="Hypothese"><p>{experiment.hypothesis}</p></ProjectSection>
    <ProjectSection id="methode" number="03" title="Methode"><h3>Gepland</h3><p>{experiment.plannedMethod}</p><h3>Werkelijk uitgevoerd</h3><p>{result.actualMethod}</p></ProjectSection>
    <ProjectSection id="kosten" number="04" title="Budget / kosten" tone="sand">
      <p>{experiment.cost.state === "onbekend" ? "Kosten onbekend; geen werkelijke kosten vastgesteld." : `${experiment.cost.state === "geraamd" ? "Raming — geen werkelijke uitgave" : "Werkelijke kosten"}: ${experiment.cost.amount} ${experiment.cost.currency}`}</p>
      {experiment.cost.state === "geraamd" && <p>{experiment.cost.basis}</p>}
      {experiment.cost.state === "werkelijk" && <p>Bronnen: {experiment.cost.sourceIds.join(", ")}</p>}
    </ProjectSection>
    <ProjectSection id="metingen" number="05" title="Metingen"><dl className="blueprint-measurements">{experiment.measurements.map(item => <div key={item.id}><dt>{item.label}</dt><dd><p>{item.method}</p>{item.state === "gepland" ? <><span className="blueprint-status">Nog te meten</span><p>Gepland: {item.target}</p></> : <><span className="blueprint-status">Gemeten</span><p>{item.value} — {item.measuredAt}</p><p>{item.limitations}</p><p>Bronnen: {item.sourceIds.join(", ")}</p></>}</dd></div>)}</dl></ProjectSection>
    <ProjectSection id="resultaten" number="06" title="Resultaten"><p>{result.outcome}</p><p>Bronnen: {result.outcomeSourceIds.join(", ")}</p></ProjectSection>
    <ProjectSection id="mislukkingen" number="07" title="Wat ging mis?" tone="sand"><p>{result.failures}</p><h3>Beperkingen</h3><p>{result.limitations}</p></ProjectSection>
    <ProjectSection id="bronnen" number="08" title="Bewijs / bronnen"><ul>{experiment.sources.map(source => <li id={`bron-${source.id}`} key={source.id}><a href={source.url}>{source.title}</a><p>{source.kind} · Gecontroleerd: {source.verifiedAt}</p><p>{source.limitations}</p></li>)}</ul>{experiment.artifacts.map(item => <p key={item.id}><a href={item.url}>{item.title}</a> — {item.kind === "conceptbeeld" ? "Conceptbeeld, geen prototypebewijs" : item.kind === "model" ? "Model, geen uitgevoerd prototype" : "Prototypebewijs"}</p>)}</ProjectSection>
    <ProjectSection id="conclusie" number="09" title="Conclusie"><p>{result.conclusion}</p><h3>Wat we niet kunnen concluderen</h3><p>{result.cannotConclude}</p></ProjectSection>
    <ProjectSection id="besluit" number="10" title="Besluit"><p>{result.decision}</p></ProjectSection>
    <ProjectSection id="volgende-stap" number="11" title="Volgende stap" tone="dark"><p>{result.nextStep}</p><p>Mislukken mag. Verbergen niet.</p></ProjectSection>
  </main>;
}
