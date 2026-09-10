# 品牌资产库 · 索引

面向工业设计、产品策略与品牌研究的品牌深度档案库。每篇档案按统一结构撰写：品牌 → 品类 → 用户 → 定位 → 产品 → 美学 → 设计 → 体验 → 竞品 → 战略，图文结合，结论可溯源。

## 研究报告

| 报告 | 阅读方式 | 素材 |
|---|---|---|
| Gaggenau 嘉格纳（v3，约 1.1 万字 / 34 图） | [Markdown 版](./ABOUT_GAGGENAU_v3.md) · [网页版（在线渲染，推荐转发）](https://raw.githack.com/BIBABO2/Brand-Asset-Library/main/ABOUT_GAGGENAU_v3.html) | [图片目录](./ABOUT_GAGGENAU_media/) · [图片台账](./ABOUT_GAGGENAU_media/image_ledger.md) |

HTML 版报告顶部带可折叠目录，可点击跳转到各章节；Markdown 版顶部为纯文本两列索引（GitHub 会给链接强制加蓝色下划线，故 Markdown 版不设链接）。

## 规范与工具

| 文件 | 说明 |
|---|---|
| [品牌解读指南_v4.1.md](./品牌解读指南_v4.1.md) | 当前执行标准：章节结构、标题与注释格式、图片与证据规范、验收清单 |
| [build_html_report.js](./build_html_report.js) | Markdown → 自包含 HTML 报告转换脚本（图片内嵌、标题锚点、图注灰色小号） |
| [品牌撰写规范_v3.4.md](./品牌撰写规范_v3.4.md) | 历史版本规范 |
| 品牌资产库撰写规范_v3.4.docx | 历史版本规范（Word） |

## 生成 HTML 报告

```bash
node build_html_report.js ABOUT_<品牌>_v<版本>.md
```

脚本会把 Markdown 中引用的本地图片转为 base64 内嵌，生成单文件 HTML，可直接上传或转发；标题自动生成锚点，与报告目录联动。
