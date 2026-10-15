---
sidebar_position: 3
title: Import from Google Docs
description: Copy Google Docs into a Xenith project. Xenith can only open the documents you pick.
keywords:
  - import google docs
  - google docs to xenith
  - google drive import
---

# Import from Google Docs

Xenith copies the Google Docs you choose into a project, as close to the original
as the editor allows.

## Connecting and picking

In **Projects → Import → Google Docs**, choose **Connect** and allow access. Xenith
asks for one permission, **drive.file**, which covers **only the documents you pick**
in Google's own picker. It cannot see the rest of your Drive.

Then choose **Choose documents**. Google's picker opens, you select up to 25
documents, and only their ids and names come back to Xenith. If you want to import
a document you didn't pick earlier, pick it again.

## What carries over

- Headings, title and subtitle, bold, italic, underline, strikethrough, text and
  highlight colors, superscript and subscript, and alignment.
- Bulleted, numbered and checklist lists, including nested lists.
- Tables, including merged cells.
- Images (copied into Xenith) and links. A link to another document you import in
  the same go becomes a link to that page.
- Documents with **tabs** become a page with the tabs as sub-pages.
- Fonts Xenith has (the common Google Docs fonts) are kept. Other fonts use the
  default font, and the report says so.

## What doesn't

Comments and suggestions, headers and footers, page numbers, equations and drawings
aren't imported. Footnotes become a numbered list at the end of the page. The
report lists each of these with how many there were.

## Related

- [Import into Projects](./import-overview.md)
- [What carries over](./what-carries-over.md)
- [Re-importing](./re-importing.md)
