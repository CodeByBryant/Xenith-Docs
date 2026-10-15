---
sidebar_position: 2
title: Import from Notion
description: Copy Notion pages, sub-pages and databases into Xenith. Xenith only sees what you share with it.
keywords:
  - import from notion
  - notion to xenith
  - notion database import
  - notion pages
---

# Import from Notion

Xenith can copy Notion **pages** (with their sub-pages) and **databases** into a
project. Pages become Xenith pages and databases become
[Xenith databases](./databases.md) you can edit.

## Connecting and sharing

In **Projects → Import → Notion**, choose **Connect** and allow access. Notion
then asks which pages to share with Xenith. **Xenith only sees what you share**, so
if something is missing from the list, choose **Share more pages** and add it in
Notion's picker. Connecting for import and connecting for
[Calendar Sync](../integrations/calendar-sync.md) use the same Notion connection;
each asks for only what it needs.

## Choosing what to import

- **Pages** and **Databases** are separate tabs, each with search. Tick as many as
  you like (up to 200 pages and 20 databases at once).
- **Include sub-pages** brings the pages inside the pages you picked, keeping
  their order and nesting.
- **Include the page inside each row** (shown when you pick a database) also
  imports the notes page behind each row. It takes longer and covers the first 500
  rows of each database.

## What happens to pages

Text, headings, lists, to-dos, toggles, quotes, callouts, code, tables, columns,
images, files, bookmarks, equations and links between pages carry over. Links
between pages that are both imported keep working. What doesn't carry over exactly
is listed in the report: see [What carries over](./what-carries-over.md).

## What happens to databases

- Each Notion database becomes a Xenith database with the same columns, options and
  rows. Select, multi-select, status, date, number, checkbox, URL, email, phone,
  text, people, files and relation columns all have a home.
- **Formulas, rollups, created and edited times, and unique IDs** are copied as
  the values they had at the time of the import and can't be recalculated or
  edited in Xenith.
- **People** become names. **Relations** keep their links, and they show the
  linked rows' titles once the related database is imported too (until then they
  show as unavailable).
- Notion's **saved views, filters and sorts** can't be read by Xenith, so they
  aren't recreated. Xenith makes a table view with every column and, when the
  database has a status or select column, a board grouped by it. You can add
  [gallery and list views](./databases.md#views) and your own filters.
- A database inside a page is shown as a link to that database. Import the
  database itself to bring the data.

After importing a database you can choose to
[keep it in sync with Notion](./sync-a-notion-database.md). That is off until you
turn it on.

## If something can't be opened

Pages and databases you haven't shared with Xenith can't be imported. The report
says which ones and how to fix it: share them in Notion, then import again.

## Related

- [Import into Projects](./import-overview.md)
- [Re-importing](./re-importing.md)
- [Sync a Notion database](./sync-a-notion-database.md)
