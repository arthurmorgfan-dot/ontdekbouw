import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import { clarkeProject } from "@/data/projects";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import "./projects.css";
import "../story.css";

export async function generateMetadata(): Promise<Metadata> { return pageMetadata("Onze projecten — BOUW", "BOUW-projecten in ontwikkeling: systemen om te ontwerpen, onderzoeken en uiteindelijk te testen. Geen bewezen oplossingen of resultaten.", "/projecten"); }

export default async function ProjectsPage() {
  const { t, l } = await getI18n();
  return <><a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a><div id="home"><Header homePath={l("/")} activeHref="#projecten" /></div><main id="main" className="projects-index"><header className="projects-index-intro"><p className="eyebrow">{t("Van idee naar toetsbaar systeem")}</p><h1>{t("Projecten")}<br />{t("in ontwikkeling.")}</h1><p>{t("Een gezonde basis, richting en een plek om te leven. Deze projecten onderzoeken verschillende onderdelen van het dagelijks leven. Hun samenhang is een ontwerprichting, geen bewezen of operationeel systeem.")}</p><nav className="project-index-navigation" aria-label={t("Ga naar een project")}>{(["loop", "grow", "hive", "rise", "mend"] as const).map(name => <a key={name} href={l(`#${name}`)}><Icon name={name} size={24} /><span>{t(name.toUpperCase())}</span></a>)}</nav></header><Projects /><div className="project-discovery"><Link href={l(clarkeProject.route)}>{t("Nog één project.")} <span aria-hidden="true"><Icon name="arrow-right" /></span></Link></div></main><Footer homePath={l("/")} /></>;
}
