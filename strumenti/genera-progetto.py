"""Tavola di progetto per l'animazione d'apertura della home.

Ricava dalla prima foto della hero un disegno a contorni bianchi su carta blu, con griglia,
richiami e cartiglio. All'apertura del sito main.js mostra prima questa tavola e poi, con
una linea laser, la foto vera del lavoro finito.

Uso (dalla cartella del progetto, dopo python3 build.py), con la prima foto della hero:
    python3 strumenti/genera-progetto.py foto/lavori/monza-via-viotti/dopo-01.jpg

Parte dalla versione da 1600 px già convertita in public/, così disegno e foto combaciano, e scrive
src/assets/img/progetto/lavori/monza-via-viotti/dopo-01-960.webp e -1600.webp.
build.py usa la tavola solo se esiste per quella foto: se in home cambia la prima foto e la
tavola non viene rifatta, il sito mostra subito la foto, senza animazione.

Le scritte sono solo decorative: niente misure, che non sarebbero quelle vere del cantiere.
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

RADICE = Path(__file__).resolve().parent.parent
CARTA, GRIGLIA, GRIGLIA2, TRATTO = (20, 47, 84), (30, 62, 104), (40, 76, 122), (226, 236, 248)
MATITA = (255, 196, 160)  # richiami in arancio chiaro, come una matita colorata

# richiami disegnati a mano sopra il lavoro (coordinate sulla foto da 1600 px)
RICHIAMI = {
    "lavori/monza-via-viotti/dopo-01": {
        "verticale": (1312, 96, 846, "ALTEZZA FACCIATA"),
        "orizzontale": (868, 296, 1250, "FRONTE EDIFICIO"),
        "nota": ((1060, 520), (1140, 440), (1290, 440), "ISOLAMENTO A CAPPOTTO"),
    },
}


def font(nomi, size):
    for n in nomi:
        for cartella in ("/System/Library/Fonts/Supplemental", "/Library/Fonts", "/usr/share/fonts/truetype/dejavu"):
            p = Path(cartella) / n
            if p.exists():
                return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def main(foto):
    rel = Path(foto).resolve().relative_to(RADICE / "foto").with_suffix("").as_posix()
    sorgente = RADICE / "public/assets/img" / f"{rel}-1600.webp"
    if not sorgente.exists():
        sys.exit(f"Manca {sorgente}: lancia prima python3 build.py (serve una foto larga almeno 1600 px)")
    src = Image.open(sorgente).convert("L")
    W, H = src.size
    g = src.filter(ImageFilter.GaussianBlur(1.2))
    e = ImageOps.autocontrast(g.filter(ImageFilter.FIND_EDGES), cutoff=2)
    linee = e.point(lambda v: 255 if v > 150 else 0).filter(ImageFilter.GaussianBlur(0.5))

    carta = Image.new("RGB", (W, H), CARTA)
    d = ImageDraw.Draw(carta)
    for passo, colore in ((32, GRIGLIA), (160, GRIGLIA2)):
        for x in range(0, W, passo):
            d.line([(x, 0), (x, H)], fill=colore, width=1)
        for y in range(0, H, passo):
            d.line([(0, y), (W, y)], fill=colore, width=1)
    out = Image.composite(Image.new("RGB", (W, H), TRATTO), carta, linee)
    d = ImageDraw.Draw(out)
    f = font(["Arial Narrow.ttf", "DejaVuSansCondensed.ttf"], 22)
    fb = font(["Arial Narrow Bold.ttf", "DejaVuSansCondensed-Bold.ttf"], 22)

    def tacca(x, y):
        d.line([(x - 7, y + 7), (x + 7, y - 7)], fill=MATITA, width=3)

    def etichetta(testo, fnt):
        l, t, r, b = fnt.getbbox(testo)
        lab = Image.new("RGBA", (r - l + 16, b - t + 12), CARTA + (255,))
        ImageDraw.Draw(lab).text((8 - l, 6 - t), testo, font=fnt, fill=MATITA + (255,))
        return lab

    r = RICHIAMI.get(rel, {})
    if "verticale" in r:
        x0, y0, y1, testo = r["verticale"]
        d.line([(x0, y0), (x0, y1)], fill=MATITA, width=2)
        tacca(x0, y0); tacca(x0, y1)
        for y in (y0, y1):
            d.line([(x0 - 26, y), (x0 + 12, y)], fill=MATITA, width=1)
        lab = etichetta(testo, fb).rotate(90, expand=True)
        out.paste(lab, (x0 - lab.width // 2, (y0 + y1) // 2 - lab.height // 2), lab)
    if "orizzontale" in r:
        y2, xa, xb, testo = r["orizzontale"]
        d.line([(xa, y2), (xb, y2)], fill=MATITA, width=2)
        tacca(xa, y2); tacca(xb, y2)
        lab = etichetta(testo, fb)
        out.paste(lab, ((xa + xb) // 2 - lab.width // 2, y2 - lab.height // 2), lab)
    if "nota" in r:
        a, b, c, testo = r["nota"]
        d.line([a, b, c], fill=MATITA, width=2)
        d.ellipse([(a[0] - 6, a[1] - 6), (a[0] + 6, a[1] + 6)], outline=MATITA, width=2)
        lab = etichetta(testo, f)
        out.paste(lab, (c[0] - lab.width + 8, c[1] - lab.height - 2), lab)
    # cartiglio in basso a sinistra (sotto il testo della hero, si intravede appena)
    d.rectangle([(24, H - 66), (420, H - 20)], fill=CARTA, outline=TRATTO, width=2)
    d.text((38, H - 58), "TAV. 01  ·  PROSPETTO  ·  RILIEVO", font=f, fill=TRATTO)

    for w in (1600, 960):
        dest = RADICE / "src/assets/img/progetto" / f"{rel}-{w}.webp"
        dest.parent.mkdir(parents=True, exist_ok=True)
        im = out if w == W else out.resize((w, round(H * w / W)), Image.LANCZOS)
        im.save(dest, "WEBP", quality=68, method=6)
        print(f"scritta {dest.relative_to(RADICE)} ({dest.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
