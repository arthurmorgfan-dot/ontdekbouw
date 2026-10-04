import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { proposals } from "@/data/proposals";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProposalDocument from "@/components/proposals/ProposalDocument";
import "./proposal.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return proposals.filter(proposal => proposal.page).map(proposal => ({ slug: proposal.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const proposal = proposals.find(proposal => proposal.slug === slug && proposal.page);
  if (!proposal?.page) notFound();
  const title = `${proposal.title} — BOUW`;
  const description = `${proposal.page.lead} Een BOUW-voorstel in onderzoek, geen bewezen oplossing.`;
  return {
    title, description, alternates: { canonical: proposal.href },
    openGraph: { title, description, url: proposal.href, type: "article", locale: "nl_NL" },
    twitter: { card: "summary", title, description },
  };
}

export default async function ProposalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proposal = proposals.find(proposal => proposal.slug === slug && proposal.page);
  if (!proposal?.page) notFound();
  return <>
    <a className="skip-link" href="#main">Ga naar inhoud</a>
    <div id="home"><Header homePath="/" /></div>
    <ProposalDocument proposal={proposal} plan={proposal.page} />
    <Footer homePath="/" />
  </>;
}
