import test from 'node:test';
import assert from 'node:assert/strict';
import { getMarginalia } from '../data/marginalia.js';

test('Venite marginalia identifies Psalm 95', () => {
  assert.deepEqual(getMarginalia('venite'), ['Psalm 95:1–11']);
});

test('Magnificat and Nunc dimittis retain their Gospel sources', () => {
  assert.ok(getMarginalia('magnificat').includes('Luke 1:46–55'));
  assert.ok(getMarginalia('nuncDimittis').includes('Luke 2:29–32'));
});
