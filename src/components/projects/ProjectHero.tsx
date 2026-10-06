import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import SceneImage from "@/components/ui/SceneImage";
import Link from "next/link";
import type { Project, ProjectBlueprint } from "@/types/project";

export default async function ProjectHero({ project, blueprint }: { project: Project; blueprint: ProjectBlueprint }) {
  const { t, l } = await getI18n();
  return <section className="blueprint-hero" aria-labelledby="project-title">
    <div className="blueprint-hero-copy"><Link href={l("/#projecten")} className="blueprint-back"><Icon name="arrow-left" /> {t("Onze projecten")}</Link><p className="eyebrow">{t(blueprint.category)}</p>
      <p className="blueprint-status">{t("Status —")} {t(blueprint.status)}</p><h1 id="project-title" className={blueprint.compactWordmark ? "blueprint-six-letter-title" : undefined}>{t(project.name)}</h1><p className="blueprint-statement">{t(blueprint.statement)}</p><p className="blueprint-lead">{t(blueprint.lead)}</p>
      <a href={l("#doel")} className="blueprint-text-link">{t("Open het bouwmodel")} <span aria-hidden="true"><Icon name="arrow-down" /></span></a>
    </div>
    <div className="blueprint-hero-image"><SceneImage src={blueprint.heroImage} sizes="(max-width: 767px) 1200px, 100vw" eager /><span>{t("Conceptbeeld / nog geen operationeel systeem")}</span></div>
    <div className="blueprint-stage-note">
      {blueprint.productExperience && <aside className="blueprint-product-bridge" aria-label={t("Van onderzoek naar product")}>
        <p className="blueprint-small-label">{t("VAN ONDERZOEK NAAR PRODUCT")}</p>
        <p>{t(blueprint.productExperience.introduction)}</p>
        <a href={l(blueprint.productExperience.href)} className="blueprint-text-link ruler-link-trigger"><span className="ruler-link">{t("Bekijk loop.")}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="external" /></span></a>
      </aside>}
      <p>{t(blueprint.stageNote)}</p>
    </div>
  </section>;
}
