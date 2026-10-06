import { getI18n } from "@/i18n/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default async function NotFound() {
  const { t, l } = await getI18n();
  return <><a className="skip-link" href={l("#main")}>{t("Ga naar inhoud")}</a><div id="home"><Header homePath={l("/")} /></div><main id="main" className="not-found-page section"><p className="eyebrow">{t("404 / Pagina niet gevonden")}</p><h1>{t("Een ander pad")}<br />{t("naar de toekomst.")}</h1><p>{t("Deze pagina bestaat niet. Verken onze projecten of ga terug naar het begin.")}</p><div className="not-found-actions"><Button href={l("/")}>{t("Naar de homepage")}</Button><Button href={l("/projecten")}>{t("Onze projecten")}</Button></div></main><Footer homePath={l("/")} /></>;
}
