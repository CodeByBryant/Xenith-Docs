---
sidebar_position: 8
title: Changelog
description: What's new in Xenith — notable features, improvements, and fixes, newest first.
keywords:
  - xenith changelog
  - xenith updates
  - whats new xenith
  - release notes
---

# Changelog

Notable changes to Xenith, newest first. We ship improvements often.

> **Suspect an outage instead of a change?**
>
> Check the [status page](https://status.xenith.life) for real-time service health.

## 2.3.2 — September 2026

**A real timeline for Calendar, and a smoother first week.**

- **Gantt/Timeline view for Calendar.** Multi-day events and plans now show
  as spanning bars you can drag to reshape — shorter, single-day items shrink
  down to quick markers so your daily plan stays legible next to longer
  efforts. Multi-day spans now sync both ways with Google Calendar and
  Notion, not just their start day. See
  [Calendar Sync](./integrations/calendar-sync.md).
- **Onboarding now shows you around.** A new step previews Routines,
  Reflection, Calendar, Projects, and Insights before you dive in, so the
  rest of Xenith isn't something you find by accident.
- **A proper welcome for Pro members** — a one-time tour pointing you toward
  Growth Paths and Calendar Sync, shown the first time your account is Pro.
- **"Start a focus session" now actually starts one.** Onboarding's launch
  button used to leave you on an idle timer; it begins your first session
  automatically now. See [Focus](./daily-workflow/focus.md).
- **Install prompts now work outside Chrome.** iPhone and iPad visitors get
  real "Add to Home Screen" instructions instead of nothing, and dismissing
  the install banner now wears off after 30 days instead of hiding it
  forever.
- **Reminders, asked for at a better moment.** The push-notification prompt
  moved out of onboarding to right after you've actually installed Xenith —
  the only moment on iPhone where turning them on can actually work.
- Early-supporter accounts now see accurate messaging on the pricing page
  instead of a prompt to upgrade to something they already have.
- Fixed dimension ratings occasionally not saving during onboarding.
- Fixed Calendar sync failing silently when a connected Google account
  needed to be reconnected — you'll now see a clear reconnect prompt instead.
- Various reliability improvements to Calendar sync and notifications.

## 2.3.1 — September 2026

**Repeating intentions, a real editor for Projects, and a smarter Focus timer.**

- **Repeating intentions.** Set an intention once on a weekly or monthly
  schedule instead of retyping it every day — each occurrence still gets its
  own review. See [Daily Intentions](./daily-workflow/daily-intentions.md#repeating-intentions).
- **Focus timer task linking.** Point a session at one of today's intentions
  from the setup screen; its title stays visible for the whole session. See
  [Focus](./daily-workflow/focus.md).
- **Projects editor, leveled up.** Font family and text alignment controls,
  image upload (from your device or searched directly from Unsplash), basic
  tables, inline/block math via KaTeX, and a project cover image. See
  [Projects](./growth-and-insights/projects.md).
- **Daily check-in now follows your account**, not just your browser — "done
  for today" stays consistent across devices, and brand new accounts skip the
  redundant prompt right after onboarding. See
  [Daily Check-in](./daily-workflow/daily-check-in.md).
- **Calendar Sync (Google Calendar & Notion) is now part of Xenith Pro.** The
  Calendar itself, and everything else it does, stays free. See
  [Calendar Sync](./integrations/calendar-sync.md).
- Coach's daily message limit raised from 3 to 10.
- Fixed two-way Calendar sync sometimes applying the wrong timezone to pulled
  events, along with a handful of smaller Calendar display and sign-in error
  message bugs.

## 2.3.0 — August 2026

**Pro is here.**

- **Xenith Pro.** A paid plan alongside the free plan: every Life Dimension's
  tracking tool — Biometrics/Calories/Water/Workouts (Health), Daily
  Gratitude/Thought Audit (Mind), Energy & Tasks/Wins & Losses (Work),
  Connections (Relationships), Transactions (Finances), Books (Learning),
  Sleep/Recharge (Rest), and Values/Decisions (Purpose) — plus
  [AI Coach and Growth Paths](./growth-and-insights/coach.md), every Focus
  soundscape, unlimited [Projects](./growth-and-insights/projects.md), and
  priority support. Each dimension's score and the 8-point overview stay free
  regardless of plan. The free plan stays real and complete — daily
  intentions, Focus timer, reflection, routines, the Life Dimensions
  overview, Insights, and one project, forever. See the
  [FAQ](./faq.md#is-xenith-free) for the full breakdown and
  [xenith.life/app/pricing](https://xenith.life/app/pricing) to compare
  plans or upgrade.
- **Billing by Stripe.** Subscriptions are billed and managed through
  Stripe's hosted checkout and billing portal — Xenith never sees or stores
  your card details. Cancel anytime from Settings; new subscriptions include
  a 7-day money-back guarantee, self-serve from Settings.
- **Cookie consent.** A first-visit banner now lets you accept or reject
  non-essential analytics cookies; essential cookies (sign-in, core
  functionality) are unaffected. Manage your choice anytime from the
  [Cookie & Tracking Policy](https://xenith.life/cookies).
- Fixed a layout issue where nutrition macro tags and finance category
  labels could overflow their card on narrow screens.

## 2.2.0 — July 2026

**Bring your own calendar, and build on top of Xenith.**

- **Two-way Calendar sync (Google Calendar & Notion).** Connect from the
  Calendar page or Settings. Events you create or edit in Xenith push to the
  connected provider, and events from the provider pull into Xenith —
  automatically when you open the Calendar, on demand with "Sync now", and
  daily in the background as a backstop. See [Calendar Sync](./integrations/calendar-sync.md).
- **Public API (v1).** Issue an API key in Settings and read/write your
  intentions, focus sessions, and dimension scores from your own scripts and
  tools. See the [API Reference](./api-reference.md).

## 2.1.0 — July 2026

**Out of beta — and your data is truly yours.**

- **Xenith is out of beta.** Same calm, no-streaks app you've been using — now on
  its stable 2.x release line.
- **Delete account now means delete.** Removing your account permanently and
  immediately erases all of your data — every entry, across every dimension —
  and there's no way to recover it. Your data is yours; when you leave, it's gone
  for good. See [Privacy & Data](./account/privacy-and-data.md).
- Fixed a handful of display and loading glitches, including profile avatars and
  in-app analytics.
- Behind-the-scenes security and reliability improvements.

## 1.5.0 — June 2026

**Focus, refined.**

- **New and improved soundscapes** — added Rain & Thunder, plus a gentle fade-in
  for Lo-fi. White and brown noise are generated locally so they start instantly
  and work offline.
- **Custom session durations** — set any length alongside the presets.
- **Full-screen Focus mode** and a **session goal** field, so you can name what
  you're working on and give it your whole attention.
- **Volume control** inside the timer, plus a quiet fallback to generated noise if
  a track can't load.
- Soundscapes now stream from a dedicated CDN for faster, more reliable playback.

## 1.4.0 — May 2026

**Meet your AI growth tools.**

- **Growth Paths** — describe a long-term goal and Xenith generates a structured,
  step-by-step path you can work through at your own pace.
- **Coach** — a built-in AI sounding board for thinking through decisions, stuck
  projects, and goals, grounded in Xenith's deliberate-living approach.
- Reaffirmed our commitment: your private entries are never used to train AI
  models. See [Privacy & Data](./account/privacy-and-data.md).

## 1.3.0 — April 2026

**Gentle reminders, never nagging.**

- **Push notifications** — opt in to quiet nudges for intentions, routines, and
  reflection. No streak-loss warnings, ever.
- **Install to home screen** on mobile for an app-like experience with
  notifications.
- Reliability and error-monitoring improvements behind the scenes.

## 1.2.0 — March 2026

**See the bigger picture.**

- **Insights dashboard** — focus trends, intentions completion, mood and energy,
  and an at-a-glance [life-balance view](./growth-and-insights/insights.md) across
  your dimensions.
- **Calendar** — a time-based view of your activity and plans.
- **Inbox & Quick Capture** — jot a thought from anywhere and process it later.

## 1.1.0 — February 2026

**Deeper dimension tools.**

- Health gained a **biometrics wizard** and dedicated **calorie**, **water**, and
  **workout** trackers.
- Mind added the **Thought Audit** (a CBT-inspired reframe) alongside Daily
  Gratitude.
- Work added **Energy & Tasks** matching and a **Wins & Losses** journal.
- New tools across **Relationships** (Connections), **Finances** (Transactions),
  **Learning** (Books), **Rest** (Sleep, Recharge), and **Purpose** (Values,
  Decisions).

## 1.0.0 — January 2026

**Public beta launch.**

- Eight [Life Dimensions](./life-dimensions/overview.md) to track and balance.
- The core daily loop: [Daily Intentions](./daily-workflow/daily-intentions.md),
  [Routines](./daily-workflow/routines.md), and
  [Reflection](./daily-workflow/reflection.md).
- The [Focus](./daily-workflow/focus.md) timer with ambient audio.
- A distraction-free [Projects](./growth-and-insights/projects.md) workspace.
- Secure sign-in — email and password, Google, or Microsoft — and a calm,
  dark-by-default interface.
- And, on principle: **no streaks** — anywhere.
