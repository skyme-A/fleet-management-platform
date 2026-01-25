⚙️ PropelX Backend — Fleet Management API

The PropelX backend is a scalable, production-style API that powers the PropelX fleet management platform. It provides secure access to fleet data, analytics, alerts, and maintenance workflows through a modular, service-oriented architecture.

This API is designed to support real-world SaaS use cases, including background processing, analytics aggregation, and role-based access control.
.

🧱 Tech Stack

Node.js — Server runtime

NestJS — Scalable backend framework

TypeScript — Type-safe backend development

PostgreSQL — Primary relational database

Redis — Caching & background jobs

BullMQ — Job queue & background processing

JWT Authentication — Secure API access

Swagger (OpenAPI) — API documentation

✨ Core Features

🔐 JWT-based authentication & RBAC

🚚 Fleet & vehicle management APIs

👨‍✈️ Driver management

📊 Analytics & KPI aggregation

🛠 Maintenance scheduling & alerts

🔁 Background job processing

⚡ Redis caching for hot paths

📘 Interactive Swagger API docs

📦 Project Structure
backend/
  src/
    main.ts
    app.module.ts
    auth/
    fleet/
    drivers/
    analytics/
    maintenance/
  Dockerfile
  .dockerignore
  package.json
  tsconfig.json
  README.md

🚀 Getting Started
Prerequisites
Node.js 18+

PostgreSQL

Redis

Docker (optional)

Installation
npm install

Environment Variables

Create a .env file:

DATABASE_URL=postgresql://user:password@localhost:5432/propelx
REDIS_URL=redis://localhost:6379
JWT_SECRET=super-secret
NODE_ENV=development

Environment Variables

Create a .env file:
DATABASE_URL=postgresql://user:password@localhost:5432/propelx
REDIS_URL=redis://localhost:6379
JWT_SECRET=super-secret
NODE_ENV=development

Run with Docker
docker build -t propelx-backend .
docker run -p 3000:3000 propelx-backend


📘 API Documentation (Swagger)
http://localhost:3000/api/docs

🌱 Seed Data
npm run seed

🔁 Background Jobs

The backend uses BullMQ + Redis for:

Alert generation

Maintenance scheduling

Safety score recalculation

Report generation

generation

🔐 Security

JWT authentication

Role-Based Access Control (RBAC)

Environment-based secrets

Rate limiting (optional)

)

🛣 Roadmap

WebSocket-based real-time updates

ML-based predictive maintenance

Multi-region deployment

Advanced analytics pipelines

pipelines

🔗 Related Projects

Frontend Web App: (add link here)

Main Project README: (add link here)

👨‍💻 Author

Built as part of the PropelX Fleet Management Platform.
