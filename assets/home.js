/* 品牌资产库 · 首页：明亮金属/毛玻璃流体，鼠标方向跟随的水流感 */

(function () {
  'use strict';

  var canvas = document.getElementById('gl');
  var veil = document.getElementById('veil');
  var ring = document.getElementById('cursor-ring');
  var statsEl = document.getElementById('hero-stats');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 首页统计（仅品牌数与分类数） */
  (function fillStats() {
    if (!statsEl) return;
    var data = window.BAL_DATA;
    if (!data || !data.stats) { statsEl.textContent = ''; return; }
    var pad = function (n) { return String(n).padStart(2, '0'); };
    statsEl.innerHTML = '<b>' + pad(data.stats.brands) + '</b> BRANDS &nbsp;·&nbsp; <b>' +
      pad(data.stats.categories) + '</b> CATEGORIES';
  })();

  var VERT = 'attribute vec2 a_pos;\nvoid main() { gl_Position = vec4(a_pos, 0.0, 1.0); }';

  var FRAG = [
    'precision highp float;',
    'uniform vec2 u_res;',
    'uniform float u_time;',
    'uniform vec2 u_mouse;',
    'uniform vec2 u_flow;',
    'uniform float u_flowMag;',
    'uniform float u_click;',
    'uniform vec2 u_clickPos;',
    '',
    'float hash(vec2 p) {',
    '  p = fract(p * vec2(123.34, 456.21));',
    '  p += dot(p, p + 45.32);',
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
    '  for (int i = 0; i < 5; i++) {',
    '    v += a * noise(p);',
    '    p *= 2.03;',
    '    a *= 0.5;',
    '  }',
    '  return v;',
    '}',
    '',
    'void main() {',
    '  float m = min(u_res.x, u_res.y);',
    '  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / m;',
    '  vec2 mp = (u_mouse - 0.5 * u_res) / m;',
    '  vec2 fl = u_flow / m;',
    '  float fm = clamp(u_flowMag, 0.0, 1.0);',
    '  float t = u_time * 0.035;',
    '',
    '  // 水流：沿鼠标移动方向推挤采样域，水流方向随鼠标而变',
    '  vec2 q = p - fl * (0.85 + 1.7 * fm);',
    '',
    '  float n1 = fbm(q * 1.15 + vec2(t * 0.85, -t * 0.60));',
    '  float n2 = fbm(q * 2.45 + vec2(-t * 0.50, t * 0.65) + n1 * 0.85);',
    '  float n3 = fbm(q * 5.20 + n2 * 1.15 + vec2(t * 0.30, -t * 0.20));',
    '',
    '  vec3 base = mix(vec3(0.995, 0.996, 1.000), vec3(0.905, 0.925, 0.960), smoothstep(0.20, 0.85, n1));',
    '  base = mix(base, vec3(0.845, 0.875, 0.925), smoothstep(0.42, 0.95, n2) * 0.80);',
    '',
    '  // 金属丝光',
    '  vec2 dir = normalize(vec2(0.86, 0.50));',
    '  float streak = sin(dot(q, dir) * 46.0 + n2 * 7.5 + u_time * 0.22);',
    '  base += vec3(0.050, 0.056, 0.068) * smoothstep(0.62, 1.0, streak) * (0.35 + 0.40 * n3);',
    '',
    '  // 毛玻璃团块：边缘略暗形成厚度',
    '  float glass = smoothstep(0.40, 0.92, n3);',
    '  base = mix(base, vec3(1.0), glass * 0.42);',
    '  float rim = 1.0 - smoothstep(0.0, 0.09, abs(n3 - 0.52));',
    '  base -= vec3(0.045, 0.050, 0.060) * rim * 0.5;',
    '',
    '  // 鼠标：轻柔光晕 + 沿移动方向的拉伸与拖尾',
    '  float d = length(p - mp);',
    '  float near = exp(-d * 3.2);',
    '  vec2 radial = normalize(p - mp + vec2(1e-4));',
    '  float follow = (fm > 0.001) ? dot(radial, normalize(fl + vec2(1e-5))) : 0.0;',
    '  base += vec3(0.050, 0.055, 0.065) * near * (0.25 + 0.75 * fm) * 0.6;',
    '  base += vec3(0.060, 0.065, 0.075) * exp(-max(d - 0.18, 0.0) * 5.0) * abs(follow) * fm * 0.85;',
    '  base -= vec3(0.030, 0.034, 0.040) * exp(-d * 5.0) * clamp(follow, 0.0, 1.0) * fm * 0.7;',
    '',
    '  // 点击：白光脉冲',
    '  if (u_click > 0.0) {',
    '    float cd = length(p - (u_clickPos - 0.5 * u_res) / m);',
    '    float radius = u_click * 1.25;',
    '    base += vec3(0.60) * exp(-abs(cd - radius) * 11.0) * (1.0 - u_click) * 0.55;',
    '    base += vec3(0.25) * smoothstep(radius, radius - 0.4, cd) * (1.0 - u_click);',
    '  }',
    '',
    '  base *= 1.0 - 0.16 * pow(clamp(length(p) * 0.78, 0.0, 1.0), 2.0);',
    '  base += (hash(gl_FragCoord.xy + fract(u_time) * 37.0) - 0.5) * 0.010;',
    '',
    '  gl_FragColor = vec4(clamp(base, 0.0, 1.0), 1.0);',
    '}',
  ].join('\n');

  var glState = null;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

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
      uMouse: gl.getUniformLocation(prog, 'u_mouse'),
      uFlow: gl.getUniformLocation(prog, 'u_flow'),
      uFlowMag: gl.getUniformLocation(prog, 'u_flowMag'),
      uClick: gl.getUniformLocation(prog, 'u_click'),
      uClickPos: gl.getUniformLocation(prog, 'u_clickPos'),
    };
  }

  var mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  var flow = { x: 0, y: 0, dx: 0, dy: 0, mag: 0 };
  var click = { active: false, start: 0, x: 0.5, y: 0.5 };
  var startTime = performance.now();

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (!canvas) return;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    if (glState) glState.gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function frame() {
    requestAnimationFrame(frame);

    mouse.x += (mouse.tx - mouse.x) * 0.10;
    mouse.y += (mouse.ty - mouse.y) * 0.10;

    /* 水流速度矢量：来自鼠标移动方向，指数衰减后保留片刻 */
    flow.x = flow.x * 0.87 + flow.dx * 0.55;
    flow.y = flow.y * 0.87 + flow.dy * 0.55;
    flow.dx = 0;
    flow.dy = 0;
    var magnitude = Math.sqrt(flow.x * flow.x + flow.y * flow.y);
    flow.mag = Math.min(1, magnitude / 34);

    if (!glState) return;
    var gl = glState.gl;
    var now = performance.now();
    var clickProgress = click.active ? Math.min((now - click.start) / 620, 1) : 0;

    gl.uniform2f(glState.uRes, canvas.width, canvas.height);
    gl.uniform1f(glState.uTime, (now - startTime) / 1000);
    gl.uniform2f(glState.uMouse, mouse.x * canvas.width, (1 - mouse.y) * canvas.height);
    gl.uniform2f(glState.uFlow, flow.x, -flow.y);
    gl.uniform1f(glState.uFlowMag, flow.mag);
    gl.uniform1f(glState.uClick, clickProgress);
    gl.uniform2f(glState.uClickPos, click.x * canvas.width, (1 - click.y) * canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  resize();
  window.addEventListener('resize', resize);

  if (!reduceMotion) glState = initGL();
  if (!glState) document.body.classList.add('no-gl');
  requestAnimationFrame(frame);
  document.body.classList.add('ready');

  /* ---------------------------------------------------------------- */
  /* 指针与进入动画                                                     */
  /* ---------------------------------------------------------------- */

  var entering = false;

  function toNorm(clientX, clientY) {
    return { x: clientX / window.innerWidth, y: clientY / window.innerHeight };
  }

  window.addEventListener('mousemove', function (e) {
    var n = toNorm(e.clientX, e.clientY);
    flow.dx += (n.x - mouse.tx) * window.innerWidth * dpr;
    flow.dy += (n.y - mouse.ty) * window.innerHeight * dpr;
    mouse.tx = n.x;
    mouse.ty = n.y;
    if (ring) {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
      ring.style.transform = 'scale(' + (1 + Math.min(flow.mag, 1) * 0.7) + ')';
    }
  }, { passive: true });

  function enter(clientX, clientY) {
    if (entering) return;
    entering = true;
    var x = typeof clientX === 'number' ? clientX : window.innerWidth / 2;
    var y = typeof clientY === 'number' ? clientY : window.innerHeight / 2;
    var n = toNorm(x, y);
    click.active = true;
    click.start = performance.now();
    click.x = n.x;
    click.y = n.y;
    if (veil) {
      veil.style.setProperty('--vx', x + 'px');
      veil.style.setProperty('--vy', y + 'px');
      veil.classList.add('on');
    }
    window.setTimeout(function () { window.location.href = 'board.html'; }, 560);
  }

  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a') : null;
    if (link) {
      if (link.hasAttribute('data-enter')) {
        e.preventDefault();
        enter(e.clientX, e.clientY);
      }
      return;
    }
    enter(e.clientX, e.clientY);
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      enter();
    }
  });

  window.addEventListener('wheel', function (e) {
    if (Math.abs(e.deltaY) > 2) enter();
  }, { passive: true });

  window.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches[0]) enter(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
})();
