TSU — static site
=================

Deploy: drag this whole folder into Vercel / Netlify / Cloudflare Pages,
or push it to a repo and enable GitHub Pages. No build step, no npm.

  index.html         Home
  thinkbreak.html    ThinkBreak project page
  maison-tsu.html    Maison Tsu web-design sample
  motion.js          Scroll motion (parallax, reveals, pinned sequences)
  support.js         Rendering runtime
  _ds/               Broadsheet design system (tokens + CMYK plate filters)
  public/            Images

Editing text: open the .html files, the copy is plain markup.
Do not change the data-rv / data-px / data-pin attributes or the
380vh height on the pinned section — the animations are driven by them.
