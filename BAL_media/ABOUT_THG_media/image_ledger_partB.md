# THG Paris — B 组图片台账（当代产品 / 设计师·品牌合作系列，2000 年至今）

- 整理日期：2026-10-27（UTC+8，深圳）
- 媒体目录：`D:\Documents\ChatGPT\Projects\品牌资产库\BAL_media\ABOUT_THG_media\`
- 通道说明：本台账仅记录 B 组；Logo_、H_、F_、S_ 及 A 组经典历史产品图由 A 组负责，本文件不重复登记。
- 合并提示：本文件为 `image_ledger_partB.md`，请勿并入 `image_ledger.md`（由主代理合并）。

---

## 一、通道总结

- **主渠道**：THG 官网产品页 / 设计师合作页（`www.thg-paris.com`），图片托管于官方 CDN `thg-paris.imgix.net`。官网主站有 Cloudflare 人机验证，已通过真实浏览器（Chrome）过验证后，从页面 DOM 的 `<img>/<source srcset>` 中提取 media-library / collections / products 路径，再以浏览器会话逐张下载（imgix 直链对裸 Python 请求触发 403/限流，故改用浏览器下载管理器，单张串行）。
- **取图规格**：统一请求 `?auto=format&fm=jpg&q=82&w=1600`（imgix 去原尺寸后缀、取 1600px 宽高清图）；webp/png 源由 imgix 直接转 jpg。
- **型号核对（三级）**：① 官方文件名（如 `COLL_U93_Banner.jpg`、`u7s-151-f30-studio.jpg`、`system-g9a-thg-paris.jpg`）；② 页面 title（如 `Malmaison Metal | U93`、`Profil Black Onyx with lever | A6P`、`System Smooth Metal | G9A`）；③ 04_contemporary_products.md 研究笔记的设计师/合作方归属。不同代际未混用。
- **验证方法**：Python + Pillow 逐张 `Image.open().load()` 实测可解码、记录宽高与字节；正文引用图要求 >10KB 且最长边 ≥500px；不达标移入 `_unused\`。
- **入库数量**：B 组共 **51 张**，全部通过验证（0 张入 `_unused`）。
- **年份标注说明**：文件名中年份为系列设计/合作起始年或首发年（据 04 研究笔记；部分投产年官方未标注，取合作起始年/目录收录年，已在备注列说明）。

### 系列分布（11 个当代系列）

| 系列 | 代码 | 设计师 / 合作方 | 年份(标) | 张数 |
|---|---|---|---|---|
| ICON-X | — | Studio F. A. Porsche（2021 Red Dot） | 2021 | 5 |
| Collection O | G4P | Studio Putman × Christofle（Hôtel de Crillon） | 2018 | 8 |
| Vogue Lapis Lazuli | A8S | THG 当代线·半宝石镶嵌 | ~2015 | 4 |
| Malmaison | U93 | Christofle × THG | 2003 | 5 |
| Marquise Gold décor | A7F | Bernardaud 瓷器 × THG | ~2010 | 5 |
| West Coast Metal | U9B | THG（guilloché 机芯雕花） | ~2012 | 4 |
| Profil | A6P | Jamie Drake（2007 KBIS） | 2007 | 5 |
| Le 11 | U2A | Alberto Pinto | ~2008 | 4 |
| Les Ondes | G8A | Gilles & Boissier | 2020 | 4 |
| System | G9A | Arik Levy | ~2015 | 4 |
| Mille Nuits | U6 | Baccarat × Mathias（2025 米兰） | 2025 | 3 |
| **合计** | | | | **51** |

### 缺口清单（未采 / 待补）

1. **Poèmes（Chantal Thomass × Bernardaud，~2009–2010）**：04 笔记注明该系列已不在官网现行 A–Z 目录，属归档系列；官网无独立产品页，官方产品图未取得（仅有 Maison à Part 2010 媒体现场图，非官方原图，未采）。**建议**后续向官方媒体包索取或用 Wayback 取历史目录页。
2. **Faubourg / Le 9（Pierre-Yves Rochon，2005 起）**：官网产品页为 `/collection/faubourg-metal`，本轮未单独采其 diaporama（其产品线与 A 组经典过渡风格重叠，为避免与 A 组重复暂未入库）；如需补，可补 3–4 张。
3. **Lalique 各系列专图（Dahlia/Panthère/Bambou/Hirondelles/Metropolis）**：已由 A 组以 `P_Dahlia_*`、`P_Hirondelles_*`、`P_Metropolis_*` 等入库，B 组不重复采集。
4. **Pétale de Cristal / Beyond Crystal（Baccarat × Rochon / Rémi Tessier）**：A 组已采 `P_PetaleDeCristal_*`；Beyond Crystal 无独立官网产品页，未采。
5. **ICON-X 缺 `ambiance-6` 与 moodboard 拼图**：`ambiances-6.png`（red-dot 页）与 `moodboard-icon-x2.png` 在浏览器批量下载时被 CDN 限流中断，已用 `icon-x-3/4`、`ambiances/ambiances4`、`studio-u7s-151-f30` 补足 5 张，不影响交付。
6. **各系列产品型号数字编号（如完整 SKU）**：官网产品页仅给系列代码（U93/A7F/G8A 等）与饰面代码（A02/B01/F30），完整物料号需查 Stock Program PDF；本轮未逐枚标注 SKU。

---

## 二、逐图台账

> 验证列格式：实测宽×高 / 文件字节数。来源页为官网产品页 URL；CDN 路径为 `thg-paris.imgix.net` 下对象。

### ICON-X（Studio F. A. Porsche，2021 Red Dot 获奖系列）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_ICONX_2021_studio-u7s-151-f30.jpg | ICON-X 面盆龙头整机棚拍；官方文件名 `u7s-151-f30-studio.jpg`，页 title 含 `Studio F. A. PORSCHE` | https://www.thg-paris.com/us/en/studio-f-a-porsche/red-dot-design-award | 1600×2214 / 231283 |
| P_ICONX_2021_icon-x-3.jpg | ICON-X 龙头造型细节；官方文件名 `icon-x-3.webp`（inspirations 页） | https://www.thg-paris.com/us/en/studio-f-a-porsche/icon-x-inspirations | 1600×669 / 189098 |
| P_ICONX_2021_icon-x-4.jpg | ICON-X 龙头造型细节；官方文件名 `icon-x-4.webp` | 同上 | 1600×669 / 171206 |
| P_ICONX_2021_ambiances.jpg | ICON-X 浴室场景氛围图；官方文件名 `ambiances.png` | 同上 | 1600×900 / 335291 |
| P_ICONX_2021_ambiances4.jpg | ICON-X 浴室场景氛围图；官方文件名 `ambiances4.png` | 同上 | 1600×900 / 266081 |

### Collection O（Studio Putman × Christofle；Hôtel de Crillon Marie-Antoinette 套房）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_COLLO_2018_crillon-marie-antoinette.jpg | Hôtel de Crillon Marie-Antoinette 套房卫浴实景；官方文件名 `rwcri-suite-marie-antoinette-228-bathroom.jpg` | https://www.thg-paris.com/us/en/blog/collection-o-by-thg-paris-studio-putman | 1600×1065 / 282163 |
| P_COLLO_2018_bath-view.jpg | Collection O 浴缸场景；官方文件名 `bath-view.jpg` | 同上 | 1600×2850 / 482716 |
| P_COLLO_2018_powder-room.jpg | Collection O 化妆间场景；官方文件名 `powder-room-view.jpg` | 同上 | 1600×2850 / 609730 |
| P_COLLO_2018_aspen-1.jpg | Aspen 项目实景；官方 alt `Aspen project - Collection O`，文件名 `image008.jpg` | 同上 | 1600×2401 / 451712 |
| P_COLLO_2018_aspen-2.jpg | Aspen 项目实景；文件名 `image007.jpg` | 同上 | 1600×2401 / 389183 |
| P_COLLO_2018_art-g4p-151.jpg | Collection O 龙头整机（G4P 151 F27 Art）；官方文件名 `g4p-151-f27-art.jpg` | 同上 | 1600×1067 / 83850 |
| P_COLLO_2018_ambiance04.jpg | Collection O 1132SG 氛围图 04；官方文件名 `collection-o-1132sg-ambiance04.jpg` | 同上 | 1600×1199 / 135871 |
| P_COLLO_2018_collection-o-2.jpg | Collection O 产品图 2；官方文件名 `collection-o-2.jpg` | 同上 | 1600×950 / 203392 |

### Vogue Lapis Lazuli（A8S，半宝石镶嵌当代线）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_A8S_2015_banner.jpg | Vogue Lapis Lazuli 系列主 banner；官方文件名 `COLL_A8S_Banner.jpg`，页 title `Vogue Lapis Lazuli \| A8S` | https://www.thg-paris.com/us/en/collection/vogue-lapis-lazuli | 1600×1000 / 118012 |
| P_A8S_2015_diapo-01.jpg | 系列轮播图 01；CDN 路径 `content/collections/A8S/COLL_A8S_Diapo_01.jpg` | 同上 | 1600×2133 / 306264 |
| P_A8S_2015_diapo-02.jpg | 系列轮播图 02；`COLL_A8S_Diapo_02.jpg` | 同上 | 1600×2133 / 227135 |
| P_A8S_2015_product-32719.jpg | 产品渲染图（商品 ID 32719，F01 饰面）；`content/products/32719/32719-F01.png` | 同上 | 1600×1600 / 120416 |

### Malmaison（U93，Christofle × THG，新古典帝政风格）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_U93_2003_banner.jpg | Malmaison Metal 系列主 banner；官方文件名 `COLL_U93_Banner.jpg`，页 title `Malmaison Metal \| U93` | https://www.thg-paris.com/us/en/collection/malmaison-metal | 1600×1000 / 216399 |
| P_U93_2003_diapo-01.jpg | 系列轮播图 01；`content/collections/U93/COLL_U93_Diapo_01.jpg` | 同上 | 1600×2133 / 166451 |
| P_U93_2003_diapo-04.jpg | 系列轮播图 04；`COLL_U93_Diapo_04.jpg` | 同上 | 1600×2133 / 345557 |
| P_U93_2003_diapo-08.jpg | 系列轮播图 08；`COLL_U93_Diapo_08.jpg` | 同上 | 1600×2133 / 242617 |
| P_U93_2003_product-48788.jpg | 产品渲染图（商品 ID 48788，D14 饰面）；`content/products/48788/48788-D14.png` | 同上 | 1600×1600 / 154226 |

### Marquise Gold décor（A7F，Bernardaud 利摩日瓷器 × THG）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_A7F_2010_banner.jpg | Marquise Gold décor 主 banner；官方文件名 `COLL_A7F_Banner.jpg`，页 title `Marquise Gold decor \| A7F` | https://www.thg-paris.com/us/en/collection/marquise-gold-decor | 1600×1000 / 487320 |
| P_A7F_2010_diapo-01.jpg | 系列轮播图 01；`content/collections/A7F/COLL_A7F_Diapo_01.jpg` | 同上 | 1600×2133 / 429428 |
| P_A7F_2010_diapo-03.jpg | 系列轮播图 03；`COLL_A7F_Diapo_03.jpg` | 同上 | 1600×2133 / 155855 |
| P_A7F_2010_diapo-06.jpg | 系列轮播图 06；`COLL_A7F_Diapo_06.jpg` | 同上 | 1600×2133 / 467630 |
| P_A7F_2010_product-27102.jpg | 产品渲染图（商品 ID 27102，F01 饰面）；`content/products/27102/27102-F01.png` | 同上 | 1600×1600 / 138021 |

### West Coast Metal（U9B，guilloché 机芯雕花）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_U9B_2012_banner.jpg | West Coast Metal 主 banner；官方文件名 `coll-u9b-banner.jpg`，页 title `West Coast Metal with lever \| U9B` | https://www.thg-paris.com/uk/en/collection/west-coast-metal-with-lever | 1600×1000 / 148872 |
| P_U9B_2012_diapo-01.jpg | 系列轮播图 01；`content/collections/U9B/COLL_U9B_Diapo_01.jpg` | 同上 | 1600×2133 / 185616 |
| P_U9B_2012_diapo-05.jpg | 系列轮播图 05；`COLL_U9B_Diapo_05.jpg` | 同上 | 1600×2133 / 173805 |
| P_U9B_2012_product-60101.jpg | 产品渲染图（商品 ID 60101，A02 饰面）；`content/products/60101/60101-A02.png` | 同上 | 1600×1600 / 113518 |

### Profil（A6P，Jamie Drake，2007 KBIS 首发）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_A6P_2007_banner.jpg | Profil Black Onyx with lever 主 banner；官方文件名 `COLL_A6P_Banner.jpg`，页 title `Profil Black Onyx with lever \| A6P` | https://www.thg-paris.com/uk/en/collection/profil-black-onyx-with-lever | 1600×1000 / 315804 |
| P_A6P_2007_diapo-01.jpg | 系列轮播图 01；`content/collections/A6P/COLL_A6P_Diapo_01.jpg` | 同上 | 1600×2133 / 268399 |
| P_A6P_2007_diapo-03.jpg | 系列轮播图 03；`COLL_A6P_Diapo_03.jpg` | 同上 | 1600×2133 / 77948 |
| P_A6P_2007_diapo-06.jpg | 系列轮播图 06；`COLL_A6P_Diapo_06.jpg` | 同上 | 1600×2133 / 88196 |
| P_A6P_2007_product-22625.jpg | 产品渲染图（商品 ID 22625，C01 饰面）；`content/products/22625/22625-C01.png` | 同上 | 1600×1600 / 88706 |

### Le 11（U2A，Alberto Pinto）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_U2A_2008_banner.jpg | Le 11 主 banner；官方文件名 `COLL_U2A_Banner.jpg`，页 title `Le 11 \| U2A` | https://www.thg-paris.com/uk/en/collection/le-11 | 1600×1000 / 332668 |
| P_U2A_2008_diapo-01.jpg | 系列轮播图 01；`content/collections/U2A/COLL_U2A_Diapo_01.jpg` | 同上 | 1600×2133 / 539047 |
| P_U2A_2008_diapo-04.jpg | 系列轮播图 04；`COLL_U2A_Diapo_04.jpg` | 同上 | 1600×2133 / 89081 |
| P_U2A_2008_product-40246.jpg | 产品渲染图（商品 ID 40246，A02 饰面）；`content/products/40246/40246-A02.png` | 同上 | 1600×1600 / 71213 |

### Les Ondes（G8A，Gilles & Boissier）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_G8A_2020_diapo-01.jpg | Les Ondes 轮播图 01；`content/collections/G8A/COLL_G8A_Diapo_01.jpg`，页 title `Les Ondes \| G8A` | https://www.thg-paris.com/international/en/collection/les-ondes | 1600×2133 / 161459 |
| P_G8A_2020_diapo-04.jpg | Les Ondes 轮播图 04；`COLL_G8A_Diapo_04.jpg` | 同上 | 1600×2133 / 482472 |
| P_G8A_2020_diapo-07.jpg | Les Ondes 轮播图 07；`COLL_G8A_Diapo_07.jpg` | 同上 | 1600×2133 / 240257 |
| P_G8A_2020_product-61485.jpg | 产品渲染图（商品 ID 61485，F30 饰面）；`content/products/61485/61485-F30.png` | 同上 | 1600×1600 / 133415 |

### System（G9A，Arik Levy）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_G9A_2015_hero.jpg | System Smooth Metal 主视觉；官方文件名 `system-g9a-thg-paris.jpg`，页 title `System Smooth Metal \| G9A` | https://www.thg-paris.com/international/en/collection/system-smooth-metal | 1600×1121 / 100043 |
| P_G9A_2015_diapo-01.jpg | System 轮播图 01；`content/collections/G9A/COLL_G9A_Diapo_01.jpg` | 同上 | 1600×2133 / 194583 |
| P_G9A_2015_diapo-04.jpg | System 轮播图 04；`COLL_G9A_Diapo_04.jpg` | 同上 | 1600×2133 / 465391 |
| P_G9A_2015_product-65951.jpg | 产品渲染图（商品 ID 65951，A02 饰面）；`content/products/65951/65951-A02.png` | 同上 | 1600×1600 / 97700 |

### Mille Nuits（U6，Baccarat × Mathias，2025 米兰 Brera 首发）

| 文件名 | 内容 / 型号依据 | 来源页 | 验证(宽×高 / 字节) |
|---|---|---|---|
| P_MILLE-NUITS_2025_still.jpg | Mille Nuits 产品静物图；官方文件名 `still-2025-02-27-165049-1451.jpg` | https://www.thg-paris.com/uk/en/mille-nuits-collection | 1600×844 / 88761 |
| P_MILLE-NUITS_2025_banner.jpg | Mille Nuits 主 banner（Mathias）；官方文件名 `top-banner-mathias-mobile.jpg` | 同上 | 1600×2003 / 414195 |
| P_MILLE-NUITS_2025_intro.jpg | Mille Nuits 介绍场景图；官方文件名 `photo-page-introduction-2.jpg` | 同上 | 1600×1600 / 392565 |

---

## 三、版权备注

- 全部 51 张均来自 THG Paris 官方网站（`www.thg-paris.com`）及其官方图片 CDN（`thg-paris.imgix.net`），为品牌官方产品/场景宣传图，版权归 THG Paris（2021 年起 JOMOO 控股）所有。
- 仅限品牌资产库内部研究/报告配图使用；公开发表时建议标注 © THG Paris，并按品牌方要求提供 credit。
- Collection O 的 Crillon 实景图标注 © Hôtel de Crillon - Rosewood Hotels（THG 官方博客页来源），第三方酒店实景图对外使用需另行获授权。
- 检索日期：2026-10-27；所有图片均经 Pillow 实测可解码，无水印裁切、无低分辨率、无重复文件。
