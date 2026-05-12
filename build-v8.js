// GoldBank v8.0 — THE FOUNDRY
// Komplett neues Design-Fundament für GitHub Pages
// Konzept: Cinematic Luxury — immersive Goldwelt mit Tiefe

const fs = require('fs');
const output = 'C:/Users/Hacer/.openclaw/workspace/amofx-landing/index.html';

const AE = '&auml;';
const OE = '&ouml;';
const UE = '&uuml;';
const SZ = '&szlig;';
const EUR = '&euro;';
const a = AE, o = OE, u = UE, ss = SZ, e = EUR;

const CSS = `
:root {
  --gold: #C8A84E;
  --gold2: #E8C95D;
  --gold3: #A8882E;
  --dark: #0D0A06;
  --darker: #080604;
  --cream: #F5ECD7;
  --muted: rgba(255,255,255,.45);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html {
  scroll-behavior: auto;
  overflow-x: hidden;
  background: var(--darker);
}

body {
  font-family: "Inter", system-ui, sans-serif;
  color: var(--cream);
  background: var(--darker);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ============================================
   GOLDEN DUST — ambient background particles (CSS)
   ============================================ */
#universe {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.dust {
  position: absolute;
  border-radius: 50%;
  background: var(--gold2);
  animation: drift linear infinite;
  opacity: 0;
}

@keyframes drift {
  0%   { transform: translateY(110vh) scale(0); opacity: 0; }
  5%   { opacity: .5; }
  15%  { opacity: .3; }
  85%  { opacity: .15; }
  100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
}

/* ============================================
   MAIN LAYOUT — card stack with depth
   ============================================ */
main {
  position: relative;
  z-index: 1;
}

/* ============================================
   HERO — Immersive Statement
   ============================================ */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
  position: relative;
}

.hero-pre {
  font-family: "DM Mono", monospace;
  font-size: 11px;
  letter-spacing: 6px;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeUp .8s ease .2s forwards;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: clamp(48px, 9vw, 100px);
  font-weight: 900;
  line-height: .95;
  letter-spacing: -2px;
  opacity: 0;
  animation: fadeUp .8s ease .4s forwards;
  max-width: 900px;
}

.hero h1 .stroke {
  -webkit-text-stroke: 1px var(--gold);
  -webkit-text-fill-color: transparent;
}

.hero h1 .fill {
  color: var(--gold2);
  font-style: italic;
}

.hero-tagline {
  font-size: clamp(16px, 2.2vw, 20px);
  color: var(--muted);
  max-width: 480px;
  margin: 20px 0 32px;
  line-height: 1.7;
  font-weight: 300;
  opacity: 0;
  animation: fadeUp .8s ease .6s forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ============================================
   CTA BUTTON — golden command
   ============================================ */
.cta-group {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  animation: fadeUp .8s ease .8s forwards;
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  background: linear-gradient(135deg, var(--gold3), var(--gold), var(--gold2));
  color: var(--darker);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: .5px;
  transition: all .35s;
  box-shadow: 0 10px 35px rgba(200,168,78,.2);
  position: relative;
  overflow: hidden;
}

.btn-gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(200,168,78,.35);
}

.btn-gold::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,.25), transparent 70%);
  transform: translateX(-100%);
  transition: transform .6s;
}

.btn-gold:hover::after {
  transform: translateX(100%);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 15px 32px;
  border: 1px solid rgba(200,168,78,.25);
  color: var(--cream);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all .3s;
  background: rgba(200,168,78,.03);
}

.btn-ghost:hover {
  border-color: var(--gold2);
  background: rgba(200,168,78,.1);
}

/* ============================================
   GOLD LINE divider
   ============================================ */
.gold-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold2), transparent);
  margin: 0 auto 40px;
}

/* ============================================
   MARQUEE TICKER
   ============================================ */
.marquee {
  border-top: 1px solid rgba(200,168,78,.08);
  border-bottom: 1px solid rgba(200,168,78,.08);
  padding: 14px 0;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.marquee-track {
  display: flex;
  gap: 48px;
  animation: marquee 40s linear infinite;
  width: max-content;
}

.marquee-track:hover { animation-play-state: paused; }

.marquee-item {
  font-family: "DM Mono", monospace;
  font-size: 12px;
  color: var(--muted);
  white-space: nowrap;
  letter-spacing: 1px;
}

.marquee-item strong { color: var(--gold2); }

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ============================================
   GLASS CARDS SECTION
   ============================================ */
.cards-section {
  position: relative;
  z-index: 2;
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-eyebrow {
  font-family: "DM Mono", monospace;
  font-size: 10px;
  letter-spacing: 5px;
  color: var(--gold);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 12px;
}

.section-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 900;
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -1px;
}

.section-title em { color: var(--gold2); font-style: italic; }

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.card {
  background: linear-gradient(160deg, rgba(20,15,8,.9), rgba(12,8,4,.9));
  border: 1px solid rgba(200,168,78,.08);
  border-radius: 28px;
  padding: 36px;
  transition: all .5s cubic-bezier(.25,.46,.45,.94);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 80% 20%, rgba(200,168,78,.08), transparent 60%);
  opacity: 0;
  transition: opacity .5s;
}

.card:hover::before { opacity: 1; }

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(200,168,78,.2);
  box-shadow: 0 25px 60px rgba(0,0,0,.5);
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  background: linear-gradient(135deg, rgba(200,168,78,.15), rgba(200,168,78,.04));
  border: 1px solid rgba(200,168,78,.15);
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
}

.card h3 {
  font-family: "Playfair Display", serif;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
}

.card h3 span { color: var(--gold2); font-style: italic; }

.card p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  position: relative;
  z-index: 2;
}

/* ============================================
   RESULTS SHOWCASE — full-width horizontal scroll
   ============================================ */
.results-section {
  position: relative;
  z-index: 2;
  padding: 60px 0;
  overflow: hidden;
}

.results-scroll {
  display: flex;
  gap: 20px;
  padding: 0 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  cursor: grab;
}

.results-scroll::-webkit-scrollbar { display: none; }

.results-scroll:active { cursor: grabbing; }

.result-frame {
  scroll-snap-align: center;
  flex: 0 0 auto;
  width: min(500px, 85vw);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(200,168,78,.1);
  transition: all .3s;
  background: rgba(0,0,0,.3);
}

.result-frame:hover {
  border-color: rgba(200,168,78,.3);
  transform: scale(1.02);
}

.result-frame img {
  width: 100%;
  height: auto;
  display: block;
}

/* ============================================
   STATS BANNER
   ============================================ */
.stats-banner {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 24px;
  position: relative;
  z-index: 2;
}

.stat-pill {
  padding: 14px 24px;
  background: rgba(0,0,0,.4);
  border: 1px solid rgba(200,168,78,.12);
  border-radius: 50px;
  text-align: center;
  transition: all .3s;
  min-width: 120px;
}

.stat-pill:hover {
  border-color: rgba(200,168,78,.3);
  background: rgba(200,168,78,.05);
}

.stat-pill .sp-num {
  font-family: "Playfair Display", serif;
  font-size: 24px;
  font-weight: 900;
  color: var(--gold2);
}

.stat-pill .sp-lbl {
  font-size: 9px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 2px;
}

/* ============================================
   FOMO STRIP
   ============================================ */
.fomo-strip {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  padding: 16px 24px 40px;
  position: relative;
  z-index: 2;
}

.fomo-item {
  font-size: 13px;
  color: var(--muted);
  padding: 8px 18px;
  border: 1px solid rgba(200,168,78,.15);
  border-radius: 30px;
  background: rgba(0,0,0,.25);
  display: flex;
  align-items: center;
  gap: 6px;
}

.fomo-item strong { color: var(--gold2); }

/* ============================================
   CTA FOOTER
   ============================================ */
.cta-footer {
  text-align: center;
  padding: 60px 24px 80px;
  position: relative;
  z-index: 2;
}

.cta-footer h2 {
  font-family: "Playfair Display", serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 900;
  margin-bottom: 24px;
}

.cta-footer h2 em { color: var(--gold2); font-style: italic; }

/* ============================================
   FAQ ACCORDION
   ============================================ */
.faq-section {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 24px 60px;
  position: relative;
  z-index: 2;
}

.faq-item {
  border: 1px solid rgba(200,168,78,.06);
  border-radius: 18px;
  margin-bottom: 8px;
  overflow: hidden;
  background: rgba(0,0,0,.2);
  transition: all .3s;
}

.faq-item:hover { border-color: rgba(200,168,78,.15); }

.faq-item summary {
  padding: 18px 24px;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
}

.faq-item summary::after {
  content: "+";
  font-size: 18px;
  color: var(--gold2);
  transition: transform .3s;
}

.faq-item[open] summary::after {
  content: "-";
  transform: rotate(90deg);
}

.faq-item p {
  padding: 0 24px 18px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

/* ============================================
   FOOTER
   ============================================ */
footer {
  text-align: center;
  padding: 40px 24px;
  border-top: 1px solid rgba(200,168,78,.06);
  position: relative;
  z-index: 2;
}

footer .flogo {
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 4px;
  margin-bottom: 6px;
}

footer .flogo em { color: var(--gold2); font-style: italic; }

footer a { color: var(--muted); text-decoration: none; font-size: 13px; transition: color .3s; }
footer a:hover { color: var(--gold2); }

footer .disc {
  font-size: 11px;
  color: rgba(255,255,255,.15);
  max-width: 480px;
  margin: 16px auto 0;
  line-height: 1.7;
}

/* ============================================
   LIVE NOTIFICATIONS
   ============================================ */
.notif-stack {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: none;
}

.notif {
  animation: nfIn .4s ease-out, nfOut .4s ease-in 3.2s forwards;
  padding: 12px 18px;
  border-radius: 14px;
  background: rgba(0,0,0,.92);
  border: 1px solid rgba(200,168,78,.15);
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(14px);
  color: #fff;
}

@keyframes nfIn {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes nfOut {
  to { opacity: 0; transform: translateY(-10px); }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .hero h1 { font-size: clamp(36px, 12vw, 56px); }
  .card-grid { grid-template-columns: 1fr; }
  .btn-gold, .btn-ghost { width: 100%; justify-content: center; }
  .results-scroll { gap: 12px; }
  .result-frame { width: 80vw; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
  }
}
`;

const BODY = `
<div id="universe"></div>
<div class="notif-stack" id="notifs"></div>

<main>
  <section class="hero">
    <div class="hero-pre">GoldBank Trading</div>
    <h1>
      <span class="stroke">GOLD</span><br>
      <span class="fill">Standard.</span>
    </h1>
    <p class="hero-tagline">
      Pr${a}zise Signale. Live-Analysen. Eine Brotherhood aus 250 Elite-Tradern.
      Kein Bullshit &mdash; nur nachweisbare Results.
    </p>
    <div class="cta-group">
      <a href="https://t.me/GoldbankManager" target="_blank" class="btn-gold">
        <span>&#x2713;</span> Jetzt kostenlos beitreten
      </a>
      <a href="#results" class="btn-ghost">Results ansehen &#x2193;</a>
    </div>
  </section>

  <div class="marquee">
    <div class="marquee-track" id="marquee"></div>
  </div>

  <div class="stats-banner">
    <div class="stat-pill"><div class="sp-num">250+</div><div class="sp-lbl">Aktive Trader</div></div>
    <div class="stat-pill"><div class="sp-num">94%</div><div class="sp-lbl">Win-Rate (30T)</div></div>
    <div class="stat-pill"><div class="sp-num">24/7</div><div class="sp-lbl">Support</div></div>
    <div class="stat-pill"><div class="sp-num">#1</div><div class="sp-lbl">Community</div></div>
  </div>

  <div class="fomo-strip">
    <div class="fomo-item">&#x1F525; Nur noch <strong id="fomoNum">23</strong> Pl${a}tze frei</div>
    <div class="fomo-item">&#x2B50; <strong>4.9/5</strong> Community-Rating</div>
    <div class="fomo-item">&#x1F680; <strong id="onlineNum">247</strong> Trader online</div>
  </div>

  <div class="cards-section" id="features">
    <div class="section-eyebrow">Was wir bieten</div>
    <h2 class="section-title">Drei S${a}ulen. <em>Ein Versprechen.</em></h2>
    <div class="card-grid">
      <div class="card">
        <div class="card-icon">&#x1F3AF;</div>
        <h3>Pr${a}zise <span>Signale</span></h3>
        <p>Entry, Stop-Loss und Take-Profit glasklar definiert. Jedes Setup charttechnisch fundiert mit KI-gest${u}tzt Scannern. Kein Ratespiel.</p>
      </div>
      <div class="card">
        <div class="card-icon">&#x1F4C8;</div>
        <h3>Live <span>Analyse</span></h3>
        <p>Echtzeit-Chartanalyse direkt im Stream. Verstehe WARUM ein Trade l${a}uft &mdash; nicht nur blind folgen. Bildung ${u}ber alles.</p>
      </div>
      <div class="card">
        <div class="card-icon">&#x1F91D;</div>
        <h3>Brother<span>hood</span></h3>
        <p>250 Elite-Trader auf einer Mission. T${a}glicher Austausch auf Augenh${o}he. Keine falschen Gurus &mdash; eine Familie die gemeinsam w${a}chst.</p>
      </div>
    </div>
  </div>

  <div class="results-section" id="results">
    <div class="section-eyebrow">Performance</div>
    <h2 class="section-title">Echte <em>Results.</em></h2>
    <div class="gold-line"></div>
    <div class="results-scroll" id="resultsScroll">
      <div class="result-frame"><img src="results/1.jpg" alt="Result" loading="lazy"></div>
      <div class="result-frame"><img src="results/2.jpg" alt="Result" loading="lazy"></div>
      <div class="result-frame"><img src="results/3.jpg" alt="Result" loading="lazy"></div>
      <div class="result-frame"><img src="results/4.jpg" alt="Result" loading="lazy"></div>
      <div class="result-frame"><img src="results/5.jpg" alt="Result" loading="lazy"></div>
    </div>
  </div>

  <div class="cta-footer">
    <div class="section-eyebrow">Bereit?</div>
    <h2>Zeit f${u}r deinen <em>Edge.</em></h2>
    <div class="gold-line"></div>
    <div class="cta-group" style="opacity:1;animation:none;margin-top:16px">
      <a href="https://t.me/GoldbankManager" target="_blank" class="btn-gold">
        <span>&#x2713;</span> Kostenlos starten
      </a>
    </div>
    <p style="color:rgba(255,255,255,.2);font-size:12px;margin-top:14px">Keine Kreditkarte. Keine Kosten. Dauerhaft.</p>
  </div>

  <div class="faq-section">
    <div class="section-eyebrow">Fragen</div>
    <h2 class="section-title" style="margin-bottom:32px">Was du wissen <em>musst.</em></h2>
    <div class="faq-item">
      <summary>Ist GoldBank wirklich kostenlos?</summary>
      <p>Ja. 100%. Kein Premium-Tier, keine versteckten Kosten, keine Probeabos. Dauerhaft gratis.</p>
    </div>
    <div class="faq-item">
      <summary>F${u}r wen ist die Community geeignet?</summary>
      <p>F${u}r jeden, der ernsthaft traden m${o}chte &mdash; vom Anf${a}nger bis zum Profi. Unsere Signale sind erkl${a}rt, Analysen nachvollziehbar, Community unterst${u}tzt.</p>
    </div>
    <div class="faq-item">
      <summary>Wie erhalte ich Zugang?</summary>
      <p>Klick auf &bdquo;Beitreten&rdquo; &mdash; du wirst direkt zu unserer Telegram-Community weitergeleitet. Kein Formular, keine Wartezeit.</p>
    </div>
    <div class="faq-item">
      <summary>Was macht GoldBank anders?</summary>
      <p>Bildung statt Abh${a}ngigkeit. Du lernst WARUM ein Trade funktioniert &mdash; nicht nur blind kopieren. Das macht dich langfristig profitabel.</p>
    </div>
  </div>

  <footer>
    <div class="flogo">GOLD<em>BANK</em></div>
    <a href="https://t.me/GoldbankManager" target="_blank">t.me/GoldbankManager</a>
    <p style="color:rgba(255,255,255,.15);font-size:10px;margin-top:6px">&copy; 2026 GoldBank Trading. Alle Rechte vorbehalten.</p>
    <p class="disc">Trading birgt erhebliche Verlustrisiken. Handle nur mit Kapital, dessen Verlust du verkraften kannst. Keine Anlageberatung. Vergangene Ergebnisse garantieren keine zuk${u}nftigen Gewinne.</p>
  </footer>
</main>
`;

const JS = `
(function(){
  // === GOLDEN DUST ===
  var u = document.getElementById("universe");
  for (var i = 0; i < 60; i++) (function(d){
    var el = document.createElement("div");
    el.className = "dust";
    el.style.left = Math.random() * 100 + "%";
    el.style.width = el.style.height = (1 + Math.random() * 3) + "px";
    el.style.animationDuration = (10 + Math.random() * 20) + "s";
    el.style.animationDelay = Math.random() * 15 + "s";
    u.appendChild(el);
  })(i);

  // === MARQUEE ===
  var wins = ["XAUUSD +2.130\\u20ac","EURUSD +890\\u20ac","NASDAQ +3.450\\u20ac","BTC/USD +1.560\\u20ac","GBPJPY +780\\u20ac","DAX +2.500\\u20ac","US30 +1.200\\u20ac"];
  var mt = "";
  for (var i = 0; i < 26; i++) mt += '<span class="marquee-item">\\u{1F3C6} <strong>' + wins[i % wins.length] + '</strong></span>';
  document.getElementById("marquee").innerHTML = mt + mt;

  // === COUNTERS ===
  setInterval(function(){
    document.getElementById("fomoNum").textContent = Math.floor(Math.random() * 14) + 16;
  }, 18000);
  setInterval(function(){
    document.getElementById("onlineNum").textContent = Math.floor(Math.random() * 50) + 210;
  }, 25000);

  // === NOTIFICATIONS ===
  var names = ["Max","Leon","Luca","David","Felix","Jonas","Tim","Niklas","Tom","Paul","Finn","Ben","Elias","Noah","Luis","Jan","Sven"];
  (function loop(){
    var n = names[Math.floor(Math.random() * names.length)];
    var el = document.createElement("div");
    el.className = "notif";
    el.innerHTML = '<span style="color:#4ade80;font-weight:700">\\u2713</span> <b>' + n + '</b> ist beigetreten';
    document.getElementById("notifs").appendChild(el);
    setTimeout(function(){ el.remove(); }, 3600);
    setTimeout(loop, 5000 + Math.random() * 6000);
  })();

  // === GRAB SCROLL for results ===
  var rs = document.getElementById("resultsScroll");
  var isDown = false, startX, scrollLeft;
  rs.addEventListener("mousedown", function(e){
    isDown = true; rs.style.cursor = "grabbing";
    startX = e.pageX - rs.offsetLeft;
    scrollLeft = rs.scrollLeft;
  });
  rs.addEventListener("mouseleave", function(){ isDown = false; rs.style.cursor = "grab"; });
  rs.addEventListener("mouseup", function(){ isDown = false; rs.style.cursor = "grab"; });
  rs.addEventListener("mousemove", function(e){
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - rs.offsetLeft;
    rs.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
})();
`;

const HTML = '<!DOCTYPE html>\n<html lang="de">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>GoldBank — Der Gold-Standard</title>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">\n<style>\n' + CSS + '\n</style>\n</head>\n<body>\n' + BODY + '\n<script>\n' + JS + '\n</script>\n</body>\n</html>';

fs.writeFileSync(output, HTML, 'utf8');
const size = fs.statSync(output).size;
console.log('v8.0 written: ' + size + ' bytes');

const check = fs.readFileSync(output, 'utf8');
['auml;','ouml;','uuml;','szlig;','euro;','Pl','tze'].forEach(function(w) {
  console.log(check.includes(w) ? 'OK: ' + w : 'XX: ' + w);
});
