import type { ProjectBlueprint } from "@/types/project";
import { ProjectFlow } from "./ProjectSystem";

export function PrototypeFramework({ prototype }: { prototype: ProjectBlueprint["prototype"] }) {
  return <><p>{prototype.introduction}</p>
    {prototype.baseline && <div>
      <h3>{prototype.baseline.title}</h3><p>{prototype.baseline.introduction}</p>
      <ProjectFlow steps={prototype.baseline.steps} label="Toekomstige betaalbaarheidsbaseline, nog niet gemeten" />
      <p className="blueprint-small-label">Mogelijke benchmarks / geen keuze gemaakt</p>
      <ul className="blueprint-risks">{prototype.baseline.benchmarks.map(benchmark => <li key={benchmark}>{benchmark}</li>)}</ul>
      <p className="blueprint-note">{prototype.baseline.note}</p>
    </div>}
    <p className="blueprint-small-label">Mogelijke proef / nog niet gestart</p>
    <dl className="blueprint-framework">{prototype.scope.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
    <h3>Vóór een prototype</h3><ProjectFlow steps={prototype.prerequisites} label="Voorwaarden vóór een prototype" /><p className="blueprint-note">{prototype.note}</p>
  </>;
}

export function MeasurementFramework({ measurements }: { measurements: ProjectBlueprint["measurements"] }) {
  return <><p>{measurements.introduction}</p><dl className="blueprint-measurements">{measurements.items.map(item => <div key={item.label}>
    <dt>{item.label}</dt><dd><p>{item.question}</p><span className="blueprint-status">{item.status}</span></dd>
  </div>)}</dl></>;
}

export function ProjectResults({ results }: { results: ProjectBlueprint["results"] }) {
  return <div className="blueprint-results"><p className="blueprint-result-statement">{results.statement}</p><p>{results.description}</p><blockquote>{results.principle}</blockquote></div>;
}
