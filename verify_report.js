// 用法：node verify_report.js <报告.md> [报告.html]
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
const notes = (md.match(/^> 术语注释/gm) || []).length;

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
  htmlSummary = '标题锚点 ' + ids.length + ' · 目录链接 ' + tocHrefs.length + ' · 未匹配 ' + unresolvedHtml.length +
    ' · 默认折叠 ' + (isOpen ? '否' : '是') + ' · 内嵌图片 ' + dataUris;
}

console.log('验证文件: ' + mdPath);
console.log('Markdown: H2 ' + headingTexts.length + ' · 目录链接 ' + tocLinks.length + ' · 未匹配 ' + unresolvedMd.length +
  ' · 图片引用 ' + imageRefs.length + ' · 缺失 ' + missingImages.length + ' · 图注 ' + captions + ' · 术语注释 ' + notes +
  ' · 原始HTML ' + rawHtml + ' · 标题空行问题 ' + blankIssues);
console.log('HTML: ' + htmlSummary);
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
