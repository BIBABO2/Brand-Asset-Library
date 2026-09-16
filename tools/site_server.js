'use strict';

/**
 * 本地站点服务（含品牌资料编辑接口）：
 *   node tools/site_server.js [端口] [--no-open]
 *
 * 静态托管仓库根目录：index.html / board.html / reports / assets / data / 各媒体目录。
 * 仅在 127.0.0.1 上提供编辑接口，发布到 GitHub Pages 后编辑入口自动隐藏。
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const core = require('./lib/site_core.js');
const buildSite = require('./build_site.js');

const ROOT = core.ROOT;
const args = process.argv.slice(2);
const noOpen = args.indexOf('--no-open') > -1;
const portArg = args.filter(a => /^\d+$/.test(a))[0];
const PORT = Number(portArg || process.env.BAL_PORT || 8787);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

const CATEGORY_COLOR_POOL = [
  { bg: '#E8EAF2', fg: '#4A5378' },
  { bg: '#FDECE1', fg: '#8A5230' },
  { bg: '#E7F2EC', fg: '#356A55' },
  { bg: '#F3E8F6', fg: '#6A3D7C' },
  { bg: '#FBF3DC', fg: '#7C6520' },
  { bg: '#E9F1FA', fg: '#2F5F8A' },
];

function slugifyId(name) {
  const base = String(name).trim().toLowerCase()
    .replace(/[\s\/]+/g, '-')
    .replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || ('cat-' + Date.now().toString(36));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 1e6) reject(new Error('请求体过大'));
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try { resolve(JSON.parse(data)); } catch (err) { reject(new Error('请求不是合法 JSON')); }
    });
    req.on('error', reject);
  });
}

function send(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function handleCategory(payload) {
  const data = core.loadBrands();
  const action = payload.action;

  if (action === 'create') {
    const name = String(payload.name || '').trim();
    if (!name) throw new Error('分类名称不能为空');
    if (data.categories.some(c => c.name === name)) throw new Error('已存在同名分类');
    const id = slugifyId(name);
    if (data.categories.some(c => c.id === id)) throw new Error('分类标识重复，请换一个名称');
    const color = CATEGORY_COLOR_POOL[data.categories.length % CATEGORY_COLOR_POOL.length];
    data.categories.push({ id, name, bg: color.bg, fg: color.fg });
  } else if (action === 'rename') {
    const cat = data.categories.find(c => c.id === payload.id);
    if (!cat) throw new Error('未找到该分类');
    const name = String(payload.name || '').trim();
    if (!name) throw new Error('分类名称不能为空');
    cat.name = name;
  } else if (action === 'delete') {
    const index = data.categories.findIndex(c => c.id === payload.id);
    if (index === -1) throw new Error('未找到该分类');
    const reassignTo = payload.reassignTo || '';
    data.categories.splice(index, 1);
    data.brands.forEach(brand => {
      const ids = brand.categories || [];
      if (ids.indexOf(payload.id) === -1) return;
      const rest = ids.filter(id => id !== payload.id);
      brand.categories = reassignTo && rest.indexOf(reassignTo) === -1 ? rest.concat([reassignTo]) : rest;
    });
  } else if (action === 'reorder') {
    const order = payload.order || [];
    const map = new Map(data.categories.map(c => [c.id, c]));
    const next = order.map(id => map.get(id)).filter(Boolean);
    data.categories.forEach(c => { if (!order.includes(c.id)) next.push(c); });
    data.categories = next;
  } else {
    throw new Error('未知操作：' + action);
  }

  data.updatedAt = core.formatDate(new Date());
  core.writeBrands(data);
  buildSite.build();
  return { ok: true };
}

function handleBrand(payload) {
  const data = core.loadBrands();
  const brand = (data.brands || []).find(b => b.slug === payload.slug);
  if (!brand) throw new Error('未找到该品牌：' + payload.slug);
  const patch = payload.patch || {};
  const validIds = new Set(data.categories.map(c => c.id));
  if (typeof patch.name === 'string' && patch.name.trim()) brand.name = patch.name.trim();
  if (typeof patch.nameCn === 'string') brand.nameCn = patch.nameCn.trim();
  if (typeof patch.website === 'string') brand.website = patch.website.trim();
  if (typeof patch.tagline === 'string') brand.tagline = patch.tagline.trim();
  if (Array.isArray(patch.categories)) {
    brand.categories = patch.categories.filter(id => validIds.has(id));
  }
  data.updatedAt = core.formatDate(new Date());
  core.writeBrands(data);
  buildSite.build();
  return { ok: true };
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
  const target = path.resolve(ROOT, '.' + urlPath);
  if (!target.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  fs.stat(target, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found: ' + urlPath);
    }
    const ext = path.extname(target).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Cache-Control': 'no-cache',
    });
    fs.createReadStream(target).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  if (req.url.split('?')[0] === '/api/health') return send(res, 200, { ok: true, mode: 'local' });
  if (req.url.indexOf('/api/') === 0) {
    if (req.method !== 'POST') return send(res, 405, { error: '仅支持 POST' });
    return readBody(req)
      .then(payload => {
        const result = req.url.indexOf('/api/category') === 0 ? handleCategory(payload) : handleBrand(payload);
        send(res, 200, result);
        console.log('✓ 已保存并重建：' + req.url);
      })
      .catch(err => {
        console.error('✗ ' + req.url + ' ' + err.message);
        send(res, 400, { error: err.message });
      });
  }
  return serveStatic(req, res);
});

server.listen(PORT, '127.0.0.1', () => {
  const url = 'http://127.0.0.1:' + PORT + '/index.html';
  console.log('品牌资产库网站已启动：' + url);
  console.log('看板：http://127.0.0.1:' + PORT + '/board.html　　按 Ctrl+C 停止');
  if (!noOpen && process.platform === 'win32') {
    try {
      spawn('cmd', ['/c', 'start', '', 'http://127.0.0.1:' + PORT + '/index.html'], { detached: true, stdio: 'ignore' }).unref();
    } catch (err) { /* 打开浏览器失败不影响服务 */ }
  }
});
