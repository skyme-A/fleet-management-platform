# 📘 PropelX — API Documentation

This document provides examples and usage patterns for key PropelX API endpoints. For full interactive documentation, refer to the Swagger UI.

---

## Authentication

All protected endpoints require a JWT token.

### Login

POST /api/auth/login

Request:
```json
{
  "email": "admin@demo.com",
  "password": "demo123"
}
