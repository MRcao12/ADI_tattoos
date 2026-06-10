# ADI Tattoo Studio — Agent Context

## Project
Tattoo studio website (ADI / Rhino) — wireframe phase. This is a single responsive file that scales via CSS media queries.

## File Structure (2-file workflow)
- **`maininstance.html`** — The working copy. This is what we edit and experiment on.
- **`saved_instance_2026-06-04_1139.html`** — The latest approved backup. Do not edit.

## Server
- File: `saved/wireframe/server.cjs`
- Must run with `workdir = saved/wireframe` using `node server.cjs`
- Update `server.cjs` to serve the correct file if needed
- Computer hotspot IP: 172.20.10.2 (for phone testing)
- Firewall rule "Node.js Dev Server (8080)" exists for TCP inbound

## Architecture
**Single responsive file** — one HTML file that uses CSS media queries to adapt layout to all screen sizes. JS-based page navigation (`.page.active` + `navigate()` function). All pages are divs within the same file, toggled by JS.

## Breakpoints
- **≤1024px** (tablet): 2-col grids collapse, smaller fonts/padding
- **≤600px** (phone): all grids 1-col, hamburger menu replaces nav links, hero/placeholder images shrink
- **≤380px** (small phone): tighter nav, compact hero

## Nav Order
Desktop: `[Artwork | Contact] ... [RHINO LOGO] ... [Artist | Aftercare] [BOOK NOW]`
Mobile: hamburger ☰ → slide-in menu: Artwork → Contact → Artist → Aftercare

## Pages in HTML order
1. page-home
2. page-contact
3. page-artwork
4. page-aftercare
5. page-artist

## What's Been Done
- Added responsive CSS media queries (1024px, 600px, 380px)
- Removed all phone numbers from the site
- Added BOOK NOW CTA button to header on all 5 pages
- Desktop layout: logo centered via `flex: 1 1 0` on left/right nav wrappers
- Mobile header: hamburger menu replaces nav links, logo centered, BOOK NOW on right
- Mobile menu: slide-in from left with overlay, closes on nav click or Escape
- Reordered nav: `Artwork · Contact · LOGO · Artist · Aftercare · BOOK NOW`
- Fixed artwork grid pieces 2-5 being squished on mobile (added min-height to grid-template-rows containers)
- Added Elfsight Instagram embed placeholder in Instagram section
- Saved backup: `saved_instance_2026-06-04_1139.html`
- **Jun 9**: Migrated project-level AGENTS.md to distinguish "current website" (wireframe HTML) vs Astro boilerplate
- **Jun 9**: Documented third-party integrations (Elfsight), viable/inviable features for static site
- **Jun 9**: Cleaned up old files from saved/wireframe/ (deleted desktop/, mobile/, main_wireframe_saveinstance.html)
- **Jun 9**: Elfsight: user needs to sign up, get App ID, and insert it to activate Instagram feed

## Client Constraints
- NO phone number anywhere on the site
- Single responsive file for all screen sizes
- Mobile responsiveness is top priority
- **Static site only** — no server functions, SSR, or real-time backend
- **Ask before making any changes** — this is the golden rule

## Elfsight Setup (pending)
1. Go to elfsight.com → Instagram Feed widget → Create Widget
2. Connect Instagram account
3. Customize to match dark theme (primary orange #e66a25)
4. Copy the generated App ID
5. In maininstance.html, replace `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` with real App ID
6. Same process for Google Reviews if desired

## Commands
- Server: `cd saved/wireframe && node server.cjs`
- Git: `"C:\Program Files\Git\cmd\git.exe"` (not in PATH)
