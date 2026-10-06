# BOUW wordmark and Dutch/English milestone

Completed in `/Users/raydatema/Desktop/bouw` on 6 October 2026. No deployment or commit was made. The separate LOOP project workspace was not accessed or modified.

## 1. Files changed

The exact inventory appears at the end of this report. Existing page implementations and their CSS moved from `src/app` to `src/views`. CSS files were moved byte-for-byte. Thin route entries were added under `src/app/(dutch)` and `src/app/en`.

Other changes cover localization utilities/content, existing shared renderers, the header/footer, the two official asset copies, one HIVE diagram text variant, legacy English redirects and validation scripts. `src/data`, `src/types`, the custom icon geometry/components and `src/styles` are unchanged.

## 2. Localization architecture

One shared set of views and document/section components serves both languages. Dutch source content remains authoritative in the existing typed data modules. `src/i18n/en.json` supplies an authored presentation dictionary keyed by source copy; numerical values and record IDs remain in the original records.

Server renderers obtain a cached request-local translator from `src/i18n/server.ts`. Client controls use the same locale through `LocaleProvider`. `src/proxy.ts` derives locale only from `/en` and overwrites the internal locale header. It does not redirect based on browser preferences, store language state or call translation services.

Route entry files reuse shared view exports. Next.js route configuration such as `dynamicParams` is declared directly in the entry files. Pages render on the server per request because locale is read from request headers. No new dependency, duplicated component tree, second application or CMS was introduced.

## 3. Complete route structure

| Dutch | English |
| --- | --- |
| `/` | `/en` |
| `/projecten` | `/en/projecten` |
| `/projecten/loop` | `/en/projecten/loop` |
| `/projecten/grow` | `/en/projecten/grow` |
| `/projecten/hive` | `/en/projecten/hive` |
| `/projecten/rise` | `/en/projecten/rise` |
| `/projecten/mend` | `/en/projecten/mend` |
| `/projecten/clarke` | `/en/projecten/clarke` |
| `/voorstellen/gezond-eten-als-basis` | `/en/voorstellen/gezond-eten-als-basis` |
| `/voorstellen/vers-eten-moet-goedkoper` | `/en/voorstellen/vers-eten-moet-goedkoper` |
| `/voorstellen/iedere-dag-bewegen` | `/en/voorstellen/iedere-dag-bewegen` |
| `/onze-visie` | `/en/onze-visie` |
| `/standpunten` | `/en/standpunten` |
| `/doe-mee` | `/en/doe-mee` |
| `/volg-bouw` | `/en/volg-bouw` |

The notebook remains at `/projecten/loop#experiment-001` and `/en/projecten/loop#experiment-001`, with its existing subsection anchors. No new experiment or results route was added. `/resultaten`, unpublished result URLs and unknown project/proposal slugs return 404 in both languages.

The four permanent legacy redirects (`agria → grow`, `habitary → hive`, `lifted → rise`, `cytara → mend`) also exist with `/en` prefixes. CLARKE remains a separate discovery link outside the five flagship cards.

## 4–5. Language control and equivalent switching

The restrained NL / EN links sit in the existing header actions. The current language is identified with `aria-current`; each link has its native language name and `lang`/`hreflang` attributes. No flags or dropdown were added.

`localizedPath` adds/removes the English prefix. Switching preserves the pathname, query parameters and hash, including participation prefills and the notebook subsection. Native links perform a full navigation so document language and request locale agree. Without JavaScript, equivalent pathname switching still works; preserving query/hash through the header control requires JavaScript.

Internal CTAs, navigation, footer links, contextual contribution links and return links use the same helper. External URLs and stable anchor IDs are unchanged.

## 6–8. Official artwork, contrast and spacing

Both files at `public/images/brand/bouw-dark.png` and `bouw-light.png` are byte-identical copies of the supplied PNGs. They are transparent 1024 × 370 images. Both contain the Dutch tagline “MENSEN BOUWEN DE TOEKOMST”; the white artwork is not blank.

- Dutch dark header and footer: official white artwork.
- English header and footer: the existing live-text `.wordmark` BOUW treatment, with English interface copy. Neither supplied image is rendered on English pages.
- Black artwork: preserved for Dutch use on light backgrounds. The existing site has no appropriate light-background brand placement, so none was invented. Black-on-light contrast was previewed locally.
- No current logo placement is photographic; the header/footer are opaque dark surfaces.

Desktop header asset width remains 200px. Mobile width is 140px, retaining the original aspect ratio and built-in clear space. Header minimum heights remain 104px desktop and 80px mobile. The existing Follow link remains in the mobile menu; its duplicate header CTA is hidden below 768px to make space for language links. Footer artwork uses 200px width and automatic height.

No crop, recolouring, reconstruction, effects, geometric changes or slogan replacement was applied to official artwork. Its embedded tagline is necessarily very small at mobile size.

## 9–10. English editorial decisions

- “Minder afhankelijk. Meer mogelijk.” → **“Depend on less. Make more possible.”** The force is retained, with natural English rhythm and layout reflow.
- “Geen beloftes. Bouwplannen.” → **“No promises. Plans to build.”** This retains the distinction between promises and plans without awkward literal phrasing.
- “Een bouwplan wordt beter door kritiek…” → **“A plan gets better through criticism, not by avoiding it.”**
- “Eerst klein. Dan meten. Dan beslissen.” → **“Start small. Then measure. Then decide.”**
- “Mislukken mag. Verbergen niet.” → **“Failure is allowed. Hiding it isn't.”**
- “BOUW bouwt mogelijkheden, geen verplichtingen.” → **“BOUW builds possibilities, not obligations.”**
- LOOP's working-time lens → **“How much of your life does good food cost?”**
- Participation distinguishes **Follow** from **Participate**, with **Think with us**, **Build with us**, **Share a source**, **Help build a pilot**.
- The proposal name “BOUW Basis” is localized as **“BOUW Basics”**; BOUW and the six project names remain unchanged.
- Dutch educational concepts are explained as compulsory education and qualification requirements, with the original Dutch institutional source links retained.

These changes translate meaning and readability, not evidence strength. Paragraphs, unknowns, negative possibilities and caveats were translated throughout, rather than omitted to shorten English layouts.

## 11. Truth-status safeguards

Research records, enums, IDs, quantities, source arrays, measurement states, costs and publication functions are unchanged. Display translation does not determine state. Planned measurements remain planned; UNKNOWN never becomes zero; concepts remain concepts. The publication guard still rejects the LOOP notebook as a published result and rejects synthetic incomplete evidence/review fixtures.

LOOP/GROW/HIVE/RISE/MEND retain their development status. CLARKE remains extremely early with its theoretical/engineering limitations. RISE retains consent, privacy, transparency, human oversight and appeal caveats. MEND retains model limitations and no clinical effectiveness claims.

## 12. LOOP Experiment 001

The complete notebook, Candidate 020, modelling unit, all seven iterations, known ingredient directions, risks, missing inputs, measurement questions, verdict and conditional steps are localized. The underlying model is untouched.

The hypothesis remains **± €18.47 per person per week / model hypothesis / CALCULATION**. English currency formatting changes only the presentation. Iteration values remain `[30.62, 24.04, 21.34, 19.98, 18.98, 19.78, 18.47]`. The repaired weakness remains the price increase from €18.98 to €19.78. The kitchen-test stage remains the same stage, displayed as KITCHEN TEST.

**“This is not a result. It's the number we're trying to break.”** remains the governing statement. Missing worksheets, nutritional validation, measured observations, actual operating costs and supplier evidence remain missing. No participant/pilot claims or model improvements were added.

## 13. Metadata

`src/i18n/metadata.ts` creates localized title/description, canonical, Dutch/English/x-default alternates, Open Graph locale/alternate locale and Twitter metadata. Project/proposal metadata derives from the same authoritative content. Canonicals omit query parameters and research anchors. The root document uses `lang="nl"` or `lang="en"` on initial server rendering.

All 30 public routes were checked for canonical and hreflang values. Unknown/unpublished routes keep 404 behavior. No new claims or results are introduced in metadata.

## 14. Accessibility

Navigation names, skip links, image descriptions, chapter/process labels, contribution controls, status messages and draft/fallback copy are localized. Required contribution and invalid source-URL validation messages are explicitly localized. Native option values and contextual IDs stay stable.

Existing focus visibility, semantic structures, Escape/focus restoration, native disclosures, reduced motion and icon decoration are preserved. Keyboard skip links, scrolling header behavior, underline/focus styling, JavaScript-disabled fallback and touch disclosures were tested. Automated axe audits reported zero WCAG A/AA violations on 22 representative Dutch/English pages.

## 15. Responsive work

Existing typography, cinematic artwork, layouts and custom icon system are retained. Only necessary header/logo/control spacing changed. English paragraphs and headings reflow naturally; type was not reduced to make English fit.

All 30 public pages passed horizontal-overflow checks at 1440, 768, 390 and 320px widths. Twenty-two representative pages passed 200% root-text enlargement at mobile width. Desktop and mobile screenshots were inspected, including homepage, project index, LOOP/HIVE/CLARKE, proposals, vision/positions, contribution and follow views.

HIVE's existing SVG planning diagram had Dutch text. `hive-cell-en.svg` changes only its textual labels and disclaimer, preserving the original geometry, styling and dimensions. The original Dutch diagram is unchanged. Other existing artwork remains in place.

## 16. Validation results

- ESLint: passed, no warnings.
- TypeScript: passed.
- Production build: passed with the complete public route tree.
- Existing publication/evidence guard: passed.
- Localization coverage: 1,982 authored UI/content string checks passed.
- Contextual English email draft: executed against a synthetic local-only fixture; subject/body/status passed; no mail sent.
- Existing Dutch interaction suite: all 15 checks passed.
- Bilingual browser suite: 30 routes, metadata, four widths, switching/query/hash, menu/Escape, contribution download, legacy redirects, unknown/unpublished routes, discreet CLARKE, reduced motion and text enlargement passed.
- Internal deep links: 980 links/anchors checked; desktop equivalent-page switching and English unknown-extension 404 passed.
- Extended visual audit: 256 route/viewport checks across eight widths (320–1920px), zero overflow/clipped text/broken images, 64 axe scans with zero violations and no runtime errors. The existing visual script reports a pre-existing 11px LOOP product-bridge label below its 12px threshold in both languages and exits nonzero for that exception; the locked source CSS was retained. English used the same audit with localized route/lang expectations; its 404 check was completed separately.
- Additional accessibility suite: 22 pages, zero automated violations; native validation, touch, keyboard, no-JavaScript behavior, contextual CLARKE, scrolling header and underline/focus checks passed.
- Rendered English copy audit: no untranslated Dutch prose found. No unexpected browser runtime/console errors; intentional 404 responses were treated as expected responses.
- Original data/types/icons/design-token files: unchanged. Official PNG hashes match the supplied files.

Evidence is retained in `docs/localization-validation.json`. Local screenshots are in `/tmp/bouw-i18n-validation`.

Reproduce checks:

```sh
npm run lint
npx tsc --noEmit
npm run build
node scripts/validate-publication-guard.mjs
node scripts/validate-localization.mjs
```

With a local server and a directory containing Playwright (and axe for the accessibility suite):

```sh
node scripts/validate-interactions.mjs http://127.0.0.1:3000 /path/to/test-dependencies /tmp/bouw-tests/dutch
node scripts/validate-localization-browser.mjs http://127.0.0.1:3000 /path/to/test-dependencies /tmp/bouw-tests
node scripts/validate-localization-accessibility.mjs http://127.0.0.1:3000 /path/to/test-dependencies /tmp/bouw-tests
```

The in-app Browser connection failed during setup in this environment. Validation used local Playwright with existing BOUW test dependencies instead. Automated checks do not replace assistive-technology or physical-device review.

## 17. Intentionally retained Dutch

Dutch pages remain Dutch, including the embedded official tagline. English retains Dutch route slugs, stable fragment/record IDs and the native language-control name “Nederlands”. These are identity/routing controls, not untranslated prose. BOUW, LOOP, GROW, HIVE, RISE, MEND and CLARKE remain unchanged.

Original source records remain Dutch internally. External source/product links retain their destinations; linked sites may have Dutch content outside BOUW. No Dutch tagline is rendered in the English interface.

## 18. Human review

The main outstanding brand limitation is the lack of an official tagline-free wordmark suitable for English. An authorized transparent wordmark-only SVG/PNG would allow the official shape in both languages with live localized tagline text. Until then, English deliberately uses the existing text fallback. No approval is presumed for cropping or rebuilding supplied artwork.

Review the retained 11px LOOP product-bridge label against your preferred minimum label size. Review the English editorial voice and the proposal name “BOUW Basics”, and the small embedded Dutch tagline at mobile scale. Physical iOS/Android email applications, real email delivery, real screen-reader use and external linked-site language were not exercised. No new contact address was configured, no actual contributions were sent, and no site was published.

## Exact file inventory

Status is relative to the clean starting repository. Deleted `src/app` page/CSS paths are the corresponding moves into `src/views`, not removed website content.

```text
 M next.config.ts
 M public/images/brand/bouw-dark.png
 M public/images/brand/bouw-light.png
 M scripts/validate-interactions.mjs
 D src/app/doe-mee/page.tsx
 D src/app/doe-mee/participation.css
 M src/app/globals.css
 M src/app/layout.tsx
 M src/app/not-found.tsx
 D src/app/onze-visie/page.tsx
 D src/app/onze-visie/vision.css
 D src/app/page.tsx
 D src/app/projecten/[slug]/page.tsx
 D src/app/projecten/[slug]/project.css
 D src/app/projecten/clarke/page.tsx
 D src/app/projecten/page.tsx
 D src/app/projecten/projects.css
 D src/app/standpunten/page.tsx
 D src/app/standpunten/positions.css
 D src/app/volg-bouw/follow.css
 D src/app/volg-bouw/page.tsx
 D src/app/voorstellen/[slug]/page.tsx
 D src/app/voorstellen/[slug]/proposal.css
 M src/components/experiments/ResearchNotebook.tsx
 M src/components/layout/Footer.tsx
 M src/components/layout/Header.tsx
 M src/components/participation/ContributionComposer.tsx
 M src/components/positions/PositionEntry.tsx
 M src/components/projects/ProjectDocument.tsx
 M src/components/projects/ProjectHero.tsx
 M src/components/projects/ProjectPlanning.tsx
 M src/components/projects/ProjectResearch.tsx
 M src/components/projects/ProjectSection.tsx
 M src/components/projects/ProjectSystem.tsx
 M src/components/projects/ProjectTesting.tsx
 M src/components/proposals/EvidenceAndResults.tsx
 M src/components/proposals/PlanSection.tsx
 M src/components/proposals/ProposalDocument.tsx
 M src/components/proposals/ProposalHero.tsx
 M src/components/proposals/ProposalMethodology.tsx
 M src/components/proposals/ProposalNextStep.tsx
 M src/components/proposals/ProposalOverview.tsx
 M src/components/proposals/ResearchFramework.tsx
 M src/components/results/ExperimentDocument.tsx
 M src/components/sections/Closing.tsx
 M src/components/sections/FreedomPrinciple.tsx
 M src/components/sections/Hero.tsx
 M src/components/sections/HowItWorks.tsx
 M src/components/sections/Possibility.tsx
 M src/components/sections/Projects.tsx
 M src/components/sections/Proposals.tsx
 M src/components/ui/ProjectCard.tsx
 M src/components/ui/ProposalCard.tsx
 M src/components/ui/SceneImage.tsx
 M src/components/vision/VisionPillars.tsx
 M src/components/vision/VisionPositions.tsx
?? docs/localization-validation.json
?? docs/wordmark-and-localization.md
?? public/images/projects/hive-cell-en.svg
?? scripts/validate-localization-accessibility.mjs
?? scripts/validate-localization-browser.mjs
?? scripts/validate-localization.mjs
?? src/app/(dutch)/doe-mee/page.tsx
?? src/app/(dutch)/onze-visie/page.tsx
?? src/app/(dutch)/page.tsx
?? src/app/(dutch)/projecten/[slug]/page.tsx
?? src/app/(dutch)/projecten/clarke/page.tsx
?? src/app/(dutch)/projecten/page.tsx
?? src/app/(dutch)/standpunten/page.tsx
?? src/app/(dutch)/volg-bouw/page.tsx
?? src/app/(dutch)/voorstellen/[slug]/page.tsx
?? src/app/en/doe-mee/page.tsx
?? src/app/en/onze-visie/page.tsx
?? src/app/en/page.tsx
?? src/app/en/projecten/[slug]/page.tsx
?? src/app/en/projecten/clarke/page.tsx
?? src/app/en/projecten/page.tsx
?? src/app/en/standpunten/page.tsx
?? src/app/en/volg-bouw/page.tsx
?? src/app/en/voorstellen/[slug]/page.tsx
?? src/components/layout/LanguageControl.tsx
?? src/i18n/client.tsx
?? src/i18n/en.json
?? src/i18n/metadata.ts
?? src/i18n/server.ts
?? src/i18n/shared.ts
?? src/proxy.ts
?? src/views/doe-mee/page.tsx
?? src/views/doe-mee/participation.css
?? src/views/onze-visie/page.tsx
?? src/views/onze-visie/vision.css
?? src/views/page.tsx
?? src/views/projecten/[slug]/page.tsx
?? src/views/projecten/[slug]/project.css
?? src/views/projecten/clarke/page.tsx
?? src/views/projecten/page.tsx
?? src/views/projecten/projects.css
?? src/views/standpunten/page.tsx
?? src/views/standpunten/positions.css
?? src/views/volg-bouw/follow.css
?? src/views/volg-bouw/page.tsx
?? src/views/voorstellen/[slug]/page.tsx
?? src/views/voorstellen/[slug]/proposal.css
```
