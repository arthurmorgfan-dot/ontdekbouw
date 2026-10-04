import type { ReactNode } from "react";

export default function ProjectSection({ id, number, title, children, tone = "paper", wide = false, label = "Bouwmodel" }: {
  id: string; number?: string; label?: string; title: string; children: ReactNode; tone?: "paper" | "dark" | "sand"; wide?: boolean;
}) {
  return <section id={id} className={`blueprint-section blueprint-${tone}${wide ? " blueprint-wide" : ""}`} aria-labelledby={`${id}-heading`}>
    <div className="blueprint-section-heading"><p className="eyebrow">{number && `${number} / `}{label}</p><h2 id={`${id}-heading`}>{title}</h2></div>
    <div className="blueprint-section-content">{children}</div>
  </section>;
}
