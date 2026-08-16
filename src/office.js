import { getPsalms } from '../data/psalter.js';
import { getLessons, getProperPsalms } from '../data/lectionary.js';
import { morningItems, eveningItems } from '../data/liturgy.js';

export function buildOffice(date, office) {
  const psalms = getProperPsalms(date, office) ?? getPsalms(date, office);
  const lessons = getLessons(date, office);
  const items = office === 'morning' ? morningItems(psalms, lessons) : eveningItems(psalms, lessons);
  return { office, psalms, lessons, items };
}
