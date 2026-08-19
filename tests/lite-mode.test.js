import test from 'node:test';
import assert from 'node:assert/strict';
import { buildOffice, getLiteVerses } from '../src/office.js';

test('Lite Office uses the shortened devotional sequence', () => {
  const office = buildOffice(new Date(2026, 7, 19), 'morning', '1662', true);
  const sequence = office.items.map(item => item.kind === 'fixed' ? item.id : item.kind);

  assert.equal(office.lite, true);
  assert.deepEqual(sequence, [
    'liteOpeningSentence',
    'confession',
    'liteComfortableWord',
    'psalms',
    'lesson',
    'lesson',
    'lordsPrayer',
    'collect',
    'grace'
  ]);
});

test('Lite Office keeps the appointed psalms, readings and collect engine', () => {
  const full = buildOffice(new Date(2026, 7, 19), 'evening', '1662', false);
  const lite = buildOffice(new Date(2026, 7, 19), 'evening', '1662', true);

  assert.deepEqual(lite.psalms, full.psalms);
  assert.deepEqual(lite.lessons, full.lessons);
  assert.deepEqual(lite.collects, full.collects);
});

test('Lite Scripture pairings cycle through 44 unique days before repeating', () => {
  const start = new Date(2026, 0, 1);
  const pair = date => {
    const verses = getLiteVerses(date);
    return `${verses.opening.reference}|${verses.comfortable.reference}`;
  };

  const pairs = Array.from({ length:44 }, (_, offset) => {
    const date = new Date(start);
    date.setDate(start.getDate() + offset);
    return pair(date);
  });

  assert.equal(new Set(pairs).size, 44);

  const repeatDate = new Date(start);
  repeatDate.setDate(start.getDate() + 44);
  assert.equal(pair(repeatDate), pairs[0]);
});
