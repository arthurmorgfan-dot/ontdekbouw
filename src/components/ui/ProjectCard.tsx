import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return <article id={project.slug} className="project-card">
    <div className="project-image"><Image src={project.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 45vw, 20vw" /></div>
    <div className="project-body"><div className="project-title"><h3>{project.name}</h3><span className={`project-symbol ${project.accent}`} aria-hidden="true">{project.accent === "sand" ? "⌂" : project.accent === "blue" ? "↗" : project.accent === "violet" ? "✧" : "♧"}</span></div>
      <p className="project-tagline">{project.tagline}</p><p className="project-description">{project.description}</p>
      <p className="project-status">Bouwplan in ontwikkeling <span aria-hidden="true">↗</span></p>
    </div>
  </article>;
}
