---
sidebar_position: 7
title: Database views
description: Show a database as a calendar, a timeline, a chart or a dashboard, keep columns in view, total a column, nest sub-items, lock the shape, let dates follow each other, and put a database inside a page.
keywords:
  - xenith database views
  - calendar view
  - timeline view
  - chart view
  - dashboard
  - sub-items
  - linked database
  - database lock
---

# Database views

A database holds rows. A **view** is one way of looking at them, with its own filter, sort and settings. Besides the table, board,
gallery and list, a database can be shown as a calendar, a timeline, a chart or a dashboard. Add one with the **+** after the
view tabs.

None of these copies your rows. They are drawn from the database as it is now, and the settings of a view are saved in that view.

## Calendar

Rows are placed on the day of a date property. Choose the property (and whether the week starts on Monday or Sunday) under
**Options**. Switch between **Month** and **Week** at the top right.

- **Add a row on a day:** the **+** that shows when you point at a day makes a row with that date and opens it.
- **Move a row:** drag it to another day, or select it and press **Shift** with an arrow (left and right move one day, up and down
  one week). A row that spans several days moves as a whole and keeps its length.
- Rows with no date are listed under **No date** below the calendar.
- A date that has a time shows on the day it falls on in your time zone, but it can't be dragged: that would change the time you
  stored. Change it in the row. The same goes for a date that is calculated.

## Timeline

Rows are bars along a time axis. Choose the **Scale** (day, week, month, quarter or year), the date the bar starts at, and
optionally a second date property that ends it. A row with one date is a one-day bar; a row whose date is a range is as long as
the range.

- **Move a bar** by dragging it, or with **Shift** and the left or right arrow. **Resize** by dragging either end, or hold **Alt**
  as well to change only its end.
- **Table** shows the names of the rows beside the bars. A bar too narrow to hold its name has the name beside it.
- Dates with a time, or calculated, can't be dragged (as in the calendar).
- A timeline draws the first 300 dated rows and says when there are more. Filter the view to see the rest.

## Chart

A chart counts or adds up your rows by group. The controls above it set what it shows:

- **Chart:** bar, horizontal bar, line, donut, or a single number.
- **Group by:** a status or select, a checkbox, tags, the month of a date, text, or people. A row with no value goes to **No value**.
  A row with several tags counts once in each, so a group's number can be larger than the row count.
- **Show:** the count of rows, or the sum, average, median, smallest or largest of a number property.

Click a bar, a point or a slice to see the rows behind it and open one. **Show as table** lists the same numbers as text. A
chart with more than 24 groups folds the rest into **Other**, and a donut shows 8 slices at most, with the rest in **Other**. A
group keeps its color whatever filter you apply, and the filter and sort of the view apply to what is counted.

## Options for every view

Under **Options** (what is offered depends on the view):

- **Table:** wrap long text instead of cutting it off, and keep the title and up to three more columns in view when you scroll
  sideways.
- **Gallery:** card size (small, medium, large) and which files property gives the cover.
- **Board:** **Sub-group by** a status or select to draw one row of columns for each value, with the cards that belong to it.
  Drag a card to another column or another row (or use its **Move** menu) and the properties change to match.
- **Open rows in:** a panel at the side, a window in the middle, or the full page.

### Totals under a column

Point at the bottom of a column in a table and choose a total: how many have a value, how many are empty, the percent filled,
how many different values, or for numbers the sum, average, median, smallest, largest or range, for dates the earliest, latest or
span, for checkboxes how many are checked. A total is worked out from the rows the view shows, so a filtered table totals what you
see. A calculated column (a formula) offers the counts only.

### Filter groups

A filter can hold **groups** of rules, each with its own "all of these" or "any of these", up to three levels deep. For example:
status is Open **and** (due before today **or** priority is High).

## Dashboards

A dashboard view is made of **widgets**. Each widget shows one saved view of one database in the same project, so a chart of
tasks can sit next to a board of projects. A dashboard holds up to 12 widgets, shown 1 to 4 to a row (one on a narrow screen).
Add a widget with **Add widget**, name it if you like, and move or remove it from its header.

A dashboard's **Filter** applies to every widget whose database has a property with the same name and kind. It works with text,
number, date and checkbox properties (a select's options belong to its own database, so they can't be shared). A widget with no
matching property isn't narrowed. Widgets show the saved view as it is; to change a view, change it in its database.

## Show a database in a page

In a page, type `/` and choose **Database view**, then pick a database in the project. The page shows the database's first view
(a table, a board, whatever it is) and you can filter, sort and edit it there. Its filter, sort and layout are **kept in the page**, so changing them there leaves the
database's own views alone. Rows and columns are the database's: edit a row there and it is edited everywhere. The page keeps
only which database and the view settings, never a copy of the rows. **Remove linked view** takes it out of the page and leaves
the database as it is.

## Database settings

**Database settings** (next to **Properties**) holds choices for the whole database rather than one view.

### Lock

While a database is **locked**, its properties, views and these settings can't be changed, by you or by anything else. Rows stay
fully editable, and the title and icon can still change. Unlock to change the shape again. A locked database that is synced from
Notion doesn't pick up new properties until it is unlocked.

### Sub-items

A row can sit under another row of the same database. In a row's panel, choose its **Parent**, or press **Add sub-item** on the
parent. Sub-items can go five levels below a top-level row. A row can't be put under its own sub-item, and deleting a parent keeps its sub-items:
they become ordinary rows.

**Sub-items** in the settings chooses how they show:

- **Every row on its own line** (the default).
- **Under their parent:** in a table, sub-items are indented under their parent, with an arrow to fold them. A sub-item whose
  parent is filtered out is shown at the top, so a filter never hides it.
- **Top-level rows only:** every view leaves the sub-items out.

### Dates that follow each other

Add a relation from the database to **itself** (for example "Blocked by") and choose it as **Waits on**. Then choose what happens
to the rows that wait on a row you move or resize on a timeline:

- **Move by the same days:** every row that waits on it, directly or through others, moves by the days its end moved, earlier or
  later.
- **Move later only if needed:** they move later, and only as far as needed to start the day after the row they wait on ends.
  Nothing moves earlier.

Only plain dates move. A row that has a time on its date, or a calculated date, stays where it is and you are told. All the rows
move together or none does (up to 199 rows besides the one you moved). If more rows than that depend on it, or rows wait on each
other in a loop, only the row you moved changes, and you are told why.

## Limits

- 20 views per database, 12 widgets per dashboard, 50 properties per database.
- A timeline draws 300 rows; a chart folds past 24 groups (8 in a donut).
- Filter groups go three levels deep, with up to five groups in a level.
- Sub-items go five levels below a top-level row. Dashboard filters use text, number, date and checkbox properties.
- A linked view keeps at most 8 KB of settings in the page.
