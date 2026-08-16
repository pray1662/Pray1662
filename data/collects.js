import { addDays, holyDayKey, sundayProperKey, adventSunday, moveableDays, sameDate } from '../src/calendar.js';

export const collects = {
  "advent-1": {
    "title": "The First Sunday in Advent",
    "text": "ALMIGHTY God, give us grace that we may cast away the works of darkness, and put upon us the armour of light, now in the time of this mortal life, in which thy Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious Majesty, to judge both the quick and the dead, we may rise to the life immortal, through him who liveth and reigneth with thee and the Holy Ghost, now and ever. Amen."
  },
  "advent-2": {
    "title": "The Second Sunday in Advent",
    "text": "BLESSED Lord, who hast caused all holy Scriptures to be written for our learning: Grant that we may in such wise hear them, read, mark, learn, and inwardly digest them, that by patience, and comfort of thy holy Word, we may embrace, and ever hold fast the blessed hope of everlasting life, which thou hast given us in our Saviour Jesus Christ. Amen."
  },
  "advent-3": {
    "title": "The Third Sunday in Advent",
    "text": "O Lord Jesu Christ, who at thy first coming didst send thy messenger to prepare the way before thee; Grant that the Ministers and Stewards of thy mysteries may likewise so prepare and make ready thy way, by turning the hearts of the disobedient to the wisdom of the just; that at thy second coming to judge the world, we may be found an acceptable people in thy sight, who livest and reignest with the Father and the Holy Spirit, ever one God, world without end. Amen."
  },
  "advent-4": {
    "title": "The Fourth Sunday in Advent",
    "text": "O Lord, raise up (we pray thee) thy power, and come among us, and with great might succour us; that whereas, through our sins and wickedness, we are sore let and hindered in running the race that is set before us, thy bountiful grace and mercy may speedily help and deliver us, through the satisfaction of thy Son our Lord, to whom, with thee and the Holy Ghost, be honour and glory, world without end. Amen."
  },
  "after-christmas-1": {
    "title": "The Sunday after Christmas Day",
    "text": "ALMIGHTY God, who hast given us thy only-begotten Son to take our nature upon him, and as at this time to be born of a pure Virgin; Grant that we being regenerate, and made thy children by adoption and grace, may daily be renewed by thy Holy Spirit, through our Lord Jesus Christ, who liveth and reigneth with thee, and the same Spirit, ever, one God, world without end. Amen."
  },
  "after-epiphany-1": {
    "title": "The First Sunday after the Epiphany",
    "text": "O Lord, we beseech thee mercifully to receive the prayers of thy people who call upon thee; and grant that they may both perceive and know what things they ought to do, and also may have grace and power faithfully to fulfill the same; through Jesus Christ our Lord. Amen."
  },
  "after-epiphany-2": {
    "title": "The Second Sunday after the Epiphany",
    "text": "ALMIGHTY and everlasting God, who dost govern all things in heaven and earth: Mercifully hear the supplications of thy people, and grant us thy peace all the days of our life, through Jesus Christ our Lord. Amen."
  },
  "after-epiphany-3": {
    "title": "The Third Sunday after the Epiphany",
    "text": "ALMIGHTY and everlasting God, mercifully look upon our infirmities; and in all our dangers and necessities stretch forth thy right hand to help and defend us, through Jesus Christ our Lord. Amen."
  },
  "after-epiphany-4": {
    "title": "The Fourth Sunday after the Epiphany",
    "text": "O God, who knowest us to be set in the midst of so many and great dangers, that by reason of the frailty of our nature we cannot always stand upright: Grant to us such strength and protection, as may support us in all dangers, and carry us through all temptations; through Jesus Christ our Lord. Amen."
  },
  "after-epiphany-5": {
    "title": "The Fifth Sunday after the Epiphany",
    "text": "O Lord, we beseech thee to keep thy Church and household continually in thy true religion; that they who do lean only upon the hope of thy heavenly grace, may evermore be defended by thy mighty power, through Jesus Christ our Lord. Amen."
  },
  "after-epiphany-6": {
    "title": "The Sixth Sunday after the Epiphany",
    "text": "O God, whose blessed Son was manifested that he might destroy the works of the devil, and make us the sons of God, and heirs of eternal life; Grant us, we beseech thee, that having this hope, we may purify ourselves, even as he is pure; that, when he shall appear again with power and great glory, we may be made like unto him in his eternal and glorious kingdom; where with thee, O Father, and thee, O Holy Ghost, he liveth and reigneth, ever, one God, world without end. Amen."
  },
  "septuagesima": {
    "title": "Septuagesima",
    "text": "O Lord, we beseech thee favourably to hear the prayers of thy people; that we, who are justly punished for our offences, may be mercifully delivered by thy goodness, for the glory of thy Name, through Jesus Christ our Saviour, who liveth and reigneth with thee and the Holy Ghost, ever, one God, world without end. Amen."
  },
  "sexagesima": {
    "title": "Sexagesima",
    "text": "O Lord God, who seest that we put not our trust in any thing that we do: Mercifully grant that by thy power we may be defended against all adversity; through Jesus Christ our Lord. Amen."
  },
  "quinquagesima": {
    "title": "Quinquagesima",
    "text": "O Lord, who hast taught us, that all our doings without love are nothing worth; Send thy Holy Ghost, and pour into our hearts that most excellent gift of charity, the very bond of peace and of all virtues, without which whosoever lives is counted dead before thee: Grant this for thy only Son Jesus Christ's sake. Amen."
  },
  "lent-1": {
    "title": "The First Sunday in Lent",
    "text": "O Lord, who for our sake didst fast forty days and forty nights: Give us grace to use such abstinence, that our flesh being subdued to the Spirit, we may ever obey thy godly motions in righteousness and true holiness, to thy honour and glory, who livest and reignest with the Father and the Holy Ghost, one God, world without end. Amen."
  },
  "lent-2": {
    "title": "The Second Sunday in Lent",
    "text": "ALMIGHTY God, who seest that we have no power of ourselves to help ourselves; Keep us both outwardly in our bodies, and inwardly in our souls; that we may be defended from all adversities which may happen to the body, and from all evil thoughts which may assault and hurt the soul, through Jesus Christ our Lord. Amen."
  },
  "lent-3": {
    "title": "The Third Sunday in Lent",
    "text": "We beseech thee, Almighty God, look upon the hearty desires of thy humble servants, and stretch forth the right hand of thy Majesty, to be our defence against our enemies, through Jesus Christ our Lord. Amen."
  },
  "lent-4": {
    "title": "The Fourth Sunday in Lent",
    "text": "GRANT, we beseech thee, Almighty God, that we, who for our evil deeds do worthily deserve to be punished, by the comfort of thy grace may mercifully be relieved, through our Lord and Saviour Jesus Christ. Amen."
  },
  "lent-5": {
    "title": "The Fifth Sunday in Lent",
    "text": "We beseech thee, Almighty God, mercifully to look upon thy people: that by thy great goodness they may be governed and preserved evermore, both in body and soul, through Jesus Christ our Lord. Amen."
  },
  "lent-6": {
    "title": "The Sunday next before Easter",
    "text": "ALMIGHTY and everlasting God, who of thy tender love towards mankind, hast sent thy Son our Saviour Jesus Christ, to take upon him our flesh, and to suffer death upon the cross, that all mankind should follow the example of his great humility; Mercifully grant, that we may both follow the example of his patience, and also be made partakers of his resurrection, through the same Jesus Christ our Lord. Amen."
  },
  "after-easter-1": {
    "title": "The First Sunday after Easter",
    "text": "ALMIGHTY Father, who hast given thine only Son to die for our sins, and to rise again for our justification; Grant us so to put away the leaven of malice and wickedness, that we may alway serve thee in pureness of living and truth, through the merits of the same thy Son Jesus Christ our Lord. Amen."
  },
  "after-easter-2": {
    "title": "The Second Sunday after Easter",
    "text": "ALMIGHTY God, who hast given thine only Son to be unto us both a sacrifice for sin, and also an ensample of godly life: Give us grace that we may always most thankfully receive that his inestimable benefit, and also daily endeavour ourselves to follow the blessed steps of his most holy life, through the same Jesus Christ our Lord. Amen."
  },
  "after-easter-3": {
    "title": "The Third Sunday after Easter",
    "text": "ALMIGHTY God, who shewest to them that be in error, the light of thy truth, to the intent that they may return into the way of righteousness: Grant unto all them that are admitted into the fellowship of Christ’s religion, that they may eschew those things that are contrary to their profession, and follow all such things as are agreeable to the same; through our Lord Jesus Christ. Amen."
  },
  "after-easter-4": {
    "title": "The Fourth Sunday after Easter",
    "text": "Almighty God, who alone canst order the unruly wills and affections of sinful men; Grant unto thy people, that they may love the things which thou commandest, and desire that which thou dost promise; that so among the sundry and manifold changes of the world, our hearts may surely be fixed, where true joys are to be found, through Jesus Christ our Lord. Amen."
  },
  "after-easter-5": {
    "title": "The Fifth Sunday after Easter",
    "text": "O Lord, from whom all good things do come: Grant to us thy humble servants, that by thy holy inspiration, we may think those things that be good, and by thy merciful guiding may perform the same, through our Lord Jesus Christ. Amen."
  },
  "after-ascension": {
    "title": "The Sunday after Ascension Day",
    "text": "O God, the King of glory, who hast exalted thine only Son Jesus Christ with great triumph unto thy kingdom in heaven: We beseech thee leave us not comfortless; but send to us thine Holy Ghost to comfort us; and exalt us unto the same place whither our Saviour Christ is gone before; who liveth and reigneth with thee and the Holy Ghost, one God, world without end. Amen."
  },
  "after-trinity-1": {
    "title": "The First Sunday after Trinity",
    "text": "O God, the strength of all them that put their trust in thee, Mercifully accept our prayers; and because through the weakness of our mortal nature we can do no good thing without thee, grant us the help of thy grace, that in keeping of thy commandments, we may please thee, both in will and deed, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-2": {
    "title": "The Second Sunday after Trinity",
    "text": "O Lord, who never failest to help and govern them whom thou dost bring up in thy stedfast fear and love; Keep us, we beseech thee, under the protection of thy good providence, and make us to have a perpetual fear and love of thy holy Name, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-3": {
    "title": "The Third Sunday after Trinity",
    "text": "O Lord, we beseech thee mercifully to hear us; and grant that we, to whom thou hast given an hearty desire to pray, may by thy mighty aid be defended and comforted in all dangers and adversities, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-4": {
    "title": "The Fourth Sunday after Trinity",
    "text": "O God, the protector of all that trust in thee, without whom nothing is strong, nothing is holy: Increase and multiply upon us thy mercy; that thou being our ruler and guide, we may so pass through things temporal, that we finally lose not the things eternal: Grant this, O heavenly Father, for Jesus Christ’s sake our Lord. Amen."
  },
  "after-trinity-5": {
    "title": "The Fifth Sunday after Trinity",
    "text": "GRANT, O Lord, we beseech thee, that the course of this world may be so peaceably ordered by thy governance, that thy Church may joyfully serve thee in all godly quietness, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-6": {
    "title": "The Sixth Sunday after Trinity",
    "text": "O God, who hast prepared for them that love thee, such good things as pass man’s understanding; Pour into our hearts such love toward thee, that we loving thee above all things, may obtain thy promises, which exceed all that we can desire, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-7": {
    "title": "The Seventh Sunday after Trinity",
    "text": "O Lord of all power and might, who art the author and giver of all good things; Graft in our hearts the love of thy Name, increase in us true religion, nourish us with all goodness, and of thy great mercy keep us in the same, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-8": {
    "title": "The Eighth Sunday after Trinity",
    "text": "O God, whose never-failing providence ordereth all things both in heaven and earth; We humbly beseech thee to put away from us all hurtful things, and to give us those things which be profitable for us, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-9": {
    "title": "The Ninth Sunday after Trinity",
    "text": "GRANT to us, Lord, we beseech thee, the Spirit to think and do always such things as be rightful; that we, who cannot do any thing that is good without thee, may by thee be enabled to live according to thy will, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-10": {
    "title": "The Tenth Sunday after Trinity",
    "text": "LET thy merciful ears, O Lord, be open to the prayers of thy humble servants; and, that they may obtain their petitions make them to ask such things as shall please thee, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-11": {
    "title": "The Eleventh Sunday after Trinity",
    "text": "O God, who declarest thy almighty power most chiefly in shewing mercy and pity; Mercifully grant unto us such a measure of thy grace, that we, running the way of thy commandments, may obtain thy gracious promises, and be made partakers of thy heavenly treasure; through Jesus Christ our Lord. Amen."
  },
  "after-trinity-12": {
    "title": "The Twelfth Sunday after Trinity",
    "text": "ALMIGHTY and everlasting God, who art always more ready to hear than we are to pray, and art wont to give more than either we desire, or deserve; Pour down upon us the abundance of thy mercy; forgiving us those things whereof our conscience is afraid, and giving us those good things which we are not worthy to ask, but through the merits and mediation of Jesus Christ thy Son, our Lord. Amen."
  },
  "after-trinity-13": {
    "title": "The Thirteenth Sunday after Trinity",
    "text": "ALMIGHTY and merciful God, of whose only gift it cometh that thy faithful people do unto thee true and laudable service: Grant, we beseech thee, that we may so faithfully serve thee in this life, that we fail not finally to attain thy heavenly promises, through the merits of Jesus Christ our Lord. Amen."
  },
  "after-trinity-14": {
    "title": "The Fourteenth Sunday after Trinity",
    "text": "ALMIGHTY and everlasting God, give unto us the increase of faith, hope, and charity; and, that we may obtain that which thou dost promise, make us to love that which thou dost command, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-15": {
    "title": "The Fifteenth Sunday after Trinity",
    "text": "KEEP, we beseech thee, O Lord, thy Church with thy perpetual mercy; and because the frailty of man without thee cannot but fall, keep us ever by thy help from all things hurtful, and lead us to all things profitable for our salvation; through Jesus Christ our Lord. Amen."
  },
  "after-trinity-16": {
    "title": "The Sixteenth Sunday after Trinity",
    "text": "O Lord, we beseech thee, let thy continual pity cleanse and defend thy Church; and because it cannot continue in safety without thy succour, preserve it evermore by thy help and goodness; through Jesus Christ our Lord. Amen."
  },
  "after-trinity-17": {
    "title": "The Seventeenth Sunday after Trinity",
    "text": "O Lord, we pray thee, that thy grace may always prevent and follow us; and make us continually to be given to all good works, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-18": {
    "title": "The Eighteenth Sunday after Trinity",
    "text": "O Lord, we beseech thee, grant thy people grace to withstand the temptations of the world, the flesh, and the devil; and with pure hearts and minds to follow thee the only God, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-19": {
    "title": "The Nineteenth Sunday after Trinity",
    "text": "O God, forasmuch as without thee we are not able to please thee; Mercifully grant, that thy Holy Spirit may in all things direct and rule our hearts; through Jesus Christ our Lord. Amen."
  },
  "after-trinity-20": {
    "title": "The Twentieth Sunday after Trinity",
    "text": "Almighty and most merciful God, of thy bountiful goodness keep us, we beseech thee, from all things that may hurt us; that we being ready both in body and soul, may cheerfully accomplish those things that thou wouldest have done, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-21": {
    "title": "The Twenty-first Sunday after Trinity",
    "text": "GRANT, we beseech thee, merciful Lord, to thy faithful people pardon and peace; that they may be cleansed from all their sins, and serve thee with a quiet mind, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-22": {
    "title": "The Twenty-second Sunday after Trinity",
    "text": "O Lord, we beseech thee to keep thy houshold the Church in continual godliness; that through thy protection it may be free from all adversities, and devoutly given to serve thee in good works, to the glory of thy Name, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-23": {
    "title": "The Twenty-third Sunday after Trinity",
    "text": "O God, our refuge and strength, who art the author of all godliness: Be ready, we beseech thee, to hear the devout prayers of thy Church; and grant that those things which we ask faithfully we may obtain effectually, through Jesus Christ our Lord. Amen."
  },
  "after-trinity-24": {
    "title": "The Twenty-fourth Sunday after Trinity",
    "text": "O Lord, we beseech thee, absolve thy people from their offences; that through thy bountiful goodness we may all be delivered from the bands of those sins, which by our frailty we have committed: Grant this, O heavenly Father, for Jesus Christ’s sake, our blessed Lord and Saviour. Amen."
  },
  "after-trinity-25": {
    "title": "The Twenty-fifth Sunday after Trinity",
    "text": "STIR up, we beseech thee, O Lord, the wills of thy faithful people; that they, plenteously bringing forth the fruit of good works, may of thee be plenteously rewarded, through Jesus Christ our Lord. Amen."
  },
  "nativity": {
    "title": "The Nativity of our Lord",
    "text": "Almighty God, who hast given us thy only-begotten Son to take our nature upon him, and as at this time to be born of a pure Virgin; Grant that we being regenerate, and made thy children by adoption and grace, may daily be renewed by thy Holy Spirit; through the same our Lord Jesus Christ, who liveth and reigneth with thee and the same Spirit, ever one God, world without end. Amen."
  },
  "epiphany": {
    "title": "The Epiphany",
    "text": "O God, who by the leading of a star didst manifest thy only-begotten Son to the Gentiles; Mercifully grant that we, who know thee now by faith, may after this life have the fruition of thy glorious Godhead; through Jesus Christ our Lord. Amen."
  },
  "ash-wednesday": {
    "title": "Ash Wednesday",
    "text": "Almighty and everlasting God, who hatest nothing that thou hast made, and dost forgive the sins of all them that are penitent; Create and make in us new and contrite hearts, that we worthily lamenting our sins, and acknowledging our wretchedness, may obtain of thee, the God of all mercy, perfect remission and forgiveness; through Jesus Christ our Lord. Amen."
  },
  "ascension-day": {
    "title": "Ascension Day",
    "text": "GRANT, we beseech thee, Almighty God, that since we do believe thy only-begotten Son our Lord Jesus Christ to have ascended into the Heavens; so we may also in heart and mind thither ascend, and with him continually dwell, who liveth and reigneth with thee and the Holy Ghost, one God, world without end. Amen."
  },
  "whitsunday": {
    "title": "Whitsunday",
    "text": "O God, who as at this time didst teach the hearts of thy faithful people, by the sending to them the light of thy Holy Spirit; Grant us by the same Spirit to have a right judgement in all things, and evermore to rejoice in his holy comfort, through the merits of Christ Jesus our Saviour, who liveth and reigneth with thee, in the unity of the same Spirit, one God, world without end. Amen."
  },
  "trinity-sunday": {
    "title": "Trinity Sunday",
    "text": "Almighty and everlasting God, who hast given unto us thy servants grace, by the confession of a true faith to acknowledge the glory of the eternal Trinity, and in the power of the Divine Majesty to worship the Unity; We beseech thee, that thou wouldest keep us stedfast in this faith, and evermore defend us from all adversities, who livest and reignest, one God, world without end. Amen."
  },
  "easter-day": {
    "title": "Easter Day",
    "text": "ALMIGHTY God, who through thine only-begotten Son Jesus Christ hast overcome death, and opened unto us the gate of everlasting life: We humbly beseech thee, that as by thy special grace preventing us, thou dost put into our minds good desires; so by thy continual help we may bring the same to good effect, through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, ever, one God, world without end. Amen."
  }
};


function previousSunday(date) {
  return addDays(date, -date.getDay());
}

function normalSundayKey(date) {
  const sunday = previousSunday(date);
  let key = sundayProperKey(sunday);
  // The 1662 table provides only one Sunday after Christmas Day.
  if (key?.startsWith('after-christmas-')) key = 'after-christmas-1';
  // In unusually long Trinity seasons the 1662 table supplies omitted
  // Epiphany propers; the final Sunday before Advent always uses Trinity 25.
  if (key?.startsWith('after-trinity-')) {
    const n = Number(key.split('-').at(-1));
    const next = addDays(sunday, 7);
    if (next >= adventSunday(date.getFullYear())) return 'after-trinity-25';
    if (n > 25) return `after-epiphany-${Math.min(6, Math.max(1, n-25))}`;
  }
  return key;
}

function majorProperKey(date) {
  const holy = holyDayKey(date);
  const supported = new Set(['nativity','epiphany','ash-wednesday','easter-day','ascension-day','whitsunday']);
  if (supported.has(holy)) return holy;
  if (sameDate(date, moveableDays(date.getFullYear()).trinitySunday)) return 'trinity-sunday';
  return null;
}

export function getCollectsForDate(date, office = 'morning') {
  const keys = [];
  const proper = majorProperKey(date);
  if (proper) keys.push(proper);
  else {
    // At Saturday Evening Prayer the coming Sunday's collect is anticipated,
    // following the BCP rubric that a Sunday collect is said at the
    // Evening Service next before. Otherwise weekdays retain the preceding
    // Sunday's collect.
    const collectDate = office === 'evening' && date.getDay() === 6 ? addDays(date, 1) : date;
    const sunday = normalSundayKey(collectDate);
    if (sunday) keys.push(sunday);
  }

  // 1662 explicitly orders the First Advent collect to be repeated daily
  // with the other Collects in Advent until Christmas Eve.
  const advent = adventSunday(date.getFullYear());
  const christmasEve = new Date(date.getFullYear(), 11, 24);
  if (date >= advent && date <= christmasEve && !keys.includes('advent-1')) keys.push('advent-1');

  // Ash Wednesday's collect is appointed to continue through Lent after
  // the Collect of the Day. This keeps that traditional layer available.
  const m = moveableDays(date.getFullYear());
  if (date > m.ashWednesday && date < m.easter && !keys.includes('ash-wednesday')) keys.push('ash-wednesday');

  return keys.map(key => ({ key, ...collects[key] })).filter(x => x.text);
}
