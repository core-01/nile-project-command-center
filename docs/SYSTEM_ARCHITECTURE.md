# System Architecture Baseline

**Architecture direction:** Modular monolith  
**Backend:** Java 21, Spring Boot 3.x, Spring Security, Spring Data JPA  
**Frontend:** React, TypeScript, Vite  
**Database:** Oracle Autonomous Transaction Processing (ATP)  
**Hosting direction:** OCI Linux, Nginx, HTTPS  
**Status:** Architecture baseline; implementation not yet started

## 1. Logical topology

React + TypeScript → Nginx/HTTPS → Spring Boot REST API → Spring Security + tenant context → business modules → Oracle ATP.

The backend stores transactional metadata in Oracle ATP and document binaries in private OCI Object Storage. External GPS, payment, SMS and email providers are accessed through adapters.

## 2. Why modular monolith

A single deployable Spring Boot application with strict feature boundaries is the preferred MVP architecture for a single developer. It reduces deployment and observability overhead while preserving the ability to extract a module later if there is a measurable reason.

Rules:
- Each module owns its controllers, application services, domain logic and persistence.
- Cross-module communication uses public application-service interfaces/use cases.
- Do not access another module's repositories directly.
- Do not expose JPA entities across module boundaries.
- Avoid circular module dependencies.
- Use in-process domain events for side effects where appropriate; no message broker is required for MVP.

## 3. Proposed backend modules

`tenant`, `identity`, `branch`, `crm`, `pricing`, `quotation`, `contract`, `order`, `shipment`, `fleet`, `driver`, `trip`, `tracking`, `document`, `billing`, `finance`, `maintenance`, `hr`, `reporting`, `platform`.

Suggested Java package root: `in.nile.logistics`.

## 4. Multi-tenancy — approved

One Oracle ATP database and one shared schema. Every tenant-owned business record carries mandatory `tenant_id`.

Tenant identity is resolved from the authenticated backend principal. A browser-supplied tenant ID is not an authorization source.

Enforcement must cover:
- API authorization and application-service operations.
- Tenant-scoped repository methods and entity relationships.
- Nested and referenced record IDs.
- Background jobs with explicit tenant context.
- Document object keys and downloads.
- Audit records and reporting queries.
- Automated negative tests for cross-tenant access.

Use tenant-aware unique constraints and composite foreign-key strategies where appropriate. Nile Technologies is the first tenant, not a hardcoded special case.

## 5. Authentication — unresolved decision

Spring Security is the selected security foundation. JWT access + refresh tokens are a recommendation only. The alternative is server-side sessions. Token storage, expiry, rotation, revocation and logout semantics require explicit approval before implementation.

## 6. API standards

Use `/api/v1/`; DTOs rather than JPA entities; pagination for collections; ISO-8601 timestamps; stable identifiers; consistent Problem Details-style errors; explicit status-transition operations; idempotency for duplicate-sensitive financial/operational actions; and tenant ownership validation for every referenced ID.

## 7. Transaction and financial integrity

Use transactions at application-service boundaries. Operations such as quotation conversion must persist order, shipment(s), pricing snapshot and history atomically. External file upload and notifications are not assumed to participate in the database transaction.

Invoices and partner settlements are separate. Support partial payment allocation. Journal entries use a header and lines and must balance. Posted financial history is corrected through reversal/adjustment, not destructive mutation.

## 8. Documents and audit

Private OCI Object Storage buckets are the recommended binary store; Oracle ATP stores metadata. Validate file type/signature and size, use tenant-scoped object keys, authorize every download and avoid public buckets.

Audit fields should include tenant, actor, action, entity, timestamp and correlation ID; old/new values must exclude secrets and sensitive authentication material. Never log passwords, tokens, private keys or wallet contents.

## 9. Deployment direction

OCI Compute + Nginx HTTPS + Spring Boot JAR managed by systemd + Oracle ATP + OCI Object Storage. Keep secrets outside Git. Restrict database network access. Expose health/readiness/liveness checks appropriately and keep detailed management endpoints private.

## 10. Proposed implementation sequence

1. Maven Spring Boot project.
2. ATP connectivity and configuration.
3. Flyway migration baseline.
4. Tenant and organization module.
5. Authentication.
6. RBAC and tenant context.
7. Branch/customer/driver masters.
8. Fleet masters.
9. CRM and pricing.
10. Quotations and approvals.
11. Contracts.
12. Orders and shipments.
13. Trips and allocations.
14. Tracking and POD.
15. Billing and payments.
16. Expenses and partner settlements.
17. Reports.
18. Security, performance and deployment hardening.
