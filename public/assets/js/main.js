/* Multiservice · interazioni del sito (nessuna dipendenza esterna). */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Su iPhone/iPad lo stato :active (pressione al tocco) si attiva solo se esiste un listener touchstart
  document.addEventListener("touchstart", function () {}, { passive: true });
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
    heroProgetto(hero);
    heroSlides(hero);
  }

  /* ---------- Hero: dal progetto alla consegna ----------
     All'apertura la prima foto compare come tavola di progetto: il disegno si traccia dal basso,
     poi una linea laser lo scorre e rivela il lavoro finito (le fasi sono in style.css).
     La tavola si scarica solo qui; se non arriva in tempo si vede subito la foto. */
  function heroProgetto(hero) {
    var tav = $(".hero__progetto-img", hero);
    var saveData = navigator.connection && navigator.connection.saveData;
    if (!tav || reduceMotion || saveData) return;
    var foto = $(".hero__slide img", hero);
    var stato = 0; // 0 in attesa delle immagini, 1 animazione in corso, 2 finita
    var pronta = function (im) { return im.complete && im.naturalWidth > 0; };
    function parti() {
      if (stato !== 0 || !pronta(foto) || !pronta(tav)) return;
      stato = 1;
      hero.classList.add("is-progetto");
      setTimeout(function () {
        stato = 2;
        hero.classList.add("is-progetto-fatto");
        hero.classList.remove("is-intro");
      }, 3300);
    }
    function salta() {
      if (stato !== 0) return;
      stato = 2;
      // la tavola ancora in arrivo non serve più: si interrompe, così non ritarda il resto della pagina
      if (!pronta(tav)) { tav.removeAttribute("srcset"); tav.removeAttribute("src"); }
      hero.classList.add("is-progetto-via");
      hero.classList.remove("is-intro");
      setTimeout(function () { hero.classList.add("is-progetto-fatto"); }, 500);
    }
    hero.classList.add("is-progetto-attesa", "is-intro");
    tav.setAttribute("srcset", tav.getAttribute("data-srcset"));
    tav.setAttribute("src", tav.getAttribute("data-src"));
    // rete lenta: la carta blu non tiene nascosta la foto. Arrivata la foto, la tavola ha un secondo
    // per arrivare anche lei; in tutto si aspetta al massimo due secondi e mezzo, poi la foto e basta
    foto.addEventListener("load", function () { parti(); setTimeout(salta, 1000); });
    tav.addEventListener("load", parti);
    tav.addEventListener("error", salta);
    if (pronta(foto)) setTimeout(salta, 1000);
    parti();
    setTimeout(salta, 2500);
    // chi tocca una barretta vuole scorrere le foto: la sua parte subito
    $$(".hero__dot", hero).forEach(function (d) {
      d.addEventListener("click", function () { salta(); hero.classList.remove("is-intro"); });
    });
  }

  /* ---------- Hero: foto dei lavori in dissolvenza ----------
     La barretta attiva si riempie con un'animazione CSS: quando finisce si passa alla foto dopo.
     Pausa automatica se la hero non si vede o la scheda è in secondo piano, e con il pulsante.
     Con "Riduci movimento" o "Risparmio dati" niente scorrimento: le foto si cambiano a mano. */
  function heroSlides(hero) {
    var slides = $$(".hero__slide", hero);
    var dots = $$(".hero__dot", hero);
    var caption = $(".hero__caption", hero);
    var pauseBtn = $(".hero__pause", hero);
    if (slides.length < 2 || !caption) return;
    var saveData = navigator.connection && navigator.connection.saveData;
    var manual = reduceMotion || saveData;
    var cur = 0, busy = false, userPaused = false, hiddenPage = false, offscreen = false;
    if (manual) hero.classList.add("is-manual");

    function load(i) {
      var im = $("img", slides[i]);
      if (im && im.getAttribute("data-srcset") && !im.getAttribute("srcset")) {
        im.setAttribute("srcset", im.getAttribute("data-srcset"));
        im.setAttribute("src", im.getAttribute("data-src"));
      }
      return im;
    }
    function paintDots() {
      dots.forEach(function (d, k) {
        d.classList.remove("is-active");
        d.classList.toggle("is-done", k < cur);
        d.setAttribute("aria-current", k === cur ? "true" : "false");
      });
      void hero.offsetWidth; // riparte l'animazione della barretta
      if (dots[cur]) dots[cur].classList.add("is-active");
    }
    function setCaption() {
      var s = slides[cur];
      caption.classList.add("is-changing");
      setTimeout(function () {
        caption.setAttribute("href", s.getAttribute("data-href"));
        $("[data-titolo]", caption).textContent = s.getAttribute("data-titolo");
        $("[data-luogo]", caption).textContent = s.getAttribute("data-luogo");
        caption.classList.remove("is-changing");
      }, 400);
    }
    function show(i) {
      if (i === cur || busy) return;
      busy = true;
      var prev = slides[cur], next = slides[i], im = load(i), done = false;
      var go = function () {
        if (done) return;
        done = true;
        prev.classList.remove("is-active");
        prev.classList.add("is-leaving");
        prev.setAttribute("aria-hidden", "true");
        next.removeAttribute("aria-hidden");
        next.classList.add("is-active");
        setTimeout(function () { prev.classList.remove("is-leaving"); }, 1800);
        cur = i;
        busy = false;
        paintDots();
        setCaption();
        load((i + 1) % slides.length); // prepara la foto successiva
      };
      if (im && !(im.complete && im.naturalWidth)) {
        im.addEventListener("load", go, { once: true });
        im.addEventListener("error", go, { once: true });
        setTimeout(go, 5000);
      } else { go(); }
    }
    function setPaused() {
      hero.classList.toggle("is-paused", userPaused || hiddenPage || offscreen);
    }

    dots.forEach(function (d, k) { d.addEventListener("click", function () { show(k); }); });
    hero.addEventListener("animationend", function (e) {
      if (e.animationName === "hero-progress" && !manual) show((cur + 1) % slides.length);
    });
    if (pauseBtn) pauseBtn.addEventListener("click", function () {
      userPaused = !userPaused;
      pauseBtn.setAttribute("aria-pressed", String(userPaused));
      pauseBtn.setAttribute("aria-label", userPaused ? "Riprendi lo scorrimento delle foto" : "Ferma lo scorrimento delle foto");
      setPaused();
    });
    document.addEventListener("visibilitychange", function () { hiddenPage = document.hidden; setPaused(); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { offscreen = !en[0].isIntersecting; setPaused(); }).observe(hero);
    }
    // la seconda foto si scarica solo dopo che la pagina ha finito di caricarsi
    var preload = function () { load(1); };
    if (document.readyState === "complete") preload(); else window.addEventListener("load", preload);
    paintDots();
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

  /* ---------- Striscia dei servizi: il muro si costruisce ----------
     Scorrendo, i mattoni si posano uno alla volta: prima la fila in basso, da sinistra a destra, poi
     quelle sopra. Un canvas copre la striscia con il colore della malta; ogni mattone scende, si assesta
     e al suo posto si scopre quello vero della striscia. La posizione dei mattoni è quella della tessera
     --mattoni di style.css (96x26 ingrandita a 144x39, centrata): a muro finito il canvas si toglie e
     la striscia resta identica. Se la striscia è tutta in vista e non si scorre, il muro si finisce da solo. */
  (function () {
    var band = $(".marquee");
    if (!band || reduceMotion) return;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext && canvas.getContext("2d");
    if (!ctx) return;
    canvas.className = "marquee__muro";
    canvas.setAttribute("aria-hidden", "true");
    band.insertBefore(canvas, band.firstChild);
    band.classList.add("is-muro");

    var TESSERA = 144, ALTEZZA = 39, FILA = 19.5, PASSO = 48; // mattone 45x16,5 + giunto
    var MALTA = "#d9cec1", ACCENTO = [173, 71, 43];             // --accent
    // velatura di ogni mattone nella tessera: [bianco/nero, opacità], file pari e dispari
    var TONI = [[[0, .05], [255, .07], [0, .09]], [[0, .02], [0, .07], [255, .04]]];
    var mattoni = [], W = 0, H = 0, dpr = 1, p = 0, disegnato = -1, attesa = 0, daSolo = false, finito = false, inCoda = false;

    function colore(t) { // come appare il mattone: accento + velatura della tessera, al 70%
      return "rgb(" + ACCENTO.map(function (c) { return Math.round(c + (t[0] - c) * t[1] * 0.7); }).join(",") + ")";
    }
    function seme(i) { var x = Math.sin(i * 12.9898) * 43758.5453; return x - Math.floor(x); }
    function prepara() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = band.clientWidth; H = band.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      var ox = (W - TESSERA) / 2, oy = (H - ALTEZZA) / 2; // background-position: center
      var r0 = Math.floor(-oy / FILA), r1 = Math.ceil((H - oy) / FILA) - 1, n = 0;
      mattoni = [];
      for (var r = r0; r <= r1; r++) {
        var dispari = ((r % 2) + 2) % 2, off = dispari ? PASSO / 2 : 0, y = oy + r * FILA;
        var m0 = Math.floor((-ox - off) / PASSO), m1 = Math.ceil((W - ox - off) / PASSO) - 1;
        for (var m = m0; m <= m1; m++) {
          var x = ox + off + m * PASSO;
          mattoni.push({
            x: x, y: y, colore: colore(TONI[dispari][((m % 3) + 3) % 3]),
            // ordine di posa: fila per fila dal basso, da sinistra a destra, con un po' di irregolarità
            inizio: Math.min(0.82, ((r1 - r) + (x / W) * 0.9 + seme(n++) * 0.15) / (r1 - r0 + 1.2) * 0.82)
          });
        }
      }
      disegnato = -1;
      disegna();
    }
    function px(v) { return Math.round(v * dpr); }
    function rientro(t) { var c1 = 1.5, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
    function disegna() {
      if (finito || (p < 1 && Math.abs(p - disegnato) < 0.002)) return;
      disegnato = p;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = MALTA;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      var inVolo = [];
      mattoni.forEach(function (m) {
        var q = (p - m.inizio) / 0.16;
        // posato: si scopre la striscia vera (bordi arrotondati al pixel, niente fessure tra mattoni vicini)
        if (q >= 1) ctx.clearRect(px(m.x), px(m.y), px(m.x + PASSO) - px(m.x), px(m.y + FILA) - px(m.y));
        else if (q > 0) inVolo.push([m, q]);
      });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      inVolo.forEach(function (v) {
        var m = v[0], q = v[1], y = m.y + 1.5 + (1 - rientro(q)) * -34;
        ctx.globalAlpha = Math.min(1, q * 2.5);
        ctx.fillStyle = m.colore;
        ctx.fillRect(m.x + 1.5, y, 45, 16.5);
        ctx.fillStyle = "rgba(255,255,255,.07)";
        ctx.fillRect(m.x + 1.5, y + 0.2, 45, 1.5);
      });
      ctx.globalAlpha = 1;
      band.style.setProperty("--muro", p.toFixed(3));
      if (p >= 1) chiudi();
    }
    function chiudi() { // muro finito: resta solo la striscia
      finito = true;
      clearTimeout(attesa);
      window.removeEventListener("scroll", alloScroll);
      if (osservatore) osservatore.disconnect();
      canvas.remove();
      band.classList.remove("is-muro");
      band.style.removeProperty("--muro");
    }
    function porta(nuovo) { if (nuovo > p) { p = Math.min(1, nuovo); disegna(); } } // il muro, una volta su, resta su
    function avanzamento() {
      if (finito) return;
      var r = band.getBoundingClientRect(), vh = window.innerHeight;
      porta((vh - r.top) / (vh * 0.5));
      clearTimeout(attesa);
      if (!finito && !daSolo && r.top >= 0 && r.bottom <= vh && r.top < vh * 0.75) attesa = setTimeout(finisci, 400);
    }
    function finisci() {
      daSolo = true;
      var t0 = performance.now(), p0 = p;
      (function passo() {
        if (finito) return;
        porta(p0 + (performance.now() - t0) / 1600);
        requestAnimationFrame(passo);
      })();
    }
    function alloScroll() {
      if (inCoda) return;
      inCoda = true;
      requestAnimationFrame(function () { inCoda = false; avanzamento(); });
    }
    window.addEventListener("scroll", alloScroll, { passive: true });
    var osservatore = "ResizeObserver" in window
      ? new ResizeObserver(function () { if (!finito && (band.clientWidth !== W || band.clientHeight !== H)) { prepara(); avanzamento(); } })
      : null;
    if (osservatore) osservatore.observe(band);
    else window.addEventListener("resize", function () { if (!finito) { prepara(); avanzamento(); } });
    prepara();
    avanzamento();
  })();
})();
