import test from 'node:test';
import assert from 'node:assert/strict';
import { easterDate, moveableDays } from '../src/calendar.js';
import { getPsalms, psalterDay } from '../data/psalter.js';

test('Easter 2026 is 5 April', () => {
  const d = easterDate(2026);
  assert.equal(d.getFullYear(), 2026);
  assert.equal(d.getMonth(), 3);
  assert.equal(d.getDate(), 5);
});

test('Ascension 2026 is 14 May', () => {
  const d = moveableDays(2026).ascensionDay;
  assert.equal(d.getMonth(), 4);
  assert.equal(d.getDate(), 14);
});

test('31st uses day 30 psalter slot', () => {
  assert.equal(psalterDay(new Date(2026, 0, 31)), 30);
});

test('15th morning appoints Psalms 75–77', () => {
  assert.deepEqual(getPsalms(new Date(2026, 7, 15), 'morning'), ['Psalms 75–77']);
});
