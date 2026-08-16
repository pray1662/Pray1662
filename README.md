# Pray 1662 — V0.4

A static Progressive Web App for Morning and Evening Prayer according to the original 1662 Book of Common Prayer pattern. Scripture remains **references only**, so the app is intentionally designed to be used alongside a physical Bible.

## What V0.4 adds

- **Day mode:** `#EFEAE2` background with `#1F201E` text.
- **Night mode:** `#2F4654` background with `#EFEAE2` text.
- A **three-dots settings menu** with Day/Night appearance controls.
- A visible **1662 / Contemporary language** setting. 1662 is active; Contemporary is intentionally disabled until the contemporary text is added. The CSS already contains a contemporary sans-serif typography foundation.
- **Previous / next day arrows beside the date at the top**, plus a tappable date picker.
- A calendar-driven **Collect of the Day** displayed in the office rather than a placeholder.
- Ordinary weekdays retain the preceding Sunday's collect.
- At **Saturday Evening Prayer**, the coming Sunday's collect is anticipated in accordance with the BCP rubric for the Evening Service next before.
- The **First Sunday in Advent collect** is repeated during Advent through Christmas Eve.
- The **Ash Wednesday collect** is carried through Lent as an additional collect.
- Major proper collects currently supported directly: Nativity, Epiphany, Ash Wednesday, Easter Day, Ascension Day, Whitsunday and Trinity Sunday.

## Still intentionally incomplete

V0.4 is an incremental development build. The full fixed Holy-Day/Saints' collect dataset and detailed occurrence/precedence rules are not yet complete. On those dates the app may currently fall back to the Sunday collect. Those should be completed and verified before calling the Collect engine final.

The future Contemporary-language setting is a UI foundation only; no contemporary-language Prayer Book text has yet been included.

## Existing features retained

- Original 1662 civil-calendar lesson references, including leap day.
- Sunday and Holy-Day lesson overrides.
- Traditional 30-day Psalter and proper Psalms.
- Morning and Evening Prayer fixed liturgical text.
- Overview, Continuous and Focus modes.
- Tap-to-expand sections in Overview.
- Morning canticle choice.
- Swipe and arrow-key navigation in Focus mode.
- Static GitHub Pages-compatible deployment with no build process.
- Offline PWA service worker.

## Tests

Run:

```bash
npm test
```

V0.4 includes regression tests for calendar dates, lectionary appointments, Psalter appointments, fixed Office content, Sunday collect carry-forward, Saturday-evening anticipation, Advent repetition and Christmas proper collect handling.

## Publication / rights note

This remains a development prototype. Substantial 1662 BCP text has a Crown-rights position in the United Kingdom; permission for public republication should be confirmed with Cambridge University Press as Crown Patentee before treating a public full-text release as cleared.

See `SOURCES.md` for source notes.
