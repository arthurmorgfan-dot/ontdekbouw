import Link from "next/link";
import { clarkeProject } from "@/data/projects";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import "./projects.css";

export const metadata: Metadata = {
  title: "Onze projecten — BOUW",
  description: "BOUW-projecten in ontwikkeling: systemen om te ontwerpen, onderzoeken en uiteindelijk te testen. Geen bewezen oplossingen of resultaten.",
  alternates: { canonical: "/projecten" },
  openGraph: { title: "Onze projecten — BOUW", description: "BOUW-projecten in ontwikkeling: systemen om te ontwerpen, onderzoeken en uiteindelijk te testen. Geen bewezen oplossingen of resultaten.", url: "/projecten", locale: "nl_NL", type: "website" },
  twitter: { card: "summary", title: "Onze projecten — BOUW", description: "BOUW-projecten in ontwikkeling: systemen om te ontwerpen, onderzoeken en uiteindelijk te testen. Geen bewezen oplossingen of resultaten." },
};

export default function ProjectsPage() {
  return <><a className="skip-link" href="#main">Ga naar inhoud</a><div id="home"><Header homePath="/" activeHref="#projecten" /></div><main id="main" className="projects-index"><header className="projects-index-intro"><p className="eyebrow">Van idee naar toetsbaar systeem</p><h1>Bouwplannen in ontwikkeling.</h1><p>Dit zijn de systemen die BOUW wil ontwerpen, onderzoeken en testen. Ontwikkeling is nog geen bewijs: er zijn nog geen gemeten projectresultaten.</p></header><Projects /><div className="project-discovery"><Link href={clarkeProject.route}>Nog één project. <span aria-hidden="true">→</span></Link></div></main><Footer homePath="/" /></>;
}
