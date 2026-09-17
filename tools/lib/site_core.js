'use strict';

/**
 * 站点共享核心：报告扫描、Markdown 解析、锚点规则、数据读写。
 * 锚点（heading id）规则与根目录 build_html_report.js 完全一致，
 * 以保证站内阅读页、搜索结果与单文件 HTML / Markdown 目录的跳转一致。
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA_DIR = path.join(ROOT, 'data');
const BRANDS_FILE = path.join(DATA_DIR, 'brands.json');
const SEARCH_DIR = path.join(DATA_DIR, 'search');
const REPORTS_DIR = path.join(ROOT, 'reports');

/* ------------------------------------------------------------------ */
/* 运行库加载（marked / playwright 等由 Codex 运行环境自带）            */
/* ------------------------------------------------------------------ */

function runtimeModuleRoots() {
  const roots = [];
  if (process.env.CODEX_RUNTIME_DEPS) roots.push(process.env.CODEX_RUNTIME_DEPS);
  const home = process.env.USERPROFILE || process.env.HOME || '';
  const base = home ? path.join(home, '.cache', 'codex-runtimes') : '';
  if (base && fs.existsSync(base)) {
    for (const dir of fs.readdirSync(base)) {
      roots.push(path.join(base, dir, 'dependencies', 'node', 'node_modules'));
    }
  }
  roots.push('C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules');
  roots.push(path.join(ROOT, 'node_modules'));
  return roots;
}

function loadRuntimeModule(name) {
  try {
    return require(name);
  } catch (err) {
    /* 继续在运行环境目录中查找 */
  }
  for (const root of runtimeModuleRoots()) {
    const candidate = path.join(root, name);
    if (fs.existsSync(candidate)) return require(candidate);
  }
  throw new Error('未找到运行库：' + name);
}

function getMarked() {
  return loadRuntimeModule('marked');
}

/* ------------------------------------------------------------------ */
/* 锚点规则（与 build_html_report.js 保持一致，勿单独修改）             */
/* ------------------------------------------------------------------ */

function createSlugger() {
  const usedIds = {};
  return function slugify(text) {
    let s = String(text).toLowerCase()
      .replace(/[`*_~\[\](){}<>#!+.,:;'"“”‘’《》「」『』、，。；：！？（）【】·|/@$%^&=\\]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    if (usedIds[s] !== undefined) { usedIds[s] += 1; s = s + '-' + usedIds[s]; } else { usedIds[s] = 0; }
    return s;
  };
}

/* ------------------------------------------------------------------ */
/* 报告扫描                                                             */
/* ------------------------------------------------------------------ */

const REPORT_RE = /^ABOUT_(.+?)_v(\d+)\.md$/i;

function scanReports(root) {
  const base = root || ROOT;
  const found = [];
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const m = REPORT_RE.exec(entry.name);
    if (!m) continue;
    const full = path.join(base, entry.name);
    const stat = fs.statSync(full);
    found.push({
      file: entry.name,
      absPath: full,
      brandKey: m[1],
      slug: slugFromBrandKey(m[1]),
      version: Number(m[2]),
      mtime: stat.mtime,
      updatedAt: formatDate(stat.mtime),
    });
  }
  return found;
}

/** 每个品牌只保留最新版：版本号最大者优先，同版本号取文件更新时间最新者。 */
function latestPerBrand(reports) {
  const map = new Map();
  for (const r of reports) {
    const prev = map.get(r.brandKey.toUpperCase());
    if (!prev || r.version > prev.version || (r.version === prev.version && r.mtime > prev.mtime)) {
      map.set(r.brandKey.toUpperCase(), r);
    }
  }
  return Array.from(map.values()).sort((a, b) => a.brandKey.localeCompare(b.brandKey, 'en'));
}

function slugFromBrandKey(key) {
  return String(key).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function formatDate(d) {
  const dt = d instanceof Date ? d : new Date(d);
  const p = n => String(n).padStart(2, '0');
  return dt.getFullYear() + '-' + p(dt.getMonth() + 1) + '-' + p(dt.getDate());
}

/* ------------------------------------------------------------------ */
/* 报告元数据抽取                                                       */
/* ------------------------------------------------------------------ */

function extractReportMeta(md, report) {
  const h1 = (/^#\s+(.+)$/m.exec(md) || [])[1] || ('ABOUT ' + report.brandKey);
  const aboutName = h1.replace(/^ABOUT\s+/i, '').trim();
  const name = titleCase(aboutName || report.brandKey.replace(/_/g, ' '));

  let nameCn = '';
  let website = '';
  const brandRow = /^\|\s*品牌名\s*\|([^\n]*)\|/m.exec(md);
  if (brandRow) {
    const cell = brandRow[1];
    const urlMatch = /https?:\/\/[^\s)\]，。]+/.exec(cell);
    if (urlMatch) website = urlMatch[0].replace(/[),.。]+$/, '');
    const cnMatch = /[（(]([^（()）]{1,12})[）)]/.exec(cell);
    if (cnMatch && !/^https?:/.test(cnMatch[1])) nameCn = cnMatch[1];
  }
  if (!website) {
    const anyUrl = /https?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s)\]，。"'<>]*/i.exec(md);
    if (anyUrl) website = anyUrl[0].replace(/[),.。]+$/, '');
  }

  const tagline = extractTagline(md);
  return { name, nameCn, website, tagline, h1: h1.trim() };
}

/** 取「02 品牌概述」定位段的第一句，过长时在逗号处收短。 */
function extractTagline(md) {
  const lines = md.split(/\r?\n/);
  let inOverview = false;
  const buf = [];
  for (const line of lines) {
    if (/^##\s+02\s/.test(line.trim())) { inOverview = true; continue; }
    if (inOverview) {
      if (/^##\s/.test(line.trim())) break;
      const t = line.trim();
      if (!t) { if (buf.length) break; continue; }
      if (t.startsWith('|') || t.startsWith('![') || t.startsWith('*图') || t.startsWith('###')) continue;
      buf.push(t);
      if (buf.join('').length > 120) break;
    }
  }
  let text = cleanMarkdown(buf.join(' ')).trim();
  if (!text) return '';
  const stop = text.search(/[。！？]/);
  if (stop > -1) text = text.slice(0, stop);
  if (text.length > 46) {
    const cut = text.search(/[，；]/);
    if (cut > 7) text = text.slice(0, cut);
  }
  if (text.length > 46) text = text.slice(0, 46) + '…';
  text = text.replace(/^[，、；:：\s]+/, '').replace(/[，、；:：\s]+$/, '');
  return text;
}

function titleCase(s) {
  return String(s).split(/\s+/).map(w => {
    if (/^[A-Z0-9&.'-]{2,}$/.test(w)) {
      return w.charAt(0) + w.slice(1).toLowerCase();
    }
    if (/^[A-Za-z]/.test(w)) return w.charAt(0).toUpperCase() + w.slice(1);
    return w;
  }).join(' ');
}

function letterOf(name) {
  const m = /[A-Za-z]/.exec(String(name));
  return m ? m[0].toUpperCase() : '#';
}

/* ------------------------------------------------------------------ */
/* 媒体与 Logo                                                          */
/* ------------------------------------------------------------------ */

function mediaDirFor(brandKey) {
  return 'ABOUT_' + brandKey + '_media';
}

function findLogo(brandKey) {
  const dir = path.join(ROOT, mediaDirFor(brandKey));
  if (!fs.existsSync(dir)) return '';
  const files = fs.readdirSync(dir).filter(f => /^logo[_\-.\s]/i.test(f) && /\.(png|jpe?g|webp|svg)$/i.test(f));
  if (!files.length) return '';
  files.sort((a, b) => a.length - b.length || a.localeCompare(b));
  return mediaDirFor(brandKey) + '/' + files[0];
}

function listMedia(brandKey) {
  const dir = path.join(ROOT, mediaDirFor(brandKey));
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => /\.(png|jpe?g|webp|svg)$/i.test(f));
}

/* ------------------------------------------------------------------ */
/* Markdown → HTML（站内阅读页）                                        */
/* ------------------------------------------------------------------ */

function markdownToArticleHtml(md, opts) {
  const options = opts || {};
  const marked = getMarked();
  const slugify = createSlugger();
  let body = marked.parse(md, { gfm: true, breaks: false });

  body = body.replace(/<h([1-3])>([\s\S]*?)<\/h\1>/g, (m, lvl, inner) => {
    const text = inner.replace(/<[^>]+>/g, '');
    return '<h' + lvl + ' id="' + slugify(text) + '">' + inner + '</h' + lvl + '>';
  });

  // 目录：由 H2 自动生成两列折叠面板，并移除手工维护的目录块
  const entries = [];
  const headingRe = /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g;
  let hm;
  while ((hm = headingRe.exec(body)) !== null) {
    entries.push({ id: hm[1], text: hm[2].replace(/<[^>]+>/g, '') });
  }
  const firstH2 = body.indexOf('<h2');
  if (firstH2 > -1 && entries.length) {
    let head = body.slice(0, firstH2);
    const tail = body.slice(firstH2);
    head = head.replace(/<table>[\s\S]*?<\/table>\s*$/, '');
    head = head.replace(/<ol>[\s\S]*?<\/ol>\s*$/, '');
    head = head.replace(/<p>\s*(\*\*)?目录(\*\*)?\s*<\/p>\s*$/, '');
    const half = Math.ceil(entries.length / 2);
    const renderCol = arr => arr.map(e => '<a href="#' + e.id + '">' + e.text + '</a>').join('');
    const tocHtml = '<details class="toc" open><summary>目录</summary><div class="toc-grid">' +
      '<div class="toc-col">' + renderCol(entries.slice(0, half)) + '</div>' +
      '<div class="toc-col">' + renderCol(entries.slice(half)) + '</div>' +
      '</div></details>\n';
    body = head + tocHtml + tail;
  }

  // 图片：改写为站点相对路径 + 懒加载
  const mediaDir = options.mediaDir || '';
  body = body.replace(/<img([^>]*?)src="([^"]+)"([^>]*?)>/g, (m, pre, src, post) => {
    if (/^(https?:|data:)/i.test(src)) return m;
    let target = src;
    if (mediaDir && !src.startsWith('../')) target = '../' + src;
    const attrs = (pre + ' ' + post).replace(/\s+/g, ' ');
    const keep = [];
    if (!/\bloading=/.test(attrs)) keep.push('loading="lazy"');
    if (!/\bdecoding=/.test(attrs)) keep.push('decoding="async"');
    return '<img' + (pre || '') + ' src="' + target + '"' + (post || '') + (keep.length ? ' ' + keep.join(' ') : '') + '>';
  });
  body = body.replace(/\bsrc="(?!https?:|data:|\.\.\/)([^"]+)"/g, (m, src) => {
    return mediaDir ? 'src="../' + src + '"' : m;
  });

  return body;
}

/* ------------------------------------------------------------------ */
/* 搜索索引：按 H2 / H3 切分                                            */
/* ------------------------------------------------------------------ */

function splitSections(md) {
  const lines = md.split(/\r?\n/);
  const slugify = createSlugger();
  const sections = [];
  let h2 = null;
  let h3 = null;
  let buf = [];
  let started = false;

  const flush = () => {
    if (!started) { buf = []; return; }
    const text = cleanMarkdown(buf.join('\n')).replace(/\s+/g, ' ').trim();
    buf = [];
    if (!text || text.length < 12) return;
    const current = h3 || h2;
    if (!current) return;
    sections.push({
      anchor: current.id,
      level: h3 ? 3 : 2,
      section: h2 ? h2.title : '',
      title: h3 ? h3.title : (h2 ? h2.title : ''),
      text: text.slice(0, 6000),
    });
  };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    const m2 = /^##\s+(?!#)(.+)$/.exec(line);
    const m3 = /^###\s+(.+)$/.exec(line);
    const m1 = /^#\s+(.+)$/.exec(line);
    if (m3) {
      flush();
      h3 = { title: m3[1].trim(), id: headingIdOf(m3[1].trim(), slugify) };
      started = true;
      continue;
    }
    if (m2) {
      flush();
      h2 = { title: m2[1].trim(), id: headingIdOf(m2[1].trim(), slugify) };
      h3 = null;
      started = true;
      continue;
    }
    if (m1) {
      headingIdOf(m1[1].trim(), slugify); // 与阅读页保持同样的重复标题计数
      continue;
    }
    if (started) buf.push(line);
  }
  flush();
  return sections;
}

function escapeHeadingText(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** 与阅读页一致：标题先按 marked 的转义规则处理，再套用同一套 slug 规则 */
function headingIdOf(title, slugify) {
  return slugify(escapeHeadingText(title));
}

function cleanMarkdown(text) {
  return String(text)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/\|/g, ' ')
    .replace(/^\s*:?-{2,}:?\s*$/gm, ' ')
    .replace(/[`*_~]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

/* ------------------------------------------------------------------ */
/* 数据读写                                                            */
/* ------------------------------------------------------------------ */

const DEFAULT_CATEGORIES = [
  { id: 'tools-industry', name: '工具/工业', bg: '#ECECEE', fg: '#4A4A52' },
  { id: 'home-furniture-lifestyle', name: '家居/家具/生活方式', bg: '#E2F1E7', fg: '#2E6B4C' },
  { id: 'tech-products', name: '科技产品', bg: '#E1EDF9', fg: '#2C5F86' },
  { id: 'kitchen-appliance', name: '厨房/家电', bg: '#F7E3E7', fg: '#8C3A52' },
  { id: 'vehicle', name: '交通工具', bg: '#EDEDEF', fg: '#55555C' },
  { id: 'parts', name: '配件', bg: '#F1E7DC', fg: '#7A5B3A' },
  { id: 'watch-mechanics', name: '腕表/机械', bg: '#EBE4F7', fg: '#5B459C' },
  { id: 'bathroom', name: '卫浴', bg: '#F6F0D9', fg: '#7A6A22' },
  { id: 'hardware', name: '五金', bg: '#EAEAEC', fg: '#52525A' },
  { id: 'apparel-bags', name: '服饰箱包', bg: '#F9E3EA', fg: '#8E3B5C' },
  { id: 'consumer-electronics', name: '消费电子', bg: '#E1EDF9', fg: '#2E5F8A' },
  { id: 'medical-personal-care', name: '医疗/个护', bg: '#FBE3E7', fg: '#93384E' },
  { id: 'audio-visual', name: '影音设备', bg: '#F8E2DF', fg: '#8C3A31' },
  { id: 'lighting', name: '照明', bg: '#E1F0E4', fg: '#2F6B4A' },
  { id: 'smart-home', name: '智能家居', bg: '#E2ECF8', fg: '#2B5F8C' },
];

function seedBrands() {
  return {
    version: 1,
    updatedAt: formatDate(new Date()),
    categories: DEFAULT_CATEGORIES.map(c => ({ ...c })),
    brands: [
      {
        slug: 'gaggenau',
        name: 'Gaggenau',
        nameCn: '嘉格纳',
        website: 'https://www.gaggenau.com',
        tagline: '德国超高端嵌入式厨电品牌，隶属博西家电',
        categories: ['kitchen-appliance'],
        aliases: ['嘉格纳', 'Gaggenau'],
      },
      {
        slug: 'oikos',
        name: 'Oikos',
        nameCn: 'Oikos Venezia',
        website: 'https://oikos.it',
        tagline: '意大利高端装甲入户门制造商，把门做成入口建筑',
        categories: ['home-furniture-lifestyle'],
        aliases: ['Oikos Venezia', '奥克斯门业'],
      },
    ],
  };
}

function loadBrands() {
  if (!fs.existsSync(BRANDS_FILE)) {
    const seed = seedBrands();
    writeBrands(seed);
    return seed;
  }
  return JSON.parse(fs.readFileSync(BRANDS_FILE, 'utf8'));
}

function writeBrands(data) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const clean = {
    version: data.version || 1,
    updatedAt: data.updatedAt || formatDate(new Date()),
    categories: (data.categories || []).map(c => ({
      id: c.id,
      name: c.name,
      bg: c.bg || '#EDEDEF',
      fg: c.fg || '#55555C',
    })),
    brands: (data.brands || []).map(b => ({
      slug: b.slug,
      name: b.name,
      nameCn: b.nameCn || '',
      website: b.website || '',
      tagline: b.tagline || '',
      categories: b.categories || [],
      aliases: b.aliases || [],
      ...(b.report ? { report: b.report } : {}),
      ...(b.reportHtml ? { reportHtml: b.reportHtml } : {}),
      ...(b.logo ? { logo: b.logo } : {}),
      ...(b.cover ? { cover: b.cover } : {}),
      ...(b.updatedAt ? { updatedAt: b.updatedAt } : {}),
      ...(b.letter ? { letter: b.letter } : {}),
      ...(b.wordCount ? { wordCount: b.wordCount } : {}),
      ...(b.imageCount ? { imageCount: b.imageCount } : {}),
    })),
  };
  fs.writeFileSync(BRANDS_FILE, JSON.stringify(clean, null, 2) + '\n', 'utf8');
  return clean;
}

function writeGeneratedData(library) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const body = JSON.stringify(library);
  fs.writeFileSync(
    path.join(DATA_DIR, 'library.js'),
    '/* 构建生成，请勿手工编辑：数据源为 data/brands.json */\nwindow.BAL_DATA = ' + body + ';\n',
    'utf8'
  );
}

function writeSearchIndex(slug, payload) {
  if (!fs.existsSync(SEARCH_DIR)) fs.mkdirSync(SEARCH_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(SEARCH_DIR, slug + '.js'),
    'window.BAL_SEARCH = window.BAL_SEARCH || {};\nwindow.BAL_SEARCH[' + JSON.stringify(slug) + '] = ' + JSON.stringify(payload) + ';\n',
    'utf8'
  );
}

function writeSearchManifest(manifest) {
  if (!fs.existsSync(SEARCH_DIR)) fs.mkdirSync(SEARCH_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(SEARCH_DIR, 'manifest.js'),
    'window.BAL_SEARCH_MANIFEST = ' + JSON.stringify(manifest) + ';\n',
    'utf8'
  );
}

function countWords(md) {
  const plain = cleanMarkdown(md);
  const cjk = (plain.match(/[\u4e00-\u9fa5]/g) || []).length;
  const latin = (plain.match(/[A-Za-z][A-Za-z'-]*/g) || []).length;
  return cjk + latin;
}

module.exports = {
  ROOT,
  DATA_DIR,
  BRANDS_FILE,
  SEARCH_DIR,
  REPORTS_DIR,
  DEFAULT_CATEGORIES,
  loadRuntimeModule,
  getMarked,
  createSlugger,
  scanReports,
  latestPerBrand,
  slugFromBrandKey,
  formatDate,
  extractReportMeta,
  extractTagline,
  letterOf,
  mediaDirFor,
  findLogo,
  listMedia,
  markdownToArticleHtml,
  splitSections,
  cleanMarkdown,
  seedBrands,
  loadBrands,
  writeBrands,
  writeGeneratedData,
  writeSearchIndex,
  writeSearchManifest,
  countWords,
};
