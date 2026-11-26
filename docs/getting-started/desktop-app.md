---
sidebar_position: 5
title: Xenith for desktop
description: "The Xenith desktop app for Windows (Linux files to follow): what it is, how to install it, signing in with Google or Microsoft, the menu bar and search, the tray and quick capture, Focus on the taskbar, updates, and troubleshooting."
keywords:
  - xenith desktop app
  - xenith for windows
  - xenith for linux
  - xenith installer
  - quick capture shortcut
  - focus timer taskbar
---

# Xenith for desktop

The desktop app is **the same Xenith as on the web, in its own window**, with a few things a
browser tab can't do: a menu bar, a tray icon, a quick-capture shortcut, and your
[Focus](../daily-workflow/focus.md) timer on the taskbar.

It shows the live app, so it stays current without a new download, and your account, data and
[Pro plan](../account/pro-and-billing.md) are exactly what they are on the web.

## Get it

The downloads are listed at **[xenith.life/download](https://xenith.life/download)**:

| For | File | Notes |
| --- | --- | --- |
| Windows 10 or 11 (64-bit) | **Installer** | A setup wizard. It installs for you by default, or for everyone on the PC if you choose, lets you pick the folder, and adds a desktop and Start-menu shortcut. It updates itself. |
| Windows 10 or 11 (64-bit) | **Portable** | One file that runs without installing. It does not update itself. |
| Linux (64-bit) | **.deb** and **AppImage** | Not offered for download yet. They appear on the download page when they are ready. |

### The first run

- **Windows** may show a SmartScreen warning the first time, because the file isn't signed with a
  paid certificate yet. Choose **More info**, then **Run anyway**.
- **Linux, once it is offered:** on Ubuntu 24.04 and later the AppImage needs to be started with `--no-sandbox`, because that
  release restricts what the browser engine's sandbox uses. The `.deb` doesn't have this limit.

## Signing in

**Email and password** work inside the app. **Continue with Google** and **Continue with
Microsoft** open your **browser** (Google doesn't allow sign-in inside an app window), and
bring you back to Xenith when you're done. If your browser asks whether to open Xenith, say yes.
See [Creating an account](./creating-an-account.md).

## What the app adds

- **A menu bar** along the top: **File, Edit, View, Go, Options, Window, Help**. It appears once
  you're signed in.
- **Search in the middle of the top bar.** It opens the same search as <kbd>Ctrl</kbd> + <kbd>K</kbd>: pages, projects
  and commands.
- **The tray.** Closing the window keeps Xenith running in the tray (a notice tells you once), so your
  Focus timer and quick capture keep working. You can turn this off under **Options**; on Linux it's
  off by default, because many desktops don't show a tray.
- **Quick capture from anywhere.** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> opens [Quick capture](./the-interface.md#quick-capture)
  over whatever you're doing. If another app already uses that key, Xenith tells you, and you can turn the
  shortcut off under **Options**.
- **Focus on the taskbar.** While a session runs, the taskbar button shows its progress and the tray
  tooltip shows the time left, for example *Focusing · 24:07*. The timer isn't slowed down when the window
  is minimized or behind other apps.
- **A pop-out timer** that stays on top of other windows: see [Focus](../daily-workflow/focus.md).
- **Launch at login**, starting quietly in the tray. Off until you turn it on under **Options**.
- **It remembers its size and position**, and only one copy runs at a time: opening Xenith again
  brings the open window forward.

### Right-click

- **The tray icon:** Open Xenith, New intention, Quick capture, Go to (every page), Exit.
- **The taskbar button (Windows):** New intention, Quick capture, Plan, Focus and Calendar. These work
  even when Xenith isn't running yet.

### The menus

| Menu | What's in it |
| --- | --- |
| **File** | New intention (<kbd>Ctrl</kbd> + <kbd>N</kbd>), Quick capture, Settings (<kbd>Ctrl</kbd> + <kbd>,</kbd>), Exit |
| **Edit** | Undo, Redo, Cut, Copy, Paste, Select all |
| **View** | Toggle sidebar (<kbd>Ctrl</kbd> + <kbd>B</kbd>), zoom in and out, full screen |
| **Go** | Dashboard, Plan, Calendar, Focus, Reflection, Insights and Projects (<kbd>Ctrl</kbd> + <kbd>1</kbd> to <kbd>7</kbd>), Back and Forward (<kbd>Alt</kbd> + <kbd>←</kbd> / <kbd>→</kbd>) |
| **Options** | Launch at login, Keep running in the tray when closed, Always on top, the quick-capture shortcut, Check for updates |
| **Window** | Minimize, Close |
| **Help** | Xenith help, Report a problem, About Xenith |

On the sign-in screen the app shows only the Xenith mark and the window buttons.

## Updates

The installer and the AppImage check for updates when they start and every few hours. A new version
downloads in the background and installs the next time you quit, and Xenith lets you know it's ready. You
can also choose **Options → Check for updates**. The portable file and the `.deb` don't update
themselves.

The **website part** of the app (everything you see inside the window) needs no update at all: it's the
live Xenith.

## What's different from the web

- **Push reminders aren't available** in the desktop app, so the reminder banner and the notification
  toggle in [Settings](../account/settings.md) aren't offered there. Focus alerts and the app's own notices
  still show as system notifications. See [Notifications](../account/notifications.md).
- **There's no "install the app" prompt**, since it already is one.
- **Offline works the same way:** pages you've opened can be read, and changes wait until you're back
  online. See [Using Xenith offline](./offline.md).
- **Pages from the rest of the site** (articles, the privacy and terms pages) open in your browser, not in
  the app window.

## Your data

It's the same account as on the web, and nothing is stored differently. Xenith counts usage the way it
does on the web, depending on your cookie choice, and marks activity that comes from the desktop app as such.
Uninstalling removes the app and its shortcuts and leaves your account and data on Xenith's servers untouched;
the small file that remembers the window's size and your options stays on the computer unless you delete it.

## Troubleshooting

- **"Xenith is already running" or nothing opens.** Xenith may be in the tray. Click its icon, or right-click
  it and choose **Open Xenith**. **Exit** from that menu quits it fully.
- **No tray icon on Linux.** Some desktops (GNOME, for example) show tray icons only with an extension.
- **The quick-capture shortcut does nothing.** Another app may use the same keys, or your Linux desktop
  (Wayland) may block global shortcuts. Open **Options** to turn it off, or use the menu (**File → Quick capture**).
- **Sign-in with Google or Microsoft doesn't return to the app.** Let your browser open Xenith when it
  asks, and use **Open Xenith** on the page it shows. If it still doesn't, email and password sign-in works
  inside the app.
- **Something else.** Choose **Help → Report a problem**.
