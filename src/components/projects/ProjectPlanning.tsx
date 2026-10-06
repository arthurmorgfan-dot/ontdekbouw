import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import type { ProjectBlueprint } from "@/types/project";
import ProjectSection from "./ProjectSection";
import { ProjectFlow } from "./ProjectSystem";

export default async function ProjectPlanning({ planning, numbers }: { planning: NonNullable<ProjectBlueprint["planning"]>; numbers: string[] }) {
  const { t, l } = await getI18n();
  return <>
    <ProjectSection id="wonen" number={numbers[0]} title={t(planning.housing.title)} tone="sand">
      <p>{t(planning.housing.introduction)}</p><ProjectFlow steps={planning.housing.criteria} label={t("Criteria om bouwmethoden te vergelijken")} /><p className="blueprint-note">{t(planning.housing.note)}</p>
    </ProjectSection>
    <ProjectSection id="voorzieningen" number={numbers[1]} title={t(planning.amenities.title)}>
      <p className="blueprint-core-question">{t(planning.amenities.question)}</p><p>{t(planning.amenities.introduction)}</p>
      <div className="blueprint-amenities">{planning.amenities.elements.map(element => <div key={element.title}><h3>{t(element.title)}</h3><p>{t(element.description)}</p>{element.href && <Link className="blueprint-text-link" href={l(element.href)}>{t(element.linkLabel)} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link>}</div>)}</div>
    </ProjectSection>
    <ProjectSection id="lokale-uitvoering" number={numbers[2]} title={t(planning.adaptation.title)} tone="dark">
      <p>{t(planning.adaptation.introduction)}</p><ul className="blueprint-opportunities">{planning.adaptation.factors.map(factor => <li key={factor}>{t(factor)}</li>)}</ul><p className="blueprint-note">{t(planning.adaptation.note)}</p>
    </ProjectSection>
    <ProjectSection id="schaalmodel" number={numbers[3]} title={t(planning.scaling.title)} wide>
      <p className="blueprint-core-question">{t(planning.scaling.principle)}</p><p>{t(planning.scaling.introduction)}</p>
      <ol className="blueprint-scale" aria-label={t("Onbewezen schaalstappen")}>{planning.scaling.stages.map((stage, index) => <li key={stage.label}><div className={`blueprint-scale-grid blueprint-scale-${index}`} aria-hidden="true">{Array.from({ length: 16 }, (_, cell) => <span key={cell} />)}</div><h3>{t(stage.label)}</h3><p>{t(stage.question)}</p></li>)}</ol>
      <p className="blueprint-note">{t(planning.scaling.note)}</p>
    </ProjectSection>
  </>;
}
