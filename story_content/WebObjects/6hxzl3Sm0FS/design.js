/* BDCBD501 design lab L3: simply supported beam (slot S3, web object 6hxzl3Sm0FS).
   Runs after lab.js (engine, exports window.__eng, fix/ENGINE-API.md) and calc.js (generated from
   fix/designlab/calc.mjs by fix/designlab/gen-calc.mjs). Numbers come from window.RCcalc; the BS 8110 steps that
   calc.mjs had at first (OQ-01 K route, OQ-09 vc, OQ-13 links, OQ-10 modification factor, OQ-17 Ec) are all in calc.js now;
   fix/qa/gate-L3.md lists them under CALC NEEDS.
   The trainee changes span, loads, section, cover, bars, links and materials; the beam, its loads, reactions, BMD and
   SFD, the checks and the Formulas panel update live. Test plays the loading and the consequence at the exact place.
   RC_S3_Done is set only when every design task has passed. T = fix/manual/BDCBD501-trainee.txt line. */
(function () {
  'use strict';
  var E = window.__eng, C = window.RCcalc;
  if (!E || !C) { console.error('design.js: lab.js or calc.js missing'); return; }
  var U = E.lab, S = E.sim, R = E.R, I = E.I, $ = E.He;

  // ---- manual data
  // Task 43 (T L3905-L3907): simply supported, 7 m, gk 12 (self-weight included), qk 8 kN/m, b 275, d 450,
  //   fcu 30, fy 500; asks for As. Section depth h, cover, bars and links are the trainee's (h 495 gives d 450 with
  //   cover 25, Ø10 links, Ø20 bars).
  // Task 42 (T L3898-L3903): simply supported classroom beam, effective span 8 m, gk 15 kN/m from slab and finishes
  //   (self-weight to add, b × D × 24, T L3707-L3710), qk 10 kN/m; the trainee chooses b and d. The task gives no
  //   material strengths: fcu 30 and fy 460 are typical values (to confirm).
  var TASKS = [
    { id: 't43', name: 'Task 43', ref: '', L: 7, gk: 12, qk: 8, sw: false, fcu: 30, fy: 500, mat: 'task',
      give: 'Span 7 m, gₖ 12 kN/m with self-weight, qₖ 8 kN/m, b 275, d 450, fcu 30, fy 500',
      start: { b: 275, h: 495, cover: 25, n: 2, dia: 20, ld: 10, sv: 300, fyv: 250 },
      good: { b: 275, h: 495, cover: 25, n: 4, dia: 20, ld: 10, sv: 300, fyv: 250 } },
    { id: 't42', name: 'Task 42', ref: '', L: 8, gk: 15, qk: 10, sw: true, fcu: 30, fy: 460, mat: 'typical',
      give: 'Span 8 m, gₖ 15 kN/m plus self-weight, qₖ 10 kN/m',
      start: { b: 250, h: 400, cover: 25, n: 3, dia: 20, ld: 8, sv: 250, fyv: 250 },
      good: { b: 300, h: 650, cover: 25, n: 4, dia: 25, ld: 10, sv: 275, fyv: 250 } }
  ];
  var GAMMA = 24;            // kN/m³, reinforced concrete (T L3710)
  var HAGG = 20;             // max aggregate, typical value, to confirm (spacing rule T L3530)
  var HANGER = 12;           // 2 top hanger bars hold the links: detailing, typical value, to confirm
  var DIAS = [12, 16, 20, 25, 32], LDIAS = [6, 8, 10, 12], FCUS = [25, 30, 35, 40], FYS = [250, 460, 500], FYVS = [250, 460];
  var LIM = { L: [3, 9, 0.25], h: [250, 900, 5], b: [150, 450, 25], cover: [20, 50, 5], gk: [0, 60, 0.5], qk: [0, 40, 0.5], n: [2, 8, 1], sv: [75, 450, 25] };

  // ---- voice: new Imani lines (fix/voice/requests-L3.txt). Until a clip is in narr/, the caption and the signer
  // run from the text and no audio file is requested. Add a key to CLIPS when its mp3 and words.json arrive.
  var CLIPS = { s3d01: 1, s3d02: 1, s3d03: 1, s3d04: 1, s3d05: 1, s3d06: 1, s3d07: 1, s3d08: 1, s3d09: 1, s3d10: 1 };
  var LINES = {
    s3d01: 'Task forty three. A simply supported beam, seven metres long, carries twelve kilonewtons per metre dead load and eight imposed. Choose the bottom bars and the links, then press Test.',
    s3d02: 'It holds. The bottom bars carry the bending, the links carry the shear, and the beam is deep enough for its span.',
    s3d03: 'Task forty two. A classroom beam spans eight metres. It carries fifteen kilonewtons per metre dead load, ten imposed, and its own weight. Choose the width, the depth, the bars and the links so that every check passes.',
    s3d04: 'Well designed. Every check passes for task forty two, and the beam holds.',
    s3d05: 'Too little bottom steel. The bars stretch at mid span and cracks open on the tension face. Add bars or use bigger bars.',
    s3d06: 'The links are too far apart. Diagonal cracks open near the supports, where the shear is highest. Bring the links closer or use bigger links.',
    s3d07: 'The beam is too shallow. The concrete at the top crushes at mid span. Make the beam deeper or wider.',
    s3d08: 'The beam is too slender for its span. It sags too much. Make it deeper.',
    s3d09: 'Lab three is done. You designed a beam that carries its load.',
    s3d10: 'The bars break a detailing rule. Check that they fit in the width, and the minimum and maximum steel.'
  };
  function say(key) {
    var text = LINES[key];
    if (CLIPS[key]) return U.say(key, text);
    if (U.sign && U.sign.cache) U.sign.cache[''] = null; // signer uses the caption text, no words.json fetch
    return U.say('', text);
  }

  // ---- state
  var st = { task: 0 };
  var ui = { raf: 0, busy: false, res: null, ref: null, done: [false, false], eye: false, cmp: false, tested: null };
  function task() { return TASKS[st.task]; }
  function preset(i, which) {
    var t = TASKS[i];
    st.task = i; st.L = t.L; st.gk = t.gk; st.qk = t.qk; st.sw = t.sw; st.fcu = t.fcu; st.fy = t.fy;
    Object.assign(st, t[which || 'start']);
  }

  // ---- calculation
  function compute(s) {
    s = s || st;
    var t = TASKS[s.task], L = s.L;
    var d = s.h - s.cover - s.ld - s.dia / 2;                       // T L3673 (described), digest §3.6 step 1
    var load = C.beamDesignLoad({ b_m: s.b / 1000, D_m: s.h / 1000, unitWeight_kNm3: s.sw ? GAMMA : 0, otherGk_kNm: s.gk, otherQk_kNm: s.qk });
    var w = load.w_kNm;
    var rx = C.simplySupportedReactions({ span_m: L, udls: [{ w_kNm: w, start_m: 0, end_m: L }] });
    var dg = C.simplySupportedDiagrams({ span_m: L, udls: [{ w_kNm: w, start_m: 0, end_m: L }], n: 61 });
    var M = C.momentSimpleUdl_kNm({ w_kNm: w, L_m: L }), V = rx.RA_kN;
    var fl = C.flexureDesign({ M_kNm: M, b_mm: s.b, d_mm: d, fcu_MPa: s.fcu, fy_MPa: s.fy });   // BS K route (OQ-01)
    var man = C.flexureDesign({ M_kNm: M, b_mm: s.b, d_mm: d, fcu_MPa: s.fcu, fy_MPa: s.fy, method: 'manual' });
    var AsProv = C.barsArea_mm2(s.dia, s.n);
    var AsMin = C.minSteelArea_mm2({ b_mm: s.b, h_mm: s.h, fy_MPa: s.fy }), AsMax = C.maxSteelArea_mm2({ b_mm: s.b, h_mm: s.h });
    var AsDes = Math.max(fl.As_req_mm2, AsMin);                       // as calc.beamDesign
    var sh = C.beamShearDesign({ V_kN: V, b_mm: s.b, d_mm: d, fcu_MPa: s.fcu, As_mm2: AsProv, fyv_MPa: s.fyv, linkDia_mm: s.ld, linkSpacing_mm: s.sv, linkLegs: 2, w_kNm: w, span_m: L });
    var df = C.spanDepthCheck({ span_mm: L * 1e3, d_mm: d, support: 'simple', M_kNm: M, b_mm: s.b, fy_MPa: s.fy, As_req_mm2: AsDes, As_prov_mm2: AsProv });
    var sec = C.rectSection({ b_mm: s.b, h_mm: s.h });
    var Ec = C.concreteModulus_MPa({ fcu_MPa: s.fcu });
    var delta = C.deflectionSimpleUdl_mm({ w_kNm: load.Gk_kNm + load.Qk_kNm, L_m: L, E_MPa: Ec, I_mm4: sec.Ixx_mm4 });
    var spc = C.spacingRules({ barDia_mm: s.dia, maxAggregate_mm: HAGG });
    var clear = (s.b - 2 * s.cover - 2 * s.ld - s.n * s.dia) / (s.n - 1);
    var ck = {}; sh.checks.forEach(function (c) { ck[c.id] = c.ok; });
    var ok = {
      crush: !fl.compressionSteelNeeded,
      steel: !fl.compressionSteelNeeded && AsProv >= fl.As_req_mm2 - 1e-9,
      shearMax: ck.vmax, links: ck.links && ck.vcap, sv: ck.sv && s.sv >= spc.linkMinSpacing_mm,
      defl: df.checks[0].ok,
      fit: clear >= spc.beamMinClear_mm - 1e-9,
      asmin: AsProv >= AsMin - 1e-9, asmax: AsProv <= AsMax + 1e-9
    };
    var res = { s: s, d: d, load: load, w: w, rx: rx, dg: dg, M: M, V: V, fl: fl, man: man, AsProv: AsProv, AsDes: AsDes, sh: sh,
      df: df, sec: sec, Ec: Ec, delta: delta, spc: spc, clear: clear, AsMin: AsMin, AsMax: AsMax, ok: ok };
    res.uT = 100 * fl.As_req_mm2 / AsProv;      // tension steel (As at K' when K > K')
    res.uC = 100 * fl.utilisation;               // compression zone, K / K'
    res.uB = Math.max(res.uT, res.uC);
    res.uV = Math.max(100 * sh.utilisation, 100 * sh.v_MPa / sh.vmax_MPa, 100 * s.sv / sh.svMax_mm);
    res.uD = 100 * df.utilisation;
    res.modes = [];
    if (!ok.crush) res.modes.push('crush');
    if (ok.crush && !ok.steel) res.modes.push('bend');
    if (!ok.shearMax || !ok.links || !ok.sv) res.modes.push('shear');
    if (!ok.defl) res.modes.push('defl');
    if (!ok.fit || !ok.asmin || !ok.asmax) res.modes.push('detail');
    res.pass = res.modes.length === 0;
    return res;
  }
  window.__L3 = { set: function (o) { U.mark(); Object.assign(st, o); req(); }, st: st, ui: ui, compute: compute, tasks: TASKS, preset: preset, consts: { GAMMA: GAMMA, HAGG: HAGG, HANGER: HANGER } };

  // ---- formatting with units
  function fm(v, dp) { return v === null || v === undefined || isNaN(v) ? '·' : (+v).toFixed(dp); }
  var DP = { 'kN': 1, 'kN/m': 2, 'kNm': 1, 'mm': 0, 'mm²': 0, 'N/mm²': 2, 'kN/mm²': 1, '': 3 };
  function fv(stp) { return fm(stp.value, DP[stp.unit] === undefined ? 2 : DP[stp.unit]) + (stp.unit ? ' ' + stp.unit : ''); }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function chip(c, note) { return c ? ' <i class="ch ' + (c === 'manual' ? 'm' : c === 'manual note' ? 'n' : 'b') + '"' + (note ? ' title="' + esc(note) + '"' : '') + '>' + c + '</i>' : ''; }

  // ---- panel
  var css = document.createElement('style');
  css.textContent =
    '#dl{position:absolute;right:16px;top:70px;width:384px;max-height:534px;overflow:auto;background:rgba(255,255,255,.96);border-radius:16px;padding:8px 14px 10px;box-shadow:0 8px 24px rgba(15,46,90,.2);z-index:8;border-top:6px solid var(--amb);box-sizing:border-box}' +
    'body.pre #dl{visibility:hidden}#dl .k{font-size:11px;letter-spacing:.14em;font-weight:800;color:#b97800}' +
    '#dl h4{margin:1px 0 1px;font-size:17px;color:var(--navy)}#dl .gv{margin:0 0 3px;font-size:11.5px;line-height:1.3;color:var(--muted)}' +
    '#dl .sec{margin:4px 0 0;font-size:10.5px;font-weight:800;letter-spacing:.12em;color:var(--navy);opacity:.8}' +
    '#dl .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px 8px}' +
    '#dl .stp{display:flex;flex-direction:column;font-size:10.5px;color:var(--muted);font-weight:700}' +
    '#dl .stp div{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);border-radius:9px;height:24px;margin-top:1px}' +
    '#dl .stp button{width:23px;height:22px;border:0;background:#eef3f9;color:var(--navy);font-size:16px;font-weight:800;cursor:pointer;border-radius:8px}' +
    '#dl .stp button:focus-visible,#dl input:focus-visible,#dl .bt:focus-visible{outline:3px solid var(--blue);outline-offset:1px}' +
    '#dl .stp b{font-size:12.5px;color:var(--ink);white-space:nowrap}' +
    '#dl .sl{display:flex;justify-content:space-between;align-items:baseline;font-size:10.5px;font-weight:700;color:var(--muted);margin-top:2px}#dl .sl b{font-size:15px;color:var(--ink)}' +
    '#dl input[type=range]{width:100%;height:18px;margin:0;accent-color:var(--blue);cursor:pointer}' +
    '#dl .nu{margin:2px 0 0;font-family:"Cambria Math","Times New Roman",serif;font-size:14px;line-height:1.3;color:var(--ink)}' +
    '#dl .ck{display:flex;flex-wrap:wrap;gap:3px;margin-top:5px}#dl .ck span{font-size:10.5px;font-weight:700;border-radius:7px;padding:2px 6px;background:#fee2e2;color:var(--red)}#dl .ck span.ok{background:#dcfce7;color:#15803d}' +
    '#dl .bs{display:flex;gap:8px;margin-top:6px}#dl .bt{height:34px;border:0;border-radius:12px;font:inherit;font-size:15px;font-weight:800;cursor:pointer;letter-spacing:.02em}' +
    '#dl #dlT{flex:1;background:var(--navy);color:#fff}#dl #dlK{width:112px;background:#eef2f7;color:var(--navy)}#dl #dlK.on{background:var(--blue);color:#fff}#dl .bt:disabled{opacity:.5;cursor:default}' +
    '#lbls .lbl.keep.hid{opacity:1}' +
    '#fx i.ch{font-style:normal;font-family:Inter,sans-serif;font-size:9.5px;font-weight:800;border-radius:5px;padding:0 5px;margin-left:3px;white-space:nowrap}#fx i.ch.m{background:#e8eefc;color:#1E63B8}#fx i.ch.n{background:#fff1d6;color:#9a5b00}#fx i.ch.b{background:#ede9fe;color:#5b21b6}' +
    '#lg3{position:absolute;left:84px;top:124px;display:none;align-items:center;gap:8px;background:rgba(255,255,255,.94);border-radius:12px;padding:6px 10px;font-size:12px;font-weight:700;color:var(--navy);box-shadow:0 4px 14px rgba(15,46,90,.18);z-index:7}' +
    '#lg3.show{display:flex}#lg3 s{display:block;width:150px;height:10px;border-radius:5px;background:linear-gradient(90deg,#22a34a,#e9a400 70%,#f0260d)}#lg3 em{font-style:normal;color:var(--muted);font-weight:600}body.wy #lg3{display:none}';
  document.head.appendChild(css);
  function stepper(id, label) {
    return '<label class="stp"><span>' + label + '</span><div><button type="button" data-k="' + id + '" data-d="-1" aria-label="' + label + ' less">−</button><b id="dlv_' + id + '"></b><button type="button" data-k="' + id + '" data-d="1" aria-label="' + label + ' more">+</button></div></label>';
  }
  function slider(id, label) {
    var L = LIM[id];
    return '<label class="sl" for="dl_' + id + '"><span>' + label + '</span><b id="dlv_' + id + '"></b></label><input id="dl_' + id + '" type="range" min="' + L[0] + '" max="' + L[1] + '" step="' + L[2] + '">';
  }
  var box = document.createElement('div');
  box.id = 'dl'; box.setAttribute('role', 'group'); box.setAttribute('aria-labelledby', 'dlH');
  box.innerHTML =
    '<div class="k">DESIGN TASK</div><h4 id="dlH"></h4><p class="gv" id="dlG"></p>' +
    '<div class="sec">SPAN AND LOADS</div>' + slider('L', 'Effective span L') +
    '<div class="g3">' + stepper('gk', 'Dead gₖ') + stepper('qk', 'Imposed qₖ') +
    '<label class="sl" style="justify-content:flex-start;gap:5px;cursor:pointer;align-items:center;margin-top:12px"><input type="checkbox" id="dlW" style="accent-color:var(--blue)"><span>Add self-weight</span></label></div>' +
    '<div class="sec">SECTION AND CONCRETE</div>' + slider('h', 'Overall depth h') +
    '<div class="g3">' + stepper('b', 'Width b') + stepper('cover', 'Cover') + stepper('fcu', 'f<sub>cu</sub>') + '</div>' +
    '<div class="sec">STEEL</div>' +
    '<div class="g3">' + stepper('n', 'Bottom bars') + stepper('dia', 'Bar size') + stepper('fy', 'f<sub>y</sub>') + '</div>' +
    '<div class="g3">' + stepper('ld', 'Link size') + stepper('sv', 'Link spacing') + stepper('fyv', 'f<sub>yv</sub>') + '</div>' +
    '<div class="nu" id="dlN" aria-live="polite"></div>' +
    '<div class="ck" id="dlC" aria-live="polite"></div>' +
    '<div class="bs"><button type="button" class="bt" id="dlT">Test: load the beam</button><button type="button" class="bt" id="dlK" aria-pressed="false">Compare</button></div>';
  $('#stage').appendChild(box);
  var legend = document.createElement('div');
  legend.id = 'lg3';
  legend.innerHTML = '<span>Utilisation</span><em>0 %</em><s></s><em>100 %</em>';
  $('#stage').appendChild(legend);

  var safe0 = U.safe;
  U.safe = function () { var s = safe0(); s.x1 = Math.min(s.x1, 1186); if (U.whyOn && !U.fxOn) s.x0 = 86; return s; }; // the why card sits below the beam: keep both supports in view

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function pickList(key) { return key === 'dia' ? DIAS : key === 'ld' ? LDIAS : key === 'fcu' ? FCUS : key === 'fy' ? FYS : key === 'fyv' ? FYVS : null; }
  function bump(key, dir) {
    if (ui.busy) return;
    U.mark();
    var list = pickList(key);
    if (list) st[key] = list[clamp(list.indexOf(st[key]) + dir, 0, list.length - 1)];
    else { var L = LIM[key]; st[key] = clamp(Math.round((st[key] + dir * L[2]) / L[2]) * L[2], L[0], L[1]); }
    req();
  }
  box.addEventListener('click', function (e) { var b = e.target.closest('button[data-k]'); if (b) bump(b.dataset.k, +b.dataset.d); });
  ['L', 'h'].forEach(function (k) {
    var el = $('#dl_' + k), marking = false;
    el.addEventListener('input', function () { if (ui.busy) return; if (!marking) { U.mark(); marking = true; } st[k] = +el.value; req(); });
    el.addEventListener('change', function () { marking = false; });
  });
  $('#dlW').addEventListener('change', function () { U.mark(); st.sw = this.checked; req(); });
  $('#dlT').addEventListener('click', function () { test(); });
  $('#dlK').addEventListener('click', function () { if (ui.busy) return; ui.cmp = !ui.cmp; req(); U.shot(shot(), 700); });

  // ---- 3D scene: the old slab bay is hidden; the beam sits on two brick piers in the same site
  var X0 = 3, Z0 = 2, YS = 2.6, ZC = Z0 - 1.5; // beam centre, soffit level, compare beam line
  U.G.children.slice().forEach(function (g) { g.visible = false; }); // every old slab bay group (parts, heat map, yard)
  U.unlabel(/./);
  U.drag(null);
  function grp() { var g = new R.Group(); U.G.add(g); return g; }
  var gB = grp(), gIn = grp(), gLd = grp(), gDg = grp(), gCue = grp(), gCr = grp(), gCmp = grp();
  // sag: every beam material bends with the same shape, w(x) = UDL elastic curve, peak uSag at mid-span
  function sagU() { return { uSag: { value: 0 }, uX0: { value: 0 }, uL: { value: 1 } }; }
  var SAG = sagU(), SAGC = sagU();
  function sagMat(m, u) {
    m.onBeforeCompile = function (sh) {
      sh.uniforms.uSag = u.uSag; sh.uniforms.uX0 = u.uX0; sh.uniforms.uL = u.uL;
      sh.vertexShader = 'uniform float uSag;\nuniform float uX0;\nuniform float uL;\n' + sh.vertexShader.replace('mvPosition = modelViewMatrix * mvPosition;',
        'vec4 wq = modelMatrix * mvPosition; float sx = clamp((wq.x-uX0)/uL,0.0,1.0);\n' +
        'wq.y-=uSag*3.2*(sx-2.0*sx*sx*sx+sx*sx*sx*sx);\nmvPosition = viewMatrix * wq;');
    };
    m.customProgramCacheKey = function () { return u === SAG ? 'sagA' : 'sagC'; };
    return m;
  }
  var M_CON = sagMat(E.de(12896718), SAG), M_STL = sagMat(E.de(9391916, { metal: 0.3 }), SAG), M_LNK = sagMat(E.de(0x8a6e52, { metal: 0.3 }), SAG);
  var M_CRK = sagMat(new R.MeshBasicMaterial({ color: 0x1a1410 }), SAG);
  var M_CONC = sagMat(E.de(12896718), SAGC), M_CRKC = sagMat(new R.MeshBasicMaterial({ color: 0x1a1410 }), SAGC);
  var M_PIER = E.de(0xa4553a), M_PAD = E.de(0xb9bec4);
  [M_CON].forEach(function (m) { m.transparent = true; });
  function tip(o, t) { o.userData.tip = t; return o; }
  function box3(w, h, d, mat, x, y, z, g) { var m = new R.Mesh(new R.BoxGeometry(w, h, d, Math.max(1, Math.round(w / 0.1)), 1, 1), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; g.add(m); return m; }
  function rod(a, b, r, mat, g, seg) {
    var v = new R.Vector3().subVectors(b, a), L = v.length();
    var geo = new R.CylinderGeometry(r, r, L, seg || 8, Math.max(1, Math.round(L / 0.1)));
    var m = new R.Mesh(geo, mat); m.position.copy(a).addScaledVector(v, 0.5);
    m.quaternion.setFromUnitVectors(new R.Vector3(0, 1, 0), v.normalize()); g.add(m); return m;
  }
  function piers(g, L, b, z) {
    [-1, 1].forEach(function (sd) {
      var x = X0 + sd * L / 2, dz = Math.max(0.45, b / 1000 + 0.2);
      tip(box3(0.3, YS - 0.05, dz, M_PIER, x, (YS - 0.05) / 2, z, g), 'Brick pier: simple support');
      tip(box3(0.32, 0.05, dz + 0.02, M_PAD, x, YS - 0.025, z, g), 'Bearing');
    });
  }
  function linkGeo(bi, hi, r) {
    // closed link with two 135° hooks at the top corner, inner dims bi × hi (m), in the YZ plane, centred
    var p = [], cr = Math.max(2 * r, 0.012), y0 = -hi / 2, y1 = hi / 2, z0 = -bi / 2, z1 = bi / 2;
    var pts = [[z0, y1 - cr], [z0, y0 + cr], [z0 + cr, y0], [z1 - cr, y0], [z1, y0 + cr], [z1, y1 - cr], [z1 - cr, y1], [z0 + cr, y1], [z0, y1 - cr]];
    pts.forEach(function (q) { p.push(new R.Vector3(0, q[1], q[0])); });
    var hook = 6 * r * 2 + 0.03; // hook legs: drawn, not a calculation
    p.unshift(new R.Vector3(0, y1 - cr - hook * 0.7, z0 + hook * 0.7));
    p.push(new R.Vector3(0, y1 - cr - hook * 0.7, z0 + hook * 0.7 + 0.01));
    var curve = new R.CatmullRomCurve3(p, false, 'catmullrom', 0.05);
    return new R.TubeGeometry(curve, 64, r, 5, false);
  }

  // build the beam (concrete, piers, bars, links) for a design; g = group, z = beam line, mats per beam
  function buildBeam(g, gi, res, z, mc, ms, ml, eye) {
    var s = res.s, L = s.L, b = s.b / 1000, h = s.h / 1000, cv = s.cover / 1000, ld = s.ld / 1000, phi = s.dia / 1000;
    piers(g, L, s.b, z);
    var con = tip(box3(L + 0.3, h, b, mc, X0, YS + h / 2, z, g), 'Beam ' + s.b + ' × ' + s.h + ' mm');
    con.renderOrder = 2;
    if (!gi) return con;
    U.clear(gi);
    if (!eye) return con;
    var x0 = X0 - L / 2 - 0.15 + cv, x1 = X0 + L / 2 + 0.15 - cv;
    var yb = YS + cv + ld + phi / 2, yt = YS + h - cv - ld - HANGER / 2000;
    var zs = s.n > 1 ? (b - 2 * cv - 2 * ld - phi) / (s.n - 1) : 0;
    for (var i = 0; i < s.n; i++) {
      var zz = z - (b - 2 * cv - 2 * ld - phi) / 2 + i * zs;
      tip(rod(I(x0, yb, zz), I(x1, yb, zz), Math.max(0.006, phi / 2), ms, gi, 10), s.n + ' bottom bars Ø' + s.dia + ': tension steel');
    }
    [-1, 1].forEach(function (sd) {
      var zz = z + sd * (b / 2 - cv - ld - HANGER / 2000);
      tip(rod(I(x0, yt, zz), I(x1, yt, zz), HANGER / 2000, ms, gi, 8), '2 hanger bars Ø' + HANGER + ': hold the links');
    });
    // links: instanced, at the trainee's spacing from the bearing faces
    var bi = b - 2 * cv - ld, hi = h - 2 * cv - ld, geo = linkGeo(bi, hi, Math.max(0.003, ld / 2));
    var xs = [], xa = X0 - L / 2 - 0.15 + 0.05, xb = X0 + L / 2 + 0.15 - 0.05, sv = s.sv / 1000;
    for (var x = xa; x <= xb + 1e-6; x += sv) xs.push(x);
    var im = new R.InstancedMesh(geo, ml, xs.length), mt = new R.Matrix4();
    xs.forEach(function (x, k) { mt.makeTranslation(x, YS + h / 2, z); im.setMatrixAt(k, mt); });
    im.instanceMatrix.needsUpdate = true; tip(im, 'Links Ø' + s.ld + ' at ' + s.sv + ' mm: shear steel'); gi.add(im);
    return con;
  }

  // utilisation field on the beam's mid plane (See inside): bending in the tension and compression zones, shear
  // near the supports, from M(x) and V(x) of calc.simplySupportedDiagrams
  function colorU(u) {
    var c = new R.Color();
    if (u <= 0.7) c.setRGB(0.13 + 0.78 * (u / 0.7), 0.64 - 0.0 * u, 0.29 * (1 - u / 0.7));
    else c.setRGB(0.94, Math.max(0.15, 0.64 - 0.49 * Math.min(1, (u - 0.7) / 0.3)), 0.05);
    return c;
  }
  function field(res, gi, z) {
    var s = res.s, L = s.L, h = s.h / 1000, nx = 60, ny = 12;
    var g = new R.PlaneGeometry(L, h * 0.96, nx, ny), pos = g.attributes.position, cols = [];
    var uT = res.uT / 100, uC = res.uC / 100, uV = res.uV / 100;
    for (var j = 0; j < pos.count; j++) {
      var xi = (pos.getX(j) + L / 2) / L, yi = pos.getY(j) / (h * 0.48); // -1 bottom … 1 top
      var mr = 4 * xi * (1 - xi), vr = Math.abs(1 - 2 * xi);
      var bot = Math.max(0, -yi), top = Math.max(0, yi), mid = Math.max(0, 1 - yi * yi);
      var u = Math.max(uT * mr * (0.35 + 0.65 * bot), uC * mr * top * top, uV * vr * mid);
      var c = colorU(Math.min(1.2, u)); cols.push(c.r, c.g, c.b);
    }
    g.setAttribute('color', new R.Float32BufferAttribute(cols, 3));
    var mat = sagMat(new R.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55, depthWrite: false, side: R.DoubleSide, toneMapped: false }), SAG);
    var pl = new R.Mesh(g, mat); pl.position.set(X0, YS + h / 2, z); pl.renderOrder = 6; gi.add(pl);
  }

  // ---- loads, reactions and diagrams (sizes ∝ kN)
  var KW = 0.012, KR = 0.003, KM = 0.0032, KV = 0.0032;
  function drawLoads(res, grow) {
    var s = res.s, L = s.L, h = s.h / 1000, top = YS + h, g = grow === undefined ? 1 : grow;
    U.clear(gLd); U.clear(gDg);
    var len = Math.max(0.18, Math.min(0.9, KW * res.w)) * g, n = Math.max(6, Math.round(L / 0.5));
    U.into(gLd, function () {
      for (var i = 0; i <= n; i++) { var x = X0 - L / 2 + i * L / n; E.Ln(I(x, top + 0.04 + len, Z0), I(x, top + 0.04, Z0), 0xDC2626, 0.02); }
      E.cn([I(X0 - L / 2, top + 0.04 + len, Z0), I(X0 + L / 2, top + 0.04 + len, Z0)], 0xDC2626, 1);
      var rl = Math.max(0.25, Math.min(1.0, KR * res.V)) * g, zf = Z0 + Math.max(0.3, s.b / 2000 + 0.18);
      [-1, 1].forEach(function (sd) { var x = X0 + sd * L / 2; E.Ln(I(x, YS - 0.06 - rl, zf), I(x, YS - 0.06, zf), 0x1E63B8, 0.022); });
    });
    // BMD below the soffit, SFD above the loads; both in the beam's plane
    var xs = res.dg.x_m, Ms = res.dg.M_kNm, Vs = res.dg.V_kN;
    var by = YS - 0.08, sy = top + 0.04 + Math.max(0.18, Math.min(0.9, KW * res.w)) + 0.42;
    var kM = Math.min(KM, 1.25 / Math.max(1, res.M)) * g, kV = Math.min(KV, 0.6 / Math.max(1, res.V)) * g;
    function fill(pts, color, op) {
      var sh = new R.Shape(); sh.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(function (p) { sh.lineTo(p[0], p[1]); });
      var m = new R.Mesh(new R.ShapeGeometry(sh), new R.MeshBasicMaterial({ color: color, transparent: true, opacity: op, side: R.DoubleSide, depthWrite: false, toneMapped: false }));
      m.position.z = Z0; m.renderOrder = 4; gDg.add(m);
    }
    var pm = [[X0 - L / 2, by]], lm = [], pv = [[X0 - L / 2, sy]], lv = [];
    xs.forEach(function (x, i) { var X = X0 - L / 2 + x; pm.push([X, by - kM * Ms[i]]); lm.push(I(X, by - kM * Ms[i], Z0)); pv.push([X, sy + kV * Vs[i]]); lv.push(I(X, sy + kV * Vs[i], Z0)); });
    pm.push([X0 + L / 2, by]); pv.push([X0 + L / 2, sy]);
    fill(pm, 0x1E63B8, 0.28);
    // SFD: positive and negative parts as two shapes (one polygon would cross itself at V = 0)
    var pos = [[X0 - L / 2, sy]], neg = [];
    xs.forEach(function (x, i) { var X = X0 - L / 2 + x; if (Vs[i] >= 0) pos.push([X, sy + kV * Vs[i]]); else { if (!neg.length) neg.push([X, sy]); neg.push([X, sy + kV * Vs[i]]); } });
    pos.push([pos[pos.length - 1][0], sy]); neg.push([X0 + L / 2, sy]);
    fill(pos, 0xE08A00, 0.3); if (neg.length > 2) fill(neg, 0xE08A00, 0.3);
    U.into(gDg, function () {
      E.cn(lm, 0x0F2E5A, 1); E.cn(lv, 0x9a5b00, 1);
      E.cn([I(X0 - L / 2, by, Z0), I(X0 + L / 2, by, Z0)], 0x0F2E5A, 1, true);
      E.cn([I(X0 - L / 2, sy, Z0), I(X0 + L / 2, sy, Z0)], 0x9a5b00, 1, true);
    });
    var zf2 = Z0 + Math.max(0.3, s.b / 2000 + 0.18);
    lbl('w', [X0, top + 0.1 + len, Z0], 'w = ' + fm(res.w, 2) + ' kN/m', 'bad');
    lbl('ra', [X0 - L / 2, YS - 0.18 - Math.max(0.25, Math.min(1.0, KR * res.V)), zf2], 'R<sub>A</sub> ' + fm(res.rx.RA_kN, 1) + ' kN', 'b');
    lbl('rb', [X0 + L / 2, YS - 0.18 - Math.max(0.25, Math.min(1.0, KR * res.V)), zf2], 'R<sub>B</sub> ' + fm(res.rx.RB_kN, 1) + ' kN', 'b');
    lbl('mm', [X0, by - kM * res.M - 0.14, Z0], 'M<sub>max</sub> = wL²/8 = ' + fm(res.M, 1) + ' kNm', 'm');
    lbl('va', [X0 - L / 2 + 0.35, sy + kV * res.V + 0.14, Z0], 'V ' + fm(res.V, 1) + ' kN', '');
    lbl('vb', [X0 + L / 2 - 0.35, sy - kV * res.V - 0.14, Z0], 'V −' + fm(res.V, 1) + ' kN', '');
    lbl('bmd', [X0 - L / 2 - 0.05, by - 0.12, Z0], 'BMD', '');
    lbl('sfd', [X0 - L / 2 - 0.05, sy + 0.12, Z0], 'SFD', '');
  }
  var LBL = {};
  function lbl(id, p, html, cls) { LBL[id] = 1; U.label('l3' + id, p, html, (cls || '') + ' keep', 3); }
  function unlbl(id) { if (LBL[id]) { U.unlabel('l3' + id); delete LBL[id]; } }

  // ---- teaching cues: tension lines, squeeze chevrons, shear marks, pulse at ≥ 90 % (exactly at the place)
  var cue = { on: false, t0: performance.now(), items: [] };
  function cueMat(c) { return new R.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false }); }
  function drawCues(res) {
    U.clear(gCue); cue.items = [];
    var s = res.s, L = s.L, h = s.h / 1000, b = s.b / 1000, zf = Z0 + b / 2 + 0.03;
    var uT = res.uT / 100, uC = res.uC / 100, uV = res.uV / 100;
    if (uT >= 0.6 && res.ok.crush) {   // tension lines under the soffit at mid-span
      var mt = cueMat(colorU(Math.min(1.2, uT)));
      for (var i = -2; i <= 2; i++) {
        var m = new R.Mesh(new R.BoxGeometry(0.34 - Math.abs(i) * 0.05, 0.012, 0.012), mt);
        m.position.set(X0 + i * 0.42, YS - 0.03 - 0.035 * (2 - Math.abs(i)) * 0.4, zf); gCue.add(m);
        cue.items.push({ m: m, k: 'shake', a: 0.006 + 0.02 * Math.max(0, uT - 0.6), x: m.position.x, y: m.position.y });
      }
    }
    if (uC >= 0.6) {                    // squeeze chevrons at the top at mid-span
      var mc = cueMat(colorU(Math.min(1.2, uC)));
      [-1, 1].forEach(function (sd) {
        for (var j = 0; j < 3; j++) {
          var ch = new R.Group(), a = new R.Mesh(new R.BoxGeometry(0.16, 0.018, 0.012), mc), c2 = a.clone();
          a.position.set(0, 0.04, 0); a.rotation.z = sd * 0.6; c2.position.set(0, -0.04, 0); c2.rotation.z = -sd * 0.6;
          ch.add(a, c2); ch.position.set(X0 - sd * (0.35 + j * 0.22), YS + h + 0.13, zf); gCue.add(ch);
          cue.items.push({ m: ch, k: 'squeeze', sd: sd, a: 0.02 + 0.05 * Math.max(0, uC - 0.6), x: ch.position.x, y: ch.position.y });
        }
      });
    }
    if (uV >= 0.6) {                    // shear: opposing arrows across a diagonal near each support
      var mv = cueMat(colorU(Math.min(1.2, uV)));
      [-1, 1].forEach(function (sd) {
        var x = X0 + sd * (L / 2 - Math.min(L / 4, 0.25 + 1.2 * res.d / 1000));
        var p = new R.Mesh(new R.BoxGeometry(0.02, h * 0.75, 0.012), mv);
        p.position.set(x, YS + h / 2, zf); p.rotation.z = -sd * 0.785; gCue.add(p);
        cue.items.push({ m: p, k: 'shake', a: 0.004 + 0.015 * Math.max(0, uV - 0.6), x: x, y: p.position.y });
      });
    }
    var umax = Math.max(uT, uC, uV), at = null;
    if (umax >= 0.9) {                  // pulsing glow at the critical place
      at = uV >= Math.max(uT, uC) ? [X0 - (L / 2 - Math.min(L / 4, 0.25 + 1.2 * res.d / 1000)), YS + h / 2] : uC > uT ? [X0, YS + h - 0.03] : [X0, YS + 0.03];
      var gl = new R.Mesh(new R.SphereGeometry(0.16, 16, 12), new R.MeshBasicMaterial({ color: umax > 1 ? 0xDC2626 : 0xE08A00, transparent: true, opacity: 0.35, depthWrite: false, toneMapped: false }));
      gl.position.set(at[0], at[1], zf - 0.02); gCue.add(gl); cue.items.push({ m: gl, k: 'pulse' });
    }
    var want = cue.items.length > 0;
    if (want && !cue.on) { cue.on = true; U.anims.add(cueTick); }
    cue.on = want;
  }
  // QA: the walker pauses the cue loop around screenshots (software GL renders slowly while it runs)
  window.__L3.cue = function (on) { if (!on) cue.on = false; else if (cue.items.length && !cue.on) { cue.on = true; U.anims.add(cueTick); } };
  function cueTick(now) {
    if (!cue.on) return false;
    var t = (now - cue.t0) / 1000;
    cue.items.forEach(function (c, i) {
      if (c.k === 'shake') { c.m.position.x = c.x + Math.sin(t * 38 + i * 1.7) * c.a; c.m.position.y = c.y + Math.cos(t * 31 + i) * c.a * 0.5; }
      else if (c.k === 'squeeze') { c.m.position.x = c.x + c.sd * Math.abs(Math.sin(t * 6 + i)) * c.a; }
      else if (c.k === 'pulse') { var p = 0.5 + 0.5 * Math.sin(t * 6); c.m.scale.setScalar(0.8 + 0.6 * p); c.m.material.opacity = 0.18 + 0.32 * p; }
    });
    return undefined;
  }

  // ---- cracks at the exact places: flexural (mid-span, tension face), diagonal shear (near supports), crushing (top)
  function crackPath(g, pts, r, mat, faces, z) {
    faces.forEach(function (zf) { for (var i = 0; i < pts.length - 1; i++) rod(I(pts[i][0], pts[i][1], zf), I(pts[i + 1][0], pts[i + 1][1], zf), r, mat, g, 4); });
  }
  function cracks(res, modes, t, g, mat, z) {
    U.clear(g);
    var s = res.s, L = s.L, h = s.h / 1000, b = s.b / 1000, faces = [z + b / 2 + 0.004, z - b / 2 - 0.004], d = res.d / 1000;
    var rnd = function (i) { var x = Math.sin(i * 12.9898) * 43758.5453; return x - Math.floor(x); };
    if (modes.indexOf('bend') >= 0 || modes.indexOf('defl') >= 0) {
      // flexural: vertical cracks from the soffit where M(x) is large; more and deeper for bending failure
      var nb = modes.indexOf('bend') >= 0 ? 9 : 5, hb = modes.indexOf('bend') >= 0 ? 0.72 : 0.4;
      for (var i = 0; i < nb; i++) {
        var xi = (i - (nb - 1) / 2) / ((nb - 1) / 2), x = X0 + xi * L * 0.3, mr = 1 - xi * xi * 0.7;
        var ht = h * hb * mr * Math.min(1, t * 1.3 - Math.abs(xi) * 0.3);
        if (ht <= 0.005) continue;
        var pts = [[x, YS + 0.002]], k = 4;
        for (var j = 1; j <= k; j++) pts.push([x + (rnd(i * 7 + j) - 0.5) * 0.04, YS + ht * j / k]);
        crackPath(g, pts, 0.006 + 0.004 * mr * t, mat, faces);
      }
    }
    if (modes.indexOf('shear') >= 0) {
      // diagonal shear cracks: about 45°, from the soffit near the support towards the load at the top
      [-1, 1].forEach(function (sd) {
        for (var i = 0; i < 3; i++) {
          var ext = Math.max(res.sh.crackFromSupport_m || 0, 2 * d);  // calc: where v > vc + link capacity (at least 2d)
        var xs = X0 + sd * (L / 2 - 0.15 - ext * (0.3 + 0.32 * i)), run = h * 0.9 * Math.min(1, t * 1.25 - i * 0.12);
          if (run <= 0.01) continue;
          var pts = [], k = 5;
          for (var j = 0; j <= k; j++) { var f = j / k; pts.push([xs - sd * run * f * 0.95 + (rnd(i * 11 + j + (sd > 0 ? 50 : 0)) - 0.5) * 0.03, YS + 0.03 + run * f]); }
          crackPath(g, pts, 0.008 + 0.004 * t * (i === 0 ? 1 : 0.6), mat, faces);
        }
      });
    }
    if (modes.indexOf('crush') >= 0) {
      // crushing: short horizontal and splitting cracks in the compression zone at the top, mid-span
      for (var c = 0; c < 8; c++) {
        var xc = X0 + (c - 3.5) * 0.12 * Math.min(1, t * 1.4), yc = YS + h - 0.02 - rnd(c) * 0.08;
        crackPath(g, [[xc - 0.06, yc], [xc, yc - 0.02 - 0.03 * rnd(c + 3)], [xc + 0.06, yc - 0.01]], 0.006, mat, faces);
      }
    }
  }
  var spall = new R.Group(); U.G.add(spall);
  function crushBits(res, t) {
    U.clear(spall);
    if (t <= 0) return;
    var s = res.s, h = s.h / 1000, b = s.b / 1000, m = E.de(0x9aa0a6);
    for (var i = 0; i < 16; i++) {
      var a = i * 2.39996, r = 0.05 + 0.2 * t * ((i % 5) / 5 + 0.3);
      var q = new R.Mesh(new R.BoxGeometry(0.03, 0.02, 0.03), m);
      q.position.set(X0 + Math.cos(a) * r, YS + h + 0.02 + Math.sin(a * 1.3) * 0.04 * t - 0.5 * t * t * ((i % 3) * 0.3), Z0 + b / 2 * Math.sin(a));
      spall.add(q);
    }
  }

  // ---- Formulas panel: calc steps and the BS steps above, in the manual's order (formative T L4967-L4976)
  function rowsOf(steps, ids, cls) {
    var list = ids ? ids.map(function (id) { return steps.filter(function (s) { return s.id === id; })[0]; }).filter(Boolean) : steps;
    return list.map(function (s) {
      return [s.formula, s.label + ' (' + s.ref + ')' + chip(s.chip || 'manual', s.note), fv(s), cls && cls[s.id] || ''];
    });
  }
  function okc(b) { return b ? 'ok' : 'bad'; }
  function sectionSvg(res) {
    var s = res.s, sc = Math.min(120 / s.h, 150 / s.b), w = s.b * sc, hh = s.h * sc, x0 = 70, y0 = 14;
    var cv = s.cover * sc, l = s.ld * sc, r = Math.max(2, s.dia * sc / 2), out = '';
    out += '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + hh + '" fill="#d5d9de" stroke="#14243a" stroke-width="1"/>';
    out += '<rect x="' + (x0 + cv + l / 2) + '" y="' + (y0 + cv + l / 2) + '" width="' + (w - 2 * cv - l) + '" height="' + (hh - 2 * cv - l) + '" rx="3" fill="none" stroke="#8a6e52" stroke-width="' + Math.max(1.2, l) + '"/>';
    var span = w - 2 * cv - 2 * l - 2 * r, gap = s.n > 1 ? span / (s.n - 1) : 0;
    for (var i = 0; i < s.n; i++) out += '<circle cx="' + (x0 + cv + l + r + i * gap) + '" cy="' + (y0 + hh - cv - l - r) + '" r="' + r + '" fill="' + (res.ok.steel ? '#3b4a5c' : '#DC2626') + '"/>';
    [0, 1].forEach(function (k) { out += '<circle cx="' + (k ? x0 + w - cv - l - 3 : x0 + cv + l + 3) + '" cy="' + (y0 + cv + l + 3) + '" r="3" fill="#3b4a5c"/>'; });
    var yd = y0 + hh - cv - l - r;
    out += '<line x1="' + (x0 + w + 10) + '" y1="' + y0 + '" x2="' + (x0 + w + 10) + '" y2="' + yd + '" stroke="#0F2E5A"/><text x="' + (x0 + w + 14) + '" y="' + (y0 + (yd - y0) / 2 + 4) + '" font-size="11" fill="#0F2E5A">d ' + fm(res.d, 0) + '</text>';
    out += '<line x1="' + (x0 - 10) + '" y1="' + y0 + '" x2="' + (x0 - 10) + '" y2="' + (y0 + hh) + '" stroke="#5d6b7c"/><text x="' + (x0 - 14) + '" y="' + (y0 + hh / 2 + 4) + '" font-size="11" text-anchor="end" fill="#5d6b7c">h ' + s.h + '</text>';
    out += '<text x="' + (x0 + w / 2) + '" y="' + (y0 + hh + 14) + '" font-size="11" text-anchor="middle" fill="#5d6b7c">b ' + s.b + '</text>';
    out += '<text x="' + (x0 + w + 64) + '" y="' + (y0 + 26) + '" font-size="11" fill="#14243a">' + s.n + ' Ø' + s.dia + ' bottom</text>';
    out += '<text x="' + (x0 + w + 64) + '" y="' + (y0 + 42) + '" font-size="11" fill="#14243a">links Ø' + s.ld + ' at ' + s.sv + '</text>';
    out += '<text x="' + (x0 + w + 64) + '" y="' + (y0 + 58) + '" font-size="11" fill="#14243a">cover ' + s.cover + ' mm</text>';
    out += '<text x="' + (x0 + w + 64) + '" y="' + (y0 + 74) + '" font-size="11" fill="#14243a">2 Ø' + HANGER + ' hangers (typical, to confirm)</text>';
    return '<svg viewBox="0 0 300 156" width="300" height="156" role="img" aria-label="Beam cross section">' + out + '</svg>';
  }
  function formulas(res) {
    var s = res.s, t = task(), fl = res.fl, sh = res.sh, df = res.df, ok = res.ok;
    var rL = rowsOf(res.load.steps, null, { w: 'hl' });
    if (!s.sw) rL[0][1] = 'Self-weight not added: ' + (st.task === 0 ? 'Task 43 includes it in gₖ' : 'switched off') + chip('manual');
    var rM = rowsOf(res.rx.steps, ['Fy', 'RA', 'RB']);
    rM.push(['M = wL²/8', 'Maximum moment at mid-span' + chip('manual'), fm(res.M, 1) + ' kNm', 'hl']);
    rM.push(['V = wL/2', 'Maximum shear at the supports' + chip('manual'), fm(res.V, 1) + ' kN', '']);
    var rB = [['d = h − c − Ø<sub>link</sub> − Ø/2', s.h + ' − ' + s.cover + ' − ' + s.ld + ' − ' + s.dia / 2 + '' + chip('manual'), fm(res.d, 0) + ' mm', 'hl']]
      .concat(rowsOf(fl.steps, ['K', 'z', 'zd', 'x', 'k', 'As'], { K: okc(ok.crush), As: 'hl' }));
    rB.splice(2, 0, ["K ≤ K' = 0.156", (ok.crush ? 'no compression steel needed' : 'too shallow: the top concrete crushes') + '' + chip('manual note', fl.checks[0].note), fm(fl.K, 3), okc(ok.crush)]);
    rB.push(['A<sub>s,prov</sub> = ' + s.n + ' Ø' + s.dia, 'bars from the table, slightly more than A<sub>s</sub>' + chip('manual'), fm(res.AsProv, 0) + ' mm²', okc(ok.steel)]);
    rB.push(["manual route: x = 0.87f<sub>y</sub>A<sub>s</sub>/(0.36f<sub>ck</sub>b), z = d(1 − 0.42k)", "the manual's printed steps give A<sub>s</sub> " + (res.man.As_req_mm2 ? fm(res.man.As_req_mm2, 0) + ' mm²' : '·') + ' (OQ-01)' + chip('manual note', 'Shown for comparison. The lab designs with the BS 8110 K route.'), res.man.k !== null && res.man.k !== undefined ? 'k ' + fm(res.man.k, 3) : '·', '']);
    var rV = rowsOf(sh.steps, ['v', 'vmax', 'vc', 'AsvSv', 'Asvprov', 'vcap', 'svmax', 'crack'], { v: 'hl', vmax: okc(ok.shearMax), Asvprov: okc(ok.links), vcap: okc(ok.links), svmax: okc(ok.sv) });
    rV.push(['s<sub>v</sub> ≥ 80 mm', 'minimum link spacing, f<sub>yv</sub> ' + s.fyv + ' N/mm²' + chip('typical value, to confirm', 'Task 43 gives no fyv. 250 N/mm² (mild steel links) as in Task 52.'), s.sv + ' mm', okc(s.sv >= 80)]);
    var rD = rowsOf(df.steps, ['Lbasic', 'fs', 'MF', 'Ld', 'Lallow'], { Ld: okc(ok.defl), Lallow: okc(ok.defl) });
    rD.push(['δ = 5wL⁴/384EI', 'service load g\u2096 + q\u2096, gross section, E<sub>c</sub> = 20 + 0.2f<sub>cu</sub> = ' + fm(res.Ec / 1000, 0) + ' kN/mm² (OQ-17)' + chip('manual note', 'The manual prints 5WL⁴/384EI; with w per metre it is 5wL⁴/384EI. Ec from BS 8110-2. Information only: the design check is span/depth.'), fm(res.delta, 1) + ' mm', '']);
    var rS = [['clear gap ≥ max(Ø, h<sub>agg</sub> + 5)', 'bars in one layer, h<sub>agg</sub> ' + HAGG + ' mm' + chip('typical value, to confirm'), fm(res.clear, 0) + ' ≥ ' + fm(res.spc.beamMinClear_mm, 0) + ' mm', okc(ok.fit)],
      ['A<sub>s,prov</sub> ≥ ' + (s.fy >= 400 ? '0.13' : '0.24') + ' % bh', 'minimum steel (OQ-12)' + chip('BS 8110, to confirm', 'The manual gives no minimum steel. BS 8110 Table 3.25 is used.'), fm(res.AsMin, 0) + ' mm²', okc(ok.asmin)],
      ['A<sub>s,prov</sub> ≤ 4 % bh', 'maximum steel' + chip('manual'), fm(res.AsMax, 0) + ' mm²', okc(ok.asmax)],
      ['cover', 'beam, internal 25 to 30, external 30 to 40 mm' + chip('manual'), s.cover + ' mm', '']];
    U.fx({ sub: t.name + ' · f<sub>cu</sub> ' + s.fcu + ', f<sub>y</sub> ' + s.fy + ' N/mm² · live values', dg: sectionSvg(res), groups: [
      { h: 'DESIGN LOAD', rows: rL },
      { h: 'REACTIONS, SHEAR AND MOMENT', rows: rM },
      { h: 'BENDING', p: res.uB, rows: rB },
      { h: 'SHEAR AND LINKS', p: res.uV, rows: rV },
      { h: 'DEFLECTION · SPAN / DEPTH', p: res.uD, rows: rD },
      { h: 'DETAILING', rows: rS }] });
  }

  // ---- draw (live, on every input)
  var shotBox = function () {
    var L = st.L, h = st.h / 1000, z0 = ui.cmp ? ZC - 0.4 : Z0 - 0.5;
    return { box: new R.Box3(I(X0 - L / 2 - 0.6, 1.0, z0), I(X0 + L / 2 + 0.6, YS + h + 1.7, Z0 + 0.6)), dir: [0.1, 0.18, 0.98], fov: 30, focus: [gB, gIn, gLd, gDg, gCue, gCr, gCmp] };
  };
  function shot() { return shotBox(); }
  function setSag(u, L, v) { u.uX0.value = X0 - L / 2; u.uL.value = L; u.uSag.value = v; }
  // Task 43 gives b 275 and d 450 (T L3906): the width is fixed and h follows d = h - cover - link - bar/2
  function lock43() {
    if (st.task !== 0) return;
    st.b = 275; st.h = 450 + st.cover + st.ld + st.dia / 2;
  }
  function applyLock() {
    box.querySelectorAll('button[data-k="b"]').forEach(function (x) { x.disabled = st.task === 0 || ui.busy; });
    $('#dl_h').disabled = st.task === 0 || ui.busy;
  }
  function req() { if (!ui.raf) ui.raf = requestAnimationFrame(draw); }
  function draw() {
    ui.raf = 0;
    lock43();
    var res = compute(); ui.res = res;
    U.clear(gB); U.clear(gCr); U.clear(spall); ui.tested = null;
    var eye = ui.eye;
    M_CON.opacity = eye ? 0.2 : 1; M_CON.depthWrite = !eye; M_CON.needsUpdate = true;
    buildBeam(gB, gIn, res, Z0, M_CON, M_STL, M_LNK, eye);
    if (eye) field(res, gIn, Z0);
    legend.classList.toggle('show', eye);
    setSag(SAG, st.L, 0); setSag(SAGC, st.L, 0);
    drawLoads(res, 1);
    drawCues(res);
    // compare: a correct design of the same task under the same load, behind the trainee's beam
    U.clear(gCmp); unlbl('c1'); unlbl('c2');
    if (ui.cmp) {
      var rs = Object.assign({}, st, TASKS[st.task].good, { L: st.L, gk: st.gk, qk: st.qk, sw: st.sw, fcu: st.fcu, fy: st.fy });
      var rr = compute(rs); ui.ref = rr;
      buildBeam(gCmp, null, rr, ZC, M_CONC, null, null, false);
      lbl('c1', [X0 - st.L / 2 + 0.9, YS + rs.h / 1000 + 0.18, ZC], (rr.pass ? 'CORRECT DESIGN ✓ ' : 'REFERENCE ') + rs.b + ' × ' + rs.h + ', ' + rs.n + ' Ø' + rs.dia + ', Ø' + rs.ld + ' at ' + rs.sv, rr.pass ? 'ok' : 'bad');
      lbl('c2', [X0 + st.L / 2 - 0.9, YS + st.h / 1000 + 0.18, Z0 + st.b / 2000], 'YOUR DESIGN' + (res.pass ? ' ✓' : ' ✕'), res.pass ? 'ok' : 'bad');
    } else ui.ref = null;
    $('#dlK').classList.toggle('on', ui.cmp); $('#dlK').setAttribute('aria-pressed', String(ui.cmp));
    if (eye) lbl('cv', [X0 - st.L / 2 + 0.9, YS + st.h / 1000 + 0.12, Z0 + st.b / 2000 + 0.05], 'cover ' + st.cover + ' · ' + st.n + ' Ø' + st.dia + ' · links Ø' + st.ld + ' at ' + st.sv, 'b');
    else unlbl('cv');
    unlbl('call'); unlbl('dx');
    U.gauge([['Bending', 'A<sub>s</sub> ' + fm(res.fl.As_req_mm2, 0) + ' / ' + fm(res.AsProv, 0) + ' mm² · K ' + fm(res.fl.K, 3), res.uB],
      ['Shear', 'v ' + fm(res.sh.v_MPa, 2) + ' / ' + fm(res.sh.vCap_MPa, 2) + ' N/mm²', res.uV],
      ['Deflection', 'L/d ' + fm(res.df.actual, 1) + ' / ' + fm(res.df.allowable, 1), res.uD]]);
    formulas(res);
    // panel
    var t = task();
    $('#dlH').textContent = t.name + (st.task === 0 ? ': area of reinforcement' : ': preliminary beam design');
    $('#dlG').textContent = t.give + (t.mat === 'typical' ? '; fcu 30, fy 460 typical, to confirm' : '');
    $('#dlW').checked = st.sw; applyLock();
    $('#dlv_L').textContent = fm(st.L, 2) + ' m'; $('#dl_L').value = st.L;
    $('#dlv_h').textContent = st.h + ' mm · d ' + fm(res.d, 0) + ' mm'; $('#dl_h').value = st.h;
    $('#dlv_gk').textContent = fm(st.gk, 1) + ' kN/m'; $('#dlv_qk').textContent = fm(st.qk, 1) + ' kN/m';
    $('#dlv_b').textContent = st.b + ' mm'; $('#dlv_cover').textContent = st.cover + ' mm'; $('#dlv_fcu').textContent = st.fcu;
    $('#dlv_n').textContent = st.n; $('#dlv_dia').textContent = 'Ø' + st.dia; $('#dlv_fy').textContent = st.fy;
    $('#dlv_ld').textContent = 'Ø' + st.ld; $('#dlv_sv').textContent = st.sv + ' mm'; $('#dlv_fyv').textContent = st.fyv;
    $('#dlN').innerHTML = 'w = 1.4G<sub>k</sub> + 1.6Q<sub>k</sub> = ' + fm(res.w, 2) + ' kN/m · M = ' + fm(res.M, 1) + ' kNm · V = ' + fm(res.V, 1) + ' kN<br>A<sub>s</sub> required ' + fm(res.fl.As_req_mm2, 0) + ' mm², provided ' + fm(res.AsProv, 0) + ' mm²';
    var o = res.ok;
    $('#dlC').innerHTML = [['Bending steel', o.steel], ['K ≤ 0.156', o.crush], ['Shear v ≤ max', o.shearMax], ['Links', o.links && o.sv], ['Span/depth', o.defl], ['Bars fit', o.fit], ['Min and max steel', o.asmin && o.asmax]]
      .map(function (c) { return '<span class="' + (c[1] ? 'ok' : '') + '">' + (c[1] ? '✓ ' : '✕ ') + c[0] + '</span>'; }).join('');
    U.banner(null); U.why && U.why(null);
    U.dirty = true;
    U.emit('design', { pass: res.pass, task: st.task });
  }

  // ---- Test: 2 to 4 s of loading and the consequence at the exact places
  function setBusy(b) { ui.busy = b; U.locked = b; box.querySelectorAll('button,input').forEach(function (x) { x.disabled = b; }); applyLock(); }
  function taskLoads() { var t = task(); if (st.task === 0 && (st.b !== 275 || Math.abs(ui.res.d - 450) > 0.5)) return false; return st.L === t.L && st.gk === t.gk && st.qk === t.qk && st.sw === t.sw && st.fcu === t.fcu && st.fy === t.fy; }
  var CAUSE = {
    crush: ['Crushing at the top', 'K {K} &gt; 0.156: the section is too shallow, the compression zone at mid-span crushes', 's3d07'],
    bend: ['Flexural cracks at mid-span', 'A<sub>s,prov</sub> {AP} &lt; A<sub>s</sub> {AR} mm²: the bottom bars yield where M is largest', 's3d05'],
    shear: ['Diagonal shear cracks', 'v {v} N/mm² near the supports: links {L} cannot carry it', 's3d06'],
    defl: ['Too much deflection', 'L/d {Ld} &gt; {Lda} allowed: the beam is too slender for its span', 's3d08'],
    detail: ['Detailing rule broken', 'bars do not fit in one layer, or the steel is below the minimum or above 4 %', 's3d10']
  };
  function cap1(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
  function fillT(s, res) {
    return s.replace('{K}', fm(res.fl.K, 3)).replace('{AP}', fm(res.AsProv, 0)).replace('{AR}', fm(res.fl.As_req_mm2, 0)).replace('{v}', fm(res.sh.v_MPa, 2))
      .replace('{L}', 'Ø' + res.s.ld + ' at ' + res.s.sv + ' mm' + (!res.ok.sv ? ' (more than 0.75d)' : !res.ok.shearMax ? ' (v above the upper limit: make the section bigger)' : ''))
      .replace('{Ld}', fm(res.df.actual, 1)).replace('{Lda}', fm(res.df.allowable, 1));
  }
  async function test() {
    if (ui.busy) return;
    if (ui.raf) { cancelAnimationFrame(ui.raf); ui.raf = 0; draw(); }
    var res = ui.res, s = res.s, L = s.L, h = s.h / 1000, modes = res.modes, snap0 = JSON.stringify(st);
    setBusy(true);
    try {
      U.banner(null); unlbl('call');
      await U.wait(150); // keep the trainee's camera (a reframe here hid the right support)
      U.sfx('thud', 0.5);
      // 1. the load comes on: arrows, reactions, BMD and SFD grow
      await U.anim(900, function (t) { drawLoads(res, 0.05 + 0.95 * t); });
      // 2. the consequence, at the place where it happens
      var SAGVIS = 0.04, ex = Math.round(SAGVIS * 1000 / Math.max(0.1, res.delta));  // stated exaggeration
      var sagEnd = modes.indexOf('defl') >= 0 || modes.indexOf('bend') >= 0 || modes.indexOf('crush') >= 0 ? 0.16 + 0.06 * Math.min(2, res.uD / 100) : SAGVIS;
      var show = modes.filter(function (m) { return m !== 'detail'; });
      if (show.length && (show.indexOf('shear') >= 0 || show.indexOf('bend') >= 0)) { if (!ui.eye) { ui.eye = true; draw(); U.toolOn('eye', true); res = ui.res; } }
      if (show.length) U.sfx('creak');
      await U.anim(1400, function (t) {
        var e = t * t * (3 - 2 * t);
        setSag(SAG, L, sagEnd * e); if (ui.cmp) setSag(SAGC, L, SAGVIS * e);
        if (show.length) { cracks(res, show, e, gCr, M_CRK, Z0); if (show.indexOf('crush') >= 0) crushBits(res, e); }
        if (t > 0.45 && !ui._cr && show.length) { ui._cr = 1; U.sfx('crack'); }
      });
      ui._cr = 0;
      ui.tested = res;
      var exTxt = sagEnd === SAGVIS ? 'deflected shape ×' + ex + ' (δ ' + fm(res.delta, 1) + ' mm, gross section)' : 'deflected shape exaggerated, not to scale';
      lbl('dx', [X0 + L * 0.27, YS - 0.1 - sagEnd * 0.75, Z0 + s.b / 2000 + 0.25], exTxt, '');
      var cur = compute(); // nothing may have changed during the animation: count only a design that still passes the givens
      var same = cur.pass === res.pass && JSON.stringify(st) === snap0;
      if (!res.pass) {
        var m0 = modes[0], c = CAUSE[m0];
        var at = m0 === 'shear' ? [X0 - L / 2 + 0.6 + 1.3 * res.d / 1000, YS + 0.55 * h, Z0 + s.b / 2000 + 0.1] : m0 === 'crush' ? [X0 + L * 0.2, YS + h + 0.12, Z0 + s.b / 2000] : m0 === 'detail' ? [X0 + L / 2 - 0.8, YS + h + 0.3, Z0] : [X0, YS - sagEnd * 0.8 - 0.12, Z0 + s.b / 2000 + 0.2];
        if (m0 !== 'detail') U.impact([at[0], m0 === 'crush' ? YS + h : YS + 0.05, Z0 + s.b / 2000], { sfx: 'fail', size: 0.6 });
        lbl('call', at, c[0], 'bad');
        U.banner({ t: c[0].toUpperCase(), b: modes.length > 1 ? 'also: ' + modes.slice(1).map(function (m) { return CAUSE[m][0].toLowerCase(); }).join(', ') : fillT(c[1], res).split(':')[0] });
        U.why && U.why({ k: 'WHY IT HAPPENED', t: c[0], eq: fillT(c[1], res).split(':')[0], line: cap1(fillT(c[1], res).split(':').slice(1).join(':').trim()), tag: m0 === 'defl' || m0 === 'shear' ? 'BS 8110, to confirm' : 'manual' });
        say(c[2]);
      } else {
        U.sfx('ok');
        var tk = task();
        if (taskLoads()) U.banner({ ok: true, hold: true, t: 'HOLDS', b: 'bending ' + fm(res.uB, 0) + ' % · shear ' + fm(res.uV, 0) + ' % · span/depth ' + fm(res.uD, 0) + ' %' });
        else U.banner({ hold: true, t: 'HOLDS, NOT FOR THIS TASK', b: tk.name + ': ' + tk.L + ' m, g\u2096 ' + tk.gk + ', q\u2096 ' + tk.qk + ' kN/m' + (tk.sw ? ' + self-weight' : '') + ', f<sub>cu</sub> ' + tk.fcu + ', f<sub>y</sub> ' + tk.fy });
        U.emit('test', { stood: true, task: st.task, loads: same && cur.pass && taskLoads() });
      }
      await U.wait(500);
    } finally { setBusy(false); }
  }

  // ---- undo/redo/reset/See inside on the design variables only
  U.history({ get: function () { return JSON.parse(JSON.stringify(st)); }, set: function (v) { if (ui.busy) return; Object.assign(st, v); req(); } });
  U.tool('reset', function () { if (ui.busy) return; U.mark(); preset(st.task); req(); U.shot(shot(), 900); });
  U.tool('eye', function () { ui.eye = !ui.eye; U.toolOn('eye', ui.eye); req(); U.emit('eye'); });
  U.hoverable = function () { return [gB, gIn, gCmp]; };
  U.cfg.praise = LINES.s3d09;
  try { window.__eng.sim.narr.S3_DONE = LINES.s3d09; } catch (e) {}
  var tt = $('#ttlT'); if (tt) tt.textContent = 'Beam design';

  var steps = [
    { t: 'Task 43', prompt: 'Choose bars and links, then press Test', shot: shot,
      enter: function () { preset(0); req(); say('s3d01'); },
      test: function (ev, d) { return ev === 'test' && d && d.stood && d.task === 0 && d.loads; },
      after: function () { ui.done[0] = true; say('s3d02'); } },
    { t: 'Task 42', prompt: 'Size the beam, then press Test', shot: shot,
      enter: function () { preset(1); req(); say('s3d03'); },
      test: function (ev, d) { return ev === 'test' && d && d.stood && d.task === 1 && d.loads; },
      after: function () { ui.done[1] = true; say('s3d04'); } }
  ];
  preset(0); draw();
  (async function () {
    await U.start();
    E.bridge.set('RC_S3_Explored', true);
    window.__live = true;
    var run = U.runSteps(steps);
    var fin = $('#bNext').onclick;
    $('#bNext').onclick = function () {
      var last = U.idx >= steps.length - 1;
      if (!last) { fin(); return; }
      if (!ui.done.every(Boolean)) { U.toast('First pass every design task: design it, then press Test'); return; }
      fin(); // the engine plays S3_DONE: its clip and caption are replaced by s3d09 (narr/S3_DONE.*, below)
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
