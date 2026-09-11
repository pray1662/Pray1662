import test from 'node:test';
import assert from 'node:assert/strict';
import { fixed } from '../data/liturgy.js';
import { contemporaryFixed } from '../data/contemporary-liturgy.js';

test('contemporary fixed layer only overrides existing Prayer Book blocks', () => {
  for (const id of Object.keys(contemporaryFixed)) assert.ok(fixed[id], `Unknown fixed block: ${id}`);
});

test('contemporary confession uses supplied AEPB wording', () => {
  const text = contemporaryFixed.confession.content.map(x => x.text).join(' ');
  assert.match(text, /devices and desires of our own hearts/);
  assert.match(text, /pitiful sinners/);
  assert.match(text, /to the praise of your holy name\. Amen\./);
});

test('contemporary forgiveness declaration uses supplied AEPB wording', () => {
  const text = contemporaryFixed.absolution.content.map(x => x.text).join(' ');
  assert.match(text, /does not desire the death of sinners/);
  assert.match(text, /commanded his ministers to assure those who truly repent/);
  assert.match(text, /come to his eternal joy/);
});

test('contemporary Morning and Evening Prayer responses are source based', () => {
  assert.equal(contemporaryFixed.preces.content[0].text, 'Open our lips, O Lord:');
  assert.equal(contemporaryFixed.preces.content[1].text, 'And we shall declare your praise.');
  assert.equal(contemporaryFixed.suffrages.content.at(-1).text, 'and revive us by your Holy Spirit.');
});

test('contemporary daily prayers preserve supplied AEPB wording', () => {
  assert.match(contemporaryFixed.graceMorning.content[0].text, /bringing us safely to the beginning of this day/);
  assert.match(contemporaryFixed.peaceMorning.content[0].text, /whom to know is eternal life and to serve is perfect freedom/);
  assert.match(contemporaryFixed.peaceEvening.content[0].text, /all good purposes, and all just works/);
  assert.match(contemporaryFixed.perilsEvening.content[0].text, /all peril and danger this night/);
});

test('current sovereign is substituted into the supplied monarch form', () => {
  assert.match(contemporaryFixed.king.content[0].text, /King Charles/);
});

test('canticles and collects are not synthetically modernised', () => {
  assert.equal(contemporaryFixed.venite, undefined);
  assert.match(fixed.venite.content[0].text, /O come, let us sing unto the Lord/);
});
