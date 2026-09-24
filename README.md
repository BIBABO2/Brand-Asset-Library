# 品牌资产库 · 索引

面向工业设计、产品策略与品牌研究的品牌深度档案库。每篇档案按统一结构撰写：品牌 → 品类 → 用户 → 定位 → 产品 → 美学 → 设计 → 体验 → 竞品 → 战略，图文结合，结论可溯源。

## 研究报告

| 报告 | 阅读方式 | 素材 |
|---|---|---|
| Gaggenau 嘉格纳（v3，约 1.1 万字 / 34 图） | [Markdown 版](./BAL_reports_md/ABOUT_GAGGENAU_v3.md) · [网页版（在线渲染，推荐转发）](https://raw.githack.com/BIBABO2/Brand-Asset-Library/main/BAL_reports_html/ABOUT_GAGGENAU_v3.html) | [图片目录](./BAL_media/ABOUT_GAGGENAU_media/) · [图片台账](./BAL_media/ABOUT_GAGGENAU_media/image_ledger.md) |
| Oikos（Oikos Venezia，约 1.86 万字 / 38 图） | [Markdown 版](./BAL_reports_md/ABOUT_OIKOS_v1.md) · [网页版（在线渲染，推荐转发）](https://raw.githack.com/BIBABO2/Brand-Asset-Library/main/BAL_reports_html/ABOUT_OIKOS_v1.html) | [图片目录](./BAL_media/ABOUT_OIKOS_media/) · [图片台账](./BAL_media/ABOUT_OIKOS_media/image_ledger.md) |
| Rimadesio（约 1.8 万字 / 40 图） | [Markdown 版](./BAL_reports_md/ABOUT_RIMADESIO_v1.md) · [网页版（在线渲染，推荐转发）](https://raw.githack.com/BIBABO2/Brand-Asset-Library/main/BAL_reports_html/ABOUT_RIMADESIO_v1.html) | [图片目录](./BAL_media/ABOUT_RIMADESIO_media/) · [图片台账](./BAL_media/ABOUT_RIMADESIO_media/image_ledger.md) |
| CEADESIGN（v3，约 1.9 万字 / 103 图） | [Markdown 版](./BAL_reports_md/ABOUT_CEADESIGN_v3.md) · [网页版（在线渲染，推荐转发）](https://raw.githack.com/BIBABO2/Brand-Asset-Library/main/BAL_reports_html/ABOUT_CEADESIGN_v3.html) | [图片目录](./BAL_media/ABOUT_CEADESIGN_media/) · [图片台账](./BAL_media/ABOUT_CEADESIGN_media/image_ledger.md) |
| Artemide（约 1.22 万字 / 17 图） | [Markdown 版](./BAL_reports_md/ABOUT_ARTEMIDE_v1.md) · [网页版（在线渲染，推荐转发）](https://raw.githack.com/BIBABO2/Brand-Asset-Library/main/BAL_reports_html/ABOUT_ARTEMIDE_v1.html) | [图片目录](./BAL_media/ABOUT_ARTEMIDE_media/) · [图片台账](./BAL_media/ABOUT_ARTEMIDE_media/image_ledger.md) |

两部分都支持点击跳转：HTML 版报告顶部为可折叠的弱层级目录（纵向两列、中缝分隔条）；Markdown 版顶部为两列锚点链接目录，可直接跳转到各章节。

## 规范与工具

| 文件 | 说明 |
|---|---|
| 品牌解读指南（v4.4，本地维护） | 内部执行标准，存放于 `BAL_guides/`，不入库、不随站点发布 |
| [build_html_report.js](./BAL_tools-html/build_html_report.js) | Markdown → 自包含 HTML 报告转换脚本（图片内嵌、标题锚点、图注灰色小号） |
| [verify_report.js](./BAL_tools-html/verify_report.js) | 交付前功能验证脚本：目录锚点、图片、格式、HTML 折叠目录与内嵌图片 |
| 撰写规范（历史版本） | 存放于 `BAL_guides/`，本地维护 |


## 生成 HTML 报告

```bash
node BAL_tools-html/build_html_report.js BAL_reports_md/ABOUT_<品牌>_v<版本>.md BAL_reports_html/ABOUT_<品牌>_v<版本>.html
```

脚本会把 Markdown 中引用的本地图片转为 base64 内嵌，生成单文件 HTML，可直接上传或转发；标题自动生成锚点，与报告目录联动。

## 交付前验证

```bash
node BAL_tools-html/verify_report.js BAL_reports_md/ABOUT_<品牌>_v<版本>.md BAL_reports_html/ABOUT_<品牌>_v<版本>.html
```

每次修改格式或功能后必须先运行验证脚本并通过，再交付；Markdown 目录跳转须在目标阅读器实测（GitHub 网页端支持，本地部分 Markdown 预览器不生成标题锚点，此时以 HTML 版承担跳转）。
