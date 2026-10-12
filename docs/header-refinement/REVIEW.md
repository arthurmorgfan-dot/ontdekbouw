# BOUW header refinement

Owner-approved BOUW 3.1 header refinement, developed on `design/header-refinement`. Authorized for safe integration into `main` and production deployment.

Preview: [Dutch](http://localhost:3100) · [English](http://localhost:3100/en).

## Design

A compact floating frame in dark navy with a faint mint border and supported backdrop blur. The logo has more room; the duplicate slogan is removed from the header. The mint follow CTA is the single prominent action, with clearly accessible NL/EN controls.

Desktop navigation has three intentional choices: the story, a project disclosure and the vision. The project panel includes BOUWJAAR, LOOP, HIVE, GROW, RISE and MEND, plus the project overview and separate CLARKE discovery. The full navigation keeps all nine existing destinations. Mobile retains those destinations, highlights the follow action and includes a native expandable list of all projects.

The panels are nonmodal navigation disclosures, not application menus. Links use normal Tab navigation; the project trigger also supports Arrow Down/Up for the first/last link. Escape closes and returns focus to the matching trigger. Outside click and focus leaving the disclosure dismiss it. Responsive breakpoint changes close stale panels. Scroll-down hide and scroll-up reveal remain, with open menus and keyboard focus keeping the header visible. Touch controls remain large enough, and reduced motion disables transitions.

All visual rules are header-scoped. The existing desktop 86px and mobile 78px page offsets are retained. Homepage hero, imagery, typefaces, project content and all other sections are unchanged. No dependencies were added.

## Screenshots

| State | Dutch | English |
| --- | --- | --- |
| Desktop closed | [View](nl-desktop-closed.png) | [View](en-desktop-closed.png) |
| Desktop projects | [View](nl-desktop-projects.png) | [View](en-desktop-projects.png) |
| Mobile closed | [View](nl-mobile-closed.png) | [View](en-mobile-closed.png) |
| Mobile navigation | [View](nl-mobile-navigation.png) | [View](en-mobile-navigation.png) |
| Mobile projects expanded | [View](nl-mobile-projects.png) | [View](en-mobile-projects.png) |

## Verification

Production build, TypeScript, lint, localization and publication checks passed. Existing route tests passed for all 32 bilingual routes. Phase-one checks passed at 70 route/width combinations. Interaction and polish suites passed.

The new header suite verifies both languages at 320, 390, 768, 1024 and 1440px, all eight project destinations, project keyboard entry/exit, focus return, outside click, touch navigation, menu scrolling, hide/reveal and language switching with query/hash preservation. Four open-panel accessibility scans passed with no automated WCAG violations.

The existing 24-page accessibility suite and 128-case visual audit passed. Social metadata remains in the initial HTML and the original current preview remains HTTP 200. No page runtime errors were detected.

Test maintenance is limited to the new desktop choices, counting the preserved nine primary menu links separately from the additional project list, and scoping content-disclosure tests to `main` so they do not select the header's native disclosure.
