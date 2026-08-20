# Lauren Kim — Portfolio Site

Static portfolio built with **Astro + plain CSS** (no Tailwind, few dependencies, easy to edit).
Self-hosted Inter font. Linen/ink palette. Design follows the v2 spec in
`../materials/examples/lauren_kim_site_spec_revised.md`.

> **Easiest way to change anything:** just tell Claude Code what you want
> ("make the bio warmer", "add a new project", "change the hero image"). The steps below are
> the manual version of what Claude does.

## Run it locally
Requires Node.js (v24+).
```
npm install      # once
npm run dev      # → http://localhost:4321
npm run build    # production build into dist/
```
(Or in Claude Code, the preview launches via `.claude/launch.json`, server name `portfolio`.)

## Project structure
```
src/
  pages/        index.astro (home) · info.astro · inquire.astro · works/ (index + [slug])
  components/   Header · GalleryWall · InfoBlock
  layouts/      Base.astro (font + global wrapper)
  data/         projects.js  ← the list of named works
  styles/       global.css   ← design tokens (color, type) + utility classes
public/images/  hero/ + one folder per work (cyanotype, dimensional, tiger)
```

## Add a new work
1. Make a folder `public/images/<name>/` and drop in `cover.jpg` + gallery images.
2. **Optimize them:** `bash scripts/optimize-images.sh` (caps longest edge at 2000px).
3. Add an entry to `src/data/projects.js` (copy an existing one). Fields: `slug`, `title`,
   `client`, `year`, `disciplines`, `materials`, `techniques`, `cover`, `aspectRatio`,
   `align` (left/right/center/wide), `width` (vw on desktop), `order`, `alt`, `statement`, `gallery`.
4. Save — it appears on the home gallery wall and `/works` automatically.

## Update copy
- **Hero line / practice statement:** `src/pages/index.astro`
- **Bio (home):** `src/components/InfoBlock.astro`
- **Bio, clients, press, education, contact:** `src/pages/info.astro`
- **Voice rules to follow:** `../../../voice/voice-and-style.md` (banned words live there).

## Change the hero
Replace/add images in `public/images/hero/` and edit the `heroImages` array at the top of
`src/pages/index.astro`. It crossfades through them (opacity only; respects reduced-motion).

## Deploy
_To be set up:_ GitHub repo → Netlify (free, built-in forms). Once connected, every push
auto-publishes and every PR gets a preview link. Then point `laurenk.im` DNS off Cargo to Netlify.
See the deploy plan in the session notes / Claude's memory.

## Notes / TODO
- Images are optimized JPEGs (via `sips`); upgrading to `astro:assets` (AVIF/WebP responsive) is a
  future enhancement.
- The info-block "portrait" is a placeholder print image until a real portrait/studio photo is added.
- Work `statement`/`client`/`year` values are drafts — confirm before launch.
