# API Specification

The following are proposed contracts only.

## Authentication
- POST /api/v1/auth/login
- POST /api/v1/auth/logout
- GET /api/v1/auth/me

## CRM
- GET /api/v1/leads
- POST /api/v1/leads
- GET /api/v1/leads/{id}
- PUT /api/v1/leads/{id}

## Customers
- GET /api/v1/customers
- POST /api/v1/customers
- GET /api/v1/customers/{id}

## Fleet
- GET /api/v1/vehicles
- POST /api/v1/vehicles
- GET /api/v1/vehicles/{id}
- PUT /api/v1/vehicles/{id}

## Transport
- GET /api/v1/orders
- POST /api/v1/orders
- GET /api/v1/shipments
- POST /api/v1/trips

## Finance
- GET /api/v1/invoices
- POST /api/v1/invoices
- GET /api/v1/payments

Every endpoint requires request/response schemas, headers, parameters, errors, authentication, permissions, persistence mapping and implementation status before approval.
