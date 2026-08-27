export type Locale = "en" | "ml";

export const LOCALES: Locale[] = ["en", "ml"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "pazheri.locale";

/** A string that exists in both site languages. */
export type Bi = { en: string; ml: string };

export function pick(value: Bi, locale: Locale): string {
  return value[locale] || value.en;
}

export const localeLabel: Record<Locale, string> = {
  en: "English",
  ml: "മലയാളം",
};

export const localeShortLabel: Record<Locale, string> = {
  en: "EN",
  ml: "ML",
};

type Dict = Record<string, Bi>;

/**
 * UI copy. Content (book chapters, genealogy, announcements) lives in
 * lib/content/* — this dictionary is only for chrome and labels.
 */
export const ui = {
  "brand.name": { en: "Pazheri", ml: "പഴേരി" },
  "brand.tagline": {
    en: "Family History Nook",
    ml: "കുടുംബ ചരിത്ര ശേഖരം",
  },
  "brand.society": {
    en: "Pazheri Family Educational & Charitable Society",
    ml: "പഴേരി ഫാമിലി എജ്യുക്കേഷണൽ & ചാരിറ്റബിൾ സൊസൈറ്റി",
  },

  "banner.text": {
    en: "Family registration for the 2026 state assembly is now open",
    ml: "2026 സംസ്ഥാന കുടുംബ യോഗത്തിനുള്ള രജിസ്ട്രേഷൻ ആരംഭിച്ചു",
  },
  "banner.cta": { en: "Register", ml: "രജിസ്റ്റർ ചെയ്യുക" },
  "banner.dismiss": { en: "Dismiss announcement", ml: "അറിയിപ്പ് അടയ്ക്കുക" },

  "nav.book": { en: "The Book", ml: "ഗ്രന്ഥം" },
  "nav.tree": { en: "Family Tree", ml: "വംശാവലി" },
  "nav.announcements": { en: "Announcements", ml: "അറിയിപ്പുകൾ" },
  "nav.society": { en: "Society", ml: "സൊസൈറ്റി" },
  "nav.register": { en: "Register", ml: "രജിസ്ട്രേഷൻ" },
  "nav.directory": { en: "Directory", ml: "ഡയറക്ടറി" },
  "nav.menu": { en: "Menu", ml: "മെനു" },
  "nav.close": { en: "Close", ml: "അടയ്ക്കുക" },

  "lang.switch": { en: "Language", ml: "ഭാഷ" },
  "lang.aria": { en: "Choose site language", ml: "വെബ്സൈറ്റ് ഭാഷ തിരഞ്ഞെടുക്കുക" },

  "hero.eyebrow": {
    en: "Pazheri Family History · First published 5 April 2014",
    ml: "പഴേരി കുടുംബ ചരിത്രം · ആദ്യ പതിപ്പ് 2014 ഏപ്രിൽ 5",
  },
  "hero.title": {
    en: "Nine centuries of one family, kept in one place",
    ml: "ഒൻപത് നൂറ്റാണ്ടുകളുടെ കുടുംബ ചരിത്രം, ഒരിടത്ത്",
  },
  "hero.subtitle": {
    en: "The complete digital edition of Abbas Master Pazheri's family history — from Hadhramaut in Yemen to Thodupuzha — together with the register, announcements and assemblies of the Pazheri Family Educational & Charitable Society.",
    ml: "അബ്ബാസ് മാസ്റ്റർ പഴേരി രചിച്ച കുടുംബ ചരിത്രത്തിന്റെ സമ്പൂർണ ഡിജിറ്റൽ പതിപ്പ് — യമനിലെ ഹളർമൗത്ത് മുതൽ തൊടുപുഴ വരെ. ഒപ്പം പഴേരി ഫാമിലി എജ്യുക്കേഷണൽ & ചാരിറ്റബിൾ സൊസൈറ്റിയുടെ രജിസ്റ്റർ, അറിയിപ്പുകൾ, കുടുംബ യോഗങ്ങൾ.",
  },
  "hero.primary": { en: "Read the book", ml: "ഗ്രന്ഥം വായിക്കുക" },
  "hero.secondary": { en: "Join the register", ml: "രജിസ്റ്ററിൽ ചേരുക" },

  "search.placeholder": {
    en: "Search a name, branch or place — e.g. Meerankutty Haji",
    ml: "പേര്, ശാഖ അല്ലെങ്കിൽ സ്ഥലം തിരയുക — ഉദാ. മീരാക്കുട്ടി ഹാജി",
  },
  "search.submit": { en: "Search", ml: "തിരയുക" },
  "search.hint": {
    en: "Searches every name recorded in the genealogy.",
    ml: "വംശാവലിയിലെ എല്ലാ പേരുകളിലും തിരയുന്നു.",
  },
  "search.results": { en: "results", ml: "ഫലങ്ങൾ" },
  "search.none": {
    en: "No name matched. Try a shorter spelling.",
    ml: "പേര് കണ്ടെത്തിയില്ല. ചെറിയ ഭാഗം ഉപയോഗിച്ച് ശ്രമിക്കുക.",
  },

  "stats.generations": { en: "Generations recorded", ml: "രേഖപ്പെടുത്തിയ തലമുറകൾ" },
  "stats.branches": { en: "Primary branches", ml: "പ്രധാന ശാഖകൾ" },
  "stats.names": { en: "Names in the register", ml: "രജിസ്റ്ററിലെ പേരുകൾ" },
  "stats.years": { en: "Years since Husain Valiyuppappa", ml: "ഹുസൈൻ വലിയുപ്പാപ്പ മുതൽ" },

  "section.book.eyebrow": { en: "The digital edition", ml: "ഡിജിറ്റൽ പതിപ്പ്" },
  "section.book.title": {
    en: "Every chapter of the book, exactly as published",
    ml: "ഗ്രന്ഥത്തിലെ ഓരോ അധ്യായവും, പ്രസിദ്ധീകരിച്ചതു പോലെ",
  },
  "section.book.body": {
    en: "The 2014 edition set in a reader built for long-form Malayalam — the prayer message, the foreword, the preface, the dedication and the historical chapters that trace the Pazheri line.",
    ml: "2014-ലെ പതിപ്പ് മലയാളം വായനയ്ക്കായി ഒരുക്കിയ റീഡറിൽ — പ്രാർത്ഥനാ സന്ദേശം, അവതാരിക, ആമുഖം, സമർപ്പണം, പഴേരി പരമ്പരയുടെ ചരിത്ര അധ്യായങ്ങൾ.",
  },
  "section.book.cta": { en: "Open the reader", ml: "റീഡർ തുറക്കുക" },

  "section.tree.eyebrow": { en: "Genealogy", ml: "വംശാവലി" },
  "section.tree.title": {
    en: "One root, six branches, and everyone who followed",
    ml: "ഒരു വേര്, ആറ് ശാഖകൾ, പിന്നാലെ വന്ന എല്ലാവരും",
  },
  "section.tree.body": {
    en: "Husain Valiyuppappa reached Keezhmalai Nadu around 1114 AD. Every branch descends from his line through Pazheri Beeran — expand any branch to follow it down to the present generation.",
    ml: "എ.ഡി. 1114-ൽ ഹുസൈൻ വലിയുപ്പാപ്പ കീഴ്മലൈനാട്ടിൽ എത്തി. പഴേരി ബീരാൻ വഴി അദ്ദേഹത്തിന്റെ പരമ്പരയിൽ നിന്നാണ് എല്ലാ ശാഖകളും. ഏത് ശാഖയും വികസിപ്പിച്ച് ഇന്നത്തെ തലമുറ വരെ പിന്തുടരാം.",
  },
  "section.tree.cta": { en: "Explore the tree", ml: "വംശാവലി കാണുക" },

  "section.manage.eyebrow": { en: "Family desk", ml: "കുടുംബ ഡെസ്ക്" },
  "section.manage.title": {
    en: "The working desk of the family society",
    ml: "കുടുംബ സൊസൈറ്റിയുടെ പ്രവർത്തന കേന്ദ്രം",
  },
  "section.manage.body": {
    en: "Registration, announcements, assemblies and committee contacts — the things the society has always managed on paper, now in one place.",
    ml: "രജിസ്ട്രേഷൻ, അറിയിപ്പുകൾ, കുടുംബ യോഗങ്ങൾ, കമ്മിറ്റി വിവരങ്ങൾ — സൊസൈറ്റി ഇതുവരെ കടലാസിൽ കൈകാര്യം ചെയ്തതെല്ലാം ഇപ്പോൾ ഒരിടത്ത്.",
  },

  "card.register.title": { en: "Family registration", ml: "കുടുംബ രജിസ്ട്രേഷൻ" },
  "card.register.body": {
    en: "Add your household to the register so your branch stays connected to the tree.",
    ml: "നിങ്ങളുടെ കുടുംബം രജിസ്റ്ററിൽ ചേർക്കുക, നിങ്ങളുടെ ശാഖ വംശാവലിയുമായി ബന്ധിതമായിരിക്കട്ടെ.",
  },
  "card.announcements.title": { en: "Announcements", ml: "അറിയിപ്പുകൾ" },
  "card.announcements.body": {
    en: "Assembly notices, condolences, scholarship results and society circulars.",
    ml: "യോഗ അറിയിപ്പുകൾ, അനുശോചനങ്ങൾ, സ്കോളർഷിപ്പ് ഫലങ്ങൾ, സൊസൈറ്റി സർക്കുലറുകൾ.",
  },
  "card.events.title": { en: "Assemblies & events", ml: "യോഗങ്ങളും പരിപാടികളും" },
  "card.events.body": {
    en: "State, regional and panchayat-level meetings with dates and venues.",
    ml: "സംസ്ഥാന, മേഖലാ, പഞ്ചായത്ത് തല യോഗങ്ങൾ — തീയതിയും വേദിയും സഹിതം.",
  },
  "card.society.title": { en: "Society & committees", ml: "സൊസൈറ്റിയും കമ്മിറ്റികളും" },
  "card.society.body": {
    en: "The three-tier structure, office bearers and how to reach your regional committee.",
    ml: "ത്രിതല സംവിധാനം, ഭാരവാഹികൾ, മേഖലാ കമ്മിറ്റിയുമായി ബന്ധപ്പെടാനുള്ള വഴി.",
  },
  "card.open": { en: "Open", ml: "തുറക്കുക" },

  "book.title": { en: "Pazheri Family History", ml: "പഴേരി കുടുംബ ചരിത്രം" },
  "book.contents": { en: "Contents", ml: "ഉള്ളടക്കം" },
  "book.chapter": { en: "Chapter", ml: "അധ്യായം" },
  "book.prev": { en: "Previous", ml: "മുൻപത്തേത്" },
  "book.next": { en: "Next", ml: "അടുത്തത്" },
  "book.backToContents": { en: "All chapters", ml: "എല്ലാ അധ്യായങ്ങളും" },
  "book.readingNote": {
    en: "This is a faithful digital edition. Malayalam is the language of record; the English text is a translation for readers outside Kerala.",
    ml: "ഇത് ഗ്രന്ഥത്തിന്റെ വിശ്വസ്ത ഡിജിറ്റൽ പതിപ്പാണ്. മലയാളമാണ് മൂലഭാഷ; ഇംഗ്ലീഷ് പാഠം കേരളത്തിന് പുറത്തുള്ള വായനക്കാർക്കുള്ള പരിഭാഷയാണ്.",
  },

  "tree.title": { en: "Family Tree", ml: "കുടുംബ വംശാവലി" },
  "tree.expandAll": { en: "Expand all", ml: "എല്ലാം വികസിപ്പിക്കുക" },
  "tree.collapseAll": { en: "Collapse all", ml: "എല്ലാം ചുരുക്കുക" },
  "tree.spouse": { en: "Spouse", ml: "ഇണ" },
  "tree.branch": { en: "branch", ml: "ശാഖ" },
  "tree.branches": { en: "branches", ml: "ശാഖകൾ" },
  "tree.generation": { en: "Generation", ml: "തലമുറ" },
  "tree.legend": {
    en: "Names carried in the book are shown with their branch code. Tap a name to open its descendants.",
    ml: "ഗ്രന്ഥത്തിലെ പേരുകൾ ശാഖാ കോഡ് സഹിതം കാണിച്ചിരിക്കുന്നു. പേരിൽ ടാപ്പ് ചെയ്ത് പിൻതലമുറയെ കാണാം.",
  },

  "announcements.title": { en: "Announcements", ml: "അറിയിപ്പുകൾ" },
  "announcements.subtitle": {
    en: "Notices published by the society's state executive.",
    ml: "സൊസൈറ്റി സംസ്ഥാന എക്സിക്യൂട്ടീവ് പ്രസിദ്ധീകരിക്കുന്ന അറിയിപ്പുകൾ.",
  },
  "announcements.empty": {
    en: "No announcements have been published yet.",
    ml: "ഇതുവരെ അറിയിപ്പുകളൊന്നും പ്രസിദ്ധീകരിച്ചിട്ടില്ല.",
  },
  "announcements.pinned": { en: "Pinned", ml: "പ്രധാനം" },

  "events.title": { en: "Assemblies & events", ml: "യോഗങ്ങളും പരിപാടികളും" },
  "events.upcoming": { en: "Upcoming", ml: "വരാനിരിക്കുന്നത്" },
  "events.past": { en: "In the record", ml: "ചരിത്രത്തിൽ" },
  "events.venue": { en: "Venue", ml: "വേദി" },

  "society.title": { en: "The Society", ml: "സൊസൈറ്റി" },
  "society.structure": { en: "Structure", ml: "സംഘടനാ ഘടന" },
  "society.bearers": { en: "Office bearers", ml: "ഭാരവാഹികൾ" },
  "society.registration": { en: "Registration No.", ml: "രജിസ്ട്രേഷൻ നമ്പർ" },

  "register.title": { en: "Family registration", ml: "കുടുംബ രജിസ്ട്രേഷൻ" },
  "register.subtitle": {
    en: "One entry per household. The state secretariat verifies each entry against the genealogy before it is added to the register.",
    ml: "ഓരോ കുടുംബത്തിനും ഒരു എൻട്രി. രജിസ്റ്ററിൽ ചേർക്കും മുൻപ് സംസ്ഥാന സെക്രട്ടേറിയറ്റ് വംശാവലിയുമായി ഒത്തുനോക്കി ഉറപ്പുവരുത്തും.",
  },
  "register.fullName": { en: "Full name", ml: "പൂർണ്ണ നാമം" },
  "register.houseName": { en: "House name", ml: "വീട്ടുപേര്" },
  "register.branch": { en: "Branch of the family", ml: "കുടുംബ ശാഖ" },
  "register.branchUnknown": { en: "Not sure / to be traced", ml: "അറിയില്ല / കണ്ടെത്തേണ്ടതുണ്ട്" },
  "register.ancestor": { en: "Known ancestor", ml: "അറിയാവുന്ന പൂർവ്വികൻ" },
  "register.ancestorHelp": {
    en: "The oldest name in your line that you can name — this is what we trace from.",
    ml: "നിങ്ങളുടെ പരമ്പരയിൽ ഓർമ്മയുള്ള ഏറ്റവും പഴയ പേര് — ഇതിൽ നിന്നാണ് ഞങ്ങൾ കണ്ണി ചേർക്കുന്നത്.",
  },
  "register.phone": { en: "Mobile number", ml: "മൊബൈൽ നമ്പർ" },
  "register.email": { en: "Email", ml: "ഇ-മെയിൽ" },
  "register.district": { en: "District", ml: "ജില്ല" },
  "register.panchayat": { en: "Panchayat / town", ml: "പഞ്ചായത്ത് / നഗരം" },
  "register.members": { en: "Members in the household", ml: "കുടുംബാംഗങ്ങളുടെ എണ്ണം" },
  "register.notes": { en: "Anything we should know", ml: "മറ്റ് വിവരങ്ങൾ" },
  "register.submit": { en: "Submit registration", ml: "രജിസ്ട്രേഷൻ സമർപ്പിക്കുക" },
  "register.submitting": { en: "Submitting…", ml: "സമർപ്പിക്കുന്നു…" },
  "register.success": {
    en: "Registration received. The secretariat will contact you on the number you gave.",
    ml: "രജിസ്ട്രേഷൻ ലഭിച്ചു. നിങ്ങൾ നൽകിയ നമ്പറിൽ സെക്രട്ടേറിയറ്റ് ബന്ധപ്പെടും.",
  },
  "register.error": {
    en: "Something went wrong. Please try again, or call the general secretary.",
    ml: "എന്തോ പിഴവ് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കുക, അല്ലെങ്കിൽ ജനറൽ സെക്രട്ടറിയെ വിളിക്കുക.",
  },
  "register.required": { en: "Required", ml: "നിർബന്ധം" },
  "register.optional": { en: "Optional", ml: "ഐച്ഛികം" },
  "register.another": { en: "Register another household", ml: "മറ്റൊരു കുടുംബം ചേർക്കുക" },

  "footer.platform": { en: "The book", ml: "ഗ്രന്ഥം" },
  "footer.family": { en: "Family", ml: "കുടുംബം" },
  "footer.society": { en: "Society", ml: "സൊസൈറ്റി" },
  "footer.contact": { en: "Contact", ml: "ബന്ധപ്പെടുക" },
  "footer.rights": {
    en: "Copyright rests with the author. Published by the Pazheri Family Educational & Charitable Society.",
    ml: "പകർപ്പവകാശം ഗ്രന്ഥകർത്താവിന്. പഴേരി ഫാമിലി എജ്യുക്കേഷണൽ & ചാരിറ്റബിൾ സൊസൈറ്റി പ്രസിദ്ധീകരിച്ചത്.",
  },

  "common.readMore": { en: "Read more", ml: "കൂടുതൽ വായിക്കുക" },
  "common.backHome": { en: "Back to home", ml: "ഹോമിലേക്ക്" },
  "notfound.title": { en: "This page is not in the book", ml: "ഈ താൾ ഗ്രന്ഥത്തിലില്ല" },
  "notfound.body": {
    en: "The page you asked for does not exist. Try the contents page.",
    ml: "നിങ്ങൾ തിരഞ്ഞ താൾ നിലവിലില്ല. ഉള്ളടക്ക താൾ നോക്കുക.",
  },
} satisfies Dict;

export type UiKey = keyof typeof ui;
