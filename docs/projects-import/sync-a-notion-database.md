---
sidebar_position: 8
title: Sync a Notion database
description: Keep an imported Notion database in step with Xenith, both ways, with a preview first and nothing deleted without your say.
keywords:
  - notion database sync
  - two-way notion sync
  - sync conflicts
  - xenith notion
---

# Sync a Notion database

After you [import a Notion database](./import-from-notion.md), you can keep it in
step with Notion: changes you make in either place show up in the other.

> **Off until you turn it on**
>
> Syncing writes to your Notion database, so it is **off by default** and starts
> with a preview that changes nothing. It also depends on a switch on our side; if
> you don't see **Sync** in a database's toolbar, it isn't available for your
> account yet.

## Turning it on

Open the imported database and choose **Sync** in its toolbar, then **Preview
sync**. Xenith checks both sides and shows what it would do: how many rows would
be updated each way, how many would be added to either side, and how many cells
changed in both places. **Nothing is written until you choose Start syncing**
(or **Not now** to leave it off).

**Turn off sync** stops all of this. What is already in both places stays.

You can sync up to **5 databases** at a time.

## What syncs

- **Cell values** of these column types: title, text, number, select, multi-select,
  status, date, checkbox, URL, email and phone.
- **New rows**, in both directions.
- **New columns and options added in Notion**, which are added to Xenith.

## What doesn't

- The **notes page** inside each row.
- **Columns you add in Xenith.** They stay in Xenith.
- **People, files and relations.** Changes in Notion come into Xenith, but changes
  you make in Xenith to these are not sent back.
- **Formulas, rollups, created and edited times and IDs**, which Notion calculates.
- A status option that Notion doesn't have can't be created by Xenith, so that cell
  is listed instead of guessed.

## When both sides change the same cell

Xenith never overwrites silently. If a cell changed in both places, **your Xenith
value stays** and the cell appears under **Waiting for you** with both values.
Choose **Keep mine** or **Use Notion's**. Text that has formatting in Notion
(bold, links, mentions) is listed the same way, because plain text would drop the
formatting.

## Deleted rows

A deleted row is **never** removed on the other side automatically.

- **Deleted in Notion:** listed so you can choose **Delete here** or **Put back in
  Notion**.
- **Deleted in Xenith:** listed so you can choose **Delete in Notion too** or
  **Bring back here**.

## How often it runs

Once it is on, Xenith syncs in the background about every 15 minutes, and a full
comparison runs at least once a day. **Sync now** in the menu runs it straight
away. A large first sync is split into steps and can take a while because Notion
limits how fast it shares data.

## When something is wrong

The Sync menu says plainly what is happening: **Notion needs to be connected
again** (reconnect it), **Xenith can't see this database in Notion** (share it with
the Xenith integration in Notion again), or **Paused after repeated errors**
(choose **Try again** when you're ready). Your data on both sides is as it was.

## Privacy

To tell what changed, Xenith stores Notion page ids and a fingerprint of each cell,
not its content. Your values are sent to Notion only for databases you have turned
sync on for. See [Privacy and Data](../account/privacy-and-data.md).

## Related

- [Import from Notion](./import-from-notion.md)
- [Databases](./databases.md)
- [Re-importing](./re-importing.md)
