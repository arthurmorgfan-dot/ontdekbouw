"use client";
import { useI18n } from "@/i18n/client";


import Icon from "@/components/icons/Icon";
import { useSyncExternalStore, useState, type FormEvent } from "react";
import { contributionPaths, type ContributionType } from "@/data/participation";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export default function ContributionComposer({ contactEmail, initialType, initialContext, contexts }: { contactEmail: string | null; initialType: ContributionType; initialContext: string; contexts: { id: string; title: string }[] }) {
  const { t, l } = useI18n();
  const [type, setType] = useState<ContributionType>(initialType);
  const [notice, setNotice] = useState("");
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const path = contributionPaths.find(item => item.id === type)!;
    const context = contexts.find(item => item.id === fields.get("context"))?.title ?? "Algemeen";
    const subject = `BOUW — ${t(path.title)} — ${t(context)}`;
    const body = `${fields.get("message")}\n\n${t("Onderwerp:")} ${t(context)}\n${t("Bijdrage:")} ${t(path.title)}${fields.get("source") ? `\n${t("Bron:")} ${fields.get("source")}` : ""}`;
    if (contactEmail) {
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setNotice(t("Je e-mailprogramma kan nu een concept openen. Verstuur het daar zelf; deze website heeft niets verzonden of opgeslagen."));
    } else {
      const url = URL.createObjectURL(new Blob([`${subject}\n\n${body}`], { type: "text/plain;charset=utf-8" }));
      const link = document.createElement("a"); link.href = url; link.download = "bouw-bijdrage.txt"; link.click(); URL.revokeObjectURL(url);
      setNotice(t("Je bijdrage is als lokaal tekstbestand voorbereid. Er is niets naar BOUW verstuurd of op deze website opgeslagen."));
    }
  }
  return <form className="contribution-form" onSubmit={prepare}>
    <fieldset disabled={!ready} aria-label={t("Bijdrage voorbereiden")}>
    <div><label htmlFor="contribution-type">{t("Hoe wil je bijdragen?")}</label><select id="contribution-type" name="type" value={type} onChange={event => setType(event.target.value as ContributionType)}>{contributionPaths.map(path => <option key={path.id} value={path.id}>{t(path.title)}</option>)}</select></div>
    <div><label htmlFor="contribution-context">{t("Waar gaat je bijdrage over?")}</label><select id="contribution-context" name="context" defaultValue={initialContext}><option value="algemeen">{t("BOUW algemeen")}</option>{contexts.map(context => <option key={context.id} value={context.id}>{t(context.title)}</option>)}</select></div>
    <div><label htmlFor="contribution-message">{t("Je bijdrage")}</label><textarea id="contribution-message" name="message" required maxLength={1800} rows={7} aria-describedby="contribution-privacy" onInvalid={event => event.currentTarget.setCustomValidity(t("Vul je bijdrage in."))} onInput={event => event.currentTarget.setCustomValidity("")} /></div>
    {type === "bron" && <div><label htmlFor="contribution-source">{t("Bron-URL (optioneel)")}</label><input id="contribution-source" name="source" type="url" maxLength={500} placeholder="https://" onInvalid={event => event.currentTarget.setCustomValidity(t("Gebruik een volledige URL, bijvoorbeeld https://example.org."))} onInput={event => event.currentTarget.setCustomValidity("")} /></div>}
    <p id="contribution-privacy">{t("Deel alleen wat nodig is om je idee te begrijpen. Geen medische dossiers, schuldenoverzichten, identiteitsgegevens of andere gevoelige informatie. Naam en andere persoonsgegevens zijn niet nodig.")}</p>
    {contactEmail ? <p>{t("Je verstuurt naar")} <a href={l(`mailto:${contactEmail}`)}>{t(contactEmail)}</a> {t("met je eigen e-mailprogramma. Je afzenderadres wordt dan onderdeel van je e-mail. BOUW ontvangt pas iets wanneer jij die e-mail verstuurt. Werkt de conceptknop niet, mail dan rechtstreeks naar dit adres.")}</p> : <p>{t("Er is nog geen gecontroleerd contactadres ingesteld. Je kunt je bijdrage hier voorbereiden en lokaal bewaren. Deze pagina verstuurt niets en BOUW ontvangt het bestand niet.")}</p>}
    <button className="button button-dark" type="submit">{t(contactEmail ? "Open e-mailconcept" : "Bewaar bijdrage als tekstbestand")}<Icon name={contactEmail ? "mail" : "download"} /></button>
    </fieldset>
    <p role="status" aria-live="polite">{t(notice)}</p>
    <noscript><p>{t("Deze concepthulp heeft JavaScript nodig.")}{t(contactEmail ? ` ${t("Je kunt rechtstreeks mailen naar")} ${contactEmail}.` : " Er is geen inzendkanaal actief.")}</p></noscript>
  </form>;
}
