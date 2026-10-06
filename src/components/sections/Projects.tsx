import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectMarks } from "@/components/icons/artwork";

export default async function Projects({ compact = false }: { compact?: boolean }) {
  const { t, l } = await getI18n();
  return <section id="projecten" className={`projects section${compact ? " projects-compact" : ""}`} aria-labelledby="projects-heading">
    <div className="section-heading"><div><p className="eyebrow">{t("Van idee naar toetsbaar systeem")}</p><h2 id="projects-heading">{t("Onze projecten")}</h2></div><Link href={l("/projecten")} className="section-note ruler-link">{t("Van idee naar praktijk")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link></div>
    {compact ? <div className="project-gateways">{projects.map(project => <article key={project.slug} id={project.slug}><span className="gateway-mark" aria-hidden="true"><Icon name={projectMarks[project.slug] ?? "scale"} size={40} /></span><h3>{t(project.name)}</h3><p>{t(project.tagline)}</p><Link href={l(project.route)} className="ruler-link-trigger"><span className="ruler-link">{t("Verken")} {t(project.name)}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link></article>)}</div> : <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>}
    <p className="projects-development">{t("Bouwplannen in ontwikkeling. Nog geen gemeten projectresultaten.")}</p>
  </section>;
}
