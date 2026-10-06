import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectBlueprint } from "@/types/project";
import ProjectHero from "./ProjectHero";
import ProjectSection from "./ProjectSection";
import ProjectSystem, { ProjectFlow } from "./ProjectSystem";
import { PrototypeFramework, MeasurementFramework, ProjectResults } from "./ProjectTesting";
import ProjectResearch from "./ProjectResearch";
import ProjectPlanning from "./ProjectPlanning";
import Button from "@/components/ui/Button";
import { getResearchExperiment } from "@/data/experiments";
import ResearchNotebook from "@/components/experiments/ResearchNotebook";

export default async function ProjectDocument({ project, blueprint }: { project: Project; blueprint: ProjectBlueprint }) {
  const { t, l } = await getI18n();
  const experiment = blueprint.experimentSlug ? getResearchExperiment(blueprint.experimentSlug) : undefined;
  const polishEndActions = project.slug === "loop";
  const endLinkContent = (text: string) => polishEndActions
    ? <><span className="ruler-link">{t(text)}</span>{t(" ")}<span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></>
    : <>{t(text)} <span aria-hidden="true"><Icon name="arrow-right" /></span></>;
  let sectionNumber = 0;
  const nextNumber = () => String(++sectionNumber).padStart(2, "0");
  return <main id="main" className={`project-blueprint project-${project.slug}`}>
    <ProjectHero project={project} blueprint={blueprint} />
    <nav className="blueprint-chapters" aria-label={t("Onderdelen van dit project")}>{experiment && <a href={l(`#experiment-${experiment.id}`)}>{t("Experiment")} {t(experiment.id)} <span aria-hidden="true"><Icon name="arrow-down" /></span></a>}<a href={l("#systeem")}>{t("Het systeem")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a><a href={l("#prototype")}>{t("Eerste prototype")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a>{blueprint.research && <a href={l("#onderzoek")}>{t(blueprint.research.name)} <span aria-hidden="true"><Icon name="arrow-down" /></span></a>}<a href={l("#resultaten")}>{t("Resultaten")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a></nav>
    {experiment && <ResearchNotebook experiment={experiment} notebook={experiment.notebook} productDemoHref={blueprint.productExperience?.demoHref} />}
    {blueprint.problem && <ProjectSection id="probleem" number={nextNumber()} title={t(blueprint.problem.title)}>{blueprint.problem.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}<h3>{t(blueprint.problem.principle)}</h3></ProjectSection>}
    <ProjectSection id="doel" number={nextNumber()} title={t(blueprint.hypothesis.title)} wide>
      <p className="blueprint-core-question">{t(blueprint.question)}</p>
      {blueprint.hypothesis.principle && <h3>{t(blueprint.hypothesis.principle)}</h3>}
      <p>{t(blueprint.hypothesis.introduction)}</p>
      {blueprint.hypothesis.metric && <div>
        <p className="blueprint-small-label">{t(blueprint.hypothesis.metric.label)}</p>
        <h3>{t(blueprint.hypothesis.metric.definition)}</h3>
        <span className="blueprint-status">{t(blueprint.hypothesis.metric.status)}</span>
        <p className="blueprint-note">{t(blueprint.hypothesis.metric.note)}</p>
      </div>}
      <p className="blueprint-small-label">{t("Werkhypothese / nog te toetsen")}</p><ProjectFlow steps={blueprint.hypothesis.steps} label={t("Werkhypothese, geen bewezen causale keten")} /><p className="blueprint-note">{t(blueprint.hypothesis.note)}</p>
    </ProjectSection>
    {blueprint.dailyRhythm && <ProjectSection id="waarom-loop" label={t(blueprint.dailyRhythm.label)} title={t(blueprint.dailyRhythm.title)} tone="sand" wide>
      <p className="blueprint-core-question">{t(blueprint.dailyRhythm.introduction)}</p>
      <ProjectFlow steps={blueprint.dailyRhythm.steps} label={t("Beeld van een dagelijks ritme, geen voorschrift")} />
      <p>{t(blueprint.dailyRhythm.explanation)}</p>
      <p className="blueprint-note">{t(blueprint.dailyRhythm.note)}</p>
    </ProjectSection>}
    <ProjectSection id="systeem" number={nextNumber()} title={t(blueprint.system.title)}><ProjectSystem system={blueprint.system} /></ProjectSection>
    {blueprint.designSections?.map(section => <ProjectSection key={section.id} id={section.id} number={nextNumber()} title={t(section.title)} tone={section.tone}><p>{t(section.introduction)}</p><ProjectFlow steps={section.items} label={`${t("Ontwerpfactoren:")} ${t(section.title)}`} /><p className="blueprint-note">{t(section.note)}</p></ProjectSection>)}
    {blueprint.planning && <ProjectPlanning planning={blueprint.planning} numbers={[nextNumber(), nextNumber(), nextNumber(), nextNumber()]} />}
    {blueprint.collection && <ProjectSection id="werkbeeld" number={nextNumber()} title={t(blueprint.collection.title)} tone="sand" wide>
      <div className="blueprint-collection"><div className="blueprint-collection-art"><Image src={blueprint.collection.image} alt={t(blueprint.collection.imageAlt)} width={1000} height={760} sizes="(max-width: 800px) 88vw, 50vw" /></div>
        <div className="blueprint-collection-copy"><p className="blueprint-small-label">{t("Conceptuele presentatie")}</p><p>{t(blueprint.collection.introduction)}</p><ul>{blueprint.collection.categories.map(category => <li key={category}>{t(category)}</li>)}</ul><dl className="blueprint-unknowns">{blueprint.collection.unknowns.map(item => <div key={item.label}><dt>{t(item.label)}</dt><dd>{t(item.value)}</dd></div>)}</dl><p className="blueprint-note">{t(blueprint.collection.note)}</p></div>
      </div>
    </ProjectSection>}
    {blueprint.context && <ProjectSection id="context" number={nextNumber()} title={t(blueprint.context.title)} tone="dark">
      <blockquote className="blueprint-principle">{t(blueprint.context.principle)}</blockquote>{blueprint.context.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}<ul className="blueprint-opportunities">{blueprint.context.opportunities.map(item => <li key={item}>{t(item)}</li>)}</ul><Link href={l(blueprint.context.href)} className="blueprint-text-link">{t(blueprint.context.linkLabel)} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link>
    </ProjectSection>}
    {blueprint.accessPoint && <ProjectSection id="toegangspunt" number={nextNumber()} title={t(blueprint.accessPoint.title)} tone="sand" wide>
      <p className="blueprint-core-question">{t(blueprint.accessPoint.question)}</p><p>{t(blueprint.accessPoint.introduction)}</p><ProjectFlow steps={blueprint.accessPoint.options} label={t("Mogelijke toegangsvormen, nog te vergelijken")} /><p className="blueprint-note">{t(blueprint.accessPoint.note)}</p>
    </ProjectSection>}
    {blueprint.affordability && <ProjectSection id="werktijd" number={nextNumber()} title={t(blueprint.affordability.title)} tone="dark">
      <p>{t(blueprint.affordability.introduction)}</p><blockquote className="blueprint-principle">{t(blueprint.affordability.formula)}</blockquote><p className="blueprint-small-label">{t("LOOP-metriek")}</p><h3>{t(blueprint.affordability.definition)}</h3><span className="blueprint-status">{t("Nog te meten")}</span><p className="blueprint-note">{t(blueprint.affordability.note)}</p>
    </ProjectSection>}
    {blueprint.proof && <ProjectSection id="bewijs" number={nextNumber()} title={t(blueprint.proof.title)}><p>{t(blueprint.proof.introduction)}</p><ol className="blueprint-open-questions">{blueprint.proof.questions.map((question, index) => <li key={question}><span aria-hidden="true">{t(String(index + 1).padStart(2, "0"))}</span><p>{t(question)}</p></li>)}</ol></ProjectSection>}
    <ProjectSection id="prototype" number={nextNumber()} title={t(blueprint.prototype.title)} tone="sand"><PrototypeFramework prototype={blueprint.prototype} /></ProjectSection>
    <ProjectSection id="metingen" number={nextNumber()} title={t(blueprint.measurements.title)}><MeasurementFramework measurements={blueprint.measurements} /></ProjectSection>
    {blueprint.research && <ProjectSection id="onderzoek" number={nextNumber()} title={t(blueprint.research.name)} tone="dark" wide><ProjectResearch research={blueprint.research} /></ProjectSection>}
    {!blueprint.resultsAfterCriticism && <ProjectSection id="resultaten" number={nextNumber()} title={t("Resultaten")} wide><ProjectResults results={blueprint.results} /></ProjectSection>}
    <ProjectSection id="kritiek" number={nextNumber()} title={t(blueprint.criticism.title)} tone="sand"><p>{t(blueprint.criticism.introduction)}</p><ul className="blueprint-risks">{blueprint.criticism.risks.map(risk => <li key={risk}>{t(risk)}</li>)}</ul>
      <aside id="uitdagen" className="blueprint-challenge" aria-labelledby="challenge-heading"><h3 id="challenge-heading">{t(blueprint.criticism.invitation)}</h3><p className="blueprint-challenge-question">{t(blueprint.criticism.question)}</p><Link className="blueprint-text-link" href={l(`/doe-mee?type=meedenken&context=${project.slug}#bijdrage`)}>{t("Deel je vraag of kritiek")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link></aside>
    </ProjectSection>
    {blueprint.resultsAfterCriticism && <ProjectSection id="resultaten" number={nextNumber()} title={t("Resultaten")} wide><ProjectResults results={blueprint.results} /></ProjectSection>}
    <ProjectSection id="volgende-stap" number={nextNumber()} title={t(blueprint.nextStep.title)} tone="dark" wide><p>{t(blueprint.nextStep.introduction)}</p><ProjectFlow steps={blueprint.nextStep.steps} label={t("Volgende stappen voor het bouwmodel")} />
      {blueprint.nextStep.researchSequence && <div className="blueprint-research-sequence"><p className="blueprint-small-label">{t("Onderzoek volgt op aangetoonde waarde")}</p><ProjectFlow steps={blueprint.nextStep.researchSequence} label={t("Eerst het basissysteem toetsen, dan de aanvullende onderzoeksvraag")} /></div>}
      <p className="blueprint-note">{t(blueprint.nextStep.note)}</p><div className="blueprint-actions">{polishEndActions ? <Button href={l(`/doe-mee?type=meedenken&context=${project.slug}#bijdrage`)} variant="light" build>{t(blueprint.criticism.invitation)}</Button> : <a className="button button-light" href={l(`/doe-mee?type=meedenken&context=${project.slug}#bijdrage`)}>{t(blueprint.criticism.invitation)} <span aria-hidden="true"><Icon name="arrow-right" /></span></a>}<Link className={`blueprint-text-link${polishEndActions ? " ruler-link-trigger" : ""}`} href={l("/#projecten")}>{endLinkContent("Bekijk alle projecten")}</Link></div>
      <nav className="blueprint-relationships" aria-label={t("Relatie met BOUW")}><ul>{blueprint.relationships.map(item => <li key={item.href}><p className="blueprint-small-label">{t(item.label)}</p><Link href={l(item.href)} className={polishEndActions ? "ruler-link-trigger" : undefined}>{endLinkContent(item.title)}</Link>{item.note && <p className="blueprint-note">{t(item.note)}</p>}</li>)}</ul></nav>
    </ProjectSection>
  </main>;
}
