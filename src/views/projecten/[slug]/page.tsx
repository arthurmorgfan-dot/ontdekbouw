import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectDocument from "@/components/projects/ProjectDocument";
import { routableProjects as projects } from "@/data/projects";
import "./project.css";

export function generateStaticParams() {
  return projects.filter(project => project.page && project.slug !== "clarke").map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { t, locale } = await getI18n();
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug && project.page);
  if (!project?.page) notFound();
  const title = `${project.name} — ${t(project.tagline)} — BOUW`;
  const description = locale === "en"
    ? `${t(project.page.question)} ${project.page.experimentSlug ? "A BOUW project in development, with a public research notebook in the model → kitchen-test phase. No measured or validated result yet." : `A BOUW project ${project.page.status === "Extreem vroeg" ? "at an extremely early research stage" : "in development"}, not yet tested.`}`
    : project.page.experimentSlug
      ? `${project.page.question} Een BOUW-project in ontwikkeling, met een publiek onderzoeksdossier in de fase model → keukentest. Nog geen gemeten of gevalideerd resultaat.`
      : `${project.page.question} Een BOUW-project ${project.page.status === "Extreem vroeg" ? "in een extreem vroege onderzoeksfase" : "in ontwikkeling"}, nog niet getest.`;
  return pageMetadata(title, description, project.route, "article");
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t, l } = await getI18n();
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug && project.page);
  if (!project?.page) notFound();
  return <><a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a><div id="home"><Header homePath={l("/")} activeHref={slug === "loop" ? "/projecten/loop" : "#projecten"} /></div><ProjectDocument project={project} blueprint={project.page} /><Footer homePath={l("/")} /></>;
}
