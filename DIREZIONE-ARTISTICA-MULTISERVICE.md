# Multiservice — Nuova direzione artistica (evoluzione del sito esistente)

Brief per Claude Code. Il sito **esiste già** nel repository `gianlucapozzi98/multiservice_agrate` (sito statico generato da `build.py`, contenuti in `contenuti/`, foto in `foto/`, pannello Pages CMS, Vercel). Non si ricomincia: si **migliora la base**, tenendo contenuti, dati, foto, modulo, redirect e pannello, e rifacendo l'aspetto, l'hero e il movimento.
Cliente: impresa edile di Agrate Brianza, ristrutturazioni chiavi in mano.
Emozione da far provare: **tranquillità** (qualcuno si prende cura di tutto, dal progetto alle chiavi).
Obiettivo: far richiedere un sopralluogo.

## 1. Cosa c'è già (letto dal repository, da tenere)

- **Dati** (`contenuti/azienda.json`): Multiservice S.r.l. (il vecchio sito e il certificato F-Gas dicono S.r.l.s.: da confermare), fondata nel 2020; sede operativa Via Cesare Battisti 8/10, 20864 Agrate Brianza (MB); sede legale Via Beatrice Tenda 5, 20082 Binasco (MI); P.IVA 11173380962; tel. 039 598 77 48; cell./WhatsApp 333 894 9435; email multi-servicesrls@hotmail.com; orari lun–ven 8:30–12:30 e 15:00–19:00. Mancano REA, capitale sociale, PEC.
- **Certificazioni reali**: ISO 9001:2015 (TNV Europe, n. 250718-00093-078, valida fino al 17/07/2028) e F-Gas (Certifica.srl, n. CI00439, fino al 01/02/2029), con le scansioni in `foto/certificazioni/`.
- **7 servizi** (`contenuti/servizi.json`): ristrutturazioni, facciate e cappotto termico, impianti elettrici e idraulici, imbiancature, pavimenti e rivestimenti, serramenti, tetti. Ognuno con testi, punti, galleria e FAQ.
- **Lavori reali** (`contenuti/lavori/`): Monza via Viotti (cappotto, con prima/durante/dopo e confronto), Agrate via Matteotti (facciate), Burago di Molgora (villa, 7 foto di cantiere), Merate (12 appartamenti), Milano (appartamento), Monza Corso Milano (appartamento). Ordinati per anno, i primi 4 in home.
- **Infrastruttura**: Pages CMS per l'impresa, GitHub Action che rigenera `public/`, funzione `api/contatti.js` (modulo con Resend, antispam), `vercel.json` con CSP restrittiva, HSTS e redirect dai vecchi indirizzi WordPress. Nessun tracciamento: per questo oggi non c'è banner cookie. Mappa Google solo al clic.
- **Foto**: EXIF tolti, targhe oscurate. Foto di rivestimenti 08–10 e cantiere Agrate con operai riconoscibili: serve consenso o sostituzione.

## 2. Cosa va migliorato (diagnosi)

1. **L'aspetto è il "kit" riconoscibile dei siti generati**: sfondo crema (`#f6f3ee`), serif corsivo (Instrument Serif) per evidenziare una parola in ogni titolo, rosso mattone, etichetta in maiuscolo sopra ogni titolo, `→` in coda ai link, card uguali, numerazione "01–04". Va tolto.
2. **L'hero è una galleria di foto con una tavola che si traccia**: carina ma non da "wow". Va sostituita con una scena a tutto schermo.
3. **Numeri poco significativi**: un contatore che anima l'anno "2020", "7 servizi". Meglio dati veri e utili (certificazioni, cantieri raccontati) o niente.
4. **Il lavoro "PROVA 1 – AGRATE"** (anno 2000, categoria "AA", senza foto) è nei contenuti e nelle pagine pubblicate (`contenuti/lavori/prova-1-agrate.json`, `public/lavori/prova-1-agrate/`). Va tolto o messo in bozza.
5. Il confronto prima/dopo esiste solo per Monza via Viotti: è il punto di forza e va valorizzato di più.
6. Movimento poco diffuso: rivelazioni uguali per tutte le sezioni.

## 3. Idea guida: "Un cantiere, un solo interlocutore"

Multiservice è tanti mestieri in una sola impresa. L'hero lo mostra: **un edificio visto in sezione, a tutto schermo, che da vecchio e grigio viene rinnovato mestiere dopo mestiere**, un passaggio per ciascuno dei 7 servizi. Chi guarda capisce in dieci secondi cosa fanno e che li coordina un'unica squadra.

Differenza dagli altri nostri cantieri: Edil Campana *costruisce* da zero all'aperto; qui si *rinnova* un edificio esistente, visto in sezione come una casa delle bambole.

## 4. L'hero: la casa in sezione che si rinnova

Scena 3D a **100vw × 100svh**, da bordo a bordo, nessun fondo piatto e nessun oggetto isolato: un condominio di tre piani con la facciata tolta (sezione), un tetto, un pezzetto di strada e di cielo in luce da mattina. All'inizio è **vecchio**: colori spenti, intonaco macchiato, fili a vista, serramenti vecchi. Una **linea di luce** attraversa l'edificio man mano che si scorre, e dove passa tutto diventa nuovo.

Pin ~300vh, avanzamento `p` 0 → 1 con lo scroll. Ogni fase corrisponde a un servizio reale e porta alla sua pagina.

| p | Fase | Cosa succede | Collegamento |
|---|---|---|---|
| 0,00–0,10 | Com'era | L'edificio com'è: grigio, macchiato, impianti a vista. Camera ferma, un respiro lento. | — |
| 0,10–0,25 | Ristrutturazioni | Un tramezzo si apre, una nuova porta si taglia, la pianta cambia. | /ristrutturazioni/ |
| 0,25–0,42 | Impianti | Nelle pareti si tracciano cavi e tubi luminosi (giallo per l'elettrico, blu per l'idraulico), con i quadri che si accendono. | /impianti-elettrici-ed-idraulici/ |
| 0,42–0,56 | Pavimenti e rivestimenti | Piastrelle e parquet scorrono sul pavimento e sulle pareti del bagno, file dopo file. | /rivestimenti/ |
| 0,56–0,68 | Imbiancature | Un rullo di luce stende il colore sulle pareti, stanza per stanza, con una leggera finitura. | /imbiancature/ |
| 0,68–0,78 | Serramenti | Le finestre nuove scorrono nei vani e si chiudono. | /serramenti/ |
| 0,78–0,90 | Tetto e facciate | Il tetto si rifà (tegole a file), il cappotto avvolge la facciata, la finitura bicolore come a Monza. | /rifacimento-tetti/ · /facciate-e-cappotto-termico/ |
| 0,90–1,00 | Consegna | La sezione si chiude, la facciata è finita, le finestre si accendono in un tardo pomeriggio. Compaiono titolo e pulsante. | Richiedi un sopralluogo |

Dettagli che contano:
- **Il passaggio "vecchio → nuovo" è uno shader**: un solo `uniform` (la posizione del fronte di luce) mescola due materiali, con un bordo che brilla. Costa pochissimo e dà un effetto cinematografico.
- **Il fronte di luce ha il colore del marchio**, non un neon.
- **Etichetta del mestiere** che compare sul pezzo che si sta facendo, con una linea sottile (come una quota), e una barra laterale che elenca i 7 servizi accendendosi.
- **Quando finisce**: la camera si può ruotare trascinando; passando sul tetto, sulle finestre o sulle pareti compare il servizio corrispondente.
- **Salta l'animazione**: collegamento visibile.
- **Cinema vero**: ombre morbide, profondità di campo leggera, vignettatura, rumore sottile, polvere di cantiere nella luce prima della ristrutturazione che sparisce dopo.

### Come costruirla senza Blender
1. Tutto **procedurale** in Three.js (scatole, `RoundedBoxGeometry`, `InstancedMesh` per tegole e piastrelle); l'edificio è un gruppo di pochi blocchi.
2. **Texture libere (CC0)** da Poly Haven: intonaco, cemento, tegole, piastrelle, parquet (1K, WebP/KTX2). Controllare la licenza e scrivere `CREDITS.md`.
3. Nessun modello glTF scaricato è indispensabile. Niente Draco (richiede WebAssembly, vedi la CSP).
4. **Build**: il progetto non ha Node. Costruire il codice 3D una volta con esbuild (cartella `strumenti/`) e **committare il file risultante** in `src/assets/js/3d/`, così la pipeline Python resta com'è. Il file è esterno (la CSP vieta gli script inline) e caricato con `import()` dopo il primo paint.

### Implementazione
- Three.js tree-shaken, GSAP + ScrollTrigger (`scrub`) e Lenis (anch'essi pre-compilati e ospitati sul sito). Percorso camera con `CatmullRomCurve3`.
- DPR massimo 1,5, pausa fuori schermo, qualità adattiva (spegne prima profondità di campo, poi bloom, poi particelle).
- **Fallback**: senza WebGL, dispositivo debole, `prefers-reduced-motion` o `saveData`: 6 fotogrammi fissi della scena (ricavati con Chrome headless) in dissolvenza con zoom lento, e la foto reale del cantiere di Monza dopo. Gli stessi fotogrammi servono per l'anteprima social.
- **Caricamento**: il primo fotogramma (WebP/AVIF) è il LCP; sopra, una linea (la sagoma dell'edificio) si traccia in SVG in meno di 1,2 s. Tetto di 1,5 MB per tutta la scena. La CSP resta restrittiva: se serve, aggiungere solo `worker-src 'self'` e `img-src data: blob:`.

## 5. Palette (si abbandonano crema e terracotta)

Il logo è un monogramma nero (`#121416`).

| Token | Valore | Uso |
|---|---|---|
| `--ink` | `#121416` | testi e logo |
| `--calce` | `#F2F4F3` | sfondo principale (bianco calce freddo, non crema) |
| `--intonaco` | `#E1E5E3` | sezioni alternate, filetti |
| `--cemento` | `#8E969A` | testi secondari (AA su `--calce`: verificare) |
| `--cantiere` | `#1D2A33` | sezioni scure e footer |
| `--mattone` | `#B4412A` | **solo** pulsante principale e fronte di luce dell'hero (bianco sopra ≥ 4,5:1) |
| `--elettrico` | `#F2B71D` | solo nella scena (cavi) e nell'icona degli impianti |
| `--idraulico` | `#2E7CE0` | solo nella scena (tubi) e nell'icona degli impianti |

Regole: il rosso mattone è una sola cosa per schermata (il pulsante); giallo e blu compaiono solo dove c'è un impianto. Niente nero con giallo da cartello di cantiere (il giallo è solo un tubo/un cavo). Contrasto AA verificato.

## 6. Tipografia

- Una sola famiglia: **Archivo** variabile (già nel sito), sfruttando l'asse di larghezza: titoli larghi e pesanti in hero (larghezza 112), più stretti (75) per le quote e le etichette tecniche.
- **Si toglie Instrument Serif corsivo** e l'abitudine di evidenziare una parola in ogni titolo.
- Corpo 17–18 px, righe sotto i 66 caratteri, titoli in sentence case.
- Niente etichetta in maiuscolo spaziato sopra ogni titolo, niente `→` in coda ai link.

## 7. Struttura (home)

```
[ barra: logo · Servizi · Lavori · Chi siamo · Certificazioni · Contatti · tel. · [Richiedi un sopralluogo] ]
┌─ HERO 3D A TUTTO SCHERMO: la casa in sezione che si rinnova (pin ~300vh) ─┐
│ testo a sinistra · barra laterale dei 7 servizi · "Salta l'animazione"      │
└────────────────────────────────────────────────────────────────────────────┘
UN SOLO INTERLOCUTORE (7 mestieri, righe interattive; ognuna mostra la foto reale del servizio)
PRIMA E DOPO (confronto trascinabile a schermo intero: Monza via Viotti, prima / durante / dopo)
I CANTIERI (scorrimento orizzontale fissato: Burago, Merate, Milano, Monza, Agrate, con dati veri)
COME LAVORIAMO (sopralluogo, preventivo, cantiere coordinato, consegna: una vera sequenza)
CERTIFICAZIONI (ISO 9001 e F-Gas, con le scansioni, i numeri e le scadenze)
ZONE (Agrate, Monza, Milano e altri comuni, dall'elenco reale)
RECENSIONI (le vere, con link a Google; non gonfiare)
PREVENTIVO (modulo + WhatsApp + telefono)
FOOTER (dati societari completi)
```

Pagine esistenti da tenere con i nuovi template: Servizi (+7 pagine servizio), Lavori (+ scheda lavoro), Chi siamo, Certificazioni, Contatti, Privacy, Cookie, 404. **Gli URL non cambiano** (c'è già la mappa dei redirect dai vecchi indirizzi WordPress).

### Scheda lavoro (nuovo template, una per cantiere)
Un lavoro racconta la storia **prima → durante → dopo** con le foto reali nell'ordine già previsto dai dati (`foto_prima`, `foto_durante`, `foto_dopo`, `confronto`): confronto trascinabile in alto, poi i tre momenti a tutta larghezza con parallasse, scheda con luogo, anno, tipologia, interventi e servizi collegati, e il collegamento al servizio. Se un lavoro ha foto solo del cantiere (come Burago), si mostra la sequenza del cantiere con la barra delle quote che avanza.

## 8. Le cinque leve

1. **UX/UI**: una azione primaria (sopralluogo), numero e WhatsApp sempre a portata di dito su mobile (barra fissa in basso), navigazione per servizio e per lavoro.
2. **Interattività**: il confronto prima/dopo, l'hero esplorabile, i 7 mestieri cliccabili, il filtro dei lavori.
3. **Caricamento**: sagoma dell'edificio che si traccia in meno di 1,2 s, non bloccante, LCP < 2,5 s su 4G.
4. **3D**: la casa in sezione, con fallback a fotogrammi.
5. **Microinterazioni**: stesse curve ovunque; pulsanti che si "posano" come un mattone (si può ricavare dalla texture a mattoni già nel sito, ma solo sul pulsante principale), campi del modulo con una piccola riga che si riempie quando è valido, link con linea che si estende.

## 9. Sistema di movimento (diffuso in tutto il sito)

Obiettivo: ogni scorrimento dà qualcosa da guardare, e porta alla richiesta del sopralluogo. **Un momento "wow" per sezione, il resto sempre in movimento ma morbido.**

- Una sola curva: `cubic-bezier(.2,.7,.1,1)`, 240–600 ms.
- **Testi**: titoli che si rivelano per righe da una maschera; paragrafi con dissolvenza breve.
- **Immagini**: rivelazione con `clip-path` (come un muro che sale), parallasse ±40 px, zoom lento 1,06 → 1.
- **Servizi**: i 7 mestieri sono righe grandi che al passaggio mostrano la foto reale che segue il cursore.
- **Cantieri**: scorrimento orizzontale fissato con una barra delle quote che avanza.
- **Confronto prima/dopo**: il bordo si muove con il dito o il mouse, con una "luce" lungo il bordo.
- **Muro di mattoni** (già nel sito come fascia animata): si può tenere come dettaglio di chiusura, non più come banda a metà pagina.
- **Pulsanti** magnetici; cursore con mirino nell'hero e "Vedi" sulle foto (solo puntatore fine).
- **Sempre vivo, ma piano**: polvere nella luce nelle sezioni scure.
- **Budget**: solo `transform` e `opacity`; il 3D solo nell'hero e (versione leggera) nel confronto.
- `prefers-reduced-motion`: niente scrub, parallasse, cursore speciale; le rivelazioni diventano dissolvenze semplici; l'hero mostra i fotogrammi fissi.

## 10. Testi

- H1: **Un cantiere, un solo interlocutore.** (alternativa: "Dalla vecchia casa a quella nuova, con un'unica impresa.")
- Sottotitolo: Impresa edile ad Agrate Brianza. Ristrutturazioni chiavi in mano a Monza, in Brianza e a Milano.
- CTA: **Richiedi un sopralluogo** · secondaria: **039 598 77 48**
- Si possono tenere i testi esistenti dei servizi e dei lavori: sono stati scritti sui dati veri; da far confermare quelli dei cantieri (cappotto ad Agrate, anni).
- Non inventare: premi, numeri di cantieri, "decenni di esperienza" con cifre. **Non promettere bonus o detrazioni**: il sito oggi parla di "supporto per pratiche e documentazione dei bonus fiscali", che va bene come servizio, senza cifre né percentuali.
- Tolti: contatore sull'anno 2020, "7 servizi", cartello "dal 2020 in Brianza" come badge sulle foto.

## 11. Conformità e pubblicazione (20 punti, con i dati di questo cliente)

I testi legali sono **bozze da far validare**.

1. **Privacy policy**: titolare Multiservice (forma esatta da confermare, S.r.l. o S.r.l.s.), sede legale Binasco. Fornitori reali: hosting Vercel, invio email Resend, casella email, Google Maps al clic. Tempi di conservazione da confermare.
2. **Termini**: note legali, copyright di foto e progetti.
3. **Cookie**: oggi nessun cookie non tecnico → nessun banner. Se si aggiunge un servizio esterno (statistiche, mappa incorporata subito, WhatsApp widget), aggiungere il banner Garante (Accetta / Rifiuta / Personalizza, preferenze nel footer). La mappa resta "al clic" con avviso. Analytics solo se cookieless.
4. **Dati societari** nel footer e P.IVA in home: ragione sociale esatta, sede legale Via Beatrice Tenda 5, 20082 Binasco (MI), **P.IVA 11173380962**, sede operativa Via Cesare Battisti 8/10, 20864 Agrate Brianza, **REA, capitale sociale e PEC da chiedere** (le chiavi `rea`, `capitale_sociale`, `pec` in `azienda.json` vuote = non mostrate, ma obbligatorie per le società di capitali).
5. **Accessibilità** WCAG 2.2 AA con alternativa statica dell'hero, pausa e "Salta l'animazione"; pagina Accessibilità. Verificare se l'EAA si applica (non vende online: probabile deroga) ma costruire AA.
6. **CTA** chiara in barra, hero e chiusura.
7. **FAQ** reali (già nei servizi) con `FAQPage`.
8. **Alt text** sulle foto (già generato dai dati).
9. **Analytics** cookieless oppure nessuno.
10. **Meta title** unico (già presente), 11. **Meta description** unica, 12. **Open Graph** 1200×630 con il fotogramma finale dell'hero, 13. **Favicon** completa (c'è), 14. **Canonical** e redirect (ci sono: tenere), 15. **robots.txt**, 16. **sitemap.xml** (generata), 17. **404** nello stile nuovo ("Questa parete non esiste. Torniamo al cantiere?").
18. **Mobile** da 360 px: scena semplificata, meno oggetti, niente profondità di campo.
19. **Form**: già con validazione, anti-bot e invio via Resend; in locale propone WhatsApp o email. Mai scrivere "inviato" senza backend.
20. **Link rotti** (`tel:`, `mailto:`, wa.me, mappe, redirect) e **prestazioni**: AVIF/WebP, 3D in file separato caricato in modo pigro, Lighthouse mobile Performance ≥ 90.

**Specifico per questo cliente**
- **Certificazioni**: verificare che TNV Europe e Certifica.srl siano enti accreditati prima di usare "certificata" come argomento forte; mostrare numero e scadenza come già fatto. Le scadenze (2028 e 2029) vanno ricordate nel README.
- **Foto con operai** (rivestimenti 08–10, Agrate): consenso o sostituzione.
- **Foto di cantieri**: indirizzi di vie e numeri civici non vanno nel testo pubblico (oggi compare "Via Viotti", "via Matteotti" nei nomi file e nelle pagine: decidere se mostrarli).
- **Recensioni**: oggi sono 3 su Google: non costruire una sezione gonfiata, linkare Google.
- **Bonus fiscali**: nessuna cifra né promessa di detrazioni.
- **Serramenti**: le foto sono di prodotti a catalogo/showroom (già dichiarato); meglio sostituirle con installazioni reali.

## 12. Per chi lavora sul repository

- Lavorare su un **ramo nuovo** (es. `redesign-wow`), con anteprima su Vercel, senza toccare `main` finché il cliente non approva.
- **Tenere** `contenuti/`, `foto/`, `api/contatti.js`, `vercel.json` (redirect e sicurezza), `.pages.yml`, la GitHub Action e il flusso `python3 build.py`. Cambiano `src/pagine/`, `src/assets/css/style.css`, `src/assets/js/main.js` e le parti di `build.py` che disegnano i componenti (galleria, scheda lavoro, confronto).
- **Pages CMS** deve continuare a funzionare: ogni campo dei lavori già previsto (prima, durante, dopo, confronto, bozza) è la fonte dei nuovi template.
- Aggiungere `CREDITS.md` per texture e librerie, e aggiornare il README (come ricostruire il bundle 3D, come rigenerare i fotogrammi di fallback).
- **Pulizia**: togliere o mettere in bozza `prova-1-agrate`; confermare "S.r.l." o "S.r.l.s."; sostituire l'email hotmail con una su dominio appena possibile.

## 13. Da chiedere al cliente

1. Ragione sociale esatta (S.r.l. o S.r.l.s.), numero REA, capitale sociale, PEC.
2. Email su dominio (info@multiservice-srls.it) al posto di hotmail.
3. Altri cantieri con foto prima/durante/dopo e liberatorie dei committenti: è quello che fa più differenza.
4. Conferma dei testi dei cantieri e delle zone servite.
5. Consenso degli operai nelle foto, o foto sostitutive.
6. Se il sopralluogo è gratuito: scriverlo aumenta le richieste.
7. Conferma che TNV Europe e Certifica.srl sono enti accreditati.
8. Foto vere di serramenti installati.
9. Link di Google Business aggiornato e invito ai clienti a lasciare una recensione.

## 14. Da evitare

- Crema + serif corsivo + terracotta, evidenziare una parola in ogni titolo, maiuscolo spaziato, `→` ovunque, card uguali, numerazioni senza sequenza vera.
- Giallo e nero da cartello di cantiere, caschetti e stretta di mano da stock, render di ville inventate.
- Un hero con foto che si alternano o un oggetto isolato su fondo piatto.
- Movimento senza gerarchia, effetti che rallentano il telefono.
- Scrivere "inviato" senza backend; rompere i redirect o il pannello Pages CMS.
