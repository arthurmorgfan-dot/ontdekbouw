import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FreedomPrinciple from "@/components/sections/FreedomPrinciple";
import Projects from "@/components/sections/Projects";
import Proposals from "@/components/sections/Proposals";
import HowItWorks from "@/components/sections/HowItWorks";
import Closing from "@/components/sections/Closing";
import Possibility from "@/components/sections/Possibility";

export default function Home() {
  return <><a className="skip-link" href="#main">Ga naar inhoud</a><div id="home"><Header /></div><main id="main" className="home-page"><Hero /><Projects compact /><FreedomPrinciple /><Possibility /><HowItWorks /><Proposals /><Closing /></main><Footer /></>;
}
