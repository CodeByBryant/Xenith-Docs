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

## 2.4.6 (October 2026)

**Worlds, redrawn: a full-screen 3D planet you can zoom into.**

- **A new planet.** Your World is now a stylized 3D planet with mountains and snowy
  peaks, shorelines, forests, little towns that glow at night, clouds and animals on
  land, in the sea and in the air. Plants, towns and animals only ever appear as a
  region grows.
- **Full screen, with zoom.** The Worlds page fills the screen. Drag to turn, scroll
  or pinch to zoom down to ground level, point at a part of the planet to see its
  region and the numbers behind it, and click to fly there.
- **A panel instead of sliders.** The controls moved to a panel on the right (a sheet
  on phones) with Look, Sky, Regions and About tabs. New choices: how dramatic the
  mountains are, and animals on or off. Changes still preview live and save when you
  press Save.
- Worlds you already have keep their look settings; they just get the new planet. See
  [Worlds](./growth-and-insights/worlds.md).

**Six new free tools, no account needed.**

- **New tools at [xenith.life/tools](https://xenith.life/tools):** an Eisenhower
  Matrix Maker, a Time Blocking Planner, a Morning Routine Builder, a Weekly Review
  Generator, an Energy Audit and a Work-Life Balance Quiz. They join the Pomodoro
  Timer and the Wheel of Life.
- **They run in your browser.** What you enter is saved on your device only and is never
  uploaded. Each tool can copy its result as text and print it, and some download an
  image, a Markdown file or a calendar file.
- **Calendar files.** The Time Blocking Planner and the Morning Routine Builder can
  download an `.ics` file you can open in Apple Calendar, Outlook or, through import,
  Google Calendar.
- **Bring a result into Xenith.** If you sign up after using the Eisenhower Matrix
  Maker, the Time Blocking Planner, the Weekly Review Generator or the Work-Life
  Balance Quiz, onboarding can offer your result as your first intention or your
  starting ratings. You choose whether to use it. See [Free tools](./free-tools.md).

**Try Pro for $1.**

- **A first week for $1.** If you have never had Pro, you can start with 7 days for $1.
  After the week the monthly plan ($7.99) starts unless you cancel. We email you 2
  days and 1 day before the first full charge. See
  [Pro and billing](./account/pro-and-billing.md).

## 2.4.5 (October 2026)

**A first week that comes back around: a reminder, a one-tap finish, and a planet that grows.**

- **Say when you'll do it.** Under your first intention in
  [onboarding](./getting-started/onboarding.md), and in the add form for
  [intentions](./daily-workflow/daily-intentions.md), you can choose **Email me
  around** an hour. It is off until you pick one.
- **Mark done from the reminder email.** Each intention in the email has a link to a
  page with one button. Nothing changes until you press it, it works for 72 hours,
  and it only marks that intention done.
- **Intentions in your calendar at their time.** With a reminder hour set, an
  intention shows in your [calendar link](./integrations/apple-calendar.md) as a
  timed block instead of an all-day item.
- **Worlds.** A customizable planet that starts as bare rock and grows as you finish
  intentions, focus, do routines, reflect and write gratitude. It only goes up, never
  messages you, is free, and can be turned off in Settings. See
  [Worlds](./growth-and-insights/worlds.md).
- **A Focus session and a reflection in onboarding.** Onboarding is now nine steps:
  after your intention you can create your World, try a short Focus session on it,
  say how it went, and finish the intention from there. Every step after the
  intention can be skipped.
- **A suggested goal.** If you arrive from one of our feature pages or articles, the
  matching goal is highlighted in onboarding. It never picks for you.
- **Your week** (rolling out gradually). A calm look back at one week, plus your own
  reflections from a month and a year ago. See
  [Your week](./growth-and-insights/your-week.md).
- **Privacy.** The account activity events our servers record now also include when
  you mark an intention done from an email, when your World reaches a new stage, and
  the Focus session you start during onboarding. They are names of actions, counts
  and dates, never what you wrote. See [Privacy & Data](./account/privacy-and-data.md).

## 2.4.4 (October 2026)

**A clearer account of how usage analytics work.**

- **Usage analytics, explained.** [Privacy & Data](./account/privacy-and-data.md) now
  separates the analytics that run in your browser (only after you accept the cookie
  banner) from a small set of account activity events recorded by Xenith's servers
  without cookies: sign-ins, onboarding progress, first use of a core feature, and
  which days you were active. They are names of actions, counts and dates, never what
  you wrote. You can ask us to stop recording them or delete them.

## 2.4.3 (October 2026)

**Bring your notes in, and work with databases.**

- **Import into Projects.** Copy pages and databases from
  [Notion](./projects-import/import-from-notion.md), documents from
  [Google Docs](./projects-import/import-from-google-docs.md) and
  [Word files](./projects-import/import-word-files.md) into a project. You review
  what will be imported before anything is added, a report lists what carried
  over and what didn't, and importing again never overwrites your edits. Free on
  every plan. See [Import into Projects](./projects-import/import-overview.md).
- **Databases.** Rows with typed columns (text, number, select, status, date,
  checkbox, people, files, relations and more), shown as a
  [table, board, gallery or list](./projects-import/databases.md), with filters,
  sorts and a notes page behind every row.
- **Keep a Notion database in sync (opt-in).** After importing a Notion database,
  you can [sync it both ways](./projects-import/sync-a-notion-database.md). It is
  off until you turn it on, starts with a preview, keeps your value when both
  sides change a cell and asks you, and never deletes a row without your say.
- **A richer editor.** Toggles, callouts, columns, bookmarks, file blocks, code
  with highlighting, headings up to level 6, page icons and covers, and links to
  other pages and databases (**/Link to page**, **/Link to database**).
- **Connect Google Docs and Notion for import** from the **Connect your tools**
  step in [onboarding](./getting-started/onboarding.md).
- **The one-project limit on the free plan is now enforced by the server**, not
  just the screen. Nothing changes if you stay within it.

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
- **A shorter start.** Onboarding is now six steps. The Focus session and the
  separate dimension picker are gone; your goal decides which three dimensions
  Xenith keeps in view and shows them as you choose. A new optional step lets you
  rate where you are in each dimension, and **Back** and **Forward** buttons let
  you review or change anything. Your dashboard offers a first Focus session
  instead. See [Onboarding](./getting-started/onboarding.md).
- **A new dashboard.** A wider layout with a greeting, today's intentions and
  focus time, a week view, a balance wheel for your eight dimensions, and your
  tools ordered by the dimensions you chose. Pro tools show as compact locked
  tiles instead of a blurred preview.
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
