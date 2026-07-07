/* ═══════════════════════════════════════════
   Avanti × Vibeflow — Shared Scripts
   ═══════════════════════════════════════════ */

// ── Language ──
function switchLang(lang) {
  var btn = document.getElementById('toggle-' + lang);
  if (!btn) return;
  document.querySelectorAll('.lang-toggle button').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  localStorage.setItem('avantiLang', lang);
  // Hide/show language-specific content if any
  document.querySelectorAll('[data-lang]').forEach(function(el) {
    el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
  });
}

(function() {
  var saved = localStorage.getItem('avantiLang') || 'bn';
  switchLang(saved);
})();

// ── Theme ──
(function() {
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();

// ── Progress Bar ──
window.addEventListener('scroll', function() {
  var p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  var bar = document.getElementById('progressBar');
  if (bar) bar.style.width = Math.min(p, 100) + '%';
});

// ── Bottom Nav Active State ──
(function() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.bottom-nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
})();

// ── GSAP Scroll Animations ──
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Hero fade-in
  gsap.from('.hero-section .hero-one-liner', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.2 });
  gsap.from('.hero-section .hero-headline', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.4 });
  gsap.from('.hero-section .hero-sub', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.6 });
  gsap.from('.hero-section .hero-actions', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.8 });

  // Section scroll reveals
  gsap.utils.toArray('.info-card, .service-card, .pricing-card, .timeline-item, .qa-card').forEach(function(el, i) {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.08,
      ease: 'power3.out'
    });
  });

  // ROI box reveal
  gsap.from('.roi-box', {
    scrollTrigger: { trigger: '.roi-box', start: 'top 85%' },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Orb parallax
  gsap.to('.glow-orb', {
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 },
    y: 120,
    rotation: 25,
    ease: 'none'
  });
}

// ── ROI Calculator (Bangla) ──
function roiFormat(n) { return '\u09F3' + n.toLocaleString('bn-BD'); }

function roiCalc() {
  var orders = parseFloat(document.getElementById('roi-orders')?.value) || 0;
  var avg = parseFloat(document.getElementById('roi-avg')?.value) || 0;
  var aggPct = parseInt(document.getElementById('roi-agg-pct')?.value) || 0;
  var comm = parseInt(document.getElementById('roi-comm')?.value) || 0;
  var shift = parseInt(document.getElementById('roi-shift')?.value) || 0;

  var aggPctVal = document.getElementById('roi-agg-pct-val');
  var commVal = document.getElementById('roi-comm-val');
  var shiftVal = document.getElementById('roi-shift-val');
  if (aggPctVal) aggPctVal.textContent = aggPct + '%';
  if (commVal) commVal.textContent = comm + '%';
  if (shiftVal) shiftVal.textContent = shift + '%';

  var aggOrders = orders * aggPct / 100;
  var aggRev = aggOrders * avg;
  var monthlyComm = aggRev * comm / 100;
  var monthlySave = monthlyComm * shift / 100;

  var mc = document.getElementById('roi-monthly-comm');
  var ms = document.getElementById('roi-monthly-save');
  var ys = document.getElementById('roi-yearly-save');
  if (mc) mc.textContent = roiFormat(Math.round(monthlyComm));
  if (ms) ms.textContent = roiFormat(Math.round(monthlySave));
  if (ys) ys.textContent = roiFormat(Math.round(monthlySave * 12));
}

// ── ROI Calculator (English) ──
function roiCalcEn() {
  var orders = parseFloat(document.getElementById('en-roi-orders')?.value) || 0;
  var avg = parseFloat(document.getElementById('en-roi-avg')?.value) || 0;
  var aggPct = parseInt(document.getElementById('en-roi-agg-pct')?.value) || 0;
  var comm = parseInt(document.getElementById('en-roi-comm')?.value) || 0;
  var shift = parseInt(document.getElementById('en-roi-shift')?.value) || 0;

  var aggPctVal = document.getElementById('en-roi-agg-pct-val');
  var commVal = document.getElementById('en-roi-comm-val');
  var shiftVal = document.getElementById('en-roi-shift-val');
  if (aggPctVal) aggPctVal.textContent = aggPct + '%';
  if (commVal) commVal.textContent = comm + '%';
  if (shiftVal) shiftVal.textContent = shift + '%';

  var aggOrders = orders * aggPct / 100;
  var aggRev = aggOrders * avg;
  var monthlyComm = aggRev * comm / 100;
  var monthlySave = monthlyComm * shift / 100;

  var mc = document.getElementById('en-roi-monthly-comm');
  var ms = document.getElementById('en-roi-monthly-save');
  var ys = document.getElementById('en-roi-yearly-save');
  if (mc) mc.textContent = '\u09F3' + Math.round(monthlyComm).toLocaleString('en-US');
  if (ms) ms.textContent = '\u09F3' + Math.round(monthlySave).toLocaleString('en-US');
  if (ys) ys.textContent = '\u09F3' + Math.round(monthlySave * 12).toLocaleString('en-US');
}

// Run ROI on load
setTimeout(function() {
  if (document.getElementById('roi-orders')) roiCalc();
  if (document.getElementById('en-roi-orders')) roiCalcEn();
}, 200);
