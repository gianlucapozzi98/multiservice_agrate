#!/usr/bin/env python3
"""Converte i fotogrammi PNG catturati da fotogrammi.mjs in AVIF e WebP per la home,
e salva la sorgente dell'immagine social (fotogramma finale). Usa Pillow."""
import sys
from pathlib import Path
from PIL import Image

tmp = Path(sys.argv[1])
radice = Path(__file__).resolve().parents[2]
dest = radice / "src/assets/img/hero"
dest.mkdir(parents=True, exist_ok=True)
LARGHEZZE = {"paesaggio": (960, 1600), "ritratto": (720,)}
for png in sorted(tmp.glob("*.png")):
    nome = png.stem  # paesaggio-1
    orient = nome.split("-")[0]
    im = Image.open(png).convert("RGB")
    for w in LARGHEZZE[orient]:
        h = round(im.height * w / im.width)
        r = im if w == im.width else im.resize((w, h), Image.LANCZOS)
        r.save(dest / f"{nome}-{w}.webp", "WEBP", quality=76, method=6)
        r.save(dest / f"{nome}-{w}.avif", "AVIF", quality=58, speed=4)
    print("  " + nome)
finale = sorted(tmp.glob("paesaggio-*.png"))[-1]
Image.open(finale).convert("RGB").save(radice / "strumenti/3d/og-sorgente.jpg", quality=92)
print("Fotogrammi in src/assets/img/hero/, sorgente dell'immagine social in strumenti/3d/og-sorgente.jpg")
