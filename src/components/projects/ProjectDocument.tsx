import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectBlueprint } from "@/types/project";
import ProjectHero from "./ProjectHero";
import ProjectSection from "./ProjectSection";
import ProjectSystem, { ProjectFlow } from "./ProjectSystem";
import { PrototypeFramework, MeasurementFramework, ProjectResults } from "./ProjectTesting";
import ProjectResearch from "./ProjectResearch";

export default function ProjectDocument({ project, blueprint }: { project: Project; blueprint: ProjectBlueprint }) {
  let sectionNumber = 0;
  const nextNumber = () => String(++sectionNumber).padStart(2, "0");
  return <main id="main" className="project-blueprint">
    <ProjectHero project={project} blueprint={blueprint} />
    <nav className="blueprint-chapters" aria-label="Onderdelen van dit project"><a href="#systeem">Het systeem <span aria-hidden="true">↓</span></a><a href="#prototype">Eerste prototype <span aria-hidden="true">↓</span></a>{blueprint.research && <a href="#onderzoek">{blueprint.research.name} <span aria-hidden="true">↓</span></a>}<a href="#resultaten">Resultaten <span aria-hidden="true">↓</span></a></nav>
    <ProjectSection id="doel" number={nextNumber()} title={blueprint.hypothesis.title} wide>
      <p className="blueprint-core-question">{blueprint.question}</p><p>{blueprint.hypothesis.introduction}</p><p className="blueprint-small-label">Werkhypothese / nog te toetsen</p><ProjectFlow steps={blueprint.hypothesis.steps} label="Werkhypothese, geen bewezen causale keten" /><p className="blueprint-note">{blueprint.hypothesis.note}</p>
    </ProjectSection>
    <ProjectSection id="systeem" number={nextNumber()} title={blueprint.system.title}><ProjectSystem system={blueprint.system} /></ProjectSection>
    {blueprint.collection && <ProjectSection id="werkbeeld" number={nextNumber()} title={blueprint.collection.title} tone="sand" wide>
      <div className="blueprint-collection"><div className="blueprint-collection-art"><Image src={blueprint.collection.image} alt={blueprint.collection.imageAlt} width={1000} height={760} sizes="(max-width: 800px) 88vw, 50vw" /></div>
        <div className="blueprint-collection-copy"><p className="blueprint-small-label">Conceptuele presentatie</p><p>{blueprint.collection.introduction}</p><ul>{blueprint.collection.categories.map(category => <li key={category}>{category}</li>)}</ul><dl className="blueprint-unknowns">{blueprint.collection.unknowns.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl><p className="blueprint-note">{blueprint.collection.note}</p></div>
      </div>
    </ProjectSection>}
    {blueprint.context && <ProjectSection id="context" number={nextNumber()} title={blueprint.context.title} tone="dark">
      <blockquote className="blueprint-principle">{blueprint.context.principle}</blockquote>{blueprint.context.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<ul className="blueprint-opportunities">{blueprint.context.opportunities.map(item => <li key={item}>{item}</li>)}</ul><Link href={blueprint.context.href} className="blueprint-text-link">{blueprint.context.linkLabel} <span aria-hidden="true">→</span></Link>
    </ProjectSection>}
    <ProjectSection id="bewijs" number={nextNumber()} title={blueprint.proof.title}><p>{blueprint.proof.introduction}</p><ol className="blueprint-open-questions">{blueprint.proof.questions.map((question, index) => <li key={question}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>)}</ol></ProjectSection>
    <ProjectSection id="prototype" number={nextNumber()} title={blueprint.prototype.title} tone="sand"><PrototypeFramework prototype={blueprint.prototype} /></ProjectSection>
    <ProjectSection id="metingen" number={nextNumber()} title={blueprint.measurements.title}><MeasurementFramework measurements={blueprint.measurements} /></ProjectSection>
    {blueprint.research && <ProjectSection id="onderzoek" number={nextNumber()} title={blueprint.research.name} tone="dark" wide><ProjectResearch research={blueprint.research} /></ProjectSection>}
    <ProjectSection id="resultaten" number={nextNumber()} title="Resultaten" wide><ProjectResults results={blueprint.results} /></ProjectSection>
    <ProjectSection id="kritiek" number={nextNumber()} title={blueprint.criticism.title} tone="sand"><p>{blueprint.criticism.introduction}</p><ul className="blueprint-risks">{blueprint.criticism.risks.map(risk => <li key={risk}>{risk}</li>)}</ul>
      <aside id="uitdagen" className="blueprint-challenge" aria-labelledby="challenge-heading"><h3 id="challenge-heading">{blueprint.criticism.invitation}</h3><p className="blueprint-challenge-question">{blueprint.criticism.question}</p><p className="blueprint-note">{blueprint.criticism.availability}</p></aside>
    </ProjectSection>
    <ProjectSection id="volgende-stap" number={nextNumber()} title={blueprint.nextStep.title} tone="dark" wide><p>{blueprint.nextStep.introduction}</p><ProjectFlow steps={blueprint.nextStep.steps} label="Volgende stappen voor het bouwmodel" />
      {blueprint.nextStep.researchSequence && <div className="blueprint-research-sequence"><p className="blueprint-small-label">Onderzoek volgt op aangetoonde waarde</p><ProjectFlow steps={blueprint.nextStep.researchSequence} label="Eerst het basissysteem toetsen, dan de aanvullende onderzoeksvraag" /></div>}
      <p className="blueprint-note">{blueprint.nextStep.note}</p><div className="blueprint-actions"><a className="button button-light" href="#uitdagen">{blueprint.criticism.invitation} <span aria-hidden="true">↑</span></a><Link className="blueprint-text-link" href="/#projecten">Bekijk alle projecten <span aria-hidden="true">→</span></Link></div>
      <nav className="blueprint-relationships" aria-label="Relatie met BOUW"><ul>{blueprint.relationships.map(item => <li key={item.label}><p className="blueprint-small-label">{item.label}</p><Link href={item.href}>{item.title} <span aria-hidden="true">→</span></Link>{item.note && <p className="blueprint-note">{item.note}</p>}</li>)}</ul></nav>
    </ProjectSection>
  </main>;
}
