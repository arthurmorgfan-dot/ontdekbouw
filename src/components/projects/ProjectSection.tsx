import type { ReactNode } from "react";

export default function ProjectSection({ id, number, title, children, tone = "paper", wide = false, label = "Bouwmodel" }: {
  id: string; number?: string; label?: string; title: string; children: ReactNode; tone?: "paper" | "dark" | "sand"; wide?: boolean;
}) {
  return <section id={id} className={`document-section document-section-${tone} blueprint-section blueprint-${tone}${wide ? " document-section-wide blueprint-wide" : ""}`} aria-labelledby={`${id}-heading`}>
    <div className="document-section-heading blueprint-section-heading"><p className="eyebrow">{number && `${number} / `}{label}</p><h2 id={`${id}-heading`}>{title}</h2></div>
    <div className="document-section-body blueprint-section-content">{children}</div>
  </section>;
}
