"use client";
import { useI18n } from "@/i18n/client";


import LanguageControl from "./LanguageControl";
import Icon from "@/components/icons/Icon";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import "./header.css";

export default function Header({ homePath = "", activeHref }: { homePath?: string; activeHref?: string }) {
  const { t, l, locale } = useI18n();
  const navigationHref = (href: string) => href.startsWith("#") ? `${homePath}${href}` : l(href);
  const currentHref = activeHref ?? (homePath ? undefined : "#home");
  const [panel, setPanel] = useState<"projects" | "navigation" | null>(null);
  const open = panel !== null;
  const projectsToggle = useRef<HTMLButtonElement>(null);
  const projectPanel = useRef<HTMLDivElement>(null);
  const projectFocus = useRef<"first" | "last" | null>(null);
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
      if (event.key === "Escape") { setPanel(null); (panel === "projects" ? projectsToggle : toggle).current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setPanel(null);
    }
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", escape); document.removeEventListener("pointerdown", outside); };
  }, [open, panel]);
  useEffect(() => {
    if (panel === "projects" && projectFocus.current) {
      const links = projectPanel.current?.querySelectorAll<HTMLAnchorElement>("a");
      (projectFocus.current === "last" ? links?.[links.length - 1] : links?.[0])?.focus();
      projectFocus.current = null;
    }
  }, [panel]);
  useEffect(() => {
    const compact = window.matchMedia("(max-width: 1023px)");
    const close = () => setPanel(null);
    compact.addEventListener("change", close);
    return () => compact.removeEventListener("change", close);
  }, []);
  const projectLinks = [
    { name: "BOUWJAAR", href: "/bouwjaar", description: "Mogelijkheden ontdekken" },
    { name: "LOOP", href: "/projecten/loop", description: "Toegang tot voedsel" },
    { name: "HIVE", href: "/projecten/hive", description: "Wonen en dagelijks leven" },
    { name: "GROW", href: "/projecten/grow", description: "Voedselproductie" },
    { name: "RISE", href: "/projecten/rise", description: "Richting en volgende stappen" },
    { name: "MEND", href: "/projecten/mend", description: "Onderzoek naar biologisch herstel" },
  ];
  return <div className="header-slot" style={headerHeight ? { height: headerHeight } : undefined}>
    <header ref={header} className="header refined-header" data-scroll-ready={headerHeight > 0} data-hidden={hidden && !open} onFocusCapture={() => setHidden(false)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setPanel(null); }}>
      <div className="header-frame">
        <div className="header-identity"><a className="header-logo" href={l(`${homePath}#home`)} aria-label={t("BOUW — Mensen bouwen de toekomst — naar home")}>{locale === "nl" ? <Image src="/images/brand/bouw-light.png" alt="" width={1024} height={370} unoptimized priority /> : <span className="wordmark">BOUW</span>}</a></div>
        <nav className="desktop-nav" aria-label={t("Hoofdnavigatie")}>
          <a href={l(navigationHref("#home"))} className="ruler-link" aria-current={currentHref === "#home" ? "page" : undefined}>{t("Het verhaal")}</a>
          <div className="header-projects" onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node) && panel === "projects") setPanel(null); }}><button ref={projectsToggle} className="projects-toggle" type="button" aria-expanded={panel === "projects"} aria-controls="header-project-panel" onClick={() => setPanel(panel === "projects" ? null : "projects")} onKeyDown={event => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); projectFocus.current = event.key === "ArrowDown" ? "first" : "last"; if (panel === "projects") { const links = projectPanel.current?.querySelectorAll<HTMLAnchorElement>("a"); (event.key === "ArrowDown" ? links?.[0] : links?.[links.length - 1])?.focus(); projectFocus.current = null; } else setPanel("projects"); } }}>{t("Bouwplannen")}<span className="header-chevron" aria-hidden="true">⌄</span></button>
            <div id="header-project-panel" ref={projectPanel} className="header-project-panel" hidden={panel !== "projects"}>
              <div className="project-panel-heading"><p>{t("Verken onze projecten")}</p><span>{t("In ontwikkeling")}</span></div>
              <div className="header-project-links">{projectLinks.map(item => <Link key={item.href} href={l(item.href)} onClick={() => setPanel(null)}><span><strong>{item.name}</strong><small>{t(item.description)}</small></span><span aria-hidden="true">↗</span></Link>)}</div>
              <div className="project-panel-footer"><Link href={l("/projecten")} onClick={() => setPanel(null)}>{t("Alle projecten")} <span aria-hidden="true">→</span></Link><Link href={l("/projecten/clarke")} onClick={() => setPanel(null)}>CLARKE <span aria-hidden="true">↗</span></Link></div>
            </div>
          </div>
          <Link href={l("/onze-visie")} className="ruler-link" aria-current={currentHref === "/onze-visie" ? "page" : undefined}>{t("Onze visie")}</Link>
        </nav>
        <div className="header-actions"><LanguageControl /><Button href={l("/volg-bouw")} variant="light" build>{t("Volg BOUW")}</Button><button ref={toggle} className="menu-toggle" type="button" aria-expanded={panel === "navigation"} aria-controls="mobile-navigation" onClick={() => setPanel(panel === "navigation" ? null : "navigation")}>{t(panel === "navigation" ? "Sluiten" : "Menu")}<span className="header-menu-mark" aria-hidden="true"><i /><i /></span></button></div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav header-navigation-panel" aria-label={t("Alle pagina’s")} hidden={panel !== "navigation"}>
        <div className="navigation-panel-heading"><p>{t("Verken BOUW")}</p></div>
        <div className="navigation-links">{[...site.navigation, { label: "Volg BOUW", href: "/volg-bouw" }].map(item => <Link key={item.href} href={l(navigationHref(item.href))} aria-current={item.href === currentHref ? "page" : undefined} onClick={() => setPanel(null)}>{t(item.label)}<span aria-hidden="true"><Icon name="arrow-right" /></span></Link>)}</div>
        <details className="mobile-project-disclosure"><summary>{t("Alle bouwplannen")}<span aria-hidden="true">+</span></summary><div className="mobile-project-links">{projectLinks.map(item => <Link key={item.href} href={l(item.href)} onClick={() => setPanel(null)}>{item.name}<span>{t(item.description)}</span></Link>)}<Link href={l("/projecten")} onClick={() => setPanel(null)}>{t("Alle projecten")}</Link><Link href={l("/projecten/clarke")} onClick={() => setPanel(null)}>CLARKE</Link></div></details>
      </nav>
    </header>
  </div>;
}
