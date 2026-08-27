# Runtime data

This directory holds state written by the running site, not source content:

- `registrations.json` — household registrations submitted through `/register`
- `announcements.json` — announcements published through `/admin`

Both are git-ignored. Seed content that ships with the site lives in
`content/` instead.

On a read-only deployment (most serverless platforms) these writes fail.
Set `REGISTRATION_WEBHOOK_URL` so registrations are relayed to a durable
endpoint instead, and publish announcements by editing `content/announcements.json`.
