# Sources and verification notes — V0.4

## 1662 Collects and calendar rules

The Collect texts and rubrics in this development build were checked against a facsimile/text extraction of the 1662 Book of Common Prayer, including the section *The Collects, Epistles, and Gospels, to be used throughout the Year*.

The source rubric states that the Collect appointed for every Sunday, or for a Holy Day with a Vigil or Eve, is said at the Evening Service next before. V0.4 implements this anticipation for Saturday Evening Prayer before Sundays. The First Advent Collect also has its own rubric directing that it be repeated daily with the other Collects in Advent until Christmas Eve; V0.4 implements that repetition.

The weekday use of the preceding Sunday's collect is implemented as the app's ordinary Daily Office rule, as requested for this project.

V0.4 does **not yet claim full Holy-Day collect/precedence coverage**. Major festival propers are included, but the fixed Saints' Day collect layer needs a further verified data pass.

## Liturgical text

The fixed Morning and Evening Prayer material follows the 1662 Book of Common Prayer. The Church of England publishes the BCP services online and identifies its displayed text as reproduced by permission of Cambridge University Press as Crown Patentee.

Reference pages:
- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer/order-morning-prayer
- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer/order-evening-prayer
- https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer

## Scripture

The app intentionally contains Scripture references only. It does not reproduce Bible text and is designed to be used alongside a physical Bible.

## Lectionary and Psalter

The original 1662 lesson table, Sunday/Holy-Day lesson overrides, proper Psalms and 30-day Psalter logic are retained from V0.2/V0.3 and remain covered by automated regression tests.

## Rights note

The Book of Common Prayer has an unusual Crown-rights position in the United Kingdom. Pray1662 remains a development prototype. Permission for unrestricted public republication of substantial BCP text should be confirmed with Cambridge University Press as Crown Patentee.
