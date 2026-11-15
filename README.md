<<<<<<< HEAD
# Nile Technologies – Project Command Center

A static React + TypeScript engineering workspace for planning and tracking the Nile Technologies Logistics Management Platform. This is **not** the logistics ERP itself.

## Requirements
- Node.js 20 or newer
- npm

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

## Included workspace
- Project overview with task-derived metrics and phase progress
- Business blueprint and revenue models
- Eight-phase development roadmap
- Task board with drag-and-drop, table view, filters and task detail editing
- Architecture and workflow diagrams (Mermaid)
- Proposed database domains and ER view
- Proposed API contract explorer
- OCI target deployment notes
- Technical decision and risk registers
- Developer journal with Markdown export
- LocalStorage persistence, JSON backup/import and reset
- Global search and responsive layout

## Data behavior
- Initial planning data is version-controlled in `src/data/seed.ts`.
- User changes are stored in this browser's LocalStorage.
- The app does not have a backend and does not synchronize changes to GitHub.
- Export JSON backups regularly. Import replaces the current local workspace only after confirmation.
- Initial task statuses are `Not Started`; proposed APIs and database entities are not marked implemented.

## GitHub Pages deployment
This is a Vite static site using `HashRouter`, so deep-link refreshes work on GitHub Pages.

1. Push this repository to GitHub.
2. In `.github/workflows/deploy.yml`, replace `YOUR_REPOSITORY_NAME` with the repository name (or set the repository variable `VITE_BASE_PATH` to `/<repo-name>/`).
3. Open **Settings → Pages** and set the source to **GitHub Actions**.
4. Push to the `main` branch. GitHub Actions builds and deploys the site.
5. For a user/org site repository named `<username>.github.io`, use `/` as the Vite base path.

## Local progress and Git
LocalStorage is not a Git database. To preserve work in version control:
1. Open Settings and export the full project state JSON.
2. Review changes and update the canonical seed data / Markdown documentation intentionally.
3. Run `npm run build`.
4. Commit and push the source changes.

## Project documents
See `PROJECT_VISION.md`, `BUSINESS_BLUEPRINT.md`, `BUSINESS_REQUIREMENTS.md`, `DEVELOPMENT_ROADMAP.md`, `TASK_MANAGEMENT_GUIDE.md`, `SYSTEM_ARCHITECTURE.md`, `DATABASE_ARCHITECTURE.md`, `API_SPECIFICATION.md`, `DATA_FLOW_DOCUMENTATION.md`, `OCI_DEPLOYMENT_PLAN.md`, `TECHNICAL_DECISIONS.md`, `RISK_REGISTER.md`, and `DEVELOPER_GUIDE.md`.

## Important implementation note
This first generated implementation is a functional starter command center, not a production-tested enterprise project tracker. Review and extend acceptance criteria, dependency editing, phase editing, full module specifications and deployment settings before relying on it as the sole project record.
=======
# nile-project-command-center
Command center for the logistics project.
>>>>>>> fe467298a8184cafba04c885ff5d63ff6421e46e
