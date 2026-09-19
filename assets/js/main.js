(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initNavScroll();
  initNavLinks();
  if (!reduceMotion) initDotGrid();

  function initNavLinks() {
    var links = document.querySelectorAll(".nav-link[data-target]");
    var navOffset = 100;
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var target = document.getElementById(link.getAttribute("data-target"));
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  }

  function initNavScroll() {
    var navBar = document.getElementById("navBar");
    var navLogo = document.getElementById("navLogoSvg");
    var navTitle = document.getElementById("navTitle");
    var navTagline = document.getElementById("navTagline");
    var navLinks = document.getElementById("navLinks");
    if (!navBar) return;

    var ticking = false;

    var update = function () {
      var t = Math.min(window.scrollY / 100, 1);

      var logoSize = 56 - t * 26;
      if (navLogo) {
        navLogo.setAttribute("width", logoSize);
        navLogo.setAttribute("height", logoSize);
      }

      navBar.style.marginTop = (20 - t * 12) + "px";
      navBar.style.borderRadius = (16 - t * 6) + "px";
      var pad = 20 - t * 10;
      navBar.style.paddingTop = pad + "px";
      navBar.style.paddingBottom = pad + "px";

      if (navTitle && navTagline) {
        var titleSize = 20 - t * 5;
        navTitle.style.fontSize = titleSize + "px";
        navTagline.style.fontSize = (titleSize * 15 / 24) + "px";
      }

      if (navLinks) {
        var linkSize = 15 - t * 2;
        var linkGap = 28 - t * 6;
        navLinks.style.gap = linkGap + "px";
        for (var i = 0; i < navLinks.children.length; i++) {
          navLinks.children[i].style.fontSize = linkSize + "px";
        }
      }

      var bgAlpha = 0.55 + t * 0.35;
      navBar.style.background = "oklch(0.97 0.003 260 / " + bgAlpha + ")";
      var borderAlpha = 0.5 + t * 0.4;
      navBar.style.borderColor = "oklch(0.92 0.005 260 / " + borderAlpha + ")";

      ticking = false;
    };

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );

    update();
  }

  function initDotGrid() {
    var canvas = document.getElementById("dot-grid");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");

    var spacing = 30;
    var dotRadius = 1.2;
    var influenceRadius = 130;
    var pullStrength = 0.35;
    var returnSpeed = 0.08;

    var dots = [];
    var mouse = { x: -1000, y: -1000 };
    var animId;
    var gridBands = [];
    var frame = 0;

    function computeGridBands() {
      gridBands = [];
      document.querySelectorAll("[data-grid-section]").forEach(function (el) {
        var r = el.getBoundingClientRect();
        gridBands.push({ top: r.top, bottom: r.bottom });
      });
    }

    function isInGridBand(vy) {
      for (var i = 0; i < gridBands.length; i++) {
        if (vy >= gridBands[i].top && vy <= gridBands[i].bottom) return true;
      }
      return false;
    }

    // Dots near text/cards dim; dots in open space stay brighter.
    function computeProximity() {
      var els = document.querySelectorAll(
        "h1, h2, h3, p, nav, .person-card, .research-cards"
      );
      var rects = [];
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        rects.push({ x: r.left, y: r.top, w: r.width, h: r.height });
      });
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        var minDist = 9999;
        for (var j = 0; j < rects.length; j++) {
          var r = rects[j];
          var cx = Math.max(r.x, Math.min(d.ox, r.x + r.w));
          var cy = Math.max(r.y, Math.min(d.oy, r.y + r.h));
          var dist = Math.sqrt((d.ox - cx) * (d.ox - cx) + (d.oy - cy) * (d.oy - cy));
          if (dist < minDist) minDist = dist;
        }
        if (minDist < 30) {
          d.prox = 0.04;
        } else if (minDist < 200) {
          d.prox = 0.04 + ((minDist - 30) / 170) * 0.22;
        } else {
          d.prox = 0.26;
        }
      }
    }

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      var w = window.innerWidth;
      var h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      var cols = Math.ceil(w / spacing) + 1;
      var rows = Math.ceil(h / spacing) + 1;
      var ox = (w - (cols - 1) * spacing) / 2;
      var oy = (h - (rows - 1) * spacing) / 2;
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var x = ox + c * spacing;
          var y = oy + r * spacing;
          dots.push({ ox: x, oy: y, x: x, y: y, prox: 0.15 });
        }
      }
    }

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function draw() {
      frame++;
      if (frame % 20 === 0) {
        computeGridBands();
        computeProximity();
      }
      var w = parseFloat(canvas.style.width);
      var h = parseFloat(canvas.style.height);
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        if (!isInGridBand(d.oy)) {
          d.x += (d.ox - d.x) * returnSpeed;
          d.y += (d.oy - d.y) * returnSpeed;
          continue;
        }
        var dx = mouse.x - d.ox;
        var dy = mouse.y - d.oy;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < influenceRadius) {
          var force = (1 - dist / influenceRadius) * pullStrength;
          d.x += (d.ox + dx * force - d.x) * 0.15;
          d.y += (d.oy + dy * force - d.y) * 0.15;
        } else {
          d.x += (d.ox - d.x) * returnSpeed;
          d.y += (d.oy - d.y) * returnSpeed;
        }
        var displacement = Math.sqrt((d.x - d.ox) * (d.x - d.ox) + (d.y - d.oy) * (d.y - d.oy));
        var alpha = d.prox + Math.min(displacement / 15, 0.4);
        ctx.beginPath();
        ctx.arc(d.x, d.y, dotRadius + displacement * 0.04, 0, Math.PI * 2);
        ctx.fillStyle = "oklch(0.48 0.19 260 / " + alpha + ")";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", function () {
      resize();
      computeGridBands();
      computeProximity();
    });
    window.addEventListener(
      "scroll",
      function () {
        if (frame % 8 === 0) {
          computeGridBands();
          computeProximity();
        }
      },
      { passive: true }
    );

    resize();
    computeGridBands();
    computeProximity();
    draw();
  }
})();
