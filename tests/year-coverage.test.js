import test from 'node:test';
import assert from 'node:assert/strict';
import { chaptersFromReference, getYearCoverage } from '../src/year-coverage.js';

test('cross-chapter lesson references count both chapters', () => {
  assert.deepEqual(chaptersFromReference('Acts 6:8–7:29'), ['Acts 6','Acts 7']);
});

test('2026 coverage is calculated against the 1,189 chapter canon', () => {
  const c = getYearCoverage(2026);
  assert.equal(c.totalCanonicalChapters, 1189);
  assert.equal(c.otTotal, 929);
  assert.equal(c.ntTotal, 260);
  assert.ok(c.percent >= 60 && c.percent <= 70);
  assert.ok(c.ntPercent >= 90);
  assert.equal(c.includesApocrypha, true);
});
