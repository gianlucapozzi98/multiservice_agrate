/* Multiservice · interazioni e movimento del sito.
   Nessuna dipendenza: la scena 3D della home (con Three.js, GSAP e Lenis) è un file a parte,
   /assets/js/3d/hero.js, caricato con import() solo quando serve e solo se il dispositivo lo regge.
   Movimento: una sola curva (cubic-bezier(.2,.7,.1,1)), solo transform e opacity; con
   "riduci movimento" restano dissolvenze semplici e l'hero mostra i fotogrammi fissi. */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.add("js");
  var ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var risparmio = !!(navigator.connection && navigator.connection.saveData);
  var puntatoreFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var parametri = new URLSearchParams(location.search);
  var fotogramma = parametri.has("fotogramma") ? parseFloat(parametri.get("fotogramma")) : null;
  if (!ridotto) doc.classList.add("movimento");
  // Su iPhone/iPad lo stato :active si attiva solo se esiste un listener touchstart
  document.addEventListener("touchstart", function () {}, { passive: true });

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  var cfg = (function () {
    var el = document.getElementById("ms-config");
    try { return el ? JSON.parse(el.textContent) : {}; } catch (e) { return {}; }
  })();

  /* ---------- Un solo ciclo di scroll per tutto il sito ---------- */
  var alloScroll = [];
  var inCoda = false;
  function aggiornaScroll() {
    inCoda = false;
    var y = window.scrollY, vh = window.innerHeight;
    for (var i = 0; i < alloScroll.length; i++) alloScroll[i](y, vh);
  }
  function chiediScroll() { if (!inCoda) { inCoda = true; requestAnimationFrame(aggiornaScroll); } }
  window.addEventListener("scroll", chiediScroll, { passive: true });
  window.addEventListener("resize", chiediScroll);

  /* ---------- Testata: fondo allo scroll, si nasconde scendendo ---------- */
  var testata = $(".testata");
  var ultimoY = window.scrollY;
  alloScroll.push(function (y) {
    if (!testata) return;
    testata.classList.toggle("is-scorsa", y > 12);
    var menuAperto = doc.classList.contains("menu-aperto");
    if (!menuAperto && y > 480 && y > ultimoY + 6) testata.classList.add("is-nascosta");
    else if (y < ultimoY - 6 || y < 480) testata.classList.remove("is-nascosta");
    ultimoY = y;
  });

  /* ---------- Tendina dei servizi ---------- */
  $$(".nav__voce--tendina").forEach(function (voce) {
    var btn = $(".nav__link", voce);
    function imposta(aperta) { voce.classList.toggle("is-aperta", aperta); btn.setAttribute("aria-expanded", String(aperta)); }
    btn.addEventListener("click", function () { imposta(!voce.classList.contains("is-aperta")); });
    voce.addEventListener("keydown", function (e) { if (e.key === "Escape") { imposta(false); btn.focus(); } });
    voce.addEventListener("focusout", function (e) { if (!voce.contains(e.relatedTarget)) imposta(false); });
    document.addEventListener("click", function (e) { if (!voce.contains(e.target)) imposta(false); });
  });

  /* ---------- Menu mobile ---------- */
  var menu = $("#menu-mobile"), burger = $(".burger"), ultimoFuoco = null;
  function setMenu(aperto) {
    if (!menu || !burger) return;
    menu.classList.toggle("is-aperto", aperto);
    menu.setAttribute("aria-hidden", String(!aperto));
    if (aperto) menu.removeAttribute("inert"); else menu.setAttribute("inert", "");
    burger.setAttribute("aria-expanded", String(aperto));
    doc.classList.toggle("menu-aperto", aperto);
    document.body.style.overflow = aperto ? "hidden" : "";
    if (aperto) { ultimoFuoco = document.activeElement; var c = $(".menu-mobile__chiudi", menu); if (c) c.focus(); }
    else if (ultimoFuoco) ultimoFuoco.focus();
  }
  if (burger && menu) {
    burger.addEventListener("click", function () { setMenu(true); });
    $$("[data-menu-close]", menu).forEach(function (b) { b.addEventListener("click", function () { setMenu(false); }); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("is-aperto")) setMenu(false); });
  }

  /* ==========================================================================
     HERO: scena 3D se il dispositivo la regge, altrimenti fotogrammi fissi
     ========================================================================== */
  var hero = $("[data-hero]");
  var fasi = [];
  try { fasi = JSON.parse(($("#hero-fasi") || {}).textContent || "[]"); } catch (e) { fasi = []; }

  function puo3d() {
    if (fotogramma !== null) return true;
    if (ridotto || risparmio || parametri.has("statico")) return false;
    if (navigator.deviceMemory && navigator.deviceMemory < 4) return false;
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return false;
    if (window.innerWidth < 360) return false;
    try { if (!document.createElement("canvas").getContext("webgl2")) return false; } catch (e) { return false; }
    return true;
  }

  if (hero) {
    if (fotogramma !== null) doc.setAttribute("data-fotogramma", "attesa");
    if (puo3d()) {
      hero.classList.add("hero--3d");
      hero.dataset.stato = "intro";
      var carica = function () {
        import(hero.getAttribute("data-hero-js")).then(function (m) {
          var ctrl = m.avvia(hero, fotogramma !== null ? { fotogramma: clamp(fotogramma, 0, 1) } : {});
          if (!ctrl) heroStatico();
        }).catch(function () { heroStatico(); });
      };
      // dopo il primo disegno: il primo fotogramma e la sagoma arrivano prima del 3D.
      // Su schermi touch la scena si carica al primo gesto (il primo fotogramma è identico alla
      // scena ferma): il telefono non lavora finché non si comincia a scorrere.
      var touch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 760;
      var avviato = false;
      var unaVolta = function () {
        if (avviato) return;
        avviato = true;
        ["scroll", "pointerdown", "touchstart", "keydown", "wheel"].forEach(function (ev) { window.removeEventListener(ev, unaVolta); });
        carica();
      };
      if (fotogramma !== null) carica();
      else if (touch) ["scroll", "pointerdown", "touchstart", "keydown", "wheel"].forEach(function (ev) { window.addEventListener(ev, unaVolta, { passive: true }); });
      else if (document.readyState === "complete") setTimeout(carica, 60);
      else window.addEventListener("load", function () { setTimeout(carica, 60); });
    } else {
      heroStatico();
    }
  }

  function heroStatico() {
    hero.classList.remove("hero--3d", "is-3d-pronto");
    hero.classList.add("hero--statico");
    hero.dataset.stato = "intro";
    var tela = $(".hero__canvas", hero);
    if (tela) tela.innerHTML = "";
    var quadri = $$(".hero__fotogramma", hero);
    var comandi = $(".hero__comandi", hero);
    var didascalia = $(".hero__scorri", hero);
    var voci = $$("[data-servizio]", hero);
    if (!quadri.length) return;
    if (comandi) comandi.hidden = false;
    var n = quadri.length + 1; // 0 = primo fotogramma (sempre sotto)
    var i = 0, timer = null, inPausa = ridotto, visibile = true;
    var btnPausa = $("[data-hero-pausa]", hero);

    function caricaQuadro(q) {
      if (!q || q.dataset.caricato) return;
      q.dataset.caricato = "1";
      $$("[data-srcset]", q).forEach(function (s) { s.setAttribute("srcset", s.getAttribute("data-srcset")); });
      $$("img[data-src]", q).forEach(function (im) { im.src = im.getAttribute("data-src"); });
    }
    function mostra(k) {
      i = (k + n) % n;
      quadri.forEach(function (q, j) { q.classList.toggle("is-attivo", j === i - 1); });
      caricaQuadro(quadri[i - 1]);
      caricaQuadro(quadri[i % quadri.length]); // il successivo
      var q = quadri[i - 1];
      var f = fasi[q ? parseInt(q.getAttribute("data-fase"), 10) : 0] || {};
      if (didascalia) didascalia.textContent = (q && q.getAttribute("data-didascalia")) || (f.nome ? f.nome + (f.testo ? ": " + f.testo : "") : "");
      voci.forEach(function (v) {
        var s = v.getAttribute("data-servizio");
        v.classList.toggle("is-attivo", (f.servizi || []).indexOf(s) >= 0);
      });
    }
    function avanti() { mostra(i + 1); }
    function programma() {
      clearInterval(timer);
      if (!inPausa && visibile) timer = setInterval(avanti, 4200);
    }
    if (btnPausa) {
      btnPausa.textContent = inPausa ? "Riprendi" : "Pausa";
      btnPausa.setAttribute("aria-pressed", String(inPausa));
      btnPausa.addEventListener("click", function () {
        inPausa = !inPausa;
        btnPausa.textContent = inPausa ? "Riprendi" : "Pausa";
        btnPausa.setAttribute("aria-pressed", String(inPausa));
        programma();
      });
    }
    var prec = $("[data-hero-prec]", hero), succ = $("[data-hero-succ]", hero);
    if (prec) prec.addEventListener("click", function () { mostra(i - 1); programma(); });
    if (succ) succ.addEventListener("click", function () { mostra(i + 1); programma(); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) { visibile = e[0].isIntersecting; programma(); }).observe(hero);
    }
    // con "riduci movimento" si parte dalla casa finita, ferma; si sfoglia con i pulsanti
    mostra(ridotto ? quadri.length - 1 : 0);
    programma();
  }

  /* ==========================================================================
     Movimento diffuso: rivelazioni, titoli per righe, muri che salgono, parallasse
     ========================================================================== */
  function dividiRighe(el) {
    var testo = el.getAttribute("data-testo") || el.textContent.trim().replace(/\s+/g, " ");
    el.setAttribute("data-testo", testo);
    el.innerHTML = "";
    var parole = testo.split(" ").map(function (p) {
      var s = document.createElement("span");
      s.textContent = p;
      s.style.display = "inline-block";
      el.appendChild(s);
      el.appendChild(document.createTextNode(" "));
      return s;
    });
    var righe = [], top = null;
    parole.forEach(function (p) {
      if (top === null || Math.abs(p.offsetTop - top) > 4) { righe.push([]); top = p.offsetTop; }
      righe[righe.length - 1].push(p.textContent);
    });
    el.innerHTML = "";
    righe.forEach(function (r, k) {
      var riga = document.createElement("span");
      riga.className = "riga";
      var dentro = document.createElement("span");
      dentro.className = "riga__in";
      dentro.style.setProperty("--i", String(k));
      dentro.textContent = r.join(" ");
      riga.appendChild(dentro);
      el.appendChild(riga);
      if (k < righe.length - 1) el.appendChild(document.createTextNode(" "));
    });
  }
  var titoli = $$("[data-righe]");
  if (!ridotto && fotogramma === null) {
    var pronti = function () {
      titoli.forEach(dividiRighe);
      var larg = window.innerWidth, t = null;
      window.addEventListener("resize", function () {
        if (window.innerWidth === larg) return;
        larg = window.innerWidth;
        clearTimeout(t);
        t = setTimeout(function () { titoli.forEach(function (el) { var era = el.classList.contains("is-in"); dividiRighe(el); if (era) el.classList.add("is-in"); }); }, 200);
      });
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(pronti); else pronti();
  }

  var daRivelare = $$("[data-rivela], [data-righe], [data-muro]");
  if ("IntersectionObserver" in window && !ridotto && fotogramma === null) {
    // un elemento ritagliato a zero da clip-path non risulta mai "visibile": per i muri si osserva il contenitore
    var osservato = new Map();
    var io = new IntersectionObserver(function (entries) {
      var k = 0;
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        (osservato.get(en.target) || [en.target]).forEach(function (el) {
          if (el.hasAttribute("data-rivela")) el.style.setProperty("--ritardo", Math.min(k++ * 80, 400) + "ms");
          el.classList.add("is-in");
        });
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    daRivelare.forEach(function (el) {
      var bersaglio = el.hasAttribute("data-muro") ? el.parentNode : el;
      if (!osservato.has(bersaglio)) osservato.set(bersaglio, []);
      osservato.get(bersaglio).push(el);
      io.observe(bersaglio);
    });
  } else {
    daRivelare.forEach(function (el) { el.classList.add("is-in"); });
  }

  // parallasse ±40 px sulle foto a tutta larghezza
  var parallassi = ridotto ? [] : $$("[data-parallasse]");
  if (parallassi.length) {
    alloScroll.push(function (y, vh) {
      parallassi.forEach(function (el) {
        var r = el.parentNode.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var c = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        el.style.transform = "translate3d(0," + (clamp(c, -1, 1) * -40).toFixed(1) + "px,0)";
      });
    });
  }

  /* ---------- I 7 mestieri: la foto reale segue il cursore ---------- */
  var follower = $(".mestieri__foto");
  if (follower && puntatoreFine && !ridotto) {
    var fImg = $("img", follower), fx = 0, fy = 0, tx = 0, ty = 0, attivo = false, giro = null;
    var muovi = function () {
      fx += (tx - fx) * 0.16; fy += (ty - fy) * 0.16;
      follower.style.transform = "translate3d(" + (fx + 28).toFixed(1) + "px," + (fy - 180).toFixed(1) + "px,0)";
      if (attivo || Math.abs(tx - fx) > 0.5) giro = requestAnimationFrame(muovi); else giro = null;
    };
    $$(".mestiere a").forEach(function (a) {
      a.addEventListener("mouseenter", function (e) {
        if (fImg.getAttribute("src") !== a.getAttribute("data-foto")) fImg.src = a.getAttribute("data-foto");
        if (!attivo) { fx = tx = e.clientX; fy = ty = e.clientY; }
        attivo = true;
        follower.classList.add("is-visibile");
        if (!giro) giro = requestAnimationFrame(muovi);
      });
      a.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; });
      a.addEventListener("mouseleave", function () { attivo = false; follower.classList.remove("is-visibile"); });
    });
  }

  /* ---------- Confronto prima / dopo trascinabile ---------- */
  $$("[data-confronto]").forEach(function (box) {
    var range = $(".confronto__range", box);
    var pos = 50;
    function imposta(v) {
      pos = clamp(v, 0, 100);
      box.style.setProperty("--pos", pos.toFixed(2));
      box.style.setProperty("--x", (box.clientWidth * pos / 100).toFixed(1) + "px");
      if (range && String(Math.round(pos)) !== range.value) range.value = String(Math.round(pos));
    }
    function daEvento(e) { var r = box.getBoundingClientRect(); imposta((e.clientX - r.left) / r.width * 100); }
    var preso = false, sx = 0, sy = 0, deciso = false;
    box.addEventListener("pointerdown", function (e) {
      if (e.target === range) return;
      preso = true; deciso = e.pointerType === "mouse"; sx = e.clientX; sy = e.clientY;
      if (deciso) { box.setPointerCapture(e.pointerId); box.classList.add("is-trascina"); daEvento(e); }
    });
    box.addEventListener("pointermove", function (e) {
      if (!preso) return;
      if (!deciso) {
        // sul telefono: si trascina solo se il gesto è orizzontale, altrimenti la pagina scorre
        if (Math.abs(e.clientX - sx) > 8 && Math.abs(e.clientX - sx) > Math.abs(e.clientY - sy)) {
          deciso = true; box.setPointerCapture(e.pointerId); box.classList.add("is-trascina");
        } else if (Math.abs(e.clientY - sy) > 8) { preso = false; return; } else return;
      }
      daEvento(e);
    });
    function lascia() { preso = false; box.classList.remove("is-trascina"); }
    box.addEventListener("pointerup", lascia);
    box.addEventListener("pointercancel", lascia);
    if (range) range.addEventListener("input", function () { imposta(parseFloat(range.value)); });
    window.addEventListener("resize", function () { imposta(pos); });
    imposta(50);
    // un piccolo invito al primo passaggio: il bordo si muove da solo, poi torna al centro
    if (!ridotto && "IntersectionObserver" in window) {
      var oss = new IntersectionObserver(function (en) {
        if (!en[0].isIntersecting || preso) return;
        oss.disconnect();
        var t0 = performance.now();
        (function anima(t) {
          var u = (t - t0) / 1800;
          if (u >= 1 || preso) { if (!preso) imposta(50); return; }
          imposta(50 + Math.sin(u * Math.PI * 2) * 22 * (1 - u));
          requestAnimationFrame(anima);
        })(t0);
      }, { threshold: 0.55 });
      oss.observe(box);
    }
  });

  /* ---------- I cantieri: scorrimento orizzontale fissato ---------- */
  $$("[data-orizzontale]").forEach(function (sez) {
    var binario = $(".cantieri__binario", sez);
    var vista = $(".cantieri__vista", sez);
    var riempi = $(".cantieri__riempi", sez);
    var conta = $("[data-cantiere-n]", sez);
    var n = binario ? binario.children.length : 0;
    var distanza = 0, fissato = false;
    function segna(p) {
      if (riempi) riempi.style.transform = "scaleX(" + p.toFixed(4) + ")";
      if (conta) conta.textContent = String(Math.min(n, Math.round(p * (n - 1)) + 1));
    }
    function prepara() {
      fissato = !ridotto && window.innerWidth > 760 && window.innerHeight > 540;
      sez.classList.toggle("is-fissato", fissato);
      binario.style.transform = "";
      if (!fissato) { sez.style.height = ""; return; }
      distanza = Math.max(0, binario.scrollWidth - window.innerWidth);
      sez.style.height = (window.innerHeight + distanza) + "px";
    }
    alloScroll.push(function (y, vh) {
      if (!fissato) return;
      var r = sez.getBoundingClientRect();
      var p = distanza ? clamp(-r.top / distanza, 0, 1) : 0;
      binario.style.transform = "translate3d(" + (-p * distanza).toFixed(1) + "px,0,0)";
      segna(p);
    });
    if (vista) vista.addEventListener("scroll", function () {
      if (fissato) return;
      var max = vista.scrollWidth - vista.clientWidth;
      segna(max > 0 ? vista.scrollLeft / max : 0);
    }, { passive: true });
    prepara();
    window.addEventListener("resize", function () { prepara(); chiediScroll(); });
    $$("img", sez).forEach(function (im) { if (!im.complete) im.addEventListener("load", function () { prepara(); chiediScroll(); }, { once: true }); });
  });

  /* ---------- Come lavoriamo e sequenze del cantiere: la linea avanza ---------- */
  $$("[data-passi]").forEach(function (lista) {
    var passi = $$(".passo", lista);
    alloScroll.push(function (y, vh) {
      var r = lista.getBoundingClientRect();
      var p = clamp((vh * 0.62 - r.top) / r.height, 0, 1);
      lista.style.setProperty("--avanza", p.toFixed(4));
      passi.forEach(function (s) { s.classList.toggle("is-fatto", s.getBoundingClientRect().top < vh * 0.62); });
    });
  });
  $$("[data-sequenza]").forEach(function (seq) {
    var barra = $(".sequenza__barra span", seq), lista = $(".sequenza__lista", seq);
    alloScroll.push(function (y, vh) {
      var r = lista.getBoundingClientRect();
      var p = clamp((vh * 0.6 - r.top) / r.height, 0, 1);
      if (barra) barra.style.transform = "scaleY(" + p.toFixed(4) + ")";
    });
  });

  /* ---------- Pulsanti magnetici e cursore (solo puntatore fine) ---------- */
  if (puntatoreFine && !ridotto && fotogramma === null) {
    $$("[data-magnetico]").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty("--sx", ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + "px");
        b.style.setProperty("--sy", ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + "px");
      });
      b.addEventListener("pointerleave", function () { b.style.setProperty("--sx", "0px"); b.style.setProperty("--sy", "0px"); });
    });

    var cursore = $(".cursore");
    if (cursore) {
      doc.classList.add("cursore-attivo");
      var testo = $(".cursore__testo", cursore);
      var cx = -100, cy = -100, kx = -100, ky = -100, modo = "";
      var scena = hero && $(".hero__fisso", hero);
      document.addEventListener("pointermove", function (e) {
        if (e.pointerType !== "mouse") return;
        kx = e.clientX; ky = e.clientY;
        var t = e.target, nuovo = "";
        if (t.closest && t.closest(".foto-vedi")) nuovo = "vedi";
        else if (scena && hero.classList.contains("hero--3d") && hero.dataset.stato !== "fine" && t.closest && t.closest(".hero__fisso") && !t.closest("a, button")) nuovo = "mirino";
        if (nuovo !== modo) {
          modo = nuovo;
          cursore.classList.toggle("is-vedi", modo === "vedi");
          cursore.classList.toggle("is-mirino", modo === "mirino");
          cursore.classList.toggle("is-visibile", !!modo);
          if (testo) testo.textContent = modo === "vedi" ? "Vedi" : "";
          if (scena) scena.style.cursor = modo === "mirino" ? "none" : "";
        }
      });
      document.addEventListener("pointerleave", function () { modo = ""; cursore.classList.remove("is-visibile"); });
      (function segui() {
        cx += (kx - cx) * 0.22; cy += (ky - cy) * 0.22;
        cursore.style.transform = "translate3d(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px,0)";
        requestAnimationFrame(segui);
      })();
    }
  }

  /* ---------- Filtri dei lavori ---------- */
  var filtri = $$("[data-filter]");
  if (filtri.length) {
    var schede = $$("[data-cat]");
    var stato = $("[data-filtri-stato]");
    filtri.forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-filter"), visibili = 0;
        filtri.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        schede.forEach(function (c) {
          var mostra = f === "tutti" || c.getAttribute("data-cat") === f;
          c.classList.toggle("is-filtrato", !mostra);
          if (mostra) { visibili++; c.classList.add("is-in"); }
        });
        if (stato) stato.textContent = visibili === 1 ? "1 lavoro mostrato" : visibili + " lavori mostrati";
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = $("#lightbox");
  if (lb && typeof lb.showModal === "function") {
    var lbImg = $(".lightbox__palco img", lb), lbCap = $(".lightbox__didascalia", lb), lbConta = $(".lightbox__conta", lb);
    var gruppo = [], idx = 0;
    var mostraFoto = function (k) {
      idx = (k + gruppo.length) % gruppo.length;
      var a = gruppo[idx];
      lbImg.src = a.getAttribute("href");
      lbImg.alt = a.getAttribute("data-caption") || "";
      lbCap.textContent = a.getAttribute("data-caption") || "";
      lbConta.textContent = (idx + 1) + " / " + gruppo.length;
      var multi = gruppo.length > 1;
      $(".lightbox__prec", lb).hidden = !multi;
      $(".lightbox__succ", lb).hidden = !multi;
      if (multi) { var s = new Image(); s.src = gruppo[(idx + 1) % gruppo.length].getAttribute("href"); }
    };
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("[data-lightbox]") : null;
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      gruppo = $$('[data-lightbox="' + a.getAttribute("data-lightbox") + '"]');
      lb.showModal();
      mostraFoto(gruppo.indexOf(a));
    });
    $(".lightbox__prec", lb).addEventListener("click", function () { mostraFoto(idx - 1); });
    $(".lightbox__succ", lb).addEventListener("click", function () { mostraFoto(idx + 1); });
    $(".lightbox__chiudi", lb).addEventListener("click", function () { lb.close(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") mostraFoto(idx - 1);
      if (e.key === "ArrowRight") mostraFoto(idx + 1);
    });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lightbox__palco")) lb.close(); });
    lb.addEventListener("close", function () { lbImg.removeAttribute("src"); });
    var tx0 = null;
    lb.addEventListener("touchstart", function (e) { tx0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (tx0 === null) return;
      var dx = e.changedTouches[0].clientX - tx0;
      if (Math.abs(dx) > 50) mostraFoto(idx + (dx < 0 ? 1 : -1));
      tx0 = null;
    });
  }

  /* ---------- Mappa: caricata solo se il visitatore lo chiede ---------- */
  $$("[data-map-load]").forEach(function (b) {
    b.addEventListener("click", function () {
      var box = b.closest(".mappa");
      if (!box) return;
      var f = document.createElement("iframe");
      f.src = box.getAttribute("data-map-src");
      f.title = "Mappa: sede di Multiservice ad Agrate Brianza";
      f.loading = "lazy";
      f.referrerPolicy = "strict-origin-when-cross-origin";
      f.setAttribute("allowfullscreen", "");
      box.innerHTML = "";
      box.appendChild(f);
    });
  });

  /* ---------- Modulo richiesta sopralluogo ---------- */
  $$("form[data-contact-form]").forEach(function (form) {
    var avvio = Date.now();
    var tField = form.querySelector('input[name="t"]');
    if (tField) tField.value = String(avvio);
    var stato = $(".form__stato", form);
    var invia = $('button[type="submit"]', form);
    var E = form.elements;

    var regole = {
      nome: function (v) { return v.trim().length >= 2; },
      telefono: function (v) { var d = v.replace(/[^\d]/g, ""); return d.length >= 6 && d.length <= 15; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
      comune: function (v) { return v.trim().length >= 2; },
      servizio: function (v) { return !!v; },
      messaggio: function (v) { return v.trim().length >= 10; }
    };
    function contenitore(input) { return input.closest(".campo, .spunta"); }
    // stato valido: la riga sotto il campo si riempie
    Object.keys(regole).forEach(function (k) {
      var el = E[k];
      if (!el) return;
      var segna = function () { var w = contenitore(el); if (w) w.classList.toggle("is-valido", regole[k](el.value)); };
      el.addEventListener("input", segna);
      el.addEventListener("change", segna);
    });
    function errore(input, msg) {
      var w = contenitore(input);
      if (!w) return;
      w.classList.toggle("has-error", !!msg);
      var err = $(".field__error", w);
      if (msg) {
        if (!err) { err = document.createElement("span"); err.className = "field__error"; err.id = input.id + "-err"; w.appendChild(err); }
        err.textContent = msg;
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", err.id);
      } else {
        if (err) err.remove();
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
      }
    }
    function valida() {
      var ok = true, primo = null;
      function controlla(cond, input, testo) { errore(input, cond ? "" : testo); if (!cond) { ok = false; if (!primo) primo = input; } }
      controlla(regole.nome(E.nome.value), E.nome, "Inserisci nome e cognome.");
      controlla(regole.telefono(E.telefono.value), E.telefono, "Inserisci un numero di telefono valido.");
      controlla(!E.email.value.trim() || regole.email(E.email.value), E.email, "L'indirizzo email non sembra corretto.");
      controlla(regole.messaggio(E.messaggio.value), E.messaggio, "Descrivi brevemente l'intervento (almeno 10 caratteri).");
      controlla(E.privacy.checked, E.privacy, "Per inviare la richiesta conferma di aver letto l'informativa.");
      if (primo) primo.focus();
      return ok;
    }
    $$("input, textarea, select", form).forEach(function (el) {
      el.addEventListener("input", function () { var w = contenitore(el); if (w && w.classList.contains("has-error")) errore(el, ""); });
    });
    function riepilogo() {
      var righe = ["Richiesta dal sito multiservice-srls.it", "Nome: " + E.nome.value.trim(), "Telefono: " + E.telefono.value.trim()];
      if (E.email.value.trim()) righe.push("Email: " + E.email.value.trim());
      if (E.comune && E.comune.value.trim()) righe.push("Comune: " + E.comune.value.trim());
      if (E.servizio && E.servizio.value) righe.push("Intervento: " + E.servizio.value);
      righe.push("", E.messaggio.value.trim());
      return righe.join("\n");
    }
    // riserva: il modulo non è stato inviato, si propone la stessa richiesta via WhatsApp, email o telefono
    function riserva(intro) {
      var t = riepilogo();
      stato.hidden = false;
      stato.className = "form__stato form__stato--err";
      stato.innerHTML = "";
      var p = document.createElement("p");
      p.textContent = intro + " La richiesta non è stata inviata: puoi mandarcela con un clic.";
      var riga = document.createElement("div");
      riga.className = "azioni";
      [["https://wa.me/" + (cfg.whatsapp || "") + "?text=" + encodeURIComponent(t), "Invia su WhatsApp", true],
       ["mailto:" + (cfg.email || "") + "?subject=" + encodeURIComponent("Richiesta sopralluogo dal sito") + "&body=" + encodeURIComponent(t), "Invia per email", false],
       ["tel:" + (cfg.telefono_href || ""), "Chiama " + (cfg.telefono || ""), false]].forEach(function (d, k) {
        var a = document.createElement("a");
        a.className = "btn " + (k === 0 ? "btn--scuro" : "btn--secondario");
        a.href = d[0];
        if (d[2]) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
        var s = document.createElement("span"); s.className = "btn__testo"; s.textContent = d[1];
        a.appendChild(s);
        riga.appendChild(a);
      });
      stato.appendChild(p);
      stato.appendChild(riga);
      stato.focus();
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!valida()) return;
      var dati = {};
      new FormData(form).forEach(function (v, k) { dati[k] = typeof v === "string" ? v : ""; });
      dati.privacy = E.privacy.checked;
      dati.pagina = location.pathname;
      invia.classList.add("is-loading");
      invia.disabled = true;
      stato.hidden = true;
      fetch(form.getAttribute("action"), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(dati),
        credentials: "same-origin"
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, body: j }; });
      }).then(function (res) {
        // "inviata" solo se il server conferma l'invio dell'email
        if (res.status === 200 && res.body && res.body.ok) {
          stato.hidden = false;
          stato.className = "form__stato form__stato--ok";
          stato.textContent = "Grazie, la richiesta è arrivata. Ti richiamiamo negli orari di ufficio per fissare il sopralluogo.";
          form.reset();
          $$(".is-valido", form).forEach(function (w) { w.classList.remove("is-valido"); });
          if (tField) tField.value = String(Date.now());
          stato.focus();
        } else if (res.status === 400 && res.body && res.body.campi) {
          Object.keys(res.body.campi).forEach(function (k) { if (E[k]) errore(E[k], res.body.campi[k]); });
        } else if (res.status === 429) {
          riserva("Hai già inviato diverse richieste in poco tempo.");
        } else {
          riserva("In questo momento il modulo non è disponibile.");
        }
      }).catch(function () {
        riserva("Non è stato possibile contattare il server (connessione assente?).");
      }).then(function () {
        invia.classList.remove("is-loading");
        invia.disabled = false;
      });
    });
  });

  /* ---------- Anno corrente ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  aggiornaScroll();
})();
