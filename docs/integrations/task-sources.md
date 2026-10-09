---
sidebar_position: 2
title: Task Sources
description: Bring tasks from Todoist, Microsoft To Do and Google Tasks into Xenith as suggestions, and optionally keep them in sync both ways.
keywords:
  - xenith todoist
  - xenith microsoft to do
  - xenith google tasks
  - import tasks into intentions
  - two-way task sync
---

# Task Sources

If you already keep tasks in **Todoist**, **Microsoft To Do** or **Google
Tasks**, Xenith can show the ones that matter today without you copying them
over. Nothing becomes an intention until you tap it.

> **Free**
>
> Task sources are free on every plan.

## Connecting

Connect from **Settings → Integrations → Task sources**, or from the **Connect
your tools** step in [onboarding](../getting-started/onboarding.md). You are sent
to the other app to allow access, then back to Xenith. By default Xenith only
asks to **read** your tasks.

| Tool | What Xenith reads | Two-way sync |
| --- | --- | --- |
| Todoist | Tasks due soon | No (read only) |
| Microsoft To Do | Open tasks due soon | Yes, if you turn it on |
| Google Tasks | Open tasks due soon | Yes, if you turn it on |

"Due soon" means open tasks due today, due within the next week, or already
past their due date. Tasks with no due date are left out, so your suggestions
don't turn into a backlog of someday items.

## From your tools

Tasks Xenith finds appear on your dashboard in a **From your tools** card, with
the app they came from and their due date. For each one you choose:

- **Add to today** makes it one of today's [intentions](../daily-workflow/daily-intentions.md).
- **Dismiss** hides it for good, even if you reconnect later.

Nothing is created for you and nothing is counted. The card is hidden when there
is nothing to decide. A task you add is a normal intention: you can Focus on it,
reflect on it or let it go like any other.

Xenith checks your connected tools when you open the dashboard (at most every 30
minutes), when you press **Sync now**, and on a regular background schedule.

## Two-way sync

For **Microsoft To Do** and **Google Tasks** you can go further. In **Settings →
Integrations → Task sources**, switch on **Two-way sync** for a tool. It is off
until you turn it on, and turning it on asks that app for permission to change
your tasks. With it on:

- An intention you finish in Xenith is marked done in the app.
- A task you finish in the app marks its intention done in Xenith.
- Your open intentions for today or later are sent to a list called **Xenith**
  in the app (the title and the date, nothing else).

**Xenith never deletes a task in your task app.** If you delete a task there, it
is not recreated. If you let go of an intention, its task is left alone. Turning
the switch off stops all writing straight away; to remove the permission itself,
disconnect or remove Xenith in your Google or Microsoft account settings.

Finishing an intention in Xenith reaches the app at the next sync (within about
30 minutes, or when you open the dashboard); turning two-way sync on sends
today's intentions immediately.

## If a connection stops working

If the app stops accepting Xenith's access (you removed it, or the token
expired for good), Settings shows **Connection lost** with a **Reconnect**
button. Until you reconnect, Xenith stops asking that app for anything, and your
existing intentions are untouched. Reconnecting while two-way sync is off asks
only to read.

## Disconnecting

**Disconnect** removes the connection and any suggestions you hadn't decided on.
Intentions you already made stay, and anything you dismissed stays dismissed if
you reconnect.

## What Xenith keeps

For each suggestion Xenith stores the task's title, due date and a link back to
it. It does not store notes, attachments or comments. Access tokens are stored
encrypted and are never shown in your browser. Everything is deleted with your
account, and is included in your [data export](../account/privacy-and-data.md).
