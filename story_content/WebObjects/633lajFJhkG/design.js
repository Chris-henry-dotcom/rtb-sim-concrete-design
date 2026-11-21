/* BDCBD501 design lab L4: slab (slot S2, web object 633lajFJhkG).
   Runs after lab.js (engine; its last statement exports window.__eng, fix/ENGINE-API.md) and calc.js (generated from
   fix/designlab/calc.mjs by fix/designlab/gen-calc.mjs). Every number shown comes from window.RCcalc.
   The trainee changes the panel (clear spans), the loads, the thickness, the cover and the bars in both directions;
   slab type, moments, steel, spacing and deflection update live. Test plays the loading and its consequence at the
   exact place. RC_S2_Done is set only when every design task has passed.
   T = fix/manual/BDCBD501-trainee.txt line. */
(function () {
  'use strict';
  var E = window.__eng, C = window.RCcalc;
  if (!E || !C) { console.error('design.js: lab.js or calc.js missing'); return; }
  var U = E.lab, S = E.sim, R = E.R, V = E.I, $ = E.He, M = S.mat;

  // ---- manual data
  // Task 46 (1), T L4224: live 3 kN/m², dead 1 kN/m², fcu 30, fy 460, span 4.5 m, beams 230 mm, 10 mm bars,
  // 1 h fire, mild exposure. Not given: the long side (10 m assumed so the panel is one-way), the thickness (the
  // trainee designs it), the cover (20 mm, the manual's range for internal slabs 15 to 20 mm, T L3387, L4009).
  // Task 48, T L4286: two-way panel 4.0 × 5.0 m, thickness 150 mm, cover 25 mm, 12 mm bars at 150 and 10 mm bars at
  // 200. Its loads are not given: the two-way slab of Task 46 (2), T L4226-L4232, gives imposed 4 kN/m², finishes
  // 1.8 kN/m², fy 460, concrete 24 kN/m³; no fcu anywhere (25 N/mm² assumed, the summative slab's fc′, T L5121).
  var GC = 24;        // unit weight of concrete, kN/m³ (T L4231, L3710)
  var BW = 0.23;      // beam width, m (Task 46, T L4224); the slab sits on beams on all four edges
  var TASKS = [
    { id: 't46', name: 'Task 46 (1): one-way slab', ref: '', fcu: 30, fy: 460,
      given: 'Clear span 4.5 m between 230 mm beams · dead 1, live 3 kN/m² · fcu 30, fy 460 N/mm² · 10 mm bars · mild exposure, 1 h fire. Long side 10 m and self-weight added: assumptions, to confirm.',
      load: { lx: 4.5, ly: 10, dead: 1, imp: 3, cover: 20, dia: 10 },
      start: { t: 150, cover: 20, dia: 10, s: 150, dia2: 8, s2: 250 },
      answer: { t: 200, cover: 20, dia: 10, s: 125, dia2: 8, s2: 175 } },
    { id: 't48', name: 'Task 48: two-way panel', ref: '', fcu: 25, fy: 460,
      given: 'Panel 4.0 × 5.0 m on beams, 150 mm thick, cover 25 mm, Y12 at 150 and Y10 at 200 · imposed 4, finishes 1.8 kN/m² (Task 46 (2)) · loads from Task 46 (2) and fcu 25: assumptions, to confirm.',
      load: { lx: 4.0, ly: 5.0, dead: 1.8, imp: 4, cover: 25 },
      start: { t: 150, cover: 25, dia: 12, s: 150, dia2: 10, s2: 200 },
      answer: { t: 175, cover: 25, dia: 12, s: 150, dia2: 10, s2: 200 } }
  ];
  var DIAS = [8, 10, 12, 16];
  var SPACINGS = C.SLAB_TABLE_SPACINGS_mm.filter(function (s) { return s >= 100; }); // clear gap ≥ 75 mm (T L3543)
  var LIM = { lx: [2.0, 6.0, 0.25], ly: [2.0, 12.0, 0.25], dead: [0, 5, 0.1], imp: [0, 10, 0.5], t: [100, 300, 25], cover: [15, 30, 5] };

  // ---- voice: new Imani lines (fix/voice/requests-L4.txt). Until a clip is in narr/, caption and signer run from
  // the text with no audio request. s2d01..s2d10 delivered (narr/, words.json with "text" added).
  var CLIPS = { s2d01: 1, s2d02: 1, s2d03: 1, s2d04: 1, s2d05: 1, s2d06: 1, s2d07: 1, s2d08: 1, s2d09: 1, s2d10: 1 };
  var LINES = {
    s2d01: 'Task forty six. A slab spans four and a half metres between beams. Choose its thickness and its bars so that every check passes, then press Test.',
    s2d02: 'It holds. The steel carries the bending at mid span, and the slab is deep enough not to sag too much.',
    s2d03: 'Task forty eight. A two way panel, four metres by five metres, with the bars from the drawing. Check it, change what fails, then test it.',
    s2d04: 'Well designed. Both directions carry their moments, and the panel passes the deflection check.',
    s2d05: 'Too little steel. Cracks open across the bottom of the slab at mid span, where the moment is largest. Add bars or bring them closer.',
    s2d06: 'The slab is too thin for its span, so it sags too much. Make it thicker.',
    s2d07: 'The panel is overloaded. Cracks open along the yield lines, from the corners to the middle. Add steel in both directions.',
    s2d08: 'The concrete at the top is crushed. The slab is too shallow for this moment. Make it thicker.',
    s2d09: 'The bars are too far apart. Keep the spacing within the limits of the manual.',
    s2d10: 'The slab lab is done. You designed slabs that carry their load without sagging too much.'
  };
  function say(key) {
    var text = LINES[key];
    if (CLIPS[key]) return U.say(key, text);
    if (U.sign && U.sign.cache) U.sign.cache[''] = null; // signer uses the caption text, no words.json fetch
    return U.say('', text);
  }

  // ---- state
  var st = { task: 0, lx: 4.5, ly: 10, dead: 1, imp: 3, t: 150, cover: 20, dia: 10, s: 150, dia2: 8, s2: 250 };
  var ui = { raf: 0, busy: false, res: null, eye: false, cmp: false, flow: false, done: [false, false] };
  function task() { return TASKS[st.task]; }
  // a task step counts only with the task's own spans and loads (its givens); a design that holds with other values
  // shows "Holds, but not for this task" and does not count
  function loadsOk(s) { s = s || st; var L = TASKS[s.task].load; return Math.abs(s.lx - L.lx) < 1e-9 && Math.abs(s.ly - L.ly) < 1e-9 && Math.abs(s.dead - L.dead) < 1e-9 && Math.abs(s.imp - L.imp) < 1e-9 &&
    s.cover === L.cover && (L.dia == null || s.dia === L.dia); } // review L4 #2: cover and the Task 46 bar size are givens too
  function ldA(r) { return r.defl.allowable > 0 ? fm(r.defl.allowable, 1) : 'none'; } // calc MF out of range (CALC NEEDS)

  // ---- calculation (calc.mjs): slabDesign for the short span (and the Table 3.13 moments of a two-way panel),
  // flexureDesign for the long span of a two-way panel, minimum steel for the distribution bars, spanDepthCheck with
  // the trainee's bars, spacingRules for the limits.
  function compute(s) {
    s = s || st;
    var t = TASKS[s.task];
    var sw = C.selfWeight({ volume_m3: s.t / 1000, unitWeight_kNm3: GC }).W_kN; // per m² of slab
    var gk = s.dead + sw, qk = s.imp;
    var d0 = C.slabEffectiveDepth_mm({ t_mm: s.t, cover_mm: s.cover, barDia_mm: s.dia });
    var ex = C.effectiveSpan({ clearSpan_m: s.lx, d_m: d0 / 1000, centres_m: s.lx + BW });
    var ey = C.effectiveSpan({ clearSpan_m: s.ly, d_m: d0 / 1000, centres_m: s.ly + BW });
    var Lx = ex.Leff_m, Ly = ey.Leff_m;
    var type = C.slabType({ Lx_m: Lx, Ly_m: Ly });
    var two = type.type === 'two-way';
    var r = C.slabDesign({ gk_kNm2: gk, qk_kNm2: qk, span_m: Lx, Ly_m: Ly, t_mm: s.t, cover_mm: s.cover, barDia_mm: s.dia, fcu_MPa: t.fcu, fy_MPa: t.fy });
    var f = r.flexure;
    var AsReq = r.As_design_mm2PerM, AsProv = C.barsAreaPerM_mm2(s.dia, s.s);
    var sp = C.spacingRules({ barDia_mm: s.dia, maxAggregate_mm: 20, slabD_mm: r.d_mm, slabThickness_mm: s.t });
    var defl = C.spanDepthCheck({ span_mm: Lx * 1000, d_mm: r.d_mm, support: 'simple', M_kNm: r.M_kNm, b_mm: 1000, fy_MPa: t.fy, As_req_mm2: AsReq, As_prov_mm2: AsProv });
    var AsProv2 = C.barsAreaPerM_mm2(s.dia2, s.s2), d2 = null, f2 = null, AsReq2, s2max, sp2;
    if (two) {
      d2 = s.t - s.cover - s.dia - s.dia2 / 2; // long-span bars sit on the short-span bars (geometry)
      f2 = C.flexureDesign({ M_kNm: r.twoWay.msy_kNm, b_mm: 1000, d_mm: d2, fcu_MPa: t.fcu, fy_MPa: t.fy });
      AsReq2 = Math.max(f2.As_req_mm2, r.minSteel_mm2PerM);
      sp2 = C.spacingRules({ barDia_mm: s.dia2, maxAggregate_mm: 20, slabD_mm: d2, slabThickness_mm: s.t });
      s2max = sp2.slabMainMax_mm;
    } else {
      AsReq2 = r.minSteel_mm2PerM; // distribution bars: minimum steel (OQ-12)
      sp2 = C.spacingRules({ barDia_mm: s.dia2, maxAggregate_mm: 20, slabD_mm: r.d_mm, slabThickness_mm: s.t });
      s2max = sp2.slabDistributionMax_mm;
    }
    var chk = {}; r.checks.forEach(function (c) { chk[c.id] = c.ok; });
    var res = {
      s: JSON.parse(JSON.stringify(s)), t: t, sw: sw, gk: gk, qk: qk, ex: ex, ey: ey, Lx: Lx, Ly: Ly, type: type, two: two, r: r, f: f,
      AsReq: AsReq, AsProv: AsProv, sp: sp, defl: defl, d2: d2, f2: f2, AsReq2: AsReq2, AsProv2: AsProv2, s2max: s2max,
      trib: C.slabTributaryAreas({ Lx_m: Lx, Ly_m: Ly }),
      ok: {
        K: chk.k === true && (!f2 || !f2.compressionSteelNeeded),
        steel: AsProv >= AsReq - 1e-9,
        spacing: s.s <= sp.slabMainMax_mm + 1e-9 && s.s - s.dia >= sp.slabMinClear_mm,
        steel2: AsProv2 >= AsReq2 - 1e-9,
        spacing2: s.s2 <= s2max + 1e-9 && s.s2 - s.dia2 >= sp2.slabMinClear_mm,
        defl: defl.checks[0].ok
      }
    };
    res.uK = 100 * Math.max(f.K / f.Kprime, f2 ? f2.K / f2.Kprime : 0);
    res.uB = 100 * AsReq / AsProv;
    res.uB2 = 100 * AsReq2 / AsProv2;
    res.uD = defl.allowable > 0 ? 100 * defl.utilisation : 999; // calc MF can go negative at very high M/bd² (CALC NEEDS in gate-L4.md)
    res.pass = Object.keys(res.ok).every(function (k) { return res.ok[k]; });
    res.mode = !res.ok.K ? 'crush' : !res.ok.steel || (two && !res.ok.steel2) ? 'bend' : !res.ok.defl ? 'defl' : !res.ok.spacing || !res.ok.spacing2 || !res.ok.steel2 ? 'spacing' : null;
    // load path (slab share only): one-way: half the panel to each long beam; two-way: trapezoids and triangles
    // (T L2711-L2722); each corner column takes half of each beam framing into it (T L2744-L2749)
    var wu = r.wu_kNm2;
    if (two) { res.beamL = res.trib.A1_trapezoid_m2 * wu; res.beamS = res.trib.A2_triangle_m2 * wu; }
    else { res.beamL = res.trib.A_oneWay_m2 * wu; res.beamS = 0; }
    res.col = C.columnLoadFromBeams({ beamLoads_kN: two ? [res.beamL, res.beamS] : [res.beamL] }).N_kN;
    // deflection estimate for the stated exaggeration: 1 m strip on lx, service load, gross section (T L3464)
    res.Ec = C.concreteModulus_MPa({ fcu_MPa: t.fcu });
    res.delta = C.deflectionSimpleUdl_mm({ w_kNm: gk + qk, L_m: Lx, E_MPa: res.Ec, I_mm4: C.rectSection({ b_mm: 1000, h_mm: s.t }).Ixx_mm4 });
    return res;
  }
  window.__L4 = { st: st, ui: ui, compute: compute, tasks: TASKS };

  // ---- formatting with units
  function fm(v, dp) { return v === null || v === undefined || isNaN(v) ? '·' : (+v).toFixed(dp); }
  var DP = { 'kN': 1, 'kN/m²': 2, 'kNm/m': 2, 'm': 3, 'mm': 1, 'mm²': 0, 'mm²/m': 0, 'N/mm²': 1, '': 3 };
  function fv(stp) { return fm(stp.value, DP[stp.unit] === undefined ? 2 : DP[stp.unit]) + (stp.unit ? ' ' + stp.unit : ''); }
  function chipH(c, note) {
    if (!c) return '';
    var bg = c === 'manual' ? '#dcfce7;color:#15803d' : c === 'manual note' ? '#fef3c7;color:#92400e' : '#e0ecff;color:#0F2E5A';
    return ' <span title="' + (note || '').replace(/"/g, '&quot;') + '" style="font-size:10px;font-weight:800;padding:0 5px;border-radius:6px;white-space:nowrap;background:' + bg + '">' + c + '</span>';
  }

  // ---- panel
  var css = document.createElement('style');
  css.textContent =
    '#dl{position:absolute;right:16px;top:78px;width:384px;max-height:508px;overflow:auto;background:rgba(255,255,255,.96);border-radius:16px;padding:10px 14px 12px;box-shadow:0 8px 24px rgba(15,46,90,.2);z-index:8;border-top:6px solid var(--amb);box-sizing:border-box}' +
    'body.pre #dl,body.pre #lgd{visibility:hidden}#dl .k{font-size:11px;letter-spacing:.14em;font-weight:800;color:#b97800}' +
    '#dl h4{margin:2px 0 2px;font-size:17px;color:var(--navy)}#dl .gv{margin:0 0 4px;font-size:11.5px;line-height:1.35;color:var(--muted)}' +
    '#dl .sec{margin:5px 0 1px;font-size:11px;font-weight:800;letter-spacing:.12em;color:var(--navy);opacity:.8}' +
    '#dl .g2{display:grid;grid-template-columns:1fr 1fr;gap:3px 10px}#dl .g4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:3px 6px}#dl .g4 .stp button{width:20px}#dl .g4 .stp b{font-size:12.5px}' +
    '#dl .stp{display:flex;flex-direction:column;font-size:11px;color:var(--muted);font-weight:700}' +
    '#dl .stp div{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);border-radius:9px;height:25px;margin-top:1px}' +
    '#dl .stp button{width:24px;height:23px;border:0;background:#eef3f9;color:var(--navy);font-size:16px;font-weight:800;cursor:pointer;border-radius:8px}' +
    '#dl .stp button:focus-visible,#dl #dlT:focus-visible,#dl #dlX:focus-visible{outline:3px solid var(--blue);outline-offset:1px}' +
    '#dl .stp b{font-size:13px;color:var(--ink);white-space:nowrap}' +
    '#dl .nu{margin:3px 0 0;font-family:"Cambria Math","Times New Roman",serif;font-size:14.5px;color:var(--ink);line-height:1.3}' +
    '#dl .ty{display:inline-block;font-family:inherit;font-size:11px;font-weight:800;letter-spacing:.06em;border-radius:7px;padding:1px 7px;background:#e0ecff;color:#0F2E5A;margin-left:6px}' +
    '#dl .ck{display:flex;flex-wrap:wrap;gap:3px;margin-top:5px}#dl .ck span{font-size:10.5px;font-weight:700;border-radius:7px;padding:2px 6px;background:#fee2e2;color:var(--red)}#dl .ck span.ok{background:#dcfce7;color:#15803d}' +
    '#dl .bt{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:6px}' +
    '#dl #dlT{height:34px;border:0;border-radius:12px;background:var(--navy);color:#fff;font:inherit;font-size:15px;font-weight:800;cursor:pointer;letter-spacing:.04em}#dl #dlT:disabled,#dl #dlX:disabled{opacity:.5;cursor:default}' +
    '#dl #dlX{height:34px;border:2px solid var(--navy);border-radius:12px;background:#fff;color:var(--navy);font:inherit;font-size:13px;font-weight:800;cursor:pointer;padding:0 10px}#dl #dlX[aria-pressed=true]{background:#e0ecff}' +
    // Test banner beside the legend, under the prompt pill (centred at the top it covered the pill), clear of the panel
    '#banner{top:126px;left:422px;transform:none;width:max-content;max-width:calc(100% - 860px);box-sizing:border-box;flex-wrap:wrap;row-gap:2px}#banner b{white-space:nowrap}' +
    '#lgd{position:absolute;left:96px;top:126px;z-index:7;background:rgba(255,255,255,.94);border-radius:12px;padding:6px 10px;font-size:11px;font-weight:800;letter-spacing:.06em;color:var(--navy);box-shadow:0 4px 14px rgba(15,46,90,.15)}' +
    '#lgd i{display:block;width:190px;height:9px;border-radius:5px;margin:3px 0 1px;background:linear-gradient(90deg,#21a34a,#cfa616 70%,#f08c0c 80%,#dc2626)}#lgd span{display:flex;justify-content:space-between;font-weight:700;letter-spacing:0;color:var(--muted)}';
  document.head.appendChild(css);
  function stepper(id, label) {
    return '<label class="stp"><span>' + label + '</span><div><button type="button" data-k="' + id + '" data-d="-1" aria-label="' + label.replace(/<[^>]+>/g, '') + ' less">−</button><b id="dlv_' + id + '"></b><button type="button" data-k="' + id + '" data-d="1" aria-label="' + label.replace(/<[^>]+>/g, '') + ' more">+</button></div></label>';
  }
  var box = document.createElement('div');
  box.id = 'dl'; box.setAttribute('role', 'group'); box.setAttribute('aria-labelledby', 'dlH');
  box.innerHTML =
    '<div class="k">DESIGN TASK</div><h4 id="dlH"></h4><p class="gv" id="dlG"></p>' +
    '<div class="sec">Panel, clear spans between beams</div>' +
    '<div class="g2">' + stepper('lx', 'Short span l<sub>x</sub>') + stepper('ly', 'Long span l<sub>y</sub>') + '</div>' +
    '<div class="nu" id="dlY" aria-live="polite"></div>' +
    '<div class="sec">Loads (kN/m²) and slab (mm)</div>' +
    '<div class="g4">' + stepper('dead', 'Dead') + stepper('imp', 'Imposed') + stepper('t', 'Thickness') + stepper('cover', 'Cover') + '</div>' +
    '<div class="nu" id="dlN" aria-live="polite"></div>' +
    '<div class="g2 sec"><span id="dlB1">Main bars</span><span id="dlB2">Distribution bars</span></div>' +
    '<div class="g4">' + stepper('dia', 'Diameter') + stepper('s', 'Spacing') + stepper('dia2', 'Diameter') + stepper('s2', 'Spacing') + '</div>' +
    '<div class="ck" id="dlC" aria-live="polite"></div>' +
    '<div class="bt"><button type="button" id="dlT">Test: load the slab</button><button type="button" id="dlX" aria-pressed="false">Compare</button></div>';
  $('#stage').appendChild(box);
  var lgd = document.createElement('div'); lgd.id = 'lgd';
  lgd.innerHTML = 'BENDING UTILISATION (TENSION AT THE SOFFIT)<i></i><span><b>0 %</b><b>80 %</b><b>100 %</b></span>';
  $('#stage').appendChild(lgd);

  var safe0 = U.safe;
  U.safe = function () { var s = safe0(); s.x1 = Math.min(s.x1, 1186); return s; };
  U.cfg.labelMax = 7;
  U.hoverable = function () { return []; };

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function bump(key, dir) {
    if (ui.busy) return;
    U.mark();
    if (key === 'dia' || key === 'dia2') st[key] = DIAS[clamp(DIAS.indexOf(st[key]) + dir, 0, DIAS.length - 1)];
    else if (key === 's' || key === 's2') st[key] = SPACINGS[clamp(SPACINGS.indexOf(st[key]) + dir, 0, SPACINGS.length - 1)];
    else { var L = LIM[key]; st[key] = Math.round(clamp(st[key] + dir * L[2], L[0], L[1]) * 1000) / 1000; }
    if (st.ly < st.lx) { if (key === 'ly') st.lx = st.ly; else st.ly = st.lx; } // lx is the short span
    req(true);
  }
  box.addEventListener('click', function (e) { var b = e.target.closest('button[data-k]'); if (b) bump(b.dataset.k, +b.dataset.d); });
  $('#dlT').addEventListener('click', function () { test(); });
  $('#dlX').addEventListener('click', function () { if (ui.busy) return; ui.cmp = !ui.cmp; req(false); U.shot(shot(), 700); });

  // ---- 3D: the slab panel on its beams and corner columns, beside the drain of the original site
  var G = S.groups;
  ['jt', 'yn', 'Ga', '_r', 'Mt'].forEach(function (k) { if (G[k]) G[k].visible = false; }); // the old bridge
  U.unlabel(/.*/);
  var HS = 2.7;                           // slab soffit level above the site, m
  var BASE = V(13.6, 0, 7.4);             // panel centre on the site (right of the drain)
  var CMPX = 8.6;                         // compare panel offset along x
  var root = new R.Group(); U.G.add(root);
  var flowG = new R.Group(); U.G.add(flowG);
  var steelM = M.rebar(1), steelHot = new R.MeshStandardMaterial({ color: 0xDC2626, roughness: 0.6, metalness: 0.3, emissive: 0x7f1d1d });
  var crackM = new R.MeshBasicMaterial({ color: 0x1b1b1b, toneMapped: false, transparent: true, depthTest: false });
  var crackHot = new R.MeshBasicMaterial({ color: 0x7f1d1d, toneMapped: false, transparent: true, depthTest: false }); // drawn over the map so the cracks read in See inside
  var crackHalo = new R.MeshBasicMaterial({ color: 0xfff4e0, toneMapped: false, transparent: true, opacity: 0.85, depthTest: false });
  function concM(op) { return M.conc(0xb7bbc0, op); }
  function colorU(u) { var c = new R.Color(); if (u <= 0.8) c.setRGB(0.13 + 0.8 * (u / 0.8), 0.64, 0.29 * (1 - u / 0.8)); else c.setRGB(0.94, Math.max(0.15, 0.65 - 0.5 * Math.min(1, (u - 0.8) / 0.2)), 0.05); return c; }

  // panel instance: { g, res, A (deflection drawn, m), crack (0..1), mode }
  function newPanel(name) { var g = new R.Group(); root.add(g); return { g: g, name: name, A: 0, crack: 0, mode: null, parts: {} }; }
  var P = newPanel('you'), Q = newPanel('ref');

  // shape of the deflected slab, 1 at the centre, 0 on the support lines
  function shapeF(res, x, z) {
    var xi = clamp((x + res.Lx / 2) / res.Lx, 0, 1), eta = clamp((z + res.Ly / 2) / res.Ly, 0, 1);
    if (!res.two) return 3.2 * (xi - 2 * xi * xi * xi + xi * xi * xi * xi); // elastic UDL curve, normalised
    return Math.sin(Math.PI * xi) * Math.sin(Math.PI * eta);
  }
  // bending utilisation on the soffit: largest at mid-span (one-way) or at the centre (two-way)
  function useF(res, x, z) {
    var xi = clamp((x + res.Lx / 2) / res.Lx, 0, 1), eta = clamp((z + res.Ly / 2) / res.Ly, 0, 1);
    var sx = 4 * xi * (1 - xi), sz = 4 * eta * (1 - eta);
    var ub = Math.max(res.uB, res.uK) / 100;
    if (!res.two) return ub * sx;
    return Math.max(ub * sx * (0.45 + 0.55 * sz), (Math.max(res.uB2, res.uK) / 100) * sz * (0.45 + 0.55 * sx));
  }
  function deform(pn) {
    var pp = pn.parts, res = pn.res;
    [pp.slab, pp.grad].forEach(function (m) {
      if (!m) return;
      var pos = m.geometry.attributes.position, o = m.userData.orig;
      for (var i = 0; i < pos.count; i++) pos.setY(i, o[3 * i + 1] - pn.A * shapeF(res, o[3 * i], o[3 * i + 2]));
      pos.needsUpdate = true; m.geometry.computeVertexNormals();
    });
    U.dirty = true;
  }
  function keepOrig(m) { m.userData.orig = Float32Array.from(m.geometry.attributes.position.array); }

  function build(pn, res) {
    U.clear(pn.g); pn.parts = {}; pn.res = res;
    var s = res.s, t = s.t / 1000, W = s.lx + 2 * BW, D = s.ly + 2 * BW, hb = Math.max(0.45, Math.round(Math.max(s.lx, s.ly) / 14 * 20) / 20);
    var eye = ui.eye;
    pn.g.position.copy(BASE); if (pn === Q) pn.g.position.x += CMPX;
    // slab: a subdivided box so the deflected shape can be drawn; soffit at HS
    var sg = new R.BoxGeometry(W, t, D, 28, 1, 28); sg.translate(0, HS + t / 2, 0);
    var slab = new R.Mesh(sg, concM(eye ? 0.22 : 1)); slab.castShadow = !eye; slab.receiveShadow = true; slab.renderOrder = 5;
    keepOrig(slab); pn.g.add(slab); pn.parts.slab = slab;
    // beams on the four edges and the corner columns
    var bm = concM(eye ? 0.35 : 1), xs = s.lx / 2 + BW / 2, zs = s.ly / 2 + BW / 2;
    U.into(pn.g, function () {
      [-1, 1].forEach(function (sd) {
        var a = E.Me(BW, hb - t, D, bm, sd * xs, HS - (hb - t) / 2, 0); a.castShadow = true;
        var b = E.Me(W - 2 * BW, hb - t, BW, bm, 0, HS - (hb - t) / 2, sd * zs); b.castShadow = true;
      });
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (c) {
        var m = E.Me(0.3, HS - (hb - t), 0.3, concM(1), c[0] * xs, (HS - (hb - t)) / 2, c[1] * zs); m.castShadow = true;
        E.Me(0.9, 0.06, 0.9, concM(1), c[0] * xs, 0.03, c[1] * zs); // pad at ground level
      });
    });
    // utilisation gradient on the soffit (unlit so it reads the same under every light)
    var gg = new R.PlaneGeometry(W - 2 * BW, D - 2 * BW, 28, 28); gg.rotateX(-Math.PI / 2); gg.translate(0, eye ? HS + s.cover / 1000 + 0.002 : HS + t + 0.004, 0);
    var pos = gg.attributes.position, cols = [];
    for (var j = 0; j < pos.count; j++) { var c = colorU(useF(res, pos.getX(j), pos.getZ(j))); cols.push(c.r, c.g, c.b); }
    gg.setAttribute('color', new R.Float32BufferAttribute(cols, 3));
    var grad = new R.Mesh(gg, new R.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: eye ? 0.4 : 0.5, depthWrite: false, side: R.DoubleSide, toneMapped: false }));
    grad.renderOrder = 6; keepOrig(grad); pn.g.add(grad); pn.parts.grad = grad;
    if (eye) drawBars(pn, res);
    pn.A = 0; pn.crack = 0;
    U.dirty = true;
  }

  // See inside: the trainee's bars at their spacing and cover (main bars at the bottom, the other direction on top)
  function barSet(pn, along, dia, spacing, y, len, width, hot) {
    var r = Math.max(0.006, dia / 2000), n = Math.max(2, Math.floor((width - 0.1) / (spacing / 1000)) + 1);
    var geo = new R.CylinderGeometry(r, r, len, 8, 1); geo.rotateZ(Math.PI / 2); if (along === 'z') geo.rotateY(Math.PI / 2);
    var im = new R.InstancedMesh(geo, hot ? steelHot : steelM, n), m4 = new R.Matrix4();
    var w0 = -((n - 1) * spacing / 1000) / 2;
    for (var i = 0; i < n; i++) {
      var a = w0 + i * spacing / 1000;
      m4.makeTranslation(along === 'x' ? 0 : a, y, along === 'x' ? a : 0); im.setMatrixAt(i, m4);
    }
    im.renderOrder = 4; pn.g.add(im); return { n: n };
  }
  function drawBars(pn, res) {
    var s = res.s, W = s.lx + 2 * BW, D = s.ly + 2 * BW, cv = s.cover / 1000;
    var y1 = HS + cv + s.dia / 2000, y2 = HS + cv + s.dia / 1000 + s.dia2 / 2000;
    var hot1 = res.mode === 'bend' && !res.ok.steel, hot2 = res.mode === 'bend' && res.two && !res.ok.steel2;
    pn.parts.bars = [barSet(pn, 'x', s.dia, s.s, y1, W - 2 * cv, D - 2 * cv, hot1),   // short span bars
      barSet(pn, 'z', s.dia2, s.s2, y2, D - 2 * cv, W - 2 * cv, hot2)];               // long span bars
  }

  // cracks: thin dark tubes on the (deflected) soffit, growing with pn.crack
  function crackPaths(pn) {
    var res = pn.res, Lx = res.Lx, Ly = res.Ly, out = [];
    var hw = res.s.lx / 2, hd = res.s.ly / 2, seed = 7;
    function rnd() { seed = seed * 16807 % 2147483647; return seed / 2147483647 - 0.5; }
    function line(x0, z0, x1, z1, nseg, jit) {
      var pts = [];
      for (var i = 0; i <= nseg; i++) { var f = i / nseg; pts.push([x0 + (x1 - x0) * f + (i > 0 && i < nseg ? rnd() * jit : 0), z0 + (z1 - z0) * f + (i > 0 && i < nseg ? rnd() * jit : 0)]); }
      return pts;
    }
    if (pn.mode === 'yield') {
      // yield-line pattern of a simply supported rectangular panel: 45° lines from the corners, ridge along the long span
      var a = Math.max(0, Ly / 2 - Lx / 2);
      var ends = [[-hw, -hd, 0, -a], [hw, -hd, 0, -a], [-hw, hd, 0, a], [hw, hd, 0, a]];
      ends.forEach(function (e) { out.push(line(e[0] * 0.97, e[1] * 0.97, e[2], e[3], 10, 0.05)); });
      if (a > 0.01) out.push(line(0, -a, 0, a, 8, 0.04));
      for (var k = 0; k < 10; k++) { var u = rnd() + 0.5, e2 = ends[k % 4]; var x0 = e2[0] + (e2[2] - e2[0]) * u, z0 = e2[1] + (e2[3] - e2[1]) * u; out.push(line(x0, z0, x0 + rnd() * 0.5, z0 + rnd() * 0.5, 4, 0.03)); }
    } else if (res.two) { // flexural cracks fan out from the centre of a two-way panel
      for (var q = 0; q < 9; q++) { var ang = q / 9 * Math.PI * 2 + rnd() * 0.3, L = Math.min(hw, hd) * (0.45 + 0.3 * (rnd() + 0.5)); out.push(line(0, 0, Math.cos(ang) * L, Math.sin(ang) * L, 6, 0.04)); }
    } else { // one-way: cracks across the soffit at mid-span, parallel to the supports
      var n = pn.mode === 'bend' ? 7 : 5, sp = Lx * 0.07;
      for (var i = 0; i < n; i++) { var x = (i - (n - 1) / 2) * sp + rnd() * 0.04, len = hd * (0.95 - 0.12 * Math.abs(i - (n - 1) / 2)); out.push(line(x, -len, x + rnd() * 0.06, len, 14, 0.03)); }
    }
    return out;
  }
  function drawCracks(pn) {
    if (pn.parts.crackG) { U.clear(pn.parts.crackG); pn.g.remove(pn.parts.crackG); }
    pn.parts.crackG = null;
    if (pn.parts.grad) pn.parts.grad.material.opacity = (pn.mode && pn.crack > 0 ? 0.6 : 1) * (ui.eye ? 0.4 : 0.5); // map fainter under the cracks
    if (!pn.mode || pn.crack <= 0) { U.dirty = true; return; }
    var cg = new R.Group(); pn.g.add(cg); pn.parts.crackG = cg;
    var paths = pn.paths || (pn.paths = crackPaths(pn)), res = pn.res;
    var w = pn.mode === 'defl' ? 0.006 : 0.011;
    paths.forEach(function (pts, k) {
      var m = Math.max(2, Math.round(pts.length * clamp(pn.crack * 1.3 - k * 0.02, 0, 1)));
      var v = pts.slice(0, m).map(function (p) { return V(p[0], HS - 0.008 - pn.A * shapeF(res, p[0], p[1]), p[1]); });
      if (v.length < 2) return;
      var cv = new R.CatmullRomCurve3(v), rw = w * (0.6 + 0.4 * pn.crack) * (ui.eye ? 1.4 : 1);
      var tube = new R.Mesh(new R.TubeGeometry(cv, v.length * 3, rw, 4, false), k < 5 ? crackHot : crackM);
      tube.renderOrder = 12; cg.add(tube);
      var halo = new R.Mesh(new R.TubeGeometry(cv, v.length * 3, rw * 2.2, 4, false), crackHalo); // light edge so the crack reads on the red map
      halo.renderOrder = 11; cg.add(halo);
    });
    U.dirty = true;
  }

  // forces: load arrows sized to wu, column loads; BMD hung under the soffit (sagging, tension face)
  var fa = new R.Group(); U.G.add(fa);
  function forces(res, drop) {
    U.clear(fa);
    var s = res.s, t = s.t / 1000, wu = res.r.wu_kNm2, L = clamp(0.25 + 0.05 * wu, 0.3, 1.4), y0 = HS + t + 0.04 + (drop || 0);
    U.into(fa, function () {
      for (var i = 0; i < 3; i++) for (var j = 0; j < 5; j++) {
        var x = BASE.x + (i - 1) * s.lx / 3, z = BASE.z + (j - 2) * s.ly / 5;
        E.Ln(V(x, y0 + L, z), V(x, y0, z), 0xDC2626, 0.022);
      }
      var xs = s.lx / 2 + BW / 2, zs = s.ly / 2 + BW / 2, cl = clamp(0.4 + res.col / 150, 0.5, 1.6);
      [[1, 1], [-1, 1]].forEach(function (c) { E.Ln(V(BASE.x + c[0] * xs, HS - 0.6, BASE.z + c[1] * zs + 0.35), V(BASE.x + c[0] * xs, HS - 0.6 - cl, BASE.z + c[1] * zs + 0.35), 0xE08A00, 0.03); });
    });
    var g = new R.Group(); fa.add(g); g.position.set(BASE.x, HS - 0.15, BASE.z);
    var zf = s.ly / 2 + BW + 0.45, xf = s.lx / 2 + BW + 0.45;
    var sc = 0.9 / Math.max(5, res.r.M_kNm);
    function ribbon(along, Lspan, Mmax, col) {
      var shp = new R.Shape(), n = 24; shp.moveTo(-Lspan / 2, 0);
      for (var i = 0; i <= n; i++) { var xi = i / n; shp.lineTo(-Lspan / 2 + Lspan * xi, -sc * Mmax * 4 * xi * (1 - xi)); }
      shp.lineTo(Lspan / 2, 0);
      var m = new R.Mesh(new R.ShapeGeometry(shp), new R.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.35, side: R.DoubleSide, depthWrite: false, toneMapped: false }));
      if (along === 'z') { m.rotation.y = -Math.PI / 2; m.position.x = xf; } else m.position.z = zf;
      m.renderOrder = 7; g.add(m);
      var pts = []; for (var k = 0; k <= n; k++) { var xk = -Lspan / 2 + Lspan * k / n, ik = k / n, yk = -sc * Mmax * 4 * ik * (1 - ik); pts.push(along === 'x' ? V(xk, yk, zf) : V(xf, yk, xk)); }
      U.into(g, function () { E.cn(pts, col, 1); });
    }
    ribbon('x', res.Lx, res.r.M_kNm, 0xE08A00);
    if (res.two) ribbon('z', res.Ly, res.r.twoWay.msy_kNm, 0x2563EB);
    fa.visible = true;
    U.dirty = true;
  }
  function labels(res) {
    var s = res.s, top = HS + s.t / 1000;
    U.unlabel(/^l4/);
    U.label('l4w', [BASE.x - s.lx / 2 - 0.2, top + 1.0, BASE.z + s.ly / 2], 'w<sub>u</sub> = 1.5(D + L) = ' + fm(res.r.wu_kNm2, 2) + ' kN/m²', 'bad', 6);
    U.label('l4m', [BASE.x, HS - 0.25 - 0.9 * res.r.M_kNm / Math.max(5, res.r.M_kNm), BASE.z + s.ly / 2 + BW + 0.45], (res.two ? 'm<sub>sx</sub> ' : 'M ') + fm(res.r.M_kNm, 1) + ' kNm/m' + (res.two ? ' · m<sub>sy</sub> ' + fm(res.r.twoWay.msy_kNm, 1) : ''), 'm', 5);
    U.label('l4b', [BASE.x + s.lx / 2 + BW, HS - 0.2, BASE.z], res.two ? 'long beam ' + fm(res.beamL, 0) + ' kN · short beam ' + fm(res.beamS, 0) + ' kN' : 'each long beam ' + fm(res.beamL, 0) + ' kN', 'b', 3);
    U.label('l4c', [BASE.x + s.lx / 2 + BW / 2, HS - 1.4, BASE.z + s.ly / 2 + 0.6], 'column N ' + fm(res.col, 0) + ' kN (slab share)', 'b', 2);
    if (ui.eye) U.label('l4cv', [BASE.x - s.lx / 2, HS + 0.02, BASE.z + s.ly / 2 + BW + 0.05], 'cover ' + s.cover + ' mm · Y' + s.dia + ' at ' + s.s + (res.two ? ' short span · Y' : ' main · Y') + s.dia2 + ' at ' + s.s2 + (res.two ? ' long span' : ' distribution'), 'b', 7);
    if (ui.cmp) {
      var a = TASKS[s.task].answer;
      U.label('l4q', [BASE.x + CMPX, top + 1.3, BASE.z], 'CORRECT DESIGN · t ' + a.t + ' · Y' + a.dia + ' at ' + a.s + ' · Y' + a.dia2 + ' at ' + a.s2, 'ok', 4);
      U.label('l4p', [BASE.x, top + 1.7, BASE.z], 'YOUR DESIGN · t ' + s.t + ' · Y' + s.dia + ' at ' + s.s + ' · Y' + s.dia2 + ' at ' + s.s2, res.pass ? 'ok' : 'bad', 4);
    }
  }

  // load path particles: slab → nearest beam (tributary area) → corner column → ground
  var flow = { mesh: null, paths: [], until: 0, raf: 0 };
  function flowPaths(res) {
    var s = res.s, xs = s.lx / 2 + BW / 2, zs = s.ly / 2 + BW / 2, out = [], seed = 3;
    function rnd() { seed = seed * 16807 % 2147483647; return seed / 2147483647; }
    for (var i = 0; i < 48; i++) {
      var x = (rnd() - 0.5) * s.lx, z = (rnd() - 0.5) * s.ly, top = HS + s.t / 1000 + 0.03, b;
      var dx = xs - Math.abs(x), dz = zs - Math.abs(z);
      if (!res.two || dx <= dz) b = V(Math.sign(x || 1) * xs, top, z); else b = V(x, top, Math.sign(z || 1) * zs);
      var cx = Math.sign(b.x || 1) * xs, cz = Math.sign(b.z || 1) * zs;
      out.push([V(x, top, z), b, V(cx, top, cz), V(cx, 0.1, cz)].map(function (p) { return p.add(BASE); }));
    }
    return out;
  }
  function startFlow(res, ms) {
    flow.paths = flowPaths(res);
    if (!flow.mesh) {
      flow.mesh = new R.InstancedMesh(new R.SphereGeometry(0.055, 10, 8), new R.MeshBasicMaterial({ color: 0xF59E0B, toneMapped: false }), 48);
      flow.mesh.renderOrder = 10; flowG.add(flow.mesh);
    }
    flow.until = performance.now() + (ms || 4000);
    if (!flow.raf) flow.raf = requestAnimationFrame(tick);
  }
  var m4f = new R.Matrix4(), tmpV = new R.Vector3();
  function tick(now) {
    flow.raf = 0;
    var on = now < flow.until;
    flowG.visible = on;
    if (on) {
      flow.paths.forEach(function (pth, i) {
        var t = ((now / 2600) + i / 48) % 1, seg = Math.min(2, Math.floor(t * 3)), f = t * 3 - seg;
        tmpV.copy(pth[seg]).lerp(pth[seg + 1], f); m4f.makeTranslation(tmpV.x, tmpV.y, tmpV.z); flow.mesh.setMatrixAt(i, m4f);
      });
      flow.mesh.instanceMatrix.needsUpdate = true;
    }
    var alive = on || cueTick(now);
    U.dirty = true;
    if (alive) flow.raf = requestAnimationFrame(tick);
  }

  // teaching cues at the critical place: trembling tension marks under the soffit (bending, deflection), squeeze
  // chevrons on the top face (concrete crushing), a ring that pulses once a check reaches 90 %
  var cue = new R.Group(); U.G.add(cue);
  var cueSt = { u: 0, kind: null };
  function cues(res) {
    U.clear(cue); cueSt.u = 0; cueSt.kind = null; cue.userData.ring = null;
    var u = Math.max(res.uB, res.uK, res.uD, res.uB2) / 100;
    if (u < 0.8) return;
    var s = res.s, top = HS + s.t / 1000, colr = u > 1 ? 0xDC2626 : 0xE08A00;
    cueSt.u = u; cueSt.kind = res.uK >= Math.max(res.uB, res.uD) ? 'squeeze' : 'tension';
    U.into(cue, function () {
      if (cueSt.kind === 'squeeze') {
        for (var i = -2; i <= 2; i++) { var z = i * 0.35; E.cn([V(-0.35, top + 0.03, z - 0.12), V(-0.12, top + 0.03, z), V(-0.35, top + 0.03, z + 0.12)], colr, 1); E.cn([V(0.35, top + 0.03, z - 0.12), V(0.12, top + 0.03, z), V(0.35, top + 0.03, z + 0.12)], colr, 1); }
      } else {
        for (var k = -3; k <= 3; k++) { var zz = k * 0.3, pts = []; for (var q = 0; q <= 8; q++) pts.push(V(-0.45 + q * 0.1125, HS - 0.06 - (q % 2) * 0.05, zz)); E.cn(pts, colr, 1); }
      }
    });
    var ring = new R.Mesh(new R.RingGeometry(0.55, 0.7, 40), new R.MeshBasicMaterial({ color: colr, transparent: true, opacity: 0.6, side: R.DoubleSide, depthWrite: false, toneMapped: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = cueSt.kind === 'squeeze' ? top + 0.05 : HS - 0.03; ring.renderOrder = 11; cue.add(ring);
    cue.userData.ring = ring;
    cue.position.copy(BASE);
    if (!flow.raf) flow.raf = requestAnimationFrame(tick);
  }
  function cueTick(now) {
    if (!cueSt.kind) return false;
    var a = Math.min(1, cueSt.u - 0.8) * 0.02 + 0.004;
    cue.position.set(BASE.x + Math.sin(now / 37) * a, BASE.y + Math.cos(now / 29) * a, BASE.z);
    var r = cue.userData.ring; if (r) { var p = 1 + 0.25 * Math.sin(now / 160); r.scale.set(p, p, p); r.material.opacity = cueSt.u >= 0.9 ? 0.35 + 0.3 * Math.sin(now / 160) : 0.25; }
    return true;
  }

  function shot() {
    var s = st, ex = ui.cmp ? CMPX : 0, mn = V(BASE.x - s.lx / 2 - 0.6, 0, BASE.z - s.ly / 2 - 0.6), mx = V(BASE.x + s.lx / 2 + 0.6 + ex, HS + 1.5, BASE.z + s.ly / 2 + 0.6);
    return { box: new R.Box3(mn, mx), dir: [0.5, 0.42, 0.76], fov: 30, focus: [root, fa, cue] };
  }

  // ---- Formulas panel from calc.mjs steps (formula, label, manual line, chip, value + unit)
  function row(stp, cls) { return [stp.formula, stp.label + ' (' + stp.ref + ')' + chipH(stp.chip, stp.note), fv(stp), cls || '']; }
  function pick(steps, ids, cls) { return steps.filter(function (x) { return ids.indexOf(x.id) >= 0; }).map(function (x) { return row(x, cls && cls[x.id]); }); }
  function okc(b) { return b ? 'ok' : 'bad'; }
  function diagram(res) {
    // section through 1 m of slab: thickness, cover, bars at their spacing, d
    var s = res.s, W = 280, t = Math.min(90, s.t * 0.42), y0 = 28, k = t / s.t, cvp = s.cover * k, r1 = Math.max(2.2, s.dia * k / 2), r2 = Math.max(2, s.dia2 * k / 2);
    var n = Math.floor(1000 / s.s), bars = '', dx = W / 1000 * s.s;
    for (var i = 0; i <= n; i++) bars += '<circle cx="' + (20 + i * dx) + '" cy="' + (y0 + t - cvp - r1) + '" r="' + r1 + '" fill="' + (res.ok.steel ? '#5d6b7c' : '#DC2626') + '"/>';
    var yb = y0 + t - cvp - 2 * r1 - r2;
    bars += '<line x1="20" x2="' + (20 + W) + '" y1="' + yb + '" y2="' + yb + '" stroke="#5d6b7c" stroke-width="' + (2 * r2) + '" stroke-linecap="round" opacity=".55"/>';
    var dY = y0 + t - cvp - r1;
    return '<svg viewBox="0 0 340 150" width="340" height="150" role="img" aria-label="Section through 1 m of slab">' +
      '<rect x="20" y="' + y0 + '" width="' + W + '" height="' + t + '" fill="#d5d9de" stroke="#14243a" stroke-width=".8"/>' + bars +
      '<line x1="' + (W + 28) + '" x2="' + (W + 28) + '" y1="' + y0 + '" y2="' + dY + '" stroke="#0F2E5A" stroke-width="1.2"/>' +
      '<text x="' + (W + 31) + '" y="' + (y0 + 12) + '" font-size="11" fill="#0F2E5A">d ' + fm(res.r.d_mm, 0) + '</text>' +
      '<text x="20" y="' + (y0 - 8) + '" font-size="11" fill="#0F2E5A">1 m strip · t ' + s.t + ' mm · cover ' + s.cover + ' mm</text>' +
      '<text x="20" y="' + (y0 + t + 18) + '" font-size="11" fill="#5d6b7c">Y' + s.dia + ' at ' + s.s + ' mm = ' + fm(res.AsProv, 0) + ' mm²/m (need ' + fm(res.AsReq, 0) + ')</text>' +
      '<text x="20" y="' + (y0 + t + 34) + '" font-size="11" fill="#5d6b7c">L/d ' + fm(res.defl.actual, 1) + ' (allowed ' + ldA(res) + ')</text></svg>';
  }
  function formulas(res) {
    var r = res.r, t = res.t, s = res.s, st_ = r.steps;
    var rL = [
      ['g<sub>k</sub> = finishes + 24 × t', 'dead load: ' + fm(s.dead, 1) + ' + self-weight ' + fm(res.sw, 2) + ' kN/m² (γ 24 kN/m³)' + chipH('manual'), fm(res.gk, 2) + ' kN/m²', ''],
      ['q<sub>k</sub>', 'imposed load (' + t.ref + ')' + chipH('manual'), fm(res.qk, 2) + ' kN/m²', '']
    ].concat(pick(st_, ['wu'], { wu: 'hl' }));
    var rS = [
      ['L = min(clear + d, centres)', 'effective span l<sub>x</sub>, beams ' + BW * 1000 + ' mm' + chipH('manual'), fm(res.Lx, 3) + ' m', ''],
      ['L = min(clear + d, centres)', 'effective span l<sub>y</sub>' + chipH('manual'), fm(res.Ly, 3) + ' m', ''],
      ['l<sub>y</sub> / l<sub>x</sub> ' + (res.two ? '≤ 2: two-way' : '> 2: one-way'), 'slab type' + (res.type.ambiguousAtTwo ? ', exactly 2 taken as two-way (OQ-03)' : '') + chipH('manual'), fm(res.type.ratio, 3), 'hl']
    ].concat(pick(st_, ['asx', 'asy', 'M', 'My'], { M: 'hl' }));
    var rF = pick(st_, ['d', 'K', 'z', 'zd', 'x', 'k', 'As', 'Asmin'], { K: okc(res.ok.K), As: 'hl' });
    rF.push(['A<sub>s,prov</sub> = A<sub>b</sub> × 1000 / s', 'Y' + s.dia + ' at ' + s.s + ' mm, slab table' + chipH('manual'), fm(res.AsProv, 0) + ' mm²/m', okc(res.ok.steel)]);
    rF.push(['s ≤ min(3d, 300), clear ≥ 75', 'main bar spacing' + chipH('manual'), s.s + ' ≤ ' + fm(res.sp.slabMainMax_mm, 0) + ' mm', okc(res.ok.spacing)]);
    var r2 = [];
    if (res.two) {
      r2.push(['d<sub>y</sub> = t − cover − φ<sub>x</sub> − φ<sub>y</sub>/2', 'long-span bars sit on the short-span bars' + chipH('manual'), fm(res.d2, 1) + ' mm', '']);
      res.f2.steps.filter(function (x) { return x.id === 'K' || x.id === 'z' || x.id === 'As'; }).forEach(function (x) { r2.push(row(x, x.id === 'K' ? okc(!res.f2.compressionSteelNeeded) : '')); });
      r2.push(['A<sub>s,y</sub> = max(A<sub>s</sub>, A<sub>s,min</sub>)', 'long span, per metre' + chipH('BS 8110, to confirm', 'Minimum steel from BS 8110 Table 3.25 (OQ-12).'), fm(res.AsReq2, 0) + ' mm²/m', 'hl']);
    } else {
      r2.push(['A<sub>s,dist</sub> ≥ 0.13 % b·h', 'distribution bars, minimum steel' + chipH('BS 8110, to confirm', 'The manual asks for distribution bars but gives no amount. BS 8110 Table 3.25 (OQ-12).'), fm(res.AsReq2, 0) + ' mm²/m', 'hl']);
    }
    r2.push(['A<sub>s,prov</sub> = A<sub>b</sub> × 1000 / s', 'Y' + s.dia2 + ' at ' + s.s2 + ' mm' + chipH('manual'), fm(res.AsProv2, 0) + ' mm²/m', okc(res.ok.steel2)]);
    r2.push([res.two ? 's ≤ min(3d, 300), clear ≥ 75' : 's ≤ min(5d, 450), clear ≥ 75', (res.two ? 'long span' : 'distribution') + ' spacing' + chipH('manual'), s.s2 + ' ≤ ' + fm(res.s2max, 0) + ' mm', okc(res.ok.spacing2)]);
    var rD = res.defl.steps.map(function (x) { return row(x, x.id === 'Ld' ? okc(res.ok.defl) : ''); });
    rD.push(['δ = 5wL⁴ / 384EI', 'elastic estimate, 1 m strip, service D + L, gross section, E<sub>c</sub> ' + fm(res.Ec / 1000, 0) + ' kN/mm², for the drawing only' + chipH('BS 8110, to confirm', 'Ec = 20 + 0.2fcu (OQ-17). The check is span/depth; this value only scales the drawn shape.'), fm(res.delta, 1) + ' mm', '']);
    U.fx({ sub: t.name + ' · fcu ' + t.fcu + ', fy ' + t.fy + ' N/mm² · live values', dg: diagram(res), groups: [
      { h: 'Loads (1.5(D + L) for slabs, OQ-04)', rows: rL },
      { h: 'Spans, type and moments' + (res.two ? ' (two-way: BS 8110 Table 3.13, OQ-14)' : ' (M = wL²/8)'), rows: rS },
      { h: res.two ? 'Short span steel' : 'Main steel, short span', p: Math.max(res.uB, res.uK), rows: rF },
      { h: res.two ? 'Long span steel' : 'Distribution steel', p: res.uB2, rows: r2 },
      { h: 'Deflection, span/depth (OQ-10)', p: res.uD, rows: rD }] });
  }

  // ---- draw (live on every input)
  function req(flowOn) { ui.flow = ui.flow || flowOn; if (!ui.raf) ui.raf = requestAnimationFrame(draw); }
  function draw() {
    ui.raf = 0;
    var res = compute();
    ui.res = res;
    P.mode = null; P.paths = null; build(P, res); drawCracks(P);
    Q.g.visible = ui.cmp;
    if (ui.cmp) { var qs = Object.assign({}, st, TASKS[st.task].answer, TASKS[st.task].load); Q.mode = null; Q.paths = null; build(Q, compute(qs)); drawCracks(Q); }
    forces(res, 0); labels(res); cues(res);
    if (ui.flow) { startFlow(res, 4000); ui.flow = false; }
    U.gauge([['Bending', 'A<sub>s</sub> ' + fm(res.AsReq, 0) + ' / ' + fm(res.AsProv, 0) + ' mm²/m', Math.max(res.uB, res.uK)],
      ['Deflection', 'L/d ' + fm(res.defl.actual, 1) + ' / ' + ldA(res), res.uD],
      [res.two ? 'Long span' : 'Distribution', 'A<sub>s</sub> ' + fm(res.AsReq2, 0) + ' / ' + fm(res.AsProv2, 0) + ' mm²/m', res.uB2]]);
    formulas(res);
    var t = task(), s = st;
    $('#dlH').textContent = t.name;
    $('#dlG').textContent = t.given;
    $('#dlv_lx').textContent = fm(s.lx, 2) + ' m'; $('#dlv_ly').textContent = fm(s.ly, 2) + ' m';
    $('#dlv_dead').textContent = fm(s.dead, 1); $('#dlv_imp').textContent = fm(s.imp, 1);
    $('#dlv_t').textContent = s.t; $('#dlv_cover').textContent = s.cover;
    $('#dlv_dia').textContent = 'Y' + s.dia; $('#dlv_s').textContent = s.s; $('#dlv_dia2').textContent = 'Y' + s.dia2; $('#dlv_s2').textContent = s.s2;
    $('#dlB1').textContent = res.two ? 'Short span bars (mm)' : 'Main bars (mm)';
    $('#dlB2').textContent = res.two ? 'Long span bars (mm)' : 'Distribution (mm)';
    $('#dlY').innerHTML = 'l<sub>y</sub> / l<sub>x</sub> = ' + fm(res.Ly, 2) + ' / ' + fm(res.Lx, 2) + ' = ' + fm(res.type.ratio, 2) + '<span class="ty">' + (res.two ? 'TWO-WAY' : 'ONE-WAY') + '</span>';
    $('#dlN').innerHTML = 'w<sub>u</sub> = 1.5(' + fm(res.gk, 2) + ' + ' + fm(res.qk, 2) + ') = ' + fm(res.r.wu_kNm2, 2) + ' kN/m²';
    var o = res.ok;
    $('#dlC').innerHTML = [['K ≤ 0.156', o.K], ['Steel ' + fm(res.AsProv, 0) + ' ≥ ' + fm(res.AsReq, 0), o.steel], ['Spacing', o.spacing],
      [(res.two ? 'Long span ' : 'Distribution ') + fm(res.AsProv2, 0) + ' ≥ ' + fm(res.AsReq2, 0), o.steel2], [(res.two ? 'Long span' : 'Distribution') + ' spacing', o.spacing2],
      ['L/d ' + fm(res.defl.actual, 1) + ' < ' + ldA(res), o.defl]].map(function (c) { return '<span class="' + (c[1] ? 'ok' : '') + '">' + (c[1] ? '✓ ' : '✕ ') + c[0] + '</span>'; }).join('');
    $('#dlX').setAttribute('aria-pressed', ui.cmp ? 'true' : 'false');
    U.banner(null); if (U.why) U.why(null);
    U.dirty = true;
    U.emit('design', { pass: res.pass, task: st.task });
  }

  // ---- Test: 2 to 4 s of loading and its consequence at the exact place, then redesign at once
  function setBusy(b) { ui.busy = b; U.locked = b; box.querySelectorAll('button').forEach(function (x) { x.disabled = b; }); }
  function callout(res) {
    var s = res.s;
    if (res.mode === 'crush') return 'K ' + fm(Math.max(res.f.K, res.f2 ? res.f2.K : 0), 3) + ' &gt; 0.156: the top concrete crushes. Make the slab thicker.';
    if (res.mode === 'bend') return !res.ok.steel ? 'A<sub>s,prov</sub> ' + fm(res.AsProv, 0) + ' &lt; A<sub>s</sub> ' + fm(res.AsReq, 0) + ' mm²/m: the bars at mid-span yield.' : 'Long span: A<sub>s,prov</sub> ' + fm(res.AsProv2, 0) + ' &lt; ' + fm(res.AsReq2, 0) + ' mm²/m.';
    if (res.mode === 'defl') return 'L/d ' + fm(res.defl.actual, 1) + ' &gt; ' + ldA(res) + ': too thin for a ' + fm(res.Lx, 2) + ' m span.';
    if (res.mode === 'spacing') return !res.ok.steel2 ? 'Distribution bars ' + fm(res.AsProv2, 0) + ' &lt; ' + fm(res.AsReq2, 0) + ' mm²/m minimum.' : 'Spacing ' + (res.ok.spacing ? s.s2 : s.s) + ' mm is outside the limits.';
    return '';
  }
  async function test() {
    var tk0 = st.task; // delta review L4: a step change during Test must not count the result for the other step
    if (ui.busy) return;
    if (ui.raf) { cancelAnimationFrame(ui.raf); ui.raf = 0; draw(); }
    var res = ui.res, m = res.mode, two = res.two, qres = ui.cmp ? Q.res : null;
    setBusy(true);
    try {
      U.banner(null); U.unlabel('l4x'); U.unlabel('l4e');
      if ((m === 'defl' || !m) && ui.eye) { ui.eye = false; build(P, res); if (qres) build(Q, qres); labels(res); }
      await U.shot(shot(), 450);
      startFlow(res, 3800);
      U.sfx('thud', 0.5);
      await U.anim(650, function (t) { forces(res, 1.6 * (1 - t) * (1 - t)); });
      // deflected shape, exaggerated by a stated factor
      var Aok = 0.05 + 0.05 * Math.min(1, res.uD / 100), Aend = m === 'defl' ? 0.28 + 0.1 * Math.min(1, res.uD / 100 - 1) : m === 'bend' || m === 'crush' ? 0.16 : Aok;
      fa.visible = false;
      if (m === 'defl' || m === 'bend' || m === 'crush') U.sfx('creak');
      if (!ui.eye) {
        await U.anim(800, function (t) { var e = t * t * (3 - 2 * t); P.A = Aend * e; deform(P); if (qres) { Q.A = (0.05 + 0.05 * Math.min(1, qres.uD / 100)) * e; deform(Q); } });
        U.label('l4e', [BASE.x - res.s.lx / 2, HS - Aend - 0.15, BASE.z + res.s.ly / 2 + 0.3], 'deflected shape drawn × ' + fm(Aend * 1000 / Math.max(0.1, res.delta), 0) + ' (δ about ' + fm(res.delta, 1) + ' mm, elastic estimate)', 'm', 7);
      }
      if (m === 'bend' || m === 'crush' || m === 'defl') {
        P.mode = m === 'bend' && two ? 'yield' : m === 'crush' ? 'bend' : m; P.paths = null;
        if (m !== 'defl') { // See inside: the failing bars and the cracks through translucent concrete
          var keepA = P.A; ui.eye = true; build(P, res); P.A = keepA; deform(P); labels(res);
        }
        U.sfx('crack');
        await U.anim(900, function (t) { P.crack = t; drawCracks(P); });
        U.impact([BASE.x, HS - P.A, BASE.z], { sfx: 'fail', size: 0.8 });
        var tt = m === 'crush' ? 'Concrete crushing' : m === 'defl' ? 'Too much deflection' : two ? 'Yield lines: panel overloaded' : 'Bending failure at mid-span';
        U.banner({ t: tt, b: callout(res) });
        U.label('l4x', [BASE.x + 0.3, HS - P.A - 0.5, BASE.z + res.s.ly / 2 + 0.2], P.mode === 'yield' ? 'YIELD LINES on the soffit, corners to the middle' : m === 'crush' ? 'top face crushes at mid-span' : m === 'defl' ? 'sags too much, shape drawn exaggerated' : 'flexural cracks across the soffit at mid-span', 'bad', 7);
        say(m === 'crush' ? 's2d08' : m === 'defl' ? 's2d06' : two ? 's2d07' : 's2d05');
      } else if (m === 'spacing') {
        U.sfx('fail');
        U.banner({ t: 'Check the bars', b: callout(res) });
        say('s2d09');
      } else {
        U.sfx('ok');
        var ok = loadsOk(), tl = task().load;
        if (ok) U.banner({ ok: true, hold: true, t: 'Holds', b: 'bending ' + fm(Math.max(res.uB, res.uK), 0) + ' % · ' + (two ? 'long span ' : 'distribution ') + fm(res.uB2, 0) + ' % · deflection ' + fm(res.uD, 0) + ' %' });
        else U.banner({ ok: true, hold: true, t: 'Holds, but not for this task', b: 'Set the task values to count it: spans ' + fm(tl.lx, 2) + ' × ' + fm(tl.ly, 2) + ' m, dead ' + fm(tl.dead, 1) + ' and imposed ' + fm(tl.imp, 1) + ' kN/m², cover ' + tl.cover + ' mm' + (tl.dia ? ', ' + tl.dia + ' mm bars' : '') + '. Start again keeps your bars.' });
        if (st.task === tk0) U.emit('test', { stood: true, task: st.task, loads: ok });
      }
      await U.wait(500);
    } finally { setBusy(false); }
  }

  // ---- undo/redo/reset/See inside on the design variables only
  U.history({ get: function () { return JSON.parse(JSON.stringify(st)); }, set: function (v) { if (ui.busy) return; Object.assign(st, v); req(true); } }); // review L4 #1: no undo/redo during Test
  function preset(i, keepBars) {
    var t = TASKS[i];
    st.task = i; Object.assign(st, t.load);
    if (!keepBars) Object.assign(st, t.start);
  }
  U.tool('reset', function () { if (ui.busy) return; U.mark(); preset(st.task, true); req(true); U.shot(shot(), 900); });
  U.tool('eye', function () {
    ui.eye = !ui.eye;
    if (ui.res) { var md = P.mode, cr = P.crack; build(P, ui.res); P.mode = md; P.crack = cr; drawCracks(P); if (ui.cmp && Q.res) build(Q, Q.res); labels(ui.res); }
    U.dirty = true; U.emit('eye');
  });
  U.drag(null);
  U.cfg.praise = LINES.s2d10;

  var steps = [
    { t: 'Task 46', prompt: 'Design the one-way slab so every check passes, then press Test', shot: shot,
      enter: function () { preset(0); req(true); say('s2d01'); },
      test: function (ev, d) { return ev === 'test' && d && d.stood && d.task === 0 && d.loads && loadsOk(); },
      after: function () { ui.done[0] = true; say('s2d02'); } },
    { t: 'Task 48', prompt: 'Check the two-way panel, fix what fails, then press Test', shot: shot,
      enter: function () { preset(1); req(true); say('s2d03'); },
      test: function (ev, d) { return ev === 'test' && d && d.stood && d.task === 1 && d.loads && loadsOk(); },
      after: function () { ui.done[1] = true; say('s2d04'); } }
  ];
  preset(0); draw();
  (async function () {
    await U.start();
    E.bridge.set('RC_S2_Explored', true);
    window.__live = true;
    var run = U.runSteps(steps);
    var fin = $('#bNext').onclick;
    $('#bNext').onclick = function () {
      var last = U.idx >= steps.length - 1;
      if (!last) { fin(); return; }
      if (!ui.done.every(Boolean)) { U.toast('First pass every design task: design it, then press Test'); return; }
      fin();
      U.stopSay(); setTimeout(function () { say('s2d10'); }, 50); // S2_DONE speaks the old line
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
