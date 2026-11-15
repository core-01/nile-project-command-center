import type { ProjectState } from '../types';
export const seedData: ProjectState = {
  "schemaVersion": 1,
  "project": {
    "name": "Nile Technologies",
    "description": "Logistics Management Platform | Engineering & Development Tracker",
    "status": "Planning",
    "currentPhase": "P0",
    "developer": "Single Developer",
    "theme": "light"
  },
  "phases": [
    {
      "id": "P0",
      "name": "Planning & Technical Foundation",
      "objective": "Finalize business, architecture, tenant, data and delivery foundations.",
      "deliverable": "Approved technical foundation.",
      "taskIds": [
        "NT-001",
        "NT-002",
        "NT-003",
        "NT-004",
        "NT-005",
        "NT-006",
        "NT-007",
        "NT-008",
        "NT-009",
        "NT-010",
        "NT-011"
      ]
    },
    {
      "id": "P1",
      "name": "Core Platform",
      "objective": "Build the application foundation and core master data.",
      "deliverable": "Operational application foundation with core business master data.",
      "taskIds": [
        "NT-012",
        "NT-013",
        "NT-014",
        "NT-015",
        "NT-016",
        "NT-017",
        "NT-018",
        "NT-019",
        "NT-020",
        "NT-021",
        "NT-022",
        "NT-023",
        "NT-024",
        "NT-025",
        "NT-026"
      ]
    },
    {
      "id": "P2",
      "name": "Sales & Commercial Operations",
      "objective": "Acquire customers and convert demand into confirmed orders.",
      "deliverable": "Ability to acquire customers and create confirmed transportation orders.",
      "taskIds": [
        "NT-027",
        "NT-028",
        "NT-029",
        "NT-030",
        "NT-031",
        "NT-032",
        "NT-033",
        "NT-034",
        "NT-035"
      ]
    },
    {
      "id": "P3",
      "name": "Logistics Operations",
      "objective": "Execute transportation from booking through proof of delivery.",
      "deliverable": "Ability to manage transportation from booking to delivery.",
      "taskIds": [
        "NT-036",
        "NT-037",
        "NT-038",
        "NT-039",
        "NT-040",
        "NT-041",
        "NT-042",
        "NT-043",
        "NT-044",
        "NT-045",
        "NT-046"
      ]
    },
    {
      "id": "P4",
      "name": "Financial Management",
      "objective": "Establish billing, collections, payables and profitability.",
      "deliverable": "Financial visibility over transportation operations.",
      "taskIds": [
        "NT-047",
        "NT-048",
        "NT-049",
        "NT-050",
        "NT-051",
        "NT-052",
        "NT-053",
        "NT-054",
        "NT-055",
        "NT-056",
        "NT-057",
        "NT-058"
      ]
    },
    {
      "id": "P5",
      "name": "Fleet Intelligence",
      "objective": "Connect vehicles and improve utilization, maintenance and tracking.",
      "deliverable": "Connected fleet management.",
      "taskIds": [
        "NT-059",
        "NT-060",
        "NT-061",
        "NT-062",
        "NT-063",
        "NT-064",
        "NT-065",
        "NT-066"
      ]
    },
    {
      "id": "P6",
      "name": "Human Resources",
      "objective": "Manage employees, drivers, attendance and payroll.",
      "deliverable": "Workforce management.",
      "taskIds": [
        "NT-067",
        "NT-068",
        "NT-069",
        "NT-070",
        "NT-071",
        "NT-072",
        "NT-073"
      ]
    },
    {
      "id": "P7",
      "name": "SaaS Expansion",
      "objective": "Prepare tenant self-service, subscriptions and platform controls.",
      "deliverable": "SaaS-ready multi-tenant logistics platform.",
      "taskIds": [
        "NT-074",
        "NT-075",
        "NT-076",
        "NT-077",
        "NT-078",
        "NT-079",
        "NT-080",
        "NT-081",
        "NT-082"
      ]
    }
  ],
  "tasks": [
    {
      "id": "NT-001",
      "title": "Finalize business requirements",
      "description": "Finalize and baseline the Nile Technologies logistics business requirements: services, pricing, commercial workflow, operations lifecycle, financial controls and MVP scope.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Business Analysis",
      "priority": "High",
      "status": "Completed",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "BRD v1.0 is committed.",
        "All eight transportation service categories and eight pricing methods are recorded.",
        "MVP business lifecycle, operating rules and phases are documented."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-002",
      "title": "Finalize system architecture",
      "description": "Document modular-monolith architecture, module boundaries, API/data flow, deployment topology and pending decisions.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Architecture",
      "priority": "High",
      "status": "In Review",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Architecture blueprint is documented.",
        "Module boundaries and dependency rules are documented.",
        "Approved and pending decisions are clearly distinguished."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-003",
      "title": "Finalize database architecture",
      "description": "Finalize Oracle ATP logical and physical schema, tenant-aware relationships, constraints, indexes and migration sequence.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Architecture",
      "priority": "High",
      "status": "In Progress",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "ER model covers identity, CRM, commercial, logistics, fleet and finance.",
        "Tenant ownership, constraints and indexes are reviewed.",
        "Oracle-compatible schema design is documented."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-004",
      "title": "Define tenant model",
      "description": "Approve shared Oracle ATP database/shared schema tenancy with mandatory tenant_id and trusted server-side tenant context.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Architecture",
      "priority": "High",
      "status": "Completed",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Shared schema strategy is approved.",
        "Tenant identity comes from authenticated backend identity, never browser input.",
        "Tenant isolation includes services, repositories, jobs, documents and automated tests."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-005",
      "title": "Define user roles and permissions",
      "description": "Define platform and tenant roles, granular permissions, scope boundaries and record-level authorization.",
      "phaseId": "P0",
      "module": "CRM and Sales",
      "category": "Business Analysis",
      "priority": "High",
      "status": "Ready",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Platform Superadmin and tenant roles are distinguished.",
        "Admin, operations, fleet, finance, customer, partner and driver permissions are mapped."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-006",
      "title": "Define backend project structure",
      "description": "Define feature-oriented Maven/Spring Boot modular-monolith package structure and module ownership.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Backend",
      "priority": "High",
      "status": "Completed",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Backend package structure and module ownership are documented.",
        "Cross-module repository access is prohibited."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-007",
      "title": "Define frontend project structure",
      "description": "Define React/TypeScript frontend structure, route groups, API client, state and feature conventions.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Backend",
      "priority": "High",
      "status": "Ready",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Feature structure is documented.",
        "Internal, customer, partner and driver route groups are defined."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-008",
      "title": "Configure Oracle ATP connectivity",
      "description": "Configure and verify secure connectivity from Spring Boot to the existing Oracle ATP database.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Database",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Select TLS or mTLS connection mode.",
        "Keep credentials and wallet material outside Git.",
        "Verify connectivity from the development environment."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-009",
      "title": "Prepare OCI deployment architecture",
      "description": "Prepare OCI Linux deployment topology, Nginx/HTTPS, systemd, secrets, storage and observability plan.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Architecture",
      "priority": "High",
      "status": "Ready",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "OCI deployment topology is documented.",
        "Health checks, logs, backups and database privileges are documented."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-010",
      "title": "Create API standards",
      "description": "Define REST API conventions: versioning, DTOs, pagination, errors, validation, idempotency and security.",
      "phaseId": "P0",
      "module": "CRM and Sales",
      "category": "Backend",
      "priority": "High",
      "status": "Ready",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "API conventions and standard errors are documented.",
        "Tenant ID is never trusted from arbitrary request fields."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-011",
      "title": "Create GitHub repositories",
      "description": "Create and identify separate command-center and logistics-platform GitHub repositories.",
      "phaseId": "P0",
      "module": "Administration",
      "category": "Deployment",
      "priority": "High",
      "status": "Completed",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Command-center repository exists.",
        "Platform repository exists for actual application source.",
        "Command center is identified as an engineering tracker."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-012",
      "title": "Initialize Spring Boot project",
      "description": "Plan, implement, validate and document: initialize spring boot project.",
      "phaseId": "P1",
      "module": "Administration",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Initialize Spring Boot project is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-013",
      "title": "Build React enterprise application shell",
      "description": "Plan, implement, validate and document: build react enterprise application shell.",
      "phaseId": "P1",
      "module": "Administration",
      "category": "Frontend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build React enterprise application shell is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-014",
      "title": "Establish Oracle ATP connection",
      "description": "Plan, implement, validate and document: establish oracle atp connection.",
      "phaseId": "P1",
      "module": "Administration",
      "category": "Database",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Establish Oracle ATP connection is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-015",
      "title": "Configure database migration framework",
      "description": "Plan, implement, validate and document: configure database migration framework.",
      "phaseId": "P1",
      "module": "Administration",
      "category": "Database",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Configure database migration framework is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-016",
      "title": "Implement authentication",
      "description": "Plan, implement, validate and document: implement authentication.",
      "phaseId": "P1",
      "module": "Administration",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement authentication is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-017",
      "title": "Implement tenant and organization management",
      "description": "Plan, implement, validate and document: implement tenant and organization management.",
      "phaseId": "P1",
      "module": "CRM and Sales",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement tenant and organization management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-018",
      "title": "Implement branch management",
      "description": "Plan, implement, validate and document: implement branch management.",
      "phaseId": "P1",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement branch management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-019",
      "title": "Implement user management",
      "description": "Plan, implement, validate and document: implement user management.",
      "phaseId": "P1",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement user management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-020",
      "title": "Implement role and permission management",
      "description": "Plan, implement, validate and document: implement role and permission management.",
      "phaseId": "P1",
      "module": "CRM and Sales",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement role and permission management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-021",
      "title": "Build customer master",
      "description": "Plan, implement, validate and document: build customer master.",
      "phaseId": "P1",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build customer master is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-022",
      "title": "Build vehicle master",
      "description": "Plan, implement, validate and document: build vehicle master.",
      "phaseId": "P1",
      "module": "Vehicle Tracking",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build vehicle master is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-023",
      "title": "Build vehicle category management",
      "description": "Plan, implement, validate and document: build vehicle category management.",
      "phaseId": "P1",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build vehicle category management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-024",
      "title": "Build driver master",
      "description": "Plan, implement, validate and document: build driver master.",
      "phaseId": "P1",
      "module": "Driver Management",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build driver master is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-025",
      "title": "Build transport partner master",
      "description": "Plan, implement, validate and document: build transport partner master.",
      "phaseId": "P1",
      "module": "Transport Operations",
      "category": "Backend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build transport partner master is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-026",
      "title": "Build initial executive dashboard",
      "description": "Plan, implement, validate and document: build initial executive dashboard.",
      "phaseId": "P1",
      "module": "Executive Dashboard",
      "category": "Frontend",
      "priority": "High",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build initial executive dashboard is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-027",
      "title": "Build public enquiry website",
      "description": "Plan, implement, validate and document: build public enquiry website.",
      "phaseId": "P2",
      "module": "Administration",
      "category": "Frontend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build public enquiry website is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-028",
      "title": "Implement lead management",
      "description": "Plan, implement, validate and document: implement lead management.",
      "phaseId": "P2",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement lead management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-029",
      "title": "Implement CRM",
      "description": "Plan, implement, validate and document: implement crm.",
      "phaseId": "P2",
      "module": "CRM and Sales",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement CRM is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-030",
      "title": "Implement customer onboarding",
      "description": "Plan, implement, validate and document: implement customer onboarding.",
      "phaseId": "P2",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement customer onboarding is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-031",
      "title": "Implement quotation management",
      "description": "Plan, implement, validate and document: implement quotation management.",
      "phaseId": "P2",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement quotation management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-032",
      "title": "Implement pricing configuration",
      "description": "Plan, implement, validate and document: implement pricing configuration.",
      "phaseId": "P2",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement pricing configuration is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-033",
      "title": "Implement contract management",
      "description": "Plan, implement, validate and document: implement contract management.",
      "phaseId": "P2",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement contract management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-034",
      "title": "Implement booking management",
      "description": "Plan, implement, validate and document: implement booking management.",
      "phaseId": "P2",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement booking management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-035",
      "title": "Implement transport order creation",
      "description": "Plan, implement, validate and document: implement transport order creation.",
      "phaseId": "P2",
      "module": "Order Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement transport order creation is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-036",
      "title": "Implement shipment management",
      "description": "Plan, implement, validate and document: implement shipment management.",
      "phaseId": "P3",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement shipment management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-037",
      "title": "Implement trip creation",
      "description": "Plan, implement, validate and document: implement trip creation.",
      "phaseId": "P3",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement trip creation is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-038",
      "title": "Implement vehicle allocation",
      "description": "Plan, implement, validate and document: implement vehicle allocation.",
      "phaseId": "P3",
      "module": "Vehicle Tracking",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement vehicle allocation is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-039",
      "title": "Implement driver allocation",
      "description": "Plan, implement, validate and document: implement driver allocation.",
      "phaseId": "P3",
      "module": "Driver Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement driver allocation is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-040",
      "title": "Implement trip scheduling",
      "description": "Plan, implement, validate and document: implement trip scheduling.",
      "phaseId": "P3",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement trip scheduling is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-041",
      "title": "Implement trip status management",
      "description": "Plan, implement, validate and document: implement trip status management.",
      "phaseId": "P3",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement trip status management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-042",
      "title": "Implement pickup confirmation",
      "description": "Plan, implement, validate and document: implement pickup confirmation.",
      "phaseId": "P3",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement pickup confirmation is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-043",
      "title": "Implement delivery confirmation",
      "description": "Plan, implement, validate and document: implement delivery confirmation.",
      "phaseId": "P3",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement delivery confirmation is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-044",
      "title": "Implement proof of delivery",
      "description": "Plan, implement, validate and document: implement proof of delivery.",
      "phaseId": "P3",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement proof of delivery is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-045",
      "title": "Implement trip expense recording",
      "description": "Plan, implement, validate and document: implement trip expense recording.",
      "phaseId": "P3",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement trip expense recording is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-046",
      "title": "Build operational dashboard",
      "description": "Plan, implement, validate and document: build operational dashboard.",
      "phaseId": "P3",
      "module": "Executive Dashboard",
      "category": "Frontend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build operational dashboard is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-047",
      "title": "Implement invoice generation",
      "description": "Plan, implement, validate and document: implement invoice generation.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement invoice generation is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-048",
      "title": "Implement payment recording",
      "description": "Plan, implement, validate and document: implement payment recording.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement payment recording is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-049",
      "title": "Track customer outstanding balances",
      "description": "Plan, implement, validate and document: track customer outstanding balances.",
      "phaseId": "P4",
      "module": "CRM and Sales",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Track customer outstanding balances is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-050",
      "title": "Implement trip expense management",
      "description": "Plan, implement, validate and document: implement trip expense management.",
      "phaseId": "P4",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement trip expense management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-051",
      "title": "Implement partner settlements",
      "description": "Plan, implement, validate and document: implement partner settlements.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement partner settlements is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-052",
      "title": "Implement accounts payable",
      "description": "Plan, implement, validate and document: implement accounts payable.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement accounts payable is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-053",
      "title": "Implement accounts receivable",
      "description": "Plan, implement, validate and document: implement accounts receivable.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement accounts receivable is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-054",
      "title": "Design chart of accounts",
      "description": "Plan, implement, validate and document: design chart of accounts.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Database",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Design chart of accounts is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-055",
      "title": "Implement double-entry accounting",
      "description": "Plan, implement, validate and document: implement double-entry accounting.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement double-entry accounting is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-056",
      "title": "Build financial reports",
      "description": "Plan, implement, validate and document: build financial reports.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build financial reports is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-057",
      "title": "Calculate vehicle profitability",
      "description": "Plan, implement, validate and document: calculate vehicle profitability.",
      "phaseId": "P4",
      "module": "Vehicle Tracking",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Calculate vehicle profitability is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-058",
      "title": "Calculate trip profitability",
      "description": "Plan, implement, validate and document: calculate trip profitability.",
      "phaseId": "P4",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Calculate trip profitability is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-059",
      "title": "Integrate GPS provider",
      "description": "Plan, implement, validate and document: integrate gps provider.",
      "phaseId": "P5",
      "module": "Administration",
      "category": "Integration",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Integrate GPS provider is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-060",
      "title": "Implement live vehicle tracking",
      "description": "Plan, implement, validate and document: implement live vehicle tracking.",
      "phaseId": "P5",
      "module": "Vehicle Tracking",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement live vehicle tracking is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-061",
      "title": "Store location history",
      "description": "Plan, implement, validate and document: store location history.",
      "phaseId": "P5",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Store location history is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-062",
      "title": "Implement route monitoring",
      "description": "Plan, implement, validate and document: implement route monitoring.",
      "phaseId": "P5",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement route monitoring is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-063",
      "title": "Implement fuel management",
      "description": "Plan, implement, validate and document: implement fuel management.",
      "phaseId": "P5",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement fuel management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-064",
      "title": "Implement maintenance scheduling",
      "description": "Plan, implement, validate and document: implement maintenance scheduling.",
      "phaseId": "P5",
      "module": "Maintenance",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement maintenance scheduling is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-065",
      "title": "Configure insurance and permit alerts",
      "description": "Plan, implement, validate and document: configure insurance and permit alerts.",
      "phaseId": "P5",
      "module": "CRM and Sales",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Configure insurance and permit alerts is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-066",
      "title": "Build vehicle utilization reports",
      "description": "Plan, implement, validate and document: build vehicle utilization reports.",
      "phaseId": "P5",
      "module": "Vehicle Tracking",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build vehicle utilization reports is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-067",
      "title": "Implement employee management",
      "description": "Plan, implement, validate and document: implement employee management.",
      "phaseId": "P6",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement employee management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-068",
      "title": "Maintain driver employment records",
      "description": "Plan, implement, validate and document: maintain driver employment records.",
      "phaseId": "P6",
      "module": "Driver Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Maintain driver employment records is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-069",
      "title": "Implement attendance",
      "description": "Plan, implement, validate and document: implement attendance.",
      "phaseId": "P6",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement attendance is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-070",
      "title": "Implement leave management",
      "description": "Plan, implement, validate and document: implement leave management.",
      "phaseId": "P6",
      "module": "Customer Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement leave management is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-071",
      "title": "Implement payroll",
      "description": "Plan, implement, validate and document: implement payroll.",
      "phaseId": "P6",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement payroll is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-072",
      "title": "Implement driver incentives",
      "description": "Plan, implement, validate and document: implement driver incentives.",
      "phaseId": "P6",
      "module": "Driver Management",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement driver incentives is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-073",
      "title": "Build salary reports",
      "description": "Plan, implement, validate and document: build salary reports.",
      "phaseId": "P6",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build salary reports is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-074",
      "title": "Implement self-service tenant registration",
      "description": "Plan, implement, validate and document: implement self-service tenant registration.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement self-service tenant registration is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-075",
      "title": "Define subscription plans",
      "description": "Plan, implement, validate and document: define subscription plans.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Define subscription plans is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-076",
      "title": "Implement subscription billing",
      "description": "Plan, implement, validate and document: implement subscription billing.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement subscription billing is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-077",
      "title": "Implement feature entitlements",
      "description": "Plan, implement, validate and document: implement feature entitlements.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement feature entitlements is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-078",
      "title": "Implement tenant configuration",
      "description": "Plan, implement, validate and document: implement tenant configuration.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement tenant configuration is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-079",
      "title": "Implement tenant-specific branding",
      "description": "Plan, implement, validate and document: implement tenant-specific branding.",
      "phaseId": "P7",
      "module": "CRM and Sales",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement tenant-specific branding is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-080",
      "title": "Implement advanced RBAC",
      "description": "Plan, implement, validate and document: implement advanced rbac.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement advanced RBAC is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-081",
      "title": "Build platform administration",
      "description": "Plan, implement, validate and document: build platform administration.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Build platform administration is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    },
    {
      "id": "NT-082",
      "title": "Implement usage monitoring",
      "description": "Plan, implement, validate and document: implement usage monitoring.",
      "phaseId": "P7",
      "module": "Administration",
      "category": "Backend",
      "priority": "Medium",
      "status": "Not Started",
      "estimate": 2,
      "actual": 0,
      "dependencies": [],
      "acceptance": [
        "Implement usage monitoring is implemented and validated.",
        "Relevant documentation and tests are updated."
      ],
      "notes": "",
      "createdAt": "2026-11-15",
      "updatedAt": "2026-11-15"
    }
  ],
  "journal": [],
  "decisions": [
    {
      "id": "ADR-001",
      "title": "Modular monolith versus microservices",
      "context": "Balance delivery speed, maintainability and future scale for a single developer.",
      "options": "Modular monolith; microservices",
      "chosen": "Modular monolith",
      "reason": "One Spring Boot deployment with explicit feature modules minimizes operational overhead while preserving boundaries.",
      "consequences": "Modules own their logic and persistence; no cross-module repository access. Microservices are deferred until justified.",
      "status": "Approved",
      "date": "2026-11-15"
    },
    {
      "id": "ADR-002",
      "title": "Primary database",
      "context": "An existing Oracle Autonomous Transaction Processing database is available.",
      "options": "Oracle ATP; alternative relational database",
      "chosen": "Oracle ATP",
      "reason": "Use the existing Oracle ATP investment for the MVP.",
      "consequences": "Schema, migrations, JDBC, types and indexes must be Oracle-compatible; connectivity still needs verification.",
      "status": "Selected",
      "date": "2026-11-15"
    },
    {
      "id": "ADR-003",
      "title": "Multi-tenant data isolation",
      "context": "Initial Nile deployment may expand to multiple logistics companies.",
      "options": "Shared schema; schema per tenant; database per tenant",
      "chosen": "One shared Oracle ATP database and shared schema with mandatory tenant_id",
      "reason": "Lowest operational complexity for the MVP, with tenant scope enforced throughout backend and persistence.",
      "consequences": "Tenant-aware constraints, jobs, documents and cross-tenant negative tests are mandatory. Nile is not hardcoded as a special tenant.",
      "status": "Approved",
      "date": "2026-11-15"
    },
    {
      "id": "ADR-004",
      "title": "Authentication session and token strategy",
      "context": "React frontend requires secure authenticated access to the Spring Boot API.",
      "options": "JWT access + refresh tokens; server-side sessions",
      "chosen": "Pending approval",
      "reason": "JWT access/refresh is recommended but token storage, expiry, rotation and revocation are not approved.",
      "consequences": "Do not implement token lifecycle assumptions until approved. Spring Security remains the foundation.",
      "status": "Pending",
      "date": "2026-11-15"
    },
    {
      "id": "ADR-005",
      "title": "Transportation pricing methods",
      "context": "Business requires flexible one-off and repeat-customer pricing.",
      "options": "Per km; per trip; per ton/weight; per vehicle; per day/month; fixed route; contract; custom quotation",
      "chosen": "Support all eight pricing methods",
      "reason": "The MVP must support the agreed service and commercial use cases.",
      "consequences": "Rules are configurable by customer, service, vehicle category and route; additional charges and discounts are supported.",
      "status": "Approved",
      "date": "2026-11-15"
    },
    {
      "id": "ADR-006",
      "title": "Document storage",
      "context": "POD, contracts, vehicle documents, invoices and receipts require file storage.",
      "options": "Database BLOB; OCI Object Storage",
      "chosen": "OCI Object Storage with ATP metadata",
      "reason": "Keep transactional metadata in ATP and binary files in object storage.",
      "consequences": "Private buckets, tenant-scoped keys and authorization checks are required; final configuration remains pending.",
      "status": "Recommended",
      "date": "2026-11-15"
    }
  ],
  "risks": [
    {
      "id": "RISK-001",
      "description": "Single-developer dependency may constrain delivery and support.",
      "category": "Delivery",
      "impact": "High",
      "probability": "High",
      "mitigation": "Keep scope phased, automate checks, document decisions and prioritize a thin vertical MVP.",
      "owner": "Project developer",
      "status": "Open"
    },
    {
      "id": "RISK-002",
      "description": "OCI compute resource limitations may affect application performance.",
      "category": "Infrastructure",
      "impact": "Medium",
      "probability": "Medium",
      "mitigation": "Validate sizing with load tests and monitor resource consumption.",
      "owner": "Project developer",
      "status": "Open"
    },
    {
      "id": "RISK-003",
      "description": "Tenant data isolation defects could expose one organization's data to another.",
      "category": "Security",
      "impact": "Critical",
      "probability": "Medium",
      "mitigation": "Enforce tenant scoping at service and persistence layers; add negative isolation tests.",
      "owner": "Project developer",
      "status": "Open"
    },
    {
      "id": "RISK-004",
      "description": "Financial data integrity errors could affect invoices, settlements and accounting.",
      "category": "Financial",
      "impact": "Critical",
      "probability": "Medium",
      "mitigation": "Use transactional posting, immutable audit trails, reconciliation and accounting tests.",
      "owner": "Project developer",
      "status": "Open"
    },
    {
      "id": "RISK-005",
      "description": "GPS provider availability and API differences may delay fleet intelligence.",
      "category": "Integration",
      "impact": "Medium",
      "probability": "High",
      "mitigation": "Define an adapter interface and defer provider-specific implementation until selected.",
      "owner": "Project developer",
      "status": "Open"
    },
    {
      "id": "RISK-006",
      "description": "Scope expansion may delay the first usable release.",
      "category": "Scope",
      "impact": "High",
      "probability": "High",
      "mitigation": "Define MVP boundaries and require explicit change control for new scope.",
      "owner": "Project developer",
      "status": "Open"
    }
  ],
  "updatedAt": "2026-11-15T09:35:02.647Z"
};
