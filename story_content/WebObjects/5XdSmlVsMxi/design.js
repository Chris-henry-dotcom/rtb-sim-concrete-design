/* BDCBD501 design lab L1: soil and footing (slot S5, web object 5XdSmlVsMxi).
   Runs after lab.js (engine, exports window.__eng, fix/ENGINE-API.md) and calc.js (generated from
   fix/designlab/calc.mjs by `node fix/designlab/gen-calc.mjs 5XdSmlVsMxi`). Every number shown comes from window.RCcalc
   (padFootingDesign with the B02 rulings OQ-06/07/09/11/12/19/21; concreteShearCapacity with the trainee's bars).
   The trainee changes the building (storeys, loads per storey), the soil (BS 8004 table) and the footing (B, h,
   cover, bars); forces, soil pressure, Formulas panel, checks and teaching cues update live. Test plays the loading
   and its consequence. Compare overlays a correct design under the same load. RC_S5_Done is set only when every
   design task has passed. */
(function () {
  'use strict';
  var E = window.__eng, C = window.RCcalc;
  if (!E || !C) { console.error('design.js: lab.js or calc.js missing'); return; }
  var U = E.lab, S = E.sim, k = S.st, R = E.R, I = E.I, $ = E.He;

  // ---- manual data. T = fix/manual/BDCBD501-trainee.txt line.
  // Summative footing (T L5129, L5144-L5157): column 220 × 220, Gk 590.697 kN, Qk 225 kN, safe bearing 200 kN/m²,
  // fcu 37, fy 460, cover 50 mm, 16 mm bars, footing and soil 10 % (T L5145). Not given there: h, B, spacing (the
  // same ASSUMED values as calc.test.mjs). Task 55 (T L4952): 400 mm square column, 1000 kN dead, 350 kN imposed,
  // safe bearing 200 kN/m², fcu 35, fy 460; no self-weight term (ANSWER self-weight), so B = 2.6 m.
  var GAMMA_M = 1.25; // OQ-09 ruling (BS 8110), chip on the vc row
  var TASKS = [
    { id: 'sum', name: 'Worked example: summative footing', ref: '', col: 220, fcu: 37, fy: 460, sw: true,
      n: 3, gk: 590.697 / 3, qk: 75, design: { B: 2.25, h: 500, cover: 50, dia: 16, s: 250 } },
    { id: 't55', name: 'Task 55', ref: '', col: 400, fcu: 35, fy: 460, sw: false,
      n: 4, gk: 250, qk: 87.5, design: null }
  ];
  // OQ-11 ruling: BS 8004:1986 Table 1 presumed bearing values (calc SOIL_BEARING), labelled "typical value, to
  // confirm"; 'task' = the manual's task value 200 kN/m² (soil not stated in the task).
  var SOILS = ['task'].concat(C.SOIL_BEARING.map(function (r) { return r.id; }));
  function soilOf(id) { return C.soilBearing(id, 200); }
  var DIAS = [12, 16, 20, 25];
  var SPACINGS = C.SLAB_TABLE_SPACINGS_mm.filter(function (s) { return s >= 100; });
  var LIM = { n: [1, S.NMAX], gk: [20, 400, 5], qk: [0, 200, 2.5], B: [1.0, 3.6, 0.05], h: [300, 900, 25], cover: [50, 75, 5] };

  // ---- voice: Imani lines (fix/voice/requests-L1.txt). Until a clip is in narr/, the caption and the signer run
  // from the text and no audio file is requested. Add a key to CLIPS when its mp3 and words.json arrive.
  var CLIPS = { s5d01: 1, s5d02: 1, s5d03: 1, s5d04: 1, s5d06: 1, s5d07: 1, s5d08: 1, s5d09: 1, s5d10: 1 };
  var LINES = {
    s5d01: 'This footing is the worked example from the manual. Change the building, the soil and the footing, and watch the forces. Then press Test.',
    s5d02: 'It stands. The soil pressure is below the safe bearing pressure, and the footing passes bending and punching.',
    s5d03: 'Task fifty five. One thousand kilonewtons dead load and three hundred and fifty imposed, on a four hundred millimetre column. Design the footing so that every check passes, then test it.',
    s5d04: 'Well designed. Every check passes for task fifty five, and the footing stands.',
    s5d06: 'Punching shear. The column pushes a cone of concrete through the footing. Make the footing thicker.',
    s5d07: 'The footing bends too much. Cracks open under the face of the column. Add steel or make the footing thicker.',
    s5d08: 'Lab one is done. You designed a footing that the soil can carry.',
    s5d09: 'Shear. A diagonal crack runs through the footing, a little way out from the column face. Make the footing thicker.',
    s5d10: 'The soil is overloaded. The pressure is higher than the soil can carry, so the footing sinks into the ground. Make the footing wider.'
  };
  function say(key) {
    var text = LINES[key];
    if (CLIPS[key]) return U.say(key, text);
    if (U.sign && U.sign.cache) U.sign.cache[''] = null; // signer uses the caption text, no words.json fetch
    return U.say('', text);
  }

  // ---- state
  var d0 = TASKS[0];
  var st = { task: 0, soil: 'task', sw: true, n: d0.n, gk: d0.gk, qk: d0.qk, B: 2.25, h: 500, cover: 50, dia: 16, s: 250 };
  var ui = { raf: 0, busy: false, res: null, stoodTask: {}, done: [false, false], cmp: false, fail: null };
  function task() { return TASKS[st.task]; }
  // Review L1 (HIGH): a task counts only with the task's own building loads and self-weight setting.
  function loadsOk() { var t = TASKS[st.task]; return st.n === t.n && Math.abs(st.gk - t.gk) < 1e-6 && Math.abs(st.qk - t.qk) < 1e-6 && !!st.sw === !!t.sw; }

  // ---- calculation: calc.mjs padFootingDesign + the trainee's bars (As provided, vc, spacing rules)
  function compute(s) {
    s = s || st;
    var t = TASKS[s.task], so = soilOf(s.soil);
    var Gk = s.n * s.gk, Qk = s.n * s.qk;
    var r = C.padFootingDesign({ Gk_kN: Gk, Qk_kN: Qk, includeSelfWeight: !!s.sw, qa_kPa: so.value_kPa, colB_mm: t.col, colC_mm: t.col,
      h_mm: s.h, cover_mm: s.cover, barDia_mm: s.dia, fcu_MPa: t.fcu, fy_MPa: t.fy, gammaM: GAMMA_M, B_m: s.B });
    var AsProv = C.barsAreaPerM_mm2(s.dia, s.s);
    var vcT = C.concreteShearCapacity({ As_mm2: AsProv, b_mm: 1000, d_mm: r.d_mm, gammaM: GAMMA_M, fcu_MPa: t.fcu, withLinks: false });
    var mesh = C.footingMeshBBS({ Lx_mm: s.B * 1000, Ly_mm: s.B * 1000, cover_mm: s.cover, spacing_mm: s.s, barDia_mm: s.dia });
    var f = r.flexure, chk = {}, ck = {};
    r.checks.forEach(function (c) { chk[c.id] = c.ok; ck[c.id] = c; });
    var AsNeed = r.As_design_mm2PerM, vc = vcT.vc_MPa;
    var maxS = Math.min(3 * r.d_mm, 300);
    var res = {
      Gk: Gk, Qk: Qk, r: r, f: f, so: so, qa: so.value_kPa, AsProv: AsProv, vcT: vcT, vc: vc, mesh: mesh, maxS: maxS, ck: ck,
      cue: C.settlementCue({ q_kPa: r.qreal_kPa, qa_kPa: so.value_kPa, B_m: s.B }),
      ok: {
        bearing: chk.bearing,
        k: chk.k === true, zmin: chk.zmin === true,
        steel: AsNeed !== null && AsProv >= AsNeed - 1e-9,
        spacing: s.s - s.dia >= 75 && s.s <= maxS,
        v0: chk.v0,
        punch: vc > r.v1_MPa,
        shear: r.vShear_MPa !== null && r.vShear_MPa < vc // null only when no table spacing reaches As (bending fails then)
      }
    };
    res.uS = 100 * r.size.utilisation;
    res.uB = AsNeed === null ? 200 : Math.max(100 * AsNeed / AsProv, 100 * f.K / f.Kprime);
    res.uP = Math.max(100 * r.v0_MPa / r.v0Limit_MPa, 100 * r.v1_MPa / vc);
    res.uV = r.vShear_MPa === null ? 200 : 100 * r.vShear_MPa / vc;
    res.bend = !(res.ok.k && res.ok.zmin && res.ok.steel);
    res.punchFail = !(res.ok.v0 && res.ok.punch);
    res.pass = Object.keys(res.ok).every(function (x) { return res.ok[x]; });
    res.mode = !res.ok.bearing ? 'bear' : res.punchFail ? 'punch' : !res.ok.shear ? 'shear' : res.bend ? 'bend' : null;
    return res;
  }
  // Compare: the lightest correct design under the same load and soil (calc sizes B, picks the table spacing for the
  // trainee's bar; thickness = the first h from 300 mm in 25 mm steps where every calc check passes).
  var cmpCache = { key: '', v: null };
  function correct(s) {
    s = s || st;
    var key = [s.task, s.soil, s.sw, s.n, s.gk, s.qk, s.cover, s.dia].join('|');
    if (cmpCache.key === key) return cmpCache.v;
    var t = TASKS[s.task], so = soilOf(s.soil), v = null;
    if (so.value_kPa) {
      for (var h = 300; h <= 900 && !v; h += 25) {
        var r = C.padFootingDesign({ Gk_kN: s.n * s.gk, Qk_kN: s.n * s.qk, includeSelfWeight: !!s.sw, qa_kPa: so.value_kPa, colB_mm: t.col, colC_mm: t.col,
          h_mm: h, cover_mm: s.cover, barDia_mm: s.dia, fcu_MPa: t.fcu, fy_MPa: t.fy, gammaM: GAMMA_M });
        if (r.ok && r.spacing && r.spacing.table && r.B_m <= LIM.B[1] + 1e-9) {
          var c = Object.assign({}, s, { B: r.B_m, h: h, s: r.spacing.table.spacing_mm });
          var cr = compute(c);
          if (cr.pass) v = { st: c, res: cr };
        }
      }
    }
    cmpCache = { key: key, v: v };
    return v;
  }
  window.__L1 = { st: st, ui: ui, compute: compute, correct: correct, tasks: TASKS, soils: SOILS, gammaM: GAMMA_M };

  // ---- formatting with units
  function fm(v, dp) { return v === null || v === undefined || isNaN(v) ? '·' : (+v).toFixed(dp); }
  var DP = { 'kN': 1, 'kN/m²': 1, 'm²': 3, 'm': 3, 'kNm': 1, 'mm': 0, 'mm²': 0, 'mm²/m': 0, 'N/mm²': 3, '': 3 };
  function fv(stp) { return fm(stp.value, DP[stp.unit] === undefined ? 2 : DP[stp.unit]) + (stp.unit ? ' ' + stp.unit : ''); }
  var CHIPC = { 'manual': 'm', 'manual note': 'n', 'BS 8110, to confirm': 'b', 'typical value, to confirm': 't' };
  function esc(x) { return String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function chip(c, note) {
    c = c || 'manual';
    return ' <span class="l1c l1c-' + (CHIPC[c] || 'm') + '">' + c + '</span>' + (note ? '<span class="l1n">' + esc(note) + '</span>' : '');
  }

  // ---- panel
  var css = document.createElement('style');
  css.textContent =
    '#dl{position:absolute;right:16px;top:78px;width:384px;max-height:508px;overflow:auto;background:rgba(255,255,255,.96);border-radius:16px;padding:10px 14px 12px;box-shadow:0 8px 24px rgba(15,46,90,.2);z-index:8;border-top:6px solid var(--amb);box-sizing:border-box}' +
    'body.pre #dl{visibility:hidden}#dl .k{font-size:11px;letter-spacing:.14em;font-weight:800;color:#b97800}' +
    '#dl h4{margin:2px 0 2px;font-size:17px;color:var(--navy)}#dl .gv{margin:0 0 6px;font-size:12px;line-height:1.35;color:var(--muted)}' +
    '#dl .sec{margin:4px 0 1px;font-size:11px;font-weight:800;letter-spacing:.12em;color:var(--navy);opacity:.8}' +
    '#dl .g2{display:grid;grid-template-columns:1fr 1fr;gap:4px 10px}#dl .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px 8px}' +
    '#dl .stp{display:flex;flex-direction:column;font-size:11px;color:var(--muted);font-weight:700}' +
    '#dl .stp div{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);border-radius:9px;height:25px;margin-top:1px}' +
    '#dl .stp button{width:24px;height:23px;border:0;background:#eef3f9;color:var(--navy);font-size:16px;font-weight:800;cursor:pointer;border-radius:8px}' +
    '#dl .stp button:focus-visible,#dl select:focus-visible,#dl #dlT:focus-visible{outline:3px solid var(--blue);outline-offset:1px}' +
    '#dl .stp b{font-size:13px;color:var(--ink);white-space:nowrap}' +
    '#dl select{width:100%;height:26px;border:1px solid var(--line);border-radius:9px;font:inherit;font-size:13px;color:var(--ink);background:#fff;margin-top:2px}' +
    '#dl .sl{display:flex;justify-content:space-between;align-items:baseline;font-size:11px;font-weight:700;color:var(--muted)}#dl .sl b{font-size:16px;color:var(--ink)}' +
    '#dl .tg{justify-content:flex-start;gap:6px;margin-top:3px;cursor:pointer}#dl .tg input{accent-color:var(--blue)}' +
    '#dl input[type=range]{width:100%;height:22px;margin:0;accent-color:var(--blue);cursor:pointer}' +
    '#dl .nu{margin:2px 0 0;font-family:"Cambria Math","Times New Roman",serif;font-size:15px;color:var(--ink)}' +
    '#dl .note{font-size:11px;color:#5d6b7c;margin-top:2px;line-height:1.3}' +
    '#dl .ck{display:flex;flex-wrap:wrap;gap:3px;margin-top:4px}#dl .ck span{font-size:10.5px;font-weight:700;border-radius:7px;padding:2px 6px;background:#fee2e2;color:var(--red)}#dl .ck span.ok{background:#dcfce7;color:#15803d}' +
    '#dl table{width:100%;border-collapse:collapse;font-size:11.5px;margin-top:4px}#dl td,#dl th{padding:2px 4px;text-align:right;border-bottom:1px solid var(--line)}#dl th{color:var(--muted);font-size:10.5px}#dl td:first-child,#dl th:first-child{text-align:left;color:var(--muted)}#dl td.bad{color:var(--red);font-weight:800}#dl td.ok{color:#15803d;font-weight:800}' +
    '#dlKt{padding-bottom:40px}' +
    '#dl #dlT{position:sticky;bottom:-12px;box-shadow:0 -6px 10px rgba(255,255,255,.95);margin-top:6px;width:100%;height:34px;border:0;border-radius:12px;background:var(--navy);color:#fff;font:inherit;font-size:15px;font-weight:800;cursor:pointer;letter-spacing:.04em}#dl #dlT:disabled{opacity:.5;cursor:default}' +
    '.l1c{display:inline-block;font-size:9.5px;font-weight:800;line-height:1;border-radius:6px;padding:2px 5px;margin-left:3px;vertical-align:1px;white-space:nowrap;font-family:inherit;font-style:normal}' +
    '.l1c-m{background:#e0ecff;color:#1d4ed8}.l1c-n{background:#fef3c7;color:#92400e}.l1c-b{background:#ede9fe;color:#6d28d9}.l1c-t{background:#ffedd5;color:#c2410c}' +
    '.l1n{display:block;font-size:10px;line-height:1.25;color:#7c5a12;margin-top:1px}';
  document.head.appendChild(css);
  function stepper(id, label) {
    return '<label class="stp"><span>' + label + '</span><div><button type="button" data-k="' + id + '" data-d="-1" aria-label="' + label + ' less">−</button><b id="dlv_' + id + '"></b><button type="button" data-k="' + id + '" data-d="1" aria-label="' + label + ' more">+</button></div></label>';
  }
  function soilOption(id) {
    var so = soilOf(id);
    if (id === 'task') return '<option value="task">Soil of the task, 200 kN/m²</option>';
    if (so.value_kPa === null) return '<option value="' + id + '" disabled>' + so.type + ': not applicable</option>';
    return '<option value="' + id + '">' + so.type + ', ' + so.value_kPa + ' kN/m²</option>';
  }
  var box = document.createElement('div');
  box.id = 'dl'; box.setAttribute('role', 'group'); box.setAttribute('aria-labelledby', 'dlH');
  box.innerHTML =
    '<div class="k">DESIGN TASK</div><h4 id="dlH"></h4><p class="gv" id="dlG"></p>' +
    '<div class="sec">Building load on the column</div>' +
    '<div class="g3">' + stepper('n', 'Storeys') + stepper('gk', 'Dead per storey') + stepper('qk', 'Imposed per storey') + '</div>' +
    '<label class="sl tg"><input type="checkbox" id="dlW"><span>include footing self-weight (10 %)</span></label>' +
    '<div class="nu" id="dlN" aria-live="polite"></div>' +
    '<div class="sec">Soil</div><select id="dlS" aria-label="Soil type">' + SOILS.map(soilOption).join('') +
    '</select><div class="note" id="dlSn"></div>' +
    '<div class="sec">Footing</div>' +
    '<label class="sl" for="dlB"><span>Width B (square)</span><b id="dlBv"></b></label>' +
    '<input id="dlB" type="range" min="' + LIM.B[0] + '" max="' + LIM.B[1] + '" step="' + LIM.B[2] + '">' +
    '<div class="g2">' + stepper('h', 'Thickness h') + stepper('cover', 'Cover') + stepper('dia', 'Bar diameter') + stepper('s', 'Bar spacing') + '</div>' +
    '<div class="ck" id="dlC" aria-live="polite"></div>' +
    '<label class="sl tg"><input type="checkbox" id="dlK"><span>Compare with a correct design (same load)</span></label>' +
    '<div id="dlKt"></div>' +
    '<button type="button" id="dlT">Test: load the building</button>';
  $('#stage').appendChild(box);
  var slider = $('#dlB');

  var safe0 = U.safe;
  U.safe = function () { var s = safe0(); s.x1 = Math.min(s.x1, 1186); return s; };

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function bump(key, dir) {
    if (ui.busy) return;
    U.mark();
    if (key === 'dia') { st.dia = DIAS[clamp(DIAS.indexOf(st.dia) + dir, 0, DIAS.length - 1)]; }
    else if (key === 's') { st.s = SPACINGS[clamp(SPACINGS.indexOf(st.s) + dir, 0, SPACINGS.length - 1)]; }
    else if (key === 'n') { st.n = clamp(st.n + dir, LIM.n[0], LIM.n[1]); }
    else { var L = LIM[key]; st[key] = clamp(Math.round((st[key] + dir * L[2]) / L[2]) * L[2], L[0], L[1]); }
    req();
  }
  box.addEventListener('click', function (e) { var b = e.target.closest('button[data-k]'); if (b) bump(b.dataset.k, +b.dataset.d); });
  var marking = false;
  slider.addEventListener('input', function () { if (ui.busy) return; if (!marking) { U.mark(); marking = true; } st.B = Math.round(+slider.value * 100) / 100; req(); });
  slider.addEventListener('change', function () { marking = false; });
  $('#dlS').addEventListener('change', function () { U.mark(); st.soil = this.value; req(); });
  $('#dlT').addEventListener('click', function () { test(); });
  $('#dlW').addEventListener('change', function () { U.mark(); st.sw = this.checked; req(); });
  $('#dlK').addEventListener('change', function () { ui.cmp = this.checked; req(); });

  // ---- 3D groups
  var G = S.groups, FB = -S.pit[0] + 0.075; // footing underside (pit depth 1.5 m, blinding 75 mm), scene constants
  var fa = new R.Group(); U.G.add(fa);           // load arrows down the load path
  var cg = new R.Group(); U.G.add(cg);           // teaching cues (pulses, bulb, tension lines, chevrons, glow)
  var kg = new R.Group(); U.G.add(kg);           // Compare: outline of the correct design
  var ins = new R.Group(); ins.position.y = -FB; G.footing.add(ins); // See inside: moves with the footing
  function shot() { return { box: new R.Box3(I(-2.3, -2.9, -1.9), I(2.3, 3.4, 2.0)), dir: [0.3, 0.27, 0.92], fov: 30, focus: [G.footing, G.pressure, G.cracks, fa, cg, ins] }; }
  function colScale() {
    var sc = task().col / 400; // the scene column is 400 mm; scale it to the task's column
    G.column.traverse(function (m) {
      if (!m.isMesh || !m.geometry || !m.geometry.parameters) return;
      var p = m.geometry.parameters;
      if (p.width && p.depth && Math.abs(p.width - p.depth) < 1e-6 && p.width <= 0.51) { m.scale.x = sc; m.scale.z = sc; }
    });
  }
  function hideOldMat() { G.footing.traverse(function (o) { if (o.userData && o.userData.part === 'mat') o.visible = false; }); }
  function arrow(y0, y1, color, r) { U.into(fa, function () { E.Ln(I(0, y0, 0), I(0, y1, 0), color, r); }); }
  function colorU(u) { var c = new R.Color(); if (u <= 0.8) c.setRGB(0.13 + 0.8 * (u / 0.8), 0.64, 0.29 * (1 - u / 0.8)); else c.setRGB(0.94, Math.max(0.15, 0.65 - 0.5 * Math.min(1, (u - 0.8) / 0.2)), 0.05); return c; }
  function drawInside(res, failing) {
    U.clear(ins);
    if (!k.eye) { U.unlabel('cv'); return; }
    var B = st.B, h = st.h / 1000, cv = st.cover / 1000, phi = st.dia / 1000, c = task().col / 1000, d = res.r.d_mm / 1000;
    var steel = E.de(9391916, { metal: 0.3 });
    var rr = Math.max(0.008, phi / 2);
    var n = res.mesh.nX.n, eff = B - 2 * cv, sp = n > 1 ? eff / (n - 1) : 0;
    U.into(ins, function () {
      for (var i = 0; i < n; i++) {
        var a = -eff / 2 + i * sp;
        E.Zn(I(-B / 2 + cv, FB + cv + phi / 2, a), I(B / 2 - cv, FB + cv + phi / 2, a), rr, steel, 6);
        E.Zn(I(a, FB + cv + 1.5 * phi, -B / 2 + cv), I(a, FB + cv + 1.5 * phi, B / 2 - cv), rr, steel, 6);
      }
    });
    // utilisation gradient (bending): largest at the column faces, nothing at the free edges (cantilever from the face)
    var g = new R.PlaneGeometry(B - 0.02, B - 0.02, 28, 28); g.rotateX(-Math.PI / 2);
    var pos = g.attributes.position, cols = [], ub = Math.min(2, res.uB / 100);
    for (var j = 0; j < pos.count; j++) {
      var m = Math.max(Math.abs(pos.getX(j)), Math.abs(pos.getZ(j)));
      var t = m <= c / 2 ? 1 : Math.pow(Math.max(0, (B / 2 - m) / (B / 2 - c / 2)), 2);
      var col = colorU(ub * t); cols.push(col.r, col.g, col.b);
    }
    g.setAttribute('color', new R.Float32BufferAttribute(cols, 3));
    var pl = new R.Mesh(g, new R.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.4, depthWrite: false, side: R.DoubleSide, toneMapped: false }));
    pl.position.y = FB + cv + 2.2 * phi; pl.renderOrder = 8; ins.add(pl);
    // punching cone: column perimeter at the top to the 1.5d perimeter at the bars (T L4916-L4917)
    var up = res.uP / 100;
    var cone = new R.Mesh(new R.CylinderGeometry(c / 2 * Math.SQRT2, (c + 3 * d) / 2 * Math.SQRT2, d, 4, 1, true),
      new R.MeshBasicMaterial({ color: failing === 'punch' ? 0xDC2626 : colorU(up), transparent: true, opacity: failing === 'punch' ? 0.7 : 0.38, depthWrite: false, side: R.DoubleSide, toneMapped: false }));
    cone.geometry.rotateY(Math.PI / 4); cone.position.y = FB + h - d / 2; cone.renderOrder = 9; ins.add(cone);
    U.label('cv', [B / 2 + 0.05, FB + cv / 2, B / 2], 'cover ' + st.cover + ' mm · ' + res.mesh.nX.n + ' bars Ø' + st.dia + ' at ' + st.s + ' each way', 'b', 1);
    hideOldMat();
  }

  // ---- teaching cues (STEER 16:25Z / 16:32Z): load path pulses down the column and into the soil, pressure bulb
  // contours in the ground, tension lines under the footing (bending), squeeze chevrons round the column (punching),
  // soil chevrons (bearing), a pulsing glow at the governing spot from 90 %, and a callout with the cause.
  var CUE = { pulses: [], rings: [], tension: null, squeeze: null, soilSq: null, glow: null, bulb: null, gov: null, on: true };
  var cueGeo = { sph: new R.SphereGeometry(0.055, 14, 10), ring: new R.RingGeometry(0.93, 1, 4, 1), glow: new R.SphereGeometry(0.16, 20, 14) };
  function bm(color, op) { return new R.MeshBasicMaterial({ color: color, transparent: true, opacity: op, depthWrite: false, depthTest: false, toneMapped: false, side: R.DoubleSide }); }
  function tube(pts, r, mat) { return new R.Mesh(new R.TubeGeometry(new R.CatmullRomCurve3(pts), Math.max(8, pts.length * 4), r, 5, false), mat); }
  function chevron(len, r, mat) { // a "V" pointing along +x in the xz plane
    var g = new R.Group();
    [1, -1].forEach(function (sd) { var m = new R.Mesh(new R.CylinderGeometry(r, r, len, 6), mat); m.rotation.y = 0; m.rotation.z = Math.PI / 2; var p = new R.Group(); p.add(m); m.position.x = -len / 2; p.rotation.y = sd * 0.6; g.add(p); });
    return g;
  }
  function governing(res) {
    var c = task().col / 1000, d = res.r.d_mm / 1000, B = st.B, ft = FB + st.h / 1000, q = fm(res.r.qreal_kPa, 0), qa = res.qa;
    var L = [
      { m: 'bear', u: res.uS, at: [0, FB - 0.2, B / 2], near: 'Soil pressure ' + fm(res.uS, 0) + ' % of q<sub>a</sub>', cause: 'Footing too small for this soil: q ' + q + ' kN/m² against q<sub>a</sub> ' + qa + ', the soil sinks' },
      { m: 'punch', u: res.uP, at: [c / 2 + 0.06, ft + 0.04, c / 2 + 0.06], near: 'Punching: v is ' + fm(res.uP, 0) + ' % of v<sub>c</sub> at 1.5d', cause: res.ok.v0 ? 'Footing too thin: the column punches a cone through it at 1.5d' : 'Footing too thin: shear at the column face above the limit' },
      { m: 'shear', u: res.uV, at: [c / 2 + d, FB + st.h / 2000, B / 2], near: 'Shear at d: ' + fm(res.uV, 0) + ' % of v<sub>c</sub>', cause: 'Footing too thin: a diagonal shear crack at d from the column face' },
      { m: 'bend', u: res.uB, at: [0, FB - 0.02, B / 2], near: 'Bending: the bottom bars are ' + fm(res.uB, 0) + ' % used at the column face', cause: !res.ok.k ? 'Footing too thin: the top concrete crushes at the column face' : 'Too little steel: the bottom bars yield under the column face' }
    ];
    L.sort(function (a, b) { return b.u - a.u; });
    return L[0];
  }
  function buildCues(res) {
    U.clear(cg);
    var B = st.B, c = task().col / 1000, ft = FB + st.h / 1000, top = S.colTop(), uMax = governing(res).u / 100;
    var col = colorU(Math.min(1.2, uMax)).getHex();
    CUE.pulses = []; CUE.rings = [];
    for (var i = 0; i < 4; i++) {
      var p = new R.Mesh(cueGeo.sph, bm(col, 0.95)); p.renderOrder = 20; cg.add(p); CUE.pulses.push(p);
      var rg = new R.Mesh(cueGeo.ring, bm(colorU(Math.min(1.2, res.uS / 100)).getHex(), 0.7)); rg.rotation.x = -Math.PI / 2; rg.rotation.z = Math.PI / 4; rg.renderOrder = 20; cg.add(rg); CUE.rings.push(rg);
    }
    CUE.top = top + 1.0; CUE.ft = ft; CUE.c = c; CUE.B = B; CUE.N = res.r.N_kN;
    // pressure bulb contours (shape after the Boussinesq isobars under a square footing: 0.8q, 0.5q, 0.2q; shape only)
    var bulb = new R.Group();
    [[0.8, 0.45, 0.56], [0.5, 0.8, 0.72], [0.2, 1.45, 0.95]].forEach(function (b, idx) {
      var D = b[1] * B, W = b[2] * B, pts = [];
      for (var j = 0; j <= 24; j++) { var ph = Math.PI * j / 24, s = Math.sin(ph); pts.push(I(-Math.cos(ph) * (B / 2 + (W - B / 2) * s), FB - 0.01 - D * s, 0)); }
      var uu = (res.uS / 100) * (1 - 0.25 * idx);
      var m = tube(pts, 0.014, bm(colorU(Math.min(1.2, uu)).getHex(), 0.75 - 0.15 * idx)); m.renderOrder = 18; bulb.add(m);
    });
    cg.add(bulb); CUE.bulb = bulb;
    // tension lines along the bottom face under the column (bending), tremble with utilisation
    CUE.tension = null;
    if (res.uB >= 50) {
      var tg = new R.Group(), tm = bm(colorU(Math.min(1.2, res.uB / 100)).getHex(), 0.95);
      for (var r = 0; r < 3; r++) {
        var pts2 = [], w = c / 2 + 0.35 + 0.1 * r;
        for (var x = -w; x <= w + 1e-6; x += w / 8) pts2.push(I(x, FB - 0.04 - 0.045 * r + (Math.round(x / (w / 8)) % 2 ? 0.012 : -0.012), B / 2 + 0.02));
        var tl = tube(pts2, 0.008, tm); tl.renderOrder = 21; tg.add(tl);
      }
      cg.add(tg); CUE.tension = tg; CUE.uB = res.uB / 100;
    }
    // squeeze chevrons on the footing top, pointing at the column (punching)
    CUE.squeeze = null;
    if (res.uP >= 50) {
      var sg = new R.Group(), sm = bm(colorU(Math.min(1.2, res.uP / 100)).getHex(), 0.95);
      for (var a = 0; a < 4; a++) {
        var ch = chevron(0.12, 0.012, sm), arm = new R.Group(); ch.rotation.y = Math.PI; ch.position.x = c / 2 + 0.22; arm.add(ch); arm.rotation.y = a * Math.PI / 2; arm.position.y = ft + 0.03; sg.add(arm);
      }
      sg.children.forEach(function (o) { o.traverse(function (m) { m.renderOrder = 21; }); });
      cg.add(sg); CUE.squeeze = sg; CUE.uP = res.uP / 100;
    }
    // soil chevrons under the footing pointing down (bearing)
    CUE.soilSq = null;
    if (res.uS >= 50) {
      var qg = new R.Group(), qm = bm(colorU(Math.min(1.2, res.uS / 100)).getHex(), 0.9);
      [-0.3, 0, 0.3].forEach(function (fx) { var ch2 = chevron(0.13, 0.012, qm); ch2.rotation.z = -Math.PI / 2; ch2.position.set(fx * B, FB - 0.18, B / 2); qg.add(ch2); });
      qg.traverse(function (m) { m.renderOrder = 21; });
      cg.add(qg); CUE.soilSq = qg; CUE.uS = res.uS / 100;
    }
    // pulse glow and callout at the governing spot from 90 %
    var gv = governing(res); CUE.gov = gv; CUE.glow = null;
    U.unlabel('cause');
    if (gv.u >= 90) {
      var gl = new R.Mesh(cueGeo.glow, bm(gv.u >= 100 ? 0xDC2626 : 0xF59E0B, 0.45)); gl.material.blending = R.AdditiveBlending; gl.position.set(gv.at[0], gv.at[1], gv.at[2]); gl.renderOrder = 22;
      cg.add(gl); CUE.glow = gl;
      U.label('cause', [gv.at[0] + 0.45, gv.at[1] - 0.35, gv.at[2]], gv.u >= 100 ? gv.cause : gv.near, gv.u >= 100 ? 'bad' : '', 6);
    }
  }
  var last = 0, t0 = performance.now();
  function tick(now) {
    requestAnimationFrame(tick);
  window.__L1.cue = CUE; // QA: the walker pauses the cue loop around screenshots (software GL)
    if (!CUE.on || document.hidden || now - last < 33) return;
    last = now;
    var t = (now - t0) / 1000, dy = -(S.Vn.s || 0);
    cg.position.y = dy;
    var span = CUE.top - CUE.ft, sz = 0.7 + 0.8 * Math.min(1, CUE.N / 2000);
    CUE.pulses.forEach(function (p, i) {
      var ph = (t / 1.8 + i / 4) % 1, rg = CUE.rings[i];
      if (ph < 0.6) { p.visible = true; rg.visible = false; p.position.set(0, CUE.top - span * (ph / 0.6), 0); p.scale.setScalar(sz); }
      else { p.visible = false; rg.visible = true; var e = (ph - 0.6) / 0.4, hs = CUE.c / 2 + (CUE.B / 2 + 0.25 - CUE.c / 2) * e; rg.scale.setScalar(hs * Math.SQRT2); rg.position.set(0, FB - 0.02 - 0.5 * e * CUE.B * 0.4, 0); rg.material.opacity = 0.75 * (1 - e); }
    });
    if (CUE.tension) { var a = 0.004 + 0.02 * Math.max(0, CUE.uB - 0.6); CUE.tension.position.set(Math.sin(t * 41) * a, Math.cos(t * 37) * a, 0); }
    if (CUE.squeeze) { var s = 0.04 * (0.5 + 0.5 * Math.sin(t * (4 + 6 * Math.min(1.2, CUE.uP)))); CUE.squeeze.children.forEach(function (arm) { arm.children[0].position.x = CUE.c / 2 + 0.22 - s; }); }
    if (CUE.soilSq) { var s2 = 0.05 * (0.5 + 0.5 * Math.sin(t * (4 + 6 * Math.min(1.2, CUE.uS)))); CUE.soilSq.position.y = -s2; }
    if (CUE.glow) { var g = 0.5 + 0.5 * Math.sin(t * 7); CUE.glow.scale.setScalar(0.8 + 0.5 * g); CUE.glow.material.opacity = 0.25 + 0.35 * g; }
    U.dirty = true;
  }
  requestAnimationFrame(tick);

  // ---- Compare: outline of the correct design, same load and soil, and a side by side table in the panel
  function drawCompare(res) {
    U.clear(kg); U.unlabel('cmp');
    var tb = $('#dlKt');
    if (!ui.cmp) { tb.innerHTML = ''; return; }
    var cc = correct();
    if (!cc) { tb.innerHTML = '<div class="note">No design up to 3.6 m and 900 mm works on this soil.</div>'; return; }
    var B = cc.st.B, h = cc.st.h / 1000;
    var eg = new R.LineSegments(new R.EdgesGeometry(new R.BoxGeometry(B, h, B)), new R.LineBasicMaterial({ color: 0x16A34A, transparent: true, opacity: 0.95, depthTest: false }));
    eg.position.set(0, FB + h / 2, 0); eg.renderOrder = 23; kg.add(eg);
    var sl = new R.Mesh(new R.BoxGeometry(B, h, B), bm(0x16A34A, 0.12)); sl.position.copy(eg.position); sl.renderOrder = 17; kg.add(sl);
    U.label('cmp', [-B / 2 - 0.05, FB + h + 0.05, B / 2], 'Correct design: B ' + fm(B, 2) + ' m, h ' + cc.st.h + ' mm, Ø' + cc.st.dia + ' at ' + cc.st.s, 'ok', 5);
    var cr = cc.res;
    function cell(u) { return '<td class="' + (u > 100 + 1e-9 ? 'bad' : 'ok') + '">' + fm(u, 0) + ' %</td>'; }
    tb.innerHTML = '<table><tr><th></th><th>YOURS</th><th>CORRECT</th></tr>' +
      '<tr><td>B × h</td><td>' + fm(st.B, 2) + ' m × ' + st.h + '</td><td>' + fm(B, 2) + ' m × ' + cc.st.h + '</td></tr>' +
      '<tr><td>Bars</td><td>Ø' + st.dia + ' at ' + st.s + '</td><td>Ø' + cc.st.dia + ' at ' + cc.st.s + '</td></tr>' +
      '<tr><td>Soil q / q<sub>a</sub></td>' + cell(res.uS) + cell(cr.uS) + '</tr>' +
      '<tr><td>Bending</td>' + cell(res.uB) + cell(cr.uB) + '</tr>' +
      '<tr><td>Punching</td>' + cell(res.uP) + cell(cr.uP) + '</tr>' +
      '<tr><td>Shear at d</td>' + cell(res.uV) + cell(cr.uV) + '</tr></table>';
  }

  // ---- Formulas panel from calc.mjs steps (chips and notes from calc `chip` / `note`)
  function stepOf(r, id) { return r.steps.filter(function (s) { return s.id === id; })[0]; }
  function rowsOf(ids, r, cls) {
    return ids.map(function (id) { return stepOf(r, id); }).filter(Boolean).map(function (s) {
      return [s.formula, s.label + ' (' + s.ref + ')' + chip(s.chip, s.note), fv(s), cls && cls[s.id] || ''];
    });
  }
  function ckRow(formula, c, value, ok) { return [formula, c.label + ' (' + c.ref + ')' + chip(c.chip, c.note), value, ok ? 'ok' : 'bad']; }
  function okc(b) { return b ? 'ok' : 'bad'; }
  function diagram(res) {
    // soil pressure under the footing vs allowable (uniform, T L4810-L4811)
    var q = res.r.qreal_kPa, qa = res.qa, sc = 70 / Math.max(q, qa), w = 180, x0 = 30, y0 = 30, col = res.ok.bearing ? '#16A34A' : '#DC2626';
    var hq = q * sc, ha = qa * sc, arr = '';
    var yq = y0 + 6 + hq, ya = y0 + ha - 1;
    if (Math.abs(yq - ya) < 13) { if (yq >= ya) yq = ya + 13; else ya = yq + 13; }
    for (var i = 0; i <= 8; i++) { var x = x0 + i * w / 8; arr += '<line x1="' + x + '" y1="' + (y0 + 26 + hq) + '" x2="' + x + '" y2="' + (y0 + 30) + '" stroke="' + col + '" stroke-width="2"/>'; }
    return '<svg viewBox="0 0 300 150" width="300" height="150" role="img" aria-label="Soil pressure under the footing">' +
      '<rect x="' + (x0 + w / 2 - 14) + '" y="0" width="28" height="22" fill="#b8bcc2"/><rect x="' + x0 + '" y="' + 22 + '" width="' + w + '" height="10" fill="#c4c9cf" stroke="#14243a" stroke-width=".6"/>' +
      '<rect x="' + x0 + '" y="' + (y0 + 2) + '" width="' + w + '" height="' + hq + '" fill="' + col + '" opacity=".18"/>' + arr +
      '<line x1="' + (x0 - 6) + '" x2="' + (x0 + w + 6) + '" y1="' + (y0 + 2 + ha) + '" y2="' + (y0 + 2 + ha) + '" stroke="#0F2E5A" stroke-dasharray="5 3" stroke-width="1.5"/>' +
      '<text x="' + (x0 + w + 8) + '" y="' + yq + '" font-size="11" fill="' + col + '">q ' + fm(q, 1) + '</text>' +
      '<text x="' + (x0 + w + 8) + '" y="' + ya + '" font-size="11" fill="#0F2E5A">safe ' + qa + '</text>' +
      '<text x="' + x0 + '" y="146" font-size="11" fill="#5d6b7c">B = ' + fm(st.B, 2) + ' m · kN/m²</text></svg>';
  }
  function formulas(res) {
    var r = res.r, t = task(), so = res.so, ck = res.ck;
    var rB = [
      ['G<sub>k</sub> = n × g<sub>k</sub>', st.n + ' storeys × ' + fm(st.gk, 1) + ' kN, loads from upper floors' + chip('manual'), fm(res.Gk, 1) + ' kN', ''],
      ['Q<sub>k</sub> = n × q<sub>k</sub>', st.n + ' storeys × ' + fm(st.qk, 1) + ' kN' + chip('manual'), fm(res.Qk, 1) + ' kN', '']
    ].concat(rowsOf(['sw', 'Gkf', 'N', 'Pu'], r, { N: 'hl', Pu: 'hl' }));
    var rS = rowsOf(['Amin', 'side', 'B', 'qreal', 'qu'], r, { qreal: okc(res.ok.bearing) + ' hl' });
    var soilTxt = st.soil === 'task' ? (st.task === 1 ? 'Soil not stated in the task' : 'Soil of the task') + ', safe bearing pressure (' + so.ref + ')'
      : so.type + ', ' + so.range + ' kN/m², the lab uses ' + so.value_kPa + ' (' + so.ref + ')';
    rS.splice(4, 0, ['q ≤ q<sub>a</sub>', soilTxt + chip(so.chip), fm(r.qreal_kPa, 1) + ' ≤ ' + res.qa + ' kN/m²', okc(res.ok.bearing)]);
    var rM = rowsOf(['a', 'M', 'd', 'K', 'z', 'zd', 'x', 'k', 'As', 'AsM', 'Asmin'], r, { M: 'hl', K: okc(res.ok.k), AsM: 'hl' });
    rM.push(ckRow('K ≤ K\' = 0.156', ck.k, fm(res.f.K, 3), res.ok.k));
    rM.push(['A<sub>s,prov</sub> = A<sub>b</sub> × 1000 / s', 'Ø' + st.dia + ' at ' + st.s + ' mm, needs max(A<sub>s</sub>/B, A<sub>s,min</sub>) = ' + fm(r.As_design_mm2PerM, 0) + ' mm²/m' + chip('manual'), fm(res.AsProv, 0) + ' mm²/m', okc(res.ok.steel)]);
    rM.push(['s ≤ min(3d, 300), clear ≥ 75', 'spacing rules' + chip('manual'), st.s + ' ≤ ' + fm(res.maxS, 0) + ' mm', okc(res.ok.spacing)]);
    var rP = rowsOf(['u0', 'v0', 'v0max', 'u1', 'V1', 'v1'], r, { v0: okc(res.ok.v0), v1: okc(res.ok.punch) });
    var vcs = res.vcT.step;
    rP.push([vcs.formula, vcs.label + ' with your bars, ' + fm(res.AsProv, 0) + ' mm²/m (' + vcs.ref + ')' + chip(vcs.chip, vcs.note), fv(vcs), okc(res.ok.punch)]);
    rP.push(['v < v<sub>c</sub> at 1.5d', (ck.punch ? ck.punch.label + ' (' + ck.punch.ref + ')' : 'punching at 1.5d') + chip('manual'), fm(r.v1_MPa, 3) + ' < ' + fm(res.vc, 3), okc(res.ok.punch)]);
    var rV = rowsOf(['Vs', 'vs'], r, { vs: okc(res.ok.shear) });
    if (ck.shear1) rV.push(ckRow('v < v<sub>c</sub>', ck.shear1, fm(r.vShear_MPa, 3) + ' < ' + fm(res.vc, 3), res.ok.shear));
    U.fx({ sub: t.name + ' · fcu ' + t.fcu + ', fy ' + t.fy + ' N/mm² · live values', dg: diagram(res), groups: [
      { h: 'Loads down the load path', rows: rB },
      { h: 'Footing size and soil pressure', p: res.uS, rows: rS },
      { h: 'Bending at the column face', p: res.uB, rows: rM },
      { h: 'Punching shear', p: res.uP, rows: rP },
      { h: 'One way shear at d from the column face', p: res.uV, rows: rV }] });
  }

  // ---- draw
  function req() { if (!ui.raf) ui.raf = requestAnimationFrame(draw); }
  function draw() {
    ui.raf = 0;
    var res = compute(), r = res.r, eye = k.eye, B = st.B;
    ui.res = res; ui.fail = null;
    var pit = B > 2.4 ? S.pit[1] : S.pit[0];
    Object.assign(k, { mode: 'load', stage: 'load', B: B, h: st.h, n: st.n, soil: res.qa, zc: B / 2, blind: B + 0.1, pit: { l: pit, r: pit, b: pit } });
    S.rebuild(); S.storeys(); G.yard.visible = false; colScale();
    k.eye = eye; S.eye(); hideOldMat();
    Object.assign(S.Vn, { s: 0, th: 0, pd: 0 }); S.place(); G.pressure.position.y = 0;
    var pr = { q: r.qreal_kPa, dq: 0, qmax: r.qreal_kPa, uS: res.uS };
    S.pressure(pr); S.cracks(pr);
    // load path: column load N at the top, Nu into the footing
    U.clear(fa);
    var top = S.colTop(), ft = FB + st.h / 1000;
    arrow(top + 1.1, top + 0.06, 0xDC2626, 0.035);
    arrow(ft + 0.75, ft + 0.03, 0xDC2626, 0.03);
    U.label('nA', [0, top + 1.25, 0], 'N ' + fm(r.N_kN, 0) + ' kN (' + st.n + ' storeys)', 'bad', 5);
    U.label('nU', [0.35, ft + 0.5, task().col / 2000 + 0.1], 'N<sub>u</sub> ' + fm(r.Pu_kN, 0) + ' kN · M ' + fm(r.M_kNm, 0) + ' kNm', 'm', 4);
    drawInside(res, null);
    buildCues(res);
    drawCompare(res);
    U.gauge([['Soil pressure', 'q = ' + fm(r.N_kN, 0) + ' / ' + fm(B, 2) + '² = ' + fm(r.qreal_kPa, 1) + ' kN/m²', res.uS, fm(r.qreal_kPa, 0) + ' / ' + res.qa],
      ['Bending', 'A<sub>s</sub> ' + fm(r.As_design_mm2PerM, 0) + ' / ' + fm(res.AsProv, 0) + ' mm²/m', res.uB],
      ['Punching, shear', 'v ' + fm(r.v1_MPa, 3) + (r.vShear_MPa === null ? '' : ', ' + fm(r.vShear_MPa, 3)) + ' / v<sub>c</sub> ' + fm(res.vc, 3), Math.max(res.uP, res.uV)]]);
    formulas(res);
    // panel
    var t = task();
    $('#dlH').textContent = t.name;
    $('#dlG').textContent = 'Column ' + t.col + ' × ' + t.col + ' mm · fcu ' + t.fcu + ', fy ' + t.fy + ' N/mm² · self-weight ' + (t.sw ? '10 %' : 'none in the task') + ' (' + t.ref + ')';
    $('#dlW').checked = st.sw; $('#dlK').checked = ui.cmp;
    $('#dlS').options[0].textContent = (st.task === 1 ? 'Soil not stated in the task' : 'Soil of the task') + ', 200 kN/m²';
    $('#dlv_n').textContent = st.n; $('#dlv_gk').textContent = fm(st.gk, 1) + ' kN'; $('#dlv_qk').textContent = fm(st.qk, 1) + ' kN';
    $('#dlv_h').textContent = st.h + ' mm'; $('#dlv_cover').textContent = st.cover + ' mm'; $('#dlv_dia').textContent = 'Ø' + st.dia; $('#dlv_s').textContent = st.s + ' mm';
    $('#dlBv').textContent = fm(B, 2) + ' m'; if (Math.abs(+slider.value - B) > 1e-9) slider.value = B;
    $('#dlS').value = st.soil;
    var so = res.so;
    $('#dlSn').innerHTML = st.soil === 'task' ? (st.task === 1 ? 'Soil not stated in the task: the task gives 200 kN/m²' : 'The task gives 200 kN/m²') + chip('manual')
      : 'BS 8004 Table 1: ' + so.range + ' kN/m², the lab uses ' + so.value_kPa + chip(so.chip);
    $('#dlN').innerHTML = 'N = ' + fm(r.N_kN, 0) + ' kN · N<sub>u</sub> = 1.4G<sub>k</sub> + 1.6Q<sub>k</sub> = ' + fm(r.Pu_kN, 0) + ' kN';
    var o = res.ok;
    $('#dlC').innerHTML = [['Soil q ' + fm(r.qreal_kPa, 1) + ' ≤ ' + res.qa, o.bearing], ['K ≤ 0.156', o.k], ['Steel', o.steel],
      ['Spacing', o.spacing], ['v at face', o.v0], ['Punching 1.5d', o.punch], ['Shear at d', o.shear]].map(function (c) { return '<span class="' + (c[1] ? 'ok' : '') + '">' + (c[1] ? '✓ ' : '✕ ') + c[0] + '</span>'; }).join('');
    U.banner(null); U.why && U.why(null);
    U.dirty = true;
    U.emit('design', { pass: res.pass, task: st.task });
  }

  // ---- Test: 2 to 4 s of loading and its consequence at the exact place
  function setBusy(b) { ui.busy = b; U.locked = b; box.querySelectorAll('button,select,input').forEach(function (x) { x.disabled = b; }); }
  function callout(res, m) {
    var gv = governing(res);
    if (gv.m !== m) { // the failing mode is not the highest utilisation (e.g. spacing): use its own spot
      var all = { bear: [0, FB - 0.2, st.B / 2], punch: [task().col / 2000 + 0.06, FB + st.h / 1000 + 0.04, task().col / 2000 + 0.06], shear: [task().col / 2000 + res.r.d_mm / 1000, FB + st.h / 2000, st.B / 2], bend: [0, FB - 0.02, st.B / 2] };
      gv = { at: all[m], cause: gv.cause };
    }
    U.label('cause', [gv.at[0] + 0.45, gv.at[1] - 0.35, gv.at[2]], gv.cause, 'bad', 6);
  }
  async function test() {
    if (ui.busy) return;
    if (ui.raf) { cancelAnimationFrame(ui.raf); draw(); }
    var res = ui.res, r = res.r, top = S.colTop(), ft = FB + st.h / 1000;
    var tk = st.task, sl = st.soil, okLoads0 = loadsOk(), okSoil0 = soilOk();
    setBusy(true);
    try {
      U.banner(null);
      await U.shot(shot(), 500);
      U.sfx('thud', 0.5);
      await U.anim(900, function (t) {
        U.clear(fa);
        arrow(top + 0.06 + 1.6 * (1 - t) + 1.04, top + 0.06, 0xDC2626, 0.035 + 0.02 * t);
        arrow(ft + 0.75, ft + 0.03, 0xDC2626, 0.03 + 0.015 * t);
      });
      var m = res.mode;
      ui.fail = m;
      if (m === 'bear') {
        // qualitative settlement (calc settlementCue, OQ-21: no numbers, labelled exaggerated; no tilt without eccentricity)
        var s1 = Math.min(0.45, 0.12 * res.cue.settlement), th = 0.04 * res.cue.tilt;
        U.sfx('creak');
        await U.anim(1400, function (t) { var e = t * t * (3 - 2 * t); Object.assign(S.Vn, { s: s1 * e, th: th * e }); S.place(); G.pressure.position.y = -S.Vn.s; });
        S.failCracks('bear');
        U.impact([st.B / 2 + 0.3, -S.pit[0] + 0.05, st.B / 2 - 0.35], { sfx: 'fail', size: 1.1, color: 9136197 });
        callout(res, 'bear');
        U.banner({ t: 'Bearing failure', b: 'q ' + fm(r.qreal_kPa, 1) + ' &gt; ' + res.qa + ' kN/m²: the footing sinks into the soil (settlement exaggerated)' });
        say('s5d10');
      } else if (m === 'punch') {
        k.eye = true; S.eye(); drawInside(res, 'punch');
        U.sfx('crack');
        await U.anim(1000, function (t) { Object.assign(S.Vn, { pd: 0.1 * t, s: 0.02 * t }); S.place(); });
        S.failCracks('punch');
        U.impact([0, ft, 0.3], { sfx: 'fail', size: 0.8 });
        callout(res, 'punch');
        U.banner({ t: 'Punching failure', b: res.ok.v0 ? 'v ' + fm(r.v1_MPa, 3) + ' &gt; v<sub>c</sub> ' + fm(res.vc, 3) + ' N/mm² at 1.5d' : 'v ' + fm(r.v0_MPa, 2) + ' ≥ ' + fm(r.v0Limit_MPa, 2) + ' N/mm² at the column face' });
        say('s5d06');
      } else if (m === 'shear' || m === 'bend') {
        k.eye = true; S.eye(); drawInside(res, m);
        U.sfx('crack');
        var c = task().col / 2000, h = st.h / 1000, zf = st.B / 2 + 0.006, dd = r.d_mm / 1000;
        await U.anim(900, function (t) {
          U.clear(G.cracks);
          if (t > 0.3 && t < 0.36) U.sfx('crack', 0.6);
          [-1, 1].forEach(function (sd) {
            if (m === 'shear') { // diagonal crack from the bottom at about d out from the face up towards the column face
              var x0 = sd * (c + dd + 0.1), x1 = sd * (c + 0.05);
              S.crack([I(x0, FB + 0.002, zf), I(x0 + (x1 - x0) * 0.5 * t, FB + h * 0.45 * t, zf), I(x0 + (x1 - x0) * t, FB + h * 0.9 * t, zf)], 0.008);
            } else {
              for (var i = 0; i < 3; i++) {
                var x = sd * (c + i * 0.12), hh = h * (0.75 - 0.2 * i) * t;
                S.crack([I(x, FB + 0.002, zf), I(x + sd * 0.02, FB + hh * 0.5, zf), I(x - sd * 0.01, FB + hh, zf)], 0.007);
                S.crack([I(x, FB - 0.002, -st.B / 2 + 0.05), I(x, FB - 0.002, st.B / 2 - 0.05)], 0.005);
              }
            }
          });
        });
        U.impact([m === 'shear' ? c + dd : c, FB, st.B / 2], { sfx: 'fail', size: 0.6 });
        callout(res, m);
        if (m === 'shear') {
          U.banner({ t: 'Shear failure', b: 'v ' + fm(r.vShear_MPa, 3) + ' &gt; v<sub>c</sub> ' + fm(res.vc, 3) + ' N/mm² at d from the column face' });
          say('s5d09');
        } else {
          U.banner({ t: 'Bending failure', b: !res.ok.k ? 'K ' + fm(res.f.K, 3) + ' &gt; K\' 0.156: the concrete crushes at the top' : 'A<sub>s,prov</sub> ' + fm(res.AsProv, 0) + ' &lt; ' + fm(r.As_design_mm2PerM, 0) + ' mm²/m at the column face' });
          say('s5d07');
        }
      } else if (!res.pass) {
        U.banner({ t: 'Check the spacing', b: 'bar spacing ' + st.s + ' mm: the rules need s ≤ ' + fm(res.maxS, 0) + ' mm and a clear gap of 75 mm' });
      } else {
        // Review L1 HIGH: undo/redo are locked while busy; still re-check the design as it stands now before it counts
        var again = ui.raf ? (cancelAnimationFrame(ui.raf), draw(), ui.res) : ui.res;
        var same = again && again.pass && st.task === tk && st.soil === sl && loadsOk() === okLoads0 && soilOk() === okSoil0;
        if (!same) { U.banner({ t: 'Test again', b: 'The design changed while the test ran, so this test does not count' }); await U.wait(600); return; }
        U.sfx('ok');
        U.unlabel('cause');
        U.banner({ ok: true, hold: true, t: 'Holds', b: 'soil ' + fm(res.uS, 0) + ' % · bending ' + fm(res.uB, 0) + ' % · punching ' + fm(res.uP, 0) + ' % · shear ' + fm(res.uV, 0) + ' %' });
        ui.stoodTask[tk] = okSoil0 && okLoads0;
        if (!okLoads0) { var tl = TASKS[tk]; U.banner({ ok: true, hold: true, t: 'Holds, but not for this task', b: 'Set the task loads to count it: ' + tl.n + ' storeys, ' + fm(tl.gk, 1) + ' kN dead and ' + fm(tl.qk, 1) + ' kN imposed per storey, self-weight ' + (tl.sw ? 'on' : 'off') }); }
        U.emit('test', { stood: true, task: tk, soil: sl, loads: okLoads0 });
      }
      await U.wait(600);
    } finally { setBusy(false); }
  }
  function soilOk() { return st.soil === 'task'; }

  // ---- undo/redo/reset/See inside on the design variables only
  U.history({ get: function () { return JSON.parse(JSON.stringify(st)); }, set: function (v) { if (ui.busy) return; Object.assign(st, v); req(); } });
  // Review L1 HIGH: lab.js keydown (Ctrl+Z / Ctrl+Y) calls U.undo/U.redo without a lock check, so guard here
  ['undo', 'redo'].forEach(function (nm) { var f0 = U[nm]; U[nm] = function () { if (ui.busy || U.locked) return; return f0.apply(U, arguments); }; });
  function preset(i) {
    var t = TASKS[i];
    st.task = i; st.n = t.n; st.gk = t.gk; st.qk = t.qk; st.soil = 'task'; st.sw = t.sw;
    if (t.design) Object.assign(st, t.design);
  }
  U.tool('reset', function () { if (ui.busy) return; U.mark(); preset(st.task); req(); U.shot(shot, 900); });
  U.tool('eye', function () { k.eye = !k.eye; S.eye(); hideOldMat(); if (ui.res) drawInside(ui.res, ui.fail); U.dirty = true; U.emit('eye'); });
  U.drag(null);
  U.cfg.praise = LINES.s5d08;

  var steps = [
    { t: 'Worked example', prompt: 'Explore the worked example, then press Test', shot: shot,
      enter: function () { preset(0); req(); say('s5d01'); },
      test: function (ev, d) { return ev === 'test' && d && d.stood && d.task === 0 && d.soil === 'task' && d.loads === true; },
      after: function () { ui.done[0] = true; say('s5d02'); } },
    { t: 'Task 55', prompt: 'Design the footing for Task 55, then press Test', shot: shot,
      enter: function () { st.task = 1; st.n = TASKS[1].n; st.gk = TASKS[1].gk; st.qk = TASKS[1].qk; st.soil = 'task'; st.sw = TASKS[1].sw; req(); say('s5d03'); },
      test: function (ev, d) { return ev === 'test' && d && d.stood && d.task === 1 && d.soil === 'task' && d.loads === true; },
      after: function () { ui.done[1] = true; say('s5d04'); } }
  ];
  preset(0); draw();
  (async function () {
    await U.start();
    E.bridge.set('RC_S5_Explored', true);
    window.__live = true;
    var run = U.runSteps(steps);
    var fin = $('#bNext').onclick;
    $('#bNext').onclick = function () {
      var last = U.idx >= steps.length - 1;
      if (!last) { fin(); return; }
      var all = ui.done.every(Boolean); // lab.stepDone is the current step only
      if (!all) { U.toast('First pass every design task: design it, then press Test'); return; }
      fin();
      U.stopSay(); setTimeout(function () { say('s5d08'); }, 50); // S5_DONE speaks the old line; new line s5d08
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
