# Multiservice · Impresa edile ad Agrate Brianza

Sito statico (HTML, CSS e JavaScript, nessun framework) generato da uno script Python, più una piccola funzione su Vercel per il modulo di richiesta preventivo. Sostituisce il sito WordPress su www.multiservice-srls.it.

```
build.py                genera il sito in public/ (python3 build.py)
contenuti/
  azienda.json          dati aziendali: telefoni, email, sedi, P.IVA, orari, zone, recensioni, certificazioni
  servizi.json          i 7 servizi: testi, elenco lavorazioni, galleria foto, domande frequenti
  categorie-lavori.json tipologie dei lavori (filtri della pagina Lavori)
  lavori/<nome>.json    un file per cantiere: testi e foto prima / durante / dopo;
                        il nome del file è l'indirizzo della pagina (/lavori/<nome>/)
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
  pagine-date.json      data dell'ultima modifica reale di ogni pagina, per la sitemap (automatico)
api/contatti.js         funzione Vercel che riceve il modulo e invia l'email
vercel.json             header di sicurezza, cache, redirect dai vecchi indirizzi WordPress
.pages.yml              configurazione del pannello Pages CMS (moduli per i lavori)
.github/workflows/      aggiorna-sito.yml: rigenera public/ a ogni modifica di contenuti o foto
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

### Dal pannello (per l'impresa)

L'impresa aggiunge e modifica i lavori da **[app.pagescms.org](https://app.pagescms.org)**, accedendo con la propria email: nessun account GitHub. Ogni salvataggio crea un commit; la GitHub Action `aggiorna-sito.yml` rigenera `public/` (con Pillow, convertendo solo le foto nuove) e salva il risultato; Vercel pubblica. In tutto un paio di minuti.

- Ordine nel sito: anno di fine lavori (dal più recente), poi data di inserimento. I primi 4 compaiono in home.
- Le foto si caricano nei campi «a lavori finiti», «durante», «prima» e «altre»: in galleria compaiono in quest'ordine, con l'etichetta della fase. La descrizione per i lettori di schermo e Google è generata da titolo, comune e fase (le descrizioni scritte a mano dei cantieri iniziali sono nel campo nascosto `descrizioni`).
- **Limite**: Pages CMS non accetta file sopra ~3 MB (limite di Vercel sulle richieste, 4,5 MB, con l'invio in base64). Le foto più pesanti vanno ridotte prima: vedi la guida per l'impresa.
- «Bozza» nasconde il lavoro dal sito finché non viene disattivata.
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
- **Header di sicurezza** (`vercel.json`): Content-Security-Policy restrittiva (solo risorse del sito, mappa Google consentita in iframe), HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy. Niente script o stili inline: se si aggiunge codice, va messo in `main.js` / `style.css`.
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

## Prima di andare online (da verificare con il cliente)

- [ ] **Ragione sociale**: il sito usa «Multiservice S.r.l.» (come nel certificato ISO del 2025); il vecchio sito e il certificato F-Gas riportano «S.r.l.s.». Confermare.
- [ ] **Dati obbligatori per legge nel footer** (art. 2250 c.c.): numero REA, capitale sociale, PEC → campi `rea`, `capitale_sociale`, `pec` in `contenuti/azienda.json` (vuoti = non mostrati).
- [ ] **Sede legale** a Binasco (MI), via Beatrice Tenda 5, ricavata dai certificati: confermare.
- [ ] **Privacy policy**: far rileggere al cliente o al suo consulente; confermare i fornitori (hosting Vercel, invio email Resend, casella email) e i tempi di conservazione.
- [ ] **Foto con persone**: nelle foto di posa pavimenti (rivestimenti 08–10) e nel cantiere di Agrate compaiono operai. Verificare di avere il loro consenso alla pubblicazione o sostituire le foto.
- [ ] **Serramenti**: le foto della galleria sono di prodotti a catalogo / showroom (indicato nella pagina). Meglio sostituirle con installazioni reali appena disponibili.
- [ ] **Testi dei cantieri** in `contenuti/lavori/`: descrizioni ricavate dalle foto e dal vecchio sito, da far confermare (in particolare cappotto termico ad Agrate e anni dei lavori).
- [ ] **Zone servite** in `contenuti/azienda.json`.
- [ ] **«Sopralluogo gratuito»**: il sito dice «senza impegno», come il vecchio sito. Se il sopralluogo è anche gratuito, scriverlo aumenta le richieste.
- [ ] Consigliato: email su dominio (es. info@multiservice-srls.it) al posto dell'indirizzo hotmail.
- [ ] Dopo la pubblicazione: aggiornare il sito sulla scheda Google Business, inviare la sitemap a Google Search Console, chiedere ai clienti soddisfatti una recensione su Google (oggi sono 3).

## Note tecniche

- Foto non usate nel sito: non vengono pubblicate; le loro versioni WebP vengono cancellate da `public/` alla build successiva.
- Le foto stock del vecchio sito (elettricisti, soggiorni, ecc.) non sono state riutilizzate: la licenza potrebbe non essere trasferibile.
- Icone disegnate per il progetto; il logo è la vettorializzazione del monogramma originale.
