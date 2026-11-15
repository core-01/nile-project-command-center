# Database Architecture

Initial domains: platform; tenant and organization; identity and authorization; CRM; customers; sales; fleet; partners; orders; shipments; trips; drivers; employees; tracking; finance; accounting; maintenance; procurement; documents; audit.

Entity structures, keys, data types, foreign keys, indexes and tenant ownership remain Proposed until reviewed and approved. Do not treat the conceptual ER diagram as finalized SQL.

Tenant isolation must be enforced using trusted tenant context and tested with cross-tenant negative cases.
