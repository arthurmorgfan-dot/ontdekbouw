# BOUW homepage: rediscovering the future

Approved BOUW 2.0 homepage redesign. Production release authorized on 12 October 2026.

## Design

A cinematic Dutch landscape opens an editorial story about what we inherit, what blocks progress today and what we could investigate next. Manrope remains the primary typeface. System Georgia adds an italic editorial voice; no remote font is requested. The established BOUW logo, paper/forest/gold palette and existing navigation destinations remain.

The hero has a short, non-looping entrance animation. Reduced-motion users receive the static layout. No scroll interception, autoplay video, animation dependency or content-hiding scroll reveal is introduced. Imagery uses pre-sized local WebP variants, reserved frames and lazy loading outside the hero.

## Content inventory and changes

| Previous content | New location / change |
| --- | --- |
| Hero: “Minder afhankelijk. Meer mogelijk.” | Meaning retained in the present-day chapter. New primary heading: “De toekomst begint met verwondering.” |
| Hero introduction about practical daily-life plans | Retained verbatim under the new opening heading. |
| Slogan | Retained in navigation, opening, invitation and footer; translations preserved. |
| Hero “Onze visie” button | Removed from the opening to give it one primary action. The route remains linked in the navigation menu and footer, and the research principles link remains. |
| Hero “Ontdek het verhaal” | Retained, now starts at the inherited-generations chapter instead of the life framework. |
| “De horizon is open” hero aside | Replaced by the childhood philosophy in the hero; its idea becomes the closing heading “De horizon is nog open.” |
| Existing futuristic hero and closing landscape | Replaced on the homepage by an illustrative Dutch polder scene and a typographic closing. Original assets and components remain in the repository. |
| Generations / present challenges | New qualitative editorial copy and research questions. No statistics or claims of proven BOUW outcomes. |
| How BOUW works: steps, methodology, research boundaries, freedom test | Retained verbatim, moved before the project chapters to introduce what BOUW proposes to investigate. |
| Nine life-framework themes, introduction, limitations and choice principle | Retained verbatim, now follow the research approach within the sage-green investigation sequence. |
| BOUWJAAR | All description, statement, status text and project link retained. Image replaced by a visibly labelled AI illustration of childhood making; no programme is claimed. |
| LOOP | All copy, status text and CTA retained; circular image treatment replaces the rectangular image. |
| HIVE | All approved copy, complete development disclaimer and CTA retained. Existing concept image retained. Dark-green editorial treatment. |
| Wider project collection and proposal links | All five project entries and proposal links retained, with all original destinations and anchor IDs. |
| Closing “Test de ideeën. Maak ze beter. Bouw mee.” | Retained as invitation copy beneath the new horizon heading. Description, participation text and both CTA destinations retained. |

Existing project pages, route wrappers, URLs, data, shared global design tokens and social metadata are unchanged. Homepage styles are scoped under `.rediscovery-shell` / `.rediscovery-home`; no shared page redesign is applied. The original `#hive` project anchor remains; the dedicated section continues to use `#hive-chapter` to avoid duplicate IDs.

## Illustration provenance

`polders.webp` derives from the golden-hour Dutch landscape generated for the existing BOUW social-image task, without its branding overlay. `wonder.webp` is a new AI-generated editorial illustration of children building a wooden model. Both are labelled as illustrations. Existing LOOP and HIVE artwork remains labelled as concept imagery.

## Review artifacts

The local production preview runs on http://localhost:3100 (Dutch) and http://localhost:3100/en (English). Full-page screenshots are `nl-desktop.png`, `nl-mobile.png`, `en-desktop.png` and `en-mobile.png`. Browser audit details are in `validation.json`.

## Verification

Passed: TypeScript (`npx tsc --noEmit`), ESLint, localization coverage (2,148 strings), publication guard and production build.

Browser validation passed at seven homepage widths (320, 390, 768, 1024, 1200, 1440 and 1920) in both languages, with four full-page review screenshots and zero duplicate IDs, broken images or horizontal overflow. All 32 bilingual public routes passed the existing browser suite, including canonicals, equivalent language switching, menu keyboard behavior, contextual contribution download, legacy redirects and unknown-route 404s. The existing phase-one suite passed 70 route/width checks and retained stable anchors and the LOOP research notebook.

Four homepage axe scans and the existing 24-page bilingual accessibility suite reported zero automated WCAG violations. Keyboard/focus, touch disclosures, required validation, 200% text enlargement, reduced motion and no-JavaScript content passed. Social metadata remained in the initial head for four crawler profiles in both languages; the original 1200 × 630 JPEG returned HTTP 200.

Test maintenance: the existing route suite now expects the already-approved `www.ontdekbouw.nl` canonical; the no-JavaScript image assertion uses the new opening scene. No production metadata was changed.

Automated checks cannot substitute for review with physical devices or assistive technology. X's actual card display remains outside this local redesign verification.
