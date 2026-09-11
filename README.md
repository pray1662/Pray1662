# Pray1662 — V0.9

Pray1662 is a static Progressive Web App for Morning and Evening Prayer in the 1662 Book of Common Prayer tradition. It is designed to be used alongside a physical Bible: Scripture is shown as references, not reproduced in full.

## V0.9: contemporary-language beta

V0.9 adds a persistent **1662 / Contemporary** language switch in Settings.

The contemporary beta currently provides modern-English forms of the principal fixed Office prayers and a modern-language rendering layer for the Collect of the Day. The language choice is independent of the lectionary, 30-day Psalter, date logic, Focus/Continuous modes and Lite mode.

The published 1662 text remains untouched and can be restored instantly by choosing **1662**. Lite mode's rotating opening sentences and Comfortable Words retain their deliberately specified 1662 wording in either language mode.

The contemporary-language work is being developed with permission from Church Society for the use of material from *An English Prayer Book* (1994). The complete published AEPB canticle dataset has not yet been imported into the repository, so V0.9 deliberately retains the existing 1662 wording for Venite, Te Deum, Benedicite, Benedictus, Magnificat and Nunc dimittis. The interface labels Contemporary as a beta for that reason.

## Interchangeable reading plans

The reading-plan engine is separate from the language layer. The Office asks that engine for two Bible references; changing reading plan therefore does **not** change the Office language, the 30-day Psalter, the Collect of the Day, appearance, Focus/Continuous modes, or Scriptural marginalia.

### Active options

- **1662 Lectionary** — the original one-year BCP Table of Lessons, including its appointed Apocryphal readings.
- **M’Cheyne Bible Reading Plan** — the complete 365-day plan. The two Family readings are used at Morning Prayer and the two Secret/Personal readings at Evening Prayer.

On 29 February, M’Cheyne shows a catch-up day rather than shifting the historic calendar: 1 March remains the 1 March appointment.

### Common Worship Daily Prayer

The Common Worship adapter and UI slot are present, but **the option remains deliberately disabled**. Research confirmed that the Common Worship Weekday Lectionary for Morning and Evening Prayer systematically prints canonical alternatives alongside the Apocryphal options we audited. However, the app does not yet contain the complete authorised Table 1 / Table 2 dataset, and the relevant Common Worship material is copyright the Archbishops’ Council. Pray1662 will not invent missing readings or silently fall back to a different lectionary.

When the complete authorised dataset and permission are in place, it can be added behind `data/common-worship.js` without changing the Office or interface architecture.

## Existing experience retained

- Morning and Evening Prayer in the 1662 Prayer Book pattern.
- 1662 and Contemporary language choices.
- Overview, Continuous and Focus modes.
- Lite mode with deterministic daily Scripture rotation.
- Original 30-day Psalter and proper Psalms.
- Calendar-driven Collect of the Day.
- Light and night modes.
- Dyslexia-friendly text option.
- Optional Scriptural marginalia.
- Add-to-Home-Screen PWA prompt and offline cache.
- Direct annual readings view.
- About Pray1662 explanations and physical-Bible philosophy.

The annual readings view follows the currently selected reading plan. M’Cheyne coverage is calculated from the imported plan and reaches all 1,189 chapters of the 66-book Protestant canon over the year.

## Project structure

- `data/liturgy.js` — original 1662 fixed Office text and Office sequence.
- `data/contemporary-liturgy.js` — contemporary fixed-prayer layer and contemporary collect rendering.
- `src/language-ui.js` — persistent language selection and reversible text-layer switching.
- `data/reading-plans.js` — registry and common reading-plan contract.
- `data/mcheyne.js` — complete 365-day M’Cheyne appointments.
- `data/common-worship.js` — guarded Common Worship adapter awaiting the complete authorised dataset.
- `data/lectionary.js` / `data/ordinary-lessons.js` — original 1662 lesson engine.
- `src/office.js` — builds the Office independently of reading-plan choice.
- `src/year-calendar.js` — creates the annual view from the same reading engine.
- `src/year-coverage.js` — chapter-coverage calculator.
- `tests/contemporary-language.test.js` — contemporary-layer integrity tests.
- `tests/reading-plans.test.js` — reading-plan regression and integrity tests.

## Testing

Run:

```bash
npm test
```

GitHub Actions runs the complete Node test suite on every push to `main` and on pull requests. V0.9 adds tests for the contemporary fixed-prayer layer, collect modernisation, restoration boundaries and the deliberate retention of 1662 canticles.

The broader regression suite continues to cover liturgical behaviour, M’Cheyne data integrity, leap-day behaviour, annual output, chapter coverage, plan isolation, Lite-mode rotation and the Common Worship safety guard.

## Deployment

No build step is required. GitHub Pages serves the repository files directly. V0.9 uses a new service-worker cache so installed PWAs receive the language-layer assets rather than retaining the V0.8 cache.

For a first visit after deployment, a cache-busting query can be used if needed:

`https://pray1662.github.io/Pray1662/?v=090`

## Rights / beta status

Pray1662 remains a development beta. See `SOURCES.md` for source and rights notes. Substantial BCP text and Common Worship data retain separate permissions considerations. Church Society has granted permission for Pray1662 to use contemporary-language material from *An English Prayer Book* (1994), with appropriate acknowledgement and a link to Church Society.
