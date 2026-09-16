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
<link rel="icon" href="data:,">
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
  const reports = core.scanReports(ROOT);
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
    brand.report = report.file;
    brand.updatedAt = report.updatedAt;
    brand.letter = core.letterOf(brand.name || meta.name);
    const logo = core.findLogo(report.brandKey);
    if (logo) brand.logo = logo;
    brand.wordCount = core.countWords(md);
    brand.imageCount = (md.match(/!\[[^\]]*\]\([^)]*\)/g) || []).length;

    const singleHtml = path.join(ROOT, report.file.replace(/\.md$/i, '.html'));
    const hasSingleHtml = fs.existsSync(singleHtml);
    if (hasSingleHtml) brand.reportHtml = report.file.replace(/\.md$/i, '.html');
    else delete brand.reportHtml;

    const article = core.markdownToArticleHtml(md, { mediaDir: core.mediaDirFor(report.brandKey) });
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
