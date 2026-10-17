// Scalable Governance — site behaviour.
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

  // ───────── The three levels: scroll zooms out through the rings ─────────
  // The camera starts on the innermost ring (organisation) and pulls back to
  // verification, then regulation. Scale changes geometrically, as in the film.
  // A click on a ring or a level button jumps to that level. With reduced
  // motion the section stays a static list.
  function initLevels() {
    const section = document.querySelector('.levels');
    if (!section) return;
    const track = section.querySelector('.levels__track');
    const svg = section.querySelector('.levels__rings');
    const view = section.querySelector('.levels__view');
    const rings = Array.from(section.querySelectorAll('.ring'));
    const items = Array.from(section.querySelectorAll('.level'));
    const buttons = Array.from(section.querySelectorAll('.levels__btn'));
    const readout = section.querySelector('.levels__readout-name');
    const steps = Array.from(section.querySelectorAll('.levels__steps i'));
    if (!track || !svg || !rings.length) return;

    // Frames per level: centre and half-size of the square that holds each ring.
    const geo = [0, 1, 2].map((lvl) => {
      const c = rings.find((r) => Number(r.dataset.level) === lvl);
      const r = Number(c.getAttribute('r'));
      return { x: Number(c.getAttribute('cx')), y: Number(c.getAttribute('cy')), r, h: r * 1.18 };
    });
    // Scroll stops: hold, move, hold, move, hold.
    const STOPS = [0.08, 0.5, 0.92];
    const names = items.map((li) => li.querySelector('.level__name').textContent);
    let current = -1;

    const setActive = (lvl) => {
      if (lvl === current) return;
      current = lvl;
      items.forEach((li) => li.classList.toggle('is-active', Number(li.dataset.level) === lvl));
      rings.forEach((r) => r.classList.toggle('is-active', Number(r.dataset.level) === lvl));
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.level) === lvl)));
      steps.forEach((s, i) => s.classList.toggle('is-on', i === lvl));
      if (readout) readout.textContent = names[lvl];
    };

    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const levelAt = (p) => {
      if (p <= STOPS[0]) return 0;
      if (p >= STOPS[2]) return 2;
      const seg = p < STOPS[1] ? 0 : 1;
      const t = (p - STOPS[seg]) / (STOPS[seg + 1] - STOPS[seg]);
      return seg + ease(Math.min(1, Math.max(0, t)));
    };
    const frameFor = (l) => {
      const i = Math.min(1, Math.floor(l));
      const t = l - i;
      const a = geo[i];
      const b = geo[i + 1];
      const h = Math.exp(Math.log(a.h) + (Math.log(b.h) - Math.log(a.h)) * t);
      const x = a.x + (b.x - a.x) * t;
      const y = a.y + (b.y - a.y) * t;
      return [x - h, y - h, 2 * h, 2 * h];
    };
    const progress = () => {
      const rect = track.getBoundingClientRect();
      const stage = section.querySelector('.levels__stage').offsetHeight;
      const span = rect.height - stage;
      return span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const l = levelAt(progress());
      svg.setAttribute('viewBox', frameFor(l).map((v) => v.toFixed(2)).join(' '));
      setActive(Math.round(l));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };

    const goTo = (lvl) => {
      if (!section.classList.contains('is-scrolly')) { setActive(lvl); return; }
      const top = track.getBoundingClientRect().top + window.scrollY;
      const span = track.offsetHeight - section.querySelector('.levels__stage').offsetHeight;
      window.scrollTo({ top: top + span * STOPS[lvl], behavior: 'smooth' });
    };
    buttons.forEach((b) => b.addEventListener('click', () => goTo(Number(b.dataset.level))));

    // A click picks the smallest ring that contains the point.
    view.addEventListener('click', (e) => {
      if (!section.classList.contains('is-scrolly')) return;
      const m = svg.getScreenCTM();
      if (!m) return;
      const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
      const hit = geo.findIndex((g) => Math.hypot(pt.x - g.x, pt.y - g.y) <= g.r);
      goTo(hit === -1 ? 2 : hit);
    });

    const apply = () => {
      const on = !reduceMotion.matches;
      section.classList.toggle('is-scrolly', on);
      if (on) {
        window.addEventListener('scroll', onScroll, { passive: true });
        update();
      } else {
        window.removeEventListener('scroll', onScroll);
        svg.setAttribute('viewBox', '0 10 200 200');
        rings.forEach((r) => r.classList.remove('is-active'));
        items.forEach((li) => li.classList.remove('is-active'));
        current = -1;
      }
    };
    window.addEventListener('resize', onScroll);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', apply);
    apply();
  }

  initNav();
  initAccordion();
  initPublications();
  initToc();
  initTerms();
  initBudget();
  initCopy();
  initLevels();
})();
