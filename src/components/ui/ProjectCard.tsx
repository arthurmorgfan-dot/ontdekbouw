import Icon from "@/components/icons/Icon";
import { projectMarks } from "@/components/icons/artwork";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return <article id={project.slug} className="project-card">
    <div className="project-image"><Image src={project.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 45vw, 20vw" /></div>
    <div className="project-body"><div className="project-title"><h3>{project.name}</h3><span className={`project-symbol ${project.accent}`} aria-hidden="true"><Icon name={projectMarks[project.slug] ?? "scale"} size={24} /></span></div>
      <p className="project-tagline">{project.tagline}</p><p className="project-description">{project.description}</p>
      {project.page ? <Link href={project.route} className="project-status">Bouwplan in ontwikkeling <span aria-hidden="true"><Icon name="arrow-right" /></span><span className="sr-only"> — Bekijk {project.name}</span></Link> : <p className="project-status">Bouwplan in ontwikkeling <span aria-hidden="true"><Icon name="arrow-right" /></span></p>}
    </div>
  </article>;
}
