import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectBlueprint } from "@/types/project";
import ProjectHero from "./ProjectHero";
import ProjectSection from "./ProjectSection";
import ProjectSystem, { ProjectFlow } from "./ProjectSystem";
import { PrototypeFramework, MeasurementFramework, ProjectResults } from "./ProjectTesting";
import ProjectResearch from "./ProjectResearch";
import ProjectPlanning from "./ProjectPlanning";

export default function ProjectDocument({ project, blueprint }: { project: Project; blueprint: ProjectBlueprint }) {
  let sectionNumber = 0;
  const nextNumber = () => String(++sectionNumber).padStart(2, "0");
  return <main id="main" className="project-blueprint">
    <ProjectHero project={project} blueprint={blueprint} />
    <nav className="blueprint-chapters" aria-label="Onderdelen van dit project"><a href="#systeem">Het systeem <span aria-hidden="true">↓</span></a><a href="#prototype">Eerste prototype <span aria-hidden="true">↓</span></a>{blueprint.research && <a href="#onderzoek">{blueprint.research.name} <span aria-hidden="true">↓</span></a>}<a href="#resultaten">Resultaten <span aria-hidden="true">↓</span></a></nav>
    {blueprint.problem && <ProjectSection id="probleem" number={nextNumber()} title={blueprint.problem.title}>{blueprint.problem.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<h3>{blueprint.problem.principle}</h3></ProjectSection>}
    <ProjectSection id="doel" number={nextNumber()} title={blueprint.hypothesis.title} wide>
      <p className="blueprint-core-question">{blueprint.question}</p>
      {blueprint.hypothesis.principle && <h3>{blueprint.hypothesis.principle}</h3>}
      <p>{blueprint.hypothesis.introduction}</p>
      {blueprint.hypothesis.metric && <div>
        <p className="blueprint-small-label">{blueprint.hypothesis.metric.label}</p>
        <h3>{blueprint.hypothesis.metric.definition}</h3>
        <span className="blueprint-status">{blueprint.hypothesis.metric.status}</span>
        <p className="blueprint-note">{blueprint.hypothesis.metric.note}</p>
      </div>}
      <p className="blueprint-small-label">Werkhypothese / nog te toetsen</p><ProjectFlow steps={blueprint.hypothesis.steps} label="Werkhypothese, geen bewezen causale keten" /><p className="blueprint-note">{blueprint.hypothesis.note}</p>
    </ProjectSection>
    {blueprint.dailyRhythm && <ProjectSection id="waarom-loop" label={blueprint.dailyRhythm.label} title={blueprint.dailyRhythm.title} tone="sand" wide>
      <p className="blueprint-core-question">{blueprint.dailyRhythm.introduction}</p>
      <ProjectFlow steps={blueprint.dailyRhythm.steps} label="Beeld van een dagelijks ritme, geen voorschrift" />
      <p>{blueprint.dailyRhythm.explanation}</p>
      <p className="blueprint-note">{blueprint.dailyRhythm.note}</p>
    </ProjectSection>}
    <ProjectSection id="systeem" number={nextNumber()} title={blueprint.system.title}><ProjectSystem system={blueprint.system} /></ProjectSection>
    {blueprint.designSections?.map(section => <ProjectSection key={section.id} id={section.id} number={nextNumber()} title={section.title} tone={section.tone}><p>{section.introduction}</p><ProjectFlow steps={section.items} label={`Ontwerpfactoren: ${section.title}`} /><p className="blueprint-note">{section.note}</p></ProjectSection>)}
    {blueprint.planning && <ProjectPlanning planning={blueprint.planning} numbers={[nextNumber(), nextNumber(), nextNumber(), nextNumber()]} />}
    {blueprint.collection && <ProjectSection id="werkbeeld" number={nextNumber()} title={blueprint.collection.title} tone="sand" wide>
      <div className="blueprint-collection"><div className="blueprint-collection-art"><Image src={blueprint.collection.image} alt={blueprint.collection.imageAlt} width={1000} height={760} sizes="(max-width: 800px) 88vw, 50vw" /></div>
        <div className="blueprint-collection-copy"><p className="blueprint-small-label">Conceptuele presentatie</p><p>{blueprint.collection.introduction}</p><ul>{blueprint.collection.categories.map(category => <li key={category}>{category}</li>)}</ul><dl className="blueprint-unknowns">{blueprint.collection.unknowns.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl><p className="blueprint-note">{blueprint.collection.note}</p></div>
      </div>
    </ProjectSection>}
    {blueprint.context && <ProjectSection id="context" number={nextNumber()} title={blueprint.context.title} tone="dark">
      <blockquote className="blueprint-principle">{blueprint.context.principle}</blockquote>{blueprint.context.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<ul className="blueprint-opportunities">{blueprint.context.opportunities.map(item => <li key={item}>{item}</li>)}</ul><Link href={blueprint.context.href} className="blueprint-text-link">{blueprint.context.linkLabel} <span aria-hidden="true">→</span></Link>
    </ProjectSection>}
    {blueprint.accessPoint && <ProjectSection id="toegangspunt" number={nextNumber()} title={blueprint.accessPoint.title} tone="sand" wide>
      <p className="blueprint-core-question">{blueprint.accessPoint.question}</p><p>{blueprint.accessPoint.introduction}</p><ProjectFlow steps={blueprint.accessPoint.options} label="Mogelijke toegangsvormen, nog te vergelijken" /><p className="blueprint-note">{blueprint.accessPoint.note}</p>
    </ProjectSection>}
    {blueprint.affordability && <ProjectSection id="werktijd" number={nextNumber()} title={blueprint.affordability.title} tone="dark">
      <p>{blueprint.affordability.introduction}</p><blockquote className="blueprint-principle">{blueprint.affordability.formula}</blockquote><p className="blueprint-small-label">LOOP-metriek</p><h3>{blueprint.affordability.definition}</h3><span className="blueprint-status">Nog te meten</span><p className="blueprint-note">{blueprint.affordability.note}</p>
    </ProjectSection>}
    {blueprint.proof && <ProjectSection id="bewijs" number={nextNumber()} title={blueprint.proof.title}><p>{blueprint.proof.introduction}</p><ol className="blueprint-open-questions">{blueprint.proof.questions.map((question, index) => <li key={question}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>)}</ol></ProjectSection>}
    <ProjectSection id="prototype" number={nextNumber()} title={blueprint.prototype.title} tone="sand"><PrototypeFramework prototype={blueprint.prototype} /></ProjectSection>
    <ProjectSection id="metingen" number={nextNumber()} title={blueprint.measurements.title}><MeasurementFramework measurements={blueprint.measurements} /></ProjectSection>
    {blueprint.research && <ProjectSection id="onderzoek" number={nextNumber()} title={blueprint.research.name} tone="dark" wide><ProjectResearch research={blueprint.research} /></ProjectSection>}
    {!blueprint.resultsAfterCriticism && <ProjectSection id="resultaten" number={nextNumber()} title="Resultaten" wide><ProjectResults results={blueprint.results} /></ProjectSection>}
    <ProjectSection id="kritiek" number={nextNumber()} title={blueprint.criticism.title} tone="sand"><p>{blueprint.criticism.introduction}</p><ul className="blueprint-risks">{blueprint.criticism.risks.map(risk => <li key={risk}>{risk}</li>)}</ul>
      <aside id="uitdagen" className="blueprint-challenge" aria-labelledby="challenge-heading"><h3 id="challenge-heading">{blueprint.criticism.invitation}</h3><p className="blueprint-challenge-question">{blueprint.criticism.question}</p><p className="blueprint-note">{blueprint.criticism.availability}</p></aside>
    </ProjectSection>
    {blueprint.resultsAfterCriticism && <ProjectSection id="resultaten" number={nextNumber()} title="Resultaten" wide><ProjectResults results={blueprint.results} /></ProjectSection>}
    <ProjectSection id="volgende-stap" number={nextNumber()} title={blueprint.nextStep.title} tone="dark" wide><p>{blueprint.nextStep.introduction}</p><ProjectFlow steps={blueprint.nextStep.steps} label="Volgende stappen voor het bouwmodel" />
      {blueprint.nextStep.researchSequence && <div className="blueprint-research-sequence"><p className="blueprint-small-label">Onderzoek volgt op aangetoonde waarde</p><ProjectFlow steps={blueprint.nextStep.researchSequence} label="Eerst het basissysteem toetsen, dan de aanvullende onderzoeksvraag" /></div>}
      <p className="blueprint-note">{blueprint.nextStep.note}</p><div className="blueprint-actions"><a className="button button-light" href="#uitdagen">{blueprint.criticism.invitation} <span aria-hidden="true">↑</span></a><Link className="blueprint-text-link" href="/#projecten">Bekijk alle projecten <span aria-hidden="true">→</span></Link></div>
      <nav className="blueprint-relationships" aria-label="Relatie met BOUW"><ul>{blueprint.relationships.map(item => <li key={item.href}><p className="blueprint-small-label">{item.label}</p><Link href={item.href}>{item.title} <span aria-hidden="true">→</span></Link>{item.note && <p className="blueprint-note">{item.note}</p>}</li>)}</ul></nav>
    </ProjectSection>
  </main>;
}
