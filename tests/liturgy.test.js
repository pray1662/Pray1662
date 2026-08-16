import test from 'node:test';
import assert from 'node:assert/strict';
import { fixed } from '../data/liturgy.js';
import { buildOffice } from '../src/office.js';

test('Morning Prayer contains fixed confession and Venite text', () => {
  assert.match(fixed.confession.content[0].text, /Almighty and most merciful Father/);
  assert.match(fixed.venite.content[0].text, /O come, let us sing unto the Lord/);
});

test('Morning office inserts references and the canticle choice', () => {
  const office = buildOffice(new Date(2026, 7, 15), 'morning');
  const lesson = office.items.find(i => i.kind === 'lesson');
  const choice = office.items.find(i => i.kind === 'choice');
  assert.equal(lesson.value, 'Ezekiel 2');
  assert.deepEqual(choice.options, ['teDeum', 'benedicite']);
});

test('Evening office contains Magnificat and Nunc dimittis', () => {
  const office = buildOffice(new Date(2026, 7, 15), 'evening');
  const ids = office.items.filter(i => i.kind === 'fixed').map(i => i.id);
  assert.ok(ids.includes('magnificat'));
  assert.ok(ids.includes('nuncDimittis'));
});
