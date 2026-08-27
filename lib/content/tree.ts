import type { Bi } from "@/lib/i18n";

export type Person = {
  /** Stable id used for deep links and expansion state. */
  id: string;
  /** Branch code as printed in the book (A, B1, C1, D1, E4, F5 …). */
  code?: string;
  name: Bi;
  place?: Bi;
  spouse?: Bi;
  note?: Bi;
  /** Named descendants recorded in the book. */
  children?: Person[];
  /**
   * Descendants the book lists by name only, without further issue.
   * Kept separate from `children` so the tree does not sprout thousands
   * of empty nodes.
   */
  issue?: Bi[];
  /**
   * Set on nodes that came from the register rather than the printed book.
   * "published" is committed to the repository; "local" is saved in this
   * browser only and visible to nobody else.
   */
  registered?: "published" | "local";
};

function P(
  id: string,
  en: string,
  ml: string,
  opts: Omit<Partial<Person>, "id" | "name"> = {},
): Person {
  return { id, name: { en, ml }, ...opts };
}

const bi = (en: string, ml: string): Bi => ({ en, ml });

/* ------------------------------------------------------------------
   B1 · Pazheri Makkar Sahib — Thodupuzha
   ------------------------------------------------------------------ */

// E4 · Meeranpilla's ten children (the author's own generation)
const meeranpillaChildren: Person[] = [
  P("f1", "Makkar", "മക്കാർ", {
    code: "F1",
    spouse: bi("Raheema", "റഹീമ"),
    note: bi(
      "Pazheri Makkar Sahib, 1955–2002. The book is dedicated to him.",
      "പഴേരി മക്കാർ സാഹിബ്, 1955-2002. ഗ്രന്ഥം സമർപ്പിച്ചിരിക്കുന്നത് അദ്ദേഹത്തിനാണ്.",
    ),
    issue: [
      bi("Muhammad Ziya", "മുഹമ്മദ് സിയ"),
      bi("Muhammad Shan", "മുഹമ്മദ് ഷാൻ"),
      bi("Nasiya Jasmin", "നസിയ ജാസ്മിൻ"),
    ],
  }),
  P("f2", "Maitheen", "മൈതീൻ", {
    code: "F2",
    spouse: bi("Beevi", "ബീവി"),
    issue: [
      bi("Nawas", "നവാസ്"),
      bi("Nisar", "നിസാർ"),
      bi("Nazeeruddin", "നസീറുദ്ദീൻ"),
    ],
  }),
  P("f3", "Chithumma (Jameela)", "ചിത്തുമ്മ / ജമീല", {
    code: "F3",
    spouse: bi("Kunhumuhammad", "കുഞ്ഞുമുഹമ്മദ്"),
    issue: [bi("Sheeba", "ഷീബ")],
  }),
  P("f4", "Ilyas", "ഇല്യാസ്", {
    code: "F4",
    spouse: bi("Jameela", "ജമീല"),
    issue: [bi("Amal / Sijini", "അമൽ / സിജിനി"), bi("Anees", "അനീസ്")],
  }),
  P("f5", "Abbas Master", "അബ്ബാസ് മാസ്റ്റർ", {
    code: "F5",
    spouse: bi("Suneera Pareeth", "സുനീറ പരീത്"),
    note: bi(
      "Author of this history; General Secretary of the society.",
      "ഈ ചരിത്രത്തിന്റെ ഗ്രന്ഥകർത്താവ്; സൊസൈറ്റി ജനറൽ സെക്രട്ടറി.",
    ),
    issue: [bi("Binyamin", "ബിൻയാമിൻ"), bi("Bilawal Ameen", "ബിലാവൽ അമീൻ")],
  }),
  P("f6", "Salma", "സൽമ", {
    code: "F6",
    spouse: bi("Ashraf Chittezhathu", "അഷ്റഫ് ചിറ്റേഴത്ത്"),
    issue: [
      bi("Asif C. Ashraf", "ആസിഫ് സി. അഷ്റഫ്"),
      bi("Anfal C. Ashraf", "അൻഫൽ സി. അഷ്റഫ്"),
    ],
  }),
  P("f7", "Asmabeevi", "അസ്മാബീവി", {
    code: "F7",
    spouse: bi("Aboobacker", "അബൂബക്കർ"),
    issue: [bi("Althaf", "അൽത്താഫ്"), bi("Adnan", "അദ്നാൻ")],
  }),
  P("f8", "Nasar", "നാസർ", {
    code: "F8",
    spouse: bi("Rajeena", "റജീന"),
    issue: [
      bi("Noora Nasrath", "നൂറ നസ്റത്ത്"),
      bi("Sawad Sarwaruddin", "സവാദ് സർവറുദ്ദീൻ"),
    ],
  }),
  P("f9", "Abdul Samad", "അബ്ദുൽ സമദ്", {
    code: "F9",
    spouse: bi("Sareena", "സറീന"),
    issue: [bi("Fathima Rose", "ഫാത്തിമ റോസ്")],
  }),
  P("f10", "Muhammad Anas", "മുഹമ്മദ് അനസ്", {
    code: "F10",
    spouse: bi("Jaseela", "ജസീല"),
    issue: [
      bi("Fabin Fathima", "ഫാബിൻ ഫാത്തിമ"),
      bi("Anav Pazheri", "അനവ് പഴേരി"),
    ],
  }),
];

// D1 · Makkar, known as Kochakkon — seven children
const kochakkonChildren: Person[] = [
  P("e1", "Hassanpilla", "ഹസ്സൻപിള്ള", {
    code: "E1",
    spouse: bi("Fathima, Vellikulam", "ഫാത്തിമ വെള്ളികുളം"),
    issue: [
      bi("Pathukutty / Chithummal", "പാത്തുക്കുട്ടി / ചിത്തുമ്മാൾ"),
      bi("Meeravumma", "മീരാവുമ്മ"),
      bi("Rabi", "റാബി"),
      bi("Suhra", "സുഹ്റ"),
    ],
  }),
  P("e2", "Shareefa", "ഷെരീഫ", {
    code: "E2",
    spouse: bi("Pareeth Haji, Maravettikkal", "പരീത്ഹാജി മരവെട്ടിക്കൽ"),
    note: bi("Twelve children.", "12 മക്കൾ."),
    issue: [
      bi("Ibrahimkutty", "ഇബ്രാഹിംകുട്ടി"),
      bi("Chithumma", "ചിത്തുമ്മ"),
      bi("Ummukulsu", "ഉമ്മുക്കുൽസു"),
      bi("Hafsa", "ഹഫ്സ"),
      bi("Muhammadali", "മുഹമ്മദാലി"),
      bi("Hasan", "ഹസൻ"),
      bi("Abbas", "അബ്ബാസ്"),
      bi("Hajara", "ഹാജറ"),
      bi("Abdul Kareem", "അബ്ദുൽ കരീം"),
      bi("Salim", "സലിം"),
      bi("Jameela", "ജമീല"),
      bi("Shamsuddin", "ഷംസുദ്ദീൻ"),
    ],
  }),
  P("e3", "Kochumuhammad", "കൊച്ചുമുഹമ്മദ്", {
    code: "E3",
    spouse: bi("Amina, Chooroli", "ആമിന ചൂരോലിൽ"),
    issue: [
      bi("Aliyar", "അലിയാർ"),
      bi("Chithumma", "ചിത്തുമ്മ"),
      bi("Hassankunju", "ഹസ്സൻകുഞ്ഞ്"),
      bi("Meeramma", "മീരാമ്മ"),
      bi("Fathima", "ഫാത്തിമ"),
      bi("Kunjunju", "കുഞ്ഞൂഞ്ഞ്"),
      bi("Azeez", "അസീസ്"),
    ],
  }),
  P("e4", "Meeranpilla", "മീരാൻപിള്ള", {
    code: "E4",
    spouse: bi("Fathima Beevi, Thurayil", "ഫാത്തിമ ബീവി തുറയിൽ"),
    note: bi("Ten children.", "10 മക്കൾ."),
    children: meeranpillaChildren,
  }),
  P("e5", "Husain", "ഹുസൈൻ", {
    code: "E5",
    spouse: bi("Khadeeja", "ഖദീജ"),
    issue: [
      bi("Shareefa", "ഷരീഫ"),
      bi("Yousuf", "യൂസുഫ്"),
      bi("Jameela", "ജമീല"),
      bi("Fathima", "ഫാത്തിമ"),
      bi("Zubaida", "സുബൈദ"),
      bi("Shamsuddin", "ഷംസുദ്ദീൻ"),
    ],
  }),
  P("e6", "Ibrahim", "ഇബ്രാഹിം", {
    code: "E6",
    spouse: bi("Fathima", "ഫാത്തിമ"),
    issue: [
      bi("Zubaida", "സുബൈദ"),
      bi("Abdulkareem", "അബ്ദുൽകരീം"),
      bi("Ummath / Ramla", "ഉമ്മത്ത് / റംല"),
      bi("Shamsuddin", "ഷംസുദ്ദീൻ"),
      bi("Seenath", "സീനത്ത്"),
    ],
  }),
  P("e7", "Kunhumaitheen", "കുഞ്ഞുമൈതീൻ", {
    code: "E7",
    spouse: bi("Fathima", "ഫാത്തിമ"),
    issue: [
      bi("Kunhumuhammad", "കുഞ്ഞുമുഹമ്മദ്"),
      bi("Salma", "സൽമ"),
      bi("Abbas", "അബ്ബാസ്"),
      bi("Seenath", "സീനത്ത്"),
    ],
  }),
];

// C1 · Meerakutty Haji — eight children
const meerakuttyChildren: Person[] = [
  P("d1", "Makkar, known as Kochakkon", "മക്കാർ എന്ന കൊച്ചക്കോൻ", {
    code: "D1",
    spouse: bi("Chithummal, Kavumkarayil", "ചിത്തുമ്മാൾ കാവുംകരയിൽ"),
    note: bi("Seven children.", "7 മക്കൾ."),
    children: kochakkonChildren,
  }),
  P("d2", "Muhammad", "മുഹമ്മദ്", {
    code: "D2",
    spouse: bi("Meeraumma", "മീരാഉമ്മ"),
    issue: [
      bi("Meerakutty", "മീരാക്കുട്ടി"),
      bi("Abdurahman / Haidros", "അബ്ദുറഹ്മാൻ / ഹൈദ്രോസ്"),
      bi("Abdul Khader", "അബ്ദുൽ ഖാദർ"),
      bi("Dr. Abdul Kareem", "ഡോ. അബ്ദുൽ കരീം"),
    ],
  }),
  P("d3", "Bavahaji", "ബാവഹാജി", {
    code: "D3",
    spouse: bi("Pathan / Fathimma", "പാത്തൻ / ഫാത്തിമ്മ"),
    issue: [
      bi("Fathimma", "ഫാത്തിമ്മ"),
      bi("Husain", "ഹുസൈൻ"),
      bi("Meeravunni", "മീരാവുണ്ണി"),
      bi("Kochumuhammad", "കൊച്ചുമുഹമ്മദ്"),
      bi("Nachi", "നാച്ചി"),
      bi("Aliyar", "അലിയാർ"),
      bi("Raziya", "റാസിയ"),
      bi("Pathayi", "പാത്തായി"),
    ],
  }),
  P("d4", "Maitheen", "മൈതീൻ", {
    code: "D4",
    issue: [
      bi("Kasim", "കാസിം"),
      bi("Seyd Muhammad", "സെയ്ത് മുഹമ്മദ്"),
      bi("Aliyar", "അലിയാർ"),
      bi("Pathumma", "പാത്തുമ്മ"),
      bi("Kunhamina", "കുഞ്ഞാമിന"),
    ],
  }),
  P("d5", "Kochu Umar", "കൊച്ചു ഉമ്മർ", {
    code: "D5",
    spouse: bi("Kunhama", "കുഞ്ഞാമ"),
    note: bi("Ten children.", "10 മക്കൾ."),
    issue: [
      bi("Cheruvaumma", "ചെരുവാഉമ്മ"),
      bi("Meerakutty", "മീരാക്കുട്ടി"),
      bi("Abdurahman", "അബ്ദുറഹ്മാൻ"),
      bi("Pareethumma", "പരീതുമ്മ"),
      bi("Abdul Razzak", "അബ്ദുൽ റസ്സാഖ്"),
      bi("Khadeeja", "കദീജ"),
      bi("Sulli", "സുല്ലി"),
      bi("Mammath", "മമ്മത്"),
      bi("Nabeesa", "നബീസ"),
      bi("Pathumma", "പാത്തുമ്മ"),
    ],
  }),
  P("d6", "Fathima", "ഫാത്തിമ", { code: "D6" }),
  P("d7", "Beevi", "ബീവി", { code: "D7" }),
  P("d8", "Asiya", "ആസിയ", { code: "D8" }),
];

// C2 · Kunhumuhammad — Perumpillichira
const kunhumuhammadChildren: Person[] = [
  P("c2d1", "Makkarpilla", "മക്കാർപിള്ള", {
    code: "D1",
    spouse: bi("Shareefa", "ഷെരീഫ"),
    children: [
      P("c2d1e1", "Ibrahim", "ഇബ്രാഹിം", {
        code: "E1",
        spouse: bi("Haleema", "ഹലീമ"),
        note: bi("Nine children recorded.", "9 മക്കൾ."),
        issue: [
          bi("Muhammad", "മുഹമ്മദ്"),
          bi("Meeravumma", "മീരാവുമ്മ"),
          bi("Maitheen", "മൈതീൻ"),
          bi("Umar", "ഉമ്മർ"),
          bi("Amina", "ആമിന"),
          bi("Pathumma", "പാത്തുമ്മ"),
          bi("Nachiyumma", "നാച്ചിയുമ്മ"),
          bi("Asiya", "ആസിയ"),
          bi("Khadeeja", "ഖദീജ"),
          bi("Hasan", "ഹസൻ"),
          bi("Beevi", "ബീവി"),
          bi("Ibrahim", "ഇബ്രാഹിം"),
        ],
      }),
    ],
  }),
  P("c2d2", "Seyd", "സെയ്ത്", {
    code: "D2",
    spouse: bi("Ummukulsu", "ഉമ്മുകുൽസു"),
    issue: [
      bi("Seyd Muhammad", "സെയ്ദ് മുഹമ്മദ്"),
      bi("Shamsuddin Musliyar", "ഷംസുദ്ദീൻ മുസ്ലിയാർ"),
      bi("Maitheen", "മൈതീൻ"),
      bi("Fathima", "ഫാത്തിമ"),
      bi("Hassan", "ഹസ്സൻ"),
      bi("Nabeesa", "നബീസ"),
    ],
  }),
  P("c2d3", "Bava", "ബാവ", {
    code: "D3",
    note: bi("Six children.", "6 മക്കൾ."),
    issue: [
      bi("Kunhumol", "കുഞ്ഞുമോൾ"),
      bi("Sarakutty", "സാറാക്കുട്ടി"),
      bi("Moosa", "മൂസ"),
      bi("Hasan", "ഹസൻ"),
      bi("Kareem", "കരീം"),
      bi("Meerakutty", "മീരാക്കുട്ടി"),
    ],
  }),
  P("c2d4", "Maitheen", "മൈതീൻ", {
    code: "D4",
    place: bi("Koorachundu", "കൂരാച്ചുണ്ട്"),
    spouse: bi("Amina", "ആമിന"),
    note: bi("Nine children.", "9 മക്കൾ."),
    issue: [
      bi("Kunhumuhammad", "കുഞ്ഞുമുഹമ്മദ്"),
      bi("Shahul Hameed", "ഷാഹുൽ ഹമീദ്"),
      bi("Fathima", "ഫാത്തിമ"),
      bi("Sulaiman", "സുലൈമാൻ"),
      bi("Pareekutty", "പരീക്കുട്ടി"),
      bi("Nafeesa", "നഫീസ"),
      bi("Rabiya", "റാബിയ"),
      bi("Hassan", "ഹസ്സൻ"),
      bi("Mariyambeevi Teacher", "മറിയംബീവി ടീച്ചർ"),
    ],
  }),
  P("c2d5", "Ali", "ആലി", {
    code: "D5",
    spouse: bi("Chithumma", "ചിത്തുമ്മ"),
    note: bi("Eleven children.", "11 മക്കൾ."),
    issue: [
      bi("Kunhumuhammad", "കുഞ്ഞുമുഹമ്മദ്"),
      bi("Fathima", "ഫാത്തിമ"),
      bi("Meeran", "മീരാൻ"),
      bi("Ali Hassan", "ആലി ഹസ്സൻ"),
      bi("Pareeth", "പരീത്"),
      bi("Umar", "ഉമ്മർ"),
      bi("Ibrahim", "ഇബ്രാഹിം"),
      bi("Abdul Rahman", "അബ്ദുൽ റഹ്മാൻ"),
      bi("Amina", "ആമിന"),
      bi("Shamsuddin", "ഷംസുദ്ദീൻ"),
      bi("Kareem", "കരീം"),
    ],
  }),
];

const makkarSahibChildren: Person[] = [
  P("c1", "Meerakutty Haji", "മീരാക്കുട്ടി ഹാജി", {
    code: "C1",
    spouse: bi("Shareefa, Kanapparambil", "ഷെരീഫ കാനാപ്പറമ്പിൽ"),
    note: bi("Eight children.", "8 മക്കൾ."),
    children: meerakuttyChildren,
  }),
  P("c2", "Kunhumuhammad", "കുഞ്ഞുമുഹമ്മദ്", {
    code: "C2",
    place: bi("Perumpillichira", "പെരുമ്പിള്ളിച്ചിറ"),
    spouse: bi("Ami", "ആമി"),
    note: bi("Five children.", "5 മക്കൾ."),
    children: kunhumuhammadChildren,
  }),
  P("c3", "Hassan", "ഹസ്സൻ", {
    code: "C3",
    place: bi("Velliyamattom, Thodupuzha", "വെള്ളിയാമറ്റം, തൊടുപുഴ"),
    children: [
      P("c3d1", "Kochakkon, known as Makkar", "കൊച്ചക്കോൻ എന്ന മക്കാർ", {
        code: "D1",
        spouse: bi("Khadeeja", "ഖദീജ"),
        issue: [
          bi("Maitheen (settled at Koorachundu)", "മൈതീൻ (കൂരാച്ചുണ്ട് താമസം)"),
          bi("Hasainar", "ഹസൈനാർ"),
          bi("Asiyamma", "ആസിയാമ്മ"),
          bi("Fathima", "ഫാത്തിമ"),
        ],
      }),
    ],
  }),
  P("c4", "Husain", "ഹുസൈൻ", {
    code: "C4",
    note: bi("Two children.", "2 മക്കൾ."),
    children: [
      P("c4d1", "Maitheen", "മൈതീൻ", {
        code: "D1",
        spouse: bi("Haleema", "ഹലീമ"),
        note: bi("Eight children.", "8 മക്കൾ."),
        issue: [
          bi("Hassan", "ഹസ്സൻ"),
          bi("Meeran", "മീരാൻ"),
          bi("Nachi", "നാച്ചി"),
          bi("Khadeeja", "കദീജ"),
          bi("Husain", "ഹുസൈൻ"),
          bi("Meeramma", "മീരാമ്മ"),
          bi("Fathimma", "ഫാത്തിമ്മ"),
          bi("Cheruvamma", "ചെരുവാമ്മ"),
        ],
      }),
      P("c4d2", "Chithumma", "ചിത്തുമ്മ", { code: "D2" }),
    ],
  }),
  P("c5", "Kunhumaitheen", "കുഞ്ഞുമൈതീൻ", {
    code: "C5",
    children: [
      P("c5d1", "Husain Pazheri", "ഹുസൈൻ പഴേരി", {
        code: "D1",
        note: bi("Six children.", "6 മക്കൾ."),
        issue: [
          bi("Chithumma", "ചിത്തുമ്മ"),
          bi("Fathima", "ഫാത്തിമ"),
          bi("Asiya", "ആസിയ"),
          bi("Muhammad Husain", "മുഹമ്മദ് ഹുസൈൻ"),
          bi("Maitheen", "മൈതീൻ"),
          bi("Shareefa", "ഷെരീഫ"),
        ],
      }),
    ],
  }),
];

/* ------------------------------------------------------------------
   B2 · Pazheri Haidar Haji — Karuvankallu, Vallikkunnu
   ------------------------------------------------------------------ */

const haidarHajiChildren: Person[] = [
  P("b2c1", "Beeran", "ബീരാൻ", {
    code: "C1",
    spouse: bi("Thithachu Hajjumma", "തിത്താച്ചു ഹജ്ജുമ്മ"),
    note: bi("Eight children.", "8 മക്കൾ."),
    children: [
      P("b2d1", "Kader Kutty Haji", "കാദർ കുട്ടി ഹാജി", {
        code: "D1",
        spouse: bi("Biriyumma", "ബിരിയുമ്മ"),
        issue: [bi("Moideen", "മൊയ്തീൻ"), bi("Muhammad Haji", "മുഹമ്മദ് ഹാജി")],
      }),
      P("b2d2", "Haidru Haji", "ഹൈദ്രു ഹാജി", {
        code: "D2",
        issue: [bi("Beeran", "ബീരാൻ"), bi("Fathimakutty", "ഫാത്തിമകുട്ടി")],
      }),
      P("b2d3", "Kunhahammad Haji", "കുഞ്ഞഹമ്മദ് ഹാജി", {
        code: "D3",
        issue: [
          bi("Beeran Haji", "ബീരാൻ ഹാജി"),
          bi("Muhammad Haji", "മുഹമ്മദ് ഹാജി"),
          bi("Usman Haji", "ഉസ്മാൻ ഹാജി"),
        ],
      }),
      P("b2d4", "Muhammad Kutty", "മുഹമ്മദ് കുട്ടി", {
        code: "D4",
        spouse: bi("Amina", "ആമിന"),
        note: bi("Seven children.", "7 മക്കൾ."),
        issue: [
          bi("Beeran", "ബീരാൻ"),
          bi("Hamid Haji", "ഹാമിദ് ഹാജി"),
          bi("Ibrahim", "ഇബ്രാഹിം"),
          bi("Thachumma", "താച്ചുമ്മ"),
          bi("Khadeeja", "ഖദീജ"),
          bi("Beechi Pathumma", "ബീച്ചി പാത്തുമ്മ"),
          bi("Khadiyumma", "ഖദിയുമ്മ"),
        ],
      }),
      P("b2d5", "Biriyakutty", "ബിരിയകുട്ടി", { code: "D5" }),
      P("b2d6", "Fathimakutty", "ഫാത്തിമകുട്ടി", { code: "D6" }),
      P("b2d7", "Thithachu Kutty", "തിത്താച്ചു കുട്ടി", { code: "D7" }),
      P("b2d8", "Ayisha Kutty", "ആയിഷ കുട്ടി", { code: "D8" }),
    ],
  }),
];

/* ------------------------------------------------------------------
   B3 · Pazheri Alavi — Kizhisseri, Eranad
   ------------------------------------------------------------------ */

const alaviChildren: Person[] = [
  P("b3c1", "Kunheethu", "കുഞ്ഞീതു", {
    code: "C1",
    children: [
      P("b3c1d1", "Kunhapputty", "കുഞ്ഞാപ്പുട്ടി", {
        code: "D1",
        issue: [
          bi("Maitheen Haji", "മൈതീൻ ഹാജി"),
          bi("Kunheethu", "കുഞ്ഞീതു"),
          bi("Muhammad Haji", "മുഹമ്മദ് ഹാജി"),
          bi("Fathimakutty", "ഫാത്തിമകുട്ടി"),
          bi("Mammathutty", "മമ്മാത്തുട്ടി"),
          bi("Alavikutty", "അലവിക്കുട്ടി"),
          bi("Ahmed Kutty Haji", "അഹമ്മദ് കുട്ടി ഹാജി"),
          bi("Fathimakkutty", "ഫാത്തിമക്കുട്ടി"),
        ],
      }),
    ],
  }),
  P("b3c2", "Kunhappakutty", "കുഞ്ഞാപ്പകുട്ടി", {
    code: "C2",
    children: [
      P("b3c2d1", "Mammath Kutty", "മമ്മത് കുട്ടി", {
        code: "D1",
        issue: [
          bi("Muhammad Kutty", "മുഹമ്മദ് കുട്ടി"),
          bi("Kunhapputty", "കുഞ്ഞാപ്പുട്ടി"),
          bi("Pokkerkutty Haji", "പോക്കർകുട്ടി ഹാജി"),
          bi("Kausakutty", "കൗസക്കുട്ടി"),
        ],
      }),
      P("b3c2d2", "Soopikutty", "സൂപ്പിക്കുട്ടി", {
        code: "D2",
        issue: [
          bi("Muhammad", "മുഹമ്മദ്"),
          bi("Kunheen Kutty", "കുഞ്ഞീൻ കുട്ടി"),
          bi("Usman Haji", "ഉസ്മാൻ ഹാജി"),
        ],
      }),
      P("b3c2d3", "Alavikutty Haji", "അലവികുട്ടി ഹാജി", {
        code: "D3",
        issue: [bi("Kunhappukutty", "കുഞ്ഞാപ്പുകുട്ടി")],
      }),
    ],
  }),
  P("b3c3", "Enuddinkutty", "ഏനുദ്ദീൻകുട്ടി", {
    code: "C3",
    children: [
      P("b3c3d1", "Alavi", "അലവി", {
        code: "D1",
        children: [
          P("b3c3d1e1", "Enuddin Kutty", "ഏനുദ്ദീൻ കുട്ടി", {
            code: "E1",
            issue: [
              bi("Alavi", "അലവി"),
              bi("Kunhavaran", "കുഞ്ഞവറാൻ"),
              bi("Muhammad", "മുഹമ്മദ്"),
              bi("Abdul Nasar", "അബ്ദുൾ നാസർ"),
              bi("Khadeejabi", "ഖദീജബി"),
              bi("Sarabi", "സാറാബി"),
              bi("Fathimabi", "ഫാത്തിമബി"),
            ],
          }),
        ],
      }),
      P("b3c3d2", "Mammadkutty", "മമ്മദ്കുട്ടി", {
        code: "D2",
        issue: [
          bi("Moideen Kutty", "മൊയ്തീൻ കുട്ടി"),
          bi("Pathummakutty", "പാത്തുമ്മകുട്ടി"),
          bi("Kunhachumma", "കുഞ്ഞാച്ചുമ്മ"),
          bi("Veeran Kutty", "വീരാൻ കുട്ടി"),
          bi("Kunhathu", "കുഞ്ഞാത്തു"),
          bi("Kunhipathutty", "കുഞ്ഞിപാത്തുട്ടി"),
        ],
      }),
    ],
  }),
];

/* ------------------------------------------------------------------
   B4 · Pazheri Unnimammu — Super Bazaar, Tirurangadi
   ------------------------------------------------------------------ */

const unnimammuChildren: Person[] = [
  P("b4c1", "Moideen", "മൊയ്തീൻ", {
    code: "C1",
    note: bi("Six children.", "6 മക്കൾ."),
    children: [
      P("b4d1", "Bijukutty", "ബിജുകുട്ടി", { code: "D1" }),
      P("b4d2", "Mammathiya", "മമ്മാതിയ", { code: "D2" }),
      P("b4d3", "Unnimoithu", "ഉണ്ണിമൊയ്തു", {
        code: "D3",
        note: bi("Seven children.", "7 മക്കൾ."),
        issue: [
          bi("Muhammad Haji", "മുഹമ്മദ് ഹാജി"),
          bi("Moideenkutty", "മൊയ്തീൻകുട്ടി"),
          bi("Alavi Haji", "അലവിഹാജി"),
          bi("Beeran Kutty Haji", "ബീരാൻ കുട്ടിഹാജി"),
          bi("Ayammath", "അയമ്മത്"),
          bi("Kunhachumma", "കുഞ്ഞാച്ചുമ്മ"),
          bi("Mammachu", "മമ്മാച്ചു"),
        ],
      }),
      P("b4d4", "Alavi Pazheri", "അലവി പഴേരി", {
        code: "D4",
        children: [
          P("b4d4e1", "Moideen", "മൊയ്തീൻ", {
            code: "E1",
            issue: [
              bi("Alavi Haji", "അലവിഹാജി"),
              bi("Asainar", "അസൈനാർ"),
              bi("Beefathima", "ബീഫാത്തിമ"),
              bi("Khadeeja", "ഖദീജ"),
            ],
          }),
        ],
      }),
      P("b4d5", "Beeran Pazheri", "ബീരാൻ പഴേരി", {
        code: "D5",
        children: [
          P("b4d5e1", "Moideen Kutty Haji", "മൊയ്തീൻ കുട്ടിഹാജി", {
            code: "E1",
            issue: [
              bi("Beeran Kutty", "ബീരാൻ കുട്ടി"),
              bi("Kunheeth Haji", "കുഞ്ഞീത് ഹാജി"),
              bi("Mammathi Kutty", "മമ്മാത്തി കുട്ടി"),
              bi("Khadeejakutty", "ഖദീജകുട്ടി"),
              bi("Pathumma", "പാത്തുമ്മ"),
            ],
          }),
        ],
      }),
      P("b4d6", "Muhammadkutty Haji Pazheri", "മുഹമ്മദ്കുട്ടി ഹാജി പഴേരി", {
        code: "D6",
        note: bi("Four children.", "4 മക്കൾ."),
        issue: [
          bi("Moideenkutty", "മൊയ്തീൻകുട്ടി"),
          bi("Pathummakutty", "പാത്തുമ്മകുട്ടി"),
          bi("Kunhathu", "കുഞ്ഞാത്തു"),
          bi("Beerankutty", "ബീരാൻകുട്ടി"),
        ],
      }),
    ],
  }),
];

/* ------------------------------------------------------------------
   The root
   ------------------------------------------------------------------ */

export const root: Person = P(
  "root",
  "Husain Valiyuppappa",
  "ഹുസൈൻ വലിയുപ്പാപ്പ",
  {
    place: bi(
      "Reached Keezhmalai Nadu (Thodupuzha) c. AD 1114 · rests at the Valiyaveettil mosque, Vengalloor",
      "എ.ഡി. 1114-ൽ കീഴ്മലൈനാട്ടിൽ (തൊടുപുഴ) എത്തി · വെങ്ങല്ലൂർ വലിയവീട്ടിൽ പള്ളിയിൽ അന്ത്യവിശ്രമം",
    ),
    note: bi(
      "A physician of the Pazheri tribe of Hadhramaut, Yemen. The mosque at Vengalloor stands on the twelve acres given to him by the king of Karikode.",
      "യമനിലെ ഹളർമൗത്തിലെ പഴേരി ഗോത്രത്തിലെ ഭിഷഗ്വരൻ. കാരിക്കോട് രാജാവ് നൽകിയ 12 ഏക്കറിലാണ് വെങ്ങല്ലൂർ പള്ളി നിലകൊള്ളുന്നത്.",
    ),
    children: [
      P("a", "Pazheri Beeran", "പഴേരി ബീരാൻ", {
        code: "A",
        place: bi("Malabar, Eranad", "മലബാർ, ഏറനാട്"),
        note: bi("Six sons — the six branches of the family.", "ആറ് മക്കൾ — കുടുംബത്തിന്റെ ആറ് ശാഖകൾ."),
        children: [
          P("b1", "Pazheri Makkar Sahib", "പഴേരി മക്കാർ സാഹിബ്", {
            code: "B1",
            place: bi("Thodupuzha", "തൊടുപുഴ"),
            note: bi(
              "Settled between Muthalakodam and Perumpillichira; the place took the name Pazheri.",
              "മുതലക്കോടത്തിനും പെരുമ്പിള്ളിച്ചിറയ്ക്കും ഇടയിൽ താമസമാക്കി; ആ പ്രദേശം പഴേരി എന്നറിയപ്പെട്ടു.",
            ),
            children: makkarSahibChildren,
          }),
          P("b2", "Pazheri Haidar Haji", "പഴേരി ഹൈദർ ഹാജി", {
            code: "B2",
            place: bi("Karuvankallu, Vallikkunnu", "കരുവാങ്കല്ല്, വള്ളിക്കുന്ന്"),
            children: haidarHajiChildren,
          }),
          P("b3", "Pazheri Alavi", "പഴേരി അലവി", {
            code: "B3",
            place: bi("Kizhisseri, Eranad", "കിഴിശ്ശേരി, ഏറനാട്"),
            children: alaviChildren,
          }),
          P("b4", "Pazheri Unnimammu", "പഴേരി ഉണ്ണിമമ്മു", {
            code: "B4",
            place: bi("Super Bazaar, Tirurangadi", "സൂപ്പർ ബസാർ, തിരൂരങ്ങാടി"),
            children: unnimammuChildren,
          }),
          P("b5", "Pazheri Mammath Adhikari", "പഴേരി മമ്മത് അധികാരി", {
            code: "B5",
            place: bi("Peruvalloor", "പെരുവള്ളൂർ"),
            note: bi(
              "The descendants of this branch are recorded in the printed edition and are still being entered here.",
              "ഈ ശാഖയുടെ പിൻതലമുറ അച്ചടി പതിപ്പിലുണ്ട്; ഇവിടെ ചേർത്തുകൊണ്ടിരിക്കുന്നു.",
            ),
          }),
          P("b6", "Pazheri Kunhumoideen", "പഴേരി കുഞ്ഞുമൊയ്തീൻ", {
            code: "B6",
            place: bi("Kondotty", "കൊണ്ടോട്ടി"),
            note: bi(
              "The Kondotty line, to which Pazheri Muhammad Haji (b. 1925) belongs. Further descendants are still being entered here.",
              "പഴേരി മുഹമ്മദ് ഹാജി (ജ. 1925) ഉൾപ്പെടുന്ന കൊണ്ടോട്ടി ശാഖ. കൂടുതൽ പിൻതലമുറ ചേർത്തുകൊണ്ടിരിക്കുന്നു.",
            ),
          }),
        ],
      }),
    ],
  },
);

/** The six branches, for the branch picker on the tree page. */
export const branches: Person[] = root.children?.[0]?.children ?? [];

export type SearchHit = {
  id: string;
  name: Bi;
  code?: string;
  /** Ancestor names from the root down to this person. */
  path: Bi[];
};

function walk(
  person: Person,
  trail: Bi[],
  out: SearchHit[],
): void {
  out.push({ id: person.id, name: person.name, code: person.code, path: trail });
  const nextTrail = [...trail, person.name];
  for (const child of person.children ?? []) walk(child, nextTrail, out);
  for (const name of person.issue ?? []) {
    out.push({ id: `${person.id}:${name.en}`, name, path: nextTrail });
  }
}

/** Every name in the genealogy, flattened once at module load. */
export const allNames: SearchHit[] = (() => {
  const out: SearchHit[] = [];
  walk(root, [], out);
  return out;
})();

export function searchNames(query: string, limit = 12): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits = allNames.filter(
    (h) =>
      h.name.en.toLowerCase().includes(q) ||
      h.name.ml.includes(query.trim()) ||
      (h.code ?? "").toLowerCase() === q,
  );
  return hits.slice(0, limit);
}

export const treeStats = {
  names: allNames.length,
  branches: branches.length,
  generations: 7,
};

/**
 * Ids from the root down to `id`, inclusive. Search hits for names recorded
 * only as issue use a `parentId:Name` id — those resolve to the parent.
 */
export function pathToNode(id: string): string[] {
  const target = id.split(":")[0];
  const found: string[] = [];

  function visit(node: Person, trail: string[]): boolean {
    const nextTrail = [...trail, node.id];
    if (node.id === target) {
      found.push(...nextTrail);
      return true;
    }
    return (node.children ?? []).some((child) => visit(child, nextTrail));
  }

  visit(root, []);
  return found;
}
