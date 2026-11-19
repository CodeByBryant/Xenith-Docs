---
sidebar_position: 6
title: Formulas and properties
description: Work things out in a database with formulas and rollups, show numbers as money or progress, color rows by rules, link databases both ways, and add a button to every row.
keywords:
  - xenith formulas
  - database formula
  - rollup
  - relation two-way
  - conditional color
  - number format
  - button property
---

# Formulas and properties

A database column (a **property**) can hold more than what you type. This page covers the ones that work things out, and the
settings that change how a property shows.

Nothing described here is stored in your rows. A formula, a rollup and a color are worked out when the database is shown, from
the cells that are there, so they are never out of date and editing a row never needs a second write.

## Formulas

Add a property, choose **Formula**, and write what you want in the box that opens. As you type, the editor shows the answer for
a row you pick (the first 20 rows are offered), and what is wrong if something is. **Save formula** is off until it works.

```
prop("Price") * prop("Quantity")
if(prop("Done"), "Finished", "Open")
dateBetween(prop("Due"), today(), "days")
```

- **`prop("Name")`** is the value of another property in the same row. The name is written out in quotes. Click a property
  under the box to put it in at the cursor.
- **Renaming a property** carries into the formulas that read it. If two properties share a name, formulas read the first one,
  and a rename leaves them alone.
- A formula can read another formula or a rollup. If formulas read each other in a circle, each one in the circle shows
  **Error** (hover for the reason) and the rest keep working.
- **Empty values.** An empty number counts as 0 in arithmetic. An empty value is never smaller or larger than anything, so
  `prop("Price") > 10` is false when there is no price. Use `empty(prop("Price"))` to ask. An empty checkbox is unchecked.
- **Text and numbers.** `+` joins text when either side is text (`"a" + 1` is `a1`). A text that reads as a number, such as
  `"4"`, works in arithmetic; any other text there is an error.

### Writing them

| You write | Meaning |
| --- | --- |
| `+  -  *  /  %  ^` | Add, subtract, multiply, divide, remainder, power. `^` is worked out first and goes right to left, so `-2 ^ 2` is -4. |
| `==  !=  <  >  <=  >=` | Compare numbers, texts, dates (by when they are) or yes/no. Comparing different kinds is an error. |
| `&&  \|\|  !` and `and  or  not` | And, or, not. They stop as soon as the answer is known, so `false && 1 / 0` is fine. |
| `condition ? a : b` | The same as `if(condition, a, b)`. |
| `"text"`, `12.5`, `true`, `false` | Text (with `\"` for a quote and `\n` for a new line), numbers, yes/no. |
| `value.function(more)` | The same as `function(value, more)`, so `"Hello".upper().length()` is 5. |
| `current`, `index` | Inside `map`, `filter`, `find`, `findIndex`, `some`, `every` and `sort`: the item, and its position from 0. |

Dividing by zero, an unknown property, a date that is not a date and similar problems show **Error** in that cell, with the
reason on hover and for screen readers. They never stop other cells or rows.

### Dates and time zones

Dates are days (`2026-03-14`) or moments with a time. **Today** is the day it is in your own time zone (the one on your profile), not on a
server. A day is a calendar day and is never moved by a time zone; a moment is shown in yours. Moving by months keeps the day
of the month, or the last day when the month is shorter (31 January plus a month is 28 February, or 29 in a leap year). `now()`
and `today()` are worked out when the database is shown and again when the day turns.

### Limits

A formula can be 2,000 characters, a text it builds 10,000, a list it builds 1,000 items. Each cell has a fixed budget of
steps, so a formula that would loop for too long stops with an error instead of freezing the page. Patterns for `test`,
`match` and `replace` can be 100 characters, work on texts up to 2,000 characters, and may not repeat a group that can itself
repeat (for example `(a+)+`), use back-references or have more than six repeats, because those can take very long. A formula
cannot read or write anything but the cells of its own row, call out to anything, or change data.

### What the answer is, for filters and sorts

A formula that makes numbers filters and sorts as numbers (10 comes after 9), one that makes dates as dates, one that makes
yes/no as a checkbox, and anything else as text. A list of results filters on whether it is empty.

### Formulas and rollups from a Notion import

An import brings formulas and rollups across as formulas and rollups, so they are worked out in Xenith like any you write. The
import checks each one against the values Notion showed for your rows first. A formula that uses something Xenith's formulas
don't have, or that gave a different answer here, keeps the value it had in Notion instead, and the import report says how many.
Such a property keeps that value until you write a formula in it, and you can edit any imported formula or rollup.

## Function reference

There are 81 functions.

### Date

| Function | What it does |
| --- | --- |
| `date(date)` | The day of the month, 1 to 31. |
| `dateAdd(date, amount, unit)` | A date moved forward. Units: years, quarters, months, weeks, days, hours, minutes, seconds. Example: `dateAdd(prop("Start"), 2, "weeks")`. |
| `dateBetween(date, other, unit)` | How many whole units date is after other (negative when before). Example: `dateBetween(prop("Due"), today(), "days")`. |
| `dateEnd(date)` | The last date of a span (its start when it is a single date). |
| `dateRange(start, end)` | A span from one date to another. |
| `dateStart(date)` | The first date of a span. |
| `dateSubtract(date, amount, unit)` | A date moved back. Example: `dateSubtract(prop("Due"), 3, "days")`. |
| `day(date)` | The weekday, 1 (Monday) to 7 (Sunday). |
| `formatDate(date, pattern)` | A date as text. Tokens: YYYY, MMMM, MMM, MM, DD, dddd, ddd, HH, mm, A. Put plain words in [brackets]. Example: `formatDate(prop("Due"), "MMM D, YYYY")`. |
| `fromTimestamp(ms)` | A date from milliseconds since 1 January 1970 UTC. |
| `hour(date)` | The hour, 0 to 23. |
| `minute(date)` | The minute, 0 to 59. |
| `month(date)` | The month, 1 to 12. |
| `now()` | The current date and time. |
| `parseDate(text)` | A date from a text such as "2026-03-14". Empty when it is not a date. |
| `timestamp(date)` | Milliseconds since 1 January 1970 UTC. |
| `today()` | Today, as a day, in your time zone. Example: `dateBetween(prop("Due"), today(), "days")`. |
| `year(date)` | The year. |

### List

| Function | What it does |
| --- | --- |
| `at(list, index)` | The item at a position, counting from 0. Empty when there is none. |
| `count(list)` | How many items are not empty. |
| `every(list, condition)` | True when the condition holds for every item. |
| `filter(list, condition)` | The items for which the condition holds. Example: `filter(prop("Scores"), current > 50)`. |
| `find(list, condition)` | The first item for which the condition holds. |
| `findIndex(list, condition)` | The position of the first item for which the condition holds, or empty. |
| `first(list)` | The first item. |
| `flat(list)` | A list of lists as one list. |
| `includes(list, item)` | True when the list has the item. |
| `last(list)` | The last item. |
| `map(list, expression)` | A list made by working out the expression for every item. Use current for the item and index for its position. Example: `map(prop("Tags"), upper(current))`. |
| `reverse(list)` | The list backwards. |
| `slice(list, start, end)` | Part of a list. Positions count from 0; a negative one counts from the end. |
| `some(list, condition)` | True when the condition holds for at least one item. |
| `sort(list, key)` | The list in ascending order, or ordered by a key worked out for each item with current. Example: `sort(prop("Tags"))`. |
| `unique(list)` | The list without repeats. |

### Logic

| Function | What it does |
| --- | --- |
| `and(a, b, …)` | True when every value is true. Stops at the first one that is not. Example: `and(prop("Done"), prop("Hours") > 2)`. |
| `empty(value)` | True when the value is blank: nothing, an empty text, or an empty list. A 0 is not blank. Example: `empty(prop("Notes"))`. |
| `if(condition, then, else)` | Gives `then` when the condition holds, otherwise `else` (empty when left out). Only the chosen side is worked out. Example: `if(prop("Done"), "Done", "Open")`. |
| `ifs(cond1, value1, cond2, value2, …, else)` | The value for the first condition that holds. A last value with no condition is the fallback. Example: `ifs(prop("Score") > 90, "A", prop("Score") > 80, "B", "C")`. |
| `not(value)` | True when the value is false or empty. Example: `not(prop("Done"))`. |
| `or(a, b, …)` | True when any value is true. Stops at the first one that is. Example: `or(prop("Urgent"), prop("Due") < today())`. |
| `prop("Name")` | The value of another property in the same row. Example: `prop("Price") * prop("Quantity")`. |

### Math

| Function | What it does |
| --- | --- |
| `abs(n)` | The number without its sign. |
| `cbrt(n)` | Cube root. |
| `ceil(n)` | Rounds up to a whole number. |
| `e()` | The number e. |
| `exp(n)` | e raised to a power. |
| `floor(n)` | Rounds down to a whole number. |
| `ln(n)` | Natural logarithm. |
| `log10(n)` | Base-10 logarithm. |
| `log2(n)` | Base-2 logarithm. |
| `max(a, b, …)` | The largest number. Takes numbers or lists of them. |
| `mean(a, b, …)` | The average. Takes numbers or lists of them. |
| `median(a, b, …)` | The middle number. Takes numbers or lists of them. |
| `min(a, b, …)` | The smallest number. Takes numbers or lists of them. |
| `mod(a, b)` | The remainder of a divided by b. |
| `pi()` | The number pi. |
| `pow(base, exponent)` | A number raised to a power. Same as base ^ exponent. |
| `round(n, places)` | Rounds to a whole number, or to a number of decimal places. Example: `round(prop("Total") / 3, 2)`. |
| `sign(n)` | -1, 0 or 1 by the sign of the number. |
| `sqrt(n)` | Square root. |
| `sum(a, b, …)` | The total. Takes numbers or lists of them; empty values count as nothing. Example: `sum(prop("Hours"))`. |

### Text

| Function | What it does |
| --- | --- |
| `concat(a, b, …)` | Joins texts, or joins lists into one list. Example: `concat(prop("First"), " ", prop("Last"))`. |
| `contains(text or list, item)` | True when a text includes the other text, or a list includes the item. Example: `contains(prop("Title"), "launch")`. |
| `endsWith(text, suffix)` | True when the text ends with the suffix. |
| `format(value)` | Any value as text. Example: `format(prop("Price")) + " USD"`. |
| `join(list, separator)` | Makes one text from a list, with the separator between items (a comma by default). Example: `join(prop("Tags"), " · ")`. |
| `length(text or list)` | How many characters a text has, or how many items a list has. Example: `length(prop("Title"))`. |
| `lower(text)` | Lowercase. |
| `match(text, pattern)` | Every part of the text that matches a regular expression, as a list. |
| `padEnd(text, length, fill)` | Adds fill characters at the end until the text is that long. |
| `padStart(text, length, fill)` | Adds fill characters at the start until the text is that long. Example: `padStart(format(prop("N")), 3, "0")`. |
| `repeat(text, times)` | A text repeated, for example a row of dots for a rating. Example: `repeat("●", prop("Rating"))`. |
| `replace(text, pattern, replacement)` | Replaces the first match of a regular expression. |
| `replaceAll(text, pattern, replacement)` | Replaces every match of a regular expression. |
| `split(text, separator)` | Cuts a text into a list at each separator (a comma by default). Example: `split(prop("Tags"), ",")`. |
| `startsWith(text, prefix)` | True when the text begins with the prefix. |
| `substring(text, start, end)` | Part of a text. Positions count from 0; a negative one counts from the end. Example: `substring(prop("Title"), 0, 10)`. |
| `test(text, pattern)` | True when the text matches a regular expression. Example: `test(prop("Title"), "^Bug")`. |
| `toNumber(value)` | A number from a text such as "42". Empty when it does not read as a number. |
| `trim(text)` | Removes spaces from both ends. |
| `upper(text)` | Uppercase. |


## Rollups

A **rollup** pulls a value from the rows a relation links to. Add a property, choose **Rollup**, and choose the **Relation** to
follow, the **Property** of the linked rows to look at, and how to **Calculate**. The calculations offered fit the property you
chose: number calculations for a number, date ones for a date, and so on.

| Calculation | Gives | For |
| --- | --- | --- |
| Show original, Show unique values | A list | Any property |
| Count all | How many rows are linked | Any |
| Count values, Count unique values, Count empty | A number | Any |
| Percent empty, Percent not empty | A number from 0 to 100 | Any |
| Sum, Average, Median, Min, Max, Range | A number (non-numbers are ignored; a sum of nothing is 0) | Numbers |
| Earliest date, Latest date, Date range | A date | Dates |
| Checked, Percent checked | A number | Checkboxes |

A rollup can read a formula of the linked database, and a formula can read a rollup. A rollup cannot read another rollup (it
shows an error that says so). Rollups read up to 5,000 rows of the linked database. A rollup is empty until the linked rows have
loaded, and shows an error if its relation or property was deleted.

## Number formats

On a **Number**, **Formula** or **Rollup** property, open the column menu and choose a **Number format**:

- **Number**, with automatic decimals or a fixed number of decimal places (0 to 4).
- **Percent** shows the number with a % sign. It does not rescale: 50 shows as 50%.
- **Currency** in one of 19 currencies, with the currency's own decimals unless you choose a number.
- **Progress bar** and **Progress ring** draw how full the number is next to it, **Full at** a value you set (100 by default).
  A number past the full value stays full, and one below 0 stays empty.

Only the display changes. The stored number is the number.

## Colors

**Colors** in a view's toolbar tints rows or cells that match a rule, for example every row where **Due** is before today. A
rule is the same kind of condition a filter uses, a color from the palette, and whether it tints the **Row** (the card on a
board or gallery, the line in a list) or just the **Cell** of the property it is about. You can have 20 rules per view. The
**first rule that matches decides the color**, so use ↑ and ↓ to put the important one first. Rules belong to the view, they
can read formulas and rollups, and they only ever change how a row looks.

## Relations

A **relation** links rows to rows of another database in the same project (or of the same one).

- **Show on the related database** makes it two-way: the other database gets a matching property, named after this database,
  filled in from the links that already exist. After that, linking or unlinking on either side updates the other in the same
  step. Turn it off and Xenith asks first, because the matching property is removed with its links; the links on this side
  stay. While a relation is two-way, the database it points at cannot be changed.
- **Links per row** can be **One** instead of as many as you like. Choosing another row then replaces the link.
- **A relation to its own database** is offered as **(this database)**. A row can never be linked to itself, so a two-way
  relation to the same database makes a pair such as Parent and Sub-tasks.
- If the other side holds one link and already has one, the change is refused and nothing changes on either side; the message
  says so. Xenith never replaces a link on the other side for you.

## Buttons

A **Button** property puts a button in every row. Choose **Button**, then set it up in the box that opens (and again later from
**Set up button…** in the column menu). It does one of the same things as a button in a page: **add an intention for today**,
**start a Focus session**, or **log a habit for today**. It can ask **Run this?** first.

In an intention's title, write **`{title}`** to use the title of the row the button is pressed in (`Follow up on {title}`).

A button never runs on its own, holds no value, and writes nothing to the row. Because it has no value there is nothing to
filter, sort or color by. Buttons run from the Projects screen.

## Status

The options of a **Status** property are listed under **To do**, **In progress** and **Complete** when you pick one. New options
join **To do**.
