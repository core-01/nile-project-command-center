# Nile Technologies Logistics Platform — Business Requirements v1.0

**Status:** Baseline for MVP planning  
**Product:** Internal logistics operations platform, designed for future multi-tenant SaaS  
**Business model:** B2B and B2C; owned and attached/third-party fleet

## 1. Business objective

Manage Nile Technologies' freight and transportation business end-to-end: customer acquisition, commercial agreements, order intake, shipment execution, fleet/driver allocation, delivery evidence, customer billing, partner settlements, expenses and operational profitability.

The command center is an engineering tracker only. It is not the logistics ERP.

## 2. Transportation services

The MVP must support:
1. Full Truckload (FTL)
2. Part Truckload (PTL)
3. Dedicated vehicle hire
4. Commercial vehicle rental
5. Tanker transportation
6. Local / intra-city delivery
7. Intercity / interstate transportation
8. Other / not yet decided (capture service details)

## 3. Pricing methods

Support all eight methods:
- Per kilometre
- Per trip
- Per ton / weight
- Per vehicle
- Per day / month
- Fixed route pricing
- Contract pricing
- Custom quotation

Pricing can be configured by customer, service type, vehicle category, route and contract. Quotation/order snapshots preserve the agreed price. Support toll, loading/unloading, waiting charges, surcharges, discounts and applicable taxes.

## 4. Commercial workflow

Lead → Customer → Quotation → Approval (where required) → Contract (where applicable) → Transport Order.

Quotations support configurable approval thresholds based on amount and/or discount. Approval/rejection actor, timestamp and rejection reason are retained.

Contracts support both:
- Manual upload of signed contract and entry of commercial details.
- Digital generation from an approved quotation, internal approval and signature tracking.

Contracts retain versions, documents, start/expiry dates, renewal reminders, customer pricing and terms. Suggested statuses: Draft, Pending Approval, Active, Expired, Terminated.

Transport orders can be created manually or converted from an approved quotation. The accepted commercial snapshot is preserved; material changes follow approval rules.

## 5. Shipment and trip execution

Both order patterns are supported:
- One transport order → one shipment.
- One transport order → multiple shipments.

Each shipment independently records cargo, weight/quantity, pickup/delivery points, status, delivery confirmation and proof of delivery (POD).

A trip is a separate execution entity. One trip can carry multiple shipments and can be assigned one or more vehicles and drivers, subject to operational validation. Allocation history and time windows must be retained. Vehicle and driver availability must be checked before allocation.

## 6. Fleet and workforce

Fleet includes company-owned and attached/third-party vehicles. Initial operating fleet estimate is approximately 50 mixed vehicles (trucks, commercial vehicles, buses, cars and tankers); confirm actual inventory during master-data onboarding.

Drivers may be employees or contracted drivers. Track vehicle ownership, documents, permits, insurance, fitness/expiry, driver documents and availability.

Owned-vehicle costs and attached-vehicle/partner costs must be distinguishable.

## 7. Finance

Keep customer invoicing and partner settlements as separate workflows. Support partial payments, payment allocation, trip-linked expenses, fuel, driver payments, maintenance, tolls, permits, insurance, partner settlements, salaries and general operating costs.

Use journal header + journal lines for accounting. Journal entries must balance. Posted financial history is not destructively edited; corrections use reversals/adjustments. Retain an auditable trail.

## 8. Roles

Initial role groups:
- Platform Superadmin
- Tenant Admin
- Operations User
- Fleet Manager
- Finance User
- Customer
- Transport Partner
- Driver

Detailed permission matrix and record-level scope are a Phase 0 deliverable.

## 9. Business lifecycle

Lead → Customer → Quotation → Contract → Transport Order → Shipment(s) → Vehicle/Driver Allocation → Trip → Tracking/Status Events → Delivery Confirmation/POD → Customer Invoice → Payment → Trip Expenses → Partner Settlement → Profitability.

## 10. MVP acceptance journey

A Nile tenant can be configured; users and roles created; customers, vehicles and drivers maintained; leads and quotations processed; approvals/contracts recorded; orders converted to shipments; trips and resources allocated; delivery and POD recorded; invoices and payments managed; expenses and partner settlements recorded; basic reports produced; and tenant isolation verified.

## 11. Phased scope

- **P0 — Foundation:** BRD, architecture, tenant strategy, data design, roles, API standards and deployment design.
- **P1 — Core platform:** tenant, identity, RBAC, branches, configuration, customer, vehicle and driver masters.
- **P2 — Sales & commercial:** leads, pricing, quotations, approvals, contracts and transport orders.
- **P3 — Logistics operations:** shipments, trips, allocations, status tracking, delivery and POD.
- **P4 — Financial management:** invoices, receipts, expenses, fuel/driver costs, partner settlements and basic profitability.
- **P5 — Fleet intelligence:** GPS, maintenance, fuel monitoring and utilization.
- **P6 — HR:** employee records, attendance, leave, payroll and driver workforce.
- **P7 — SaaS expansion:** tenant self-service, plans, subscriptions, entitlements, tenant branding and platform controls.

Prioritize P1–P4 for the first usable business platform. P5–P7 are later expansion phases.
