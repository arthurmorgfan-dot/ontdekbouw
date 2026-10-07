import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import { proposals } from "@/data/proposals";
import { projectRoles } from "@/data/story";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectMarks } from "@/components/icons/artwork";

export default async function Projects({ compact = false }: { compact?: boolean }) {
  const { t, l } = await getI18n();
  return <section id="projecten" className={`projects section${compact ? " projects-compact" : ""}`} aria-labelledby="projects-heading">
    <div className="section-heading"><div><p className="eyebrow">{t("Onderdelen van dezelfde ambitie")}</p><h2 id="projects-heading">{t("Verschillende projecten. Eén groter verhaal.")}</h2></div>{compact && <Link href={l("/projecten")} className="section-note ruler-link">{t("Bekijk alle projecten")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link>}</div>
    <p className="connected-intro">{t("Voedsel, productie, wonen, richting en biologisch herstel. Elk project verkent een eigen vraag rond het dagelijks leven. Ze delen een ambitie, maar vormen nog geen geïntegreerd werkend systeem.")}</p>
    {compact ? <div className="project-gateways">{projects.map(project => <article key={project.slug} id={project.slug === "loop" ? "loop-project" : project.slug}><span className="gateway-mark" aria-hidden="true"><Icon name={projectMarks[project.slug] ?? "scale"} size={40} /></span><h3>{t(project.name)}</h3><p>{t(projectRoles[project.slug])}</p><Link href={l(project.route)} className="ruler-link-trigger"><span className="ruler-link">{t("Verken")} {t(project.name)}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link></article>)}</div> : <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>}
    {compact && <nav id="voorstellen" className="related-proposals" aria-label={t("Verdiepende voorstellen")}><p className="related-proposals-label">{t("Verdiepende voorstellen")}</p>{proposals.map(proposal => <Link key={proposal.slug} className="ruler-link" href={l(proposal.href)}>{t(proposal.title)}</Link>)}</nav>}
    <p className="projects-development">{t("Bouwplannen in ontwikkeling. Nog geen gemeten projectresultaten.")}</p>
  </section>;
}
