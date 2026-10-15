---
sidebar_position: 5
title: What carries over
description: What an import keeps exactly, what it approximates and what it leaves out, and how to read the import report.
keywords:
  - import report
  - what imports from notion
  - import limitations
---

# What carries over

An import aims to keep your content, its order and its structure. Where something
can't come across exactly, Xenith says so in the **import report** instead of
hiding it. The report shows counts and reasons, never the content itself.

## Reading the report

- **Added** and **Updated** say what was created or refreshed.
- **Left as it is** lists pages you changed in Xenith after an earlier import. They
  were not overwritten.
- **Couldn't import** lists items that failed, grouped by reason, with the page
  titles and what to do (for example, share a page with Xenith in Notion and try
  again).
- **Approximated** is content that came across in a nearby form.
- **Left out** is content Xenith can't carry.
- A note appears if an import limit was reached (see
  [Import into Projects](./import-overview.md#limits)).

## Approximated

| What | What you get |
| --- | --- |
| Footnotes | A numbered list at the end of the page |
| Notion synced blocks | Independent copies that no longer stay in step |
| Toggle headings | A toggle with a heading inside |
| Callout icons that aren't an emoji | A default icon |
| Embeds | Bookmarks |
| Very long pages | Split into continuation pages |
| Text in a monospace font (Google Docs) | Code |
| Fonts Xenith doesn't have | The default font |
| Notion formulas and rollups | The value they had, read-only |
| Notion people | Names |

## Left out

Comments and suggestions, page history, permissions, headers and footers, page
numbers, equations Xenith can't draw, drawings, tables of contents, page breaks,
and Notion's saved database views, filters and sorts. A few smaller items (for
example block types Xenith doesn't have yet) are listed by name in the report.

## Your edits are protected

An import never overwrites a page you changed. See [Re-importing](./re-importing.md).

## Related

- [Import into Projects](./import-overview.md)
- [Databases](./databases.md)
