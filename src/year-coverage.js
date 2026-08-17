import { getYearLectionary } from './year-calendar.js';

const CANON = {
  'Genesis':50,'Exodus':40,'Leviticus':27,'Numbers':36,'Deuteronomy':34,'Joshua':24,'Judges':21,'Ruth':4,
  '1 Samuel':31,'2 Samuel':24,'1 Kings':22,'2 Kings':25,'1 Chronicles':29,'2 Chronicles':36,'Ezra':10,'Nehemiah':13,'Esther':10,
  'Job':42,'Psalms':150,'Proverbs':31,'Ecclesiastes':12,'Song of Solomon':8,'Isaiah':66,'Jeremiah':52,'Lamentations':5,'Ezekiel':48,'Daniel':12,
  'Hosea':14,'Joel':3,'Amos':9,'Obadiah':1,'Jonah':4,'Micah':7,'Nahum':3,'Habakkuk':3,'Zephaniah':3,'Haggai':2,'Zechariah':14,'Malachi':4,
  'Matthew':28,'Mark':16,'Luke':24,'John':21,'Acts':28,'Romans':16,'1 Corinthians':16,'2 Corinthians':13,'Galatians':6,'Ephesians':6,'Philippians':4,
  'Colossians':4,'1 Thessalonians':5,'2 Thessalonians':3,'1 Timothy':6,'2 Timothy':4,'Titus':3,'Philemon':1,'Hebrews':13,'James':5,
  '1 Peter':5,'2 Peter':3,'1 John':5,'2 John':1,'3 John':1,'Jude':1,'Revelation':22
};

const BOOKS = Object.keys(CANON).sort((a,b)=>b.length-a.length);
const TOTAL_CHAPTERS = Object.values(CANON).reduce((a,b)=>a+b,0);
const NT_BOOKS = new Set(['Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation']);
const OT_BOOKS = new Set(BOOKS.filter(b => !NT_BOOKS.has(b)));
const OT_TOTAL = [...OT_BOOKS].reduce((n,b)=>n+CANON[b],0);
const NT_TOTAL = [...NT_BOOKS].reduce((n,b)=>n+CANON[b],0);

function normalise(ref='') { return ref.replace(/[–—]/g,'-').trim(); }

export function chaptersFromReference(reference='') {
  let ref = normalise(reference);
  if (ref.startsWith('Psalm ')) ref = 'Psalms ' + ref.slice(6);
  const book = BOOKS.find(name => ref === name || ref.startsWith(name + ' '));
  if (!book) return [];
  const rest = ref.slice(book.length).trim();
  if (!rest) return [];
  const chapters = new Set();
  for (const rawSegment of rest.split(/[;&]/)) {
    const segment = rawSegment.trim();
    const startMatch = segment.match(/^(\d{1,3})/);
    if (!startMatch) continue;
    const first = Number(startMatch[1]);
    let last = first;
    const crossChapter = segment.match(/-(\d{1,3})(?=[:.])/);
    const plainRange = !segment.includes(':') && !segment.includes('.') ? segment.match(/^(\d{1,3})-(\d{1,3})$/) : null;
    if (crossChapter) last = Number(crossChapter[1]);
    else if (plainRange) last = Number(plainRange[2]);
    const low = Math.max(1, Math.min(first, last));
    const high = Math.min(CANON[book], Math.max(first, last));
    for (let ch = low; ch <= high; ch++) chapters.add(`${book} ${ch}`);
  }
  return [...chapters];
}

export function getYearCoverage(year, readingPlanId = '1662') {
  const canonical = new Set();
  const apocrypha = new Set();
  for (const row of getYearLectionary(year, readingPlanId)) {
    for (const office of [row.morning,row.evening]) {
      for (const ref of [office?.first,office?.second].filter(Boolean)) {
        const chapters = chaptersFromReference(ref);
        if (chapters.length) chapters.forEach(ch=>canonical.add(ch));
        else apocrypha.add(ref);
      }
    }
  }
  let ot=0, nt=0;
  for (const key of canonical) {
    const book = BOOKS.find(name => key.startsWith(name + ' '));
    if (OT_BOOKS.has(book)) ot++; else nt++;
  }
  return {
    canonicalChapters: canonical.size,
    totalCanonicalChapters: TOTAL_CHAPTERS,
    percent: Math.round(canonical.size / TOTAL_CHAPTERS * 100),
    otChapters: ot, otTotal: OT_TOTAL, otPercent: Math.round(ot / OT_TOTAL * 100),
    ntChapters: nt, ntTotal: NT_TOTAL, ntPercent: Math.round(nt / NT_TOTAL * 100),
    includesApocrypha: apocrypha.size > 0
  };
}
