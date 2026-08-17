# Sources and verification notes — Pray1662 V0.8

## 1662 Book of Common Prayer

Fixed Morning and Evening Prayer material follows the 1662 Book of Common Prayer as published by the Church of England:

- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer/order-morning-prayer
- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer/order-evening-prayer
- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer

The original lesson table, Sunday/Holy-Day proper lessons, proper Psalms and 30-day Psalter are retained from earlier Pray1662 builds and remain covered by regression tests.

**Rights note:** substantial BCP reproduction in the United Kingdom has Crown-rights / King’s Printer considerations. Pray1662 remains a development beta while the relevant permission is clarified.

## Scripture

Pray1662 stores Scripture **references only**. It does not reproduce Bible text and is intentionally designed to be used with a physical Bible.

## M’Cheyne Bible Reading Plan

The V0.8 dataset was transcribed against the complete Robert Murray M’Cheyne calendar displayed at:

- https://www.mcheyneplan.com/calendar.html

The plan’s four daily readings are presented there as two **Family** readings and two **Secret** readings. Pray1662 maps Family to Morning Prayer and Secret/Personal to Evening Prayer. Representative dates and the complete 365-key dataset are covered by automated tests. The plan is calendar-based and has no original 29 February row, so V0.8 treats leap day as a catch-up day rather than shifting later appointments.

## Common Worship Daily Prayer lectionary

Church of England material confirms that Common Worship Daily Prayer uses an authorised Weekday Lectionary for Morning and Evening Prayer, with two reading tracks and a Year 1 / Year 2 weekday cycle interacting with the Church-year Sunday cycle:

- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/common-worship/daily-prayer/general-introduction
- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/common-worship/churchs-year/lectionary
- https://www.churchofengland.org/prayer-and-worship/common-worship-publications

Our research audit found canonical alternatives printed alongside the Apocryphal appointments examined in the Morning/Evening Prayer weekday table. Nevertheless, **V0.8 does not ship a partial or reconstructed Common Worship dataset**. `data/common-worship.js` intentionally throws if called and the UI option is disabled until a complete authoritative import has been verified.

Common Worship Second/Third Service and Weekday Lectionary material is copyright the Archbishops’ Council. Permission should be resolved before public app distribution of that full dataset.

## Scriptural marginalia

Optional marginal references use a restrained section-level selection derived from *The Book of Common Prayer: with marginal references to texts in the Holy Scriptures* (SPCK, 1839), as documented by The Scriptural BCP:

- https://www.scripturalbcp.com/bibliography
- https://www.scripturalbcp.com/prayer_books/1662_cofe/morning_prayer

The app stores references only.

## Annual coverage calculation

Coverage is calculated locally from whichever active reading plan is selected. The denominator is the 1,189 chapters of the 66-book Protestant canon. A chapter counts if any part of that chapter is appointed during the year. Apocryphal references in the original 1662 lectionary are tracked separately and do not enter that denominator.
