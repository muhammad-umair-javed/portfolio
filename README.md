# Muhammad Umair Javed — Robotics Research Portfolio

A research-oriented personal website built with React, TypeScript, Vite, Tailwind CSS,
and Framer Motion (used sparingly, for the hero arm illustration and hover/reveal states).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

The build output goes to `dist/` — deployable to any static host (Vercel, Netlify,
GitHub Pages, etc.).

## Editing content

All factual content lives in `src/data/` as plain TypeScript objects, separate from
the components that render them. You should never need to touch component files just
to update text:

| File | Controls |
| --- | --- |
| `src/data/research.ts` | Research focus nodes, education, scholarships, leadership, contact links |
| `src/data/flagship.ts` | The Dexterous 6 Pro case study (problem/system/engineering log) |
| `src/data/pipeline.ts` | The 8-stage perception → hardware pipeline diagram |
| `src/data/projects.ts` | All secondary projects, grouped by theme |
| `src/data/techStack.ts` | Tech stack groups, and which projects each technology maps to |
| `src/data/timeline.ts` | The research timeline and parallel tracks (CANSAT, internship) |

To add a new project: add an entry to the `projects` array in `projects.ts`, then (if
relevant) add its id to the appropriate technology arrays in `techToProjects` inside
`techStack.ts` so it participates in the stack cross-highlighting.

## Replacing the CV

Drop your latest CV PDF into `public/cv/` and update `contact.cvPath` in
`src/data/research.ts` if the filename changes. The current file is your uploaded CV,
copied as-is.

## Design system notes

- Colors, fonts, and spacing tokens are defined once in `tailwind.config.js`.
- The recurring coordinate-frame corner-bracket motif (`.frame` class) and the mono
  "// frame: x" eyebrow labels are defined in `src/index.css`.
- `prefers-reduced-motion` is respected globally (see `src/index.css` and
  `src/hooks/useReducedMotion.ts`); the hero illustration's path-draw animation is the
  only place this is checked explicitly, since it's the only non-essential motion.

## Content integrity

Every fact in `src/data/` is drawn directly from the CV and detailed project history
provided. No results, metrics, publications, or technologies have been invented —
if you add new work, add it the same way: verified facts only.
