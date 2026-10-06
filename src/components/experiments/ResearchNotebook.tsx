import Link from "next/link";
import Icon from "@/components/icons/Icon";
import Button from "@/components/ui/Button";
import ProjectSection from "@/components/projects/ProjectSection";
import { ProjectFlow } from "@/components/projects/ProjectSystem";
import type { Experiment, ResearchNotebook as NotebookContent } from "@/types/experiment";
import "./research-notebook.css";

const money = (amount: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(amount);
const evidenceLevels = [
  { label: "SOURCE", explanation: "Een herleidbare bron, met herkomst en beperkingen. De bronwerkbladen en prijsreferenties zijn nog niet gekoppeld." },
  { label: "ASSUMPTION", explanation: "Een expliciete aanname om mee te rekenen. De rekeneenheid van 1.000 mensen is geen bestaand netwerk of pilot." },
  { label: "CALCULATION", explanation: "Een uitkomst van een model. De aangeleverde iteratiebedragen zijn geen keukenmetingen of gevalideerde voedingsuitkomsten." },
  { label: "UNKNOWN", explanation: "Ontbrekende of onvoldoende onderbouwde informatie blijft onbekend. UNKNOWN is nooit nul." },
  { label: "MEASURED", explanation: "Een werkelijke observatie met meetmethode, datum, bronnen en beperkingen. Er zijn nog geen gemeten uitkomsten in dit dossier gepubliceerd." },
];

/** Work-in-progress renderer, deliberately separate from the gated result document. */
export default function ResearchNotebook({ experiment, notebook }: { experiment: Experiment; notebook: NotebookContent }) {
  const prefix = `experiment-${experiment.id}`;
  return <div className="research-notebook">
    <ProjectSection id={prefix} label={`BOUW × ${experiment.projectSlug.toUpperCase()} / EXPERIMENT ${experiment.id}`} title={experiment.title} tone="dark" wide>
      <div className="research-notebook-identity"><div><p className="blueprint-small-label">MODEL → KEUKENTEST / {notebook.candidate}</p><p className="research-notebook-stage">{notebook.stage}</p><p className="research-notebook-amount">± {money(notebook.model.amount)}</p><p className="research-notebook-unit">{notebook.model.unit} / modelhypothese / CALCULATION</p></div><div className="research-notebook-boundary"><blockquote>Dit is geen resultaat. Het is het getal dat we nu proberen kapot te maken.</blockquote><p>Geen bewezen weekkost. Geen voltooid pilotresultaat. Geen voedingsadvies of gevalideerd dieet.</p><p>{notebook.model.basis}</p></div></div>
      <p className="blueprint-note">{notebook.model.limitation}</p><div className="blueprint-actions"><Button href={`#${prefix}-iteraties`} variant="light" build>Volg de modeliteraties</Button><Link href={`#${prefix}-onbekend`} className="blueprint-text-link ruler-link-trigger"><span className="ruler-link">Wat kan het model breken?</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link></div>
    </ProjectSection>
    <ProjectSection id={`${prefix}-vraag`} label={`Experiment ${experiment.id} / Vraag & methode`} title="Een spreadsheet moet de keuken overleven.">
      <p>{experiment.question}</p><h3>De bredere LOOP-vraag</h3><p>Kan een LOOP-netwerk in Nederland 1.000 mensen voorzien van een afgebakend weekpakket met voedzame, overwegend plantaardige basisproducten tegen concurrerende kosten, met bestaande infrastructuur waar dat praktisch is?</p><p className="blueprint-small-label">ASSUMPTION / Rekeneenheid</p><p>{notebook.modelingUnit.explanation}</p><h3>Van model naar echte maaltijden</h3><p>{experiment.plannedMethod}</p><p className="blueprint-note">De keukentestfase is geen voedingskundige validatie of deelnemerspilot. Er worden nog geen gemeten maaltijdresultaten geclaimd.</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-iteraties`} label={`Experiment ${experiment.id} / Modelgeschiedenis`} title="Niet het goedkoopste getal beschermen." tone="sand" wide>
      <p>{notebook.provenance}</p><p className="blueprint-note">Alle bedragen hieronder zijn gemodelleerde bedragen per persoon per week, geen gemeten kosten. De pijlen tonen de volgorde van modelwijzigingen, geen tijdreeks of bewezen verbetering.</p><ol className="research-notebook-iterations" aria-label="Opgegeven modeliteraties, geen gemeten uitkomsten">{notebook.iterations.map((iteration, index) => <li key={index} className={iteration.repairedWeakness ? "research-notebook-repair" : undefined}>
        <div className="research-notebook-iteration-number"><span className="research-notebook-label">CALCULATION / MODELITERATIE</span><span className="research-notebook-price">± {money(iteration.amount)}</span>{index < notebook.iterations.length - 1 && <span className="research-notebook-next" aria-hidden="true"><Icon name="arrow-down" size={20} /></span>}</div><div>{iteration.repairedWeakness && <p className="research-notebook-repair-title">€18,98 → €19,78 / De prijsstijging was een succes in het modelproces.</p>}<p>{iteration.explanation}</p>{iteration.repairedWeakness && <p className="research-notebook-label">Een modelzwakte hersteld, geen gemeten voedingsresultaat.</p>}</div>
      </li>)}</ol><blockquote className="research-notebook-principle">We beschermen geen aantrekkelijk getal wanneer de werkelijkheid een zwakte blootlegt.</blockquote>
    </ProjectSection>
    <ProjectSection id={`${prefix}-kandidaat`} label={`Experiment ${experiment.id} / ${notebook.candidate}`} title="De huidige gemodelleerde basis.">
      <p>± {money(notebook.model.amount)} {notebook.model.unit} is de huidige modelhypothese, niet de werkelijke kosten van een eetweek. Deze onderdelen horen bij het aangeleverde model:</p><ul className="research-notebook-ingredients">{notebook.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul><p className="blueprint-note">Geen hoeveelheden, doseringen, calorieën of eiwitwaarden ingevuld: het bronwerkblad ontbreekt. De B12-strategie is een modelonderdeel dat review vraagt, geen supplementadvies.</p><h3>Vertrouwde maaltijden, geen kunstmatig minimumdieet.</h3><ul className="research-notebook-meals">{notebook.meals.map(meal => <li key={meal}>{meal}</li>)}</ul><p className="blueprint-note">Dit zijn richtingen die worden verkend, geen getest menu of aanbeveling.</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-keuken`} label={`Experiment ${experiment.id} / Huidige fase`} title="Wat gebeurt er wanneer we werkelijk koken?">
      <p>We bewegen van spreadsheetoptimalisatie naar echte maaltijden. Het doel is aannames te breken, niet achteraf het model gelijk te geven.</p><dl className="research-notebook-measurements">{experiment.measurements.map(measurement => <div key={measurement.id}><dt>{measurement.label}</dt><dd>{measurement.state === "gepland" ? <><p>{measurement.target}</p><p className="blueprint-note">{measurement.method}</p><span className="research-notebook-label">UNKNOWN / Nog geen gepubliceerde meting</span></> : <><p>{measurement.value}</p><p>{measurement.method} · {measurement.measuredAt}</p><p>{measurement.limitations}</p></>}</dd></div>)}</dl><h3>Overleeft de €18,47-hypothese het contact met een keuken?</h3><p>Dat is de vraag. Er is nog geen antwoord gepubliceerd.</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-onbekend`} label={`Experiment ${experiment.id} / Kritiek & risico’s`} title="Wat kan het model breken?" tone="sand">
      <p>Een lage modelprijs is geen bewijs van voedingskundige geschiktheid, bruikbaarheid of een werkend distributiesysteem.</p><dl className="research-notebook-risks">{notebook.risks.map(risk => <div key={risk.label}><dt>{risk.label}<span className="research-notebook-label">{risk.state}</span></dt><dd>{risk.explanation}</dd></div>)}</dl><Link href={`/doe-mee?type=meedenken&context=${experiment.projectSlug}#bijdrage`} className="blueprint-text-link ruler-link-trigger"><span className="ruler-link">Daag deze aannames uit</span><span className="ruler-link-arrow" aria-hidden="true"><Icon name="arrow-right" /></span></Link>
    </ProjectSection>
    <ProjectSection id={`${prefix}-bewijs`} label={`Experiment ${experiment.id} / Bewijshiërarchie`} title="Ieder getal moet zijn status laten zien.">
      <dl className="research-notebook-evidence">{evidenceLevels.map(level => <div key={level.label}><dt>{level.label}</dt><dd>{level.explanation}</dd></div>)}</dl><h3>Wat blijft UNKNOWN?</h3><dl className="research-notebook-unknowns">{notebook.unknowns.map(item => <div key={item.label}><dt>{item.label}<span className="research-notebook-label">{item.state}</span></dt><dd>{item.explanation}</dd></div>)}</dl><p className="blueprint-note">Geen bronbestanden of primaire prijsverwijzingen beschikbaar in dit dossier. Er zijn geen leveranciersoffertes, partnerships, wholesaleprijzen, endorsements of statistische conclusies gepubliceerd. Ontbrekende informatie wordt nooit als nul ingevuld.</p>
    </ProjectSection>
    <ProjectSection id={`${prefix}-oordeel`} label={`Experiment ${experiment.id} / Huidig oordeel, geen resultaat`} title="De hypothese blijft open." tone="dark" wide>
      <p className="research-notebook-verdict">{notebook.verdict}</p><h3>Niet gevalideerd als</h3><ul className="research-notebook-not-validated">{notebook.notValidatedAs.map(item => <li key={item}>{item}</li>)}</ul><p className="blueprint-small-label">NEXT STEP / Keukenmetingen</p><ProjectFlow steps={notebook.nextSteps} label="Volgende onderzoekstappen, geen toezegging van een pilot of uitkomst" /><blockquote className="research-notebook-principle">Eerst klein.<br />Dan meten.<br />Dan beslissen.</blockquote><p className="blueprint-note">Een kleine echte pilot volgt alleen als eerdere toetsing dat verantwoord maakt. Aanpassen of stoppen is een geldige beslissing. De volledige experimentkosten en LOOP-exploitatiekosten blijven UNKNOWN.</p>
    </ProjectSection>
  </div>;
}
