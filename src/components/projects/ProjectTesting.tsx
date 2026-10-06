import { getI18n } from "@/i18n/server";
import type { ProjectBlueprint } from "@/types/project";
import { ProjectFlow } from "./ProjectSystem";

export async function PrototypeFramework({ prototype }: { prototype: ProjectBlueprint["prototype"] }) {
  const { t } = await getI18n();
  return <>{prototype.statement && <p className="blueprint-core-question">{t(prototype.statement)}</p>}<p>{t(prototype.introduction)}</p>
    {prototype.baseline && <div>
      <h3>{t(prototype.baseline.title)}</h3><p>{t(prototype.baseline.introduction)}</p>
      <ProjectFlow steps={prototype.baseline.steps} label={t("Toekomstige betaalbaarheidsbaseline, nog niet gemeten")} />
      <p className="blueprint-small-label">{t("Mogelijke benchmarks / geen keuze gemaakt")}</p>
      <ul className="blueprint-risks">{prototype.baseline.benchmarks.map(benchmark => <li key={benchmark}>{t(benchmark)}</li>)}</ul>
      <p className="blueprint-note">{t(prototype.baseline.note)}</p>
    </div>}
    <p className="blueprint-small-label">{t("Mogelijke proef / nog niet gestart")}</p>
    <dl className="blueprint-framework">{prototype.scope.map(item => <div key={item.label}><dt>{t(item.label)}</dt><dd>{t(item.value)}</dd></div>)}</dl>
    <h3>{t("Vóór een prototype")}</h3><ProjectFlow steps={prototype.prerequisites} label={t("Voorwaarden vóór een prototype")} /><p className="blueprint-note">{t(prototype.note)}</p>
  </>;
}

export async function MeasurementFramework({ measurements }: { measurements: ProjectBlueprint["measurements"] }) {
  const { t } = await getI18n();
  return <><p>{t(measurements.introduction)}</p><dl className="blueprint-measurements">{measurements.items.map(item => <div key={item.label}>
    <dt>{t(item.label)}</dt><dd><p>{t(item.question)}</p><span className="blueprint-status">{t(item.status)}</span></dd>
  </div>)}</dl></>;
}

export async function ProjectResults({ results }: { results: ProjectBlueprint["results"] }) {
  const { t } = await getI18n();
  return <div className="blueprint-results"><p className="blueprint-result-statement">{t(results.statement)}</p><p>{t(results.description)}</p><blockquote>{t(results.principle)}</blockquote></div>;
}
