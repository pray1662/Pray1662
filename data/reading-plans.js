import { getLessons as get1662Lessons } from './lectionary.js';
import { getMcheyneReadings } from './mcheyne.js';
import { COMMON_WORSHIP_AVAILABLE, getCommonWorshipReadings } from './common-worship.js';

export const DEFAULT_READING_PLAN = '1662';

export const readingPlans = Object.freeze({
  '1662': Object.freeze({
    id: '1662',
    name: '1662 Lectionary',
    shortName: '1662',
    type: 'lectionary',
    available: true,
    description: 'The original one-year Book of Common Prayer Table of Lessons, including its appointed readings from the Apocrypha.'
  }),
  'common-worship': Object.freeze({
    id: 'common-worship',
    name: 'Common Worship Daily Prayer',
    shortName: 'Common Worship',
    type: 'lectionary',
    available: COMMON_WORSHIP_AVAILABLE,
    description: 'The Church of England Daily Prayer lectionary, using the authorised canonical alternative wherever one is printed alongside an Apocryphal reading.'
  }),
  'mcheyne': Object.freeze({
    id: 'mcheyne',
    name: 'M’Cheyne Bible Reading Plan',
    shortName: 'M’Cheyne',
    type: 'reading-plan',
    available: true,
    description: 'Robert Murray M’Cheyne’s one-year Bible reading plan: the Family pair at Morning Prayer and the Secret/Personal pair at Evening Prayer.'
  })
});

export function getReadingPlan(id = DEFAULT_READING_PLAN) {
  return readingPlans[id] ?? readingPlans[DEFAULT_READING_PLAN];
}

export function normaliseReadingPlan(id) {
  const plan = getReadingPlan(id);
  return plan.available ? plan.id : DEFAULT_READING_PLAN;
}

export function getReadings(date, office, planId = DEFAULT_READING_PLAN) {
  const plan = getReadingPlan(planId);
  if (!plan.available) throw new Error(`${plan.name} is not available in this build.`);
  let readings;
  if (plan.id === '1662') readings = get1662Lessons(date, office);
  else if (plan.id === 'mcheyne') readings = getMcheyneReadings(date, office);
  else if (plan.id === 'common-worship') readings = getCommonWorshipReadings(date, office);
  else throw new Error(`Unknown reading plan: ${plan.id}`);
  return { ...readings, planId: plan.id, planName: plan.name };
}
