import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import type { PublishedExperiment } from "@/types/experiment";
import { isPublishableExperiment } from "@/data/experiments";
import { routableProjects } from "@/data/projects";
import ProjectSection from "@/components/projects/ProjectSection";
import "@/views/projecten/[slug]/project.css";

/** Rendering a result is gated as well as its future route lookup. */
export default async function ExperimentDocument({ experiment }: { experiment: PublishedExperiment }) {
  const { t, l } = await getI18n();
  if (!isPublishableExperiment(experiment)) throw new Error("Resultaat mist gemeten uitkomsten of verifieerbare bronverwijzingen.");
  const project = routableProjects.find(item => item.slug === experiment.projectSlug)!;
  const result = experiment.completed;
  return <main id="main" className="project-blueprint experiment-document">
    <header className="document-section document-section-wide blueprint-section blueprint-wide"><p className="eyebrow">{t(project.name)} {t("/ Experiment / Gepubliceerd")}</p><h1>{t(experiment.title)}</h1><p>{t("Gepubliceerd:")} {t(experiment.publishedAt)}{t(". Beoordeeld:")} {t(experiment.reviewedAt)}.</p></header>
    <ProjectSection id="vraag" number="01" title={t("Vraag")}><p>{t(experiment.question)}</p></ProjectSection>
    <ProjectSection id="hypothese" number="02" label={t("Verwachting vóór de test")} title={t("Hypothese")}><p>{t(experiment.hypothesis)}</p></ProjectSection>
    <ProjectSection id="methode" number="03" title={t("Methode")}><h3>{t("Gepland")}</h3><p>{t(experiment.plannedMethod)}</p><h3>{t("Werkelijk uitgevoerd")}</h3><p>{t(result.actualMethod)}</p></ProjectSection>
    <ProjectSection id="kosten" number="04" title={t("Budget / kosten")} tone="sand">
      <p>{t(experiment.cost.state === "onbekend" ? "Kosten onbekend; geen werkelijke kosten vastgesteld." : `${t(experiment.cost.state === "geraamd" ? "Raming — geen werkelijke uitgave" : "Werkelijke kosten")}: ${experiment.cost.amount} ${experiment.cost.currency}`)}</p>
      {experiment.cost.state === "geraamd" && <p>{t(experiment.cost.basis)}</p>}
      {experiment.cost.state === "werkelijk" && <p>{t("Bronnen:")} {t(experiment.cost.sourceIds.join(", "))}</p>}
    </ProjectSection>
    <ProjectSection id="metingen" number="05" title={t("Metingen")}><dl className="blueprint-measurements">{experiment.measurements.map(item => <div key={item.id}><dt>{t(item.label)}</dt><dd><p>{t(item.method)}</p>{item.state === "gepland" ? <><span className="blueprint-status">{t("Nog te meten")}</span><p>{t("Gepland:")} {t(item.target)}</p></> : <><span className="blueprint-status">{t("Gemeten")}</span><p>{t(item.value)} — {t(item.measuredAt)}</p><p>{t(item.limitations)}</p><p>{t("Bronnen:")} {t(item.sourceIds.join(", "))}</p></>}</dd></div>)}</dl></ProjectSection>
    <ProjectSection id="resultaten" number="06" title={t("Resultaten")}><p>{t(result.outcome)}</p><p>{t("Bronnen:")} {t(result.outcomeSourceIds.join(", "))}</p></ProjectSection>
    <ProjectSection id="mislukkingen" number="07" title={t("Wat ging mis?")} tone="sand"><p>{t(result.failures)}</p><h3>{t("Beperkingen")}</h3><p>{t(result.limitations)}</p></ProjectSection>
    <ProjectSection id="bronnen" number="08" title={t("Bewijs / bronnen")}><ul>{experiment.sources.map(source => <li id={`bron-${source.id}`} key={source.id}><a href={l(source.url)}>{t(source.title)} <Icon name="external" /></a><p>{t(source.kind)} {t("· Gecontroleerd:")} {t(source.verifiedAt)}</p><p>{t(source.limitations)}</p></li>)}</ul>{experiment.artifacts.map(item => <p key={item.id}><a href={l(item.url)}>{t(item.title)}</a> — {t(item.kind === "conceptbeeld" ? "Conceptbeeld, geen prototypebewijs" : item.kind === "model" ? "Model, geen uitgevoerd prototype" : "Prototypebewijs")}</p>)}</ProjectSection>
    <ProjectSection id="conclusie" number="09" title={t("Conclusie")}><p>{t(result.conclusion)}</p><h3>{t("Wat we niet kunnen concluderen")}</h3><p>{t(result.cannotConclude)}</p></ProjectSection>
    <ProjectSection id="besluit" number="10" title={t("Besluit")}><p>{t(result.decision)}</p></ProjectSection>
    <ProjectSection id="volgende-stap" number="11" title={t("Volgende stap")} tone="dark"><p>{t(result.nextStep)}</p><p>{t("Mislukken mag. Verbergen niet.")}</p></ProjectSection>
  </main>;
}
