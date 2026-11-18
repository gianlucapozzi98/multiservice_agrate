/*
 * Hero della home: "Un cantiere, un solo interlocutore".
 * Un condominio in sezione che si rinnova mestiere dopo mestiere mentre si scorre.
 *
 * Caricato da main.js con import() dopo il primo disegno della pagina, solo se il
 * dispositivo lo regge (niente reduced motion, niente risparmio dati, WebGL 2).
 * Esporta avvia(sezione) -> { distruggi }.
 *
 * Modalità fotogramma (per strumenti/3d/fotogrammi.mjs): /?fotogramma=0.5 rende la scena
 * ferma a quel punto, senza scroll, e segnala html[data-fotogramma="pronto"].
 */
import {
  ACESFilmicToneMapping,
  CatmullRomCurve3,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ANCORE, applicaStato, creaScena } from "./scena.js";
import { Post } from "./post.js";

gsap.registerPlugin(ScrollTrigger);

// Percorso della camera: [p, posizione, punto guardato, spazio per il testo a sinistra (0..1)]
const CAMERA = [
  [0.0, [19, 9.4, 35], [0, 5.6, 0], 1],
  [0.09, [18, 9.0, 33.4], [0, 5.6, 0], 1],
  [0.18, [8.5, 7.8, 21], [0.8, 5.4, -0.2], 0.25],
  [0.34, [-3.5, 5.2, 18], [-1.0, 3.4, -2.0], 0],
  [0.49, [3.5, 10.5, 15.5], [-0.2, 2.6, -0.6], 0],
  [0.62, [-7, 8.6, 18], [-0.6, 5.6, -1.2], 0],
  [0.73, [20, 6.6, 13.5], [3.2, 5.0, 0.0], 0],
  [0.85, [19, 17.5, 20], [1.0, 7.8, 0.0], 0.2],
  [1.0, [20.5, 8.0, 32.5], [0, 5.8, 0], 1],
];

const easeSeg = (u) => u + (u * u * (3 - 2 * u) - u) * 0.7;

class Percorso {
  constructor() {
    this.p = CAMERA.map((k) => k[0]);
    this.pos = new CatmullRomCurve3(CAMERA.map((k) => new Vector3(...k[1])), false, "centripetal");
    this.guarda = new CatmullRomCurve3(CAMERA.map((k) => new Vector3(...k[2])), false, "centripetal");
    this.n = CAMERA.length - 1;
    this.sposta = CAMERA.map((k) => k[3]);
  }
  spazio(p) {
    let i = 0;
    while (i < this.n - 1 && p > this.p[i + 1]) i++;
    const u = Math.min(1, Math.max(0, (p - this.p[i]) / (this.p[i + 1] - this.p[i])));
    const e = u * u * (3 - 2 * u);
    return this.sposta[i] + (this.sposta[i + 1] - this.sposta[i]) * e;
  }
  t(p) {
    let i = 0;
    while (i < this.n - 1 && p > this.p[i + 1]) i++;
    const u = Math.min(1, Math.max(0, (p - this.p[i]) / (this.p[i + 1] - this.p[i])));
    return (i + easeSeg(u)) / this.n;
  }
}

function webgl2() {
  try {
    const c = document.createElement("canvas");
    return !!c.getContext("webgl2");
  } catch (e) {
    return false;
  }
}

export function avvia(sezione, opzioni = {}) {
  const fotogramma = opzioni.fotogramma; // numero 0..1 in modalità fotogramma
  if (!webgl2()) return null;
  const host = sezione.querySelector(".hero__canvas");
  const fasi = JSON.parse(document.getElementById("hero-fasi")?.textContent || "[]");
  const leggera = fotogramma === undefined && (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 760);

  // ---------------- renderer ----------------
  const renderer = new WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance", preserveDrawingBuffer: fotogramma !== undefined });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  host.appendChild(renderer.domElement);
  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.5, 260);
  const S = creaScena(scene, { leggera });
  const post = new Post(renderer, { hdr: true, msaa: leggera ? 0 : 4 });

  // ---------------- qualità adattiva ----------------
  // 3: tutto · 2: senza profondità di campo · 1: senza bagliore · 0: senza polvere, DPR 1
  let qualita = fotogramma !== undefined ? 3 : leggera ? 1 : 3;
  const DPR_MAX = 1.5;
  function applicaQualita() {
    post.dof = qualita >= 3 && !leggera;
    post.bloom = qualita >= 2 || (leggera && qualita >= 1);
    S.polvereAttiva = qualita >= 1;
    const dpr = fotogramma !== undefined ? 1 : Math.min(window.devicePixelRatio || 1, qualita === 0 ? 1 : DPR_MAX);
    if (renderer.getPixelRatio() !== dpr) {
      renderer.setPixelRatio(dpr);
      dimensiona();
    }
  }
  const tempi = [];
  function misura(dt) {
    if (fotogramma !== undefined || qualita === 0) return;
    tempi.push(dt);
    if (tempi.length < 50) return;
    const media = tempi.reduce((a, b) => a + b, 0) / tempi.length;
    tempi.length = 0;
    if (media > 23) {
      qualita--;
      applicaQualita();
    }
  }

  // ---------------- dimensioni ----------------
  let W = 1, Hh = 1, aspetto = 1;
  function dimensiona() {
    W = host.clientWidth || window.innerWidth;
    Hh = host.clientHeight || window.innerHeight;
    aspetto = W / Hh;
    renderer.setSize(W, Hh, false);
    const dpr = renderer.getPixelRatio();
    post.setSize(Math.round(W * dpr), Math.round(Hh * dpr));
    camera.aspect = aspetto;
    camera.fov = aspetto < 1 ? 38 : 32;
    camera.updateProjectionMatrix();
    S.polvere.material.uniforms.uPx.value = dpr;
    sporco = true;
  }

  // ---------------- stato animato e timeline ----------------
  const st = {
    polvere: 1, vecchiFili: 1, tramezzo: 0, porta: 0, cavi: 0, tubi: 0, quadri: 0, impiantiLuce: 1,
    posa: 0, pittura: [0, 0, 0], finVecchie: 0, finNuove: 0, chiusura: 0,
    tettoVecchio: 0, tettoNuovo: 0, cappotto: 0, arredi: 0, facciata: 0, sera: 0, luci: 0,
  };
  const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });
  const a = (prop, da, a, val, ease = "power1.inOut") => tl.to(st, { [prop]: val, duration: a - da, ease }, da);
  a("tramezzo", 0.11, 0.19, 1);
  a("porta", 0.16, 0.24, 1);
  a("polvere", 0.2, 0.4, 0);
  a("vecchiFili", 0.25, 0.29, 0);
  a("cavi", 0.27, 0.38, 1);
  a("tubi", 0.29, 0.4, 1);
  a("quadri", 0.35, 0.41, 1);
  a("posa", 0.43, 0.555, 1);
  tl.to(st.pittura, { 0: 1, duration: 0.05, ease: "power1.inOut" }, 0.565);
  tl.to(st.pittura, { 1: 1, duration: 0.05, ease: "power1.inOut" }, 0.592);
  tl.to(st.pittura, { 2: 1, duration: 0.055, ease: "power1.inOut" }, 0.62);
  a("impiantiLuce", 0.56, 0.665, 0.0);
  a("finVecchie", 0.685, 0.72, 1);
  a("finNuove", 0.7, 0.745, 1);
  a("chiusura", 0.74, 0.775, 1);
  a("tettoVecchio", 0.785, 0.825, 1);
  a("tettoNuovo", 0.81, 0.865, 1);
  a("cappotto", 0.835, 0.895, 1);
  a("arredi", 0.87, 0.905, 1);
  a("facciata", 0.905, 0.958, 1);
  a("sera", 0.915, 1.0, 1);
  a("luci", 0.95, 1.0, 1);
  tl.to({}, { duration: 0 }, 1); // la timeline dura esattamente 1

  // ---------------- camera ----------------
  const percorso = new Percorso();
  const target = new Vector3();
  const tmp = new Vector3();
  const destra = new Vector3();
  const orbita = { az: 0, azT: 0, el: 0, elT: 0 };
  let respiro = 0;
  function posizionaCamera(p, tempo) {
    const t = percorso.t(p);
    percorso.pos.getPoint(t, camera.position);
    percorso.guarda.getPoint(t, target);
    // schermi stretti: la camera si allontana perché l'edificio entri in larghezza
    const k = aspetto >= 1.5 ? 1 : 1 + (1.5 / aspetto - 1) * 0.32;
    tmp.subVectors(camera.position, target).multiplyScalar(k);
    // a scena finita si può girare intorno trascinando
    if (orbita.az || orbita.el) {
      tmp.applyAxisAngle(new Vector3(0, 1, 0), orbita.az);
      tmp.y += orbita.el * 6;
    }
    // un respiro lento, più evidente all'inizio
    respiro = (p < 0.12 ? 1 : 0.35) * (fotogramma === undefined ? 1 : 0);
    tmp.x += Math.sin(tempo * 0.25) * 0.35 * respiro;
    tmp.y += Math.sin(tempo * 0.19) * 0.18 * respiro;
    // su schermi larghi, all'inizio e alla fine l'edificio si sposta a destra per lasciare posto al titolo
    if (aspetto > 1.15) {
      const sp = percorso.spazio(p) * Math.min(1, (aspetto - 1.15) * 2.5) * 0.36 * tmp.length() * Math.tan((camera.fov * Math.PI) / 360) * aspetto;
      destra.set(tmp.z, 0, -tmp.x).normalize();
      target.addScaledVector(destra, -sp);
    }
    camera.position.copy(target).add(tmp);
    if (aspetto < 1) {
      // in verticale il titolo sta in alto: l'edificio scende
      target.y += 0.2 * tmp.length() * Math.tan((camera.fov * Math.PI) / 360) * percorso.spazio(p);
    }
    camera.lookAt(target);
  }

  // ---------------- interfaccia: mestieri, etichetta, fase ----------------
  const voci = Array.from(sezione.querySelectorAll("[data-servizio]"));
  const etichetta = sezione.querySelector(".hero__etichetta");
  const etTesto = etichetta && etichetta.querySelector(".hero__etichetta-testo");
  const faseNome = sezione.querySelector("[data-fase-nome]");
  const faseTesto = sezione.querySelector("[data-fase-testo]");
  const faseLink = sezione.querySelector("[data-fase-link]");
  const barra = sezione.querySelector(".hero__avanzamento span");
  let faseCorrente = -1;
  const ancora = new Vector3();
  function aggiornaUI(p) {
    let i = fasi.findIndex((f) => p >= f.da && p < f.a);
    if (i < 0) i = fasi.length - 1;
    const stato = p < 0.075 ? "intro" : p > 0.93 ? "fine" : "fasi";
    if (sezione.dataset.stato !== stato) sezione.dataset.stato = stato;
    if (barra) barra.style.transform = `scaleX(${p.toFixed(4)})`;
    if (i !== faseCorrente) {
      faseCorrente = i;
      const f = fasi[i] || {};
      if (faseNome) faseNome.textContent = f.nome || "";
      if (faseTesto) faseTesto.textContent = f.testo || "";
      if (faseLink) {
        if (f.url) {
          faseLink.href = f.url;
          faseLink.hidden = false;
          faseLink.textContent = f.link || "Scopri il servizio";
        } else faseLink.hidden = true;
      }
      voci.forEach((v) => {
        const s = v.dataset.servizio;
        const attivo = (f.servizi || []).includes(s);
        const fatto = fasi.slice(0, i).some((g) => (g.servizi || []).includes(s)) || stato === "fine";
        v.classList.toggle("is-attivo", attivo);
        v.classList.toggle("is-fatto", fatto && !attivo);
        if (attivo) v.setAttribute("aria-current", "step");
        else v.removeAttribute("aria-current");
      });
      if (etTesto) etTesto.textContent = (f.servizi && f.servizi.length && f.etichetta) || "";
      sezione.dataset.fase = String(i);
    }
    // etichetta che segue il pezzo in lavorazione
    const f = fasi[i] || {};
    const chiave = f.servizi && f.servizi[0];
    if (etichetta && chiave && ANCORE[chiave] && stato === "fasi") {
      ancora.set(...ANCORE[chiave]).project(camera);
      const x = (ancora.x * 0.5 + 0.5) * W, y = (-ancora.y * 0.5 + 0.5) * Hh;
      const dentro = ancora.z < 1 && x > 20 && x < W - 40 && y > 40 && y < Hh - 20;
      // vicino ai bordi di fase l'etichetta si spegne
      const u = (p - f.da) / (f.a - f.da);
      const vis = dentro && u > 0.12 && u < 0.92;
      etichetta.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      etichetta.classList.toggle("is-visibile", vis);
      etichetta.classList.toggle("is-sinistra", x > W * 0.62);
    } else if (etichetta) etichetta.classList.remove("is-visibile");
  }

  // ---------------- interazione a scena finita ----------------
  const ray = new Raycaster();
  const mouse = new Vector2();
  const suggerimento = sezione.querySelector(".hero__suggerimento");
  const nomi = Object.fromEntries(voci.map((v) => [v.dataset.servizio, { nome: v.dataset.nome || v.textContent.trim(), href: v.getAttribute("href") }]));
  let trascina = null, sotto = null;
  const fine = () => sezione.dataset.stato === "fine";
  const canvas = renderer.domElement;
  canvas.addEventListener("pointerdown", (e) => {
    if (!fine()) return;
    trascina = { x: e.clientX, y: e.clientY, az: orbita.azT, el: orbita.elT, mosso: false };
  });
  window.addEventListener("pointerup", () => {
    if (trascina && !trascina.mosso && sotto && nomi[sotto]) window.location.href = nomi[sotto].href;
    trascina = null;
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!fine()) return;
    if (trascina) {
      const dx = e.clientX - trascina.x, dy = e.clientY - trascina.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) trascina.mosso = true;
      orbita.azT = Math.max(-0.95, Math.min(0.6, trascina.az - dx * 0.005));
      if (e.pointerType === "mouse") orbita.elT = Math.max(-0.2, Math.min(0.5, trascina.el + dy * 0.003));
      sporco = true;
      return;
    }
    if (e.pointerType !== "mouse") return;
    const r = canvas.getBoundingClientRect();
    mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(mouse, camera);
    const hit = ray.intersectObjects(S.interattivi, false)[0];
    const s = hit && (hit.object.userData.servizio || hit.object.parent?.userData.servizio);
    sotto = s || null;
    canvas.style.cursor = s ? "pointer" : "grab";
    if (suggerimento) {
      if (s && nomi[s]) {
        suggerimento.textContent = nomi[s].nome;
        suggerimento.style.transform = `translate3d(${(e.clientX - r.left).toFixed(0)}px, ${(e.clientY - r.top).toFixed(0)}px, 0)`;
        suggerimento.classList.add("is-visibile");
      } else suggerimento.classList.remove("is-visibile");
    }
  });
  canvas.addEventListener("pointerleave", () => suggerimento && suggerimento.classList.remove("is-visibile"));

  // ---------------- ciclo di disegno ----------------
  let visibile = true, sporco = true, ultimoP = -1, ultimoT = 0, fermoDa = 0, spento = false;
  const t0 = performance.now();
  function disegna(ora) {
    if (spento) return;
    const tempo = (ora - t0) / 1000;
    const p = fotogramma !== undefined ? fotogramma : tl.progress();
    if (Math.abs(p - ultimoP) > 0.00001) {
      ultimoP = p;
      fermoDa = ora;
      sporco = true;
    }
    if (!fine() && (orbita.azT || orbita.elT)) { orbita.azT = 0; orbita.elT = 0; }
    orbita.az += (orbita.azT - orbita.az) * 0.08;
    orbita.el += (orbita.elT - orbita.el) * 0.08;
    if (Math.abs(orbita.azT - orbita.az) > 0.0005) sporco = true;
    // fermi da un po': 20 fotogrammi al secondo bastano per polvere, respiro e grana
    const pigro = ora - fermoDa > 1200 && !trascina;
    if (pigro && ora - ultimoT < 48 && !sporco) return;
    const dt = ultimoT ? ora - ultimoT : 16;
    ultimoT = ora;
    sporco = false;
    applicaStato(S, st, tempo);
    posizionaCamera(p, tempo);
    aggiornaUI(p);
    post.render(scene, camera, tempo, camera.position.distanceTo(target));
    if (!pigro) misura(dt);
  }

  dimensiona();
  applicaQualita();

  // ---------------- modalità fotogramma ----------------
  if (fotogramma !== undefined) {
    tl.progress(fotogramma);
    document.documentElement.dataset.fotogramma = "carica";
    let n = 0;
    const giro = () => {
      disegna(performance.now() + 4000);
      if (++n < 4) requestAnimationFrame(giro);
      else {
        window.__msSagoma = sagoma(camera, W, Hh);
        document.documentElement.dataset.fotogramma = "pronto";
      }
    };
    requestAnimationFrame(giro);
    return { renderer };
  }

  // ---------------- scroll ----------------
  const lenis = new Lenis({ lerp: 0.1, anchors: true, autoRaf: false });
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (t) => lenis.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  const trigger = ScrollTrigger.create({
    trigger: sezione,
    start: "top top",
    end: "bottom bottom",
    animation: tl,
    scrub: 0.7,
  });
  const loop = () => {
    if (visibile && !document.hidden) disegna(performance.now());
  };
  gsap.ticker.add(loop);

  const io = new IntersectionObserver((e) => {
    visibile = e[0].isIntersecting;
  });
  io.observe(sezione);
  const ro = new ResizeObserver(() => dimensiona());
  ro.observe(host);

  // la scena è pronta: la tela compare sopra il primo fotogramma
  requestAnimationFrame(() => {
    disegna(performance.now());
    sezione.classList.add("is-3d-pronto");
  });

  // i mestieri della barra laterale portano al punto giusto della scena (con Maiusc o Ctrl: alla pagina)
  return {
    lenis,
    vaiA(p) {
      const y = trigger.start + (trigger.end - trigger.start) * p;
      lenis.scrollTo(y, { duration: 1.6 });
    },
    distruggi() {
      spento = true;
      gsap.ticker.remove(loop);
      gsap.ticker.remove(tick);
      trigger.kill();
      lenis.destroy();
      io.disconnect();
      ro.disconnect();
      renderer.dispose();
    },
  };
}

/** Linee dell'edificio proiettate sullo schermo (per la sagoma SVG che si traccia al caricamento). */
function sagoma(camera, W, H) {
  const P = (x, y, z) => {
    const v = new Vector3(x, y, z).project(camera);
    return `${((v.x * 0.5 + 0.5) * W).toFixed(1)} ${((-v.y * 0.5 + 0.5) * H).toFixed(1)}`;
  };
  const linee = [];
  const L = (...pts) => linee.push("M" + pts.map((p) => P(...p)).join("L"));
  const z = 3.5;
  // profilo della sezione, dal piede sinistro al colmo e giù a destra
  L([-6, 0, z], [-6, 9.9, z], [-6.6, 9.75, z + 0.35], [0, 12, z + 0.35], [6.6, 9.75, z + 0.35], [6, 9.9, z], [6, 0, z]);
  // fianco destro e tetto verso il retro
  L([6, 0, z], [6, 0, -3.5], [6, 9.9, -3.5], [6.6, 9.75, -3.85], [0, 12, -3.85], [0, 12, z + 0.35]);
  L([6.6, 9.75, z + 0.35], [6.6, 9.75, -3.85]);
  // solai e tramezzo
  [3.3, 6.3, 9.3].forEach((y) => L([-6, y, z], [6, y, z]));
  [0.3, 3.3, 6.3].forEach((y) => L([-1, y, z], [-1, y + 2.7, z]));
  // aperture sul fianco destro
  [0.3, 3.3, 6.3].forEach((y) =>
    [-1.6, 1.7].forEach((c) => L([6, y + 0.9, c - 0.65], [6, y + 2.25, c - 0.65], [6, y + 2.25, c + 0.65], [6, y + 0.9, c + 0.65], [6, y + 0.9, c - 0.65]))
  );
  // linea di terra
  L([-14, 0, z], [14, 0, z]);
  return linee.join("");
}
