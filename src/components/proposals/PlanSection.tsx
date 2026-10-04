import type { ReactNode } from "react";

export default function PlanSection({ id, number, label, title, children, dark = false }: {
  id: string; number?: string; label: string; title: string; children: ReactNode; dark?: boolean;
}) {
  return <section id={id} className={`plan-section${dark ? " plan-section-dark" : ""}`} aria-labelledby={`${id}-heading`}>
    <div className="plan-section-heading"><p className="eyebrow">{number && <span>{number} / </span>}{label}</p><h2 id={`${id}-heading`}>{title}</h2></div>
    <div className="plan-section-body">{children}</div>
  </section>;
}
