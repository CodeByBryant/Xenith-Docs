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

A few things are worth knowing:

- **Columns keep their layout and their widths.** Blocks side by side stay side by
  side, and each column keeps its share of the width. Drag the gap between two
  columns to change it (see [Writing and styling](../projects-workspace/writing-and-styling.md#columns)).
  A layout with a single column becomes ordinary text.
- **Colors come across.** Text colors, highlights, block background colors and
  callout colors are mapped by name to Xenith's palette, which is tuned to read on
  both the light and the dark theme, so a color can look a little different from
  Notion's while still being "blue" or "red".
- **Icons and covers.** An emoji icon comes across as it is, and one of Notion's own
  icons becomes the matching icon from Xenith's icon set, in the nearest color.
  Page covers are copied. An icon that is a picture is left out, and an icon with no
  match is named in the report so it can be added.
- **Links to pages become cards.** A link-to-page block shows the page's title and
  icon, and the title and icon follow the page if it is renamed.
- **Headings.** Notion has four heading levels and Xenith has three, so the smallest
  heading becomes the third level. A toggle heading becomes a toggle with a heading
  inside it.

## What happens to databases

- Each Notion database becomes a Xenith database with the same columns, options and
  rows. Select, multi-select, status, date, number, checkbox, URL, email, phone,
  text, people, files and relation columns all have a home.
- **Formulas and rollups come across as formulas and rollups**, and Xenith
  calculates them from then on. Each one is checked against the values Notion showed
  for your rows. If a formula uses something Xenith's formulas don't have yet, gives a
  different answer, or has no values to check against, it stays as the copied value
  instead of showing a wrong one, and the report counts how many. A rollup that reads
  a relation or property Xenith couldn't find stays as its copied value too. You can
  edit any of them; see [Formulas and properties](../projects-workspace/formulas-and-properties.md).
- **Created and edited times and unique IDs** are copied as the values they had
  and can't be edited in Xenith.
- **People** become names. **Relations** keep their links, and they show the
  linked rows' titles once the related database is imported too (until then they
  show as unavailable).
- **Saved views come across.** Every saved view of a database is imported, up to the
  20 views Xenith keeps for a database, as a view of the same kind: table, board,
  gallery, list, calendar, timeline or chart. Each keeps its filter (including nested
  and/or groups), its sorts, which properties it shows and how wide they are, the
  property a board groups by, a gallery's cover property and card size, the date
  properties and scale of a calendar or timeline, and the axes of a chart. Relative
  dates carry over: today, yesterday and tomorrow, and this, past and next week or
  month, measured from your own today.
- **Not carried by a view:** form, map and dashboard views, filters on formulas and
  rollups, the order of a view's columns, and quick filters. If one part of a view
  can't come across (a filter, a sort, or a setting such as a cover or a grouping),
  the view is still made and the report says which kind it was, because it may show
  more or fewer rows than in Notion. If Notion's views for a database can't be read at
  all, the database comes across with a table of every column and, when it has a
  status or select column, a board grouped by it.
- **A database inside a page becomes a view of it in that page.** Both a database
  that sits in the page and a linked view of a database that lives elsewhere come
  across as a [linked view](../projects-workspace/database-views.md) of the imported
  database, with that view's own filter, sorts and layout. A linked view with several
  tabs in Notion comes across as its first tab. When a database it reads wasn't
  imported, it shows as a link until you import that database. Notion doesn't always
  say which database a linked view reads; when it doesn't, Xenith matches it to an
  imported database with the same name only if exactly one fits, and the report asks
  you to check it. Views matched that way don't carry their own filters and sorts.

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
