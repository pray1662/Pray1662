import test from 'node:test';
import assert from 'node:assert/strict';
import { fixed } from '../data/liturgy.js';
import { collects } from '../data/collects.js';
import { contemporaryFixed, moderniseCollectText } from '../data/contemporary-liturgy.js';

test('contemporary fixed layer only overrides existing Prayer Book blocks', () => {
  for (const id of Object.keys(contemporaryFixed)) assert.ok(fixed[id], `Unknown fixed block: ${id}`);
});

test('core contemporary prayers use modern pronouns and current sovereign', () => {
  assert.match(contemporaryFixed.confession.content[0].text, /your ways/);
  assert.doesNotMatch(contemporaryFixed.confession.content[0].text, /\bthy\b|\bthee\b/);
  assert.match(contemporaryFixed.absolution.content[0].text, /does not desire the death of sinners/);
  assert.match(contemporaryFixed.king.content[0].text, /King Charles/);
});

test('collect moderniser removes principal archaic forms without altering the source object', () => {
  const source = collects['advent-1'].text;
  const modern = moderniseCollectText(source);
  assert.match(modern, /your Son Jesus Christ/);
  assert.match(modern, /living and the dead/);
  assert.match(modern, /Holy Spirit/);
  assert.doesNotMatch(modern, /\bthy\b|\bthee\b|\bliveth\b|\breigneth\b/);
  assert.equal(collects['advent-1'].text, source);
});

test('canticles remain the original 1662 text in the contemporary beta', () => {
  assert.equal(contemporaryFixed.venite, undefined);
  assert.match(fixed.venite.content[0].text, /O come, let us sing unto the Lord/);
});
