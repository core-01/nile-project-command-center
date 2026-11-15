# Oracle ATP Database Architecture

**Database choice:** Oracle Autonomous Transaction Processing  
**Tenancy:** One shared database, one shared schema, mandatory `tenant_id` for tenant-owned rows  
**Status:** Logical design in progress; no production DDL is approved

## 1. Domain groups and logical entities

### Tenant and identity
`tenants`, `branches`, `users`, `roles`, `permissions`, `user_roles`, `role_permissions`, `user_sessions`, `audit_logs`.

### CRM and commercial
`leads`, `customers`, `customer_contacts`, `customer_addresses`, `service_types`, `rate_cards`, `rate_card_rules`, `quotations`, `quotation_items`, `quotation_approvals`, `contracts`, `contract_versions`, `contract_documents`.

### Orders, shipments and trips
`transport_orders`, `order_items`, `shipments`, `shipment_stops`, `trips`, `trip_shipments`, `trip_vehicles`, `trip_drivers`, `trip_events`, `tracking_events`, `proof_of_delivery`.

### Fleet and drivers
`vehicles`, `vehicle_ownership`, `vehicle_categories`, `vehicle_documents`, `drivers`, `driver_documents`, `vehicle_availability`, `driver_availability`.

### Billing and finance
`invoices`, `invoice_items`, `payments`, `payment_allocations`, `expenses`, `expense_categories`, `partners`, `partner_rate_cards`, `partner_settlements`, `settlement_items`, `journal_entries`, `journal_lines`.

## 2. Relationship rules

- One customer can place many transport orders.
- One transport order can create one or many shipments.
- A trip is separate from a shipment.
- A trip can carry multiple shipments through `trip_shipments`.
- A trip can have multiple vehicle allocations and driver allocations through separate join/history tables.
- A shipment may be assigned to different trips over its lifecycle, subject to business rules and allocation history.
- Customer invoices and partner settlements are separate aggregates.
- Expenses can be linked to trips and categorized.
- Every tenant-owned row belongs to exactly one tenant.

## 3. Tenant integrity

- Add mandatory `tenant_id` to all tenant-owned tables.
- Resolve tenant ID only from authenticated server-side identity.
- Use repository methods such as `findByIdAndTenantId`.
- Validate tenant ownership for all foreign IDs before writes.
- Apply tenant-aware unique constraints (for example `(tenant_id, customer_code)`).
- Use composite tenant-aware foreign keys where appropriate to prevent cross-tenant references at the database layer.
- Index tenant-first for common access patterns.
- Platform-level shared reference data must be explicitly classified and must not accidentally inherit tenant ownership.

## 4. Oracle conventions

- Tables: plural `snake_case`.
- Primary key: `id`; tenant key: `tenant_id`.
- Use Oracle `NUMBER` for IDs and exact numeric values; do not use floating point for money.
- Use appropriate `VARCHAR2`, `CLOB`, `TIMESTAMP WITH TIME ZONE` and numeric precision.
- Name constraints and indexes consistently.
- Candidate indexes: `(tenant_id, status)`, `(tenant_id, transport_order_id)`, `(tenant_id, planned_start_at)`, `(tenant_id, customer_id)` based on actual query patterns and explain plans.

## 5. Migrations

Flyway versioned SQL migrations are recommended. Use names such as `V001__create_tenant_and_identity.sql`. Never edit an already-applied migration; add a new migration. Keep schema changes compatible with the deployed application version during rollout. Configure JPA schema validation rather than automatic schema mutation.

## 6. Financial integrity

Use exact decimal amounts and explicit currency/tax treatment. Journal header + lines; total debits must equal total credits. Keep immutable posting/audit history and use reversal/adjustment records for corrections. Payment allocation supports partial payments and allocation across invoices.

## 7. Before approving physical schema

Confirm ID strategy, currency/tax model, branch-level data scope, deletion/retention rules, document metadata, status history strategy, allocation overlap rules, Oracle connectivity mode and migration-user privileges. Then produce ERD and reviewed DDL.
