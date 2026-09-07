# portfolio.ahmxd.net

Personal portfolio and engineering case studies for **Salman Ahmad** — Calgary, AB.

Built as an operations console rather than a brochure: the technical writing is the
point, and the design exists to make it readable.

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| UI | React 19, TypeScript 5.9 |
| Styling | Tailwind CSS 3.4 with a CSS-variable token system |
| Motion | Framer Motion 11, Lenis smooth scroll |
| Hosting | Vercel |
| Analytics | Vercel Analytics + Speed Insights |

Fonts are Inter, JetBrains Mono and Space Grotesk via `next/font`.

## Routes

```
/                      Home — hero, systems, about, capabilities, work, experience
/work                  Case study index
/work/[slug]           Engineering case study
/blog                  SYSADMIN_ARCHIVES index
/blog/[slug]           Individual post
/resume                Print-ready resume (A4)
/sitemap.xml           Generated from the content registry
```

## Content model

Content is data, not markup. Adding a case study means adding an object, not a component.

```
src/content/
├── types.ts          Case study, incident and diagram types
├── case-studies.ts   Architecture, decisions, security, measurements
├── incidents.ts      Incident records
├── posts.ts          Blog post registry
└── skills.ts         Capabilities, tiered, with links to evidence
```

Two constraints are enforced by the types rather than by discipline:

- **`tier` is required** on every case study and skill, so no claim appears without its
  provenance — professional, client, personal infrastructure, lab, or learning.
- **`method` is required** on every performance figure, and **`tradeoff`** on every
  decision. A number cannot be added without stating how it was obtained, and a choice
  cannot be recorded as costless.

Architecture diagrams are declared as `{ nodes, edges, rows }` and rendered to inline
SVG by `components/ui/ArchDiagram.tsx` — theme-aware, dependency-free, and emitted
alongside a text equivalent generated from the same data.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint     # eslint (flat config)
```

## Notes

- **Static export.** `output: 'export'` in `next.config.js`. No route handlers or ISR.
- **Dark-first.** The theme defaults to dark regardless of OS preference; an explicit
  toggle persists to `localStorage`. Both palettes are defined as RGB triples consumed
  through a Tailwind opacity helper.
- **Reduced motion is respected.** `MotionConfig reducedMotion="user"` covers Framer
  Motion, Lenis is not installed at all, the cursor trail does not render, and the
  particle background draws a single static frame.
- **Post dates come from git history**, not from memory.

## License

MIT — see [`LICENSE`](LICENSE). You may reuse, modify and redistribute the code, with
attribution and without warranty.

Written content (blog posts, case studies) and the profile photograph are not covered by
that grant.

---

*Aut viam inveniam aut faciam.*
