# Review BOUW 3.0

Local preview: [Dutch](http://localhost:3100) · [English](http://localhost:3100/en) · [HIVE Home OS](http://localhost:3100/projecten/hive#home-os) · [English Home OS](http://localhost:3100/en/projecten/hive#home-os).

The owner has approved this review candidate for integration into main and production deployment. The screenshots below record the approved local design.

## Full-page screenshots

| Page | Dutch desktop | Dutch mobile | English desktop | English mobile |
| --- | --- | --- | --- | --- |
| Homepage | [View](review/nl-home-desktop.png) | [View](review/nl-home-mobile.png) | [View](review/en-home-desktop.png) | [View](review/en-home-mobile.png) |
| BOUWJAAR | [View](review/nl-bouwjaar-desktop.png) | [View](review/nl-bouwjaar-mobile.png) | [View](review/en-bouwjaar-desktop.png) | [View](review/en-bouwjaar-mobile.png) |
| LOOP | [View](review/nl-loop-desktop.png) | [View](review/nl-loop-mobile.png) | [View](review/en-loop-desktop.png) | [View](review/en-loop-mobile.png) |
| HIVE | [View](review/nl-hive-desktop.png) | [View](review/nl-hive-mobile.png) | [View](review/en-hive-desktop.png) | [View](review/en-hive-mobile.png) |
| All projects | [View](review/nl-projects-desktop.png) | [View](review/nl-projects-mobile.png) | [View](review/en-projects-desktop.png) | [View](review/en-projects-mobile.png) |

## HIVE detail views

[Home OS — Dutch](review/nl-home-os.png) · [Home OS — English](review/en-home-os.png) · [Energy — Dutch](review/nl-energy.png) · [Energy — English](review/en-energy.png).

These are website interface examples, not an operational smart-home system. All energy readings are blank; room-control values are illustrative settings. No connected devices, saved preferences or actual measured outcomes exist.

## Social previews

[Six localized project previews](social-previews.png). The homepage preview is the supplied Dutch landscape without text. All seven JPEG assets are 1200 × 630 and return HTTP 200 from the local public server. The approved release includes these assets. Their metadata uses absolute production HTTPS URLs.

## Validation

- Production build, TypeScript, ESLint, 2,246 localization coverage checks and publication guard passed.
- All 32 bilingual routes, canonicals, language switching, redirects, 404s and contribution download passed.
- Existing phase-one suite: 70 route/width checks passed; stable anchors, all nine life-framework themes and LOOP research notebook retained.
- Existing polish and interaction suites passed, including keyboard, no-JavaScript fallback, menu behavior and honest follow-page behavior.
- 128 visual checks across eight widths passed: no overflow, clipped text, small-text threshold failures, broken images or browser runtime errors.
- Existing 24-page accessibility suite passed with zero automated WCAG violations. Four homepage scans and all eight localized Home OS panel scans also passed.
- Baseline content is present on all 32 route variants; original content-data and public-route-wrapper hashes are unchanged.
- Home OS room preferences are independent, resets work and reload discards local state. No-JavaScript controls are disabled with an explanation.
- Homepage plus BOUWJAAR/LOOP/HIVE metadata was verified in initial crawler HTML in both languages. Both image tags match; large-image cards remain intact; local JPEGs return HTTP 200 with the expected dimensions.

[Design reasoning and content audit](DESIGN.md) · [Detailed validation report](validation.json).

Automated audits do not replace physical-device or assistive-technology review. X's actual card rendering has not been verified. No npm dependencies were added to BOUW.
