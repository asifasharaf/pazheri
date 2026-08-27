# The register

One markdown file per household. Each file is one entry in the family
register, and every entry here is shown in the family tree under its branch.

To add a household, drop its `.md` file in this directory and redeploy. The
registration form on the site generates a file in exactly this format —
download it, commit it here, done.

```md
---
name: Abbas Master Pazheri
nameMl: അബ്ബാസ് മാസ്റ്റർ പഴേരി
house: Pazheri
branch: B1
ancestor: Meeranpilla
district: Idukki
panchayat: Vannappuram
members: 4
registered: 2026-08-27
---

Anything else worth recording goes here as free text.
```

`name` is the only required field. `branch` is a code from the book — `B1`
to `B6` — or `unknown` if the line has not been traced yet; unknown entries
are listed separately on the tree page rather than attached to a branch.

**No phone numbers or email addresses.** Everything in an entry is rendered
into the family tree on the public website, so it is published whether or not
this repository is private. Making the repo private does not change that.
Contact details travel privately to the general secretary in the message the
registration form composes — they are deliberately absent from this format.
