---
sidebar_position: 1
title: Calendar Sync
description: Connect Google Calendar or Notion to Xenith for free two-way calendar sync.
keywords:
  - xenith google calendar sync
  - xenith notion calendar
  - two-way calendar sync
  - xenith integrations
---

# Calendar Sync

Xenith's [Calendar](../getting-started/the-interface.md#the-calendar) can sync two-way with
Google Calendar and Notion, so events stay consistent no matter where you
create or edit them.

> **Free**
>
> Calendar Sync with Google Calendar and Notion is free on every plan. You can
> also [follow your intentions in Apple Calendar](./apple-calendar.md) with a
> private link.

## Connecting

Connect from either place. They share the same connection, so it doesn't
matter which you use:

- The **Sync** button on the Calendar page itself, or
- **Settings → Calendar sync**

You'll be sent to Google or Notion to authorize access. Google starts syncing
your main calendar straight away (you can pick a different one); with Notion you
choose which database to sync. You can change the selected calendar or database
at any time without disconnecting. During [onboarding](../getting-started/onboarding.md)
there is also a **Connect your tools** step, where you switch on only the things
you want Xenith to ask for.

## How sync works

Sync is **two-way**:

- Events you create or edit in Xenith are pushed to the connected provider.
- Events created or edited at the provider are pulled into Xenith.
- Deleting an event on either side removes it on the other.

Sync runs automatically:

- **On open:** when you open the Calendar page, Xenith syncs if it's been
  more than 30 minutes since the last sync (so switching tabs quickly doesn't
  trigger unnecessary syncs).
- **On demand:** click **Sync now** in the Sync popover for an immediate
  refresh.
- **In the background:** a scheduled sync runs regularly as a safety net, so your
  calendar stays current even if you don't open Xenith.

Xenith syncs a rolling window of events: roughly 6 months back to 18 months
forward.

## Google Calendar

- Uses Google's full calendar read/write scope, so Xenith can both read your
  events and create/update/delete events on your behalf.
- You can sync your primary calendar or any other calendar in your Google
  account.
- Event colors carry over. Xenith matches each event's Google Calendar color
  (or the calendar's own color, if the event doesn't have one set).
- Event notes support rich text (bold, bullet lists, checklists), which
  mirrors what Google Calendar's own description editor supports.
- After the first sync, Xenith uses Google's incremental sync so later syncs
  only fetch what actually changed, rather than re-checking every event every
  time.

## Notion

- A Notion "calendar" is any database with a date property. Pick the
  database and which date property to use as the event date when you connect.
- Notion syncs event titles and dates. Colors and rich-text notes aren't
  supported for Notion sync (Notion pages don't have an equivalent concept of
  event color).

## Disconnecting

Disconnecting a provider removes only the events that were synced from it.
Events you created directly in Xenith are never affected. You can also remove
Xenith's access from your Google or Notion account settings.
