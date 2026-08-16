import { getLessons } from '../data/lectionary.js';
import { liturgicalLabel } from './calendar.js';

function daysInYear(year) {
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 1);
  return Math.round((end - start) / 86400000);
}

export function getYearLectionary(year) {
  if (!Number.isInteger(year) || year < 1600 || year > 9999) throw new RangeError('Year must be an integer between 1600 and 9999');
  const rows = [];
  const count = daysInYear(year);
  for (let i = 0; i < count; i++) {
    const date = new Date(year, 0, i + 1);
    rows.push({
      date,
      label: liturgicalLabel(date),
      morning: getLessons(date, 'morning'),
      evening: getLessons(date, 'evening')
    });
  }
  return rows;
}

export function lessonSummary(lessons) {
  return [lessons?.first, lessons?.second].filter(Boolean).join(' · ');
}
