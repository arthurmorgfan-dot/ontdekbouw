import { getI18n } from "@/i18n/server";
import type { ReactNode } from "react";

export default async function PlanSection({ id, number, label, title, children, dark = false }: {
  id: string; number?: string; label: string; title: string; children: ReactNode; dark?: boolean;
}) {
  const { t } = await getI18n();
  return <section id={id} className={`document-section plan-section${dark ? " document-section-dark plan-section-dark" : ""}`} aria-labelledby={`${id}-heading`}>
    <div className="document-section-heading plan-section-heading"><p className="eyebrow">{number && <span>{t(number)} / </span>}{t(label)}</p><h2 id={`${id}-heading`}>{t(title)}</h2></div>
    <div className="document-section-body plan-section-body">{children}</div>
  </section>;
}
