Day 1 – Backend Foundations & Deployment Experiments

This project represents Day 1 of my end-to-end web engineering journey, focused on understanding how modern backends actually behave in real-world deployment scenarios.

Rather than aiming for a polished product, this project intentionally explores common failure points, misconfigurations, and integration issues that developers face when moving from local development to production.

Purpose of This Project

The goal of this project was to:

Understand Express backend fundamentals

Learn real deployment workflows (not just localhost success)

Experience and analyze routing, CORS, and environment issues

Practice debugging using logs, browser DevTools, and server output

Build mental models instead of blindly following tutorials

This project is not extended further by design. Its purpose is learning, not feature completeness.

What Was Implemented

Node.js + Express backend

Modular folder structure:

routes

controllers

API routing using /api/*

Basic frontend → backend communication using fetch

Backend deployed on Render

Frontend deployed on Netlify

Environment variable handling using dotenv

Key Learnings from Day 1

Backend root (/) working does not guarantee API routes are working

Route mounting and file paths must be exact in production

Folder naming and casing matter on Linux servers

CORS errors indicate browser-side blocking, not server crashes

Deployment environments behave very differently from localhost

Reading logs is a core engineering skill

These lessons are more valuable than completing a “perfect” demo app.

Why This Project Is Not Continued

This project served as a diagnostic and learning sandbox.

Once the learning objectives were achieved:

The project was intentionally frozen

Further development moved to a clean, stable codebase

New projects build on the concepts learned here, not the code itself

This mirrors how real engineering teams handle proof-of-concepts.

Tech Stack

Node.js

Express.js

Render (Backend hosting)

Netlify (Frontend hosting)

Git & GitHub

Next Steps

Development continues in new projects starting Day 2, focusing on:

Clean backend architecture

Authentication systems

Admin dashboards

Payments

AI integrations

Scalable, sellable products

This repository remains as a learning artifact documenting real-world backend challenges.
