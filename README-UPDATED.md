# Nile Technologies — Project Command Center

A static React + TypeScript engineering workspace for planning and tracking the Nile Technologies Logistics Platform. It is **not** the logistics ERP application.

## Run locally
Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Apply the project baseline update

Copy this update package into the root of your existing `nile-project-command-center` clone, then run:

```bash
node apply-updates.mjs
npm run build
```

Review the generated changes before committing. The script updates `src/data/seed.ts`, the Architecture and Database Design pages in `src/App.tsx`, and adds the documents in `docs/`.

**Important:** browser LocalStorage can override seed data. Export your current command-center state from Settings before clearing/resetting local data. Do not discard an existing local workspace without a backup.

## Documents
- `docs/BUSINESS_REQUIREMENTS.md`
- `docs/SYSTEM_ARCHITECTURE.md`
- `docs/DATABASE_ARCHITECTURE.md`
- `docs/DEVELOPMENT_START_GUIDE.md`

## GitHub Pages
The existing Vite + GitHub Actions Pages deployment is retained. Once the local build succeeds:

```bash
git add .
git commit -m "chore: align command center with approved logistics MVP"
git push origin main
```

Ensure repository Settings → Pages uses GitHub Actions.

## Project repositories
- `nile-project-command-center`: planning, engineering tracking and documentation.
- `nile-logistics-platform`: actual product source code.
