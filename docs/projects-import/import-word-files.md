---
sidebar_position: 4
title: Import Word files
description: Upload .docx files to turn them into Xenith pages.
keywords:
  - import word documents
  - docx to xenith
  - word to xenith
---

# Import Word files

Upload one or more **.docx** files and Xenith turns each into a page. Documents
saved from Google Docs ("Download as .docx"), LibreOffice and Pages work too.

## Uploading

In **Projects → Import → Word**, choose **Choose files** (up to 10 files, 25 MB
each). Each file is uploaded as soon as you choose it. Older **.doc** files need to
be saved as **.docx** first.

Uploaded files are kept in **private storage only while the import runs** and are
deleted afterwards.

## What carries over

Headings, text styling, colors, alignment, lists, tables (including merged cells),
images, links and footnotes carry over. Tracked changes are accepted: insertions are
kept and deletions are dropped. Text boxes, drawings, equations, comments, headers
and footers aren't imported, and the report lists them.

## Importing the same file again

A Word file has no stable identity, so Xenith tells files apart by their content.
Uploading **identical bytes** again changes nothing. Uploading an **edited** file
creates a **new page** and never overwrites the earlier one.

## If a file can't be read

A file that is damaged or isn't really a .docx is reported and the other files
still import.

## Related

- [Import into Projects](./import-overview.md)
- [What carries over](./what-carries-over.md)
