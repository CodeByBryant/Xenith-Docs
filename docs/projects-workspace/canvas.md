---
sidebar_position: 3
title: Canvas
description: An endless board for cards and arrows. Lay out text, pages, sections, your own records and images, and connect them. One canvas is free; Pro has no limit.
keywords:
  - xenith canvas
  - infinite canvas
  - whiteboard
  - mind map
  - json canvas
---

# Canvas

A **canvas** is an endless board. Put cards on it, draw arrows between them, and move
things around until the shape of an idea is clear. It is for thinking in space rather
than in a column.

> **Free vs Pro**
>
> The free plan includes **one** canvas. [Xenith Pro](https://xenith.life/app/pricing) has
> no canvas limit. Everything you can do on a canvas is the same on both plans.

## Make one

Canvases are listed under **Canvases** at the bottom of the Projects sidebar. Select
**New canvas** to make one, and a canvas to open it. A canvas belongs to your account,
not to one project, so the same list shows whichever project you are in.

Click the title at the top to rename it. The bin icon deletes the canvas (you are asked
first). The pages and records on it are never deleted.

## Cards

Use the toolbar above the board to add a card in the middle of what you are looking at.

| Card | What it is |
| --- | --- |
| **Text** | A note you type straight into. Plain text, up to 10,000 characters |
| **Page** | A page, showing its name, icon and first lines. Click it to open the page |
| **Section** | One heading of a page and what is under it, shown read-only. Click it to open the page at that heading |
| **Record** | One of your intentions, habits, reflections or Focus sessions. Click it to open that tool |
| **Image** | A picture you upload from your device |
| **Group** | A labelled frame, drawn behind other cards, to gather a few together |

- To add a **Page**, **Section** or **Record**, a search opens. For a section, type the page
  and then `#` and part of a heading, like `Roadmap#Intro`. The same rules as
  [links](./links-and-backlinks.md#link-to-a-heading) apply.
- Page, section and record cards stay current: rename or delete the page and the card
  follows. A page or section card whose target is gone says **Page unavailable** or
  **Section unavailable**, struck through. A record card keeps the label it had, struck
  through. A reflection card shows its date, never its text.
- Select a card to **resize** it from its edges and corners, or to remove it with
  <kbd>Backspace</kbd> or <kbd>Delete</kbd>.
- A group is a frame, not a container: moving a group does **not** move the cards inside
  it.

## Arrows

Each card has a small dot on every side. Drag from one dot to another card to draw an
arrow. **Double-click** an arrow to give it a label; select it and press
<kbd>Backspace</kbd> or <kbd>Delete</kbd> to remove it. Deleting a card removes the arrows
attached to it, so nothing is left pointing at nothing.

## Moving around

Drag the background to pan and scroll to zoom, or use the buttons in the corner. The
overview map shows the whole board. Cards snap to a light grid so things line up.

## Undo and redo

Use the undo and redo buttons, or <kbd>Ctrl</kbd> + <kbd>Z</kbd> and
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> (<kbd>Cmd</kbd> on a Mac). Xenith keeps
your last 100 steps while the canvas is open. The keys do nothing while you are typing
inside a card, so they never undo your board by accident.

## Saving

A canvas saves itself after every change. If it was changed somewhere else, such as
another tab or device, Xenith **does not overwrite either version**. You see a notice
with two choices:

- **Reload latest** shows the other version and drops the edits on this screen.
- **Keep mine** saves this version over the other one.

Nothing happens until you choose. A canvas can hold up to 500 cards, 1,000 arrows and
about 1 MB in total; Xenith tells you if you reach it.

## Export and import

**Export** saves the canvas as a **JSON Canvas** file (`.canvas`), an open format other
tools can read.

- Text, groups, pictures, arrows and arrow labels carry over.
- Page, section and record cards become **text cards** with the title. Pages and
  sections also carry a link back to Xenith. Records carry their title only.

**Import** adds the cards from a `.canvas` file **to the right of what is already on the
board**, so nothing you have is overwritten. It keeps text, groups, labelled arrows and
pictures at `https` addresses. File cards that are not pictures and link cards come in as
text cards, anything else is left out, and Xenith tells you when the board is full.
A file over 4 MB is not read.

## Good to know

- A canvas does not yet have a keyboard-only way to move cards. Page and record cards
  can be opened and the [graph's list view](./graph.md#prefer-a-list) is the accessible
  way to see how pages connect.
- Text inside a card is plain text, with no formatting.

## Related

- [Links and backlinks](./links-and-backlinks.md)
- [Graph](./graph.md)
- [Projects](../growth-and-insights/projects.md)
