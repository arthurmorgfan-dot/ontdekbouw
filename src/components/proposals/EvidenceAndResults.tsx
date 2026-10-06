import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import type { ProposalPlan } from "@/types/proposal";
import PlanSection from "./PlanSection";

export async function EvidenceState({ evidence, title, number = "05" }: { evidence: ProposalPlan["evidence"]; title: string; number?: string }) {
  const { t, l } = await getI18n();
  return <PlanSection id="bewijs" number={number} label={t("Bewijs")} title={t(title)}>
    <div className="plan-evidence-columns"><div><h3>{t("Wat we al weten")}</h3>
      {evidence.sources.length === 0 ? <p>{t(evidence.knownEmptyState)}</p> : <ul className="plan-sources">{evidence.sources.map(source => <li id={`bron-${source.id}`} key={source.id}>
        <p className="plan-panel-label">{t(source.kind)} · {t(source.publisher)}</p>
        <h4><a href={l(source.url)}>{t(source.title)} <span aria-hidden="true"><Icon name="external" /></span></a></h4>
        <p>{t(source.finding)}</p><p><strong>{t("Beperkingen:")}</strong> {t(source.limitations)}</p>
        <p className="plan-source-dates">{t("Publicatie:")} <time dateTime={source.publishedAt}>{t(source.publishedAt)}</time> {t("· Gecontroleerd:")} <time dateTime={source.verifiedAt}>{t(source.verifiedAt)}</time></p>
      </li>)}</ul>}
    </div><div><h3>{t("Wat we nog moeten bewijzen")}</h3><ul className="plan-questions">{evidence.questions.map(question => <li key={question}>{t(question)}</li>)}</ul></div></div>
  </PlanSection>;
}

export async function ResultsState({ results, number = "06" }: { results: ProposalPlan["results"]; number?: string }) {
  const { t, l } = await getI18n();
  return <PlanSection id="resultaten" number={number} label={t("Resultaten")} title={t(results.status)}>
    <div className="plan-empty-state"><span className="plan-empty-symbol" aria-hidden="true"><Icon name="empty" size={32} /></span><p>{t(results.description)}</p></div>
    {results.outcomes.length > 0 && <dl className="plan-framework">{results.outcomes.map(outcome => <div key={outcome.label}><dt>{t(outcome.label)}</dt><dd>{t(outcome.value)}<p>{t(outcome.context)}</p><a href={l(`#bron-${outcome.sourceId}`)}>{t("Bekijk de bron")} <Icon name="arrow-right" /></a></dd></div>)}</dl>}
  </PlanSection>;
}
