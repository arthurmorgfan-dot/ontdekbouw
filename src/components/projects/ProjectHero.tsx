import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectBlueprint } from "@/types/project";

export default function ProjectHero({ project, blueprint }: { project: Project; blueprint: ProjectBlueprint }) {
  return <section className="blueprint-hero" aria-labelledby="project-title">
    <div className="blueprint-hero-copy"><Link href="/#projecten" className="blueprint-back">← Onze projecten</Link><p className="eyebrow">{blueprint.category}</p>
      <p className="blueprint-status">Status — {blueprint.status}</p><h1 id="project-title">{project.name}</h1><p className="blueprint-statement">{blueprint.statement}</p><p className="blueprint-lead">{blueprint.lead}</p>
      <a href="#doel" className="blueprint-text-link">Open het bouwmodel <span aria-hidden="true">↓</span></a>
    </div>
    <div className="blueprint-hero-image"><Image src={blueprint.heroImage} alt="" fill sizes="(max-width: 800px) 100vw, 43vw" loading="eager" /><span>Conceptbeeld / nog geen operationeel systeem</span></div>
    <div className="blueprint-stage-note"><p>{blueprint.stageNote}</p></div>
  </section>;
}
