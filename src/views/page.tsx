import { getI18n } from "@/i18n/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { BuildingLife, BouwjaarChapter, LoopChapter } from "@/components/sections/LifeStory";
import "./story.css";
import Projects from "@/components/sections/Projects";

import HowItWorks from "@/components/sections/HowItWorks";
import Closing from "@/components/sections/Closing";


export default async function Home() {
  const { t, l } = await getI18n();
  return <><a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a><div id="home"><Header /></div><main id="main" className="home-page"><Hero /><BuildingLife /><BouwjaarChapter /><LoopChapter /><Projects compact /><HowItWorks /><Closing /></main><Footer /></>;
}
