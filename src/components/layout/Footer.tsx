import { getI18n } from "@/i18n/server";
import Image from "next/image";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
export default async function Footer({ homePath = "" }: { homePath?: string }) {
  const { t, l, locale } = await getI18n();
  return <footer className="footer"><div className="footer-identity"><a className="footer-logo" href={l(`${homePath}#home`)} aria-label="BOUW">{locale === "nl" ? <Image src="/images/brand/bouw-light.png" alt="" width={1024} height={370} unoptimized /> : <span className="wordmark">BOUW</span>}</a><p>{t("Geen beloftes. Bouwplannen.")}</p></div><nav aria-label={t("Voetnavigatie")}><Link href={l("/projecten")}>{t("Projecten")}</Link><Link href={l("/onze-visie")}>{t("Onze visie")}</Link><Link href={l("/standpunten")}>{t("Standpunten")}</Link><Link href={l("/doe-mee")}>{t("Doe mee")}</Link><Link href={l("/volg-bouw")}>{t("Volg BOUW")}</Link></nav><a href={l("#home")}>{t("Terug naar boven")} <span aria-hidden="true"><Icon name="arrow-up" /></span></a></footer>;
}
