# Valheim Tech Tree

An interactive, milestone-based progression guide for **Valheim 1.0**, from the Meadows through the Deep North.

## What it does

- Tracks the core progression path across all 8 biomes
- Shows boss gates and summon requirements
- Separates **core progression**, **crafting upgrades**, and **optional side unlocks**
- Explains what each milestone **needs**, what to **do**, and what it **unlocks**
- Includes Workbench, Forge, Cauldron, Artisan Table, Black Forge and Galdr Table upgrade ladders
- Includes the 1.0 Deep North chain: Eternal Pyre → Embers → Bloodgold → Frost Foundry → Intricate Keys → Mörkhalla invasions → Kall
- Covers the current 24-skill system plus an approximate skill-XP calculator
- Saves checked milestones in the browser with localStorage
- Fully responsive; no framework or build step

## Publish with GitHub Pages

In this repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Save.

The site can then be served directly from the repository root.

## Files

- `index.html` — site shell
- `styles.css` — responsive visual design
- `data.js` — researched progression, stations, skills and source links
- `app.js` — rendering, search/filtering, progress persistence and skill calculator

## Version target

Current data target: **Valheim 1.0.15**, checked **20 September 2026**.

The Deep North portion uses post-1.0 sources because many older Valheim guides still describe that biome as unfinished.

---

Unofficial fan project. Valheim and its game assets belong to Iron Gate AB. No Valheim game assets are redistributed here.
