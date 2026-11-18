// Ricava dalla scena 3D i fotogrammi fissi dell'hero (fallback, primo fotogramma = LCP, anteprima social)
// e la sagoma SVG dell'edificio che si traccia al caricamento.
//
//   1. python3 build.py               (dalla radice: serve public/ aggiornato con hero.js)
//   2. cd strumenti/3d && npm run fotogrammi
//   3. python3 build.py               (di nuovo: inserisce fotogrammi e sagoma nella home)
//
// Serve Playwright con Chromium (npx playwright install chromium) e Python con Pillow.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { extname, join, normalize } from "node:path";

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  console.error("Manca Playwright: npm i -g playwright && npx playwright install chromium");
  process.exit(1);
}

const RADICE = new URL("../../", import.meta.url).pathname;
const PUBBLICO = join(RADICE, "public");
const TMP = join(RADICE, "strumenti/3d/.fotogrammi");
// Tenere allineato con FOTOGRAMMI in build.py
const FOTOGRAMMI = [0.0, 0.36, 0.53, 0.76, 0.875, 1.0];
const FORMATI = { paesaggio: [1600, 900], ritratto: [720, 1280] };
const TIPI = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".avif": "image/avif", ".woff2": "font/woff2", ".json": "application/json", ".png": "image/png" };

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  const file = normalize(join(PUBBLICO, p));
  if (!file.startsWith(PUBBLICO)) return res.writeHead(403).end();
  try {
    const dati = await readFile(file);
    res.writeHead(200, { "Content-Type": TIPI[extname(file)] || "application/octet-stream" }).end(dati);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0, "127.0.0.1");
await new Promise((r) => server.once("listening", r));
const base = `http://127.0.0.1:${server.address().port}`;

await mkdir(TMP, { recursive: true });
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const sagome = {};
for (const [nome, [w, h]] of Object.entries(FORMATI)) {
  for (let i = 0; i < FOTOGRAMMI.length; i++) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await page.goto(`${base}/?fotogramma=${FOTOGRAMMI[i]}`, { waitUntil: "load" });
    await page.waitForFunction(() => document.documentElement.dataset.fotogramma === "pronto", null, { timeout: 180000 });
    await page.screenshot({ path: join(TMP, `${nome}-${i + 1}.png`) });
    if (i === 0) sagome[nome] = { w, h, d: await page.evaluate(() => window.__msSagoma) };
    await page.close();
    console.log(`${nome} ${i + 1}/${FOTOGRAMMI.length} (p = ${FOTOGRAMMI[i]})`);
  }
}
await browser.close();
server.close();
await mkdir(join(RADICE, "src/assets/img/hero"), { recursive: true });
await writeFile(join(RADICE, "src/assets/img/hero/sagoma.json"), JSON.stringify(sagome) + "\n");
execFileSync("python3", [join(RADICE, "strumenti/3d/converti_fotogrammi.py"), TMP], { stdio: "inherit" });
