/* 品牌资产库 · 首页光效与进入动画 */

(function () {
  'use strict';

  var canvas = document.getElementById('gl');
  var veil = document.getElementById('veil');
  var ring = document.getElementById('cursor-ring');
  var statsEl = document.getElementById('hero-stats');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 首页统计 */
  (function fillStats() {
    if (!statsEl) return;
    var data = window.BAL_DATA;
    if (!data || !data.stats) { statsEl.textContent = ''; return; }
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var words = Number(data.stats.words || 0).toLocaleString('en-US');
    statsEl.innerHTML = '<b>' + pad(data.stats.brands) + '</b> BRANDS &nbsp;·&nbsp; <b>' +
      pad(data.stats.categories) + '</b> CATEGORIES &nbsp;·&nbsp; <b>' + words + '</b> WORDS';
  })();

  /* ---------------------------------------------------------------- */
  /* WebGL 光效                                                        */
  /* ---------------------------------------------------------------- */

  var VERT = [
    'attribute vec2 a_pos;',
    'void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }',
  ].join('\n');

  var FRAG = [
    'precision highp float;',
    'uniform vec2 u_res;',
    'uniform float u_time;',
    'uniform vec2 u_mouse;',
    'uniform float u_speed;',
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
    '  float t = u_time * 0.05;',
    '',
    '  float n1 = fbm(p * 1.5 + vec2(t * 0.9, -t * 0.7));',
    '  float n2 = fbm(p * 3.2 + vec2(-t * 0.5, t * 0.6) + n1 * 0.9);',
    '',
    '  vec3 col = mix(vec3(0.022, 0.025, 0.031), vec3(0.060, 0.068, 0.084), n2);',
    '',
    '  float axis = p.x * 0.55 + p.y * 0.42;',
    '  float beam = smoothstep(0.42, 0.0, abs(axis - (n1 - 0.5) * 0.7));',
    '  col += vec3(0.10, 0.13, 0.19) * beam * (0.55 + 0.45 * sin(u_time * 0.18));',
    '',
    '  float axis2 = p.x * -0.35 + p.y * 0.60;',
    '  float beam2 = smoothstep(0.30, 0.0, abs(axis2 - 0.12 + (n2 - 0.5) * 0.5));',
    '  col += vec3(0.07, 0.09, 0.13) * beam2 * 0.85;',
    '',
    '  float d = length(p - mp);',
    '  float speed = clamp(u_speed, 0.0, 1.5);',
    '  col += vec3(0.42, 0.50, 0.66) * exp(-d * 3.4) * (0.16 + 0.50 * speed);',
    '  float rings = sin(d * 26.0 - u_time * 2.2) * exp(-d * 3.6);',
    '  col += vec3(0.30, 0.36, 0.48) * rings * (0.10 + 0.45 * speed);',
    '',
    '  if (u_click > 0.0) {',
    '    float cd = length(p - (u_clickPos - 0.5 * u_res) / m);',
    '    float radius = u_click * 1.25;',
    '    col += vec3(0.85, 0.90, 1.00) * exp(-abs(cd - radius) * 12.0) * (1.0 - u_click) * 0.60;',
    '    col += vec3(0.50) * smoothstep(radius, radius - 0.35, cd) * (1.0 - u_click) * 0.16;',
    '  }',
    '',
    '  float vig = 1.0 - 0.75 * pow(clamp(length(p) * 0.82, 0.0, 1.0), 2.0);',
    '  col *= vig;',
    '  col += (hash(gl_FragCoord.xy + fract(u_time) * 37.0) - 0.5) * 0.022;',
    '',
    '  gl_FragColor = vec4(col, 1.0);',
    '}',
  ].join('\n');

  var glState = null;

  function compile(gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      gl.deleteShader(sh);
      return null;
    }
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
      uSpeed: gl.getUniformLocation(prog, 'u_speed'),
      uClick: gl.getUniformLocation(prog, 'u_click'),
      uClickPos: gl.getUniformLocation(prog, 'u_click_pos') || gl.getUniformLocation(prog, 'u_clickPos'),
    };
  }

  var mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, speed: 0 };
  var click = { active: false, start: 0, x: 0.5, y: 0.5 };
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
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
    if (!glState) return;
    var gl = glState.gl;
    var now = performance.now();

    mouse.x += (mouse.tx - mouse.x) * 0.09;
    mouse.y += (mouse.ty - mouse.y) * 0.09;
    mouse.speed *= 0.94;

    var clickProgress = 0;
    if (click.active) {
      clickProgress = Math.min((now - click.start) / 620, 1);
    }

    gl.uniform2f(glState.uRes, canvas.width, canvas.height);
    gl.uniform1f(glState.uTime, (now - startTime) / 1000);
    gl.uniform2f(glState.uMouse, mouse.x * canvas.width, (1 - mouse.y) * canvas.height);
    gl.uniform1f(glState.uSpeed, mouse.speed);
    gl.uniform1f(glState.uClick, clickProgress);
    gl.uniform2f(glState.uClickPos, click.x * canvas.width, (1 - click.y) * canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  resize();
  window.addEventListener('resize', resize);

  if (!reduceMotion) {
    glState = initGL();
  }
  if (!glState) {
    document.body.classList.add('no-gl');
    if (canvas) canvas.style.display = 'none';
  } else {
    requestAnimationFrame(frame);
  }

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
    mouse.speed = Math.min(1.5, mouse.speed + Math.abs(n.x - mouse.tx) + Math.abs(n.y - mouse.ty)) * 6;
    mouse.tx = n.x;
    mouse.ty = n.y;
    if (ring) {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
      ring.style.transform = 'scale(' + (1 + Math.min(mouse.speed, 1) * 0.6) + ')';
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
