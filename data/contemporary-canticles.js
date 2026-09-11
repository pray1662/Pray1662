const p = (...paras) => paras.map(text => ({ type:'p', text }));

// Contemporary-language canticles transcribed from the supplied photographs
// of An English Prayer Book (Church Society, 1994), pp. 28–35.
// Psalm 95 / Venite is not included here because the supplied photographs do
// not contain its complete text. Pray1662 therefore retains the 1662 Venite.
export const contemporaryCanticles = {
  teDeum: {
    title:'Te Deum',
    content:p(
      'You are God: and we praise you; you are the Lord and we acclaim you; you are the eternal Father: all creation worships you.',
      'To you all angels, all the powers of heaven, cherubim and seraphim, sing in endless praise,',
      'Holy, holy, holy, Lord God of power and might: heaven and earth are full of your glory.',
      'The glorious company of apostles praise you: the noble fellowship of prophets praise you: the white-robed army of martyrs praise you.',
      'Throughout the world the holy church acclaims you: Father of majesty unbounded;',
      'your true and only Son, worthy of all worship: and the Holy Spirit, advocate and guide.',
      'You, Christ, are the King of glory: the eternal Son of the Father.',
      'When you became man to set us free: you did not abhor the Virgin’s womb.',
      'You overcame the sting of death: and opened the kingdom of heaven to all believers.',
      'You are seated at God’s right hand in glory: we believe that you will come and be our judge.',
      'Come then, Lord, and help your people: bought with the price of your own blood: and bring us with your saints to glory everlasting.',
      'Save your people Lord and bless your inheritance: govern and uphold them now and always.',
      'Day by day we bless you: we praise your name for ever.',
      'Keep us today Lord from all sin: have mercy on us, Lord have mercy.',
      'Lord, show us your love and mercy: for we put our trust in you.',
      'In you Lord is our hope: let us not be confounded at the last.'
    )
  },
  benedicite: {
    title:'A Song of Creation',
    subtitle:'Benedicite',
    content:p(
      'Bless the Lord all created things; sing his praise and exalt him for ever.',
      'Bless the Lord you heavens; sing his praise and exalt him for ever.',
      'Bless the Lord you angels of the Lord; bless the Lord all you his hosts; sing his praise and exalt him for ever.',
      'Bless the Lord you waters above the heavens; sing his praise and exalt him for ever.',
      'Bless the Lord sun and moon; bless the Lord you stars of heaven; sing his praise and exalt him for ever.',
      'Bless the Lord all rain and dew; bless the Lord all winds that blow; sing his praise and exalt him for ever.',
      'Bless the Lord fire and heat; bless the Lord scorching wind and bitter cold; sing his praise and exalt him for ever.',
      'Bless the Lord dews and falling snows; bless the Lord nights and days; sing his praise and exalt him for ever.',
      'Bless the Lord light and darkness; sing his praise and exalt him for ever.',
      'Bless the Lord frost and cold; bless the Lord you ice and snow; sing his praise and exalt him for ever.',
      'Bless the Lord lightnings and clouds; sing his praise and exalt him for ever.',
      'O let the earth bless the Lord; bless the Lord you mountains and hills;',
      'Bless the Lord all that grows in the ground; sing his praise and exalt him for ever.',
      'Bless the Lord you springs; bless the Lord seas and rivers;',
      'Bless the Lord you whales and all that swim in the waters; sing his praise and exalt him for ever.',
      'Bless the Lord all birds of the air; bless the Lord you beasts and cattle;',
      'Bless the Lord all men on the earth; sing his praise and exalt him for ever.',
      'O people of God bless the Lord; bless the Lord you priests of the Lord;',
      'Bless the Lord you servants of the Lord; sing his praise and exalt him for ever.',
      'Bless the Lord all men of upright spirit; bless the Lord you that are holy and humble in heart.',
      'Bless the Father the Son and the Holy Spirit; sing his praise and exalt him for ever.'
    )
  },
  benedictus: {
    title:'Song of Zechariah',
    subtitle:'Benedictus · Luke 1.68–79',
    content:p(
      'Praise be to the Lord the God of Israel, because he has come and has redeemed his people.',
      'He has raised up a horn of salvation for us in the house of his servant David, as he said through his holy prophets of long ago, salvation from our enemies and from the hand of all who hate us —',
      'to show mercy to our fathers and to remember his holy covenant, the oath he swore to our father Abraham: to rescue us from the hand of our enemies, and to enable us to serve him without fear in holiness and righteousness before him all our days.',
      'And you, my child, will be called a prophet of the Most High; for you will go on before the Lord to prepare the way for him, to give his people the knowledge of salvation through the forgiveness of their sins,',
      'because of the tender mercy of our God, by which the rising sun will come to us from heaven to shine on those living in darkness and in the shadow of death, to guide our feet into the path of peace.'
    )
  },
  magnificat: {
    title:'Song of Mary',
    subtitle:'Magnificat · Luke 1.46–55',
    content:p(
      'My soul glorifies the Lord and my spirit rejoices in God my Saviour,',
      'for he has been mindful of the humble state of his servant. From now on all generations will call me blessed,',
      'for the Mighty One has done great things for me — holy is his name.',
      'His mercy extends to those who fear him, from generation to generation.',
      'He has performed mighty deeds with his arm; he has scattered those who are proud in their inmost thoughts.',
      'He has brought down rulers from their thrones but has lifted up the humble.',
      'He has filled the hungry with good things but has sent the rich away empty.',
      'He has helped his servant Israel, remembering to be merciful to Abraham and his descendants for ever, even as he said to our fathers.'
    )
  },
  nuncDimittis: {
    title:'Song of Simeon',
    subtitle:'Nunc dimittis · Luke 2.29–32',
    content:p(
      'Sovereign Lord, as you have promised, you now dismiss your servant in peace.',
      'For my eyes have seen your salvation, which you have prepared in the sight of all people,',
      'a light for revelation to the Gentiles and for glory to your people Israel.'
    )
  }
};
