import Link from "next/link";
import type { ProjectBlueprint } from "@/types/project";
import ProjectSection from "./ProjectSection";
import { ProjectFlow } from "./ProjectSystem";

export default function ProjectPlanning({ planning, numbers }: { planning: NonNullable<ProjectBlueprint["planning"]>; numbers: string[] }) {
  return <>
    <ProjectSection id="wonen" number={numbers[0]} title={planning.housing.title} tone="sand">
      <p>{planning.housing.introduction}</p><ProjectFlow steps={planning.housing.criteria} label="Criteria om bouwmethoden te vergelijken" /><p className="blueprint-note">{planning.housing.note}</p>
    </ProjectSection>
    <ProjectSection id="voorzieningen" number={numbers[1]} title={planning.amenities.title}>
      <p className="blueprint-core-question">{planning.amenities.question}</p><p>{planning.amenities.introduction}</p>
      <div className="blueprint-amenities">{planning.amenities.elements.map(element => <div key={element.title}><h3>{element.title}</h3><p>{element.description}</p>{element.href && <Link className="blueprint-text-link" href={element.href}>{element.linkLabel} <span aria-hidden="true">→</span></Link>}</div>)}</div>
    </ProjectSection>
    <ProjectSection id="lokale-uitvoering" number={numbers[2]} title={planning.adaptation.title} tone="dark">
      <p>{planning.adaptation.introduction}</p><ul className="blueprint-opportunities">{planning.adaptation.factors.map(factor => <li key={factor}>{factor}</li>)}</ul><p className="blueprint-note">{planning.adaptation.note}</p>
    </ProjectSection>
    <ProjectSection id="schaalmodel" number={numbers[3]} title={planning.scaling.title} wide>
      <p className="blueprint-core-question">{planning.scaling.principle}</p><p>{planning.scaling.introduction}</p>
      <ol className="blueprint-scale" aria-label="Onbewezen schaalstappen">{planning.scaling.stages.map((stage, index) => <li key={stage.label}><div className={`blueprint-scale-grid blueprint-scale-${index}`} aria-hidden="true">{Array.from({ length: 16 }, (_, cell) => <span key={cell} />)}</div><h3>{stage.label}</h3><p>{stage.question}</p></li>)}</ol>
      <p className="blueprint-note">{planning.scaling.note}</p>
    </ProjectSection>
  </>;
}
