/* BDCBD501 design lab L5: loads, reactions and equilibrium (slot S1, web object 6AeBzkHLeBG).
   Runs after lab.js (engine, exports window.__eng, fix/ENGINE-API.md) and calc.js (generated from
   fix/designlab/calc.mjs by fix/designlab/gen-calc.mjs). Every engineering number shown comes from window.RCcalc:
   loadCombinations (Table 3.1), udlResultant / uvlResultant, simplySupportedReactions, simplySupportedDiagrams,
   momentSimpleUdl_kNm / momentSimplePointCentre_kNm. The trainee changes the span, two point loads (size, place,
   kind), the line loads Gk, Qk, Wk, a triangular load and the load combination; reactions, ΣFy = 0 and ΣM = 0,
   SFD, BMD and the deflected shape update live. Test plays the loading. RC_S1_Done only when every task passed.
   T = fix/manual/BDCBD501-trainee.txt line. */
(function () {
  'use strict';
  var E = window.__eng, C = window.RCcalc;
  if (!E || !C) { console.error('design.js: lab.js or calc.js missing'); return; }
  var U = E.lab, R = E.R, I = E.I, $ = E.He;

  // ---- manual data
  // Task 30 (T L2875-L2880): simply supported beam, 8 m, 20 kN at 3 m from A. Reactions, equilibrium, internal forces.
  // Task 20 beam 2 (T L2279-L2281): 10 m span, 50 kN at 3 m from the left support. The second load (40 kN) and the
  //   question "where so that RA = RB" are the lab's extension of that task (stated on screen).
  // Task 24 (T L2675-L2677): hospital loads Gk 8, Qk 5, Wk 3 kN/m, combination 1.2Gk + 1.2Qk + 1.2Wk.
  // Task 32 (T L3157-L3159): 6 m beam, UDL 20 kN/m: its moment wL²/8 is used as the beam's limit in task 3.
  var M_LIMIT = C.momentSimpleUdl_kNm({ w_kNm: 20, L_m: 6 }); // 90 kNm, from the Task 32 beam
  var KEY = { c1: 'deadImposed', c2: 'deadWind', c3: 'deadImposedWind' };
  var COMBOS = [
    { id: 'none', name: 'Characteristic loads, no factor', f: 'G<sub>k</sub> + Q<sub>k</sub> + W<sub>k</sub>' },
    { id: 'c1', name: '1.4Gk + 1.6Qk (dead and imposed)', f: '1.4G<sub>k</sub> + 1.6Q<sub>k</sub>' },
    { id: 'c2', name: '1.0Gk + 1.4Wk (dead and wind)', f: '1.0G<sub>k</sub> + 1.4W<sub>k</sub>' },
    { id: 'c3', name: '1.2Gk + 1.2Qk + 1.2Wk (all three)', f: '1.2G<sub>k</sub> + 1.2Q<sub>k</sub> + 1.2W<sub>k</sub>' }
  ];
  var KINDS = [['Gk', 'dead'], ['Qk', 'imposed'], ['Wk', 'wind']];
  var BLANK = { L: 8, p1: 0, a1: 3, k1: 'Qk', p2: 0, a2: 5, k2: 'Qk', gk: 0, qk: 0, wk: 0, uv: 0, uvEnd: 'A', uvK: 'Gk', combo: 'none' };
  var TASKS = [
    { id: 't30', name: 'Task 30: reactions', ref: '',
      given: 'Pedestrian bridge beam: simply supported, 8 m, 20 kN at 3 m from A. Find RA and RB and check that the forces and the moments balance.',
      st: { L: 8, p1: 20, a1: 3 } },
    { id: 't20', name: 'Equal reactions', ref: '',
      given: 'Task 20, beam 2: 10 m span, 50 kN at 3 m from A. Lab question: where must a second load of 40 kN go so that RA = RB?',
      st: { L: 10, p1: 50, a1: 3, p2: 40, a2: 5 } },
    { id: 't24', name: 'Load combinations', ref: '', limit: M_LIMIT,
      given: 'Task 24 hospital loads: Gk 8, Qk 5, Wk 3 kN/m. The beam is made for M = 90 kNm (the Task 32 beam, 20 kN/m on 6 m). Use the combination that governs and find the longest span (0.5 m steps).',
      st: { L: 7, gk: 8, qk: 5, wk: 3, combo: 'c1' } }
  ];
  var LIM = { L: [2, 12, 0.5], p: [0, 150, 5], a: 0.25, w: [0, 30, 0.5], uv: [0, 30, 1] };

  // ---- voice: new Imani lines (fix/voice/requests-L5.txt). Until a clip is in narr/, the caption and the signer run
  // from the text and no audio file is requested. Add a key to CLIPS when its mp3 and words.json arrive.
  var CLIPS = { s1d01: 1, s1d02: 1, s1d03: 1, s1d04: 1, s1d05: 1, s1d06: 1, s1d07: 1, s1d08: 1, s1d09: 1 };
  var LINES = {
    s1d01: 'Task thirty. An eight metre beam carries twenty kilonewtons, three metres from support A. Read the reactions, check that the forces and the moments balance, then press Test.',
    s1d02: 'Balanced. R A is twelve point five kilonewtons and R B is seven point five. Up equals down, and the moments about A add up to zero.',
    s1d03: 'Now the ten metre beam from task twenty, with fifty kilonewtons three metres from A. Place a second load of forty kilonewtons so that both supports carry the same, then press Test.',
    s1d04: 'Equal reactions. Forty five kilonewtons at each support. The load nearer to a support sends more of its weight to that support.',
    s1d05: 'The hospital loads from task twenty four, on a beam made for ninety kilonewton metres. Check the three load combinations, use the one that governs, and find the longest span that keeps the moment below the limit.',
    s1d06: 'Six metres is the longest span. The governing combination gives nineteen point two kilonewtons per metre, and the moment stays below ninety.',
    s1d07: 'Too much bending. The moment at mid span is above the limit of the beam, so it cracks at the bottom, where the steel is in tension. Shorten the span.',
    s1d08: 'Lab done. You found the reactions, balanced the forces and the moments, and chose the load combination that governs.',
    s1d09: 'Not equal yet. A support carries more when a load moves towards it. Move the second load and test again.'
  };
  function say(key) {
    var text = LINES[key];
    if (CLIPS[key]) return U.say(key, text);
    if (U.sign && U.sign.cache) U.sign.cache[''] = null; // signer uses the caption text, no words.json fetch
    return U.say('', text);
  }

  // ---- state
  var st = Object.assign({ task: 0 }, BLANK, TASKS[0].st);
  var ui = { raf: 0, busy: false, res: null, prev: null, last: null, cmp: false, eye: false, done: [false, false, false], sag: 0.05, crack: 0 };
  function task() { return TASKS[st.task]; }

  // ---- calculation (calc.mjs only)
  function factor(kind, combo) { // γ of one load kind in the chosen combination, read from Table 3.1 (loadCombinations)
    if (combo === 'none') return 1;
    var o = {}; o[kind] = 1;
    return C.loadCombinations(o)[KEY[combo]];
  }
  function compute(s) {
    s = s || st;
    var L = s.L, pts = [], udls = [], uvls = [], loads = [];
    [[s.p1, s.a1, s.k1, 'P<sub>1</sub>'], [s.p2, s.a2, s.k2, 'P<sub>2</sub>']].forEach(function (p, i) {
      if (!(p[0] > 0)) return;
      var g = factor(p[2], s.combo), P = g * p[0];
      pts.push({ P_kN: P, a_m: Math.min(p[1], L) });
      loads.push({ id: 'p' + (i + 1), name: p[3], kind: p[2], Pk: p[0], g: g, P: P, x: Math.min(p[1], L) });
    });
    var lc = C.loadCombinations({ Gk: s.gk, Qk: s.qk, Wk: s.wk });
    var w = s.combo === 'none' ? s.gk + s.qk + s.wk : lc[KEY[s.combo]];
    var udlR = null;
    if (w > 0) { udls.push({ w_kNm: w, start_m: 0, end_m: L }); udlR = C.udlResultant({ w_kNm: w, length_m: L }); }
    var uvR = null, gU = factor(s.uvK, s.combo), wU = gU * s.uv;
    if (wU > 0) {
      uvls.push({ wMax_kNm: wU, start_m: 0, end_m: L, heavyAt: s.uvEnd === 'A' ? 'start' : 'end' });
      uvR = C.uvlResultant({ wMax_kNm: wU, length_m: L });
    }
    var r = C.simplySupportedReactions({ span_m: L, pointLoads: pts, udls: udls, uvls: uvls });
    // SFD/BMD: calc.mjs simplySupportedDiagrams takes point loads and UDLs (CALC NEED: UVLs). The triangle is passed
    // as 240 short UDL slices of its mean intensity (exact resultant per slice); the reactions above stay exact.
    var dU = udls.slice();
    if (wU > 0) {
      var n = 240, dx = L / n;
      for (var i = 0; i < n; i++) {
        var xm = (i + 0.5) * dx, wi = wU * (s.uvEnd === 'A' ? 1 - xm / L : xm / L);
        dU.push({ w_kNm: wi, start_m: i * dx, end_m: (i + 1) * dx });
      }
    }
    var d = C.simplySupportedDiagrams({ span_m: L, pointLoads: pts, udls: dU, n: 241 });
    var res = { s: s, L: L, loads: loads, w: w, lc: lc, udlR: udlR, wU: wU, gU: gU, uvR: uvR, r: r, d: d,
      RA: r.RA_kN, RB: r.RB_kN, total: r.total_kN, Mmax: d.Mmax_kNm, xM: d.xMmax_m, Vmax: d.Vmax_kN, limit: task().limit || null };
    res.sumFy = r.RA_kN + r.RB_kN - r.total_kN;               // ΣFy = RA + RB − ΣP (T L2858)
    res.sumMA = r.RB_kN * L - r.momentA_kNm;                   // ΣMA = RB × L − Σ(P × x) (T L2862)
    res.u = res.limit ? Math.abs(res.Mmax) / res.limit : null;
    res.fail = !!(res.limit && Math.abs(res.Mmax) > res.limit + 1e-9);
    res.taskOk = taskOk(res);
    return res;
  }
  function near(a, b) { return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(b)); }
  function only(s, keys) { // every load not named is off
    var z = { p1: 0, p2: 0, gk: 0, qk: 0, wk: 0, uv: 0 };
    return Object.keys(z).every(function (k) { return keys.indexOf(k) >= 0 || !(s[k] > 0); });
  }
  function taskOk(res) {
    var s = res.s;
    if (s.task === 0) return s.L === 8 && only(s, ['p1']) && s.p1 === 20 && s.a1 === 3 && s.combo === 'none';
    if (s.task === 1) return s.L === 10 && only(s, ['p1', 'p2']) && s.p1 === 50 && s.a1 === 3 && s.p2 === 40 && s.combo === 'none' && near(res.RA, res.RB);
    if (s.task === 2) {
      var lc = res.lc, gov = Math.max(lc.deadImposed, lc.deadWind, lc.deadImposedWind);
      return only(s, ['gk', 'qk', 'wk']) && s.gk === 8 && s.qk === 5 && s.wk === 3 && s.combo !== 'none' && near(res.w, gov) && !res.fail &&
        s.L >= longest(gov) - 1e-9; // review L5 #1: only the longest span counts (5.5 m does not)
    }
    return false;
  }
  function longest(w) { // longest span on the 0.5 m grid with wL²/8 ≤ limit (calc momentSimpleUdl_kNm)
    var best = LIM.L[0];
    for (var L = LIM.L[0]; L <= LIM.L[1] + 1e-9; L += LIM.L[2]) if (C.momentSimpleUdl_kNm({ w_kNm: w, L_m: L }) <= M_LIMIT + 1e-9) best = L;
    return best;
  }
  window.__L5 = { st: st, ui: ui, compute: compute, tasks: TASKS, limit: M_LIMIT, set: function (o) { U.mark(); Object.assign(st, o); req(); } };

  // ---- formatting
  function fm(v, dp) { return v === null || v === undefined || isNaN(v) ? '·' : (Math.abs(v) < 0.5 * Math.pow(10, -dp) ? 0 : +v).toFixed(dp); }
  function kn(v) { return fm(v, 1) + ' kN'; }
  function knm(v) { return fm(v, 1) + ' kNm'; }
  function mm(v) { return fm(v, 2) + ' m'; }

  // ---- panel
  var css = document.createElement('style');
  css.textContent =
    '#dl{position:absolute;right:16px;top:78px;width:384px;max-height:508px;overflow:auto;background:rgba(255,255,255,.96);border-radius:16px;padding:10px 14px 12px;box-shadow:0 8px 24px rgba(15,46,90,.2);z-index:8;border-top:6px solid var(--amb);box-sizing:border-box}' +
    'body.pre #dl{visibility:hidden}#dl .k{font-size:11px;letter-spacing:.14em;font-weight:800;color:#b97800}' +
    '#dl h4{margin:2px 0 2px;font-size:17px;color:var(--navy)}#dl .gv{margin:0 0 4px;font-size:11.5px;line-height:1.35;color:var(--muted)}' +
    '#dl .sec{margin:5px 0 1px;font-size:11px;font-weight:800;letter-spacing:.12em;color:var(--navy);opacity:.8}' +
    '#dl .g2{display:grid;grid-template-columns:1fr 1fr;gap:4px 10px}#dl .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px 8px}' +
    '#dl .pl{display:grid;grid-template-columns:104px 1fr 96px;gap:2px 8px;align-items:end}#dl .pl .sl{font-size:10.5px}#dl .pl .sl b{font-size:12.5px}' +
    '#dl .stp{display:flex;flex-direction:column;font-size:11px;color:var(--muted);font-weight:700}' +
    '#dl .stp div{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);border-radius:9px;height:25px;margin-top:1px}' +
    '#dl .stp button{width:24px;height:23px;border:0;background:#eef3f9;color:var(--navy);font-size:16px;font-weight:800;cursor:pointer;border-radius:8px}' +
    '#dl button:focus-visible,#dl select:focus-visible,#dl input:focus-visible{outline:3px solid var(--blue);outline-offset:1px}' +
    '#dl .stp b{font-size:13px;color:var(--ink);white-space:nowrap}' +
    '#dl select{width:100%;height:25px;border:1px solid var(--line);border-radius:9px;font:inherit;font-size:12.5px;color:var(--ink);background:#fff;margin-top:1px}' +
    '#dl .sl{display:flex;justify-content:space-between;align-items:baseline;font-size:11px;font-weight:700;color:var(--muted)}#dl .sl b{font-size:14px;color:var(--ink)}' +
    '#dl input[type=range]{width:100%;height:20px;margin:0;accent-color:var(--blue);cursor:pointer}' +
    '#dl .nu{margin:3px 0 0;font-family:"Cambria Math","Times New Roman",serif;font-size:14.5px;line-height:1.4;color:var(--ink)}#dl .nu i{font-style:normal;font-weight:700}' +
    '#dl .nu .ok{color:#15803d}#dl .nu .bad{color:var(--red)}' +
    '#dl .ck{display:flex;flex-wrap:wrap;gap:3px;margin-top:4px}#dl .ck span{font-size:10.5px;font-weight:700;border-radius:7px;padding:2px 6px;background:#fee2e2;color:var(--red)}#dl .ck span.ok{background:#dcfce7;color:#15803d}#dl .ck span.nt{background:#eef3f9;color:var(--navy)}' +
    '#dl .bt{display:grid;grid-template-columns:1fr 118px;gap:8px;position:sticky;bottom:-12px;margin:6px -14px -12px;padding:6px 14px 10px;background:rgba(255,255,255,.98);box-shadow:0 -6px 10px rgba(255,255,255,.9)}' +
    '#dl #dlT,#dl #dlK{height:34px;border:0;border-radius:12px;background:var(--navy);color:#fff;font:inherit;font-size:15px;font-weight:800;cursor:pointer;letter-spacing:.02em}#dl #dlK{background:#eef3f9;color:var(--navy);font-size:13px}#dl #dlK.on{background:#fff3d1;box-shadow:inset 0 0 0 2px var(--amb)}#dl button:disabled{opacity:.5;cursor:default}' +
    '#dl table{width:100%;border-collapse:collapse;font-size:11.5px;margin-top:4px}#dl td,#dl th{padding:1px 4px;text-align:right}#dl th{color:var(--muted);font-weight:700}#dl td:first-child,#dl th:first-child{text-align:left}' +
    '.l5chip{display:inline-block;font-size:10px;font-weight:800;letter-spacing:.04em;border-radius:6px;padding:1px 5px;margin-left:5px;background:#e0ecfb;color:#1E63B8;vertical-align:1px}.l5chip.nt{background:#fff3d1;color:#8a5a00}.l5chip.tc{background:#f1f5f9;color:#475569}';
  document.head.appendChild(css);
  function stepper(id, label) {
    return '<label class="stp"><span>' + label + '</span><div><button type="button" data-k="' + id + '" data-d="-1" aria-label="' + label + ' less">−</button><b id="dlv_' + id + '"></b><button type="button" data-k="' + id + '" data-d="1" aria-label="' + label + ' more">+</button></div></label>';
  }
  function kindSel(id, label) {
    return '<label class="stp"><span>' + label + '</span><select id="' + id + '" aria-label="' + label + '">' +
      KINDS.map(function (k) { return '<option value="' + k[0] + '">' + k[0] + ' ' + k[1] + '</option>'; }).join('') + '</select></label>';
  }
  function posRow(n) {
    return '<label class="sl" for="dlA' + n + '"><span>x from A</span><b id="dlAv' + n + '"></b></label><input id="dlA' + n + '" type="range" min="0" step="' + LIM.a + '">';
  }
  var box = document.createElement('div');
  box.id = 'dl'; box.setAttribute('role', 'group'); box.setAttribute('aria-labelledby', 'dlH');
  box.innerHTML =
    '<div class="k">DESIGN TASK</div><h4 id="dlH"></h4><p class="gv" id="dlG"></p>' +
    '<label class="sl" for="dlL"><span>Span L, simply supported (pin at A, roller at B)</span><b id="dlLv"></b></label>' +
    '<input id="dlL" type="range" min="' + LIM.L[0] + '" max="' + LIM.L[1] + '" step="' + LIM.L[2] + '">' +
    '<div class="nu" id="dlN" aria-live="polite"></div>' +
    '<div class="ck" id="dlX" aria-live="polite"></div>' +
    '<div id="dlCmp"></div>' +
    '<div class="sec">Point loads</div>' +
    '<div class="pl">' + stepper('p1', 'P1') + '<div>' + posRow(1) + '</div>' + kindSel('dlK1', 'Kind') + '</div>' +
    '<div class="pl">' + stepper('p2', 'P2') + '<div>' + posRow(2) + '</div>' + kindSel('dlK2', 'Kind') + '</div>' +
    '<div class="sec">Line loads over the span (kN/m)</div>' +
    '<div class="g3">' + stepper('gk', 'Gk dead') + stepper('qk', 'Qk imposed') + stepper('wk', 'Wk wind') + '</div>' +
    '<div class="sec">Triangular load (UVL)</div>' +
    '<div class="g3">' + stepper('uv', 'Peak w') +
    '<label class="stp"><span>Heavy end</span><select id="dlE" aria-label="Heavy end of the triangle"><option value="A">at A</option><option value="B">at B</option></select></label>' +
    kindSel('dlKU', 'Kind') + '</div>' +
    '<div class="sec">Load combination (Table 3.1)</div><select id="dlC" aria-label="Load combination">' +
    COMBOS.map(function (c) { return '<option value="' + c.id + '">' + c.name + '</option>'; }).join('') + '</select>' +
    '<div class="bt"><button type="button" id="dlT">Test: load the beam</button><button type="button" id="dlK" aria-pressed="false">Compare</button></div>';
  $('#stage').appendChild(box);
  var sL = $('#dlL'), sA1 = $('#dlA1'), sA2 = $('#dlA2');

  var safe0 = U.safe;
  U.safe = function () { var s = safe0(); s.x1 = Math.min(s.x1, 1186); return s; };

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function snap(v, s) { return Math.round(v / s) * s; }
  function bump(key, dir) {
    if (ui.busy) return;
    U.mark();
    var L = key === 'p1' || key === 'p2' ? LIM.p : key === 'uv' ? LIM.uv : LIM.w;
    st[key] = clamp(snap(st[key] + dir * L[2], L[2]), L[0], L[1]);
    req();
  }
  box.addEventListener('click', function (e) { var b = e.target.closest('button[data-k]'); if (b) bump(b.dataset.k, +b.dataset.d); });
  function slide(el, fn) {
    var marking = false;
    el.addEventListener('input', function () { if (ui.busy) return; if (!marking) { U.mark(); marking = true; } fn(+el.value); req(); });
    el.addEventListener('change', function () { marking = false; });
  }
  slide(sL, function (v) { st.L = snap(v, LIM.L[2]); st.a1 = Math.min(st.a1, st.L); st.a2 = Math.min(st.a2, st.L); ui.reframe = true; });
  slide(sA1, function (v) { st.a1 = snap(v, LIM.a); });
  slide(sA2, function (v) { st.a2 = snap(v, LIM.a); });
  [['dlK1', 'k1'], ['dlK2', 'k2'], ['dlKU', 'uvK'], ['dlE', 'uvEnd'], ['dlC', 'combo']].forEach(function (p) {
    $('#' + p[0]).addEventListener('change', function () { if (ui.busy) return; U.mark(); st[p[1]] = this.value; req(); });
  });
  $('#dlT').addEventListener('click', function () { test(); });
  $('#dlK').addEventListener('click', function () { compare(!ui.cmp); });

  // ---- 3D scene: hide the old cage lab (kept as data), build the beam on two supports
  var CX = 5.5, PIER = 1.4, BRG = 0.22, SOF = PIER + BRG, H = 0.5, B = 0.3, TOP = SOF + H, ZF = 0.42;
  var SFD0 = 1.17, SFDA = 0.3, BMD0 = 0.74, BMDA = 0.56; // diagram baselines and heights (m) in the plane z = ZF
  var root = new R.Group(), gStat = new R.Group(), gFlex = new R.Group(), gLoad = new R.Group(), gDia = new R.Group(), gCue = new R.Group(), gIn = new R.Group(), gCmp = new R.Group();
  root.add(gStat, gFlex, gLoad, gDia, gCue, gCmp); gFlex.add(gIn);
  function hideOld() { U.G.children.forEach(function (c) { if (c !== root) c.visible = false; }); }
  U.G.add(root);
  var M = {
    conc: E.de(0xc4c9cf), pier: E.de(0xb3a79a), pad: E.de(0x9aa1a8), steel: E.de(0x5b6470, { metal: 0.6 }),
    bar: E.de(9391916, { metal: 0.3 }), link: E.de(0x7a5236, { metal: 0.3 })
  };
  function xA() { return CX - st.L / 2; }
  function X(x) { return xA() + x; } // beam coordinate (m from A) to world x
  function shot() {
    var L = st.L;
    return { box: new R.Box3(I(X(0) - 0.9, -0.1, -0.5), I(X(L) + 0.9, TOP + 1.9, ZF + 0.2)), dir: [0.06, 0.2, 0.98], fov: 30, focus: [root] };
  }
  function buildStatic() {
    U.clear(gStat);
    var L = st.L;
    U.into(gStat, function () {
      [0, L].forEach(function (x, i) {
        var w = X(x);
        E.Me(0.8, 0.1, 0.8, M.pad, w, 0.05, 0);
        E.Me(0.42, PIER - 0.1, 0.42, M.pier, w, 0.1 + (PIER - 0.1) / 2, 0);
        E.Me(0.5, 0.04, 0.44, M.steel, w, PIER + 0.02, 0);
        if (i === 0) { // pin: a triangle under the beam
          var tri = new R.Mesh(new R.CylinderGeometry(0.13, 0.13, 0.36, 3), M.steel);
          tri.rotation.x = Math.PI / 2; tri.rotation.z = Math.PI; tri.position.set(w, PIER + 0.04 + 0.065, 0); gStat.add(tri);
          E.Me(0.3, 0.03, 0.36, M.steel, w, SOF - 0.015, 0);
        } else {       // roller: a triangle on two rollers
          [-0.08, 0.08].forEach(function (dx) { E.Zn(I(w + dx, PIER + 0.075, -0.18), I(w + dx, PIER + 0.075, 0.18), 0.035, M.steel, 12); });
          var t2 = new R.Mesh(new R.CylinderGeometry(0.085, 0.085, 0.36, 3), M.steel);
          t2.rotation.x = Math.PI / 2; t2.rotation.z = Math.PI; t2.position.set(w, PIER + 0.11 + 0.045, 0); gStat.add(t2);
          E.Me(0.3, 0.03, 0.36, M.steel, w, SOF - 0.015, 0);
        }
      });
    });
    U.label('sA', [X(0) - 0.32, PIER + 0.15, 0.3], 'A · pin', 'b', 2);
    U.label('sB', [X(L) + 0.36, PIER + 0.15, 0.3], 'B · roller', 'b', 2);
  }
  // beam and the parts that bend with it: every mesh keeps its rest positions; bend() moves y by the shape
  var shape = function () { return 0; };
  function flexMesh(geo, mat, x, y, z) {
    var m = new R.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true;
    m.userData.base = Float32Array.from(geo.attributes.position.array);
    return m;
  }
  var beam = null, axis = null;
  function buildBeam() {
    U.clear(gFlex); gFlex.add(gIn);
    var L = st.L, Lb = L + 0.4;
    beam = flexMesh(new R.BoxGeometry(Lb, H, B, Math.max(24, Math.round(Lb * 10)), 2, 1), M.conc.clone(), CX, SOF + H / 2, 0);
    beam.userData.part = 'beam'; gFlex.add(beam);
    var pts = []; for (var i = 0; i <= 60; i++) pts.push(I(X(L * i / 60), SOF + H / 2, B / 2 + 0.01));
    axis = E.cn(pts, 0x0F2E5A, 1, true); axis.userData.rest = pts.map(function (p) { return p.y; }); gStat.add(axis);
    beamLook();
  }
  function beamLook() {
    var m = beam.material; m.transparent = ui.eye; m.opacity = ui.eye ? 0.22 : 1; m.depthWrite = !ui.eye; m.needsUpdate = true;
  }
  function bend(amp) {
    var L = st.L;
    function dy(xw) { var x = xw - X(0); return x <= 0 || x >= L ? 0 : -amp * shape(x / L); }
    gFlex.traverse(function (o) {
      if (o.isMesh && o.userData.base) {
        var p = o.geometry.attributes.position, b = o.userData.base;
        for (var i = 0; i < p.count; i++) p.setY(i, b[3 * i + 1] + dy(o.position.x + b[3 * i]));
        p.needsUpdate = true; o.geometry.computeBoundingSphere();
      } else if (o.userData.y0 !== undefined) o.position.y = o.userData.y0 + dy(o.position.x);
    });
    U.dirty = true;
  }
  // deflected shape (shape only): curvature ∝ M, integrated twice with zero deflection at A and B (CALC NEED: values)
  function makeShape(d, L) {
    var n = 120, Ms = [], k = 0;
    for (var i = 0; i <= n; i++) {
      var x = L * i / n;
      while (k < d.x_m.length - 2 && d.x_m[k + 1] < x) k++;
      var x0 = d.x_m[k], x1 = d.x_m[k + 1], t = x1 > x0 ? clamp((x - x0) / (x1 - x0), 0, 1) : 0;
      Ms.push(d.M_kNm[k] + t * (d.M_kNm[k + 1] - d.M_kNm[k]));
    }
    var th = [0], y = [0];
    for (i = 1; i <= n; i++) th.push(th[i - 1] + (Ms[i - 1] + Ms[i]) / 2);
    for (i = 1; i <= n; i++) y.push(y[i - 1] + (th[i - 1] + th[i]) / 2);
    var yl = y[n], ys = y.map(function (v, j) { return v - yl * j / n; }), mx = 0;
    ys.forEach(function (v) { mx = Math.max(mx, Math.abs(v)); });
    if (mx < 1e-12) return function () { return 0; };
    ys = ys.map(function (v) { return -v / mx; }); // 1 = largest sag
    return function (u) { var f = clamp(u, 0, 1) * n, j = Math.min(n - 1, Math.floor(f)); return ys[j] + (f - j) * (ys[j + 1] - ys[j]); };
  }
  function colorU(u) { var c = new R.Color(); if (u <= 0.8) c.setRGB(0.13 + 0.8 * (u / 0.8), 0.64, 0.29 * (1 - u / 0.8)); else c.setRGB(0.94, Math.max(0.15, 0.65 - 0.5 * Math.min(1, (u - 0.8) / 0.2)), 0.05); return c; }

  // See inside: the section of the old cage lab (300 × 500, 3 bars Ø16 bottom, 2 Ø12 top, links Ø8 at 200, cover 25),
  // drawn for the picture; this lab checks equilibrium only. Utilisation gradient = |M(x)| / limit (task 3) or the
  // share of the peak moment.
  function buildInside(res) {
    U.clear(gIn);
    if (!ui.eye) { U.unlabel('in'); return; }
    var L = st.L, Lb = L + 0.4, cv = 0.025, lk = 0.008, nX = Math.max(24, Math.round(Lb * 10));
    var yb = SOF + cv + lk + 0.008, yt = TOP - cv - lk - 0.006;
    [-0.09, 0, 0.09].forEach(function (z) { gIn.add(flexMesh(new R.BoxGeometry(Lb - 0.06, 0.016, 0.016, nX, 1, 1), M.bar, CX, yb, z)); });
    [-0.09, 0.09].forEach(function (z) { gIn.add(flexMesh(new R.BoxGeometry(Lb - 0.06, 0.012, 0.012, nX, 1, 1), M.bar, CX, yt, z)); });
    var n = Math.floor((Lb - 0.1) / 0.2) + 1, x0 = CX - (n - 1) * 0.1, hw = B / 2 - cv - lk / 2, hh = H / 2 - cv - lk / 2;
    var lg = new R.BoxGeometry(lk, 2 * hh, lk), lgz = new R.BoxGeometry(lk, lk, 2 * hw);
    for (var i = 0; i < n; i++) {
      var x = x0 + i * 0.2, g = new R.Group(); g.position.set(x, SOF + H / 2, 0); g.userData.y0 = SOF + H / 2;
      [[0, 0, -hw, lg], [0, 0, hw, lg], [0, -hh, 0, lgz], [0, hh, 0, lgz]].forEach(function (q) { var m = new R.Mesh(q[3], M.link); m.position.set(q[0], q[1], q[2]); g.add(m); });
      gIn.add(g);
    }
    // gradient strip on the tension face, unlit so the colour reads the same under every light
    var d = res.d, ref = res.limit || Math.max(1e-9, Math.abs(res.Mmax)), geo = new R.PlaneGeometry(L, 0.14, 120, 1), cols = [];
    var pos = geo.attributes.position;
    for (var j = 0; j < pos.count; j++) {
      var xx = pos.getX(j) + L / 2, k = 0; while (k < d.x_m.length - 1 && d.x_m[k + 1] < xx) k++;
      var c = colorU(Math.min(1.25, Math.abs(d.M_kNm[k]) / ref)); cols.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new R.Float32BufferAttribute(cols, 3));
    var strip = flexMesh(geo, new R.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.85, toneMapped: false }), CX, SOF + 0.075, B / 2 + 0.004);
    strip.material.side = R.DoubleSide; strip.renderOrder = 6; gIn.add(strip);
    U.label('in', [X(L * 0.12), SOF - 0.12, ZF], 'cover 25 mm · 3 Ø16 bottom · links Ø8 at 200' + '<br>colour: ' + (res.limit ? 'M / limit' : 'share of the peak moment'), 'b', 3);
  }

  // forces: arrows sized to kN, labels in kN
  function arrow(g, a, b, color, r) { U.into(g, function () { E.Ln(a, b, color, r); }); }
  function drawLoads(res, grow) {
    U.clear(gLoad);
    grow = grow === undefined ? 1 : grow;
    var L = res.L, F = Math.max(1e-9, res.RA, res.RB), sc = 1.15 / F, y0 = TOP + 0.03;
    U.unlabel(/^(p1|p2|w|uv|ra|rb)$/);
    // line loads: the design intensity w as a band of arrows
    var wTop = y0;
    if (res.w > 0) {
      var hw = (0.22 + 0.5 * Math.min(1, res.w / 30)) * grow, n = Math.max(4, Math.round(L / 0.5));
      for (var i = 0; i <= n; i++) arrow(gLoad, I(X(L * i / n), y0 + hw, 0), I(X(L * i / n), y0, 0), 0x1E63B8, 0.012);
      U.into(gLoad, function () { E.Zn(I(X(0), y0 + hw, 0), I(X(L), y0 + hw, 0), 0.012, E.de(0x1E63B8), 6); });
      wTop = y0 + hw + 0.02;
      U.label('w', [X(L * 0.82), wTop + 0.12, 0], 'w ' + fm(res.w, 2) + ' kN/m', 'b', 6);
    }
    if (res.wU > 0) {
      var hu = (0.25 + 0.6 * Math.min(1, res.wU / 30)) * grow, nu = Math.max(6, Math.round(L / 0.4)), heavyA = st.uvEnd === 'A';
      for (var j = 0; j <= nu; j++) {
        var t = j / nu, f = heavyA ? 1 - t : t;
        if (f * hu > 0.05) arrow(gLoad, I(X(L * t), wTop + f * hu, 0), I(X(L * t), wTop, 0), 0x7C3AED, 0.011);
      }
      U.into(gLoad, function () { E.cn([I(X(0), wTop + (heavyA ? hu : 0), 0), I(X(L), wTop + (heavyA ? 0 : hu), 0)], 0x7C3AED); });
      U.label('uv', [X(heavyA ? L * 0.12 : L * 0.88), wTop + hu + 0.14, 0], 'UVL 0 to ' + fm(res.wU, 1) + ' kN/m', 'b', 5);
      wTop += 0.02;
    }
    res.loads.forEach(function (p) {
      var len = Math.max(0.3, p.P * sc) * grow, x = X(p.x);
      arrow(gLoad, I(x, wTop + len, 0), I(x, wTop, 0), 0xDC2626, 0.03);
      U.label(p.id, [x, wTop + len + 0.16, 0], (p.id === 'p1' ? 'P<sub>1</sub> ' : 'P<sub>2</sub> ') + kn(p.P) + (p.g !== 1 ? ' (' + fm(p.g, 1) + ' × ' + fm(p.Pk, 0) + ')' : '') + ' at ' + mm(p.x), 'bad', 9);
    });
    // reactions: opposing arrows up into the supports, in front of the piers
    [['ra', 0, res.RA, 'A'], ['rb', L, res.RB, 'B']].forEach(function (q) {
      var len = Math.max(0.25, Math.abs(q[2]) * sc) * grow, x = X(q[1]), up = q[2] >= 0;
      if (Math.abs(q[2]) > 1e-9) arrow(gLoad, I(x, up ? SOF - 0.04 - len : SOF - 0.04, ZF), I(x, up ? SOF - 0.04 : SOF - 0.04 - len, ZF), 0x16A34A, 0.03);
      U.label(q[0], [x + (q[3] === 'A' ? -0.62 : 0.62), 0.32, ZF], 'R<sub>' + q[3] + '</sub> ' + kn(q[2]) + (up ? ' ↑' : ' ↓'), 'ok', 10);
    });
  }

  // SFD and BMD drawn on the member (plane in front of the beam), peaks labelled
  function ribbon(xs, vs, base, s, colP, colN, op) {
    var p = [], c = [], cp = new R.Color(colP), cn2 = new R.Color(colN);
    for (var i = 0; i < xs.length - 1; i++) {
      var x0 = X(xs[i]), x1 = X(xs[i + 1]); if (x1 - x0 < 1e-9) continue;
      var y0 = base + s * vs[i], y1 = base + s * vs[i + 1], col = (vs[i] + vs[i + 1]) >= 0 ? cp : cn2;
      p.push(x0, base, 0, x0, y0, 0, x1, y1, 0, x0, base, 0, x1, y1, 0, x1, base, 0);
      for (var k = 0; k < 6; k++) c.push(col.r, col.g, col.b);
    }
    var g = new R.BufferGeometry(); g.setAttribute('position', new R.Float32BufferAttribute(p, 3)); g.setAttribute('color', new R.Float32BufferAttribute(c, 3));
    var m = new R.Mesh(g, new R.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: op, side: R.DoubleSide, depthWrite: false, toneMapped: false }));
    m.position.z = ZF; m.renderOrder = 4; return m;
  }
  function outline(g, xs, vs, base, s, color, dashed) {
    var pts = xs.map(function (x, i) { return I(X(x), base + s * vs[i], ZF + 0.002); });
    U.into(g, function () { E.cn(pts, color, 1, !!dashed); });
  }
  function scales(res) {
    var Vr = Math.max(1e-9, res.Vmax), Mr = Math.max(1e-9, Math.abs(res.Mmax), res.limit || 0);
    if (ui.cmp && ui.prev) { Vr = Math.max(Vr, ui.prev.Vmax); Mr = Math.max(Mr, Math.abs(ui.prev.Mmax)); }
    return { v: SFDA / Vr, m: -BMDA / Mr }; // sagging moment drawn downwards, on the tension side
  }
  function drawDiagrams(res) {
    U.clear(gDia);
    var d = res.d, sc = scales(res), L = res.L;
    gDia.add(ribbon(d.x_m, d.V_kN, SFD0, sc.v, 0x1E63B8, 0xDC2626, 0.3));
    gDia.add(ribbon(d.x_m, d.M_kNm, BMD0, sc.m, 0xF0A500, 0x7C3AED, 0.32));
    outline(gDia, d.x_m, d.V_kN, SFD0, sc.v, 0x1E63B8);
    outline(gDia, d.x_m, d.M_kNm, BMD0, sc.m, 0xB97800);
    U.into(gDia, function () {
      E.cn([I(X(0), SFD0, ZF + 0.003), I(X(L), SFD0, ZF + 0.003)], 0x14243a);
      E.cn([I(X(0), BMD0, ZF + 0.003), I(X(L), BMD0, ZF + 0.003)], 0x14243a);
      if (res.limit) E.cn([I(X(0), BMD0 + sc.m * res.limit, ZF + 0.004), I(X(L), BMD0 + sc.m * res.limit, ZF + 0.004)], 0xDC2626, 1, true);
    });
    var iV = 0; d.V_kN.forEach(function (v, i) { if (Math.abs(v) > Math.abs(d.V_kN[iV])) iV = i; });
    U.label('sfd', [X(0) - 0.75, SFD0, ZF], 'SFD', 'm', 4);
    U.label('vmax', [X(d.x_m[iV]) + (d.x_m[iV] < L / 2 ? 0.9 : -0.9), SFD0 + sc.v * d.V_kN[iV], ZF], 'V<sub>max</sub> ' + kn(res.Vmax), 'm', 7);
    U.label('bmd', [X(0) - 0.75, BMD0, ZF], 'BMD', 'm', 4);
    U.label('mmax', [X(res.xM), BMD0 + sc.m * res.Mmax - 0.13, ZF], 'M<sub>max</sub> ' + knm(res.Mmax) + ' at ' + mm(res.xM), res.fail ? 'bad' : 'm', 8);
    if (res.limit) U.label('lim', [X(L * 0.8), BMD0 + sc.m * res.limit - 0.1, ZF], 'limit ' + knm(res.limit), 'bad', 6); else U.unlabel('lim');
    drawCompare(res, sc);
  }

  // teaching cues at the point of maximum moment: tension lines under it, squeeze chevrons on top, pulse near 100 %
  var cue = { t: [], c: [], pulse: null, u: 0, x: 0 };
  function drawCues(res) {
    U.clear(gCue); cue.t = []; cue.c = []; cue.pulse = null;
    var u = res.limit ? res.u : 0.45, x = X(res.xM), col = colorU(Math.min(1.2, u)).getHex();
    cue.u = u; cue.x = x;
    if (!(Math.abs(res.Mmax) > 1e-9)) return;
    var mat = new R.MeshBasicMaterial({ color: col, toneMapped: false });
    for (var i = 0; i < 3; i++) {
      var m = new R.Mesh(new R.BoxGeometry(0.5 - 0.1 * i, 0.012, 0.012), mat);
      m.position.set(x, SOF - 0.07 - 0.05 * i, B / 2 + 0.02); m.userData.y0 = m.position.y; gCue.add(m); cue.t.push(m);
    }
    [-1, 1].forEach(function (sd) {
      for (var k = 0; k < 2; k++) {
        var cx = x + sd * (0.32 + 0.14 * k), g = new R.Group();
        U.into(g, function () { E.cn([I(sd * 0.06, 0.05, 0), I(-sd * 0.02, 0, 0), I(sd * 0.06, -0.05, 0)], col); });
        g.position.set(cx, TOP + 0.0, B / 2 + 0.03); g.userData.x0 = cx; g.userData.sd = sd; gCue.add(g); cue.c.push(g);
      }
    });
    if (res.limit && u >= 0.9) {
      var p = new R.Mesh(new R.SphereGeometry(0.16, 20, 12), new R.MeshBasicMaterial({ color: u > 1 ? 0xDC2626 : 0xF0A500, transparent: true, opacity: 0.35, depthWrite: false, toneMapped: false }));
      p.position.set(x, SOF + 0.02, B / 2 + 0.02); gCue.add(p); cue.pulse = p;
    }
  }

  // load path: pulses travel from each load to A or B in the lever-rule share, then down the pier to the ground
  var NP = 40, pulses = new R.InstancedMesh(new R.SphereGeometry(0.035, 10, 8), new R.MeshBasicMaterial({ color: 0xF0A500, toneMapped: false }), NP);
  pulses.frustumCulled = false; root.add(pulses);
  var parts = []; for (var q = 0; q < NP; q++) parts.push({ t: Math.random(), x: 0, toA: true, sp: 0.5 });
  var dummy = new R.Object3D();
  function spawn(p) {
    var res = ui.res; if (!res || !(res.total > 0)) { p.x = -1; return; }
    var rs = res.r.resultants, tot = 0; rs.forEach(function (r) { tot += r.P_kN; });
    var pick = Math.random() * tot, sel = rs[0];
    for (var i = 0; i < rs.length; i++) { pick -= rs[i].P_kN; if (pick <= 0) { sel = rs[i]; break; } }
    // a distributed load starts anywhere along its length
    var x = sel.x_m; if (res.w > 0 && sel === rs[res.loads.length]) x = Math.random() * res.L;
    p.x = x; p.toA = Math.random() < (res.L - x) / res.L; p.t = 0; p.sp = 0.35 + Math.random() * 0.2;
  }
  function tick(now) {
    var res = ui.res; if (!res) return;
    var L = res.L, k = 0, dt = 1 / 30;
    for (var i = 0; i < NP; i++) {
      var p = parts[i]; p.t += dt * p.sp;
      if (p.t >= 1 || p.x < 0) spawn(p);
      if (p.x < 0) { dummy.position.set(0, -50, 0); } else {
        var xe = p.toA ? 0 : L, run = Math.abs(xe - p.x), tot = run + PIER, s = p.t * tot;
        if (s < run) dummy.position.set(X(p.x + (xe - p.x) * s / Math.max(1e-6, run)), TOP + 0.04 - (shape((p.x + (xe - p.x) * s / Math.max(1e-6, run)) / L) * ui.sag), 0);
        else dummy.position.set(X(xe), PIER - (s - run), 0.24);
      }
      dummy.updateMatrix(); pulses.setMatrixAt(k++, dummy.matrix);
    }
    pulses.instanceMatrix.needsUpdate = true;
    var a = 0.004 + 0.02 * Math.max(0, cue.u - 0.6), w = now / 1000;
    cue.t.forEach(function (m, j) { m.position.y = m.userData.y0 - ui.sag * shape((cue.x - X(0)) / L) + Math.sin(w * (18 + 6 * j) + j) * a; m.scale.x = 1 + 0.05 * Math.sin(w * 7 + j); });
    cue.c.forEach(function (g) { g.position.x = g.userData.x0 - g.userData.sd * (0.03 + a * 2) * (0.5 + 0.5 * Math.sin(w * 6)); g.position.y = TOP - ui.sag * shape((g.userData.x0 - X(0)) / L); });
    if (cue.pulse) { var sp = 1 + 0.35 * (0.5 + 0.5 * Math.sin(w * 7)); cue.pulse.scale.set(sp, sp, sp); cue.pulse.position.y = SOF + 0.02 - ui.sag * shape((cue.x - X(0)) / L); }
    U.dirty = true;
  }
  // 30 frames a second for the cues (the engine renders on demand when dirty; anims would force every frame)
  // one pending frame at a time; on a slow machine (frames over 120 ms) the cues step every 400 ms, so the page stays responsive
  var cueT = { f: -1, t: 0, slow: 0 };
  setInterval(function () {
    if (document.hidden || U.frames === cueT.f) return;
    var now = performance.now(), gap = now - cueT.t;
    cueT.slow = cueT.slow * 0.8 + (gap > 120 ? 0.2 : 0);
    if (cueT.slow > 0.5 && gap < 400) return;
    cueT.f = U.frames; cueT.t = now; tick(now);
  }, 33);

  // compare: the previous test (dashed) against the current design, same scales
  function drawCompare(res, sc) {
    U.clear(gCmp); U.unlabel(/^c(ra|rb|m)$/);
    var host = $('#dlCmp');
    if (!ui.cmp || !ui.prev) { host.innerHTML = ''; return; }
    var p = ui.prev, L = p.L;
    var Xp = function (x) { return X(0) + x * res.L / L; }; // previous diagrams stretched to the current span
    var draw = function (vs, base, s) { var pts = p.d.x_m.map(function (x, i) { return I(Xp(x), base + s * vs[i], ZF + 0.004); }); U.into(gCmp, function () { E.cn(pts, 0x475569, 1, true); }); };
    draw(p.d.V_kN, SFD0, sc.v); draw(p.d.M_kNm, BMD0, sc.m);
    U.label('cm', [Xp(p.xM), BMD0 + sc.m * p.Mmax + 0.1, ZF], 'previous M<sub>max</sub> ' + knm(p.Mmax), 'b', 5);
    var row = function (n, a, b, u) { return '<tr><td>' + n + '</td><td>' + a + '</td><td><b>' + b + '</b></td><td>' + u + '</td></tr>'; };
    host.innerHTML = '<table aria-label="Previous test against the current design"><tr><th>Compare</th><th>previous test</th><th>now</th><th></th></tr>' +
      row('Span L', fm(p.L, 1), fm(res.L, 1), 'm') + row('Total load ΣP', fm(p.total, 1), fm(res.total, 1), 'kN') +
      row('R<sub>A</sub>', fm(p.RA, 1), fm(res.RA, 1), 'kN') + row('R<sub>B</sub>', fm(p.RB, 1), fm(res.RB, 1), 'kN') +
      row('M<sub>max</sub>', fm(p.Mmax, 1), fm(res.Mmax, 1), 'kNm') + '</table>';
  }
  function compare(on) {
    if (on && !ui.prev) { U.toast('Press Test twice: Compare shows the previous test next to the current design'); return; }
    ui.cmp = on; var b = $('#dlK'); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    req();
  }

  // ---- Formulas panel from calc.mjs steps
  function chip(t, c) { return '<span class="l5chip ' + (c || '') + '">' + t + '</span>'; }
  function okc(b) { return b ? 'ok' : 'bad'; }
  function chipOf(stp) { // calc.mjs step chip ('manual', 'manual note', 'BS 8110, to confirm', 'typical value, to confirm') + note
    var c = stp.chip || 'manual', k = c === 'manual' ? '' : c === 'manual note' ? 'nt' : 'tc';
    return chip(c, k) + (stp.note ? ' ' + stp.note : '');
  }
  function fbd(res) { // free body diagram (T L2846 to L2852): loads down, reactions up, values in kN
    var L = res.L, x0 = 34, w = 232, y = 66, sx = function (x) { return x0 + w * x / L; }, s = '';
    s += '<rect x="' + x0 + '" y="' + (y - 5) + '" width="' + w + '" height="10" fill="#c4c9cf" stroke="#14243a" stroke-width=".6"/>';
    s += '<path d="M' + x0 + ' ' + (y + 5) + 'l-8 13h16z" fill="#5b6470"/><path d="M' + (x0 + w) + ' ' + (y + 5) + 'l-8 11h16z" fill="#5b6470"/><circle cx="' + (x0 + w - 4) + '" cy="' + (y + 19) + '" r="3" fill="#5b6470"/><circle cx="' + (x0 + w + 4) + '" cy="' + (y + 19) + '" r="3" fill="#5b6470"/>';
    if (res.w > 0) { s += '<rect x="' + x0 + '" y="' + (y - 17) + '" width="' + w + '" height="10" fill="#1E63B8" opacity=".25"/><text x="' + (x0 + w) + '" y="' + (y - 20) + '" font-size="10" text-anchor="end" fill="#1E63B8">w ' + fm(res.w, 2) + ' kN/m</text>'; }
    if (res.wU > 0) { var hA = st.uvEnd === 'A'; s += '<path d="M' + x0 + ' ' + (y - 7) + 'L' + (x0 + w) + ' ' + (y - 7) + 'L' + (hA ? x0 : x0 + w) + ' ' + (y - 27) + 'z" fill="#7C3AED" opacity=".25"/>'; }
    res.loads.forEach(function (p, i) {
      var x = sx(p.x); s += '<line x1="' + x + '" y1="' + (y - 44) + '" x2="' + x + '" y2="' + (y - 8) + '" stroke="#DC2626" stroke-width="2"/><path d="M' + (x - 4) + ' ' + (y - 13) + 'l4 7 4-7z" fill="#DC2626"/>' +
        '<text x="' + x + '" y="' + (y - 47 - 10 * i) + '" font-size="10.5" text-anchor="middle" fill="#DC2626">' + fm(p.P, 1) + ' kN</text>';
    });
    [[x0, res.RA, 'RA'], [x0 + w, res.RB, 'RB']].forEach(function (q) {
      s += '<line x1="' + q[0] + '" y1="' + (y + 52) + '" x2="' + q[0] + '" y2="' + (y + 27) + '" stroke="#16A34A" stroke-width="2"/><path d="M' + (q[0] - 4) + ' ' + (y + 31) + 'l4-7 4 7z" fill="#16A34A"/>' +
        '<text x="' + q[0] + '" y="' + (y + 64) + '" font-size="10.5" text-anchor="middle" fill="#15803d">' + q[2] + ' ' + fm(q[1], 1) + '</text>';
    });
    s += '<text x="150" y="' + (y + 80) + '" font-size="10.5" text-anchor="middle" fill="#5d6b7c">L = ' + fm(L, 2) + ' m · kN · free body diagram</text>';
    return '<svg viewBox="0 0 300 152" width="300" height="152" role="img" aria-label="Free body diagram">' + s + '</svg>';
  }
  function formulas(res) {
    var r = res.r, s = st, cb = COMBOS.filter(function (c) { return c.id === s.combo; })[0];
    var gL = [];
    res.lc.steps.forEach(function (stp) {
      var on = stp.id === s.combo;
      gL.push([stp.formula, stp.label.replace(/ \+ /g, ', ') + ', G<sub>k</sub> ' + fm(s.gk, 1) + ', Q<sub>k</sub> ' + fm(s.qk, 1) + ', W<sub>k</sub> ' + fm(s.wk, 1) + ' kN/m (' + stp.ref + ')' + (stp.id === 'c2' && stp.chip === 'manual' ? chip('manual note', 'nt') + ' the manual prints 1.4Q<sub>k</sub>; wind is W<sub>k</sub>' : chipOf(stp)), fm(stp.value, 2) + ' kN/m', on ? 'hl' : '']);
    });
    gL.push(['w = ' + cb.f, s.combo === 'none' ? 'characteristic line load, no factor' : 'chosen combination', fm(res.w, 2) + ' kN/m', 'hl']);
    res.loads.forEach(function (p) {
      gL.push([p.name + ' = ' + (p.g !== 1 ? fm(p.g, 1) + ' × ' : '') + fm(p.Pk, 1) + ' kN', p.kind + ' point load at x = ' + mm(p.x) + ' from A', kn(p.P), '']);
    });
    if (res.udlR) gL.push(['P = w × L', 'UDL resultant at L/2 = ' + mm(res.udlR.at_m) + ' (' + res.udlR.ref + ')', kn(res.udlR.P_kN), '']);
    if (res.uvR) gL.push(['P = ½ × w × L', 'UVL resultant at L/3 = ' + mm(res.uvR.fromHeavyEnd_m) + ' from the heavy end (' + res.uvR.ref + ')', kn(res.uvR.P_kN), '']);
    var gR = r.steps.map(function (stp) {
      return [stp.formula, stp.label + ' (' + stp.ref + ')' + chipOf(stp), fm(stp.value, 2) + ' ' + stp.unit, stp.id === 'RA' || stp.id === 'RB' ? 'hl' : ''];
    });
    gR.push(['ΣF<sub>y</sub> = R<sub>A</sub> + R<sub>B</sub> − ΣP = 0', fm(res.RA, 2) + ' + ' + fm(res.RB, 2) + ' − ' + fm(res.total, 2) + '', fm(res.sumFy, 2) + ' kN', okc(Math.abs(res.sumFy) < 1e-6)]);
    gR.push(['ΣM<sub>A</sub> = R<sub>B</sub> × L − Σ(P × x) = 0', fm(res.RB, 2) + ' × ' + fm(res.L, 2) + ' − ' + fm(r.momentA_kNm, 2) + '', fm(res.sumMA, 2) + ' kNm', okc(Math.abs(res.sumMA) < 1e-6)]);
    var gI = [
      ['V(x) = R<sub>A</sub> − Σ loads left of x', 'largest shear, at a support or a load (' + res.d.ref + ')', kn(res.Vmax), ''],
      ['M(x) = R<sub>A</sub> × x − Σ moments of loads left of x', 'largest where V = 0', knm(res.Mmax) + ' at ' + mm(res.xM), 'hl']
    ];
    if (res.loads.length === 0 && res.wU === 0 && res.w > 0) gI.push(['M = wL²/8', 'simply supported UDL' + chip('manual'), knm(C.momentSimpleUdl_kNm({ w_kNm: res.w, L_m: res.L })), '']);
    if (res.loads.length === 1 && res.w === 0 && res.wU === 0 && near(res.loads[0].x, res.L / 2)) gI.push(['M = PL/4', 'central point load' + chip('manual note', 'nt') + ' the manual prints M = PL', knm(C.momentSimplePointCentre_kNm({ P_kN: res.loads[0].P, L_m: res.L })), '']);
    gI.push(['deflected shape', 'from the BMD, exaggerated, no value' + chip('to confirm', 'tc'), '·', '']);
    var groups = [
      { h: 'Loads and load combination', tag: 'manual', rows: gL },
      { h: 'Support reactions', tag: 'manual', rows: gR },
      { h: 'Internal forces: SFD and BMD', tag: 'manual', rows: gI }
    ];
    if (res.limit) groups.push({ h: 'Moment limit of the beam', p: 100 * res.u, rows: [['M<sub>max</sub> ≤ M<sub>limit</sub>', 'limit = Task 32 beam, 20 kN/m on 6 m, wL²/8', knm(res.Mmax) + ' ≤ ' + knm(res.limit), okc(!res.fail)]] });
    U.fx({ sub: task().name + ' · live values', dg: fbd(res), groups: groups });
  }

  // ---- draw
  function req() { if (!ui.raf) ui.raf = requestAnimationFrame(draw); }
  function draw() {
    ui.raf = 0;
    var res = compute(); ui.res = res;
    hideOld();
    if (!beam || ui.builtL !== st.L) { buildStatic(); buildBeam(); ui.builtL = st.L; }
    shape = makeShape(res.d, res.L);
    buildInside(res);
    bend(ui.sag);
    drawLoads(res); drawDiagrams(res); drawCues(res);
    var L = res.L;
    U.gauge([['Share of the load at A', 'R<sub>A</sub> ' + kn(res.RA) + ' of ΣP ' + kn(res.total), res.total > 0 ? 100 * res.RA / res.total : 0, res.total > 0 ? fm(100 * res.RA / res.total, 0) + ' %' : '·'],
      res.limit ? ['Moment / limit', 'M<sub>max</sub> ' + knm(res.Mmax) + ' / ' + knm(res.limit), 100 * res.u] : ['Largest moment', 'at x = ' + mm(res.xM), 0, knm(res.Mmax)]]);
    formulas(res);
    var t = task();
    $('#dlH').textContent = t.name;
    $('#dlG').textContent = t.given;
    $('#dlLv').textContent = fm(L, 1) + ' m'; if (+sL.value !== L) sL.value = L;
    [[sA1, 'a1', 1], [sA2, 'a2', 2]].forEach(function (q) { q[0].max = L; if (+q[0].value !== st[q[1]]) q[0].value = st[q[1]]; $('#dlAv' + q[2]).textContent = fm(st[q[1]], 2) + ' m'; });
    $('#dlv_p1').textContent = st.p1 + ' kN'; $('#dlv_p2').textContent = st.p2 + ' kN';
    $('#dlv_gk').textContent = fm(st.gk, 1); $('#dlv_qk').textContent = fm(st.qk, 1); $('#dlv_wk').textContent = fm(st.wk, 1); $('#dlv_uv').textContent = st.uv + ' kN/m';
    $('#dlK1').value = st.k1; $('#dlK2').value = st.k2; $('#dlKU').value = st.uvK; $('#dlE').value = st.uvEnd; $('#dlC').value = st.combo;
    var okF = Math.abs(res.sumFy) < 1e-6, okM = Math.abs(res.sumMA) < 1e-6;
    $('#dlN').innerHTML =
      'ΣF<sub>y</sub>: ' + fm(res.RA, 1) + ' + ' + fm(res.RB, 1) + ' − ' + fm(res.total, 1) + ' = <i class="' + okc(okF) + '">' + fm(res.sumFy, 1) + ' kN</i><br>' +
      'ΣM<sub>A</sub>: ' + fm(res.RB, 1) + ' × ' + fm(L, 1) + ' − ' + fm(res.r.momentA_kNm, 1) + ' = <i class="' + okc(okM) + '">' + fm(res.sumMA, 1) + ' kNm</i>';
    var chips = [['ΣF<sub>y</sub> = 0', okF], ['ΣM<sub>A</sub> = 0', okM]];
    if (st.task === 1) chips.push(['R<sub>A</sub> = R<sub>B</sub>', near(res.RA, res.RB)]);
    if (res.limit) {
      var lc = res.lc, gov = Math.max(lc.deadImposed, lc.deadWind, lc.deadImposedWind);
      chips.push(['governing combination', st.combo !== 'none' && near(res.w, gov)]);
      chips.push(['M ' + fm(res.Mmax, 1) + ' ≤ ' + fm(res.limit, 0) + ' kNm', !res.fail]);
    }
    chips.push(['task', res.taskOk]);
    $('#dlX').innerHTML = chips.map(function (c) { return '<span class="' + (c[1] ? 'ok' : '') + '">' + (c[1] ? '✓ ' : '✕ ') + c[0] + '</span>'; }).join('') +
      '<span class="nt">deflected shape exaggerated</span>';
    if (ui.reframe) { ui.reframe = false; clearTimeout(ui.rf); ui.rf = setTimeout(function () { if (!ui.busy) U.shot(shot(), 700); }, 450); }
    if (!ui.busy) { U.banner(null); U.why && U.why(null); }
    U.dirty = true;
    U.emit('design', { task: st.task, ok: res.taskOk });
  }

  // ---- Test: 2 to 4 s of loading and its consequence at the exact place
  function setBusy(b) { ui.busy = b; U.locked = b; box.querySelectorAll('button,select,input').forEach(function (x) { x.disabled = b; }); }
  function crackAt(res, t) { // flexural cracks on the tension face (bottom) at the largest moment, growing upwards
    U.unlabel('why');
    var x0 = X(res.xM);
    gFlex.children.filter(function (o) { return o.userData.crack; }).forEach(function (o) { gFlex.remove(o); });
    [0, -0.18, 0.18, -0.36, 0.36].forEach(function (dx, i) {
      var h = H * (0.8 - 0.13 * i) * t; if (h < 0.01) return;
      var g = new R.Group(); g.userData.crack = true;
      U.into(g, function () { E.Me(0.014, h, 0.006, E.de(0x1a1a1a), x0 + dx, SOF + h / 2, B / 2 + 0.004); });
      g.children.forEach(function (m) { m.userData.y0 = m.position.y; });
      gFlex.add(g);
    });
  }
  async function test() {
    var tk0 = st.task; // delta review L4: a step change during Test must not count the result for the other step
    if (ui.busy) return;
    if (ui.raf) { cancelAnimationFrame(ui.raf); ui.raf = 0; draw(); }
    var res = ui.res;
    setBusy(true);
    try {
      U.banner(null);
      await U.shot(shot(), 500);
      U.sfx('thud', 0.5);
      var s0 = ui.sag, s1 = res.fail ? 0.16 : 0.1;
      await U.anim(1000, function (t) { var e = t * t * (3 - 2 * t); drawLoads(res, 0.05 + 0.95 * e); ui.sag = s0 + (s1 - s0) * e; bend(ui.sag); });
      if (res.fail) {
        U.sfx('crack');
        await U.anim(900, function (t) { crackAt(res, t); ui.sag = s1 + 0.1 * t; bend(ui.sag); });
        U.impact([X(res.xM), SOF, B / 2], { sfx: 'fail', size: 0.7 });
        U.shake && U.shake(0.03, 300);
        U.banner({ t: 'BENDING FAILURE', b: 'M<sub>max</sub> ' + knm(res.Mmax) + ' &gt; limit ' + knm(res.limit) + ' at ' + mm(res.xM) + ' from A' });
        U.label('why', [X(res.xM), SOF - 0.5, ZF], 'cracks on the tension face: span ' + fm(res.L, 1) + ' m too long for w ' + fm(res.w, 1) + ' kN/m', 'bad', 12);
        say('s1d07');
      } else {
        U.sfx('ok');
        U.banner({ ok: true, hold: true, t: 'IN EQUILIBRIUM', b: 'R<sub>A</sub> ' + kn(res.RA) + ' + R<sub>B</sub> ' + kn(res.RB) + ' = ΣP ' + kn(res.total) + ' · ΣM<sub>A</sub> = 0' + (res.limit ? ' · M ' + fm(100 * res.u, 0) + ' % of the limit' : '') });
      }
      // previous attempt for Compare
      ui.prev = ui.last; ui.last = { L: res.L, total: res.total, RA: res.RA, RB: res.RB, Mmax: res.Mmax, xM: res.xM, Vmax: res.Vmax, d: res.d };
      if (st.task === tk0) U.emit('test', { task: st.task, ok: res.taskOk, fail: res.fail, eq: Math.abs(res.sumFy) < 1e-6 && Math.abs(res.sumMA) < 1e-6 });
      if (!res.taskOk && !res.fail) testHint(res);
      await U.wait(600);
    } finally {
      setBusy(false);
      ui.sag = 0.05;
      setTimeout(function () { if (!ui.busy) { gFlex.children.filter(function (o) { return o.userData.crack; }).forEach(function (o) { gFlex.remove(o); }); U.unlabel('why'); bend(ui.sag); drawLoads(ui.res); } }, res.fail ? 3500 : 1500);
    }
  }
  function testHint(res) {
    if (st.task === 1 && !near(res.RA, res.RB) && only(st, ['p1', 'p2'])) { say('s1d09'); return; }
    if (st.task === 2 && only(st, ['gk', 'qk', 'wk'])) {
      var lc = res.lc, gov = Math.max(lc.deadImposed, lc.deadWind, lc.deadImposedWind);
      if (st.combo === 'none' || !near(res.w, gov)) U.toast('Holds, but this is not the combination that governs: compare the three values in Formulas');
      else U.toast('Holds. Is there a longer span (0.5 m steps) that still keeps M within ' + fm(M_LIMIT, 0) + ' kNm?');
      return;
    }
    U.toast('In equilibrium. For the task, use the loads in the task card');
  }

  // ---- undo/redo/reset/See inside on the inputs only
  U.history({ get: function () { return JSON.parse(JSON.stringify(st)); }, set: function (v) { if (ui.busy) return; Object.assign(st, v); ui.reframe = true; req(); } }); // review L5 #3: no undo/redo during Test
  function preset(i) { Object.assign(st, BLANK, TASKS[i].st, { task: i }); ui.reframe = true; }
  U.tool('reset', function () { if (ui.busy) return; U.mark(); preset(st.task); req(); });
  U.tool('eye', function () { ui.eye = !ui.eye; U.toolOn && U.toolOn('eye', ui.eye); if (beam) beamLook(); if (ui.res) { buildInside(ui.res); bend(ui.sag); } U.dirty = true; U.emit('eye'); });
  U.drag(null); U.zone && U.zone(null); U.hilite && U.hilite(null); U.unlabel();
  if (U.cfg) U.cfg.praise = LINES.s1d08;

  var steps = [
    { t: 'Task 30', prompt: 'Read RA and RB, then press Test', shot: shot,
      enter: function () { preset(0); req(); say('s1d01'); },
      test: function (ev, d) { return ev === 'test' && d && d.task === 0 && d.ok; },
      after: async function () {
        box.style.visibility = 'hidden';
        try { await U.ask('Task 30: what is the reaction at support A?', ['7.5 kN', '12.5 kN', '20 kN'], 1); } finally { box.style.visibility = ''; }
        ui.done[0] = true; say('s1d02');
      } },
    { t: 'Equal reactions', prompt: 'Place P2 so that RA = RB, then Test', shot: shot,
      enter: function () { preset(1); req(); say('s1d03'); },
      test: function (ev, d) { return ev === 'test' && d && d.task === 1 && d.ok; },
      after: function () { ui.done[1] = true; say('s1d04'); } },
    { t: 'Load combinations', prompt: 'Governing combination, longest span, Test', shot: shot,
      enter: function () { preset(2); req(); say('s1d05'); },
      test: function (ev, d) { return ev === 'test' && d && d.task === 2 && d.ok; },
      after: function () { ui.done[2] = true; say('s1d06'); } }
  ];
  preset(0); draw();
  (async function () {
    await U.start();
    E.bridge.set('RC_S1_Explored', true);
    window.__live = true;
    var run = U.runSteps(steps);
    var fin = $('#bNext').onclick;
    $('#bNext').onclick = function () {
      var last = U.idx >= steps.length - 1;
      if (!last) { fin(); return; }
      if (!ui.done.every(Boolean)) { U.toast('First pass every task: set the loads, then press Test'); return; }
      fin();
      U.stopSay(); setTimeout(function () { say('s1d08'); }, 50); // S1_DONE speaks the old line; new line s1d08
    };
    await run;
  })();
})();

/* Orchestrator walk 03:15Z: no manual line references (T L1234 ...) in anything the trainee sees. The calc steps carry
   them as .ref for the record; this strips them from every text the page shows (panel, labels, callouts, banners). */
(function () {
  var REF = /(?:,\s*|;\s*)?\bT L\d+(?:\s*(?:-|–|to|,)\s*L?\d+)*/g;
  function clean(t) {
    if (t.indexOf('T L') < 0 && t.indexOf('()') < 0 && t.indexOf('( )') < 0) return t;
    return t.replace(REF, '').replace(/\(\s*[,;]\s*/g, '(').replace(/\s*[,;]\s*\)/g, ')').replace(/\s*\(\s*\)/g, '').replace(/^\s*[,;]\s+/, '');
  }
  function walk(n) {
    if (n.nodeType === 3) { var v = n.nodeValue, c = clean(v); if (c !== v) n.nodeValue = c; return; }
    if (n.nodeType !== 1 || n.tagName === 'SCRIPT' || n.tagName === 'STYLE') return;
    for (var k = n.firstChild; k; k = k.nextSibling) walk(k);
  }
  function go() { walk(document.body); new MutationObserver(function (ms) { ms.forEach(function (m) { if (m.type === 'characterData') walk(m.target); else m.addedNodes.forEach(walk); }); })
    .observe(document.body, { childList: true, subtree: true, characterData: true }); }
  if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
})();
