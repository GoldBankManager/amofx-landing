// GoldBank v11.0 — "SWISS VAULT"
// Seriös, edel, minimalistisch. Keine Gimmicks. Reines Understatement.
const fs = require('fs');
const o = 'C:/Users/Hacer/.openclaw/workspace/amofx-landing/index.html';

const a='&auml;',o2='&ouml;',u='&uuml;',s='&szlig;',e='&euro;';

const CSS = `
:root {
  --gold: #B8973E;
  --gold-light: #D4AF37;
  --gold-dark: #8B6914;
  --bg: #0E0C08;
  --surface: #161310;
  --text: #C8C0B4;
  --text-dim: #8A8378;
  --text-faint: #5C5750;
  --border: rgba(184,151,62,.12);
  --border-hover: rgba(184,151,62,.25);
  --radius: 2px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html {
  scroll-behavior: auto;
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  letter-spacing: .01em;
}

/* === TYPOGRAPHY === */
h1, h2, h3, .serif {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-weight: 600;
  letter-spacing: .02em;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: .28em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
}

/* === NAV: Minimal, restrained === */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 48px;
  background: rgba(14,12,8,.92);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(16px);
}
nav .brand {
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .15em;
  color: #fff;
}
nav .brand span { color: var(--gold); font-style: italic; }
nav .links {
  display: flex;
  gap: 40px;
  margin-left: 80px;
  list-style: none;
}
nav .links a {
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--text-dim);
  text-decoration: none;
  transition: color .3s;
}
nav .links a:hover { color: var(--gold); }
nav .cta {
  margin-left: auto;
  padding: 10px 28px;
  border: 1px solid var(--gold-dark);
  color: var(--gold-light);
  font-size: 11px;
  letter-spacing: .15em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all .3s;
  border-radius: var(--radius);
}
nav .cta:hover {
  background: var(--gold-dark);
  color: #fff;
}

@media (max-width: 768px) {
  nav { padding: 0 24px; }
  nav .links { display: none; }
}

/* === HERO: Understatement Statement === */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 48px 80px;
  max-width: 1100px;
  margin: 0 auto;
}
.hero-content {
  max-width: 640px;
}
.hero h1 {
  font-size: clamp(44px, 6vw, 76px);
  font-weight: 600;
  line-height: 1.08;
  color: #E8E2D8;
  letter-spacing: .01em;
  margin: 16px 0 28px;
}
.hero h1 em {
  color: var(--gold-light);
  font-style: italic;
  font-weight: 700;
}
.hero .lead {
  font-size: 17px;
  color: var(--text-dim);
  max-width: 480px;
  line-height: 1.8;
  margin-bottom: 40px;
  font-weight: 300;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 36px;
  background: linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light));
  color: #0E0C08;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .08em;
  text-decoration: none;
  border-radius: var(--radius);
  transition: all .35s;
}
.btn-primary:hover {
  box-shadow: 0 8px 30px rgba(184,151,62,.25);
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 32px;
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius);
  transition: all .3s;
  background: transparent;
}
.btn-secondary:hover {
  border-color: var(--border-hover);
  background: rgba(184,151,62,.04);
}

/* === SECTION: Structured Typographic Blocks === */
section {
  padding: 100px 48px;
  max-width: 1100px;
  margin: 0 auto;
}

.section-head {
  text-align: center;
  margin-bottom: 72px;
}

.section-head h2 {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 600;
  color: #E8E2D8;
  margin-top: 12px;
}

/* === STATISTICS: Clean Number Line === */
.stat-line {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.stat-cell {
  padding: 32px 24px;
  text-align: center;
  background: var(--surface);
}
.stat-cell .number {
  font-family: "Cormorant Garamond", serif;
  font-size: 40px;
  font-weight: 700;
  color: var(--gold-light);
  line-height: 1;
}
.stat-cell .caption {
  font-size: 10px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-top: 8px;
}

@media (max-width: 768px) {
  .stat-line { grid-template-columns: 1fr 1fr; }
  section { padding: 60px 24px; }
  .hero { padding: 100px 24px 60px; }
}

/* === FEATURES: Asymmetric Text Blocks === */
.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--border);
  margin-bottom: 1px;
}
.feature-row .f-cell {
  padding: 48px 40px;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.feature-row .f-cell.label-cell {
  align-items: flex-end;
  text-align: right;
  border-right: 1px solid var(--border);
}
.feature-row .f-cell.text-cell {
  align-items: flex-start;
}
.feature-row .f-num {
  font-size: 11px;
  letter-spacing: .25em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 12px;
}
.feature-row h3 {
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 600;
  color: #E8E2D8;
  margin-bottom: 14px;
}
.feature-row h3 em { color: var(--gold-light); font-style: italic; }
.feature-row p {
  font-size: 14px;
  color: var(--text-dim);
  line-height: 1.8;
  max-width: 380px;
}
.feature-row .f-cell.label-cell p { margin-left: auto; }

@media (max-width: 768px) {
  .feature-row { grid-template-columns: 1fr; }
  .feature-row .f-cell { padding: 32px 24px; align-items: flex-start !important; text-align: left !important; border-right: none !important; }
  .feature-row .f-cell.label-cell p { margin-left: 0; }
}

/* === RESULTS GRID: Clean Gallery === */
.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  background: var(--border);
}
.result-grid .r-item {
  background: var(--surface);
  overflow: hidden;
  position: relative;
}
.result-grid .r-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .6s;
}
.result-grid .r-item:hover img {
  transform: scale(1.04);
}
.result-grid .r-item:nth-child(1) { grid-row: span 2; }

/* === CTA: Restrained === */
.cta-block {
  text-align: center;
  padding: 100px 24px;
}
.cta-block h2 {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 600;
  color: #E8E2D8;
  margin-bottom: 24px;
}
.cta-block h2 em { color: var(--gold-light); font-style: italic; }
.cta-block .cta-note {
  font-size: 13px;
  color: var(--text-faint);
  margin-top: 16px;
}

/* === FAQ: Structured Accordion === */
.faq-list {
  max-width: 640px;
  margin: 0 auto;
}
.faq-list details {
  border-bottom: 1px solid var(--border);
  padding: 0;
}
.faq-list details summary {
  padding: 22px 0;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #C8C0B4;
}
.faq-list details summary::after {
  content: "+";
  font-size: 18px;
  color: var(--gold);
  font-weight: 300;
}
.faq-list details[open] summary::after { content: "\u2013"; }
.faq-list details p {
  padding: 0 0 22px;
  font-size: 14px;
  color: var(--text-dim);
  line-height: 1.7;
}

/* === FOOTER === */
footer {
  border-top: 1px solid var(--border);
  padding: 48px;
  text-align: center;
}
footer .flogo {
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .12em;
  margin-bottom: 8px;
  color: #E8E2D8;
}
footer .flogo em { color: var(--gold); font-style: italic; }
footer a { color: var(--text-dim); text-decoration: none; font-size: 13px; transition: color .3s; }
footer a:hover { color: var(--gold); }
footer .legal {
  font-size: 11px;
  color: var(--text-faint);
  max-width: 440px;
  margin: 16px auto 0;
  line-height: 1.7;
}

/* === SUBTLE FADE ON LOAD === */
.hero-content { animation: appear 1.2s ease; }
@keyframes appear { from { opacity: 0; } to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .hero-content { animation: none; }
  .result-grid .r-item:hover img { transform: none; }
}
`;

const BODY = `
<nav>
  <div class="brand">GOLD<span>BANK</span></div>
  <ul class="links">
    <li><a href="#stats">Kennzahlen</a></li>
    <li><a href="#features">Ansatz</a></li>
    <li><a href="#results">Resultate</a></li>
    <li><a href="#faq">Fragen</a></li>
  </ul>
  <a href="https://t.me/GoldbankManager" target="_blank" class="cta">Zugang</a>
</nav>

<div class="hero">
  <div class="hero-content">
    <div class="eyebrow">GoldBank Trading</div>
    <h1>Handeln mit<br><em>Haltung.</em></h1>
    <p class="lead">
      Eine private Gemeinschaft erfahrener Trader.
      Fundierte Analyse. Keine leeren Versprechen.
      Gemeinsam profitable Strategien entwickeln.
    </p>
    <div style="display:flex;gap:14px;flex-wrap:wrap">
      <a href="https://t.me/GoldbankManager" target="_blank" class="btn-primary">&#x2022; Mitglied werden</a>
      <a href="#results" class="btn-secondary">Resultate einsehen</a>
    </div>
  </div>
</div>

<section id="stats">
  <div class="section-head">
    <div class="eyebrow">Die Gemeinschaft</div>
    <h2>Auf einen Blick</h2>
  </div>
  <div class="stat-line">
    <div class="stat-cell"><div class="number">250+</div><div class="caption">Aktive Mitglieder</div></div>
    <div class="stat-cell"><div class="number">94%</div><div class="caption">Trefferquote (30T)</div></div>
    <div class="stat-cell"><div class="number">24/7</div><div class="caption">Austausch</div></div>
    <div class="stat-cell"><div class="number">Nr. 1</div><div class="caption">In der Nische</div></div>
  </div>
</section>

<section id="features">
  <div class="section-head">
    <div class="eyebrow">Unsere Philosophie</div>
    <h2>Drei Grunds${a}tze</h2>
  </div>

  <div class="feature-row">
    <div class="f-cell label-cell">
      <div class="f-num">01 &mdash; Pr${a}zision</div>
      <h3>Kein <em>Raten.</em></h3>
      <p>Jeder Einstieg, jeder Ausstieg ist begr${u}ndet. Charttechnik, Struktur, saubere Linien &mdash; keine verschwommenen Analysen.</p>
    </div>
    <div class="f-cell text-cell"></div>
  </div>

  <div class="feature-row">
    <div class="f-cell text-cell"></div>
    <div class="f-cell label-cell" style="border-right:none;border-left:1px solid var(--border);align-items:flex-start;text-align:left">
      <div class="f-num">02 &mdash; Bildung</div>
      <h3>Verstehen, nicht <em>kopieren.</em></h3>
      <p>Ein Signal ist nur so gut wie das Verst${a}ndnis dahinter. Wir erkl${a}ren das Warum. Du entwickelst dein eigenes Gesp${u}r f${u}r die M${a}rkte.</p>
    </div>
  </div>

  <div class="feature-row">
    <div class="f-cell label-cell">
      <div class="f-num">03 &mdash; Gemeinschaft</div>
      <h3>Auf <em>Augenh${o}he.</em></h3>
      <p>250 Trader, eine Mission. Exchange auf einem Niveau, das dich weiterbringt. Kein Guru-Gehabe. Nur gegenseitiges Wachstum.</p>
    </div>
    <div class="f-cell text-cell"></div>
  </div>
</section>

<section id="results">
  <div class="section-head">
    <div class="eyebrow">Resultate</div>
    <h2>Nachvollziehbar.</h2>
  </div>
  <div class="result-grid">
    <div class="r-item"><img src="results/1.jpg" alt="Trading Resultat" loading="lazy"></div>
    <div class="r-item"><img src="results/2.jpg" alt="Trading Resultat" loading="lazy"></div>
    <div class="r-item"><img src="results/3.jpg" alt="Trading Resultat" loading="lazy"></div>
    <div class="r-item"><img src="results/4.jpg" alt="Trading Resultat" loading="lazy"></div>
    <div class="r-item"><img src="results/5.jpg" alt="Trading Resultat" loading="lazy"></div>
  </div>
</section>

<div class="cta-block">
  <div class="eyebrow">Mitgliedschaft</div>
  <h2>Ihre Entscheidung f${u}r <em>Qualit${a}t.</em></h2>
  <a href="https://t.me/GoldbankManager" target="_blank" class="btn-primary">&#x2022; Jetzt beitreten</a>
  <div class="cta-note">Kostenfrei. Keine Verpflichtungen. Dauerhaft.</div>
</div>

<section id="faq">
  <div class="section-head">
    <div class="eyebrow">Fragen</div>
    <h2>Das Wichtigste</h2>
  </div>
  <div class="faq-list">
    <details><summary>Ist der Zugang kostenpflichtig?</summary><p>Nein. Die Mitgliedschaft ist kostenfrei und bleibt es. Es gibt keine Premium-Stufen, keine Abos, keine versteckten Kosten.</p></details>
    <details><summary>Wen sprechen wir an?</summary><p>Trader jeder Erfahrungsstufe, die ernsthaft an ihrer Entwicklung arbeiten wollen. Wir setzen auf Substanz, nicht auf Sensation.</p></details>
    <details><summary>Wie erfolgt der Beitritt?</summary><p>Per Klick auf „Mitglied werden" gelangen Sie direkt in unsere Telegram-Gruppe. Kein Antrag, keine Wartezeit.</p></details>
    <details><summary>Was unterscheidet uns?</summary><p>Wir verkaufen keine Tr${a}ume. Wir bieten Werkzeuge, Wissen und eine Gemeinschaft, die auf gegenseitigem Respekt basiert.</p></details>
  </div>
</section>

<footer>
  <div class="flogo">GOLD<em>BANK</em></div>
  <a href="https://t.me/GoldbankManager" target="_blank">t.me/GoldbankManager</a>
  <p class="legal">Handel mit Finanzinstrumenten birgt erhebliche Risiken und kann zum vollst${a}ndigen Verlust des eingesetzten Kapitals f${u}hren. Die Inhalte dieser Seite stellen keine Anlageberatung dar. Vergangene Ergebnisse sind keine Garantie f${u}r zuk${u}nftige Entwicklungen.</p>
  <p style="color:var(--text-faint);font-size:10px;margin-top:8px">&copy; 2026 GoldBank Trading</p>
</footer>
`;

const HTML = '<!DOCTYPE html>\n<html lang="de">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>GoldBank &mdash; Trading mit Haltung</title>\n<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">\n<style>\n' + CSS + '\n</style>\n</head>\n<body>\n' + BODY + '\n</body>\n</html>';

fs.writeFileSync(o, HTML, 'utf8');
const sz = fs.statSync(o).size;
console.log('v11.0 written: ' + sz + ' bytes');
const ck = fs.readFileSync(o, 'utf8');
['auml;','ouml;','uuml;','szlig;','Cormorant','Haltung','Grunds','Kennzahlen','Mitglied','Resultate','Philosophie'].forEach(w => console.log(ck.includes(w) ? 'OK: '+w : 'XX: '+w));
