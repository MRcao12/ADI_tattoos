# ADI Tattoo Studio — Agent Context

## IMPORTANT: Main Site Location
The **main website** is at **`C:\Users\rcao0\ADI_tattoos\`** (local project with 12 commits, real images, orange #F95C03 theme, full branding). NOT the GitHub clone or wireframes. When user says "main page" or "main website", serve from this directory.

## Golden Rule
- **ASK BEFORE MAKING ANY CHANGES** — do not edit, create, or delete any file in the project without first proposing the change and getting explicit approval. This applies to Astro source files, components, pages, config, styles, images, and any other project assets.

## Project
Tattoo studio website for Art District Inc. Built with Astro (static output for Cloudflare deployment). React and styled-components available. Dark theme with primary orange (#e66a25), Impact/Arial Black font family.

## State
- **"Current website"** = `saved/wireframe/maininstance.html` (single HTML file). NOT the Astro project yet.
- Astro project (`src/`) is still default boilerplate — not built yet
- Images in `public/` are ready for use
- Reference/low-res logos in `public/reference-logos/` — not for live use until confirmed
- Sanity CMS is configured but not populated
- **Static site deployment to Cloudflare** — no server-side functions allowed. Everything must be client-side JS or build-time.

## Wireframe Files (in `saved/wireframe/`)
- **`maininstance.html`** — Working copy. Edit this one.
- **`saved_instance_2026-06-04_1139.html`** — Latest approved backup. Do not edit.
- **`AGENTS.md`** — Context + changelog for this project.
- **`server.cjs`** — Local preview server. Run with `node server.cjs` from `saved/wireframe/` on port 8080.
- Cleaned up: deleted `desktop/`, `mobile/`, `main_wireframe_saveinstance.html`.

## Third-Party Integrations
- **Elfsight Instagram Feed** — Placeholder added to maininstance.html. Needs real App ID from elfsight.com to go live.
- **Elfsight Google Reviews** — Discussed but not implemented yet. Same setup process.
- Elfsight widgets are fully responsive (adapt to container/breakpoints automatically).

## Features Viable for Static Site
- "Shop the look" on artwork (clickable pieces with CTA)
- Children's book page
- Instagram/TikTok embeds
- Style quiz (client-side JS)
- Pre-visit PDF download
- Third-party booking widget (e.g. Calendly iframe)
- Testimonials (static cards)
- **NOT viable**: healing progress tracker, live review aggregation, live booking calendar (need a server)

## Client Constraints
- No phone numbers anywhere on the site
- Mobile responsiveness is top priority

## Session Log — 2026-06-11
### Fixed Social Media Links
- **YouTube**: Removed entirely (channel link was 404)
- **Facebook**: Changed `artdistrictinctattoo` → `ArtDistrictInc` (wrong page)
- **Yelp**: Changed `mike-trainas-art-district-clearwater` → `mike-trainas-art-district-tampa` (wrong slug)
- **Instagram**: Already correct (`artdistrictinc`)
- Updated both `Footer.astro` and `contact.astro` (social card grid)
- Contact page social grid reduced from 4-col to 3-col after YouTube removal

## Session Log — 2026-06-15
### Nav Changes
- Swapped nav order: Artist, Contact, Artwork, Aftercare
- Increased nav links to 16px, CTA to 14px, nav gap to 38px
- Balanced nav links: 10vw from left/right edges using absolute positioned hamburger and CTA
- Hamburger hidden on desktop, shown on mobile at left:5%

### Hero Changes
- Removed rotating gallery slides, arrows, dots, and JS
- Background: `ADI_hero_bw_scrim.jpg` with center/cover
- Logo: `ADIlogo1web.png`, max-width 572px, white glow via drop-shadow filter
- Added `maybeadilogo.png` to public (not in use)

### Artwork Page
- Converted to masonry layout (CSS columns: 4 → 3 → 2 responsive)
- Populated with ADI_artwork1-12.jpg (no fixed heights, natural aspect ratios)
- Added lightbox: click image opens full-size overlay with blur background

### Contact Page
- Enlarged form inputs: 22px padding, 16px font-size, 14px gap

### Aftercare Page
- Replaced 🚫 emojis with styled orange ✕ in "What to Avoid" section

## Session Log — 2026-06-16
### Font Implementation
- Replaced Impact/Arial Black → Big Shoulders Display (headings)
- Replaced Inter → Hanken Grotesk (body)
- Added Martian Mono for labels/eyebrows/tags
- New brand orange: #F95C03
- Google Fonts loaded with display=swap
- Updated all components, pages, and global styles
- Removed all `--font-heading` and `--orange` references

### Artist Page (home + artist page)
- About/Contact boxes invisible with dummy lorem ipsum text
- Specialty tags scaled up (18px with 16px/32px padding originally, then adjusted to 1rem)
- Bio font 20px, contact rows 20px
- Artist photo on home page now fills column height

### Location Section
- Removed ADI3.jpg (first storefront photo)
- ADI5.jpg on left, map on right (2-col grid)
- Same layout on both home page and contact page

### Needs
- No email address on file - awaiting from client
- `[ EMAIL ADDRESS ]` placeholder on contact page
- `[ HOURS ]` placeholders on contact page
- Instagram: `@artdistrictinc` (confirmed correct)
- ADI_artwork images from Downloads used as public assets
