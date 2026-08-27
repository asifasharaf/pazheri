import type { Bi } from "@/lib/i18n";

export type BookBlock =
  | { kind: "p"; text: Bi }
  | { kind: "h"; text: Bi }
  | { kind: "quote"; text: Bi; source: Bi }
  | { kind: "list"; items: Bi[] }
  | { kind: "note"; text: Bi };

export type BookChapter = {
  slug: string;
  /** Roman numeral shown in the contents strip. */
  index: number;
  title: Bi;
  /** Author, speaker or subject of the chapter. */
  byline?: Bi;
  /** Place and date line as printed. */
  dateline?: Bi;
  summary: Bi;
  blocks: BookBlock[];
};

export const bookMeta = {
  title: {
    en: "Pazheri Family History",
    ml: "പഴേരി കുടുംബ ചരിത്രം",
  } as Bi,
  author: {
    en: "Abbas Master Pazheri",
    ml: "അബ്ബാസ് മാസ്റ്റർ പഴേരി",
  } as Bi,
  authorAddress: {
    en: "Vannappuram P.O., Thodupuzha, Idukki (Dist), Pin: 685 607",
    ml: "വണ്ണപ്പുറം പി.ഒ., തൊടുപുഴ, ഇടുക്കി (ജില്ല), പിൻ: 685 607",
  } as Bi,
  firstPublished: {
    en: "First published 5 April 2014",
    ml: "ആദ്യ പതിപ്പ്: 2014 ഏപ്രിൽ 5",
  } as Bi,
  publisher: {
    en: "Abbas Master Pazheri, General Secretary, Pazheri Family Educational & Charitable Society (No: IDK/TC/96/2013)",
    ml: "അബ്ബാസ് മാസ്റ്റർ പഴേരി, ജനറൽ സെക്രട്ടറി, പഴേരി ഫാമിലി എജ്യുക്കേഷണൽ & ചാരിറ്റബിൾ സൊസൈറ്റി (No: IDK/TC/96/2013)",
  } as Bi,
  colophon: [
    {
      label: { en: "Typesetting", ml: "ടൈപ്പ്സെറ്റിംഗ്" } as Bi,
      value: {
        en: "Zakeer P. Meeran, Paliyath (H), Vannappuram",
        ml: "സക്കീർ പി. മീരാൻ, പാലിയത്ത് (H), വണ്ണപ്പുറം",
      } as Bi,
    },
    {
      label: { en: "Emblem design", ml: "എംബ്ലം ഡിസൈൻ" } as Bi,
      value: { en: "Asif Pazheri, Karuvankallu", ml: "ആസിഫ് പഴേരി, കരുവാങ്കല്ല്" } as Bi,
    },
    {
      label: { en: "Photography", ml: "ഫോട്ടോ" } as Bi,
      value: { en: "Binyamin Abbas", ml: "ബിൻയാമിൻ അബ്ബാസ്" } as Bi,
    },
    {
      label: { en: "Copyright", ml: "പകർപ്പവകാശം" } as Bi,
      value: { en: "Rests with the author", ml: "ഗ്രന്ഥകർത്താവിന്" } as Bi,
    },
  ],
  contact: {
    phone: "+91 94476 12848",
    email: "abbaspazhery@gmail.com",
  },
};

export const chapters: BookChapter[] = [
  {
    slug: "prayer-message",
    index: 1,
    title: { en: "Message of Prayer", ml: "പ്രാർത്ഥനാ സന്ദേശം" },
    byline: {
      en: "Panakkad Sayyid Hyderali Shihab Thangal — Kudappanakkal Tharavad, Panakkad",
      ml: "പാണക്കാട് സയ്യിദ് ഹൈദരലി ശിഹാബ് തങ്ങൾ — കുടപ്പനയ്ക്കൽ തറവാട്, പാണക്കാട്",
    },
    summary: {
      en: "The blessing offered to the family assembly and the society.",
      ml: "കുടുംബ യോഗത്തിനും സൊസൈറ്റിക്കും നൽകിയ അനുഗ്രഹ സന്ദേശം.",
    },
    blocks: [
      {
        kind: "quote",
        text: {
          en: "Learn about the lineages you need in order to keep your family ties, for the joining of kinship is a cause of love enduring in the family, of increase in wealth, and of length of life.",
          ml: "നിങ്ങളുടെ കുടുംബ ബന്ധം നിലനിർത്തുന്നതിന് ആവശ്യമായ കുടുംബ പരമ്പരകളെ കുറിച്ച് നിങ്ങൾ പഠിക്കുക. കാരണം കുടുംബ ബന്ധം ചേർക്കൽ കുടുംബത്തിൽ സ്നേഹം നിലനിൽക്കുന്നതിനും സമ്പത്തിന്റെ വർദ്ധനവിനും ആയുസ്സിന്റെ ദൈർഘ്യത്തിനും കാരണമാണ്.",
        },
        source: { en: "Tirmidhi", ml: "തിർമുദി" },
      },
      {
        kind: "p",
        text: {
          en: "Bismillahir Rahmanir Raheem.",
          ml: "ബിസ്മില്ലാഹിർറഹ്മാനിർറഹീം",
        },
      },
      {
        kind: "p",
        text: {
          en: "May the blessing of the Almighty rain always upon the Pazheri Family Educational and Charitable Society and upon the Pazheri family assembly. Ameen.",
          ml: "പഴേരി ഫാമിലി എജ്യുക്കേഷണൽ ആൻ്റ് ചാരിറ്റബിൾ സൊസൈറ്റിക്കും പഴേരി കുടുംബ യോഗത്തിനും സർവ്വശക്തനായ നാഥന്റെ അനുഗ്രഹം എന്നെന്നും വർഷിക്കുമാറാകട്ടെ. ആമീൻ.",
        },
      },
    ],
  },
  {
    slug: "foreword",
    index: 2,
    title: { en: "Foreword", ml: "അവതാരിക" },
    byline: {
      en: "C.P. Saithalavi — Editor, Chandrika",
      ml: "സി.പി. സെയ്‌തലവി — എഡിറ്റർ, ചന്ദ്രിക",
    },
    dateline: {
      en: "Malappuram · 3 January 2014",
      ml: "മലപ്പുറം · 2014 ജനുവരി 03",
    },
    summary: {
      en: "How the journeys of people in search of a livelihood became civilisations — and how one farming family from Hadhramaut became Malayali.",
      ml: "ജീവിതമാർഗം തേടിയുള്ള മനുഷ്യന്റെ സഞ്ചാരങ്ങൾ നാഗരികതകളായതും ഹളർമൗത്തിലെ ഒരു കർഷക കുടുംബം മലയാളികളായതും.",
    },
    blocks: [
      {
        kind: "p",
        text: {
          en: "Civilisations took shape out of humanity's journeys in search of a way to live. In the earliest societies agriculture was the main occupation. Travelling groups camped along river valleys for the sake of water, and so civilisations came to be known as river-valley cultures. The Indus, the Nile, the Tigris and many other shores became the first refuges of human culture. Those who prospered at farming discovered new worlds. Prophets and religions ordered human culture and awakened a sense of value in it.",
          ml: "ജീവിത മാർഗം തേടിയുള്ള മനുഷ്യന്റെ സഞ്ചാരങ്ങളാണ് നാഗരികതകളായി രൂപപ്പെട്ടത്. ആദിമ സമൂഹങ്ങളിൽ കൃഷി തന്നെയായിരുന്നു മുഖ്യം. ജലലഭ്യതയ്ക്കു വേണ്ടി യാത്രാ സംഘങ്ങൾ നദീതടങ്ങളിൽ തമ്പടിച്ചു. അങ്ങനെ നാഗരികതകൾ നദീതട സംസ്കാരങ്ങളായി അറിയപ്പെട്ടു. സിന്ധു, നൈൽ, ടൈഗ്രീസ് തുടങ്ങിയ നിരവധി തീരങ്ങൾ മാനവസംസ്കാരത്തിന്റെ ആദിമ സങ്കേതങ്ങളായി. കാർഷിക വൃത്തിയിൽ അഭിവൃദ്ധി നേടിയവർ പുതിയ ലോകങ്ങൾ കണ്ടെത്തി. പ്രവാചകന്മാരും മതങ്ങളും മാനവ സംസ്കാരത്തെ ചിട്ടപ്പെടുത്തുകയും മൂല്യബോധമുണർത്തുകയും ചെയ്തു.",
        },
      },
      {
        kind: "p",
        text: {
          en: "The first generations were those who took up the preaching of an ideal as a mission of life alongside work, farming and trade; they cut through dark paths and gave light to a new age. In later times they came to be known as tribes and families. In this line stands a family known by the very name of its farming calling — 'Pazheri'. When people reach different parts of a land and generations are born there, it is natural for the bond with the taproot to be severed. When the same family name is known across many places, the press of life persuades one to assume they are all separate, and to pass by one's own kin without notice.",
          ml: "തൊഴിലിനും കൃഷിക്കും വ്യാപാരത്തിനുമൊപ്പം ആദർശപ്രബോധനവും ജീവിതദൗത്യമായി ഏറ്റെടുത്ത ആദ്യതലമുറകളാണ് ഇരുട്ടുനിറഞ്ഞ വഴികൾ വെട്ടിത്തെളിച്ച് പുതിയ കാലത്തിനു വെളിച്ചം പകർന്നത്. അവർ പിൽക്കാലം ഗോത്രങ്ങളും കുടുംബങ്ങളുമായി അറിയപ്പെട്ടു. ഈ പരമ്പരയിൽ കാർഷികവൃത്തിയുടെ പേരിൽ തന്നെ അറിയപ്പെട്ട കുടുംബമാണ് 'പഴേരി'. നാടിന്റെ വിവിധ ഭാഗങ്ങളിൽ എത്തിപ്പെടുകയും അവിടെ തലമുറകൾ ജന്മമെടുക്കുകയും ചെയ്യുമ്പോൾ തായ്‌വേരുമായുള്ള ബന്ധം അറ്റുപോവുക സ്വാഭാവികമാണ്. ഒരേ കുടുംബനാമത്തിൽ പല ദേശങ്ങളിലായി അറിയപ്പെടുമ്പോൾ അതെല്ലാം വ്യത്യസ്തമാണെന്ന് കരുതുകയും അപരന്മാരെ ഗൗനിക്കാതെ കടന്നുപോവുകയും ചെയ്യാനാണ് ജീവിതത്തിരക്കുകൾ പ്രേരിപ്പിക്കുക.",
        },
      },
      {
        kind: "p",
        text: {
          en: "Vannappuram Pazheri Abbas Master, a public worker of Idukki district, shook off that indolence and set about gathering the leaves of a family tree and digging for its roots. The fallen leaves and those still stirring strongly in the wind are all here. To collect them is arduous research — the daring of holding a family spread across an entire state within a single work. To travel through Abbas Master's book is to touch the heart of a lineage that crossed countries to become Malayali, and thoroughly of the village. This work makes clear that the roots of the Pazheri tribe begin in Hadhramaut in Yemen. That is the chemistry by which Baseri, meaning farmers, became Pazheri.",
          ml: "ഇടുക്കി ജില്ലയിലെ പൊതുപ്രവർത്തകനായ വണ്ണപ്പുറം പഴേരി അബ്ബാസ് മാസ്റ്റർ അത്തരം അലസതകളെ കുടഞ്ഞെറിഞ്ഞാണ് ഒരു കുടുംബവൃക്ഷത്തിന്റെ ഇലകൾ പെറുക്കിക്കൂട്ടാനും വേരുകൾ ചികയാനും ശ്രമിച്ചത്. കൊഴിഞ്ഞുവീണവയും കരുത്തോടെ കാറ്റിലിളകുന്നവയുമെല്ലാം ഇതിലുണ്ട്. അതെല്ലാം സമാഹരിക്കുക കഠിനാധ്വാനമുള്ള ഗവേഷണമാണ്. സംസ്ഥാനമാകെ പരന്നുകിടക്കുന്ന കുടുംബത്തെ ഒരു കൃതിയിലുൾക്കൊള്ളിക്കുന്ന സാഹസികത. അബ്ബാസ് മാസ്റ്ററുടെ പുസ്തകത്തിലൂടെയുള്ള സഞ്ചാരം, ദേശാന്തരങ്ങൾ താണ്ടി വന്ന് മലയാളികളായി, തനി ഗ്രാമീണരായി തീർന്ന ഒരു പരമ്പരയുടെ ഹൃദയം തൊടുകയാണ്. പഴേരി ഗോത്ര വേരുകൾ യമനിലെ ഹളർമൗത്തിൽ നിന്ന് തുടങ്ങുന്നുവെന്ന് ഈ കൃതി വ്യക്തമാക്കുന്നു. കൃഷിക്കാർ എന്നർത്ഥമുള്ള ബസേരി, പഴേരിയായി തീർന്നതിന്റെ രസതന്ത്രമാണത്.",
        },
      },
      {
        kind: "p",
        text: {
          en: "Pazheri Muhammadaji of Kondotty is the most celebrated personality in this line. A public life that began in 1946 as an organiser of the MSF while he was a student at Malappuram High School carried him as far as membership of the working committee of the old Malabar District Muslim League. There is a history of his living in hiding during the India–Pakistan war and of his keeping his ideals unsullied without fear of the army. Abbas Master, who has written the history of the family to which that brave fighter — a favourite companion of C.H. Muhammad Koya Sahib — belongs, deserves congratulation.",
          ml: "കൊണ്ടോട്ടിയിലെ പഴേരി മുഹമ്മദാജി ഈ പരമ്പരയിലെ ഏറെ ഖ്യാതി നേടിയ വ്യക്തിത്വമാണ്. മലപ്പുറം ഹൈസ്കൂളിൽ വിദ്യാർത്ഥിയായിരിക്കുമ്പോൾ 1946-ൽ എം.എസ്.എഫിന്റെ സംഘാടകനായി ആരംഭിച്ച പൊതുജീവിതം പഴയ മലബാർ ജില്ലാ മുസ്ലിം ലീഗിന്റെ പ്രവർത്തക സമിതി അംഗത്വത്തിൽ വരെ അദ്ദേഹത്തെ എത്തിച്ചു. ഇന്ത്യ-പാക് യുദ്ധവേളയിൽ ഒളിവുജീവിതം നയിച്ചതും പട്ടാളത്തെ കൂസാതെ ആദർശശുദ്ധി കാത്തുസൂക്ഷിച്ചതുമായ ചരിത്രമുണ്ട്. സി.എച്ച്. മുഹമ്മദ്കോയ സാഹിബിന്റെ ഇഷ്ടതോഴനായ ആ ധീരയോദ്ധാവ് ഉൾപ്പെടുന്ന കുടുംബത്തിന്റെ ചരിത്രമെഴുതിയ അബ്ബാസ് മാസ്റ്റർ അഭിനന്ദനമർഹിക്കുന്നു.",
        },
      },
    ],
  },
  {
    slug: "preface",
    index: 3,
    title: { en: "Preface", ml: "ആമുഖം" },
    byline: { en: "Abbas Master Pazheri", ml: "അബ്ബാസ് മാസ്റ്റർ പഴേരി" },
    dateline: {
      en: "Vannappuram, Thodupuzha · 5 January 2014",
      ml: "വണ്ണപ്പുറം, തൊടുപുഴ · 2014 ജനുവരി 05",
    },
    summary: {
      en: "Why the family gathered, and the historiographic method behind the book.",
      ml: "കുടുംബ കൂട്ടായ്മയുടെ കാരണവും ഗ്രന്ഥത്തിന്റെ ചരിത്രരചനാ രീതിയും.",
    },
    blocks: [
      {
        kind: "p",
        text: {
          en: "An accurate sense of history is the chief cause of any people's progress. The history of our yesterdays plays a major part in shaping our sense of self. As the foundation stone of society, the institution of the family carries great importance. The Pazheri family assembly took shape out of exactly this recognition.",
          ml: "കൃത്യമായ ചരിത്ര ബോധം ഏതൊരു ജനതയുടെയും പുരോഗതിയുടെ മുഖ്യ ഹേതുവാണ്. ഇന്നലെകളുടെ ചരിത്രം നമ്മുടെ സ്വത്വ ബോധത്തെ രൂപപ്പെടുത്തുന്നതിൽ പ്രധാന പങ്ക് വഹിക്കുന്നുണ്ട്. സമൂഹത്തിന്റെ അടിസ്ഥാന ശില എന്ന നിലയിൽ കുടുംബ സംവിധാനത്തിന് പ്രാധാന്യമേറെ. പഴേരി കുടുംബ കൂട്ടായ്മ രൂപപ്പെടുന്നത് ഈ തിരിച്ചറിവിൽ നിന്നാണ്.",
        },
      },
      {
        kind: "p",
        text: {
          en: "This undertaking was attempted by putting the principles of historiography to scientific use. The history of the Pazheri family has moved forward in parallel with the history of the Muslims of Kerala. Malik ibn Dinar and his company, who landed at Kodungallur in AD 642, began the Islamic history of Kerala. The arrival of Pazheri — a farming family of Yemen — in Kerala is a continuation of that. The family name was Malayalamised into 'Pazheri'.",
          ml: "ചരിത്ര രചനാ ശാസ്ത്രത്തിന്റെ (Historiography) തത്വങ്ങൾ ശാസ്ത്രീയമായി ഉപയോഗപ്പെടുത്തിയാണ് ഈ സംരംഭം പൂർത്തീകരിക്കാൻ ശ്രമിച്ചിട്ടുള്ളത്. കേരള മുസ്‌ലിംകളുടെ ചരിത്രത്തോട് സമാന്തരമായി തന്നെയാണ് പഴേരി കുടുംബത്തിന്റെ ചരിത്രവും മുന്നോട്ട് പോയിട്ടുള്ളത്. എ.ഡി. 642 ൽ കൊടുങ്ങല്ലൂരിൽ വന്നിറങ്ങിയ മാലിക്ബ്‌നു ദീനാറും സംഘവും കേരളത്തിലെ ഇസ്ലാമിക ചരിത്രത്തിന് തുടക്കം കുറിച്ചു. യമനിലെ കാർഷിക കുടുംബമായ പസ്ഹെരി (Pazheri) കേരളത്തിലേക്കെത്തുന്നത് ഇതിന്റെ തുടർച്ചയായാണ്. ഈ കുടുംബനാമം മലയാളീകരിച്ച് പഴേരി (Pazheri) യായി മാറി.",
        },
      },
      {
        kind: "p",
        text: {
          en: "The history of the Pazheri family in Kerala begins with Husain Valiyuppappa, the eminent figure who came to Kerala from the Pazheri tribe. He led the religious work in Keezhmalai Nadu, which includes Thodupuzha, and his history is also the history of the Muslims of this region. The close relationship Husain Valiyuppappa maintained with the kings who ruled Karikode is noteworthy.",
          ml: "പഴേരി ഗോത്രത്തിൽ നിന്നും കേരളത്തിലെത്തിയ പ്രമുഖ വ്യക്തിയായ ഹുസൈൻ വലിയുപ്പാപ്പയിൽ നിന്നാണ് കേരളത്തിൽ പഴേരി കുടുംബത്തിന്റെ ചരിത്രം ആരംഭിക്കുന്നത്. തൊടുപുഴ ഉൾക്കൊള്ളുന്ന കീഴ്മലൈ നാട്ടിൽ ദീനീ പ്രവർത്തനത്തിന് നേതൃത്വം നൽകിയ ഇദ്ദേഹത്തിന്റെ ചരിത്രം ഈ പ്രദേശത്തെ മുസ്ലിംകളുടെ ചരിത്രം കൂടിയാണ്. കാരിക്കോട് ഭരിച്ചിരുന്ന രാജാക്കന്മാരുമായി ഹുസൈൻ വലിയുപ്പാപ്പ പുലർത്തിയ അടുത്ത ബന്ധം ശ്രദ്ധേയമാണ്.",
        },
      },
    ],
  },
  {
    slug: "dedication",
    index: 4,
    title: { en: "Dedication", ml: "സമർപ്പണം" },
    byline: {
      en: "Pazheri Makkar Sahib (1955–2002), Vannappuram, Thodupuzha, Idukki",
      ml: "പഴേരി മക്കാർ സാഹിബ് (1955-2002), വണ്ണപ്പുറം - തൊടുപുഴ, ഇടുക്കി ജില്ല",
    },
    summary: {
      en: "The elder brother who began collecting this history in 1980 and did not live to finish it.",
      ml: "1980-ൽ ഈ ചരിത്രം ശേഖരിക്കാൻ തുടങ്ങുകയും പൂർത്തിയാക്കും മുൻപേ വിടപറയുകയും ചെയ്ത ജ്യേഷ്ഠൻ.",
    },
    blocks: [
      {
        kind: "p",
        text: {
          en: "It was Pazheri Makkar Sahib, eldest son of Pazheri Meeran Pilla and Fathima Beevi, who began the effort to write the Pazheri family history as early as 1980 and gathered the first information. He left us before he could complete it. Pazheri Makkar Meeranpilla is the author's elder brother.",
          ml: "പഴേരി കുടുംബചരിത്രം രചിക്കുന്നതിന് 1980-ൽ തന്നെ ശ്രമമാരംഭിക്കുകയും പ്രഥമ വിവരങ്ങൾ ശേഖരിക്കുകയും ചെയ്തത് പഴേരി മീരാൻ പിള്ള - ഫാത്തിമ ബീവി ദമ്പതികളുടെ മൂത്തമകൻ പഴേരി മക്കാർ സാഹിബായിരുന്നു. അദ്ദേഹം പൂർത്തിയാക്കും മുമ്പേ നമ്മെ വിട്ടുപിരിഞ്ഞു. ഗ്രന്ഥകർത്താവിന്റെ മൂത്ത സഹോദരനാണ് പഴേരി മക്കാർ മീരാൻപിള്ള.",
        },
      },
      {
        kind: "p",
        text: {
          en: "Born in 1955 at Perumpillichira. Educated at Kumaramangalam M.K.N.M. School, Kalayanthani St. George's High School and Thodupuzha Government High School. While in the eighth standard he made history with a twelve-day hunger strike against wrongful action by the school authorities. He entered public life through the MSF and held the offices of President of the Vannappuram Panchayat Muslim Youth League, President of the Muslim League, member of the State Council, and Chandrika's Idukki district organiser.",
          ml: "1955-ൽ പെരുമ്പിള്ളിച്ചിറയിൽ ജനനം. കുമാരമംഗലം എം.കെ.എൻ.എം. സ്കൂൾ, കലയന്താനി സെന്റ് ജോർജ്ജ് ഹൈസ്കൂൾ, തൊടുപുഴ ഗവ. ഹൈസ്കൂൾ എന്നിവിടങ്ങളിൽ വിദ്യാഭ്യാസം. എട്ടാം ക്ലാസ്സിൽ പഠിക്കുമ്പോൾ സ്കൂൾ അധികൃതരുടെ തെറ്റായ നടപടികളിൽ പ്രതിഷേധിച്ച് 12 ദിവസം നിരാഹാരസമരം നടത്തി ചരിത്രം സൃഷ്ടിച്ചു. എം.എസ്.എഫിലൂടെ പൊതുപ്രവർത്തന രംഗത്തെത്തി, വണ്ണപ്പുറം പഞ്ചായത്ത് മുസ്ലിം യൂത്ത് ലീഗ് പ്രസിഡന്റ്, മുസ്ലിം ലീഗ് പ്രസിഡന്റ്, സംസ്ഥാന കൗൺസിൽ അംഗം, ചന്ദ്രിക ഇടുക്കി ജില്ലാ ഓർഗനൈസർ എന്നീ സ്ഥാനങ്ങൾ വഹിച്ചു.",
        },
      },
      {
        kind: "p",
        text: {
          en: "He also served in the workers' union of the Kaliyar Harrison Malayalam Plantation, as President of the Vannappuram Town Juma Masjid, and as U.D.F. convenor. He kept a close friendship with Raja Thevar Mannan, the tribal king of Kovilmala in Idukki. He died on 5 January 2002 following a motorcycle accident. The auditorium at the Vannappuram League House has been named the 'Pazheri Makkar Sahib Auditorium'.",
          ml: "കാളിയാർ ഹാരിസൺ മലയാളം പ്ലാന്റേഷനിലെ തൊഴിലാളി യൂണിയൻ, വണ്ണപ്പുറം ടൗൺ ജുമാ മസ്ജിദ് പ്രസിഡന്റ്, യു.ഡി.എഫ്. കൺവീനർ എന്നീ നിലകളിലും പ്രവർത്തിച്ചു. ഇടുക്കി കോവിൽമല ആദിവാസി രാജാവ് രാജാതേവർ മന്നാനുമായി അടുത്ത സൗഹൃദം പുലർത്തിയിരുന്നു. 2002 ജനുവരി 5-ന് ബൈക്കപകടത്തെ തുടർന്ന് നിര്യാതനായി. വണ്ണപ്പുറം ലീഗ് ഹൗസിലെ ഓഡിറ്റോറിയം 'പഴേരി മക്കാർ സാഹിബ് ഓഡിറ്റോറിയം' എന്ന് നാമകരണം ചെയ്യപ്പെട്ടിരിക്കുന്നു.",
        },
      },
      { kind: "h", text: { en: "Family", ml: "കുടുംബം" } },
      {
        kind: "list",
        items: [
          {
            en: "Wife: Raheema (Panankara Kacheritazhathu)",
            ml: "ഭാര്യ: റഹീമ (പനങ്കര കച്ചേരിത്താഴത്ത്)",
          },
          {
            en: "Children: Muhammad Ziya M.A., B.Ed.; Muhammad Shan M.A., B.Ed.; Nasiya Jasmin T.T.C.",
            ml: "മക്കൾ: മുഹമ്മദ് സിയ M.A., B.Ed., മുഹമ്മദ് ഷാൻ M.A., B.Ed., നസിയ ജാസ്മിൻ T.T.C.",
          },
          {
            en: "Children-in-law: Alhind Ziya M.Sc., B.Ed.; Amana Shan T.T.C.; C.A. Shameer T.T.C.",
            ml: "മരുമക്കൾ: അൽഹിന്ദ് സിയ M.Sc., B.Ed., അമാന ഷാൻ T.T.C., സി.എ. ഷെമീർ T.T.C.",
          },
          {
            en: "Grandchildren: Dilawar Ilan Pazheri, Dua Rosalva, Attish Aman",
            ml: "പേരമക്കൾ: ദിലാവർ ഇലൻ പഴേരി, ദുഅ റൊസാൽവ, ആറ്റിഷ് അമൻ",
          },
        ],
      },
    ],
  },
  {
    slug: "pazheri-muhammad-haji",
    index: 5,
    title: {
      en: "Pazheri Muhammad Haji, Kondotty",
      ml: "പഴേരി മുഹമ്മദ് ഹാജി, കൊണ്ടോട്ടി",
    },
    byline: { en: "Malappuram district · Born 1925", ml: "മലപ്പുറം ജില്ല · ജനനം 1925" },
    summary: {
      en: "The Eranadan leader who first brought C.H. Muhammad Koya to a Malappuram platform.",
      ml: "സി.എച്ച്. മുഹമ്മദ് കോയയെ ആദ്യമായി മലപ്പുറത്ത് പ്രസംഗിപ്പിച്ച ഏറനാടൻ നേതാവ്.",
    },
    blocks: [
      {
        kind: "p",
        text: {
          en: "A brave leader who carried the heart of the Eranadan Mappila people in his chest. Born in 1925 as the son of Kunhayimutti Haji — of the line of descendants of Husain Valiyuppappa, who rests at the Valiyaveettil mosque in Thodupuzha — and of Vazhakkad Kunheedumma. His siblings: Unnimoyinkutty Haji, Fathimakutty Hajjumma, Alikutty Haji, the celebrated ghazal singer Aboobacker Kutty, Abdul Azeez, Khadeeja Hajjumma, Ali Haji and Ayisha Hajjumma.",
          ml: "ഏറനാടൻ മാപ്പിളമക്കളുടെ ചങ്കുറപ്പ് നെഞ്ചിലേറ്റിയ ധീരനായ നേതാവ്. തൊടുപുഴ വലിയവീട്ടിൽ പള്ളിയിൽ അന്ത്യവിശ്രമം കൊള്ളുന്ന ഹുസൈൻ വലിയുപ്പാപ്പയുടെ സന്താനപരമ്പരയിൽപ്പെട്ട കുഞ്ഞായിമുട്ടി ഹാജിയുടെയും വാഴക്കാട് കുഞ്ഞീദുമ്മയുടെയും മകനായി 1925-ൽ ജനനം. സഹോദരങ്ങൾ: ഉണ്ണിമോയിൻകുട്ടി ഹാജി, ഫാത്തിമക്കുട്ടി ഹജ്ജുമ്മ, ആലിക്കുട്ടി ഹാജി, പ്രശസ്ത ഗസൽ ഗായകൻ അബൂബക്കർകുട്ടി, അബ്ദുൾ അസീസ്, കദീജ ഹജ്ജുമ്മ, അലി ഹാജി, ആയിഷ ഹജ്ജുമ്മ.",
        },
      },
      {
        kind: "p",
        text: {
          en: "He came to the field through the MSF while studying at Malappuram Mappila High School. It was he who organised a public meeting at Kottappadi and had the eighteen-year-old C.H. Muhammad Koya speak in Malappuram for the first time. He was imprisoned during the Liberation Struggle. At the wedding of Panakkad Sayyid Muhammadali Shihab Thangal, it was Pazheri who stood in the place of the groom's elder kinsman. He served as Vice President of the Kondotty Grama Panchayat, as a member of the Hajj Committee, and as founding secretary of the Malabar Musafirkhana.",
          ml: "മലപ്പുറം മാപ്പിള ഹൈസ്കൂളിൽ പഠിക്കുമ്പോൾ എം.എസ്.എഫിലൂടെ രംഗത്തെത്തി. കോട്ടപ്പടിയിൽ പൊതുയോഗം സംഘടിപ്പിച്ച് 18-കാരനായ സി.എച്ച്. മുഹമ്മദ് കോയയെ ആദ്യമായി മലപ്പുറത്ത് പ്രസംഗിപ്പിച്ചത് ഇദ്ദേഹമാണ്. വിമോചന സമരത്തിൽ ജയിൽവാസം അനുഭവിച്ചു. പാണക്കാട് സയ്യിദ് മുഹമ്മദലി ശിഹാബ് തങ്ങളുടെ വിവാഹത്തിന് വരന്റെ കാരണവർ സ്ഥാനത്ത് നിന്നത് പഴേരിയായിരുന്നു. കൊണ്ടോട്ടി ഗ്രാമപഞ്ചായത്ത് വൈസ് പ്രസിഡന്റ്, ഹജ്ജ് കമ്മിറ്റി മെമ്പർ, മലബാർ മുസാഫിർഖാന സ്ഥാപക സെക്രട്ടറി എന്നീ നിലകളിൽ പ്രവർത്തിച്ചു.",
        },
      },
      { kind: "h", text: { en: "Family", ml: "കുടുംബം" } },
      {
        kind: "list",
        items: [
          {
            en: "Wife: Asiyaumma Hajjumma (Manjeri Avunnipuram)",
            ml: "ഭാര്യ: ആസിയാഉമ്മ ഹജ്ജുമ്മ (മഞ്ചേരി അവുന്നിപുറം)",
          },
          {
            en: "Children: Kunheedumma, Abdul Hakkim Haji, Kunhumuhammad Haji (Chairman, K.M.C.C. Jeddah), Abdulsamad, Rukhiya, Abdul Azeez, Abdul Jabbar, Abdul Latheef, Ahmed Shareef, Shihab",
            ml: "മക്കൾ: കുഞ്ഞീദുമ്മ, അബ്ദുൽ ഹക്കിം ഹാജി, കുഞ്ഞ്മുഹമ്മദ് ഹാജി (ചെയർമാൻ, കെ.എം.സി.സി. ജിദ്ദ), അബ്ദുൾസമദ്, റുഖിയ, അബ്ദുൽ അസീസ്, അബ്ദുൽ ജബ്ബാർ, അബ്ദുൽ ലത്തീഫ്, അഹമ്മദ് ഷരീഫ്, ഷിഹാബ്",
          },
        ],
      },
    ],
  },
  {
    slug: "historical-background",
    index: 6,
    title: { en: "Historical Background", ml: "ചരിത്ര പശ്ചാത്തലം" },
    summary: {
      en: "Arabia and the Semitic peoples, Cheraman Perumal and Malik Dinar, the Pazheri tribe of Hadhramaut, and the arrival at Thodupuzha.",
      ml: "അറേബ്യയും സെമറ്റിക് വംശവും, ചേരമാൻ പെരുമാളും മാലിക് ദീനാറും, ഹളർമൗത്തിലെ പഴേരി ഗോത്രം, തൊടുപുഴയിലേക്കുള്ള വരവ്.",
    },
    blocks: [
      {
        kind: "h",
        text: { en: "Arabia and the Semitic peoples", ml: "അറേബ്യയും സെമറ്റിക് വംശവും" },
      },
      {
        kind: "p",
        text: {
          en: "The Semitic peoples are the lines of descent from Sam, son of the Prophet Nuh (peace be upon him). Arabia was their cradle. Arabic, Syriac, Hebrew, Aramaic, Nabataean and Chaldean are the principal Semitic languages. Farming and trade were their main means of livelihood.",
          ml: "നൂഹ് നബി(അ)യുടെ പുത്രൻ സാമിന്റെ സന്താനപരമ്പരകളാണ് സെമറ്റിക് ജനവിഭാഗം. അറേബ്യ ഇവരുടെ ഈറ്റില്ലമായിരുന്നു. അറബി, സുറിയാനി, അബ്രാനി, ആറാമി, നബ്ത്തി, ഖൽദാനി എന്നിവയാണ് പ്രധാന സെമറ്റിക് ഭാഷകൾ. കൃഷിയും കച്ചവടവുമായിരുന്നു പ്രധാന ഉപജീവനമാർഗ്ഗങ്ങൾ.",
        },
      },
      {
        kind: "h",
        text: { en: "Cheraman Perumal and Malik Dinar", ml: "ചേരമാൻ പെരുമാളും മാലിക് ദീനാറും" },
      },
      {
        kind: "p",
        text: {
          en: "Pepper and spices were shipped from Kerala to Arabia. Having learned of Islam through the trade that passed by way of Kodungallur (Muziris), the king Cheraman Perumal reached Mecca and took the name Thajuddeen. Thereafter, in AD 642, Malik ibn Dinar and his company arrived in Kerala and established mosques.",
          ml: "കേരളത്തിൽ നിന്നുള്ള കുരുമുളകും സുഗന്ധദ്രവ്യങ്ങളും അറേബ്യയിലേക്ക് കയറ്റി അയച്ചിരുന്നു. കൊടുങ്ങല്ലൂർ (മുസിരിസ്) വഴിയുള്ള വ്യാപാരത്തിലൂടെ ഇസ്ലാമിനെക്കുറിച്ച് അറിഞ്ഞ ചേരമാൻ പെരുമാൾ രാജാവ് മക്കയിലെത്തി താജുദ്ദീൻ എന്ന പേര് സ്വീകരിച്ചു. തുടർന്ന് എ.ഡി. 642-ൽ മാലിക് ബിൻ ദീനാറും സംഘവും കേരളത്തിലെത്തി പള്ളികൾ സ്ഥാപിച്ചു.",
        },
      },
      { kind: "h", text: { en: "The Pazheri tribe", ml: "പഴേരി ഗോത്രം" } },
      {
        kind: "p",
        text: {
          en: "'Baseri' — one who sows seed, a farmer — is a strong farming family of Hadhramaut in Yemen. Through local shifts of pronunciation it became Pazheri, and in Malayalam turned into 'പഴേരി'. Around AD 1114, Husain Valiyuppappa, an eminent man of this tribe, reached Malabar.",
          ml: "യമനിലെ ഹളർമൗത്തിലുള്ള പ്രബലമായ കർഷക കുടുംബമാണ് 'ബസേരി' (വിത്ത് വിതയ്ക്കുന്നവൻ/കൃഷിക്കാരൻ). പ്രാദേശിക ഭാഷാവ്യതിയാനങ്ങളിലൂടെ പസ്ഹെരി (Pazheri) എന്നാവുകയും മലയാളത്തിൽ 'പഴേരി' എന്ന് മാറുകയും ചെയ്തു. എ.ഡി. 1114 കാലഘട്ടത്തിൽ ഈ ഗോത്രത്തിലെ പ്രമുഖനായ ഹുസൈൻ വലിയുപ്പാപ്പ മലബാറിലെത്തി.",
        },
      },
      {
        kind: "h",
        text: {
          en: "Husain Valiyuppappa and Thodupuzha",
          ml: "ഹുസൈൻ വലിയുപ്പാപ്പയും തൊടുപുഴയും",
        },
      },
      {
        kind: "p",
        text: {
          en: "Husain Valiyuppappa came with Sheikh Fareeduddin Waliyy to Keezhmalai Nadu (Thodupuzha) for the sake of religious preaching. A physician, he cured a member of the Karikode king's family, and on the twelve acres received as a reward the Valiyaveettil mosque at Vengalloor in Thodupuzha was built — now nine hundred years old. The 'maravettimaram' tree in the mosque courtyard carries a legend of miracles.",
          ml: "ഹുസൈൻ വലിയുപ്പാപ്പ ഷെയ്ഖ് ഫരീദുദ്ദീൻ വലിയ്യോടൊപ്പം കീഴ്മലൈനാട്ടിലേക്ക് (തൊടുപുഴ) മതപ്രബോധനാർത്ഥം വന്നു. ഭിഷഗ്വരനായിരുന്ന അദ്ദേഹം കാരിക്കോട് രാജാവിന്റെ കുടുംബാംഗത്തെ ചികിത്സിച്ചു ഭേദമാക്കിയതിന് പാരിതോഷികമായി ലഭിച്ച 12 ഏക്കർ സ്ഥലത്താണ് തൊടുപുഴ വെങ്ങല്ലൂർ വലിയവീട്ടിൽ പള്ളി നിർമ്മിച്ചത് (900 വർഷത്തെ പഴക്കം). വലിയവീട്ടിൽ പള്ളിമുറ്റത്തെ 'മരവെട്ടിമരം' ദിവ്യാത്ഭുതങ്ങളുടെ ഐതിഹ്യമുള്ളതാണ്.",
        },
      },
      {
        kind: "p",
        text: {
          en: "Pazheri Makkar Sahib, son of Pazheri Beeran Sahib of the line of Husain Valiyuppappa, settled between Muthalakodam and Perumpillichira in Thodupuzha. That place came to be called 'Pazheri', and the mosque built there is known as the Pazheri Muhyiddin Juma Masjid — the Pazheri mosque.",
          ml: "ഹുസൈൻ വലിയുപ്പാപ്പയുടെ സന്താനപരമ്പരയിൽപ്പെട്ട പഴേരി ബീരാൻ സാഹിബിന്റെ മകൻ പഴേരി മക്കാർ സാഹിബ് തൊടുപുഴയിലെ മുതലക്കോടത്തിനും പെരുമ്പിള്ളിച്ചിറയ്ക്കും ഇടയിൽ താമസമാക്കി. ഈ പ്രദേശം 'പഴേരി' എന്നും അവിടെ നിർമ്മിച്ച പള്ളി 'പഴേരി മുഹ്‌യിദ്ദീൻ ജുമാ മസ്ജിദ്' (പഴേരി പള്ളി) എന്നും അറിയപ്പെടുന്നു.",
        },
      },
    ],
  },
  {
    slug: "organisation",
    index: 7,
    title: {
      en: "Organisation and Governance",
      ml: "സംഘടനാരൂപവും ഭരണസംവിധാനവും",
    },
    summary: {
      en: "The three-tier structure, the first state assembly of 2012, and the founding of the society in 2013.",
      ml: "ത്രിതല സംവിധാനം, 2012-ലെ പ്രഥമ സംസ്ഥാന കുടുംബയോഗം, 2013-ലെ സൊസൈറ്റി രൂപീകരണം.",
    },
    blocks: [
      {
        kind: "h",
        text: { en: "Three-tier structure", ml: "ത്രിതല സംവിധാനം" },
      },
      {
        kind: "list",
        items: [
          { en: "Panchayat committees", ml: "പഞ്ചായത്ത് കമ്മിറ്റികൾ" },
          {
            en: "Travancore regional committee (7 southern districts)",
            ml: "തിരുവിതാംകൂർ മേഖലാ കമ്മിറ്റി (7 തെക്കൻ ജില്ലകൾ)",
          },
          {
            en: "Malabar regional committee (7 northern districts)",
            ml: "മലബാർ മേഖലാ കമ്മിറ്റി (7 വടക്കൻ ജില്ലകൾ)",
          },
          { en: "State council", ml: "സംസ്ഥാന കൗൺസിൽ" },
          { en: "State executive", ml: "സംസ്ഥാന എക്സിക്യൂട്ടീവ്" },
        ],
      },
      {
        kind: "h",
        text: { en: "First state family assembly", ml: "പ്രഥമ സംസ്ഥാന കുടുംബയോഗം" },
      },
      {
        kind: "p",
        text: {
          en: "Held on 18 November 2012 at the Karipur Hajj House and inaugurated by Panakkad Sayyid Abbasali Shihab Thangal.",
          ml: "2012 നവംബർ 18-ന് കരിപ്പൂർ ഹജ്ജ് ഹൗസിൽ പാണക്കാട് സയ്യിദ് അബ്ബാസലി ശിഹാബ് തങ്ങൾ ഉദ്ഘാടനം ചെയ്തു.",
        },
      },
      {
        kind: "h",
        text: {
          en: "Pazheri Family Educational & Charitable Society",
          ml: "പഴേരി ഫാമിലി എജ്യുക്കേഷണൽ & ചാരിറ്റബിൾ സൊസൈറ്റി",
        },
      },
      {
        kind: "p",
        text: {
          en: "Formed on 12 January 2013 at the Pazheri Palace in Thenkara, Mannarkkad.",
          ml: "2013 ജനുവരി 12-ന് മണ്ണാർക്കാട് തെങ്കരയിലുള്ള പഴേരി പാലസിൽ രൂപീകരിച്ചു.",
        },
      },
      {
        kind: "list",
        items: [
          {
            en: "Pazheri Shareef Haji — Chairman",
            ml: "പഴേരി ഷെരീഫ് ഹാജി — ചെയർമാൻ",
          },
          {
            en: "Abbas Master Pazheri — General Secretary",
            ml: "അബ്ബാസ് മാസ്റ്റർ പഴേരി — ജനറൽ സെക്രട്ടറി",
          },
          {
            en: "Abdulkhader Bappu — Treasurer",
            ml: "അബ്ദുൽഖാദർ ബാപ്പു — ട്രഷറർ",
          },
        ],
      },
    ],
  },
  {
    slug: "genealogy",
    index: 8,
    title: {
      en: "The Genealogical Trees",
      ml: "വിശദമായ കുടുംബ വംശാവലി",
    },
    summary: {
      en: "From Husain Valiyuppappa through Pazheri Beeran to the six branches and the generations that follow.",
      ml: "ഹുസൈൻ വലിയുപ്പാപ്പ മുതൽ പഴേരി ബീരാൻ വഴി ആറ് ശാഖകളിലേക്കും തുടർന്നുള്ള തലമുറകളിലേക്കും.",
    },
    blocks: [
      {
        kind: "p",
        text: {
          en: "The genealogy recorded in the book runs from Husain Valiyuppappa to Pazheri Beeran of Malabar and Eranad, and from his six sons into the branches that spread across Kerala. Because the genealogy is a structure rather than a narrative, it is presented in this edition as an interactive tree rather than as running text.",
          ml: "ഗ്രന്ഥത്തിൽ രേഖപ്പെടുത്തിയ വംശാവലി ഹുസൈൻ വലിയുപ്പാപ്പ മുതൽ മലബാർ - ഏറനാട്ടിലെ പഴേരി ബീരാൻ വരെയും അദ്ദേഹത്തിന്റെ ആറ് മക്കളിൽ നിന്ന് കേരളമാകെ പടർന്ന ശാഖകളിലേക്കും നീളുന്നു. വംശാവലി ഒരു ഘടനയായതിനാൽ, ഈ പതിപ്പിൽ അത് തുടർച്ചയായ ഗദ്യമായല്ല, സംവേദനാത്മകമായ വൃക്ഷമായാണ് അവതരിപ്പിച്ചിരിക്കുന്നത്.",
        },
      },
      {
        kind: "note",
        text: {
          en: "Open the Family Tree to walk the branches, or search any name from the homepage.",
          ml: "ശാഖകളിലൂടെ സഞ്ചരിക്കാൻ വംശാവലി തുറക്കുക, അല്ലെങ്കിൽ ഹോം പേജിൽ നിന്ന് ഏത് പേരും തിരയുക.",
        },
      },
    ],
  },
];

export function getChapter(slug: string): BookChapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function chapterNeighbours(slug: string) {
  const i = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? chapters[i - 1] : undefined,
    next: i >= 0 && i < chapters.length - 1 ? chapters[i + 1] : undefined,
  };
}
