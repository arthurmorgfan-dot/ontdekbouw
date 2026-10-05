# BOUW full-site visual rebuild

Completed in the local workspace. Production preview: http://127.0.0.1:3181/. Nothing has been published or deployed by this task.

1. **Pages redesigned.** The homepage, project overview, LOOP, GROW, HIVE, RISE, MEND, CLARKE, all three existing proposals, Onze visie, Standpunten, Doe mee and Volg BOUW: 15 public pages. A branded 404 state now shares the same navigation and visual language. The unpublished result renderer inherits the engineering document primitives; no results route or record has been published.

2. **Files changed.** The complete inventory is below. Route handlers and metadata remain in place. The substantive datasets, type models, custom icon geometry, participation composer and four legacy redirects are unchanged. No runtime dependency or package configuration was added. Temporary browser test tools live outside the project.

3. **Shared design system.** `src/styles/tokens.css` defines near-black, warm paper, mineral accents, light/dark text, borders, responsive gutters, section rhythm and type scales. `src/styles/documents.css` supplies the shared two-column, stacked, wide, dark and sand editorial primitives used by project/proposal/research documents. Manrope is a self-hosted variable font with its OFL license. Shared Header, Footer, Button, original Icon, Landscape and SceneImage components carry the system across pages. Page-specific CSS is scoped to its page root to avoid leakage when navigating between routes.

4. **Creative decisions.** The opening moves from a conventional political layout to a vast imagined river civilization. The homepage progresses from awe and project gateways to freedom, an environmental HIVE spread, methodology, proposals and participation. Project pages retain their own original environmental artwork and actual project meaning. Proposal pages are quieter research dossiers with portrait artwork in a margin. Vision is a landscape manifesto; Standpunten is an editorial atlas. Doe mee opens in warm daylight. Volg BOUW acts as an observation point. CLARKE remains a separate, discreet discovery on the project overview. There are no fake statistics, outcomes or technical dashboards.

5. **Desktop behavior.** Broad environmental scenes, restrained large typography, five project gateways, an open project overview with a wider HIVE spread, two-column editorial explanations and calm research documents. Layouts keep maximum reading widths while image fields retain scale on wide screens. The menu includes every existing navigation destination; the primary navigation emphasizes projects, vision and participation.

6. **Mobile behavior.** The homepage keeps a portrait-like scene with quiet text space and a lower landscape focal point. Project scenes use individual focal points and a deliberate lower image field beneath the opening copy. Project gateways become compact icon/text rows rather than a carousel. The project index gets an accessible two-column jump navigation. Proposal portraits move beneath the dossier introduction. Research flows and assessment fields become ordered vertical compositions; chapter navigation remains directly reachable. The mobile menu uses large links and a bounded scroll area on short landscape screens. Primary buttons and menu controls have at least 44px touch targets, and form fields retain 16px text to avoid automatic iOS field zoom.

7. **Accessibility and performance.** Dutch language, semantic headings, one main landmark, skip links, visible focus, labeled native disclosures, form labels and live notices remain. Escape returns focus to the menu toggle; outside clicks close the menu. Reduced motion disables scrolling/transition effects; there is no added animation library. Image frames reserve layout space. Static local WebP source sets supply exact responsive widths without depending on runtime image conversion. Important scenes load eagerly; lower scenes load lazily. Font and imagery require no external service at runtime. New artwork is visibly labeled conceptual. The local mobile emulation recorded CLS 0; its timing is not a real-user performance claim.

8. **Preserved functionality.** Every valid route and all four permanent redirects; five flagship project meanings; discreet CLARKE discovery and contextual participation; proposal research, costs, evidence, risks, results and next steps; freedom principles and test; publication guard and empty results dataset; contribution query parameters and validation; local text-file preparation when no email is configured; mailto behavior when a verified address is configured; Volg BOUW's transparent website-following behavior; canonical metadata and route semantics. Authoritative data, models, icon geometry, composer and redirects were compared byte-for-byte with a pre-edit snapshot.

9. **Validation performed.** Successful production build, ESLint, TypeScript and diff checks. The final production build passed 128 page/viewport combinations: all 15 public pages plus the 404 state at 320, 375, 390, 430, 768, 1024, 1440 and 1920px. No horizontal overflow, clipped checked text, broken loaded images, tiny main labels, invalid status codes, wrong canonical URLs, browser errors or missing main/H1 landmarks remained. 32 axe scans found no automated WCAG A/AA violations. All 16 interaction regressions passed, including menu/Escape, disclosures, context-aware download contents, CLARKE context, reduced motion, keyboard skip link, redirects, unknown/unpublished paths, client navigation and JavaScript-disabled fallback. Additional mobile touch emulation verified a scrollable 430×320 menu, static local assets and reduced-motion transitions. The publication guard rejected unsupported synthetic observations/costs/evidence in an isolated test fixture. Desktop/mobile opening compositions and representative full-page renders were inspected visually.

10. **Manual verification still required.** Real iPhone/Safari and Android behavior, VoiceOver/screen-reader reading order, browser zoom/text enlargement, and the OS email-client draft/delivery flow with a real verified BOUW contact address. No contact address was configured by this task. Automated contrast checks have incomplete cases over photographic backgrounds; opening image/text contrast was inspected visually, but automated checks do not certify accessibility. Test screenshots and detailed temporary logs are under `/private/tmp/bouw-final-validation`; the durable summary is `docs/visual-validation.json`.

## Artwork

Three new concept sources are saved in `public/images/future/`: `river-civilization.webp`, `food.webp` and `movement.webp`. The built-in ImageGen tool produced them. See `docs/concept-artwork.md` for their exact final prompts, conceptual-use boundaries and saved paths. `public/images/scenes/` contains 34 responsive delivery variants, including the six existing project artworks. Original project artwork was preserved.

## Re-running the checks

```sh
npm run lint
npx tsc --noEmit
npm run build
npm run start -- --hostname 127.0.0.1 --port 3181
```

The browser scripts accept a base URL, a directory containing the test dependencies, and an output directory. Dependencies can stay outside this project's package manifest:

```sh
npm install --prefix /tmp/bouw-browser-tools playwright @axe-core/playwright
PLAYWRIGHT_BROWSERS_PATH=/tmp/bouw-browser-tools/browsers /tmp/bouw-browser-tools/node_modules/.bin/playwright install chromium
PLAYWRIGHT_BROWSERS_PATH=/tmp/bouw-browser-tools/browsers node scripts/validate-visual.mjs http://127.0.0.1:3181 /tmp/bouw-browser-tools /tmp/bouw-validation
PLAYWRIGHT_BROWSERS_PATH=/tmp/bouw-browser-tools/browsers node scripts/validate-interactions.mjs http://127.0.0.1:3181 /tmp/bouw-browser-tools /tmp/bouw-validation
node scripts/validate-publication-guard.mjs
node scripts/build-scene-images.mjs
```

Run the production server from a completed build. Do not rebuild its files while an existing preview is serving them.

## Complete changed-file inventory

- `docs/concept-artwork.md`
- `docs/visual-rebuild.md`
- `docs/visual-validation.json`
- `public/images/future/food.webp`
- `public/images/future/movement.webp`
- `public/images/future/river-civilization.webp`
- `public/images/scenes/clarke-hero-1200.webp`
- `public/images/scenes/clarke-hero-1600.webp`
- `public/images/scenes/clarke-hero-480.webp`
- `public/images/scenes/clarke-hero-800.webp`
- `public/images/scenes/food-1024.webp`
- `public/images/scenes/food-480.webp`
- `public/images/scenes/food-800.webp`
- `public/images/scenes/grow-hero-1200.webp`
- `public/images/scenes/grow-hero-1586.webp`
- `public/images/scenes/grow-hero-480.webp`
- `public/images/scenes/grow-hero-800.webp`
- `public/images/scenes/hive-hero-1200.webp`
- `public/images/scenes/hive-hero-1586.webp`
- `public/images/scenes/hive-hero-480.webp`
- `public/images/scenes/hive-hero-800.webp`
- `public/images/scenes/loop-hero-1200.webp`
- `public/images/scenes/loop-hero-1585.webp`
- `public/images/scenes/loop-hero-480.webp`
- `public/images/scenes/loop-hero-800.webp`
- `public/images/scenes/mend-hero-1200.webp`
- `public/images/scenes/mend-hero-1586.webp`
- `public/images/scenes/mend-hero-480.webp`
- `public/images/scenes/mend-hero-800.webp`
- `public/images/scenes/movement-1024.webp`
- `public/images/scenes/movement-480.webp`
- `public/images/scenes/movement-800.webp`
- `public/images/scenes/rise-hero-1200.webp`
- `public/images/scenes/rise-hero-1586.webp`
- `public/images/scenes/rise-hero-480.webp`
- `public/images/scenes/rise-hero-800.webp`
- `public/images/scenes/river-civilization-1200.webp`
- `public/images/scenes/river-civilization-1536.webp`
- `public/images/scenes/river-civilization-480.webp`
- `public/images/scenes/river-civilization-800.webp`
- `scripts/build-scene-images.mjs`
- `scripts/validate-interactions.mjs`
- `scripts/validate-publication-guard.mjs`
- `scripts/validate-visual.mjs`
- `src/app/doe-mee/participation.css`
- `src/app/fonts/Manrope-Variable.ttf`
- `src/app/fonts/OFL.txt`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/not-found.tsx`
- `src/app/onze-visie/page.tsx`
- `src/app/onze-visie/vision.css`
- `src/app/page.tsx`
- `src/app/projecten/[slug]/project.css`
- `src/app/projecten/page.tsx`
- `src/app/projecten/projects.css`
- `src/app/standpunten/positions.css`
- `src/app/volg-bouw/follow.css`
- `src/app/volg-bouw/page.tsx`
- `src/app/voorstellen/[slug]/proposal.css`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Header.tsx`
- `src/components/projects/ProjectDocument.tsx`
- `src/components/projects/ProjectHero.tsx`
- `src/components/projects/ProjectSection.tsx`
- `src/components/proposals/PlanSection.tsx`
- `src/components/proposals/ProposalHero.tsx`
- `src/components/results/ExperimentDocument.tsx`
- `src/components/sections/Closing.tsx`
- `src/components/sections/FreedomPrinciple.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/HowItWorks.tsx`
- `src/components/sections/Possibility.tsx`
- `src/components/sections/Projects.tsx`
- `src/components/ui/Landscape.tsx`
- `src/components/ui/ProjectCard.tsx`
- `src/components/ui/SceneImage.tsx`
- `src/lib/scene-images.ts`
- `src/lib/visuals.ts`
- `src/styles/documents.css`
- `src/styles/tokens.css`
