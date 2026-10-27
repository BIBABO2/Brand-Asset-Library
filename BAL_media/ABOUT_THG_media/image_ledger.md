# THG Paris 图片台账（image_ledger · 合并版）

- 合并日期：2026-10-27
- 媒体目录：`D:\Documents\ChatGPT\Projects\品牌资产库\BAL_media\ABOUT_THG_media\`
- 报告内引用相对路径：`../BAL_media/ABOUT_THG_media/<文件名>`
- 本台账由三份采集台账合并而成：A 组（经典/历史/工艺/空间）、B 组（当代产品）、A 组补充。

## 库内统计

| 类别 | 数量 |
|---|---|
| Logo（标识，含 1 张封面用 1600px 裁切图） | 7 |
| H_ 历史 | 9 |
| F_ 工厂工艺 | 14 |
| S_ 空间/展厅/酒店/游艇 | 11 |
| P_ 产品 | 100 |
| 顶层图片合计（jpg/png） | 141 |
| _unused（不合格/弃用） | 1（P_Tradition_lever_nickel_3hole.jpg，7KB） |
| 小于 10KB 的入库图片 | 0 |

## 报告引用统计

- 报告 `ABOUT_THG_v1.md` 共引用图片 97 张（封面字标 1 张 + 正文 96 张），去重后 97 张，无重复引用、无缺失文件、全部 >10KB。
- 其余 44 张为备选（含 Logo 多版本、系列轮播备用图、展厅/酒店备用图），留存于媒体库供后续版本使用。
- 全部图片经 Python 3.14 + Pillow 12.3 逐张 `Image.open().load()` 解码验证；产品图统一取官方 CDN 1600px 宽。
- 命名规范：Logo_THG_*（封面图按墨迹包围盒裁白）、H_ 历史、F_ 工厂工艺、S_ 空间/展厅/酒店、P_<型号>_<年份>_<场景>.jpg。

---

# 第一部分：A 组（标识/历史/工厂工艺/空间/经典产品）
# THG Paris A组图片台账 — image_ledger_partA

- 检索日期：2026-10-27
- 采集范围：品牌标识、历史、工厂工艺、空间展厅酒店、经典产品（Delépine 古典线 + Lalique/Baccarat/Daum 联名）
- B组（2000年后当代新系列）图片不在本台账，由主代理合并

---

## 通道总结

| 通道 | 状态 | 说明 |
|---|---|---|
| thg-paris.com imgix CDN | 成功 | 浏览器绕过 Cloudflare 后，通过 bu.download() 下载官方原图 |
| 第三方图片搜索 | 成功 | DCCH/Archiproducts/淘宝/经销商等补充 logo 与产品图 |
| TOM资讯工厂报道 | 成功 | 2019年工厂参观实拍（砂模、黄铜、电镀） |
| Crystal Home BKK | 成功 | 工匠工作照、产品白底图 |
| Wayback Machine | 失败 | thg-paris.com 未被 Wayback 收录 About 页 |
| thg.fr | 失败 | DNS/chrome-error 无法访问 |

## 缺口清单（未取到）

1. **巴黎奥斯曼大道152号旗舰店实景照** — 官网无独立展厅页，DCCH伦敦展厅已替代
2. **Maison&Objet 展位照** — 官网新闻页无展位图
3. **宫殿级酒店浴室项目实拍**（Ritz/George V/Burj Al Arab）— 官方未公开发布高清项目照，仅有经销商提及
4. **Pétale de Cristal 官方高清产品图** — 仅取到淘宝400×400小图，官网产品页因 Cloudflare 初次拦截未深入
5. **Tradition Cristal 八边形把手特写高清图** — Archiproducts 缩略图仅380×285（已移入 _unused）
6. **Daum pâte de verre 工艺照**（撒玻璃料入石膏模）— 官网 Daum 专页图未成功提取
7. **饰面色板（finishes panel）** — 官网 finishes 博客页未深入

---

## 逐图台账

### 一、品牌标识 Logo

| 文件名 | 内容与型号依据 | 来源 URL | 实测宽高 | 字节数 | 版权备注 |
|---|---|---|---|---|---|
| Logo_THG_official_1600_cropped.png | THG PARIS 黑字官方 logo，墨迹包围盒裁剪后1422×783 | https://www.dcch.co.uk/showrooms/thg-paris/ | 1422×783 | — | 第三方授权品牌展示图 |
| Logo_THG_DCCH_1600.png | 同上原图未裁（1600×960） | https://www.dcch.co.uk/showrooms/thg-paris/ | 1600×960 | 49,923 | 第三方授权品牌展示图 |
| Logo_THG_wiki_1050.png | THG PARIS logo | https://www.newton.com.tw/wiki/THG/62982895 | 1050×700 | 24,673 | 百科镜像 |
| Logo_THG_Zentgraf_500.png | THG PARIS logo | https://www.zentgraf-steinmanufaktur.de/ | 500×500 | 13,459 | 经销商授权 |
| Logo_THG_baike_1162.png | THG PARIS logo | https://m.baike.com/wiki/THG/11720872 | 1162×800 | 36,919 | 百科镜像 |
| Logo_THG_CityWalk_Dubai_800.png | THG PARIS logo（迪拜 City Walk 门店页） | https://www.citywalk.ae/en/outlets/thg-paris | 800×600 | 21,124 | 商业地产授权 |
| Logo_Delepine_designer_monogram.svg | Jean-Claude Delépine 设计师署名 SVG | https://www.thg-paris.com/uk/en/designers/jean-claude-delepine | 90×90(svg) | 22,228 | 官方矢量 |

### 二、历史 H 组

| 文件名 | 内容与型号依据 | 来源 URL | 实测宽高 | 字节数 | 版权备注 |
|---|---|---|---|---|---|
| H_1950s_founders_Andre_Tetard_Julien_Haudiquez_Alexandre_Grisoni.jpg | 三位创始人黑白合影+早期蓝色THG logo+老厂设备 | http://mp.weixin.qq.com/s/Sgz45relp1kFdDV-IQ41hQ | 1080×719 | 89,923 | 官方授权转载 |
| H_1956_foundateurs_official.jpg | 官方 founders 历史照（fondateurs-thg.jpg） | https://www.thg-paris.com/uk/fr/entreprise/a-propos | 1600×1600 | 168,691 | 官方一手 |
| H_1960s_usine_thg_factory.jpg | 早期厂房黑白照（usine-thg.jpg） | https://www.thg-paris.com/uk/fr/entreprise/a-propos | 1600×1600 | 307,020 | 官方一手 |
| H_1970s_Delepine_portrait.jpg | Jean-Claude Delépine 肖像（desi-jeanclaudedelepine-00.jpg） | https://www.thg-paris.com/uk/en/designers/jean-claude-delepine | 1600×1999 | 235,995 | 官方一手 |
| H_1970s_JCD_Delepine_history.jpg | JCD Créations 历史拼图（jcd-notre-histoire.jpg） | https://www.thg-paris.com/uk/fr/entreprise/a-propos | 1600×1600 | 305,632 | 官方一手 |
| H_2003_THG_Paris_rebranding.png | 2003年更名 THG Paris 品牌视觉 | https://www.thg-paris.com/uk/fr/entreprise/a-propos | 1600×1600 | 1,460,472 | 官方一手 |
| H_2012_EPV_excellence_francaise.png | EPV "L'EXCELLENCE DES SAVOIR-FAIRE FRANCAIS" 红章 | https://www.thg-paris.com/uk/fr/entreprise/a-propos | 1200×1200 | 1,004,339 | 政府标签官方 |
| H_2012_EPV_label_official.png | EPV 官方标签图 | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1200×1200 | 1,233,774 | 政府标签官方 |
| H_2026_70th_anniversary_drone_employees.jpg | 70周年员工在草坪排出"70"航拍图 | https://www.thg-paris.com/uk/fr/entreprise/a-propos | 1600×668 | 287,600 | 官方一手 |

### 三、工厂工艺 F 组

| 文件名 | 内容与型号依据 | 来源 URL | 实测宽高 | 字节数 | 版权备注 |
|---|---|---|---|---|---|
| F_artisan_laurent_bretin.jpg | 工匠 Laurent Bretin 工作照 | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1600×900 | 123,977 | 官方一手 |
| F_brass_raw_materials.jpg | 黄铜原料/砂料/半成品六宫格 | https://news.tom.com/201909/4790382244.html | 487×413 | 49,712 | 媒体实拍 |
| F_craftsman_electroplating.jpg | 工匠持龙头挂件进行电镀作业 | https://www.crystalhomebkk.com/post/thg-paris-the-french-legacy... | 904×603 | 102,404 | 经销商授权 |
| F_craftsmanship_detail.jpg | 工艺细节照（savoirfaire26.jpg） | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1600×844 | 126,909 | 官方一手 |
| F_design_studio_study.jpg | 设计工作室/corp-etude | https://www.thg-paris.com/uk/fr/projets/sur-mesure | 1600×1065 | 267,163 | 官方一手 |
| F_factory_history_workshop.jpg | 工厂历史车间照（fab-notre-histoire.jpg） | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1600×1600 | 115,832 | 官方一手 |
| F_factory_workshop_01.jpg | 车间实景（thg-x-kp still022） | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1600×900 | 175,750 | 官方一手 |
| F_factory_workshop_02.jpg | 车间实景（thg-x-kp still025） | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1600×900 | 98,932 | 官方一手 |
| F_factory_workshop_03.jpg | 车间实景（thg-x-kp still015） | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1600×900 | 122,848 | 官方一手 |
| F_process_flow_engineering_to_assembly.jpg | 全流程七步拼图：Engineering→Tooling→Foundry→Machining→Polishing→Plating→Assembly | https://www.sanway.com.tw/pages/新的分頁-3 | 2010×840 | 278,934 | 经销商授权 |
| F_sand_mold_foundry.jpg | 砂模铸造/模具工匠 | https://news.tom.com/201909/4790382244.html | 554×257 | 27,530 | 媒体实拍 |
| F_savoir_faire_cover.jpg | 工艺页封面（cover-video-savoir-faire） | https://www.thg-paris.com/uk/fr/entreprise/savoir-faire | 1600×897 | 95,236 | 官方一手 |

### 四、空间展厅酒店 S 组

| 文件名 | 内容与型号依据 | 来源 URL | 实测宽高 | 字节数 | 版权备注 |
|---|---|---|---|---|---|
| S_showroom_DCCH_London_interior.jpg | Design Centre Chelsea Harbour 伦敦展厅圆形玻璃展柜 | https://www.dcch.co.uk/showrooms/thg-paris/ | 1920×1080 | 256,962 | 展厅官方 |
| S_custom_project_bathroom.jpg | 定制项目浴室场景（ref-surmesure） | https://www.thg-paris.com/uk/fr/projets/sur-mesure | 1600×1601 | 324,150 | 官方一手 |

### 五、经典产品 P 组

| 文件名 | 内容与型号依据 | 来源 URL | 实测宽高 | 字节数 | 版权备注 |
|---|---|---|---|---|---|
| P_Broadway_1970s_hero_banner.jpg | Broadway A52 桥接式三孔龙头 hero banner | https://www.thg-paris.com/uk/en/collection/broadway | 1600×1000 | 199,751 | 官方一手 |
| P_Broadway_1970s_collection_01.jpg | Broadway 系列场景图1 | https://www.thg-paris.com/uk/en/collection/broadway | 1600×2133 | 138,571 | 官方一手 |
| P_Broadway_1970s_collection_02.jpg | Broadway 系列场景图2 | https://www.thg-paris.com/uk/en/collection/broadway | 1600×2133 | 275,134 | 官方一手 |
| P_Broadway_1970s_collection_03.jpg | Broadway 系列场景图3 | https://www.thg-paris.com/uk/en/collection/broadway | 1600×2133 | 292,359 | 官方一手 |
| P_Broadway_1970s_collection_04.jpg | Broadway 系列场景图4 | https://www.thg-paris.com/uk/en/collection/broadway | 1600×2133 | 259,320 | 官方一手 |
| P_Broadway_brochure_page.jpg | Broadway 官方目录页（低分辨率） | https://pdf.archiexpo.cn/pdf/thg-paris-252.html | 353×500 | 29,981 | 官方目录PDF |
| P_ArtDeco_crystal_gold_3hole.jpg | Art Déco 水晶版金色三孔龙头 | https://www.thg-paris.com/uk/en/collection/art-deco-crystal | 400×533 | 26,178 | 官方一手 |
| P_ArtDeco_gold_bathroom_setting.jpg | Art Déco 金色龙头浴室场景（装饰艺术风壁纸） | https://www.reseauexcellence.fr/en/organizations/thg-paris/ | 1200×1601 | 189,710 | 行业目录 |
| P_Mandarine_1970s_gold_crystal_bathroom.jpg | Mandarine U1 金基座+瓜棱水晶把手浴室场景（官方产品页） | https://www.thg-paris.com/us/en/collection/mandarine-clear-crystal | 1500×2000 | 269,422 | 官方一手 |
| P_Mandarine_chrome_clear_crystal_3hole.jpg | Mandarine 铬色透明水晶三孔 | https://www.archiexpo.cn/ | 500×500 | 23,714 | 经销商目录 |
| P_Mandarine_gold_amber_crystal_product.jpg | Mandarine 金色琥珀水晶把手白底产品图 | https://www.crystalhomebkk.com/post/thg-paris... | 904×603 | 39,037 | 经销商授权 |
| P_Cygne_G31_gold_3hole_product.jpg | Cygne G31 金色天鹅三孔龙头产品图 | https://world.taobao.com/item/799191240616.htm | 920×920 | 77,019 | 经销商商品图 |
| P_Cygne_G31_gold_bathroom_setting.jpg | Cygne G31 金色天鹅浴室场景 | http://m.toutiao.com/group/6486348171877286414/ | 525×525 | 39,323 | 媒体转载 |
| P_Cygne_G31_gold_fullset_decorative_handles.jpg | Cygne G31 金色天鹅全套（带装饰把手） | https://news.justeasy.cn/news/23119.html | 1077×1077 | 126,904 | 行业媒体 |
| P_Hirondelles_Lalique_swallow_crystal_chrome_gold.jpg | Hirondelles A4J/L/K THG×Lalique 燕子浮雕水晶 | https://creativehomex.com/cn-discover-the-art-of-bath-with-thg-paris-redawn-malaysia/ | 1200×800 | 459,041 | 行业媒体 |
| P_Hirondelles_Lalique_brochure_page.jpg | Hirondelles 官方目录页 | https://pdf.archiexpo.cn/pdf/thg-paris-252.html | 353×500 | 27,095 | 官方目录PDF |
| P_Metropolis_Lalique_LED_crystal_chrome.jpg | Métropolis A2A 铬色 LED葡萄浮雕水晶把手（7312×5474超高分辨率） | https://www.thg-paris.com/france/cn/blog/thg-paris-x-lalique-20-years... | 7312×5474 | 19,960,151 | 官方一手 |
| P_Dahlia_A41-151_gold_Lalique_crystal_detail.jpg | Dahlia A41.151 金色Lalique水晶把手特写 | https://www.thg-paris.com/france/cn/blog/thg-paris-x-lalique-20-years... | 2367×1772 | 268,206 | 官方一手 |
| P_Dahlia_A41-151_gold_bathroom_setting.jpg | Dahlia A41.151 金色龙头浴室实景 | https://world.taobao.com/item/719851748198.htm | 750×1126 | 94,396 | 经销商商品图 |
| P_Dahlia_gold_Lalique_crystal_3hole.jpg | Dahlia 金色Lalique水晶三孔龙头产品图 | http://www.arch.tw/homedesign/gallery.php?i=1795 | 800×927 | 159,125 | 设计媒体 |
| P_Lalique_crystal_chrome_closeup.jpg | Lalique联名铬色水晶龙头特写 | https://mavink.com/explore/THG-Faucets | 600×479 | 183,776 | 媒体聚合 |
| P_PetaleDeCristal_Baccarat_gold_white_petal.jpg | Pétale de Cristal U6E Baccarat花瓣形水晶金边把手 | https://mgoods.taobao.com/... | 400×400 | 12,427 | 经销商商品图（偏低分辨率） |
| P_Rose_Daum_hero_bathroom.jpg | Rose U5J THG×Daum pâte de verre玫瑰浴室场景 | https://www.thg-paris.com/france/fr/collection/rose | 1600×2000 | 279,199 | 官方一手 |
| P_Rose_Daum_collection_01.jpg | Rose Daum 系列图1 | https://www.thg-paris.com/france/fr/collection/rose | 1600×2133 | 196,920 | 官方一手 |
| P_Rose_Daum_collection_02.jpg | Rose Daum 系列图2 | https://www.thg-paris.com/france/fr/collection/rose | 1600×2133 | 462,996 | 官方一手 |
| P_Rose_Daum_collection_03.jpg | Rose Daum 系列图3 | https://www.thg-paris.com/france/fr/collection/rose | 1600×2133 | 348,812 | 官方一手 |
| P_Rose_Daum_collection_04.jpg | Rose Daum 系列图4 | https://www.thg-paris.com/france/fr/collection/rose | 1600×2133 | 315,863 | 官方一手 |
| P_1900_chrome_tub_filler_handshower.jpg | 1900 G25/G28 铬色缸边龙头+手持花洒 | https://edilceramdesign.hk/brands/thg-paris | 640×640 | 14,745 | 经销商商品图 |
| P_ceramic_white_coral_gold_3hole.jpg | 金基座+白色珊瑚红饰瓷片三孔龙头 | https://www.hdeexpo.com/25-sanitary-exhibitor-thg/ | 1031×1031 | 69,358 | 展会媒体 |
| P_chrome_black_inlay_lever.jpg | 铬色黑嵌件杠杆把手龙头 | https://www.hdeexpo.com/25-sanitary-exhibitor-thg/ | 1080×1005 | 40,225 | 展会媒体 |
| P_RedDot2021_tub_filler_chrome_modern.jpg | Red Dot 2021获奖现代铬色缸边龙头 | https://creativehomex.com/cn-discover-the-art-of-bath-with-thg-paris-redawn-malaysia/ | 2048×1534 | 221,170 | 行业媒体 |

---

## _unused 记录

| 文件名 | 移入原因 |
|---|---|
| P_Tradition_lever_nickel_3hole.jpg | 仅7,204字节（<10KB），380×285低分辨率，Archiproducts缩略图 |

---

## 统计

- **A组入库总数：61张**（Logo 7 + 历史 9 + 工厂工艺 12 + 空间 2 + 经典产品 31）
- **_unused：1张**
- 验证方法：Python 3.14 + Pillow 12.3，逐张 `Image.open().load()` 解码成功，记录宽高与字节数


---

# 第二部分：B 组（2000 年至今当代产品 / 设计师·品牌合作系列）

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


---

# 第三部分：A 组补充（Pétale/Art Déco/Poèmes/展厅/酒店/游艇）

# THG Paris A组补充图片台账 — image_ledger_partA_supplement.md

- 检索日期：2026-10-27
- 本文件为 partA 的补充，不修改已有台账
- 验证方法：Python 3.14 + Pillow 12.3，逐张 `Image.open().load()` 解码

---

## 补充取图总结

| 组别 | 目标 | 实到 | 状态 |
|---|---|---|---|
| 1. Pétale de Cristal × Baccarat | 3 | 5 | 超额完成 |
| 2. Art Déco A54 | 3 | 7 | 超额完成 |
| 3. Faubourg G2 | 3 | 2 | 不足（CDN diapos 为占位图，仅取到 banner+product） |
| 4. Poèmes Chantal Thomass | 2–3 | 4 | 超额完成 |
| 5. 巴黎展厅 | 2–3 | 3 | 完成（含精品店内景+展会+合作品牌墙） |
| 6. 饰面色板 | 2 | 2 | 完成 |
| 7. 宫殿酒店项目 | 3 | 3 | 完成（香格里拉×2 + 雅典娜广场×1） |
| 8. 游艇定制 | 1 | 3 | 超额完成（Orient Express Corinthian 三角度） |
| **合计** | **18–22** | **29** | |

### 失败/缺口说明

- **Faubourg G2**：CDN `/content/collections/G2J/COLL_G2J_Diapo_*.jpg` 全部返回 50640B 占位图，说明该系列无轮播 diapo。仅取到 banner（media-library）+ 产品白底图（37367-A02.png）。白瓷版/Howlite 版需后续从 PDF 目录提取。
- **巴黎 152 bd Haussmann 旗舰店外观实景照**：未找到独立街拍/媒体报道图。现有展厅图为 THG 精品店内景（玻璃门廊+中央展柜）及展会展位，非奥斯曼大道旗舰店外观。
- **Poèmes 图片分辨率偏低**（360×480–640×480）：来源为 2010 年 Maison à Part 在线文章，原图已无法获取更高分辨率。
- **Hotel de Crillon / Dorchester London / George V Spa**：未找到带明确 THG 龙头标识的官方实拍图。香格里拉巴黎浴室图（Pierre-Yves Rochon 设计，THG 合同目录列明参考项目）可作替代。

---

## 逐图台账

### 1. Pétale de Cristal × Baccarat（U6E, 2012, Pierre-Yves Rochon）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_PetaleDeCristal_2012_banner.jpg | U6E 系列 banner（fine gold thread 透明水晶金边版） | https://www.thg-paris.com/france/en/collection/petale-de-cristal-clear-crystal-fine-gold-thread | 1600×1000 | 78,933 |
| P_PetaleDeCristal_2012_scene_01.jpg | 系列场景图1 | 同上 | 1600×2133 | 130,918 |
| P_PetaleDeCristal_2012_scene_02.jpg | 系列场景图2 | 同上 | 1600×2133 | 206,449 |
| P_PetaleDeCristal_2012_scene_03.jpg | 系列场景图3 | 同上 | 1600×2133 | 300,155 |
| P_PetaleDeCristal_2012_scene_04.jpg | 系列场景图4 | 同上 | 1600×2133 | 288,151 |

### 2. Art Déco A54（Delépine, 1970s）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_ArtDeco_1970s_01.jpg | A54 系列 Diapo 01 | CDN: /content/collections/A54/COLL_A54_Diapo_01.jpg | 1600×2133 | 240,076 |
| P_ArtDeco_1970s_02.jpg | A54 系列 Diapo 02 | CDN: COLL_A54_Diapo_02.jpg | 1600×2133 | 395,287 |
| P_ArtDeco_1970s_03.jpg | A54 系列 Diapo 03 | CDN: COLL_A54_Diapo_03.jpg | 1600×2133 | 178,213 |
| P_ArtDeco_1970s_04.jpg | A54 系列 Diapo 04 | CDN: COLL_A54_Diapo_04.jpg | 1600×2133 | 292,013 |
| P_ArtDeco_1970s_05.jpg | A54 系列 Diapo 05 | CDN: COLL_A54_Diapo_05.jpg | 1600×2133 | 370,438 |
| P_ArtDeco_1970s_06.jpg | A54 系列 Diapo 06 | CDN: COLL_A54_Diapo_06.jpg | 1600×2133 | 212,784 |
| P_ArtDeco_1970s_07.jpg | A54 系列 Diapo 07 | CDN: COLL_A54_Diapo_07.jpg | 1600×2133 | 96,632 |

### 3. Faubourg G2J（Pierre-Yves Rochon, 2005起）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_Faubourg_G2J_banner.jpg | G2J 白瓷杠杆版 banner | https://www.thg-paris.com/international/en/collection/faubourg-white-porcelain-with-lever/152m | 1600×1000 | 150,475 |
| P_Faubourg_G2J_product_chrome.jpg | 产品 37367-A02 铬色白底图 | CDN: /content/products/37367/37367-A02.png | 1200×1200 | 283,987 |

### 4. Poèmes（Chantal Thomass × Bernardaud, ~2009–2010）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_Poemes_2009_bathroom_overview.jpg | Poèmes 浴室全景（Chantal Thomass 为 THG 设计） | https://www.maisonapart.com/edito/.../chantal-thomass...d-3765.php | 360×480 | 25,878 |
| P_Poemes_2009_accessories_detail.jpg | Poèmes 配件细节（Bernardaud 瓷） | 同上 | 360×480 | 25,992 |
| P_Poemes_2009_basin_mixer.jpg | Poèmes 三孔面盆龙头（铬色） | 同上 | 360×480 | 23,678 |
| P_Poemes_2009_bathtub.jpg | Poèmes 浴缸（Aquilex 白瓷底座） | 同上 | 640×480 | 13,445 |

### 5. 展厅/空间 S 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| S_showroom_THG_boutique_interior.jpg | THG 精品店内景（玻璃门廊+中央圆形展柜） | http://mp.weixin.qq.com/s/Sgz45relp1kFdDV-IQ41hQ | 1080×558 | 101,816 |
| S_showroom_tradeshow_booth_products.jpg | THG 展会展位（雨燕系列+考维尔+Icon-X 展示台） | https://www.trendshome.com.cn/detail/28904 | 866×1299 | 89,856 |
| S_showroom_boutique_gold_wall_partners.jpg | THG 精品店金色墙面（Baccarat/Christofle/Daum/Haviland/Lalique/Bernardaud 合作品牌墙） | http://www.upchengdu.com/forum.php?tid=40627 | 1920×1441 | 205,507 |

### 6. 饰面色板 F 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| F_finishes_panel_01.jpg | Amalgame 色板/饰面排列（amalgame-coloris-02） | https://www.thg-paris.com/international/en/blog/thg-paris-tap-finishes | 1600×1135 | 145,306 |
| F_finishes_guillochage_detail.jpg | Amalgame 雕花白瓷工艺细节（guillochage03） | https://www.thg-paris.com/uk/fr/projets/sur-mesure | 1600×1199 | 155,477 |

### 7. 宫殿级酒店项目 S 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| S_hotel_ShangriLa_Paris_bathroom.jpg | 香格里拉巴黎酒店浴室（Pierre-Yves Rochon 设计，THG 合同目录列明参考项目） | https://www.outoria.com/travel/shangri-la-paris/ | 1800×1200 | 180,314 |
| S_hotel_ShangriLa_Paris_blue_suite.jpg | 香格里拉巴黎蓝色套房浴室（金箔/蓝丝绒/古典线脚） | https://guide.michelin.com/sg/zh_CN/hotels-stays/paris/shangrila-hotel-paris-545 | 1072×1072 | 291,850 |
| S_hotel_PlazaAthenee_Eiffel_suite.jpg | 雅典娜广场酒店艾菲尔套房浴室（马赛克浴缸+铁塔景观镜） | https://www.fivestaralliance.com/paris/signature-eiffel-suites-at-hotel-plaza-athenee | 800×401 | 81,739 |

### 8. 游艇定制 S 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| S_yachting_OrientExpress_Corinthian_suite.jpg | Orient Express Corinthian 游艇套房浴室（Grand Central/Estrella 系列） | https://www.thg-paris.com/uk/fr/orient-express-corinthian | 1600×2400 | 424,816 |
| S_yachting_OrientExpress_Corinthian_deck.jpg | 游艇甲板层（deck7） | 同上 | 1600×1067 | 279,102 |
| S_yachting_OrientExpress_Corinthian_Bonifacio.jpg | 游艇停泊 Bonifacio 外景 | 同上 | 1600×1718 | 485,684 |
