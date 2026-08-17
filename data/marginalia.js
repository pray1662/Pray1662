// Concise section-level Scriptural marginalia for the 1662 Daily Office.
// References are drawn from the 1839 SPCK concordance, The Book of Common Prayer:
// with marginal references to texts in the Holy Scriptures. The app intentionally
// shows a restrained selection rather than every reference in that volume.
export const marginalia = {
  exhortation: ['Luke 8:21','Philippians 4:1','1 Thessalonians 4:1','Leviticus 26:40','Ezra 10:1','Nehemiah 9:2','Proverbs 28:13','1 John 1:8–9'],
  confession: ['Psalm 86:5','Isaiah 63:16','Luke 6:36','2 Corinthians 1:3','Exodus 34:6','Psalm 51:3–4','Luke 15:18–19'],
  absolution: ['Genesis 17:1–2','2 Corinthians 1:3','Hebrews 1:5','1 Peter 1:3','1 John 1:9'],
  lordsPrayer: ['Matthew 6:9–13','Luke 11:2–4'],
  preces: ['Psalm 51:15','Psalm 70:1','Psalm 95:1','Nehemiah 9:5','Psalm 113:2'],
  venite: ['Psalm 95:1–11'],
  teDeum: ['1 Chronicles 29:13','Psalm 86:9–10','Psalm 113:1','Isaiah 12:1–2','Revelation 15:4'],
  benedicite: ['Song of the Three Holy Children 35–66'],
  benedictus: ['Luke 1:68–79'],
  magnificat: ['Luke 1:46–55'],
  nuncDimittis: ['Luke 2:29–32'],
  creed: ['Deuteronomy 4:35','1 Corinthians 8:6','John 20:31','Matthew 28:19','Revelation 19:6'],
  suffrages: ['Psalm 85:7','Psalm 51:10–11','Ezekiel 36:27','Matthew 5:8','1 Timothy 2:1–2'],
  peaceMorning: ['Psalm 46:9','Ezekiel 34:25','Luke 2:14','Romans 15:33','1 Corinthians 14:33'],
  graceMorning: ['Psalm 5:3','Psalm 19:13','Psalm 121:7–8','Romans 13:12–14'],
  peaceEvening: ['Isaiah 26:12','John 14:27','Romans 5:1','2 Thessalonians 3:16','Deuteronomy 5:29','Psalm 119:5'],
  perilsEvening: ['Psalm 4:8','Psalm 91:5–6','Psalm 121:7–8'],
  king: ['1 Timothy 2:1–2','Romans 13:1','1 Peter 2:17'],
  royalFamily: ['Psalm 72:1','1 Timothy 2:1–2'],
  clergyPeople: ['Acts 20:28','Ephesians 4:11–13','1 Thessalonians 5:12–13'],
  chrysostom: ['Matthew 18:19–20','John 16:23–24'],
  grace: ['2 Corinthians 13:14']
};

export function getMarginalia(id) {
  return marginalia[id] || [];
}
