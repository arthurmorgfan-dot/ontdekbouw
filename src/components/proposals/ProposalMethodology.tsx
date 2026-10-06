import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
const stages = [
  ["Probleem", "probleem"], ["Voorstel", "voorstel"], ["Pilot", "pilot"],
  ["Kosten", "kosten"], ["Bewijs", "bewijs"], ["Kritiek & risico’s", "kritiek"], ["Resultaten", "resultaten"], ["Volgende stap", "volgende-stap"],
];

export default async function ProposalMethodology() {
  const { t, l } = await getI18n();
  return <nav className="plan-methodology" aria-label={t("Onderdelen van dit bouwplan")}>
    <p>{t("Van vraag naar toetsbaar plan")}</p>
    <ol>{stages.map(([label, id], index) => <li key={id}><a href={l(`#${id}`)}>{t(label)}</a>{index < stages.length - 1 && <Icon name="arrow-right" className="method-arrow" size={12} />}</li>)}</ol>
  </nav>;
}
