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
