import { getI18n } from "@/i18n/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FreedomPrinciple from "@/components/sections/FreedomPrinciple";
import Projects from "@/components/sections/Projects";
import Proposals from "@/components/sections/Proposals";
import HowItWorks from "@/components/sections/HowItWorks";
import Closing from "@/components/sections/Closing";
import Possibility from "@/components/sections/Possibility";

export default async function Home() {
  const { t, l } = await getI18n();
  return <><a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a><div id="home"><Header /></div><main id="main" className="home-page"><Hero /><Projects compact /><FreedomPrinciple /><Possibility /><HowItWorks /><Proposals /><Closing /></main><Footer /></>;
}
