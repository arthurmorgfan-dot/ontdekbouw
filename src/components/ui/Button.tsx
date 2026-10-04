import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Button({ href, children, variant = "dark", arrow = true }: {
  href: string; children: ReactNode; variant?: "dark" | "outline" | "light"; arrow?: boolean;
}) {
  return <a href={href} className={cn("button", `button-${variant}`)}>{children}{arrow && <span aria-hidden="true">→</span>}</a>;
}
