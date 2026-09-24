// 用法：node BAL_tools-html/verify_report.js <报告.md> [报告.html]
// 交付前功能验证：目录锚点、图片文件、正文格式、HTML 折叠目录与内嵌图片。
// 退出码 0 = 全部通过；非 0 = 存在问题，不得交付。
const fs = require('fs');
const path = require('path');

const mdPath = path.resolve(process.argv[2] || 'ABOUT_GAGGENAU_v3.md');
const htmlPath = path.resolve(process.argv[3] || mdPath.replace(/\.md$/i, '.html'));
const base = path.dirname(mdPath);
const md = fs.readFileSync(mdPath, 'utf8');

function slug(text) {
  return text.trim().toLowerCase()
    .replace(/[`*_~\[\](){}<>#!+.,:;'"“”‘’《》「」『』、，。；：！？（）【】·|/@$%^&=\\]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const problems = [];
const headingTexts = [...md.matchAll(/^## (.+)$/gm)].map(m => m[1]);
const headingIds = headingTexts.map(slug);
const tocLinks = [...md.matchAll(/\]\(#([^)]+)\)/g)].map(m => decodeURIComponent(m[1]));
const unresolvedMd = tocLinks.filter(id => !headingIds.includes(id));
if (unresolvedMd.length) problems.push('Markdown 目录锚点无法匹配标题: ' + unresolvedMd.join(', '));

const imageRefs = [...md.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m => m[1]);
const missingImages = imageRefs.filter(p => !fs.existsSync(path.resolve(base, p)));
if (missingImages.length) problems.push('图片文件缺失: ' + missingImages.join(', '));

const rawHtml = (md.match(/<(p|small|img|div|span|details)\b/g) || []).length;
if (rawHtml) problems.push('Markdown 中出现原始 HTML 标签: ' + rawHtml + ' 处');

const lines = md.split(/\r?\n/);
let blankIssues = 0;
for (let i = 1; i < lines.length; i++) {
  if (/^## /.test(lines[i]) && lines[i - 1].trim() !== '') blankIssues++;
}
if (blankIssues) problems.push('标题前缺空行: ' + blankIssues + ' 处');

const captions = (md.match(/^\*图.*\*$/gm) || []).length;
const logoCaptions = (md.match(/!\[[^\]]*\]\([^)]*Logo_[^)]*\)\r?\n\r?\n\*图[^\n]*\*/g) || []).length;
if (logoCaptions) problems.push('品牌 logo 图不应配图注: ' + logoCaptions + ' 处');
const notes = (md.match(/^> 术语注释/gm) || []).length;

// ---- 配图额度校验（v4.4：按章节判定，报告正文不含任何规则标记） ----
// 03 章每段最多 1 张；07 章型号码段 2–5 张；08／09／11／12 章通用豁免，仅"前文未提及的型号"须补图；
// 其余章节维持"型号讲解段必须配图"；13–15 章（资料与附录）跳过。
// 默认只提醒，不影响退出码；加 --strict-model-images 时计入未通过项。
const strictModelImages = process.argv.includes('--strict-model-images');
const modelTokens = [...new Set(
  [...md.matchAll(/!\[[^\]]*\]\([^)]*\/P_([A-Za-z0-9]+)_[^)]*\)/g)].map(m => m[1].toUpperCase())
)];
const modelWarnings = [];
if (modelTokens.length) {
  const normalize = (s) => s.replace(/[\s\-–—_]/g, '').toUpperCase();
  // 匹配型号前先去掉 URL 与链接目标，避免把 "…/92-cut_plus/" 这类 slug 当成型号讲解
  const stripUrls = (s) => s
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\]\([^)]*\)/g, ' ');
  const docLines = md.split(/\r?\n/);
  const isImageLine = (l) => /^!\[/.test(l.trim());
  const isCaptionLine = (l) => /^\*图/.test(l.trim());
  const isMetaLine = (l) => /^(#|>|\||-|\*图：|官方产品页|官方新闻页|官方设计故事)/.test(l.trim());

  // 正文块（段落）：被空行分隔、且非标题/图注/列表/来源行
  const blocks = [];
  {
    let buf = [];
    let start = 0;
    const flush = (endIdx) => {
      if (buf.length) {
        const skip = isMetaLine(buf[0]) || buf.some(isImageLine);
        if (!skip) blocks.push({ start, end: endIdx - 1, text: buf.join(' ') });
      }
      buf = [];
    };
    for (let i = 0; i < docLines.length; i++) {
      if (docLines[i].trim() === '') { flush(i); continue; }
      if (!buf.length) start = i;
      buf.push(docLines[i]);
    }
    flush(docLines.length);
  }

  // 每行所属章节号
  const sectionOf = [];
  {
    let cur = null;
    for (let i = 0; i < docLines.length; i++) {
      const m = /^## (\d\d) /.exec(docLines[i]);
      if (m) cur = m[1];
      sectionOf[i] = cur;
    }
  }

  // 型号首次出现位置（只看正文块）
  const firstSeen = {};
  for (const b of blocks) {
    const text = normalize(stripUrls(b.text));
    for (const t of modelTokens) {
      if (text.includes(t) && firstSeen[t] === undefined) firstSeen[t] = b.start;
    }
  }

  // 该段之后、同一阅读单元（到下一个标题为止）内是否有配图；配图统一放在连续段落末尾
  const imagesAfter = (b) => {
    let n = 0;
    for (let i = b.end + 1; i < docLines.length; i++) {
      if (/^#{2,3}\s/.test(docLines[i].trim())) break;
      if (isImageLine(docLines[i])) n++;
    }
    return n;
  };

  const EXEMPT_SECTIONS = new Set(['08', '09', '10', '11', '12']);
  const SKIP_SECTIONS = new Set(['13', '14', '15']);

  for (const b of blocks) {
    const sec = sectionOf[b.start];
    if (!sec || SKIP_SECTIONS.has(sec) || sec === '07') continue;
    const text = normalize(stripUrls(b.text));
    const hit = modelTokens.filter((t) => text.includes(t));
    if (!hit.length) continue;
    const n = imagesAfter(b);
    if (sec === '03') {
      if (n > 1) modelWarnings.push({ line: b.start + 1, models: hit, note: `03 章每段最多 1 张，当前 ${n} 张` });
      continue;
    }
    if (EXEMPT_SECTIONS.has(sec)) {
      const fresh = hit.filter((t) => firstSeen[t] === b.start);
      if (fresh.length && n === 0) modelWarnings.push({ line: b.start + 1, models: fresh, note: '前文未提及的型号须补图' });
      continue;
    }
    if (n === 0) modelWarnings.push({ line: b.start + 1, models: hit, note: '型号讲解段缺图' });
  }

  // 07 章：每个型号小节 2–5 张
  const h3Idx = [];
  for (let i = 0; i < docLines.length; i++) if (/^### /.test(docLines[i])) h3Idx.push(i);
  for (let k = 0; k < h3Idx.length; k++) {
    const s = h3Idx[k];
    if (sectionOf[s] !== '07') continue;
    if (/产品组合与命名逻辑|第三方评价/.test(docLines[s])) continue;
    const e = k + 1 < h3Idx.length ? h3Idx[k + 1] : docLines.length;
    let n = 0;
    for (let i = s; i < e; i++) if (isImageLine(docLines[i])) n++;
    if (n === 1 || n > 5) {
      const name = docLines[s].replace(/^###\s*/, '').split('：')[0].slice(0, 20);
      modelWarnings.push({ line: s + 1, models: [name], note: `07 章型号码段应 2–5 张，当前 ${n} 张` });
    }
  }

  // 同一图片文件重复引用
  const refCount = {};
  for (const p of imageRefs) refCount[p] = (refCount[p] || 0) + 1;
  const dupFiles = Object.keys(refCount).filter((p) => refCount[p] > 1);
  if (dupFiles.length) {
    modelWarnings.push({ line: 0, models: [dupFiles.join('、')], note: '图片文件被重复引用' });
  }

  // 来源行应并入图注，不再单独成行
  const srcLineNos = [];
  for (let i = 0; i < docLines.length; i++) {
    if (/^官方(产品页|新闻页|设计故事)：/.test(docLines[i].trim())) srcLineNos.push(i + 1);
  }
  if (srcLineNos.length) {
    modelWarnings.push({ line: 0, models: ['第 ' + srcLineNos.join('、') + ' 行'], note: '图片下方仍保留"官方产品页／新闻页"来源行，应并入图注' });
  }

  // 配图不得打断连续段落
  const firstH2 = docLines.findIndex((l) => /^## /.test(l.trim()));
  for (let i = Math.max(0, firstH2); i < docLines.length; i++) {
    if (!isImageLine(docLines[i])) continue;
    for (let j = i + 1; j < docLines.length; j++) {
      const t = docLines[j].trim();
      if (/^#{2,3}\s/.test(t)) break;
      if (t === '' || isCaptionLine(docLines[j]) || isImageLine(docLines[j])) continue;
      if (/^[|>]/.test(t)) break;
      modelWarnings.push({ line: i + 1, models: ['第 ' + (i + 1) + ' 行的图'], note: '配图打断了后续段落，应移到连续段落末尾' });
      break;
    }
  }
}

// ---- 文档更新标注（v4.4 第 07.6 节）：开头、品牌标识图上方 ----
{
  const m = /^更新于 \d{4}-\d{2}-\d{2}\s+·\s+基于 v\d+\.\d+\s*$/m.exec(md);
  const logoIdx = md.search(/^!\[[^\]]*\]\([^)]*Logo_/m);
  const lineIdx = md.search(/^更新于 \d{4}-\d{2}-\d{2}\s+·\s+基于/m);
  const ok = !!m && (logoIdx < 0 || (lineIdx >= 0 && lineIdx < logoIdx));
  if (ok) {
    console.log('更新标注: ' + m[0].trim());
  } else {
    console.log('更新标注提醒: 开头缺少顶格的"更新于 YYYY-MM-DD  ·  基于 vX.X"，或该行未位于品牌标识图上方。');
    if (strictModelImages) problems.push('缺少文档更新标注行（第 07.6 节）');
  }
}

let htmlSummary = '(未找到 HTML 文件)';
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const ids = [...html.matchAll(/<h2 id="([^"]+)"/g)].map(m => m[1]);
  const details = /<details class="toc">([\s\S]*?)<\/details>/.exec(html);
  const tocHrefs = details ? [...details[1].matchAll(/href="#([^"]+)"/g)].map(m => m[1]) : [];
  const unresolvedHtml = tocHrefs.filter(id => !ids.includes(id));
  const dataUris = (html.match(/data:image\//g) || []).length;
  const isOpen = /<details class="toc" open/.test(html);
  if (!details) problems.push('HTML 中缺少可折叠目录 <details class="toc">');
  if (isOpen) problems.push('HTML 目录默认处于展开状态（应为默认折叠）');
  if (unresolvedHtml.length) problems.push('HTML 目录锚点无法匹配标题: ' + unresolvedHtml.join(', '));
  if (/^更新于 \d{4}-\d{2}-\d{2}\s+·\s+基于 v\d+\.\d+/m.test(md) && /更新于 \d{4}-\d{2}-\d{2}/.test(html)) {
    problems.push('HTML 中不应出现文档更新标注行（该行仅保留在 Markdown 源文件）');
  }
  htmlSummary = '标题锚点 ' + ids.length + ' · 目录链接 ' + tocHrefs.length + ' · 未匹配 ' + unresolvedHtml.length +
    ' · 默认折叠 ' + (isOpen ? '否' : '是') + ' · 内嵌图片 ' + dataUris;
}

console.log('验证文件: ' + mdPath);
console.log('Markdown: H2 ' + headingTexts.length + ' · 目录链接 ' + tocLinks.length + ' · 未匹配 ' + unresolvedMd.length +
  ' · 图片引用 ' + imageRefs.length + ' · 缺失 ' + missingImages.length + ' · 图注 ' + captions + ' · 术语注释 ' + notes +
  ' · 原始HTML ' + rawHtml + ' · 标题空行问题 ' + blankIssues);
console.log('HTML: ' + htmlSummary);
if (modelTokens.length) {
  if (modelWarnings.length) {
    const detail = modelWarnings.map(w =>
      (w.line ? '行 ' + w.line + '：' : '') + w.models.join('、') + (w.note ? '（' + w.note + '）' : '')).join('；');
    console.log('配图额度提醒: ' + modelWarnings.length + ' 处待确认（' + detail + '）');
    if (strictModelImages) problems.push('配图额度未达要求: ' + detail);
  } else {
    console.log('配图额度提醒: 03／07／08／09／10／11／12 章、连续阅读与全局重复检查均无问题。');
  }
}
console.log('');
console.log('环境说明：Markdown 内锚点跳转取决于阅读器是否生成标题 id。GitHub 网页端支持；本地部分 Markdown 预览器不生成标题 id，无法跳转。');
console.log('本地需要跳转时，请打开同目录的 HTML 报告（ABOUT_<品牌>_v<版本>.html）。');

if (problems.length) {
  console.log('');
  console.log('未通过项：');
  problems.forEach(p => console.log(' - ' + p));
  process.exitCode = 1;
} else {
  console.log('');
  console.log('结论：结构、锚点、图片与 HTML 目录校验全部通过（本地预览器锚点能力需按上述说明实测）。');
}
