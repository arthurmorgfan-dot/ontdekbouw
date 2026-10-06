import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Image from "next/image";
import type { ProjectBlueprint } from "@/types/project";

export async function ProjectFlow({ steps, label }: { steps: string[]; label: string }) {
  const { t } = await getI18n();
  return <ol className="blueprint-flow" aria-label={t(label)}>{steps.map((step, index) => <li key={step}>{t(step)}{index < steps.length - 1 && <Icon name="arrow-right" className="flow-arrow" />}</li>)}</ol>;
}

export default async function ProjectSystem({ system }: { system: ProjectBlueprint["system"] }) {
  const { t, locale } = await getI18n();
  return <><p>{t(system.introduction)}</p>{system.illustration && <figure className="blueprint-plan-art"><Image src={locale === "en" && system.illustration.image === "/images/projects/hive-cell.svg" ? "/images/projects/hive-cell-en.svg" : system.illustration.image} alt={t(system.illustration.alt)} width={1000} height={800} sizes="(max-width: 800px) 88vw, 55vw" /><figcaption>{t("Conceptueel schema / geen maatvoering of definitief ontwerp")}</figcaption></figure>}<ol className="blueprint-system">{system.elements.map((element, index) => <li key={element.title}>
    <div><span className="blueprint-small-label">{t(String(index + 1).padStart(2, "0"))}</span><h3>{t(element.title)}</h3></div><p>{t(element.description)}</p>
    {element.questions && <ul>{element.questions.map(question => <li key={question}>{t(question)}</li>)}</ul>}
  </li>)}</ol></>;
}
