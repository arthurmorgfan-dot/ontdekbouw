# BOUW Phase 1 — one larger story

Implemented on 7 October 2026. Release preparation: generated validation JSON and screenshots are retained locally and excluded from the release commit.

## Result

The shared NL/EN homepage now follows BOUW → Building a life → BOUWJAAR → LOOP → Connected projects → How we build → Build with us. The existing hero statement and “Geen beloftes. Bouwplannen.” remain. Its short introduction now establishes practical plans for everyday life.

The life framework has nine open editorial entries, becoming a vertical narrative on mobile. It explicitly rejects a proven causal chain or compulsory path and preserves individual choice.

BOUWJAAR exists at `/bouwjaar` and `/en/bouwjaar`. Seven themes cover movement, food/cooking, finances, practical skills, technology, teamwork/responsibility and discovering strengths. Six questions keep age, duration, participation, providers, curriculum and funding unresolved. The name does not establish a one-year duration. No programme, pilot or outcome is claimed. The contextual participation link selects BOUWJAAR in the existing contribution composer, without adding a submission mechanism.

LOOP has a reusable four-question introduction before the notebook: problem, idea, conceptual operation and possible household experience. It explains the milkman ambition without making delivery, local production or economics established facts. Existing shops and collection remain alternatives. No deeper research content was rewritten.

The project overview retains five flagships, showing food access, production, housing, direction and biological repair research. Shared ambition is distinguished from an existing integrated operating system. CLARKE stays in its separate discovery link.

## Architecture and preservation

`LifeStory.tsx` contains the three new editorial chapters. `story.ts` holds stable source content and project-role labels. The new BOUWJAAR route entries re-export one shared view. The existing dictionary, locale provider, language switch and metadata helper are reused; no duplicated app or runtime translation.

The four-question `ProjectIntroduction` pattern is applied to LOOP only in this phase. The other full project documents retain their existing presentation and research structure.

Header behavior is preserved. Desktop priorities are BOUW, BOUWJAAR, LOOP and Projecten. The existing menu retains Onze visie, Standpunten, Hoe we werken, Doe mee and Volg BOUW. NL / EN and equivalent-page switching remain. The compact desktop spacing is adjusted only at 1024–1199px.

All existing URLs remain. Homepage anchors including `#visie`, `#mogelijkheden`, `#projecten`, `#voorstellen`, `#werkwijze`, `#doe-mee` and `#meebouwen` remain. `#loop` now reaches the household chapter; the connected LOOP gateway uses `#loop-project` to avoid duplicate IDs. The `#voorstellen` anchor reaches contextual links to the three existing proposals instead of a separate homepage card section. Existing standalone components remain available.

Project research records, experiment records, classifications, amounts, types, publication guard and the notebook renderer are unchanged. The €18.47 model remains CALCULATION/model hypothesis, not a measured result. Existing stage notes, citations and caveats remain visible.

Manrope, design tokens, artwork, icons, official logo files, button sweeps, ruler links, keyboard focus, reduced-motion and touch behavior are preserved. Both official logos still embed the Dutch tagline; English uses the existing live-text fallback. No image generation or artwork changes.

## Validation

- Lint, TypeScript and production build passed.
- Publication/evidence guard passed.
- Localization coverage: 2,085 authored content/UI strings passed.
- Phase 1 suite: seven ordered chapters, stable anchors, new route switching with query/fragment, BOUWJAAR prefilling, four-question LOOP introduction before the preserved notebook, and 70 route/width checks passed.
- Bilingual browser suite: all 32 public routes; localized metadata, canonicals/hreflang, four layout widths, menus, switching, contribution download, redirects, 404s, CLARKE discovery and reduced motion passed. Zero unexpected console/runtime errors.
- Accessibility suite: 24 representative NL/EN pages, zero automated WCAG violations, 200% root-text enlargement without overflow, keyboard, touch, native validation, no-JavaScript fallbacks, scrolling header and underline/focus checks passed.
- All 16 existing interaction assertions passed after updating expectations for the new navigation.
- Visually reviewed both compact desktop headers, English desktop homepage, BOUWJAAR mobile opening and the vertical mobile life framework. Screenshots are under `/tmp/bouw-phase1-validation`.

The in-app browser connection failed; local Playwright performed validation. Automated results do not replace physical-device or assistive-technology review. No mail was sent.

Evidence: `/tmp/bouw-release-validation/phase-one-validation.json`.

To reproduce browser tests with a running local server and a directory containing Playwright and axe:

```sh
node scripts/validate-phase-one.mjs http://127.0.0.1:3000 /path/to/test-dependencies /tmp/bouw-phase-one
node scripts/validate-localization-browser.mjs http://127.0.0.1:3000 /path/to/test-dependencies /tmp/bouw-bilingual
node scripts/validate-localization-accessibility.mjs http://127.0.0.1:3000 /path/to/test-dependencies /tmp/bouw-accessibility
node scripts/validate-interactions.mjs http://127.0.0.1:3000 /path/to/test-dependencies /tmp/bouw-interactions
```

## Changed-file inventory

```text
 M scripts/validate-interactions.mjs
 M scripts/validate-localization-accessibility.mjs
 M scripts/validate-localization-browser.mjs
 M src/app/globals.css
 M src/components/layout/Footer.tsx
 M src/components/layout/Header.tsx
 M src/components/projects/ProjectDocument.tsx
 M src/components/sections/Hero.tsx
 M src/components/sections/Projects.tsx
 M src/components/ui/ProjectCard.tsx
 M src/data/site.ts
 M src/i18n/en.json
 M src/views/doe-mee/page.tsx
 M src/views/page.tsx
 M src/views/projecten/[slug]/page.tsx
 M src/views/projecten/[slug]/project.css
 M src/views/projecten/page.tsx
?? docs/phase-one.md
?? scripts/validate-phase-one.mjs
?? src/app/(dutch)/bouwjaar/
?? src/app/en/bouwjaar/
?? src/components/projects/ProjectIntroduction.tsx
?? src/components/sections/LifeStory.tsx
?? src/data/story.ts
?? src/views/bouwjaar/
?? src/views/story.css
```
