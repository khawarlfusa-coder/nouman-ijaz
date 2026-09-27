// ============================================================================
// NAUMAAN IJAZ — OFFICIAL EDITORIAL DATA STORE
// GQ / Vogue Man / Editorial High-Fashion Single-Page Portfolio
//
// TIP: Aap niche diye gaye IMAGE_REGISTRY mein apni images/links asani se paste kar sakte hain!
// ============================================================================

export const IMAGE_REGISTRY = {
  // Hero Cover Image (High-fashion B&W / Editorial Portrait)
  heroCover: "/assets/images/naumaan-portrait.png",

  // Iconic Character Portrayals (Large Cinematic Spreads)
  parizaad: "/assets/images/char-behroze.jpg",
  sangEMah: "/assets/images/char-haji-marjaan.jpg",
  duniyapur: "/assets/images/char-duniyapur.jpg",
  raqeebSe: "/assets/images/char-maqsood.jpg",
  darSiJaatiHaiSila: "/assets/images/char-joi.jpg",
  jacksonHeights: "/assets/images/char-jackson-heights.jpg",

  // Editorial & Brand Campaigns
  royalSherwani: "/assets/images/brand-royal-festive.jpg",
  lahoreCandid: "/assets/images/lifestyle-lahore.jpg",
  redCarpet: "/assets/images/event-stage.jpg",
  awardsTrophy: "/assets/images/awards-trophy.jpg",
};

export const CELEBRITY_DATA = {
  profile: {
    name: "Naumaan Ijaz",
    nativeName: "نعمان اعجاز",
    title: "The Living Legend",
    issueTag: "VOL. XXXVI • ISSUE NO. 1",
    subtitle: "Presidential Pride of Performance • Multi-Lux Style Award Laureate",
    officialEmail: "info@noumanijaz.com",
    prEmail: "management@noumanijaz.com",
    agency: "ONE ICA & Global Talent Management",
    location: "Lahore • Karachi • Worldwide",
    yearsActive: "36+",
    masterpieces: "120+",
    accolades: "18+",
    quoteUrdu: "اداکاری محض الفاظ کی ادائیگی کا نام نہیں، یہ خاموشی میں سچ بولنے کا ہنر ہے۔",
    quoteEnglish: "True acting is not the recitation of dialogue; it is the courage to speak the truth in total silence.",
  },

  // Editorial Instagram / WhatsApp Style Stories
  stories: [
    {
      id: "s1",
      title: "Duniyapur",
      subtitle: "On Set",
      image: IMAGE_REGISTRY.duniyapur,
      tag: "Haveli Shoot",
      quote: "طاقت کا نشہ انسان کو اندھا کر دیتا ہے، لیکن تاریخ کبھی کسی کو معاف نہیں کرتی۔",
      caption: "Night shoot in the ancestral haveli. Nauroz Adam’s reign begins.",
      date: "Live Now"
    },
    {
      id: "s2",
      title: "Parizaad",
      subtitle: "Retrospective",
      image: IMAGE_REGISTRY.parizaad,
      tag: "Behroze Karim",
      quote: "کمزور لوگ بدلہ لیتے ہیں، طاقتور معاف کرتے ہیں، لیکن عقل مند نظر انداز کرتے ہیں۔",
      caption: "Remembering Behroze Karim—the underworld don whose grace redefined television.",
      date: "Archival"
    },
    {
      id: "s3",
      title: "Sang-e-Mah",
      subtitle: "Tribal Chieftain",
      image: IMAGE_REGISTRY.sangEMah,
      tag: "Haji Marjaan",
      quote: "جرگے کا فیصلہ پتھر پر لکیر ہوتا ہے۔",
      caption: "Haji Marjaan Khan amid the rugged peaks of Laspeer.",
      date: "Masterpiece"
    },
    {
      id: "s4",
      title: "Raqeeb Se",
      subtitle: "Poetic Grace",
      image: IMAGE_REGISTRY.raqeebSe,
      tag: "Maqsood Sahab",
      quote: "دل کے معاملات میں کوئی جیتتا نہیں، بس کچھ لوگ ہار کر بھی امر ہو جاتے ہیں۔",
      caption: "Rain-streaked Lahore afternoons and unuttered poetry.",
      date: "Critique"
    },
    {
      id: "s5",
      title: "Festive Attire",
      subtitle: "Campaign",
      image: IMAGE_REGISTRY.royalSherwani,
      tag: "Royal Editorial",
      quote: "وقار کپڑوں سے نہیں، انسان کے اٹھنے بیٹھنے اور سادگی سے جھلکتا ہے۔",
      caption: "Handcrafted raw silk festive campaign shoot.",
      date: "Brand"
    },
    {
      id: "s6",
      title: "Lahori Chai",
      subtitle: "Candid",
      image: IMAGE_REGISTRY.lahoreCandid,
      tag: "Old PTV Days",
      quote: "زندگی سادگی اور سچے دوستوں کی ہنسی میں ہی خوبصورت ہے۔",
      caption: "Candid laughter and tea in the ancient courtyard.",
      date: "Personal"
    }
  ],

  // Editorial Large-Spread Works (Single-Page Massive Visuals)
  editorialWorks: [
    {
      number: "01",
      title: "PARIZAAD",
      urduTitle: "پری زاد",
      role: "Behroze Karim",
      characterType: "The Aristocratic Don",
      year: "2021 — 2022",
      network: "Hum TV",
      awards: "Hum Award for Best Supporting Actor • Global Sensation",
      image: IMAGE_REGISTRY.parizaad,
      quote: "ہم جیسے لوگ محبت میں بھی سودا نہیں کرتے، اپنی جان نچھاور کر دیتے ہیں۔",
      quoteEn: "Men like us do not negotiate in love; we surrender our very souls.",
      essay: "An operatic portrait of tragedy, dignity, and fatherhood. As the doomed tycoon Behroze Karim, Naumaan Ijaz transformed a supporting role into the emotional epicenter of South Asian television."
    },
    {
      number: "02",
      title: "SANG-E-MAH",
      urduTitle: "سنگِ ماہ",
      role: "Haji Marjaan Khan",
      characterType: "The Jirga Chieftain",
      year: "2022",
      network: "Hum TV",
      awards: "Critics' Choice for Legendary Dialogue Delivery",
      image: IMAGE_REGISTRY.sangEMah,
      quote: "جرگے کا فیصلہ پتھر پر لکیر ہوتا ہے، اور حاجی مرجان کبھی اپنے لفظ سے پیچھے نہیں ہٹتا۔",
      quoteEn: "The verdict of the Jirga is carved in stone, and Haji Marjaan never retreats from his word.",
      essay: "Set against the unforgiving mountains of Laspeer, Haji Marjaan carries the unbearable weight of ancient tribal honor and private guilt with regal stillness."
    },
    {
      number: "03",
      title: "DUNIYAPUR",
      urduTitle: "دنیا پور",
      role: "Nauroz Adam",
      characterType: "The Feudal Monarch",
      year: "2024",
      network: "Green Entertainment",
      awards: "Blockbuster Rating & Universal Critical Acclaim",
      image: IMAGE_REGISTRY.duniyapur,
      quote: "دنیا پور میں قانون صرف میرا ہے، اور عدل بھی وہی جو میں چاہوں۔",
      quoteEn: "In Duniyapur, the law is mine alone, and justice is what I decree.",
      essay: "A ruthless Shakespearean patriarch presiding over a criminal dynasty. Naumaan commands the screen with bone-chilling masculine authority."
    },
    {
      number: "04",
      title: "RAQEEB SE",
      urduTitle: "رقیب سے",
      role: "Maqsood Sahab",
      characterType: "The Wounded Intellectual",
      year: "2021",
      network: "Hum TV",
      awards: "Universal Praise for Poetic Restraint",
      image: IMAGE_REGISTRY.raqeebSe,
      quote: "دل کے معاملات میں کوئی جیتتا نہیں، بس کچھ لوگ ہار کر بھی امر ہو جاتے ہیں۔",
      quoteEn: "In the affairs of the heart, no one truly wins; some simply become immortal in defeat.",
      essay: "A masterclass in quiet yearning. Written by Bee Gul and directed by Kashif Nisar, this remains one of the most tender, wounded performances in modern Urdu drama."
    },
    {
      number: "05",
      title: "DAR SI JAATI HAI SILA",
      urduTitle: "ڈر سی جاتی ہے صلہ",
      role: "Jawad / Joi",
      characterType: "The Domestic Predator",
      year: "2017 — 2018",
      network: "Hum TV",
      awards: "Lux Style Award for Best TV Actor (Critics' Choice)",
      image: IMAGE_REGISTRY.darSiJaatiHaiSila,
      quote: "جو شخص اندر سے مر چکا ہو، وہ دوسروں کی خوشی دیکھ کر خوش نہیں رہ سکتا۔",
      quoteEn: "A man dead inside cannot bear to see another smile.",
      essay: "A brave, terrifying psychological dissection of domestic manipulation that earned Naumaan the Lux Style Award for Best Actor."
    }
  ],

  // Representation & Management
  representation: {
    email: "info@noumanijaz.com",
    inquiries: [
      "Cinema & OTT Screenplays",
      "International Keynotes & Galas (USA, UK, UAE, Canada)",
      "High-Impact Brand Endorsements & TVCs",
      "Digital UGC Campaigns & Ambassadorships"
    ],
    agency: "ONE ICA (International Celebrity Agency)",
    locations: "Lahore • Karachi • London • Dallas"
  },

  // Social Handles
  socials: [
    { name: "Instagram", handle: "@m_naumaanijazofficial", url: "https://www.instagram.com/m_naumaanijazofficial/", followers: "1.5M+" },
    { name: "Facebook", handle: "Naumaan Ijaz Official", url: "https://www.facebook.com/ijaznaumaan/", followers: "3.4M+" },
    { name: "YouTube", handle: "Naumaan Ijaz Digital", url: "https://www.youtube.com/results?search_query=Naumaan+Ijaz+interviews", followers: "850K+" }
  ]
};
