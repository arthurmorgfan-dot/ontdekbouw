import Icon from "@/components/icons/Icon";
import SceneImage from "@/components/ui/SceneImage";
import Link from "next/link";
import type { Project, ProjectBlueprint } from "@/types/project";

export default function ProjectHero({ project, blueprint }: { project: Project; blueprint: ProjectBlueprint }) {
  return <section className="blueprint-hero" aria-labelledby="project-title">
    <div className="blueprint-hero-copy"><Link href="/#projecten" className="blueprint-back"><Icon name="arrow-left" /> Onze projecten</Link><p className="eyebrow">{blueprint.category}</p>
      <p className="blueprint-status">Status — {blueprint.status}</p><h1 id="project-title" className={blueprint.compactWordmark ? "blueprint-six-letter-title" : undefined}>{project.name}</h1><p className="blueprint-statement">{blueprint.statement}</p><p className="blueprint-lead">{blueprint.lead}</p>
      <a href="#doel" className="blueprint-text-link">Open het bouwmodel <span aria-hidden="true"><Icon name="arrow-down" /></span></a>
    </div>
    <div className="blueprint-hero-image"><SceneImage src={blueprint.heroImage} sizes="(max-width: 767px) 1200px, 100vw" eager /><span>Conceptbeeld / nog geen operationeel systeem</span></div>
    <div className="blueprint-stage-note">
      {blueprint.productExperience && <aside className="blueprint-product-bridge" aria-label="Van onderzoek naar product">
        <p className="blueprint-small-label">VAN ONDERZOEK NAAR PRODUCT</p>
        <p>{blueprint.productExperience.introduction}</p>
        <a href={blueprint.productExperience.href} className="blueprint-text-link ruler-link-trigger"><span className="ruler-link">Bekijk loop.</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="external" /></span></a>
      </aside>}
      <p>{blueprint.stageNote}</p>
    </div>
  </section>;
}
