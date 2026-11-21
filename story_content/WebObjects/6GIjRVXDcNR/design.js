/* BDCBD501 design lab L2: column (slot S4, web object 6GIjRVXDcNR).
   Runs after lab.js (engine, exports window.__eng, fix/ENGINE-API.md) and calc.js (generated from
   fix/designlab/calc.mjs by fix/designlab/gen-calc.mjs). Every engineering number shown comes from window.RCcalc.
   The trainee changes the load from the floors above, the section, the height and end conditions, the concrete grade,
   the bars and the links (diameter, spacing, hook). Forces, checks and the Formulas panel update live; Test loads the
   column and shows the consequence where it happens. RC_S4_Done is set only when every design task has passed. */
(function () {
  'use strict';
  var E = window.__eng, C = window.RCcalc;
  if (!E || !C) { console.error('design.js: lab.js or calc.js missing'); return; }
  var U = E.lab, R = E.R, V = E.I, $ = E.He, MAT = E.mat;

  // ---- manual data. T = fix/manual/BDCBD501-trainee.txt line.
  // Task 50 (T L4345-L4359): types of column failure and their causes.
  // Task 51 (T L4658-L4669): internal short column 300 × 300 mm, storey height 3 m, dead 450 kN, live 250 kN;
  //   fcu and fy are not given: fcu 25 and fy 460 assumed (digest B14), labelled "typical value, to confirm".
  // Task 52 (T L4672): braced two-storey building, beams 350 × 600, Gk = Qk = 1000 kN, column 350 mm square,
  //   clear height 4.5 m, fcu 40 (fy cut off in the text: 460, digest B15).
  var FY = 460;
  var TASKS = [
    { id: 't50', name: 'Task 50: how columns fail', ref: '', n: 1, gk: 450, qk: 250, b: 300, h: 300, lo: 3000,
      fcu: 25, frame: 'braced', top: 1, bot: 1, lock: false,
      start: { nb: 4, dia: 12, ld: 6, ls: 300, hook: 90 }, correct: { nb: 4, dia: 16, ld: 8, ls: 175, hook: 135 } },
    { id: 't51', name: 'Task 51: internal short column', ref: '', n: 1, gk: 450, qk: 250, b: 300, h: 300, lo: 3000,
      fcu: 25, frame: 'braced', top: 1, bot: 1, lock: true,
      start: { nb: 4, dia: 12, ld: 6, ls: 300, hook: 90 }, correct: { nb: 4, dia: 16, ld: 8, ls: 175, hook: 135 } },
    { id: 't52', name: 'Task 52: braced column', ref: '', n: 2, gk: 500, qk: 500, b: 350, h: 350, lo: 4500,
      fcu: 40, frame: 'braced', top: 1, bot: 1, lock: true, beamH: 600,
      start: { nb: 4, dia: 20, ld: 6, ls: 300, hook: 135 }, correct: { nb: 6, dia: 32, ld: 8, ls: 250, hook: 135 } }
  ];
  // End conditions of BS 8110 Tables 3.19 / 3.20 (calc.mjs BETA_BRACED / BETA_UNBRACED, OQ-20, "BS 8110, to confirm")
  var ENDS = ['1 fixed', '2 partly fixed', '3 pinned', '4 free']; // 1 = monolithic with beams at least as deep as the column
  var DIAS = [12, 16, 20, 25, 32], NBS = [4, 6, 8], LDS = [6, 8, 10, 12], GRADES = [20, 25, 30, 35, 40];
  var LIM = { n: [1, 5, 1], gk: [50, 1000, 25], qk: [0, 1000, 25], b: [200, 600, 25], h: [200, 600, 25], lo: [2500, 6000, 100],
    cover: [25, 50, 5], ls: [75, 400, 25] };

  // ---- voice: new Imani lines (fix/voice/requests-L2.txt). Until a clip is in narr/, caption and signer run from the
  // text with no audio request. Add a key to CLIPS when its mp3 and words.json arrive.
  var CLIPS = { s4d01: 1, s4d02: 1, s4d03: 1, s4d04: 1, s4d05: 1, s4d06: 1, s4d07: 1, s4d08: 1, s4d09: 1, s4d10: 1, s4d11: 1, s4d12: 1 };
  var LINES = {
    s4d01: 'This is a ground floor column. The floors above push down on it. Task fifty: make it fail in three ways. Crush it, make it slender so it bows, and space the links too far apart so the bars buckle.',
    s4d02: 'The concrete crushed. The load is more than the column can carry. Add steel, use a bigger section or a stronger concrete.',
    s4d03: 'The column is slender, so it bows sideways at mid height and fails before the section is fully used. Brace it, or make it shorter or thicker.',
    s4d04: 'The links are too far apart. The bars buckle outward between them and the cover spalls off. Bring the links closer together.',
    s4d05: 'The ninety degree hooks open under load and let the bars go. Bend the hooks to one hundred and thirty five degrees.',
    s4d06: 'The links are too thin to hold these bars. A link must be at least a quarter of the largest bar.',
    s4d07: 'The steel is outside the limits. Use between zero point four and six percent of the section.',
    s4d08: 'It carries the load. The column is short, the steel is within the limits and the links hold the bars.',
    s4d09: 'Good. You have seen crushing, slender bowing and bars buckling between links.',
    s4d10: 'Task fifty one. Four hundred and fifty kilonewtons dead load and two hundred and fifty imposed, on a three hundred millimetre square column. Choose the bars and the links so every check passes, then test it.',
    s4d11: 'Task fifty two. A braced column, three hundred and fifty millimetres square and four and a half metres high, carries one thousand kilonewtons dead and one thousand imposed. Design the bars and the links, then test it.',
    s4d12: 'Lab two is done. You designed a column that carries the floors above it.'
  };
  function say(key) {
    var text = LINES[key];
    if (CLIPS[key]) return U.say(key, text);
    if (U.sign && U.sign.cache) U.sign.cache[''] = null; // signer uses the caption text, no words.json fetch
    return U.say('', text);
  }

  // ---- state
  var st = {};
  var ui = { raf: 0, busy: false, res: null, cres: null, done: [false, false, false], seen: {}, eye: false, cmp: false, ft: 0 };
  function task() { return TASKS[st.task]; }
  function preset(i, which) {
    var t = TASKS[i];
    Object.assign(st, { task: i, n: t.n, gk: t.gk, qk: t.qk, b: t.b, h: t.h, lo: t.lo, fcu: t.fcu, frame: t.frame, top: t.top, bot: t.bot, cover: 40 },
      which === 'correct' ? t.correct : t.start);
  }
  preset(0);
  function table(s) { return s.frame === 'braced' ? C.BETA_BRACED : C.BETA_UNBRACED; }
  function fixEnds(s) { // keep a valid BS table cell
    var tb = table(s);
    if (s.top > tb.length) s.top = tb.length;
    while (tb[s.top - 1][s.bot - 1] == null && s.bot > 1) s.bot--;
  }
  // bar positions (mm from the centre): corners, then the middle of the two faces parallel to b, then the other two
  function barPos(s) {
    var ax = s.b / 2 - s.cover - s.ld - s.dia / 2, az = s.h / 2 - s.cover - s.ld - s.dia / 2;
    var p = [[ax, az], [-ax, az], [-ax, -az], [ax, -az]];
    if (s.nb >= 6) p.push([0, az], [0, -az]);
    if (s.nb >= 8) p.push([ax, 0], [-ax, 0]);
    return p;
  }

  // ---- calculation: calc.mjs columnDesign (T L4390-L4655; BS β, steel limits and link rules per OQ-05 / OQ-20)
  // with the trainee's own bars (capacity N with Asc provided, T L4486).
  function compute(s) {
    s = s || st;
    fixEnds(s);
    var Gk = s.n * s.gk, Qk = s.n * s.qk, braced = s.frame === 'braced';
    var d = C.columnDesign({ Gk_kN: Gk, Qk_kN: Qk, b_mm: s.b, h_mm: s.h, L_mm: s.lo, braced: braced, endTop: s.top, endBottom: s.bot,
      fcu_MPa: s.fcu, fy_MPa: FY, barDia_mm: s.dia, linkDia_mm: s.ld, linkSpacing_mm: s.ls });
    var sl = d.slenderness; if (!sl.short) sl.Cr = Math.max(0, Math.min(1, sl.Cr)); // review L2 #1: Cr kept in 0..1 (le/D >= 60 gives no capacity)
    var Ag = d.Ag_mm2, Asc = C.barsArea_mm2(s.dia, s.nb);
    var cap = C.columnSymmetricBeams({ fcu_MPa: s.fcu, Ag_mm2: Ag, fy_MPa: FY, Asc_mm2: Asc, N_kN: d.Pu_kN });
    var Ncap = cap.Ncap_kN, Nr = sl.short ? Ncap : Math.max(1e-3, sl.Cr * Ncap); // slender: the manual's Cr (T L4413-L4418)
    var lr = C.columnLinkRules({ barDia_mm: s.dia, Ag_mm2: Ag, linkDia_mm: s.ld, linkSpacing_mm: s.ls });
    var cut = C.stirrupCuttingLength({ innerA_mm: s.b - 2 * s.cover, innerB_mm: s.h - 2 * s.cover, barDia_mm: s.ld });
    var nl = C.barCount({ length_mm: s.lo, spacing_mm: s.ls }).n;
    var ok = { cap: d.Pu_kN <= Nr + 1e-9, rmin: Asc >= lr.AscMin_mm2 - 1e-9, rmax: Asc <= lr.AscMax_mm2 + 1e-9, ld: lr.linkDiaOk, ls: lr.linkSpacingOk,
      hook: s.hook === 135, short: sl.short, req: Asc >= cap.Asc_req_mm2 - 1e-9 };
    var r = { Gk: Gk, Qk: Qk, N: d.Pu_kN, beta: sl.factor, le: sl.Le_mm, sl: sl, d: d, Ag: Ag, Asc: Asc, Ac: cap.Ac_mm2, Ncap: Ncap, Nr: Nr,
      AscReq: cap.Asc_req_mm2, rho: 100 * Asc / Ag, lr: lr, ldMin: lr.linkDiaMin_mm, lsMax: lr.linkSpacingMax_mm, cut: cut, nl: nl, ok: ok };
    r.u = Math.min(999, 100 * d.Pu_kN / Nr);
    r.uS = 100 * sl.LeOverD / 12;
    r.uL = Math.max(100 * lr.spacingUtilisation, 100 * lr.linkDiaMin_mm / s.ld, s.hook === 135 ? 0 : 101);
    r.links = !(ok.ld && ok.ls && ok.hook);
    r.pass = ok.cap && ok.rmin && ok.rmax && ok.ld && ok.ls && ok.hook && ok.short;
    r.mode = !ok.cap ? (sl.short ? 'crush' : 'buckle') : r.links ? 'links' : !(ok.rmin && ok.rmax) ? 'steel' : !ok.short ? 'slender' : null;
    r.linkWhy = !ok.hook ? 'hook' : !ok.ls ? 'spacing' : !ok.ld ? 'thin' : null;
    return r;
  }
  window.__L2 = { cue: { on: true }, st: st, ui: ui, compute: compute, tasks: TASKS, preset: preset, set: function (o) { U.mark(); Object.assign(st, o); req(); } };

  // ---- formatting
  function fm(v, dp) { return v === null || v === undefined || isNaN(v) ? '·' : (+v).toFixed(dp); }
  function okc(b) { return b ? 'ok' : 'bad'; }

  // ---- panel
  var css = document.createElement('style');
  css.textContent =
    '#dl{position:absolute;right:16px;top:70px;width:392px;max-height:516px;overflow:auto;background:rgba(255,255,255,.96);border-radius:16px;padding:8px 12px 0;box-shadow:0 8px 24px rgba(15,46,90,.2);z-index:8;border-top:6px solid var(--amb);box-sizing:border-box}' +
    'body.pre #dl{visibility:hidden}#dl .k{font-size:11px;letter-spacing:.14em;font-weight:800;color:#b97800}' +
    '#dl h4{margin:1px 0 1px;font-size:16px;color:var(--navy)}#dl .gv{margin:0 0 3px;font-size:11.5px;line-height:1.3;color:var(--muted)}' +
    '#dl .sec{margin:4px 0 0;font-size:10.5px;font-weight:800;letter-spacing:.12em;color:var(--navy);opacity:.8}' +
    '#dl .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px 7px}#dl .g4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:3px 6px}' +
    '#dl .stp{display:flex;flex-direction:column;font-size:10.5px;color:var(--muted);font-weight:700;white-space:nowrap;min-width:0}' +
    '#dl .stp div{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);border-radius:9px;height:25px;margin-top:1px}' +
    '#dl .stp button{width:22px;height:23px;border:0;background:#eef3f9;color:var(--navy);font-size:15px;font-weight:800;cursor:pointer;border-radius:8px;padding:0;flex:none}' +
    '#dl button:disabled,#dl select:disabled{opacity:.4;cursor:default}' +
    '#dl .stp button:focus-visible,#dl select:focus-visible,#dl .bt:focus-visible,#dl .hk button:focus-visible{outline:3px solid var(--blue);outline-offset:1px}' +
    '#dl .stp b{font-size:12.5px;color:var(--ink);white-space:nowrap}' +
    '#dl select{width:100%;height:25px;border:1px solid var(--line);border-radius:9px;font:inherit;font-size:12px;color:var(--ink);background:#fff;margin-top:1px;padding:0 2px}' +
    '#dl .nu{margin:2px 0 0;font-family:"Cambria Math","Times New Roman",serif;font-size:14px;color:var(--ink)}#dl .nu b{font-family:Inter,sans-serif;font-size:11px;border-radius:6px;padding:1px 5px;margin-left:4px}' +
    '#dl .nu b.ok{background:#dcfce7;color:#15803d}#dl .nu b.bad{background:#fee2e2;color:var(--red)}' +
    '#dl .chip,#fx .chip{display:inline-block;font-family:Inter,sans-serif;font-size:10px;font-weight:700;color:#1E63B8;background:#e8eefc;border-radius:6px;padding:0 5px;margin-left:4px;white-space:nowrap}#fx .chip.n{color:#b45309;background:#fff1d6}' +
    '#dl .hk{display:flex;gap:4px;margin-top:1px}#dl .hk button{flex:1;height:25px;border:1px solid var(--line);border-radius:9px;background:#fff;font:inherit;font-size:12px;font-weight:700;color:var(--navy);cursor:pointer}#dl .hk button.on{background:var(--navy);color:#fff;border-color:var(--navy)}' +
    '#dl .ck{display:flex;flex-wrap:wrap;gap:3px;margin-top:4px}#dl .ck span{font-size:10.5px;font-weight:700;border-radius:7px;padding:2px 6px;background:#fee2e2;color:var(--red)}#dl .ck span.ok{background:#dcfce7;color:#15803d}#dl .ck span.n{background:#eef2f7;color:var(--muted)}' +
    '#dl .ft{position:sticky;bottom:0;background:rgba(255,255,255,.98);display:flex;gap:6px;padding:6px 0 9px;margin-top:4px}' +
    '#dl .bt{height:34px;border:0;border-radius:12px;background:var(--navy);color:#fff;font:inherit;font-size:14.5px;font-weight:800;cursor:pointer;letter-spacing:.03em;flex:1.6}#dl .bt.s{flex:1;background:#eef2f7;color:var(--navy)}#dl .bt.s.on{background:var(--blue);color:#fff}#dl .bt:disabled{opacity:.5;cursor:default}' +
    '#ulg{position:absolute;left:84px;top:124px;display:none;background:rgba(255,255,255,.95);border-radius:12px;padding:7px 12px;box-shadow:0 6px 18px rgba(15,46,90,.18);z-index:8;font-size:11px;font-weight:700;color:var(--navy)}' +
    '#ulg.show{display:block}#ulg i{display:block;width:190px;height:9px;border-radius:5px;margin:4px 0 2px;background:linear-gradient(90deg,rgba(212,216,221,.5) 0%,rgba(212,216,221,.5) 40%,#FFB020 41%,#F06A1A 70%,#FF3B30 71%,#FF3B30 100%);border:1px solid #c9d1da}#ulg s{display:flex;justify-content:space-between;text-decoration:none;font-weight:600;color:var(--muted)}';
  document.head.appendChild(css);
  function stepper(id, label) {
    return '<label class="stp"><span>' + label + '</span><div><button type="button" data-k="' + id + '" data-d="-1" aria-label="' + label + ' less">−</button><b id="dlv_' + id + '"></b><button type="button" data-k="' + id + '" data-d="1" aria-label="' + label + ' more">+</button></div></label>';
  }
  function sel(id, label, opts) {
    return '<label class="stp"><span>' + label + '</span><select id="' + id + '" aria-label="' + label + '">' + opts.map(function (o) { return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join('') + '</select></label>';
  }
  var box = document.createElement('div');
  box.id = 'dl'; box.setAttribute('role', 'group'); box.setAttribute('aria-labelledby', 'dlH');
  box.innerHTML =
    '<div class="k">DESIGN TASK</div><h4 id="dlH"></h4><p class="gv" id="dlG"></p>' +
    '<div class="sec">LOAD FROM THE FLOORS ABOVE</div>' +
    '<div class="g3">' + stepper('n', 'Storeys') + stepper('gk', 'Dead per storey') + stepper('qk', 'Imposed per storey') + '</div>' +
    '<div class="nu" id="dlN" aria-live="polite"></div>' +
    '<div class="sec">COLUMN</div>' +
    '<div class="g4">' + stepper('b', 'Width b') + stepper('h', 'Depth h') + stepper('lo', 'Clear height') + stepper('cover', 'Cover') + '</div>' +
    '<div class="g4">' + sel('dlF', 'Concrete', GRADES.map(function (g) { return [g, 'fcu ' + g]; })) + sel('dlFr', 'Frame', [['braced', 'Braced'], ['unbraced', 'Unbraced']]) +
    sel('dlTp', 'Top end', ENDS.map(function (e, i) { return [i + 1, e]; })) + sel('dlBt', 'Base end', ENDS.slice(0, 3).map(function (e, i) { return [i + 1, e]; })) + '</div>' +
    '<div class="nu" id="dlS" aria-live="polite"></div>' +
    '<div class="sec">MAIN BARS AND LINKS</div>' +
    '<div class="g4">' + stepper('nb', 'Bars') + stepper('dia', 'Bar Ø') + stepper('ld', 'Link Ø') + stepper('ls', 'Link spacing') + '</div>' +
    '<label class="stp" style="margin-top:2px"><span>Link hook</span><div class="hk" role="radiogroup" aria-label="Link hook"><button type="button" data-hook="135" role="radio">135° hook</button><button type="button" data-hook="90" role="radio">90° hook</button></div></label>' +
    '<div class="ck" id="dlC" aria-live="polite"></div>' +
    '<div class="ft"><button type="button" class="bt" id="dlT">Test: apply the load</button><button type="button" class="bt s" id="dlK" aria-pressed="false">Compare</button></div>';
  $('#stage').appendChild(box);
  var leg = document.createElement('div');
  leg.id = 'ulg'; leg.innerHTML = 'Where the column works hard<i></i><s><span>clear below 80 %</span><span>100 %</span><span>fails</span></s>';
  $('#stage').appendChild(leg);

  var safe0 = U.safe;
  U.safe = function () { var s = safe0(); s.x1 = Math.min(s.x1, 1180); return s; };

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function pick(list, v, dir) { return list[clamp(list.indexOf(v) + dir, 0, list.length - 1)]; }
  var LOCKED = ['n', 'gk', 'qk', 'b', 'h', 'lo', 'dlF', 'dlFr', 'dlTp', 'dlBt'];
  function bump(key, dir) {
    if (ui.busy) return;
    U.mark();
    if (key === 'dia') st.dia = pick(DIAS, st.dia, dir);
    else if (key === 'nb') st.nb = pick(NBS, st.nb, dir);
    else if (key === 'ld') st.ld = pick(LDS, st.ld, dir);
    else { var L = LIM[key]; st[key] = clamp(Math.round((st[key] + dir * L[2]) / L[2]) * L[2], L[0], L[1]); }
    req();
    if (key === 'lo' || key === 'n') frame(600); // review L2: the camera reframes when the column height or storeys change
  }
  box.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-k]'); if (b) { bump(b.dataset.k, +b.dataset.d); return; }
    var hk = e.target.closest('button[data-hook]'); if (hk && !ui.busy) { U.mark(); st.hook = +hk.dataset.hook; req(); }
  });
  function onSel(id, key, num) {
    $('#' + id).addEventListener('change', function () { if (ui.busy) return; U.mark(); st[key] = num ? +this.value : this.value; fixEnds(st); req(); });
  }
  onSel('dlF', 'fcu', true); onSel('dlFr', 'frame', false); onSel('dlTp', 'top', true); onSel('dlBt', 'bot', true);
  $('#dlT').addEventListener('click', function () { test(); });
  // review L2: Compare shows the correct design only after this task has been tested once (no answer before a try)
  $('#dlK').addEventListener('click', function () { if (ui.busy || !ui.tested) return; ui.cmp = !ui.cmp; draw(); frame(700); });

  // ---- 3D: own group; the old tower and yard are hidden (kept in the bundle as data)
  U.G.children.slice().forEach(function (c) { c.visible = false; });
  U.parts = []; U.hoverable = function () { return []; };
  U.drag(null);
  var W = new R.Group(); U.G.add(W);
  var FT = 0.12; // top of the footing above the site ground (m)
  var M = {
    conc: function (op) { return MAT.conc(0xc4c7cb, op); },
    beam: function () { return MAT.conc(0xb9bcc0, 1); },
    rebar: MAT.rebar(1),
    link: E.de(0x6d7277, { metal: 0.35 }),
    linkBad: E.de(0xb4531f, { metal: 0.3 }),
    ghost: E.de(0xdfe6ee, { op: 0.3 })
  };
  function mesh(g, m, x, y, z, parent) { var o = new R.Mesh(g, m); o.position.set(x || 0, y || 0, z || 0); o.castShadow = o.receiveShadow = true; (parent || W).add(o); return o; }
  function box3(w, h, d, m, x, y, z, p) { return mesh(new R.BoxGeometry(w, h, d), m, x, y, z, p); }

  // owner 07:44Z: bars and links are DRAWN about 2.5 times their true diameter (visual only; every number and the
  // Formulas section use the true sizes), capped so big bars do not fill the section
  function visDia(d) { return Math.min(2.5 * d, Math.max(1.4 * d, 40)); }
  function visLink(d) { return Math.min(2.5 * d, 20); }
  // ribbed bar: transverse ribs every 0.7Ø and two longitudinal ribs, as a cylinder whose radius follows the ribs
  function barGeom(dia, L) {
    var r = visDia(dia) / 2000, pitch = 0.7 * dia / 1000, seg = Math.min(1400, Math.ceil(L / (pitch / 4)));
    var g = new R.CylinderGeometry(r, r, L, 10, seg, false);
    g.translate(0, L / 2, 0);
    var p = g.attributes.position;
    for (var i = 0; i < p.count; i++) {
      var x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x);
      var ph = (y / pitch) % 1, rib = ph < 0.22 ? Math.sin(ph / 0.22 * Math.PI) : 0;
      var f = 1 + 0.075 * rib + (Math.abs(Math.cos(a)) > 0.97 ? 0.06 : 0);
      p.setXYZ(i, x * f, y, z * f);
    }
    g.computeVertexNormals();
    g.userData.base = Float32Array.from(p.array);
    return g;
  }
  // link centre line in plan (m), its two hooks at the corner (+x, +z). Hook length 9Ø (T L1135).
  // 135°: both tails bent round the corner bar into the core. 90°: tails lie along the faces; `open` turns them out.
  function linkPts(s, open) {
    var ax = s.b / 2000 - s.cover / 1000 - s.ld / 2000, az = s.h / 2000 - s.cover / 1000 - s.ld / 2000;
    var rc = Math.min(2.5 * s.ld / 1000, ax * 0.5), L9 = 9 * s.ld / 1000, pts = [], PI = Math.PI, o = open || 0, c = Math.SQRT1_2;
    function arc(cx, cz, a0, a1) { for (var i = 0; i <= 8; i++) { var a = a0 + (a1 - a0) * i / 8; pts.push(V(cx + rc * Math.cos(a), 0, cz + rc * Math.sin(a))); } }
    var kx = ax - rc, kz = az - rc;
    if (s.hook === 135) pts.push(V(kx + rc * Math.cos(3 * PI / 4) - L9 * c, 0, kz + rc * Math.sin(3 * PI / 4) - L9 * c));
    else pts.push(V(kx - L9 * Math.cos(o), 0, az + L9 * Math.sin(o)));
    arc(kx, kz, s.hook === 135 ? 3 * PI / 4 : PI / 2, 0);
    arc(kx, -kz, 0, -PI / 2);
    arc(-kx, -kz, -PI / 2, -PI);
    arc(-kx, kz, PI, PI / 2);
    arc(kx, kz, PI / 2, s.hook === 135 ? -PI / 4 : 0);
    if (s.hook === 135) pts.push(V(kx + rc * c - L9 * c, 0, kz - rc * c - L9 * c));
    else pts.push(V(ax + L9 * Math.sin(o), 0, kz - L9 * Math.cos(o)));
    return pts;
  }
  function linkGeom(s, open) {
    var pts = linkPts(s, open), path = new R.CurvePath();
    for (var i = 0; i < pts.length - 1; i++) if (pts[i].distanceTo(pts[i + 1]) > 1e-6) path.add(new R.LineCurve3(pts[i], pts[i + 1]));
    return new R.TubeGeometry(path, 120, visLink(s.ld) / 2000, 6, false);
  }

  // one column assembly: footing, core and cover shell slices (spalling removes slices), bars, links, beams, slab
  var NSL = 20;
  function buildColumn(s, x0, tag) {
    var g = new R.Group(); g.position.x = x0; W.add(g);
    var b = s.b / 1000, h = s.h / 1000, H = s.lo / 1000, c = s.cover / 1000, y0 = FT;
    var A = { g: g, s: s, b: b, h: h, H: H, y0: y0, tag: tag, shell: [], bars: [], links: [], fx: new R.Group(), conc: [] };
    g.add(A.fx);
    var fw = Math.max(1.2, 3.4 * Math.max(b, h));
    A.conc.push(box3(fw, 0.45, fw, M.conc(1), 0, FT - 0.225, 0, g));
    A.core = box3(b - 2 * c, H, h - 2 * c, M.conc(1), 0, y0 + H / 2, 0, g); A.conc.push(A.core);
    var dy = H / NSL;
    for (var i = 0; i < NSL; i++) {
      var yc = y0 + (i + 0.5) * dy, row = [];
      row.push(box3(b, dy, c, M.conc(1), 0, yc, h / 2 - c / 2, g), box3(b, dy, c, M.conc(1), 0, yc, -h / 2 + c / 2, g),
        box3(c, dy, h - 2 * c, M.conc(1), b / 2 - c / 2, yc, 0, g), box3(c, dy, h - 2 * c, M.conc(1), -b / 2 + c / 2, yc, 0, g));
      row.forEach(function (m) { m.castShadow = false; m.userData.y = yc; m.userData.base = m.position.clone(); A.conc.push(m); });
      A.shell.push(row);
    }
    var bg = barGeom(s.dia, H + 0.9); // starter bars from the footing to above the slab
    barPos(s).forEach(function (p) {
      var gg = bg.clone(); gg.userData.base = bg.userData.base;
      var m = mesh(gg, M.rebar, p[0] / 1000, y0 - 0.25, p[1] / 1000, g);
      m.userData.p = p; m.userData.y = m.position.y; A.bars.push(m);
    });
    var lg = linkGeom(s, 0), n = Math.max(2, Math.floor((s.lo - 50) / s.ls) + 1), first = (s.lo - (n - 1) * s.ls) / 2000;
    for (var j = 0; j < n; j++) { var lm = mesh(lg, M.link, 0, y0 + first + j * s.ls / 1000, 0, g); lm.userData.y = lm.position.y; A.links.push(lm); }
    A.hookLink = A.links[Math.max(1, Math.floor(n * 0.45))];
    // beams on four sides (symmetrical arrangement, T L4484) and the slab
    var bh = (TASKS[s.task].beamH || 450) / 1000, bw = Math.min(b, 0.3), sl = 0.15, top = y0 + H, bl = 0.75;
    A.top = top;
    A.conc.push(box3(b, bh, h, M.beam(), 0, top + bh / 2, 0, g));
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
      A.conc.push(box3(d[0] ? bl : bw, bh, d[0] ? bw : bl, M.beam(), d[0] * (b / 2 + bl / 2), top + bh / 2, d[1] * (h / 2 + bl / 2), g));
    });
    A.slabY = top + bh;
    A.conc.push(box3(b + 2 * bl, sl, h + 2 * bl, M.beam(), 0, top + bh - sl / 2, 0, g));
    return A;
  }
  // owner feedback 2: See inside = concrete nearly clear and neutral (light grey, opacity 0.12, edge outline), bars and
  // links bold (white screen-space outline behind each), utilisation tint only where the column works hard
  function setEye(A, on) {
    CUES.xray(A.conc, on);
    A.bars.concat(A.links, A.openMesh ? [A.openMesh] : []).forEach(function (m) {
      var o = on ? CUES.outline(m, { px: 2.2 }) : m.userData.outline; if (o) o.visible = on;
    });
    CUES.edges(A.g, new R.Box3(V(A.g.position.x - A.b / 2, A.y0, -A.h / 2), V(A.g.position.x + A.b / 2, A.y0 + A.H, A.h / 2)), on);
    if (A.grad) A.grad.visible = on;
  }
  // utilisation colour field on a skin just outside the column (unlit, reads the same under every light)
  function colorU(u) { var c = new R.Color(); if (u <= 0.8) c.setRGB(0.13 + 0.8 * (u / 0.8), 0.64, 0.29 * (1 - u / 0.8)); else c.setRGB(0.94, Math.max(0.15, 0.65 - 0.5 * Math.min(1, (u - 0.8) / 0.2)), 0.05); return c; }
  function failZone(A, res) { // where this design fails first (m above the site ground), or null
    if (!res.mode || res.mode === 'steel') return null;
    if (res.mode === 'links') return linkGap(A);
    if (res.mode === 'crush') return [A.y0 + A.H * 0.56, A.y0 + A.H * 0.76];
    if (res.mode === 'buckle') return [A.y0 + A.H * 0.38, A.y0 + A.H * 0.62]; // slender and overloaded: mid height
    return null; // 'slender' alone holds (review CUE-S4 H1): no failure cue
  }
  function linkGap(A) { var hl = A.hookLink; return [A.links[A.links.indexOf(hl) - 1].position.y, hl.position.y]; }
  function gradSkin(A, res) {
    var g = new R.BoxGeometry(A.b + 0.012, A.H, A.h + 0.012, 1, 80, 1), p = g.attributes.position, cols = [];
    // short column: uniform Nu / N; slender: Nu / N at the ends rising to Nu / (Cr·N) at mid height (the Cr reduction).
    // Tint only where it works hard: clear up to 80 %, amber to red above; the failing zone is red whatever the rest.
    var u0 = res.N / res.Ncap, u1 = res.N / res.Nr, z = failZone(A, res), ys = A.y0 + A.H / 2;
    for (var i = 0; i < p.count; i++) {
      var t = p.getY(i) / A.H + 0.5, u = u0 + (u1 - u0) * Math.sin(Math.PI * clamp(t, 0, 1)), y = p.getY(i) + ys;
      var inZ = z && y >= z[0] - 0.02 && y <= z[1] + 0.02; if (inZ) u = Math.max(u, 1.3);
      var col = colorU(Math.min(2, u)), al = inZ ? 0.36 : u <= 0.8 ? 0 : 0.06 + 0.3 * Math.min(0.2, u - 0.8); // light amber outside the zone: never a whole red box
      if (!inZ && u > 1) col = new R.Color(CUES.AMB);
      cols.push(col.r, col.g, col.b, al);
    }
    g.setAttribute('color', new R.Float32BufferAttribute(cols, 4));
    A.grad = new R.Mesh(g, new R.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 1, depthWrite: false, toneMapped: false }));
    A.grad.position.y = A.y0 + A.H / 2; A.grad.renderOrder = 6; A.grad.visible = ui.eye; A.g.add(A.grad);
  }

  // ---- deformation: bow (slender), bars buckling between two links, crushing, hook opening, spalling, shortening
  var REST = { bow: 0, zone: null, bulge: 0, spall: false, open: 0, sq: 0, thin: false };
  function deform(A, f) {
    var H = A.H, y0 = A.y0;
    function bowAt(y) { var t = (y - y0) / H; return t > 0 && t < 1 ? f.bow * Math.sin(Math.PI * t) : 0; }
    function sqY(y) { return y0 + (y - y0) * (1 - f.sq); }
    A.bars.forEach(function (m) {
      var g = m.geometry, p = g.attributes.position, base = g.userData.base, px = m.userData.p[0], pz = m.userData.p[1];
      var ln = Math.hypot(px, pz) || 1, ox = px / ln, oz = pz / ln, my = m.userData.y;
      for (var i = 0; i < p.count; i++) {
        var by = base[3 * i + 1], y = by + my, dx = bowAt(y), dz = 0;
        if (f.zone && y > f.zone[0] && y < f.zone[1]) { var w = Math.sin(Math.PI * (y - f.zone[0]) / (f.zone[1] - f.zone[0])); dx += ox * f.bulge * w; dz += oz * f.bulge * w; }
        p.setXYZ(i, base[3 * i] + dx, (y > y0 ? sqY(y) : y) - my, base[3 * i + 2] + dz);
      }
      p.needsUpdate = true; g.computeBoundingSphere();
    });
    A.links.forEach(function (m) {
      var y = m.userData.y; m.position.x = bowAt(y); m.position.y = sqY(y);
      var inZ = f.zone && y > f.zone[0] - 0.02 && y < f.zone[1] + 0.02;
      var k = inZ ? 1 + f.bulge * (f.thin ? 3.2 : 1.1) / Math.max(A.b, A.h) : 1;
      m.scale.set(k, 1, k);
    });
    A.shell.forEach(function (row) {
      row.forEach(function (m) {
        var y = m.userData.y, b0 = m.userData.base;
        m.position.x = b0.x + bowAt(y); m.position.y = sqY(y);
        m.visible = !(f.spall && f.zone && y > f.zone[0] - 0.03 && y < f.zone[1] + 0.03);
      });
    });
    A.core.scale.y = 1 - f.sq; A.core.position.y = y0 + (H / 2) * (1 - f.sq);
    var hl = A.hookLink;
    if (f.open && hl) {
      hl.visible = false;
      if (!A.openMesh) A.openMesh = mesh(new R.BufferGeometry(), M.linkBad, 0, 0, 0, A.g);
      A.openMesh.geometry.dispose(); A.openMesh.geometry = linkGeom(A.s, f.open);
      A.openMesh.position.set(hl.position.x, hl.position.y, 0); A.openMesh.scale.copy(hl.scale); A.openMesh.visible = true;
    } else if (A.openMesh) { A.openMesh.visible = false; if (hl) hl.visible = true; }
  }

  // ---- teaching cues (owner feedback 1): squeeze chevrons on the faces, tremble lines at >= 90 %, a glow at the
  // critical spot over 100 %. Thick screen-space strokes on a white halo (cues.js), pulse while at the limit.
  function chevrons(A, u, t) {
    U.clear(A.fx);
    if (u < 0.15 || !window.__L2.cue.on) return;
    var col = CUES.col(u), pulse = u >= 0.9 ? 0.25 : 0, w = u > 0.9 ? 6 : 5;
    var n = u > 0.9 ? 4 : 3, sz = 0.07 + 0.06 * Math.min(1.2, u), zf = A.h / 2, off = A.b / 2 + 0.1;
    for (var i = 0; i < n; i++) {
      var y = A.y0 + A.H * (0.15 + 0.7 * i / (n - 1));
      [-1, 1].forEach(function (sd) { CUES.chevron(A.fx, V(sd * off, y, zf), V(-sd, 0, 0), sz, col, { w: w, pulse: pulse }); });
    }
    var z = failZone(A, { mode: A === COL ? ui.res && ui.res.mode : ui.cres && ui.cres.mode });
    if (u >= 0.9 && !z) { // tremble lines where the column works hardest (the red zone brackets replace them)
      var ym = A.y0 + A.H / 2;
      [-1, 1].forEach(function (sd) {
        for (var k = 0; k < 2; k++) {
          var pts = [], x0 = sd * (A.b / 2 + 0.26 + 0.07 * k);
          for (var q = 0; q <= 12; q++) pts.push(V(x0 + 0.014 * Math.sin(q * 2.3 + k), ym - 0.3 + 0.05 * q, zf));
          CUES.line(A.fx, pts, col, { w: 4, pulse: pulse });
        }
      });
    }
    if (u > 1 || z) {
      var zc = z ? (z[0] + z[1]) / 2 : A.y0 + A.H / 2;
      CUES.glow(A.fx, V(0, zc, zf), CUES.RED, { px: 150 });
      if (z) [-1, 1].forEach(function (sd) { // red brackets on both faces: the zone that fails first
        var x = sd * (A.b / 2 + 0.035);
        CUES.line(A.fx, [V(x - sd * 0.03, z[0], zf), V(x, z[0], zf), V(x, z[1], zf), V(x - sd * 0.03, z[1], zf)], CUES.RED, { w: 5 });
      });
    }
  }

  // ---- load arrows and the storeys above
  var arrows = new R.Group(); W.add(arrows);
  var ghosts = new R.Group(); W.add(ghosts);
  function ghostTop(A) { return A.slabY + 0.7 + Math.max(0, st.n - 1) * 0.3; }
  function drawLoads(A, res, k, label) {
    var top = A.slabY + 0.02, len = 0.45 + 0.6 * Math.min(1.4, res.N / 3000), r = 0.03 + 0.025 * Math.min(1.5, res.N / 3000), x = A.g.position.x;
    U.into(arrows, function () {
      E.Ln(V(x, top + 0.06 + len * Math.max(0.05, k), 0), V(x, top + 0.04, 0), 0xDC2626, r);
      E.Ln(V(x, FT - 0.9, 0), V(x, FT - 0.47, 0), 0x1E63B8, 0.022); // the footing carries it on to the soil
    });
    if (label) U.label('nA' + A.tag, [x, top + 0.2 + len, 0], label, 'bad', 6);
  }
  function drawGhosts(A, n) { // the storeys above, drawn closer together than in reality
    for (var i = 0; i < n - 1; i++) {
      var m = new R.Mesh(new R.BoxGeometry(A.b + 1.5, 0.05, A.h + 1.5), M.ghost);
      m.position.set(A.g.position.x, A.slabY + 0.95 + i * 0.3, 0); ghosts.add(m);
    }
  }

  // ---- scene sync
  var COL = null, CMP = null;
  function shot() {
    var H = st.lo / 1000, w = ui.cmp ? 2.4 : 1.25;
    return { box: new R.Box3(V(-w - 0.3, -0.35, -0.9), V(w + 0.3, FT + H + 0.6 + 1.3 + Math.max(0, st.n - 1) * 0.3, 0.9)), dir: [0.36, 0.18, 0.92], fov: 30 };
  }
  function frame(ms) { // explicit camera: column and storeys fill the free area left of the panel
    var H = st.lo / 1000, E2 = H + 1.9 + Math.max(0, st.n - 1) * 0.3, dist = 2.55 * E2 * (ui.cmp ? 1.15 : 1), d = [0.36, 0.18, 0.92], tx = ui.cmp ? 0.9 : 0.55, ty = FT + E2 / 2 + 0.05; // the load label clears the step prompt
    U.fly([tx + d[0] * dist, ty + d[1] * dist, d[2] * dist], [tx, ty, 0], ms || 900, 30);
  }
  function correctState() { var s = Object.assign({}, st, task().correct); return s; }
  function disposeCol(A) { if (!A) return; W.remove(A.g); A.g.traverse(function (o) { if (o.geometry) o.geometry.dispose(); }); }
  function rebuild() {
    disposeCol(COL); disposeCol(CMP); COL = CMP = null;
    U.clear(arrows); U.clear(ghosts); U.unlabel(/^(nA|hk|sp|cv|cm|bw)/);
    var res = ui.res;
    COL = buildColumn(st, ui.cmp ? -1.2 : 0, 'me');
    gradSkin(COL, res); setEye(COL, ui.eye);
    drawLoads(COL, res, 1, 'N<sub>u</sub> = ' + fm(res.N, 0) + ' kN' + (st.n > 1 ? ' (' + st.n + ' storeys)' : ''));
    drawGhosts(COL, st.n);
    if (ui.cmp) {
      var cs = correctState(); ui.cres = compute(cs);
      CMP = buildColumn(cs, 1.2, 'ok');
      gradSkin(CMP, ui.cres); setEye(CMP, ui.eye);
      drawLoads(CMP, ui.cres, 1, null); drawGhosts(CMP, st.n);
      U.label('cmA', [-1.2, FT + 0.05, 0.8], 'YOUR DESIGN', res.pass ? 'ok' : 'bad', 7);
      U.label('cmB', [1.2, FT + 0.05, 0.8], 'CORRECT DESIGN · ' + cs.nb + 'Y' + cs.dia + ' · R' + cs.ld + ' @ ' + cs.ls, 'ok', 7);
      chevrons(CMP, ui.cres.N / ui.cres.Nr, 0);
    } else ui.cres = null;
    detailLabels(COL);
    chevrons(COL, res.N / res.Nr, 0);
  }
  function detailLabels(A) {
    var s = A.s, x = A.g.position.x, hl = A.hookLink, ya = hl.position.y;
    var yb = A.links[A.links.indexOf(hl) - 1].position.y, xd = A.b / 2 + 0.05, zf = A.h / 2 + 0.01, res = ui.res;
    U.unlabel(/^(hk|sp|cv)/);
    if (A.dim) U.clear(A.dim); else { A.dim = new R.Group(); A.g.add(A.dim); }
    if (!ui.eye) return;
    U.into(A.dim, function () { // spacing dimension between two links
      E.cn([V(xd, yb, zf), V(xd, ya, zf)], 0x0F2E5A);
      E.cn([V(xd - 0.03, yb, zf), V(xd + 0.03, yb, zf)], 0x0F2E5A);
      E.cn([V(xd - 0.03, ya, zf), V(xd + 0.03, ya, zf)], 0x0F2E5A);
    });
    U.label('sp', [x + xd + 0.03, (ya + yb) / 2, zf], 's = ' + s.ls + ' mm', res.ok.ls ? 'b' : 'bad', 4);
    U.label('hk', [x + A.b / 2, ya + 0.06, A.h / 2], 'R' + s.ld + ' link, ' + s.hook + '° hooks', res.ok.hook && res.ok.ld ? 'b' : 'bad', 4);
    U.label('cv', [x - A.b / 2, A.y0 + 0.3, A.h / 2], 'cover ' + s.cover + ' mm · ' + s.nb + 'Y' + s.dia, 'b', 3);
  }

  // ---- Formulas panel (calc steps with their chips) and the cross-section drawing
  function chip(c, cls) { return c && c !== 'manual' ? ' <span class="chip' + (cls ? ' ' + cls : '') + '">' + c + '</span>' : ''; }
  function stepRow(stp, note, cls) {
    var dp = stp.unit === 'kN' ? 1 : stp.unit === 'mm' || stp.unit === 'mm²' ? 0 : 2;
    return [stp.formula, (note || stp.label) + ' (' + stp.ref + ')' + chip(stp.chip, stp.chip === 'manual note' ? 'n' : ''), fm(stp.value, dp) + (stp.unit ? ' ' + stp.unit : ''), cls || ''];
  }
  function stepOf(d, id) { return d.steps.filter(function (s) { return s.id === id; })[0]; }
  function section(s, res) {
    var sc = 150 / Math.max(s.b, s.h), w = s.b * sc, h = s.h * sc, x0 = 34, y0 = 16, c = s.cover * sc, lw = Math.max(1.6, s.ld * sc);
    var ax = w / 2 - c - lw / 2, az = h / 2 - c - lw / 2, cx = x0 + w / 2, cy = y0 + h / 2, rc = Math.max(3, 2.5 * s.ld * sc);
    var bad = !(res.ok.hook && res.ok.ld && res.ok.ls), col = bad ? '#b4531f' : '#3d4248';
    var L9 = 9 * s.ld * sc, hx = cx + ax, hy = cy - az, tails;
    // hook corner top right: 135° tails run diagonally into the core; 90° tails lie along the two faces
    if (s.hook === 135) tails = '<path d="M' + (hx - rc * 0.3) + ' ' + (hy + rc * 0.3) + ' l' + (-L9 * 0.71) + ' ' + (L9 * 0.71) + ' M' + (hx - rc * 0.3 - 3) + ' ' + (hy + rc * 0.3 - 1) + ' l' + (-L9 * 0.71) + ' ' + (L9 * 0.71) + '" stroke="' + col + '" stroke-width="' + lw + '" fill="none" stroke-linecap="round"/>';
    else tails = '<path d="M' + (hx + lw) + ' ' + (hy + rc) + ' l0 ' + L9 + ' M' + (hx - rc) + ' ' + (hy - lw) + ' l' + (-L9) + ' 0" stroke="' + col + '" stroke-width="' + lw + '" fill="none" stroke-linecap="round"/>';
    var bars = barPos(s).map(function (p) { return '<circle cx="' + (cx + p[0] * sc) + '" cy="' + (cy - p[1] * sc) + '" r="' + Math.max(2.4, s.dia * sc / 2) + '" fill="#2b2f33"/>'; }).join('');
    var t = function (y, txt, fill, wt) { return '<text x="214" y="' + y + '" font-size="12"' + (wt ? ' font-weight="700"' : '') + ' fill="' + (fill || '#14243a') + '">' + txt + '</text>'; };
    return '<svg viewBox="0 0 400 200" width="396" height="198" role="img" aria-label="Column cross section with bars, link, hooks and cover">' +
      '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="#d9dcdf" stroke="#14243a" stroke-width="1"/>' +
      '<rect x="' + (x0 + c) + '" y="' + (y0 + c) + '" width="' + (w - 2 * c) + '" height="' + (h - 2 * c) + '" fill="none" stroke="#5d6b7c" stroke-dasharray="3 3" stroke-width=".8"/>' +
      '<rect x="' + (cx - ax) + '" y="' + (cy - az) + '" width="' + 2 * ax + '" height="' + 2 * az + '" rx="' + rc + '" fill="none" stroke="' + col + '" stroke-width="' + lw + '"/>' + tails + bars +
      '<line x1="' + x0 + '" x2="' + (x0 + c) + '" y1="' + (cy + 18) + '" y2="' + (cy + 18) + '" stroke="#1E63B8" stroke-width="1.5"/>' +
      '<text x="' + cx + '" y="' + (y0 + h + 14) + '" text-anchor="middle" font-size="11" fill="#14243a">b = ' + s.b + ' mm</text>' +
      '<text x="' + (x0 - 8) + '" y="' + cy + '" text-anchor="middle" font-size="11" fill="#14243a" transform="rotate(-90 ' + (x0 - 8) + ' ' + cy + ')">h = ' + s.h + ' mm</text>' +
      '<path d="M' + (hx + 3) + ' ' + (hy - 3) + ' L208 60" stroke="' + col + '" stroke-width=".8" fill="none"/>' +
      t(26, s.nb + 'Y' + s.dia + ', A<tspan font-size="9" dy="3">sc</tspan><tspan dy="-3"> = ' + fm(res.Asc, 0) + ' mm²</tspan>', 0, 1) +
      t(45, 'R' + s.ld + ' links @ ' + s.ls + ' mm', col) + t(64, s.hook + '° hooks, 9Ø = ' + 9 * s.ld + ' mm', col) +
      t(83, 'cover ' + s.cover + ' mm (blue mark)', '#1E63B8') + t(102, 'ρ = ' + fm(res.rho, 2) + ' % of b × h') +
      t(121, 'link cutting length ' + fm(res.cut.L_mm, 0) + ' mm', '#5d6b7c') + t(140, res.nl + ' links over ' + fm(s.lo / 1000, 1) + ' m', '#5d6b7c') + '</svg>';
  }
  function checkOf(d, id) { return d.checks.filter(function (c) { return c.id === id; })[0]; }
  function formulas(res) {
    var t = task(), d = res.d, sl = res.sl, s = st;
    var rL = [
      ['G<sub>k</sub> = n × g<sub>k</sub>', s.n + ' storeys × ' + fm(s.gk, 0) + ' kN, loads from the floors above', fm(res.Gk, 1) + ' kN', ''],
      ['Q<sub>k</sub> = n × q<sub>k</sub>', s.n + ' storeys × ' + fm(s.qk, 0) + ' kN', fm(res.Qk, 1) + ' kN', ''],
      stepRow(stepOf(d, 'Pu'), 'Ultimate load', 'hl')
    ];
    var shortC = checkOf(d, 'short');
    var rS = [
      stepRow(stepOf(d, 'Le'), (s.frame === 'braced' ? 'braced' : 'unbraced') + ', ends ' + s.top + ' (top) and ' + s.bot + ' (base), l<sub>o</sub> = ' + s.lo + ' mm'),
      stepRow(stepOf(d, 'LeD'), 'least dimension D = ' + sl.least_mm + ' mm'),
      ['short if l<sub>e</sub> / D ≤ 12', shortC.label + ' (' + shortC.ref + ')' + chip('BS 8110: ' + sl.bsShortLimit + ', to confirm'), sl.short ? 'SHORT' : 'SLENDER', okc(sl.short)],
      stepRow(stepOf(d, 'r'), 'least radius of gyration'),
      stepRow(stepOf(d, 'Ler'), 'manual limit 40', okc(sl.LeOverR <= 40))
    ];
    // Slender reduction: the manual multiplies the short column's permissible stresses by Cr = 1.25 − lef/(48b)
    // (T L4413-L4418, equation image at L4414; IS 456 working stress form). N is linear in those stresses, so the lab
    // shows Cr × N with Cr from calc.mjs. BS 8110 designs slender columns with additional moments (3.8.3) instead.
    if (!sl.short) rS.push(['C<sub>r</sub> = 1.25 − l<sub>e</sub>/(48b)', 'slender: the permissible stresses × C<sub>r</sub>, so N × C<sub>r</sub>' +
      ' <span class="chip">manual</span>' + chip('BS 8110 uses added moments, to confirm', 'n'), fm(sl.Cr, 3), 'bad']);
    var tc = st.task < 2 ? chip('typical value, to confirm') : '';
    var rC = [
      stepRow(stepOf(d, 'Ag')),
      ['A<sub>sc</sub> = n × πØ²/4', s.nb + ' bars Y' + s.dia + ' (bar table)', fm(res.Asc, 0) + ' mm²', ''],
      ['A<sub>c</sub> = A<sub>g</sub> − A<sub>sc</sub>', 'net concrete', fm(res.Ac, 0) + ' mm²', ''],
      ['N = 0.35f<sub>cu</sub>A<sub>c</sub> + 0.7f<sub>y</sub>A<sub>sc</sub>', 'f<sub>cu</sub> ' + s.fcu + ', f<sub>y</sub> ' + FY + ' N/mm²' + tc, fm(res.Ncap, 1) + ' kN', ''],
      stepRow(stepOf(d, 'Asc'), 'steel required for N<sub>u</sub>'),
      ['A<sub>sc,prov</sub> ≥ A<sub>sc,req</sub>', '', fm(res.Asc, 0) + ' ≥ ' + fm(Math.max(0, res.AscReq), 0) + ' mm²', okc(res.ok.req)],
      ['N<sub>u</sub> ≤ N' + (sl.short ? '' : ' × C<sub>r</sub>'), 'the column carries the load', fm(res.N, 0) + ' ≤ ' + fm(res.Nr, 0) + ' kN', okc(res.ok.cap) + ' hl']
    ];
    var lr = res.lr, bs = chip('BS 8110, to confirm');
    var rD = [
      ['0.4 % A<sub>c</sub> ≤ A<sub>sc</sub> ≤ 6 % A<sub>c</sub>', 'steel limits, A<sub>c</sub> taken as b × h (' + lr.ref + ')' + bs, fm(lr.AscMin_mm2, 0) + ' ≤ ' + fm(res.Asc, 0) + ' ≤ ' + fm(lr.AscMax_mm2, 0), okc(res.ok.rmin && res.ok.rmax)],
      ['Ø<sub>link</sub> ≥ max(6, Ø/4)', 'links hold the bars (' + lr.ref + ')' + bs, s.ld + ' ≥ ' + fm(lr.linkDiaMin_mm, 0) + ' mm', okc(res.ok.ld)],
      ['s ≤ 12 × Ø<sub>smallest</sub>', 'else the bars buckle between links (' + lr.ref + ')' + bs, s.ls + ' ≤ ' + fm(lr.linkSpacingMax_mm, 0) + ' mm', okc(res.ok.ls)],
      ['hook 135°', 'tails anchored in the core; a 90° hook opens when the cover spalls' + chip('hook angle, to confirm'), s.hook + '°', okc(res.ok.hook)],
      ['L = 2(A + B) + 2 × 9Ø − 3 × 2Ø − 2 × 3Ø', 'link cutting length, manual BBS (' + res.cut.ref + ')', fm(res.cut.L_mm, 0) + ' mm', '']
    ];
    U.fx({ sub: t.name + ' · live values', dg: section(st, res), groups: [
      { h: 'Load from the floors above', rows: rL },
      { h: 'Effective height and slenderness', p: res.uS, rows: rS },
      { h: 'Capacity (column with symmetrical beams)', p: res.u, rows: rC },
      { h: 'Detailing: steel limits and links', p: res.uL, rows: rD }] });
  }

  // ---- draw (live)
  function req() { if (!ui.raf) ui.raf = requestAnimationFrame(draw); }
  function draw() {
    if (ui.raf) { cancelAnimationFrame(ui.raf); ui.raf = 0; }
    var res = compute(); ui.res = res;
    rebuild();
    U.gauge([['Capacity', 'N<sub>u</sub> ' + fm(res.N, 0) + ' / N ' + fm(res.Nr, 0) + ' kN', res.u],
      ['Slenderness', 'l<sub>e</sub>/D ' + fm(res.sl.LeOverD, 1) + ' ≤ 12', res.uS],
      ['Links', 's ' + st.ls + ' ≤ 12Ø ' + fm(res.lsMax, 0) + ' · ' + st.hook + '°', Math.min(res.uL, 999)]]);
    formulas(res);
    var t = task();
    $('#dlH').textContent = t.name;
    $('#dlG').textContent = t.id === 't50' ? 'Change anything. Make the column crush, bow and lose its bars, then make it carry the load (' + t.ref + ').'
      : 'Given: ' + (t.n * t.gk) + ' kN dead, ' + (t.n * t.qk) + ' kN imposed, ' + t.b + ' × ' + t.h + ' mm, ' + (t.lo / 1000) + ' m, ' + (t.id === 't51' ? 'fcu 25 and fy 460 assumed (not given)' : 'fcu ' + t.fcu + ', beams 600 deep') + ' (' + t.ref + ').';
    var vals = { n: st.n, gk: st.gk + ' kN', qk: st.qk + ' kN', b: st.b, h: st.h, lo: fm(st.lo / 1000, 1) + ' m', cover: st.cover, nb: st.nb, dia: 'Y' + st.dia, ld: 'R' + st.ld, ls: st.ls };
    Object.keys(vals).forEach(function (k) { $('#dlv_' + k).textContent = vals[k]; });
    $('#dlF').value = st.fcu; $('#dlFr').value = st.frame; $('#dlTp').value = st.top; $('#dlBt').value = st.bot;
    var tb = table(st);
    [].forEach.call($('#dlTp').options, function (o) { o.disabled = +o.value > tb.length; });
    [].forEach.call($('#dlBt').options, function (o) { o.disabled = tb[st.top - 1][+o.value - 1] == null; });
    box.querySelectorAll('button[data-hook]').forEach(function (b) { var on = +b.dataset.hook === st.hook; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
    $('#dlN').innerHTML = 'N<sub>u</sub> = 1.4 × ' + fm(res.Gk, 0) + ' + 1.6 × ' + fm(res.Qk, 0) + ' = <b class="' + okc(res.ok.cap) + '" style="font-size:13px">' + fm(res.N, 0) + ' kN</b> <span style="font-size:12px;color:var(--muted)">capacity ' + fm(res.Nr, 0) + ' kN</span>';
    $('#dlS').innerHTML = 'β ' + fm(res.beta, 2) + ' · l<sub>e</sub> ' + fm(res.le / 1000, 2) + ' m · l<sub>e</sub>/D ' + fm(res.sl.LeOverD, 1) + '<b class="' + okc(res.ok.short) + '">' + (res.ok.short ? 'SHORT' : 'SLENDER') + '</b><span class="chip">β: BS 8110, to confirm</span>';
    var o = res.ok;
    var chips = [['Capacity', o.cap], ['Short', o.short], ['Steel 0.4 to 6 %', o.rmin && o.rmax], ['Link Ø', o.ld], ['Spacing', o.ls], ['135° hook', o.hook]]
      .map(function (c) { return '<span class="' + (c[1] ? 'ok' : '') + '">' + (c[1] ? '✓ ' : '✕ ') + c[0] + '</span>'; });
    if (st.task === 0) chips = chips.concat([['crush', 'Seen: crushing'], ['slender', 'Seen: slender bow'], ['links', 'Seen: bars buckle']].map(function (c) { return '<span class="' + (ui.seen[c[0]] ? 'ok' : 'n') + '">' + (ui.seen[c[0]] ? '✓ ' : '○ ') + c[1] + '</span>'; }));
    $('#dlC').innerHTML = chips.join('');
    refreshLocks();
    $('#dlK').classList.toggle('on', ui.cmp); $('#dlK').setAttribute('aria-pressed', ui.cmp);
    leg.classList.toggle('show', ui.eye);
    U.banner(null); if (U.why) U.why(null);
    U.dirty = true;
    U.emit('design', { pass: res.pass, task: st.task });
  }
  function refreshLocks() {
    var lock = task().lock;
    box.querySelectorAll('button,select').forEach(function (x) { x.disabled = ui.busy; });
    $('#dlK').disabled = ui.busy || !ui.tested; $('#dlK').title = ui.tested ? '' : 'Test your design first, then compare';
    LOCKED.forEach(function (k) {
      if (k.indexOf('dl') === 0) $('#' + k).disabled = lock || ui.busy;
      else box.querySelectorAll('button[data-k="' + k + '"]').forEach(function (b) { b.disabled = lock || ui.busy; });
    });
  }

  // the pulse at >= 90 % is animated by cues.js (no rebuild per frame)

  // ---- Test: 2 to 4 s of loading and the consequence at the exact place
  function cracks(A, y1, y2, zf, horiz) {
    U.into(A.fx, function () {
      for (var i = 0; i < 7; i++) {
        var x = (-0.4 + 0.8 * i / 6) * A.b, pts = [], y = y1 + (y2 - y1) * (0.15 + 0.7 * ((i * 37) % 10) / 10);
        for (var q = 0; q < 6; q++) pts.push(horiz ? V(x - 0.04 + q * 0.018, y + 0.012 * Math.sin(q * 3 + i), zf) : V(x + 0.014 * Math.sin(q * 2.1 + i), y - 0.16 + q * 0.065, zf));
        E.cn(pts, 0x1d1f22);
      }
    });
  }
  function spallChunks(A, zone) {
    var grp = new R.Group(); A.fx.add(grp);
    var mat = MAT.conc(0xc4c7cb, 1);
    for (var i = 0; i < 14; i++) { // cover pieces spall off the zone (drawn a little large so they read)
      var m = new R.Mesh(new R.DodecahedronGeometry(0.035 + 0.015 * (i % 3), 0), mat), side = i % 2 ? 1 : -1;
      m.position.set(side * (A.b / 2 + 0.01) * (i % 4 < 2 ? 1 : 0.4), zone[0] + (zone[1] - zone[0]) * ((i * 3) % 10) / 10, A.h / 2 * (i % 4 < 2 ? ((i * 5) % 7) / 7 : 1));
      m.userData.v = side * (0.6 + 0.2 * (i % 3)); m.castShadow = true; grp.add(m);
    }
    return grp;
  }
  function fall(ch, t, t0) {
    var tt = Math.max(0, t - t0);
    ch.children.forEach(function (c) { if (tt <= 0) return; c.position.x += c.userData.v * 0.01 * tt; c.position.z += 0.006 * tt; c.position.y = Math.max(0.03, c.position.y - 0.05 * tt * tt * 3); c.rotation.x += 0.07; c.rotation.z += 0.05; });
  }
  // after a failure: glow at the zone, a red ring round the bowed bars, and the opening direction of a 90° hook
  function hiOutline(m, col, px) { // swap the light outline for a bright one
    if (!m) return;
    if (m.userData.outline) { m.remove(m.userData.outline); delete m.userData.outline; }
    CUES.outline(m, { color: col, px: px }).visible = true;
  }
  function failCue(A, zone, hook) {
    var zc = (zone[0] + zone[1]) / 2, zf = A.h / 2;
    A.bars.forEach(function (m) { hiOutline(m, 0xFFB020, 3); }); // the bars that buckle
    if (hook && A.openMesh) hiOutline(A.openMesh, CUES.RED, 3.5); // the hook that opens
    CUES.glow(A.fx, V(0, zc, zf), CUES.RED, { px: 110, pulse: 0.12 });
    if (hook && A.hookLink) { // curved arrow at the hook corner: the tail swings out once the cover has gone
      var ax = A.b / 2 - A.s.cover / 1000, az = A.h / 2 - A.s.cover / 1000, y = A.hookLink.position.y, pts = [];
      for (var i = 0; i <= 10; i++) { var a = 1.35 * i / 10; pts.push(V(ax + 0.02 + 0.16 * Math.sin(a), y + 0.01, az - 0.16 * Math.cos(a) + 0.16)); }
      CUES.line(A.fx, pts, CUES.RED, { w: 5 });
      var tip = pts[10], dir = tip.clone().sub(pts[8]).normalize();
      CUES.chevron(A.fx, tip, dir, 0.05, CUES.RED, { w: 5 });
      CUES.glow(A.fx, V(ax, y, az), CUES.RED, { px: 70, pulse: 0.12 });
    }
    U.dirty = true;
  }
  // after a failure the camera moves in on the failing zone so the drawn failure reads (owner feedback 2)
  function closeZone(A, zone, ms) {
    var d = [0.36, 0.18, 0.92], zc = (zone[0] + zone[1]) / 2, dist = 5.6, tx = A.g.position.x + 0.45; // column left of centre: labels go right
    ui.zoomed = true;
    return U.fly([tx + d[0] * dist, zc + d[1] * dist, d[2] * dist], [tx, zc, 0], ms || 900, 30);
  }
  function callout(t, b, eq, tag) {
    // short banner (name, then the numbers) so it does not cover the step prompt; the cause goes in the why card
    var ci = t.indexOf(': ');
    U.banner({ t: ci > 0 ? t.slice(0, ci) : t, b: ci > 0 ? t.slice(ci + 2) : '' });
    if (U.why) U.why({ k: 'WHY IT HAPPENED', t: t, eq: eq, line: b, tag: tag });
  }
  async function test() {
    var tk0 = st.task; // delta review L4: a step change during Test must not count the result for the other step
    if (ui.busy) return;
    draw();
    var res = ui.res, A = COL, B = CMP, m = res.mode;
    ui.busy = true; U.locked = true; refreshLocks();
    try {
      U.banner(null); U.stopSay();
      ui.zoomed = false; frame(450); await U.wait(460);
      U.sfx('thud', 0.5);
      // 1. the load comes on: the arrow grows, the column shortens a little (drawn exaggerated)
      await U.anim(950, function (t) {
        U.clear(arrows); drawLoads(A, res, t, null); if (B) drawLoads(B, ui.cres, t, null);
        deform(A, Object.assign({}, REST, { sq: 0.004 * t * Math.min(1.3, res.N / res.Nr) }));
        if (B) deform(B, Object.assign({}, REST, { sq: 0.004 * t * ui.cres.N / ui.cres.Nr }));
        chevrons(A, res.N / res.Nr * t, t * 900); if (B) chevrons(B, ui.cres.N / ui.cres.Nr * t, t * 900);
      });
      var H = A.H, y0 = A.y0, mid = y0 + H / 2, hl = A.hookLink, zone = [A.links[A.links.indexOf(hl) - 1].position.y, hl.position.y];
      ui.failed = !!m && m !== 'slender' && m !== 'steel';
      var toEye = function () { if (ui.failed && !ui.eye) { ui.eye = true; setEye(A, true); if (B) setEye(B, true); leg.classList.add('show'); U.toolOn && U.toolOn('eye', true); detailLabels(A); } };
      if (m === 'crush') {
        // the section is too small for Nu: the concrete crushes in the upper half, the bars bow out between links
        var cz = [y0 + H * 0.56, y0 + H * 0.76], ch = spallChunks(A, cz);
        U.sfx('crack');
        await U.anim(1500, function (t) {
          var e = t * t * (3 - 2 * t);
          deform(A, Object.assign({}, REST, { zone: cz, bulge: 0.07 * e, spall: t > 0.25, sq: 0.004 + 0.02 * e }));
          fall(ch, t, 0.25);
        });
        toEye(); failCue(A, cz, false); await closeZone(A, cz);
        cracks(A, cz[0] - 0.15, cz[1] + 0.15, A.h / 2 + 0.004, false);
        U.impact([A.g.position.x, (cz[0] + cz[1]) / 2, A.h / 2], { sfx: 'fail', size: 0.5 });
        U.label('bw', [A.g.position.x + A.b / 2, (cz[0] + cz[1]) / 2, A.h / 2], 'crushes, bars bow out (exaggerated)', 'bad', 5);
        callout('Crushing: N<sub>u</sub> ' + fm(res.N, 0) + ' kN &gt; N ' + fm(res.Nr, 0) + ' kN', 'The section is overloaded. Add steel, enlarge the section or use a stronger concrete.', 'N = 0.35f<sub>cu</sub>A<sub>c</sub> + 0.7f<sub>y</sub>A<sub>sc</sub>', 'manual');
        ui.seen.crush = true; say('s4d02');
      } else if (m === 'buckle') {
        // slender: smooth bow at mid height (drawn exaggerated), then crushing inside the bow and cracks outside
        U.sfx('creak');
        await U.anim(1700, function (t) { var e = t * t * (3 - 2 * t); deform(A, Object.assign({}, REST, { bow: 0.03 + 0.16 * e, sq: 0.006 })); });
        toEye(); failCue(A, [mid - 0.25, mid + 0.25], false); await closeZone(A, [mid - 0.6, mid + 0.6]);
        U.into(A.fx, function () { for (var i = 0; i < 5; i++) { var y = mid - 0.3 + 0.15 * i; E.cn([V(-A.b / 2 + 0.16 + 0.012, y, A.h / 2 + 0.004), V(-A.b / 2 + 0.16 + A.b * 0.35, y + 0.01, A.h / 2 + 0.004)], 0x1d1f22); } });
        U.impact([A.g.position.x + 0.16, mid, A.h / 2], { sfx: 'fail', size: 0.5 });
        U.label('bw', [A.g.position.x + 0.19 + A.b / 2, mid, 0], 'bows at mid height (drawn exaggerated)', 'bad', 5);
        callout('Slender column buckles: l<sub>e</sub>/D ' + fm(res.sl.LeOverD, 1) + ' &gt; 12', 'It bows at mid height. N<sub>u</sub> ' + fm(res.N, 0) + ' kN &gt; C<sub>r</sub> × N = ' + fm(res.Nr, 0) + ' kN. Brace it, or make it shorter or thicker.', 'C<sub>r</sub> = 1.25 − l<sub>e</sub>/(48b) = ' + fm(res.sl.Cr, 3), 'manual');
        ui.seen.slender = true; say('s4d03');
      } else if (m === 'links') {
        // the links fail their rules: the bars buckle outward between two links, the cover spalls, a 90° hook opens
        var why = res.linkWhy, ch2 = spallChunks(A, zone), BOW = why === 'spacing' ? 0.075 + Math.min(0.03, (st.ls - res.lsMax) / 3000) : 0.07;
        U.sfx('crack');
        await U.anim(1600, function (t) {
          var e = t * t * (3 - 2 * t);
          deform(A, Object.assign({}, REST, { zone: zone, bulge: BOW * e, spall: t > 0.2, sq: 0.005,
            open: why === 'hook' ? 1.35 * e : 0, thin: why === 'thin' }));
          fall(ch2, t, 0.2);
        });
        await U.wait(700); toEye(); failCue(A, zone, why === 'hook'); await closeZone(A, zone);
        U.impact([A.g.position.x, (zone[0] + zone[1]) / 2, A.h / 2], { sfx: 'fail', size: 0.45 });
        U.label('bw', [A.g.position.x + A.b / 2 + 0.04, (zone[0] + zone[1]) / 2, A.h / 2], why === 'hook' ? '90° hook opens, bars buckle (drawn exaggerated)' : why === 'thin' ? 'thin link stretches, bars buckle (drawn exaggerated)' : 'bars buckle between links (drawn exaggerated)', 'bad', 5);
        if (why === 'hook') {
          callout('The 90° hooks open', 'With the cover gone, a 90° hook has nothing to hold it. The link opens and the bars buckle out.', 'hook 135°, tails 9Ø into the core', 'hook angle to confirm');
          say('s4d05');
        } else if (why === 'spacing') {
          callout('Links too far apart: s ' + st.ls + ' &gt; 12Ø = ' + fm(res.lsMax, 0) + ' mm', 'The bars buckle outward between the links and push the cover off.', 's ≤ 12 × smallest bar', 'BS 8110, to confirm');
          say('s4d04');
        } else {
          callout('Links too thin: R' + st.ld + ' &lt; Ø/4 = ' + fm(res.ldMin, 0) + ' mm', 'The thin link stretches, so the bars buckle outward.', 'Ø<sub>link</sub> ≥ max(6, Ø/4)', 'BS 8110, to confirm');
          say('s4d06');
        }
        ui.seen.links = true;
      } else if (m === 'steel') {
        callout('Steel outside the limits: ' + fm(res.rho, 2) + ' %', res.rho < 0.4 ? 'Too little steel: below 0.4 % of the section.' : 'Too much steel: above 6 %, the concrete cannot be placed and compacted around the bars.', '0.4 % ≤ 100A<sub>sc</sub>/(bh) ≤ 6 %', 'BS 8110, to confirm');
        say('s4d07');
      } else {
        if (m === 'slender') { // carries the load with the manual's Cr, but the manual designs short columns only
          await U.anim(900, function (t) { deform(A, Object.assign({}, REST, { bow: 0.05 * t, sq: 0.004 })); });
          U.label('bw', [A.g.position.x + 0.4, mid + 0.2, 0], 'slender: bows (drawn exaggerated)', 'm', 5);
          ui.seen.slender = true;
        }
        U.sfx('ok');
        U.banner({ ok: true, hold: true, t: m === 'slender' ? 'Carries the load, but slender' : 'Carries the load', b: 'capacity ' + fm(res.u, 0) + ' % · l<sub>e</sub>/D ' + fm(res.sl.LeOverD, 1) + (m === 'slender' ? ' · design it short: l<sub>e</sub>/D ≤ 12' : ' · ' + st.nb + 'Y' + st.dia + ' · R' + st.ld + ' @ ' + st.ls) });
        if (m !== 'slender') say('s4d08'); else say('s4d03');
        if (task().lock && !givenOk()) { // review L1 rule: a task counts only with its own loads and inputs
          var tg = task();
          U.banner({ ok: true, hold: true, t: 'Holds, but not for this task', b: '' }); // short: a wide banner covers the step prompt
          if (U.why) U.why({ k: 'WHY IT DOES NOT COUNT', t: 'Holds, but not for this task', line: 'This task counts only with its own values: ' + (tg.n * tg.gk) + ' kN dead and ' + (tg.n * tg.qk) + ' kN imposed, ' + tg.b + ' × ' + tg.h + ' mm, ' + (tg.lo / 1000) + ' m, fcu ' + tg.fcu + '.', tag: task().ref });
        }
      }
      if (B && m) U.label('cmC', [B.g.position.x, B.slabY + 0.3, 0.6], 'holds under the same load', 'ok', 6);
      draw0Chips();
      var seenAll = !!(ui.seen.crush && ui.seen.slender && ui.seen.links);
      if (st.task === tk0) ui.tested = true;
      if (st.task === tk0) U.emit('test', { pass: res.pass, task: st.task, mode: m, seenAll: seenAll, given: givenOk() });
      await U.wait(500);
    } finally {
      ui.busy = false; U.locked = false; refreshLocks();
    }
  }
  function draw0Chips() { // refresh the "seen" chips without rebuilding the failed column
    if (st.task !== 0) return;
    [].forEach.call($('#dlC').querySelectorAll('span'), function (sp) {
      var k = /crushing/.test(sp.textContent) ? 'crush' : /slender bow/.test(sp.textContent) ? 'slender' : /bars buckle/.test(sp.textContent) ? 'links' : null;
      if (k && ui.seen[k]) { sp.className = 'ok'; sp.textContent = sp.textContent.replace('○', '✓'); }
    });
  }
  // Review L1 (HIGH), applied to L2: a task counts only with the task's own loads and inputs (loads, section, height,
  // concrete, frame and end conditions); the step tests of Tasks 51 and 52 require it and Test says so when it holds.
  function givenOk() { var t = task(); return st.n * st.gk === t.n * t.gk && st.n * st.qk === t.n * t.qk && st.b === t.b && st.h === t.h && st.lo === t.lo && st.fcu === t.fcu && st.frame === t.frame && st.top === t.top && st.bot === t.bot; }
  var loadsOk = givenOk; window.__L2.loadsOk = loadsOk;

  // any change after a Test redraws the intact column at once (redesign)
  var req0 = req;
  req = function () { ui.failed = false; if (ui.zoomed && !ui.busy) { ui.zoomed = false; frame(700); } req0(); };

  // ---- undo/redo/reset/See inside on the design variables only
  U.history({ get: function () { return JSON.parse(JSON.stringify(st)); }, set: function (v) { if (ui.busy) return; var re = v.lo !== st.lo || v.n !== st.n; Object.assign(st, v); req(); if (re) frame(600); } }); // review L2 #4: no undo/redo during Test
  U.tool('reset', function () { if (ui.busy) return; U.mark(); preset(st.task); req(); frame(900); });
  U.tool('eye', eyeTool);
  function eyeTool() {
    if (ui.busy) return;
    ui.eye = !ui.eye; if (COL) setEye(COL, ui.eye); if (CMP) setEye(CMP, ui.eye);
    if (COL && ui.res) detailLabels(COL); leg.classList.toggle('show', ui.eye);
    if (U.toolOn) U.toolOn('eye', ui.eye); U.dirty = true; U.emit('eye');
  }
  // owner feedback 3: labels sit beside the column (never on it), with a leader line to the spot (cues.js layout)
  CUES.avoid(['#dl', '#ulg']);
  CUES.busy(function () { return ui.busy; });
  CUES.members(function () {
    return [COL, CMP].filter(Boolean).map(function (A) {
      var x = A.g.position.x, m = 0.2; // the column plus the cue marks on its faces
      return new R.Box3(V(x - A.b / 2 - m, A.y0, -A.h / 2), V(x + A.b / 2 + m, A.top, A.h / 2));
    });
  });
  // QA hooks for fix/qa/cue-gate.mjs (no effect on the trainee's flow)
  window.__cue = {
    util: function () { return ui.res ? ui.res.N / ui.res.Nr : null; },
    over: function () { if (ui.busy) return; preset(0); ui.cmp = false; ui.failed = false; if (ui.eye) eyeTool(); draw(); frame(0); return U.wait(1200); },
    eye: function (on) { if (!!on !== ui.eye) eyeTool(); return U.wait(300); },
    view: async function (n) { // the owner's shot: Task 50, 4Y16 (capacity holds), R6 links at 300 mm, 90° hooks, See inside, Test
      // owner shots: 'owner' = links fail (90° hooks, s 300); 'crush' = Task 50 preset (4Y12, crushing);
      // 'ok135' = Task 51 correct design (135° hooks, close links): it holds and the bars stay straight
      if (n !== 'owner' && n !== 'crush' && n !== 'ok135') return;
      if (n === 'ok135') preset(1, 'correct'); else preset(0);
      if (n === 'owner') Object.assign(st, { dia: 16, ld: 6, ls: 300, hook: 90 });
      ui.cmp = false; ui.eye = true; draw(); frame(0);
      if (COL) setEye(COL, true); detailLabels(COL); leg.classList.add('show');
      await U.wait(1200); await test();
    },
    test: function () { return test(); }
  };
  U.cfg.praise = LINES.s4d12;
  U.cfg.labelMax = 8;
  var tt = $('#ttlT') || $('#ttl b'); if (tt) tt.textContent = 'Column design';
  document.title = 'Column design · simulation';

  var steps = [
    { t: 'Task 50', prompt: 'Make the column crush, bow and lose its bars',
      enter: function () { preset(0); ui.seen = {}; ui.failed = false; ui.tested = false; ui.cmp = false; draw(); frame(900); say('s4d01'); },
      test: function (ev, d) { return ev === 'test' && d && d.task === 0 && d.seenAll; },
      after: function () { ui.done[0] = true; say('s4d09'); } },
    { t: 'Task 51', prompt: 'Design the bars and links for Task 51, then press Test',
      enter: function () { preset(1); ui.failed = false; ui.tested = false; ui.cmp = false; draw(); frame(900); say('s4d10'); },
      test: function (ev, d) { return ev === 'test' && d && d.task === 1 && d.pass && d.given && loadsOk(); },
      after: function () { ui.done[1] = true; } },
    { t: 'Task 52', prompt: 'Design the column for Task 52, then press Test',
      enter: function () { preset(2); ui.failed = false; ui.tested = false; ui.cmp = false; draw(); frame(900); say('s4d11'); },
      test: function (ev, d) { return ev === 'test' && d && d.task === 2 && d.pass && d.given && loadsOk(); },
      after: function () { ui.done[2] = true; } }
  ];
  draw();
  (async function () {
    await U.start();
    E.bridge.set('RC_S4_Explored', true);
    window.__live = true;
    var run = U.runSteps(steps);
    var fin = $('#bNext').onclick;
    $('#bNext').onclick = function () {
      var last = U.idx >= steps.length - 1;
      if (!last) { fin(); return; }
      if (!ui.done.every(Boolean)) { U.toast('First pass every design task: design it, then press Test'); return; }
      fin();
      U.stopSay(); setTimeout(function () { say('s4d12'); }, 50); // S4_DONE speaks the old line; new line s4d12
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
