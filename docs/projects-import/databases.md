---
sidebar_position: 7
title: Databases
description: Rows with typed columns, shown as a table, board, gallery or list, with filters, sorts and a notes page behind every row.
keywords:
  - xenith databases
  - database views
  - table board gallery list
  - relation property
---

# Databases

A **database** is a set of rows with typed columns, kept inside a
[project](../growth-and-insights/projects.md). Use one to track books, a reading
list, contacts, research or anything with a shape. Databases are free on every
plan.

Create one from **New database** in the Projects sidebar (at the top of a project
or inside a folder). You can also [import them from Notion](./import-from-notion.md).

## Columns

Every database has a **Name** column. Add others from **Add property** and choose
a type:

| Type | What it holds |
| --- | --- |
| Text, URL, email, phone | Words and links |
| Number | A number (optionally shown as a percentage) |
| Select, multi-select | Options you name and color |
| Status | Options grouped as to do, in progress and done |
| Date | A day or a time, with an optional end |
| Checkbox | Yes or no |
| People | A list of names. Nobody is invited or notified |
| Files | Links to files, or an image uploaded to Xenith |
| Relation | Links to rows of another database in the project |

Open a column's header to rename it, change its type, hide it in this view, move
it, or delete it (deleting a column deletes its values from every row, after a
confirmation). Changing a column's type keeps the stored values until you edit the
cell.

**Formulas, rollups, created and edited times and IDs** only arrive through an
import. They show the value they had and can't be edited.

### Relations

A relation links rows to rows of another database in the same project. Choose the
**Related database** in the column's menu, then pick rows from a searchable list.
A link to a row that no longer exists shows as "Unavailable" and can be removed.

## Views

Each database can have several views (up to 20), each with its own filter, sorts
and visible columns:

- **Table:** a spreadsheet-style grid with resizable columns. Arrow keys move
  between cells, **Enter** edits, **Esc** cancels, **Tab** moves on, and
  **Shift+Enter** (or **Ctrl/Cmd+Enter**) opens the row.
- **Board:** cards in columns for each option of a status, select or checkbox
  column. Drag a card to another column, or use its **Move** button (works from the
  keyboard and on a phone).
- **Gallery:** a grid of cards. A row's first image uploaded to Xenith shows above
  its title.
- **List:** one line per row, the compact view that reads well on a phone.

Use **Filter** (rules combined with and/or) and **Sort** (several keys, empty
values last). The **Properties** menu chooses which columns show in the current view.

## Rows

Open a row to see all its columns in a side panel (full screen on a phone). Below
them is a **notes page** with the full editor, created the first time you write in
it. In any page you can link to a database with **/Link to database**.

## Limits

Up to 50 databases per account, 5,000 rows per database, 50 columns and 20 views
per database. These are the same on every plan.

## Related

- [Import from Notion](./import-from-notion.md)
- [Sync a Notion database](./sync-a-notion-database.md)
- [Projects](../growth-and-insights/projects.md)
