import { getI18n } from "@/i18n/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OpeningChapter, InheritedChapter, PresentChapter, InvitationChapter } from "@/components/sections/HomeNarrative";
import { BuildingLife, BouwjaarChapter, LoopChapter, HiveChapter } from "@/components/sections/LifeStory";
import "./story.css";
import Projects from "@/components/sections/Projects";

import FutureAtlas from "@/components/sections/FutureAtlas";
import HowItWorks from "@/components/sections/HowItWorks";
import "./rediscovery.css";


export default async function Home() {
  const { t, l } = await getI18n();
  return <div className="rediscovery-shell"><a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a><div id="home"><Header /></div><main id="main" className="home-page rediscovery-home"><OpeningChapter /><FutureAtlas /><InheritedChapter /><PresentChapter /><HowItWorks /><BuildingLife /><BouwjaarChapter /><LoopChapter /><HiveChapter /><Projects compact /><InvitationChapter /></main><Footer /></div>;
}
