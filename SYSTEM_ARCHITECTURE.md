# System Architecture

## Target topology
Users → React frontend / portals → Nginx HTTPS → Spring Boot REST API → Oracle ATP.

Additional target services: OCI Object Storage, GPS/telematics, payment gateway, email and SMS providers.

## Technology direction
Frontend: React, TypeScript, Vite, React Router, Tailwind, Axios, TanStack Query, Zustand.
Backend: Java 21, Spring Boot 3.x, Spring Security, REST, Spring Data JPA.
Database: Oracle ATP.
Infrastructure: OCI Linux compute, Nginx, HTTPS and OCI Object Storage.

This is a proposed target architecture, not a statement that the logistics platform has been implemented.
