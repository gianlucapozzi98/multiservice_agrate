/*
 * La casa in sezione: un condominio di tre piani con la facciata tolta, un sottotetto a
 * capanna, un pezzo di strada e di cielo. Tutto procedurale: scatole, scatole arrotondate
 * e InstancedMesh per piastrelle, listelli e tegole. Nessun modello e nessuna texture
 * scaricati: macchie, grana e colori sono calcolati negli shader (vedi materiali.js).
 *
 * Unità: metri. x da -6 a 6 (larghezza), z da -3.5 (retro) a +3.5 (fronte in sezione).
 * Piani: pavimento a y = 0.3, 3.3, 6.3; sottotetto a 9.3; colmo a 12.
 */
import {
  AdditiveBlending,
  BackSide,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  CylinderGeometry,
  DoubleSide,
  DirectionalLight,
  Fog,
  Group,
  HemisphereLight,
  IcosahedronGeometry,
  InstancedBufferAttribute,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  PointLight,
  Points,
  Quaternion,
  ShaderMaterial,
  SphereGeometry,
  TubeGeometry,
  Vector3,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { materialePosa, materialeRinnovo, materialeTraccia } from "./materiali.js";

const L = [0.3, 3.3, 6.3, 9.3]; // quote dei pavimenti
const H = 2.7; // altezza interna
const X0 = -6, X1 = 6, Z0 = -3.5, Z1 = 3.5, SP = 0.3; // ingombro e spessore muri
const PART = -1; // tramezzo che divide le due stanze di ogni piano
const COLMO = 12.0;

const C = {
  taglio: "#2a3238",
  solaio: "#b9bdbb",
  vecchioMuro: "#9c968b",
  nuovoMuro: ["#eef0ee", "#e9ece9", "#f1f0ea"],
  bagnoNuovo: "#e4e8e6",
  vecchioEst: "#8a8780",
  pavVecchio: "#7f7c76",
  gres: "#c9cbc7",
  rovere: "#a8875f",
  piastrBagno: "#dfe4e2",
  coppoVecchio: "#6f5e52",
  coppoNuovo: "#a8553a",
  telaioVecchio: "#4b3a2c",
  telaioNuovo: "#30373c",
  vetro: "#9fb7c4",
  elettrico: "#F2B71D",
  idraulico: "#2E7CE0",
};

// --------------------------------------------------------------------------
// utilità
// --------------------------------------------------------------------------
function scatola(w, h, d, mat, x, y, z, ombre = true) {
  const m = new Mesh(new BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = ombre;
  m.receiveShadow = true;
  return m;
}

/** Scatola da min/max (comodo per i muri) */
function blocco(x0, x1, y0, y1, z0, z1, mat, ombre = true) {
  return scatola(x1 - x0, y1 - y0, z1 - z0, mat, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, ombre);
}

/**
 * Muro con aperture. `lungo` = "x" (muro parallelo a x) o "z".
 * fori: [{ c: centro lungo il muro, w: larghezza, y0, y1 }]
 */
function muroForato(g, lungo, a0, a1, y0, y1, t0, t1, fori, mat) {
  const pezzi = [];
  const add = (b0, b1, c0, c1) => {
    if (b1 - b0 < 0.001 || c1 - c0 < 0.001) return;
    pezzi.push(lungo === "x" ? blocco(b0, b1, c0, c1, t0, t1, mat) : blocco(t0, t1, c0, c1, b0, b1, mat));
  };
  const ord = [...fori].sort((p, q) => p.c - q.c);
  let cur = a0;
  for (const f of ord) {
    const f0 = f.c - f.w / 2, f1 = f.c + f.w / 2;
    add(cur, f0, y0, y1);
    add(f0, f1, y0, f.y0);
    add(f0, f1, f.y1, y1);
    cur = f1;
  }
  add(cur, a1, y0, y1);
  pezzi.forEach((p) => g.add(p));
  return pezzi;
}

function seme(i) {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** InstancedMesh di pezzi posati: elenco di {pos, rot(y), scala?, ritardo, tono} */
function posati(geo, mat, voci) {
  const m = new InstancedMesh(geo, mat, voci.length);
  const o = new Object3D();
  const rit = new Float32Array(voci.length), tono = new Float32Array(voci.length);
  voci.forEach((v, i) => {
    o.position.copy(v.pos);
    o.quaternion.copy(v.q || new Quaternion());
    o.scale.set(1, 1, 1);
    o.updateMatrix();
    m.setMatrixAt(i, o.matrix);
    rit[i] = v.ritardo;
    tono[i] = v.tono ?? seme(i * 3.1);
  });
  geo.setAttribute("aRitardo", new InstancedBufferAttribute(rit, 1));
  geo.setAttribute("aTono", new InstancedBufferAttribute(tono, 1));
  m.receiveShadow = true;
  m.frustumCulled = false;
  return m;
}

// --------------------------------------------------------------------------
// la scena
// --------------------------------------------------------------------------
export function creaScena(scene, { leggera = false } = {}) {
  const S = {}; // riferimenti per l'animazione
  const casa = new Group();
  scene.add(casa);

  // ---------------- cielo e luce ----------------
  const cielo = new Mesh(
    new SphereGeometry(160, 32, 16),
    new ShaderMaterial({
      side: BackSide,
      depthWrite: false,
      uniforms: { uSera: { value: 0 } },
      vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform float uSera; varying vec3 vP;
        void main(){
          float h = clamp(vP.y * 1.6 + 0.08, 0.0, 1.0);
          vec3 basso = mix(vec3(0.88, 0.92, 0.94), vec3(1.0, 0.8, 0.6), uSera);
          vec3 alto = mix(vec3(0.42, 0.6, 0.82), vec3(0.34, 0.4, 0.62), uSera);
          vec3 c = mix(basso, alto, pow(h, 0.8));
          vec3 sole = normalize(mix(vec3(0.55, 0.45, 0.7), vec3(0.75, 0.12, 0.65), uSera));
          c += pow(max(dot(vP, sole), 0.0), 18.0) * mix(vec3(0.25, 0.22, 0.16), vec3(0.6, 0.3, 0.1), uSera);
          gl_FragColor = vec4(c * 1.05, 1.0);
        }`,
    })
  );
  scene.add(cielo);
  S.cielo = cielo;
  scene.fog = new Fog(new Color("#dbe5ea"), 50, 150);
  S.fog = scene.fog;

  const emi = new HemisphereLight("#dfe9f0", "#a9a296", 1.05);
  scene.add(emi);
  S.emi = emi;
  const sole = new DirectionalLight("#fff0da", 3.4);
  sole.position.set(16, 24, 20);
  sole.target.position.set(0, 5, 0);
  sole.castShadow = true;
  sole.shadow.mapSize.set(leggera ? 1024 : 2048, leggera ? 1024 : 2048);
  const sc = sole.shadow.camera;
  sc.left = -18; sc.right = 18; sc.top = 18; sc.bottom = -10; sc.near = 5; sc.far = 70;
  sole.shadow.bias = -0.0004;
  sole.shadow.normalBias = 0.03;
  sole.shadow.radius = 4;
  scene.add(sole, sole.target);
  S.sole = sole;

  // ---------------- terreno, strada, alberi ----------------
  const terra = new Mesh(new PlaneGeometry(320, 320), new MeshStandardMaterial({ color: "#b7b4aa", roughness: 1 }));
  terra.rotation.x = -Math.PI / 2;
  terra.receiveShadow = true;
  scene.add(terra);
  const marciapiede = blocco(-14, 14, 0, 0.14, 3.5, 7.2, new MeshStandardMaterial({ color: "#cfccc4", roughness: 0.95 }), false);
  const cordolo = blocco(-14, 14, 0, 0.16, 7.2, 7.45, new MeshStandardMaterial({ color: "#e2dfd8", roughness: 0.9 }), false);
  const strada = blocco(-60, 60, 0, 0.02, 7.45, 15.5, new MeshStandardMaterial({ color: "#5d6266", roughness: 0.92 }), false);
  scene.add(marciapiede, cordolo, strada);
  const striscia = new MeshStandardMaterial({ color: "#e9e7e0", roughness: 0.8 });
  for (let x = -58; x < 60; x += 5) scene.add(blocco(x, x + 2.4, 0.02, 0.035, 11.35, 11.55, striscia, false));
  const giardino = blocco(-14, 14, 0, 0.06, -12, -3.5, new MeshStandardMaterial({ color: "#9aa58a", roughness: 1 }), false);
  scene.add(giardino);
  const chioma = new MeshStandardMaterial({ color: "#7d8f6e", roughness: 0.95, flatShading: true });
  const tronco = new MeshStandardMaterial({ color: "#6b5a4b", roughness: 1 });
  [[-10.5, 5.6, 1.15], [10.8, 5.4, 1.0], [-11.5, -6.5, 1.3], [12, -7, 1.2]].forEach(([x, z, s], i) => {
    const t = new Mesh(new CylinderGeometry(0.12 * s, 0.16 * s, 2.4 * s, 7), tronco);
    t.position.set(x, 1.2 * s, z);
    t.castShadow = true;
    const f = new Mesh(new IcosahedronGeometry(1.5 * s, 1), chioma);
    f.position.set(x, 3.2 * s, z);
    f.rotation.set(seme(i) * 3, seme(i + 9) * 3, 0);
    f.castShadow = true;
    scene.add(t, f);
  });
  const lampione = new Group();
  const palo = new Mesh(new CylinderGeometry(0.05, 0.07, 4.6, 8), new MeshStandardMaterial({ color: "#2f363b", roughness: 0.6 }));
  palo.position.y = 2.3;
  const testa = scatola(0.7, 0.12, 0.25, palo.material, 0.3, 4.6, 0);
  const lampada = new MeshStandardMaterial({ color: "#ffffff", emissive: new Color("#ffcf8a"), emissiveIntensity: 0 });
  const vetroL = scatola(0.5, 0.04, 0.18, lampada, 0.35, 4.52, 0, false);
  lampione.add(palo, testa, vetroL);
  lampione.position.set(8.4, 0.14, 6.6);
  lampione.rotation.y = Math.PI;
  scene.add(lampione);
  S.lampada = lampada;

  // ---------------- materiali dell'edificio ----------------
  const taglio = new MeshStandardMaterial({ color: C.taglio, roughness: 0.9 });
  const solaio = new MeshStandardMaterial({ color: C.solaio, roughness: 0.95 });
  // pareti interne: una per piano, il rullo di luce le rinnova da sinistra a destra
  S.pittura = [0, 1, 2].map((i) =>
    materialeRinnovo({ vecchio: C.vecchioMuro, nuovo: C.nuovoMuro[i], asse: new Vector3(1, 0.05, 0), da: X0 - 0.6, a: X1 + 0.6, macchie: 0.75, trama: 0.03 })
  );
  // esterno vecchio (resta sotto il cappotto) e cappotto bicolore che sale dal basso
  const estVecchio = materialeRinnovo({ vecchio: C.vecchioEst, nuovo: C.vecchioEst, macchie: 0.9 });
  S.cappottoMat = materialeRinnovo({ vecchio: C.vecchioEst, nuovo: "#ffffff", asse: new Vector3(0, 1, 0), da: -0.4, a: 10.2, macchie: 0.9, bicolore: true, trama: 0.05 });

  // ---------------- solai (tagliati in sezione sul fronte) ----------------
  const matSolaio = [solaio, solaio, solaio, solaio, taglio, solaio];
  L.forEach((y, i) => {
    const s = new Mesh(new BoxGeometry(X1 - X0, i === 0 ? 0.3 : 0.3, Z1 - Z0), matSolaio);
    s.position.set(0, y - 0.15, 0);
    s.castShadow = s.receiveShadow = true;
    casa.add(s);
  });
  // basamento
  casa.add(blocco(X0 - 0.1, X1 + 0.1, 0, 0.12, Z0 - 0.1, Z1, taglio));

  // ---------------- muri perimetrali, piano per piano ----------------
  S.finestre = []; // aperture da serramento: { centro, lungo, w, y0, y1, piano, esterno: normale }
  const foriRetro = (y) => [
    { c: -3.6, w: 1.4, y0: y + 0.9, y1: y + 2.25 },
    { c: 2.6, w: 1.6, y0: y + 0.9, y1: y + 2.25 },
  ];
  const foriDestra = (y) => [
    { c: -1.6, w: 1.3, y0: y + 0.9, y1: y + 2.25 },
    { c: 1.7, w: 1.3, y0: y + 0.9, y1: y + 2.25 },
  ];
  for (let p = 0; p < 3; p++) {
    const y0 = L[p], y1 = L[p] + H;
    const pit = S.pittura[p];
    // retro: faccia interna = pittura del piano, fronte tagliato = scuro
    const muriRetro = muroForato(casa, "x", X0, X1, y0, y1, Z0, Z0 + SP, foriRetro(y0), pit);
    muriRetro.forEach((m) => (m.material = [pit, pit, pit, pit, pit, estVecchio]));
    foriRetro(y0).forEach((f) => S.finestre.push({ x: f.c, z: Z0 + SP / 2, y0: f.y0, y1: f.y1, w: f.w, rotY: 0, fuori: new Vector3(0, 0, -1), piano: p }));
    // destra (facciata con finestre, sotto il cappotto)
    const muriDx = muroForato(casa, "z", Z0, Z1, y0, y1, X1 - SP, X1, foriDestra(y0), pit);
    muriDx.forEach((m) => (m.material = [estVecchio, pit, pit, pit, taglio, pit]));
    foriDestra(y0).forEach((f) => S.finestre.push({ x: X1 - SP / 2, z: f.c, y0: f.y0, y1: f.y1, w: f.w, rotY: -Math.PI / 2, fuori: new Vector3(1, 0, 0), piano: p }));
    // sinistra: fronte cieco
    const muroSx = blocco(X0, X0 + SP, y0, y1, Z0, Z1, [pit, estVecchio, pit, pit, taglio, pit]);
    casa.add(muroSx);
    // tramezzo tra le due stanze, con la porta (al secondo piano la porta si apre durante i lavori)
    const porta = { c: 1.6, w: 0.9, y0: y0, y1: y0 + 2.1 };
    const tram = muroForato(casa, "z", Z0 + SP, Z1, y0, y1, PART - 0.06, PART + 0.06, [porta], pit);
    tram.forEach((m) => (m.material = [pit, pit, pit, pit, taglio, pit]));
    if (p === 2) {
      S.tappoPorta = materialeRinnovo({ vecchio: C.vecchioMuro, nuovo: C.vecchioMuro, asse: new Vector3(0, -1, 0), da: -(y0 + 2.2), a: -(y0 - 0.1), dissolvi: true, macchie: 0.75 });
      casa.add(blocco(PART - 0.06, PART + 0.06, y0, y0 + 2.1, porta.c - porta.w / 2, porta.c + porta.w / 2, S.tappoPorta));
    }
  }
  // sottotetto: muretti d'imposta e frontone cieco sul retro
  casa.add(blocco(X0, X0 + SP, L[3], L[3] + 0.6, Z0, Z1, [estVecchio, estVecchio, solaio, solaio, taglio, solaio]));
  casa.add(blocco(X1 - SP, X1, L[3], L[3] + 0.6, Z0, Z1, [estVecchio, estVecchio, solaio, solaio, taglio, solaio]));
  {
    // frontone del retro (triangolo)
    const g = new BufferGeometry();
    const y = L[3] + 0.6;
    const v = new Float32Array([X0, y, Z0 + 0.15, X1, y, Z0 + 0.15, 0, COLMO - 0.15, Z0 + 0.15]);
    g.setAttribute("position", new BufferAttribute(v, 3));
    g.computeVertexNormals();
    const tri = new Mesh(g, estVecchio);
    tri.receiveShadow = true;
    casa.add(tri);
  }

  // ---------------- ristrutturazione: il vecchio tramezzo che si apre ----------------
  S.tramezzoMat = materialeRinnovo({ vecchio: C.vecchioMuro, nuovo: C.vecchioMuro, asse: new Vector3(0, -1, 0), da: -(L[1] + H + 0.2), a: -(L[1] - 0.2), dissolvi: true, macchie: 0.85 });
  casa.add(blocco(2.4, 2.52, L[1], L[1] + H, Z0 + SP, Z1, [S.tramezzoMat, S.tramezzoMat, S.tramezzoMat, S.tramezzoMat, taglio, S.tramezzoMat]));

  // ---------------- vecchi fili a vista ----------------
  S.filiVecchi = new Group();
  const filoMat = new MeshStandardMaterial({ color: "#1b1b1b", roughness: 0.6 });
  const fili = [
    [[-5.6, 2.7, -3.12], [-4.4, 2.35, -3.12], [-3.0, 2.62, -3.12], [-1.6, 2.3, -3.12], [-1.2, 1.4, -3.12]],
    [[0.2, 5.6, -3.12], [1.4, 5.25, -3.12], [3.0, 5.55, -3.12], [4.6, 5.2, -3.12], [5.5, 5.5, -3.12]],
    [[-5.6, 8.6, -3.12], [-4.0, 8.15, -3.12], [-2.4, 8.55, -3.12]],
  ];
  fili.forEach((pts) => {
    const curva = new CatmullRomCurve3(pts.map((p) => new Vector3(...p)));
    S.filiVecchi.add(new Mesh(new TubeGeometry(curva, 40, 0.022, 5), filoMat));
  });
  casa.add(S.filiVecchi);

  // ---------------- impianti: cavi (giallo) e tubi (blu) che si tracciano ----------------
  S.cavi = [];
  S.tubi = [];
  const zImp = Z0 + SP + 0.04;
  for (let p = 0; p < 3; p++) {
    const y = L[p];
    const cavo = [
      [-5.5, y + 2.45, zImp], [-3.6, y + 2.45, zImp], [-1.5, y + 2.45, zImp], [0.6, y + 2.45, zImp], [2.6, y + 2.45, zImp], [5.4, y + 2.45, zImp],
    ];
    const cm = materialeTraccia(C.elettrico);
    S.cavi.push(cm);
    casa.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(cavo.map((q) => new Vector3(...q)), false, "catmullrom", 0.01), 64, 0.035, 6), cm));
    // calate verso prese e interruttori
    [-4.6, -0.3, 1.2, 4.4].forEach((x, k) => {
      const yb = k % 2 ? y + 1.1 : y + 0.35;
      const calata = new CatmullRomCurve3([new Vector3(x, y + 2.45, zImp), new Vector3(x, (y + 2.45 + yb) / 2, zImp), new Vector3(x, yb, zImp)]);
      const mm = materialeTraccia(C.elettrico);
      S.cavi.push(mm);
      casa.add(new Mesh(new TubeGeometry(calata, 12, 0.03, 6), mm));
      casa.add(scatola(0.14, 0.14, 0.03, new MeshStandardMaterial({ color: "#f4f4f2", roughness: 0.5 }), x, yb, zImp + 0.02, false));
    });
  }
  // tubi: bagno (piano 1, stanza sinistra) e cucina (piano 0, stanza sinistra), colonna montante
  const tubo = (pts, r = 0.05) => {
    const tm = materialeTraccia(C.idraulico);
    S.tubi.push(tm);
    casa.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(pts.map((q) => new Vector3(...q)), false, "catmullrom", 0.02), 48, r, 8), tm));
  };
  tubo([[-1.6, 0.35, zImp + 0.04], [-1.6, 3.4, zImp + 0.04], [-1.6, 6.4, zImp + 0.04]], 0.07);
  tubo([[-1.6, 0.6, zImp + 0.04], [-3.0, 0.6, zImp + 0.04], [-4.6, 0.6, zImp + 0.04], [-4.6, 0.95, zImp + 0.04]]);
  tubo([[-1.6, 3.6, zImp + 0.04], [-2.8, 3.6, zImp + 0.04], [-4.2, 3.6, zImp + 0.04], [-4.2, 4.2, zImp + 0.04]]);
  tubo([[-1.6, 3.5, zImp + 0.04], [-1.6, 3.5, -1.2], [-3.6, 3.45, -0.5]]);
  // quadri elettrici
  S.quadri = [];
  for (let p = 0; p < 3; p++) {
    const qm = new MeshStandardMaterial({ color: "#e8e6e1", roughness: 0.4, emissive: new Color(C.elettrico), emissiveIntensity: 0 });
    S.quadri.push(qm);
    casa.add(scatola(0.42, 0.52, 0.08, qm, -0.3, L[p] + 1.55, zImp + 0.03, false));
  }

  // ---------------- pavimenti e rivestimenti ----------------
  const vecchioPav = new MeshStandardMaterial({ color: C.pavVecchio, roughness: 1 });
  const stanze = [
    // [piano, x0, x1, tipo]
    [0, X0 + SP, PART - 0.06, "gres"],
    [0, PART + 0.06, X1 - SP, "parquet"],
    [1, X0 + SP, PART - 0.06, "bagno"],
    [1, PART + 0.06, X1 - SP, "parquet"],
    [2, X0 + SP, PART - 0.06, "parquet"],
    [2, PART + 0.06, X1 - SP, "parquet"],
  ];
  const zA = Z0 + SP, zB = Z1 - 0.02;
  const voci = { gres: [], parquet: [], bagno: [], pareteBagno: [] };
  const fatt = leggera ? 1.5 : 1; // sul telefono pezzi più grandi = meno istanze
  stanze.forEach(([p, x0, x1, tipo], si) => {
    const y = L[p];
    casa.add(blocco(x0, x1, y, y + 0.012, zA, Z1, vecchioPav, false));
    const base = si / stanze.length; // ogni stanza parte un po' dopo la precedente
    const yy = y + 0.035;
    if (tipo === "parquet") {
      const lw = 0.19 * fatt, ll = 1.2 * fatt;
      let r = 0;
      for (let z = zA + lw / 2; z < zB; z += lw, r++) {
        const sfas = (seme(r + si * 31) * ll) % ll;
        for (let x = x0 - sfas; x < x1; x += ll) {
          const a = Math.max(x, x0), b = Math.min(x + ll, x1);
          if (b - a < 0.08) continue;
          voci.parquet.push({ pos: new Vector3((a + b) / 2, yy, z), sx: (b - a) - 0.012, ritardo: base * 0.82 + ((z - zA) / (zB - zA)) * 0.16 + seme(r * 7 + x) * 0.015 });
        }
      }
    } else {
      const lato = (tipo === "bagno" ? 0.3 : 0.6) * fatt;
      let r = 0;
      for (let z = zA + lato / 2; z < zB; z += lato, r++) {
        for (let x = x0 + lato / 2; x < x1; x += lato) {
          voci[tipo === "bagno" ? "bagno" : "gres"].push({ pos: new Vector3(x, yy, z), ritardo: base * 0.82 + ((z - zA) / (zB - zA)) * 0.16 + (x - x0) * 0.004 });
        }
      }
    }
  });
  // rivestimento del bagno sulla parete di fondo e sul muro cieco
  {
    const y = L[1], lato = 0.3 * fatt;
    for (let yy = y + lato / 2; yy < y + 2.2; yy += lato)
      for (let x = X0 + SP + lato / 2; x < PART - 0.06; x += lato) {
        if (x > -4.35 && x < -2.85 && yy > y + 0.9) continue; // finestra
        voci.pareteBagno.push({ pos: new Vector3(x, yy, Z0 + SP + 0.02), q: new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2), ritardo: 0.36 + ((yy - y) / 2.2) * 0.14 + x * 0.002 });
      }
    for (let yy = y + lato / 2; yy < y + 2.2; yy += lato)
      for (let z = Z0 + SP + lato / 2; z < Z1; z += lato)
        voci.pareteBagno.push({ pos: new Vector3(X0 + SP + 0.02, yy, z), q: new Quaternion().setFromAxisAngle(new Vector3(0, 0, -1), Math.PI / 2), ritardo: 0.36 + ((yy - y) / 2.2) * 0.14 + (z + 3) * 0.002 });
  }
  S.posa = [];
  const aggiungiPosa = (geo, colore, ruvido, lista, scalaX = false) => {
    if (!lista.length) return;
    const mat = materialePosa({ colore, ruvido, caduta: 0.6, durata: 0.12, varia: colore === C.rovere ? 0.22 : 0.06 });
    S.posa.push(mat);
    const mesh = posati(geo, mat, lista);
    if (scalaX) {
      const o = new Object3D();
      lista.forEach((v, i) => {
        o.position.copy(v.pos);
        o.quaternion.copy(v.q || new Quaternion());
        o.scale.set(v.sx / (1.2 * fatt), 1, 1);
        o.updateMatrix();
        mesh.setMatrixAt(i, o.matrix);
      });
    }
    casa.add(mesh);
  };
  aggiungiPosa(new BoxGeometry(1.2 * fatt, 0.04, 0.19 * fatt - 0.012), C.rovere, 0.55, voci.parquet, true);
  aggiungiPosa(new BoxGeometry(0.6 * fatt - 0.012, 0.04, 0.6 * fatt - 0.012), C.gres, 0.42, voci.gres);
  aggiungiPosa(new BoxGeometry(0.3 * fatt - 0.01, 0.035, 0.3 * fatt - 0.01), C.piastrBagno, 0.25, voci.bagno);
  aggiungiPosa(new BoxGeometry(0.3 * fatt - 0.01, 0.025, 0.3 * fatt - 0.01), "#f1f3f2", 0.2, voci.pareteBagno);

  // ---------------- serramenti: vecchi che escono, nuovi che entrano e si chiudono ----------------
  const telVecchio = new MeshStandardMaterial({ color: C.telaioVecchio, roughness: 0.85 });
  const vetroVecchio = new MeshStandardMaterial({ color: "#7d8a8c", roughness: 0.4, transparent: true, opacity: 0.55 });
  const telNuovo = new MeshStandardMaterial({ color: C.telaioNuovo, roughness: 0.45 });
  S.vetroNuovo = new MeshStandardMaterial({ color: C.vetro, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.4, emissive: new Color("#ffc98a"), emissiveIntensity: 0 });
  S.serramenti = [];
  const davanzale = new MeshStandardMaterial({ color: "#d9d6cf", roughness: 0.7 });
  S.finestre.forEach((f, i) => {
    const w = f.w, h = f.y1 - f.y0;
    const crea = (tel, vetro, nuovo) => {
      const g = new Group();
      const s = 0.07;
      g.add(scatola(w, s, 0.12, tel, 0, h / 2 - s / 2, 0, false), scatola(w, s, 0.12, tel, 0, -h / 2 + s / 2, 0, false));
      g.add(scatola(s, h, 0.12, tel, -w / 2 + s / 2, 0, 0, false), scatola(s, h, 0.12, tel, w / 2 - s / 2, 0, 0, false));
      const ante = [];
      [-1, 1].forEach((lato) => {
        const anta = new Group();
        const aw = w / 2 - s;
        const telA = new Group();
        telA.add(scatola(aw, 0.06, 0.06, tel, lato * -aw / 2, h / 2 - s - 0.03, 0, false), scatola(aw, 0.06, 0.06, tel, lato * -aw / 2, -h / 2 + s + 0.03, 0, false));
        telA.add(scatola(0.06, h - 2 * s, 0.06, tel, lato * -0.03, 0, 0, false), scatola(0.06, h - 2 * s, 0.06, tel, lato * -(aw - 0.03), 0, 0, false));
        const vetroM = scatola(aw - 0.08, h - 2 * s - 0.08, 0.012, vetro, lato * -aw / 2, 0, 0, false);
        vetroM.castShadow = false;
        anta.add(telA, vetroM);
        // cerniera sul lato esterno del vano
        anta.position.set(lato * (w / 2 - s), 0, 0);
        g.add(anta);
        ante.push({ anta, lato });
        if (!nuovo) anta.rotation.y = lato * (0.08 + seme(i + lato) * 0.25); // vecchie: storte, socchiuse
      });
      g.position.set(f.x, (f.y0 + f.y1) / 2, f.z);
      g.rotation.y = f.rotY;
      g.userData.servizio = "serramenti";
      casa.add(g);
      return { g, ante };
    };
    const vecchio = crea(telVecchio, vetroVecchio, false);
    const nuovo = crea(telNuovo, S.vetroNuovo, true);
    const sotto = scatola(w + 0.16, 0.05, 0.36, davanzale, 0, -h / 2 - 0.025, 0.12, false);
    nuovo.g.add(sotto);
    S.serramenti.push({ f, vecchio, nuovo, base: nuovo.g.position.clone(), ritardo: (f.piano * 2 + (i % 2)) / 6 });
  });

  // ---------------- tetto ----------------
  const GRONDA = L[3] + 0.6;
  const pend = Math.atan2(COLMO - GRONDA, 6.6);
  const lungFalda = Math.hypot(6.6, COLMO - GRONDA) + 0.08;
  const tavolato = new MeshStandardMaterial({ color: "#8c7560", roughness: 0.9 });
  S.falde = [];
  [-1, 1].forEach((lato) => {
    const falda = new Group();
    const lastra = new Mesh(new BoxGeometry(lungFalda, 0.22, Z1 - Z0 + 0.9), [tavolato, tavolato, tavolato, tavolato, taglio, tavolato]);
    lastra.castShadow = lastra.receiveShadow = true;
    lastra.position.set(0, -0.11, 0);
    falda.add(lastra);
    falda.position.set(lato * 3.3, (GRONDA + COLMO) / 2, -0.1);
    falda.rotation.z = -lato * pend;
    falda.userData.servizio = "rifacimento-tetti";
    casa.add(falda);
    S.falde.push(falda);
  });
  // comignolo
  casa.add(blocco(2.3, 3.0, 10.6, 12.6, -1.8, -1.1, new MeshStandardMaterial({ color: "#8f8a82", roughness: 1 })));
  // tegole: sistemate in coordinate locali della falda (x lungo la pendenza, z lungo il colmo)
  const tegolaGeo = (r) => {
    const g = new CylinderGeometry(r, r, 0.46 * fatt, 8, 1, true, 0, Math.PI);
    g.rotateZ(Math.PI / 2);
    g.rotateY(0);
    return g;
  };
  const vNuove = [], vVecchie = [];
  const passoX = 0.4 * fatt, passoZ = 0.28 * fatt;
  const nRighe = Math.floor(lungFalda / passoX), nCol = Math.floor((Z1 - Z0 + 0.8) / passoZ);
  S.falde.forEach((falda, li) => {
    falda.updateMatrixWorld(true);
    const lato = li === 0 ? -1 : 1;
    for (let r = 0; r < nRighe; r++) {
      for (let c = 0; c < nCol; c++) {
        // r=0 alla gronda, r=max al colmo
        const xl = lato * (-lungFalda / 2 + passoX / 2 + r * passoX) * -1;
        const zl = -(Z1 - Z0 + 0.8) / 2 + passoZ / 2 + c * passoZ;
        const loc = new Vector3(xl, 0.06, zl);
        const pos = loc.clone().applyMatrix4(falda.matrixWorld);
        const q = new Quaternion().setFromRotationMatrix(new Matrix4().extractRotation(falda.matrixWorld));
        q.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), lato * 0.06));
        vNuove.push({ pos, q, ritardo: (r / nRighe) * 0.85 + c * 0.004 + li * 0.02 });
        if (seme(r * 41 + c * 7 + li) > 0.07) {
          const qv = q.clone().multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), (seme(r + c * 3) - 0.5) * 0.25));
          vVecchie.push({ pos: pos.clone().add(new Vector3(0, (seme(c + r) - 0.5) * 0.04, 0)), q: qv, ritardo: (1 - r / nRighe) * 0.85 + c * 0.003, tono: seme(r * 3 + c) });
        }
      }
    }
  });
  S.tegoleNuove = materialePosa({ colore: C.coppoNuovo, ruvido: 0.75, caduta: 1.4, durata: 0.15, varia: 0.14 });
  S.tegoleVecchie = materialePosa({ colore: C.coppoVecchio, ruvido: 1, caduta: 1.6, durata: 0.15, varia: 0.35, togli: true });
  S.tegoleVecchie.userData.u.uPosa.value = 0;
  S.tegoleNuove.side = S.tegoleVecchie.side = DoubleSide;
  const tN = posati(tegolaGeo(0.155 * fatt), S.tegoleNuove, vNuove);
  const tV = posati(tegolaGeo(0.155 * fatt), S.tegoleVecchie, vVecchie);
  tN.castShadow = tV.castShadow = true;
  tN.userData.servizio = tV.userData.servizio = "rifacimento-tetti";
  casa.add(tN, tV);

  // ---------------- cappotto: la facciata destra e quella cieca si rivestono ----------------
  S.cappotti = [];
  const cappotto = (x0, x1, verso) => {
    const g = new Group();
    const t0 = verso > 0 ? 0 : -0.16, t1 = t0 + 0.16;
    const mats = [S.cappottoMat, S.cappottoMat, S.cappottoMat, S.cappottoMat, taglio, S.cappottoMat];
    for (let p = 0; p < 3; p++) {
      const y = L[p];
      const yy0 = p === 0 ? 0.12 : y, yy1 = y + 3.0;
      const pezzi = muroForato(g, "z", Z0 - 0.15, Z1, yy0, yy1, t0, t1, verso > 0 ? foriDestra(y) : [], S.cappottoMat);
      pezzi.forEach((m) => (m.material = mats));
    }
    g.add(blocco(t0, t1, L[3], L[3] + 0.6, Z0 - 0.15, Z1, mats));
    g.position.x = verso > 0 ? x1 : x0;
    g.userData.servizio = "facciate-e-cappotto-termico";
    g.traverse((o) => (o.userData.servizio = "facciate-e-cappotto-termico"));
    casa.add(g);
    S.cappotti.push({ g, verso });
  };
  cappotto(X0, X1, 1);
  cappotto(X0, X1, -1);
  S.cappotti.forEach((c) => (c.g.scale.x = 0.05));

  // ---------------- la facciata che chiude la sezione (consegna) ----------------
  S.fronte = [];
  const fronteMat = materialeRinnovo({ vecchio: "#ffffff", nuovo: "#ffffff", asse: new Vector3(0, -1, 0), da: -20, a: 20, bicolore: true, trama: 0.05 });
  fronteMat.userData.u.uFronte.value = 1;
  const vetroFronte = S.vetroNuovo;
  for (let p = 0; p < 3; p++) {
    const g = new Group();
    const y = L[p];
    const yy0 = p === 0 ? 0.12 : y - 0.3;
    const fori = [
      { c: -3.8, w: 1.3, y0: y + 0.9, y1: y + 2.25 },
      { c: -0.2, w: 1.0, y0: p === 0 ? y : y + 0.9, y1: y + 2.25 },
      { c: 3.4, w: 1.6, y0: y + 0.9, y1: y + 2.25 },
    ];
    muroForato(g, "x", X0 - 0.16, X1 + 0.16, yy0, y + H, 0, 0.3, fori, fronteMat);
    fori.forEach((f) => {
      g.add(blocco(f.c - f.w / 2 + 0.05, f.c + f.w / 2 - 0.05, f.y0 + 0.05, f.y1 - 0.05, 0.12, 0.14, vetroFronte, false));
      g.add(blocco(f.c - 0.03, f.c + 0.03, f.y0, f.y1, 0.1, 0.18, telNuovo, false));
      g.add(blocco(f.c - f.w / 2, f.c + f.w / 2, f.y0 - 0.03, f.y0, 0.1, 0.18, telNuovo, false));
      g.add(blocco(f.c - f.w / 2, f.c + f.w / 2, f.y1, f.y1 + 0.03, 0.1, 0.18, telNuovo, false));
      if (p > 0) g.add(blocco(f.c - f.w / 2 - 0.1, f.c + f.w / 2 + 0.1, f.y0 - 0.06, f.y0 - 0.02, 0.1, 0.45, davanzale, false));
    });
    // balconcino al piano primo e secondo, come nei condomini della zona
    if (p > 0) {
      g.add(blocco(1.5, 5.3, y - 0.3, y - 0.12, 0.3, 1.5, davanzale));
      g.add(blocco(1.5, 5.3, y + 0.85, y + 0.9, 1.45, 1.5, telNuovo, false));
      for (let x = 1.6; x < 5.3; x += 0.42) g.add(blocco(x, x + 0.03, y - 0.12, y + 0.85, 1.46, 1.49, telNuovo, false));
    }
    g.position.z = Z1 - 0.02;
    g.userData.servizio = "facciate-e-cappotto-termico";
    g.visible = false;
    casa.add(g);
    S.fronte.push(g);
  }
  // frontone anteriore (si chiude con l'ultimo piano)
  {
    const g = new BufferGeometry();
    const y = L[3] - 0.3;
    const v = new Float32Array([X0 - 0.16, y, 0, X1 + 0.16, y, 0, X1 + 0.16, L[3] + 0.6, 0, X0 - 0.16, y, 0, X1 + 0.16, L[3] + 0.6, 0, X0 - 0.16, L[3] + 0.6, 0, X0 - 0.16, L[3] + 0.6, 0, X1 + 0.16, L[3] + 0.6, 0, 0, COLMO - 0.12, 0]);
    g.setAttribute("position", new BufferAttribute(v, 3));
    g.computeVertexNormals();
    const tri = new Mesh(g, fronteMat);
    tri.position.z = Z1 + 0.28;
    tri.visible = false;
    tri.castShadow = true;
    tri.userData.servizio = "facciate-e-cappotto-termico";
    casa.add(tri);
    S.frontone = tri;
  }

  // ---------------- arredi (compaiono alla consegna) ----------------
  S.arredi = [];
  const arredo = (w, h, d, colore, x, y, z, r = 0.06) => {
    const m = new Mesh(new RoundedBoxGeometry(w, h, d, 2, r), new MeshStandardMaterial({ color: colore, roughness: 0.8 }));
    m.position.set(x, y + h / 2, z);
    m.castShadow = true;
    m.receiveShadow = true;
    m.scale.setScalar(0.0001);
    casa.add(m);
    S.arredi.push(m);
  };
  // piano terra: cucina e soggiorno
  arredo(3.6, 0.9, 0.62, "#e9e7e2", -3.5, L[0], -2.85);
  arredo(1.4, 0.75, 0.9, "#9a7b5b", -3.4, L[0], 0.6);
  arredo(2.4, 0.42, 0.95, "#56616a", 2.4, L[0], -1.2, 0.12);
  arredo(2.4, 0.5, 0.25, "#56616a", 2.4, L[0] + 0.4, -1.6, 0.1);
  // piano primo: bagno e soggiorno open space
  arredo(1.7, 0.55, 0.75, "#f5f6f5", -4.6, L[1], 1.8, 0.14);
  arredo(0.8, 0.82, 0.5, "#f5f6f5", -3.2, L[1], -2.95);
  arredo(2.6, 0.42, 1.0, "#b8a58e", 1.6, L[1], 0.9, 0.12);
  arredo(1.2, 0.4, 0.7, "#2f363b", 4.1, L[1], -1.4);
  // piano secondo: camere
  arredo(1.7, 0.5, 2.1, "#e7e1d6", -3.6, L[2], -1.8, 0.1);
  arredo(1.9, 0.5, 2.1, "#d9d3c8", 2.4, L[2], -1.9, 0.1);
  arredo(1.9, 0.9, 0.12, "#8a7158", 2.4, L[2], -3.08);

  // luci interne (consegna)
  S.luciInterne = [0, 1, 2].map((p) => {
    const l = new PointLight("#ffc78a", 0, 9, 1.6);
    l.position.set(0.5, L[p] + 2.3, 0.5);
    casa.add(l);
    return l;
  });

  // ---------------- polvere di cantiere nella luce ----------------
  const N = leggera ? 140 : 360;
  const pos = new Float32Array(N * 3), fase = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = X0 + 0.5 + seme(i) * (X1 - X0 - 1);
    pos[i * 3 + 1] = 0.4 + seme(i + 100) * 9;
    pos[i * 3 + 2] = Z0 + 0.5 + seme(i + 200) * 6.5;
    fase[i] = seme(i + 300) * 6.28;
  }
  const pg = new BufferGeometry();
  pg.setAttribute("position", new BufferAttribute(pos, 3));
  pg.setAttribute("aFase", new BufferAttribute(fase, 1));
  S.polvere = new Points(
    pg,
    new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      uniforms: { uT: { value: 0 }, uA: { value: 1 }, uPx: { value: 1 } },
      vertexShader: `attribute float aFase; uniform float uT; uniform float uPx; varying float vA;
        void main(){
          vec3 p = position;
          p.x += sin(uT * 0.21 + aFase) * 0.35; p.y += sin(uT * 0.13 + aFase * 1.7) * 0.25 + mod(uT * 0.05 + aFase, 1.0) * 0.2;
          p.z += cos(uT * 0.17 + aFase) * 0.3;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (2.0 + 2.5 * fract(aFase * 3.7)) * uPx * (16.0 / -mv.z);
          vA = 0.35 + 0.65 * (0.5 + 0.5 * sin(uT * 0.8 + aFase * 4.0));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `uniform float uA; varying float vA;
        void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
          gl_FragColor = vec4(vec3(1.0, 0.86, 0.66) * 0.55, (1.0 - d * 4.0) * vA * uA); }`,
    })
  );
  S.polvere.frustumCulled = false;
  scene.add(S.polvere);

  // oggetti che rispondono al passaggio del puntatore a scena finita
  S.interattivi = [];
  casa.traverse((o) => {
    if (o.isMesh && o.userData.servizio) S.interattivi.push(o);
  });
  S.serramenti.forEach((s) => s.nuovo.g.traverse((o) => { o.userData.servizio = "serramenti"; if (o.isMesh) S.interattivi.push(o); }));
  S.fronte.forEach((g) => g.traverse((o) => { if (o.isMesh) { o.userData.servizio = o.material === vetroFronte || o.material === telNuovo ? "serramenti" : "facciate-e-cappotto-termico"; S.interattivi.push(o); } }));
  S.falde.forEach((g) => g.traverse((o) => { if (o.isMesh) { o.userData.servizio = "rifacimento-tetti"; S.interattivi.push(o); } }));
  S.cappotti.forEach((c) => c.g.traverse((o) => { if (o.isMesh) { o.userData.servizio = "facciate-e-cappotto-termico"; S.interattivi.push(o); } }));
  S.interattivi.push(tN);

  return S;
}

// --------------------------------------------------------------------------
// stato -> scena (chiamato a ogni fotogramma con lo stato animato da GSAP)
// --------------------------------------------------------------------------
const ease = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : 1 - Math.pow(1 - t, 3));
const clamp01 = (t) => Math.min(1, Math.max(0, t));

export function applicaStato(S, st, tempo) {
  // ristrutturazione
  S.tramezzoMat.userData.u.uFronte.value = st.tramezzo;
  S.tappoPorta.userData.u.uFronte.value = st.porta;
  // vecchi fili
  S.filiVecchi.visible = st.vecchiFili > 0.01;
  S.filiVecchi.scale.setScalar(Math.max(0.001, st.vecchiFili));
  S.filiVecchi.position.set(0, (1 - st.vecchiFili) * 0.4, 0);
  // impianti
  S.cavi.forEach((m, i) => {
    m.userData.u.uTraccia.value = clamp01(st.cavi * 1.25 - (i % 5) * 0.06);
    m.userData.u.uLuce.value = st.impiantiLuce;
  });
  S.tubi.forEach((m, i) => {
    m.userData.u.uTraccia.value = clamp01(st.tubi * 1.2 - i * 0.05);
    m.userData.u.uLuce.value = st.impiantiLuce;
  });
  S.quadri.forEach((m, i) => (m.emissiveIntensity = clamp01(st.quadri * 3 - i) * 1.4 * (0.35 + 0.65 * st.impiantiLuce)));
  // pavimenti e rivestimenti
  S.posa.forEach((m) => (m.userData.u.uPosa.value = st.posa));
  // imbiancature
  S.pittura.forEach((m, i) => (m.userData.u.uFronte.value = st.pittura[i]));
  // serramenti
  S.serramenti.forEach((s) => {
    const fuori = s.f.fuori;
    const qv = clamp01((st.finVecchie - s.ritardo * 0.5) / 0.5);
    s.vecchio.g.visible = qv < 0.999;
    s.vecchio.g.position.set(s.base.x + fuori.x * ease(qv) * 1.6, s.base.y + ease(qv) * 0.3, s.base.z + fuori.z * ease(qv) * 1.6);
    const qn = clamp01((st.finNuove - s.ritardo * 0.5) / 0.5);
    s.nuovo.g.visible = qn > 0.001;
    const e = ease(qn);
    s.nuovo.g.position.set(s.base.x + fuori.x * (1 - e) * 1.8, s.base.y, s.base.z + fuori.z * (1 - e) * 1.8);
    const qc = clamp01((st.chiusura - s.ritardo * 0.4) / 0.6);
    s.nuovo.ante.forEach(({ anta, lato }) => (anta.rotation.y = lato * (1 - ease(qc)) * 1.1));
  });
  // tetto e facciate
  S.tegoleVecchie.userData.u.uPosa.value = st.tettoVecchio;
  S.tegoleNuove.userData.u.uPosa.value = st.tettoNuovo;
  S.cappottoMat.userData.u.uFronte.value = st.cappotto;
  S.cappotti.forEach((c) => (c.g.scale.x = 0.05 + 0.95 * ease(clamp01(st.cappotto * 1.4))));
  // consegna: la sezione si chiude
  S.fronte.forEach((g, i) => {
    const q = clamp01((st.facciata - i * 0.22) / 0.56);
    g.visible = q > 0.001;
    const e = ease(q);
    g.position.y = (1 - e) * -0.6;
    g.position.z = 3.48 + (1 - e) * 5.5;
    g.scale.setScalar(0.94 + 0.06 * e);
  });
  {
    const q = clamp01((st.facciata - 0.6) / 0.4), e = ease(q);
    S.frontone.visible = q > 0.001;
    S.frontone.position.z = 3.78 + (1 - e) * 5.5;
  }
  S.arredi.forEach((m, i) => m.scale.setScalar(Math.max(0.0001, ease(clamp01(st.arredi * 1.6 - i * 0.05)))));
  // luce: dalla mattina al tardo pomeriggio
  const sera = st.sera;
  S.cielo.material.uniforms.uSera.value = sera;
  S.fog.color.setRGB(0.86 + 0.12 * sera, 0.9 - 0.08 * sera, 0.92 - 0.3 * sera);
  S.sole.color.setRGB(1, 0.94 - 0.24 * sera, 0.85 - 0.4 * sera);
  S.sole.intensity = 3.4 - 1.6 * sera;
  S.sole.position.set(16 + 8 * sera, 24 - 13 * sera, 20 - 4 * sera);
  S.emi.intensity = 1.05 - 0.45 * sera;
  S.emi.color.setRGB(0.87 + 0.1 * sera, 0.91 - 0.05 * sera, 0.94 - 0.18 * sera);
  S.vetroNuovo.emissiveIntensity = st.luci * 2.2;
  S.lampada.emissiveIntensity = st.luci * 4;
  S.luciInterne.forEach((l) => (l.intensity = st.luci * 14));
  // polvere
  S.polvere.material.uniforms.uT.value = tempo;
  S.polvere.material.uniforms.uA.value = st.polvere;
  S.polvere.visible = st.polvere > 0.01 && S.polvereAttiva !== false;
}

export const ANCORE = {
  ristrutturazioni: [2.45, 4.9, 1.6],
  "impianti-elettrici-ed-idraulici": [-1.6, 2.8, -3.1],
  rivestimenti: [3.6, 3.35, 1.4],
  imbiancature: [-3.2, 8.1, -3.15],
  serramenti: [6.05, 5.2, 1.7],
  "rifacimento-tetti": [3.2, 11.0, 0.5],
  "facciate-e-cappotto-termico": [6.2, 2.4, -2.2],
};
