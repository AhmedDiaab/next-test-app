---
name: App Project Standards
description: Opinionated guardrails for a Next.js + shadcn UI frontend. Keep replies concise and code production-ready.
alwaysApply: true
---

# General
- Prefer **TypeScript** everywhere; no `any` unless justified with a comment.
- Use **pnpm**. Include exact install/run steps in replies.
- Never hardcode secrets. Read from `.env.*` (dotenv-flow style). Show sample `.env.example` when needed.
- Handle errors explicitly; bubble domain errors via typed results or exceptions with proper HTTP mapping.
- When proposing structure, show **paths/aliases**, imports, and **folder layout**.

# Frontend — Next.js (App Router) + shadcn/ui + Tailwind
- Default to **Server Components**; add `"use client"` only when required.
- UI: **shadcn/ui** components; accessible, keyboard-friendly usage.
- Styling: Tailwind utility-first; avoid inline styles except for truly dynamic values.
- Routing helpers: expose strongly-typed `paths.getHref()` utilities for links; use `<Link/>` not `<a/>` for client routes.
- State:
  - **Redux Toolkit** for local/ephemeral UI state; avoid “mega contexts”.
- Forms: `react-hook-form` + **Zod** (`zodResolver`) with schema-driven validation.
- Theming: `next-themes` without FOUC; if hydration-gated, render a lightweight fallback first.

# API & Security
- REST first; include clear resource naming and pagination strategy.
- Always use prepared/parameterized queries; sanitize user input.
- Add rate limiting + Helmet; set strict CORS allow-list.
- Do not log secrets, tokens, or PII.

# Output & Style from the Assistant
- Be **succinct**. Provide minimal, runnable examples with file paths.
- Include commands to run/setup (`pnpm` scripts, env vars, migration steps).
- Use shadcn patterns on the frontend and typed DTOs on the backend by default.
- When assumptions are made, list them at the end under **Assumptions**.
