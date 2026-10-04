import { loopBlueprint } from "@/data/project-pages/loop";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  { name: "LOOP", page: loopBlueprint, slug: "loop", route: "/projecten/loop", tagline: "Vers voedsel voor iedereen", description: "Lokale kassen, korte ketens en eerlijke prijzen. Betaalbaar en gezond eten, overal beschikbaar.", image: "/images/loop.svg", accent: "green" },
  { name: "AGRIA", slug: "agria", route: "/projecten/agria", tagline: "Voedsel dichtbij huis", description: "Slimme kastechnologie die werkt met het lokale klimaat. Meer voedsel, minder import, sterkere regio’s.", image: "/images/agria.svg", accent: "green" },
  { name: "HABITARY", slug: "habitary", route: "/projecten/habitary", tagline: "Nieuwe manieren van wonen", description: "Modulaire woningen en slimme indelingen. Sneller, betaalbaarder en gericht op leefbare buurten.", image: "/images/habitary.svg", accent: "sand" },
  { name: "LIFTED", slug: "lifted", route: "/projecten/lifted", tagline: "Van schulden naar vrijheid", description: "Vroeg ingrijpen, kennis en begeleiding om kleine financiële problemen niet te laten uitgroeien tot levenslange schulden.", image: "/images/lifted.svg", accent: "blue" },
  { name: "CYTARA", slug: "cytara", route: "/projecten/cytara", tagline: "Gezondheid vernieuwen", description: "Experimentele ideeën rond gezondheid en biotechnologie die eerst onderzocht en bewezen moeten worden voordat ze als oplossing kunnen worden gepresenteerd.", image: "/images/cytara.svg", accent: "violet" },
];
