(function () {
  'use strict';
  var WEEKS = window.WEEKS || [];
  var EXAMS = (window.EXAMS || []).slice().sort(function (a, b) { return a.id - b.id; });

  var UI = {
    tr: {
      home: 'Ana sayfa', weeks: 'Haftalık özetler', exams: 'Deneme vizeleri', week: 'Hafta',
      exam: 'Deneme Vize', mc: 'Test soruları', classic: 'Klasik sorular',
      show: 'Cevabı göster', hide: 'Cevabı gizle', correct: 'Doğru!', wrong: 'Yanlış.',
      answerIs: 'Doğru cevap', explanation: 'Açıklama', score: 'Puan', answered: 'cevaplanan',
      reset: 'Sıfırla', showAll: 'Tüm cevapları göster', prev: 'Önceki', next: 'Sonraki',
      sample: 'Örnek çözüm', fromWeek: 'Hafta',
      homeTitle: 'SWE 103 — Yazılım Mühendisliğine Giriş',
      homeLead: 'Vize çalışma sitesi: W1–W6 ders slaytlarına dayalı konu özetleri ve 5 adet çözümlü deneme vize sınavı (her biri 20 test + 2 klasik).',
      howTo: 'Nasıl kullanılır?',
      howToText: 'Önce haftalık özetleri okuyun, sonra deneme sınavlarını çözün. Test sorularında bir şık seçtiğinizde doğru/yanlış ve açıklama hemen altında görünür; isterseniz “Cevabı göster” ile doğrudan çözümü açabilirsiniz. Klasik sorularda önce kendi cevabınızı yazıp sonra örnek çözümle karşılaştırın.',
      examDesc: '20 test + 2 klasik soru',
      foot: 'Kaynak: SWE 103 ders slaytları W1–W6 (2026) ve Git cheat sheet. Kişisel çalışma amaçlıdır; resmi ders materyali değildir.',
      notFound: 'Sayfa bulunamadı.',
      courseInfo: 'Ders bilgisi',
      courseInfoText: 'Sakarya Üniversitesi Yazılım Mühendisliği, SWE 103 Introduction to Software Engineering — Ahmet Özmen, 2026. Değerlendirme: Vize %24, 4 proje toplam %36 (%6+%6+%12+%12), Final %40.',
      resetConfirm: 'Bu sınavdaki tüm cevaplar silinsin mi?'
    },
    en: {
      home: 'Home', weeks: 'Weekly summaries', exams: 'Mock midterms', week: 'Week',
      exam: 'Mock Midterm', mc: 'Multiple-choice questions', classic: 'Open-ended questions',
      show: 'Show answer', hide: 'Hide answer', correct: 'Correct!', wrong: 'Wrong.',
      answerIs: 'Correct answer', explanation: 'Explanation', score: 'Score', answered: 'answered',
      reset: 'Reset', showAll: 'Show all answers', prev: 'Previous', next: 'Next',
      sample: 'Sample solution', fromWeek: 'Week',
      homeTitle: 'SWE 103 — Introduction to Software Engineering',
      homeLead: 'Midterm study site: topic summaries based on the W1–W6 lecture slides and 5 mock midterm exams with solutions (20 multiple-choice + 2 open-ended questions each).',
      howTo: 'How to use',
      howToText: 'Read the weekly summaries first, then work through the mock exams. When you pick an option, the result and an explanation appear right below it; you can also open the solution directly with “Show answer”. For open-ended questions, write your own answer first and then compare it with the sample solution.',
      examDesc: '20 multiple-choice + 2 open-ended',
      foot: 'Source: SWE 103 lecture slides W1–W6 (2026) and a Git cheat sheet. For personal study only; not official course material.',
      notFound: 'Page not found.',
      courseInfo: 'Course info',
      courseInfoText: 'Sakarya University Software Engineering, SWE 103 Introduction to Software Engineering — Ahmet Özmen, 2026. Assessment: Midterm 24%, 4 projects 36% in total (6%+6%+12%+12%), Final 40%.',
      resetConfirm: 'Clear all answers in this exam?'
    }
  };

  var lang = 'tr';
  try { var s = localStorage.getItem('swe103-lang'); if (s === 'en' || s === 'tr') lang = s; } catch (e) {}
  var state = {}; // examId -> {mc:{i:{c:chosenIndex|null, s:bool}}, cl:{i:bool}}

  function t(k) { return UI[lang][k]; }
  function L(v) { // bilingual value: [tr, en] or {tr,en} or plain string
    if (v == null) return '';
    if (typeof v === 'string') return v;
    if (Array.isArray(v)) return lang === 'en' ? (v[1] != null ? v[1] : v[0]) : v[0];
    return v[lang] != null ? v[lang] : v.tr;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // deterministic shuffle so the correct option (always written first in the data) lands at varied positions
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var x = Math.imul(seed ^ seed >>> 15, 1 | seed); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; }
  var orderCache = {};
  var SALT = {}; EXAMS.forEach(function (x) { SALT[x.id] = x.salt || 0; });
  function order(examId, qi, n) {
    var key = examId + ':' + qi;
    if (orderCache[key]) return orderCache[key];
    var r = rng(examId * 7919 + qi * 104729 + 17 + (SALT[examId] || 0)), a = [];
    for (var i = 0; i < n; i++) a.push(i);
    for (var j = n - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)); var tmp = a[j]; a[j] = a[k]; a[k] = tmp; }
    return (orderCache[key] = a);
  }
  var LETTERS = 'ABCDE';

  var app = document.getElementById('app');

  function setTopbarVar() {
    var tb = document.querySelector('.topbar');
    document.documentElement.style.setProperty('--tb', tb.offsetHeight + 'px');
  }

  function renderChrome(route) {
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === lang); });
    var nav = '<a href="#/" class="' + (route === '' ? 'on' : '') + '">' + t('home') + '</a>';
    WEEKS.forEach(function (w) { nav += '<a href="#/w' + w.id + '" class="' + (route === 'w' + w.id ? 'on' : '') + '">W' + w.id + '</a>'; });
    EXAMS.forEach(function (x) { nav += '<a href="#/exam' + x.id + '" class="' + (route === 'exam' + x.id ? 'on' : '') + '">' + (lang === 'tr' ? 'Deneme ' : 'Exam ') + x.id + '</a>'; });
    document.getElementById('topnav').innerHTML = nav;
    document.getElementById('foot').textContent = t('foot');
    var on = document.querySelector('.topnav a.on');
    if (on && on.scrollIntoView) { var nv = document.getElementById('topnav'); nv.scrollLeft = on.offsetLeft - 40; }
    setTopbarVar();
  }

  function home() {
    document.title = 'SWE 103 — ' + (lang === 'tr' ? 'Vize Çalışma' : 'Midterm Study');
    var h = '<h1>' + t('homeTitle') + '</h1><p class="lead">' + t('homeLead') + '</p>';
    h += '<div class="card"><b>' + t('courseInfo') + '.</b> ' + t('courseInfoText') + '</div>';
    h += '<h2>' + t('weeks') + '</h2><div class="grid">';
    WEEKS.forEach(function (w) {
      h += '<a class="tile" href="#/w' + w.id + '"><div class="k">' + t('week') + ' ' + w.id + '</div><div class="t">' + L(w.title) + '</div><div class="d">' + L(w.sub) + '</div></a>';
    });
    h += '</div><h2>' + t('exams') + '</h2><div class="grid">';
    EXAMS.forEach(function (x) {
      var st = state[x.id], done = 0, ok = 0;
      if (st) Object.keys(st.mc).forEach(function (k) { var e = st.mc[k]; if (e.c != null) { done++; if (e.c === 0) ok++; } });
      h += '<a class="tile" href="#/exam' + x.id + '"><div class="k">' + t('exam') + ' ' + x.id + '</div><div class="t">' + L(x.title) + '</div><div class="d">' + t('examDesc') + (done ? ' · ' + ok + '/' + done : '') + '</div></a>';
    });
    h += '</div><h2>' + t('howTo') + '</h2><p>' + t('howToText') + '</p>';
    app.innerHTML = h;
  }

  function week(id) {
    var w = WEEKS.filter(function (x) { return x.id === id; })[0];
    if (!w) return notFound();
    document.title = 'W' + id + ' — ' + L(w.title);
    var h = '<p class="lead" style="margin-bottom:0">' + t('week') + ' ' + id + '</p><h1>' + L(w.title) + '</h1><p class="lead">' + L(w.sub) + '</p>';
    h += '<div class="wk-body">' + L(w.html) + '</div>';
    h += '<div class="pager">';
    if (id > 1) h += '<a href="#/w' + (id - 1) + '">← ' + t('prev') + ': W' + (id - 1) + '</a>';
    if (id < WEEKS.length) h += '<a class="next" href="#/w' + (id + 1) + '">' + t('next') + ': W' + (id + 1) + ' →</a>';
    else if (EXAMS.length) h += '<a class="next" href="#/exam1">' + t('exam') + ' 1 →</a>';
    h += '</div>';
    app.innerHTML = h;
    // build in-page TOC from h2s
    var hs = app.querySelectorAll('.wk-body h2');
    if (hs.length > 2) {
      var toc = document.createElement('div'); toc.className = 'toc';
      hs.forEach(function (el, i) {
        el.id = 's' + i;
        var a = document.createElement('a'); a.href = 'javascript:void 0'; a.textContent = el.textContent;
        a.addEventListener('click', function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
        toc.appendChild(a);
      });
      app.querySelector('.wk-body').before(toc);
    }
  }

  function examState(id) {
    if (!state[id]) state[id] = { mc: {}, cl: {} };
    return state[id];
  }

  function exam(id) {
    var x = EXAMS.filter(function (e) { return e.id === id; })[0];
    if (!x) return notFound();
    var st = examState(id);
    document.title = t('exam') + ' ' + id + ' — SWE 103';
    var h = '<h1>' + t('exam') + ' ' + id + ': ' + L(x.title) + '</h1>';
    h += '<div class="exambar"><span class="score" id="score"></span><span style="flex:1"></span>' +
      '<button class="btn" id="showall">' + t('showAll') + '</button><button class="btn" id="reset">' + t('reset') + '</button></div>';
    h += '<h2>' + t('mc') + '</h2>';
    x.mc.forEach(function (q, qi) { h += '<div class="q" id="q' + qi + '">' + mcInner(x, q, qi, st) + '</div>'; });
    h += '<h2>' + t('classic') + '</h2>';
    x.cl.forEach(function (q, ci) { h += '<div class="q classic" id="c' + ci + '">' + clInner(q, ci, st) + '</div>'; });
    h += '<div class="pager">';
    if (id > 1) h += '<a href="#/exam' + (id - 1) + '">← ' + t('exam') + ' ' + (id - 1) + '</a>';
    if (id < EXAMS.length) h += '<a class="next" href="#/exam' + (id + 1) + '">' + t('exam') + ' ' + (id + 1) + ' →</a>';
    h += '</div>';
    app.innerHTML = h;
    updateScore(x, st);

    app.onclick = function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      if (b.dataset.opt != null) {
        var qi = +b.dataset.q, oi = +b.dataset.opt;
        var e = st.mc[qi] || (st.mc[qi] = { c: null, s: false });
        if (e.c != null) return;
        e.c = oi;
        rerenderQ(x, qi, st);
      } else if (b.dataset.show != null) {
        var qj = +b.dataset.show; var e2 = st.mc[qj] || (st.mc[qj] = { c: null, s: false });
        e2.s = !e2.s; rerenderQ(x, qj, st);
      } else if (b.dataset.cl != null) {
        var ci = +b.dataset.cl; st.cl[ci] = !st.cl[ci];
        document.getElementById('c' + ci).innerHTML = clInner(x.cl[ci], ci, st);
      } else if (b.id === 'showall') {
        x.mc.forEach(function (q, i) { (st.mc[i] || (st.mc[i] = { c: null, s: false })).s = true; rerenderQ(x, i, st); });
        x.cl.forEach(function (q, i) { st.cl[i] = true; document.getElementById('c' + i).innerHTML = clInner(q, i, st); });
      } else if (b.id === 'reset') {
        if (!confirm(t('resetConfirm'))) return;
        state[id] = { mc: {}, cl: {} }; exam(id); window.scrollTo(0, 0);
      }
    };
  }

  function rerenderQ(x, qi, st) {
    document.getElementById('q' + qi).innerHTML = mcInner(x, x.mc[qi], qi, st);
    updateScore(x, st);
  }

  function updateScore(x, st) {
    var done = 0, ok = 0;
    Object.keys(st.mc).forEach(function (k) { var e = st.mc[k]; if (e.c != null) { done++; if (e.c === 0) ok++; } });
    var el = document.getElementById('score');
    if (el) el.innerHTML = t('score') + ': <b>' + ok + '</b> / ' + x.mc.length + ' · ' + done + ' ' + t('answered');
  }

  function mcInner(x, q, qi, st) {
    var e = st.mc[qi] || { c: null, s: false };
    var ord = order(x.id, qi, q.o.length);
    var answered = e.c != null, reveal = answered || e.s;
    var h = '<div class="qh"><span class="qn">' + (qi + 1) + '.</span><span class="qt">' + L(q.q) + '</span><span class="wk">W' + q.w + '</span></div>';
    if (q.code) h += '<pre><code>' + esc(q.code) + '</code></pre>';
    h += '<div class="opts">';
    var correctLetter = '';
    ord.forEach(function (oi, pos) {
      var cls = 'opt';
      if (reveal && oi === 0) cls += ' right';
      if (answered && e.c === oi && oi !== 0) cls += ' wrong';
      if (oi === 0) correctLetter = LETTERS[pos];
      h += '<button type="button" class="' + cls + '" data-q="' + qi + '" data-opt="' + oi + '"' + (answered ? ' disabled' : '') + '><span class="L">' + LETTERS[pos] + '</span><span>' + L(q.o[oi]) + '</span></button>';
    });
    h += '</div>';
    if (answered) {
      var ok = e.c === 0;
      h += '<div class="res ' + (ok ? 'ok' : 'no') + '"><div class="rt">' + (ok ? t('correct') : t('wrong') + ' ' + t('answerIs') + ': ' + correctLetter) + '</div>' + L(q.e) + '</div>';
    } else if (e.s) {
      h += '<div class="res show"><div class="rt">' + t('answerIs') + ': ' + correctLetter + '</div>' + L(q.e) + '</div>';
    }
    if (!answered) h += '<button type="button" class="btn" data-show="' + qi + '" style="margin-top:8px">' + (e.s ? t('hide') : t('show')) + '</button>';
    return h;
  }

  function clInner(q, ci, st) {
    var open = !!st.cl[ci];
    var h = '<div class="qh"><span class="qn">K' + (ci + 1) + '.</span><span class="qt">' + L(q.q) + '</span><span class="wk">' + q.w + '</span></div>';
    h += '<button type="button" class="btn ' + (open ? '' : 'primary') + '" data-cl="' + ci + '">' + (open ? t('hide') : t('show')) + '</button>';
    if (open) h += '<div class="ans"><b>' + t('sample') + ':</b>' + L(q.a) + '</div>';
    return h;
  }

  function notFound() { app.innerHTML = '<h1>404</h1><p>' + t('notFound') + ' <a href="#/">' + t('home') + '</a></p>'; }

  var lastRoute = null;
  function route() {
    var r = (location.hash || '#/').replace(/^#\/?/, '');
    var changed = r !== lastRoute;
    app.onclick = null;
    renderChrome(r);
    var m;
    if (r === '') home();
    else if ((m = r.match(/^w(\d+)$/))) week(+m[1]);
    else if ((m = r.match(/^exam(\d+)$/))) exam(+m[1]);
    else notFound();
    if (changed) { window.scrollTo(0, 0); lastRoute = r; }
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      if (lang === b.dataset.lang) return;
      lang = b.dataset.lang;
      try { localStorage.setItem('swe103-lang', lang); } catch (e) {}
      var y = window.scrollY; route(); window.scrollTo(0, y);
    });
  });
  window.addEventListener('hashchange', route);
  window.addEventListener('resize', setTopbarVar);
  route();
})();
