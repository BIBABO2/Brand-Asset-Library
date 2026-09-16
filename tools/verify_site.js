'use strict';

/**
 * 站点验收：
 *   node tools/verify_site.js [--screenshots <输出目录>] [--no-browser]
 *
 * 1. 静态校验：报告 ↔ 数据 ↔ 阅读页 ↔ 搜索索引 是否一致、图片是否存在、有无本机绝对路径
 * 2. 浏览器校验（如本机可用）：加载各页面，收集控制台错误与 404，并生成验收截图
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const core = require('./lib/site_core.js');

const ROOT = core.ROOT;
const argv = process.argv.slice(2);
const noBrowser = argv.indexOf('--no-browser') > -1;
const shotIndex = argv.indexOf('--screenshots');
const shotDir = path.resolve(shotIndex > -1 ? argv[shotIndex + 1]
  : path.join(ROOT, '..', '..', '..', 'Codex', 'visualizations', '2026', '09', '16', 'site-verify'));

const problems = [];
const notes = [];

function ok(msg) { console.log('  ✓ ' + msg); }
function bad(msg) { problems.push(msg); console.log('  ✗ ' + msg); }
function note(msg) { notes.push(msg); console.log('  · ' + msg); }

function readJsonAfter(content, marker) {
  const start = content.indexOf(marker);
  if (start === -1) return null;
  const from = start + marker.length;
  const end = content.lastIndexOf(';');
  const raw = content.slice(from, end).trim();
  try { return JSON.parse(raw); } catch (err) { return null; }
}

/* ---------------------------------------------------------------- */
/* 静态校验                                                          */
/* ---------------------------------------------------------------- */

function staticChecks() {
  console.log('\n[1/2] 静态校验');

  if (!fs.existsSync(core.BRANDS_FILE)) { bad('缺少 data/brands.json'); return null; }
  const brands = JSON.parse(fs.readFileSync(core.BRANDS_FILE, 'utf8'));
  ok('data/brands.json 可解析（' + brands.brands.length + ' 个品牌、' + brands.categories.length + ' 个分类）');

  const reports = core.latestPerBrand(core.scanReports(ROOT));
  const reportSlugs = new Set(reports.map(r => r.slug));
  reports.forEach(r => {
    if (!brands.brands.some(b => b.slug === r.slug)) bad('报告缺少品牌条目：' + r.file);
  });
  brands.brands.forEach(b => {
    if (!reportSlugs.has(b.slug)) bad('brands.json 中的品牌没有对应报告：' + b.name);
    if (!b.report || !fs.existsSync(path.join(ROOT, b.report))) bad('报告文件不存在：' + b.name + ' → ' + b.report);
    if (b.logo && !fs.existsSync(path.join(ROOT, b.logo))) bad('Logo 文件不存在：' + b.logo);
  });
  ok('报告与品牌条目一一对应');

  const libraryRaw = fs.readFileSync(path.join(core.DATA_DIR, 'library.js'), 'utf8');
  const library = readJsonAfter(libraryRaw, 'window.BAL_DATA = ');
  if (!library) bad('data/library.js 无法解析');
  else {
    if (library.brands.length !== brands.brands.length) bad('library.js 品牌数量与 brands.json 不一致');
    library.brands.forEach(b => {
      if (!b.name || !b.slug) bad('library.js 品牌字段缺失：' + b.slug);
      if (!b.updatedAt) bad('library.js 缺少更新时间：' + b.slug);
    });
    if (!library.stats || !library.stats.brands) bad('library.js 缺少统计信息');
    ok('data/library.js 与数据源一致（' + library.brands.length + ' 个品牌）');
  }

  const manifest = readJsonAfter(fs.readFileSync(path.join(core.SEARCH_DIR, 'manifest.js'), 'utf8'), 'window.BAL_SEARCH_MANIFEST = ');
  if (!manifest) bad('搜索索引清单无法解析');
  else {
    const expected = brands.brands.map(b => b.slug).sort();
    const actual = manifest.slice().sort();
    if (expected.join('|') !== actual.join('|')) bad('搜索索引清单与品牌列表不一致：' + actual.join(', '));
    else ok('搜索索引清单完整（' + manifest.length + ' 篇）');
  }

  let checkedImages = 0;
  let checkedAnchors = 0;
  brands.brands.forEach(b => {
    const htmlPath = path.join(core.REPORTS_DIR, b.slug + '.html');
    if (!fs.existsSync(htmlPath)) { bad('缺少阅读页：reports/' + b.slug + '.html'); return; }
    const html = fs.readFileSync(htmlPath, 'utf8');
    if (/[A-Za-z]:\\|file:\/\/\//.test(html)) bad('阅读页含本机绝对路径：' + b.slug);
    if (html.indexOf('更新于') === -1) bad('阅读页缺少更新时间：' + b.slug);
    if (b.report && html.indexOf(b.report) > -1) bad('阅读页显示了报告版本文件名：' + b.slug);

    const ids = new Set();
    const idRe = /<h[1-3] id="([^"]+)"/g;
    let m;
    while ((m = idRe.exec(html)) !== null) ids.add(m[1]);

    const searchPath = path.join(core.SEARCH_DIR, b.slug + '.js');
    if (!fs.existsSync(searchPath)) { bad('缺少搜索索引：' + b.slug); return; }
    const pack = readJsonAfter(fs.readFileSync(searchPath, 'utf8'),
      'window.BAL_SEARCH[' + JSON.stringify(b.slug) + '] = ');
    if (!pack) { bad('搜索索引无法解析：' + b.slug); return; }
    pack.sections.forEach(sec => {
      if (!ids.has(sec.anchor)) bad('搜索锚点在阅读页中不存在：' + b.slug + ' → ' + sec.anchor);
      checkedAnchors += 1;
    });

    const imgRe = /src="([^"]+)"/g;
    while ((m = imgRe.exec(html)) !== null) {
      const src = m[1];
      if (/^(https?:|data:)/.test(src)) continue;
      if (!fs.existsSync(path.resolve(core.REPORTS_DIR, src))) bad('阅读页图片缺失：' + b.slug + ' → ' + src);
      checkedImages += 1;
    }
  });
  ok('阅读页锚点与搜索索引一致（' + checkedAnchors + ' 个片段）');
  ok('阅读页图片全部存在（' + checkedImages + ' 张）');

  [path.join(ROOT, 'index.html'), path.join(ROOT, 'board.html')].forEach(file => {
    if (!fs.existsSync(file)) bad('缺少页面：' + path.basename(file));
    else {
      const html = fs.readFileSync(file, 'utf8');
      if (/[A-Za-z]:\\|file:\/\/\//.test(html)) bad('页面含本机绝对路径：' + path.basename(file));
    }
  });
  const assetsOk = ['home.js', 'home.css', 'board.js', 'site.css', 'report.js']
    .every(f => fs.existsSync(path.join(ROOT, 'assets', f)));
  if (!assetsOk) bad('缺少前端资源文件');
  else ok('页面与前端资源齐备');

  return brands;
}

/* ---------------------------------------------------------------- */
/* 浏览器校验                                                        */
/* ---------------------------------------------------------------- */

function findBrowserExecutable() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  return candidates.find(p => fs.existsSync(p)) || '';
}

function waitForServer(port, tries) {
  return new Promise((resolve, reject) => {
    const attempt = n => {
      http.get({ host: '127.0.0.1', port: port, path: '/api/health' }, res => {
        res.resume();
        if (res.statusCode === 200) resolve(true);
        else if (n <= 0) reject(new Error('本地服务未就绪'));
        else setTimeout(() => attempt(n - 1), 250);
      }).on('error', () => {
        if (n <= 0) reject(new Error('本地服务未就绪'));
        else setTimeout(() => attempt(n - 1), 250);
      });
    };
    attempt(tries);
  });
}

async function browserChecks(brands) {
  console.log('\n[2/2] 浏览器校验');
  if (noBrowser) { note('已跳过浏览器校验（--no-browser）'); return; }

  let playwright;
  try {
    playwright = core.loadRuntimeModule('playwright');
  } catch (err) {
    note('未找到 Playwright，跳过浏览器校验（静态校验已完成）。');
    return;
  }
  const executablePath = findBrowserExecutable();
  if (!executablePath) { note('未找到 Chrome/Edge，跳过浏览器校验。'); return; }

  const port = 8791;
  const server = spawn(process.execPath, [path.join(__dirname, 'site_server.js'), String(port), '--no-open'], {
    cwd: ROOT, stdio: 'ignore',
  });

  const shots = [];
  let browser;
  try {
    await waitForServer(port, 40);
    browser = await playwright.chromium.launch({ executablePath: executablePath, headless: true });
    fs.mkdirSync(shotDir, { recursive: true });
    const base = 'http://127.0.0.1:' + port + '/';

    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push('console: ' + msg.text()); });
    page.on('pageerror', err => errors.push('pageerror: ' + err.message));
    page.on('requestfailed', req => errors.push('requestfailed: ' + req.url() + ' ' + ((req.failure() || {}).errorText || '')));
    page.on('response', res => { if (res.status() >= 400) errors.push('http ' + res.status() + ': ' + res.url()); });

    const visit = async (urlPath, waitMs, name) => {
      const before = errors.length;
      await page.goto(base + urlPath, { waitUntil: 'load' });
      await page.waitForTimeout(waitMs || 500);
      const shot = path.join(shotDir, name + '.png');
      await page.screenshot({ path: shot });
      shots.push(shot);
      const fresh = errors.slice(before);
      if (fresh.length) bad('页面报错（' + urlPath + '）：' + fresh.slice(0, 3).join(' | '));
      else ok('页面无报错：' + urlPath);
    };

    await visit('index.html', 1400, '01-home');
    await visit('board.html', 1100, '02-gallery');
    await visit('board.html?view=list', 900, '03-list');
    await visit('board.html?view=board', 900, '04-kanban');

    await page.goto(base + 'board.html', { waitUntil: 'load' });
    await page.click('#search-open');
    await page.fill('#search-input', '决策链');
    await page.waitForSelector('.result', { timeout: 8000 });
    await page.waitForTimeout(400);
    const searchShot = path.join(shotDir, '05-search.png');
    await page.screenshot({ path: searchShot });
    shots.push(searchShot);
    const groups = await page.$$eval('.result-group-title', els => els.map(e => e.textContent.trim()));
    if (!groups.length) bad('全局搜索没有返回分组结果'); else ok('全局搜索返回分组：' + groups.join(' / '));

    const firstContentResult = await page.$$eval('.result', els => {
      const target = els.find(e => (e.getAttribute('href') || '').indexOf('?h=') > -1);
      return target ? target.getAttribute('href') : '';
    });
    if (!firstContentResult) bad('全局搜索缺少内容类结果');
    else {
      await page.goto(base + firstContentResult, { waitUntil: 'load' });
      await page.waitForTimeout(900);
      const hits = await page.$$eval('mark.hit', els => els.length);
      if (!hits) bad('内容跳转后没有高亮命中：' + firstContentResult);
      else ok('内容跳转并高亮命中 ' + hits + ' 处');
      const shot = path.join(shotDir, '06-report-highlight.png');
      await page.screenshot({ path: shot });
      shots.push(shot);
    }

    for (const brand of brands.brands) {
      const before = errors.length;
      await page.goto(base + 'reports/' + brand.slug + '.html', { waitUntil: 'load' });
      await page.waitForTimeout(800);
      const shot = path.join(shotDir, '07-report-' + brand.slug + '.png');
      await page.screenshot({ path: shot });
      shots.push(shot);
      const fresh = errors.slice(before);
      if (fresh.length) bad('阅读页报错（' + brand.slug + '）：' + fresh.slice(0, 3).join(' | '));
      else ok('阅读页无报错：' + brand.name);
    }

    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    const mpage = await mobile.newPage();
    await mpage.goto(base + 'board.html', { waitUntil: 'load' });
    await mpage.waitForTimeout(900);
    const mShot = path.join(shotDir, '08-mobile-gallery.png');
    await mpage.screenshot({ path: mShot });
    shots.push(mShot);
    await mpage.goto(base + 'reports/' + brands.brands[0].slug + '.html', { waitUntil: 'load' });
    await mpage.waitForTimeout(700);
    const mShot2 = path.join(shotDir, '09-mobile-report.png');
    await mpage.screenshot({ path: mShot2 });
    shots.push(mShot2);
    ok('移动端宽度（390px）页面可渲染');

    await context.close();
    await mobile.close();
  } catch (err) {
    bad('浏览器校验异常：' + err.message);
  } finally {
    if (browser) await browser.close().catch(() => {});
    server.kill();
  }

  if (shots.length) note('验收截图目录：' + shotDir + '（' + shots.length + ' 张）');
}

(async function main() {
  const brands = staticChecks();
  if (brands) await browserChecks(brands);
  console.log('\n' + (problems.length ? '校验未通过（' + problems.length + ' 项）' : '校验通过'));
  if (problems.length) {
    problems.forEach(p => console.log('   - ' + p));
    process.exitCode = 1;
  }
})();
