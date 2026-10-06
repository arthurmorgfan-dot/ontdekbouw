import { getI18n } from "@/i18n/server";
import type { ReactNode } from "react";

export default async function ProjectSection({ id, number, title, children, tone = "paper", wide = false, label = "Bouwmodel" }: {
  id: string; number?: string; label?: string; title: string; children: ReactNode; tone?: "paper" | "dark" | "sand"; wide?: boolean;
}) {
  const { t } = await getI18n();
  return <section id={id} className={`document-section document-section-${tone} blueprint-section blueprint-${tone}${wide ? " document-section-wide blueprint-wide" : ""}`} aria-labelledby={`${id}-heading`}>
    <div className="document-section-heading blueprint-section-heading"><p className="eyebrow">{t(number && `${number} / `)}{t(label)}</p><h2 id={`${id}-heading`}>{t(title)}</h2></div>
    <div className="document-section-body blueprint-section-content">{children}</div>
  </section>;
}
