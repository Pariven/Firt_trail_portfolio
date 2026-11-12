# Portfolio — Claude Code prompt

Install the design skill first (type these in Claude Code, one at a time):

```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

Then paste the prompt below.

---

Use the ui-ux-pro-max skill. Build my personal portfolio website as a **React 19 + TypeScript + Vite** app styled with **Tailwind CSS v4** (via `@tailwindcss/vite`, tokens in `@theme`), animated with **Motion** (`motion/react`) and smooth-scrolled with **Lenis**. Use Node.js 22+.

**Content:** use my CV (Pariventheswaran Paneerselvam — Full-Stack Developer, Malaysia). Put all text in `src/data.ts`: summary, skills (Languages / Frontend / Backend & Data / Tools), experience (Freelance Web Developer Oct 2025–present; JSJ College Seremban May 2025; Katril Group intern May–Oct 2024), projects (KPINTAR / digitaltvetmalaysia.com, QR Noir Tech, changemanagement.my, Cedar Tech Training, 3D Shirt), education and certifications. My cut-out portrait (transparent WebP) is `public/assets/portrait.webp`. The project screenshots are in `public/assets/proj-*.webp`.

**Look:** dark luxury editorial. Near-black `#0a0607` with maroon `#7a1424` / `#a81e35`, a rose accent `#e0566e` and cream text `#f4ece6`. Fonts: Geist (UI), Geist Mono (labels), Instrument Serif italic for accent words. Add a subtle film-grain overlay, a soft maroon radial glow and a faint masked grid.

**Liquid-glass system:** a reusable `glass` utility with backdrop blur + saturation, a gradient fill, a 1px light border and inset highlights.

**Floating navigation:** a centered pill nav, max width about 1000px, that floats 12–20px from the top and uses liquid glass. Add a highlight that follows the pointer, and a sliding active-section pill (shared `layoutId`) driven by IntersectionObserver. It hides when you scroll down and comes back when you scroll up. On mobile it becomes a burger with an animated glass dropdown.

**Sections and animations:**
1. Hero: a giant two-line name (solid + outlined), each letter animating up in a stagger. The portrait rises in with scroll parallax, the two name lines drift apart on scroll, and there is a live KL clock with an "open to work" dot. Add primary and glass CTAs.
2. Skewed maroon tech marquee.
3. About: a big statement whose words light up as you scroll, plus glass stat cards that count up.
4. Skills: a bento grid of glass cards with 3D tilt + a cursor glow, plus a solid maroon "security mindset" card.
5. Work: sticky stacking project cards that scale down as the next card covers them, with screenshot parallax and hover "Visit site".
6. Experience: a vertical timeline with a line that draws as you scroll.
7. Education & certifications.
8. Contact: a huge "Let's build it." headline, a magnetic email button, GitHub / WhatsApp / phone links, and a growing glow.
Every block fades, lifts and un-blurs into view (`whileInView`, once). Add a top scroll-progress bar.

**Quality:** mobile-first and fluid (`clamp()` type, `100svh` hero), with no horizontal scroll at 320px. Respect `prefers-reduced-motion` and keep visible focus states. Use semantic HTML and alt text. Lazy-load images, add SEO and Open Graph meta, and make sure `npm run build` passes with strict TypeScript.

---

## Run the site Claude already built

```bash
npm install
```

```bash
npm run dev
```

Deploy: push to GitHub and import the repo in Vercel (framework preset: Vite).
