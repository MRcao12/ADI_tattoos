# ADI Tattoo Studio — Agent Context

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
