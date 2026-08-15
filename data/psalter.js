export const psalter30 = {
  1:{morning:['Psalms 1–5'],evening:['Psalms 6–8']},
  2:{morning:['Psalms 9–11'],evening:['Psalms 12–14']},
  3:{morning:['Psalms 15–17'],evening:['Psalm 18']},
  4:{morning:['Psalms 19–21'],evening:['Psalms 22–23']},
  5:{morning:['Psalms 24–26'],evening:['Psalms 27–29']},
  6:{morning:['Psalms 30–31'],evening:['Psalms 32–34']},
  7:{morning:['Psalms 35–36'],evening:['Psalm 37']},
  8:{morning:['Psalms 38–40'],evening:['Psalms 41–43']},
  9:{morning:['Psalms 44–46'],evening:['Psalms 47–49']},
  10:{morning:['Psalms 50–52'],evening:['Psalms 53–55']},
  11:{morning:['Psalms 56–58'],evening:['Psalms 59–61']},
  12:{morning:['Psalms 62–64'],evening:['Psalms 65–67']},
  13:{morning:['Psalm 68'],evening:['Psalms 69–70']},
  14:{morning:['Psalms 71–72'],evening:['Psalms 73–74']},
  15:{morning:['Psalms 75–77'],evening:['Psalm 78']},
  16:{morning:['Psalms 79–81'],evening:['Psalms 82–85']},
  17:{morning:['Psalms 86–88'],evening:['Psalm 89']},
  18:{morning:['Psalms 90–92'],evening:['Psalms 93–94']},
  19:{morning:['Psalms 95–97'],evening:['Psalms 98–101']},
  20:{morning:['Psalms 102–103'],evening:['Psalm 104']},
  21:{morning:['Psalm 105'],evening:['Psalm 106']},
  22:{morning:['Psalm 107'],evening:['Psalms 108–109']},
  23:{morning:['Psalms 110–113'],evening:['Psalms 114–115']},
  24:{morning:['Psalms 116–118'],evening:['Psalm 119:1–32']},
  25:{morning:['Psalm 119:33–72'],evening:['Psalm 119:73–104']},
  26:{morning:['Psalm 119:105–144'],evening:['Psalm 119:145–176']},
  27:{morning:['Psalms 120–125'],evening:['Psalms 126–131']},
  28:{morning:['Psalms 132–135'],evening:['Psalms 136–138']},
  29:{morning:['Psalms 139–141'],evening:['Psalms 142–143']},
  30:{morning:['Psalms 144–146'],evening:['Psalms 147–150']}
};

export function psalterDay(date) {
  // The 1662 rubric directs that the Psalms appointed for the 30th day are used
  // on the 31st day of months that contain 31 days.
  return Math.min(date.getDate(), 30);
}

export function getPsalms(date, office) {
  return psalter30[psalterDay(date)][office];
}
