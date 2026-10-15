---
sidebar_position: 6
title: Re-importing
description: Importing the same content again updates what you haven't edited and never overwrites your changes.
keywords:
  - re-import notion
  - update imported pages
  - import again
---

# Re-importing

You can import the same pages, documents or databases again. Xenith recognizes
what it imported before, so it updates instead of duplicating.

## Pages

- A page you **haven't edited** in Xenith is updated if the source changed.
- A page you **have edited** is left exactly as it is and counted in the report
  under "Left as it is".
- Where you put a page and what you named it stay as you set them.
- A page you **deleted** in Xenith is created again.
- A page deleted in the source is left alone in Xenith and counted.
- Importing into a **different project** makes separate copies; projects never
  share imported pages.

## Databases

- Rows are matched by their Notion page, so a row isn't duplicated.
- A cell you edited in Xenith keeps your value while the other cells of the row
  update.
- New columns, options and rows from Notion are added. A column you deleted stays
  deleted. A column you renamed keeps your name.
- Views you made are never replaced.
- Rows deleted in Notion are left alone and counted.

Re-importing is a one-time copy, not a connection. To keep a Notion database up to
date as you work, see [Sync a Notion database](./sync-a-notion-database.md).

## Word files

Word files are identified by their content: identical bytes change nothing, and an
edited file becomes a new page. See [Import Word files](./import-word-files.md).

## Related

- [Import into Projects](./import-overview.md)
- [What carries over](./what-carries-over.md)
