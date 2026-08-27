/* TSU motion runtime — scroll reveals, parallax, pinned progress, language swap */
(function () {
  const EASE = "cubic-bezier(.16,1,.3,1)";
  const reduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const REVEAL_TRANSITION = [
    "opacity .85s " + EASE,
    "transform 1.05s " + EASE,
    "clip-path 1.15s " + EASE,
    "filter .9s ease-out",
    "letter-spacing 1.2s " + EASE,
  ].join(",");

  function clearReveal(el) {
    el.style.transition = REVEAL_TRANSITION;
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.clipPath = "inset(-25% -8% -25% -8%)";
    el.style.filter = "none";
    el.setAttribute("data-rv-done", "1");
  }

  function force(root) {
    root.querySelectorAll("[data-rv]").forEach((el) => {
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.clipPath = "inset(-25% -8% -25% -8%)";
      el.style.filter = "none";
      el.setAttribute("data-rv-done", "1");
    });
  }

  const api = {
    intensity: 1,

    /* Persist the reader's language choice across page navigation. */
    storedLocale() {
      try {
        return localStorage.getItem("tsu-locale") === "zh" ? "zh" : "en";
      } catch (e) {
        return "en";
      }
    },

    init(opts) {
      const root = (opts && opts.root) || document;
      this.root = root;
      this.pinHandlers = (opts && opts.pins) || {};
      const narrow = window.matchMedia("(max-width: 860px)").matches;
      const asked = opts && opts.intensity != null ? opts.intensity : 1;
      this.intensity = narrow ? asked * 0.3 : asked;

      this.setLocale(this.storedLocale(), root);

      if (reduced) {
        force(root);
        return this;
      }

      this.scrollLoop(root);
      this.trackNav(root);

      // Safety net 1: observer with threshold 0 — a clip-path'd target never
      // reaches a nonzero ratio, so any positive threshold strands it.
      if (window.IntersectionObserver) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              io.unobserve(entry.target);
              const d = parseFloat(entry.target.getAttribute("data-rv-d") || "0");
              setTimeout(() => clearReveal(entry.target), d);
            });
          },
          { threshold: 0 }
        );
        root.querySelectorAll("[data-rv]").forEach((el) => io.observe(el));
      }

      // Safety net 2: unconditional catch-up, so capture/print/no-scroll
      // contexts never render blank paper.
      setTimeout(() => force(root), 3000);
      return this;
    },

    /* --nav-h: the header wraps to 2-3 rows on narrow screens and grows again
       when webfonts swap, so heroes cannot reserve a hardcoded offset. Written
       independently of the scroll frame. */
    trackNav(root) {
      let last = 0;
      function write() {
        const nav = root.querySelector("[data-nav]");
        if (!nav) return;
        const h = Math.round(nav.getBoundingClientRect().height);
        if (h > 0 && h !== last) {
          last = h;
          document.documentElement.style.setProperty("--nav-h", h + "px");
        }
      }
      write();
      window.addEventListener("resize", write);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(write);
      // Polled rather than observed: the render can replace the header node at
      // any time, which silently kills an observer bound to the old one. One
      // getBoundingClientRect every 300ms, and it can never go stale.
      if (this._navTimer) clearInterval(this._navTimer);
      this._navTimer = setInterval(write, 300);
    },

    scrollLoop(root) {
      let pending = Array.from(root.querySelectorAll("[data-rv]"));
      const px = Array.from(root.querySelectorAll("[data-px]"));
      const pins = Array.from(root.querySelectorAll("[data-pin]"));
      const bar = root.querySelector("[data-progress]");
      let raf = 0;

      const frame = () => {
        raf = 0;
        const vh = window.innerHeight;
        const k = this.intensity;

        if (pending.length) {
          const trigger = vh * 0.92;
          const still = [];
          for (const el of pending) {
            const r = el.getBoundingClientRect();
            if (r.top < trigger && r.bottom > -vh) {
              const d = parseFloat(el.getAttribute("data-rv-d") || "0");
              if (d > 0) setTimeout(() => clearReveal(el), d);
              else clearReveal(el);
            } else if (r.top <= -vh) {
              clearReveal(el);
            } else {
              still.push(el);
            }
          }
          pending = still;
        }

        px.forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-px")) * k;
          const r = el.getBoundingClientRect();
          const mid = r.top + r.height / 2 - vh / 2;
          const extra = el.getAttribute("data-px-scale");
          const scale = extra ? " scale(" + extra + ")" : "";
          el.style.transform = "translate3d(0," + (-mid * speed).toFixed(2) + "px,0)" + scale;
        });

        pins.forEach((el) => {
          const r = el.getBoundingClientRect();
          const span = r.height - vh;
          const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
          const key = el.getAttribute("data-pin");
          const fn = this.pinHandlers[key];
          if (fn) fn(p, el);
        });

        const nav = root.querySelector("[data-nav]");
        if (nav) {
          const on = window.scrollY > 24;
          const bg = nav.getAttribute(on ? "data-nav-bg-scrolled" : "data-nav-bg");
          const bd = nav.getAttribute(on ? "data-nav-border-scrolled" : "data-nav-border");
          if (bg) nav.style.background = bg;
          if (bd) nav.style.borderBottomColor = bd;
        }

        if (bar) {
          const doc = document.documentElement;
          const total = doc.scrollHeight - vh;
          bar.style.transform =
            "scaleX(" + (total > 0 ? Math.min(1, window.scrollY / total) : 0).toFixed(4) + ")";
        }
      };

      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(frame);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      const navEl = root.querySelector("[data-nav]");
      if (navEl && window.ResizeObserver) new ResizeObserver(onScroll).observe(navEl);
      frame();
      this.refresh = onScroll;
    },

    /* EN <-> ZH text swap driven by data-zh attributes */
    setLocale(locale, root) {
      const scope = root || this.root || document;
      document.documentElement.lang = locale;
      try {
        localStorage.setItem("tsu-locale", locale);
      } catch (e) {}
      scope.querySelectorAll("[data-zh]").forEach((el) => {
        if (!el.hasAttribute("data-en")) el.setAttribute("data-en", el.textContent.trim());
        el.textContent =
          locale === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
      });
      if (this.refresh) this.refresh();
    },
  };

  // Idempotent: a re-execution (reload / hot-reload) must not orphan a live
  // instance and its listeners.
  if (window.TSUMotion) {
    Object.assign(window.TSUMotion, api, {
      intensity: window.TSUMotion.intensity,
    });
  } else {
    window.TSUMotion = api;
  }
})();
