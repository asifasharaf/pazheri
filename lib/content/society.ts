import type { Bi } from "@/lib/i18n";

export const society = {
  name: {
    en: "Pazheri Family Educational & Charitable Society",
    ml: "പഴേരി ഫാമിലി എജ്യുക്കേഷണൽ & ചാരിറ്റബിൾ സൊസൈറ്റി",
  } as Bi,
  registrationNo: "IDK/TC/96/2013",
  formed: {
    en: "Formed 12 January 2013 at Pazheri Palace, Thenkara, Mannarkkad",
    ml: "2013 ജനുവരി 12-ന് മണ്ണാർക്കാട് തെങ്കര പഴേരി പാലസിൽ രൂപീകരിച്ചു",
  } as Bi,
  bearers: [
    {
      role: { en: "Chairman", ml: "ചെയർമാൻ" } as Bi,
      name: { en: "Pazheri Shareef Haji", ml: "പഴേരി ഷെരീഫ് ഹാജി" } as Bi,
    },
    {
      role: { en: "General Secretary", ml: "ജനറൽ സെക്രട്ടറി" } as Bi,
      name: { en: "Abbas Master Pazheri", ml: "അബ്ബാസ് മാസ്റ്റർ പഴേരി" } as Bi,
      contact: "+91 94476 12848",
    },
    {
      role: { en: "Treasurer", ml: "ട്രഷറർ" } as Bi,
      name: { en: "Abdulkhader Bappu", ml: "അബ്ദുൽഖാദർ ബാപ്പു" } as Bi,
    },
  ],
  tiers: [
    {
      title: { en: "Panchayat committees", ml: "പഞ്ചായത്ത് കമ്മിറ്റികൾ" } as Bi,
      detail: {
        en: "The first tier. Every household belongs to the committee of the panchayat or town it lives in.",
        ml: "ഒന്നാം തലം. ഓരോ കുടുംബവും താമസിക്കുന്ന പഞ്ചായത്തിലെ / നഗരത്തിലെ കമ്മിറ്റിയിൽ ഉൾപ്പെടുന്നു.",
      } as Bi,
    },
    {
      title: {
        en: "Travancore regional committee",
        ml: "തിരുവിതാംകൂർ മേഖലാ കമ്മിറ്റി",
      } as Bi,
      detail: {
        en: "Seven southern districts, from Thiruvananthapuram to Ernakulam and Idukki.",
        ml: "തിരുവനന്തപുരം മുതൽ എറണാകുളം, ഇടുക്കി വരെയുള്ള ഏഴ് തെക്കൻ ജില്ലകൾ.",
      } as Bi,
    },
    {
      title: { en: "Malabar regional committee", ml: "മലബാർ മേഖലാ കമ്മിറ്റി" } as Bi,
      detail: {
        en: "Seven northern districts, from Thrissur to Kasaragod.",
        ml: "തൃശൂർ മുതൽ കാസർഗോഡ് വരെയുള്ള ഏഴ് വടക്കൻ ജില്ലകൾ.",
      } as Bi,
    },
    {
      title: { en: "State council", ml: "സംസ്ഥാന കൗൺസിൽ" } as Bi,
      detail: {
        en: "Delegates from both regions. Meets to set the year's programme and approve the register.",
        ml: "രണ്ട് മേഖലകളിൽ നിന്നുമുള്ള പ്രതിനിധികൾ. വർഷത്തെ പ്രവർത്തന പദ്ധതി തീരുമാനിക്കുകയും രജിസ്റ്റർ അംഗീകരിക്കുകയും ചെയ്യുന്നു.",
      } as Bi,
    },
    {
      title: { en: "State executive", ml: "സംസ്ഥാന എക്സിക്യൂട്ടീവ്" } as Bi,
      detail: {
        en: "The working body — registration, education, charity and the family history archive.",
        ml: "പ്രവർത്തക സമിതി — രജിസ്ട്രേഷൻ, വിദ്യാഭ്യാസം, ചാരിറ്റി, കുടുംബ ചരിത്ര ശേഖരം.",
      } as Bi,
    },
  ],
};

export const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
  "Outside Kerala",
];
