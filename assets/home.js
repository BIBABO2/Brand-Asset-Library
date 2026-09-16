/* 品牌资产库 · 首页：流动液态金属背景（无指针交互）＋点击空白处缓慢浮现看板 */

(function () {
  'use strict';

  var canvas = document.getElementById('gl');
  var boardLayer = document.getElementById('board-layer');
  var metaEl = document.getElementById('hero-meta');
  var data = window.BAL_DATA || { brands: [], categories: [], stats: {} };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealed = false;

  /* 首屏元信息（品牌数 / 分类数 / 最近更新） */
  (function fillMeta() {
    if (!metaEl) return;
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var latest = (data.brands || []).reduce(function (acc, b) {
      return b.updatedAt && b.updatedAt > acc ? b.updatedAt : acc;
    }, '');
    var rows = [
      ['品牌', pad((data.stats || {}).brands || 0)],
      ['分类', pad((data.stats || {}).categories || 0)],
      ['最近更新', latest || '—'],
    ];
    metaEl.innerHTML = rows.map(function (r) {
      return '<li><span class="meta-label">' + r[0] + '</span><span class="meta-value">' + r[1] + '</span></li>';
    }).join('');
  })();

  /* ---------------------------------------------------------------- */
  /* 液态金属背景                                                      */
  /* ---------------------------------------------------------------- */

  var VERT = 'attribute vec2 a_pos;\nvoid main() { gl_Position = vec4(a_pos, 0.0, 1.0); }';

  var FRAG = [
    'precision highp float;',
    'uniform vec2 u_res;',
    'uniform float u_time;',
    '',
    'float hash(vec2 p) {',
    '  p = fract(p * vec2(127.31, 311.7));',
    '  p += dot(p, p + 34.23);',
    '  return fract(p.x * p.y);',
    '}',
    '',
    'float noise(vec2 p) {',
    '  vec2 i = floor(p);',
    '  vec2 f = fract(p);',
    '  vec2 u = f * f * (3.0 - 2.0 * f);',
    '  float a = hash(i);',
    '  float b = hash(i + vec2(1.0, 0.0));',
    '  float c = hash(i + vec2(0.0, 1.0));',
    '  float d = hash(i + vec2(1.0, 1.0));',
    '  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);',
    '}',
    '',
    'float fbm(vec2 p) {',
    '  float v = 0.0;',
    '  float a = 0.5;',
    '  mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);',
    '  for (int i = 0; i < 5; i++) {',
    '    v += a * noise(p);',
    '    p = rot * p * 2.02;',
    '    a *= 0.5;',
    '  }',
    '  return v;',
    '}',
    '',
    'void main() {',
    '  float m = min(u_res.x, u_res.y);',
    '  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / m;',
    '  float t = u_time * 0.028;',
    '',
    '  // 缓慢流动的高度场（液态金属的“起伏”）',
    '  vec2 q = p * 1.08 + vec2(t * 0.42, -t * 0.30);',
    '  float h = fbm(q + fbm(q * 0.6 + t) * 0.35);',
    '  float hx = fbm(q + vec2(0.014, 0.0) + fbm((q + vec2(0.014, 0.0)) * 0.6 + t) * 0.35);',
    '  float hy = fbm(q + vec2(0.0, 0.014) + fbm((q + vec2(0.0, 0.014)) * 0.6 + t) * 0.35);',
    '',
    '  // 由高度场求伪法线，得到金属反射',
    '  vec3 n = normalize(vec3((h - hx) * 9.0, (h - hy) * 9.0, 0.42));',
    '  vec3 L = normalize(vec3(-0.55, 0.72, 0.62));',
    '  float diff = clamp(dot(n, L), 0.0, 1.0);',
    '  float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 26.0);',
    '  float fres = pow(1.0 - clamp(n.z, 0.0, 1.0), 2.0);',
    '',
    '  // 浅色渐变底色：冷白 → 雾蓝',
    '  vec3 base = mix(vec3(0.972, 0.974, 0.978), vec3(0.858, 0.892, 0.938), smoothstep(0.22, 0.86, h));',
    '  vec3 col = base * (0.90 + 0.22 * diff);',
    '  col += vec3(1.0, 0.995, 0.982) * spec * 0.42;',
    '  col += vec3(0.80, 0.85, 0.93) * fres * 0.30;',
    '',
    '  // 大尺度明暗与细腻颗粒，避免塑料感',
    '  col *= 1.0 - 0.055 * smoothstep(0.45, 1.0, fbm(q * 0.55 - 2.4));',
    '  col += (hash(gl_FragCoord.xy + fract(u_time) * 11.0) - 0.5) * 0.007;',
    '  col *= 1.0 - 0.08 * pow(clamp(length(p) * 0.82, 0.0, 1.0), 2.0);',
    '',
    '  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);',
    '}',
  ].join('\n');

  var glState = null;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var startTime = performance.now();

  function compile(gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { gl.deleteShader(sh); return null; }
    return sh;
  }

  function initGL() {
    if (!canvas) return null;
    var gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, powerPreference: 'low-power' });
    if (!gl) return null;
    var vs = compile(gl, gl.VERTEX_SHADER, VERT);
    var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return null;
    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    gl.useProgram(prog);
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    return {
      gl: gl,
      uRes: gl.getUniformLocation(prog, 'u_res'),
      uTime: gl.getUniformLocation(prog, 'u_time'),
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (!canvas) return;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    if (glState) glState.gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function frame() {
    requestAnimationFrame(frame);
    if (!glState) return;
    var gl = glState.gl;
    gl.uniform2f(glState.uRes, canvas.width, canvas.height);
    gl.uniform1f(glState.uTime, (performance.now() - startTime) / 1000);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  resize();
  window.addEventListener('resize', resize);
  if (!reduceMotion) glState = initGL();
  if (!glState) document.body.classList.add('no-gl');
  requestAnimationFrame(frame);

  /* ---------------------------------------------------------------- */
  /* 点击空白处：缓慢浮现看板                                            */
  /* ---------------------------------------------------------------- */

  function reveal(immediate) {
    if (revealed) return;
    revealed = true;
    if (immediate) {
      document.documentElement.classList.add('deep-link');
      document.body.style.transition = 'none';
      if (boardLayer) boardLayer.style.transition = 'none';
      var heroEl = document.getElementById('hero');
      if (heroEl) heroEl.style.transition = 'none';
    }
    document.body.classList.add('board-open');
    if (boardLayer) boardLayer.setAttribute('aria-hidden', 'false');
    try {
      window.history.replaceState(null, '', window.location.pathname + window.location.search + '#board');
    } catch (e) { /* 忽略 */ }
    window.scrollTo(0, 0);
  }

  function backToHero() {
    revealed = false;
    document.body.classList.remove('board-open');
    if (boardLayer) boardLayer.setAttribute('aria-hidden', 'true');
    try { window.history.replaceState(null, '', window.location.pathname + window.location.search); } catch (e) { /* 忽略 */ }
    window.scrollTo(0, 0);
    document.body.offsetHeight; /* 强制回流，保证过渡重新生效 */
  }

  var deepLink = window.location.hash === '#board' ||
    /(?:^|[?&])view=/.test(window.location.search);
  if (deepLink) reveal(true);

  document.addEventListener('click', function (e) {
    var el = e.target;
    if (el && el.closest && el.closest('#back-hero')) {
      e.preventDefault();
      backToHero();
      return;
    }
    if (revealed) return;
    if (el && el.closest && el.closest('a, button, input, textarea, select')) return;
    reveal(false);
  });

  window.addEventListener('keydown', function (e) {
    if (revealed) return;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); reveal(false); }
  });

  window.addEventListener('wheel', function (e) {
    if (revealed) return;
    if (Math.abs(e.deltaY) > 4) reveal(false);
  }, { passive: true });

  window.addEventListener('touchstart', function () {
    if (!revealed) reveal(false);
  }, { passive: true });
})();
