/* BDCBD501 shared teaching-cue and label module (owner feedback 1 and 3, 21 Nov).
   Source of truth: fix/designlab/cues.js. Copied unchanged into every lab folder by fix/designlab/gen-cues.mjs;
   index.html loads it after lab.js and calc.js, before design.js. It uses only window.__eng (fix/ENGINE-API.md).

   CUES.line(group, points, colour, {w, halo, pulse, op})  thick screen-space stroke: core of w px (stage pixels at
       1600 x 900) on a near-white halo with a thin dark rim, always on top (depthTest off, renderOrder 990+), so a red
       or amber core reads on red soil, grey concrete and sky alike. Width does not change with zoom.
   CUES.chevron(group, apex, dir, size, colour, opts)  ">" mark (dir = unit Vector3 the tip points to, size in m)
   CUES.glow(group, point, colour, {px, pulse})  soft additive glow at the critical spot
   CUES.col(u)  red over 100 %, amber over 80 %, green otherwise (bright cores: #FF3B30, #FFB020, #22C55E)
   CUES.members(fn)  fn() returns the member objects / Box3s that labels must not cover (default view and See inside)
   CUES.xray(meshes, on, opts)  See inside: concrete nearly clear and neutral (light grey, opacity 0.12)
   CUES.outline(mesh, {px, color})  screen-space outline drawn behind a bar or link so steel reads bold in See inside
   CUES.edges(group, box3 | object, on)  thin grey edge outline of the member while its concrete is nearly clear
   CUES.show(bool)  hide/show every cue (QA: contrast frames); CUES.report()  label and member boxes for the gate
   CUES.busy(fn)  fn() true while the lab runs its Test: undo / redo are then ignored without losing an undo level
   Labels: every engine label (lab.label) is laid out each frame. A label whose pill would cover a member moves
   beside it (the side with more free space), never onto another label or a panel, with a thin leader line to the
   exact spot it describes. */
(function () {
  'use strict';
  var E = window.__eng;
  if (!E || !E.lab || !E.R) { console.error('cues.js: lab.js (window.__eng) missing'); return; }
  var U = E.lab, R = E.R;
  var RED = 0xFF3B30, AMB = 0xFFB020, GRN = 0x22C55E, HALO = 0xFFFFFF, RIM = 0x0F2E5A;
  var cues = new Set(), pulsing = new Set(), shown = true, memberFn = null;

  // ---------- sizes: stage pixels <-> world metres at a point, for the camera the lab is flying to
  var dest = null, fly0 = U.fly;
  U.fly = function (p, t, ms, fov) { dest = { p: new R.Vector3().fromArray(p), fov: fov || U.cam.fov }; return fly0.apply(U, arguments); };
  function wpp(pt) { // metres per stage pixel at pt
    var fl = dest && U.flying > 0, cp = fl ? dest.p : U.cam.position, fov = fl ? dest.fov : U.cam.fov;
    return 2 * Math.max(0.2, cp.distanceTo(pt)) * Math.tan(fov * Math.PI / 360) / 900;
  }
  function canvasEl() { return document.querySelector('#cv canvas') || document.querySelector('#stage canvas') || document.querySelector('canvas'); }
  var vp = new R.Vector2(1600, 900), sc = { value: 1 };
  function syncVp() {
    var c = canvasEl(); if (!c) return;
    if (c.width !== vp.x || c.height !== vp.y) { vp.set(c.width, c.height); }
    sc.value = c.height / 900;
  }

  // ---------- thick screen-space strokes (capsule per segment: round joins and ends, anti-aliased edge)
  var VS = [
    'attribute vec3 aA; attribute vec3 aB; attribute vec2 aS;',
    'uniform vec2 uVp; uniform float uW; uniform float uSc; varying vec2 vP; varying vec2 vA; varying vec2 vB;',
    'void main(){',
    ' vec4 ca = projectionMatrix * modelViewMatrix * vec4(aA, 1.0);',
    ' vec4 cb = projectionMatrix * modelViewMatrix * vec4(aB, 1.0);',
    ' if (ca.w < 0.01 || cb.w < 0.01) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }',
    ' vec2 sa = (ca.xy / ca.w * 0.5 + 0.5) * uVp, sb = (cb.xy / cb.w * 0.5 + 0.5) * uVp;',
    ' vec2 d = sb - sa; float L = length(d); vec2 dir = L > 1e-4 ? d / L : vec2(1.0, 0.0); vec2 nr = vec2(-dir.y, dir.x);',
    ' float hw = uW * uSc * 0.5 + 1.5;',
    ' vec2 sp = (aS.x < 0.5 ? sa - dir * hw : sb + dir * hw) + nr * aS.y * hw;',
    ' vA = sa; vB = sb; vP = sp; vec4 c = aS.x < 0.5 ? ca : cb;',
    ' gl_Position = vec4((sp / uVp * 2.0 - 1.0) * c.w, 0.0, c.w);',
    '}'].join('\n');
  var FS = [
    'uniform vec3 uC; uniform float uW; uniform float uSc; uniform float uO; varying vec2 vP; varying vec2 vA; varying vec2 vB;',
    'void main(){',
    ' vec2 P = gl_FragCoord.xy; vec2 ab = vB - vA; float t = clamp(dot(P - vA, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);',
    ' float d = length(P - vA - ab * t), r = uW * uSc * 0.5;',
    ' float a = 1.0 - smoothstep(r - 0.8, r + 0.8, d);',
    ' if (a <= 0.01) discard;',
    ' gl_FragColor = vec4(uC, uO * a);',
    ' #include <colorspace_fragment>',
    '}'].join('\n');
  function strokeGeom(pts) {
    var n = pts.length - 1, A = [], B = [], S = [], idx = [], v = 0;
    for (var i = 0; i < n; i++) {
      var a = pts[i], b = pts[i + 1];
      for (var k = 0; k < 4; k++) { A.push(a.x, a.y, a.z); B.push(b.x, b.y, b.z); S.push(k < 2 ? 0 : 1, k % 2 ? 1 : -1); }
      idx.push(v, v + 1, v + 2, v + 1, v + 3, v + 2); v += 4;
    }
    var g = new R.BufferGeometry();
    g.setAttribute('position', new R.Float32BufferAttribute(A, 3)); // bounds only (frustum culling is off)
    g.setAttribute('aA', new R.Float32BufferAttribute(A, 3));
    g.setAttribute('aB', new R.Float32BufferAttribute(B, 3));
    g.setAttribute('aS', new R.Float32BufferAttribute(S, 2));
    g.setIndex(idx);
    return g;
  }
  var mats = {};
  function strokeMat(col, w, op, pulse) { // shared per colour / width / opacity / pulse (no per-frame compile or leak)
    var key = col + '|' + w + '|' + op + '|' + (pulse || 0);
    if (!mats[key]) { mats[key] = mkStroke(col, w, op); mats[key].userData.w0 = w; }
    return mats[key];
  }
  function mkStroke(col, w, op) {
    return new R.ShaderMaterial({ vertexShader: VS, fragmentShader: FS, transparent: true, depthTest: false, depthWrite: false, side: R.DoubleSide, toneMapped: false,
      uniforms: { uVp: { value: vp }, uSc: sc, uW: { value: w }, uC: { value: new R.Color(col) }, uO: { value: op == null ? 1 : op } } });
  }
  function track(o, pulse) {
    o.userData.cue = true; o.visible = o.isSprite ? glowOn : shown; o.frustumCulled = false;
    cues.add(o); if (pulse) pulsing.add(o);
    return o;
  }
  // one cue = rim, halo and core layers in one group
  function line(G, pts, col, o) {
    o = o || {};
    if (!pts || pts.length < 2) return null;
    syncVp();
    var w = o.w || 5, halo = o.halo == null ? 3 : o.halo, geo = strokeGeom(pts), grp = new R.Group();
    var layers = [[RIM, w + 2 * halo + 4, 990, 1], [HALO, w + 2 * halo, 991, 0.97], [col, w, 992, 1]];
    if (o.noHalo) layers = [[col, w, 992, 1]];
    layers.forEach(function (L) {
      var m = new R.Mesh(geo, strokeMat(L[0], L[1], (o.op == null ? 1 : o.op) * L[3], o.pulse));
      m.renderOrder = L[2]; m.frustumCulled = false; grp.add(m);
    });
    grp.userData.pulse = o.pulse || 0;
    G.add(grp);
    return track(grp, o.pulse);
  }
  function chevron(G, apex, dir, size, col, o) {
    var up = Math.abs(dir.y) > 0.9 ? new R.Vector3(1, 0, 0) : new R.Vector3(0, 1, 0);
    var side = new R.Vector3().crossVectors(dir, up).normalize(), perp = new R.Vector3().crossVectors(side, dir).normalize();
    var back = apex.clone().addScaledVector(dir, -size);
    return line(G, [back.clone().addScaledVector(perp, size), apex.clone(), back.clone().addScaledVector(perp, -size)], col, o);
  }
  var glowTex = {}, glowMat = {};
  function glow(G, p, col, o) {
    o = o || {};
    var c = new R.Color(col), key = c.getHexString();
    if (!glowTex[key]) {
      var cv = document.createElement('canvas'); cv.width = cv.height = 128;
      var cx = cv.getContext('2d'), gr = cx.createRadialGradient(64, 64, 0, 64, 64, 64), r = Math.round(c.r * 255), g = Math.round(c.g * 255), b = Math.round(c.b * 255);
      gr.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',0.85)'); gr.addColorStop(0.4, 'rgba(' + r + ',' + g + ',' + b + ',0.35)'); gr.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
      cx.fillStyle = gr; cx.fillRect(0, 0, 128, 128);
      glowTex[key] = new R.CanvasTexture(cv);
    }
    if (!glowMat[key]) glowMat[key] = new R.SpriteMaterial({ map: glowTex[key], blending: R.AdditiveBlending, transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
    var sp = new R.Sprite(glowMat[key]);
    var s = (o.px || 120) * wpp(p);
    sp.position.copy(p); sp.scale.set(s, s, 1); sp.renderOrder = 989; sp.userData.s0 = s; sp.userData.pulse = o.pulse == null ? 0.18 : o.pulse;
    G.add(sp);
    return track(sp, sp.userData.pulse);
  }
  function col(u) { return u > 1 ? RED : u > 0.8 ? AMB : GRN; }

  // pulse loop: width / glow size breathe while the member works at its limit
  var tick = 0;
  function loop(t) {
    requestAnimationFrame(loop);
    syncVp();
    if (++tick % 60 === 0) cues.forEach(function (o) { if (!attached(o)) { cues.delete(o); pulsing.delete(o); } });
    var any = false;
    pulsing.forEach(function (o) {
      if (!attached(o)) { pulsing.delete(o); cues.delete(o); return; }
      if (!o.visible) return;
      var k = 1 + o.userData.pulse * Math.sin(t * 0.008);
      if (o.isSprite) o.scale.setScalar(o.userData.s0 * k);
      else o.children.forEach(function (m) { m.material.uniforms.uW.value = m.material.userData.w0 * (1 + 0.5 * (k - 1)); });
      any = true;
    });
    if (any) U.dirty = true;
    layout();
  }
  requestAnimationFrame(loop); // first pass after the whole module is set up (S3: labels exist at load)
  function attached(o) { while (o) { if (o === U.sc) return true; o = o.parent; } return false; }
  var glowOn = true;
  function show(on, glows) { // glows: optional separate switch for the soft glows (QA measures strokes without them)
    shown = on !== false; glowOn = glows == null ? shown : glows !== false;
    cues.forEach(function (o) { if (!attached(o)) { cues.delete(o); pulsing.delete(o); return; } o.visible = o.isSprite ? glowOn : shown; });
    U.dirty = true;
  }

  // ---------- See inside: nearly clear, neutral concrete; bold steel
  var XRAY = new R.MeshBasicMaterial({ color: 0xd4d8dd, transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false });
  function xray(meshes, on, o) {
    o = o || {};
    var mat = XRAY;
    if (o.opacity != null && o.opacity !== 0.12) mat = XRAY.clone(), mat.opacity = o.opacity;
    (meshes || []).forEach(function (m) {
      if (!m || !m.isMesh) return;
      if (on) { if (!m.userData.solidMat) m.userData.solidMat = m.material; m.material = mat; m.castShadow = false; }
      else if (m.userData.solidMat) { m.material = m.userData.solidMat; delete m.userData.solidMat; m.castShadow = true; }
    });
    U.dirty = true;
  }
  var OVS = [
    'uniform vec2 uVp; uniform float uPx; uniform float uSc;',
    'void main(){',
    ' vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
    ' vec3 n = normalize(normalMatrix * normal); vec4 cn = projectionMatrix * vec4(n, 0.0);',
    ' vec2 d = cn.xy; float l = length(d); d = l > 1e-5 ? d / l : vec2(0.0);',
    ' p.xy += d * uPx * uSc * 2.0 / uVp * p.w;',
    ' gl_Position = p;',
    '}'].join('\n');
  var OFS = 'uniform vec3 uC; void main(){ gl_FragColor = vec4(uC, 1.0);\n#include <colorspace_fragment>\n}';
  var outMats = {};
  function outline(mesh, o) {
    o = o || {};
    if (!mesh || !mesh.geometry) return null;
    if (mesh.userData.outline) return mesh.userData.outline;
    syncVp();
    var key = (o.color == null ? HALO : o.color) + ':' + (o.px || 2);
    if (!outMats[key]) outMats[key] = new R.ShaderMaterial({ vertexShader: OVS, fragmentShader: OFS, side: R.BackSide,
      uniforms: { uVp: { value: vp }, uSc: sc, uPx: { value: o.px || 2 }, uC: { value: new R.Color(o.color == null ? HALO : o.color) } } });
    var m = new R.Mesh(mesh.geometry, outMats[key]);
    m.renderOrder = (mesh.renderOrder || 0) - 1; m.frustumCulled = false; m.castShadow = false; m.userData.outlineOf = mesh;
    mesh.add(m); mesh.userData.outline = m;
    return m;
  }
  var edgeMats = {};
  function edges(G, src, on, o) {
    o = o || {};
    if (G.userData.edges) { G.remove(G.userData.edges); G.userData.edges.geometry.dispose(); G.userData.edges = null; }
    if (!on) { U.dirty = true; return null; }
    var bx = src.isBox3 ? src : new R.Box3().setFromObject(src);
    var g = new R.EdgesGeometry(new R.BoxGeometry(bx.max.x - bx.min.x, bx.max.y - bx.min.y, bx.max.z - bx.min.z));
    var em = edgeMats[(o.color || 0x7d8791) + '|' + (o.op || 0.85)] = edgeMats[(o.color || 0x7d8791) + '|' + (o.op || 0.85)] || new R.LineBasicMaterial({ color: o.color || 0x7d8791, transparent: true, opacity: o.op || 0.85, depthWrite: false });
    var l = new R.LineSegments(g, em);
    var c = bx.getCenter(new R.Vector3()); if (G.parent || G.matrixWorld) { G.updateMatrixWorld(true); G.worldToLocal(c); }
    l.position.copy(c); l.renderOrder = 7; G.add(l); G.userData.edges = l; U.dirty = true;
    return l;
  }

  // ---------- labels beside the member, with leader lines
  var AVOID = ['#bar', '#prompt', '#rail', '#banner', '#fx', '#read', '#why', '#ask', '#cap', '#sign', '#toast', '#praise'];
  var extraAvoid = [], memo = {}, svg = null, last = { members: [], labels: [] };
  function stageEl() { return document.getElementById('stage'); }
  function scaleOf() { var s = stageEl(); if (!s) return 1; var r = s.getBoundingClientRect(); return r.width / 1600 || 1; }
  function domRects() {
    var st = stageEl(); if (!st) return [];
    var r0 = st.getBoundingClientRect(), k = r0.width / 1600 || 1, out = [];
    AVOID.concat(extraAvoid).forEach(function (sel) {
      var el = document.querySelector(sel); if (!el) return;
      var cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.05) return;
      var r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return;
      out.push({ x0: (r.left - r0.left) / k, y0: (r.top - r0.top) / k, x1: (r.right - r0.left) / k, y1: (r.bottom - r0.top) / k, sel: sel });
    });
    return out;
  }
  var _b = new R.Box3(), _v = new R.Vector3();
  function projBox(bx) {
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, ok = false;
    for (var i = 0; i < 8; i++) {
      _v.set(i & 1 ? bx.max.x : bx.min.x, i & 2 ? bx.max.y : bx.min.y, i & 4 ? bx.max.z : bx.min.z);
      var p = U.proj(_v); if (p[2] >= 1) continue; ok = true;
      x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]);
    }
    return ok ? { x0: x0, y0: y0, x1: x1, y1: y1 } : null;
  }
  function boxOf(o) {
    if (o.isBox3) return o;
    _b.makeEmpty();
    o.updateMatrixWorld(true);
    o.traverseVisible(function (m) {
      if (!m.geometry || m.userData.cue || m.userData.outlineOf || m.isSprite || m.isLine || m.isLineSegments || m.isPoints) return;
      if (!m.geometry.boundingBox) m.geometry.computeBoundingBox();
      _b.union(m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld));
    });
    return _b.isEmpty() ? null : _b.clone();
  }
  function memberRects() {
    if (!memberFn) return [];
    var list = []; try { list = memberFn() || []; } catch (e) { return []; }
    var out = [];
    list.forEach(function (o) { if (!o) return; var b = boxOf(o); if (!b) return; var r = projBox(b); if (r) out.push(r); });
    return out;
  }
  function hit(a, b, pad) { pad = pad || 0; return a.x0 < b.x1 + pad && a.x1 > b.x0 - pad && a.y0 < b.y1 + pad && a.y1 > b.y0 - pad; }
  function rectAt(cx, cy, w, h) { return { x0: cx - w / 2, y0: cy - h / 2, x1: cx + w / 2, y1: cy + h / 2 }; }
  function ensureSvg() {
    if (svg && svg.isConnected) return svg;
    var host = document.getElementById('lbls'); if (!host) return null;
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '1600'); svg.setAttribute('height', '900'); svg.setAttribute('viewBox', '0 0 1600 900');
    svg.style.cssText = 'position:absolute;left:0;top:0;width:1600px;height:900px;pointer-events:none;overflow:visible';
    host.insertBefore(svg, host.firstChild);
    return svg;
  }
  function bounds() {
    var s = U.safe ? U.safe() : { x0: 86, y0: 120, x1: 1584, y1: 712 };
    return { x0: Math.max(8, s.x0 - 40), y0: 66, x1: Math.min(1592, s.x1 + 10), y1: 892 };
  }
  var sig = '';
  function layout() {
    var labs = (U.labels || []).filter(function (l) { return l.el && l.el.isConnected && !l.el.classList.contains('hid') && l.vis !== false; });
    var g = ensureSvg(); if (!g) return;
    if (!labs.length) { if (g.childNodes.length) g.innerHTML = ''; last = { members: memberRects(), labels: [] }; return; }
    var mem = memberRects(), dom = domRects(), B = bounds();
    var uni = mem.reduce(function (u, r) { return u ? { x0: Math.min(u.x0, r.x0), y0: Math.min(u.y0, r.y0), x1: Math.max(u.x1, r.x1), y1: Math.max(u.y1, r.y1) } : Object.assign({}, r); }, null);
    var freeL = uni ? uni.x0 - B.x0 : 0, freeR = uni ? B.x1 - uni.x1 : 0;
    var placed = [], out = [], html = '';
    labs.sort(function (a, b) { return (b.prio || 0) - (a.prio || 0) || (a.t0 || 0) - (b.t0 || 0); });
    labs.forEach(function (L) {
      var a = U.proj(L.p), ax = a[0], ay = a[1], w = L.el.offsetWidth || 80, h = L.el.offsetHeight || 22;
      function bad(r) {
        if (r.x0 < B.x0 || r.x1 > B.x1 || r.y0 < B.y0 || r.y1 > B.y1) return true;
        for (var i = 0; i < mem.length; i++) if (hit(r, mem[i], 8)) return true;
        for (i = 0; i < placed.length; i++) if (hit(r, placed[i], 4)) return true;
        for (i = 0; i < dom.length; i++) if (hit(r, dom[i], 4)) return true;
        return false;
      }
      var best = null, prev = memo[L.id];
      function consider(cx, cy, pen) {
        var r = rectAt(cx, cy, w, h); if (bad(r)) return;
        var c = Math.hypot(cx - ax, cy - ay) + (pen || 0);
        if (prev && Math.abs(prev[0] - (cx - ax)) < 1 && Math.abs(prev[1] - (cy - ay)) < 1) c -= 25; // keep a stable choice
        if (!best || c < best.c) best = { cx: cx, cy: cy, c: c, r: r };
      }
      consider(ax, ay, 0);
      if (!best || best.c > 0) {
        var xs = [];
        mem.concat(placed).forEach(function (m) {
          xs.push([m.x1 + 18 + w / 2, freeR >= freeL ? 0 : 60], [m.x0 - 18 - w / 2, freeL > freeR ? 0 : 60]);
        });
        xs.push([ax + 40 + w / 2, 30], [ax - 40 - w / 2, 30]);
        for (var j = 0; j <= 16; j++) {
          var dy = (j % 2 ? 1 : -1) * Math.ceil(j / 2) * (h + 8);
          xs.forEach(function (x) { consider(x[0], ay + dy, x[1] + Math.abs(dy) * 0.4); });
        }
        mem.forEach(function (m) { consider(ax, m.y0 - 16 - h / 2, 80); consider(ax, m.y1 + 16 + h / 2, 80); });
      }
      if (!best) best = { cx: ax, cy: ay, r: rectAt(ax, ay, w, h), c: 0, forced: true };
      var dx = Math.round(best.cx - ax), dyy = Math.round(best.cy - ay);
      memo[L.id] = [dx, dyy];
      var tf = dx || dyy ? 'translate(calc(-50% + ' + dx + 'px),calc(-50% + ' + dyy + 'px))' : '';
      if (L.el.style.transform !== tf) L.el.style.transform = tf;
      placed.push(best.r);
      out.push({ id: L.id, text: L.el.textContent, x0: best.r.x0, y0: best.r.y0, x1: best.r.x1, y1: best.r.y1, ax: ax, ay: ay, moved: !!(dx || dyy), forced: !!best.forced });
      if (dx || dyy) { // leader from the pill edge to the exact spot
        var ex = Math.max(best.r.x0, Math.min(ax, best.r.x1)), ey = Math.max(best.r.y0, Math.min(ay, best.r.y1));
        if (Math.hypot(ex - ax, ey - ay) > 6) {
          var cs = getComputedStyle(L.el).backgroundColor || '#0F2E5A', mm = cs.match(/\d+/g);
          if (!mm || (+mm[0] > 220 && +mm[1] > 220 && +mm[2] > 220) || (mm.length > 3 && +mm[3] === 0)) cs = '#0F2E5A';
          var d = 'M' + ex.toFixed(1) + ' ' + ey.toFixed(1) + 'L' + ax.toFixed(1) + ' ' + ay.toFixed(1);
          html += '<path d="' + d + '" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".95"/>' +
            '<path d="' + d + '" stroke="' + cs + '" stroke-width="2.2" stroke-linecap="round"/>' +
            '<circle cx="' + ax.toFixed(1) + '" cy="' + ay.toFixed(1) + '" r="5" fill="#fff"/><circle cx="' + ax.toFixed(1) + '" cy="' + ay.toFixed(1) + '" r="3" fill="' + cs + '"/>';
        }
      }
    });
    if (html !== sig) { g.innerHTML = html; sig = html; }
    last = { members: mem, labels: out, dom: dom };
  }
  function report() {
    layout();
    var hits = [];
    last.labels.forEach(function (l, i) {
      last.members.forEach(function (m, k) { if (hit(l, m, 0)) hits.push({ label: l.id, member: k }); });
      last.labels.forEach(function (o, j) { if (j > i && hit(l, o, 0)) hits.push({ label: l.id, label2: o.id }); });
    });
    return { members: last.members, labels: last.labels, hits: hits, cues: cues.size };
  }

  // ---------- undo / redo while a Test runs: ignored WITHOUT losing an undo level (review point "undo-level quirk").
  // The engine pops its stack before the lab's history.set can refuse; so refuse here, before the engine sees it.
  var busyFn = null, undo0 = U.undo, redo0 = U.redo;
  function isBusy() { try { return !!(U.locked || U.busy || (busyFn && busyFn())); } catch (e) { return false; } }
  U.undo = function () { if (isBusy()) return; return undo0.apply(U, arguments); };
  U.redo = function () { if (isBusy()) return; return redo0.apply(U, arguments); };

  window.CUES = {
    busy: function (fn) { busyFn = fn; },
    RED: RED, AMB: AMB, GRN: GRN, HALO: HALO, RIM: RIM,
    line: line, chevron: chevron, glow: glow, col: col, wpp: wpp,
    members: function (fn) { memberFn = fn; }, avoid: function (sels) { extraAvoid = sels || []; },
    xray: xray, outline: outline, edges: edges, show: show, report: report, layout: layout,
    get shown() { return shown; }
  };
})();
