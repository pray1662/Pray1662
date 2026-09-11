const p = (...paras) => paras.map(text => ({ type: 'p', text }));
const lines = (...items) => items.map(([speaker, text]) => ({ type: 'line', speaker, text }));

// Contemporary-language Office prayers. These preserve the shape and doctrine
// of the 1662 Office while using modern English. Canticles are deliberately
// left in the existing Prayer Book text until the authorised AEPB canticle
// source is imported as a complete dataset.
export const contemporaryFixed = {
  exhortation: {
    title: 'The Exhortation',
    rubric: 'The minister may say:',
    content: p(
      'Dearly beloved, Scripture urges us in many places to acknowledge and confess our many sins and wickedness. We should not hide them from Almighty God our heavenly Father, but confess them with humble, penitent and obedient hearts, so that through his infinite goodness and mercy we may receive forgiveness.',
      'We ought at all times humbly to acknowledge our sins before God, but especially when we gather together to give thanks for the great blessings we have received from him, to offer him the praise that is his due, to hear his holy Word, and to ask for those things that are necessary for body and soul.',
      'Therefore I ask all who are present to join me, with sincere hearts and humble voices, as we come before the throne of heavenly grace.'
    )
  },
  confession: {
    title: 'A General Confession',
    rubric: 'To be said by all.',
    content: p(
      'Almighty and most merciful Father, we have erred and strayed from your ways like lost sheep. We have followed too much the desires and devices of our own hearts. We have broken your holy laws. We have left undone those things which we ought to have done, and we have done those things which we ought not to have done.',
      'But you, O Lord, have mercy on us. Spare those who confess their faults. Restore those who truly repent, according to your promises declared to us in Jesus Christ our Lord. And grant, most merciful Father, for his sake, that from now on we may live godly, righteous and disciplined lives, to the glory of your holy name. Amen.'
    )
  },
  absolution: {
    title: 'God’s Forgiveness',
    rubric: 'The minister declares God’s forgiveness.',
    content: p(
      'Almighty God, the Father of our Lord Jesus Christ, does not desire the death of sinners, but rather that they should turn from their wickedness and live. He has given authority to his ministers to declare to his people, when they repent, the forgiveness of their sins.',
      'God pardons and forgives all who truly repent and sincerely believe his holy gospel. Therefore let us ask him to grant us true repentance and his Holy Spirit, so that what we do now may please him, that the rest of our lives may be pure and holy, and that at the last we may come to his eternal joy; through Jesus Christ our Lord. Amen.'
    )
  },
  lordsPrayer: {
    title: "The Lord's Prayer",
    content: p('Our Father in heaven, hallowed be your name; your kingdom come; your will be done, on earth as it is in heaven. Give us today our daily bread. Forgive us our sins, as we forgive those who sin against us. Lead us not into temptation, but deliver us from evil. For yours is the kingdom, the power and the glory, now and for ever. Amen.')
  },
  preces: {
    title: 'The Preces',
    content: lines(
      ['Minister', 'O Lord, open our lips.'], ['Answer', 'And our mouths shall declare your praise.'],
      ['Minister', 'O God, make speed to save us.'], ['Answer', 'O Lord, make haste to help us.'],
      ['All', 'Glory be to the Father, and to the Son, and to the Holy Spirit; as it was in the beginning, is now, and shall be for ever. Amen.'],
      ['Minister', 'Let us praise the Lord.'], ['Answer', "The Lord's name be praised."]
    )
  },
  creed: {
    title: "The Apostles' Creed",
    content: p('I believe in God, the Father Almighty, Creator of heaven and earth. I believe in Jesus Christ, his only Son our Lord. He was conceived by the Holy Spirit and born of the virgin Mary. He suffered under Pontius Pilate, was crucified, died, and was buried. He descended to the dead. On the third day he rose again. He ascended into heaven, and sits at the right hand of the Father. From there he shall come again to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.')
  },
  suffrages: {
    title: 'The Suffrages',
    content: lines(
      ['Minister', 'O Lord, show us your mercy.'], ['Answer', 'And grant us your salvation.'],
      ['Minister', 'O Lord, save the King.'], ['Answer', 'And mercifully hear us when we pray to you.'],
      ['Minister', 'Endow your ministers with righteousness.'], ['Answer', 'And make your chosen people joyful.'],
      ['Minister', 'O Lord, save your people.'], ['Answer', 'And bless your inheritance.'],
      ['Minister', 'Give peace in our time, O Lord.'], ['Answer', 'For you are our help and strength.'],
      ['Minister', 'O God, cleanse our hearts.'], ['Answer', 'And renew us by your Holy Spirit.']
    )
  },
  peaceMorning: {
    title: 'A Prayer for Peace',
    content: p('O God, the author and lover of peace, to know you is eternal life and to serve you is perfect freedom. Defend us, your humble servants, against all assaults of our enemies, so that, trusting in your defence, we may not fear the power of any adversary; through the might of Jesus Christ our Lord. Amen.')
  },
  graceMorning: {
    title: 'A Prayer for Grace',
    content: p('O Lord our heavenly Father, almighty and everlasting God, we praise you for bringing us safely to the beginning of this day. Defend us with your mighty power, and grant that we fall into no sin nor run into any kind of danger, but govern and guide us at all times, so that we may do what is right in your sight; through Jesus Christ our Lord. Amen.')
  },
  peaceEvening: {
    title: 'A Prayer for Peace',
    content: p('O God, the author of all holy desires, all good purposes and all just works, give to us your servants that peace which the world cannot give, so that we, obeying your commands and being delivered from the fear of our enemies, may live in rest and quietness; through the merits of Jesus Christ our Saviour. Amen.')
  },
  perilsEvening: {
    title: 'A Prayer for Aid',
    content: p('Lighten our darkness, Lord, and by your great mercy defend us from every peril and danger of this night; for the love of your only Son, our Saviour Jesus Christ. Amen.')
  },
  king: {
    title: 'A Prayer for the King',
    content: p('O Lord our heavenly Father, high and mighty, King of kings and Lord of lords, you look down from your throne on all who dwell on earth. We ask you to look favourably on our Sovereign Lord, King Charles. Fill him with your Holy Spirit so that he may love your law and walk in your way. Give him health and strength, and grant that after this life he may enjoy everlasting happiness in your eternal kingdom; through Jesus Christ our Lord. Amen.')
  },
  royalFamily: {
    title: 'A Prayer for the Royal Family',
    content: p('Almighty God, the fountain of all goodness, we humbly ask you to bless Queen Camilla, William Prince of Wales, the Princess of Wales, and all the Royal Family. Fill them with your Holy Spirit, enrich them with your heavenly grace, prosper them with all happiness, and bring them to your eternal kingdom; through Jesus Christ our Lord. Amen.')
  },
  clergyPeople: {
    title: 'A Prayer for the Church and People',
    content: p('Almighty and eternal God, you alone work great wonders. Send down your Holy Spirit on all bishops and pastors and the congregations they serve. And, so that we may all truly please you, pour on us the continual dew of your blessing. Grant this, O Lord, for the honour of our advocate and mediator, Jesus Christ. Amen.')
  },
  chrysostom: {
    title: 'A Prayer of Saint Chrysostom',
    content: p('Almighty God, you have given us grace at this time to bring before you our common prayers, and have promised that when two or three are gathered together in your name you will grant their requests. Fulfil now, O Lord, the desires and petitions of your servants in ways that are best for us, granting us in this world knowledge of your truth, and in the world to come life everlasting. Amen.')
  },
  grace: {
    title: 'The Grace',
    content: p('The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore. Amen.')
  }
};

const replacements = [
  [/\bworld without end\b/gi, 'for ever and ever'],
  [/\bthe quick and the dead\b/gi, 'the living and the dead'],
  [/\bquick and dead\b/gi, 'living and dead'],
  [/\bHoly Ghost\b/g, 'Holy Spirit'],
  [/\bwe beseech thee\b/gi, 'we ask you'],
  [/\bbeseech thee\b/gi, 'ask you'],
  [/\bthou\b/gi, 'you'],
  [/\bthee\b/gi, 'you'],
  [/\bthy\b/gi, 'your'],
  [/\bthine\b/gi, 'your'],
  [/\bye\b/gi, 'you'],
  [/\bunto\b/gi, 'to'],
  [/\bhath\b/gi, 'has'],
  [/\bdoth\b/gi, 'does'],
  [/\bdidst\b/gi, 'did'],
  [/\bdost\b/gi, 'do'],
  [/\bhast\b/gi, 'have'],
  [/\bart\b/gi, 'are'],
  [/\bcanst\b/gi, 'can'],
  [/\bwouldest\b/gi, 'would'],
  [/\bshouldest\b/gi, 'should'],
  [/\bmayest\b/gi, 'may'],
  [/\bliveth\b/gi, 'lives'],
  [/\breigneth\b/gi, 'reigns'],
  [/\blivest\b/gi, 'live'],
  [/\breignest\b/gi, 'reign'],
  [/\bknowest\b/gi, 'know'],
  [/\bseest\b/gi, 'see'],
  [/\bdeclarest\b/gi, 'declare'],
  [/\bshewest\b/gi, 'show'],
  [/\bshew\b/gi, 'show'],
  [/\bworkest\b/gi, 'work'],
  [/\bgovernest\b/gi, 'govern'],
  [/\bfailest\b/gi, 'fail'],
  [/\bordereth\b/gi, 'orders'],
  [/\bstandest\b/gi, 'stand'],
  [/\balway\b/gi, 'always'],
  [/\bevermore\b/gi, 'always'],
  [/\bstedfast\b/gi, 'steadfast'],
  [/\bhoushold\b/gi, 'household'],
  [/\bsuccour\b/gi, 'help'],
  [/\bcharity\b/gi, 'love'],
  [/\bensample\b/gi, 'example'],
  [/\beschew\b/gi, 'reject'],
  [/\bwhereof\b/gi, 'of which'],
  [/\bwherein\b/gi, 'in which'],
  [/\bthereof\b/gi, 'of it'],
  [/\btherein\b/gi, 'in it']
];

export function moderniseCollectText(text='') {
  let result = String(text);
  for (const [pattern, replacement] of replacements) result = result.replace(pattern, replacement);
  result = result
    .replace(/\bwho have\b/g, 'who has')
    .replace(/\bwho do\b/g, 'who does')
    .replace(/\bwho live and reign\b/g, 'who lives and reigns')
    .replace(/\bGrant, we ask you,\b/g, 'Grant, we pray,')
    .replace(/\bWe ask you, Almighty God,\b/g, 'Almighty God, we ask you,')
    .replace(/\bO Lord, we ask you\b/g, 'O Lord, we pray')
    .replace(/\bO God, who are\b/g, 'O God, you are')
    .replace(/\bO Lord, who are\b/g, 'O Lord, you are')
    .replace(/\bAlmighty God, who are\b/g, 'Almighty God, you are')
    .replace(/\bprevent and follow us\b/gi, 'go before us and follow us')
    .replace(/\bpass man’s understanding\b/gi, 'surpass human understanding')
    .replace(/\bpass man's understanding\b/gi, 'surpass human understanding')
    .replace(/\bsundry and manifold\b/gi, 'many and varied')
    .replace(/\binestimable\b/gi, 'immeasurable')
    .replace(/\blet and hindered\b/gi, 'hindered')
    .replace(/\bgodly motions\b/gi, 'holy promptings');
  return result;
}
