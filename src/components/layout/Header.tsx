"use client";
import { useI18n } from "@/i18n/client";


import LanguageControl from "./LanguageControl";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Header({ homePath = "", activeHref }: { homePath?: string; activeHref?: string }) {
  const { t, l, locale } = useI18n();
  const navigationHref = (href: string) => href.startsWith("#") ? `${homePath}${href}` : l(href);
  const currentHref = activeHref ?? (homePath ? undefined : "#home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  // Reserve the measured height before fixing the header, including responsive changes.
  useLayoutEffect(() => {
    const element = header.current;
    if (!element) return;
    const measure = () => setHeaderHeight(element.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let anchor = Math.max(0, window.scrollY);
    let frame = 0;
    const tolerance = 8;
    function update() {
      frame = 0;
      // Clamp elastic overscroll at either edge to avoid a false direction reversal.
      const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const position = Math.min(maximum, Math.max(0, window.scrollY));
      const focused = header.current?.contains(document.activeElement);
      if (position <= tolerance || open || focused) {
        setHidden(false);
        anchor = position;
        return;
      }
      const delta = position - anchor;
      if (Math.abs(delta) < tolerance) return;
      setHidden(delta > 0 && position > (header.current?.offsetHeight ?? 0));
      anchor = position;
    }
    function scroll() { if (!frame) frame = window.requestAnimationFrame(update); }
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scroll);
      window.cancelAnimationFrame(frame);
    };
  }, [open]);
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
  return <div className="header-slot" style={headerHeight ? { height: headerHeight } : undefined}><header ref={header} className="header" data-scroll-ready={headerHeight > 0} data-hidden={hidden && !open} onFocusCapture={() => setHidden(false)}>
    <div className="header-identity"><a className="header-logo" href={l(`${homePath}#home`)} aria-label={t("BOUW — Mensen bouwen de toekomst — naar home")}>{locale === "nl" ? <Image src="/images/brand/bouw-light.png" alt="" width={1024} height={370} unoptimized /> : <span className="wordmark">BOUW</span>}</a>
    <span className="header-principle">{t("Geen beloftes. Bouwplannen.")}</span></div>
    <nav className="desktop-nav" aria-label={t("Hoofdnavigatie")}>{site.navigation.filter(item => ["#projecten", "/onze-visie", "/doe-mee"].includes(item.href)).map(item => <Link key={item.href} href={l(navigationHref(item.href))} className={item.href === currentHref ? "ruler-link active" : "ruler-link"} aria-current={item.href === currentHref ? "page" : undefined}>{t(item.label)}</Link>)}</nav>
    <div className="header-actions"><LanguageControl /><Button href={l("/volg-bouw")} build>{t("Volg BOUW")}</Button><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{t(open ? "Sluiten" : "Menu")}<span aria-hidden="true"><Icon name={open ? "close" : "menu"} size={18} /></span></button></div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label={t("Alle pagina’s")} hidden={!open}><p className="eyebrow">{t("Verken BOUW")}</p><div className="navigation-links">{[...site.navigation, { label: "Volg BOUW", href: "/volg-bouw" }].map(item => <Link key={item.href} href={l(navigationHref(item.href))} aria-current={item.href === currentHref ? "page" : undefined} onClick={() => setOpen(false)}>{t(item.label)}<span aria-hidden="true"><Icon name="arrow-right" /></span></Link>)}</div></nav>
  </header></div>;
}
