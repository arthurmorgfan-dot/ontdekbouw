"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Header({ homePath = "", activeHref }: { homePath?: string; activeHref?: string }) {
  const navigationHref = (href: string) => href.startsWith("#") ? `${homePath}${href}` : href;
  const currentHref = activeHref ?? (homePath ? undefined : "#home");
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return <header className="header">
    <a className="wordmark" href={`${homePath}#home`} aria-label="BOUW — naar home">BOUW</a>
    <nav className="desktop-nav" aria-label="Hoofdnavigatie">{site.navigation.map(item => <Link key={item.href} href={navigationHref(item.href)} className={item.href === currentHref ? "active" : undefined} aria-current={item.href === currentHref ? "page" : undefined}>{item.label}</Link>)}</nav>
    <div className="header-actions"><Button href={`${homePath}#doe-mee`}>Volg BOUW</Button><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Sluiten" : "Menu"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button></div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobiele navigatie" hidden={!open}>{site.navigation.map(item => <Link key={item.href} href={navigationHref(item.href)} aria-current={item.href === currentHref ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>
  </header>;
}
