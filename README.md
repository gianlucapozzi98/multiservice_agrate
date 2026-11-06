# Multiservice · Impresa edile ad Agrate Brianza

Sito statico (HTML, CSS e JavaScript, nessun framework) generato da uno script Python, più una piccola funzione su Vercel per il modulo di richiesta preventivo. Sostituisce il sito WordPress su www.multiservice-srls.it.

```
build.py                genera il sito in public/ (python3 build.py)
contenuti/
  azienda.json          dati aziendali: telefoni, email, sedi, P.IVA, orari, zone, recensioni, certificazioni
  servizi.json          i 7 servizi: testi, elenco lavorazioni, galleria foto, domande frequenti
  lavori.json           i cantieri (portfolio): testi e foto prima / durante / dopo
foto/                   foto originali (sorgenti, non vengono pubblicate così come sono)
  lavori/<cantiere>/    una cartella per cantiere
  servizi/<servizio>/   gallerie di imbiancature, rivestimenti, tetti, serramenti
  azienda/, certificazioni/
src/
  pagine/*.html         testi delle pagine fisse (home, chi siamo, servizi, lavori, certificazioni, contatti, privacy, cookie, 404)
  assets/css/style.css  design system: palette e font in cima al file
  assets/js/main.js     menu, animazioni, galleria a schermo intero, filtri, modulo, mappa
  assets/img/icons.svg  icone e logo vettoriale
  assets/fonts/         Archivo e Instrument Serif (SIL Open Font License), ospitati sul sito
  immagini.json         registro delle foto già convertite (non modificare a mano)
api/contatti.js         funzione Vercel che riceve il modulo e invia l'email
vercel.json             header di sicurezza, cache, redirect dai vecchi indirizzi WordPress
public/                 SITO PRONTO: è la cartella che viene pubblicata
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

## Aggiornare i contenuti

**Aggiungere un cantiere**: crea `foto/lavori/<nome-cantiere>/` con le foto (JPG), poi aggiungi un blocco in `contenuti/lavori.json` copiando uno esistente (titolo, luogo, anno, categoria, testo, elenco foto con `fase` prima / durante / dopo). Il primo cantiere della lista è quello in evidenza in home. Rigenera con `python3 build.py`.

**Aggiungere foto a un servizio**: metti la foto in `foto/servizi/<servizio>/` e aggiungila alla `galleria` del servizio in `contenuti/servizi.json`.

**Telefono, orari, recensioni, zone servite**: `contenuti/azienda.json`.

> Il modo per far aggiornare il sito direttamente all'azienda (pannello per caricare cantieri e foto) è ancora da definire: la struttura a file JSON + cartelle di foto è già pronta per collegare un CMS basato su Git (es. Pages CMS o Decap/Sveltia CMS) con ricostruzione automatica su Vercel.

## Privacy, cookie e sicurezza

- **Nessun dato a terzi all'apertura delle pagine**: font, immagini e script sono ospitati sul sito; nessun Google Analytics, pixel o Google Fonts. Per questo non serve il banner cookie (Linee guida Garante 10/06/2021).
- **Google Maps** si carica solo se il visitatore tocca «Mostra la mappa», con avviso. WhatsApp e Facebook sono semplici link.
- **Se in futuro si aggiungono statistiche, pixel o altri servizi esterni** vanno aggiornate `privacy-policy.html` e `cookie-policy.html`, e quasi sempre serve un banner di consenso.
- **Foto**: dai file pubblicati sono stati tolti i metadati EXIF (inclusa la posizione GPS) e sono state oscurate le targhe delle auto visibili nei cantieri di Monza e Agrate.
- **Header di sicurezza** (`vercel.json`): Content-Security-Policy restrittiva (solo risorse del sito, mappa Google consentita in iframe), HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy. Niente script o stili inline: se si aggiunge codice, va messo in `main.js` / `style.css`.
- **Modulo**: validazione lato browser e lato server, campo trappola anti-bot, controllo del tempo di compilazione, controllo dell'origine, limite di invii per IP, escape dell'HTML nell'email. Non salva dati: li inoltra solo via email.

## Pubblicare su Vercel

1. Importa la cartella in un repository GitHub e collegalo a Vercel (nessun framework; la configurazione è in `vercel.json`, che pubblica `public/`).
2. Esegui `python3 build.py` prima di ogni push: Vercel pubblica `public/` così com'è.
3. In Vercel → Settings → Environment Variables imposta, per il modulo:
   - `RESEND_API_KEY` (account gratuito su resend.com, con il dominio multiservice-srls.it verificato)
   - `CONTATTI_DESTINATARIO` (es. `multi-servicesrls@hotmail.com`)
   - `CONTATTI_MITTENTE` (es. `Sito Multiservice <sito@multiservice-srls.it>`)

   Finché non sono impostate, il modulo propone l'invio della richiesta via WhatsApp o email.
4. Collega il dominio www.multiservice-srls.it. I vecchi indirizzi WordPress dei cantieri (`/cantiere-…`, `/i-nostri-lavori/`) hanno già i redirect permanenti; quelli dei servizi, delle certificazioni, dei contatti e delle policy restano identici.

## Prima di andare online (da verificare con il cliente)

- [ ] **Ragione sociale**: il sito usa «Multiservice S.r.l.» (come nel certificato ISO del 2025); il vecchio sito e il certificato F-Gas riportano «S.r.l.s.». Confermare.
- [ ] **Dati obbligatori per legge nel footer** (art. 2250 c.c.): numero REA, capitale sociale, PEC → campi `rea`, `capitale_sociale`, `pec` in `contenuti/azienda.json` (vuoti = non mostrati).
- [ ] **Sede legale** a Binasco (MI), via Beatrice Tenda 5, ricavata dai certificati: confermare.
- [ ] **Privacy policy**: far rileggere al cliente o al suo consulente; confermare i fornitori (hosting Vercel, invio email Resend, casella email) e i tempi di conservazione.
- [ ] **Foto con persone**: nelle foto di posa pavimenti (rivestimenti 08–10) e nel cantiere di Agrate compaiono operai. Verificare di avere il loro consenso alla pubblicazione o sostituire le foto.
- [ ] **Serramenti**: le foto della galleria sono di prodotti a catalogo / showroom (indicato nella pagina). Meglio sostituirle con installazioni reali appena disponibili.
- [ ] **Testi dei cantieri** in `contenuti/lavori.json`: descrizioni ricavate dalle foto e dal vecchio sito, da far confermare (in particolare cappotto termico ad Agrate e anni dei lavori).
- [ ] **Zone servite** in `contenuti/azienda.json`.
- [ ] **«Sopralluogo gratuito»**: il sito dice «senza impegno», come il vecchio sito. Se il sopralluogo è anche gratuito, scriverlo aumenta le richieste.
- [ ] Consigliato: email su dominio (es. info@multiservice-srls.it) al posto dell'indirizzo hotmail.
- [ ] Dopo la pubblicazione: aggiornare il sito sulla scheda Google Business, inviare la sitemap a Google Search Console, chiedere ai clienti soddisfatti una recensione su Google (oggi sono 3).

## Note tecniche

- Foto non usate nel sito: non vengono pubblicate; le loro versioni WebP vengono cancellate da `public/` alla build successiva.
- Le foto stock del vecchio sito (elettricisti, soggiorni, ecc.) non sono state riutilizzate: la licenza potrebbe non essere trasferibile.
- Icone disegnate per il progetto; il logo è la vettorializzazione del monogramma originale.
