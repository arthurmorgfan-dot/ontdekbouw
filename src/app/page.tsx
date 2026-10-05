import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FreedomPrinciple from "@/components/sections/FreedomPrinciple";
import Projects from "@/components/sections/Projects";
import Proposals from "@/components/sections/Proposals";
import HowItWorks from "@/components/sections/HowItWorks";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return <><a className="skip-link" href="#main">Ga naar inhoud</a><div id="home"><Header /></div><main id="main"><Hero /><FreedomPrinciple /><Projects /><Proposals /><HowItWorks /><Closing /></main><Footer /></>;
}
