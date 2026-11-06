/* Multiservice · interazioni del sito (nessuna dipendenza esterna). */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cfg = window.MS_CONFIG || readConfig();

  function readConfig() {
    var el = document.getElementById("ms-config");
    try { return el ? JSON.parse(el.textContent) : {}; } catch (e) { return {}; }
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- Header: sfondo allo scroll, si nasconde scendendo ---------- */
  var header = $(".header");
  var actionBar = $(".action-bar");
  var waFloat = $(".wa-float");
  var lastY = window.scrollY;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 30);
      var menuOpen = doc.classList.contains("menu-open");
      if (!menuOpen && y > 420 && y > lastY + 4) header.classList.add("is-hidden");
      else if (y < lastY - 4 || y < 420) header.classList.remove("is-hidden");
    }
    var show = y > 360;
    if (actionBar) actionBar.classList.toggle("is-visible", show);
    if (waFloat) waFloat.classList.toggle("is-visible", show);
    lastY = y;
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------- Dropdown servizi (tastiera e touch) ---------- */
  $$(".nav__item--drop").forEach(function (item) {
    var btn = $(".nav__link", item);
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      if (btn.tagName === "BUTTON") {
        e.preventDefault();
        var open = !item.classList.contains("is-open");
        item.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
      }
    });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { item.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!item.contains(e.target)) { item.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
    });
  });

  /* ---------- Menu mobile ---------- */
  var menu = $("#mobile-menu");
  var burger = $(".burger");
  var lastFocus = null;
  function setMenu(open) {
    if (!menu || !burger) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    if (open) menu.removeAttribute("inert"); else menu.setAttribute("inert", "");
    burger.setAttribute("aria-expanded", String(open));
    doc.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) { lastFocus = document.activeElement; var f = $(".mobile-menu__close", menu); if (f) f.focus(); }
    else if (lastFocus) { lastFocus.focus(); }
  }
  if (burger && menu) {
    burger.addEventListener("click", function () { setMenu(true); });
    $$("[data-menu-close]", menu).forEach(function (b) { b.addEventListener("click", function () { setMenu(false); }); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("is-open")) setMenu(false); });
  }

  /* ---------- Hero: animazione d'ingresso ---------- */
  var hero = $(".hero");
  if (hero) {
    var heroImg = $(".hero__media img", hero);
    var ready = function () { hero.classList.add("is-ready"); };
    if (heroImg && !heroImg.complete) { heroImg.addEventListener("load", ready); setTimeout(ready, 900); }
    else { requestAnimationFrame(function () { requestAnimationFrame(ready); }); }
  }

  /* ---------- Comparsa allo scroll + contatori ---------- */
  $$("[data-d]").forEach(function (el) {
    var d = parseFloat(el.getAttribute("data-d")) || 0;
    el.style.setProperty("--d", (d * 0.09).toFixed(2) + "s");
  });
  var revealEls = $$("[data-reveal], .img-reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  var counters = $$("[data-count]");
  function animateCount(el) {
    var end = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(end) || reduceMotion) { el.textContent = el.getAttribute("data-count"); return; }
    var start = el.hasAttribute("data-count-from") ? parseInt(el.getAttribute("data-count-from"), 10) : 0;
    var dur = 1600, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = String(Math.round(start + (end - start) * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- Filtri lavori ---------- */
  var filterBtns = $$("[data-filter]");
  if (filterBtns.length) {
    var cards = $$("[data-cat]");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        cards.forEach(function (c) {
          var show = f === "tutti" || c.getAttribute("data-cat") === f;
          c.classList.toggle("is-filtered-out", !show);
          if (show && !reduceMotion) { c.classList.remove("fade-in"); void c.offsetWidth; c.classList.add("fade-in"); }
        });
      });
    });
  }

  /* ---------- Lightbox gallerie ---------- */
  var lb = $("#lightbox");
  if (lb && typeof lb.showModal === "function") {
    var lbImg = $(".lightbox__stage img", lb);
    var lbCap = $(".lightbox__caption", lb);
    var lbCount = $(".lightbox__count", lb);
    var group = [], idx = 0;

    function show(i) {
      idx = (i + group.length) % group.length;
      var a = group[idx];
      lbImg.src = a.getAttribute("href");
      lbImg.alt = a.getAttribute("data-caption") || "";
      lbCap.textContent = a.getAttribute("data-caption") || "";
      lbCount.textContent = (idx + 1) + " / " + group.length;
      var multi = group.length > 1;
      $(".lightbox__prev", lb).hidden = !multi;
      $(".lightbox__next", lb).hidden = !multi;
      // precarica la successiva
      if (multi) { var n = new Image(); n.src = group[(idx + 1) % group.length].getAttribute("href"); }
    }
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("[data-lightbox]") : null;
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      var name = a.getAttribute("data-lightbox");
      group = $$('[data-lightbox="' + name + '"]');
      lb.showModal();
      show(group.indexOf(a));
    });
    $(".lightbox__prev", lb).addEventListener("click", function () { show(idx - 1); });
    $(".lightbox__next", lb).addEventListener("click", function () { show(idx + 1); });
    $(".lightbox__close", lb).addEventListener("click", function () { lb.close(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lightbox__stage")) lb.close(); });
    lb.addEventListener("close", function () { lbImg.removeAttribute("src"); });
    var sx = null;
    lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
      sx = null;
    });
  }

  /* ---------- Mappa: caricata solo dopo il consenso del visitatore ---------- */
  $$("[data-map-load]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var box = btn.closest(".map");
      if (!box) return;
      var iframe = document.createElement("iframe");
      iframe.src = box.getAttribute("data-map-src");
      iframe.title = "Mappa: sede di Multiservice ad Agrate Brianza";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.setAttribute("allowfullscreen", "");
      box.innerHTML = "";
      box.appendChild(iframe);
    });
  });

  /* ---------- Modulo richiesta preventivo ---------- */
  $$("form[data-contact-form]").forEach(function (form) {
    var started = Date.now();
    var tField = form.querySelector('input[name="t"]');
    if (tField) tField.value = String(started);
    var status = $(".form__status", form);
    var submit = $('button[type="submit"]', form);

    function fieldWrap(input) { return input.closest(".field, .check"); }
    function setError(input, msg) {
      var wrap = fieldWrap(input);
      if (!wrap) return;
      wrap.classList.toggle("has-error", !!msg);
      var err = $(".field__error", wrap);
      if (msg) {
        if (!err) { err = document.createElement("span"); err.className = "field__error"; err.id = input.id + "-err"; wrap.appendChild(err); }
        err.textContent = msg;
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", err.id);
      } else {
        if (err) err.remove();
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
      }
    }
    function validate() {
      var ok = true, first = null;
      var nome = form.elements.nome, tel = form.elements.telefono, email = form.elements.email,
          msg = form.elements.messaggio, privacy = form.elements.privacy;
      function check(cond, input, text) {
        setError(input, cond ? "" : text);
        if (!cond) { ok = false; if (!first) first = input; }
      }
      check(nome.value.trim().length >= 2, nome, "Inserisci nome e cognome.");
      var telDigits = tel.value.replace(/[^\d]/g, "");
      check(telDigits.length >= 6 && telDigits.length <= 15, tel, "Inserisci un numero di telefono valido.");
      check(!email.value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()), email, "L'indirizzo email non sembra corretto.");
      check(msg.value.trim().length >= 10, msg, "Descrivi brevemente l'intervento (almeno 10 caratteri).");
      check(privacy.checked, privacy, "Per inviare la richiesta conferma di aver letto l'informativa.");
      if (first) first.focus();
      return ok;
    }
    $$("input, textarea, select", form).forEach(function (el) {
      el.addEventListener("input", function () { if (fieldWrap(el) && fieldWrap(el).classList.contains("has-error")) setError(el, ""); });
    });

    function summaryText() {
      var f = form.elements;
      var lines = [
        "Richiesta dal sito multiservice-srls.it",
        "Nome: " + f.nome.value.trim(),
        "Telefono: " + f.telefono.value.trim()
      ];
      if (f.email.value.trim()) lines.push("Email: " + f.email.value.trim());
      if (f.comune && f.comune.value.trim()) lines.push("Comune: " + f.comune.value.trim());
      if (f.servizio && f.servizio.value) lines.push("Intervento: " + f.servizio.value);
      lines.push("", f.messaggio.value.trim());
      return lines.join("\n");
    }
    function showFallback(intro) {
      var text = summaryText();
      var wa = "https://wa.me/" + (cfg.whatsapp || "") + "?text=" + encodeURIComponent(text);
      var mail = "mailto:" + (cfg.email || "") + "?subject=" + encodeURIComponent("Richiesta preventivo dal sito") + "&body=" + encodeURIComponent(text);
      status.hidden = false;
      status.className = "form__status form__status--err";
      status.innerHTML = "";
      var p = document.createElement("p");
      p.textContent = intro + " Puoi inviarci la stessa richiesta con un clic:";
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML =
        '<a class="btn btn--whatsapp btn--sm" target="_blank" rel="noopener noreferrer">Invia su WhatsApp</a>' +
        '<a class="btn btn--dark btn--sm">Invia per email</a>' +
        '<a class="btn btn--ghost btn--sm">Chiama ' + (cfg.telefono || "") + "</a>";
      var links = row.querySelectorAll("a");
      links[0].href = wa; links[1].href = mail; links[2].href = "tel:" + (cfg.telefono_href || "");
      status.appendChild(p); status.appendChild(row);
      status.focus();
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = typeof v === "string" ? v : ""; });
      data.privacy = form.elements.privacy.checked;
      data.pagina = location.pathname;
      submit.classList.add("is-loading");
      submit.disabled = true;
      status.hidden = true;

      fetch(form.getAttribute("action"), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
        credentials: "same-origin"
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, body: j }; });
      }).then(function (res) {
        if (res.status === 200 && res.body && res.body.ok) {
          status.hidden = false;
          status.className = "form__status form__status--ok";
          status.textContent = "Grazie! Abbiamo ricevuto la tua richiesta: ti ricontatteremo al più presto, negli orari di apertura.";
          form.reset();
          if (tField) tField.value = String(Date.now());
          status.focus();
        } else if (res.status === 400 && res.body && res.body.campi) {
          Object.keys(res.body.campi).forEach(function (k) { if (form.elements[k]) setError(form.elements[k], res.body.campi[k]); });
        } else if (res.status === 429) {
          showFallback("Hai già inviato diverse richieste in poco tempo.");
        } else {
          showFallback("In questo momento il modulo non è disponibile.");
        }
      }).catch(function () {
        showFallback("Non è stato possibile inviare il modulo (connessione assente?).");
      }).then(function () {
        submit.classList.remove("is-loading");
        submit.disabled = false;
      });
    });
  });

  /* ---------- Anno corrente ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
