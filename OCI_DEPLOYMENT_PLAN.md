# OCI Deployment Plan

Target: OCI Linux Compute Instance → Nginx → React static frontend and Spring Boot backend → Oracle ATP.

Additional services: OCI Object Storage, DNS, HTTPS, GPS, email/SMS and payment providers.

Operational work includes secure environment configuration, ATP wallet handling, Nginx routing, backend service supervision, frontend build, backup/restore, logging, monitoring and security review.

Keep deployment tasks distinct from feature implementation tasks. Do not commit credentials, wallets or private keys to Git.
