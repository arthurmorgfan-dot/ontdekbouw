import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectDocument from "@/components/projects/ProjectDocument";
import { projects } from "@/data/projects";
import "./project.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter(project => project.page).map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug && project.page);
  if (!project?.page) notFound();
  const title = `${project.name} — ${project.tagline} — BOUW`;
  const description = `${project.page.question} Een BOUW-project in ontwikkeling, nog niet getest.`;
  return {
    title, description, alternates: { canonical: project.route },
    openGraph: { title, description, url: project.route, locale: "nl_NL", type: "article" },
    twitter: { card: "summary", title, description },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug && project.page);
  if (!project?.page) notFound();
  return <><a className="skip-link" href="#main">Ga naar inhoud</a><div id="home"><Header homePath="/" activeHref="#projecten" /></div><ProjectDocument project={project} blueprint={project.page} /><Footer homePath="/" /></>;
}
