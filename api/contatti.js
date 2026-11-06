/**
 * Modulo "Richiedi un preventivo" → email all'azienda.
 * Funzione serverless Vercel (Node 18+), nessuna dipendenza.
 *
 * Variabili d'ambiente da impostare su Vercel (Settings → Environment Variables):
 *   RESEND_API_KEY        chiave API di Resend (https://resend.com), dominio mittente verificato
 *   CONTATTI_DESTINATARIO indirizzo che riceve le richieste (es. multi-servicesrls@hotmail.com)
 *   CONTATTI_MITTENTE     mittente verificato, es. "Sito Multiservice <sito@multiservice-srls.it>"
 *   SITI_AMMESSI          (facoltativo) domini da cui accettare invii, separati da virgola
 *
 * Senza configurazione risponde 503 e il sito propone l'invio via WhatsApp o email.
 */
"use strict";

const LIMITI = { nome: 100, telefono: 25, email: 150, comune: 80, servizio: 80, messaggio: 3000, pagina: 200 };
const FINESTRA_MS = 10 * 60 * 1000;
const MAX_INVII = 5;
const invii = new Map(); // limite per IP (per istanza della funzione)

function pulisci(valore, max) {
  return String(valore == null ? "" : valore)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function originePermessa(req) {
  const origin = req.headers.origin || "";
  if (!origin) return false;
  let host;
  try { host = new URL(origin).host; } catch (e) { return false; }
  const ammessi = (process.env.SITI_AMMESSI || "")
    .split(",").map((s) => s.trim()).filter(Boolean);
  const hostRichiesta = req.headers["x-forwarded-host"] || req.headers.host || "";
  return host === hostRichiesta || ammessi.includes(host) || /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
}

function troppiInvii(ip) {
  const ora = Date.now();
  const lista = (invii.get(ip) || []).filter((t) => ora - t < FINESTRA_MS);
  lista.push(ora);
  invii.set(ip, lista);
  if (invii.size > 5000) invii.clear();
  return lista.length > MAX_INVII;
}

function rispondi(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return rispondi(res, 405, { ok: false });
  }
  if (!originePermessa(req)) return rispondi(res, 403, { ok: false });

  const tipo = String(req.headers["content-type"] || "");
  if (!tipo.includes("application/json")) return rispondi(res, 415, { ok: false });

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = null; }
  }
  if (!body || typeof body !== "object") return rispondi(res, 400, { ok: false });

  // Anti-spam: campo nascosto compilato o invio troppo rapido → fingiamo successo
  const t = Number(body.t);
  if (pulisci(body.sito_web, 200) !== "" || !t || Date.now() - t < 3000) {
    return rispondi(res, 200, { ok: true });
  }

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "sconosciuto";
  if (troppiInvii(ip)) return rispondi(res, 429, { ok: false });

  const d = {};
  for (const k of Object.keys(LIMITI)) d[k] = pulisci(body[k], LIMITI[k]);

  const campi = {};
  if (d.nome.length < 2) campi.nome = "Inserisci nome e cognome.";
  const cifre = d.telefono.replace(/\D/g, "");
  if (cifre.length < 6 || cifre.length > 15 || /[^\d\s+().\-\/]/.test(d.telefono)) campi.telefono = "Inserisci un numero di telefono valido.";
  if (d.email && !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/.test(d.email)) campi.email = "L'indirizzo email non sembra corretto.";
  if (d.messaggio.length < 10) campi.messaggio = "Descrivi brevemente l'intervento.";
  if (body.privacy !== true) campi.privacy = "Conferma di aver letto l'informativa privacy.";
  if (Object.keys(campi).length) return rispondi(res, 400, { ok: false, campi });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTATTI_DESTINATARIO;
  const from = process.env.CONTATTI_MITTENTE;
  if (!apiKey || !to || !from) return rispondi(res, 503, { ok: false, motivo: "non_configurato" });

  const righe = [
    ["Nome", d.nome],
    ["Telefono", d.telefono],
    ["Email", d.email || "—"],
    ["Comune", d.comune || "—"],
    ["Intervento", d.servizio || "—"],
    ["Pagina", d.pagina || "—"],
  ];
  const data = new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" });
  const text = righe.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessaggio:\n${d.messaggio}\n\nRicevuta il ${data} dal modulo del sito.`;
  const html =
    `<h2 style="font-family:Arial,sans-serif">Nuova richiesta dal sito</h2>` +
    `<table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">` +
    righe.map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#666">${k}</td><td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`).join("") +
    `</table><p style="font-family:Arial,sans-serif;font-size:15px;white-space:pre-wrap;border-left:3px solid #b85a24;padding-left:12px">${escapeHtml(d.messaggio)}</p>` +
    `<p style="font-family:Arial,sans-serif;font-size:12px;color:#888">Ricevuta il ${escapeHtml(data)} dal modulo del sito. Rispondi a questa email per scrivere al cliente${d.email ? "" : " (non ha indicato un'email: richiamalo al telefono)"}.</p>`;

  const payload = {
    from,
    to: to.split(",").map((s) => s.trim()).filter(Boolean),
    subject: `Richiesta preventivo: ${d.nome}${d.servizio ? " · " + d.servizio : ""}`.slice(0, 180),
    text,
    html,
  };
  if (d.email) payload.reply_to = d.email;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) {
      console.error("Invio email non riuscito", r.status);
      return rispondi(res, 502, { ok: false });
    }
    return rispondi(res, 200, { ok: true });
  } catch (e) {
    console.error("Errore invio email", e && e.message);
    return rispondi(res, 502, { ok: false });
  }
};
