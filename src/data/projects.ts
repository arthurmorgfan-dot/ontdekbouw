import { loopBlueprint } from "@/data/project-pages/loop";
import { hiveBlueprint } from "@/data/project-pages/hive";
import { growBlueprint } from "@/data/project-pages/grow";
import { riseBlueprint } from "@/data/project-pages/rise";
import { mendBlueprint } from "@/data/project-pages/mend";
import { clarkeBlueprint } from "@/data/project-pages/clarke";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  { name: "LOOP", page: loopBlueprint, slug: "loop", route: "/projecten/loop", tagline: "Vers voedsel voor iedereen", description: "Vers, voedzaam voedsel toegankelijker maken waar mensen al wonen. LOOP onderzoekt lokale toegang, efficiënte distributie en betaalbaarheid in geld én werktijd.", image: "/images/loop.svg", accent: "green" },
  { name: "GROW", page: growBlueprint, slug: "grow", route: "/projecten/grow", tagline: "Voedsel dichtbij huis", description: "Klimaatadaptieve voedselproductie dichtbij bevolkingscentra. Dezelfde missie, een ander systeem voor iedere plek.", image: "/images/grow.svg", accent: "green" },
  { name: "HIVE", page: hiveBlueprint, slug: "hive", route: "/projecten/hive", tagline: "Een complete leefomgeving, vanaf de basis gebouwd.", description: "Wonen, voedsel, basiszorg en dagelijkse voorzieningen als één systeem — lokaal aangepast en mogelijk herhaalbaar.", image: "/images/hive.svg", accent: "sand" },
  { name: "RISE", page: riseBlueprint, slug: "rise", route: "/projecten/rise", tagline: "Van doel naar volgende stap.", description: "Een persoonlijke AI-gids om doelen te begrijpen, concrete stappen te vinden en plannen over tijd aan te passen. Begeleiding eerst; geld alleen als mogelijk hulpmiddel.", image: "/images/rise.svg", accent: "blue" },
  { name: "MEND", page: mendBlueprint, slug: "mend", route: "/projecten/mend", tagline: "Samenwerken met het herstel van het lichaam.", description: "Onderzoek naar biomaterialen, biologische structuren en weefselherstel. Een experimenteel concept, geen behandeling of bewezen technologie.", image: "/images/mend.svg", accent: "violet" },
];

// Discoverable through the project overview, outside the five flagship cards.
export const clarkeProject: Project = { name: "CLARKE", slug: "clarke", route: "/projecten/clarke", tagline: "De laatste lift die we ooit hoeven te bouwen.", description: "Extreem langetermijnonderzoek naar een permanente verbinding tussen aarde en ruimte.", image: "/images/projects/clarke-hero.png", accent: "sand", page: clarkeBlueprint };
export const routableProjects = [...projects, clarkeProject];
