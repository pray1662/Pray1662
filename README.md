# Pray1662 — V0.8

Pray1662 is a static Progressive Web App for Morning and Evening Prayer in the 1662 Book of Common Prayer tradition. It is designed to be used alongside a physical Bible: Scripture is shown as references, not reproduced in full.

## V0.8: interchangeable reading plans

V0.8 introduces a single reading-plan engine. The Office asks that engine for two Bible references; everything else remains independent. Changing reading plan therefore does **not** change the 1662 Office, the 30-day Psalter, the Collect of the Day, appearance, Focus/Continuous modes, or Scriptural marginalia.

### Active options

- **1662 Lectionary** — the original one-year BCP Table of Lessons, including its appointed Apocryphal readings.
- **M’Cheyne Bible Reading Plan** — the complete 365-day plan. The two Family readings are used at Morning Prayer and the two Secret/Personal readings at Evening Prayer.

On 29 February, M’Cheyne shows a catch-up day rather than shifting the historic calendar: 1 March remains the 1 March appointment.

### Common Worship Daily Prayer

The Common Worship adapter and UI slot are present, but **the option is deliberately disabled in V0.8**. Research confirmed that the Common Worship Weekday Lectionary for Morning and Evening Prayer systematically prints canonical alternatives alongside the Apocryphal options we audited. However, the app does not yet contain the complete authorised Table 1 / Table 2 dataset, and the relevant Common Worship material is copyright the Archbishops’ Council. Pray1662 will not invent missing readings or silently fall back to a different lectionary.

When the complete authorised dataset and permission are in place, it can be added behind `data/common-worship.js` without changing the Office or interface architecture.

## Existing experience retained

- Morning and Evening Prayer with principal fixed 1662 text.
- Overview, Continuous and Focus modes.
- Original 30-day Psalter and proper Psalms.
- Calendar-driven 1662 Collect of the Day.
- Light and night modes.
- Dyslexia-friendly text option.
- Optional Scriptural marginalia.
- Add-to-Home-Screen PWA prompt and offline cache.
- Direct annual readings view in the 3dm.
- About Pray1662 explanations and physical-Bible philosophy.

The annual readings view follows the currently selected reading plan. M’Cheyne coverage is calculated from the imported plan and reaches all 1,189 chapters of the 66-book Protestant canon over the year.

## Project structure

- `data/reading-plans.js` — registry and common reading-plan contract.
- `data/mcheyne.js` — complete 365-day M’Cheyne appointments.
- `data/common-worship.js` — guarded Common Worship adapter awaiting the complete authorised dataset.
- `data/lectionary.js` / `data/ordinary-lessons.js` — original 1662 lesson engine.
- `src/office.js` — builds the Office independently of reading-plan choice.
- `src/year-calendar.js` — creates the annual view from the same reading engine.
- `src/year-coverage.js` — chapter-coverage calculator.
- `tests/reading-plans.test.js` — reading-plan regression and integrity tests.

## Testing

Run:

```bash
npm test
```

V0.8 includes regression tests for all pre-existing liturgical behaviour plus M’Cheyne data integrity, leap-day behaviour, annual output, chapter coverage, plan isolation, and the Common Worship safety guard.

A separate development sweep has generated Morning and Evening Prayer for every date from 2024–2035 under both active plans to catch unresolved Office, Psalter or Collect states.

## Deployment

No build step is required. Upload the contents of this directory to the existing GitHub repository. GitHub Pages serves the files directly.

For the first visit after deployment, use a cache-busting query such as:

`https://pray1662.github.io/Pray1662/?v=080`

## Rights / beta status

Pray1662 remains a development beta. See `SOURCES.md` for source and rights notes. Substantial BCP text, Common Worship data and the proposed contemporary-language text each have separate permissions considerations that should be resolved before a formal V1.0 public release.
