import Icon from "@/components/icons/Icon";
export default function Footer({ homePath = "" }: { homePath?: string }) {
  return <footer className="footer"><a className="wordmark" href={`${homePath}#home`}>BOUW</a><p>Geen beloftes. Bouwplannen.</p><a href="#home">Terug naar boven <span aria-hidden="true"><Icon name="arrow-up" /></span></a></footer>;
}
