import { getPsalms } from '../data/psalter.js';
import { getProperPsalms } from '../data/lectionary.js';
import { getReadings } from '../data/reading-plans.js';
import { morningItems, eveningItems } from '../data/liturgy.js';
import { getCollectsForDate } from '../data/collects.js';

export function buildOffice(date, office, readingPlanId = '1662') {
  const psalms = getProperPsalms(date, office) ?? getPsalms(date, office);
  const lessons = getReadings(date, office, readingPlanId);
  const collects = getCollectsForDate(date, office);
  const base = office === 'morning' ? morningItems(psalms, lessons) : eveningItems(psalms, lessons);
  const items = base.map(item => {
    if (item.kind === 'collect') return { ...item, collects };
    if (item.kind === 'lesson' && lessons.note) return { ...item, note: lessons.note };
    return item;
  });
  return { office, psalms, lessons, collects, readingPlanId, items };
}
