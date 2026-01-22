

# Backend — Fleet Management Platform (Propelx)

This folder contains the NestJS backend API for the Fleet Management Platform.  
It handles authentication, role-based access control, multi-tenancy, background job processing, and core fleet business logic.

## Architecture Overview

- RESTful API built with NestJS
- PostgreSQL for relational data
- Redis for caching and queues
- BullMQ for background job processing
- JWT-based authentication
- Role-Based Access Control (RBAC)
- Multi-tenant data isolation

## Tech Stack

- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- Redis
- BullMQ
- JWT Authentication

## Running the Backend

```bash
npm install
npm run start:dev


npm install
npm run start:dev
