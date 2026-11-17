---
sidebar_position: 1
title: Links and backlinks
description: Link pages to each other, to a heading inside a page, and to your own intentions, habits, reflections and focus sessions. See what links to a page.
keywords:
  - xenith links
  - backlinks
  - link to a page
  - link to a heading
  - wiki links
---

# Links and backlinks

A page can point at other pages, at one heading inside a page, and at your own
[intentions](../daily-workflow/daily-intentions.md), [habits](../daily-workflow/habits.md),
[reflections](../daily-workflow/reflection.md) and [Focus](../daily-workflow/focus.md)
sessions. Every page also shows what links *to* it. Links and backlinks are free on every
plan.

## Add a link

In a page in Projects, type **`[[`** or **`@`**. A list opens under your cursor; keep typing to
narrow it.

| Type | What it lists |
| --- | --- |
| `[[` | Pages from **every project**, each with its project's name |
| `@` | The same pages, plus your own intentions, habits, reflections and Focus sessions |

- Use the <kbd>↑</kbd> and <kbd>↓</kbd> keys to move, <kbd>Enter</kbd> or <kbd>Tab</kbd>
  to choose, or click a row. <kbd>Esc</kbd> closes the list and leaves what you typed.
- `@` only opens at the start of a line or after a space, so an email address never
  triggers it.
- With nothing typed yet, you see your most recently edited pages (and, for `@`, a few
  recent records).
- Search matches page **titles**. From three characters it also finds pages by what
  they *say*, once a page has been saved by Xenith's current editor. A page you have not
  opened since this arrived may only match by title until it is saved once.
- The notes inside a [database](../projects-import/databases.md) row are not pages you
  link to, so they are not listed. (Inside a row's notes the link shortcuts are not available.)

The older **/Link to page** and **/Link to database** commands still work. They link to
things in the *current project* only.

## Link to a heading

Type the page, then **`#`**, then part of a heading:

```text
[[Launch plan#Goals
```

The list shows that page's headings. Choosing one makes a link that opens the page
**scrolled to that heading**, which is briefly tinted so you can see where you landed.

> **Note** A heading can only be linked once the page has been edited since headings
> were given links of their own. If the list says there are no sections, open that page
> and make any edit, then try again.

## Links to your own records

Choose an intention, habit, reflection or Focus session with `@`. The link shows:

- an **intention** or **habit** by its name,
- a **reflection** by its date only ("Reflection, 12 Nov"). Its text is never shown,
- a **Focus session** by its length and date ("Focus session, 25 min, 12 Nov").

Clicking one opens that tool's screen (Intentions, Habits, Reflection or Focus). It does
not jump to the individual record.

## Links stay current

A link shows the **live** name of what it points at. Rename a page and every link to it
changes, including on the screen you are looking at. If the page or record is later
deleted, the link stays where it is, struck through and greyed, so you can see something
used to be there. It never opens a different page by mistake.

Clicking a link to a page in another project switches to that project and opens the page.

## Backlinks

At the top of a page, above the text, **Linked from 3 places** lists everything that
points at this page. Select it to open the list:

- Each entry is the page that links here, with the **sentence the link sits in**.
- Click one to open that page, scrolled to the link.
- A page that links to several headings of this page appears once per heading.
- It is hidden when nothing links to the page.

Backlinks update when the linking page is saved. They cover links to **pages** only.

> **Link from a row's notes?** If a backlink comes from the notes inside a database
> row, Xenith tells you so and leaves you where you are. Open the database and then the
> row to read it.

## Related

- [Projects](../growth-and-insights/projects.md)
- [Graph](./graph.md): see how your pages link together
- [Canvas](./canvas.md): lay pages and sections out on a board
