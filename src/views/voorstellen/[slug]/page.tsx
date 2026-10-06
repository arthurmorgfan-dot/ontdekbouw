import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { proposals } from "@/data/proposals";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProposalDocument from "@/components/proposals/ProposalDocument";
import "./proposal.css";

export function generateStaticParams() {
  return proposals.filter(proposal => proposal.page).map(proposal => ({ slug: proposal.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { t } = await getI18n();
  const { slug } = await params;
  const proposal = proposals.find(proposal => proposal.slug === slug && proposal.page);
  if (!proposal?.page) notFound();
  const title = `${t(proposal.title)} — BOUW`;
  const description = `${t(proposal.page.lead)} ${t("Een BOUW-voorstel in onderzoek, geen bewezen oplossing.")}`;
  return pageMetadata(title, description, proposal.href, "article");
}

export default async function ProposalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t, l } = await getI18n();
  const { slug } = await params;
  const proposal = proposals.find(proposal => proposal.slug === slug && proposal.page);
  if (!proposal?.page) notFound();
  return <>
    <a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a>
    <div id="home"><Header homePath={l("/")} /></div>
    <ProposalDocument proposal={proposal} plan={proposal.page} />
    <Footer homePath={l("/")} />
  </>;
}
