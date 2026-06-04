// Per-IP rate limit. In-memory only — resets on cold start.
// Good enough for low-volume personal site; upgrade to Vercel KV if abuse appears.
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const ipHits = new Map();

const ALLOWED_ORIGINS = new Set([
  "https://pictokit.app",
  "https://www.pictokit.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000"
]);

const MAX_MESSAGE = 3500;
const MAX_EMAIL = 254;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientIP(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function checkRate(ip) {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) return false;
  hits.push(now);
  ipHits.set(ip, hits);
  return true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return res.status(403).json({ ok: false });
  }

  const body = typeof req.body === "object" && req.body ? req.body : {};
  const { message, wantsReply, email, company } = body;

  // Honeypot — silently accept and drop.
  if (typeof company === "string" && company.length > 0) {
    return res.status(200).json({ ok: true });
  }

  if (typeof message !== "string") return res.status(400).json({ ok: false });
  const trimmed = message.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_MESSAGE) {
    return res.status(400).json({ ok: false });
  }

  let replyEmail = null;
  if (wantsReply === true) {
    if (typeof email !== "string") return res.status(400).json({ ok: false });
    const e = email.trim();
    if (e.length === 0 || e.length > MAX_EMAIL || !EMAIL_RE.test(e)) {
      return res.status(400).json({ ok: false });
    }
    replyEmail = e;
  }

  if (!checkRate(clientIP(req))) {
    return res.status(429).json({ ok: false });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatID = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatID) return res.status(500).json({ ok: false });

  let text = `[Web] PictoKit support form\n\n${trimmed}`;
  if (replyEmail) text += `\n\n—\nReply to: ${replyEmail}`;

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatID, text })
    });
    if (!tgRes.ok) return res.status(502).json({ ok: false });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ ok: false });
  }
}
