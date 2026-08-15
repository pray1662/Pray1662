import { ordinaryLessons } from './ordinary-lessons.js';
import { holyDayKey, monthDayKey, sundayProperKey } from '../src/calendar.js';

// Proper lessons transcribed from the original 1662 tables. Null means the ordinary calendar lesson remains in force.
export const sundayPropers = {
  'advent-1': {morning:{first:'Isaiah 1'},evening:{first:'Isaiah 2'}},
  'advent-2': {morning:{first:'Isaiah 5'},evening:{first:'Isaiah 24'}},
  'advent-3': {morning:{first:'Isaiah 25'},evening:{first:'Isaiah 26'}},
  'advent-4': {morning:{first:'Isaiah 30'},evening:{first:'Isaiah 32'}},
  'after-christmas-1': {morning:{first:'Isaiah 37'},evening:{first:'Isaiah 38'}},
  'after-christmas-2': {morning:{first:'Isaiah 41'},evening:{first:'Isaiah 43'}},
  'after-epiphany-1': {morning:{first:'Isaiah 44'},evening:{first:'Isaiah 46'}},
  'after-epiphany-2': {morning:{first:'Isaiah 51'},evening:{first:'Isaiah 53'}},
  'after-epiphany-3': {morning:{first:'Isaiah 55'},evening:{first:'Isaiah 56'}},
  'after-epiphany-4': {morning:{first:'Isaiah 57'},evening:{first:'Isaiah 58'}},
  'after-epiphany-5': {morning:{first:'Isaiah 59'},evening:{first:'Isaiah 64'}},
  'after-epiphany-6': {morning:{first:'Isaiah 65'},evening:{first:'Isaiah 66'}},
  'septuagesima': {morning:{first:'Genesis 1'},evening:{first:'Genesis 2'}},
  'sexagesima': {morning:{first:'Genesis 3'},evening:{first:'Genesis 6'}},
  'quinquagesima': {morning:{first:'Genesis 9:1-19'},evening:{first:'Genesis 12'}},
  'lent-1': {morning:{first:'Genesis 19:1-29'},evening:{first:'Genesis 22'}},
  'lent-2': {morning:{first:'Genesis 27'},evening:{first:'Genesis 34'}},
  'lent-3': {morning:{first:'Genesis 39'},evening:{first:'Genesis 42'}},
  'lent-4': {morning:{first:'Genesis 43'},evening:{first:'Genesis 45'}},
  'lent-5': {morning:{first:'Exodus 3'},evening:{first:'Exodus 5'}},
  'lent-6': {morning:{first:'Exodus 9',second:'Matthew 26'},evening:{first:'Exodus 10',second:'Hebrews 5:1-10'}},
  'easter-day': {morning:{first:'Exodus 12',second:'Romans 6'},evening:{first:'Exodus 14',second:'Acts 2:22-47'}},
  'after-easter-1': {morning:{first:'Numbers 16'},evening:{first:'Numbers 22'}},
  'after-easter-2': {morning:{first:'Numbers 23–24'},evening:{first:'Numbers 25'}},
  'after-easter-3': {morning:{first:'Deuteronomy 4'},evening:{first:'Deuteronomy 5'}},
  'after-easter-4': {morning:{first:'Deuteronomy 6'},evening:{first:'Deuteronomy 7'}},
  'after-easter-5': {morning:{first:'Deuteronomy 8'},evening:{first:'Deuteronomy 9'}},
  'after-ascension': {morning:{first:'Deuteronomy 12'},evening:{first:'Deuteronomy 13'}},
  'whitsunday': {morning:{first:'Deuteronomy 16:1-17',second:'Acts 10:34-48'},evening:{first:'Isaiah 11',second:'Acts 19:1-20'}},
  'trinity-sunday': {morning:{first:'Genesis 1',second:'Matthew 3'},evening:{first:'Genesis 18',second:'1 John 5'}},
  'after-trinity-1': {morning:{first:'Joshua 10'},evening:{first:'Joshua 23'}},
  'after-trinity-2': {morning:{first:'Judges 4'},evening:{first:'Judges 5'}},
  'after-trinity-3': {morning:{first:'1 Samuel 2'},evening:{first:'1 Samuel 3'}},
  'after-trinity-4': {morning:{first:'1 Samuel 12'},evening:{first:'1 Samuel 13'}},
  'after-trinity-5': {morning:{first:'1 Samuel 15'},evening:{first:'1 Samuel 17'}},
  'after-trinity-6': {morning:{first:'2 Samuel 12'},evening:{first:'2 Samuel 19'}},
  'after-trinity-7': {morning:{first:'2 Samuel 21'},evening:{first:'2 Samuel 24'}},
  'after-trinity-8': {morning:{first:'1 Kings 13'},evening:{first:'1 Kings 17'}},
  'after-trinity-9': {morning:{first:'1 Kings 18'},evening:{first:'1 Kings 19'}},
  'after-trinity-10': {morning:{first:'1 Kings 21'},evening:{first:'1 Kings 22'}},
  'after-trinity-11': {morning:{first:'2 Kings 5'},evening:{first:'2 Kings 9'}},
  'after-trinity-12': {morning:{first:'2 Kings 10'},evening:{first:'2 Kings 18'}},
  'after-trinity-13': {morning:{first:'2 Kings 19'},evening:{first:'2 Kings 23'}},
  'after-trinity-14': {morning:{first:'Jeremiah 5'},evening:{first:'Jeremiah 22'}},
  'after-trinity-15': {morning:{first:'Jeremiah 35'},evening:{first:'Jeremiah 36'}},
  'after-trinity-16': {morning:{first:'Ezekiel 2'},evening:{first:'Ezekiel 13'}},
  'after-trinity-17': {morning:{first:'Ezekiel 14'},evening:{first:'Ezekiel 18'}},
  'after-trinity-18': {morning:{first:'Ezekiel 20'},evening:{first:'Ezekiel 24'}},
  'after-trinity-19': {morning:{first:'Daniel 3'},evening:{first:'Daniel 6'}},
  'after-trinity-20': {morning:{first:'Joel 2'},evening:{first:'Micah 6'}},
  'after-trinity-21': {morning:{first:'Habakkuk 2'},evening:{first:'Proverbs 1'}},
  'after-trinity-22': {morning:{first:'Proverbs 2'},evening:{first:'Proverbs 3'}},
  'after-trinity-23': {morning:{first:'Proverbs 11'},evening:{first:'Proverbs 12'}},
  'after-trinity-24': {morning:{first:'Proverbs 13'},evening:{first:'Proverbs 14'}},
  'after-trinity-25': {morning:{first:'Proverbs 15'},evening:{first:'Proverbs 16'}},
  'after-trinity-26': {morning:{first:'Proverbs 17'},evening:{first:'Proverbs 19'}}
};

export const holyDayPropers = {
  'st-andrew':{morning:{first:'Proverbs 20'},evening:{first:'Proverbs 21'}},
  'st-thomas':{morning:{first:'Proverbs 23'},evening:{first:'Proverbs 24'}},
  'nativity':{morning:{first:'Isaiah 9:1-7',second:'Luke 2:1-14'},evening:{first:'Isaiah 7:10-16',second:'Titus 3:4-8'}},
  'st-stephen':{morning:{first:'Proverbs 28',second:'Acts 6:8–7:29'},evening:{first:'Ecclesiastes 4',second:'Acts 7:30-54'}},
  'st-john':{morning:{first:'Ecclesiastes 5',second:'Revelation 1'},evening:{first:'Ecclesiastes 6',second:'Revelation 22'}},
  'innocents':{morning:{first:'Jeremiah 31:1-17'},evening:{first:'Wisdom 1'}},
  'circumcision':{morning:{first:'Genesis 17',second:'Romans 2'},evening:{first:'Deuteronomy 10:12-22',second:'Colossians 2'}},
  'epiphany':{morning:{first:'Isaiah 60',second:'Luke 3:1-22'},evening:{first:'Isaiah 49',second:'John 2:1-11'}},
  'conversion-st-paul':{morning:{first:'Wisdom 5',second:'Acts 22:1-21'},evening:{first:'Wisdom 6',second:'Acts 26'}},
  'purification':{morning:{first:'Wisdom 9'},evening:{first:'Wisdom 12'}},
  'st-matthias':{morning:{first:'Wisdom 19'},evening:{first:'Ecclesiasticus 1'}},
  'annunciation':{morning:{first:'Ecclesiasticus 2'},evening:{first:'Ecclesiasticus 3'}},
  'wednesday-before-easter':{morning:{first:'Hosea 13',second:'John 11:45-57'},evening:{first:'Hosea 14'}},
  'thursday-before-easter':{morning:{first:'Daniel 9',second:'John 13'},evening:{first:'Jeremiah 31'}},
  'good-friday':{morning:{first:'Genesis 22:1-19',second:'John 18'},evening:{first:'Isaiah 53',second:'1 Peter 2'}},
  'easter-even':{morning:{first:'Zechariah 9',second:'Luke 23:50-56'},evening:{first:'Exodus 13',second:'Hebrews 4'}},
  'monday-in-easter-week':{morning:{first:'Exodus 16',second:'Matthew 28'},evening:{first:'Exodus 17',second:'Acts 3'}},
  'tuesday-in-easter-week':{morning:{first:'Exodus 20',second:'Luke 24:1-12'},evening:{first:'Exodus 32',second:'1 Corinthians 15'}},
  'st-mark':{morning:{first:'Ecclesiasticus 4'},evening:{first:'Ecclesiasticus 5'}},
  'st-philip-james':{morning:{first:'Ecclesiasticus 7',second:'John 1:43-51'},evening:{first:'Ecclesiasticus 9'}},
  'ascension-day':{morning:{first:'Deuteronomy 10',second:'Luke 24:44-53'},evening:{first:'2 Kings 2',second:'Ephesians 4:1-16'}},
  'monday-in-whitsun-week':{morning:{first:'Genesis 11:1-9',second:'1 Corinthians 12'},evening:{first:'Numbers 11:16-29',second:'1 Corinthians 14:1-25'}},
  'tuesday-in-whitsun-week':{morning:{first:'1 Samuel 19:18-24',second:'1 Thessalonians 5:12-23'},evening:{first:'Deuteronomy 30',second:'1 John 4:1-13'}},
  'st-barnabas':{morning:{first:'Ecclesiasticus 10',second:'Acts 14'},evening:{first:'Ecclesiasticus 12',second:'Acts 15:1-35'}},
  'st-john-baptist':{morning:{first:'Malachi 3',second:'Matthew 3'},evening:{first:'Malachi 4',second:'Matthew 14:1-12'}},
  'st-peter':{morning:{first:'Ecclesiasticus 15',second:'Acts 3'},evening:{first:'Ecclesiasticus 19',second:'Acts 4'}},
  'st-james':{morning:{first:'Ecclesiasticus 21'},evening:{first:'Ecclesiasticus 22'}},
  'st-bartholomew':{morning:{first:'Ecclesiasticus 24'},evening:{first:'Ecclesiasticus 29'}},
  'st-matthew':{morning:{first:'Ecclesiasticus 35'},evening:{first:'Ecclesiasticus 38'}},
  'st-michael':{morning:{first:'Genesis 32',second:'Acts 12:1-19'},evening:{first:'Daniel 10:5-21',second:'Jude 6-15'}},
  'st-luke':{morning:{first:'Ecclesiasticus 51'},evening:{first:'Job 1'}},
  'st-simon-jude':{morning:{first:'Job 24–25'},evening:{first:'Job 42'}},
  'all-saints':{morning:{first:'Wisdom 3:1-9',second:'Hebrews 11:32–12:6'},evening:{first:'Wisdom 5:1-16',second:'Revelation 19:1-16'}}
};

export const properPsalms = {
  'nativity':{morning:['Psalms 19, 45, 85'],evening:['Psalms 89, 110, 132']},
  'ash-wednesday':{morning:['Psalms 6, 32, 38'],evening:['Psalms 102, 130, 143']},
  'good-friday':{morning:['Psalms 22, 40, 54'],evening:['Psalms 69, 88']},
  'easter-day':{morning:['Psalms 2, 57, 111'],evening:['Psalms 113, 114, 118']},
  'ascension-day':{morning:['Psalms 8, 15, 21'],evening:['Psalms 24, 47, 108']},
  'whitsunday':{morning:['Psalms 48, 68'],evening:['Psalms 104, 145']}
};

function mergeLessons(base, override) {
  return {
    first: override?.first ?? base?.first ?? null,
    second: override?.second ?? base?.second ?? null
  };
}

export function getLessons(date, office) {
  const base = ordinaryLessons[monthDayKey(date)]?.[office] ?? {first:null,second:null};
  const holy = holyDayKey(date);
  const sunday = sundayProperKey(date);
  // The moveable/fixed Holy-Day table is applied before the Sunday table. Rare collisions are flagged in metadata.
  const override = holyDayPropers[holy]?.[office] ?? sundayPropers[sunday]?.[office] ?? null;
  return {
    ...mergeLessons(base, override),
    source: holyDayPropers[holy] ? 'holy-day proper' : sundayPropers[sunday] ? 'Sunday proper' : 'calendar',
    proper: holy || sunday || null,
    collision: Boolean(holyDayPropers[holy] && sundayPropers[sunday] && holy !== sunday)
  };
}

export function getProperPsalms(date, office) {
  const holy = holyDayKey(date);
  const key = holy === 'easter-day' ? 'easter-day' : holy;
  return properPsalms[key]?.[office] ?? null;
}
