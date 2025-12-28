# Day 1 — Backend Foundations & Deployment Experiments ✅

**Purpose:** This repository is a concise, intentional sandbox for learning how real backends behave when moved from local development into production environments. It focuses on exploring failure modes, misconfigurations, and debugging techniques rather than building a feature-complete product.

---

## What this Project Was For 💡
- Understand Express backend fundamentals and real deployment workflows
- Experience routing, CORS, and environment issues in realistic scenarios
- Practice debugging using server logs, browser DevTools, and careful inspection
- Build durable mental models for real-world backend behavior

## What Was Implemented 🔧
- Node.js + Express backend
- Modular folder structure: `routes/`, `controllers/`
- API routing using `/api/*`
- Basic frontend → backend communication using `fetch`
- Environment variable handling using `dotenv`
- Backend deployed on **Render** and frontend on **Netlify** (deployment experiments)

## Key Learnings from Day 1 📚
- **Root (/) responding does not guarantee API routes work** — verify route mounting and handlers
- **Exact file paths and route mounting matter** in production (case-sensitive filesystems like Linux)
- **CORS errors are browser-side protections**, not server crashes — check headers and client behavior
- **Deployment environments differ from localhost** — logs, environment vars, and file paths can change behavior
- **Reading logs and reproducing issues is essential** to find real causes

## Why the Project Was Not Continued ✋
This repository intentionally served as a diagnostic learning sandbox. Once the learning objectives were achieved, the project was frozen and further work moved to a clean, stable codebase. The goal was to learn, not to produce a polished product — mirroring how teams handle proofs-of-concept.

## Tech Stack
- Node.js
- Express
- Render (backend hosting)
- Netlify (frontend hosting)
- Git & GitHub

## Next Steps 🚀
Development continues in subsequent projects (Day 2+) with a focus on:
- Clean backend architecture and authentication
- Admin dashboards, payments, and scalable systems
- Integrations (including AI) and production-grade practices

## Important Note
This repository remains as a learning artifact documenting real-world backend challenges.
