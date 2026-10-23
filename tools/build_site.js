'use strict';

/**
 * 构建品牌资产库网站：
 *   node tools/build_site.js
 *
 * 1. 扫描仓库中 ABOUT_<品牌>_v<版本>.md，每个品牌只取最新版
 * 2. 同步 data/brands.json（新品牌自动建档，分类留空为「未分类」）
 * 3. 生成 reports/<slug>.html（轻量阅读页）、data/library.js、data/search/*
 */

const fs = require('fs');
const path = require('path');
const core = require('./lib/site_core.js');

const ROOT = core.ROOT;

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function tagHtml(cat) {
  if (!cat) return '<span class="tag" style="--tag-bg:#EDEDEF;--tag-fg:#6B6B72">未分类</span>';
  return '<span class="tag" style="--tag-bg:' + esc(cat.bg) + ';--tag-fg:' + esc(cat.fg) + '">' + esc(cat.name) + '</span>';
}

/* 读取图片像素尺寸（PNG / JPEG / SVG），用于计算正文标识的显示比例 */
function imagePixelSize(file) {
  try {
    const buf = fs.readFileSync(file);
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' && buf.length > 24) return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    if (ext === '.svg') {
      const text = buf.toString('utf8');
      const w = /\bwidth="([\d.]+)(?:px)?"/i.exec(text);
      const h = /\bheight="([\d.]+)(?:px)?"/i.exec(text);
      if (w && h) return { width: Number(w[1]), height: Number(h[1]) };
      const vb = /viewBox="([\d.\-]+)[\s,]+([\d.\-]+)[\s,]+([\d.\-]+)[\s,]+([\d.\-]+)"/i.exec(text);
      if (vb) return { width: Number(vb[3]), height: Number(vb[4]) };
      return null;
    }
    if (ext === '.webp') {
      if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
      const chunk = buf.toString('ascii', 12, 16);
      if (chunk === 'VP8X') return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
      if (chunk === 'VP8 ') return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
      if (chunk === 'VP8L') {
        const bits = buf.readUInt32LE(21);
        return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
      }
      return null;
    }
    if (ext === '.jpg' || ext === '.jpeg') {
      let i = 2;
      while (i < buf.length) {
        if (buf[i] !== 0xFF) { i += 1; continue; }
        const marker = buf[i + 1];
        if (marker >= 0xC0 && marker <= 0xCF && marker !== 0xC4 && marker !== 0xC8 && marker !== 0xCC) {
          return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
        }
        i += 2 + buf.readUInt16BE(i + 2);
      }
    }
  } catch (err) { /* 忽略 */ }
  return null;
}

/* 正文品牌标识：高度控制在正文宽度的 1/10–1/5。
   宽高比 < 3 用最大尺寸（高 = W/5）；≥ 3 用最小尺寸（高 = W/10）；
   按最小尺寸算出宽度超过正文宽度时（宽高比 > 10），与正文等宽。 */
function applyLogoScale(article) {
  const m = /<img[^>]*src="([^"]*Logo_[^"]*)"[^>]*>/.exec(article);
  if (!m) return article;
  const size = imagePixelSize(path.resolve(core.REPORTS_DIR, m[1]));
  if (!size || !size.width || !size.height) return article;
  const aspect = size.width / size.height;
  const pct = Math.min(100, (aspect < 3 ? aspect / 5 : aspect / 10) * 100);
  const tag = m[0].replace(/\s+style="[^"]*"/, '').replace(/>$/, ' style="width:' + pct.toFixed(1) + '%;max-width:100%;max-height:none;border-radius:0">');
  return article.replace(m[0], tag);
}

/* 给正文图片写入真实宽高，配合懒加载提前占位，避免目录锚点跳转后被图片撑开而错位 */
function reserveImageSizes(article) {
  return article.replace(/<img\b[^>]*>/g, (tag) => {
    if (/\bwidth="[^"]*"/.test(tag) && /\bheight="[^"]*"/.test(tag)) return tag;
    const src = (/src="([^"]+)"/.exec(tag) || [])[1];
    if (!src || /^(https?:|data:)/i.test(src)) return tag;
    const size = imagePixelSize(path.resolve(core.REPORTS_DIR, src));
    if (!size || !size.width || !size.height) return tag;
    return tag.replace(/\s*\/?>$/, ' width="' + size.width + '" height="' + size.height + '">');
  });
}

function reportPage(opts) {
  const brand = opts.brand;
  const categories = opts.categories;
  const article = opts.article;
  const downloadHref = opts.downloadHref;
  const imageCount = opts.imageCount || 0;
  const tags = (brand.categories || []).length
    ? brand.categories.map(id => tagHtml(categories.find(c => c.id === id))).join('')
    : tagHtml(null);
  const title = (brand.name + (brand.nameCn ? ' ' + brand.nameCn : '')) + ' · 品牌资产库';
  const desc = brand.tagline || (brand.name + ' 品牌解读报告');
  const download = downloadHref
    ? '<a class="btn ghost" href="' + esc(downloadHref) + '" download>下载单文件 HTML</a>'
    : '';
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="../assets/favicon-32.png" sizes="32x32">
<link rel="icon" href="../assets/favicon.png" sizes="512x512">
<link rel="apple-touch-icon" href="../assets/apple-touch-icon.png">
<link rel="stylesheet" href="../assets/site.css">
<link rel="stylesheet" href="../assets/fonts.css">
</head>
<body class="report-page">
<header class="rpt-top">
  <div class="rpt-top-inner">
    <a class="rpt-back" href="../index.html#board">← 返回看板</a>
    <div class="rpt-headline">
      <h1 class="rpt-name">${esc(brand.name)}${brand.nameCn ? ' <span class="rpt-name-cn">' + esc(brand.nameCn) + '</span>' : ''}</h1>
      <div class="rpt-tags">${tags}</div>
      <div class="rpt-updated">更新于 ${esc(brand.updatedAt || '')}${imageCount ? ' · 全文 ' + imageCount + ' 张图' : ''}</div>
    </div>
    <div class="rpt-actions">
      <div class="rpt-find-wrap">
        <input id="rpt-find" class="rpt-find" type="search" placeholder="在本报告中查找…" autocomplete="off">
        <button id="rpt-find-go" class="btn small" type="button">查找</button>
      </div>
      <a class="btn ghost" href="../index.html">首页</a>
      ${download}
    </div>
  </div>
</header>
<main class="rpt-body">
<article class="rpt-article" id="report-article">
${article}
</article>
</main>
<button id="to-top" class="to-top" type="button" aria-label="回到顶部">↑</button>
<script src="../assets/report.js"></script>
</body>
</html>
`;
}

/* 探测 assets/fonts/Erotique.*，生成 @font-face；未放入字体时生成空文件，避免 404。 */
function writeFontsCss() {
  const dir = path.join(ROOT, 'assets', 'fonts');
  const LATIN = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
  const LATIN_EXT = 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF';
  const formatOf = ext => ext === 'woff2' ? 'woff2' : (ext === 'woff' ? 'woff' : (ext === 'otf' ? 'opentype' : 'truetype'));
  const sources = [];
  if (fs.existsSync(dir)) {
    for (const file of fs.readdirSync(dir).sort()) {
      const display = /^BrandDisplay-(\d{3})(i?)(-ext)?\.(woff2|woff|otf|ttf)$/i.exec(file);
      if (display) {
        sources.push('BrandDisplay|' + "url('fonts/" + file + "') format('" + formatOf(display[4].toLowerCase()) + "')" +
          '|' + display[1] + '|' + (display[2] ? 'italic' : 'normal') + '|' + (display[3] ? LATIN_EXT : LATIN));
        continue;
      }
      const erotique = /^Erotique\.(woff2|woff|otf|ttf)$/i.exec(file);
      if (erotique) {
        sources.push('Erotique|' + "url('fonts/" + file + "') format('" + formatOf(erotique[1].toLowerCase()) + "')" + '|100 900|normal|');
      }
    }
  }
  const localErotique = '@font-face {\n  font-family: \'Erotique\';\n  src: local(\'Erotique\'), local(\'Erotique Display\'), local(\'Erotique Regular\');\n  font-weight: 100 900;\n  font-style: normal;\n  font-display: swap;\n}';
  const css = sources.length
    ? '/* 由构建脚本生成：展示字体 @font-face */\n' + localErotique + '\n' + sources.map(function (entry) {
      const parts = entry.split('|');
      return '@font-face {\n  font-family: \'' + parts[0] + '\';\n  src: ' + parts[1] + ';\n  font-weight: ' + parts[2] +
        ';\n  font-style: ' + parts[3] + ';\n  font-display: swap;\n' +
        (parts[4] ? '  unicode-range: ' + parts[4] + ';\n' : '') + '}';
    }).join('\n') + '\n'
    : '/* 展示字体：优先使用本机安装的 Erotique，其余情况回退到系统衬线体。 */\n' + localErotique + '\n';
  fs.writeFileSync(path.join(ROOT, 'assets', 'fonts.css'), css, 'utf8');
  return sources.length > 0;
}

function build() {
  const hasDisplayFont = writeFontsCss();
  console.log(hasDisplayFont ? '展示字体：@font-face 已生成（BrandDisplay / Erotique）' : '展示字体：未检测到字体文件，使用系统回退');
  const reports = core.scanReports(core.REPORTS_MD_DIR);
  const latest = core.latestPerBrand(reports);
  if (!latest.length) {
    console.error('未找到任何 ABOUT_<品牌>_v<版本>.md 报告。');
  }

  const data = core.loadBrands();
  const categories = data.categories || [];
  const existing = new Map((data.brands || []).map(b => [b.slug, b]));
  const kept = [];
  const searchManifest = [];
  const nowDate = core.formatDate(new Date());

  fs.mkdirSync(core.REPORTS_DIR, { recursive: true });
  fs.mkdirSync(core.SEARCH_DIR, { recursive: true });

  for (const report of latest) {
    const md = fs.readFileSync(report.absPath, 'utf8');
    const meta = core.extractReportMeta(md, report);
    let brand = existing.get(report.slug);
    if (!brand) {
      brand = {
        slug: report.slug,
        name: meta.name,
        nameCn: meta.nameCn,
        website: meta.website,
        tagline: meta.tagline,
        categories: [],
        aliases: [],
      };
      console.log('新增品牌：' + brand.name + '（分类待指定）');
    }
    if (!brand.name) brand.name = meta.name;
    if (!brand.nameCn && meta.nameCn) brand.nameCn = meta.nameCn;
    if (!brand.website && meta.website) brand.website = meta.website;
    if (!brand.tagline && meta.tagline) brand.tagline = meta.tagline;

    const media = core.listMedia(report.brandKey);
    brand.report = 'BAL_reports_md/' + report.file;
    brand.updatedAt = report.updatedAt;
    brand.letter = core.letterOf(brand.name || meta.name);
    const logo = core.findLogo(report.brandKey);
    if (!brand.logo && logo) brand.logo = logo; /* 显式指定的 LOGO 优先，未被指定时才自动识别 */
    brand.wordCount = core.countWords(md);
    brand.imageCount = (md.match(/!\[[^\]]*\]\([^)]*\)/g) || []).length;

    const singleHtml = path.join(core.HTML_DIR, report.file.replace(/\.md$/i, '.html'));
    /* GitHub 单文件上限 100 MB：超过 95 MB 的单文件报告不挂下载入口（避免线上 404 与大文件推送失败） */
    const hasSingleHtml = fs.existsSync(singleHtml) && fs.statSync(singleHtml).size <= 95 * 1024 * 1024;
    if (hasSingleHtml) brand.reportHtml = 'BAL_reports_html/' + report.file.replace(/\.md$/i, '.html');
    else delete brand.reportHtml;

    const article = applyLogoScale(reserveImageSizes(core.markdownToArticleHtml(md, { mediaDir: core.mediaDirFor(report.brandKey) })));
    const html = reportPage({
      brand: brand,
      article: article,
      categories: categories,
      downloadHref: hasSingleHtml ? '../' + brand.reportHtml : '',
      imageCount: brand.imageCount,
    });
    const out = path.join(core.REPORTS_DIR, report.slug + '.html');
    fs.writeFileSync(out, html, 'utf8');

    const sections = core.splitSections(md);
    core.writeSearchIndex(report.slug, {
      slug: report.slug,
      brand: brand.name,
      brandCn: brand.nameCn || '',
      report: brand.report,
      sections: sections,
    });
    searchManifest.push(report.slug);

    kept.push(brand);
    console.log('✓ ' + report.file + ' → reports/' + report.slug + '.html（' + sections.length +
      ' 个搜索片段，' + (html.length / 1024).toFixed(0) + ' KB，素材 ' + media.length + ' 项）');
  }

  const keptSlugs = new Set(kept.map(b => b.slug));
  for (const b of (data.brands || [])) {
    if (!keptSlugs.has(b.slug)) {
      console.warn('提示：brands.json 中的「' + b.name + '」暂无对应报告，已保留其资料但不进入站点。');
    }
  }

  data.updatedAt = nowDate;
  core.writeBrands(Object.assign({}, data, { brands: kept }));
  core.writeSearchManifest(searchManifest);

  const library = {
    generatedAt: nowDate,
    categories: categories,
    brands: kept.slice().sort((a, b) => a.name.localeCompare(b.name, 'en')),
    stats: {
      brands: kept.length,
      categories: categories.length,
      reports: kept.length,
      words: kept.reduce((n, b) => n + (b.wordCount || 0), 0),
      images: kept.reduce((n, b) => n + (b.imageCount || 0), 0),
    },
  };
  core.writeGeneratedData(library);

  console.log('\n完成：' + kept.length + ' 个品牌、' + categories.length + ' 个分类。');
  return library;
}

if (require.main === module) build();

module.exports = { build: build };
