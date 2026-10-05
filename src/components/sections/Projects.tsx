import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return <section id="projecten" className="projects section" aria-labelledby="projects-heading">
    <div className="section-heading"><div><p className="eyebrow">Concrete ideeën, echte resultaten</p><h2 id="projects-heading">Onze projecten</h2></div><Link href="/projecten" className="section-note">Van idee naar praktijk <span aria-hidden="true">↗</span></Link></div>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
  </section>;
}
