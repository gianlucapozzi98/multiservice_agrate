// Compila la scena 3D della home in un unico file ES module, già minificato.
// Il risultato (src/assets/js/3d/hero.js) si committa: la pipeline Python resta senza Node.
//   cd strumenti/3d && npm ci && npm run build
import { build } from "esbuild";
import { statSync } from "node:fs";

const out = new URL("../../src/assets/js/3d/hero.js", import.meta.url).pathname;
await build({
  entryPoints: [new URL("./src/hero.js", import.meta.url).pathname],
  bundle: true,
  format: "esm",
  minify: true,
  target: ["es2020", "safari15"],
  legalComments: "eof",
  outfile: out,
  logLevel: "info",
});
console.log(`hero.js: ${(statSync(out).size / 1024).toFixed(0)} KB`);
