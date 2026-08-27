# Working on this repo

Pazheri is the digital edition of a printed family history, and the notice
board of the family society. Most readers reach it on a phone, in Malayalam,
over a patchy connection in Kerala. Every decision below follows from that.

## Mobile first — not negotiable

**Design and build every screen for a 360px-wide phone first, then widen.**
This is the primary constraint on all work in this repo, not a checklist item
at the end.

- Start from the narrow layout. Reach for `sm:`, `md:`, `lg:` only to *add*
  room, never to rescue a layout that was designed wide and then squeezed.
- The page must never scroll horizontally at 360px. Wide things — tables,
  the genealogy, code, long unbroken Malayalam words — go inside their own
  `overflow-x-auto` container so the page body stays put.
- Anything tappable is at least 44×44px, with at least 8px between targets.
- Type scales down on small screens. Display sizes (40–64px) are desktop
  values; give them a smaller mobile step. Body text never goes below 15px.
- Hover is a desktop affordance only. Anything revealed on hover needs a tap
  or always-visible equivalent below `lg`, or it does not exist on a phone.
- Test at 360px before saying a change is done. A desktop screenshot alone is
  not evidence.

## Type

Three voices, and they do not overlap:

| Voice | Family | Where |
|---|---|---|
| Super headings | **Gayathri** 700 | The one biggest heading on a page — the homepage hero, page `h1`s |
| Display | Inter Tight 600 | Section headings, card titles, names in the tree |
| UI + body | Inter 500 | Everything else. Weight 500 is the default, never 400 |
| Pull quotes | Source Serif 4 | Testimonial and quotation blocks only — rarity is the point |
| Malayalam | Noto Sans Malayalam | Automatic; the Latin display faces carry no Malayalam glyphs |

Gayathri is a Malayalam-first family, so it sets both scripts of a super
heading in one voice. Use `.super-heading`; do not apply it to section
headings, and never to body text.

## Bilingual, always

**Malayalam is the default.** A first-time reader lands in Malayalam and
switches to English if they want it, not the other way round.

Every reader-visible string exists in both languages. UI copy lives in
`lib/i18n.ts` as `{ en, ml }` pairs; content carries the same shape. There is
no English-only or Malayalam-only string in the interface. When adding copy,
write the Malayalam yourself rather than leaving a TODO — a missing
translation ships as a visible gap.

Malayalam sets at `letter-spacing: 0` and a looser line-height; the tight
tracking of the Latin system makes it unreadable.

## No backend

The site is a **static export** (`output: "export"`). There is no server, no
database and no environment variables. `next build` writes `out/`.

This means: no API routes, no server actions, no runtime file writes, no
secrets. Content is data in the repo — `content/*.json`, `content/registrations/*.md`,
and the typed modules in `lib/content/`. Publishing anything is an edit and a
redeploy.

Registration works within that constraint: the form writes a markdown entry
into the reader's browser (so their household appears in the tree at once) and
downloads the same entry as the file that publishes it once committed to
`content/registrations/`. Never commit phone numbers or emails there. The
reason is the *site*, not the repo: entries are rendered into the family tree
on a public website, so a private repository would not make them private.

If a feature seems to need a backend, say so plainly and propose the
static-friendly version rather than quietly adding a server.

## Design system

The visual language is the Attio reference: white canvas, near-black type,
and exactly one accent — Cobalt Core `#266df0` — carrying links, focus rings
and the single blue badge. Tokens live in `app/globals.css`.

- Radii: 10px buttons and inputs, 7px badges, 11–14px cards
- Shadows are blue-tinted `rgba(28, 40, 64, …)` at very low opacity — never
  warm grey, never pure black
- One chromatic moment per screen. Do not introduce a second accent colour.

## Verifying

- `npm run typecheck` and `npm run build` must both pass.
- Serve `out/` and check the routes actually render — the build succeeding is
  not the same as the pages working.
- Check both languages and both a 360px phone and a 1440px desktop.
