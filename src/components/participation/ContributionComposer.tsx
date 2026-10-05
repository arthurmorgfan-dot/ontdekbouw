"use client";

import Icon from "@/components/icons/Icon";
import { useSyncExternalStore, useState, type FormEvent } from "react";
import { contributionPaths, type ContributionType } from "@/data/participation";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export default function ContributionComposer({ contactEmail, initialType, initialContext, contexts }: { contactEmail: string | null; initialType: ContributionType; initialContext: string; contexts: { id: string; title: string }[] }) {
  const [type, setType] = useState<ContributionType>(initialType);
  const [notice, setNotice] = useState("");
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const path = contributionPaths.find(item => item.id === type)!;
    const context = contexts.find(item => item.id === fields.get("context"))?.title ?? "Algemeen";
    const subject = `BOUW — ${path.title} — ${context}`;
    const body = `${fields.get("message")}\n\nOnderwerp: ${context}\nBijdrage: ${path.title}${fields.get("source") ? `\nBron: ${fields.get("source")}` : ""}`;
    if (contactEmail) {
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setNotice("Je e-mailprogramma kan nu een concept openen. Verstuur het daar zelf; deze website heeft niets verzonden of opgeslagen.");
    } else {
      const url = URL.createObjectURL(new Blob([`${subject}\n\n${body}`], { type: "text/plain;charset=utf-8" }));
      const link = document.createElement("a"); link.href = url; link.download = "bouw-bijdrage.txt"; link.click(); URL.revokeObjectURL(url);
      setNotice("Je bijdrage is als lokaal tekstbestand voorbereid. Er is niets naar BOUW verstuurd of op deze website opgeslagen.");
    }
  }
  return <form className="contribution-form" onSubmit={prepare}>
    <fieldset disabled={!ready} aria-label="Bijdrage voorbereiden">
    <div><label htmlFor="contribution-type">Hoe wil je bijdragen?</label><select id="contribution-type" name="type" value={type} onChange={event => setType(event.target.value as ContributionType)}>{contributionPaths.map(path => <option key={path.id} value={path.id}>{path.title}</option>)}</select></div>
    <div><label htmlFor="contribution-context">Waar gaat je bijdrage over?</label><select id="contribution-context" name="context" defaultValue={initialContext}><option value="algemeen">BOUW algemeen</option>{contexts.map(context => <option key={context.id} value={context.id}>{context.title}</option>)}</select></div>
    <div><label htmlFor="contribution-message">Je bijdrage</label><textarea id="contribution-message" name="message" required maxLength={1800} rows={7} aria-describedby="contribution-privacy" /></div>
    {type === "bron" && <div><label htmlFor="contribution-source">Bron-URL (optioneel)</label><input id="contribution-source" name="source" type="url" maxLength={500} placeholder="https://" /></div>}
    <p id="contribution-privacy">Deel alleen wat nodig is om je idee te begrijpen. Geen medische dossiers, schuldenoverzichten, identiteitsgegevens of andere gevoelige informatie. Naam en andere persoonsgegevens zijn niet nodig.</p>
    {contactEmail ? <p>Je verstuurt naar <a href={`mailto:${contactEmail}`}>{contactEmail}</a> met je eigen e-mailprogramma. Je afzenderadres wordt dan onderdeel van je e-mail. BOUW ontvangt pas iets wanneer jij die e-mail verstuurt. Werkt de conceptknop niet, mail dan rechtstreeks naar dit adres.</p> : <p>Er is nog geen gecontroleerd contactadres ingesteld. Je kunt je bijdrage hier voorbereiden en lokaal bewaren. Deze pagina verstuurt niets en BOUW ontvangt het bestand niet.</p>}
    <button className="button button-dark" type="submit">{contactEmail ? "Open e-mailconcept" : "Bewaar bijdrage als tekstbestand"}<Icon name={contactEmail ? "mail" : "download"} /></button>
    </fieldset>
    <p role="status" aria-live="polite">{notice}</p>
    <noscript><p>Deze concepthulp heeft JavaScript nodig.{contactEmail ? ` Je kunt rechtstreeks mailen naar ${contactEmail}.` : " Er is geen inzendkanaal actief."}</p></noscript>
  </form>;
}
