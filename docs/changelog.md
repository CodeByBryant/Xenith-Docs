---
sidebar_position: 8
title: Changelog
description: "What's new in Xenith: notable features, improvements, and fixes, newest first."
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

## 2.4.2 (October 2026)

**Less typing: bring your calendars, tasks and bank statements in.**

- **Connect your tools is free.** [Calendar Sync](./integrations/calendar-sync.md)
  with Google Calendar and Notion no longer needs Pro. A new optional
  **Connect your tools** step in onboarding lets you switch on only what you
  want, and Xenith asks each app for just that.
- **Tasks from the apps you already use.** Connect
  [Todoist, Microsoft To Do or Google Tasks](./integrations/task-sources.md) and
  tasks due soon appear in a **From your tools** card on your dashboard. Add one
  to today with a tap, or dismiss it. Nothing is created for you.
- **Two-way sync for Microsoft To Do and Google Tasks (opt-in).** Finish
  something in either place and it shows as done in the other. Off until you turn
  it on, and Xenith never deletes a task in your task app.
- **Apple Calendar.** A private, read-only
  [calendar link](./integrations/apple-calendar.md) shows your intentions and
  events in Apple Calendar or any app that can follow a link.
- **Import transactions from a CSV.** Bring in a bank or card export in
  [Finances](./life-dimensions/finances.md); duplicates are skipped and you see a
  preview first.
- **A new dashboard.** A wider layout with a greeting, today's intentions and
  focus time, a week view, a balance wheel for your eight dimensions, and your
  tools ordered by the dimensions you chose. Pro tools show as compact locked
  tiles instead of a blurred preview.
- **A redesigned homepage.** xenith.life now opens with a slow, animated view of your
  eight [Life Dimensions](./life-dimensions/overview.md), and the page walks through how
  intentions, focus, reflection and insights feed each other, and what Xenith
  connects to. It respects your device's reduced-motion setting.
- **Sign-in and connection hardening.** Connection requests now expire after 10
  minutes and can only be used once.

## 2.4.1 (October 2026)

**A more useful free plan, and a reason to come back tomorrow.**

- **Free is bigger.** The calorie tracker (with the Biometric Wizard), Books and
  Finance transactions are now free. Coach is free for **3 messages a day** (Pro
  has 10). Everyone can build **one Growth Path** and use its first two tiers;
  Pro opens every tier and all eight dimensions.
- **Upgrade prompts say what they are for.** Each Pro tool, the Coach limit and
  the Growth tiers now explain what you would get, instead of a generic lock.
- **Still open.** Intentions you did not finish stay visible for 14 days, with
  Keep for today, Done and Let it go. Nothing is archived for you.
- **Finish what you started.** After a Focus session linked to an intention, a
  card asks how it went, and a Growth step can become today's intention in one tap.
- **Optional email reminders.** Pick an hour when you add an intention and get one
  email with what is still open. Off unless you choose it; has its own
  unsubscribe.
- **Your day, your time zone.** "Today" for intentions, carry-over and Coach
  limits now follows your profile time zone everywhere.
- **Security.** Growth Path generation now requires you to be signed in and uses
  your own account only. Cached data no longer carries over between accounts on
  a shared browser.

## 2.4.0 (September 2026)

**A shorter first ten minutes.**

- **Onboarding now leads with doing, not configuring.** Pick one goal, set
  one intention, give it 10 minutes in a real Focus session, then a quick
  3-question reflection, before you're asked to rate or set up all eight
  Life Dimensions. Skipping the Focus session never blocks you from
  finishing; your dashboard shows a one-time reminder for the next 24 hours
  instead.
- Fixed the bottom-right corner of the app getting crowded on smaller
  screens. The quick-capture button, install prompts, and notification
  toasts no longer stack on top of each other. Feedback now opens from the
  command palette (⌘K) instead of a permanent floating button.
- Focus session timers now keep accurate time even if your browser tab was
  backgrounded or throttled, instead of drifting.

## 2.3.4 (September 2026)

**Bug fixes and a billing cleanup.**

- Removed the 7-day money-back guarantee and the self-serve refund option.
  Subscriptions are billed in advance and are non-refundable except where
  required by law. Email us with billing questions and we'll take a look.
- If our email provider is briefly rate-limited during a signup spike,
  you'll now see a clear status message instead of a raw error when
  confirming your email or resending the confirmation link.
- Fixed a homepage error (Safari) caused by malformed structured data.
- A stray browser extension crashing the sign-in or onboarding page no
  longer takes down the whole screen. You'll see a "Something went wrong,
  refresh" message scoped to that page instead.
- Signup and onboarding-completion requests now retry once on a transient
  network failure (most common on iOS) instead of failing silently.
- If your Google Calendar connection needs reconnecting, you'll now get an
  email about it, and Settings shows a clear "Reconnect" prompt, not just
  the Calendar page.

## 2.3.3 (September 2026)

**Reliability and accuracy fixes.**

- Billing confirmations are now sent exactly once per subscription, even if
  our payment provider retries or re-sends an event.
- **API rate limits are now exact and visible.** Every API response carries
  `X-RateLimit-Limit`, `X-RateLimit-Remaining` and `X-RateLimit-Reset`
  headers, and `429` responses include `Retry-After`. Parallel requests can
  no longer slip past the 60-per-minute limit. See the
  [API reference](./api-reference.md#rate-limits).
- Onboarding now counts your intentions step as done only once they've
  actually been saved.
- The [status page](https://status.xenith.life) now shows "Status Unknown"
  instead of "All Systems Operational" when its monitoring data is
  unavailable or out of date.

## 2.3.2 (September 2026)

**A real timeline for Calendar, and a smoother first week.**

- **Gantt/Timeline view for Calendar.** Multi-day events and plans now show
  as spanning bars you can drag to reshape, while shorter, single-day items
  shrink down to quick markers so your daily plan stays legible next to longer
  efforts. Multi-day spans now sync both ways with Google Calendar and
  Notion, not just their start day. See
  [Calendar Sync](./integrations/calendar-sync.md).
- **Onboarding now shows you around.** A new step previews Routines,
  Reflection, Calendar, Projects, and Insights before you dive in, so the
  rest of Xenith isn't something you find by accident.
- **A proper welcome for Pro members.** A one-time tour points you toward
  Growth Paths and Calendar Sync the first time your account is Pro.
- **"Start a focus session" now actually starts one.** Onboarding's launch
  button used to leave you on an idle timer; it begins your first session
  automatically now. See [Focus](./daily-workflow/focus.md).
- **Install prompts now work outside Chrome.** iPhone and iPad visitors get
  real "Add to Home Screen" instructions instead of nothing, and dismissing
  the install banner now wears off after 30 days instead of hiding it
  forever.
- **Reminders, asked for at a better moment.** The push-notification prompt
  moved out of onboarding to right after you've actually installed Xenith,
  the only moment on iPhone where turning them on can actually work.
- Early-supporter accounts now see accurate messaging on the pricing page
  instead of a prompt to upgrade to something they already have.
- Fixed dimension ratings occasionally not saving during onboarding.
- Fixed Calendar sync failing silently when a connected Google account
  needed to be reconnected. You'll now see a clear reconnect prompt instead.
- Various reliability improvements to Calendar sync and notifications.

## 2.3.1 (September 2026)

**Repeating intentions, a real editor for Projects, and a smarter Focus timer.**

- **Repeating intentions.** Set an intention once on a weekly or monthly
  schedule instead of retyping it every day. Each occurrence still gets its
  own review. See [Daily Intentions](./daily-workflow/daily-intentions.md#repeating-intentions).
- **Focus timer task linking.** Point a session at one of today's intentions
  from the setup screen; its title stays visible for the whole session. See
  [Focus](./daily-workflow/focus.md).
- **Projects editor, leveled up.** Font family and text alignment controls,
  image upload (from your device or searched directly from Unsplash), basic
  tables, inline/block math via KaTeX, and a project cover image. See
  [Projects](./growth-and-insights/projects.md).
- **Daily check-in now follows your account**, not just your browser, so
  "done for today" stays consistent across devices. Brand new accounts also
  skip the redundant prompt right after onboarding. See
  [Daily Check-in](./daily-workflow/daily-check-in.md).
- **Calendar Sync (Google Calendar & Notion) is now part of Xenith Pro.** The
  Calendar itself, and everything else it does, stays free. See
  [Calendar Sync](./integrations/calendar-sync.md).
- Coach's daily message limit raised from 3 to 10.
- Fixed two-way Calendar sync sometimes applying the wrong timezone to pulled
  events, along with a handful of smaller Calendar display and sign-in error
  message bugs.

## 2.3.0 (August 2026)

**Pro is here.**

- **Xenith Pro.** A paid plan alongside the free plan. It includes every Life
  Dimension's tracking tool: Biometrics/Calories/Water/Workouts (Health), Daily
  Gratitude/Thought Audit (Mind), Energy & Tasks/Wins & Losses (Work),
  Connections (Relationships), Transactions (Finances), Books (Learning),
  Sleep/Recharge (Rest), and Values/Decisions (Purpose). It also adds
  [AI Coach and Growth Paths](./growth-and-insights/coach.md), every Focus
  soundscape, unlimited [Projects](./growth-and-insights/projects.md), and
  priority support. Each dimension's score and the 8-point overview stay free
  regardless of plan. The free plan stays real and complete: daily
  intentions, Focus timer, reflection, routines, the Life Dimensions
  overview, Insights, and one project, forever. See the
  [FAQ](./faq.md#is-xenith-free) for the full breakdown and
  [xenith.life/app/pricing](https://xenith.life/app/pricing) to compare
  plans or upgrade.
- **Billing by Stripe.** Subscriptions are billed and managed through
  Stripe's hosted checkout and billing portal, so Xenith never sees or stores
  your card details. Cancel anytime from Settings; new subscriptions include
  a 7-day money-back guarantee, self-serve from Settings.
- **Cookie consent.** A first-visit banner now lets you accept or reject
  non-essential analytics cookies; essential cookies (sign-in, core
  functionality) are unaffected. Manage your choice anytime from the
  [Cookie & Tracking Policy](https://xenith.life/cookies).
- Fixed a layout issue where nutrition macro tags and finance category
  labels could overflow their card on narrow screens.

## 2.2.0 (July 2026)

**Bring your own calendar, and build on top of Xenith.**

- **Two-way Calendar sync (Google Calendar & Notion).** Connect from the
  Calendar page or Settings. Events you create or edit in Xenith push to the
  connected provider, and events from the provider pull into Xenith.
  Sync runs automatically when you open the Calendar, on demand with "Sync
  now", and daily in the background as a backstop. See [Calendar Sync](./integrations/calendar-sync.md).
- **Public API (v1).** Issue an API key in Settings and read/write your
  intentions, focus sessions, and dimension scores from your own scripts and
  tools. See the [API Reference](./api-reference.md).

## 2.1.0 (July 2026)

**Out of beta, and your data is truly yours.**

- **Xenith is out of beta.** Same calm, no-streaks app you've been using, now on
  its stable 2.x release line.
- **Delete account now means delete.** Removing your account permanently and
  immediately erases all of your data (every entry, across every dimension),
  and there's no way to recover it. Your data is yours; when you leave, it's gone
  for good. See [Privacy & Data](./account/privacy-and-data.md).
- Fixed a handful of display and loading glitches, including profile avatars and
  in-app analytics.
- Behind-the-scenes security and reliability improvements.

## 1.5.0 (June 2026)

**Focus, refined.**

- **New and improved soundscapes.** Added Rain & Thunder, plus a gentle fade-in
  for Lo-fi. White and brown noise are generated locally so they start instantly
  and work offline.
- **Custom session durations.** Set any length alongside the presets.
- **Full-screen Focus mode** and a **session goal** field, so you can name what
  you're working on and give it your whole attention.
- **Volume control** inside the timer, plus a quiet fallback to generated noise if
  a track can't load.
- Soundscapes now stream from a dedicated CDN for faster, more reliable playback.

## 1.4.0 (May 2026)

**Meet your AI growth tools.**

- **Growth Paths.** Describe a long-term goal and Xenith generates a structured,
  step-by-step path you can work through at your own pace.
- **Coach.** A built-in AI sounding board for thinking through decisions, stuck
  projects, and goals, grounded in Xenith's deliberate-living approach.
- Reaffirmed our commitment: your private entries are never used to train AI
  models. See [Privacy & Data](./account/privacy-and-data.md).

## 1.3.0 (April 2026)

**Gentle reminders, never nagging.**

- **Push notifications.** Opt in to quiet nudges for intentions, routines, and
  reflection. No streak-loss warnings, ever.
- **Install to home screen** on mobile for an app-like experience with
  notifications.
- Reliability and error-monitoring improvements behind the scenes.

## 1.2.0 (March 2026)

**See the bigger picture.**

- **Insights dashboard.** Focus trends, intentions completion, mood and energy,
  and an at-a-glance [life-balance view](./growth-and-insights/insights.md) across
  your dimensions.
- **Calendar.** A time-based view of your activity and plans.
- **Inbox & Quick Capture.** Jot a thought from anywhere and process it later.

## 1.1.0 (February 2026)

**Deeper dimension tools.**

- Health gained a **biometrics wizard** and dedicated **calorie**, **water**, and
  **workout** trackers.
- Mind added the **Thought Audit** (a CBT-inspired reframe) alongside Daily
  Gratitude.
- Work added **Energy & Tasks** matching and a **Wins & Losses** journal.
- New tools across **Relationships** (Connections), **Finances** (Transactions),
  **Learning** (Books), **Rest** (Sleep, Recharge), and **Purpose** (Values,
  Decisions).

## 1.0.0 (January 2026)

**Public beta launch.**

- Eight [Life Dimensions](./life-dimensions/overview.md) to track and balance.
- The core daily loop: [Daily Intentions](./daily-workflow/daily-intentions.md),
  [Routines](./daily-workflow/routines.md), and
  [Reflection](./daily-workflow/reflection.md).
- The [Focus](./daily-workflow/focus.md) timer with ambient audio.
- A distraction-free [Projects](./growth-and-insights/projects.md) workspace.
- Secure sign-in (email and password, Google, or Microsoft) and a calm,
  dark-by-default interface.
- And, on principle: **no streaks**, anywhere.
