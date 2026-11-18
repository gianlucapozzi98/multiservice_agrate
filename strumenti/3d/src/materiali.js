/*
 * Materiali "da vecchio a nuovo".
 *
 * Ogni materiale rinnovabile è un MeshStandardMaterial con un pezzo di shader in più:
 * un solo uniform, uFronte, è la posizione del fronte di luce lungo un asse del mondo.
 * Dove il fronte è passato la superficie è nuova, dove non è ancora arrivato è vecchia
 * (colore spento, macchie d'umidità procedurali, più ruvida); sul bordo brilla una
 * linea del colore del marchio. Costa una manciata di istruzioni per pixel.
 */
import { Color, MeshStandardMaterial, Vector3 } from "three";

export const MATTONE = new Color("#B4412A");

// Rumore 3D a valori (hash) e fbm a 3 ottave: macchie d'intonaco, polvere, dissolvenze
export const GLSL_RUMORE = /* glsl */ `
float msHash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float msNoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(msHash(i + vec3(0,0,0)), msHash(i + vec3(1,0,0)), f.x),
                 mix(msHash(i + vec3(0,1,0)), msHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(msHash(i + vec3(0,0,1)), msHash(i + vec3(1,0,1)), f.x),
                 mix(msHash(i + vec3(0,1,1)), msHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float msFbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 3; i++) { s += a * msNoise(p); p *= 2.03; a *= 0.5; } return s; }
`;

/**
 * Crea un materiale che passa da `vecchio` a `nuovo` quando il fronte lo attraversa.
 * opzioni:
 *   vecchio, nuovo     colori (hex)
 *   asse               direzione del fronte nel mondo (Vector3), es. (0,1,0) = dal basso in alto
 *   da, a              posizione del fronte a uFronte=0 e a uFronte=1, lungo l'asse
 *   macchie            0..1 quanto è segnato il vecchio intonaco
 *   ruvidoVecchio/Nuovo
 *   bicolore           true: il nuovo è la finitura di facciata a due toni (grigio alla base e
 *                      nelle fasce marcapiano, chiaro sopra), come il condominio di Monza
 *   dissolvi           true: dove il fronte passa il pezzo sparisce (tramezzo che si apre)
 *   trama              0..1 leggera grana sul nuovo (intonaco fine)
 */
export function materialeRinnovo(o = {}) {
  const m = new MeshStandardMaterial({
    color: 0xffffff,
    roughness: 1,
    metalness: 0,
  });
  const u = {
    uFronte: { value: 0 },
    uAsse: { value: (o.asse || new Vector3(0, 1, 0)).clone().normalize() },
    uCorsa: { value: [o.da ?? 0, o.a ?? 1] },
    uVecchio: { value: new Color(o.vecchio ?? "#8d8a83") },
    uNuovo: { value: new Color(o.nuovo ?? "#eceeed") },
    uBordo: { value: MATTONE.clone().multiplyScalar(3.2) },
    uMacchie: { value: o.macchie ?? 0.6 },
    uRuvido: { value: [o.ruvidoVecchio ?? 0.95, o.ruvidoNuovo ?? 0.82] },
    uBicolore: { value: o.bicolore ? 1 : 0 },
    uDissolvi: { value: o.dissolvi ? 1 : 0 },
    uTrama: { value: o.trama ?? 0.04 },
  };
  m.userData.u = u;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vMsPos;")
      .replace(
        "#include <worldpos_vertex>",
        `#include <worldpos_vertex>
        vec4 msW = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          msW = instanceMatrix * msW;
        #endif
        vMsPos = (modelMatrix * msW).xyz;`
      );
    sh.fragmentShader = sh.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        varying vec3 vMsPos;
        uniform float uFronte; uniform vec3 uAsse; uniform vec2 uCorsa;
        uniform vec3 uVecchio; uniform vec3 uNuovo; uniform vec3 uBordo;
        uniform float uMacchie; uniform vec2 uRuvido; uniform float uBicolore;
        uniform float uDissolvi; uniform float uTrama;
        float msT; float msD;
        ${GLSL_RUMORE}`
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        float msS = dot(vMsPos, uAsse);
        float msF = mix(uCorsa.x, uCorsa.y, uFronte);
        msD = msS - msF;
        float msN = msFbm(vMsPos * 1.7);
        // il fronte non è una riga perfetta: avanza con un bordo leggermente frastagliato
        float msDj = msD + (msN - 0.5) * 0.18;
        msT = 1.0 - smoothstep(-0.015, 0.015, msDj);
        if (uDissolvi > 0.5 && msT > 0.5) discard;
        // vecchio: colore spento, macchie d'umidità e colature verso il basso
        float msMacchia = smoothstep(0.42, 0.78, msFbm(vMsPos * vec3(0.9, 0.35, 0.9) + 3.1));
        float msColata = smoothstep(0.55, 0.9, msNoise(vec3(vMsPos.x * 6.0, vMsPos.y * 0.6, vMsPos.z * 6.0)));
        vec3 msOld = uVecchio * (1.0 - uMacchie * (0.32 * msMacchia + 0.14 * msColata)) * (0.92 + 0.16 * msN);
        // nuovo: tinta pulita con una grana appena percettibile
        vec3 msNew = uNuovo;
        if (uBicolore > 0.5) {
          float y = vMsPos.y;
          float zoccolo = 1.0 - step(2.6, y);
          // fasce marcapiano all'altezza dei solai (ogni 3 m)
          float fascia = step(fract((y + 0.12) / 3.0) * 3.0, 0.32) * step(2.0, y);
          msNew = mix(vec3(0.93, 0.935, 0.925), vec3(0.47, 0.5, 0.51), max(zoccolo, fascia));
        }
        msNew *= 1.0 - uTrama + uTrama * 2.0 * msNoise(vMsPos * 38.0);
        diffuseColor.rgb = mix(msOld, msNew, msT);`
      )
      .replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
        roughnessFactor = mix(uRuvido.x, uRuvido.y, msT);`
      )
      .replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
        float msAttivo = step(0.0005, uFronte) * step(uFronte, 0.9995);
        float msLinea = exp(-abs(msDj) * 26.0) * msAttivo;
        totalEmissiveRadiance += uBordo * msLinea * (uDissolvi > 0.5 ? 1.6 : 1.0);`
      );
  };
  // ogni combinazione di opzioni compila un programma diverso
  m.customProgramCacheKey = () => "rinnovo";
  return m;
}

/**
 * Materiale per pezzi istanziati (piastrelle, listelli di parquet, tegole) che si posano
 * uno alla volta: ogni istanza ha un ritardo (aRitardo, 0..1) e scende in posizione quando
 * uPosa lo supera. Con `togli: true` fa il contrario (le vecchie tegole si sollevano e spariscono).
 */
export function materialePosa(o = {}) {
  const m = new MeshStandardMaterial({
    color: o.colore ?? 0xffffff,
    roughness: o.ruvido ?? 0.6,
    metalness: 0,
  });
  const u = {
    uPosa: { value: 0 },
    uCaduta: { value: o.caduta ?? 0.7 },
    uDurata: { value: o.durata ?? 0.18 },
    uTogli: { value: o.togli ? 1 : 0 },
    uVaria: { value: o.varia ?? 0.12 },
    uBordo: { value: MATTONE.clone().multiplyScalar(2.2) },
  };
  m.userData.u = u;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
        attribute float aRitardo; attribute float aTono;
        uniform float uPosa; uniform float uCaduta; uniform float uDurata; uniform float uTogli;
        varying float vMsQ; varying float vMsTono;`
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        float q = clamp((uPosa - aRitardo * (1.0 - uDurata)) / uDurata, 0.0, 1.0);
        if (uTogli > 0.5) q = 1.0 - q;
        // discesa morbida con un piccolo assestamento finale ("si posa come un mattone")
        float e = 1.0 - pow(1.0 - q, 3.0);
        float rimbalzo = sin(q * 3.14159) * 0.06 * (1.0 - q);
        transformed *= max(e, 0.0001);
        transformed.y += (1.0 - e) * uCaduta + rimbalzo;
        vMsQ = q; vMsTono = aTono;`
      );
    sh.fragmentShader = sh.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        uniform float uVaria; uniform vec3 uBordo; uniform float uTogli;
        varying float vMsQ; varying float vMsTono;`
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        if (vMsQ < 0.002) discard;
        diffuseColor.rgb *= 1.0 + (vMsTono - 0.5) * uVaria * 2.0;`
      )
      .replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
        totalEmissiveRadiance += uBordo * smoothstep(0.0, 0.4, vMsQ) * (1.0 - smoothstep(0.55, 1.0, vMsQ)) * (1.0 - uTogli) * 0.9;`
      );
  };
  m.customProgramCacheKey = () => "posa";
  return m;
}

/**
 * Cavi e tubi luminosi: si tracciano lungo la loro lunghezza (uv.x della TubeGeometry).
 */
export function materialeTraccia(colore) {
  const m = new MeshStandardMaterial({ color: 0x111111, roughness: 0.5, emissive: new Color(colore) });
  const u = { uTraccia: { value: 0 }, uLuce: { value: 1 } };
  m.userData.u = u;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying float vMsL;")
      .replace("#include <uv_vertex>", "#include <uv_vertex>\nvMsL = uv.x;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vMsL; uniform float uTraccia; uniform float uLuce;")
      .replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
        if (vMsL > uTraccia) discard;
        float testa = exp(-(uTraccia - vMsL) * 40.0);
        totalEmissiveRadiance *= (1.3 + testa * 5.0) * uLuce;`
      );
  };
  m.customProgramCacheKey = () => "traccia";
  return m;
}
