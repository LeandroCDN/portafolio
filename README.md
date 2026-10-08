# leanlabiano.com

Personal portfolio of Leandro Labiano — smart contract developer and auditor building on-chain games, DeFi tooling and AI agents.

Live: https://www.leanlabiano.com

## Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Deployed on Vercel

## Structure

```
src/
  app/            # layout, page, global styles
  components/
    Header.js
    sections/     # About, Experience, Stack, SideProjects
public/           # images, icons, CV (files/LEANDRO-LABIANO.pdf)
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Updating content

- Experience, stack and projects live in `src/components/sections/`.
- To replace the CV, overwrite `public/files/LEANDRO-LABIANO.pdf` (the site links to that path).
