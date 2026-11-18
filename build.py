#!/usr/bin/env python3
"""
Genera il sito Multiservice nella cartella public/.

    python3 build.py

Legge:
  contenuti/*.json   dati aziendali, servizi, tipologie dei lavori
  contenuti/lavori/  un file JSON per ogni lavoro (cantiere); il nome del file è
                     l'indirizzo della pagina (merate.json -> /lavori/merate/).
                     L'impresa li gestisce dal pannello Pages CMS (vedi .pages.yml).
  src/pagine/*.html  testi delle pagine fisse (home, chi siamo, contatti, privacy...)
  src/assets/        CSS, JS, font, icone
  foto/              foto originali (JPG/PNG/WebP): vengono convertite in WebP
                     in 3 larghezze (480, 960, 1600 px) solo se nuove o modificate.

Per convertire le foto serve Pillow (pip3 install pillow). Se le foto sono già
state convertite (file in public/assets/img + src/immagini.json), Pillow non serve.
"""
import datetime
import hashlib
import html
import json
import re
import shutil
import sys
import unicodedata
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
OUT = ROOT / "public"
CONT = ROOT / "contenuti"
FOTO = ROOT / "foto"
CACHE_FILE = SRC / "immagini.json"
WIDTHS = (480, 960, 1600)
QUALITY = 78

try:
    from PIL import Image, ImageOps, ImageDraw, ImageFilter  # type: ignore
    HAS_PIL = True
except ImportError:  # pragma: no cover
    HAS_PIL = False


def load_json(name):
    with open(CONT / name, encoding="utf-8") as fh:
        return json.load(fh)


A = load_json("azienda.json")
SERVIZI = load_json("servizi.json")["servizi"]
CATEGORIE = load_json("categorie-lavori.json")["categorie"]
SERV_BY_SLUG = {s["slug"]: s for s in SERVIZI}
OGGI = datetime.date.today()
DOMINIO = A["dominio"].rstrip("/")


# --------------------------------------------------------------------------
# Lavori (cantieri): contenuti/lavori/*.json, scritti a mano o dal pannello.
# Un dato mancante o sbagliato non deve fermare il sito: il lavoro o la foto
# vengono saltati con un avviso e il resto viene pubblicato normalmente.
# --------------------------------------------------------------------------
# Ordine delle foto nella galleria: prima i risultati, poi il cantiere, poi lo stato iniziale
GALLERIA_FASI = (("foto_dopo", "dopo"), ("foto_altre", ""), ("foto_durante", "durante"), ("foto_prima", "prima"))
FASE_TESTO = {"dopo": "a lavori finiti", "durante": "durante i lavori", "prima": "prima dei lavori", "": ""}
AVVISI = []


def avviso(msg):
    AVVISI.append(msg)
    print("  ATTENZIONE: " + msg)


def in_luogo(nome):
    """«a Monza», ma «ad Agrate Brianza»."""
    return ("ad " if nome[:1].lower() == "a" else "a ") + nome


def slugify(testo):
    testo = unicodedata.normalize("NFKD", str(testo)).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", testo.lower()).strip("-")


def percorso_foto(valore, slug):
    """Percorso relativo a foto/ di un valore scritto dal pannello ("/foto/lavori/x/1.jpg").
    Restituisce None se il file non esiste."""
    if isinstance(valore, list):
        valore = valore[0] if valore else None
    if not valore or not isinstance(valore, str):
        return None
    v = urllib.parse.unquote(valore.strip().split("?")[0].split("#")[0]).lstrip("/")
    if v.startswith("foto/"):
        v = v[len("foto/"):]
    elif "/" not in v:
        v = f"lavori/{slug}/{v}"
    if not v or ".." in v.split("/") or not (FOTO / v).is_file():
        return None
    return v


def carica_lavori():
    lavori = []
    for path in sorted((CONT / "lavori").glob("*.json")):
        nome = "contenuti/lavori/" + path.name
        try:
            d = json.loads(path.read_text(encoding="utf-8"))
        except ValueError as err:
            avviso(f"{nome} non è un JSON valido ({err}): lavoro non pubblicato")
            continue
        if not isinstance(d, dict):
            avviso(f"{nome} non contiene un lavoro: saltato")
            continue
        if d.get("bozza"):
            print(f"  bozza, non pubblicata: {nome}")
            continue
        slug = slugify(path.stem)
        titolo = str(d.get("titolo") or "").strip()
        luogo = str(d.get("luogo") or "").strip()
        if not slug or not titolo or not luogo:
            avviso(f"{nome}: mancano titolo o luogo, lavoro non pubblicato")
            continue
        comune = luogo.split(" (")[0].strip()
        descrizioni = d.get("descrizioni") if isinstance(d.get("descrizioni"), dict) else {}

        def descrizione(valore, rel):
            return descrizioni.get(valore) or descrizioni.get("/foto/" + rel) or ""

        # le foto del confronto prima/dopo entrano anche in galleria (se non ci sono già):
        # così un lavoro con le foto solo nel confronto viene pubblicato lo stesso
        c = d.get("confronto") if isinstance(d.get("confronto"), dict) else {}
        foto, viste = [], set()
        for campo, fase in GALLERIA_FASI:
            valori = d.get(campo) or []
            valori = list(valori) if isinstance(valori, list) else [valori]
            if fase in ("dopo", "prima") and c.get(fase):
                valori.append(c[fase])
            for v in valori:
                rel = percorso_foto(v, slug)
                if rel is None:
                    avviso(f"{nome}: foto non trovata ({v}), non mostrata")
                elif rel not in viste:
                    viste.add(rel)
                    foto.append({"src": rel, "fase": fase, "alt": descrizione(v, rel)})
        for i, f in enumerate(foto, 1):
            if not f["alt"]:
                fase = FASE_TESTO[f["fase"]]
                f["alt"] = f"{titolo} {in_luogo(comune)}" + (f", {fase}" if fase else "") + f" (foto {i})"

        cop = percorso_foto(d.get("copertina"), slug)
        if d.get("copertina") and cop is None:
            avviso(f"{nome}: foto di copertina non trovata ({d.get('copertina')}), uso la prima foto")
        if cop:
            gia = next((f for f in foto if f["src"] == cop), None)
            copertina = {"src": cop, "alt": gia["alt"] if gia else (descrizione(d.get("copertina"), cop) or titolo)}
        elif foto:
            copertina = {"src": foto[0]["src"], "alt": foto[0]["alt"]}
        else:
            avviso(f"{nome}: nessuna foto, lavoro non pubblicato")
            continue

        confronto = None
        if c.get("prima") or c.get("dopo"):
            prima, dopo = percorso_foto(c.get("prima"), slug), percorso_foto(c.get("dopo"), slug)
            if prima and dopo:
                alt = {f["src"]: f["alt"] for f in foto}
                confronto = {
                    "prima": {"src": prima, "alt": alt.get(prima) or descrizione(c.get("prima"), prima) or f"{titolo} {in_luogo(comune)}, prima dei lavori"},
                    "dopo": {"src": dopo, "alt": alt.get(dopo) or descrizione(c.get("dopo"), dopo) or f"{titolo} {in_luogo(comune)}, a lavori finiti"},
                }
            else:
                avviso(f"{nome}: per il confronto servono entrambe le foto (prima e dopo), confronto non mostrato")

        testo = d.get("testo") or []
        if isinstance(testo, str):
            testo = re.split(r"\n\s*\n", testo)
        testo = [re.sub(r"\s*\n\s*", " ", str(p)).strip() for p in testo if str(p).strip()]
        sommario = str(d.get("sommario") or "").strip() or (testo[0][:180] if testo else f"{titolo} {in_luogo(luogo)}.")
        anno = str(d.get("anno") or "").strip() or str(d.get("inserito") or OGGI.year)[:4]
        categoria = str(d.get("categoria") or "").strip()
        if categoria not in CATEGORIE:
            avviso(f"{nome}: tipologia '{categoria}' non prevista in contenuti/categorie-lavori.json")
        servizi = []
        for s in d.get("servizi") or []:
            if s in SERV_BY_SLUG:
                servizi.append(s)
            else:
                avviso(f"{nome}: servizio '{s}' sconosciuto, ignorato")
        lavori.append({
            "slug": slug, "titolo": titolo, "luogo": luogo, "comune": comune,
            "indirizzo": str(d.get("indirizzo") or "").strip(),
            "anno": anno, "categoria": categoria,
            "tipologia": str(d.get("tipologia") or "").strip(),
            "interventi": [str(t).strip() for t in d.get("interventi") or [] if str(t).strip()],
            "servizi": servizi, "sommario": sommario, "testo": testo,
            "foto": foto, "copertina": copertina, "confronto": confronto,
            "_inserito": str(d.get("inserito") or ""), "_ordine": d.get("_ordine") or 0,
        })
    # Dal più recente: anno di fine lavori, poi data di inserimento nel sito
    lavori.sort(key=lambda l: l["slug"])
    lavori.sort(key=lambda l: l["_ordine"])
    lavori.sort(key=lambda l: l["_inserito"], reverse=True)
    lavori.sort(key=lambda l: int(l["anno"]) if l["anno"].isdigit() else 0, reverse=True)
    return lavori


LAVORI = carica_lavori()
LAV_BY_SLUG = {l["slug"]: l for l in LAVORI}


def esc(value):
    return html.escape(str(value), quote=True)


def indirizzo(sede):
    return f'{sede["via"]}, {sede["cap"]} {sede["citta"]} ({sede["provincia"]})'


WA_URL = "https://wa.me/{}?text={}".format(
    A["whatsapp"], re.sub(r"\s", "%20", A.get("whatsapp_messaggio", "")).replace(",", "%2C")
)

# --------------------------------------------------------------------------
# Immagini
# --------------------------------------------------------------------------
try:
    CACHE = json.loads(CACHE_FILE.read_text(encoding="utf-8"))
except (OSError, ValueError):
    CACHE = {}
USED_IMAGES = set()


def file_hash(path):
    return hashlib.sha1(path.read_bytes()).hexdigest()[:12]


def immagine(rel):
    """Restituisce dimensioni e URL base della foto foto/<rel>, generando le versioni WebP."""
    USED_IMAGES.add(rel)
    src = FOTO / rel
    base = "assets/img/" + rel.rsplit(".", 1)[0]
    entry = CACHE.get(rel)
    digest = file_hash(src) if src.exists() else (entry or {}).get("hash")
    if src.exists() is False and entry is None:
        raise SystemExit(f"Foto mancante: foto/{rel}")
    outputs_ok = entry is not None and all((OUT / f"{base}-{w}.webp").exists() for w in entry["widths"])
    if entry is None or entry.get("hash") != digest or not outputs_ok:
        if not HAS_PIL:
            raise SystemExit(f"Serve Pillow per convertire foto/{rel}: pip3 install pillow")
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        w0, h0 = im.size
        widths = sorted({w for w in WIDTHS if w < w0} | {min(w0, WIDTHS[-1])})
        for w in widths:
            out = OUT / f"{base}-{w}.webp"
            out.parent.mkdir(parents=True, exist_ok=True)
            resized = im if w == w0 else im.resize((w, round(h0 * w / w0)), Image.LANCZOS)
            resized.save(out, "WEBP", quality=QUALITY, method=6)
        entry = {"w": w0, "h": h0, "widths": widths, "hash": digest}
        CACHE[rel] = entry
        print(f"  foto convertita: {rel} ({w0}x{h0})")
    return dict(entry, base="/" + base)


def src_w(info, w):
    """URL di una versione della foto; ?v= cambia quando cambia la foto (cache del browser sicura)."""
    return f'{info["base"]}-{w}.webp?v={info["hash"][:8]}'


def img_url(rel, prefer=960):
    info = immagine(rel)
    w = min(info["widths"], key=lambda x: abs(x - prefer))
    return src_w(info, w)


def img_full(rel):
    info = immagine(rel)
    return src_w(info, info["widths"][-1])


def srcset_of(info):
    return ", ".join(f"{src_w(info, w)} {w}w" for w in info["widths"])


def img(rel, alt, sizes="100vw", cls="", eager=False, prefer=960):
    info = immagine(rel)
    dw = min(info["widths"], key=lambda x: abs(x - prefer))
    dh = round(info["h"] * dw / info["w"])
    attrs = 'loading="eager" fetchpriority="high"' if eager else 'loading="lazy"'
    cls_attr = f' class="{cls}"' if cls else ""
    return (
        f'<img src="{src_w(info, dw)}" srcset="{srcset_of(info)}" sizes="{sizes}" '
        f'width="{dw}" height="{dh}" alt="{esc(alt)}" {attrs} decoding="async"{cls_attr}>'
    )


def icon(name, cls="icon"):
    return f'<svg class="{cls}" aria-hidden="true" focusable="false"><use href="/assets/img/icons.svg#{name}"></use></svg>'


def senza_em(testo):
    """I titoli dei servizi nei dati evidenziano una parola con <em>: nel nuovo stile no."""
    return re.sub(r"</?em>", "", testo)


# Le vie dei cantieri non compaiono nei testi pubblici finché il cliente non decide
# (vedi README). Mettere True per mostrarle nella scheda del lavoro.
MOSTRA_VIA = False

ORDINE_SERVIZI = ["ristrutturazioni", "impianti-elettrici-ed-idraulici", "rivestimenti", "imbiancature",
                  "serramenti", "rifacimento-tetti", "facciate-e-cappotto-termico"]


# --------------------------------------------------------------------------
# Componenti riutilizzabili
# --------------------------------------------------------------------------
def brand():
    return (
        f'<a class="marchio" href="/" aria-label="{esc(A["nome"])}, torna alla home">'
        f'<svg class="marchio__logo" aria-hidden="true" focusable="false"><use href="/assets/img/icons.svg#logo-ms"></use></svg>'
        f'<span class="marchio__testo"><span class="marchio__nome">{esc(A["nome"])}</span>'
        f'<span class="marchio__tag">Impresa edile · Agrate Brianza</span></span></a>'
    )


def btn(testo, href, tipo="primario", extra="", icona=""):
    ic = icon(icona) if icona else ""
    return f'<a class="btn btn--{tipo}" href="{esc(href)}"{extra}><span class="btn__testo">{ic}{testo}</span></a>'


def titolo_righe(tag, testo, id_="", cls=""):
    """Titolo che si rivela per righe (le righe le calcola main.js)."""
    ida = f' id="{id_}"' if id_ else ""
    c = f' class="{cls}"' if cls else ""
    return f"<{tag}{ida}{c} data-righe>{testo}</{tag}>"


# ---------------- hero 3D ----------------
FASI = [
    # p da, p a, nome, testo, servizi
    (0.00, 0.10, "Com'era", "Un edificio stanco: intonaco segnato, fili a vista, serramenti da cambiare.", []),
    (0.10, 0.25, None, None, ["ristrutturazioni"]),
    (0.25, 0.42, None, None, ["impianti-elettrici-ed-idraulici"]),
    (0.42, 0.56, None, None, ["rivestimenti"]),
    (0.56, 0.68, None, None, ["imbiancature"]),
    (0.68, 0.78, None, None, ["serramenti"]),
    (0.78, 0.90, "Tetto e facciate", "Coppi nuovi fila dopo fila, cappotto termico e finitura a due toni sulle facciate.", ["rifacimento-tetti", "facciate-e-cappotto-termico"]),
    (0.90, 1.01, "Consegna", "La facciata è finita, le finestre si accendono: le chiavi passano a te.", []),
]
# fotogrammi fissi della scena (strumenti/3d/fotogrammi.mjs): valore di p e fase mostrata
FOTOGRAMMI = [(0.0, 0), (0.36, 2), (0.53, 3), (0.76, 5), (0.875, 6), (1.0, 7)]
HERO_DIR = SRC / "assets/img/hero"


def hero_fasi_json():
    out = []
    for da, a, nome, testo, servizi in FASI:
        s = SERV_BY_SLUG.get(servizi[0]) if servizi else None
        if s and not nome:
            nome = s["nome_esteso"]
        if s and not testo:
            testo = s["sommario"]
        out.append({
            "da": da, "a": a, "nome": nome, "testo": testo, "servizi": servizi,
            "url": f"/{s['slug']}/" if s else "", "link": f"Scopri: {s['nome_esteso'].lower()}" if s else "",
            "etichetta": " · ".join(SERV_BY_SLUG[x]["nome"] for x in servizi),
        })
    return out


def fotogramma_html(orient, n, eager=False, cls="", alt=""):
    """<picture> di un fotogramma della scena (AVIF + WebP), oppure "" se non ancora generato."""
    base = f"/assets/img/hero/{orient}-{n}"
    larghezze = (960, 1600) if orient == "paesaggio" else (720,)
    if not all((SRC / f"{base}-{w}.webp".lstrip("/")).exists() for w in larghezze):
        return ""
    srcset = lambda ext: ", ".join(f'{asset(f"{base}-{w}.{ext}")} {w}w' for w in larghezze)
    w0 = larghezze[-1]
    h0 = round(w0 * 9 / 16) if orient == "paesaggio" else round(w0 * 16 / 9)
    attr = 'loading="eager" fetchpriority="high"' if eager else 'loading="lazy"'
    return srcset("avif"), srcset("webp"), w0, h0, attr


def hero_scena():
    fasi = hero_fasi_json()
    mestieri = []
    for slug in ORDINE_SERVIZI:
        s = SERV_BY_SLUG[slug]
        mestieri.append(
            f'<li><a href="/{slug}/" data-servizio="{slug}" data-nome="{esc(s["nome_esteso"])}">'
            f'<span class="hero__punto" aria-hidden="true"></span>{esc(s["nome"])}</a></li>'
        )
    # primo fotogramma (LCP) e sagoma; se i fotogrammi non ci sono ancora, la scena parte su fondo pieno
    poster, fotogrammi, sagome = "", [], ""
    p1, r1 = fotogramma_html("paesaggio", 1, True), fotogramma_html("ritratto", 1, True)
    if p1 and r1:
        poster = (
            '<picture class="hero__poster">'
            f'<source type="image/avif" media="(max-aspect-ratio: 1/1)" srcset="{r1[0]}" sizes="100vw">'
            f'<source type="image/webp" media="(max-aspect-ratio: 1/1)" srcset="{r1[1]}" sizes="100vw">'
            f'<source type="image/avif" srcset="{p1[0]}" sizes="100vw">'
            f'<img src="{asset("/assets/img/hero/paesaggio-1-1600.webp")}" srcset="{p1[1]}" sizes="100vw" width="1600" height="900" alt="" {p1[4]} decoding="async">'
            "</picture>"
        )
        for n in range(2, len(FOTOGRAMMI) + 1):
            p, r = fotogramma_html("paesaggio", n), fotogramma_html("ritratto", n)
            if not (p and r):
                continue
            fotogrammi.append(
                f'<div class="hero__fotogramma" data-fase="{FOTOGRAMMI[n - 1][1]}"><picture>'
                f'<source type="image/avif" media="(max-aspect-ratio: 1/1)" data-srcset="{r[0]}" sizes="100vw">'
                f'<source type="image/avif" data-srcset="{p[0]}" sizes="100vw">'
                f'<img data-src="{asset(f"/assets/img/hero/paesaggio-{n}-1600.webp")}" data-srcset="{p[1]}" sizes="100vw" width="1600" height="900" alt="" decoding="async">'
                "</picture></div>"
            )
        monza = LAV_BY_SLUG.get("monza-via-viotti")
        if monza:
            info = immagine("lavori/monza-via-viotti/dopo-01.jpg")
            fotogrammi.append(
                f'<div class="hero__fotogramma hero__fotogramma--vero" data-fase="7" data-didascalia="Un cantiere vero: facciate con cappotto termico a Monza">'
                f'<img data-src="{src_w(info, 1600)}" data-srcset="{srcset_of(info)}" sizes="100vw" width="1600" height="{round(info["h"] * 1600 / info["w"])}" alt="" decoding="async"></div>'
            )
    try:
        sag = json.loads((HERO_DIR / "sagoma.json").read_text(encoding="utf-8"))
        for orient, d in sag.items():
            sagome += (
                f'<svg class="hero__sagoma hero__sagoma--{orient}" viewBox="0 0 {d["w"]} {d["h"]}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">'
                f'<path d="{d["d"]}" pathLength="1"/></svg>'
            )
    except (OSError, ValueError):
        pass
    descr = ("Animazione: un condominio di tre piani visto in sezione, prima grigio e segnato dal tempo, "
             "viene rinnovato un mestiere alla volta: ristrutturazione, impianti, pavimenti e rivestimenti, "
             "imbiancature, serramenti, tetto e facciata con cappotto termico, fino alla consegna.")
    return f"""<section class="hero" id="hero" data-hero data-hero-js="{asset("/assets/js/3d/hero.js")}" aria-labelledby="hero-title">
<div class="hero__fisso">
  <div class="hero__scena" aria-hidden="true">
    {poster}
    <div class="hero__fotogrammi">{"".join(fotogrammi)}</div>
    {sagome}
    <div class="hero__canvas"></div>
    <div class="hero__velo"></div>
  </div>
  <div class="contenitore hero__griglia">
    <div class="hero__intro">
      <h1 id="hero-title" class="hero__titolo">Un cantiere, un solo interlocutore.</h1>
      <p class="hero__sotto">Impresa edile ad Agrate Brianza. Ristrutturazioni chiavi in mano a Monza, in Brianza e a Milano.</p>
      <div class="azioni">
        {btn("Richiedi un sopralluogo", "#preventivo", "primario", ' data-magnetico')}
        {btn(esc(A["telefono"]), "tel:" + A["telefono_href"], "secondario", ' aria-label="Chiama il ' + esc(A["telefono"]) + '"', "i-telefono")}
      </div>
    </div>
    <div class="hero__fase" aria-hidden="true">
      <p class="hero__fase-nome" data-fase-nome></p>
      <p class="hero__fase-testo" data-fase-testo></p>
      <a class="link" data-fase-link href="/servizi/" tabindex="-1" hidden>Scopri il servizio</a>
    </div>
  </div>
  <nav class="hero__mestieri" aria-label="I sette mestieri di Multiservice"><ol>{"".join(mestieri)}</ol></nav>
  <div class="hero__piede contenitore">
    <a class="hero__salta link" href="#interlocutore">Salta l'animazione</a>
    <span class="hero__scorri" aria-hidden="true">Scorri: la casa si rinnova</span>
    <div class="hero__comandi" hidden>
      <button class="hero__btn" type="button" data-hero-prec aria-label="Fotogramma precedente">{icon("i-freccia-sx")}</button>
      <button class="hero__btn" type="button" data-hero-pausa aria-pressed="false">Pausa</button>
      <button class="hero__btn" type="button" data-hero-succ aria-label="Fotogramma successivo">{icon("i-freccia")}</button>
    </div>
    <div class="hero__avanzamento" aria-hidden="true"><span></span></div>
  </div>
  <div class="hero__etichetta" aria-hidden="true"><span class="hero__etichetta-punto"></span><span class="hero__etichetta-linea"></span><span class="hero__etichetta-testo"></span></div>
  <div class="hero__suggerimento" aria-hidden="true"></div>
  <p class="sr-only">{descr}</p>
</div>
</section>
<script type="application/json" id="hero-fasi">{ld_json(fasi)}</script>"""


# ---------------- un solo interlocutore: i 7 mestieri ----------------
def mestieri():
    righe = []
    for i, slug in enumerate(ORDINE_SERVIZI):
        s = SERV_BY_SLUG[slug]
        info = immagine(s["copertina"]["src"])
        piccola = src_w(info, min(info["widths"], key=lambda x: abs(x - 480)))
        mod = " mestiere--impianti" if slug == "impianti-elettrici-ed-idraulici" else ""
        righe.append(
            f'<li class="mestiere{mod}" data-rivela><a href="/{slug}/" data-foto="{piccola}" data-alt="{esc(s["copertina"]["alt"])}">'
            f'<span class="mestiere__icona">{icon(s["icona"])}</span>'
            f'<span class="mestiere__nome">{esc(s["nome_esteso"])}</span>'
            f'<span class="mestiere__testo">{esc(s["sommario"])}</span>'
            f'<span class="mestiere__mini">{img(s["copertina"]["src"], "", "120px", prefer=480)}</span></a></li>'
        )
    return ('<ol class="mestieri">' + "".join(righe) + "</ol>"
            '<div class="mestieri__foto" aria-hidden="true"><img alt="" decoding="async"><span>Vedi</span></div>')


# ---------------- confronto prima / dopo trascinabile ----------------
def confronto(slug, grande="si"):
    l = LAV_BY_SLUG.get(slug)
    if not l or not l["confronto"]:
        return ""
    c = l["confronto"]
    sizes = "100vw" if grande == "si" else "(max-width: 900px) 100vw, 80vw"
    return (
        f'<div class="confronto{" confronto--grande" if grande == "si" else ""}" data-confronto>'
        f'<div class="confronto__dopo">{img(c["dopo"]["src"], c["dopo"]["alt"], sizes, prefer=1600)}</div>'
        f'<div class="confronto__prima" aria-hidden="false"><div class="confronto__prima-in">{img(c["prima"]["src"], c["prima"]["alt"], sizes, prefer=1600)}</div></div>'
        '<div class="confronto__bordo" aria-hidden="true"><span class="confronto__maniglia">'
        f'{icon("i-freccia-sx")}{icon("i-freccia")}</span></div>'
        '<span class="confronto__etichetta confronto__etichetta--prima" aria-hidden="true">Prima</span>'
        '<span class="confronto__etichetta confronto__etichetta--dopo" aria-hidden="true">Dopo</span>'
        '<input class="confronto__range" type="range" min="0" max="100" value="50" step="1" '
        'aria-label="Confronto tra prima e dopo: sposta per vedere più foto del prima o del dopo">'
        "</div>"
    )


def tre_momenti(slug):
    """Prima / durante / dopo: una foto per momento, nell'ordine dei dati."""
    l = LAV_BY_SLUG.get(slug)
    if not l:
        return ""
    voci = []
    for fase, nome in (("prima", "Prima"), ("durante", "Durante"), ("dopo", "Dopo")):
        f = next((x for x in l["foto"] if x["fase"] == fase), None)
        if f:
            voci.append(
                f'<figure class="momento" data-rivela><a class="momento__img foto-vedi" href="{img_full(f["src"])}" data-lightbox="m-{slug}" data-caption="{esc(f["alt"])}">'
                f'{img(f["src"], f["alt"], "(max-width: 700px) 100vw, 33vw", prefer=960)}</a>'
                f'<figcaption><span class="quota">{nome}</span>{esc(f["alt"])}</figcaption></figure>'
            )
    return '<div class="momenti">' + "".join(voci) + "</div>"


# ---------------- i cantieri: scorrimento orizzontale ----------------
def cantieri():
    cards = []
    n = len(LAVORI)
    for i, l in enumerate(LAVORI):
        info = immagine(l["copertina"]["src"])
        largo = " cantiere--largo" if info["w"] >= info["h"] * 1.2 else ""
        dati = [l["luogo"], l["anno"]] + ([l["tipologia"]] if l["tipologia"] else [])
        interventi = "".join(f"<li>{esc(t)}</li>" for t in l["interventi"][:4])
        cards.append(
            f'<li class="cantiere{largo}"><a href="/lavori/{l["slug"]}/">'
            f'<span class="cantiere__img">{img(l["copertina"]["src"], l["copertina"]["alt"], "(max-width: 700px) 85vw, 46vw", prefer=960)}</span>'
            f'<span class="cantiere__corpo"><span class="quota">{" · ".join(esc(d) for d in dati)}</span>'
            f'<span class="cantiere__titolo">{esc(l["titolo"])}</span>'
            f'<span class="cantiere__info">{len(l["foto"])} foto{" · prima e dopo" if l["confronto"] else ""}</span>'
            + (f'<ul class="cantiere__interventi">{interventi}</ul>' if interventi else "")
            + "</span></a></li>"
        )
    tacche = "".join('<span></span>' for _ in range(n))
    return (
        '<div class="cantieri__vista"><ol class="cantieri__binario">' + "".join(cards) + "</ol></div>"
        f'<div class="cantieri__quote" aria-hidden="true"><span class="cantieri__tacche">{tacche}</span><span class="cantieri__riempi"></span>'
        f'<span class="quota cantieri__conta"><span data-cantiere-n>1</span> / {n}</span></div>'
    )


# ---------------- elenchi di lavori e servizi ----------------
def work_card(l, sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw", extra=""):
    dati = [l["luogo"], l["anno"]]
    return (
        f'<li class="lavoro" data-cat="{esc(l["categoria"])}"{extra}><a href="/lavori/{l["slug"]}/">'
        f'<span class="lavoro__img foto-vedi">{img(l["copertina"]["src"], l["copertina"]["alt"], sizes)}</span>'
        f'<span class="quota">{" · ".join(esc(d) for d in dati)} · {esc(CATEGORIE.get(l["categoria"], ""))}</span>'
        f'<span class="lavoro__titolo">{esc(l["titolo"])}</span>'
        f'<span class="lavoro__testo">{esc(l["sommario"])}</span></a></li>'
    )


def lavori_griglia():
    conta = {}
    for l in LAVORI:
        conta[l["categoria"]] = conta.get(l["categoria"], 0) + 1
    filtri = [f'<button class="filtro" type="button" data-filter="tutti" aria-pressed="true">Tutti <span class="quota">{len(LAVORI)}</span></button>']
    for key, label in CATEGORIE.items():
        if conta.get(key):
            filtri.append(f'<button class="filtro" type="button" data-filter="{key}" aria-pressed="false">{esc(label)} <span class="quota">{conta[key]}</span></button>')
    cards = "".join(work_card(l, extra=' data-rivela') for l in LAVORI)
    return (
        f'<div class="filtri" role="group" aria-label="Filtra i lavori per tipologia">{"".join(filtri)}</div>'
        f'<p class="sr-only" role="status" aria-live="polite" data-filtri-stato></p>'
        f'<ol class="lavori">{cards}</ol>'
    )


def servizi_righe(escludi=""):
    out = ['<ol class="righe-servizi">']
    for slug in ORDINE_SERVIZI:
        if slug == escludi:
            continue
        s = SERV_BY_SLUG[slug]
        out.append(
            f'<li data-rivela><a class="riga-servizio" href="/{slug}/"><span class="riga-servizio__icona">{icon(s["icona"])}</span>'
            f'<span class="riga-servizio__nome">{esc(s["nome_esteso"])}</span><span class="riga-servizio__testo">{esc(s["sommario"])}</span></a></li>'
        )
    out.append("</ol>")
    return "".join(out)


def stelle(n):
    return "".join(icon("i-stella") for _ in range(int(n)))


def recensioni():
    out = ['<div class="recensioni">']
    for r in A["recensioni"]:
        out.append(
            f'<figure class="recensione" data-rivela>'
            f'<div class="recensione__stelle" role="img" aria-label="{r["voto"]} stelle su 5">{stelle(r["voto"])}</div>'
            f'<blockquote><p>{esc(r["testo"])}</p></blockquote>'
            f'<figcaption><strong>{esc(r["autore"])}</strong> <span class="quota">Recensione su {esc(r["fonte"])}</span></figcaption></figure>'
        )
    out.append("</div>")
    return "".join(out)


def certificazioni_card():
    out = ['<div class="certificati">']
    for c in A["certificazioni"]:
        out.append(
            f'<article class="certificato" data-rivela>'
            f'<a class="certificato__scan foto-vedi" href="{img_full(c["immagine"])}" data-lightbox="cert-home" data-caption="{esc(c["titolo"])} · certificato n. {esc(c["numero"])}">'
            f'{img(c["immagine"], "Scansione del certificato " + c["titolo"], "(max-width: 700px) 40vw, 180px", prefer=480)}</a>'
            f'<div><h3>{esc(c["titolo"])}</h3><p>{esc(c["sottotitolo"])}</p>'
            f'<dl class="dati"><div><dt>Certificato</dt><dd>n. {esc(c["numero"])}</dd></div><div><dt>Ente</dt><dd>{esc(c["ente"])}</dd></div>'
            f'<div><dt>Valido fino al</dt><dd>{esc(c["scadenza"])}</dd></div></dl></div></article>'
        )
    out.append("</div>")
    return "".join(out)


def certificazioni_doc():
    out = []
    for c in A["certificazioni"]:
        out.append(
            f'<article class="cert-doc" id="{c["id"]}">'
            f'<a class="cert-doc__img foto-vedi" href="{img_full(c["immagine"])}" data-lightbox="certificati" data-caption="{esc(c["titolo"])} · certificato n. {esc(c["numero"])}" data-muro>'
            f'{img(c["immagine"], "Certificato " + c["titolo"] + " di " + A["ragione_sociale"], "(max-width: 800px) 90vw, 40vw")}</a>'
            f'<div class="cert-doc__testo" data-rivela><p class="quota">{esc(c["sottotitolo"])}</p><h2>{esc(c["titolo"])}</h2>'
            f'<p>{esc(c["campo"])}.</p>'
            f'<dl class="dati"><div><dt>Numero</dt><dd>{esc(c["numero"])}</dd></div><div><dt>Ente</dt><dd>{esc(c["ente"])}</dd></div>'
            f'<div><dt>Prima emissione</dt><dd>{esc(c["emissione"])}</dd></div><div><dt>Scadenza</dt><dd>{esc(c["scadenza"])}</dd></div></dl>'
            f'<p><a class="link" href="{img_full(c["immagine"])}" data-lightbox="certificati-link" data-caption="{esc(c["titolo"])}">Apri la scansione del certificato</a></p></div></article>'
        )
    return "".join(out)


def zone_elenco():
    return '<ul class="zone">' + "".join(f'<li data-rivela>{esc(z)}</li>' for z in A["zone"]) + "</ul>"


def orari_lista():
    return "".join(f'<li><span>{esc(o["giorni"])}</span> <strong>{esc(o["ore"])}</strong></li>' for o in A["orari"])


def contatti_lista():
    sede = A["sede_operativa"]
    items = [
        ("tel:" + A["telefono_href"], "i-telefono", "Ufficio", A["telefono"]),
        (WA_URL, "i-whatsapp", "Cellulare e WhatsApp", A["cellulare"]),
        ("mailto:" + A["email"], "i-mail", "Email", A["email"]),
        (A["google_maps"], "i-pin", "Sede operativa", f'{sede["via"]}, {sede["citta"]}'),
    ]
    out = ['<ul class="recapiti">']
    for href, ic, label, value in items:
        ext = ' target="_blank" rel="noopener noreferrer"' if href.startswith("http") else ""
        out.append(
            f'<li><a class="recapito" href="{esc(href)}"{ext}>{icon(ic)}'
            f'<span><span class="quota">{esc(label)}</span><strong>{esc(value)}</strong></span></a></li>'
        )
    ore = "<br>".join(f'{esc(o["giorni"])}: {esc(o["ore"])}' for o in A["orari"])
    out.append(f'<li><span class="recapito">{icon("i-orologio")}<span><span class="quota">Orari</span><strong>{ore}</strong></span></span></li>')
    out.append("</ul>")
    return "".join(out)


def form(titolo="Richiedi un sopralluogo", sottotitolo="Ti ricontattiamo negli orari di ufficio per fissare il sopralluogo, senza impegno.", servizio=""):
    opts = ['<option value="">Seleziona…</option>']
    for slug in ORDINE_SERVIZI:
        s = SERV_BY_SLUG[slug]
        sel = " selected" if s["slug"] == servizio else ""
        opts.append(f'<option value="{esc(s["nome_esteso"])}"{sel}>{esc(s["nome_esteso"])}</option>')
    opts.append('<option value="Altro">Altro</option>')
    uid = "f" + hashlib.md5((titolo + servizio).encode()).hexdigest()[:5]
    return f"""<div class="modulo" data-rivela>
<h3 class="modulo__titolo">{esc(titolo)}</h3><p class="modulo__sotto">{esc(sottotitolo)}</p>
<form class="form" action="/api/contatti" method="post" novalidate data-contact-form>
  <div class="campo"><label for="{uid}-nome">Nome e cognome <span aria-hidden="true">*</span></label><input id="{uid}-nome" name="nome" type="text" autocomplete="name" maxlength="100" required><span class="campo__riga" aria-hidden="true"></span></div>
  <div class="campo"><label for="{uid}-tel">Telefono <span aria-hidden="true">*</span></label><input id="{uid}-tel" name="telefono" type="tel" autocomplete="tel" inputmode="tel" maxlength="25" required><span class="campo__riga" aria-hidden="true"></span></div>
  <div class="campo"><label for="{uid}-email">Email</label><input id="{uid}-email" name="email" type="email" autocomplete="email" maxlength="150"><span class="campo__riga" aria-hidden="true"></span></div>
  <div class="campo"><label for="{uid}-comune">Comune dell'intervento</label><input id="{uid}-comune" name="comune" type="text" autocomplete="address-level2" maxlength="80"><span class="campo__riga" aria-hidden="true"></span></div>
  <div class="campo campo--pieno"><label for="{uid}-serv">Tipo di intervento</label><select id="{uid}-serv" name="servizio">{"".join(opts)}</select><span class="campo__riga" aria-hidden="true"></span></div>
  <div class="campo campo--pieno"><label for="{uid}-msg">Descrivi il lavoro <span aria-hidden="true">*</span></label><textarea id="{uid}-msg" name="messaggio" maxlength="3000" required rows="4" placeholder="Es. ristrutturazione di un bilocale di 60 m², rifacimento del bagno e dell'impianto elettrico."></textarea><span class="campo__riga" aria-hidden="true"></span></div>
  <div class="hp" aria-hidden="true"><label for="{uid}-web">Lascia vuoto questo campo</label><input id="{uid}-web" name="sito_web" type="text" tabindex="-1" autocomplete="off"></div>
  <input type="hidden" name="t" value="">
  <label class="spunta" for="{uid}-privacy"><input id="{uid}-privacy" name="privacy" type="checkbox" required><span>Ho letto l'<a href="/privacy-policy/" target="_blank">informativa privacy</a> e chiedo di essere ricontattato per questa richiesta. <span aria-hidden="true">*</span></span></label>
  <div class="form__invio"><button class="btn btn--primario btn--pieno" type="submit" data-magnetico><span class="btn__testo">Invia la richiesta</span></button>
  <p class="form__nota">I campi con * sono obbligatori. Usiamo i tuoi dati solo per rispondere a questa richiesta.</p></div>
  <div class="form__stato" role="status" aria-live="polite" tabindex="-1" hidden></div>
</form></div>"""


def sezione_contatto(titolo="Richiedi un sopralluogo.", servizio=""):
    return f"""<section class="sezione sezione--scura" id="preventivo" aria-labelledby="preventivo-title">
<div class="contenitore contatto">
  <div class="contatto__intro">
    {titolo_righe("h2", esc(titolo), "preventivo-title")}
    <p class="intro">Raccontaci cosa vuoi fare. Un tecnico Multiservice viene a vedere, poi ricevi un preventivo con lavorazioni, costi e tempi. Senza impegno.</p>
    {contatti_lista()}
    <p class="contatto__legale quota">{esc(A["ragione_sociale"])} · P.IVA {esc(A["partita_iva"])} · Sede legale {esc(A["sede_legale"]["citta"])} ({esc(A["sede_legale"]["provincia"])})</p>
  </div>
  {form(servizio=servizio)}
</div></section>"""


def mappa():
    return f"""<div class="mappa" data-map-src="{esc(A["mappa_embed"])}">
  <div class="mappa__segnaposto">
    {icon("i-mappa", "icon icon--grande")}
    <strong>{esc(indirizzo(A["sede_operativa"]))}</strong>
    <p>La mappa è fornita da Google: caricandola, Google riceve alcuni dati di navigazione (come l'indirizzo IP) e può usare cookie. <a class="link" href="/cookie-policy/">Maggiori informazioni</a>.</p>
    <div class="azioni"><button class="btn btn--secondario" type="button" data-map-load><span class="btn__testo">Mostra la mappa</span></button>
    <a class="link" href="{esc(A["google_maps"])}" target="_blank" rel="noopener noreferrer">Apri in Google Maps</a></div>
  </div>
</div>"""


def galleria(items, nome, fasi=False):
    out = ['<ul class="galleria">']
    etichette = {"prima": "Prima", "durante": "Durante", "dopo": "Dopo"}
    for i, it in enumerate(items):
        fase = it.get("fase", "") if fasi else ""
        cap = it["alt"] + (f" · {etichette[fase]}" if fase in etichette else "")
        grande = " galleria__voce--grande" if i % 5 == 0 else ""
        sizes = "(max-width: 700px) 100vw, 50vw" if grande else "(max-width: 700px) 50vw, 25vw"
        out.append(
            f'<li class="galleria__voce{grande}" data-rivela><a class="foto-vedi" href="{img_full(it["src"])}" data-lightbox="{nome}" data-caption="{esc(cap)}">'
            f'{img(it["src"], it["alt"], sizes, prefer=960 if grande else 480)}</a>'
            + (f'<span class="quota">{etichette[fase]}</span>' if fase in etichette else "")
            + "</li>"
        )
    out.append("</ul>")
    return "".join(out)


def gallerie_servizi():
    out = ['<ol class="lavori lavori--gallerie">']
    for slug in ["imbiancature", "rivestimenti", "rifacimento-tetti"]:
        s = SERV_BY_SLUG[slug]
        out.append(
            f'<li class="lavoro" data-rivela><a href="/{slug}/#galleria"><span class="lavoro__img foto-vedi">{img(s["copertina"]["src"], s["copertina"]["alt"], "(max-width: 700px) 100vw, 33vw")}</span>'
            f'<span class="quota">{len(s["galleria"])} foto</span><span class="lavoro__titolo">{esc(s["nome_esteso"])}</span>'
            f'<span class="lavoro__testo">{esc(s["sommario"])}</span></a></li>'
        )
    out.append("</ol>")
    return "".join(out)


def chiusura(titolo="Il prossimo cantiere può essere casa tua.", testo="Chiamaci o scrivici: fissiamo un sopralluogo e ti prepariamo un preventivo chiaro, senza impegno."):
    return f"""<section class="chiusura" aria-label="Contatti rapidi">
  <div class="contenitore chiusura__in">
    <div>{titolo_righe("h2", esc(titolo))}<p>{esc(testo)}</p></div>
    <div class="azioni">{btn("Richiedi un sopralluogo", "#preventivo", "primario", " data-magnetico")}
    {btn("WhatsApp", WA_URL, "secondario", ' target="_blank" rel="noopener noreferrer"', "i-whatsapp")}</div>
  </div>
  <div class="muro" aria-hidden="true"></div>
</section>"""


COMPONENTI = {
    "hero_scena": hero_scena,
    "mestieri": mestieri,
    "confronto": confronto,
    "tre_momenti": tre_momenti,
    "cantieri": cantieri,
    "lavori_griglia": lavori_griglia,
    "servizi_righe": servizi_righe,
    "recensioni": recensioni,
    "certificazioni_card": certificazioni_card,
    "certificazioni_doc": certificazioni_doc,
    "zone_elenco": zone_elenco,
    "contatti_lista": contatti_lista,
    "form": form,
    "sezione_contatto": sezione_contatto,
    "mappa": mappa,
    "chiusura": chiusura,
    "gallerie_servizi": gallerie_servizi,
    "img": lambda rel, alt="", sizes="100vw", cls="", eager="": img(rel, alt, sizes, cls, eager == "eager"),
    "icon": icon,
    "orari_lista": orari_lista,
    "btn": lambda testo, href, tipo="primario", icona="": btn(testo, href, tipo, "", icona),
}

# Valori semplici disponibili nelle pagine come {{ chiave }}
VALORI = {
    "nome": A["nome"],
    "ragione_sociale": A["ragione_sociale"],
    "telefono": A["telefono"],
    "telefono_href": A["telefono_href"],
    "cellulare": A["cellulare"],
    "cellulare_href": A["cellulare_href"],
    "whatsapp_url": WA_URL,
    "email": A["email"],
    "pec": A.get("pec") or "",
    "sede_operativa": indirizzo(A["sede_operativa"]),
    "sede_legale": indirizzo(A["sede_legale"]),
    "partita_iva": A["partita_iva"],
    "anno_fondazione": str(A["anno_fondazione"]),
    "google_recensioni": A["google_recensioni"],
    "google_maps": A["google_maps"],
    "facebook": A["facebook"],
    "n_lavori": str(len(LAVORI)),
    "data_aggiornamento": A["policy_aggiornate_il"],
}


def render_template(text):
    text = re.sub(r"<!--(?!\[).*?-->\s*", "", text, flags=re.S)  # i commenti restano nei sorgenti, non nel sito

    def comp(m):
        name, _, rest = m.group(1).strip().partition(" ")
        args = [a.strip() for a in rest.split("|")] if rest.strip() else []
        if name not in COMPONENTI:
            raise SystemExit(f"Componente sconosciuto: {name}")
        return COMPONENTI[name](*args)

    text = re.sub(r"\{\{>\s*(.+?)\s*\}\}", comp, text, flags=re.S)

    def val(m):
        key = m.group(1)
        if key not in VALORI:
            raise SystemExit(f"Valore sconosciuto: {key}")
        return esc(VALORI[key])

    return re.sub(r"\{\{\s*([a-z_]+)\s*\}\}", val, text)


# --------------------------------------------------------------------------
# Layout (head, header, footer)
# --------------------------------------------------------------------------
ASSET_VERSION = {}


def asset(path):
    if path not in ASSET_VERSION:
        ASSET_VERSION[path] = hashlib.sha1((SRC / path.lstrip("/")).read_bytes()).hexdigest()[:10]
    return f"{path}?v={ASSET_VERSION[path]}"


def nav_html(attivo, form_href):
    drop = []
    for slug in ORDINE_SERVIZI:
        s = SERV_BY_SLUG[slug]
        drop.append(f'<li><a href="/{slug}/">{icon(s["icona"])}<span>{esc(s["nome_esteso"])}</span></a></li>')
    drop.append('<li class="tendina__tutti"><a class="link" href="/servizi/">Tutti i servizi</a></li>')

    def cur(key):
        return ' aria-current="page"' if attivo == key else ""

    return f"""<nav class="nav" aria-label="Menu principale">
  <ul class="nav__lista">
    <li class="nav__voce--tendina"><button class="nav__link" type="button" aria-expanded="false" aria-controls="tendina-servizi"{' data-corrente="true"' if attivo == "servizi" else ""}>Servizi {icon("i-chevron")}</button>
      <ul class="tendina" id="tendina-servizi">{"".join(drop)}</ul></li>
    <li><a class="nav__link" href="/lavori/"{cur("lavori")}>Lavori</a></li>
    <li><a class="nav__link" href="/chi-siamo/"{cur("chi-siamo")}>Chi siamo</a></li>
    <li><a class="nav__link" href="/certificazioni/"{cur("certificazioni")}>Certificazioni</a></li>
    <li><a class="nav__link" href="/contatti/"{cur("contatti")}>Contatti</a></li>
  </ul>
</nav>
<div class="testata__azioni">
  <a class="testata__tel quota" href="tel:{A["telefono_href"]}">{icon("i-telefono")}<span>{esc(A["telefono"])}</span></a>
  <a class="btn btn--scuro btn--piccolo" href="{form_href}"><span class="btn__testo">Richiedi un sopralluogo</span></a>
  <button class="burger" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Apri il menu"><span></span><span></span></button>
</div>"""


def mobile_menu(form_href):
    sub = "".join(f'<li><a href="/{slug}/">{esc(SERV_BY_SLUG[slug]["nome_esteso"])}</a></li>' for slug in ORDINE_SERVIZI)
    return f"""<div class="menu-mobile" id="menu-mobile" aria-hidden="true" inert>
  <div class="menu-mobile__testa">{brand()}<button class="menu-mobile__chiudi" type="button" data-menu-close aria-label="Chiudi il menu">{icon("i-chiudi")}</button></div>
  <nav class="menu-mobile__nav" aria-label="Menu">
    <a href="/">Home</a>
    <details><summary>Servizi {icon("i-piu")}</summary><ul class="menu-mobile__sub">{sub}<li><a href="/servizi/">Tutti i servizi</a></li></ul></details>
    <a href="/lavori/">Lavori</a>
    <a href="/chi-siamo/">Chi siamo</a>
    <a href="/certificazioni/">Certificazioni</a>
    <a href="/contatti/">Contatti</a>
  </nav>
  <div class="menu-mobile__piede">
    <a class="btn btn--primario btn--pieno" href="{form_href}"><span class="btn__testo">Richiedi un sopralluogo</span></a>
    <p class="quota">{esc(indirizzo(A["sede_operativa"]))}<br>{" · ".join(esc(o["giorni"] + " " + o["ore"]) for o in A["orari"][:1])}</p>
  </div>
</div>"""


def dato_societario(etichetta, valore, chiave):
    if valore:
        return f"<li><span>{etichetta}</span> {esc(valore)}</li>"
    # dato obbligatorio non ancora fornito dal cliente: segnaposto evidente (vedi README)
    return f'<li class="segnaposto"><span>{etichetta}</span> [da inserire in contenuti/azienda.json → {chiave}]</li>'


def footer_html():
    sede = A["sede_operativa"]
    serv = "".join(f'<li><a class="link" href="/{s}/">{esc(SERV_BY_SLUG[s]["nome_esteso"])}</a></li>' for s in ORDINE_SERVIZI)
    ore = "".join(f'<li>{esc(o["giorni"])}: {esc(o["ore"])}</li>' for o in A["orari"])
    legali = (
        f'<li><span>Ragione sociale</span> {esc(A["ragione_sociale"])}</li>'
        f'<li><span>Sede legale</span> {esc(indirizzo(A["sede_legale"]))}</li>'
        f'<li><span>Sede operativa</span> {esc(indirizzo(A["sede_operativa"]))}</li>'
        f'<li><span>P.IVA</span> {esc(A["partita_iva"])}</li>'
        + dato_societario("REA", A.get("rea"), "rea")
        + dato_societario("Capitale sociale", A.get("capitale_sociale"), "capitale_sociale")
        + dato_societario("PEC", A.get("pec"), "pec")
    )
    return f"""<footer class="piede">
  <div class="contenitore">
    <div class="piede__griglia">
      <div class="piede__marchio">{brand()}
        <p>Un cantiere, un solo interlocutore. Ristrutturazioni chiavi in mano, impianti, finiture, serramenti, tetti e facciate in Brianza, a Monza e a Milano.</p>
        <p class="piede__contatti"><a class="link" href="tel:{A["telefono_href"]}">{esc(A["telefono"])}</a><br>
        <a class="link" href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer">WhatsApp {esc(A["cellulare"])}</a><br>
        <a class="link" href="mailto:{esc(A["email"])}">{esc(A["email"])}</a></p>
      </div>
      <div><h2 class="piede__titolo">Servizi</h2><ul class="piede__lista">{serv}</ul></div>
      <div><h2 class="piede__titolo">Impresa</h2><ul class="piede__lista">
        <li><a class="link" href="/lavori/">Lavori</a></li><li><a class="link" href="/chi-siamo/">Chi siamo</a></li>
        <li><a class="link" href="/certificazioni/">Certificazioni</a></li><li><a class="link" href="/contatti/">Contatti</a></li>
        <li><a class="link" href="{esc(A["google_recensioni"])}" target="_blank" rel="noopener noreferrer">Recensioni su Google</a></li>
        <li><a class="link" href="{esc(A["facebook"])}" target="_blank" rel="noopener noreferrer">Facebook</a></li></ul></div>
      <div><h2 class="piede__titolo">Sede operativa</h2><p class="piede__indirizzo"><a class="link" href="{esc(A["google_maps"])}" target="_blank" rel="noopener noreferrer">{esc(sede["via"])}<br>{esc(sede["cap"])} {esc(sede["citta"])} ({esc(sede["provincia"])})</a></p>
        <ul class="piede__lista piede__orari">{ore}</ul></div>
    </div>
    <div class="piede__legale">
      <ul class="piede__dati">{legali}</ul>
      <nav aria-label="Note legali"><a class="link" href="/privacy-policy/">Privacy policy</a><a class="link" href="/cookie-policy/">Cookie policy</a><a class="link" href="/note-legali/">Note legali</a><a class="link" href="/accessibilita/">Accessibilità</a></nav>
      <p class="quota">© <span data-year>{OGGI.year}</span> {esc(A["ragione_sociale"])}</p>
    </div>
  </div>
</footer>"""


def jsonld_azienda():
    sede = A["sede_operativa"]
    data = {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "@id": DOMINIO + "/#azienda",
        "name": A["nome"],
        "legalName": A["ragione_sociale"],
        "description": A["descrizione_breve"],
        "url": DOMINIO + "/",
        "logo": DOMINIO + "/assets/img/logo-multiservice.png",
        "image": DOMINIO + "/assets/img/og-multiservice.jpg",
        "telephone": A["telefono_href"],
        "email": A["email"],
        "foundingDate": str(A["anno_fondazione"]),
        "vatID": "IT" + A["partita_iva"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": sede["via"],
            "postalCode": sede["cap"],
            "addressLocality": sede["citta"],
            "addressRegion": sede["provincia"],
            "addressCountry": "IT",
        },
        "openingHoursSpecification": [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": o["giorni"], "opens": o["apre"], "closes": o["chiude"]}
            for o in A["orari_schema"]
        ],
        "areaServed": [{"@type": "City", "name": z} for z in A["zone"]],
        "sameAs": [A["facebook"]],
        "hasCredential": [
            {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": c["titolo"],
             "recognizedBy": {"@type": "Organization", "name": c["ente"]}}
            for c in A["certificazioni"]
        ],
    }
    return data


def ld_json(data):
    return json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")


def breadcrumb_ld(crumbs):
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": name, "item": DOMINIO + href}
            for i, (name, href) in enumerate([("Home", "/")] + crumbs)
        ],
    }


def faq_ld(faq):
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q["d"], "acceptedAnswer": {"@type": "Answer", "text": q["r"]}} for q in faq
        ],
    }


def briciole(crumbs):
    if not crumbs:
        return ""
    items = ['<li><a class="link" href="/">Home</a></li>']
    for name, href in crumbs[:-1]:
        items.append(f'<li><a class="link" href="{href}">{esc(name)}</a></li>')
    items.append(f'<li aria-current="page">{esc(crumbs[-1][0])}</li>')
    return f'<nav aria-label="Percorso"><ol class="briciole quota">{"".join(items)}</ol></nav>'


def page_hero(meta):
    media = ""
    if meta.get("hero_img"):
        media = (f'<div class="testa-pagina__foto" data-muro>'
                 f'{img(meta["hero_img"], meta.get("hero_alt", ""), "(max-width: 900px) 100vw, 50vw", eager=True)}</div>')
    cta = ""
    if meta.get("hero_cta", True):
        cta = ('<div class="azioni">' + btn("Richiedi un sopralluogo", meta["_form_href"], "primario", " data-magnetico")
               + btn(esc(A["telefono"]), "tel:" + A["telefono_href"], "secondario", "", "i-telefono") + "</div>")
    lead = f'<p class="intro">{meta["lead"]}</p>' if meta.get("lead") else ""
    meta_riga = f'<p class="quota testa-pagina__meta">{meta["meta_riga"]}</p>' if meta.get("meta_riga") else ""
    cls = "testa-pagina" + (" testa-pagina--foto" if media else "")
    return f"""<section class="{cls}">
  <div class="contenitore testa-pagina__griglia">
    <div class="testa-pagina__testo">{briciole(meta.get("breadcrumb", []))}{meta_riga}{titolo_righe("h1", senza_em(meta["h1"]))}{lead}{cta}</div>
    {media}
  </div>
</section>"""


def layout(meta, body):
    percorso = meta["percorso"]
    canonical = DOMINIO + percorso
    ha_form = meta.get("ha_form", True)
    form_href = "#preventivo" if ha_form else "/contatti/#preventivo"
    meta["_form_href"] = form_href
    titolo = meta["titolo"]
    full_title = titolo if meta.get("titolo_completo") else f"{titolo} | {A['nome']} Impresa Edile"
    og_img = DOMINIO + (img_url(meta["og_img"], 1600) if meta.get("og_img") else "/assets/img/og-multiservice.jpg")
    ld = [jsonld_azienda()]
    if meta.get("breadcrumb"):
        ld.append(breadcrumb_ld(meta["breadcrumb"]))
    ld += meta.get("jsonld_extra", [])
    ld_html = "\n".join('<script type="application/ld+json">' + ld_json(x) + "</script>" for x in ld)
    config = json.dumps({"whatsapp": A["whatsapp"], "email": A["email"], "telefono": A["telefono"], "telefono_href": A["telefono_href"]})
    hero = "" if meta.get("no_hero") else page_hero(meta)
    preload = meta.get("_preload", "")
    robots = '<meta name="robots" content="noindex, follow">' if meta.get("noindex") else '<meta name="robots" content="index, follow, max-image-preview:large">'
    body_cls = f' class="{meta["body_class"]}"' if meta.get("body_class") else ""
    return f"""<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{esc(full_title)}</title>
<meta name="description" content="{esc(meta["descrizione"])}">
{robots}
<link rel="canonical" href="{canonical}">
<meta name="theme-color" content="#F2F4F3">
<meta name="format-detection" content="telephone=no">
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">
<meta property="og:site_name" content="{esc(A["nome"])} Impresa Edile">
<meta property="og:title" content="{esc(full_title)}">
<meta property="og:description" content="{esc(meta["descrizione"])}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{og_img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/archivo-var.woff2" as="font" type="font/woff2" crossorigin>
{preload}
<link rel="stylesheet" href="{asset("/assets/css/style.css")}">
<script src="{asset("/assets/js/main.js")}" defer></script>
<script type="application/json" id="ms-config">{config}</script>
{ld_html}
</head>
<body{body_cls}>
<a class="salta" href="#contenuto">Vai al contenuto</a>
<header class="testata">
  <div class="contenitore testata__in">{brand()}{nav_html(meta.get("nav", ""), form_href)}</div>
</header>
{mobile_menu(form_href)}
<main id="contenuto">
{hero}
{body}
</main>
{footer_html()}
<nav class="barra-rapida" aria-label="Contatti rapidi">
  <a href="tel:{A["telefono_href"]}">{icon("i-telefono")}Chiama</a>
  <a href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer">{icon("i-whatsapp")}WhatsApp</a>
  <a class="barra-rapida__cta" href="{form_href}">Sopralluogo</a>
</nav>
<div class="cursore" aria-hidden="true"><span class="cursore__testo"></span></div>
<dialog class="lightbox" id="lightbox" aria-label="Galleria fotografica">
  <div class="lightbox__barra"><span class="lightbox__conta quota"></span><button class="lightbox__btn lightbox__chiudi" type="button" aria-label="Chiudi">{icon("i-chiudi")}</button></div>
  <div class="lightbox__palco"><img alt=""><button class="lightbox__btn lightbox__prec" type="button" aria-label="Foto precedente">{icon("i-freccia-sx")}</button><button class="lightbox__btn lightbox__succ" type="button" aria-label="Foto successiva">{icon("i-freccia")}</button></div>
  <p class="lightbox__didascalia"></p>
</dialog>
</body>
</html>
"""


# --------------------------------------------------------------------------
# Pagine
# --------------------------------------------------------------------------
PAGINE = []  # (percorso, priorità sitemap)
# Data dell'ultima modifica reale di ogni pagina (per la sitemap): cambia solo se cambia l'HTML
DATE_FILE = SRC / "pagine-date.json"
try:
    DATE_PAGINE = json.loads(DATE_FILE.read_text(encoding="utf-8"))
except (OSError, ValueError):
    DATE_PAGINE = {}


def write_page(percorso, html_text, priority="0.7"):
    target = OUT / (percorso.strip("/") + "/index.html" if percorso != "/" else "index.html")
    if percorso.endswith(".html"):
        target = OUT / percorso.lstrip("/")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(html_text, encoding="utf-8")
    if not percorso.endswith(".html"):
        PAGINE.append((percorso, priority))
        impronta = hashlib.sha1(html_text.encode("utf-8")).hexdigest()[:12]
        if DATE_PAGINE.get(percorso, {}).get("hash") != impronta:
            DATE_PAGINE[percorso] = {"hash": impronta, "data": OGGI.isoformat()}


def parse_page(path):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"\s*<!--meta\s*(\{.*?\})\s*-->\s*", raw, flags=re.S)
    if not m:
        raise SystemExit(f"Manca il blocco <!--meta {{...}} --> in {path.name}")
    meta = json.loads(m.group(1))
    return meta, raw[m.end():]


def build_static_pages():
    for path in sorted((SRC / "pagine").glob("*.html")):
        meta, body = parse_page(path)
        if meta.get("preload_hero"):
            # primo fotogramma della scena: è l'elemento più grande al caricamento (LCP)
            p1 = fotogramma_html("paesaggio", 1, True)
            r1 = fotogramma_html("ritratto", 1, True)
            if p1 and r1:
                meta["_preload"] = (
                    f'<link rel="preload" as="image" type="image/avif" media="(min-aspect-ratio: 1/1)" imagesrcset="{p1[0]}" imagesizes="100vw" fetchpriority="high">\n'
                    f'<link rel="preload" as="image" type="image/avif" media="(max-aspect-ratio: 1/1)" imagesrcset="{r1[0]}" imagesizes="100vw" fetchpriority="high">'
                )
        meta["_form_href"] = "#preventivo" if meta.get("ha_form", True) else "/contatti/#preventivo"
        html_text = layout(meta, render_template(body))
        write_page(meta["percorso"], html_text, meta.get("priorita", "0.7"))


def build_service_pages():
    for s in SERVIZI:
        correlati = [l for l in LAVORI if l["categoria"] in s.get("categoria_lavori", []) or s["slug"] in l.get("servizi", [])]
        punti = "".join(f'<li data-rivela>{icon("i-check")}<span>{esc(p)}</span></li>' for p in s["punti"])
        testo = "".join(f"<p>{esc(p)}</p>" for p in s["testo"])
        faq = "".join(
            f'<details class="domanda"><summary>{esc(q["d"])}<span class="domanda__segno" aria-hidden="true"></span></summary><p>{esc(q["r"])}</p></details>'
            for q in s.get("faq", [])
        )
        note = '<p class="nota quota">Immagini di prodotti e soluzioni disponibili a catalogo.</p>' if s["slug"] == "serramenti" else ""
        lavori_html = ""
        if correlati:
            cards = "".join(work_card(l, extra=" data-rivela") for l in correlati[:3])
            lavori_html = f"""<section class="sezione sezione--intonaco"><div class="contenitore">
<div class="sezione__testa sezione__testa--riga">{titolo_righe("h2", "Cantieri di " + esc(s["nome"].lower()))}
<a class="link" href="/lavori/">Tutti i lavori</a></div>
<ol class="lavori">{cards}</ol></div></section>"""
        faq_html = ""
        if faq:
            faq_html = f"""<section class="sezione"><div class="contenitore domande">
  <div class="domande__intro">{titolo_righe("h2", "Domande frequenti")}
  <p>Non trovi la risposta? Chiamaci al <a class="link" href="tel:{A["telefono_href"]}">{esc(A["telefono"])}</a>.</p></div>
  <div class="domande__lista">{faq}</div>
</div></section>"""
        body = f"""<section class="sezione"><div class="contenitore servizio">
  <div class="servizio__testo testo-lungo">
    <p class="intro">{esc(s["lead"])}</p>
    {testo}
  </div>
  <div class="servizio__punti">
    <h2 class="titolo-piccolo">Cosa facciamo</h2>
    <ul class="spunte">{punti}</ul>
  </div>
</div></section>
<section class="sezione sezione--bianca" id="galleria"><div class="contenitore">
  <div class="sezione__testa">{titolo_righe("h2", esc(s["galleria_titolo"]))}</div>
  {galleria([dict(src=g["src"], alt=g["alt"]) for g in s["galleria"]], "g-" + s["slug"])}
  {note}
</div></section>
{lavori_html}
{faq_html}
{sezione_contatto(servizio=s["slug"])}
<section class="sezione sezione--intonaco"><div class="contenitore">
  <div class="sezione__testa">{titolo_righe("h2", "Gli altri mestieri, con la stessa impresa")}</div>
  {servizi_righe(s["slug"])}
</div></section>"""
        ld_extra = [{
            "@context": "https://schema.org", "@type": "Service",
            "name": s["nome_esteso"], "serviceType": s["nome_esteso"], "description": s["descrizione_seo"],
            "provider": {"@id": DOMINIO + "/#azienda"},
            "areaServed": [{"@type": "City", "name": z} for z in A["zone"]],
            "url": DOMINIO + f'/{s["slug"]}/',
        }]
        if s.get("faq"):
            ld_extra.append(faq_ld(s["faq"]))
        meta = {
            "percorso": f'/{s["slug"]}/',
            "titolo": s["titolo_seo"],
            "descrizione": s["descrizione_seo"],
            "nav": "servizi",
            "h1": s["h1"],
            "lead": esc(s["sommario"]),
            "hero_img": s["copertina"]["src"],
            "hero_alt": s["copertina"]["alt"],
            "breadcrumb": [["Servizi", "/servizi/"], [s["nome_esteso"], f'/{s["slug"]}/']],
            "og_img": s["copertina"]["src"],
            "jsonld_extra": ld_extra,
        }
        meta["_form_href"] = "#preventivo"
        write_page(meta["percorso"], layout(meta, body), "0.9")


def sequenza(foto, nome, titolo):
    """Le foto di un momento del cantiere, a tutta larghezza e in ordine, con le quote che avanzano."""
    n = len(foto)
    voci = []
    for i, f in enumerate(foto, 1):
        voci.append(
            f'<li class="sequenza__voce" data-rivela><a class="sequenza__foto foto-vedi" href="{img_full(f["src"])}" data-lightbox="{nome}" data-caption="{esc(f["alt"])}" data-muro>'
            f'<span class="parallasse" data-parallasse>{img(f["src"], f["alt"], "(max-width: 900px) 100vw, 80vw", prefer=1600)}</span></a>'
            f'<p class="sequenza__didascalia"><span class="quota">{i:02d} / {n:02d}</span> {esc(f["alt"])}</p></li>'
        )
    return (f'<div class="sequenza" data-sequenza><div class="sequenza__quote" aria-hidden="true"><span class="quota">{esc(titolo)}</span>'
            f'<span class="sequenza__barra"><span></span></span></div><ol class="sequenza__lista">{"".join(voci)}</ol></div>')


def build_work_pages():
    for i, l in enumerate(LAVORI):
        prev_l = LAVORI[i - 1]
        next_l = LAVORI[(i + 1) % len(LAVORI)]
        servizi_html = "".join(
            f'<li><a class="link" href="/{sl}/">{esc(SERV_BY_SLUG[sl]["nome_esteso"])}</a></li>' for sl in l.get("servizi", []) if sl in SERV_BY_SLUG
        )
        luogo = l["luogo"] + ((" · " + l["indirizzo"]) if (MOSTRA_VIA and l["indirizzo"]) else "")
        scheda = (
            f'<dl class="scheda">'
            f'<div><dt>Luogo</dt><dd>{esc(luogo)}</dd></div>'
            f'<div><dt>Anno</dt><dd>{esc(l["anno"])}</dd></div>'
            + (f'<div><dt>Tipologia</dt><dd>{esc(l["tipologia"])}</dd></div>' if l["tipologia"] else "")
            + f'<div><dt>Lavoro</dt><dd>{esc(CATEGORIE.get(l["categoria"], ""))}</dd></div>'
            + (f'<div class="scheda__largo"><dt>Interventi</dt><dd><ul class="scheda__elenco">{"".join(f"<li>{esc(t)}</li>" for t in l["interventi"])}</ul></dd></div>' if l["interventi"] else "")
            + (f'<div class="scheda__largo"><dt>Servizi collegati</dt><dd><ul class="scheda__elenco">{servizi_html}</ul></dd></div>' if servizi_html else "")
            + "</dl>"
        )
        testo = "".join(f"<p>{esc(p)}</p>" for p in l["testo"])
        apertura = ""
        if l["confronto"]:
            apertura = f'<section class="sezione sezione--stretta" aria-label="Confronto prima e dopo"><div class="contenitore">{confronto(l["slug"], "no")}<p class="nota quota">Trascina il bordo, o usa le frecce della tastiera, per confrontare prima e dopo.</p></div></section>'
        else:
            apertura = (f'<section class="sezione sezione--stretta"><div class="contenitore"><div class="copertina" data-muro>'
                        f'<span class="parallasse" data-parallasse>{img(l["copertina"]["src"], l["copertina"]["alt"], "100vw", eager=True, prefer=1600)}</span></div></div></section>')
        momenti = []
        per_fase = {f: [x for x in l["foto"] if x["fase"] == f] for f in ("prima", "durante", "dopo", "")}
        titoli = {"prima": "Prima dei lavori", "durante": "Durante il cantiere", "dopo": "A lavori finiti", "": "Altre foto"}
        sole_cantiere = not per_fase["prima"] and not per_fase["dopo"]
        for fase in ("prima", "durante", "dopo", ""):
            fotos = per_fase[fase]
            if not fotos:
                continue
            tit = "La sequenza del cantiere" if (sole_cantiere and fase == "durante") else titoli[fase]
            momenti.append(f"""<section class="sezione momento-lavoro{' sezione--intonaco' if fase == 'durante' else ''}" aria-labelledby="m-{fase or 'altre'}"><div class="contenitore">
  <div class="sezione__testa">{titolo_righe("h2", esc(tit), "m-" + (fase or "altre"))}</div>
  {sequenza(fotos, "g-" + l["slug"], tit)}
</div></section>""")
        body = f"""{apertura}
<section class="sezione"><div class="contenitore lavoro-dettaglio">
  <div class="testo-lungo"><p class="intro">{esc(l["sommario"])}</p>{testo}</div>
  {scheda}
</div></section>
{"".join(momenti)}
<section class="sezione"><div class="contenitore">
  <div class="pager">
    <a href="/lavori/{prev_l["slug"]}/"><span class="quota">Lavoro precedente</span><strong>{esc(prev_l["titolo"])}</strong><span>{esc(prev_l["luogo"])}</span></a>
    <a class="pager__succ" href="/lavori/{next_l["slug"]}/"><span class="quota">Lavoro successivo</span><strong>{esc(next_l["titolo"])}</strong><span>{esc(next_l["luogo"])}</span></a>
  </div>
</div></section>
{sezione_contatto("Hai un lavoro simile in mente?")}"""
        cover = l["copertina"]["src"]
        meta = {
            "percorso": f'/lavori/{l["slug"]}/',
            "titolo": f'{l["titolo"]} {in_luogo(l["luogo"])}',
            "descrizione": l["sommario"],
            "nav": "lavori",
            "meta_riga": " · ".join(esc(x) for x in (l["luogo"], l["anno"], l["tipologia"], CATEGORIE.get(l["categoria"], "")) if x),
            "h1": esc(l["titolo"]) + " " + esc(in_luogo(l["comune"])),
            "lead": "",
            "hero_cta": False,
            "breadcrumb": [["Lavori", "/lavori/"], [l["titolo"], f'/lavori/{l["slug"]}/']],
            "og_img": cover,
        }
        write_page(meta["percorso"], layout(meta, body), "0.6")


# --------------------------------------------------------------------------
# File di supporto: favicon, immagine social, sitemap, robots, manifest
# --------------------------------------------------------------------------
def copy_assets():
    # file tolti da src/assets: via anche da public/ (css, js e font interi; per le immagini
    # solo le cartelle che vengono da src/, non le foto convertite da foto/)
    gestite = [OUT / "assets" / d for d in ("css", "js", "fonts")] + [OUT / "assets/img" / d for d in ("hero", "progetto")]
    for cartella in gestite:
        if cartella.is_dir():
            for f in cartella.rglob("*"):
                if f.is_file() and not (SRC / f.relative_to(OUT)).exists():
                    f.unlink()
    for sub in ("css", "js", "fonts", "img"):
        src = SRC / "assets" / sub
        dst = OUT / "assets" / sub
        dst.mkdir(parents=True, exist_ok=True)
        for f in src.rglob("*"):
            if f.is_file() and f.name != ".DS_Store":
                target = dst / f.relative_to(src)
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(f, target)


def logo_path_d():
    svg = (SRC / "assets/img/icons.svg").read_text(encoding="utf-8")
    m = re.search(r'<symbol id="logo-ms"[^>]*><path fill="currentColor" d="([^"]+)"', svg)
    return m.group(1)


def build_icons():
    d = logo_path_d()
    fav = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="#121416"/>'
        f'<path fill="#fff" transform="translate(51.6 48) scale(.8)" d="{d}"/></svg>'
    )
    (OUT / "favicon.svg").write_text(fav, encoding="utf-8")
    logo_svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="56 84 404 352"><path fill="#121416" d="{d}"/></svg>'
    (OUT / "assets/img").mkdir(parents=True, exist_ok=True)
    (OUT / "assets/img/logo-multiservice.svg").write_text(logo_svg, encoding="utf-8")
    if not HAS_PIL:
        return
    src = FOTO / "azienda/logo-monogramma-512.jpg"
    if not src.exists():
        return
    # immagine social: il fotogramma finale della scena (strumenti/3d/fotogrammi.mjs), altrimenti una foto di Monza
    og_src = ROOT / "strumenti/3d/og-sorgente.jpg"
    if not og_src.exists():
        og_src = FOTO / "lavori/monza-via-viotti/dopo-01.jpg"
    # Icone e immagine social si rigenerano solo se cambiano le foto di partenza:
    # versioni diverse di Pillow producono PNG uguali a vista ma con byte diversi.
    firma = "icone-v2:" + file_hash(src) + ":" + (file_hash(og_src) if og_src.exists() else "")
    uscite = ["apple-touch-icon.png", "favicon-32.png", "assets/img/icon-192.png", "assets/img/icon-512.png",
              "assets/img/logo-multiservice.png"] + (["assets/img/og-multiservice.jpg"] if og_src.exists() else [])
    if CACHE.get("_icone") == firma and all((OUT / u).exists() for u in uscite):
        return
    CACHE["_icone"] = firma
    gray = Image.open(src).convert("L").resize((1024, 1024), Image.LANCZOS)
    mask = gray.point(lambda v: 255 if v < 128 else 0).filter(ImageFilter.GaussianBlur(1.2))
    bbox = mask.getbbox()
    mask = mask.crop(bbox)

    def icon_png(size, pad, bg, fg, radius=0):
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        if bg:
            back = Image.new("RGBA", (size, size), bg)
            rmask = Image.new("L", (size, size), 0)
            ImageDraw.Draw(rmask).rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
            canvas.paste(back, (0, 0), rmask)
        inner = size - 2 * pad
        m = mask.copy()
        m.thumbnail((inner, inner), Image.LANCZOS)
        fgimg = Image.new("RGBA", m.size, fg)
        canvas.paste(fgimg, ((size - m.width) // 2, (size - m.height) // 2), m)
        return canvas

    ink, white = (18, 20, 22, 255), (255, 255, 255, 255)
    icon_png(180, 34, ink, white).convert("RGB").save(OUT / "apple-touch-icon.png")
    icon_png(32, 5, ink, white, 7).save(OUT / "favicon-32.png")
    icon_png(192, 38, ink, white, 40).save(OUT / "assets/img/icon-192.png")
    icon_png(512, 100, ink, white, 110).save(OUT / "assets/img/icon-512.png")
    logo = icon_png(512, 40, (255, 255, 255, 255), ink)
    logo.convert("RGB").save(OUT / "assets/img/logo-multiservice.png")

    # Immagine per la condivisione social (1200x630): scena chiara, velo color calce a sinistra e logo
    if og_src.exists():
        im = ImageOps.exif_transpose(Image.open(og_src)).convert("RGB")
        im = ImageOps.fit(im, (1200, 630), Image.LANCZOS, centering=(0.62, 0.5))
        shade = Image.new("L", (1200, 630), 0)
        sd = ImageDraw.Draw(shade)
        for x in range(1200):
            sd.line([(x, 0), (x, 630)], fill=int(225 * max(0, 1 - x / 620) ** 1.4))
        im = Image.composite(Image.new("RGB", im.size, (242, 244, 243)), im, shade)
        m = mask.copy()
        m.thumbnail((130, 130), Image.LANCZOS)
        im.paste(Image.new("RGB", m.size, (18, 20, 22)), (64, 64), m)
        im.save(OUT / "assets/img/og-multiservice.jpg", quality=86)


def build_misc():
    sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for percorso, prio in sorted(PAGINE, key=lambda x: (-float(x[1]), x[0])):
        sitemap.append(f"  <url><loc>{DOMINIO}{percorso}</loc><lastmod>{DATE_PAGINE[percorso]['data']}</lastmod><priority>{prio}</priority></url>")
    sitemap.append("</urlset>")
    (OUT / "sitemap.xml").write_text("\n".join(sitemap) + "\n", encoding="utf-8")
    (OUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: {DOMINIO}/sitemap.xml\n", encoding="utf-8")
    manifest = {
        "name": f'{A["nome"]} Impresa Edile', "short_name": A["nome"], "lang": "it",
        "start_url": "/", "display": "standalone", "background_color": "#F2F4F3", "theme_color": "#121416",
        "icons": [{"src": "/assets/img/icon-192.png", "sizes": "192x192", "type": "image/png"},
                  {"src": "/assets/img/icon-512.png", "sizes": "512x512", "type": "image/png"}],
    }
    (OUT / "site.webmanifest").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    (OUT / ".well-known").mkdir(exist_ok=True)
    scad = (OGGI + datetime.timedelta(days=365)).isoformat() + "T00:00:00Z"
    (OUT / ".well-known/security.txt").write_text(
        f"Contact: mailto:{A['email']}\nExpires: {scad}\nPreferred-Languages: it, en\nCanonical: {DOMINIO}/.well-known/security.txt\n",
        encoding="utf-8",
    )


def main():
    print("Genero il sito in public/ …")
    OUT.mkdir(exist_ok=True)
    for f in OUT.rglob("*.html"):
        f.unlink()
    copy_assets()
    build_static_pages()
    build_service_pages()
    build_work_pages()
    build_icons()
    build_misc()
    # elimina le versioni WebP di foto non più usate
    for rel in list(CACHE):
        if rel not in USED_IMAGES and not rel.startswith("_"):
            base = "assets/img/" + rel.rsplit(".", 1)[0]
            for w in CACHE[rel]["widths"]:
                p = OUT / f"{base}-{w}.webp"
                if p.exists():
                    p.unlink()
            del CACHE[rel]
    # cartelle rimaste vuote (lavori eliminati, foto tolte)
    for d in sorted((p for p in OUT.rglob("*") if p.is_dir()), key=lambda p: len(p.parts), reverse=True):
        if not any(d.iterdir()):
            d.rmdir()
    CACHE_FILE.write_text(json.dumps(CACHE, indent=1, sort_keys=True), encoding="utf-8")
    pubblicate = {p for p, _ in PAGINE}
    DATE_FILE.write_text(json.dumps({p: v for p, v in DATE_PAGINE.items() if p in pubblicate}, indent=1, sort_keys=True), encoding="utf-8")
    print(f"Fatto: {len(PAGINE)} pagine, {len(USED_IMAGES)} foto, {len(LAVORI)} lavori pubblicati.")
    if AVVISI:
        print(f"{len(AVVISI)} avvisi (il resto del sito è stato generato normalmente):")
        for a in AVVISI:
            print("  - " + a)


if __name__ == "__main__":
    sys.exit(main())
