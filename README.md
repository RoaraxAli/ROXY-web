# ROXY Web

Marketing site and documentation for [ROXY](https://github.com/RoaraxAli/ROXY),
built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

## Structure

- `app/(marketing)/` — landing page and install guide (custom layout).
- `app/docs/` — documentation (Nextra theme-docs, MDX in `content/docs/`).
- `content/docs/` — MDX content pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Deploy

Connected to Vercel — every push to `main` deploys automatically. No
`vercel.json` is required; Vercel detects Next.js.

## Adding a doc page

1. Create `content/docs/<slug>.mdx` with frontmatter `title` and `description`.
2. Add an entry to the sidebar in `app/docs/layout.tsx` (or `theme.config`).
3. Push to `main`.
