import { getPsalms } from '../data/psalter.js';
import { getProperPsalms } from '../data/lectionary.js';
import { getReadings } from '../data/reading-plans.js';
import { morningItems, eveningItems } from '../data/liturgy.js';
import { getCollectsForDate } from '../data/collects.js';

const LITE_OPENING_SENTENCES = [
  { reference:'Ezekiel 18.27', text:'When the wicked man turneth away from his wickedness that he hath committed, and doeth that which is lawful and right, he shall save his soul alive.' },
  { reference:'Psalm 51.3', text:'I acknowledge my transgressions, and my sin is ever before me.' },
  { reference:'Psalm 51.9', text:'Hide thy face from my sins, and blot out all mine iniquities.' },
  { reference:'Psalm 51.17', text:'The sacrifices of God are a broken spirit : a broken and a contrite heart, O God, thou wilt not despise.' },
  { reference:'Joel 2.13', text:'Rend your heart, and not your garments, and turn unto the Lord your God: for he is gracious and merciful, slow to anger, and of great kindness, and repenteth him of the evil.' },
  { reference:'Daniel 9.9-10', text:'To the Lord our God belong mercies and forgivenesses, though we have rebelled against him: neither have we obeyed the voice of the Lord our God, to walk in his laws which he set before us.' },
  { reference:'Jeremiah 10.24; Psalm 6.1', text:'O Lord, correct me, but with judgement; not in thine anger, lest thou bring me to nothing.' },
  { reference:'St. Matthew 3.2', text:'Repent ye; for the Kingdom of heaven is at hand.' },
  { reference:'St. Luke 15.18-19', text:'I will arise and go to my father, and will say unto him, Father, I have sinned against heaven, and before thee, and am no more worthy to be called thy son.' },
  { reference:'Psalm 143.2', text:'Enter not into judgement with thy servant, O Lord; for in thy sight shall no man living be justified.' },
  { reference:'1 St. John 1.8-9', text:'If we say that we have no sin, we deceive ourselves, and the truth is not in us: but if we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.' }
];

const LITE_COMFORTABLE_WORDS = [
  { reference:'St. Matthew 11.28', text:'Come unto me all that travail and are heavy laden, and I will refresh you.' },
  { reference:'St. John 3.16', text:'So God loved the world, that he gave his only-begotten Son, to the end that all that believe in him should not perish, but have everlasting life.' },
  { reference:'1 St. Timothy 1.15', text:'This is a true saying, and worthy of all men to be received, that Christ Jesus came into the world to save sinners.' },
  { reference:'1 St. John 2.1', text:'If any man sin, we have an Advocate with the Father, Jesus Christ the righteous; and he is the propitiation for our sins.' }
];

function calendarDayNumber(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

function rotateForDate(items, date) {
  const index = ((calendarDayNumber(date) % items.length) + items.length) % items.length;
  return items[index];
}

export function getLiteVerses(date) {
  return {
    opening: rotateForDate(LITE_OPENING_SENTENCES, date),
    comfortable: rotateForDate(LITE_COMFORTABLE_WORDS, date)
  };
}

function liteItems(date, psalms, lessons) {
  const verses = getLiteVerses(date);
  return [
    { kind:'scripture', title:'Sentence of Scripture', text:verses.opening.text, reference:verses.opening.reference },
    { kind:'fixed', id:'confession' },
    { kind:'scripture', title:'Comfortable Word', text:verses.comfortable.text, reference:verses.comfortable.reference },
    { kind:'psalms', title:'The Psalms', value:psalms.join(', ') },
    { kind:'lesson', title:'The First Lesson', value:lessons.first },
    { kind:'lesson', title:'The Second Lesson', value:lessons.second },
    { kind:'fixed', id:'lordsPrayer' },
    { kind:'collect', title:'The Collect of the Day' },
    { kind:'fixed', id:'grace' }
  ];
}

export function buildOffice(date, office, readingPlanId = '1662', lite = false) {
  const psalms = getProperPsalms(date, office) ?? getPsalms(date, office);
  const lessons = getReadings(date, office, readingPlanId);
  const collects = getCollectsForDate(date, office);
  const base = lite
    ? liteItems(date, psalms, lessons)
    : (office === 'morning' ? morningItems(psalms, lessons) : eveningItems(psalms, lessons));
  const items = base.map(item => {
    if (item.kind === 'collect') return { ...item, collects };
    if (item.kind === 'lesson' && lessons.note) return { ...item, note: lessons.note };
    return item;
  });
  return { office, psalms, lessons, collects, readingPlanId, lite, items };
}
