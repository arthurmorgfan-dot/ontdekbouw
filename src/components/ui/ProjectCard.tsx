import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import { projectMarks } from "@/components/icons/artwork";
import Link from "next/link";
import SceneImage from "./SceneImage";
import type { Project } from "@/types/project";

export default async function ProjectCard({ project }: { project: Project }) {
  const { t, l } = await getI18n();
  return <article id={project.slug} className="project-card">
    <div className="project-image"><SceneImage src={project.page?.heroImage ?? project.image} sizes="(max-width: 767px) 100vw, 50vw" /><span className="image-caption">{t("Conceptbeeld")}</span></div>
    <div className="project-body"><div className="project-title"><h3>{t(project.name)}</h3><span className={`project-symbol ${project.accent}`} aria-hidden="true"><Icon name={projectMarks[project.slug] ?? "scale"} size={24} /></span></div>
      <p className="project-tagline">{t(project.tagline)}</p><p className="project-description">{t(project.description)}</p>
      {project.page ? <Link href={l(project.route)} className="project-status">{t("Bouwplan in ontwikkeling")} <span aria-hidden="true"><Icon name="arrow-right" /></span><span className="sr-only"> {t("— Bekijk")} {t(project.name)}</span></Link> : <p className="project-status">{t("Bouwplan in ontwikkeling")} <span aria-hidden="true"><Icon name="arrow-right" /></span></p>}
    </div>
  </article>;
}
