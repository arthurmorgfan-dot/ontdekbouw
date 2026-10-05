import Button from "@/components/ui/Button";
import SceneImage from "@/components/ui/SceneImage";

export default function Possibility() {
  return <section className="possibility" aria-labelledby="possibility-heading"><div className="possibility-art"><SceneImage src="/images/projects/hive-hero.png" alt="Conceptuele leefomgeving met woningen, groen en dagelijkse voorzieningen" sizes="(max-width: 767px) 1000px, 100vw" /><span className="image-caption">HIVE / conceptbeeld, geen gebouwd systeem</span></div><div className="possibility-copy"><p className="eyebrow">Van landschap naar dagelijks leven</p><h2 id="possibility-heading">Een toekomst<br />om in te leven.</h2><p>Wonen, voedsel, basiszorg en dagelijkse voorzieningen. HIVE onderzoekt hoe die samen een complete leefomgeving kunnen vormen — lokaal aangepast en mogelijk herhaalbaar.</p><Button href="/projecten/hive" variant="outline" build>Verken HIVE</Button></div></section>;
}
