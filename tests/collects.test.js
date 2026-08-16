import test from 'node:test';
import assert from 'node:assert/strict';
import { getCollectsForDate } from '../data/collects.js';

test('weekday retains the preceding Sunday collect', () => {
  const sunday = getCollectsForDate(new Date(2026, 7, 16), 'morning');
  const monday = getCollectsForDate(new Date(2026, 7, 17), 'morning');
  assert.equal(sunday[0].key, 'after-trinity-11');
  assert.equal(monday[0].key, sunday[0].key);
});

test('Saturday Evening Prayer anticipates the coming Sunday collect', () => {
  const saturdayMorning = getCollectsForDate(new Date(2026, 7, 22), 'morning');
  const saturdayEvening = getCollectsForDate(new Date(2026, 7, 22), 'evening');
  assert.equal(saturdayMorning[0].key, 'after-trinity-11');
  assert.equal(saturdayEvening[0].key, 'after-trinity-12');
});

test('First Advent collect is repeated on weekdays in Advent', () => {
  const collects = getCollectsForDate(new Date(2026, 11, 1), 'morning');
  assert.ok(collects.some(c => c.key === 'advent-1'));
});

test('Christmas Day uses the Nativity collect', () => {
  const collects = getCollectsForDate(new Date(2026, 11, 25), 'morning');
  assert.equal(collects[0].key, 'nativity');
});

test('all encoded collect texts end with Amen', async () => {
  const { collects } = await import('../data/collects.js');
  for (const [key, collect] of Object.entries(collects)) {
    assert.match(collect.text, /Amen\.$/, `${key} should end with Amen.`);
  }
});


test('fixed Holy Days use their proper collect', () => {
  assert.equal(getCollectsForDate(new Date(2026, 10, 30), 'morning')[0].key, 'st-andrew');
  assert.equal(getCollectsForDate(new Date(2026, 10, 1), 'morning')[0].key, 'all-saints');
  assert.equal(getCollectsForDate(new Date(2026, 5, 24), 'morning')[0].key, 'st-john-baptist');
});

test('Easter and Whitsun weekdays use their proper collects', () => {
  assert.equal(getCollectsForDate(new Date(2027, 2, 29), 'morning')[0].key, 'easter-monday');
  assert.equal(getCollectsForDate(new Date(2027, 4, 17), 'morning')[0].key, 'whit-monday');
});

test('Good Friday uses its proper collect', () => {
  assert.equal(getCollectsForDate(new Date(2027, 2, 26), 'morning')[0].key, 'good-friday');
});
