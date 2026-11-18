# Multiservice · Impresa edile ad Agrate Brianza

Sito statico (HTML, CSS e JavaScript, nessun framework) generato da uno script Python, più una piccola funzione su Vercel per il modulo di richiesta preventivo. Sostituisce il sito WordPress su www.multiservice-srls.it.

```
build.py                genera il sito in public/ (python3 build.py)
contenuti/
  azienda.json          dati aziendali: telefoni, email, sedi, P.IVA, orari, zone, recensioni, certificazioni
  servizi.json          i 7 servizi: testi, elenco lavorazioni, galleria foto, domande frequenti
  categorie-lavori.json tipologie dei lavori (filtri della pagina Lavori)
  lavori/<nome>.json    un file per cantiere: testi e foto prima / durante / dopo / confronto;
                        il nome del file è l'indirizzo della pagina (/lavori/<nome>/)
foto/                   foto originali (sorgenti, non vengono pubblicate così come sono)
src/
  pagine/*.html         testi delle pagine fisse (home, servizi, lavori, chi siamo, certificazioni, contatti,
                        privacy, cookie, note legali, accessibilità, 404)
  assets/css/style.css  design system: token (palette, tipografia, curva di movimento) in cima al file
  assets/js/main.js     menu, hero (3D o fotogrammi), movimento, confronto, cantieri, lightbox, filtri, modulo, mappa
  assets/js/3d/hero.js  scena 3D della home GIÀ COMPILATA (si committa, vedi sotto)
  assets/img/hero/      fotogrammi fissi della scena (AVIF + WebP) e sagoma SVG dell'edificio (sagoma.json)
  assets/img/icons.svg  icone e logo vettoriale
  assets/fonts/         Archivo variabile (SIL Open Font License), ospitato sul sito
  immagini.json         registro delle foto già convertite (non modificare a mano)
  pagine-date.json      data dell'ultima modifica reale di ogni pagina, per la sitemap (automatico)
strumenti/3d/           sorgenti della scena 3D (Three.js, GSAP, Lenis) e script per compilarla e
                        ricavarne i fotogrammi; serve Node solo qui, non per pubblicare il sito
api/contatti.js         funzione Vercel che riceve il modulo e invia l'email
vercel.json             header di sicurezza (CSP), cache, redirect dai vecchi indirizzi WordPress
.pages.yml              configurazione del pannello Pages CMS (moduli per i lavori)
.github/workflows/      aggiorna-sito.yml: rigenera public/ a ogni modifica di contenuti o foto
public/                 SITO PRONTO: è la cartella che viene pubblicata
DIREZIONE-ARTISTICA-MULTISERVICE.md   brief della direzione artistica (fonte di verità per idea, palette, hero, testi)
CREDITS.md              librerie, carattere, texture e loro licenze
```

## Generare il sito

```bash
pip3 install pillow
```

```bash
python3 build.py
```

Lo script converte le foto nuove o modificate in WebP (480, 960 e 1600 px), rigenera tutte le pagine, la sitemap, le icone e l'immagine per i social. Le foto già convertite non vengono rielaborate.

Per vederlo in locale:

```bash
python3 -m http.server 5173 --directory public
```

e apri http://127.0.0.1:5173 (in locale il modulo non invia email: compare la scelta WhatsApp / email, che è anche il comportamento di riserva online).

## La home: "Un cantiere, un solo interlocutore"

L'hero è una scena 3D a tutto schermo: un condominio di tre piani visto in sezione che, scorrendo (pin di 300vh),
viene rinnovato mestiere dopo mestiere. Un fronte di luce color mattone attraversa le superfici e dove passa
tutto diventa nuovo (un solo uniform nello shader, `strumenti/3d/src/materiali.js`). Le 8 fasi:

| p | Fase | Servizio |
|---|---|---|
| 0,00–0,10 | Com'era | — |
| 0,10–0,25 | un tramezzo si apre, una porta si taglia | Ristrutturazioni |
| 0,25–0,42 | cavi gialli e tubi blu si tracciano, i quadri si accendono | Impianti |
| 0,42–0,56 | piastrelle e listelli si posano fila dopo fila | Pavimenti e rivestimenti |
| 0,56–0,68 | il rullo di luce ripassa le pareti piano per piano | Imbiancature |
| 0,68–0,78 | i vecchi serramenti escono, i nuovi entrano e si chiudono | Serramenti |
| 0,78–0,90 | coppi nuovi, cappotto bicolore sulle facciate | Tetti · Facciate e cappotto |
| 0,90–1,00 | la facciata chiude la sezione, tardo pomeriggio, finestre accese | Richiedi un sopralluogo |

Testi delle fasi: `FASI` in `build.py` (nomi e sommari presi da `contenuti/servizi.json`). Percorso della camera:
`CAMERA` in `strumenti/3d/src/hero.js`. Alla fine si può girare intorno all'edificio trascinando, e passando su tetto,
finestre e facciate compare il servizio (clic = pagina del servizio).

**Quando la scena 3D non parte** (WebGL 2 assente, `prefers-reduced-motion`, risparmio dati, meno di 4 GB di memoria
o 4 core, schermo sotto 360 px, oppure `/?statico` nell'indirizzo) l'hero mostra 6 fotogrammi fissi della stessa
scena in dissolvenza con zoom lento, più la foto vera di Monza, con pulsanti Pausa / precedente / successivo.
Con "riduci movimento" parte fermo sulla casa finita. Sui telefoni la scena si carica al primo gesto: fino ad
allora si vede il primo fotogramma, identico alla scena ferma.

**Caricamento**: il primo fotogramma (AVIF, ~15–25 KB) è precaricato ed è l'immagine principale; sopra, la sagoma
dell'edificio si traccia in SVG in 1,1 s. Il 3D (`hero.js`, 724 KB minificato, ~205 KB gzip) arriva con `import()`
dopo il caricamento. Qualità adattiva: DPR massimo 1,5; se i fotogrammi superano 23 ms si spengono in ordine
profondità di campo, bagliore, polvere; disegno sospeso fuori schermo e a scheda nascosta.

### Ricostruire il bundle 3D (solo se si modificano i sorgenti in `strumenti/3d/src/`)

```bash
cd strumenti/3d && npm ci && npm run build
```

Scrive `src/assets/js/3d/hero.js`, che va committato: la GitHub Action e Vercel non usano Node.

### Rigenerare i fotogrammi di riserva, la sagoma e l'immagine social

Da rifare dopo ogni modifica alla scena (servono Playwright con Chromium e Pillow):

```bash
python3 build.py
```

```bash
cd strumenti/3d && npm run fotogrammi
```

```bash
python3 build.py
```

Lo script apre la home in Chromium headless con `/?fotogramma=<p>` (scena ferma senza interfaccia) per i 6 valori di
`FOTOGRAMMI` (in `build.py` e in `fotogrammi.mjs`, da tenere allineati), in orizzontale 1600×900 e in verticale
720×1280; salva AVIF e WebP in `src/assets/img/hero/`, la sagoma in `sagoma.json` e la sorgente dell'immagine social
in `strumenti/3d/og-sorgente.jpg` (da cui `build.py` ricava `og-multiservice.jpg`, 1200×630).

## Aggiornare i contenuti

### Dal pannello (per l'impresa)

L'impresa aggiunge e modifica i lavori da **[app.pagescms.org](https://app.pagescms.org)**, accedendo con la propria email: nessun account GitHub. Ogni salvataggio crea un commit; la GitHub Action `aggiorna-sito.yml` rigenera `public/` (con Pillow, convertendo solo le foto nuove) e salva il risultato; Vercel pubblica. In tutto un paio di minuti.

- Ordine nel sito: anno di fine lavori (dal più recente), poi data di inserimento. I primi 4 compaiono in home.
- Le foto si caricano nei campi «a lavori finiti», «durante», «prima» e «altre»: in galleria compaiono in quest'ordine, con l'etichetta della fase. Anche le foto del «confronto prima e dopo» entrano in galleria: un lavoro con foto solo lì viene pubblicato lo stesso. La descrizione per i lettori di schermo e Google è generata da titolo, comune e fase (le descrizioni scritte a mano dei cantieri iniziali sono nel campo nascosto `descrizioni`).
- **Limite**: Pages CMS non accetta file sopra ~3 MB (limite di Vercel sulle richieste, 4,5 MB, con l'invio in base64). Le foto più pesanti vanno ridotte prima: vedi la guida per l'impresa.
- «Bozza» nasconde il lavoro dal sito (pagina, elenchi, home e sitemap) finché non viene disattivata. Il lavoro di prova «PROVA 1 – AGRATE» (`contenuti/lavori/prova-1-agrate.json`) è in bozza: si può eliminare dal pannello.
- Un dato sbagliato non blocca il sito: `build.py` salta la foto o il lavoro con un avviso, visibile nel log della Action.

**Primo collegamento (una volta sola, da chi gestisce il repository):**
1. Vai su [app.pagescms.org](https://app.pagescms.org), accedi con GitHub e installa la GitHub App di Pages CMS sul repository `multiservice_agrate`.
2. Apri il repository nel pannello: legge `.pages.yml` e mostra «Lavori e cantieri».
3. In **Collaborators** invita l'email dell'impresa: riceverà un link per accedere.
4. In GitHub → Settings → Actions → General verifica che le Actions siano abilitate.

### A mano (per lo sviluppatore)

**Aggiungere un cantiere**: metti le foto in `foto/lavori/<nome-cantiere>/` e crea `contenuti/lavori/<nome-cantiere>.json` copiando uno esistente. Rigenera con `python3 build.py` (oppure fai solo push: ci pensa la Action).

**Nuova tipologia di lavoro**: aggiungila in `contenuti/categorie-lavori.json` e nel campo `categoria` di `.pages.yml`; per farla comparire nella pagina di un servizio, aggiungila al suo `categoria_lavori` in `contenuti/servizi.json`.

**Aggiungere foto a un servizio**: metti la foto in `foto/servizi/<servizio>/` e aggiungila alla `galleria` del servizio in `contenuti/servizi.json`.

**Telefono, orari, recensioni, zone servite**: `contenuti/azienda.json`. Se cambia il testo di privacy o cookie policy, aggiorna anche `policy_aggiornate_il`.

## Privacy, cookie e sicurezza

- **Nessun dato a terzi all'apertura delle pagine**: font, immagini e script sono ospitati sul sito; nessun Google Analytics, pixel o Google Fonts. Per questo non serve il banner cookie (Linee guida Garante 10/06/2021).
- **Google Maps** si carica solo se il visitatore tocca «Mostra la mappa», con avviso. WhatsApp e Facebook sono semplici link.
- **Se in futuro si aggiungono statistiche, pixel o altri servizi esterni** vanno aggiornate `privacy-policy.html` e `cookie-policy.html`, e quasi sempre serve un banner di consenso.
- **Foto**: dai file pubblicati sono stati tolti i metadati EXIF (inclusa la posizione GPS) e sono state oscurate le targhe delle auto visibili nei cantieri di Monza e Agrate.
- **Header di sicurezza** (`vercel.json`, invariato): Content-Security-Policy restrittiva (solo risorse del sito, mappa Google consentita in iframe), HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy. Niente script o stili inline: se si aggiunge codice, va messo in `main.js` / `style.css`. La scena 3D funziona con la CSP attuale (nessun worker, nessun `blob:`), quindi non è stato necessario aggiungere nulla.
- **Modulo**: validazione lato browser e lato server, campo trappola anti-bot, controllo del tempo di compilazione, controllo dell'origine, limite di invii per IP, escape dell'HTML nell'email. Non salva dati: li inoltra solo via email.

## Pubblicare su Vercel

1. Importa la cartella in un repository GitHub e collegalo a Vercel (nessun framework; la configurazione è in `vercel.json`, che pubblica `public/`).
2. Vercel pubblica `public/` così com'è. Se modifichi contenuti, foto, `src/` o `build.py`, la GitHub Action rigenera e salva `public/` da sola dopo il push (puoi comunque eseguire `python3 build.py` in locale per vedere il risultato). `ignoreCommand` in `vercel.json` evita pubblicazioni inutili per i commit che non cambiano `public/`, `vercel.json` o `api/`.
3. In Vercel → Settings → Environment Variables imposta, per il modulo:
   - `RESEND_API_KEY` (account gratuito su resend.com, con il dominio multiservice-srls.it verificato)
   - `CONTATTI_DESTINATARIO` (es. `multi-servicesrls@hotmail.com`)
   - `CONTATTI_MITTENTE` (es. `Sito Multiservice <sito@multiservice-srls.it>`)

   Finché non sono impostate, il modulo propone l'invio della richiesta via WhatsApp o email.
4. Collega il dominio www.multiservice-srls.it. I vecchi indirizzi WordPress dei cantieri (`/cantiere-…`, `/i-nostri-lavori/`) hanno già i redirect permanenti; quelli dei servizi, delle certificazioni, dei contatti e delle policy restano identici.

## Cosa serve ancora dal cliente

I dati mancanti non sono stati inventati: compaiono come **segnaposto tratteggiati** nel footer finché non si compilano.

- [ ] **Ragione sociale esatta**: il sito usa «Multiservice S.r.l.» (certificato ISO 2025); il vecchio sito e il certificato F-Gas riportano «S.r.l.s.». → `ragione_sociale` in `contenuti/azienda.json`.
- [ ] **Numero REA, capitale sociale, PEC** (obbligatori per le società di capitali, art. 2250 c.c.) → `rea`, `capitale_sociale`, `pec` in `contenuti/azienda.json`.
- [ ] **Sede legale** a Binasco (MI), via Beatrice Tenda 5, ricavata dai certificati: confermare.
- [ ] **Email su dominio** (es. info@multiservice-srls.it) al posto dell'indirizzo hotmail → `email`.
- [ ] **Altri cantieri con foto prima / durante / dopo** e liberatorie dei committenti: è la cosa che fa più differenza. Si caricano dal pannello (campi «prima», «durante», «a lavori finiti», «confronto»).
- [ ] **Consenso degli operai** nelle foto: rivestimenti 08, 09, 10 (`foto/servizi/rivestimenti/`) e cantiere di Agrate (`foto/lavori/agrate-brianza-via-matteotti/`). Le foto sono ancora pubblicate: servono il consenso scritto o foto sostitutive.
- [ ] **Conferma dei testi dei cantieri** (in particolare cappotto termico ad Agrate e anni dei lavori) e delle **zone servite**.
- [ ] **Accreditamento degli enti di certificazione**: verificare che TNV Europe (ISO 9001) e Certifica.srl (F-Gas) siano accreditati (es. Accredia o ente equivalente nell'ambito IAF/EA). Finché non è verificato il sito riporta i certificati come fatti (ente, numero, scadenza) senza farne un argomento di vendita.
- [ ] **Scadenze dei certificati**: ISO 9001:2015 n. 250718-00093-078 **valido fino al 17/07/2028**; F-Gas n. CI00439 **valido fino al 01/02/2029**. Al rinnovo aggiornare `certificazioni` in `contenuti/azienda.json` e le scansioni in `foto/certificazioni/`.
- [ ] **Vie dei cantieri**: nei testi pubblici compare solo il comune (`MOSTRA_VIA = False` in `build.py`). Se il cliente vuole mostrare la via dei condomini, mettere `True`. Restano le vie negli indirizzi delle pagine (`/lavori/monza-via-viotti/`, non modificabili per i redirect) e in alcune descrizioni delle foto (`descrizioni` nei file dei lavori).
- [ ] **Serramenti**: le foto sono di prodotti a catalogo / showroom (dichiarato nella pagina). Meglio installazioni reali.
- [ ] **«Sopralluogo gratuito»**: il sito dice «senza impegno». Se è anche gratuito, scriverlo aumenta le richieste.
- [ ] **Google Business**: link aggiornato (`google_recensioni`) e invito ai clienti a lasciare una recensione (oggi 3; nel sito ne compaiono 2, riportate testualmente, con il link a Google per leggerle tutte).
- [ ] Dopo la pubblicazione: aggiornare il sito sulla scheda Google Business, inviare la sitemap a Search Console.

### Testi legali: bozze da validare

Tutti da far rileggere al cliente o al suo consulente prima di andare online (in ogni file c'è un commento `BOZZA DA VALIDARE`):

- `src/pagine/privacy-policy.html`: titolare (forma esatta), fornitori (Vercel, Resend, casella email, Google Maps solo al clic), tempi di conservazione.
- `src/pagine/cookie-policy.html`: nessun cookie e nessun banner. **Se si aggiunge un servizio esterno** (statistiche non anonime, mappa caricata subito, widget) servono il banner del Garante (Accetta / Rifiuta / Personalizza, preferenze nel footer) e l'aggiornamento di privacy e cookie policy.
- `src/pagine/note-legali.html` (nuova, `/note-legali/`): dati dell'impresa, diritti su testi, foto e progetti.
- `src/pagine/accessibilita.html` (nuova, `/accessibilita/`): dichiarazione volontaria; verificare se all'impresa si applica l'European Accessibility Act (non vendendo online, probabile esenzione).

## Verifiche fatte su questa versione

- `python3 build.py`: nessun errore né avviso (solo l'indicazione del lavoro in bozza). Il lavoro di prova non è in `public/` né nella sitemap.
- Screenshot a 1440 e 390 px di home (tutte le fasi dell'hero), servizio, lavoro con confronto (Monza) e solo cantiere (Burago), Lavori, Chi siamo, Certificazioni, Contatti, 404; prova con `prefers-reduced-motion`.
- Console del browser pulita con la CSP di `vercel.json` applicata da un server locale.
- Lighthouse 12 (mobile, server locale senza compressione): home Performance 93, Accessibility 100, Best practices 100, SEO 100; Lavori 91/100/100/100; Contatti 98/100/100/100. Il LCP misurato in locale (≈3 s, il titolo che aspetta il font) scende con la compressione brotli di Vercel.
- Nessun collegamento interno rotto; `tel:`, `mailto:`, `wa.me` e le 22 destinazioni dei redirect esistono.
- Modulo: errori di compilazione, invio riuscito (risposta `ok` del server), riserva WhatsApp / email / telefono quando il server non risponde. Il messaggio «arrivata» compare solo con la conferma del server.
- Pages CMS: `.pages.yml` e i campi dei lavori non sono cambiati; i nuovi template leggono gli stessi campi (prima, durante, dopo, altre, copertina, confronto, bozza).

## Note tecniche

- Foto non usate nel sito: non vengono pubblicate; le loro versioni WebP vengono cancellate da `public/` alla build successiva.
- Le foto stock del vecchio sito (elettricisti, soggiorni, ecc.) non sono state riutilizzate: la licenza potrebbe non essere trasferibile.
- Icone disegnate per il progetto; il logo è la vettorializzazione del monogramma originale.
- Design system: palette calce / intonaco / cemento / cantiere, rosso mattone solo per il pulsante principale e il fronte di luce, giallo e blu solo per cavi e tubi della scena e per l'icona degli impianti. Un'unica famiglia, Archivo, con l'asse di larghezza (112% nei titoli dell'hero, 75% nelle quote). Un'unica curva di movimento, `cubic-bezier(.2,.7,.1,1)`.
- Il testo secondario usa `--cemento-testo` (#4F575B, 6,7:1 su calce): il `--cemento` del brief (#8E969A) fa 2,7:1 e resta solo decorativo.
