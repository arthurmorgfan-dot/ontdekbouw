import Icon from "@/components/icons/Icon";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Button({ href, children, variant = "dark", arrow = true, build = false }: {
  href: string; children: ReactNode; variant?: "dark" | "outline" | "light"; arrow?: boolean; build?: boolean;
}) {
  if (build) {
    const content = <><span>{children}</span>{arrow && <span className="button-build-arrow" aria-hidden="true"><Icon name="arrow-right" /></span>}</>;
    return <a href={href} className={cn("button", `button-${variant}`, "button-build")}><span className="button-build-content">{content}</span><span className="button-build-layer" aria-hidden="true">{content}</span></a>;
  }
  return <a href={href} className={cn("button", `button-${variant}`)}>{children}{arrow && <span aria-hidden="true"><Icon name="arrow-right" /></span>}</a>;
}
