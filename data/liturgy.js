const p = (...paras) => paras.map(text => ({ type: 'p', text }));
const lines = (...items) => items.map(([speaker, text]) => ({ type: 'line', speaker, text }));

export const fixed = {
  exhortation: {
    title: 'The Exhortation',
    rubric: 'The Minister shall read with a loud voice one or more of these sentences of the Scriptures; and then shall say that which is written after the said sentences.',
    content: p(
      'Dearly beloved brethren, the Scripture moveth us in sundry places to acknowledge and confess our manifold sins and wickedness; and that we should not dissemble nor cloak them before the face of Almighty God our heavenly Father; but confess them with an humble, lowly, penitent, and obedient heart; to the end that we may obtain forgiveness of the same, by his infinite goodness and mercy.',
      'And although we ought at all times humbly to acknowledge our sins before God; yet ought we most chiefly so to do, when we assemble and meet together to render thanks for the great benefits that we have received at his hands, to set forth his most worthy praise, to hear his most holy Word, and to ask those things which are requisite and necessary, as well for the body as the soul.',
      'Wherefore I pray and beseech you, as many as are here present, to accompany me with a pure heart, and humble voice, unto the throne of the heavenly grace.'
    )
  },
  confession: {
    title: 'A General Confession',
    rubric: 'To be said of the whole Congregation after the Minister, all kneeling.',
    content: p(
      'Almighty and most merciful Father; We have erred, and strayed from thy ways like lost sheep. We have followed too much the devices and desires of our own hearts. We have offended against thy holy laws. We have left undone those things which we ought to have done; And we have done those things which we ought not to have done; And there is no health in us.',
      'But thou, O Lord, have mercy upon us, miserable offenders. Spare thou them, O God, which confess their faults. Restore thou them that are penitent; According to thy promises declared unto mankind in Christ Jesu our Lord. And grant, O most merciful Father, for his sake; That we may hereafter live a godly, righteous, and sober life, To the glory of thy holy Name. Amen.'
    )
  },
  absolution: {
    title: 'The Absolution',
    rubric: 'To be pronounced by the Priest alone, standing; the people still kneeling.',
    content: p(
      'Almighty God, the Father of our Lord Jesus Christ, who desireth not the death of a sinner, but rather that he may turn from his wickedness, and live; and hath given power, and commandment, to his Ministers, to declare and pronounce to his people, being penitent, the Absolution and Remission of their sins:',
      'He pardoneth and absolveth all them that truly repent, and unfeignedly believe his holy Gospel. Wherefore let us beseech him to grant us true repentance, and his Holy Spirit; that those things may please him, which we do at this present; and that the rest of our life hereafter may be pure, and holy; so that at the last we may come to his eternal joy; through Jesus Christ our Lord. Amen.'
    )
  },
  lordsPrayer: {
    title: "The Lord's Prayer",
    content: p('Our Father, which art in heaven, Hallowed be thy Name; Thy kingdom come; Thy will be done in earth, As it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive them that trespass against us. And lead us not into temptation; But deliver us from evil. For thine is the kingdom, The power, and the glory, For ever and ever. Amen.')
  },
  preces: {
    title: 'The Preces',
    content: lines(
      ['Minister', 'O Lord, open thou our lips.'], ['Answer', 'And our mouth shall shew forth thy praise.'],
      ['Minister', 'O God, make speed to save us.'], ['Answer', 'O Lord, make haste to help us.'],
      ['All', 'Glory be to the Father, and to the Son, and to the Holy Ghost; As it was in the beginning, is now, and ever shall be, world without end. Amen.'],
      ['Minister', 'Praise ye the Lord.'], ['Answer', "The Lord's Name be praised."]
    )
  },
  venite: {
    title: 'Venite, exultemus Domino',
    subtitle: 'Psalm 95',
    content: p(
      'O come, let us sing unto the Lord : let us heartily rejoice in the strength of our salvation.',
      'Let us come before his presence with thanksgiving : and shew ourselves glad in him with psalms.',
      'For the Lord is a great God : and a great King above all gods.',
      'In his hand are all the corners of the earth : and the strength of the hills is his also.',
      'The sea is his, and he made it : and his hands prepared the dry land.',
      'O come, let us worship, and fall down : and kneel before the Lord our Maker.',
      'For he is the Lord our God : and we are the people of his pasture, and the sheep of his hand.',
      'To day if ye will hear his voice, harden not your hearts : as in the provocation, and as in the day of temptation in the wilderness;',
      'When your fathers tempted me : proved me, and saw my works.',
      'Forty years long was I grieved with this generation, and said : It is a people that do err in their hearts, for they have not known my ways.',
      'Unto whom I sware in my wrath : that they should not enter into my rest.',
      'Glory be to the Father, and to the Son : and to the Holy Ghost; As it was in the beginning, is now, and ever shall be : world without end. Amen.'
    )
  },
  teDeum: {
    title: 'Te Deum laudamus',
    content: p(
      'We praise thee, O God : we acknowledge thee to be the Lord.',
      'All the earth doth worship thee : the Father everlasting.',
      'To thee all Angels cry aloud : the heavens, and all the powers therein.',
      'To thee Cherubin and Seraphin : continually do cry, Holy, Holy, Holy : Lord God of Sabaoth; Heaven and earth are full of the Majesty : of thy glory.',
      'The glorious company of the Apostles : praise thee. The goodly fellowship of the Prophets : praise thee. The noble army of Martyrs : praise thee. The holy Church throughout all the world : doth acknowledge thee;',
      'The Father : of an infinite Majesty; Thine honourable, true : and only Son; Also the Holy Ghost : the Comforter.',
      'Thou art the King of Glory : O Christ. Thou art the everlasting Son : of the Father. When thou tookest upon thee to deliver man : thou didst not abhor the Virgin’s womb. When thou hadst overcome the sharpness of death : thou didst open the Kingdom of Heaven to all believers.',
      'Thou sittest at the right hand of God : in the glory of the Father. We believe that thou shalt come : to be our Judge. We therefore pray thee, help thy servants : whom thou hast redeemed with thy precious blood. Make them to be numbered with thy Saints : in glory everlasting.',
      'O Lord, save thy people : and bless thine heritage. Govern them : and lift them up for ever. Day by day : we magnify thee; And we worship thy Name : ever world without end.',
      'Vouchsafe, O Lord : to keep us this day without sin. O Lord, have mercy upon us : have mercy upon us. O Lord, let thy mercy lighten upon us : as our trust is in thee. O Lord, in thee have I trusted : let me never be confounded.'
    )
  },
  benedicite: {
    title: 'Benedicite, omnia opera',
    subtitle: 'Song of the Three Children',
    content: p(
      'O all ye Works of the Lord, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Angels of the Lord, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Heavens, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Waters that be above the Firmament, bless ye the Lord : praise him, and magnify him for ever.',
      'O all ye Powers of the Lord, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Sun and Moon, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Stars of Heaven, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Showers and Dew, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Winds of God, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Fire and Heat, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Winter and Summer, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Dews and Frosts, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Frost and Cold, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Ice and Snow, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Nights and Days, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Light and Darkness, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Lightnings and Clouds, bless ye the Lord : praise him, and magnify him for ever.',
      'O let the Earth bless the Lord : yea, let it praise him, and magnify him for ever.',
      'O ye Mountains and Hills, bless ye the Lord : praise him, and magnify him for ever.',
      'O all ye Green Things upon the Earth, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Wells, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Seas and Floods, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Whales, and all that move in the waters, bless ye the Lord : praise him, and magnify him for ever.',
      'O all ye Fowls of the Air, bless ye the Lord : praise him, and magnify him for ever.',
      'O all ye Beasts and Cattle, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Children of Men, bless ye the Lord : praise him, and magnify him for ever.',
      'O let Israel bless the Lord : praise him, and magnify him for ever.',
      'O ye Priests of the Lord, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Servants of the Lord, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye Spirits and Souls of the Righteous, bless ye the Lord : praise him, and magnify him for ever.',
      'O ye holy and humble Men of heart, bless ye the Lord : praise him, and magnify him for ever.',
      'O Ananias, Azarias, and Misael, bless ye the Lord : praise him, and magnify him for ever.',
      'Glory be to the Father, and to the Son : and to the Holy Ghost; As it was in the beginning, is now, and ever shall be : world without end. Amen.'
    )
  },
  benedictus: {
    title: 'Benedictus', subtitle: 'St Luke 1.68',
    content: p(
      'Blessed be the Lord God of Israel : for he hath visited, and redeemed his people; And hath raised up a mighty salvation for us : in the house of his servant David;',
      'As he spake by the mouth of his holy Prophets : which have been since the world began; That we should be saved from our enemies : and from the hands of all that hate us;',
      'To perform the mercy promised to our forefathers : and to remember his holy Covenant; To perform the oath which he sware to our forefather Abraham : that he would give us;',
      'That we being delivered out of the hand of our enemies : might serve him without fear; In holiness and righteousness before him : all the days of our life.',
      'And thou, Child, shalt be called the Prophet of the Highest : for thou shalt go before the face of the Lord to prepare his ways; To give knowledge of salvation unto his people : for the remission of their sins,',
      'Through the tender mercy of our God : whereby the day-spring from on high hath visited us; To give light to them that sit in darkness, and in the shadow of death : and to guide our feet into the way of peace.',
      'Glory be to the Father, and to the Son : and to the Holy Ghost; As it was in the beginning, is now, and ever shall be : world without end. Amen.'
    )
  },
  magnificat: {
    title: 'Magnificat', subtitle: 'St Luke 1.46',
    content: p(
      'My soul doth magnify the Lord : and my spirit hath rejoiced in God my Saviour. For he hath regarded : the lowliness of his hand-maiden. For behold, from henceforth : all generations shall call me blessed.',
      'For he that is mighty hath magnified me : and holy is his Name. And his mercy is on them that fear him : throughout all generations. He hath shewed strength with his arm : he hath scattered the proud in the imagination of their hearts.',
      'He hath put down the mighty from their seat : and hath exalted the humble and meek. He hath filled the hungry with good things : and the rich he hath sent empty away. He remembering his mercy hath holpen his servant Israel : as he promised to our forefathers, Abraham and his seed, for ever.',
      'Glory be to the Father, and to the Son : and to the Holy Ghost; As it was in the beginning, is now, and ever shall be : world without end. Amen.'
    )
  },
  nuncDimittis: {
    title: 'Nunc dimittis', subtitle: 'St Luke 2.29',
    content: p(
      'Lord, now lettest thou thy servant depart in peace : according to thy word. For mine eyes have seen : thy salvation, Which thou hast prepared : before the face of all people; To be a light to lighten the Gentiles : and to be the glory of thy people Israel.',
      'Glory be to the Father, and to the Son : and to the Holy Ghost; As it was in the beginning, is now, and ever shall be : world without end. Amen.'
    )
  },
  creed: {
    title: "The Apostles' Creed",
    content: p('I believe in God the Father Almighty, Maker of heaven and earth: And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried, He descended into hell; The third day he rose again from the dead, He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead. I believe in the Holy Ghost; The holy Catholick Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the Life everlasting. Amen.')
  },
  suffrages: {
    title: 'The Suffrages',
    content: lines(
      ['Minister', 'O Lord, shew thy mercy upon us.'], ['Answer', 'And grant us thy salvation.'],
      ['Minister', 'O Lord, save the King.'], ['Answer', 'And mercifully hear us when we call upon thee.'],
      ['Minister', 'Endue thy Ministers with righteousness.'], ['Answer', 'And make thy chosen people joyful.'],
      ['Minister', 'O Lord, save thy people.'], ['Answer', 'And bless thine inheritance.'],
      ['Minister', 'Give peace in our time, O Lord.'], ['Answer', 'Because there is none other that fighteth for us, but only thou, O God.'],
      ['Minister', 'O God, make clean our hearts within us.'], ['Answer', 'And take not thy Holy Spirit from us.']
    )
  },
  peaceMorning: {
    title: 'The Second Collect, for Peace',
    content: p('O God, who art the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom; Defend us thy humble servants in all assaults of our enemies; that we, surely trusting in thy defence, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.')
  },
  graceMorning: {
    title: 'The Third Collect, for Grace',
    content: p('O Lord, our heavenly Father, Almighty and everlasting God, who hast safely brought us to the beginning of this day; Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. Amen.')
  },
  peaceEvening: {
    title: 'The Second Collect, for Peace',
    content: p('O God, from whom all holy desires, all good counsels, and all just works do proceed; Give unto thy servants that peace which the world cannot give; that both our hearts may be set to obey thy commandments, and also that by thee we being defended from the fear of our enemies may pass our time in rest and quietness; through the merits of Jesus Christ our Saviour. Amen.')
  },
  perilsEvening: {
    title: 'The Third Collect, for Aid against all Perils',
    content: p('Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour, Jesus Christ. Amen.')
  },
  king: {
    title: 'A Prayer for the King’s Majesty',
    content: p('O Lord our heavenly Father, high and mighty, King of kings, Lord of lords, the only Ruler of princes, who dost from thy throne behold all the dwellers upon earth; Most heartily we beseech thee with thy favour to behold our most gracious Sovereign Lord, King Charles; and so replenish him with the grace of thy Holy Spirit, that he may alway incline to thy will, and walk in thy way: Endue him plenteously with heavenly gifts; grant him in health and wealth long to live; strengthen him that he may vanquish and overcome all his enemies; and finally after this life he may attain everlasting joy and felicity; through Jesus Christ our Lord. Amen.')
  },
  royalFamily: {
    title: 'A Prayer for the Royal Family',
    content: p('Almighty God, the fountain of all goodness, we humbly beseech thee to bless Queen Camilla, William Prince of Wales, the Princess of Wales, and all the Royal Family: Endue them with thy Holy Spirit; enrich them with thy heavenly grace; prosper them with all happiness; and bring them to thine everlasting kingdom; through Jesus Christ our Lord. Amen.')
  },
  clergyPeople: {
    title: 'A Prayer for the Clergy and People',
    content: p('Almighty and everlasting God, who alone workest great marvels; Send down upon our Bishops, and Curates, and all Congregations committed to their charge, the healthful Spirit of thy grace; and that they may truly please thee, pour upon them the continual dew of thy blessing. Grant this, O Lord, for the honour of our Advocate and Mediator, Jesus Christ. Amen.')
  },
  chrysostom: {
    title: 'A Prayer of Saint Chrysostom',
    content: p('Almighty God, who hast given us grace at this time with one accord to make our common supplications unto thee; and dost promise, that when two or three are gathered together in thy Name thou wilt grant their requests: Fulfil now, O Lord, the desires and petitions of thy servants, as may be most expedient for them; granting us in this world knowledge of thy truth, and in the world to come life everlasting. Amen.')
  },
  grace: {
    title: 'The Grace',
    content: p('The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. Amen.')
  }
};

export function morningItems(psalms, lessons) {
  return [
    { kind:'fixed', id:'exhortation' }, { kind:'fixed', id:'confession' }, { kind:'fixed', id:'absolution' },
    { kind:'fixed', id:'lordsPrayer' }, { kind:'fixed', id:'preces' }, { kind:'fixed', id:'venite' },
    { kind:'psalms', title:'The Psalms', value: psalms.join(', ') },
    { kind:'lesson', title:'The First Lesson', value:lessons.first },
    { kind:'choice', title:'First Canticle', options:['teDeum','benedicite'] },
    { kind:'lesson', title:'The Second Lesson', value:lessons.second },
    { kind:'fixed', id:'benedictus' }, { kind:'fixed', id:'creed' }, { kind:'fixed', id:'lordsPrayer' },
    { kind:'fixed', id:'suffrages' }, { kind:'collect', title:'The Collect of the Day' },
    { kind:'fixed', id:'peaceMorning' }, { kind:'fixed', id:'graceMorning' }, { kind:'fixed', id:'king' },
    { kind:'fixed', id:'royalFamily' }, { kind:'fixed', id:'clergyPeople' }, { kind:'fixed', id:'chrysostom' }, { kind:'fixed', id:'grace' }
  ];
}

export function eveningItems(psalms, lessons) {
  return [
    { kind:'fixed', id:'exhortation' }, { kind:'fixed', id:'confession' }, { kind:'fixed', id:'absolution' },
    { kind:'fixed', id:'lordsPrayer' }, { kind:'fixed', id:'preces' },
    { kind:'psalms', title:'The Psalms', value: psalms.join(', ') },
    { kind:'lesson', title:'The First Lesson', value:lessons.first }, { kind:'fixed', id:'magnificat' },
    { kind:'lesson', title:'The Second Lesson', value:lessons.second }, { kind:'fixed', id:'nuncDimittis' },
    { kind:'fixed', id:'creed' }, { kind:'fixed', id:'lordsPrayer' }, { kind:'fixed', id:'suffrages' },
    { kind:'collect', title:'The Collect of the Day' }, { kind:'fixed', id:'peaceEvening' }, { kind:'fixed', id:'perilsEvening' },
    { kind:'fixed', id:'king' }, { kind:'fixed', id:'royalFamily' }, { kind:'fixed', id:'clergyPeople' },
    { kind:'fixed', id:'chrysostom' }, { kind:'fixed', id:'grace' }
  ];
}
