import test from 'node:test';
import assert from 'node:assert/strict';
import { getYearLectionary, lessonSummary } from '../src/year-calendar.js';

test('ordinary year has 365 lectionary rows', () => {
  assert.equal(getYearLectionary(2025).length, 365);
});

test('leap year has 366 lectionary rows', () => {
  assert.equal(getYearLectionary(2024).length, 366);
});

test('annual rows use the same lesson engine as the daily office', () => {
  const christmas = getYearLectionary(2026).find(row => row.date.getMonth() === 11 && row.date.getDate() === 25);
  assert.equal(lessonSummary(christmas.morning), 'Isaiah 9:1-7 · Luke 2:1-14');
  assert.equal(lessonSummary(christmas.evening), 'Isaiah 7:10-16 · Titus 3:4-8');
});
