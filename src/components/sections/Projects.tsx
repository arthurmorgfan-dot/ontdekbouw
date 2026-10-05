import Icon from "@/components/icons/Icon";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectMarks } from "@/components/icons/artwork";

export default function Projects({ compact = false }: { compact?: boolean }) {
  return <section id="projecten" className={`projects section${compact ? " projects-compact" : ""}`} aria-labelledby="projects-heading">
    <div className="section-heading"><div><p className="eyebrow">Van idee naar toetsbaar systeem</p><h2 id="projects-heading">Onze projecten</h2></div><Link href="/projecten" className="section-note ruler-link">Van idee naar praktijk <span aria-hidden="true"><Icon name="arrow-right" /></span></Link></div>
    {compact ? <div className="project-gateways">{projects.map(project => <article key={project.slug} id={project.slug}><span className="gateway-mark" aria-hidden="true"><Icon name={projectMarks[project.slug] ?? "scale"} size={40} /></span><h3>{project.name}</h3><p>{project.tagline}</p><Link href={project.route} className="ruler-link-trigger"><span className="ruler-link">Verken {project.name}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link></article>)}</div> : <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>}
    <p className="projects-development">Bouwplannen in ontwikkeling. Nog geen gemeten projectresultaten.</p>
  </section>;
}
