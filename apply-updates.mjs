import fs from "node:fs";

const seedPath = "src/data/seed.ts";
const appPath = "src/App.tsx";

if (!fs.existsSync(seedPath) || !fs.existsSync(appPath)) {
  console.error("Run this script from the root of your nile-project-command-center repository.");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const seedSource = fs.readFileSync(seedPath, "utf8");
const marker = "export const seedData: ProjectState = ";
const start = seedSource.indexOf(marker);
const end = seedSource.lastIndexOf(";");
if (start < 0 || end < start) throw new Error("Could not locate seedData in src/data/seed.ts");

const state = JSON.parse(seedSource.slice(start + marker.length, end));
const taskUpdates = {
  "NT-001": ["Completed", "Finalize and baseline the Nile Technologies logistics business requirements: services, pricing, commercial workflow, operations lifecycle, financial controls and MVP scope.", ["BRD v1.0 is committed.", "All eight transportation service categories and eight pricing methods are recorded.", "MVP business lifecycle, operating rules and phases are documented."]],
  "NT-002": ["In Review", "Document modular-monolith architecture, module boundaries, API/data flow, deployment topology and pending decisions.", ["Architecture blueprint is documented.", "Module boundaries and dependency rules are documented.", "Approved and pending decisions are clearly distinguished."]],
  "NT-003": ["In Progress", "Finalize Oracle ATP logical and physical schema, tenant-aware relationships, constraints, indexes and migration sequence.", ["ER model covers identity, CRM, commercial, logistics, fleet and finance.", "Tenant ownership, constraints and indexes are reviewed.", "Oracle-compatible schema design is documented."]],
  "NT-004": ["Completed", "Approve shared Oracle ATP database/shared schema tenancy with mandatory tenant_id and trusted server-side tenant context.", ["Shared schema strategy is approved.", "Tenant identity comes from authenticated backend identity, never browser input.", "Tenant isolation includes services, repositories, jobs, documents and automated tests."]],
  "NT-005": ["Ready", "Define platform and tenant roles, granular permissions, scope boundaries and record-level authorization.", ["Platform Superadmin and tenant roles are distinguished.", "Admin, operations, fleet, finance, customer, partner and driver permissions are mapped."]],
  "NT-006": ["Completed", "Define feature-oriented Maven/Spring Boot modular-monolith package structure and module ownership.", ["Backend package structure and module ownership are documented.", "Cross-module repository access is prohibited."]],
  "NT-007": ["Ready", "Define React/TypeScript frontend structure, route groups, API client, state and feature conventions.", ["Feature structure is documented.", "Internal, customer, partner and driver route groups are defined."]],
  "NT-008": ["Not Started", "Configure and verify secure connectivity from Spring Boot to the existing Oracle ATP database.", ["Select TLS or mTLS connection mode.", "Keep credentials and wallet material outside Git.", "Verify connectivity from the development environment."]],
  "NT-009": ["Ready", "Prepare OCI Linux deployment topology, Nginx/HTTPS, systemd, secrets, storage and observability plan.", ["OCI deployment topology is documented.", "Health checks, logs, backups and database privileges are documented."]],
  "NT-010": ["Ready", "Define REST API conventions: versioning, DTOs, pagination, errors, validation, idempotency and security.", ["API conventions and standard errors are documented.", "Tenant ID is never trusted from arbitrary request fields."]],
  "NT-011": ["Completed", "Create and identify separate command-center and logistics-platform GitHub repositories.", ["Command-center repository exists.", "Platform repository exists for actual application source.", "Command center is identified as an engineering tracker."]]
};
state.tasks = state.tasks.map(task => {
  const update = taskUpdates[task.id];
  return update ? { ...task, status: update[0], description: update[1], acceptance: update[2], updatedAt: today } : task;
});
state.decisions = [
  { id:"ADR-001", title:"Modular monolith versus microservices", context:"Balance delivery speed, maintainability and future scale for a single developer.", options:"Modular monolith; microservices", chosen:"Modular monolith", reason:"One Spring Boot deployment with explicit feature modules minimizes operational overhead while preserving boundaries.", consequences:"Modules own their logic and persistence; no cross-module repository access. Microservices are deferred until justified.", status:"Approved", date:today },
  { id:"ADR-002", title:"Primary database", context:"An existing Oracle Autonomous Transaction Processing database is available.", options:"Oracle ATP; alternative relational database", chosen:"Oracle ATP", reason:"Use the existing Oracle ATP investment for the MVP.", consequences:"Schema, migrations, JDBC, types and indexes must be Oracle-compatible; connectivity still needs verification.", status:"Selected", date:today },
  { id:"ADR-003", title:"Multi-tenant data isolation", context:"Initial Nile deployment may expand to multiple logistics companies.", options:"Shared schema; schema per tenant; database per tenant", chosen:"One shared Oracle ATP database and shared schema with mandatory tenant_id", reason:"Lowest operational complexity for the MVP, with tenant scope enforced throughout backend and persistence.", consequences:"Tenant-aware constraints, jobs, documents and cross-tenant negative tests are mandatory. Nile is not hardcoded as a special tenant.", status:"Approved", date:today },
  { id:"ADR-004", title:"Authentication session and token strategy", context:"React frontend requires secure authenticated access to the Spring Boot API.", options:"JWT access + refresh tokens; server-side sessions", chosen:"Pending approval", reason:"JWT access/refresh is recommended but token storage, expiry, rotation and revocation are not approved.", consequences:"Do not implement token lifecycle assumptions until approved. Spring Security remains the foundation.", status:"Pending", date:today },
  { id:"ADR-005", title:"Transportation pricing methods", context:"Business requires flexible one-off and repeat-customer pricing.", options:"Per km; per trip; per ton/weight; per vehicle; per day/month; fixed route; contract; custom quotation", chosen:"Support all eight pricing methods", reason:"The MVP must support the agreed service and commercial use cases.", consequences:"Rules are configurable by customer, service, vehicle category and route; additional charges and discounts are supported.", status:"Approved", date:today },
  { id:"ADR-006", title:"Document storage", context:"POD, contracts, vehicle documents, invoices and receipts require file storage.", options:"Database BLOB; OCI Object Storage", chosen:"OCI Object Storage with ATP metadata", reason:"Keep transactional metadata in ATP and binary files in object storage.", consequences:"Private buckets, tenant-scoped keys and authorization checks are required; final configuration remains pending.", status:"Recommended", date:today }
];
state.updatedAt = new Date().toISOString();
fs.writeFileSync(seedPath, `import type { ProjectState } from '../types';\nexport const seedData: ProjectState = ${JSON.stringify(state, null, 2)};\n`);

let app = fs.readFileSync(appPath, "utf8");
const architectureStart = app.indexOf("function Architecture()");
const workflowMarker = "\nconst workflowData=";
const architectureEnd = app.indexOf(workflowMarker, architectureStart);
if (architectureStart < 0 || architectureEnd < 0) throw new Error("Could not locate Architecture page section in App.tsx");

const architectureReplacement = `function Architecture(){return <><Header eyebrow="SOLUTION DESIGN" title="System architecture" desc="Approved target direction: React frontend, Spring Boot modular monolith and Oracle ATP. This is the design baseline, not a claim that components are deployed."/><Panel title="High-level architecture" sub="Logical view"><Diagram chart={\`flowchart TB
U[Customers / Drivers / Staff] --> F[React + TypeScript Frontend]
F --> N[Nginx / HTTPS]
N --> API[Spring Boot REST API]
API --> SEC[Spring Security + Trusted Tenant Context]
SEC --> MOD[Modular Business Domains]
MOD --> DB[(Oracle ATP Shared Schema)]
MOD --> OBJ[OCI Object Storage]
MOD --> EXT[GPS / Payments / SMS / Email Adapters]
N --> VM[OCI Linux Compute]
API --> VM\`}/></Panel><div className="content-grid"><Panel title="Application layers"><div className="stack-list">{[["Experience","Internal operations, customer, partner and driver route groups","React · TypeScript · Vite"],["API & security","REST APIs, authentication, authorization and tenant context","Java 21 · Spring Boot 3 · Spring Security"],["Business domains","Tenant, identity, CRM, pricing, quotations, contracts, orders, shipments, fleet, trips and finance","Modular monolith · single backend deployment"],["Data & documents","Tenant-scoped transactional data and private document objects","Oracle ATP · OCI Object Storage"],["Infrastructure","TLS termination, API runtime, routing, health checks and logs","OCI Linux · Nginx · HTTPS"]].map(([a,b,c])=><div className="stack-row" key={a}><strong>{a}</strong><p>{b}</p><span>{c}</span></div>)}</div></Panel><Panel title="Approved architecture rules"><ul className="bullet-list"><li>One Spring Boot deployment with explicit module boundaries for the MVP.</li><li>Modules expose application services; no cross-module repository access.</li><li>Tenant identity comes from the authenticated backend principal, never a client-supplied tenant ID.</li><li>Tenant scope is enforced in service and persistence operations, including background jobs.</li><li>JWT access/refresh versus server-side sessions remains pending approval.</li><li>External systems are integrated through adapters; no provider is assumed selected.</li></ul></Panel></div></>}\n`;
app = app.slice(0, architectureStart) + architectureReplacement + app.slice(architectureEnd + 1);

const databaseStart = app.indexOf("function DatabasePage()");
const apiMarker = "\nconst apiGroups=";
const databaseEnd = app.indexOf(apiMarker, databaseStart);
if (databaseStart < 0 || databaseEnd < 0) throw new Error("Could not locate Database page section in App.tsx");
const databaseReplacement = `function DatabasePage(){return <><Header eyebrow="DATA MODEL" title="Database design" desc="Logical data model for one shared Oracle ATP database and shared schema. Physical SQL design is still being finalized."/><div className="notice"><Database size={18}/><div><strong>Schema status: Design in progress</strong><p>Oracle ATP is selected. Shared-schema tenancy is approved. Final DDL, column types, indexes and migration scripts are not yet implemented.</p></div></div><div className="domain-grid">{domains.map((d,i)=><div className="domain-card" key={d}><div className="domain-number">{String(i+1).padStart(2,"0")}</div><div><strong>{d}</strong><p>{d==="Tenant and organization"?"Tenants, branches and configuration":d==="Identity and authorization"?"Users, roles, permissions, sessions and audit":\`Entities and relationships for the \${d.toLowerCase()} domain\`}</p><span className="tag tag-amber">Design</span></div></div>)}</div><Panel title="Core logistics relationships"><Diagram chart={\`erDiagram
TENANT ||--o{ BRANCH : owns
TENANT ||--o{ USER : contains
TENANT ||--o{ CUSTOMER : serves
TENANT ||--o{ VEHICLE : manages
TENANT ||--o{ DRIVER : engages
CUSTOMER ||--o{ TRANSPORT_ORDER : places
TRANSPORT_ORDER ||--|{ SHIPMENT : creates
TRIP ||--|{ TRIP_SHIPMENT : carries
SHIPMENT ||--o{ TRIP_SHIPMENT : assigned_to
TRIP ||--o{ TRIP_VEHICLE : uses
VEHICLE ||--o{ TRIP_VEHICLE : allocated
TRIP ||--o{ TRIP_DRIVER : staffed_by
DRIVER ||--o{ TRIP_DRIVER : assigned
TRIP ||--o{ EXPENSE : incurs
CUSTOMER ||--o{ INVOICE : billed
PARTNER ||--o{ PARTNER_SETTLEMENT : settled
TENANT ||--o{ AUDIT_LOG : records\`}/></Panel><Panel title="Tenant isolation requirements"><ul className="bullet-list"><li>Every tenant-owned business record has a mandatory tenant_id.</li><li>Tenant ID is derived from the authenticated backend identity, never trusted from browser input.</li><li>Use tenant-scoped repository methods and tenant-aware foreign-key/unique constraints.</li><li>Validate ownership of every referenced ID, including nested shipment, trip, invoice and document IDs.</li><li>Automated negative tests must prove cross-tenant reads and writes are rejected.</li><li>Financial records are auditable; posted entries are corrected by reversal/adjustment rather than destructive edits.</li></ul></Panel></>}\n`;
app = app.slice(0, databaseStart) + databaseReplacement + app.slice(databaseEnd + 1);
fs.writeFileSync(appPath, app);

console.log("Command Center update applied.");
console.log("Next: review docs/, run npm install if needed, then npm run build.");
console.log("Note: seedData is only the initial seed. Existing browser LocalStorage may continue to override it; export your current state before clearing or resetting local data.");
