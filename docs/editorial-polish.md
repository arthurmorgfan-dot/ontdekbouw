# BOUW focused visual/editorial polish

7 October 2026. Seven-chapter order and route architecture retained. Release preparation: generated validation JSON and screenshots are retained locally and excluded from the release commit.

## Changes

LOOP’s hero now explains regular household food supply and the milkman analogy in the first viewport. The previous lead is replaced, not supplemented with another long paragraph. Its primary CTA reaches `#loop-in-het-kort`. The maturity indicator is beneath the explanation; the original stage note, product bridge, technical notebook, sources and research record remain.

Mobile journey spacing and line height are tighter, with all nine ideas and the noncausal/choice caveat retained. The homepage method is shorter; its full freedom test is preserved verbatim at `/onze-visie#vrijheidstest` and the English equivalent. The homepage links to it and retains effectiveness, cost, risk and choice as visible criteria.

The existing translated brand line appears inside the hero at widths below 1200px; header dimensions are unchanged. The LOOP chapter gains one sentence connecting everyday foundations to room to build, without stating causality or dependency.

BOUWJAAR retains all seven themes and six unresolved questions. Native accessible disclosures make the questions easier to scan, with keyboard/no-JavaScript operation. English now uses “Find your own direction”, “could try practical skills…” and “What we still need to work out”. Mobile theme spacing is tighter.

The existing menu’s semantic current-page marker now receives a muted-gold, one-pixel label underline. Supporting proposals have a visible label. The project index says “Projects in development”; the redundant self-link is removed there, while the homepage has a clear project-index link. The closing now invites testing ideas, improving them and building together.

## Mobile comparison at 390 × 844

| Measurement | Dutch before → after | English before → after |
|---|---:|---:|
| Homepage height | 9,927 → 8,874px | 9,711 → 8,747px |
| LOOP chapter begins | 3,797 → 3,442px | 3,718 → 3,338px |
| Journey height | 1,914 → 1,528px | 1,830 → 1,452px |
| Method height | 2,058 → 1,294px | 1,971 → 1,266px |

Measurements use the same three viewport sizes and production preview as the preceding QA. The mobile homepage is 10.6% shorter in Dutch and 9.9% shorter in English. LOOP arrives approximately 355px/380px earlier.

## Validation and visual QA

Lint, TypeScript, build, publication guard and 2,090 content/UI coverage checks passed. The same browser suites passed: all 32 bilingual public routes, 70 Phase 1 route/width checks, 24 automated accessibility page audits with no violations, and all 16 existing interaction assertions. Contextual contribution, equivalent switching, redirects, 404, discreet CLARKE, reduced motion, text enlargement and no-JavaScript behavior remain covered.

Repeated captures on `/`, `/bouwjaar`, `/projecten` and `/projecten/loop`, NL and EN, at 1440 × 900, 768 × 1024 and 390 × 844: no horizontal overflow or runtime errors. Reviewed the homepage opening, desktop editorial progression, tablet hero, mobile LOOP explanation/menu and BOUWJAAR disclosures. Focused assertions verify the complete household lead is inside LOOP’s first viewport (mobile lead ends around y=529px), the opening brand line is visible on tablet/mobile, all nine ideas remain and all unresolved questions open. The freedom-test body is checked verbatim against the original component.

Research records, experiment records, classifications, amounts, types, the notebook renderer and publication guard, icons, artwork, logo assets and design tokens are unchanged. No evidence or caveats were deleted. The source LOOP lead remains in the research record but the hero uses the concise presentation override.

## Remaining assets

BOUWJAAR needs an approved cinematic asset showing practical learning, making, activity or teamwork. The existing flat runner illustration would introduce a conflicting style; the landscape remains.

The RISE overview image still has baked Dutch notebook lettering. The existing text-free SVG is an abstract illustration and was judged an unsuitable replacement. An approved English-safe or language-independent RISE image is required; no destructive cropping/reconstruction was performed.

The prior official-logo limitation remains: English uses the existing text fallback because the supplied assets embed the Dutch tagline.

## Review first

`/projecten/loop` and `/en/projecten/loop` at mobile width; `/` and `/en` at mobile/tablet widths; `/bouwjaar` and `/en/bouwjaar`; `/projecten` and `/en/projecten`; the retained freedom test at `/onze-visie#vrijheidstest`.

Screenshots: `/tmp/bouw-polish-qa/index.html`. Validation evidence: `/tmp/bouw-release-validation/editorial-polish-validation.json`.

## Files changed in this pass

- `src/components/projects/ProjectHero.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/LifeStory.tsx`
- `src/components/sections/HowItWorks.tsx`
- `src/components/sections/Projects.tsx`
- `src/components/sections/Closing.tsx`
- `src/views/bouwjaar/page.tsx`
- `src/views/onze-visie/page.tsx`
- `src/views/projecten/page.tsx`
- `src/app/globals.css`
- `src/views/story.css`
- `src/views/projecten/[slug]/project.css`
- `src/i18n/en.json`
- `scripts/validate-phase-one.mjs`
- `scripts/validate-polish.mjs`
- `docs/editorial-polish.md`
