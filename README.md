# Pray 1662 — V0.3

A static Progressive Web App for the original 1662 Daily Office pattern. V0.3 adds the principal fixed liturgical text of Morning and Evening Prayer, expandable Overview and Continuous modes, and a step-by-step Focus mode. Scripture remains references-only so the app is intentionally paired with a physical Bible.

**Prototype note:** the Collect of the Day remains a visible placeholder pending the verified Collect/calendar dataset. Substantial BCP text should not be treated as cleared for unrestricted public republication until the relevant Crown Patentee permission has been resolved.

A small installable web app for Morning and Evening Prayer according to the original 1662 Book of Common Prayer lectionary pattern.

## Product decision: Bible beside the app

V0.2 deliberately contains **Scripture references only**. It does not insert the text of the lessons. The intended use is to pray with the app and read the appointed lessons from a physical Bible.

This has three advantages: it keeps the prayer interface uncluttered, avoids tying the app to one Bible translation, and makes the app feel like a digital companion to the Prayer Book and Bible rather than a replacement for them.

## What V0.2 does

- Uses the device date and defaults to Morning or Evening Prayer by time of day.
- Includes all 366 civil-calendar entries in the original 1662 Daily Office lectionary, including 29 February.
- Applies the original Sunday Proper Lessons across Advent, Christmas, Epiphany, Lent, Easter and Trinity seasons.
- Applies Proper Lessons for the fixed and moveable Holy Days listed in the 1662 table.
- Implements the traditional 30-day Psalter cycle and the 31st-day rule.
- Applies Proper Psalms for Christmas Day, Ash Wednesday, Good Friday, Easter Day, Ascension Day and Whitsunday.
- Calculates Easter and dependent moveable observances.
- Displays references only — never the text of the Bible readings.
- Is structured as a static PWA: no accounts, database or server are required.
- Includes automated regression tests for representative ordinary days, Sundays, Holy Days, Easter, proper Psalms and leap day.

## Accuracy / source notes

The calendar data was generated from the tables reproduced in the IVP *Book of Common Prayer: International Edition* free 1662 Daily Office lectionary resource, and spot-checked against the online transcription of the original 1662 Calendar with the Table of Lessons. The source tables distinguish the ordinary civil-calendar cycle from Sunday and Holy-Day Proper Lessons; the app keeps those as separate data layers.

V0.2 deliberately flags one remaining historical edge case in the interface: when a fixed Holy Day and a Sunday proper coincide, it currently gives the Holy-Day table priority and marks the collision for later verification against the historical rules of occurrence/precedence.

See `SOURCES.md`.

## Project structure

- `data/ordinary-lessons.js` — 366 calendar entries, references only.
- `data/lectionary.js` — Sunday/Holy-Day overrides and Proper Psalms.
- `data/psalter.js` — 30-day Psalter.
- `src/calendar.js` — Easter, Advent and Sunday/Holy-Day identification.
- `src/office.js` — resolves the appointed material into Morning/Evening Prayer.
- `src/app.js` — reader interface.
- `tests/` — automated liturgical/calendar regression tests.

## Run locally

No build step is required. From this folder, start any local static web server. For example:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

Run automated tests with Node.js:

```bash
npm test
```

## Publishing

The simplest deployment is now a static host such as Cloudflare Pages or Netlify:

1. Put this folder in a GitHub repository.
2. Connect that repository to the host.
3. Use no build command.
4. Publish the repository root as the site directory.
5. Attach a custom domain.

## Next milestone — V0.3

The next useful build is the reader experience rather than more lectionary data:

- Focus mode: one part of the office at a time.
- Tap, swipe and keyboard navigation.
- Clear visual prompt when it is time to open the Bible, showing only the reference.
- Continuous/focus mode toggle.
- Appearance preferences.
- Better app icons and installation polish.
- Further historical verification of Sunday/Holy-Day collision precedence.


## V0.3 GitHub Pages fix
Asset, manifest, service-worker and icon paths are now relative so the app works when hosted under a GitHub Pages project path such as `/Pray1662/`.


## V0.3 browser compatibility fix

GitHub Pages serves this project directly as static files. CSS is therefore linked from `index.html` rather than imported from JavaScript. Native browser ES modules do not support `import './styles.css'` without a bundler such as Vite. This release removes the unused Vite build dependency and has been tested both at the domain root and from a `/Pray1662/` subpath matching GitHub Pages project hosting.


## V0.4.1 stability patch
- Replaced per-render button listeners with one delegated interaction handler.
- Removed global smooth scrolling from Focus navigation.
- Removed menu backdrop blur to reduce compositing load on mobile Safari.
- Static assets now refresh in the background when online.


## v0.5 changes

- Complete fixed red-letter Holy Day collect layer for the calendar keys used by the app.
- Good Friday, Easter Monday/Tuesday, and Whitsun Monday/Tuesday collect handling.
- Three-dot menu closes when tapping outside it.
- Psalms now say **Read from your Bible**.
- Dyslexia-friendly text option: OpenDyslexic (loaded from the jsDelivr CDN), approximately +3pt base size, and increased line spacing. The preference is remembered locally.
- Mobile Add-to-Home-Screen prompt. iOS explains Safari Share → Add to Home Screen; supported Android browsers use the native install prompt.
- Updated cache version for deployment.
