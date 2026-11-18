# Crediti e licenze

Tutto è ospitato sul sito: aprendo le pagine il browser non contatta server di terze parti.

## Librerie (solo nella scena 3D della home, `src/assets/js/3d/hero.js`)

| Libreria | Versione | Licenza | Uso |
|---|---|---|---|
| [three.js](https://threejs.org) | 0.187.0 | MIT | rendering WebGL della casa in sezione (incluso `RoundedBoxGeometry` dagli esempi) |
| [GSAP](https://gsap.com) + ScrollTrigger | 3.15.1 | [GSAP Standard "no charge" License](https://gsap.com/standard-license) (uso gratuito anche commerciale, non per strumenti che competono con GSAP) | timeline delle fasi legata allo scroll |
| [Lenis](https://lenis.darkroom.engineering) | 1.3.27 | MIT | scorrimento morbido nella home |
| [esbuild](https://esbuild.github.io) | 0.28.2 | MIT | solo per compilare il bundle (non pubblicato) |

Le note di licenza delle librerie restano in fondo al file compilato (`legalComments: "eof"`).

## Carattere

**Archivo** (Omnibus-Type), variabile su peso e larghezza, SIL Open Font License 1.1 — `src/assets/fonts/OFL-LICENSE.txt`. Il file è ridotto ai caratteri latini con `pyftsubset` (fontTools); la licenza lo consente.

## Texture

**Nessuna texture scaricata.** Il brief indicava texture CC0 di Poly Haven; dall'ambiente in cui è stato costruito il sito `polyhaven.com` non era raggiungibile, quindi intonaco macchiato, colature, grana delle pareti, bicolore della facciata, polvere e variazioni di tono di piastrelle, listelli e coppi sono **calcolati negli shader** (rumore procedurale in `strumenti/3d/src/materiali.js`). Nessuna licenza di terzi da rispettare e zero byte da scaricare.

Se in futuro si vogliono texture fotografiche: scaricarle da [polyhaven.com](https://polyhaven.com/textures) (licenza CC0, nessun obbligo di attribuzione, ma va annotata qui), a 1K in WebP, metterle in `src/assets/img/texture/` e caricarle con `TextureLoader` (consentito dalla CSP: `img-src 'self'`). Restare sotto 1,5 MB per tutta la scena.

## Foto e icone

- Foto dei cantieri e dei servizi: dell'impresa (`foto/`). Vedi nel README le foto con persone riconoscibili.
- Scansioni dei certificati: documenti dell'impresa.
- Icone e logo: disegnati per il progetto (`src/assets/img/icons.svg`).
- Fotogrammi dell'hero e immagine social: ricavati dalla scena 3D del sito.
