import { getPsalms } from '../data/psalter.js';
import { getLessons, getProperPsalms } from '../data/lectionary.js';
import { morningItems, eveningItems } from '../data/liturgy.js';
import { getCollectsForDate } from '../data/collects.js';

export function buildOffice(date, office) {
  const psalms = getProperPsalms(date, office) ?? getPsalms(date, office);
  const lessons = getLessons(date, office);
  const collects = getCollectsForDate(date, office);
  const base = office === 'morning' ? morningItems(psalms, lessons) : eveningItems(psalms, lessons);
  const items = base.map(item => item.kind === 'collect' ? { ...item, collects } : item);
  return { office, psalms, lessons, collects, items };
}
