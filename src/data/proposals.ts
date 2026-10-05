import { foodProposalPlan } from "@/data/proposal-pages/gezond-eten-als-basis";
import { movementProposalPlan } from "@/data/proposal-pages/iedere-dag-bewegen";
import { affordableFoodProposalPlan } from "@/data/proposal-pages/vers-eten-moet-goedkoper";
import type { Proposal } from "@/types/proposal";

export const proposals: Proposal[] = [
  {
    id: "01",
    featured: true,
    page: foodProposalPlan,
    slug: "gezond-eten-als-basis",
    category: "Voedselzekerheid",
    title: "BOUW Basis — Gezond eten als basisvoorziening",
    description:
      "Gezond basisvoedsel goedkoper naar huishoudinkomen, met daarnaast een gratis basispakket op aanvraag voor ieder huishouden. BOUW onderzoekt de samenstelling, uitvoering en volledige kosten.",
    image: "/images/proposals/voeding.svg",
    href: "/voorstellen/gezond-eten-als-basis",
    status: "In onderzoek",
    researchNote:
      "BOUW Basis is een voorstel in onderzoek. Hoe inkomensafhankelijke ondersteuning en een universeel pakket samen zouden werken, welke voeding passend is en wat de volledige publieke kosten zijn, moet nog worden onderzocht. Er is nog geen proef gestart.",
  },
  {
    id: "02",
    featured: true,
    page: affordableFoodProposalPlan,
    slug: "vers-eten-moet-goedkoper",
    category: "Betaalbaar leven",
    title: "Vers eten moet goedkoper",
    description:
      "Gezond eten zou niet de luxe optie moeten zijn. BOUW onderzoekt hoe lokale productie, slimme kassen en kortere voedselketens verse voeding goedkoper kunnen maken.",
    image: "/images/grow.svg",
    href: "/voorstellen/vers-eten-moet-goedkoper",
    status: "In onderzoek",
    researchNote:
      "Dit is een voorstel om te onderzoeken. Lokale productie maakt voeding niet automatisch goedkoper. Volledige kosten, alternatieven en de gevolgen voor consumentenprijzen moeten nog worden onderbouwd.",
  },
  {
    id: "03",
    featured: false,
    page: movementProposalPlan,
    slug: "iedere-dag-bewegen",
    category: "Gezond opgroeien",
    title: "Iedere dag bewegen",
    description:
      "Wat als bewegen voor jongeren net zo vanzelfsprekend wordt als onderwijs? We onderzoeken hoe dagelijkse sport, coaching en praktische ontwikkeling kunnen bijdragen aan een gezondere en sterkere generatie.",
    image: "/images/proposals/bewegen.svg",
    href: "/voorstellen/iedere-dag-bewegen",
    status: "In onderzoek",
    researchNote:
      "Dit is een voorstel om te onderzoeken. Of dagelijkse sport, coaching en praktische ontwikkeling op deze manier werken, wat ze kosten en hoe ze uitvoerbaar zijn, moet nog worden onderbouwd. We presenteren dit idee nog niet als bewezen oplossing.",
  },
];

export const featuredProposals = proposals.filter(proposal => proposal.featured);
