---
sidebar_position: 9
title: API Reference
description: Xenith's public API (v1) — authentication, endpoints, rate limits, and examples for building your own tools on top of your Xenith data.
keywords:
  - xenith api
  - xenith api reference
  - xenith public api
  - xenith api key
---

# API Reference

Xenith's public API lets you read and write your own data — intentions, focus
sessions, and dimension scores — from your own scripts, tools, or
integrations. It's your data; the API just gives you a way to reach it
programmatically.

## Authentication

Create an API key in **Settings → API access**. The raw key is shown once,
at creation — store it somewhere safe, since Xenith only ever stores its
hash.

Send it as a bearer token on every request:

```bash
curl https://xenith.life/api/v1/intentions \
  -H "Authorization: Bearer xnth_live_..."
```

Requests without a valid key get `401 Unauthorized`. You can revoke a key at
any time from the same Settings page — it stops working immediately.

## Base URL

```
https://xenith.life/api/v1
```

## Rate limits

Each key is limited to **60 requests per minute**. Responses include a
`remaining` field showing how many requests you have left in the current
window; going over returns `429` with `{ "error": "rate_limited" }`.

## Errors

Errors are always a JSON body with an `error` field:

| Status | Meaning |
|---|---|
| `400` | Invalid request body or query parameters |
| `401` | Missing or invalid API key |
| `403` | Your key doesn't have the required scope |
| `429` | Rate limit exceeded |
| `500` | Something went wrong on Xenith's end |

## Intentions

### `GET /api/v1/intentions`

Requires scope `intentions:read`.

**Query parameters** (all optional):

| Param | Description |
|---|---|
| `scheduled_date` | Filter to a single date (`YYYY-MM-DD`) |
| `completed` | `true` or `false` |
| `limit` | Max results, 1–100 (default 50) |
| `cursor` | Pagination cursor — pass the previous response's `next_cursor` |

```bash
curl "https://xenith.life/api/v1/intentions?scheduled_date=2026-07-12" \
  -H "Authorization: Bearer xnth_live_..."
```

```json
{
  "data": [ /* intention rows */ ],
  "remaining": 59,
  "next_cursor": null
}
```

### `POST /api/v1/intentions`

Requires scope `intentions:write`.

**Body:**

| Field | Type | Required |
|---|---|---|
| `title` | string (1–200 chars) | yes |
| `description` | string (max 2000 chars) | no |
| `scheduled_date` | string (`YYYY-MM-DD`) | no |
| `dimension` | string | no |
| `estimated_minutes` | integer (1–1440) | no |

```bash
curl -X POST https://xenith.life/api/v1/intentions \
  -H "Authorization: Bearer xnth_live_..." \
  -H "Content-Type: application/json" \
  -d '{"title": "Write the quarterly review", "dimension": "Work"}'
```

## Focus sessions

### `GET /api/v1/focus-sessions`

Requires scope `focus_sessions:read`.

**Query parameters** (all optional): `start`, `end` (ISO timestamps to filter
`started_at`), `limit` (1–100, default 50), `cursor`.

### `POST /api/v1/focus-sessions`

Requires scope `focus_sessions:write`. Logs a completed (or in-progress) focus
session — this is a record of actual timer usage, not a way to schedule a
future session, so `started_at` can't be more than 24 hours in the future.

**Body:**

| Field | Type | Required |
|---|---|---|
| `duration_minutes` | integer (1–1440) | yes |
| `session_type` | string | no |
| `notes` | string (max 2000 chars) | no |
| `started_at` | ISO timestamp | no |
| `completed_at` | ISO timestamp | no |

## Dimension scores

### `GET /api/v1/dimension-scores`

Requires scope `dimension_scores:read`. Read-only — scores are recorded
through Xenith's own weekly check-in, not writable via the API.

**Query parameters** (all optional):

| Param | Description |
|---|---|
| `dimension` | Filter to one [life dimension](./life-dimensions/overview.md) |
| `history` | `1` to return full history; omitted returns only the latest score per dimension |

## Scopes

New API keys currently receive all available scopes:

- `intentions:read`, `intentions:write`
- `focus_sessions:read`, `focus_sessions:write`
- `dimension_scores:read`

Per-scope key creation is on the roadmap; for now, every key can do
everything listed above.

## CORS

All `/api/v1/*` endpoints allow cross-origin requests from any origin —
authentication is entirely via the `Authorization` header (never cookies), so
there's no ambient browser credential to protect against.
