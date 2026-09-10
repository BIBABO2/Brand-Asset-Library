// 用法：node build_html_report.js <报告.md> [输出.html]
// 将标准 Markdown 报告转换为自包含 HTML（图片内嵌 base64，居中显示、图注灰色小号）。
const fs = require('fs');
const path = require('path');

function loadMarked() {
  try { return require('marked'); } catch (e) {
    return require('C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked');
  }
}

const marked = loadMarked();
const input = path.resolve(process.argv[2] || 'ABOUT_GAGGENAU_v3.md');
const output = path.resolve(process.argv[3] || input.replace(/\.md$/i, '.html'));
const base = path.dirname(input);
const md = fs.readFileSync(input, 'utf8');

const mime = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
let body = marked.parse(md, { gfm: true, breaks: false });

const usedIds = {};
function slugify(text) {
  let s = text.toLowerCase()
    .replace(/[`*_~\[\](){}<>#!+.,:;'"“”‘’《》「」『』、，。；：！？（）【】·|/@$%^&=\\]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  if (usedIds[s] !== undefined) { usedIds[s] += 1; s = s + '-' + usedIds[s]; } else { usedIds[s] = 0; }
  return s;
}
body = body.replace(/<h([1-3])>([\s\S]*?)<\/h\1>/g, (m, lvl, inner) => {
  const text = inner.replace(/<[^>]+>/g, '');
  return '<h' + lvl + ' id="' + slugify(text) + '">' + inner + '</h' + lvl + '>';
});

// 目录：从 H2 标题自动生成可折叠面板，并移除 Markdown 中手工维护的目录块
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
  const items = entries.map(e => '<a href="#' + e.id + '">' + e.text + '</a>').join('');
  body = head + '<details class="toc"><summary>目录</summary><div class="toc-grid">' + items + '</div></details>\n' + tail;
}

body = body.replace(/src="([^"]+)"/g, (m, src) => {
  if (/^(https?:|data:)/i.test(src)) return m;
  const file = path.resolve(base, src);
  if (!fs.existsSync(file)) return m;
  const ext = path.extname(file).toLowerCase();
  const data = fs.readFileSync(file).toString('base64');
  return 'src="data:' + (mime[ext] || 'image/jpeg') + ';base64,' + data + '"';
});

const css = "body{font-family:-apple-system,'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;line-height:1.95;color:#24292f;max-width:920px;margin:0 auto;padding:44px 26px;background:#fff}\n" +
"h1{text-align:center;font-size:2em;margin:0.4em 0 1.4em}\n" +
"h2{margin-top:2.4em;border-bottom:1px solid #e6e6e6;padding-bottom:10px;line-height:1.5}\n" +
"h3{margin-top:2em}\n" +
"p,li{font-size:16px}\n" +
"img{max-width:100%;height:auto;border-radius:6px;display:block;margin:0 auto}\n" +
"em{color:#888;font-size:0.9em;font-style:normal}\n" +
"p em{display:block;margin-top:6px}\n" +
"table{border-collapse:collapse;width:100%;margin:1.4em 0;font-size:0.94em}\n" +
"th,td{border:1px solid #ddd;padding:8px 12px;text-align:left;vertical-align:top}\n" +
"th{background:#f7f7f7}\n" +
"blockquote{color:#8a8a8a;font-size:0.9em;border-left:3px solid #d0d7de;margin:1em 0;padding:4px 16px;background:#fafbfc}\n" +
"code{background:#f2f3f5;border-radius:4px;padding:2px 5px;font-family:Consolas,Menlo,monospace;font-size:0.9em}\n" +
"pre{background:#f6f8fa;padding:14px;border-radius:6px;overflow:auto}\n" +
"hr{border:none;border-top:1px solid #eaeaea;margin:2em 0}\n" +
"ul,ol{padding-left:1.5em}\n" +
"details.toc{margin:1.4em 0 2.2em;font-size:0.85em}\n" +
"details.toc summary{cursor:pointer;color:#777;width:fit-content;padding:6px 16px;border:1px solid #ececec;border-radius:999px;background:#fafafa;list-style:none;user-select:none}\n" +
"details.toc summary::-webkit-details-marker{display:none}\n" +
"details.toc summary::after{content:' ▾';color:#bbb}\n" +
"details.toc[open] summary::after{content:' ▴'}\n" +
"details.toc summary:hover{background:#f4f4f4}\n" +
"details.toc .toc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px 28px;padding:14px 18px;margin-top:10px;border:1px solid #f0f0f0;border-radius:10px;background:#fcfcfc}\n" +
"details.toc a{color:#666;text-decoration:none;line-height:2}\n" +
"details.toc a:hover{color:#222;text-decoration:underline}\n" +
"@media (max-width:720px){details.toc .toc-grid{grid-template-columns:1fr}}\n" +
"h1,h2,h3{scroll-margin-top:24px}";

const html = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>' +
path.basename(input, '.md') + '</title>\n<style>' + css + '</style>\n</head>\n<body>\n' + body + '\n</body>\n</html>';

fs.writeFileSync(output, html, 'utf8');
console.log('HTML generated: ' + output + ' (' + (Buffer.byteLength(html) / 1048576).toFixed(1) + ' MB)');
