# Data Flow Documentation

## Customer enquiry
Website form → React frontend → central API client → Nginx → Spring Boot CRM API → CRM service → Oracle ATP → lead created → notification → CRM dashboard.

## Transport booking
Customer portal → Booking API → customer validation → pricing engine → order service → Oracle ATP → order confirmation.

## Trip execution
Order → shipment → vehicle allocation → driver allocation → trip → GPS updates → delivery proof → trip completion.

## Financial flow
Completed trip → customer invoice → accounts receivable → payment receipt → accounting journal → financial dashboard.

## Attached vehicle flow
Customer order → partner vehicle allocation → trip execution → customer invoice → partner payable → settlement approval → partner payment.

API paths, tables and exact rules remain to be finalized during detailed design.
