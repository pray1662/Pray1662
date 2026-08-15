import test from 'node:test';
import assert from 'node:assert/strict';
import { getLessons, getProperPsalms } from '../data/lectionary.js';
import { sundayProperKey, holyDayKey } from '../src/calendar.js';

test('15 August 2026 uses the original civil-calendar lessons', () => {
  const d = new Date(2026,7,15);
  assert.deepEqual(getLessons(d,'morning'), {
    first:'Ezekiel 2', second:'Acts 13', source:'calendar', proper:null, collision:false
  });
  assert.deepEqual(getLessons(d,'evening'), {
    first:'Ezekiel 3', second:'James 5', source:'calendar', proper:null, collision:false
  });
});

test('Christmas Day uses Holy-Day proper lessons and proper psalms', () => {
  const d = new Date(2026,11,25);
  assert.equal(holyDayKey(d),'nativity');
  assert.equal(getLessons(d,'morning').first,'Isaiah 9:1-7');
  assert.equal(getLessons(d,'morning').second,'Luke 2:1-14');
  assert.deepEqual(getProperPsalms(d,'morning'),['Psalms 19, 45, 85']);
});

test('Palm Sunday has the sixth Sunday in Lent proper lessons', () => {
  const d = new Date(2026,2,29);
  assert.equal(sundayProperKey(d),'lent-6');
  assert.equal(getLessons(d,'morning').first,'Exodus 9');
  assert.equal(getLessons(d,'morning').second,'Matthew 26');
});

test('Easter Day uses the Easter proper', () => {
  const d = new Date(2026,3,5);
  assert.equal(holyDayKey(d),'easter-day');
  assert.equal(getLessons(d,'evening').second,'Acts 2:22-47');
  assert.deepEqual(getProperPsalms(d,'evening'),['Psalms 113, 114, 118']);
});

test('Ash Wednesday has proper psalms but ordinary lessons', () => {
  const d = new Date(2026,1,18);
  assert.equal(holyDayKey(d),'ash-wednesday');
  assert.deepEqual(getProperPsalms(d,'morning'),['Psalms 6, 32, 38']);
  assert.equal(getLessons(d,'morning').source,'calendar');
});

test('Leap day has its explicit 1662 calendar references', () => {
  const d = new Date(2028,1,29);
  assert.equal(getLessons(d,'morning').first,'Deuteronomy 13');
  assert.equal(getLessons(d,'morning').second,'Matthew 7');
  assert.equal(getLessons(d,'evening').first,'Deuteronomy 14');
  assert.equal(getLessons(d,'evening').second,'Romans 12');
});
