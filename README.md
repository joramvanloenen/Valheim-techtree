# Valheim Tech Tree

A spoiler-safe, step-by-step progression guide for **Valheim 1.0**.

## How the guide works

The site now behaves like a guided quest log rather than exposing the whole tech tree at once:

- Only the **current objective** is shown in full.
- Checking it off reveals the **next step**.
- Future biome and boss names remain under **fog of war**.
- Crafting and optional side steps can be completed or skipped without losing your place.
- Each objective has a clear goal, required items, and detailed guidance for where/how to obtain the important materials.
- Completed steps are kept in a collapsible history and can be undone.
- Existing progress from the original tracker is migrated automatically.
- The full crafting/skills reference remains available behind an explicit spoiler disclosure.

Progress is stored locally in the browser.

## Version target

Current data target: **Valheim 1.0.15**, checked **20 September 2026**.

The Deep North portion uses post-1.0 sources because many older Valheim guides still describe that biome as unfinished.

## Publish with GitHub Pages

In this repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Save.

No build step is required.

## Files

- `index.html` — spoiler-safe site shell
- `styles.css` — responsive quest/progression UI
- `data.js` — progression, crafting, skills and source data
- `app.js` — guided reveal logic, acquisition help, history and local progress

---

Unofficial fan project. Valheim and its game assets belong to Iron Gate AB. No Valheim game assets are redistributed here.
