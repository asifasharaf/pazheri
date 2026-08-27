# Pazheri — Family History Nook

A digital home for **പഴേരി കുടുംബ ചരിത്രം / Pazheri Family History** by Abbas
Master Pazheri (first published 5 April 2014), and the working desk of the
Pazheri Family Educational & Charitable Society (Reg. No. IDK/TC/96/2013).

The site does two jobs at once:

1. **The book, digitally.** Every chapter of the printed edition — the prayer
   message, the foreword, the preface, the dedication, the portrait of Pazheri
   Muhammad Haji, the historical background and the genealogy — set in a reader
   built for long-form Malayalam.
2. **The family desk.** Registration, announcements, assemblies and society
   contacts, all in one place instead of on paper.

Every page is bilingual: **English and മലയാളം**, switchable from the header,
the homepage hero and the footer. The choice is remembered per reader.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v4, with the design system expressed as `@theme` tokens
- **Static export.** `next build` writes plain HTML to `out/`. There is no
  server, no database and no environment to configure — it can be hosted by
  anything that serves files.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # writes the whole site to out/
npm run start        # serves out/ on http://localhost:3000
npm run typecheck
```

## Hosting

`npm run build` produces `out/` — static HTML, CSS and JS. Point any host at
that directory:

- **Vercel / Netlify** — import the repo; the static output is detected from
  `next.config.ts`, no settings and no environment variables needed.
- **GitHub Pages, S3, Cloudflare Pages, nginx** — upload `out/` as-is. Routes
  are emitted as `<route>/index.html`, so extensionless URLs work without any
  rewrite rules.

## Registration, for now

There is no backend, so `/register` does not store anything. The form composes
the household's details into a message and hands them to the reader's own mail
app or WhatsApp, addressed to the general secretary. When a backend is added,
that page is the only one that needs to change.

## Where the content lives

| Path | What it holds |
|---|---|
| `lib/content/book.ts` | The book's chapters, bilingual, block by block |
| `lib/content/tree.ts` | The genealogy, as a nested structure with search and deep links |
| `lib/content/society.ts` | The three-tier structure, office bearers, districts |
| `content/announcements.json` | Announcements shown on the site |
| `content/events.json` | Assemblies and events, past and upcoming |
| `lib/content/desk.ts` | Reads and sorts the two JSON files above |
| `lib/i18n.ts` | Every piece of UI copy, in both languages |

Publishing an announcement means editing `content/announcements.json` and
redeploying — the same for assemblies in `content/events.json`. Both are
bilingual: every entry carries an `en` and an `ml` string.

Adding a chapter means adding an entry to `chapters` in `lib/content/book.ts`;
its page, its place in the contents and its previous/next links follow
automatically. Adding a person means adding a node in `lib/content/tree.ts`;
the tree, the name search and the statistics on the homepage all read from it.

### Genealogy still to be entered

The printed edition carries more of the genealogy than is transcribed here.
Branches **B5 (Peruvalloor)** and **B6 (Kondotty)** are recorded as branches
but their descendants have not been entered yet — the source document
available to this build stops partway through the trees. They are marked as
such in the tree so the gap is visible rather than silent.

## Design

The visual system follows the Attio style reference: a near-white canvas,
near-black type, and exactly one chromatic accent — Cobalt Core `#266df0` —
carrying links, focus rings and the single blue badge. Buttons and inputs are
10px, badges 7px, cards 11–14px. Shadows are blue-tinted (`rgba(28, 40, 64, …)`)
at very low opacity, never warm grey. Inter at weight 500 is the default UI
voice; Inter Tight stands in for InterDisplay on headlines at weight 600 with
tight tracking; Source Serif 4 stands in for TiemposText and appears only on
pull quotes. Malayalam is set in Noto Sans Malayalam at the same weights, since
the Latin display and serif faces carry no Malayalam glyphs.

Tokens live in `app/globals.css`.
