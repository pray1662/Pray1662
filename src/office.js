import { getPsalms } from '../data/psalter.js';
import { getLessons, getProperPsalms } from '../data/lectionary.js';

const commonBeginning = [
  'Opening sentence','Exhortation','General Confession','Absolution','The Lord’s Prayer','Preces'
];

export function buildOffice(date, office) {
  const psalms = getProperPsalms(date, office) ?? getPsalms(date, office);
  const lessons = getLessons(date, office);
  const morning = office === 'morning';
  const sections = [
    ...commonBeginning,
    morning ? 'Venite' : null,
    `Psalter — ${psalms.join(', ')}`,
    `First Lesson — ${lessons.first ?? 'not appointed'}`,
    morning ? 'Te Deum or Benedicite' : 'Magnificat',
    `Second Lesson — ${lessons.second ?? 'not appointed'}`,
    morning ? 'Benedictus or Jubilate' : 'Nunc Dimittis',
    'Apostles’ Creed','The Lord’s Prayer','Suffrages','Collect for the Day',
    'Collect for Peace', morning ? 'Collect for Grace' : 'Collect for Aid against all Perils',
    'Prayers for the Sovereign and Royal Family','Prayer for the Clergy and People',
    'Prayer of St Chrysostom','The Grace'
  ].filter(Boolean);
  return { office, psalms, lessons, sections };
}
