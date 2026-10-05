import Icon from "@/components/icons/Icon";
import Link from "next/link";
export default function Footer({ homePath = "" }: { homePath?: string }) {
  return <footer className="footer"><div className="footer-identity"><a className="wordmark" href={`${homePath}#home`}>BOUW</a><p>Geen beloftes. Bouwplannen.</p></div><nav aria-label="Voetnavigatie"><Link href="/projecten">Projecten</Link><Link href="/onze-visie">Onze visie</Link><Link href="/standpunten">Standpunten</Link><Link href="/doe-mee">Doe mee</Link><Link href="/volg-bouw">Volg BOUW</Link></nav><a href="#home">Terug naar boven <span aria-hidden="true"><Icon name="arrow-up" /></span></a></footer>;
}
