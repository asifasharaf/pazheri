import type { Metadata } from "next";
import {
  Gayathri,
  Inter,
  Inter_Tight,
  Noto_Sans_Malayalam,
  Source_Serif_4,
} from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-sans",
  display: "swap",
});

// Stand-in for InterDisplay: same family tree, tighter default metrics.
const interDisplay = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter-display",
  display: "swap",
});

// Stand-in for TiemposText — pull quotes only.
const editorialSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-editorial-serif",
  display: "swap",
});

// Super headings only — the one biggest heading on a page. Malayalam-first,
// and it carries Latin too, so both scripts speak in a single voice.
const superHeading = Gayathri({
  subsets: ["malayalam", "latin"],
  weight: ["400", "700"],
  variable: "--font-super-heading",
  display: "swap",
});

const malayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-malayalam-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pazheri — Family History Nook",
    template: "%s · Pazheri",
  },
  description:
    "The digital edition of the Pazheri family history, and the register, announcements and assemblies of the Pazheri Family Educational & Charitable Society.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ml"
      className={`${inter.variable} ${interDisplay.variable} ${editorialSerif.variable} ${malayalam.variable} ${superHeading.variable}`}
    >
      <body className="min-h-dvh bg-page-canvas text-ink-black antialiased">
        <LanguageProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
