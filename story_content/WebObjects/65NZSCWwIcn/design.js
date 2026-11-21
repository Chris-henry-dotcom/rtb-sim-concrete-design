/* BDCBD501 design lab L6: the whole building, from slab to soil (slot S6, web object 65NZSCWwIcn).
   Runs after lab.js (engine, exports window.__eng, fix/ENGINE-API.md) and calc.js (generated from
   fix/designlab/calc.mjs by fix/designlab/gen-calc.mjs). Every engineering number comes from window.RCcalc; this file
   adds only plan geometry (bay areas, which beams frame into which column) and the drawing.
   The trainee sizes a classroom block (storeys, bays, use, slab, beams, columns, footings, soil); the load path
   slab → beams → columns → footings → soil, every member's utilisation and the soil pressure update live. Test plays
   the loading and the consequence at the weakest link. RC_S6_Done is set only when every design task has passed. */
(function () {
  'use strict';
  var E = window.__eng, C = window.RCcalc;
  if (!E || !C) { console.error('design.js: lab.js or calc.js missing'); return; }
  var U = E.lab, S = E.sim, R = E.R, V = E.I, $ = E.He;

  // ---- fixed data. T = fix/manual/BDCBD501-trainee.txt line, D = fix/manual/BDCBD501-digest.md.
  var FCU = 30, FY = 460;          // fcu 30 (Task 43, T L3907), fy 460 (T L3762 worked tasks)
  var GAMMA = 24;                  // reinforced concrete 24 kN/m³ (T L3710)
  var FIN = 1.5;                   // finishes 1.5 kN/m² (Task 27, D §2.3)
  var HS = 3.0;                    // storey height 3.00 m (img39 building, D §7.0)
  var FD = 1.2;                    // founding depth 1.20 m (img39 building, D §7.0)
  var BW = 300;                    // beam width 300 mm (img39 building, D §7.0)
  var COV = { slab: 25, beam: 25, col: 25, foot: 50 }; // OQ-16: moderate exposure; 50 on blinding
  var BAR = { slab: 10, beam: 16, col: 16, foot: 16, link: 8 };
  var LINK_S = 200;                // beam links R8 at 200 (as drawn), closer when 0.75d < 200
  function linkS(d) { return Math.min(LINK_S, Math.floor(0.75 * d / 25) * 25); }
  var COL_BARS = 4;                // column 4Y16 (as drawn, the old S6 column)
  var COL_ENDS = 'fixedPinned';    // effective length factor 0.7 (img127, T L4396), to confirm
  var ROOF_QK = 1.5;               // roof imposed 1.5 kN/m² (BS 6399-1, typical value, to confirm)
  var SW_FOOT = 0.1;               // footing and soil 10 % (summative, T L5145)
  var GAMMA_M = 1.25;              // OQ-09
  // use classes: imposed load qk (the manual has no table, D §2.3; BS 6399-1 typical values, to confirm)
  var USES = [
    { id: 'house', name: 'Houses', qk: 1.5 },
    { id: 'office', name: 'Offices', qk: 2.5 },
    { id: 'class', name: 'Classrooms', qk: 3.0 },
    { id: 'hall', name: 'Assembly hall', qk: 5.0 }
  ];
  // soils: BS 8004:1986 Table 1 presumed allowable bearing, a mid value per type (OQ-11); 200 = the manual's tasks
  var SOIL_COL = { task: 0x9a7a52, denseGravel: 0x8f8a80, mediumSand: 0xc8a96a, stiffClay: 0x8a6a4e, firmClay: 0x7d6450, softClay: 0x5f5448 };
  var SOILS = Object.keys(SOIL_COL).map(function (id) {
    var r = C.soilBearing(id);
    return { id: id, name: id === 'task' ? 'Soil of the task' : r.type, qa: r.value_kPa, range: id === 'task' ? 'safe bearing 200 kN/m² (Task 55, T L4952)' : r.range + ' kN/m² (' + r.ref + ')', manual: id === 'task', col: SOIL_COL[id] };
  });
  var LIM = { n: [2, 4, 1], a: [3.0, 4.5, 0.25], b: [3.0, 4.5, 0.25], t: [100, 250, 25], D: [300, 600, 50], c: [200, 400, 25], B: [1.0, 2.6, 0.05], h: [300, 700, 50] };
  var TASKS = [
    { id: 't1', name: 'The classroom block', ref: 'the manual building, soil of Task 55',
      fix: { n: 3, use: 'class', soil: 'task', a: 4.0, b: 4.5 }, start: { t: 150, D: 500, c: 300, B: 1.5, h: 450 } },
    { id: 't2', name: 'Firm clay under the block', ref: 'soil investigation: firm clay, BS 8004 (typical value, to confirm)',
      fix: { n: 3, use: 'class', soil: 'firmClay', a: 4.0, b: 4.5 }, start: null },
    { id: 't3', name: 'A fourth storey', ref: 'the school adds a storey on the soil of Task 55',
      fix: { n: 4, use: 'class', soil: 'task', a: 4.0, b: 4.5 }, start: null }
  ];

  // ---- voice: new Imani lines (fix/voice/requests-L6.txt), clips in narr/. A key not in CLIPS runs caption + signer from text.
  var CLIPS = { s6d01: 1, s6d02: 1, s6d03: 1, s6d04: 1, s6d05: 1, s6d06: 1, s6d07: 1, s6d08: 1, s6d09: 1, s6d10: 1, s6d11: 1, s6d12: 1 };
  var LINES = {
    s6d01: 'This is the classroom block. The load flows from the slab to the beams, the columns, the footings and the soil. Change any size and watch every member respond. Then press Test.',
    s6d02: 'It stands. Every member carries its load, and the soil under every footing is safe.',
    s6d03: 'Task two. The soil investigation finds firm clay. Resize the members so that every check passes, then test it.',
    s6d04: 'Well designed. The block stands on firm clay, from the slab down to the soil.',
    s6d05: 'Task three. The school adds a fourth storey. Follow the extra load down to the soil and resize what fails.',
    s6d06: 'Four storeys stand. Every link of the load path passes.',
    s6d07: 'The soil gives way under the interior footing. It carries the most load, so it settles more than its neighbours. Make the footings wider.',
    s6d08: 'The footing fails around the column. Make it thicker.',
    s6d09: 'The interior column is overloaded in the ground storey, where the load of every floor adds up. Make the column bigger.',
    s6d10: 'The beam is too shallow for its span. Make it deeper, or make the span shorter.',
    s6d11: 'The slab is too thin for its span. It sags and cracks underneath. Make it thicker.',
    s6d13: 'The beam is too shallow for its span. The bays are fixed by the task, so make the beam deeper.', // replaces s6d10 (bays are task givens); clip requested in fix/voice/requests-CUE-S6.txt, caption and signer from text until then
    s6d12: 'Lab six is done. You followed the load path from the slab down to the soil.'
  };
  function say(key) {
    var text = LINES[key];
    if (CLIPS[key]) return U.say(key, text);
    if (U.sign && U.sign.cache) U.sign.cache[''] = null; // signer uses the caption text, no words.json fetch
    return U.say('', text);
  }

  // ---- state
  var st = { task: 0, n: 3, use: 'class', soil: 'task', a: 4.0, b: 4.5, t: 150, D: 500, c: 300, B: 1.5, h: 450, look: 'gov', eye: false, cmp: false };
  var ui = { raf: 0, busy: false, res: null, done: [false, false, false], prev: null, def: null, pulse: true };
  // a task step counts only with the task's own givens (storeys, use, soil, bays); the member sizes are the trainee's design
  function loadsOk() { var t = TASKS[st.task].fix; return st.n === t.n && st.use === t.use && st.soil === t.soil && Math.abs(st.a - t.a) < 1e-6 && Math.abs(st.b - t.b) < 1e-6; }
  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return list[0]; }
  function soilOf(s) { return byId(SOILS, (s || st).soil); }
  function useOf(s) { return byId(USES, (s || st).use); }

  // ---- calculation (plan geometry here; every design number from RCcalc)
  function num(v) { return typeof v === 'number' && isFinite(v) ? v : null; }
  function flexU(f) { if (!f || f.As_req_mm2 === null) return 2; if (num(f.utilisation) !== null) return f.utilisation; var K = num(f.K) !== null ? f.K : f.k; return K / C.FLEXURE_LIMITS.kPrime; }
  function failedChecks(r, ignore) { return (r.checks || []).filter(function (c) { return !c.ok && (ignore || []).indexOf(c.id) < 0; }); }
  function compute(s) {
    s = s || st;
    var so = soilOf(s), us = useOf(s), a = s.a, b = s.b, n = s.n;
    var gk = GAMMA * s.t / 1000 + FIN;
    var lv = { floor: { gk: gk, qk: us.qk }, roof: { gk: gk, qk: ROOF_QK } };
    var lx = Math.min(a, b), ly = Math.max(a, b);
    var trib = C.slabTributaryAreas({ Lx_m: lx, Ly_m: ly });
    var type = C.slabType({ Lx_m: a, Ly_m: b });
    // area of one panel going to one beam along x (span a) and one along z (span b)
    var Ax, Az;
    if (type.type === 'two-way') { Ax = a >= b ? trib.A1_trapezoid_m2 : trib.A2_triangle_m2; Az = b > a ? trib.A1_trapezoid_m2 : trib.A2_triangle_m2; if (a === b) { Ax = Az = trib.A2_triangle_m2; } }
    else { Ax = a > b ? trib.A_oneWay_m2 : 0; Az = b > a ? trib.A_oneWay_m2 : 0; }
    var selfW = BW / 1000 * s.D / 1000 * GAMMA; // b·D·γ (T L3707-L3710)
    var dB = s.D - COV.beam - BAR.link - BAR.beam / 2;
    var SV = linkS(dB); // links are the lab's detailing: spaced to the rule s ≤ 0.75d (review L6 #1)
    // beams: x or z, edge (one panel) or interior (two panels), floor or roof
    var beams = {};
    ['floor', 'roof'].forEach(function (L) {
      [['x', a, Ax], ['z', b, Az]].forEach(function (q) {
        [1, 2].forEach(function (np) {
          var id = q[0] + (np === 2 ? 'i' : 'e') + '_' + L, span = q[1], A = q[2] * np;
          var Gk = lv[L].gk * A / span + selfW, Qk = lv[L].qk * A / span;
          var r = C.beamDesign({ span_m: span, b_mm: BW, h_mm: s.D, d_mm: dB, Gk_kNm: Gk, Qk_kNm: Qk, fcu_MPa: FCU, fy_MPa: FY, barDia_mm: BAR.beam, linkDia_mm: BAR.link, linkSpacing_mm: SV });
          var uK = flexU(r.flexure), uV = r.shear ? num(r.shear.utilisation) || 0 : 0, uD = r.deflection ? num(r.deflection.utilisation) || 0 : 0;
          var fails = failedChecks(r, ['zmax']);
          var u = Math.max(uK, uV, uD, fails.length ? 1.001 + 1e-4 * r.w_kNm * span / 1000 : 0);
          var mode = uV >= uK && uV >= uD && uV > 1 ? 'shear' : uK >= uD && uK > 1 ? 'crush' : uD > 1 ? 'sag' : fails.length ? (fails[0].id === 'vmax' || /link|sv|vcap/.test(fails[0].id) ? 'shear' : 'sag') : null;
          beams[id] = { id: id, dir: q[0], np: np, level: L, span: span, A: A, Gk: Gk, Qk: Qk, G: Gk * span, Q: Qk * span, W: r.w_kNm * span, r: r, u: u, uK: uK, uV: uV, uD: uD, ok: !fails.length, mode: mode };
        });
      });
    });
    // slab panel (floor governs: same thickness, larger imposed load)
    var slab = C.slabDesign({ gk_kNm2: gk, qk_kNm2: us.qk, span_m: lx, Ly_m: ly, t_mm: s.t, cover_mm: COV.slab, barDia_mm: BAR.slab, fcu_MPa: FCU, fy_MPa: FY, ultimate: 'bs' });
    var sK = flexU(slab.flexure), sD = slab.deflection ? num(slab.deflection.utilisation) || 0 : 0, sF = failedChecks(slab, ['zmax']);
    var slabU = Math.max(sK, sD, sF.length ? 1.001 : 0);
    var nF = slab.wu_kNm2;
    var slabRes = { r: slab, u: slabU, uK: sK, uD: sD, ok: !sF.length, n: nF, W: nF * a * b, mode: sK > 1 && sK >= sD ? 'crush' : 'sag' };
    // columns: half of each framing beam (T L2744-L2749) per level, self-weight per storey, accumulated downwards
    var colSW = s.c / 1000 * s.c / 1000 * HS * GAMMA;
    var Asc = COL_BARS * C.barArea_mm2(BAR.col), Ag = s.c * s.c;
    var cap = C.columnSymmetricBeams({ fcu_MPa: FCU, Ag_mm2: Ag, fy_MPa: FY, Asc_mm2: Asc });
    var slen = C.columnSlenderness({ L_mm: HS * 1000, ends: COL_ENDS, b_mm: s.c, h_mm: s.c });
    var cols = [];
    for (var j = 0; j <= 2; j++) for (var i = 0; i <= 3; i++) {
      var fr = framing(i, j), per = [], G = 0, Q = 0;
      for (var k = n; k >= 1; k--) {
        var L = k === n ? 'roof' : 'floor';
        var gl = fr.map(function (f) { return beams[f + '_' + L].G; }), ql = fr.map(function (f) { return beams[f + '_' + L].Q; });
        var cg = C.columnLoadFromBeams({ beamLoads_kN: gl }), cq = C.columnLoadFromBeams({ beamLoads_kN: ql });
        G += cg.N_kN + colSW; Q += cq.N_kN;
        per.push({ k: k, level: L, Gl: cg.N_kN, Ql: cq.N_kN, G: G, Q: Q, Pu: C.columnUltimateLoad_kN({ Gk_kN: G, Qk_kN: Q }) });
      }
      var Pu = per[per.length - 1].Pu;
      var uN = Pu / cap.Ncap_kN, uS = slen.short ? 0 : slen.LeOverD / 12;
      var f = C.padFootingDesign({ Gk_kN: G, Qk_kN: Q, selfWeightFraction: SW_FOOT, includeSelfWeight: true, qa_kPa: so.qa, colB_mm: s.c, colC_mm: s.c,
        h_mm: s.h, cover_mm: COV.foot, barDia_mm: BAR.foot, fcu_MPa: FCU, fy_MPa: FY, gammaM: GAMMA_M, B_m: s.B });
      var vc = f.vc ? (num(f.vc.vc_MPa) !== null ? f.vc.vc_MPa : num(f.vc)) : null;
      var tbl = f.spacing && f.spacing.table;
      var fK = flexU(f.flexure), fP = Math.max(f.v0_MPa / f.v0Limit_MPa, vc ? f.v1_MPa / vc : 2);
      var fFail = failedChecks(f, ['zmax', 'bearing']);
      var fU = Math.max(fK, fP, tbl ? 0 : 1.001, fFail.length ? 1.001 : 0);
      cols.push({ i: i, j: j, name: 'ABC'[j] + (i + 1), kind: fr.length === 2 ? 'corner' : fr.length === 3 ? 'edge' : 'interior', fr: fr, per: per, G: G, Q: Q, Pu: Pu,
        u: Math.max(uN, uS), uN: uN, uS: uS, ok: uN <= 1 && slen.short, mode: !slen.short && uS >= uN ? 'buckle' : 'crush',
        f: f, vc: vc, tbl: tbl, fU: fU, fK: fK, fP: fP, fOk: fU <= 1 && !fFail.length, fMode: fP >= fK ? 'punch' : 'bend',
        q: f.qreal_kPa, sU: f.qreal_kPa / so.qa, sOk: f.qreal_kPa <= so.qa + 1e-9 });
    }
    function worst(list, key) { return list.reduce(function (m, x) { return x[key] > m[key] ? x : m; }, list[0]); }
    var bl = Object.keys(beams).map(function (k2) { return beams[k2]; });
    var wb = worst(bl, 'u'), wc = worst(cols, 'u'), wf = worst(cols, 'fU'), ws = worst(cols, 'sU');
    var corner = cols[0];
    var lvls = [
      { id: 'slab', name: 'Slab', u: slabU, ok: slabRes.ok, kN: slabRes.W, val: Math.round(slabRes.W) + ' kN', sub: 'panel, n ' + nF.toFixed(2) + ' kN/m²' },
      { id: 'beam', name: 'Beams', u: wb.u, ok: wb.ok, kN: wb.W, val: Math.round(wb.W) + ' kN', sub: (wb.np === 2 ? 'inner' : 'edge') + ' beam, ' + wb.span.toFixed(2) + ' m' },
      { id: 'col', name: 'Column', u: wc.u, ok: wc.ok, kN: wc.Pu, val: Math.round(wc.Pu) + ' kN', sub: wc.name + ' ' + wc.kind + ' · ' + corner.name + ' ' + Math.round(corner.Pu) + ' kN' },
      { id: 'foot', name: 'Footing', u: wf.fU, ok: wf.fOk, kN: wf.f.N_kN, val: Math.round(wf.f.N_kN) + ' kN', sub: wf.name + ' · B ' + s.B.toFixed(2) + ' m' },
      { id: 'soil', name: 'Soil', u: ws.sU, ok: ws.sOk, kN: ws.q, val: Math.round(ws.q) + ' kN/m²', sub: 'safe ' + so.qa + ' kN/m² · ' + ws.name }
    ];
    var gov = worst(lvls, 'u');
    var pass = lvls.every(function (l) { return l.ok && l.u <= 1 + 1e-9; });
    return { s: JSON.parse(JSON.stringify(s)), gk: gk, nF: nF, lx: lx, ly: ly, trib: trib, type: type, Ax: Ax, Az: Az, beams: beams, slab: slabRes, cols: cols,
      wb: wb, wc: wc, wf: wf, ws: ws, lvls: lvls, gov: gov, pass: pass, qa: so.qa, cap: cap, slen: slen, colSW: colSW, Asc: Asc, focus: focusCol(cols, gov, wc, wf, ws) };
  }
  function framing(i, j) {
    var f = [];
    if (i > 0) f.push(j === 1 ? 'xi' : 'xe');
    if (i < 3) f.push(j === 1 ? 'xi' : 'xe');
    if (j > 0) f.push(i === 0 || i === 3 ? 'ze' : 'zi');
    if (j < 2) f.push(i === 0 || i === 3 ? 'ze' : 'zi');
    return f;
  }
  function beamName(bm) { return (bm.np === 2 ? 'interior' : 'edge') + ' beam, span ' + bm.span.toFixed(2) + ' m'; }
  function focusCol(cols, gov, wc, wf, ws) { return gov.id === 'col' ? wc : gov.id === 'foot' ? wf : gov.id === 'soil' ? ws : cols[5]; }
  window.__L6 = { st: st, ui: ui, compute: compute, tasks: TASKS, soils: SOILS, uses: USES, fixed: { FCU: FCU, FY: FY, GAMMA: GAMMA, FIN: FIN, HS: HS, BW: BW, COV: COV, BAR: BAR, LINK_S: LINK_S, COL_BARS: COL_BARS, COL_ENDS: COL_ENDS, ROOF_QK: ROOF_QK, SW_FOOT: SW_FOOT, GAMMA_M: GAMMA_M } };

  // ---- formatting
  function fm(v, dp) { return v === null || v === undefined || isNaN(v) ? '·' : (+v).toFixed(dp); }
  function pc(u) { return Math.round(100 * u); }
  var DP = { 'kN': 1, 'kN/m²': 2, 'm²': 2, 'm': 2, 'kNm': 1, 'kNm/m': 2, 'kN/m': 2, 'mm': 0, 'mm²': 0, 'mm²/m': 0, 'mm²/mm': 3, 'N/mm²': 3, '': 3 };
  function fv(stp) { return fm(stp.value, DP[stp.unit] === undefined ? 2 : DP[stp.unit]) + (stp.unit ? ' ' + stp.unit : ''); }
  function chip(c) { return c ? ' <span class="l6c' + (c === 'manual' ? '' : c === 'manual note' ? ' n' : ' t') + '">' + c + '</span>' : ''; }

  // ---- panel
  var css = document.createElement('style');
  css.textContent =
    '#banner{top:122px;max-width:640px;box-sizing:border-box}#banner b{white-space:nowrap}' + // below the task prompt, clear of the design panel
    'body.l6fx #banner{left:850px;max-width:620px}' + // the open Formulas card ends at x 504: the banner moves right of it (L6 open point)
    '#dl{position:absolute;right:16px;top:78px;width:384px;max-height:508px;overflow:auto;background:rgba(255,255,255,.96);border-radius:16px;padding:9px 14px 11px;box-shadow:0 8px 24px rgba(15,46,90,.2);z-index:8;border-top:6px solid var(--amb);box-sizing:border-box}' +
    'body.pre #dl,body.pre #lp{visibility:hidden}#dl .k{font-size:11px;letter-spacing:.14em;font-weight:800;color:#b97800}' +
    '#dl h4{margin:1px 0 1px;font-size:17px;color:var(--navy)}#dl .gv{margin:0 0 4px;font-size:11.5px;line-height:1.3;color:var(--muted)}' +
    '#dl .sec{margin:4px 0 1px;font-size:11px;font-weight:800;letter-spacing:.12em;color:var(--navy);opacity:.8}' +
    '#dl .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px 8px}#dl .g2{display:grid;grid-template-columns:1fr 1fr;gap:3px 8px}' +
    '#dl .stp{display:flex;flex-direction:column;font-size:11px;color:var(--muted);font-weight:700;white-space:nowrap}' +
    '#dl .stp div{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);border-radius:9px;height:25px;margin-top:1px}' +
    '#dl .stp button{width:24px;height:23px;border:0;background:#eef3f9;color:var(--navy);font-size:16px;font-weight:800;cursor:pointer;border-radius:8px}' +
    '#dl button:focus-visible,#dl select:focus-visible{outline:3px solid var(--blue);outline-offset:1px}' +
    '#dl .stp b{font-size:13px;color:var(--ink);white-space:nowrap}' +
    '#dl select{width:100%;height:26px;border:1px solid var(--line);border-radius:9px;font:inherit;font-size:12.5px;color:var(--ink);background:#fff;margin-top:1px}' +
    '#dl .note{font-size:11px;color:#b45309;margin-top:1px;line-height:1.3}' +
    '#dl .row{display:flex;gap:8px;margin-top:6px}#dl #dlT{flex:1;height:34px;border:0;border-radius:12px;background:var(--navy);color:#fff;font:inherit;font-size:15px;font-weight:800;cursor:pointer;letter-spacing:.02em}' +
    '#dl #dlK{height:34px;padding:0 12px;border:2px solid var(--navy);border-radius:12px;background:#fff;color:var(--navy);font:inherit;font-size:13px;font-weight:800;cursor:pointer}#dl #dlK[aria-pressed=true]{background:#e6eef8}' +
    '#dl button:disabled,#dl select:disabled{opacity:.5;cursor:default}' +
    '#lp{position:absolute;left:388px;width:780px;bottom:108px;z-index:7;display:flex;align-items:stretch;gap:0;background:rgba(255,255,255,.95);border-radius:14px;box-shadow:0 6px 18px rgba(15,46,90,.18);padding:6px 8px;box-sizing:border-box;font-family:Inter,Arial,sans-serif;pointer-events:none}' +
    '#lp .c{flex:1;min-width:0;padding:2px 8px;border-radius:10px;border:2px solid transparent;position:relative}#lp .c.gov{border-color:currentColor}' +
    '#lp .ar{width:14px;align-self:center;color:#94a3b8;font-weight:800;font-size:15px;text-align:center}' +
    '#lp .t{font-size:10.5px;letter-spacing:.12em;font-weight:800;color:var(--navy)}#lp .v{font-size:16px;font-weight:800;color:var(--ink);white-space:nowrap}' +
    '#lp .u{float:right;font-size:13px;font-weight:800}#lp .bar{height:5px;border-radius:3px;background:#e5eaf0;margin-top:2px;overflow:hidden}#lp .bar i{display:block;height:100%}' +
    '#lp .s{font-size:10px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px}#lp .p{font-size:10.5px;color:#475569;white-space:nowrap;margin-top:1px}' +
    '.l6c{display:inline-block;font-size:9.5px;font-weight:700;border-radius:6px;padding:0 5px;margin-left:3px;background:#e0ecff;color:#1e4fa3;vertical-align:1px;white-space:nowrap}.l6c.n{background:#fff1d6;color:#9a5b00}.l6c.t{background:#f1e8ff;color:#6b35b8}';
  document.head.appendChild(css);
  function stepper(id, label) {
    return '<label class="stp"><span>' + label + '</span><div><button type="button" data-k="' + id + '" data-d="-1" aria-label="' + label + ' less">−</button><b id="dlv_' + id + '"></b><button type="button" data-k="' + id + '" data-d="1" aria-label="' + label + ' more">+</button></div></label>';
  }
  // short names: the select sits in a one-third column of the panel (level 1 members, B2 interior, A1 corner)
  var LOOKS = [['gov', 'Governing'], ['slab', 'Slab panel'], ['beamI', 'Inner beam'], ['beamE', 'Edge beam'],
    ['colI', 'Column B2'], ['colC', 'Column A1'], ['footI', 'Footing B2'], ['footC', 'Footing A1']];
  var box = document.createElement('div');
  box.id = 'dl'; box.setAttribute('role', 'group'); box.setAttribute('aria-labelledby', 'dlH');
  box.innerHTML =
    '<div class="k">DESIGN TASK</div><h4 id="dlH"></h4><p class="gv" id="dlG"></p>' +
    '<div class="sec">Building</div>' +
    '<div class="g3">' + stepper('n', 'Storeys') + stepper('a', 'Bay along x') + stepper('b', 'Bay along z') + '</div>' +
    '<select id="dlU" aria-label="Use of the floors">' + USES.map(function (u) { return '<option value="' + u.id + '">' + u.name + ', imposed ' + u.qk.toFixed(1) + ' kN/m²</option>'; }).join('') + '</select>' +
    '<div class="sec">Members</div>' +
    '<div class="g3">' + stepper('t', 'Slab t') + stepper('D', 'Beam depth') + stepper('c', 'Column') + '</div>' +
    '<div class="g3">' + stepper('B', 'Footing B') + stepper('h', 'Footing h') + '<label class="stp"><span>See inside</span><select id="dlI" aria-label="See inside which member" style="height:27px;margin-top:1px">' +
    LOOKS.map(function (l) { return '<option value="' + l[0] + '">' + l[1] + '</option>'; }).join('') + '</select></label></div>' +
    '<div class="sec">Soil under the footings</div><select id="dlS" aria-label="Soil type">' +
    SOILS.map(function (s) { return '<option value="' + s.id + '">' + s.name + ', ' + s.qa + ' kN/m²</option>'; }).join('') + '</select><div class="note" id="dlSn"></div>' +
    '<div class="row"><button type="button" id="dlT">Test: load the building</button><button type="button" id="dlK" aria-pressed="false">Compare</button></div>';
  $('#stage').appendChild(box);
  var strip = document.createElement('div'); strip.id = 'lp'; strip.setAttribute('aria-live', 'polite'); strip.setAttribute('aria-label', 'Load path summary');
  $('#stage').appendChild(strip);

  var safe0 = U.safe;
  U.safe = function () { var s = safe0(); s.x1 = Math.min(s.x1, 1186); s.y1 = Math.min(s.y1, 790); if (U.whyOn && !U.fxOn) s.x0 = 86; return s; }; // keep the building framed if a why card opens
  var showFx0 = U.showFx; U.showFx = function (on) { document.body.classList.toggle('l6fx', !!on); return showFx0.apply(U, arguments); };

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function bump(key, dir) {
    if (ui.busy) return;
    U.mark();
    var L = LIM[key];
    st[key] = clamp(Math.round((st[key] + dir * L[2]) / L[2]) * L[2], L[0], L[1]);
    st[key] = Math.round(st[key] * 1000) / 1000;
    req(true);
  }
  box.addEventListener('click', function (e) { var b = e.target.closest('button[data-k]'); if (b) bump(b.dataset.k, +b.dataset.d); });
  $('#dlS').addEventListener('change', function () { U.mark(); st.soil = this.value; req(); });
  $('#dlU').addEventListener('change', function () { U.mark(); st.use = this.value; req(); });
  $('#dlI').addEventListener('change', function () { st.look = this.value; st.eye = true; U.toolOn('eye', true); req(); U.shot(lookShot(), 900); U.emit('eye'); });
  $('#dlT').addEventListener('click', function () { test(); });
  $('#dlK').addEventListener('click', function () { st.cmp = !st.cmp; this.setAttribute('aria-pressed', String(st.cmp)); req(); U.emit('compare'); });

  // ---- the old classroom scene: keep the soil section, hide the old frame, loads and yard
  var Gs = S.groups;
  ['frame', 'gslab', 'loads', 'yard', 'held', 'cracks', 'works'].forEach(function (k) { if (Gs[k]) Gs[k].visible = false; });
  if (Gs.lens) Gs.lens.visible = false;
  var soilBoxes = Gs.soil ? Gs.soil.children.filter(function (m) { return m.isMesh && m.geometry && m.geometry.type === 'BoxGeometry'; }) : [];
  U.drag(null);

  // ---- 3D: the building, built from the inputs
  var CX = 6, CZ = 2.1; // centre of the site hole (lab.js cfg.hole)
  var bld = new R.Group(), ins = new R.Group(), fx3 = new R.Group(), ghost = new R.Group(), pul = new R.Group(), cue = new R.Group();
  [bld, ins, fx3, ghost, pul, cue].forEach(function (g) { U.G.add(g); });
  var M = {
    conc: E.de(12896718), foot: E.de(11120048), blind: E.de(9277845), steel: E.de(0x2b3542, { metal: 0.3 }), link: E.de(0x3f4c5c, { metal: 0.3 }), // made transparent (opacity 1) below: drawn after the tint
    crack: new R.MeshBasicMaterial({ color: 0x14100e }), red: new R.MeshBasicMaterial({ color: 0xDC2626, toneMapped: false })
  };
  M.steel.transparent = M.link.transparent = true;
  // See inside (owner feedback 2): every member's concrete nearly clear and neutral (cues.js xray), the looked-at member
  // outlined, its bars and links bold
  function concMeshes() { return defs.filter(function (m) { return !!m.userData.part; }); }
  function gx(i, s) { s = s || st; return CX - 1.5 * s.a + i * s.a; }
  function gz(j, s) { s = s || st; return CZ - s.b + j * s.b; }
  function lvY(k) { return k * HS; }
  var defs = []; // deformable meshes: {m, b0}
  function addBox(w, h, d, mat, x, y, z, seg, tag) {
    var g = new R.BoxGeometry(w, h, d, seg ? Math.max(1, Math.round(w / 0.3)) : 1, seg && seg.y ? seg.y : 1, seg ? Math.max(1, Math.round(d / 0.3)) : 1);
    var m = new R.Mesh(g, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true;
    m.userData = Object.assign({ b0: Float32Array.from(g.attributes.position.array) }, tag || {});
    bld.add(m); defs.push(m); return m;
  }
  function build(res) {
    U.clear(bld); defs = [];
    var s = st, n = s.n, B = s.B, h = s.h / 1000, c = s.c / 1000, D = s.D / 1000, t = s.t / 1000, bw = BW / 1000;
    var fTop = -FD + h;
    for (var j = 0; j <= 2; j++) for (var i = 0; i <= 3; i++) {
      var x = gx(i), z = gz(j), nm = 'ABC'[j] + (i + 1);
      addBox(B + 0.2, 0.075, B + 0.2, M.blind, x, -FD - 0.0375, z, null, { col: [i, j], tip: 'Blinding' });
      addBox(B, h, B, M.foot, x, -FD + h / 2, z, null, { col: [i, j], part: 'foot', tip: 'Footing ' + nm });
      // ground storey from the footing to level 1, then one piece per storey
      addBox(c, lvY(1) - fTop, c, M.conc, x, (lvY(1) + fTop) / 2, z, { y: 8 }, { col: [i, j], part: 'col', k: 1, tip: 'Column ' + nm });
      for (var k = 2; k <= n; k++) addBox(c, HS, c, M.conc, x, lvY(k) - HS / 2, z, { y: 4 }, { col: [i, j], part: 'col', k: k, tip: 'Column ' + nm });
    }
    for (var k2 = 1; k2 <= n; k2++) {
      var y = lvY(k2), L = k2 === n ? 'roof' : 'floor';
      for (var jj = 0; jj <= 2; jj++) for (var ii = 0; ii < 3; ii++) addBox(s.a - c, D, bw, M.conc, gx(ii) + s.a / 2, y - D / 2, gz(jj), { y: 2 }, { part: 'beam', dir: 'x', k: k2, at: [ii, jj], id: 'x' + (jj === 1 ? 'i' : 'e') + '_' + L, tip: (jj === 1 ? 'Interior' : 'Edge') + ' beam' });
      for (var i3 = 0; i3 <= 3; i3++) for (var j3 = 0; j3 < 2; j3++) addBox(bw, D, s.b - c, M.conc, gx(i3), y - D / 2, gz(j3) + s.b / 2, { y: 2 }, { part: 'beam', dir: 'z', k: k2, at: [i3, j3], id: 'z' + (i3 === 0 || i3 === 3 ? 'e' : 'i') + '_' + L, tip: (i3 === 0 || i3 === 3 ? 'Edge' : 'Interior') + ' beam' });
      for (var i4 = 0; i4 < 3; i4++) for (var j4 = 0; j4 < 2; j4++) addBox(s.a + (i4 === 0 || i4 === 2 ? 0.15 : 0) , t, s.b + 0.15, M.conc, gx(i4) + s.a / 2 + (i4 === 0 ? -0.075 : i4 === 2 ? 0.075 : 0), y - t / 2, gz(j4) + s.b / 2 + (j4 === 0 ? -0.075 : 0.075), {}, { part: 'slab', k: k2, at: [i4, j4], tip: k2 === n ? 'Roof slab' : 'Floor slab' });
    }
    drawTrib(res);
    // soil colour in the section
    var so = soilOf();
    if (soilBoxes[1]) { soilBoxes[1].material.color.setHex(so.col); soilBoxes[1].material.opacity = 0.22; }
    applyDef();
  }
  // tributary areas on the roof slab (T L2711-L2722, figures 39 and 40)
  function drawTrib(res) {
    var y = lvY(st.n) + 0.012, a = st.a, b = st.b, two = res.type.type === 'two-way';
    var mLong = new R.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.32, depthWrite: false, side: R.DoubleSide, toneMapped: false });
    var mShort = new R.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.38, depthWrite: false, side: R.DoubleSide, toneMapped: false });
    function poly(pts, mat) {
      var sh = new R.Shape(); sh.moveTo(pts[0][0], -pts[0][1]); for (var q = 1; q < pts.length; q++) sh.lineTo(pts[q][0], -pts[q][1]);
      var g = new R.ShapeGeometry(sh); g.rotateX(-Math.PI / 2);
      var m = new R.Mesh(g, mat); m.position.y = y; m.renderOrder = 6; m.userData.trib = true; bld.add(m);
      var ln = pts.concat([pts[0]]).map(function (p) { return V(p[0], y + 0.004, p[1]); });
      U.into(bld, function () { E.cn(ln, 0xffffff, 1); });
    }
    for (var i = 0; i < 3; i++) for (var j = 0; j < 2; j++) {
      var x0 = gx(i), x1 = x0 + a, z0 = gz(j), z1 = z0 + b, xm = (x0 + x1) / 2, zm = (z0 + z1) / 2;
      if (!two) {
        if (a > b) { poly([[x0, z0], [x1, z0], [x1, zm], [x0, zm]], mLong); poly([[x0, zm], [x1, zm], [x1, z1], [x0, z1]], mLong); }
        else { poly([[x0, z0], [xm, z0], [xm, z1], [x0, z1]], mLong); poly([[xm, z0], [x1, z0], [x1, z1], [xm, z1]], mLong); }
        continue;
      }
      var l2 = Math.min(a, b) / 2;
      if (a >= b) { // x beams long: trapezoids on z0/z1 edges, triangles on x0/x1 edges
        var p = [x0 + l2, zm], q2 = [x1 - l2, zm];
        poly([[x0, z0], [x1, z0], q2, p], a === b ? mShort : mLong); poly([[x0, z1], [x1, z1], q2, p], a === b ? mShort : mLong);
        poly([[x0, z0], [x0, z1], p], mShort); poly([[x1, z0], [x1, z1], q2], mShort);
      } else {
        var p2 = [xm, z0 + l2], q3 = [xm, z1 - l2];
        poly([[x0, z0], [x0, z1], q3, p2], mLong); poly([[x1, z0], [x1, z1], q3, p2], mLong);
        poly([[x0, z0], [x1, z0], p2], mShort); poly([[x0, z1], [x1, z1], q3], mShort);
      }
    }
  }
  // deformation: settlement around a footing, sag of a beam or slab, bow of a column (all shown exaggerated, OQ-21)
  function hat(x, z, i, j) { return Math.max(0, 1 - Math.abs(x - gx(i)) / st.a) * Math.max(0, 1 - Math.abs(z - gz(j)) / st.b); }
  function applyDef() {
    var d = ui.def;
    defs.forEach(function (m) {
      var pos = m.geometry.attributes.position, b0 = m.userData.b0, p = m.position, ud = m.userData, ch = false;
      for (var v = 0; v < pos.count; v++) {
        var x = b0[3 * v], y = b0[3 * v + 1], z = b0[3 * v + 2], dx = 0, dy = 0;
        if (d) {
          var wx = p.x + x, wz = p.z + z;
          if (d.type === 'settle') { var cc = ud.col; dy -= d.s * (cc ? (cc[0] === d.i && cc[1] === d.j ? 1 : 0) : hat(wx, wz, d.i, d.j)); }
          if (d.type === 'sag' && d.m === m) { var L = ud.dir === 'x' ? m.geometry.parameters.width : m.geometry.parameters.depth; var u = ((ud.dir === 'x' ? x : z) / L) + 0.5; dy -= d.s * Math.sin(Math.PI * clamp(u, 0, 1)); }
          if (d.type === 'sagSlab' && d.m === m) { var pw = m.geometry.parameters; dy -= d.s * Math.cos(Math.PI * x / pw.width) * Math.cos(Math.PI * z / pw.depth); }
          if (d.type === 'bow' && d.m === m) { var ph = m.geometry.parameters.height; dx += d.s * Math.cos(Math.PI * y / ph); }
          if (d.type === 'punch' && ud.col && ud.col[0] === d.i && ud.col[1] === d.j && ud.part === 'col') dy -= d.s;
        }
        if (dx || dy || pos.getY(v) !== y || pos.getX(v) !== x) { pos.setXYZ(v, x + dx, y + dy, z); ch = true; }
      }
      if (ch) { pos.needsUpdate = true; m.geometry.computeBoundingSphere(); m.geometry.boundingBox = null; }
    });
    U.dirty = true;
  }
  function findMesh(f) { for (var q = 0; q < defs.length; q++) if (f(defs[q].userData, defs[q])) return defs[q]; return null; }

  // ---- load path pulses: slab → beams → focus column → footing → soil, accumulating down the column
  var PN = 160, pGeo = new R.SphereGeometry(0.075, 10, 8), pMat = new R.MeshBasicMaterial({ color: 0xffffff, toneMapped: false, transparent: true, opacity: 0.95, depthTest: false });
  var pMesh = new R.InstancedMesh(pGeo, pMat, PN); pMesh.renderOrder = 996; pMesh.frustumCulled = false; pMesh.count = 0; pul.add(pMesh);
  var paths = [], ptime = 0, plast = 0, pspeed = 1;
  function ucol(u) { return new R.Color(E.cc(100 * u)); }
  function buildPaths(res) {
    paths = [];
    var fc = res.focus, i = fc.i, j = fc.j, xc = gx(i), zc = gz(j), D = st.D / 1000, B = st.B, fTop = -FD + st.h / 1000;
    var dirs = [];
    if (i > 0) dirs.push([-1, 0]); if (i < 3) dirs.push([1, 0]); if (j > 0) dirs.push([0, -1]); if (j < 2) dirs.push([0, 1]);
    var soilPts = [[0.35, 0.35], [-0.35, 0.35], [0.35, -0.35], [-0.35, -0.35]];
    var sp = 0;
    for (var k = 1; k <= st.n; k++) {
      var y = lvY(k), L = k === st.n ? 'roof' : 'floor';
      dirs.forEach(function (d) {
        var span = d[0] ? st.a : st.b, other = d[0] ? st.b : st.a;
        var bid = (d[0] ? 'x' : 'z') + ((d[0] ? j === 1 : (i === 1 || i === 2)) ? 'i' : 'e') + '_' + L;
        var mx = xc + d[0] * span / 2, mz = zc + d[1] * span / 2;
        [-1, 1].forEach(function (sd) {
          var px = mx + (d[1] ? sd * other / 2 : 0), pz = mz + (d[0] ? sd * other / 2 : 0);
          if (px < gx(0) - 0.01 || px > gx(3) + 0.01 || pz < gz(0) - 0.01 || pz > gz(2) + 0.01) return;
          var s2 = soilPts[sp++ % 4];
          var pts = [[px, y + 0.03, pz, 'slab'], [mx, y - D / 2, mz, 'beam:' + bid], [xc, y - D / 2, zc, 'col'], [xc, fTop, zc, 'foot'], [xc, -FD, zc, 'soil'], [xc + s2[0] * B * 1.4, -FD - 1.1, zc + s2[1] * B * 1.4, 'end']];
          var lens = [], tot = 0;
          for (var q = 1; q < pts.length; q++) { var l = Math.hypot(pts[q][0] - pts[q - 1][0], pts[q][1] - pts[q - 1][1], pts[q][2] - pts[q - 1][2]); lens.push(l); tot += l; }
          paths.push({ pts: pts, lens: lens, tot: tot, ph: Math.random() });
        });
      });
    }
  }
  var tmpM = new R.Matrix4(), tmpS = new R.Vector3();
  function memberU(tag, res) {
    if (tag === 'slab') return res.slab.u;
    if (tag.indexOf('beam:') === 0) return res.beams[tag.slice(5)].u;
    if (tag === 'col') return res.focus.u;
    if (tag === 'foot') return res.focus.fU;
    return res.focus.sU;
  }
  function pulseFrame(now) {
    requestAnimationFrame(pulseFrame);
    var res = ui.res; if (!res || !ui.pulse || st.eye || document.hidden) { if (pMesh.count) { pMesh.count = 0; U.dirty = true; } return; }
    var dt = plast ? Math.min(0.05, (now - plast) / 1000) : 0; plast = now; ptime += dt * pspeed;
    var idx = 0, per = paths.length ? Math.max(1, Math.min(4, Math.floor(PN / paths.length))) : 0;
    var settle = ui.def && ui.def.type === 'settle' ? ui.def : null;
    for (var p = 0; p < paths.length && idx < PN; p++) {
      var P = paths[p];
      for (var e = 0; e < per && idx < PN; e++) {
        var tt = ((ptime * 1.7 / P.tot + P.ph + e / per) % 1) * P.tot, q = 0;
        while (q < P.lens.length - 1 && tt > P.lens[q]) { tt -= P.lens[q]; q++; }
        var A = P.pts[q], Bp = P.pts[q + 1], f = Math.min(1, tt / P.lens[q]);
        var x = A[0] + (Bp[0] - A[0]) * f, y = A[1] + (Bp[1] - A[1]) * f, z = A[2] + (Bp[2] - A[2]) * f;
        if (settle) y -= settle.s * (q >= 2 ? 1 : hat(x, z, settle.i, settle.j));
        var tag = A[3] === 'end' ? 'soil' : A[3];
        var sz = tag === 'soil' ? 0.9 + 0.6 * (1 - f) : tag === 'col' || tag === 'foot' ? 1.15 : 0.85;
        tmpS.set(sz, sz, sz); tmpM.makeScale(sz, sz, sz); tmpM.setPosition(x, y, z);
        pMesh.setMatrixAt(idx, tmpM); pMesh.setColorAt(idx, ucol(memberU(tag, res)));
        idx++;
      }
    }
    pMesh.count = idx; pMesh.instanceMatrix.needsUpdate = true; if (pMesh.instanceColor) pMesh.instanceColor.needsUpdate = true;
    U.dirty = true;
  }
  requestAnimationFrame(pulseFrame);

  // ---- load arrows on the roof panels and labels down the focus column (kN accumulating per level)
  var arr = new R.Group(); U.G.add(arr);
  function drawArrows(res, grow) {
    U.clear(arr);
    var y = lvY(st.n), len = 0.55 + 0.05 * res.nF * (grow || 1);
    U.into(arr, function () {
      for (var i = 0; i < 3; i++) for (var j = 0; j < 2; j++) {
        var x = gx(i) + st.a / 2, z = gz(j) + st.b / 2;
        [[-0.25, -0.25], [0.25, 0.25], [0.25, -0.25], [-0.25, 0.25]].forEach(function (o) {
          E.Ln(V(x + o[0] * st.a, y + len + 0.05, z + o[1] * st.b), V(x + o[0] * st.a, y + 0.04, z + o[1] * st.b), 0xDC2626, 0.022);
        });
      }
    });
  }
  function labels(res) {
    U.unlabel(/^l6/);
    var fc = res.focus, xc = gx(fc.i), zc = gz(fc.j), c = st.c / 1000, D = st.D / 1000;
    fc.per.forEach(function (p) {
      var y = lvY(p.k) - D - 0.25;
      U.label('l6k' + p.k, [xc + c / 2 + 0.05, y, zc - c / 2], (p.level === 'roof' ? 'Roof' : 'Level ' + p.k) + ' · N<sub>u</sub> ' + Math.round(p.Pu) + ' kN', p.k === 1 ? (fc.ok ? 'b' : 'bad') : 'b', 3 + p.k / 10);
    });
    U.label('l6f', [xc + st.B / 2, -FD + st.h / 1000 + 0.05, zc - st.B / 2], 'Footing ' + fc.name + ' · N ' + Math.round(fc.f.N_kN) + ' kN', fc.fOk ? 'b' : 'bad', 4);
    U.label('l6s', [xc, -FD - 0.45, zc - st.B / 2], 'q ' + fm(fc.q, 0) + ' / ' + res.qa + ' kN/m²', fc.sOk ? 'ok' : 'bad', 5);
    // the corner column A1 stands in front of B2 in the view, so its load is in the strip and Formulas, not a 3D pill
    U.label('l6t', [gx(0) + 0.3, lvY(st.n) + 0.35, gz(0) + 0.3], res.type.type === 'two-way' ? 'Two-way: A<sub>1</sub> ' + fm(res.trib.A1_trapezoid_m2, 2) + ' m² · A<sub>2</sub> ' + fm(res.trib.A2_triangle_m2, 2) + ' m²' : 'One-way: A ' + fm(res.trib.A_oneWay_m2, 2) + ' m²', 'm', 2);
    var g = res.gov, at = govAt(res);
    U.label('l6g', at, (res.pass ? 'Governing: ' : 'Weakest link: ') + govName(res) + ' ' + pc(g.u) + ' %', res.pass ? 'ok' : 'bad', 6);
  }
  function govName(res) {
    var g = res.gov.id;
    return g === 'slab' ? 'slab' : g === 'beam' ? beamName(res.wb) : g === 'col' ? 'column ' + res.wc.name : g === 'foot' ? 'footing ' + res.wf.name : 'soil under ' + res.ws.name;
  }
  function govAt(res) {
    var g = res.gov.id, fc = res.focus;
    if (g === 'slab') { var sm = slabMesh(res); return [sm.position.x, lvY(1) + 0.75, sm.position.z]; } // clear of the level 1 and 2 pills
    if (g === 'beam') { var bm = beamMesh(res.wb); return [bm.position.x, bm.position.y - 0.6, bm.position.z]; }
    if (g === 'col') return [gx(fc.i) - 0.25, lvY(1) / 2 - 0.3, gz(fc.j) - 0.25];
    if (g === 'foot') return [gx(fc.i) - st.B / 2, -FD + 0.2, gz(fc.j) - st.B / 2];
    return [gx(res.ws.i), -FD - 0.6 * st.B, gz(res.ws.j)]; // inside the pressure bulb (drawCues)
  }
  function slabMesh() { return findMesh(function (u) { return u.part === 'slab' && u.k === 1 && u.at[0] === 1 && u.at[1] === 0; }); }
  function beamMesh(bm) {
    var lev = bm.level === 'roof' ? st.n : 1;
    return findMesh(function (u) { return u.part === 'beam' && u.id === bm.id && u.k === lev && (bm.dir === 'x' ? u.at[0] === 1 : (u.at[0] === 1 || u.at[0] === 0) && u.at[1] === 0); });
  }

  // ---- teaching cues (owner feedback 1): thick haloed strokes from cues.js. The load path down the focus column,
  // coloured per member (green fine, amber over 80 %, red over 100 %), and at every member that works hard a mark at
  // the exact place it works: soil pressure bulb, punching lines, squeeze chevrons, sag curves; a glow at the weakest link.
  function govSpot(res) {
    var g = res.gov.id, fTop = -FD + st.h / 1000;
    if (g === 'soil') return V(gx(res.ws.i), -FD - 0.35 * st.B, gz(res.ws.j));
    if (g === 'foot') return V(gx(res.wf.i), (fTop - FD) / 2, gz(res.wf.j));
    if (g === 'col') return V(gx(res.wc.i), (fTop + lvY(1)) / 2, gz(res.wc.j));
    if (g === 'beam') { var bm = beamMesh(res.wb); return V(bm.position.x, bm.position.y - st.D / 2000, bm.position.z); }
    var sm = slabMesh(); return V(sm.position.x, lvY(1) - st.t / 1000, sm.position.z);
  }
  function drawCues(res) {
    U.clear(cue);
    var fc = res.focus, xc = gx(fc.i), zc = gz(fc.j), D = st.D / 1000, fTop = -FD + st.h / 1000, B = st.B, c = st.c / 1000;
    var K = CUES.col, pl = function (u) { return u > 1 ? 0.25 : 0; };
    var mk = function (id, u) { return res.gov.id === id ? u > 0.8 : !st.eye && !ui.close && u > 1; };
    if (!st.eye && !ui.close) { // the path itself (in See inside or a failure close-up it would cover the member)
      fc.per.forEach(function (p) {
        var y1 = lvY(p.k) - D / 2, y0 = p.k === 1 ? fTop : lvY(p.k - 1) - D / 2, u = p.Pu / res.cap.Ncap_kN;
        CUES.line(cue, [V(xc, y1, zc), V(xc, y0, zc)], K(u), { w: 6, pulse: pl(u) });
        var dirs = [];
        if (fc.i > 0) dirs.push([-1, 0]); if (fc.i < 3) dirs.push([1, 0]); if (fc.j > 0) dirs.push([0, -1]); if (fc.j < 2) dirs.push([0, 1]);
        dirs.forEach(function (d) { // beams bring each floor's load into the column
          var span = d[0] ? st.a : st.b, bid = (d[0] ? 'x' : 'z') + ((d[0] ? fc.j === 1 : (fc.i === 1 || fc.i === 2)) ? 'i' : 'e') + '_' + p.level, ub = res.beams[bid].u;
          var a = V(xc + d[0] * span * 0.42, y1, zc + d[1] * span * 0.42), b = V(xc + d[0] * (c / 2 + 0.12), y1, zc + d[1] * (c / 2 + 0.12));
          CUES.line(cue, [a, b], K(ub), { w: 4, pulse: pl(ub) });
          CUES.chevron(cue, b, V(-d[0], 0, -d[1]), 0.16, K(ub), { w: 4 });
        });
      });
      CUES.line(cue, [V(xc, fTop, zc), V(xc, -FD, zc)], K(fc.fU), { w: 6, pulse: pl(fc.fU) });
      CUES.chevron(cue, V(xc, -FD - 0.08, zc), V(0, -1, 0), 0.2, K(fc.sU), { w: 6, pulse: pl(fc.sU) });
    }
    // soil: pressure bulb under the footing that carries the most (fades with depth), arrows pressing into the soil
    var ws = res.ws;
    if (mk('soil', ws.sU)) {
      var xs = gx(ws.i), zs = gz(ws.j), bulb = [];
      for (var q = 0; q <= 24; q++) { var th = Math.PI * q / 24; bulb.push(V(xs + 1.0 * B * Math.cos(th), -FD - 0.02 - 1.2 * B * Math.sin(th), zs)); }
      CUES.line(cue, bulb, K(ws.sU), { w: 6, pulse: pl(ws.sU) });
      [-0.35, 0.35].forEach(function (f) { CUES.chevron(cue, V(xs + f * B, -FD - 0.7 * B, zs), V(0, -1, 0), 0.22, K(ws.sU), { w: 5, pulse: pl(ws.sU) }); });
    }
    // footing: punching lines from the column face, or a bending smile under it
    var wf = res.wf;
    if (mk('foot', wf.fU)) {
      var xf = gx(wf.i), zf = gz(wf.j), dd = wf.f.d_mm / 1000;
      if (wf.fMode === 'punch') [-1, 1].forEach(function (sd) { CUES.line(cue, [V(xf + sd * c / 2, fTop, zf), V(xf + sd * (c / 2 + 1.5 * dd), -FD + 0.03, zf)], K(wf.fP), { w: 5, pulse: pl(wf.fP) }); });
      else { var sm1 = []; for (var q1 = 0; q1 <= 12; q1++) { var uu = q1 / 12 - 0.5; sm1.push(V(xf + uu * B, -FD - 0.08 - 0.12 * Math.cos(Math.PI * uu), zf)); } CUES.line(cue, sm1, K(wf.fK), { w: 5, pulse: pl(wf.fK) }); }
    }
    // column: squeeze chevrons on both faces of the ground storey, where the load of every floor adds up
    var wc = res.wc;
    if (mk('col', wc.u)) {
      var xw = gx(wc.i), zw = gz(wc.j);
      [0.25, 0.5, 0.75].forEach(function (f) {
        var y = fTop + f * (lvY(1) - D - fTop);
        [-1, 1].forEach(function (sd) { CUES.chevron(cue, V(xw + sd * (c / 2 + 0.1), y, zw), V(-sd, 0, 0), 0.15, K(wc.u), { w: 5, pulse: pl(wc.u) }); });
      });
    }
    // beam: sag curve under it (bending), or diagonal marks near the supports (shear)
    var wb = res.wb;
    if (mk('beam', wb.u)) {
      var bm = beamMesh(wb), bp = bm.position, ax = wb.dir === 'x', Lb = ax ? bm.geometry.parameters.width : bm.geometry.parameters.depth;
      var at = function (u, y) { return ax ? V(bp.x + u, y, bp.z) : V(bp.x, y, bp.z + u); };
      if (wb.mode === 'shear') [-1, 1].forEach(function (sd) { CUES.line(cue, [at(sd * (Lb / 2 - 0.1), bp.y - D / 2 - 0.05), at(sd * (Lb / 2 - 0.1 - 0.6 * D), bp.y + D / 2 + 0.05)], K(wb.uV), { w: 5, pulse: pl(wb.u) }); });
      else { var sg = []; for (var q2 = 0; q2 <= 16; q2++) { var u2 = q2 / 16 - 0.5; sg.push(at(u2 * Lb * 0.9, bp.y - D / 2 - 0.12 - 0.22 * Math.cos(Math.PI * u2))); } CUES.line(cue, sg, K(wb.u), { w: 5, pulse: pl(wb.u) }); }
    }
    // slab: sag curve under the level 1 panel
    if (mk('slab', res.slab.u)) {
      var sm = slabMesh(), sx = sm.position.x, sz = sm.position.z, ss = [];
      for (var q3 = 0; q3 <= 16; q3++) { var u3 = q3 / 16 - 0.5; ss.push(V(sx + u3 * st.a * 0.85, lvY(1) - st.t / 1000 - 0.12 - 0.25 * Math.cos(Math.PI * u3), sz)); }
      CUES.line(cue, ss, K(res.slab.u), { w: 5, pulse: pl(res.slab.u) });
    }
    if (!res.pass && res.gov.u > 1) CUES.glow(cue, govSpot(res), CUES.RED, { px: 150 });
  }
  // labels never cover the weakest link and its failing zone, nor the member seen inside (owner feedback 3)
  function govBoxes(res, id) {
    var g = id || res.gov.id, fTop = -FD + st.h / 1000, B = st.B, c = st.c / 1000, m = 0.04;
    function foot(cl) { var x = gx(cl.i), z = gz(cl.j); return new R.Box3(V(x - B / 2, -FD, z - B / 2), V(x + B / 2, fTop, z + B / 2)); }
    if (g === 'soil') { var x = gx(res.ws.i), z = gz(res.ws.j); return [foot(res.ws), new R.Box3(V(x - 1.0 * B, -FD - 1.2 * B, z - 0.1), V(x + 1.0 * B, -FD, z + 0.1))]; }
    if (g === 'foot') return [foot(res.wf)];
    if (g === 'col') { var xc = gx(res.wc.i), zc = gz(res.wc.j); return [new R.Box3(V(xc - c / 2 - 0.3, fTop, zc - c / 2 - m), V(xc + c / 2 + 0.3, lvY(1), zc + c / 2 + m))]; } // with its chevrons
    var mesh = g === 'beam' ? beamMesh(res.wb) : slabMesh(); if (!mesh) return [];
    var bx = new R.Box3().setFromObject(mesh); bx.min.y -= 0.4; return [bx]; // with the sag curve under it
  }
  CUES.avoid(['#dl', '#lp']);
  CUES.busy(function () { return ui.busy; }); // undo / redo refused during a Test before the engine pops its stack
  CUES.members(function () {
    var r = ui.res; if (!r) return [];
    var fc = r.focus, c = st.c / 2000 + 0.04, path = !st.eye ? [new R.Box3(V(gx(fc.i) - c, -FD + st.h / 1000, gz(fc.j) - c), V(gx(fc.i) + c, lvY(st.n), gz(fc.j) + c))] : [];
    // every other member over 100 % that carries a cue mark (drawCues mk()) keeps its mark clear too
    var more = []; if (!st.eye && !ui.close) r.lvls.forEach(function (l) {
      if (l.id === r.gov.id || l.u <= 1) return;
      if (l.id !== 'slab') { more = more.concat(govBoxes(r, l.id)); return; }
      var sm = slabMesh(), y = lvY(1) - st.t / 1000; // the slab's sag curve only (a vertical strip across the panel), not the whole panel
      if (sm) more.push(new R.Box3(V(sm.position.x - 0.43 * st.a, y - 0.42, sm.position.z - 0.05), V(sm.position.x + 0.43 * st.a, y - 0.08, sm.position.z + 0.05)));
    });
    return govBoxes(r).concat(more, path, st.eye && ui.insBox ? [ui.insBox] : []);
  });

  // ---- summary strip, gauge, panel text
  function stripHtml(res) {
    var html = '';
    res.lvls.forEach(function (l, q) {
      var col = E.cc(100 * l.u), w = Math.min(100, 66.7 * l.u);
      var pv = st.cmp && ui.prev ? ui.prev.res.lvls[q] : null;
      html += (q ? '<div class="ar">→</div>' : '') + '<div class="c' + (l === res.gov ? ' gov' : '') + '" style="color:' + col + '"><div class="t">' + l.name.toUpperCase() + '<span class="u" style="color:' + col + '">' + pc(l.u) + ' %</span></div>' +
        '<div class="v">' + l.val + '</div><div class="bar"><i style="width:' + w + '%;background:' + col + '"></i></div><div class="s">' + l.sub + '</div>' +
        (pv ? '<div class="p">before: ' + pv.val + ' · ' + pc(pv.u) + ' %</div>' : '') + '</div>';
    });
    return html;
  }
  function gauge(res) {
    var g = res.gov, others = res.lvls.filter(function (l) { return l !== g; }).sort(function (x, y) { return y.u - x.u; }).slice(0, 2);
    var line = { slab: 'n ' + fm(res.nF, 2) + ' kN/m² on ' + fm(res.lx, 2) + ' × ' + fm(res.ly, 2) + ' m', beam: 'w ' + fm(res.wb.r.w_kNm, 1) + ' kN/m over ' + fm(res.wb.span, 2) + ' m',
      col: 'N<sub>u</sub> ' + fm(res.wc.Pu, 0) + ' / ' + fm(res.cap.Ncap_kN, 0) + ' kN', foot: 'v ' + fm(res.wf.f.v1_MPa, 3) + ' / v<sub>c</sub> ' + fm(res.wf.vc, 3) + ' N/mm²', soil: 'q = N / B² = ' + fm(res.ws.q, 1) + ' / ' + res.qa + ' kN/m²' }[g.id];
    U.gauge([[g.name + (g.id === 'soil' ? '' : '') + ' (governing)', line, 100 * g.u, pc(g.u) + ' %'],
      [others[0].name, others[0].val, 100 * others[0].u], [others[1].name, others[1].val, 100 * others[1].u]]);
  }

  // ---- Formulas panel from calc.mjs steps
  function rows(steps, ids, cls) {
    return steps.filter(function (s) { return !ids || ids.indexOf(s.id) >= 0; }).map(function (s) {
      return [s.formula, s.label + chip(s.chip), fv(s), cls && cls[s.id] || ''];
    });
  }
  function okc(b) { return b ? 'ok' : 'bad'; }
  function diagram(res) {
    // elevation of the middle frame (row B): columns with their design load, footings with q under them
    var n = st.n, W = 300, x0 = 26, sx = (W - 2 * x0) / 3, yT = 14, yG = 100, sy = (yG - yT) / n, out = '';
    for (var k = 1; k <= n; k++) out += '<line x1="' + x0 + '" x2="' + (W - x0) + '" y1="' + (yG - k * sy) + '" y2="' + (yG - k * sy) + '" stroke="#0F2E5A" stroke-width="3"/>';
    for (var i = 0; i <= 3; i++) {
      var cl = res.cols[4 + i], x = x0 + i * sx, bw = 10 + 26 * st.B / 2.6, col = cl.sOk && cl.fOk ? '#8a96a3' : '#DC2626';
      out += '<line x1="' + x + '" x2="' + x + '" y1="' + (yG - n * sy) + '" y2="' + yG + '" stroke="' + E.cc(100 * cl.u) + '" stroke-width="4"/>' +
        '<rect x="' + (x - bw / 2) + '" y="' + (yG + 2) + '" width="' + bw + '" height="7" fill="' + col + '"/>' +
        '<text x="' + x + '" y="' + (yT - 4) + '" text-anchor="middle" font-size="10" fill="#5d6b7c">' + cl.name + '</text>' +
        '<text x="' + x + '" y="' + (yG + 22) + '" text-anchor="middle" font-size="10.5" font-weight="700" fill="' + (cl.sOk ? '#0F2E5A' : '#DC2626') + '">' + Math.round(cl.q) + '</text>' +
        '<text x="' + (x + 4) + '" y="' + (yG - 4) + '" font-size="9.5" fill="#0F2E5A">' + Math.round(cl.Pu) + '</text>';
    }
    return '<svg viewBox="0 0 300 128" width="300" height="128" role="img" aria-label="Middle frame: column loads and soil pressure">' +
      '<rect x="4" y="' + (yG + 10) + '" width="292" height="18" fill="#c9a77d" opacity=".45"/>' + out + '</svg>' +
      '<div style="font-size:10.5px;color:#5d6b7c;margin:0 0 4px 6px">Frame B: N<sub>u</sub> kN in the columns, q kN/m² under the footings, safe ' + res.qa + '</div>';
  }
  function formulas(res) {
    var s = st, us = useOf(), so = soilOf(), sl = res.slab, wb = res.wb, fc = res.focus, f = fc.f;
    var rL = [
      ['g<sub>k</sub> = 24 × t + finishes', 'slab self-weight + finishes 1.5 (Task 27)' + chip('manual'), fm(res.gk, 2) + ' kN/m²', ''],
      ['q<sub>k</sub>', us.name.toLowerCase() + '; roof ' + ROOF_QK + ' kN/m²' + chip('typical value, to confirm'), fm(us.qk, 1) + ' kN/m²', ''],
      ['n = 1.4g<sub>k</sub> + 1.6q<sub>k</sub>', 'used for every member of the building' + chip('manual note'), fm(res.nF, 2) + ' kN/m²', 'hl'],
      ['L<sub>y</sub> / L<sub>x</sub> = ' + fm(res.ly, 2) + ' / ' + fm(res.lx, 2), res.type.type + ' slab' + chip('manual'), fm(res.type.ratio, 2), '']
    ];
    var rT = res.type.type === 'two-way' ? [
      ['b = L<sub>y</sub> − L<sub>x</sub>, h<sub>1</sub> = L<sub>x</sub>/2', '45° lines from the corners' + chip('manual'), fm(res.trib.b_m, 2) + ' m, ' + fm(res.trib.h1_m, 2) + ' m', ''],
      ['A<sub>1</sub> = ½(B + b)·h<sub>1</sub>', 'trapezoid to each long beam' + chip('manual'), fm(res.trib.A1_trapezoid_m2, 2) + ' m²', 'hl'],
      ['A<sub>2</sub> = ½·B·h<sub>2</sub>', 'triangle to each short beam' + chip('manual'), fm(res.trib.A2_triangle_m2, 2) + ' m²', 'hl']
    ] : [['A = L<sub>y</sub> × L<sub>x</sub>/2', 'rectangle to each long beam' + chip('manual'), fm(res.trib.A_oneWay_m2, 2) + ' m²', 'hl']];
    var rS = rows(sl.r.steps).concat((sl.r.checks || []).filter(function (c) { return c.id !== 'zmax'; }).map(function (c) { return [c.label, c.ref + chip(c.chip), c.ok ? 'OK' : 'NOT OK', okc(c.ok)]; }));
    var rB = [['W = n × A + 1.4 × b·D·γ × L', beamName(wb) + ', ' + wb.np + ' panel' + (wb.np > 1 ? 's' : '') + ', ' + wb.level + '' + chip('manual'), fm(wb.W, 1) + ' kN', 'hl']]
      .concat(rows(wb.r.steps)).concat(failedChecks(wb.r, ['zmax']).map(function (c) { return [c.label, c.ref + chip(c.chip), 'NOT OK', 'bad']; }));
    var rC = fc.per.map(function (p) {
      return ['N<sub>' + (p.level === 'roof' ? 'roof' : p.k) + '</sub> = ½ ΣW + column', (p.level === 'roof' ? 'roof' : 'level ' + p.k) + ': ½ of ' + fc.fr.length + ' beams' + chip('manual'), 'G ' + fm(p.G, 1) + ' · Q ' + fm(p.Q, 1) + ' kN', ''];
    });
    rC.push(['P<sub>u</sub> = 1.4G<sub>k</sub> + 1.6Q<sub>k</sub>', 'column ' + fc.name + ', ground storey' + chip('manual'), fm(fc.Pu, 1) + ' kN', 'hl']);
    rC.push(['N = 0.35f<sub>cu</sub>A<sub>c</sub> + 0.7f<sub>y</sub>A<sub>sc</sub>', st.c + ' × ' + st.c + ', ' + COL_BARS + 'Y' + BAR.col + '' + chip('manual'), fm(res.cap.Ncap_kN, 1) + ' kN', okc(fc.uN <= 1)]);
    rC = rC.concat(rows(res.slen.steps));
    rC.push(['L<sub>e</sub>/D ≤ 12', 'short column; BS 8110 braced 15' + chip('manual'), fm(res.slen.LeOverD, 2), okc(res.slen.short)]);
    var rF = rows(f.steps).concat(failedChecks(f, ['zmax']).map(function (c) { return [c.label, c.ref + chip(c.chip), 'NOT OK', 'bad']; }));
    if (fc.vc !== null && !f.steps.some(function (x) { return x.id === 'vc'; })) rF.push(['v<sub>c</sub>', 'concrete shear capacity', fm(fc.vc, 3) + ' N/mm²', okc(fc.fP <= 1)]);
    rF.push(['q ≤ q<sub>a</sub>', so.name + ': ' + so.range + chip(so.manual ? 'manual' : 'typical value, to confirm'), res.qa + ' kN/m²', okc(fc.sOk)]);
    U.fx({ sub: 'fcu ' + FCU + ', fy ' + FY + ' N/mm² · storey ' + HS.toFixed(2) + ' m · live values', dg: diagram(res), groups: [
      { h: 'Loads on the slab', rows: rL },
      { h: 'Slab to beams: tributary areas', rows: rT },
      { h: 'Slab panel, ' + fm(res.lx, 2) + ' × ' + fm(res.ly, 2) + ' m', p: 100 * sl.u, rows: rS },
      { h: 'Beams to columns: ' + beamName(wb), p: 100 * wb.u, rows: rB },
      { h: 'Column ' + fc.name + ' (' + fc.kind + '), load adds up per level', p: 100 * fc.u, rows: rC },
      { h: 'Footing ' + fc.name + ' to the soil', p: 100 * Math.max(fc.fU, fc.sU), rows: rF }] });
  }

  // ---- See inside: translucent concrete, the member's real bars and links, utilisation gradient
  function lookMember(res) {
    var L = st.look;
    if (L === 'gov') L = { slab: 'slab', beam: res.wb.np === 2 ? 'beamI' : 'beamE', col: 'colI', foot: 'footI', soil: 'footI' }[res.gov.id];
    return L;
  }
  function lookCol(res, L) { return L === 'colC' || L === 'footC' ? res.cols[0] : res.gov.id === 'col' || res.gov.id === 'foot' || res.gov.id === 'soil' ? res.focus : res.cols[5]; }
  function lookShot() {
    var res = ui.res; if (!res) return shotAll();
    var L = lookMember(res), c = lookCol(res, L), x = gx(c.i), z = gz(c.j);
    if (L === 'slab') { var sm = slabMesh(); return { box: new R.Box3(V(sm.position.x - st.a / 2, lvY(1) - 0.8, sm.position.z - st.b / 2), V(sm.position.x + st.a / 2, lvY(1) + 0.3, sm.position.z + st.b / 2)), dir: [-0.35, 0.75, -0.55], fov: 30 }; }
    // beams: seen from a little below, so the slab above never hides the cage (L6 open point, beam depth 300)
    if (L === 'beamI' || L === 'beamE') { var bm = beamMesh(lookBeam(res, L)); var p = bm.position, w = bm.geometry.parameters; return { box: new R.Box3(V(p.x - w.width / 2, p.y - 0.5, p.z - w.depth / 2), V(p.x + w.width / 2, p.y + 0.3, p.z + w.depth / 2)), dir: [-0.5, -0.2, -0.84], fov: 30 }; }
    if (L === 'colI' || L === 'colC') return { box: new R.Box3(V(x - 0.8, -FD, z - 0.8), V(x + 0.8, lvY(1) + 0.3, z + 0.8)), dir: [-0.55, 0.2, -0.8], fov: 30 };
    return { box: new R.Box3(V(x - st.B / 2 - 0.3, -FD - (c.sU > 0.8 ? 1.1 * st.B : 0.6), z - st.B / 2 - 0.3), V(x + st.B / 2 + 0.3, 0.6, z + st.B / 2 + 0.3)), dir: [-0.5, 0.45, -0.75], fov: 30 };
  }
  function shotAll() {
    var x0 = gx(0) - st.B / 2, x1 = gx(3) + st.B / 2, z0 = gz(0) - st.B / 2, z1 = gz(2) + st.B / 2;
    return { box: new R.Box3(V(x0, -FD - 1.0, z0), V(x1, lvY(st.n) + 1.2, z1)), dir: [-0.55, 0.42, -0.72], fov: 30, focus: [bld, pul, arr, fx3, ins] };
  }
  // utilisation colour only where the member works hard (owner feedback 2): clear below 80 %, amber to red above,
  // red at and over 100 %; never a whole-member green tint
  function heat(u) {
    if (!(u > 0.8)) return null;
    var k = Math.min(1, (u - 0.8) / 0.2);
    return { c: new R.Color(CUES.AMB).lerp(new R.Color(CUES.RED), k), a: 0.28 + 0.3 * k };
  }
  function gradPlane(w, d, f, y, x, z, rotX, o) {
    var g = new R.PlaneGeometry(w, d, 24, 24); if (rotX) g.rotateX(-Math.PI / 2);
    var pos = g.attributes.position, cols = [];
    for (var q = 0; q < pos.count; q++) {
      var hh = heat(Math.min(2, f(pos.getX(q) / w + 0.5, rotX ? pos.getZ(q) / d + 0.5 : pos.getY(q) / d + 0.5)));
      if (hh) cols.push(hh.c.r, hh.c.g, hh.c.b, hh.a); else cols.push(1, 1, 1, 0);
    }
    g.setAttribute('color', new R.Float32BufferAttribute(cols, 4));
    var m = new R.Mesh(g, new R.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, depthTest: !(o && o.over), side: R.DoubleSide, toneMapped: false }));
    m.position.set(x, y, z); m.renderOrder = 8; ins.add(m); return m;
  }
  function heatBox(w, h, d, u, x, y, z) {
    var hh = heat(u); if (!hh) return null;
    var m = new R.Mesh(new R.BoxGeometry(w, h, d), new R.MeshBasicMaterial({ color: hh.c, transparent: true, opacity: Math.min(0.42, hh.a), depthWrite: false, toneMapped: false }));
    m.position.set(x, y, z); m.renderOrder = 8; ins.add(m); return m;
  }
  // a bar or link: dark steel with a white screen-space outline behind it (cues.js), bold at every zoom
  function tube(a, b, r, mat) {
    var n0 = ins.children.length;
    U.into(ins, function () { E.Zn(a, b, r, mat, 6); });
    for (var q = n0; q < ins.children.length; q++) {
      var bm = ins.children[q]; if (!bm.isMesh) continue;
      var ol = CUES.outline(bm, hiCol ? { px: 3, color: hiCol } : { px: 2.2 }); bm.renderOrder = 11;
      if (ol) { ol.renderOrder = 10; ol.material.transparent = true; }
    }
  }
  // owner 07:44Z: bars and links drawn about 2.5 x their true diameter so they read (visual only; labels and numbers
  // keep the true sizes); the failing ones get a bright outline in place of the light one
  function visDia(d) { return Math.min(2.5 * d, Math.max(1.4 * d, 40)) / 2000; }
  function visLink(d) { return Math.min(2.5 * d, 20) / 2000; }
  var hiCol = null; // set while drawing bars that fail: their outline turns amber / red
  function poly(pts, r, mat) { for (var q = 1; q < pts.length; q++) tube(pts[q - 1], pts[q], r, mat); }
  function insideDone(box) { CUES.edges(ins, box, true); ui.insBox = box; }
  function drawInside(res) {
    U.clear(ins); U.unlabel('l6i'); ins.position.set(0, 0, 0); ui.insBox = null;
    CUES.xray(concMeshes(), st.eye);
    if (!st.eye) { CUES.edges(ins, null, false); return; }
    var L = lookMember(res), c = lookCol(res, L), x = gx(c.i), z = gz(c.j), cv, phi;
    if (L === 'colI' || L === 'colC') {
      var cs = st.c / 1000, cvc = (COV.col + BAR.link + BAR.col / 2) / 1000, fTop = -FD + st.h / 1000, top = lvY(st.n), yG = lvY(1), yM = (fTop + yG) / 2;
      var cf = ui.colFail && ui.colFail.i === c.i && ui.colFail.j === c.j ? ui.colFail : null;
      var LS = 0.15, y0l = fTop + 0.075, kz = Math.round((yM - y0l) / LS), zA = y0l + kz * LS, zB = zA + LS; // crush: the link gap at mid ground storey
      var bowX = function (y) { return cf && cf.mode === 'buckle' && y <= yG ? cf.amp * Math.cos(Math.PI * (y - yM) / (yG - fTop)) : 0; };
      [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(function (o) {
        var bx = x + o[0] * (cs / 2 - cvc), bz = z + o[1] * (cs / 2 - cvc), ys = [-FD + 0.1, fTop];
        if (cf && cf.mode === 'buckle') for (var yy = fTop + 0.25; yy < yG; yy += 0.25) ys.push(yy);
        if (cf && cf.mode === 'crush') for (var q5 = 0; q5 <= 8; q5++) ys.push(zA + q5 * LS / 8);
        ys.push(yG + 0.2, top - 0.05);
        // crush: the bars buckle outward between two links (drawn exaggerated)
        hiCol = cf ? CUES.AMB : null;
        poly(ys.map(function (y) {
          var out = cf && cf.mode === 'crush' && y > zA && y < zB ? cf.amp * Math.sin(Math.PI * (y - zA) / LS) : 0;
          return V(bx + o[0] * out * 0.707 + bowX(y), y, bz + o[1] * out * 0.707);
        }), visDia(BAR.col), M.steel);
        hiCol = null;
      });
      var lk = (cs / 2 - (COV.col + BAR.link / 2) / 1000);
      for (var y = y0l; y < top - 0.05; y += LS) {
        if (cf && cf.mode === 'crush' && y > zA + 0.01 && y < zB - 0.01) continue;
        var P = [[-lk, -lk], [lk, -lk], [lk, lk], [-lk, lk]], dx = bowX(y);
        for (var q = 0; q < 4; q++) tube(V(x + P[q][0] + dx, y, z + P[q][1]), V(x + P[(q + 1) % 4][0] + dx, y, z + P[(q + 1) % 4][1]), visLink(BAR.link), M.link);
      }
      // utilisation along the height: N grows down the column, storey by storey (tinted only where it works hard)
      // tint only a band where it works hard (never the whole member): the link gap at mid storey
      c.per.forEach(function (p) {
        var y0 = p.k === 1 ? fTop : lvY(p.k - 1), y1 = lvY(p.k) - st.D / 1000, ym2 = p.k === 1 ? zA + LS / 2 : (y0 + y1) / 2;
        heatBox(cs + 0.03, 0.5, cs + 0.03, p.Pu / res.cap.Ncap_kN, x, ym2, z);
      });
      if (cf) CUES.glow(ins, V(x, cf.mode === 'crush' ? zA + LS / 2 : yM, z), CUES.RED, { px: 110, pulse: 0.12 });
      U.label('l6i', [x + cs / 2 + 0.05, lvY(1) * 0.55, z - cs / 2], COL_BARS + 'Y' + BAR.col + ' · links R' + BAR.link + ' at 150 · cover ' + COV.col + ' mm', 'b', 7);
      insideDone(new R.Box3(V(x - cs / 2, fTop, z - cs / 2), V(x + cs / 2, top, z + cs / 2)));
      return;
    }
    if (L === 'footI' || L === 'footC') {
      var B = st.B, h = st.h / 1000, sp = c.tbl ? c.tbl.spacing_mm : 75, nb = Math.max(2, Math.floor((B * 1000 - 2 * COV.foot) / sp) + 1), eff = B - 2 * COV.foot / 1000, d = c.f.d_mm / 1000;
      cv = COV.foot / 1000; phi = BAR.foot / 1000;
      hiCol = c.fK > 1 ? CUES.AMB : null; // bending fails: the bottom bars are what yields
      for (var q2 = 0; q2 < nb; q2++) {
        var o = -eff / 2 + q2 * eff / (nb - 1);
        tube(V(x - B / 2 + cv, -FD + cv + phi / 2, z + o), V(x + B / 2 - cv, -FD + cv + phi / 2, z + o), visDia(BAR.foot), M.steel);
        tube(V(x + o, -FD + cv + 1.5 * phi, z - B / 2 + cv), V(x + o, -FD + cv + 1.5 * phi, z + B / 2 - cv), visDia(BAR.foot), M.steel);
      }
      hiCol = null;
      var cc2 = st.c / 2000, uf = c.fK;
      gradPlane(B - 0.02, B - 0.02, function (u, v) { var m = Math.max(Math.abs(u - 0.5), Math.abs(v - 0.5)) * B; return m <= cc2 ? uf : uf * Math.pow(Math.max(0, (B / 2 - m) / (B / 2 - cc2)), 2); }, -FD + cv + 2.4 * phi, x, z, true);
      var up = c.fP, hp = heat(up);
      if (hp) {
        var cone = new R.Mesh(new R.CylinderGeometry(cc2 * Math.SQRT2, (2 * cc2 + 3 * d) / 2 * Math.SQRT2, d, 4, 1, true),
          new R.MeshBasicMaterial({ color: hp.c, transparent: true, opacity: hp.a + 0.1, depthWrite: false, side: R.DoubleSide, toneMapped: false }));
        cone.geometry.rotateY(Math.PI / 4); cone.position.set(x, -FD + h - d / 2, z); cone.renderOrder = 9; ins.add(cone);
      }
      // the soil under it: pressure spreads and fades with depth (red where q is over the safe bearing)
      if (c.sU > 0.8) gradPlane(1.8 * B, 1.3 * B, function (u, v) { var nx = (u - 0.5) * 3.6, ny = (1 - v) * 2.6; return c.sU / (1 + 0.35 * (nx * nx + ny * ny)); }, -FD - 0.65 * B, x, z, false, { over: true });
      U.unlabel('l6f'); // the inside pill takes the footing pill's place (N stays in the strip)
      U.label('l6i', [x + B / 2, -FD + 0.05, z - B / 2], 'Y' + BAR.foot + ' at ' + (c.tbl ? c.tbl.spacing_mm : '?') + ' each way · cover ' + COV.foot + ' mm · punching ' + pc(up) + ' %', 'b', 7);
      insideDone(new R.Box3(V(x - B / 2, -FD, z - B / 2), V(x + B / 2, -FD + h, z + B / 2)));
      return;
    }
    if (L === 'slab') {
      var sm = slabMesh(), sx = sm.position.x, sz = sm.position.z, a = st.a, b = st.b, ys = lvY(1) - st.t / 1000 + (COV.slab + BAR.slab / 2) / 1000;
      var tb = res.slab.r.spacing && res.slab.r.spacing.table, s1 = tb ? tb.spacing_mm / 1000 : 0.15;
      var tb2 = res.slab.r.twoWay && res.slab.r.twoWay.long && res.slab.r.twoWay.long.table, s2 = tb2 ? tb2.spacing_mm / 1000 : s1;
      var shortX = a <= b;
      hiCol = res.slab.uK > 1 ? CUES.AMB : null;
      for (var u1 = -b / 2 + 0.05; u1 <= b / 2 - 0.05 + 1e-6; u1 += shortX ? s2 : s1) tube(V(sx - a / 2 + 0.05, shortX ? ys + 0.01 : ys, sz + u1), V(sx + a / 2 - 0.05, shortX ? ys + 0.01 : ys, sz + u1), visDia(BAR.slab), M.steel);
      for (var u2 = -a / 2 + 0.05; u2 <= a / 2 - 0.05 + 1e-6; u2 += shortX ? s1 : s2) tube(V(sx + u2, shortX ? ys : ys + 0.01, sz - b / 2 + 0.05), V(sx + u2, shortX ? ys : ys + 0.01, sz + b / 2 - 0.05), visDia(BAR.slab), M.steel);
      hiCol = null;
      var us = res.slab.u;
      gradPlane(a - 0.1, b - 0.1, function (u, v) { return us * Math.sin(Math.PI * u) * Math.sin(Math.PI * v); }, ys - 0.012, sx, sz, true);
      U.label('l6i', [sx - a / 2, lvY(1) - 0.35, sz - b / 2], 'Y' + BAR.slab + ' at ' + (tb ? tb.spacing_mm : '?') + ' short way, at ' + (tb2 ? tb2.spacing_mm : '?') + ' long way · cover ' + COV.slab + ' mm', 'b', 7);
      var gs = sm.geometry.parameters;
      insideDone(new R.Box3(V(sx - gs.width / 2, lvY(1) - st.t / 1000, sz - gs.depth / 2), V(sx + gs.width / 2, lvY(1), sz + gs.depth / 2)));
      return;
    }
    // beams
    var bmR = lookBeam(res, L);
    var bm = beamMesh(bmR), p = bm.position, gp = bm.geometry.parameters, alongX = bmR.dir === 'x', Lb = alongX ? gp.width : gp.depth, Db = st.D / 1000, bw = BW / 1000;
    var cvb = (COV.beam + BAR.link + BAR.beam / 2) / 1000, nbars = bmR.r.bars ? bmR.r.bars.n : 2, yb = p.y - Db / 2 + cvb, yt = p.y + Db / 2 - cvb;
    function at(u, off, y2) { return alongX ? V(p.x + u, y2, p.z + off) : V(p.x + off, y2, p.z + u); }
    hiCol = bmR.uK > 1 ? CUES.AMB : null;
    for (var q3 = 0; q3 < nbars; q3++) { var off = nbars > 1 ? -bw / 2 + cvb + q3 * (bw - 2 * cvb) / (nbars - 1) : 0; tube(at(-Lb / 2 - 0.1, off, yb), at(Lb / 2 + 0.1, off, yb), visDia(BAR.beam), M.steel); }
    hiCol = null;
    [-1, 1].forEach(function (sd) { tube(at(-Lb / 2 - 0.1, sd * (bw / 2 - cvb), yt), at(Lb / 2 + 0.1, sd * (bw / 2 - cvb), yt), visDia(12), M.steel); });
    var lw = bw / 2 - (COV.beam + BAR.link / 2) / 1000, lh = Db / 2 - (COV.beam + BAR.link / 2) / 1000;
    for (var u3 = -Lb / 2 + 0.05; u3 <= Lb / 2 - 0.04; u3 += linkS(st.D - COV.beam - BAR.link - BAR.beam / 2) / 1000) {
      var P2 = [[-lw, -lh], [lw, -lh], [lw, lh], [-lw, lh]];
      hiCol = bmR.uV > 1 && Math.abs(u3) > Lb / 4 ? CUES.RED : null; // shear: the links near the supports
      for (var q4 = 0; q4 < 4; q4++) tube(at(u3, P2[q4][0], p.y + P2[q4][1]), at(u3, P2[(q4 + 1) % 4][0], p.y + P2[(q4 + 1) % 4][1]), visLink(BAR.link), M.link);
    }
    hiCol = null;
    var uK = bmR.uK, uV = bmR.uV, uD = bmR.uD;
    var gpl = gradPlane(Lb, Db, function (u, v) { var mom = 4 * u * (1 - u), sh = Math.abs(1 - 2 * u); return Math.max(Math.max(uK, uD) * mom * (v < 0.5 ? 1 : 0.6 + 0.4 * (1 - mom)), uV * sh * (0.6 + 0.4 * (1 - Math.abs(v - 0.5) * 2))); }, p.y, alongX ? p.x : p.x - bw / 2 - 0.012, alongX ? p.z - bw / 2 - 0.012 : p.z, false);
    if (!alongX) gpl.rotation.y = Math.PI / 2;
    U.label('l6i', [p.x, p.y - Db / 2 - 0.3, p.z - (alongX ? bw : 0)], (bmR.r.bars ? bmR.r.bars.label : '') + ' bottom · links R' + BAR.link + ' at ' + linkS(st.D - COV.beam - BAR.link - BAR.beam / 2) + ' · cover ' + COV.beam + ' mm', 'b', 7);
    insideDone(new R.Box3(V(p.x - gp.width / 2, p.y - Db / 2, p.z - gp.depth / 2), V(p.x + gp.width / 2, p.y + Db / 2, p.z + gp.depth / 2)));
  }
  function lookBeam(res, L) { return L === 'beamI' ? (res.beams['zi_floor'].u >= res.beams['xi_floor'].u ? res.beams['zi_floor'] : res.beams['xi_floor']) : res.beams['xe_floor']; }

  // ---- Compare: the previous test (or the task's starting design) as ghost outlines + a second row in the strip
  function drawGhost() {
    U.clear(ghost);
    if (!st.cmp) return;
    var pv = ui.prev ? ui.prev.s : null; if (!pv) return;
    var mat = new R.LineBasicMaterial({ color: 0x1e4fa3, transparent: true, opacity: 0.85, depthTest: false });
    function edges(w, h, d, x, y, z) { var e = new R.LineSegments(new R.EdgesGeometry(new R.BoxGeometry(w, h, d)), mat); e.position.set(x, y, z); e.renderOrder = 15; ghost.add(e); }
    for (var j = 0; j <= 2; j++) for (var i = 0; i <= 3; i++) {
      var x = gx(i, pv), z = gz(j, pv), h = pv.h / 1000;
      edges(pv.B, h, pv.B, x, -FD + h / 2, z);
      edges(pv.c / 1000, lvY(1) + FD - h, pv.c / 1000, x, (lvY(1) - FD + h) / 2, z);
    }
    U.label('l6p', [gx(3, pv) + pv.B / 2, -FD + 0.1, gz(0, pv) - pv.B / 2], 'Before: B ' + pv.B.toFixed(2) + ' m, column ' + pv.c + ' mm', 'b', 1);
  }

  // ---- draw everything
  function req() { if (!ui.raf) ui.raf = requestAnimationFrame(draw); }
  window.__L6.redraw = function () { U.mark(); req(); };
  function draw() {
    ui.raf = 0;
    var res = compute();
    ui.res = res; ui.def = null; ui.colFail = null; ui.close = false; ui.pulse = true;
    build(res); buildPaths(res); drawArrows(res); labels(res); drawInside(res); drawCues(res); drawGhost();
    U.clear(fx3);
    gauge(res); formulas(res);
    strip.innerHTML = stripHtml(res);
    // panel text
    var t = TASKS[st.task], so = soilOf();
    $('#dlH').textContent = t.name;
    $('#dlG').textContent = 'fcu ' + FCU + ', fy ' + FY + ' N/mm² · beams ' + BW + ' wide · column ' + COL_BARS + 'Y' + BAR.col + ' · footings ' + SW_FOOT * 100 + ' % self-weight (T L5145) · ' + t.ref;
    ['n', 'a', 'b', 't', 'D', 'c', 'B', 'h'].forEach(function (k) {
      var v = st[k], txt = k === 'n' ? String(v) : k === 'a' || k === 'b' || k === 'B' ? v.toFixed(2) + ' m' : v + ' mm';
      $('#dlv_' + k).textContent = txt;
    });
    $('#dlS').value = st.soil; $('#dlU').value = st.use; $('#dlI').value = st.look;
    $('#dlS').options[0].textContent = 'Soil of the task, 200 kN/m²';
    $('#dlSn').innerHTML = so.manual ? so.range : 'BS 8004: ' + so.range + '. Typical value, to confirm.';
    U.banner(null); U.why && U.why(null);
    U.dirty = true;
    U.emit('design', { pass: res.pass, task: st.task });
  }

  // ---- Test: 2 to 4 s of loading down the path, then the consequence at the weakest link
  function designKey() { return ['task', 'n', 'use', 'soil', 'a', 'b', 't', 'D', 'c', 'B', 'h'].map(function (k) { return st[k]; }).join('|'); }
  function setBusy(b) { ui.busy = b; U.locked = b; box.querySelectorAll('button,select,input').forEach(function (x) { x.disabled = b; }); }
  // cracks are physical, not cues: near-black, but drawn as screen-space strokes with a thin light edge so they read
  // on shaded concrete too (a 3D tube under the slab was lost in shadow)
  function crackLine(pts, r) { CUES.line(fx3, pts, 0x14100e, { w: (r || 0.01) >= 0.02 ? 5 : 4, halo: 1.5 }); }
  async function test() {
    if (ui.busy) return;
    if (ui.raf) { cancelAnimationFrame(ui.raf); ui.raf = 0; draw(); }
    var res = ui.res, g = res.gov, snap = designKey();
    setBusy(true);
    try {
      U.banner(null); U.clear(fx3);
      await U.shot(shotAll(), 600);
      U.sfx('thud', 0.5); pspeed = 3.2;
      await U.anim(1100, function (t) { drawArrows(res, 1 + 1.4 * t); });
      pspeed = 1;
      var key = null;
      if (res.pass) {
        U.sfx('ok');
        if (loadsOk()) {
          U.banner({ ok: true, hold: true, t: 'Holds', b: res.lvls.map(function (l) { return l.name.toLowerCase() + ' ' + pc(l.u) + ' %'; }).join(' · ') });
          key = ['s6d02', 's6d04', 's6d06'][st.task];
        } else {
          var tf = TASKS[st.task].fix;
          U.banner({ ok: true, hold: true, t: 'Holds, but not for this task', b: 'Task givens: ' + tf.n + ' storeys, bays ' + tf.a.toFixed(2) + ' × ' + tf.b.toFixed(2) + ' m, ' + useOf(tf).name.toLowerCase() + ', ' + soilOf(tf).name.toLowerCase() + ' (' + soilOf(tf).qa + ' kN/m²)' });
        }
      } else if (g.id === 'soil') {
        var fc = res.ws, over = Math.min(1, g.u - 1), s1 = 0.25 + 0.25 * over, xs = gx(fc.i), zs = gz(fc.j) - st.B / 2, xb = xs - st.B / 2 - 0.3;
        // look inside the footing that settles: its bars, the pressure bulb in the soil, the drop it makes
        st.eye = true; st.look = 'footI'; U.toolOn('eye', true); drawInside(res); drawCues(res);
        await U.shot(lookShot(), 500);
        ui.close = true; ui.pulse = false; drawCues(res); // close-up on the failure: no path or pulses across it, glow sized for this camera
        U.sfx('creak');
        await U.anim(1500, function (t) { var e = t * t * (3 - 2 * t); ui.def = { type: 'settle', i: fc.i, j: fc.j, s: s1 * e }; applyDef(); ins.position.y = -s1 * e; });
        U.clear(fx3);
        CUES.line(fx3, [V(xb - 0.12, -FD, zs), V(xb + 0.12, -FD, zs)], CUES.RED, { w: 5 }); // where the footing sat
        CUES.line(fx3, [V(xb, -FD, zs), V(xb, -FD - s1 + 0.06, zs)], CUES.RED, { w: 5 });
        CUES.chevron(fx3, V(xb, -FD - s1, zs), V(0, -1, 0), 0.08, CUES.RED, { w: 5 });
        U.impact([xs, -FD - s1, gz(fc.j)], { sfx: 'fail', size: 1.1, color: 9136197 });
        U.label('l6x', [xb, -FD - s1 / 2, zs], 'Footing ' + fc.name + ' settles (drawn exaggerated)', 'bad', 8);
        U.banner({ t: 'Soil overloaded under ' + fc.name, b: 'q ' + fm(fc.q, 0) + ' &gt; ' + res.qa + ' kN/m²: it settles more than its neighbours' });
        key = 's6d07';
      } else if (g.id === 'foot') {
        var ff = res.wf, xf = gx(ff.i), zf = gz(ff.j), hf = st.h / 1000, cc = st.c / 2000;
        st.eye = true; st.look = 'footI'; U.toolOn('eye', true); drawInside(res); drawCues(res);
        await U.shot(lookShot(), 500);
        ui.close = true; ui.pulse = false; drawCues(res); // close-up on the failure: no path or pulses across it, glow sized for this camera
        U.sfx('crack');
        await U.anim(1000, function (t) {
          ui.def = ff.fMode === 'punch' ? { type: 'punch', i: ff.i, j: ff.j, s: 0.06 * t } : null; applyDef();
          U.clear(fx3);
          if (ff.fMode === 'punch') {
            [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) { crackLine([V(xf + o[0] * cc + o[1] * 0.05, -FD + hf + 0.002, zf + o[1] * cc + o[0] * 0.05), V(xf + o[0] * (cc + 0.45 * t * hf * 2), -FD + hf * (1 - 0.9 * t), zf + o[1] * (cc + 0.45 * t * hf * 2))], 0.022); });
          } else {
            [-1, 1].forEach(function (sd) { crackLine([V(xf + sd * cc, -FD - 0.003, zf - st.B / 2 - 0.003), V(xf + sd * cc, -FD + hf * 0.7 * t, zf - st.B / 2 - 0.003)], 0.02); });
          }
        });
        U.impact([xf, -FD + hf, zf], { sfx: 'fail', size: 0.7 });
        U.label('l6x', [xf - st.B / 2, -FD + hf + 0.2, zf - st.B / 2], ff.fMode === 'punch' ? 'Punching cone round the column (cracks drawn wide)' : 'Bending crack at the column face (drawn wide)', 'bad', 8);
        U.banner({ t: (ff.fMode === 'punch' ? 'Punching failure' : 'Bending failure') + ' in footing ' + ff.name, b: ff.fMode === 'punch' ? 'v ' + fm(ff.f.v1_MPa, 3) + ' &gt; v<sub>c</sub> ' + fm(ff.vc, 3) + ' N/mm² round the column' : 'the footing is too thin for its bending moment' });
        key = 's6d08';
      } else if (g.id === 'col') {
        var cl = res.wc, cm = findMesh(function (u) { return u.part === 'col' && u.k === 1 && u.col[0] === cl.i && u.col[1] === cl.j; });
        // look inside the ground storey: crush = cover spalls and the bars buckle outward between two links;
        // slender = the storey bows sideways with its bars (both drawn exaggerated)
        st.eye = true; st.look = 'colI'; U.toolOn('eye', true); drawInside(res); drawCues(res);
        await U.shot({ box: new R.Box3(V(gx(cl.i) - 1.2, -0.5, gz(cl.j) - 1.2), V(gx(cl.i) + 1.2, lvY(1) + 0.4, gz(cl.j) + 1.2)), dir: [-0.55, 0.2, -0.8], fov: 30 }, 500);
        ui.close = true; ui.pulse = false; drawCues(res); // close-up on the failure: no path or pulses across it, glow sized for this camera
        U.sfx('creak');
        var bk = cl.mode === 'buckle', amp = bk ? 0.16 : 0.07, kq = -1;
        await U.anim(1200, function (t) {
          var e = t * t, k5 = Math.round(e * 4);
          ui.def = bk ? { type: 'bow', m: cm, s: amp * e } : null; applyDef();
          if (k5 !== kq) { kq = k5; ui.colFail = { i: cl.i, j: cl.j, mode: cl.mode, amp: amp * k5 / 4 }; drawInside(res); }
        });
        var fT = -FD + st.h / 1000, ym = (lvY(1) + fT) / 2, y0l = fT + 0.075, zA = y0l + Math.round((ym - y0l) / 0.15) * 0.15, zM = bk ? ym : zA + 0.075, cw = st.c / 2000, xcl = gx(cl.i), zcl = gz(cl.j);
        U.clear(fx3);
        if (!bk) {
          U.into(fx3, function () { // cover pieces spall off at the failing zone
            for (var q = 0; q < 8; q++) { var sd = q % 2 ? 1 : -1, f = Math.floor(q / 2); E.Me(0.1, 0.07, 0.05, M.conc, xcl + sd * (cw + 0.12 + 0.05 * f), zM - 0.05 - 0.13 * f, zcl - cw - 0.06 - 0.03 * f); }
          });
          [-1, 1].forEach(function (sd) { var xx = xcl + sd * (cw + 0.05); CUES.line(fx3, [V(xx - sd * 0.04, zA - 0.04, zcl - cw), V(xx, zA - 0.04, zcl - cw), V(xx, zA + 0.19, zcl - cw), V(xx - sd * 0.04, zA + 0.19, zcl - cw)], CUES.RED, { w: 5 }); });
        }
        U.impact([xcl, zM, zcl], { sfx: 'fail', size: 0.7 });
        U.label('l6x', [xcl - cw, zM, zcl - cw], bk ? 'Slender column bows at mid height (drawn exaggerated)' : 'Concrete crushes, bars buckle between links (drawn exaggerated)', 'bad', 8);
        U.banner({ t: 'Column ' + cl.name + ' overloaded', b: cl.mode === 'buckle' ? 'L<sub>e</sub>/D ' + fm(res.slen.LeOverD, 1) + ' &gt; 12: slender' : 'N<sub>u</sub> ' + fm(cl.Pu, 0) + ' &gt; ' + fm(res.cap.Ncap_kN, 0) + ' kN in the ground storey' });
        key = 's6d09';
      } else if (g.id === 'beam') {
        var wb = res.wb, bmm = beamMesh(wb), p = bmm.position, gp = bmm.geometry.parameters, ax = wb.dir === 'x', Lb = ax ? gp.width : gp.depth, Db = st.D / 1000, fz = ax ? p.z - BW / 2000 - 0.006 : p.z, fxx = ax ? p.x : p.x - BW / 2000 - 0.006;
        function P(u, y) { return ax ? V(p.x + u, y, fz) : V(fxx, y, p.z + u); }
        await U.shot({ box: new R.Box3(V(p.x - (ax ? Lb / 2 : 0.6), p.y - 1.0, p.z - (ax ? 0.6 : Lb / 2)), V(p.x + (ax ? Lb / 2 : 0.6), p.y + 0.6, p.z + (ax ? 0.6 : Lb / 2))), dir: ax ? [-0.2, 0.15, -0.97] : [-0.97, 0.15, -0.2], fov: 30 }, 500);
        ui.close = true; ui.pulse = false; drawCues(res); // close-up on the failure: no path or pulses across it, glow sized for this camera
        U.sfx('crack');
        await U.anim(1100, function (t) {
          ui.def = wb.mode === 'shear' ? null : { type: 'sag', m: bmm, s: 0.12 * t }; applyDef();
          U.clear(fx3);
          if (wb.mode === 'shear') {
            [-1, 1].forEach(function (sd) { for (var q = 0; q < 2; q++) { var u0 = sd * (Lb / 2 - 0.15 - q * 0.3); crackLine([P(u0, p.y - Db / 2 + 0.02), P(u0 - sd * 0.45 * Db * t, p.y - Db / 2 + 0.02 + 0.8 * Db * t)], 0.018); } });
          } else {
            for (var q2 = -2; q2 <= 2; q2++) crackLine([P(q2 * 0.25, p.y - Db / 2 - 0.12 * t * (1 - Math.pow(q2 * 0.25 / (Lb / 2), 2))), P(q2 * 0.25, p.y - Db / 2 + Db * 0.6 * t)], 0.018);
            if (wb.mode === 'crush') for (var q3 = -2; q3 <= 2; q3++) crackLine([P(q3 * 0.12 - 0.05, p.y + Db / 2 - 0.12 * t), P(q3 * 0.12, p.y + Db / 2 - 0.02), P(q3 * 0.12 + 0.05, p.y + Db / 2 - 0.12 * t)], 0.014);
          }
        });
        U.impact([p.x, p.y, p.z], { sfx: 'fail', size: 0.6 });
        U.label('l6x', [p.x, p.y - Db / 2 - 0.25, p.z], wb.mode === 'shear' ? 'Diagonal shear cracks near the supports (drawn wide)' : wb.mode === 'crush' ? 'Top concrete crushes at mid span (drawn wide)' : 'Sags and cracks at mid span (drawn exaggerated)', 'bad', 8);
        U.banner({ t: 'Beam fails: ' + beamName(wb), b: wb.mode === 'shear' ? 'v &gt; v<sub>c</sub> + links near the supports' : wb.mode === 'crush' ? 'K &gt; K\' = 0.156: the section is too shallow' : 'L/d actual &gt; L/d allowable: it sags' });
        key = 's6d13';
      } else {
        var sm = slabMesh();
        await U.shot({ box: new R.Box3(V(sm.position.x - st.a / 2, lvY(1) - 1.4, sm.position.z - st.b / 2), V(sm.position.x + st.a / 2, lvY(1) + 0.3, sm.position.z + st.b / 2)), dir: [-0.45, -0.12, -0.88], fov: 32 }, 500);
        ui.close = true; ui.pulse = false; drawCues(res); // close-up on the failure: no path or pulses across it, glow sized for this camera
        U.sfx('crack');
        await U.anim(1100, function (t) {
          ui.def = { type: 'sagSlab', m: sm, s: 0.16 * t }; applyDef();
          U.clear(fx3);
          for (var q = -1; q <= 1; q++) crackLine([V(sm.position.x - st.a * 0.3, lvY(1) - st.t / 1000 - 0.16 * t - 0.004, sm.position.z + q * 0.3), V(sm.position.x + st.a * 0.3, lvY(1) - st.t / 1000 - 0.16 * t - 0.004, sm.position.z + q * 0.3)], 0.02);
        });
        U.impact([sm.position.x, lvY(1) - 0.2, sm.position.z], { sfx: 'fail', size: 0.6 });
        U.label('l6x', [sm.position.x, lvY(1) - 0.5, sm.position.z - st.b / 2], 'Slab sags and cracks underneath (drawn exaggerated)', 'bad', 8);
        U.banner({ t: 'Slab too thin', b: res.slab.uD >= res.slab.uK ? 'L/d actual &gt; L/d allowable' : 'K &gt; K\' = 0.156' });
        key = 's6d11';
      }
      ui.prev = { s: JSON.parse(JSON.stringify(st)), res: res };
      if (key) say(key);
      // count only the design that was tested, as it stands now, with the task givens
      var still = designKey() === snap && compute().pass;
      if (res.pass && still) U.emit('test', { stood: true, task: st.task, n: st.n, use: st.use, soil: st.soil, a: st.a, b: st.b, loads: loadsOk() });
      else U.emit('test', { stood: false, task: st.task, gov: res.pass ? 'changed' : g.id });
      strip.innerHTML = stripHtml(res);
      await U.wait(500);
    } finally { setBusy(false); }
  }

  // ---- undo/redo/reset/See inside on the design variables only
  U.history({ get: function () { return JSON.parse(JSON.stringify(st)); }, set: function (v) { if (ui.busy) return; Object.assign(st, v); req(); } }); // no undo/redo (Ctrl+Z/Y) during a Test
  var u0 = U.undo, r0 = U.redo; if (u0) U.undo = function () { if (!ui.busy) u0(); }; if (r0) U.redo = function () { if (!ui.busy) r0(); }; // review L6 #5
  function preset(i, keepSizes) {
    var t = TASKS[i];
    st.task = i; Object.assign(st, t.fix);
    if (!keepSizes && t.start) Object.assign(st, t.start);
  }
  U.tool('reset', function () { if (ui.busy) return; U.mark(); preset(st.task); if (!TASKS[st.task].start) Object.assign(st, TASKS[0].start); req(); U.shot(shotAll(), 900); });
  function eyeTool() { st.eye = !st.eye; ui.close = false; U.toolOn('eye', st.eye); if (st.eye) U.shot(lookShot(), 900); if (ui.res) { labels(ui.res); drawInside(ui.res); drawCues(ui.res); } U.dirty = true; U.emit('eye'); }
  U.tool('eye', eyeTool);
  // QA hooks for fix/qa/cue-gate.mjs (no effect on the trainee's flow). over() = the task 1 preset (soil under B2
  // 128 %, slab 108 %); views put another member at the weakest link by searching the steppers with compute()
  function qaFind(id) {
    var base = JSON.parse(JSON.stringify(st)), best = null;
    var grid = { c: [200, 250, 300, 400], D: [300, 400, 500, 600], t: [100, 150, 175, 200, 250], B: [1.5, 1.8, 2.2, 2.6], h: [300, 450, 600] };
    grid.c.forEach(function (c) { grid.D.forEach(function (D) { grid.t.forEach(function (t) { grid.B.forEach(function (B) { grid.h.forEach(function (h) {
      if (best) return;
      var r = compute(Object.assign({}, base, { c: c, D: D, t: t, B: B, h: h }));
      if (!r.pass && r.gov.id === id && r.lvls.filter(function (l) { return l.u > 1; }).length === 1) best = { c: c, D: D, t: t, B: B, h: h };
    }); }); }); }); });
    return best;
  }
  async function qaOver() { if (ui.busy) return; preset(0); st.cmp = false; st.look = 'gov'; if (st.eye) eyeTool(); draw(); U.showFx(false); U.shot(shotAll(), 600); await U.wait(1200); }
  window.__cue = {
    util: function () { return ui.res ? ui.res.gov.u : null; },
    over: qaOver,
    eye: function (on) { if (!!on !== st.eye) eyeTool(); return U.wait(300); },
    test: async function () { await qaOver(); return test(); },
    view: async function (n) {
      await qaOver();
      if (n === 'beam300') { st.D = 300; st.look = 'beamI'; st.eye = true; U.toolOn('eye', true); draw(); await U.shot(lookShot(), 600); return; }
      if (n === 'fx') { U.showFx(true); await test(); return; }
      var m = /^(soil|foot|col|beam|slab)(Eye)?$/.exec(n); if (!m) return;
      var f = m[1] === 'soil' ? {} : qaFind(m[1]); if (!f) { console.warn('__cue.view: no state for ' + n); return; }
      Object.assign(st, f); draw();
      if (m[2]) { eyeTool(); await U.wait(1200); return; }
      await test();
    },
    find: qaFind
  };
  U.cfg.praise = LINES.s6d12;

  function taskTest(i) {
    return function (ev, d) { var t = TASKS[i].fix; return ev === 'test' && d && d.stood && d.loads === true && d.task === i && d.n === t.n && d.use === t.use && d.soil === t.soil && d.a === t.a && d.b === t.b; };
  }
  var steps = [
    { t: 'Three storeys', prompt: 'Make every member pass, then press Test', shot: shotAll,
      enter: function () { preset(0); req(); say('s6d01'); }, test: taskTest(0), after: function () { ui.done[0] = true; } },
    { t: 'Firm clay', prompt: 'Design the block for firm clay, then press Test', shot: shotAll,
      enter: function () { preset(1, true); req(); say('s6d03'); }, test: taskTest(1), after: function () { ui.done[1] = true; } },
    { t: 'Fourth storey', prompt: 'Add the fourth storey, then press Test', shot: shotAll,
      enter: function () { preset(2, true); req(); say('s6d05'); }, test: taskTest(2), after: function () { ui.done[2] = true; } }
  ];
  preset(0); draw();
  (async function () {
    await U.start();
    E.bridge.set('RC_S6_Explored', true);
    window.__live = true;
    var run = U.runSteps(steps);
    var fin = $('#bNext').onclick;
    $('#bNext').onclick = function () {
      var last = U.idx >= steps.length - 1;
      if (!last) { fin(); return; }
      if (!ui.done.every(Boolean)) { U.toast('First pass every design task: design it, then press Test'); return; }
      fin();
      U.stopSay(); setTimeout(function () { say('s6d12'); }, 50); // S6_DONE speaks the old line; new line s6d12
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
