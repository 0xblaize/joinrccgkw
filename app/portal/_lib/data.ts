// Static mock content for the Kings World member portal.
// In a real build these would come from a CMS / API. Kept as plain data here.

export type Hymn = {
  id: number;
  number: number;
  title: string;
  author?: string;
  verses: string[]; // each string is one verse / chorus block
};

export type Sermon = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  thumbnail: string;
};

export type ChurchEvent = {
  id: string;
  title: string;
  // 0 = Sunday ... 6 = Saturday
  day: number;
  date?: string; // "Sat 18" style for the widget
  time: string;
  location: string;
};

export type Department = {
  id: string;
  name: string;
  blurb: string;
  needs: string;
};

export type LifeGroup = {
  id: string;
  name: string;
  host: string;
  area: string;
  day: string;
  time: string;
};

export type GivingCategory = {
  id: string;
  name: string;
  scripture: string;
  blurb: string;
};

export const VERSES_OF_THE_DAY: { text: string; ref: string }[] = [
  {
    text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.",
    ref: "Numbers 6:24-25",
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    ref: "Philippians 4:13",
  },
  {
    text: "This is the day the Lord has made; let us rejoice and be glad in it.",
    ref: "Psalm 118:24",
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding.",
    ref: "Proverbs 3:5",
  },
  {
    text: "But those who hope in the Lord will renew their strength.",
    ref: "Isaiah 40:31",
  },
  {
    text: "And we know that in all things God works for the good of those who love him.",
    ref: "Romans 8:28",
  },
  {
    text: "The Lord is my shepherd, I lack nothing.",
    ref: "Psalm 23:1",
  },
];

// Deterministic pick so the same day shows the same verse (no Math.random needed).
export function verseOfTheDay(date: Date) {
  const dayIndex = Math.floor(date.getTime() / 86400000);
  return VERSES_OF_THE_DAY[dayIndex % VERSES_OF_THE_DAY.length];
}

export const LATEST_SERMON: Sermon = {
  id: "the-weight-of-the-crown",
  title: "The Weight of the Crown",
  speaker: "Pastor in Charge",
  date: "Last Sunday",
  duration: "48 min",
  thumbnail:
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=70",
};

export const EVENTS: ChurchEvent[] = [
  {
    id: "workers-meeting",
    title: "Workers Meeting",
    day: 6,
    date: "Sat",
    time: "8:00 AM",
    location: "Main Auditorium",
  },
  {
    id: "night-of-worship",
    title: "Night of Worship",
    day: 5,
    date: "Fri",
    time: "10:00 PM",
    location: "Main Auditorium",
  },
  {
    id: "bible-study",
    title: "Mid-Week Bible Study",
    day: 3,
    date: "Wed",
    time: "6:30 PM",
    location: "Main Auditorium",
  },
  {
    id: "sunday-service",
    title: "Sunday Service",
    day: 0,
    date: "Sun",
    time: "9:00 AM",
    location: "Main Auditorium",
  },
  {
    id: "prayer-night",
    title: "Prayer Night",
    day: 5,
    date: "Fri",
    time: "10:00 PM",
    location: "Prayer Hall",
  },
];

export const DEPARTMENTS: Department[] = [
  { id: "choir", name: "Choir", blurb: "Lead the congregation in worship and praise.", needs: "Vocalists, instrumentalists" },
  { id: "media", name: "Media", blurb: "Sound, streaming, photography and design.", needs: "Camera, editing, sound" },
  { id: "ushers", name: "Ushers", blurb: "Welcome members and keep order during service.", needs: "Warm, dependable people" },
  { id: "kings-kids", name: "Kings Kids", blurb: "Teach and care for children aged 2 to 12.", needs: "Teachers, helpers" },
  { id: "protocol", name: "Protocol", blurb: "Care for guests, ministers and visitors.", needs: "Attentive volunteers" },
  { id: "sanctuary", name: "Sanctuary Keepers", blurb: "Keep the house of God clean and ready.", needs: "Willing hands" },
];

export const LIFE_GROUPS: LifeGroup[] = [
  { id: "lg-mayfair", name: "Mayfair Fellowship", host: "Bro. & Sis. Adeyemi", area: "Mayfair, Ile-Ife", day: "Thursday", time: "6:00 PM" },
  { id: "lg-eleyele", name: "Eleyele House", host: "Deacon Okon", area: "Eleyele, Ile-Ife", day: "Wednesday", time: "6:30 PM" },
  { id: "lg-oau", name: "OAU Campus Group", host: "Sis. Grace", area: "OAU Campus", day: "Friday", time: "5:00 PM" },
  { id: "lg-modakeke", name: "Modakeke Cell", host: "Bro. Tunde", area: "Modakeke", day: "Tuesday", time: "6:00 PM" },
  { id: "lg-lagere", name: "Lagere Group", host: "Sis. Bisi", area: "Lagere, Ile-Ife", day: "Thursday", time: "6:00 PM" },
];

export const GIVING_CATEGORIES: GivingCategory[] = [
  { id: "tithe", name: "Tithe", scripture: "Malachi 3:10", blurb: "Return the first tenth to the storehouse." },
  { id: "offering", name: "Offering", scripture: "2 Corinthians 9:7", blurb: "General weekly thanksgiving offering." },
  { id: "building", name: "Church Building Project", scripture: "1 Chronicles 29:5", blurb: "For our physical expansion in Ile-Ife." },
  { id: "seed", name: "Prophetic Seed / Special", scripture: "2 Chronicles 20:20", blurb: "For specific pastoral or prophetic calls." },
];

export const AMOUNT_PRESETS = [1000, 5000, 10000, 25000, 50000];

export const BANK_DETAILS = {
  bankName: "Guaranty Trust Bank (GTBank)",
  accountName: "RCCG Kings World, Ile-Ife",
  accountNumber: "0123456789",
  reference: "Use your full name + giving type as reference",
};

export const HYMNS: Hymn[] = [
  {
    id: 1,
    number: 1,
    title: "Amazing Grace",
    author: "John Newton",
    verses: [
      "Amazing grace! how sweet the sound,\nThat saved a wretch like me!\nI once was lost, but now am found,\nWas blind, but now I see.",
      "'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!",
      "Through many dangers, toils and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home.",
      "When we've been there ten thousand years,\nBright shining as the sun,\nWe've no less days to sing God's praise\nThan when we'd first begun.",
    ],
  },
  {
    id: 2,
    number: 2,
    title: "How Great Thou Art",
    author: "Carl Boberg",
    verses: [
      "O Lord my God, when I in awesome wonder\nConsider all the worlds thy hands have made,\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.",
      "Then sings my soul, my Saviour God, to thee,\nHow great thou art, how great thou art!\nThen sings my soul, my Saviour God, to thee,\nHow great thou art, how great thou art!",
      "And when I think that God, his Son not sparing,\nSent him to die, I scarce can take it in,\nThat on the cross, my burden gladly bearing,\nHe bled and died to take away my sin.",
    ],
  },
  {
    id: 3,
    number: 3,
    title: "Great Is Thy Faithfulness",
    author: "Thomas Chisholm",
    verses: [
      "Great is thy faithfulness, O God my Father,\nThere is no shadow of turning with thee;\nThou changest not, thy compassions, they fail not;\nAs thou hast been thou forever wilt be.",
      "Great is thy faithfulness! Great is thy faithfulness!\nMorning by morning new mercies I see;\nAll I have needed thy hand hath provided;\nGreat is thy faithfulness, Lord, unto me!",
    ],
  },
  {
    id: 4,
    number: 4,
    title: "Blessed Assurance",
    author: "Fanny Crosby",
    verses: [
      "Blessed assurance, Jesus is mine!\nO what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of his Spirit, washed in his blood.",
      "This is my story, this is my song,\nPraising my Saviour all the day long;\nThis is my story, this is my song,\nPraising my Saviour all the day long.",
    ],
  },
  {
    id: 5,
    number: 5,
    title: "It Is Well With My Soul",
    author: "Horatio Spafford",
    verses: [
      "When peace like a river attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, thou hast taught me to say,\nIt is well, it is well with my soul.",
      "It is well with my soul,\nIt is well, it is well with my soul.",
    ],
  },
  {
    id: 6,
    number: 6,
    title: "To God Be the Glory",
    author: "Fanny Crosby",
    verses: [
      "To God be the glory, great things he hath done!\nSo loved he the world that he gave us his Son,\nWho yielded his life an atonement for sin,\nAnd opened the life-gate that all may go in.",
      "Praise the Lord, praise the Lord,\nLet the earth hear his voice!\nPraise the Lord, praise the Lord,\nLet the people rejoice!",
    ],
  },
  {
    id: 7,
    number: 7,
    title: "What a Friend We Have in Jesus",
    author: "Joseph Scriven",
    verses: [
      "What a friend we have in Jesus,\nAll our sins and griefs to bear!\nWhat a privilege to carry\nEverything to God in prayer!",
      "Have we trials and temptations?\nIs there trouble anywhere?\nWe should never be discouraged;\nTake it to the Lord in prayer.",
    ],
  },
  {
    id: 8,
    number: 8,
    title: "Holy, Holy, Holy",
    author: "Reginald Heber",
    verses: [
      "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to thee;\nHoly, holy, holy! merciful and mighty,\nGod in three persons, blessed Trinity!",
      "Holy, holy, holy! all the saints adore thee,\nCasting down their golden crowns around the glassy sea;\nCherubim and seraphim falling down before thee,\nWhich wert and art and evermore shalt be.",
    ],
  },
  {
    id: 9,
    number: 9,
    title: "Standing on the Promises",
    author: "R. Kelso Carter",
    verses: [
      "Standing on the promises of Christ my King,\nThrough eternal ages let his praises ring;\nGlory in the highest, I will shout and sing,\nStanding on the promises of God.",
      "Standing, standing,\nStanding on the promises of God my Saviour;\nStanding, standing,\nI'm standing on the promises of God.",
    ],
  },
  {
    id: 10,
    number: 10,
    title: "Because He Lives",
    author: "Gloria & William Gaither",
    verses: [
      "Because he lives, I can face tomorrow,\nBecause he lives, all fear is gone;\nBecause I know he holds the future,\nAnd life is worth the living just because he lives.",
    ],
  },
  {
    id: 11,
    number: 11,
    title: "When the Roll Is Called Up Yonder",
    author: "James M. Black",
    verses: [
      "When the trumpet of the Lord shall sound, and time shall be no more,\nAnd the morning breaks, eternal, bright and fair;\nWhen the saved of earth shall gather over on the other shore,\nAnd the roll is called up yonder, I'll be there.",
      "When the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder, I'll be there.",
    ],
  },
  {
    id: 12,
    number: 12,
    title: "All Hail the Power of Jesus' Name",
    author: "Edward Perronet",
    verses: [
      "All hail the power of Jesus' name!\nLet angels prostrate fall;\nBring forth the royal diadem,\nAnd crown him Lord of all.",
      "Let every kindred, every tribe,\nOn this terrestrial ball,\nTo him all majesty ascribe,\nAnd crown him Lord of all.",
    ],
  },
  {
    id: 13,
    number: 13,
    title: "Rock of Ages",
    author: "Augustus Toplady",
    verses: [
      "Rock of Ages, cleft for me,\nLet me hide myself in thee;\nLet the water and the blood,\nFrom thy wounded side which flowed,\nBe of sin the double cure,\nSave from wrath and make me pure.",
      "Nothing in my hand I bring,\nSimply to thy cross I cling;\nNaked, come to thee for dress;\nHelpless, look to thee for grace;\nFoul, I to the fountain fly;\nWash me, Saviour, or I die.",
    ],
  },
  {
    id: 14,
    number: 14,
    title: "When We Walk with the Lord (Trust and Obey)",
    author: "John H. Sammis",
    verses: [
      "When we walk with the Lord in the light of his word,\nWhat a glory he sheds on our way!\nWhile we do his good will, he abides with us still,\nAnd with all who will trust and obey.",
      "Trust and obey, for there's no other way\nTo be happy in Jesus, but to trust and obey.",
    ],
  },
  {
    id: 15,
    number: 15,
    title: "Jesus Loves Me",
    author: "Anna B. Warner",
    verses: [
      "Jesus loves me! this I know,\nFor the Bible tells me so;\nLittle ones to him belong,\nThey are weak but he is strong.",
      "Yes, Jesus loves me!\nYes, Jesus loves me!\nYes, Jesus loves me!\nThe Bible tells me so.",
    ],
  },
  {
    id: 16,
    number: 16,
    title: "Come, Thou Fount of Every Blessing",
    author: "Robert Robinson",
    verses: [
      "Come, thou Fount of every blessing,\nTune my heart to sing thy grace;\nStreams of mercy, never ceasing,\nCall for songs of loudest praise.",
      "Teach me some melodious sonnet,\nSung by flaming tongues above;\nPraise the mount! I'm fixed upon it,\nMount of thy redeeming love.",
    ],
  },
  {
    id: 17,
    number: 17,
    title: "Take My Life and Let It Be",
    author: "Frances R. Havergal",
    verses: [
      "Take my life, and let it be\nConsecrated, Lord, to thee;\nTake my moments and my days,\nLet them flow in ceaseless praise.",
      "Take my hands, and let them move\nAt the impulse of thy love;\nTake my feet, and let them be\nSwift and beautiful for thee.",
    ],
  },
  {
    id: 18,
    number: 18,
    title: "O Come, All Ye Faithful",
    author: "John F. Wade",
    verses: [
      "O come, all ye faithful, joyful and triumphant,\nO come ye, O come ye to Bethlehem;\nCome and behold him, born the King of angels;",
      "O come, let us adore him,\nO come, let us adore him,\nO come, let us adore him,\nChrist the Lord.",
    ],
  },
  {
    id: 19,
    number: 19,
    title: "Guide Me, O Thou Great Jehovah",
    author: "William Williams",
    verses: [
      "Guide me, O thou great Jehovah,\nPilgrim through this barren land;\nI am weak, but thou art mighty,\nHold me with thy powerful hand.",
      "Bread of heaven, bread of heaven,\nFeed me till I want no more,\nFeed me till I want no more.",
    ],
  },
  {
    id: 20,
    number: 20,
    title: "Count Your Blessings",
    author: "Johnson Oatman Jr.",
    verses: [
      "When upon life's billows you are tempest tossed,\nWhen you are discouraged, thinking all is lost,\nCount your many blessings, name them one by one,\nAnd it will surprise you what the Lord hath done.",
      "Count your blessings, name them one by one,\nCount your blessings, see what God hath done!\nCount your blessings, name them one by one,\nCount your many blessings, see what God hath done.",
    ],
  },
  {
    id: 21,
    number: 21,
    title: "Sweet Hour of Prayer",
    author: "William W. Walford",
    verses: [
      "Sweet hour of prayer! sweet hour of prayer!\nThat calls me from a world of care,\nAnd bids me at my Father's throne\nMake all my wants and wishes known.",
      "In seasons of distress and grief,\nMy soul has often found relief,\nAnd oft escaped the tempter's snare,\nBy thy return, sweet hour of prayer.",
    ],
  },
  {
    id: 22,
    number: 22,
    title: "There Is a Fountain",
    author: "William Cowper",
    verses: [
      "There is a fountain filled with blood\nDrawn from Emmanuel's veins;\nAnd sinners plunged beneath that flood\nLose all their guilty stains.",
      "The dying thief rejoiced to see\nThat fountain in his day;\nAnd there may I, though vile as he,\nWash all my sins away.",
    ],
  },
  {
    id: 23,
    number: 23,
    title: "I Need Thee Every Hour",
    author: "Annie S. Hawks",
    verses: [
      "I need thee every hour,\nMost gracious Lord;\nNo tender voice like thine\nCan peace afford.",
      "I need thee, O I need thee;\nEvery hour I need thee;\nO bless me now, my Saviour,\nI come to thee.",
    ],
  },
  {
    id: 24,
    number: 24,
    title: "Just As I Am",
    author: "Charlotte Elliott",
    verses: [
      "Just as I am, without one plea,\nBut that thy blood was shed for me,\nAnd that thou bidst me come to thee,\nO Lamb of God, I come, I come.",
      "Just as I am, thou wilt receive,\nWilt welcome, pardon, cleanse, relieve;\nBecause thy promise I believe,\nO Lamb of God, I come, I come.",
    ],
  },
  {
    id: 25,
    number: 25,
    title: "Love Divine, All Loves Excelling",
    author: "Charles Wesley",
    verses: [
      "Love divine, all loves excelling,\nJoy of heaven, to earth come down,\nFix in us thy humble dwelling,\nAll thy faithful mercies crown.",
      "Jesus, thou art all compassion,\nPure, unbounded love thou art;\nVisit us with thy salvation,\nEnter every trembling heart.",
    ],
  },
  {
    id: 26,
    number: 26,
    title: "Abide with Me",
    author: "Henry F. Lyte",
    verses: [
      "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide;\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
      "I fear no foe, with thee at hand to bless;\nIlls have no weight, and tears no bitterness;\nWhere is death's sting? where, grave, thy victory?\nI triumph still, if thou abide with me.",
    ],
  },
  {
    id: 27,
    number: 27,
    title: "Crown Him with Many Crowns",
    author: "Matthew Bridges",
    verses: [
      "Crown him with many crowns,\nThe Lamb upon his throne;\nHark! how the heavenly anthem drowns\nAll music but its own:",
      "Awake, my soul, and sing\nOf him who died for thee,\nAnd hail him as thy matchless King\nThrough all eternity.",
    ],
  },
  {
    id: 28,
    number: 28,
    title: "Blessed Be the Name",
    author: "Ralph E. Hudson",
    verses: [
      "All praise to him who reigns above\nIn majesty supreme,\nWho gave his Son for man to die,\nThat he might man redeem!",
      "Blessed be the name! Blessed be the name!\nBlessed be the name of the Lord!\nBlessed be the name! Blessed be the name!\nBlessed be the name of the Lord!",
    ],
  },
  {
    id: 29,
    number: 29,
    title: "What a Mighty God We Serve",
    author: "Traditional",
    verses: [
      "What a mighty God we serve,\nWhat a mighty God we serve;\nAngels bow before him,\nHeaven and earth adore him,\nWhat a mighty God we serve.",
    ],
  },
  {
    id: 30,
    number: 30,
    title: "Wonderful, Merciful Saviour",
    author: "Dawn Rodgers & Eric Wyse",
    verses: [
      "Wonderful, merciful Saviour,\nPrecious Redeemer and Friend;\nWho would have thought that a Lamb\nCould rescue the souls of men?\nOh, you rescue the souls of men.",
      "You are the One that we praise,\nYou are the One we adore;\nYou give the healing and grace\nour hearts always hunger for,\nOh, our hearts always hunger for.",
    ],
  },
  {
    id: 31,
    number: 31,
    title: "Great and Mighty Is He",
    author: "Traditional",
    verses: [
      "Great and mighty is he,\nGreat and mighty is he;\nClothed in glory, arrayed in splendour,\nGreat and mighty is he.",
    ],
  },
  {
    id: 32,
    number: 32,
    title: "Higher, Higher (Lift Jesus Higher)",
    author: "Traditional",
    verses: [
      "Lift Jesus higher,\nLift Jesus higher;\nLift him up for the world to see;\nHe said if I be lifted up from the earth,\nI will draw all men unto me.",
    ],
  },
  {
    id: 33,
    number: 33,
    title: "Turn Your Eyes Upon Jesus",
    author: "Helen H. Lemmel",
    verses: [
      "Turn your eyes upon Jesus,\nLook full in his wonderful face,\nAnd the things of earth will grow strangely dim,\nIn the light of his glory and grace.",
    ],
  },
  {
    id: 34,
    number: 34,
    title: "Victory Is Mine",
    author: "Traditional",
    verses: [
      "Victory is mine, victory is mine,\nVictory today is mine;\nI told Satan, get thee behind,\nVictory today is mine.",
    ],
  },
  {
    id: 35,
    number: 35,
    title: "Jesus, Name Above All Names",
    author: "Naida Hearn",
    verses: [
      "Jesus, name above all names,\nBeautiful Saviour, glorious Lord,\nEmmanuel, God is with us,\nBlessed Redeemer, living Word.",
    ],
  },
  {
    id: 36,
    number: 36,
    title: "In the Sweet By and By",
    author: "Sanford F. Bennett",
    verses: [
      "There's a land that is fairer than day,\nAnd by faith we can see it afar;\nFor the Father waits over the way,\nTo prepare us a dwelling place there.",
      "In the sweet by and by,\nWe shall meet on that beautiful shore;\nIn the sweet by and by,\nWe shall meet on that beautiful shore.",
    ],
  },
  {
    id: 37,
    number: 37,
    title: "Onward, Christian Soldiers",
    author: "Sabine Baring-Gould",
    verses: [
      "Onward, Christian soldiers,\nMarching as to war,\nWith the cross of Jesus\nGoing on before!",
      "Onward, Christian soldiers,\nMarching as to war,\nWith the cross of Jesus\nGoing on before.",
    ],
  },
  {
    id: 38,
    number: 38,
    title: "Sweet By and By (Thank You Lord)",
    author: "Traditional",
    verses: [
      "Thank you Lord for saving my soul,\nThank you Lord for making me whole;\nThank you Lord for giving to me\nThy great salvation so rich and free.",
    ],
  },
  {
    id: 39,
    number: 39,
    title: "Nearer, My God, to Thee",
    author: "Sarah F. Adams",
    verses: [
      "Nearer, my God, to thee,\nNearer to thee!\nE'en though it be a cross\nThat raiseth me;",
      "Still all my song shall be,\nNearer, my God, to thee,\nNearer, my God, to thee,\nNearer to thee!",
    ],
  },
  {
    id: 40,
    number: 40,
    title: "Wonderful Grace of Jesus",
    author: "Haldor Lillenas",
    verses: [
      "Wonderful grace of Jesus,\nGreater than all my sin;\nHow shall my tongue describe it,\nWhere shall its praise begin?",
      "Wonderful the matchless grace of Jesus,\nDeeper than the mighty rolling sea;\nHigher than the mountain, sparkling like a fountain,\nAll sufficient grace for even me.",
    ],
  },
];

export const BULLETIN = {
  title: "Sunday Bulletin",
  date: "This Sunday",
  order: [
    "Opening Prayer and Praise Worship",
    "Choir Ministration",
    "Announcements and Welcome of Visitors",
    "Offering and Tithe",
    "Sermon: The Weight of the Crown",
    "Altar Call and Closing Prayer",
  ],
  announcements: [
    "Workers meeting holds Saturday at 8:00 AM.",
    "Night of Worship this Friday from 10:00 PM.",
    "New members class continues after service in Room 2.",
  ],
};
