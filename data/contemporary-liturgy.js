const p = (...paras) => paras.map(text => ({ type: 'p', text }));
const lines = (...items) => items.map(([speaker, text]) => ({ type: 'line', speaker, text }));

// Contemporary-language text transcribed from the supplied photographs of
// An English Prayer Book (Church Society, 1994), pp. 17–24 and 39–46.
// Where the printed book names Queen Elizabeth, Pray1662 updates the monarch
// reference for the present reign while retaining the prayer's wording.
// Canticles and collects are not included here unless an exact supplied source
// is available; the app therefore falls back to the 1662 text for those items.
export const contemporaryFixed = {
  exhortation: {
    title: 'Words of Exhortation',
    rubric: 'The minister reads one or more Scripture sentences and then says these words of exhortation.',
    content: p(
      'The Bible encourages us repeatedly to acknowledge and confess our many sins and evil ways and that we should not try to hide them from Almighty God our heavenly Father. We are to confess them with a humble, lowly, penitent, and obedient heart so that we may receive forgiveness through God’s infinite goodness and mercy.',
      'We should humbly admit our sins to God at all times, but especially when we come together to give thanks for the blessings we have received from him, to offer the praise that is his due, to hear his most holy Word, to ask him to supply all our needs, and to pray for others as well as ourselves.',
      'Let us then with a pure heart and humble voice approach our Father’s throne of grace, and pray together:'
    )
  },
  confession: {
    title: 'Confession',
    content: p(
      'Almighty and most merciful Father, we have erred and strayed from your ways like lost sheep. We have followed too much the devices and desires of our own hearts. We have broken your holy laws. We have left undone what we ought to have done, and we have done what we ought not to have done. O Lord, have mercy on us pitiful sinners. Spare those, O God, who confess their faults. Restore those who truly repent, as you have promised through Jesus Christ our Lord. And grant, O merciful Father, for his sake, that we may live a godly, righteous, and disciplined life, to the praise of your holy name. Amen.'
    )
  },
  absolution: {
    title: 'God’s Forgiveness',
    rubric: 'The minister declares God’s forgiveness, saying:',
    content: p(
      'Almighty God, the Father of our Lord Jesus Christ, does not desire the death of sinners but rather that they should turn from their wickedness and live. He has commanded his ministers to assure those who truly repent and believe his holy gospel that he forgives them their sins. God pardons and forgives all who truly repent and sincerely believe his holy gospel. Therefore let us beseech him to grant us true repentance and his Holy Spirit, so that what we do now may please him; that the rest of our lives may be pure and holy; and that at the last we may come to his eternal joy; through Jesus Christ our Lord. Amen.'
    )
  },
  lordsPrayer: {
    title: "The Lord's Prayer",
    content: p(
      'Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. Forgive us our sins, as we forgive those who sin against us. Lead us not into temptation but deliver us from evil. For yours is the kingdom, the power, and the glory, now and for ever. Amen.'
    )
  },
  preces: {
    title: 'Responses',
    content: lines(
      ['Minister', 'Open our lips, O Lord:'],
      ['People', 'And we shall declare your praise.'],
      ['Minister', 'O God, make speed to save us.'],
      ['People', 'O Lord, make haste to help us.'],
      ['Minister', 'Glory be to the Father, and to the Son, and to the Holy Spirit:'],
      ['People', 'as it was in the beginning, is now, and shall be for ever. Amen.'],
      ['Minister', 'Let us praise the Lord.'],
      ['People', 'The Lord’s name be praised.']
    )
  },
  creed: {
    title: "The Apostles' Creed",
    content: p(
      'I believe in God, the Father Almighty, Creator of heaven and earth.',
      'I believe in Jesus Christ, his only Son, our Lord. He was conceived by the Holy Spirit and born of the virgin Mary. He suffered under Pontius Pilate, was crucified, died, and was buried. He descended to the dead. On the third day he rose again. He ascended into heaven, and sits at the right hand of the Father. From there he shall come again to judge the living and the dead.',
      'I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.'
    )
  },
  suffrages: {
    title: 'The Responses',
    content: lines(
      ['Minister', 'The Lord be with you.'],
      ['People', 'And with your spirit.'],
      ['Minister', 'Let us pray.'],
      ['Minister', 'O Lord, show us your mercy;'],
      ['People', 'and grant us your salvation.'],
      ['Minister', 'O Lord, save the King;'],
      ['People', 'and mercifully hear us when we pray to you.'],
      ['Minister', 'Endow your ministers with righteousness;'],
      ['People', 'and make your chosen people joyful.'],
      ['Minister', 'O Lord, save your people;'],
      ['People', 'and bless your inheritance.'],
      ['Minister', 'Give peace in our time, O Lord;'],
      ['People', 'for you are our help and strength.'],
      ['Minister', 'O God, cleanse our hearts;'],
      ['People', 'and revive us by your Holy Spirit.']
    )
  },
  peaceMorning: {
    title: 'A Prayer for Peace',
    content: p(
      'O God, the author and lover of peace, whom to know is eternal life and to serve is perfect freedom: defend us your humble servants against all assaults of our enemies, that, trusting in your defence, we may not fear the power of any adversary; through the might of Jesus Christ our Lord. Amen.'
    )
  },
  graceMorning: {
    title: 'A Morning Prayer',
    content: p(
      'O Lord our heavenly Father, Almighty and everlasting God, we praise you for bringing us safely to the beginning of this day: defend us with your almighty power, and grant that we fall into no sin, nor run into any kind of danger; but govern and guide us at all times, so that we may do what is right in your sight; through Jesus Christ our Lord. Amen.'
    )
  },
  peaceEvening: {
    title: 'An Evening Prayer',
    content: p(
      'O God, the author of all holy desires, all good purposes, and all just works: give to us your servants that peace which the world cannot give; so that we, obeying your commands, and being delivered from the fear of our enemies, may live in rest and quietness; through the merits of Jesus Christ our Saviour. Amen.'
    )
  },
  perilsEvening: {
    title: 'An Evening Prayer',
    content: p(
      'Lighten our darkness, Lord: and by your great mercy defend us from all peril and danger this night; for the love of your only Son our Saviour Jesus Christ. Amen.'
    )
  },
  king: {
    title: 'The Monarch',
    content: p(
      'O Lord our heavenly Father, high and mighty, King of kings, Lord of lords, the only ruler of princes, you look down from your throne on all who dwell on earth: we ask you most earnestly to look favourably on our sovereign lord, King Charles. Fill him with your Holy Spirit so that he may love your law and walk in your way. Give him health and strength; and grant that after this life he may enjoy everlasting happiness in your eternal kingdom; through Jesus Christ our Lord. Amen.'
    )
  },
  royalFamily: {
    title: 'The Royal Family',
    content: p(
      'Almighty God, the fountain of all goodness: we humbly ask you to bless all the members of the royal family. Fill them with your Holy Spirit; enrich them with your heavenly grace; prosper them with all happiness; and bring them to your eternal kingdom; through Jesus Christ our Lord. Amen.'
    )
  },
  clergyPeople: {
    title: 'God’s Church and People',
    content: p(
      'Almighty and eternal God, you alone work great marvels: send down your Holy Spirit on all bishops and pastors and the congregations they serve. And, so that we may all truly please you, pour on us the continual dew of your blessing. Grant this, O Lord, for the honour of our advocate and mediator, Jesus Christ. Amen.'
    )
  },
  chrysostom: {
    title: 'A Prayer from the Liturgy of John Chrysostom',
    content: p(
      'Almighty God, you have given us grace at this time to bring before you our common supplications and have promised that when two or three are gathered together in your name you will grant their requests. Fulfil now, O Lord, the desires and petitions of your servants in ways most suitable for us, granting us in this world knowledge of your truth and in the world to come life everlasting. Amen.'
    )
  },
  grace: {
    title: 'The Grace',
    content: p(
      'The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore. Amen.'
    )
  }
};
