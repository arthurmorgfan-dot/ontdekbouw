"use client";

import Icon from "@/components/icons/Icon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Header({ homePath = "", activeHref }: { homePath?: string; activeHref?: string }) {
  const navigationHref = (href: string) => href.startsWith("#") ? `${homePath}${href}` : href;
  const currentHref = activeHref ?? (homePath ? undefined : "#home");
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", escape); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return <header ref={header} className="header">
    <a className="wordmark" href={`${homePath}#home`} aria-label="BOUW — naar home">BOUW</a>
    <span className="header-principle">Geen beloftes. Bouwplannen.</span>
    <nav className="desktop-nav" aria-label="Hoofdnavigatie">{site.navigation.filter(item => ["#projecten", "/onze-visie", "/doe-mee"].includes(item.href)).map(item => <Link key={item.href} href={navigationHref(item.href)} className={item.href === currentHref ? "ruler-link active" : "ruler-link"} aria-current={item.href === currentHref ? "page" : undefined}>{item.label}</Link>)}</nav>
    <div className="header-actions"><Button href="/volg-bouw">Volg BOUW</Button><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Sluiten" : "Menu"}<span aria-hidden="true"><Icon name={open ? "close" : "menu"} size={18} /></span></button></div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Alle pagina’s" hidden={!open}><p className="eyebrow">Verken BOUW</p><div className="navigation-links">{[...site.navigation, { label: "Volg BOUW", href: "/volg-bouw" }].map(item => <Link key={item.href} href={navigationHref(item.href)} aria-current={item.href === currentHref ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true"><Icon name="arrow-right" /></span></Link>)}</div></nav>
  </header>;
}
