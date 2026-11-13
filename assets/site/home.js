/* Sportiverse homepage. Plain script, no build step.
   Needs: vendor/react(.dom), site/sportiverse-ds.js (window.Sportiverse).
   The page is readable without this file: it only adds the scroll story. */
(function () {
  'use strict';
  var S = window.Sportiverse, React = window.React, ReactDOM = window.ReactDOM;
  var doc = document, html = doc.documentElement;
  if (!S || !React || !ReactDOM) return;
  var h = React.createElement;
  var $ = function (sel, el) { return (el || doc).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(sel)); };
  var clamp = function (v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a === undefined ? 0 : a, v)); };
  var span = function (v, a, b) { return clamp((v - a) / (b - a)); };
  var still = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var hasGL = (function () {
    try { var c = doc.createElement('canvas'); return !!c.getContext('webgl'); } catch (e) { return false; }
  })();
  var liquid = hasGL && !still;
  function mount(el, node) { if (el) ReactDOM.createRoot(el).render(node); }

  html.classList.remove('no-js');
  html.classList.add('js');

  /* ---------- The match ---------- */

  var HOME = { name: 'Oslo FK', color: '#2F6FED' };
  var AWAY = { name: 'IF Haugesund', color: '#C8102E' };
  var COMP = 'Norgesligaen · Round 12';
  var TIMELINE = [
    { m: 0, e: { type: 'period', label: 'Kick-off' } },
    { m: 12, score: [1, 0], e: { minute: 12, side: 'home', type: 'goal', player: 'Ali Rahimi', score: '1 - 0', detail: 'Header' } },
    { m: 31, e: { minute: 31, side: 'away', type: 'yellow-card', player: 'Sander Moe' } },
    { m: 38, score: [1, 1], e: { minute: 38, side: 'away', type: 'goal', player: 'Kristian Vik', score: '1 - 1' } },
    { m: 45, e: { type: 'period', label: 'HT 1 - 1' } },
    { m: 46, e: { minute: 46, side: 'home', type: 'substitution', player: 'Jonas Lie', playerOff: 'Erik Dahl' } },
    { m: 54, score: [2, 1], e: { minute: 54, side: 'home', type: 'goal', player: 'Ali Rahimi', score: '2 - 1', detail: 'Assist Ingrid Berg' } },
    { m: 67, e: { minute: 67, side: 'home', type: 'yellow-card', player: 'Mats Bakke' } },
    { m: 88, score: [3, 1], e: { minute: 88, side: 'home', type: 'goal', player: 'Noah Haugen', score: '3 - 1', detail: 'Assist Ali Rahimi' } },
    { m: 90, e: { type: 'period', label: 'FT 3 - 1' } }
  ];
  var MOMENTUM = (function () {
    var g = function (t, c, w, a) { return a * Math.exp(-Math.pow((t - c) / w, 2)); };
    var hs = [[4, 2.2, 0.35], [11, 1.8, 0.95], [20, 2.5, 0.55], [26, 1.5, 0.3], [49, 2, 0.6], [53, 1.6, 1], [62, 2.2, 0.7], [79, 2.4, 0.5], [87, 1.8, 0.95]];
    var as = [[15, 1.6, 0.3], [31, 2.2, 0.6], [37, 1.5, 0.9], [44, 2, 0.55], [58, 1.8, 0.6], [66, 1.5, 0.35], [72, 2, 0.5]];
    var pts = [];
    for (var i = 0; i <= 180; i++) {
      var t = i / 2, v = 0;
      hs.forEach(function (p) { v += g(t, p[0], p[1], p[2]); });
      as.forEach(function (p) { v -= g(t, p[0], p[1], p[2]); });
      pts.push([t, clamp(v, -1, 1)]);
    }
    return pts;
  })();
  var GOALS = TIMELINE.filter(function (x) { return x.e.type === 'goal'; }).map(function (x) { return { minute: x.m, side: x.e.side, type: 'goal' }; });
  var SQUAD = [
    [50, 21, 'ST', 'Rahimi', 9.1, { goals: 2, assists: 1 }], [18, 28, 'LW', 'Solberg', 6.5], [82, 28, 'RW', 'Haugen', 7.9, { goals: 1 }],
    [25, 48, 'CM', 'Berg', 8.1, { assists: 1 }], [50, 53, 'CM', 'Dahl', 6.2, { subOff: 46 }], [75, 48, 'CM', 'Aas', 7.0],
    [15, 69, 'LB', 'Nilsen', 7.0], [37, 73, 'CB', 'Strand', 7.2], [63, 73, 'CB', 'Bakke', 6.6, { yellow: 1 }], [85, 69, 'RB', 'Lunde', 7.1], [50, 88, 'GK', 'Holm', 6.8]
  ];
  /* The order ratings arrive in: back to front, the striker last. */
  var RATE_ORDER = [10, 6, 7, 8, 9, 4, 5, 3, 1, 2, 0];
  var TABLE_BEFORE = [
    { name: 'Bergen SK', played: 12, won: 8, drawn: 2, lost: 2, points: 26, zone: 'teal' },
    { name: 'Oslo FK', played: 11, won: 7, drawn: 3, lost: 1, points: 24, live: true, highlight: true },
    { name: 'Frigg', played: 12, won: 6, drawn: 3, lost: 3, points: 21 },
    { name: 'Lyn', played: 12, won: 5, drawn: 3, lost: 4, points: 18 },
    { name: 'Tromsdal IL', played: 12, won: 4, drawn: 4, lost: 4, points: 16 },
    { name: 'IF Haugesund', played: 11, won: 4, drawn: 1, lost: 6, points: 13, live: true },
    { name: 'Viken FK', played: 12, won: 3, drawn: 1, lost: 8, points: 10, zone: 'orange' },
    { name: 'Nordlys BK', played: 12, won: 2, drawn: 1, lost: 9, points: 7, zone: 'red' }
  ];
  var TABLE_AFTER = (function () {
    var r = TABLE_BEFORE.map(function (x) { return Object.assign({}, x, { live: false, zone: undefined }); });
    r[1] = Object.assign(r[1], { played: 12, won: 8, points: 27 });
    r[5] = Object.assign(r[5], { played: 12, lost: 7 });
    var t = r[0]; r[0] = r[1]; r[1] = t;
    r[0].zone = 'teal'; r[6].zone = 'orange'; r[7].zone = 'red';
    return r;
  })();
  var ZONES = { teal: 'Promotion', orange: 'Relegation play-off', red: 'Relegation' };

  /* ---------- Scroll store ---------- */

  /* Lengths of the pinned story, in viewport heights. */
  var SEG = { launch: 1.15, match: 3.7, lineup: 1.25, table: 1.3 };
  var REST = 560;            /* the launch frame the hero rests on */
  var DONE = S.launchTimeline.done;
  var BEAT_AT = [0, 12, 34, 54, 88]; /* match minutes where a new caption takes over */

  var store = {
    state: { at: 0, minute: -1, beat: 0, phase: 'match', rated: 0, moved: false, w: 0, h: 0 },
    subs: [],
    set: function (patch) {
      var s = this.state, changed = false, k;
      for (k in patch) if (s[k] !== patch[k]) { changed = true; break; }
      if (!changed) return;
      this.state = Object.assign({}, s, patch);
      this.subs.forEach(function (f) { f(); });
    }
  };
  function useStore() {
    var st = React.useState(store.state), set = st[1];
    React.useEffect(function () {
      var f = function () { set(store.state); };
      store.subs.push(f);
      f();
      return function () { store.subs.splice(store.subs.indexOf(f), 1); };
    }, []);
    return st[0];
  }

  /* ---------- The phone ---------- */

  function clock(minute) {
    var m = Math.max(0, Math.floor(minute)) + (minute >= 46 ? 15 : 0), t = 14 * 60 + m;
    return Math.floor(t / 60) + ':' + ('0' + (t % 60)).slice(-2);
  }
  function StatusBar(props) {
    return h('div', { className: 'ph-sb' },
      h('span', { className: 'ph-time' }, props.time),
      h('span', { className: 'ph-island' }),
      h('span', { className: 'ph-sys', 'aria-hidden': 'true' },
        h('i', { className: 'ph-signal' }), h('i', { className: 'ph-batt' })));
  }
  function MatchView(props) {
    var minute = props.minute, phase = props.phase;
    var seen = TIMELINE.filter(function (x) { return x.m <= minute; });
    var score = [0, 0];
    seen.forEach(function (x) { if (x.score) score = x.score; });
    var status = minute < 0 ? 'scheduled' : minute >= 90 ? 'ft' : (minute >= 45 && minute < 46) ? 'ht' : 'live';
    var match = { home: HOME, away: AWAY, homeScore: score[0], awayScore: score[1], status: status, minute: Math.max(1, Math.floor(minute)), time: '14:00', competition: COMP, country: 'no', venue: 'Frogner stadion' };
    var m = clamp(minute, 0.5, 90);
    var lineup = phase === 'lineup';
    var players = SQUAD.map(function (p, i) {
      var shown = RATE_ORDER.indexOf(i) < props.rated;
      return Object.assign({ x: p[0], y: p[1], pos: p[2], name: p[3], rating: shown ? p[4] : null }, shown ? p[5] || {} : {});
    });
    var avg = 7.2;
    return h('div', { className: 'ph-view' },
      h(S.MatchDetailHeader, { match: match, tabs: ['Line-up', 'Events', 'Stats'], tab: lineup ? 'Line-up' : 'Events', compact: props.compact, onBack: function () {} }),
      lineup
        ? h('div', { className: 'ph-body ph-in', key: 'lineup' },
            h(S.SectionHeader, { title: 'Oslo FK Formation', subtitle: '4-3-3', trailing: props.rated >= 11 ? h(S.PlayerMatchRating, { rating: avg, size: 'md' }) : null }),
            h(S.Card, { style: { padding: 12 } }, h(S.FormationDisplay, { title: 'Oslo FK formation', teamColor: HOME.color, players: players })))
        : h('div', { className: 'ph-body', key: 'events' },
            h(S.Card, { title: 'Match Momentum' },
              h('div', { style: { padding: '8px 16px 16px' } },
                h(S.MomentumChart, {
                  points: MOMENTUM.filter(function (p) { return p[0] <= m; }), minute: Math.round(m), homeColor: HOME.color, awayColor: AWAY.color,
                  events: GOALS.filter(function (g) { return g.minute <= minute; })
                }))),
            h(S.Card, { style: { padding: '8px 12px' } },
              seen.length
                ? seen.slice().reverse().map(function (x) { return h('div', { className: 'ph-ev', key: x.m }, h(S.MatchEventItem, { event: x.e })); })
                : h('div', { className: 'ph-wait' }, 'Kick-off 14:00'))));
  }
  function LeagueView(props) {
    var ref = React.useRef(null), tops = React.useRef({});
    var rows = props.moved ? TABLE_AFTER : TABLE_BEFORE;
    /* Rows glide to their new place when the table changes. */
    React.useLayoutEffect(function () {
      var trs = $$('tbody tr', ref.current), next = {};
      trs.forEach(function (tr, i) {
        var name = rows[i].name, top = tr.offsetTop, prev = tops.current[name];
        next[name] = top;
        if (prev !== undefined && prev !== top && !still) {
          tr.style.transition = 'none';
          tr.style.transform = 'translateY(' + (prev - top) + 'px)';
          tr.style.position = 'relative';
          tr.style.zIndex = name === 'Oslo FK' ? 2 : 1;
          tr.getBoundingClientRect();
          tr.style.transition = 'transform var(--dur-smooth) var(--spring-smooth)';
          tr.style.transform = '';
        }
      });
      tops.current = next;
    }, [props.moved]);
    return h('div', { className: 'ph-view ph-push', ref: ref },
      h(S.DetailHeader, { title: 'Norgesligaen', subtitle: 'Round 12 · 2026', icon: 'trophy', onBack: function () {}, buttons: [{ name: 'share', label: 'Share' }], tabs: ['Matches', 'Table', 'Stats'], tab: 'Table' }),
      h('div', { className: 'ph-body' },
        h(S.LeagueStandings, { rows: rows, zones: ZONES })));
  }
  function Phone(props) {
    var s = props.s, league = s.phase === 'table';
    var time = s.phase === 'match' ? clock(s.minute) : league ? '15:47' : '15:46';
    return h('div', { className: 'phone', style: { '--ps': props.scale } },
      h('div', { className: 'phone-screen', 'data-theme': 'light' },
        h('div', { className: 'phone-ui' },
          h(StatusBar, { time: time }),
          h(MatchView, { minute: s.minute, phase: s.phase === 'table' ? 'lineup' : s.phase, rated: s.rated, compact: props.compact }),
          league ? h(LeagueView, { moved: s.moved }) : null)));
  }

  /* ---------- The stage: captions + phone ---------- */

  var BEATS = $$('#beats > li').map(function (li) {
    var k = $('.kicker', li), t = $('h2', li), p = $('p:not(.kicker)', li);
    return { id: li.getAttribute('data-beat'), kicker: k ? k.textContent : '', title: t ? t.innerHTML : '', body: p ? p.innerHTML : '' };
  });
  function Kicker(props) {
    var b = props.beat, s = props.s, i = props.i;
    if (i === 0) return h('span', { className: 'cap-k' }, b.kicker);
    if (i < 5) return h('span', { className: 'cap-k' }, h(S.LiveTimer, { status: s.minute >= 90 ? 'ft' : 'live', minute: clamp(Math.floor(s.minute), 1, 90), size: 'lg' }));
    return h('span', { className: 'cap-k' }, b.kicker);
  }
  function Stage() {
    var s = useStore();
    var mobile = s.w < 880;
    var screenW = mobile ? Math.min(s.w - 72, 340, (s.h - 250) * 0.72) : clamp((s.h - 170) * 390 / 844, 250, 372);
    var scale = Math.max(0.5, screenW / 390);
    var mp = span(s.minute, 0, 90);
    return h('div', { className: 'stage', 'data-theme': 'light', 'data-phase': s.phase },
      h('div', { className: 'stage-in' },
        h('div', { className: 'copy' },
          h('div', { className: 'caps' },
            BEATS.map(function (b, i) {
              return h('div', { key: b.id, className: 'cap' + (i === s.beat ? ' is-on' : i < s.beat ? ' is-past' : '') },
                h(Kicker, { beat: b, s: s, i: i }),
                h('p', { className: 'cap-t', dangerouslySetInnerHTML: { __html: b.title } }),
                h('p', { className: 'cap-b', dangerouslySetInnerHTML: { __html: b.body } }));
            })),
          h('div', { className: 'clockbar' + (s.minute >= 0 ? ' is-on' : '') },
            h('span', { className: 'clockbar-track' }, h('span', { className: 'clockbar-fill', style: { transform: 'scaleX(' + mp.toFixed(4) + ')' } })),
            h('span', { className: 'clockbar-labels' }, h('span', null, '0′'), h('span', null, 'HT'), h('span', null, 'FT')))),
        h('div', { className: 'phone-wrap' }, h(Phone, { s: s, scale: scale.toFixed(4), compact: mobile }))));
  }
  var stageEl = h(Stage);

  function Launch() {
    var s = useStore();
    if (!s.w) return null;
    if (!liquid) {
      var o = 1 - span(s.at, REST + 200, REST + 900);
      return h('div', { className: 'launch-plain' }, stageEl,
        o > 0 ? h('div', { className: 'launch-cover', style: { opacity: o } }, h(S.Logo, { kind: 'mark', height: markSize(s), decorative: true })) : null);
    }
    return h(S.LaunchScreen, { width: s.w, height: s.h, markSize: markSize(s), at: s.at }, stageEl);
  }
  function markSize(s) { return Math.round(clamp(Math.min(s.w, s.h) * 0.17, 92, 148)); }

  /* ---------- Wiring ---------- */

  var story = $('#story'), pin = $('.story-pin'), hero = $('#hero'), nav = $('#nav');
  var introAt = still || !liquid ? REST : 0, introT0 = null;
  var toneSections = $$('[data-tone]');
  var navLogoTone = { v: 'white', subs: [] };

  function NavLogo() {
    var st = React.useState(navLogoTone.v), set = st[1];
    React.useEffect(function () { navLogoTone.subs.push(set); }, []);
    return h(S.Logo, { height: 22, tone: st[0] === 'white' ? 'white' : 'midnight', label: 'Sportiverse' });
  }
  function setTone(tone) {
    if (nav.getAttribute('data-theme') === tone) return;
    nav.setAttribute('data-theme', tone);
    navLogoTone.v = tone === 'dark' ? 'white' : 'ink';
    navLogoTone.subs.forEach(function (f) { f(navLogoTone.v); });
  }

  function measure() {
    var r = pin.getBoundingClientRect();
    store.set({ w: Math.round(r.width), h: Math.round(r.height) });
    html.style.setProperty('--mark', markSize({ w: r.width, h: r.height }) + 'px');
  }

  var ways = $('#ways'), waysPin = $('.ways-pin'), track = $('.ways-track');
  var words = [], say = $('#say');
  var tiles = $$('.tile');

  function frame(now) {
    ticking = false;
    var vh = window.innerHeight, y = -story.getBoundingClientRect().top, v = y / (store.state.h || vh);

    /* Launch: the intro runs on time up to the rest frame, then scroll takes over. */
    var lp = clamp(v / SEG.launch);
    var at = introAt + (DONE - introAt) * lp;
    var mv = v - SEG.launch;
    var minute = mv <= 0 ? -1 : Math.min(90, (mv / (SEG.match * 0.9)) * 90);
    var lv = mv - SEG.match, tv = lv - SEG.lineup;
    var phase = lv < 0.06 ? 'match' : tv < 0 ? 'lineup' : 'table';
    var beat = 0;
    if (phase === 'match') { for (var i = 0; i < BEAT_AT.length; i++) if (minute >= BEAT_AT[i]) beat = i; }
    else beat = phase === 'lineup' ? 5 : 6;
    store.set({
      at: Math.round(at / 4) * 4,
      minute: minute < 0 ? -1 : Math.round(minute * 4) / 4,
      phase: phase, beat: beat,
      rated: phase === 'match' ? 0 : Math.round(clamp(span(lv, 0.12, SEG.lineup * 0.72) * 11, 0, 11)),
      moved: tv > SEG.table * 0.36
    });

    /* Hero copy leaves as the swirl winds up. */
    var ho = 1 - span(lp, 0.02, 0.24);
    hero.style.opacity = ho.toFixed(3);
    hero.style.transform = 'translate3d(0,' + (-lp * 90).toFixed(1) + 'px,0)';
    hero.style.visibility = ho <= 0 ? 'hidden' : '';

    /* Navigation: tone follows what is under it; it floats once the page moves. */
    var tone = 'dark';
    if (v < SEG.launch + SEG.match + SEG.lineup + SEG.table + 0.02) tone = at > 1820 ? 'light' : 'dark';
    else for (var j = 0; j < toneSections.length; j++) {
      var tr = toneSections[j].getBoundingClientRect();
      if (tr.top <= 40 && tr.bottom > 40) { tone = toneSections[j].getAttribute('data-tone'); break; }
    }
    setTone(tone);
    nav.classList.toggle('is-floating', lp > 0.3);

    /* Four ways in: the track moves sideways while the section is pinned. */
    if (ways && track) {
      var wide = window.innerWidth >= 880 && !still;
      if (wide) {
        var wr = ways.getBoundingClientRect(), wp = clamp(-wr.top / (wr.height - vh));
        var dist = Math.max(0, track.scrollWidth - waysPin.clientWidth);
        track.style.transform = 'translate3d(' + (-wp * dist).toFixed(1) + 'px,0,0)';
      } else if (track.style.transform) track.style.transform = '';
    }

    /* The statement reads itself in as it crosses the screen. */
    if (say && words.length) {
      var sr = say.getBoundingClientRect(), sp = span(vh * 0.86 - sr.top, 0, sr.height + vh * 0.42), n = sp * words.length;
      for (var k = 0; k < words.length; k++) words[k].style.opacity = (0.16 + 0.84 * clamp(n - k)).toFixed(2);
    }

    /* Tiles drift at their own depth. */
    if (!still) tiles.forEach(function (t) {
      var r = t.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var d = parseFloat(t.getAttribute('data-depth') || '0'), c = (r.top + r.height / 2 - vh / 2) / vh;
      t.style.setProperty('--drift', (c * d * -60).toFixed(1) + 'px');
    });

    if (introT0 !== null) {
      var it = (now - introT0) / 1100;
      introAt = REST * (1 - Math.pow(1 - clamp(it), 3));
      if (it < 1) request(); else introT0 = null;
    }
  }
  var ticking = false;
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }

  /* ---------- Mounts ---------- */

  mount($('#nav-logo'), h(NavLogo));
  mount($('#foot-logo'), h(S.Logo, { height: 26, tone: 'white' }));
  mount($('#stage-root'), h(Launch));
  $$('[data-scene]').forEach(function (el) { mount(el, h(S.Scene, { flush: true, style: { position: 'absolute', inset: 0 } })); });
  $$('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon'), size = +el.getAttribute('data-size') || 44;
    whenSeen(el, function () { mount(el, h(S.Icon, { name: name, size: size, animate: !still })); }, 0.6);
  });

  var FT = { home: HOME, away: AWAY, homeScore: 2, awayScore: 1, status: 'live', minute: 67, competition: COMP, country: 'no', venue: 'Frogner stadion', prediction: { home: 76, draw: 18, away: 6 } };
  var MOUNTS = {
    winprob: function () {
      return h(S.Card, { title: 'Win probability' }, h('div', { style: { padding: '8px 16px 16px' } },
        h(S.WinProbabilityChart, {
          series: [[0, 0.45, 0.27], [12, 0.44, 0.29], [12, 0.63, 0.22], [38, 0.66, 0.21], [38, 0.47, 0.29], [54, 0.45, 0.32], [54, 0.71, 0.21], [67, 0.76, 0.18]],
          minute: 67, homeColor: HOME.color, awayColor: AWAY.color, homeName: HOME.name, awayName: AWAY.name,
          goals: [{ minute: 12, side: 'home', at: 0.63 }, { minute: 38, side: 'away', at: 0.76 }, { minute: 54, side: 'home', at: 0.71 }]
        })));
    },
    stats: function () {
      var c = { homeColor: HOME.color, awayColor: AWAY.color };
      return h(S.Card, { title: 'Match statistics' }, h('div', { style: { padding: '8px 16px 8px', display: 'flex', flexDirection: 'column', gap: 4 } },
        h(S.StatBar, Object.assign({ kind: 'split', label: 'Ball possession', home: 58, away: 42, format: function (v) { return v + '%'; } }, c)),
        h(S.StatBar, Object.assign({ label: 'Shots', home: 14, away: 9 }, c)),
        h(S.StatBar, Object.assign({ label: 'Shots on target', home: 6, away: 3 }, c)),
        h(S.StatBar, Object.assign({ label: 'Corners', home: 4, away: 5 }, c)),
        h(S.StatBar, Object.assign({ label: 'Fouls', home: 8, away: 11, lowerIsBetter: true }, c))));
    },
    player: function () {
      return h(S.Card, null,
        h(S.ListRow, { leading: h(S.ProfileAvatar, { name: 'Ali Rahimi', size: 44 }), title: 'Ali Rahimi', subtitle: 'Striker · Oslo FK', trailing: h(S.PlayerMatchRating, { rating: 9.1, size: 'lg' }) }),
        h('div', { style: { padding: '0 16px 8px' } }, h(S.ResultsRow, { matches: 12, minutes: 1034, avgMinutes: 86, rating: 7.8 })),
        h('div', { style: { padding: '0 16px 16px' } }, h(S.CharacteristicsRadar, { values: { FIN: 88, DRI: 74, DEF: 36, PAS: 66, AGG: 58 } })));
    },
    feed: function () {
      return h(S.FeedItemCard, { item: {
        event: 'goal', label: 'Goal', minute: 54, competition: 'Norgesligaen', timeAgo: '13 min', headline: 'Ali Rahimi scores his second', detail: 'Assist Ingrid Berg', highlight: 'home',
        score: { home: HOME, away: AWAY, homeScore: 2, awayScore: 1 }, likeCount: 23, commentCount: 4,
        latestComment: { name: 'Jonas Lie', text: 'What a finish from the edge of the box' }, latestLiker: { name: 'Ingrid Berg' },
        reactions: [{ emoji: '❤️', count: 14 }, { emoji: '🔥', count: 6 }, { emoji: '👏', count: 3 }]
      } });
    },
    live: function () { return h(S.MatchLiveActivity, { match: FT }); },
    mark: function () { return h(S.LiquidMark, { size: 112, interactive: true, loop: 9000, intro: true, label: 'Sportiverse' }); }
  };
  /* Tiles are laid out from the start and play their own entrance when they are first seen. */
  $$('[data-mount]').forEach(function (el) {
    var name = el.getAttribute('data-mount'), make = MOUNTS[name];
    if (!make) return;
    if (name === 'mark') { whenSeen(el, function () { mount(el, make()); }, 0.4); return; }
    var r = ReactDOM.createRoot(el);
    r.render(h(React.Fragment, { key: 'a' }, make()));
    whenSeen(el, function () { r.render(h(React.Fragment, { key: 'b' }, make())); el.classList.add('is-in'); }, 0.2);
  });
  $$('.reveal').forEach(function (el) { whenSeen(el, function () { el.classList.add('is-in'); }, 0.2); });

  function whenSeen(el, fn, ratio) {
    if (!('IntersectionObserver' in window)) { fn(); return; }
    var io = new IntersectionObserver(function (es) {
      if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); fn(); }
    }, { threshold: ratio || 0, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
  }

  /* Split the statement into words once. */
  if (say) {
    var text = say.textContent.trim().split(/\s+/);
    say.setAttribute('aria-label', text.join(' '));
    say.textContent = '';
    text.forEach(function (w, i) {
      var sp = doc.createElement('span');
      sp.textContent = w;
      sp.setAttribute('aria-hidden', 'true');
      say.appendChild(sp);
      if (i < text.length - 1) say.appendChild(doc.createTextNode(' '));
      words.push(sp);
    });
  }

  /* Store badges fall back to a plain pill if the image host is unreachable. */
  $$('.badge img').forEach(function (img) {
    var swap = function () { var a = img.parentNode; a.classList.add('is-text'); a.textContent = img.alt; };
    if (img.complete && !img.naturalWidth) swap(); else img.addEventListener('error', swap);
  });
  /* The language choice is remembered, as on the rest of the site. */
  $$('[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () { try { localStorage.setItem('lang', a.getAttribute('data-lang')); } catch (e) {} });
  });

  measure();
  window.addEventListener('resize', function () { measure(); request(); });
  window.addEventListener('scroll', request, { passive: true });
  if (liquid && window.scrollY < 8) {
    html.classList.add('intro');
    requestAnimationFrame(function (t) { introT0 = t; request(); });
  } else {
    introAt = REST;
    request();
  }
})();
