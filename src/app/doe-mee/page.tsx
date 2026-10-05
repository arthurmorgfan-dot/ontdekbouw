import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContributionComposer from "@/components/participation/ContributionComposer";
import { contributionPaths } from "@/data/participation";
import { projects } from "@/data/projects";
import { proposals } from "@/data/proposals";
import { positions } from "@/data/positions";
import "./participation.css";

const title = "Doe mee — BOUW";
const description = "Help BOUW uitzoeken wat werkt. Denk mee, breng expertise mee, deel een bron of help een toekomstige pilot ontwerpen.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/doe-mee" }, openGraph: { title, description, url: "/doe-mee", locale: "nl_NL", type: "website" }, twitter: { card: "summary", title, description } };

export default async function ParticipationPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  const initialType = contributionPaths.find(path => path.id === query.type)?.id ?? "meedenken";
  const contexts = [...projects.map(project => ({ id: project.slug, title: project.name })), ...proposals.map(proposal => ({ id: proposal.slug, title: proposal.title })), ...positions.map(position => ({ id: `standpunt-${position.id}`, title: position.title }))];
  // CLARKE is accepted as context via its own link but isn't advertised as a flagship.
  if (query.context === "clarke") contexts.push({ id: "clarke", title: "CLARKE" });
  const initialContext = contexts.find(context => context.id === query.context)?.id ?? "algemeen";
  const configuredEmail = process.env.BOUW_CONTACT_EMAIL?.trim();
  const contactEmail = configuredEmail && /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(configuredEmail) ? configuredEmail : null;
  return <><a className="skip-link" href="#main">Ga naar inhoud</a><div id="home"><Header homePath="/" activeHref="/doe-mee" /></div><main id="main" className="participation-page">
    <header className="participation-hero"><p className="eyebrow">Bouwen begint met een vraag</p><h1>BOUW vraagt je niet om het met ons eens te zijn.</h1><p className="participation-lead">Help ons uitzoeken wat werkt.</p><p>Een bouwplan wordt beter door kritiek, kennis en bewijs. Je hoeft je nergens bij aan te sluiten om iets bij te dragen.</p></header>
    <section className="participation-paths" aria-labelledby="paths-heading"><h2 id="paths-heading">Vier manieren om bij te dragen.</h2>{contributionPaths.map((path, index) => <article key={path.id}><div><p className="eyebrow">0{index + 1}</p><h3>{path.title}</h3></div><div><p>{path.description}</p><Link href={`/doe-mee?type=${path.id}&context=${encodeURIComponent(initialContext)}#bijdrage`}>Kies {path.title.toLowerCase()} <span aria-hidden="true">→</span></Link></div></article>)}</section>
    <section id="bijdrage" className="participation-compose" aria-labelledby="compose-heading"><div><p className="eyebrow">Jouw bijdrage</p><h2 id="compose-heading">Wat zien we over het hoofd?</h2><p>Kies een onderwerp en beschrijf je idee, vraag, ervaring of bron. Dit is geen aanmelding voor een bestaand programma en geen belofte van samenwerking.</p></div><ContributionComposer key={`${initialType}:${initialContext}`} contactEmail={contactEmail} initialType={initialType} initialContext={initialContext} contexts={contexts} /></section>
  </main><Footer homePath="/" /></>;
}
