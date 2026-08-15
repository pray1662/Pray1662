export function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

export function monthDayKey(date) {
  return `${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  }).format(date);
}

export function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

export function sameDate(a,b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function daysBetween(a,b) {
  const aa = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const bb = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((aa-bb)/86400000);
}

// Anonymous Gregorian algorithm (Meeus/Jones/Butcher form).
export function easterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function adventSunday(year) {
  const d = new Date(year, 10, 27); // Advent Sunday is the Sunday falling 27 Nov–3 Dec.
  while (d.getDay() !== 0) d.setDate(d.getDate()+1);
  return d;
}

export function moveableDays(year) {
  const easter = easterDate(year);
  return {
    septuagesima: addDays(easter, -63),
    sexagesima: addDays(easter, -56),
    quinquagesima: addDays(easter, -49),
    ashWednesday: addDays(easter, -46),
    lent1: addDays(easter, -42),
    lent2: addDays(easter, -35),
    lent3: addDays(easter, -28),
    lent4: addDays(easter, -21),
    lent5: addDays(easter, -14),
    palmSunday: addDays(easter, -7),
    wednesdayBeforeEaster: addDays(easter, -4),
    maundyThursday: addDays(easter, -3),
    goodFriday: addDays(easter, -2),
    easterEven: addDays(easter, -1),
    easter,
    easterMonday: addDays(easter, 1),
    easterTuesday: addDays(easter, 2),
    ascensionDay: addDays(easter, 39),
    sundayAfterAscension: addDays(easter, 42),
    whitsunday: addDays(easter, 49),
    whitMonday: addDays(easter, 50),
    whitTuesday: addDays(easter, 51),
    trinitySunday: addDays(easter, 56),
    advent1: adventSunday(year)
  };
}

export function sundayProperKey(date) {
  if (date.getDay() !== 0) return null;
  const year = date.getFullYear();
  const m = moveableDays(year);
  const dFromEaster = daysBetween(date, m.easter);

  const exact = new Map([
    [-63,'septuagesima'],[-56,'sexagesima'],[-49,'quinquagesima'],
    [-42,'lent-1'],[-35,'lent-2'],[-28,'lent-3'],[-21,'lent-4'],[-14,'lent-5'],[-7,'lent-6'],
    [0,'easter-day'],[42,'after-ascension'],[49,'whitsunday'],[56,'trinity-sunday']
  ]);
  if (exact.has(dFromEaster)) return exact.get(dFromEaster);
  if ([7,14,21,28,35].includes(dFromEaster)) return `after-easter-${dFromEaster/7}`;
  if (dFromEaster >= 63) {
    const advent = adventSunday(year);
    if (date < advent) return `after-trinity-${dFromEaster/7 - 8}`;
  }

  const advent = adventSunday(year);
  if (date >= advent && date <= addDays(advent,21)) {
    return `advent-${Math.floor(daysBetween(date,advent)/7)+1}`;
  }

  // Sundays after Christmas, including early January before Epiphany.
  let christmas = new Date(year,11,25);
  if (date.getMonth() === 0) christmas = new Date(year-1,11,25);
  const jan6 = new Date(christmas.getFullYear()+1,0,6);
  if (date > christmas && date < jan6) {
    const first = addDays(christmas, (7-christmas.getDay())%7 || 7);
    if (date >= first) return `after-christmas-${Math.floor(daysBetween(date,first)/7)+1}`;
  }

  const epiphany = new Date(year,0,6);
  if (date > epiphany && date < m.septuagesima) {
    const first = addDays(epiphany, (7-epiphany.getDay())%7 || 7);
    if (date >= first) return `after-epiphany-${Math.floor(daysBetween(date,first)/7)+1}`;
  }
  return null;
}

const fixedNames = {
  '01-01':'Circumcision of our Lord','01-06':'Epiphany','01-25':'Conversion of St Paul',
  '02-02':'Purification of the Blessed Virgin Mary','02-24':'St Matthias', '03-25':'Annunciation of our Lady',
  '04-25':'St Mark','05-01':'St Philip and St James','06-11':'St Barnabas','06-24':'Nativity of St John the Baptist',
  '06-29':'St Peter','07-25':'St James','08-24':'St Bartholomew','09-21':'St Matthew','09-29':'St Michael and All Angels',
  '10-18':'St Luke','10-28':'St Simon and St Jude','11-01':'All Saints','11-30':'St Andrew',
  '12-21':'St Thomas the Apostle','12-25':'Nativity of Christ','12-26':'St Stephen','12-27':'St John','12-28':'Innocents’ Day'
};

export function holyDayKey(date) {
  const m = moveableDays(date.getFullYear());
  const movable = [
    ['ash-wednesday',m.ashWednesday],['wednesday-before-easter',m.wednesdayBeforeEaster],['thursday-before-easter',m.maundyThursday],
    ['good-friday',m.goodFriday],['easter-even',m.easterEven],['easter-day',m.easter],
    ['monday-in-easter-week',m.easterMonday],['tuesday-in-easter-week',m.easterTuesday],
    ['ascension-day',m.ascensionDay],['whitsunday',m.whitsunday],['monday-in-whitsun-week',m.whitMonday],
    ['tuesday-in-whitsun-week',m.whitTuesday]
  ];
  const found = movable.find(([,d])=>sameDate(date,d));
  if (found) return found[0];
  const md = monthDayKey(date);
  const reverse = {
    '01-01':'circumcision','01-06':'epiphany','01-25':'conversion-st-paul','02-02':'purification',
    '02-24':'st-matthias','03-25':'annunciation','04-25':'st-mark','05-01':'st-philip-james','06-11':'st-barnabas',
    '06-24':'st-john-baptist','06-29':'st-peter','07-25':'st-james','08-24':'st-bartholomew','09-21':'st-matthew',
    '09-29':'st-michael','10-18':'st-luke','10-28':'st-simon-jude','11-01':'all-saints','11-30':'st-andrew',
    '12-21':'st-thomas','12-25':'nativity','12-26':'st-stephen','12-27':'st-john','12-28':'innocents'
  };
  return reverse[md] || null;
}

export function liturgicalLabel(date) {
  const holy = holyDayKey(date);
  if (holy) {
    const md = monthDayKey(date);
    if (fixedNames[md]) return fixedNames[md];
    const names = {
      'ash-wednesday':'Ash Wednesday','wednesday-before-easter':'Wednesday before Easter','thursday-before-easter':'Thursday before Easter',
      'good-friday':'Good Friday','easter-even':'Easter Even','easter-day':'Easter Day',
      'monday-in-easter-week':'Monday in Easter Week','tuesday-in-easter-week':'Tuesday in Easter Week',
      'ascension-day':'Ascension Day','whitsunday':'Whitsunday','monday-in-whitsun-week':'Monday in Whitsun Week',
      'tuesday-in-whitsun-week':'Tuesday in Whitsun Week'
    };
    return names[holy] || holy;
  }
  const sunday = sundayProperKey(date);
  if (sunday) return sunday.replaceAll('-', ' ').replace(/\b\w/g, c=>c.toUpperCase());
  return 'Daily Office';
}
