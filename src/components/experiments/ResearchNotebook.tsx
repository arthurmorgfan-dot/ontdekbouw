import { getI18n } from "@/i18n/server";
import Link from "next/link";
import Icon from "@/components/icons/Icon";
import Button from "@/components/ui/Button";
import ProjectSection from "@/components/projects/ProjectSection";
import { ProjectFlow } from "@/components/projects/ProjectSystem";
import type { Experiment, ResearchNotebook as NotebookContent } from "@/types/experiment";
import "./research-notebook.css";


const evidenceLevels = [
  { label: "SOURCE", explanation: "Een herleidbare bron, met herkomst en beperkingen. De bronwerkbladen en prijsreferenties zijn nog niet gekoppeld." },
  { label: "ASSUMPTION", explanation: "Een expliciete aanname om mee te rekenen. De rekeneenheid van 1.000 mensen is geen bestaand netwerk of pilot." },
  { label: "CALCULATION", explanation: "Een uitkomst van een model. De aangeleverde iteratiebedragen zijn geen keukenmetingen of gevalideerde voedingsuitkomsten." },
  { label: "UNKNOWN", explanation: "Ontbrekende of onvoldoende onderbouwde informatie blijft onbekend. UNKNOWN is nooit nul." },
  { label: "MEASURED", explanation: "Een werkelijke observatie met meetmethode, datum, bronnen en beperkingen. Er zijn nog geen gemeten uitkomsten in dit dossier gepubliceerd." },
];

/** Work-in-progress renderer, deliberately separate from the gated result document. */
export default async function ResearchNotebook({ experiment, notebook, productDemoHref }: { experiment: Experiment; notebook: NotebookContent; productDemoHref?: string }) {
  const { t, l, locale } = await getI18n();
  const money = (amount: number) => new Intl.NumberFormat(locale === "en" ? "en-IE" : "nl-NL", { style: "currency", currency: "EUR" }).format(amount);
  const prefix = `experiment-${experiment.id}`;
  return <div className="research-notebook">
    <ProjectSection id={prefix} label={t(`BOUW × ${experiment.projectSlug.toUpperCase()} / EXPERIMENT ${experiment.id}`)} title={t(experiment.title)} tone="dark" wide>
      <div className="research-notebook-identity"><div><p className="blueprint-small-label">{t("MODEL → KEUKENTEST /")} {t(notebook.candidate)}</p><p className="research-notebook-stage">{locale === "en" && notebook.stage === "KEUKENTEST" ? "KITCHEN TEST" : notebook.stage}</p><p className="research-notebook-amount">± {t(money(notebook.model.amount))}</p><p className="research-notebook-unit">{t(notebook.model.unit)} {t("/ modelhypothese / CALCULATION")}</p></div><div className="research-notebook-boundary"><blockquote>{t("Dit is geen resultaat. Het is het getal dat we nu proberen kapot te maken.")}</blockquote><p>{t("Geen bewezen weekkost. Geen voltooid pilotresultaat. Geen voedingsadvies of gevalideerd dieet.")}</p><p>{t(notebook.model.basis)}</p></div></div>
      <p className="blueprint-note">{t(notebook.model.limitation)}</p><div className="blueprint-actions"><Button href={l(`#${prefix}-iteraties`)} variant="light" build>{t("Volg de modeliteraties")}</Button><Link href={l(`#${prefix}-onbekend`)} className="blueprint-text-link ruler-link-trigger"><span className="ruler-link">{t("Wat kan het model breken?")}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link></div>
      {productDemoHref && <div className="research-notebook-product-bridge">
        <p className="blueprint-note">{t("BOUW onderzoekt. loop. maakt het voorstel ervaarbaar. De demo is geen operationele voedseldienst.")}</p>
        <a href={l(productDemoHref)} className="blueprint-text-link ruler-link-trigger"><span className="ruler-link">{t("Bekijk de productdemo")}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="external" /></span></a>
      </div>}
    </ProjectSection>
    <ProjectSection id={`${prefix}-vraag`} label={`Experiment ${experiment.id} / ${t("Vraag & methode")}`} title={t("Een spreadsheet moet de keuken overleven.")}>
      <p>{t(experiment.question)}</p><h3>{t("De bredere LOOP-vraag")}</h3><p>{t("Kan een LOOP-netwerk in Nederland 1.000 mensen voorzien van een afgebakend weekpakket met voedzame, overwegend plantaardige basisproducten tegen concurrerende kosten, met bestaande infrastructuur waar dat praktisch is?")}</p><p className="blueprint-small-label">{t("ASSUMPTION / Rekeneenheid")}</p><p>{t(notebook.modelingUnit.explanation)}</p><h3>{t("Van model naar echte maaltijden")}</h3><p>{t(experiment.plannedMethod)}</p><p className="blueprint-note">{t("De keukentestfase is geen voedingskundige validatie of deelnemerspilot. Er worden nog geen gemeten maaltijdresultaten geclaimd.")}</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-iteraties`} label={`Experiment ${experiment.id} / ${t("Modelgeschiedenis")}`} title={t("Niet het goedkoopste getal beschermen.")} tone="sand" wide>
      <p>{t(notebook.provenance)}</p><p className="blueprint-note">{t("Alle bedragen hieronder zijn gemodelleerde bedragen per persoon per week, geen gemeten kosten. De pijlen tonen de volgorde van modelwijzigingen, geen tijdreeks of bewezen verbetering.")}</p><ol className="research-notebook-iterations" aria-label={t("Opgegeven modeliteraties, geen gemeten uitkomsten")}>{notebook.iterations.map((iteration, index) => <li key={index} className={iteration.repairedWeakness ? "research-notebook-repair" : undefined}>
        <div className="research-notebook-iteration-number"><span className="research-notebook-label">{t("CALCULATION / MODELITERATIE")}</span><span className="research-notebook-price">± {t(money(iteration.amount))}</span>{index < notebook.iterations.length - 1 && <span className="research-notebook-next" aria-hidden="true"><Icon name="arrow-down" size={20} /></span>}</div><div>{iteration.repairedWeakness && <p className="research-notebook-repair-title">{t("€18,98 → €19,78 / De prijsstijging was een succes in het modelproces.")}</p>}<p>{t(iteration.explanation)}</p>{iteration.repairedWeakness && <p className="research-notebook-label">{t("Een modelzwakte hersteld, geen gemeten voedingsresultaat.")}</p>}</div>
      </li>)}</ol><blockquote className="research-notebook-principle">{t("We beschermen geen aantrekkelijk getal wanneer de werkelijkheid een zwakte blootlegt.")}</blockquote>
    </ProjectSection>
    <ProjectSection id={`${prefix}-kandidaat`} label={t(`Experiment ${experiment.id} / ${notebook.candidate}`)} title={t("De huidige gemodelleerde basis.")}>
      <p>± {t(money(notebook.model.amount))} {t(notebook.model.unit)} {t("is de huidige modelhypothese, niet de werkelijke kosten van een eetweek. Deze onderdelen horen bij het aangeleverde model:")}</p><ul className="research-notebook-ingredients">{notebook.ingredients.map(ingredient => <li key={ingredient}>{t(ingredient)}</li>)}</ul><p className="blueprint-note">{t("Geen hoeveelheden, doseringen, calorieën of eiwitwaarden ingevuld: het bronwerkblad ontbreekt. De B12-strategie is een modelonderdeel dat review vraagt, geen supplementadvies.")}</p><h3>{t("Vertrouwde maaltijden, geen kunstmatig minimumdieet.")}</h3><ul className="research-notebook-meals">{notebook.meals.map(meal => <li key={meal}>{t(meal)}</li>)}</ul><p className="blueprint-note">{t("Dit zijn richtingen die worden verkend, geen getest menu of aanbeveling.")}</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-keuken`} label={`Experiment ${experiment.id} / ${t("Huidige fase")}`} title={t("Wat gebeurt er wanneer we werkelijk koken?")}>
      <p>{t("We bewegen van spreadsheetoptimalisatie naar echte maaltijden. Het doel is aannames te breken, niet achteraf het model gelijk te geven.")}</p><dl className="research-notebook-measurements">{experiment.measurements.map(measurement => <div key={measurement.id}><dt>{t(measurement.label)}</dt><dd>{measurement.state === "gepland" ? <><p>{t(measurement.target)}</p><p className="blueprint-note">{t(measurement.method)}</p><span className="research-notebook-label">{t("UNKNOWN / Nog geen gepubliceerde meting")}</span></> : <><p>{t(measurement.value)}</p><p>{t(measurement.method)} · {t(measurement.measuredAt)}</p><p>{t(measurement.limitations)}</p></>}</dd></div>)}</dl><h3>{t("Overleeft de €18,47-hypothese het contact met een keuken?")}</h3><p>{t("Dat is de vraag. Er is nog geen antwoord gepubliceerd.")}</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-onbekend`} label={`Experiment ${experiment.id} / ${t("Kritiek & risico’s")}`} title={t("Wat kan het model breken?")} tone="sand">
      <p>{t("Een lage modelprijs is geen bewijs van voedingskundige geschiktheid, bruikbaarheid of een werkend distributiesysteem.")}</p><dl className="research-notebook-risks">{notebook.risks.map(risk => <div key={risk.label}><dt>{t(risk.label)}<span className="research-notebook-label">{t(risk.state)}</span></dt><dd>{t(risk.explanation)}</dd></div>)}</dl><Link href={l(`/doe-mee?type=meedenken&context=${experiment.projectSlug}#bijdrage`)} className="blueprint-text-link ruler-link-trigger"><span className="ruler-link">{t("Daag deze aannames uit")}</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link>
    </ProjectSection>
    <ProjectSection id={`${prefix}-bewijs`} label={`Experiment ${experiment.id} / ${t("Bewijshiërarchie")}`} title={t("Ieder getal moet zijn status laten zien.")}>
      <dl className="research-notebook-evidence">{evidenceLevels.map(level => <div key={level.label}><dt>{t(level.label)}</dt><dd>{t(level.explanation)}</dd></div>)}</dl><h3>{t("Wat blijft UNKNOWN?")}</h3><dl className="research-notebook-unknowns">{notebook.unknowns.map(item => <div key={item.label}><dt>{t(item.label)}<span className="research-notebook-label">{t(item.state)}</span></dt><dd>{t(item.explanation)}</dd></div>)}</dl><p className="blueprint-note">{t("Geen bronbestanden of primaire prijsverwijzingen beschikbaar in dit dossier. Er zijn geen leveranciersoffertes, partnerships, wholesaleprijzen, endorsements of statistische conclusies gepubliceerd. Ontbrekende informatie wordt nooit als nul ingevuld.")}</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-oordeel`} label={`Experiment ${experiment.id} / ${t("Huidig oordeel, geen resultaat")}`} title={t("De hypothese blijft open.")} tone="dark" wide>
      <p className="research-notebook-verdict">{t(notebook.verdict)}</p><h3>{t("Niet gevalideerd als")}</h3><ul className="research-notebook-not-validated">{notebook.notValidatedAs.map(item => <li key={item}>{t(item)}</li>)}</ul><p className="blueprint-small-label">{t("NEXT STEP / Keukenmetingen")}</p><ProjectFlow steps={notebook.nextSteps} label={t("Volgende onderzoekstappen, geen toezegging van een pilot of uitkomst")} /><blockquote className="research-notebook-principle">{t("Eerst klein.")}<br />{t("Dan meten.")}<br />{t("Dan beslissen.")}</blockquote><p className="blueprint-note">{t("Een kleine echte pilot volgt alleen als eerdere toetsing dat verantwoord maakt. Aanpassen of stoppen is een geldige beslissing. De volledige experimentkosten en LOOP-exploitatiekosten blijven UNKNOWN.")}</p>
    </ProjectSection>
  </div>;
}
