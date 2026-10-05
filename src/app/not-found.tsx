import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return <><a className="skip-link" href="#main">Ga naar inhoud</a><div id="home"><Header homePath="/" /></div><main id="main" className="not-found-page section"><p className="eyebrow">404 / Pagina niet gevonden</p><h1>Een ander pad<br />naar de toekomst.</h1><p>Deze pagina bestaat niet. Verken onze projecten of ga terug naar het begin.</p><div className="not-found-actions"><Button href="/">Naar de homepage</Button><Button href="/projecten">Onze projecten</Button></div></main><Footer homePath="/" /></>;
}
