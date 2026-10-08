// Scalable Governance — landing page behaviour.
// Plain JS, no build step. Every feature degrades to readable static content.

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ───────── Nav: shrink on scroll ─────────
  function initNav() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    let ticking = false;
    const update = () => {
      const t = Math.min((window.scrollY || 0) / 100, 1);
      nav.style.setProperty('--t', t.toFixed(3));
      nav.classList.toggle('is-scrolled', t > 0);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();

    // Mobile menu
    const toggle = nav.querySelector('.nav-toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      links.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

    // Research submenu (desktop): hover opens it in CSS; the chevron button opens it for keyboard and touch.
    nav.querySelectorAll('.nav-links__group').forEach((group) => {
      const btn = group.querySelector('.nav-sub-toggle');
      if (!btn) return;
      const setSub = (open) => { group.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); };
      btn.addEventListener('click', (e) => { e.stopPropagation(); setSub(!group.classList.contains('is-open')); });
      group.addEventListener('focusout', (e) => { if (!group.contains(e.relatedTarget)) setSub(false); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && group.classList.contains('is-open')) { setSub(false); btn.focus(); } });
      document.addEventListener('click', (e) => { if (!group.contains(e.target)) setSub(false); });
    });
    links.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) setOpen(false);
    });
  }

  // ───────── Hero accordion (independent toggles) ─────────
  function initAccordion() {
    document.querySelectorAll('.accordion__trigger').forEach((btn) => {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(open));
        panel.classList.toggle('is-open', open);
      });
    });
  }

  // ───────── Publication browser (vertical tabs) ─────────
  function initPublications() {
    const list = document.querySelector('.pubs__list');
    const details = document.querySelector('.pubs__details');
    if (!list || !details) return;
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));

    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) {
          panel.hidden = !on;
          if (on) details.dataset.ring = panel.dataset.themeRing;
        }
      });
      if (focus) tab.focus();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab, false));
      tab.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next, true); }
      });
    });

    select(tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0], false);

    // Abstracts are clamped to a few lines until expanded; the text itself stays verbatim.
    details.querySelectorAll('.abstract__toggle').forEach((btn) => {
      const box = btn.closest('.abstract');
      btn.addEventListener('click', () => {
        const open = !box.classList.contains('is-open');
        box.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
        btn.textContent = open ? 'Show less' : 'Show full abstract';
      });
    });

    // On narrow screens the detail sits below the list; bring the chosen paper into view.
    tabs.forEach((tab) => tab.addEventListener('click', () => {
      if (!window.matchMedia('(max-width: 860px)').matches) return;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel && panel.getBoundingClientRect().top > window.innerHeight * 0.6) {
        panel.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
      }
    }));
  }

  // ───────── Table of contents: scroll spy ─────────
  function initToc() {
    const links = Array.from(document.querySelectorAll('.toc__list a'));
    if (!links.length) return;
    const sections = links.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    let ticking = false;
    const update = () => {
      ticking = false;
      let current = sections[0];
      const line = Math.max(200, window.innerHeight * 0.35);
      sections.forEach((sec) => { if (sec.getBoundingClientRect().top < line) current = sec; });
      // Short last sections never reach the threshold; mark them once the page bottom is reached.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = sections[sections.length - 1];
      links.forEach((a) => {
        const on = current && a.getAttribute('href') === '#' + current.id;
        a.classList.toggle('is-active', on);
        if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // ───────── Glossary tooltips ─────────
  // Hover or focus shows the definition; click or tap toggles it; Escape closes.
  function initTerms() {
    const terms = Array.from(document.querySelectorAll('.term'));
    if (!terms.length) return;
    const place = (term) => {
      const tip = term.querySelector('.term__tip');
      term.style.setProperty('--tip-left', '0px');
      const r = tip.getBoundingClientRect();
      const overflow = r.right - (document.documentElement.clientWidth - 16);
      if (overflow > 0) term.style.setProperty('--tip-left', -Math.min(overflow, r.left - 16) + 'px');
    };
    const setOpen = (term, open) => {
      term.classList.toggle('is-open', open);
      if (open) place(term);
    };
    const closeAll = (except) => terms.forEach((t) => { if (t !== except) setOpen(t, false); });
    terms.forEach((term) => {
      const btn = term.querySelector('.term__word');
      let pinned = false;
      term.addEventListener('mouseenter', () => { closeAll(term); setOpen(term, true); });
      term.addEventListener('mouseleave', () => { if (!pinned) setOpen(term, false); });
      btn.addEventListener('focus', () => { closeAll(term); setOpen(term, true); });
      btn.addEventListener('blur', () => { pinned = false; setOpen(term, false); });
      btn.addEventListener('click', () => {
        pinned = !pinned;
        closeAll(term);
        setOpen(term, pinned || term.matches(':hover'));
      });
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(null); });
    document.addEventListener('click', (e) => { if (!e.target.closest('.term')) closeAll(null); });
  }

  // ───────── Budget slider ─────────
  function initBudget() {
    const figure = document.querySelector('.budget');
    const track = document.getElementById('budget-track');
    const thumb = document.getElementById('budget-thumb');
    if (!figure || !track || !thumb) return;
    const MIN = 30;
    const MAX = 70;
    let value = Number(thumb.getAttribute('aria-valuenow')) || 62;
    const set = (v) => {
      value = Math.round(Math.max(MIN, Math.min(MAX, v)));
      figure.style.setProperty('--split', value);
      thumb.setAttribute('aria-valuenow', value);
      thumb.setAttribute('aria-valuetext', value + '% documentation for audits, ' + (100 - value) + '% implementation');
    };
    const fromPointer = (e) => {
      const r = track.getBoundingClientRect();
      return ((e.clientX - r.left) / r.width) * 100;
    };
    let dragging = false;
    track.addEventListener('pointerdown', (e) => {
      dragging = true;
      track.setPointerCapture(e.pointerId);
      set(fromPointer(e));
    });
    track.addEventListener('pointermove', (e) => { if (dragging) set(fromPointer(e)); });
    const stop = () => { dragging = false; };
    track.addEventListener('pointerup', stop);
    track.addEventListener('pointercancel', stop);
    thumb.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 10 : 2;
      const keys = { ArrowLeft: -step, ArrowDown: -step, ArrowRight: step, ArrowUp: step, PageDown: -10, PageUp: 10 };
      if (e.key in keys) { e.preventDefault(); set(value + keys[e.key]); }
      else if (e.key === 'Home') { e.preventDefault(); set(MIN); }
      else if (e.key === 'End') { e.preventDefault(); set(MAX); }
    });
    set(value);
  }

  // ───────── Copy email address ─────────
  function initCopy() {
    document.querySelectorAll('.copy-btn').forEach((btn) => {
      const status = btn.nextElementSibling;
      btn.addEventListener('click', async () => {
        let ok = false;
        try {
          await navigator.clipboard.writeText(btn.dataset.copy);
          ok = true;
        } catch (e) { /* clipboard unavailable, e.g. insecure context */ }
        if (status) status.textContent = ok ? 'Copied.' : 'Copy failed. Select the address instead.';
        clearTimeout(btn._t);
        btn._t = setTimeout(() => { if (status) status.textContent = ''; }, 3000);
      });
    });
  }

  // ───────── Dot grid background ─────────
  // Dots appear only in the vertical bands of [data-grid-section] elements.
  // They are dim next to text and surfaces, brighter in empty space, and pull
  // toward the pointer. With reduced motion the grid is drawn static.
  function initDotGrid() {
    const canvas = document.getElementById('dot-grid');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');

    const SPACING = 30;
    const RADIUS = 1.2;
    const INFLUENCE = 130;
    const PULL = 0.35;
    const RETURN = 0.08;
    const COLOR = (a) => 'oklch(0.48 0.19 260 / ' + a.toFixed(3) + ')';

    let dots = [];
    let bands = [];
    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000 };
    const sections = Array.from(document.querySelectorAll('[data-grid-section]'));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const ox = (width - (cols - 1) * SPACING) / 2;
      const oy = (height - (rows - 1) * SPACING) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = ox + c * SPACING;
          const y = oy + r * SPACING;
          dots.push({ ox: x, oy: y, x, y, prox: 0.15, damp: 1 });
        }
      }
    };

    const computeBands = () => {
      bands = sections.map((el) => {
        const r = el.getBoundingClientRect();
        return { top: r.top, bottom: r.bottom };
      });
    };
    const inBand = (y) => bands.some((b) => y >= b.top && y <= b.bottom);

    // Distance from each dot to the nearest rendered text line or surface.
    const computeProximity = () => {
      const rects = [];
      const add = (r) => {
        if (r.width && r.height && r.bottom > -200 && r.top < height + 200 && r.right > -200 && r.left < width + 200) {
          rects.push(r);
        }
      };
      const range = document.createRange();
      const roots = sections.concat(document.getElementById('site-nav') || []);
      roots.forEach((root) => {
        const rr = root.getBoundingClientRect();
        if (rr.bottom < -200 || rr.top > height + 200) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
          acceptNode: (n) => (n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT)
        });
        let n;
        while ((n = walker.nextNode())) {
          const pr = n.parentElement && n.parentElement.getBoundingClientRect();
          if (!pr || pr.bottom < -200 || pr.top > height + 200) continue;
          range.selectNodeContents(n);
          for (const r of range.getClientRects()) add(r);
        }
        root.querySelectorAll('a, button, img, .person, .site-nav__bar').forEach((el) => add(el.getBoundingClientRect()));
      });

      for (const d of dots) {
        if (!inBand(d.oy)) continue;
        let min = 9999;
        for (const r of rects) {
          const cx = Math.max(r.left, Math.min(d.ox, r.right));
          const cy = Math.max(r.top, Math.min(d.oy, r.bottom));
          const dist = Math.hypot(d.ox - cx, d.oy - cy);
          if (dist < min) min = dist;
        }
        d.damp = min < 24 ? 0.05 : min < 160 ? 0.05 + ((min - 24) / 136) * 0.95 : 1;
        d.prox = min < 30 ? 0.04 : min < 200 ? 0.04 + ((min - 30) / 170) * 0.22 : 0.26;
      }
    };

    const refresh = () => { computeBands(); computeProximity(); };

    const drawDot = (x, y, r, a) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = COLOR(a);
      ctx.fill();
    };

    // Static rendering for reduced motion.
    const drawStatic = () => {
      refresh();
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) if (inBand(d.oy)) drawDot(d.ox, d.oy, RADIUS, d.prox);
    };

    let frame = 0;
    let animId = 0;
    const animate = () => {
      frame++;
      if (frame % 20 === 0) refresh();
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        if (!inBand(d.oy)) {
          d.x += (d.ox - d.x) * RETURN;
          d.y += (d.oy - d.y) * RETURN;
          continue;
        }
        const dx = mouse.x - d.ox;
        const dy = mouse.y - d.oy;
        const dist = Math.hypot(dx, dy);
        if (dist < INFLUENCE) {
          const force = (1 - dist / INFLUENCE) * PULL;
          d.x += (d.ox + dx * force - d.x) * 0.15;
          d.y += (d.oy + dy * force - d.y) * 0.15;
        } else {
          d.x += (d.ox - d.x) * RETURN;
          d.y += (d.oy - d.y) * RETURN;
        }
        const disp = Math.hypot(d.x - d.ox, d.y - d.oy);
        drawDot(d.x, d.y, RADIUS + disp * 0.04 * d.damp, d.prox + Math.min(disp / 15, 0.4) * d.damp);
      }
      animId = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(animId);
      resize();
      if (reduceMotion.matches) {
        drawStatic();
      } else {
        refresh();
        animate();
      }
    };

    let scrollTick = false;
    window.addEventListener('scroll', () => {
      if (scrollTick) return;
      scrollTick = true;
      requestAnimationFrame(() => {
        scrollTick = false;
        if (reduceMotion.matches) drawStatic(); else computeBands();
      });
    }, { passive: true });
    window.addEventListener('resize', start);
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', start);
    // Accordions and font loading change the text layout.
    document.addEventListener('click', () => setTimeout(refresh, 260));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

    start();
  }

  initNav();
  initAccordion();
  initPublications();
  initToc();
  initTerms();
  initBudget();
  initCopy();
  initDotGrid();
})();
