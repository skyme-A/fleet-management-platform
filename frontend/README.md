🚀 PropelX Frontend — Web Dashboard

The PropelX frontend is a modern web dashboard built to provide real-time fleet visibility, analytics, and operational workflows for fleet managers and administrators.

This application consumes the PropelX backend API and presents role-based dashboards, fleet management views, and analytics insights.

🧱 Tech Stack

Next.js — React framework for server-side rendering

React 18 — Component-based UI

TypeScript — Type safety (optional but recommended)

Axios — API client for backend communication
✨ Features

📊 Fleet dashboard with real-time KPIs

🚚 Fleet overview and vehicle status

📈 Analytics views

🧭 Shared layout with navigation

🔌 API integration with backend

⚙️ Environment-based configuration

✨ Features

📊 Fleet dashboard with real-time KPIs

🚚 Fleet overview and vehicle status

📈 Analytics views

🧭 Shared layout with navigation

🔌 API integration with backend

📦 Project Structure

frontend/
  components/
    Layout.tsx
  lib/
    api.ts
  pages/
    index.tsx        # Dashboard
    fleet.tsx        # Fleet Overview
    analytics.tsx    # Analytics
    _app.tsx
  .env.example
  package.json
  README.md
🚀 Getting Started
Prerequisites

Node.js 18+

Backend API running

Installation
npm install
Environment Setup

Create a .env.local file:
NEXT_PUBLIC_API_URL=http://localhost:3000

Run Development Server
npm run dev

Open:
http://localhost:3000

🔌 API Integration

The frontend communicates with the backend via Axios.

API client is defined in:
lib/api.ts
Example:
getFleetVehicles()
getDashboardSummary()


🛣 Roadmap

Authentication & protected routes

Role-based UI rendering

Real-time charts & visualizations

Mobile-responsive design

UI component library (Tailwind / shadcn)

)

🔗 Related Repositories

Backend API: (add link here)

Main Project: PropelX Fleet Management Platform

👨‍💻 Author

Built as part of the PropelX full-stack fleet management platform.
