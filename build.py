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

        foto, viste = [], set()
        for campo, fase in GALLERIA_FASI:
            valori = d.get(campo) or []
            for v in valori if isinstance(valori, list) else [valori]:
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
        c = d.get("confronto") if isinstance(d.get("confronto"), dict) else {}
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


ARROW = icon("i-freccia", "icon icon--arrow")


# --------------------------------------------------------------------------
# Componenti riutilizzabili
# --------------------------------------------------------------------------
def brand(tag="a"):
    return (
        f'<a class="brand" href="/" aria-label="{esc(A["nome"])}, torna alla home">'
        f'<svg class="brand__mark" aria-hidden="true" focusable="false"><use href="/assets/img/icons.svg#logo-ms"></use></svg>'
        f'<span class="brand__text"><span class="brand__name">{esc(A["nome"])}</span>'
        f'<span class="brand__tag">Impresa edile</span></span></a>'
    )


def servizi_griglia():
    ordine = ["ristrutturazioni", "facciate-e-cappotto-termico", "impianti-elettrici-ed-idraulici",
              "imbiancature", "rivestimenti", "serramenti", "rifacimento-tetti"]
    out = ['<div class="services">']
    for i, slug in enumerate(ordine):
        s = SERV_BY_SLUG[slug]
        feature = " service-card--feature" if i == 0 else ""
        sizes = "(max-width: 620px) 100vw, (max-width: 980px) 50vw, 66vw" if i == 0 else "(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
        out.append(
            f'<a class="service-card{feature}" href="/{slug}/" data-reveal data-d="{i % 3}">'
            f'<div class="service-card__img">{img(s["copertina"]["src"], "", sizes)}</div>'
            f'<span class="service-card__icon">{icon(s["icona"])}</span>'
            f'<h3>{esc(s["nome_esteso"])}</h3><p>{esc(s["sommario"])}</p>'
            f'<span class="service-card__more">Scopri di più {icon("i-freccia")}</span></a>'
        )
    out.append(
        '<div class="service-card service-card--cta" data-reveal>'
        '<div><h3>Non trovi il tuo intervento?</h3>'
        '<p>Ogni casa è diversa. Raccontaci cosa ti serve: valutiamo insieme la soluzione migliore, anche per lavori su misura.</p></div>'
        f'<a class="btn btn--light" href="#preventivo">Parliamone {ARROW}</a></div>'
    )
    out.append("</div>")
    return "".join(out)


def servizi_links(escludi=""):
    out = ['<div class="svc-links">']
    for s in SERVIZI:
        if s["slug"] == escludi:
            continue
        out.append(
            f'<a class="svc-link" href="/{s["slug"]}/"><span class="svc-link__icon">{icon(s["icona"])}</span>'
            f'<strong>{esc(s["nome_esteso"])}</strong>{icon("i-freccia")}</a>'
        )
    out.append("</div>")
    return "".join(out)


def work_card(l, sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw", extra=""):
    return (
        f'<a class="work-card" href="/lavori/{l["slug"]}/" data-cat="{esc(l["categoria"])}"{extra}>'
        f'<div class="work-card__img">{img(l["copertina"]["src"], l["copertina"]["alt"], sizes)}'
        f'<span class="work-card__tag">{esc(CATEGORIE.get(l["categoria"], ""))}</span></div>'
        f'<div class="work-card__body"><p class="work-card__meta">{icon("i-pin")}{esc(l["luogo"])} · {esc(l["anno"])}</p>'
        f'<h3>{esc(l["titolo"])}</h3><p class="muted">{esc(l["sommario"])}</p>'
        f'<span class="work-card__more">Guarda il lavoro {icon("i-freccia")}</span></div></a>'
    )


def lavori_home():
    scelti = LAVORI[:4]
    sizes = ["(max-width: 980px) 100vw, 58vw", "(max-width: 620px) 100vw, (max-width: 980px) 50vw, 42vw",
             "(max-width: 620px) 100vw, (max-width: 980px) 50vw, 42vw", "(max-width: 620px) 100vw, 45vw"]
    cards = [work_card(l, sizes[i], f' data-reveal data-d="{i}"') for i, l in enumerate(scelti)]
    return '<div class="works works--home">' + "".join(cards) + "</div>"


def lavori_griglia():
    conta = {}
    for l in LAVORI:
        conta[l["categoria"]] = conta.get(l["categoria"], 0) + 1
    filtri = [f'<button class="filter" type="button" data-filter="tutti" aria-pressed="true">Tutti <span>{len(LAVORI)}</span></button>']
    for key, label in CATEGORIE.items():
        if conta.get(key):
            filtri.append(f'<button class="filter" type="button" data-filter="{key}" aria-pressed="false">{esc(label)} <span>{conta[key]}</span></button>')
    cards = "".join(work_card(l) for l in LAVORI)
    return (
        f'<div class="filters" role="group" aria-label="Filtra i lavori per tipologia">{"".join(filtri)}</div>'
        f'<div class="works">{cards}</div>'
    )


def confronto(slug):
    c = LAV_BY_SLUG[slug]["confronto"]
    if not c:
        return ""
    sizes = "(max-width: 860px) 50vw, 30vw"
    prima = img(c["prima"]["src"], c["prima"]["alt"], sizes)
    dopo = img(c["dopo"]["src"], c["dopo"]["alt"], sizes)
    return (
        '<div class="compare">'
        f'<figure class="img-reveal">{prima}<figcaption>Prima</figcaption></figure>'
        f'<figure class="img-reveal" data-d="1">{dopo}<figcaption>Dopo</figcaption></figure>'
        "</div>"
    )


def stelle(n):
    return "".join(icon("i-stella") for _ in range(int(n)))


def recensioni():
    out = ['<div class="reviews__list">']
    for i, r in enumerate(A["recensioni"]):
        iniziali = "".join(p[0] for p in r["autore"].replace(".", " ").split()[:2]).upper()
        out.append(
            f'<figure class="review" data-reveal data-d="{i}">{icon("i-citazione", "review__quote")}'
            f'<div class="review__stars" role="img" aria-label="{r["voto"]} stelle su 5">{stelle(r["voto"])}</div>'
            f'<blockquote><p>{esc(r["testo"])}</p></blockquote>'
            f'<figcaption><footer><span class="review__avatar" aria-hidden="true">{esc(iniziali)}</span>'
            f'<span><strong>{esc(r["autore"])}</strong>Recensione su {esc(r["fonte"])}</span></footer></figcaption></figure>'
        )
    out.append("</div>")
    return "".join(out)


def certificazioni_card():
    out = ['<div class="certs">']
    for i, c in enumerate(A["certificazioni"]):
        out.append(
            f'<article class="cert" data-reveal data-d="{i}"><span class="cert__icon">{icon("i-scudo")}</span><div>'
            f'<h3>{esc(c["titolo"])}</h3><p>{esc(c["sottotitolo"])} · {esc(c["campo"])}</p>'
            f'<dl><dt>Certificato</dt><dd>n. {esc(c["numero"])}</dd><dt>Ente</dt><dd>{esc(c["ente"])}</dd>'
            f'<dt>Valido fino al</dt><dd>{esc(c["scadenza"])}</dd></dl></div></article>'
        )
    out.append("</div>")
    return "".join(out)


def certificazioni_doc():
    out = []
    for c in A["certificazioni"]:
        out.append(
            f'<article class="cert-doc" id="{c["id"]}" data-reveal>'
            f'<a class="cert-doc__img" href="{img_full(c["immagine"])}" data-lightbox="certificati" data-caption="{esc(c["titolo"])} · certificato n. {esc(c["numero"])}">'
            f'{img(c["immagine"], "Certificato " + c["titolo"] + " di " + A["ragione_sociale"], "(max-width: 760px) 90vw, 36vw")}</a>'
            f'<div class="cert-doc__body"><span class="eyebrow">{esc(c["sottotitolo"])}</span><h2>{esc(c["titolo"])}</h2>'
            f'<p class="muted">{esc(c["campo"])}.</p>'
            f'<dl><dt>Numero</dt><dd>{esc(c["numero"])}</dd><dt>Ente</dt><dd>{esc(c["ente"])}</dd>'
            f'<dt>Prima emissione</dt><dd>{esc(c["emissione"])}</dd><dt>Scadenza</dt><dd>{esc(c["scadenza"])}</dd></dl>'
            f'<p><a class="link-arrow" href="{img_full(c["immagine"])}" data-lightbox="certificati-link" data-caption="{esc(c["titolo"])}">Visualizza il certificato {icon("i-espandi")}</a></p></div></article>'
        )
    return "".join(out)


def zone_chips():
    return '<div class="chips">' + "".join(f'<span class="chip">{icon("i-pin")}{esc(z)}</span>' for z in A["zone"]) + "</div>"


def orari_lista(cls=""):
    return "".join(f'<li><span>{esc(o["giorni"])}</span> <strong>{esc(o["ore"])}</strong></li>' for o in A["orari"])


def contatti_lista():
    sede = A["sede_operativa"]
    items = [
        ("tel:" + A["telefono_href"], "i-telefono", "Ufficio", A["telefono"]),
        (WA_URL, "i-whatsapp", "Cellulare e WhatsApp", A["cellulare"]),
        ("mailto:" + A["email"], "i-mail", "Email", A["email"]),
        (A["google_maps"], "i-pin", "Sede operativa", f'{sede["via"]}, {sede["citta"]}'),
    ]
    out = ['<div class="contact-list">']
    for href, ic, label, value in items:
        ext = ' target="_blank" rel="noopener noreferrer"' if href.startswith("http") else ""
        out.append(
            f'<a class="contact-item" href="{esc(href)}"{ext}><span class="contact-item__icon">{icon(ic)}</span>'
            f'<span><small>{esc(label)}</small><strong>{esc(value)}</strong></span></a>'
        )
    ore = "<br>".join(f'{esc(o["giorni"])}: {esc(o["ore"])}' for o in A["orari"])
    out.append(
        f'<div class="contact-item"><span class="contact-item__icon">{icon("i-orologio")}</span>'
        f'<span><small>Orari</small><strong>{ore}</strong></span></div>'
    )
    out.append("</div>")
    return "".join(out)


def form(titolo="Richiedi un preventivo", sottotitolo="Compila il modulo: ti ricontattiamo per fissare un sopralluogo senza impegno.", servizio=""):
    opts = ['<option value="">Seleziona…</option>']
    for s in SERVIZI:
        sel = " selected" if s["slug"] == servizio else ""
        opts.append(f'<option value="{esc(s["nome_esteso"])}"{sel}>{esc(s["nome_esteso"])}</option>')
    opts.append('<option value="Altro">Altro</option>')
    uid = "f" + hashlib.md5((titolo + servizio).encode()).hexdigest()[:5]
    return f"""<div class="form-card" data-reveal>
<h3>{esc(titolo)}</h3><p>{esc(sottotitolo)}</p>
<form class="form" action="/api/contatti" method="post" novalidate data-contact-form>
  <div class="field"><label for="{uid}-nome">Nome e cognome <span>*</span></label><input id="{uid}-nome" name="nome" type="text" autocomplete="name" maxlength="100" required></div>
  <div class="field"><label for="{uid}-tel">Telefono <span>*</span></label><input id="{uid}-tel" name="telefono" type="tel" autocomplete="tel" inputmode="tel" maxlength="25" required></div>
  <div class="field"><label for="{uid}-email">Email</label><input id="{uid}-email" name="email" type="email" autocomplete="email" maxlength="150"></div>
  <div class="field"><label for="{uid}-comune">Comune dell'intervento</label><input id="{uid}-comune" name="comune" type="text" autocomplete="address-level2" maxlength="80"></div>
  <div class="field field--full"><label for="{uid}-serv">Tipo di intervento</label><select id="{uid}-serv" name="servizio">{"".join(opts)}</select></div>
  <div class="field field--full"><label for="{uid}-msg">Descrivi il lavoro <span>*</span></label><textarea id="{uid}-msg" name="messaggio" maxlength="3000" required placeholder="Es. ristrutturazione completa di un bilocale di 60 m², rifacimento bagno e impianto elettrico."></textarea></div>
  <div class="hp" aria-hidden="true"><label for="{uid}-web">Lascia vuoto questo campo</label><input id="{uid}-web" name="sito_web" type="text" tabindex="-1" autocomplete="off"></div>
  <input type="hidden" name="t" value="">
  <label class="check" for="{uid}-privacy"><input id="{uid}-privacy" name="privacy" type="checkbox" required><span>Ho letto l'<a href="/privacy-policy/" target="_blank">informativa privacy</a> e chiedo di essere ricontattato per questa richiesta. <span aria-hidden="true">*</span></span></label>
  <div class="form__submit"><button class="btn btn--primary btn--block" type="submit">Invia la richiesta {ARROW}</button>
  <p class="form__note">I campi con * sono obbligatori. Usiamo i tuoi dati solo per rispondere a questa richiesta.</p></div>
  <div class="form__status" role="status" aria-live="polite" tabindex="-1" hidden></div>
</form></div>"""


def sezione_contatto(titolo="Richiedi un <em>sopralluogo</em> senza impegno", servizio=""):
    return f"""<section class="section section--dark on-dark" id="preventivo" aria-labelledby="preventivo-title">
<div class="container contact">
  <div class="contact__intro" data-reveal>
    <span class="eyebrow">Contatti</span>
    <h2 id="preventivo-title">{titolo}</h2>
    <p class="lead">Raccontaci il tuo progetto: un tecnico Multiservice valuta l'intervento e ti presenta una proposta chiara, con costi e tempi.</p>
    {contatti_lista()}
  </div>
  {form(servizio=servizio)}
</div></section>"""


def mappa():
    return f"""<div class="map on-dark" data-map-src="{esc(A["mappa_embed"])}">
  <div class="map__grid" aria-hidden="true"></div>
  <div class="map__placeholder">
    {icon("i-mappa", "icon icon--lg")}
    <strong>{esc(indirizzo(A["sede_operativa"]))}</strong>
    <p>La mappa è fornita da Google: caricandola, Google riceverà alcuni dati di navigazione (come l'indirizzo IP) e potrà usare cookie. <a href="/cookie-policy/">Maggiori informazioni</a>.</p>
    <div class="btn-row"><button class="btn btn--light btn--sm" type="button" data-map-load>Mostra la mappa</button>
    <a class="btn btn--ghost btn--sm" href="{esc(A["google_maps"])}" target="_blank" rel="noopener noreferrer">Apri in Google Maps {icon("i-esterno")}</a></div>
  </div>
</div>"""


def cta_band(titolo="Hai un progetto <em>in mente</em>?", testo="Chiamaci o scrivici: fissiamo un sopralluogo e ti prepariamo un preventivo dettagliato, senza impegno."):
    return f"""<div class="cta-band on-dark" data-reveal>
  <div><h2>{titolo}</h2><p>{testo}</p></div>
  <div class="btn-row"><a class="btn btn--light" href="tel:{A["telefono_href"]}">{icon("i-telefono")} {esc(A["telefono"])}</a>
  <a class="btn btn--ghost" href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer">{icon("i-whatsapp")} WhatsApp</a></div>
</div>"""


def galleria(items, nome, sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw", fasi=False):
    out = ['<div class="gallery">']
    etichette = {"prima": "Prima", "durante": "In corso", "dopo": "Dopo"}
    for it in items:
        fase = it.get("fase", "") if fasi else ""
        badge = f'<span class="gallery__fase gallery__fase--{fase}">{etichette[fase]}</span>' if fase in etichette else ""
        cap = it["alt"] + (f" · {etichette[fase]}" if fase in etichette else "")
        out.append(
            f'<a class="gallery__item" href="{img_full(it["src"])}" data-lightbox="{nome}" data-caption="{esc(cap)}" data-reveal="fade">'
            f'{img(it["src"], it["alt"], sizes, prefer=480)}{badge}<span class="gallery__zoom">{icon("i-espandi")}</span></a>'
        )
    out.append("</div>")
    return "".join(out)


def gallerie_servizi():
    out = ['<div class="works">']
    for slug in ["imbiancature", "rivestimenti", "rifacimento-tetti"]:
        s = SERV_BY_SLUG[slug]
        out.append(
            f'<a class="work-card" href="/{slug}/#galleria" data-reveal><div class="work-card__img">{img(s["copertina"]["src"], s["copertina"]["alt"], "(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw")}'
            f'<span class="work-card__tag">{len(s["galleria"])} foto</span></div>'
            f'<div class="work-card__body"><h3>{esc(s["nome_esteso"])}</h3><p class="muted">{esc(s["sommario"])}</p>'
            f'<span class="work-card__more">Apri la galleria {icon("i-freccia")}</span></div></a>'
        )
    out.append("</div>")
    return "".join(out)


def hero_foto(*voci):
    """Foto della hero in home che si alternano in dissolvenza.
    Ogni voce: "slug-del-lavoro" (usa la sua copertina) oppure "slug-del-lavoro foto/da/usare.jpg".
    Solo la prima foto si carica subito; le altre le carica main.js una alla volta."""
    slides = []
    for voce in voci:
        slug, _, foto = voce.partition(" ")
        l = LAV_BY_SLUG.get(slug.strip())
        if not l:
            avviso(f"hero: lavoro '{slug}' non pubblicato, foto saltata")
            continue
        src = percorso_foto(foto.strip(), l["slug"]) if foto.strip() else l["copertina"]["src"]
        if not src:
            avviso(f"hero: foto '{foto}' non trovata, saltata")
            continue
        alt = next((f["alt"] for f in l["foto"] if f["src"] == src), l["copertina"]["alt"])
        slides.append((src, alt, l))
    out = ['<div class="hero__media" data-slides>']
    for i, (src, alt, l) in enumerate(slides):
        dati = f'data-titolo="{esc(l["titolo"])}" data-luogo="{esc(l["luogo"])}" data-href="/lavori/{l["slug"]}/"'
        if i == 0:
            foto_html = img(src, alt, "100vw", "", True)
            # tavola di progetto per l'animazione d'apertura (strumenti/genera-progetto.py):
            # la carica main.js solo se l'animazione parte; senza tavola si vede subito la foto
            tav = "/assets/img/progetto/" + src.rsplit(".", 1)[0]
            if all((SRC / f"{tav}-{w}.webp".lstrip("/")).exists() for w in (960, 1600)):
                info = immagine(src)
                foto_html += (
                    f'<div class="hero__progetto" aria-hidden="true"><img class="hero__progetto-img" '
                    f'data-src="{asset(tav + "-960.webp")}" '
                    f'data-srcset="{asset(tav + "-960.webp")} 960w, {asset(tav + "-1600.webp")} 1600w" sizes="100vw" '
                    f'width="960" height="{round(info["h"] * 960 / info["w"])}" alt="" decoding="async"></div>'
                    '<span class="hero__laser" aria-hidden="true"></span>'
                )
        else:
            info = immagine(src)
            dw = min(info["widths"], key=lambda x: abs(x - 960))
            foto_html = (
                f'<img data-src="{src_w(info, dw)}" data-srcset="{srcset_of(info)}" sizes="100vw" '
                f'width="{dw}" height="{round(info["h"] * dw / info["w"])}" alt="{esc(alt)}" decoding="async">'
            )
        stato = ' class="hero__slide is-active"' if i == 0 else ' class="hero__slide" aria-hidden="true"'
        out.append(f"<div{stato} {dati}>{foto_html}</div>")
    out.append("</div>")
    if len(slides) > 1:
        primo = slides[0][2]
        barre = "".join(
            f'<button class="hero__dot{" is-active" if i == 0 else ""}" type="button" aria-label="Foto {i + 1} di {len(slides)}: {esc(l["titolo"])}, {esc(l["luogo"])}"><span></span></button>'
            for i, (_, _, l) in enumerate(slides)
        )
        out.append(
            '<div class="hero__slider container">'
            f'<a class="hero__caption" href="/lavori/{primo["slug"]}/"><small>In foto</small>'
            f'<span class="hero__caption-text"><span data-titolo>{esc(primo["titolo"])}</span>'
            f'<span data-luogo>{esc(primo["luogo"])}</span></span></a>'
            f'<div class="hero__controls"><div class="hero__dots" role="group" aria-label="Foto dei lavori">{barre}</div></div>'
            "</div>"
        )
    return "".join(out)


COMPONENTI = {
    "hero_foto": hero_foto,
    "servizi_griglia": servizi_griglia,
    "servizi_links": servizi_links,
    "lavori_home": lavori_home,
    "lavori_griglia": lavori_griglia,
    "confronto": confronto,
    "recensioni": recensioni,
    "certificazioni_card": certificazioni_card,
    "certificazioni_doc": certificazioni_doc,
    "zone_chips": zone_chips,
    "contatti_lista": contatti_lista,
    "form": form,
    "sezione_contatto": sezione_contatto,
    "mappa": mappa,
    "cta_band": cta_band,
    "gallerie_servizi": gallerie_servizi,
    "img": lambda rel, alt="", sizes="100vw", cls="", eager="": img(rel, alt, sizes, cls, eager == "eager"),
    "icon": icon,
    "orari_lista": orari_lista,
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
    "n_servizi": str(len(SERVIZI)),
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
        return esc(VALORI[key]) if not key.endswith("_url") else esc(VALORI[key])

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
    for s in SERVIZI:
        drop.append(
            f'<a href="/{s["slug"]}/"><span class="dropdown__icon">{icon(s["icona"])}</span>'
            f'<span><strong>{esc(s["nome_esteso"])}</strong><small>{esc(s["sommario"][:62].rsplit(" ", 1)[0])}…</small></span></a>'
        )
    drop.append(f'<div class="dropdown__all"><a href="/servizi/">Tutti i servizi {icon("i-freccia")}</a></div>')

    def cur(key):
        return ' aria-current="page"' if attivo == key else ""

    return f"""<nav class="nav" aria-label="Menu principale">
  <ul class="nav__list">
    <li><a class="nav__link" href="/chi-siamo/"{cur("chi-siamo")}>Chi siamo</a></li>
    <li class="nav__item--drop"><button class="nav__link" type="button" aria-expanded="false" aria-controls="dropdown-servizi"{' data-current="true"' if attivo == "servizi" else ""}>Servizi {icon("i-chevron")}</button>
      <div class="dropdown" id="dropdown-servizi">{"".join(drop)}</div></li>
    <li><a class="nav__link" href="/lavori/"{cur("lavori")}>Lavori</a></li>
    <li><a class="nav__link" href="/certificazioni/"{cur("certificazioni")}>Certificazioni</a></li>
    <li><a class="nav__link" href="/contatti/"{cur("contatti")}>Contatti</a></li>
  </ul>
</nav>
<div class="header__actions">
  <a class="header__phone" href="tel:{A["telefono_href"]}" aria-label="Chiama {esc(A["telefono"])}">{icon("i-telefono")}<span>{esc(A["telefono"])}</span></a>
  <a class="btn btn--primary btn--sm" href="{form_href}">Richiedi preventivo</a>
  <button class="burger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Apri il menu">{icon("i-menu")}</button>
</div>"""


def mobile_menu(form_href):
    sub = "".join(f'<a href="/{s["slug"]}/">{icon(s["icona"])}{esc(s["nome_esteso"])}</a>' for s in SERVIZI)
    return f"""<div class="mobile-menu on-dark" id="mobile-menu" aria-hidden="true" inert>
  <div class="mobile-menu__top">{brand()}<button class="mobile-menu__close" type="button" data-menu-close aria-label="Chiudi il menu">{icon("i-chiudi")}</button></div>
  <nav class="mobile-menu__nav" aria-label="Menu mobile">
    <a href="/">Home {icon("i-freccia")}</a>
    <a href="/chi-siamo/">Chi siamo {icon("i-freccia")}</a>
    <details><summary>Servizi {icon("i-piu")}</summary><div class="mobile-menu__sub">{sub}<a href="/servizi/">{icon("i-freccia")}Tutti i servizi</a></div></details>
    <a href="/lavori/">Lavori {icon("i-freccia")}</a>
    <a href="/certificazioni/">Certificazioni {icon("i-freccia")}</a>
    <a href="/contatti/">Contatti {icon("i-freccia")}</a>
  </nav>
  <div class="mobile-menu__foot">
    <a class="btn btn--primary" href="{form_href}">Richiedi un preventivo {ARROW}</a>
    <div class="btn-row"><a class="btn btn--light" href="tel:{A["telefono_href"]}">{icon("i-telefono")} Chiama</a><a class="btn btn--whatsapp" href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer">{icon("i-whatsapp")} WhatsApp</a></div>
    <p class="mobile-menu__info">{esc(indirizzo(A["sede_operativa"]))}<br>{" · ".join(esc(o["giorni"] + " " + o["ore"]) for o in A["orari"])}</p>
  </div>
</div>"""


def footer_html():
    sede = A["sede_operativa"]
    legali = [f'<strong>{esc(A["ragione_sociale"])}</strong>',
              f'Sede legale: {esc(indirizzo(A["sede_legale"]))}',
              f'Sede operativa: {esc(indirizzo(A["sede_operativa"]))}',
              f'P.IVA {esc(A["partita_iva"])}']
    if A.get("rea"):
        legali.append(f'REA {esc(A["rea"])}')
    if A.get("capitale_sociale"):
        legali.append(f'Capitale sociale {esc(A["capitale_sociale"])}')
    if A.get("pec"):
        legali.append(f'PEC {esc(A["pec"])}')
    serv = "".join(f'<li><a href="/{s["slug"]}/">{esc(s["nome_esteso"])}</a></li>' for s in SERVIZI)
    ore = "".join(f'<li>{icon("i-orologio")}<span>{esc(o["giorni"])}<br>{esc(o["ore"])}</span></li>' for o in A["orari"][:1])
    return f"""<footer class="footer on-dark">
  <div class="container">
    <div class="footer__cta">
      <h2>Costruiamo insieme la casa <em>che hai in mente.</em></h2>
      <div class="btn-row"><a class="footer__phone" href="tel:{A["telefono_href"]}">{icon("i-telefono")}{esc(A["telefono"])}</a></div>
    </div>
    <div class="footer__grid">
      <div class="footer__brand">{brand()}
        <p>Impresa edile ad Agrate Brianza dal {A["anno_fondazione"]}. Ristrutturazioni chiavi in mano, impianti, finiture, serramenti, tetti e facciate.</p>
        <div class="footer__social"><a href="{esc(A["facebook"])}" target="_blank" rel="noopener noreferrer" aria-label="Multiservice su Facebook">{icon("i-facebook")}</a>
        <a href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp">{icon("i-whatsapp")}</a>
        <a href="mailto:{esc(A["email"])}" aria-label="Scrivici una email">{icon("i-mail")}</a></div>
      </div>
      <div><h3>Servizi</h3><ul class="footer__links">{serv}</ul></div>
      <div><h3>Azienda</h3><ul class="footer__links">
        <li><a href="/chi-siamo/">Chi siamo</a></li><li><a href="/lavori/">Lavori realizzati</a></li>
        <li><a href="/certificazioni/">Certificazioni</a></li><li><a href="/contatti/">Contatti</a></li>
        <li><a href="{esc(A["google_recensioni"])}" target="_blank" rel="noopener noreferrer">Recensioni su Google</a></li></ul></div>
      <div><h3>Contatti</h3><ul class="footer__contact">
        <li>{icon("i-pin")}<a href="{esc(A["google_maps"])}" target="_blank" rel="noopener noreferrer">{esc(sede["via"])}<br>{esc(sede["cap"])} {esc(sede["citta"])} ({esc(sede["provincia"])})</a></li>
        <li>{icon("i-telefono")}<a href="tel:{A["telefono_href"]}">{esc(A["telefono"])}</a></li>
        <li>{icon("i-whatsapp")}<a href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer">{esc(A["cellulare"])}</a></li>
        <li>{icon("i-mail")}<a href="mailto:{esc(A["email"])}">{esc(A["email"])}</a></li>
        {ore}</ul></div>
    </div>
    <div class="footer__legal">
      <p>© <span data-year>{OGGI.year}</span> {" · ".join(legali)}</p>
      <nav aria-label="Note legali"><a href="/privacy-policy/">Privacy policy</a><a href="/cookie-policy/">Cookie policy</a></nav>
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


def page_hero(meta):
    crumbs = meta.get("breadcrumb", [])
    bc = ""
    if crumbs:
        items = ['<li><a href="/">Home</a></li>']
        for name, href in crumbs[:-1]:
            items.append(f'<li><a href="{href}">{esc(name)}</a></li>')
        items.append(f'<li aria-current="page">{esc(crumbs[-1][0])}</li>')
        bc = f'<nav aria-label="Percorso"><ol class="breadcrumb">{"".join(items)}</ol></nav>'
    media = ""
    if meta.get("hero_img"):
        badge = f'<span class="page-hero__badge">{icon(meta.get("hero_badge_icon", "i-pin"))}{esc(meta["hero_badge"])}</span>' if meta.get("hero_badge") else ""
        media = f'<div class="page-hero__media" data-reveal="scale">{img(meta["hero_img"], meta.get("hero_alt", ""), "(max-width: 860px) 100vw, 42vw", eager=True)}{badge}</div>'
    grid_cls = "page-hero__grid" + ("" if media else " page-hero__grid--solo")
    cta = ""
    if meta.get("hero_cta", True):
        cta = (f'<div class="btn-row"><a class="btn btn--primary" href="{meta["_form_href"]}">Richiedi un preventivo {ARROW}</a>'
               f'<a class="btn btn--ghost" href="tel:{A["telefono_href"]}">{icon("i-telefono")} {esc(A["telefono"])}</a></div>')
    lead = f'<p class="lead">{meta["lead"]}</p>' if meta.get("lead") else ""
    eyebrow = f'<span class="eyebrow">{esc(meta["eyebrow"])}</span>' if meta.get("eyebrow") else ""
    return f"""<section class="page-hero on-dark">
  <div class="container {grid_cls}">
    <div class="page-hero__content" data-reveal>{bc}{eyebrow}<h1>{meta["h1"]}</h1>{lead}{cta}</div>
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
    header_cls = "header header--over" if meta.get("header_over") else "header"
    hero = "" if meta.get("no_hero") else page_hero(meta)
    preload = meta.get("_preload", "")
    robots = '<meta name="robots" content="noindex, follow">' if meta.get("noindex") else '<meta name="robots" content="index, follow, max-image-preview:large">'
    return f"""<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{esc(full_title)}</title>
<meta name="description" content="{esc(meta["descrizione"])}">
{robots}
<link rel="canonical" href="{canonical}">
<meta name="theme-color" content="#121416">
<meta name="format-detection" content="telephone=no">
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">
<meta property="og:site_name" content="{esc(A["nome"])} Impresa Edile">
<meta property="og:title" content="{esc(full_title)}">
<meta property="og:description" content="{esc(meta["descrizione"])}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{og_img}">
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
<body>
<a class="skip-link" href="#contenuto">Vai al contenuto</a>
<header class="{header_cls}">
  <div class="container header__inner">{brand()}{nav_html(meta.get("nav", ""), form_href)}</div>
</header>
{mobile_menu(form_href)}
<main id="contenuto">
{hero}
{body}
</main>
{footer_html()}
<nav class="action-bar" aria-label="Contatti rapidi">
  <a href="tel:{A["telefono_href"]}">{icon("i-telefono")}Chiama</a>
  <a class="action-bar__wa" href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer">{icon("i-whatsapp")}WhatsApp</a>
  <a class="action-bar__cta" href="{form_href}">{icon("i-documento")}Preventivo</a>
</nav>
<a class="wa-float" href="{esc(WA_URL)}" target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp">{icon("i-whatsapp")}<span>Scrivici su WhatsApp</span></a>
<dialog class="lightbox" id="lightbox" aria-label="Galleria fotografica">
  <div class="lightbox__bar"><span class="lightbox__count"></span><button class="lightbox__btn lightbox__close" type="button" aria-label="Chiudi">{icon("i-chiudi")}</button></div>
  <div class="lightbox__stage"><img alt=""><button class="lightbox__btn lightbox__prev" type="button" aria-label="Foto precedente">{icon("i-freccia-sx")}</button><button class="lightbox__btn lightbox__next" type="button" aria-label="Foto successiva">{icon("i-freccia")}</button></div>
  <p class="lightbox__caption"></p>
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
            info = immagine(meta["preload_hero"])
            meta["_preload"] = f'<link rel="preload" as="image" type="image/webp" imagesrcset="{srcset_of(info)}" imagesizes="100vw" fetchpriority="high">'
        meta["_form_href"] = "#preventivo" if meta.get("ha_form", True) else "/contatti/#preventivo"
        if meta.get("no_hero") is not True:
            pass
        html_text = layout(meta, render_template(body))
        write_page(meta["percorso"], html_text, meta.get("priorita", "0.7"))


def build_service_pages():
    for s in SERVIZI:
        correlati = [l for l in LAVORI if l["categoria"] in s.get("categoria_lavori", []) or s["slug"] in l.get("servizi", [])]
        punti = "".join(f'<li>{icon("i-check")}<span>{esc(p)}</span></li>' for p in s["punti"])
        testo = "".join(f"<p>{esc(p)}</p>" for p in s["testo"])
        faq = "".join(
            f'<details><summary>{esc(q["d"])}<span class="faq__icon">{icon("i-piu")}</span></summary><p>{esc(q["r"])}</p></details>'
            for q in s.get("faq", [])
        )
        note = '<p class="gallery-note">Immagini di prodotti e soluzioni disponibili a catalogo.</p>' if s["slug"] == "serramenti" else ""
        lavori_html = ""
        if correlati:
            cards = "".join(work_card(l) for l in correlati[:3])
            lavori_html = f"""<section class="section section--alt"><div class="container">
<div class="section-head section-head--row"><div><span class="eyebrow">Lavori realizzati</span><h2>Cantieri di {esc(s["nome"].lower())}</h2></div>
<a class="link-arrow" href="/lavori/">Tutti i lavori {icon("i-freccia")}</a></div>
<div class="works">{cards}</div></div></section>"""
        body = f"""<section class="section"><div class="container svc-intro">
  <div class="prose" data-reveal>
    <span class="eyebrow">{esc(s["nome_esteso"])}</span>
    <p class="lead">{esc(s["lead"])}</p>
    {testo}
    <h2>Cosa facciamo</h2>
    <ul class="checklist">{punti}</ul>
  </div>
  <aside class="aside-card on-dark" aria-label="Richiedi un preventivo" data-reveal data-d="1">
    <h3>Sopralluogo e preventivo <em>senza impegno</em></h3>
    <ul>
      <li>{icon("i-check")}Valutazione in cantiere con un tecnico</li>
      <li>{icon("i-check")}Preventivo chiaro, con costi e tempi</li>
      <li>{icon("i-check")}Un'unica impresa per tutte le lavorazioni</li>
    </ul>
    <a class="btn btn--primary" href="#preventivo">Richiedi un preventivo {ARROW}</a>
    <a class="btn btn--ghost" href="tel:{A["telefono_href"]}">{icon("i-telefono")} {esc(A["telefono"])}</a>
    <p class="aside-card__hours">{" · ".join(esc(o["giorni"] + " " + o["ore"]) for o in A["orari"][:1])}</p>
  </aside>
</div></section>
<section class="section section--white" id="galleria"><div class="container">
  <div class="section-head"><span class="eyebrow">Galleria</span><h2>{esc(s["galleria_titolo"])}</h2></div>
  {galleria([dict(src=g["src"], alt=g["alt"]) for g in s["galleria"]], "g-" + s["slug"])}
  {note}
</div></section>
{lavori_html}
<section class="section"><div class="container faq">
  <div class="faq__intro" data-reveal><span class="eyebrow">Domande frequenti</span><h2>Hai qualche <em>dubbio?</em></h2>
  <p class="muted">Se non trovi la risposta che cerchi, chiamaci al <a href="tel:{A["telefono_href"]}">{esc(A["telefono"])}</a>.</p></div>
  <div class="faq__list" data-reveal data-d="1">{faq}</div>
</div></section>
{sezione_contatto(servizio=s["slug"])}
<section class="section section--alt section--tight"><div class="container">
  <div class="section-head"><span class="eyebrow">Altri servizi</span><h2>Tutto per la tua casa, <em>un'unica impresa</em></h2></div>
  {servizi_links(s["slug"])}
</div></section>"""
        meta = {
            "percorso": f'/{s["slug"]}/',
            "titolo": s["titolo_seo"],
            "descrizione": s["descrizione_seo"],
            "nav": "servizi",
            "eyebrow": "Servizi · " + A["sede_operativa"]["citta"],
            "h1": s["h1"],
            "lead": esc(s["sommario"]),
            "hero_img": s["copertina"]["src"],
            "hero_alt": s["copertina"]["alt"],
            "hero_badge": f'{len(s["galleria"])} foto dai nostri lavori' if s["slug"] != "serramenti" else "Fornitura e posa",
            "hero_badge_icon": "i-espandi" if s["slug"] != "serramenti" else "i-check",
            "breadcrumb": [["Servizi", "/servizi/"], [s["nome_esteso"], f'/{s["slug"]}/']],
            "og_img": s["copertina"]["src"],
            "jsonld_extra": [{
                "@context": "https://schema.org", "@type": "Service",
                "name": s["nome_esteso"], "serviceType": s["nome_esteso"], "description": s["descrizione_seo"],
                "provider": {"@id": DOMINIO + "/#azienda"},
                "areaServed": [{"@type": "City", "name": z} for z in A["zone"]],
                "url": DOMINIO + f'/{s["slug"]}/',
            }],
        }
        meta["_form_href"] = "#preventivo"
        write_page(meta["percorso"], layout(meta, body), "0.9")


def build_work_pages():
    for i, l in enumerate(LAVORI):
        prev_l = LAVORI[i - 1]
        next_l = LAVORI[(i + 1) % len(LAVORI)]
        servizi_txt = ", ".join(
            f'<a href="/{sl}/">{esc(SERV_BY_SLUG[sl]["nome_esteso"])}</a>' for sl in l.get("servizi", []) if sl in SERV_BY_SLUG
        )
        facts = (
            f'<dl class="facts" data-reveal><div><dt>Luogo</dt><dd>{esc(l["luogo"])}{(" · " + esc(l["indirizzo"])) if l["indirizzo"] else ""}</dd></div>'
            f'<div><dt>Anno</dt><dd>{esc(l["anno"])}</dd></div>'
            + (f'<div><dt>Tipologia</dt><dd>{esc(l["tipologia"])}</dd></div>' if l["tipologia"] else "")
            + (f'<div><dt>Servizi</dt><dd>{servizi_txt}</dd></div>' if servizi_txt else "")
            + "</dl>"
        )
        tags = "".join(f'<span class="tag">{esc(t)}</span>' for t in l["interventi"])
        testo = "".join(f"<p>{esc(p)}</p>" for p in l["testo"])
        cmp_html = ""
        if l["confronto"]:
            cmp_html = f'<div data-reveal data-d="1">{confronto(l["slug"])}</div>'
        else:
            cmp_html = f'<div class="img-reveal page-hero__media" data-d="1">{img(l["copertina"]["src"], l["titolo"], "(max-width: 860px) 100vw, 45vw")}</div>'
        foto = l["foto"]
        body = f"""<section class="section"><div class="container">
  {facts}
  <div class="work-detail">
    <div class="prose" data-reveal><span class="eyebrow">Il lavoro</span><h2>{esc(l["titolo"])}</h2><p class="lead">{esc(l["sommario"])}</p>{testo}
      <div class="tags">{tags}</div></div>
    {cmp_html}
  </div>
</div></section>
<section class="section section--white"><div class="container">
  <div class="section-head"><span class="eyebrow">Foto del cantiere</span><h2>{len(foto)} immagini <em>dal lavoro</em></h2></div>
  {galleria(foto, "g-" + l["slug"], fasi=True)}
</div></section>
<section class="section section--tight"><div class="container">
  {cta_band("Hai un progetto <em>simile?</em>", "Raccontacelo: fissiamo un sopralluogo e ti prepariamo un preventivo dettagliato, senza impegno.")}
  <div class="pager pager--spaced">
    <a href="/lavori/{prev_l["slug"]}/"><small>{icon("i-freccia-sx")} Lavoro precedente</small><strong>{esc(prev_l["titolo"])}</strong><span class="muted">{esc(prev_l["luogo"])}</span></a>
    <a class="pager__next" href="/lavori/{next_l["slug"]}/"><small>Lavoro successivo {icon("i-freccia")}</small><strong>{esc(next_l["titolo"])}</strong><span class="muted">{esc(next_l["luogo"])}</span></a>
  </div>
</div></section>
{sezione_contatto()}"""
        cover = l["copertina"]["src"]
        meta = {
            "percorso": f'/lavori/{l["slug"]}/',
            "titolo": f'{l["titolo"]} {in_luogo(l["luogo"])}',
            "descrizione": l["sommario"],
            "nav": "lavori",
            "eyebrow": " · ".join(x for x in (CATEGORIE.get(l["categoria"], ""), l["anno"]) if x),
            "h1": esc(l["titolo"]) + f' <em>{esc(in_luogo(l["comune"]))}</em>',
            "lead": esc(l["sommario"]),
            "hero_img": cover,
            "hero_alt": l["copertina"]["alt"],
            "hero_badge": f'{len(l["foto"])} foto · {l["luogo"]}',
            "hero_badge_icon": "i-pin",
            "breadcrumb": [["Lavori", "/lavori/"], [l["titolo"], f'/lavori/{l["slug"]}/']],
            "og_img": cover,
        }
        write_page(meta["percorso"], layout(meta, body), "0.6")


# --------------------------------------------------------------------------
# File di supporto: favicon, immagine social, sitemap, robots, manifest
# --------------------------------------------------------------------------
def copy_assets():
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
    og_src = FOTO / "lavori/monza-via-viotti/dopo-01.jpg"
    # Icone e immagine social si rigenerano solo se cambiano le foto di partenza:
    # versioni diverse di Pillow producono PNG uguali a vista ma con byte diversi.
    firma = "icone-v1:" + file_hash(src) + ":" + (file_hash(og_src) if og_src.exists() else "")
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

    # Immagine per la condivisione social (1200x630)
    if og_src.exists():
        im = ImageOps.exif_transpose(Image.open(og_src)).convert("RGB")
        im = ImageOps.fit(im, (1200, 630), Image.LANCZOS, centering=(0.6, 0.45))
        shade = Image.new("L", (1200, 630), 0)
        sd = ImageDraw.Draw(shade)
        for x in range(1200):
            sd.line([(x, 0), (x, 630)], fill=int(235 * max(0, 1 - x / 900) ** 0.7))
        im = Image.composite(Image.new("RGB", im.size, (18, 20, 22)), im, shade)
        m = mask.copy()
        m.thumbnail((150, 150), Image.LANCZOS)
        im.paste(Image.new("RGB", m.size, (255, 255, 255)), (70, 630 - 70 - m.height), m)
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
        "start_url": "/", "display": "standalone", "background_color": "#f6f3ee", "theme_color": "#121416",
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
