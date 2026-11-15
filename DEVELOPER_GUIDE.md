# Developer Guide

## Requirements
Node.js 20+ and npm.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Data persistence
Planning seed data is in `src/data/seed.ts`. Runtime progress is stored in browser LocalStorage. Export JSON backups from Settings. LocalStorage is browser-specific and does not synchronize with GitHub.

## Update source data
Export a backup, reconcile desired canonical changes into `src/data/seed.ts` and the Markdown docs, validate, commit and push. Do not blindly replace the seed file with an exported runtime snapshot.
