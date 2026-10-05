# BOUW icon family

Typography carries vision; linework carries interaction and system meaning.
The family should look drawn with the same ruler for the same building plan.
These are original BOUW drawings, not library artwork.

## Construction

- Canonical viewBox: 0 0 24 24. Visible geometry stays between 2 and 22;
  stroke extends at most .75 unit beyond that. Maintain optical breathing room.
- Stroke: 1.5 canonical units, none fill, currentColor. Butt terminals, miter
  joins; square frames and open structural corners. No per-icon stroke overrides.
- Integer coordinates for major structure, repeated 6-unit modules. Curves are
  restricted to intentional circles with radii 2 and 7 in the research target.
- Forward arrow: shaft (4,12)–(20,12); head (15,7)–(20,12)–(15,17).
  Other directions rotate this exact geometry. External links use the same
  45-degree construction in an open document frame.
- UI size: 16px; menu 18px; disclosures 20px; project marks 24px;
  homepage methodology 32px. Compact process separators are 12px, deliberately
  secondary to text. Stroke scales with artwork, not vector-effect.
- Fixed width/height, inline baseline alignment and no flex shrinking.
  Keep existing icon wrappers, hit targets, palette and layout gaps.

## API and accessibility

`Icon` takes name, size, className and optional label. `artwork.ts` is the only
geometry source. Static trusted SVG markup is rendered without user input.
No defs, IDs, effects or runtime-generated geometry: server/client output agrees.
Decorative icons default to aria-hidden and focusable=false. A standalone
meaningful image can receive label (role=img, aria-label). Icon-only controls
must name the control, not rely on the drawing. Existing Menu/Sluiten labels,
expanded state, Escape behavior, native details and text labels are retained.
Icons convey no new tested/status claim.

## Audit and applications

No installed icon dependency or inline UI SVG existed. Old UI used Unicode
arrows, Menu/Sluiten glyphs, plus disclosures, target/triangle/scaling glyphs,
project clover/house/spark/arrow glyphs and a results dash. Three CSS-generated
arrow families and numbered proposal-flow arrows also used font glyphs.
Those are replaced; pseudo-icon CSS is removed. Illustrative SVG assets, hero
photos and the BOUW favicon are artwork/identity, not UI icon implementations,
and stay unchanged. Unused Next starter SVG assets are not loaded by the site
and are outside this migration. Arrows within authored research prose remain
text: changing them would change content rather than UI iconography.

| Icon | Where used |
| --- | --- |
| arrow-right | Buttons, cards, internal navigation/CTAs, project relationships, CLARKE discovery, methodology/flow separators |
| arrow-left | Project and proposal return links |
| arrow-up | Footer back-to-top |
| arrow-down | Chapter and hero in-page navigation |
| external | Standpunt/vision/proposal sources, future published experiment sources |
| menu / close | Existing mobile navigation toggle |
| plus | Vision and standpoint native details disclosures |
| understand / experiment / scale | Existing three homepage methodology positions |
| loop / grow / hive / rise / mend | Existing project-card symbol holders on homepage and project index |
| empty | Existing proposal results empty-state dash |
| mail / download | Participation's existing email-draft/local-download action |

Project marks use the same notation, not independent logos: LOOP has opposed
open circulation corners around a central module; GROW has a greenhouse frame,
structural bays and restrained sprout; HIVE has four footprints around paths;
RISE has stepped progression and an open next-step corner; MEND has opposing
material boundaries joined by bridging lines. CLARKE receives no new mark or
prominence. Internal diagonal navigation glyphs are now forward arrows;
external symbols are reserved for actual external source destinations.

## Restraint and extension

Do not add marks to every heading, numbered question, status or participation
path. Existing words/numbers already convey these concepts. A checkmark on
unmeasured results would be misleading. No freedom symbol: the principle is
editorial, not a badge. No icon inside native select options; retain familiar
platform affordances. Do not touch technical illustrations or hero artwork.
Future icons must reuse this grid, stroke, terminals, frame and arrow grammar.
Inspect them with the whole family, simplify metaphors, test at 16px and keep
within optical margins. Avoid extra decorative icons or one-off inline SVGs.

## Local catalog

Run `node scripts/icon-catalog.mjs` and open `/tmp/bouw-icon-catalog.html` locally.
An optional output filename can be provided. It displays the same production
geometry at 16/20/24/32px. It is not an app route, public asset or navigation
item. Review optical balance, baseline, clipping, contrast and spacing on
actual desktop/mobile pages before approving the family.

## Migration inventory

Added:

- `src/components/icons/Icon.tsx`
- `src/components/icons/artwork.ts`
- `scripts/icon-catalog.mjs`
- `docs/icon-system.md`

Modified:

- `src/app/doe-mee/page.tsx`
- `src/app/globals.css`
- `src/app/onze-visie/page.tsx`
- `src/app/projecten/[slug]/project.css`
- `src/app/projecten/page.tsx`
- `src/app/standpunten/page.tsx`
- `src/app/voorstellen/[slug]/proposal.css`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Header.tsx`
- `src/components/participation/ContributionComposer.tsx`
- `src/components/positions/PositionEntry.tsx`
- `src/components/projects/ProjectDocument.tsx`
- `src/components/projects/ProjectHero.tsx`
- `src/components/projects/ProjectPlanning.tsx`
- `src/components/projects/ProjectSystem.tsx`
- `src/components/proposals/EvidenceAndResults.tsx`
- `src/components/proposals/ProposalDocument.tsx`
- `src/components/proposals/ProposalHero.tsx`
- `src/components/proposals/ProposalMethodology.tsx`
- `src/components/proposals/ProposalNextStep.tsx`
- `src/components/results/ExperimentDocument.tsx`
- `src/components/sections/HowItWorks.tsx`
- `src/components/sections/Projects.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/ProjectCard.tsx`
- `src/components/ui/ProposalCard.tsx`
- `src/components/vision/VisionPositions.tsx`

No pre-existing files or dependencies were removed. No project artwork, data,
claims, status, routes, redirects or contact configuration changed.

Validation: ESLint, TypeScript and production build passed. All 19 icons
rendered at six sizes with correct viewBox/currentColor/accessibility and all
114 SVG outputs parsed as XML. Publication guards remained green. HTTP checks
passed for existing routes/assets, four legacy redirects, CLARKE discovery,
participation contexts and both contact configurations. All 15 built HTML
files retained visible words, image attributes and link ordering (excluding
replaced pseudo-icons and the formerly CSS-rendered flow numbers). Static
link/anchor/metadata/semantic checks passed across 14 public pages.
Browser setup failed, so optical balance, clipping, mobile overflow, hydration
console behavior, layout shifts, menu/details interaction and mail/download
interaction still need visual/manual verification. No browser check is claimed.
