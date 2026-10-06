import { getI18n } from "@/i18n/server";
import Button from "@/components/ui/Button";
import SceneImage from "@/components/ui/SceneImage";

export default async function Possibility() {
  const { t, l } = await getI18n();
  return <section className="possibility" aria-labelledby="possibility-heading"><div className="possibility-art"><SceneImage src="/images/projects/hive-hero.png" alt={t("Conceptuele leefomgeving met woningen, groen en dagelijkse voorzieningen")} sizes="(max-width: 767px) 1000px, 100vw" /><span className="image-caption">{t("HIVE / conceptbeeld, geen gebouwd systeem")}</span></div><div className="possibility-copy"><p className="eyebrow">{t("Van landschap naar dagelijks leven")}</p><h2 id="possibility-heading">{t("Een toekomst")}<br />{t("om in te leven.")}</h2><p>{t("Wonen, voedsel, basiszorg en dagelijkse voorzieningen. HIVE onderzoekt hoe die samen een complete leefomgeving kunnen vormen — lokaal aangepast en mogelijk herhaalbaar.")}</p><Button href={l("/projecten/hive")} variant="outline" build>{t("Verken HIVE")}</Button></div></section>;
}
