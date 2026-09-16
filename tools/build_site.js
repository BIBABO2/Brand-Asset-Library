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
</head>
<body class="report-page">
<header class="rpt-top">
  <div class="rpt-top-inner">
    <a class="rpt-back" href="../board.html">← 返回看板</a>
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

function build() {
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
