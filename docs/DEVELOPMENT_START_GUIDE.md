# Development Start Guide

## Repository responsibilities

- `nile-project-command-center`: engineering tracker and project documentation only.
- `nile-logistics-platform`: actual React frontend and Spring Boot backend source code.

Do not put application runtime modules into the command-center repository.

## First development milestone

Start with P0 completion and then P1. Do not jump into shipment/trip features before tenant identity and authorization foundations exist.

### P0 remaining work
1. Complete physical Oracle ATP data model and ERD.
2. Finalize detailed RBAC matrix.
3. Confirm frontend architecture.
4. Verify ATP connection from the intended development environment.
5. Confirm OCI deployment settings and secrets strategy.
6. Finalize API conventions.
7. Approve authentication session/token approach (ADR-004 remains pending).

### P1 build order
1. Spring Boot 3.x / Java 21 Maven project skeleton.
2. Oracle ATP connection without committing wallet or credentials.
3. Flyway baseline migration.
4. Tenant and organization model.
5. Authentication and session lifecycle after ADR-004 approval.
6. RBAC and tenant context.
7. Branch and tenant configuration.
8. Customer, vehicle and driver master data.
9. Automated tenant-isolation tests before expanding business scope.

## Local command-center update

Run from the root of the existing command-center clone:

```bash
node apply-updates.mjs
npm install
npm run build
npm run dev
```

The update script changes the initial seed and the Architecture/Database pages. Existing browser LocalStorage can override the seed. Export the current workspace JSON from Settings before resetting local data.

## GitHub Pages

After reviewing the local build:

```bash
git status
git add .
git commit -m "chore: align command center with approved logistics MVP"
git push origin main
```

The existing GitHub Actions workflow deploys the static Vite site on push to `main`, provided GitHub Pages is configured to use GitHub Actions.

## Safety

- Never commit Oracle credentials, wallet files, private keys, `.env` files or production data.
- Do not mark a task Completed until its acceptance criteria are actually satisfied.
- Command-center status is a planning record, not proof of implementation or deployment.
