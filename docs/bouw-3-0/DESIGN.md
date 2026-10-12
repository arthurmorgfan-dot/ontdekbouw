# BOUW 3.0 — the everyday future

Approved BOUW 3.0 release, developed on `design/bouw-3-0` from commit `59e949a1ae5c3c81d551f4a7c966555a011771e2`. Owner authorization includes safe integration into main and production deployment.

## Direction

A future atlas rather than a campaign page. Familiar Dutch land, warm architectural materials, believable solar roofs, food systems and human learning form the visual world. Engineering appears in clear structure and readable controls, rather than excessive animation, invented statistics or exaggerated skylines.

The new opening makes the childhood philosophy prominent beside “De toekomst is mensenwerk.” A clear atlas provides three immediate entry points: BOUWJAAR, LOOP and HIVE. The inherited-generations story and current challenges remain, followed by the retained research method and nine-theme framework. The detailed project chapters keep their existing information and disclaimers.

The design combines deep petrol, pale mineral surfaces, muted green and warm light. Manrope remains the primary brand face; system monospace gives navigation labels and research notation a precise voice. The actual BOUW mark is retained. Rounded architectural image frames, project-specific accent colours, framed research sections and readable cards extend the language across every existing page. Familiar navigation destinations and interaction behavior are deliberately preserved.

## Full-site audit and preservation

The pre-change audit covers all 32 existing Dutch and English public route variants. `audit.json` records the baseline commit and hashes of public route wrappers and content data. `content-baseline.json` records rendered headings and content before the redesign.

- `/` and `/en`: new opening and atlas; existing generations, current questions, life framework, research method, BOUWJAAR/LOOP/HIVE content, wider projects, proposal links and invitation retained.
- `/bouwjaar`: new workshop imagery and warm materials; seven learning themes, six open questions, absence of a programme/pilot/budget and all links retained.
- `/projecten`: framed visual project collection; five flagship projects and separate CLARKE discovery retained.
- `/projecten/loop`: grounded local-food illustration, split scene/research introduction and new dossier system. The research notebook, calculations, UNKNOWN fields, boundaries and external product bridge remain.
- `/projecten/hive`: new solar-roof neighbourhood concept image, the same existing HIVE information plus a proposed-capabilities and Home OS exploration.
- `/projecten/grow`, `/projecten/rise`, `/projecten/mend`: project-specific grounded illustrations and distinct accent colours; all original project information retained.
- `/projecten/clarke`: the shared dossier design with its extremely early, long-term research status. The explicitly conceptual existing space artwork is retained; it is not treated as an achievable near-term engineering result.
- `/voorstellen/gezond-eten-als-basis`, `/voorstellen/vers-eten-moet-goedkoper`, `/voorstellen/iedere-dag-bewegen`: the common visual system, with the full original proposal, evidence and research information.
- `/onze-visie`, `/standpunten`: shared visual system; definitions, principles, all standpoint disclosures and the freedom test retained.
- `/doe-mee`, `/volg-bouw`: refreshed presentation while retaining local preparation, privacy, required validation, no-JavaScript fallback, contextual links and honest follow-channel status.
- All matching `/en` routes, canonical URLs, language alternates, legacy redirects and unknown-route 404 behavior remain.

The original content data is not rewritten. The preservation test checks that every baseline content block outside the homepage still appears in the redesigned main content. Homepage opening copy changes are documented above; the old “De toekomst begint met verwondering” remains as supporting text. No public route is renamed, removed or introduced to replace an existing destination.

## HIVE: concepts, not achievements

New explanatory sections cover room climate, humidity/air-quality monitoring, insulation/acoustics/windows, heat recovery where appropriate, interior/exterior lighting, physical overrides, privacy, local control, optional home panels, rooftop solar, optional batteries, EV/appliance scheduling, shared generation/storage, grid connections and safe backup-power options. Community discussion includes gardens, greenhouses, walkable/cyclable routes, services, optional temporary accommodation and possible phased permanent housing.

Everything is marked “Conceptbeeld”, “Voorgestelde functionaliteit” and “In ontwikkeling”. No existing HIVE homes, Home OS product, hardware prototype, infrastructure, partners, occupants, delivery dates, costs, savings, energy independence or validated engineering specifications are claimed.

The interactive Home OS is a website design example. Room climate and brightness values are illustrative selected settings, not measurements or product specifications. The energy section uses dashes for solar production, consumption, battery charge and grid import/export; its history curve has no numerical measurements. State exists only in the current component and resets on reload. No storage, network requests or device connections are added. Buttons are disabled without JavaScript, and a readable explanation remains.

## Visual assets and social sharing

The supplied `Golden Sunset Over Dutch Polders.png` is the basis of the responsive homepage landscape and the 1200 × 630 `/og-image.jpg`. The social image is text-free: the recognizable Dutch landscape is the identity, with title and description supplied by metadata.

Six localized project JPEGs are provided for BOUWJAAR, LOOP and HIVE at `/social/{project}-{nl|en}.jpg`, with the actual BOUW logo, Manrope project name and clear concept labels. Both `og:image` and `twitter:image` select the same absolute HTTPS image per route and locale; large-image cards, localized text, canonicals and initial-HTML rendering are preserved. Other routes retain the homepage preview as a safe fallback.

New illustration scenes are generated concepts, never documentary evidence of BOUW facilities. Local pre-sized WebP variants keep runtime image services and external requests unnecessary. The hero is eager; secondary imagery is lazy with reserved dimensions. No npm dependencies were added to BOUW.

The project-preview URLs are HTTP 200 on the local public server and are included in the approved release. Production verification follows deployment. X's actual rendered card is not verified by a metadata test.

## Verification and review

Final verification results and full-page Dutch/English desktop/mobile screenshots are in `review/`. Existing validation scripts retain their behavioral checks; obsolete hero selectors/headings and the atlas section order are updated to match the new design. Detailed test results are recorded separately. Automated audits supplement, but do not replace, physical-device and assistive-technology review.

Final result: every existing validation suite passed, including 128 visual checks, 70 phase-one checks, 32 bilingual routes and 24 accessibility pages. The new content/OS/social audit passed, including eight localized key-route metadata responses and 20 full-page screenshots. The original content data and public route wrappers have zero hash changes. See `REVIEW.md` and `validation.json` for evidence and review links.
