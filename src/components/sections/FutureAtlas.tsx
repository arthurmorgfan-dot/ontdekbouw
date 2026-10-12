import { getI18n } from "@/i18n/server";
import Link from "next/link";
import SceneImage from "@/components/ui/SceneImage";

export default async function FutureAtlas() {
  const { t, l } = await getI18n();
  return <section id="toekomstatlas" className="future-atlas section" aria-labelledby="atlas-heading">
    <div className="atlas-intro"><p className="eyebrow">{t("De toekomstatlas / open onderzoek")}</p><h2 id="atlas-heading">{t("Een toekomst om")}<br />{t("in te leven.")}</h2><p>{t("Niet één groot antwoord. Wel samenhangende vragen over leren, eten en wonen. Kies een ingang en verken wat we willen onderzoeken.")}</p></div>
    <div className="atlas-cards">
      <Link href={l("/bouwjaar")} className="atlas-card atlas-learning"><div className="atlas-card-image"><SceneImage src="/images/homepage/wonder.webp" alt={t("Illustratie van kinderen die samen een houten model bouwen")} sizes="(max-width: 767px) 100vw, 33vw" /></div><span className="atlas-index" aria-hidden="true">01 /</span><h3>BOUWJAAR</h3><p>{t("Ontdek wat je kunt. Bouw aan wie je wilt worden.")}</p><span className="atlas-card-status">{t("Vroeg concept / geen programma")} <span aria-hidden="true">↗</span></span></Link>
      <Link href={l("/projecten/loop")} className="atlas-card atlas-food"><div className="atlas-card-image"><SceneImage src="/images/future/loop-next.webp" alt={t("Conceptbeeld van lokale voedselproductie en een voedselpunt")} sizes="(max-width: 767px) 100vw, 33vw" /></div><span className="atlas-index" aria-hidden="true">02 /</span><h3>LOOP</h3><p>{t("De melkboer van toen. Voor het verse eten van morgen.")}</p><span className="atlas-card-status">{t("In ontwikkeling / geen bezorgdienst")} <span aria-hidden="true">↗</span></span></Link>
      <Link href={l("/projecten/hive")} className="atlas-card atlas-living"><div className="atlas-card-image"><SceneImage src="/images/future/hive-next.webp" alt={t("Conceptbeeld van HIVE-woningen met zonnepanelen en groene openbare ruimte")} sizes="(max-width: 767px) 100vw, 33vw" /></div><span className="atlas-index" aria-hidden="true">03 /</span><h3>HIVE</h3><p>{t("Een complete leefomgeving, vanaf de basis gebouwd.")}</p><span className="atlas-card-status">{t("Concept / geen gebouwde woningen")} <span aria-hidden="true">↗</span></span></Link>
    </div>
  </section>;
}
