/* =============================================================
   main.js — Juan Diego González · Portafolio
   Vanilla JS, sin módulos ES (funciona en file:// y hosting FTP).
   El contenido vive en el HTML; este archivo solo lo enriquece:
   si JS falla, el sitio sigue siendo legible y navegable.
   ============================================================= */
(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  function $(sel, scope) { return (scope || document).querySelector(sel); }
  function $$(sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); }
  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }

  /* -----------------------------------------------------------
     Cursor personalizado (solo puntero fino; oculto hasta 1er move)
     ----------------------------------------------------------- */
  function initCursor() {
    if (!fineHover) return;
    var cursor = $(".cursor");
    var dot = $(".cursor-dot");
    var ring = $(".cursor-ring");
    if (!cursor || !dot || !ring) return;

    var mx = 0, my = 0, rx = 0, ry = 0, firstMove = false, raf = null;

    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (!firstMove) {
        firstMove = true;
        rx = mx; ry = my;
        cursor.classList.add("is-ready");
        loop();
      }
    });

    function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = "translate3d(" + (mx - 3) + "px," + (my - 3) + "px,0)";
      ring.style.transform = "translate3d(" + (rx - 17) + "px," + (ry - 17) + "px,0)";
      raf = requestAnimationFrame(loop);
    }

    // Crece sobre elementos interactivos (mouseover: compatible y burbujeante)
    var HOVERABLES = "a, button, [data-magnetic], .style-tab, .work-card";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest(HOVERABLES)) cursor.classList.add("is-hover");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest(HOVERABLES)) cursor.classList.remove("is-hover");
    });
  }

  /* -----------------------------------------------------------
     Nav: fondo al hacer scroll + barra de progreso
     ----------------------------------------------------------- */
  function initNavProgress() {
    var nav = $("[data-nav]");
    var bar = $("[data-progress]");
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY || 0;
      if (nav) nav.classList.toggle("is-scrolled", y > 40);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* -----------------------------------------------------------
     Reveals on scroll (IntersectionObserver + red de seguridad)
     ----------------------------------------------------------- */
  function initReveals() {
    var targets = $$("[data-reveal], [data-split]");
    if (!targets.length) return;

    function reveal(el) { el.classList.add("is-visible"); }

    // Red de seguridad universal: revela lo que entra en viewport.
    // Funciona aunque el IntersectionObserver no dispare (algunos entornos
    // no lo actualizan con scroll programático); en un navegador real es
    // redundante con el observer y no molesta.
    function checkInView() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = targets.length - 1; i >= 0; i--) {
        var el = targets[i];
        if (el.classList.contains("is-visible")) continue;
        if (el.getBoundingClientRect().top < vh * 0.9) reveal(el);
      }
    }

    // Observer primario (mejor timing de entrada por elemento)
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { reveal(entry.target); io.unobserve(entry.target); }
        });
      }, { threshold: 0.01, rootMargin: "0px 0px -4% 0px" });
      targets.forEach(function (el) { io.observe(el); });
    } else {
      targets.forEach(reveal);
      return;
    }

    // Fallback por scroll/resize (throttled con rAF)
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { checkInView(); ticking = false; });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    checkInView(); // revela lo ya visible al cargar
  }

  /* -----------------------------------------------------------
     Split por líneas en titulares [data-split]
     (agrupa palabras por línea y las revela con máscara)
     ----------------------------------------------------------- */
  function initSplitLines() {
    $$("[data-split]").forEach(function (el) {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = "1";
      el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));

      var words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map(function (w) {
        return '<span class="sw" aria-hidden="true">' + w + "</span>";
      }).join(" ");

      // Agrupar por posición vertical → líneas
      var lines = [], lastTop = null;
      $$(".sw", el).forEach(function (sw) {
        var top = sw.offsetTop;
        if (top !== lastTop) { lines.push([]); lastTop = top; }
        lines[lines.length - 1].push(sw.textContent);
      });

      el.innerHTML = lines.map(function (line) {
        return '<span class="line-mask" aria-hidden="true"><span class="split-line">' +
               line.join(" ") + "</span></span> ";
      }).join("");
    });
  }

  /* -----------------------------------------------------------
     Hero: palabra que muta entre estilos tipográficos
     ----------------------------------------------------------- */
  function initMorph() {
    var el = $("[data-morph]");
    if (!el) return;
    var CHARS = "abcdefghijklmnopqrstuvwxyz—·*";
    var LOOKS = [
      { ff: 'Fraunces, serif',            fs: "italic", fw: "400", tt: "none",      ls: "-0.02em" },
      { ff: '"JetBrains Mono", monospace', fs: "normal", fw: "400", tt: "lowercase", ls: "0em" },
      { ff: '"Space Grotesk", sans-serif', fs: "normal", fw: "700", tt: "uppercase", ls: "0.01em" },
      { ff: 'Fraunces, serif',            fs: "normal", fw: "600", tt: "none",      ls: "-0.01em" },
      { ff: 'Inter, sans-serif',          fs: "normal", fw: "300", tt: "none",      ls: "0.12em" }
    ];
    var text = el.textContent;
    var i = 0, animating = false;

    function applyLook(look) {
      el.style.fontFamily = look.ff;
      el.style.fontStyle = look.fs;
      el.style.fontWeight = look.fw;
      el.style.textTransform = look.tt;
      el.style.letterSpacing = look.ls;
    }

    function scrambleTo(look) {
      if (animating) return;
      animating = true;
      var frame = 0, TOTAL = reduced ? 1 : 16;
      function step() {
        frame++;
        var settled = Math.floor((frame / TOTAL) * text.length);
        var out = "";
        for (var c = 0; c < text.length; c++) {
          if (text[c] === " ") { out += " "; continue; }
          out += c < settled ? text[c] : CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        el.textContent = out;
        if (frame === Math.floor(TOTAL / 2)) applyLook(look);
        if (frame < TOTAL) requestAnimationFrame(step);
        else { el.textContent = text; animating = false; }
      }
      step();
    }

    setInterval(function () {
      i = (i + 1) % LOOKS.length;
      scrambleTo(LOOKS[i]);
    }, 2600);
  }

  /* -----------------------------------------------------------
     ★ Selector de estilos en vivo
     ----------------------------------------------------------- */
  function initStyleSelector() {
    var browser = $("[data-browser]");
    var view = $("[data-browser-view]");
    var url = $("[data-browser-url]");
    var tabs = $$("[data-style-btn]");
    if (!browser || !view || !tabs.length) return;

    var stylesData = {};
    (data.styles || []).forEach(function (s) { stylesData[s.id] = s; });

    var busy = false;

    function setContent(s) {
      var brand = $('[data-demo="brand"]', view);
      var nav = $('[data-demo="nav"]', view);
      var eyebrow = $('[data-demo="eyebrow"]', view);
      var title = $('[data-demo="title"]', view);
      var body = $('[data-demo="body"]', view);
      var cta = $('[data-demo="cta"]', view);
      var tags = $('[data-demo="tags"]', view);
      if (brand) brand.textContent = s.brand;
      if (nav) nav.innerHTML = s.nav.map(function (n) { return "<b>" + n + "</b>"; }).join("");
      if (eyebrow) eyebrow.textContent = s.eyebrow;
      if (title) title.textContent = s.title;
      if (body) body.textContent = s.body;
      if (cta) cta.textContent = s.cta;
      if (tags) tags.innerHTML = s.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      if (url) url.textContent = s.domain;
    }

    function activate(id, btn) {
      var s = stylesData[id];
      if (!s || busy || browser.dataset.style === id) return;
      busy = true;

      tabs.forEach(function (t) {
        var active = t === btn;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });

      // Salida → cambio de tema y contenido → entrada escalonada
      view.classList.add("is-swapping");
      setTimeout(function () {
        browser.dataset.style = id;
        setContent(s);

        var parts = $$(".demo-nav, .demo-hero > *, .demo-cards", view);
        parts.forEach(function (p, idx) {
          p.style.transition = "none";
          p.style.opacity = "0";
          p.style.transform = "translateY(14px)";
          // reflow para reiniciar la transición
          void p.offsetHeight;
          p.style.transition = "opacity .5s cubic-bezier(.16,1,.3,1) " + (idx * 55) + "ms," +
                               "transform .5s cubic-bezier(.16,1,.3,1) " + (idx * 55) + "ms";
        });
        view.classList.remove("is-swapping");
        requestAnimationFrame(function () {
          parts.forEach(function (p) {
            p.style.opacity = "1";
            p.style.transform = "none";
          });
        });
        setTimeout(function () { busy = false; }, 550);
      }, reduced ? 0 : 240);
    }

    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activate(btn.getAttribute("data-style-btn"), btn);
      });
    });

    // Sincroniza textos de las pestañas con manifest.js (por si se editan)
    tabs.forEach(function (btn) {
      var s = stylesData[btn.getAttribute("data-style-btn")];
      if (!s) return;
      var label = $(".style-tab-label", btn);
      var desc = $(".style-tab-desc", btn);
      if (label) label.textContent = s.label;
      if (desc) desc.textContent = s.desc;
    });
  }

  /* -----------------------------------------------------------
     Botones magnéticos (solo puntero fino, fuerza sutil)
     ----------------------------------------------------------- */
  function initMagnetic() {
    if (!fineHover) return;
    $$("[data-magnetic]").forEach(function (el) {
      if (el.dataset.magneticBound) return;
      el.dataset.magneticBound = "1";
      var STRENGTH = 0.22;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * STRENGTH;
        var y = (e.clientY - r.top - r.height / 2) * STRENGTH;
        el.style.transform = "translate(" + x + "px," + y + "px)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      });
    });
  }

  /* -----------------------------------------------------------
     Tilt 3D sutil en tarjetas de trabajos
     ----------------------------------------------------------- */
  function initTilt() {
    if (!fineHover) return;
    $$("[data-tilt]").forEach(function (card) {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "1";
      var MAX = 4; // grados — sutil, no feria
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(900px) rotateX(" + (-py * MAX) + "deg) rotateY(" + (px * MAX) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* -----------------------------------------------------------
     Contacto: mailto con asunto prellenado desde manifest.js
     ----------------------------------------------------------- */
  function initMailLinks() {
    var email = data.email || "Juandiegonjar@gmail.com";
    var subject = data.mailSubject || "Quiero hacer una web personalizada";
    var href = "mailto:" + email + "?subject=" + encodeURIComponent(subject);

    $$("[data-mail-cta]").forEach(function (a) { a.setAttribute("href", href); });
    $$("[data-mail-text]").forEach(function (a) {
      a.setAttribute("href", href);
      if (!a.closest(".footer")) a.textContent = email;
    });
  }

  /* -----------------------------------------------------------
     Año del footer
     ----------------------------------------------------------- */
  function initYear() {
    var el = $("[data-year]");
    if (el) el.textContent = "© " + new Date().getFullYear();
  }

  /* -----------------------------------------------------------
     Modal de aviso legal (<dialog> nativo: Escape + foco atrapado)
     ----------------------------------------------------------- */
  function initLegal() {
    var dialog = document.getElementById("aviso-legal");
    if (!dialog) return;
    function open(e) {
      if (e) e.preventDefault();
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    function close() {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }
    $$("[data-legal-open]").forEach(function (b) { b.addEventListener("click", open); });
    $$("[data-legal-close]").forEach(function (b) { b.addEventListener("click", close); });
    // Cerrar al hacer click en el fondo (fuera de la tarjeta)
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) close();
    });
  }

  /* -----------------------------------------------------------
     Scroll suave en anclas (nativo, compensando la nav fija)
     ----------------------------------------------------------- */
  function initAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
    });
  }

  /* -----------------------------------------------------------
     GSAP (mejora progresiva): parallax de la rejilla del hero
     y entrada del mockup del navegador
     ----------------------------------------------------------- */
  function initGsapExtras() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    if (!reduced) {
      gsap.to(".hero-grid", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 }
      });
      gsap.from("[data-browser]", {
        y: 60, opacity: 0, duration: 1.1, ease: "expo.out",
        scrollTrigger: { trigger: ".styles-stage", start: "top 78%", once: true }
      });
    }
  }

  /* -----------------------------------------------------------
     Boot
     ----------------------------------------------------------- */
  function boot() {
    safe(initSplitLines, "initSplitLines");
    safe(initReveals, "initReveals");
    safe(initCursor, "initCursor");
    safe(initNavProgress, "initNavProgress");
    safe(initMorph, "initMorph");
    safe(initStyleSelector, "initStyleSelector");
    safe(initMagnetic, "initMagnetic");
    safe(initTilt, "initTilt");
    safe(initMailLinks, "initMailLinks");
    safe(initYear, "initYear");
    safe(initLegal, "initLegal");
    safe(initAnchors, "initAnchors");
    safe(initGsapExtras, "initGsapExtras");
    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
