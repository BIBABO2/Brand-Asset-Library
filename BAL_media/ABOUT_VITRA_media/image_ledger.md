# Vitra 品牌档案图片台账

- **品牌**：Vitra（瑞士家具企业，Fehlbaum 家族；总部与主厂区位于德国 Weil am Rhein）
- **检索/下载日期**：2026-10-26（UTC+8，Asia/Shanghai）
- **媒体目录**：`D:\Documents\ChatGPT\Projects\品牌资产库\BAL_media\ABOUT_VITRA_media\`
- **验证方式**：Python + Pillow（PIL）逐张 `Image.open().load()` 实测格式/宽高/字节数；全部 >10KB 且可解码；型号与画面经人工目检核对；不合格件移入 `_unused\`
- **命名规范**：`Logo_*` 根目录；`H_<年份>_<主题>.jpg`；`F_<主题>.jpg`；`S_<主题>.jpg`；`P_<型号>_<年份>_<场景>.jpg`；文件名无空格/中文
- **配额核对**：全目录入库 **72 张**（Logo 1 · H 4 · F 8 · S 5 · P 54），目标 55–75 ✓；非产品图（H+F+S）**17 张**，目标 10–17 ✓；`_unused\` 暂存 6 个
- **取图通道总结（A 组：Logo/H/F/经典产品）**：vitra.com 主站 Cloudflare Turnstile 反复拦截，Logo 改由官方 factsheet PDF 矢量高倍渲染（1632×544，≥1600 达标）；eamesoffice.com、design-museum.de、zhfoundation.com、herzogdemeuron.com、verner-panton.com、Dezeen、scandinavia-design.fr、findmy.vitra.com（Storyblok CDN）、shop.design-museum.de 直连成功；store.vitra.co.jp 429、Wikimedia Commons API TLS 超时、MoMA 馆藏页 Turnstile（缺口见文末）
- **取图通道总结（B 组：当代产品/空间体验）**：findmy.vitra.com 官方目录站（a.storyblok.com CDN 2000–6200px 原图）、design-museum.de、经销商托管官方 factbook PDF（konsepti.com / think-furniture.com / scandinavia-design.fr / smow.ch / Shopify CDN）PyMuPDF 渲染取页；图片检索补官方新闻图（si.edu/Cooper Hewitt 馆藏、vitra.com 官方产品图、vitracircle.com、pacegallery、metalocus、jdcorporateblog、pantertourron.com）；vitra.com stories 403、store.moma.org 403、cooperhewitt.org 403、archive.org 不可达等如实列缺口
- **版权与来源原则**：全部 URL 真实可追溯、无编造；无法取得真实来源的图不采用（宁缺毋滥，指南 12.6）；馆藏/新闻/设计方图片按各自版权备注标注，报告引用保留权利方署名

---

## 一、A 组台账（Logo · 历史 H · 园区建筑与工艺 F · 经典产品 P，共 44 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_Vitra_wordmark.png | Vitra 官方小写无衬线粗体字标「vitra.」；自官方 factsheet 矢量重渲染（28×），已按墨迹包围盒裁白边（留 8px），裁剪前 raw 4964×2016 → 裁剪后 **1632×544**（宽度 ≥1600 达标，矢量渲染非插值） | 官方 factsheet PDF `https://shop2285.hstatic.dk/upload_dir/shop/vitra/factsheet-coconut-chair-vitra.pdf`（vitra.com 被 Cloudflare 拦截，改此源） | PIL PNG 1632×544，30KB，可解码 | 2026-10-26 | Vitra AG 商标；报告内标注「© Vitra」 |
| H_Willi_Erika_Fehlbaum_EamesOffice_1960s.jpg | 1960s，左起 Charles Eames、Erika 与 Willi Fehlbaum（Vitra 创始人）、Ray Eames 在 Eames Office；图注原文「Left to right: Charles Eames, Erika and Willi Fehlbaum…© Eames Office, LLC」 | `https://www.smow.de/pdf/vitra-sustainability-report-2020-en.pdf` 第 6 页 | PIL JPEG 682×482，108KB；PDF 内嵌原图 xref=67 提取 | 2026-10-26 | © Eames Office, LLC |
| H_Claudio_Marconi_CEO_2026.jpg | 2026 年新任 CEO Claudio Marconi（右）与创意总监 Marianne Goebl（左）任命官方照 | `https://www.dezeen.com/2026/06/22/vitra-appoints-ceo-creative-director/`（hero 图） | PIL JPEG 2364×1330，563KB | 2026-10-26 | Dezeen / Vitra 官方新闻稿配图 |
| H_Nora_Fehlbaum_Chairwoman.jpg | Nora Fehlbaum（Vitra 董事长）肖像，Tom Ziora 摄 | `https://www.dezeen.com/2024/03/.../vitra-nora-fehlbaum-tom-ziora-dezeen/`（同 Dezeen 域 static-2026.dezeen.com） | PIL JPEG 1600×1600，431KB（原 5296×5296 缩至 1600） | 2026-10-26 | © Tom Ziora / Dezeen |
| H_Rolf_Fehlbaum_portrait.jpg | Rolf Fehlbaum 肖像 | `https://www.dezeen.com/2014/05/.../Rolf-Fehlbaum_dezeen_sq.jpg` | PIL JPEG 468×468，28KB | 2026-10-26 | Dezeen（分辨率偏小，备选） |
| F_Schaudepot_Herzog_de_Meuron_2016.jpg | Vitra Schaudepot，Herzog & de Meuron 2016，红砖山墙外观 | `https://www.herzogdemeuron.com/projects/417-vitra-schaudepot/`（OG 图 picturepark CDN） | PIL JPEG 2300×1654，562KB | 2026-10-26 | © HdM / Vitra Design Museum |
| F_Fire_Station_Zaha_Hadid_1993.jpg | 维特拉园区消防站，Zaha Hadid 1993，建成实景黄昏（混凝土折线体量 + 消防车） | `https://www.zhfoundation.com/collections/vitra-fire-station/`（CRIC-2426） | PIL JPEG 1280×1015，109KB | 2026-10-26 | © Zaha Hadid Foundation |
| F_Vitra_Design_Museum_Gehry_1989.jpg | Vitra Design Museum 主楼，Frank Gehry 1989，白色解构主义 | `https://www.design-museum.de/en/information/vitra-campus.html` | PIL JPEG 774×774，71KB | 2026-10-26 | © Vitra Design Museum |
| F_VitraHaus_Herzog_de_Meuron_2010.jpg | VitraHaus，Herzog & de Meuron 2010，堆叠山墙体量 | 同上 design-museum.de 园区页 | PIL JPEG 925×925，204KB | 2026-10-26 | © Vitra Design Museum |
| F_SANAA_Vitrashop_factory_2012.jpg | SANAA 厂房（Vitra 制造），2012，白色波纹板 + 装卸口 | 同上 design-museum.de 园区页 | PIL JPEG 661×661，48KB | 2026-10-26 | © Vitra Design Museum |
| F_Conference_Pavilion_Tadao_Ando_1993.jpg | 安藤忠雄会议中心，1993，清水混凝土 + 下沉庭院 | 同上 design-museum.de 园区页 | PIL JPEG 1024×1023，143KB | 2026-10-26 | © Vitra Design Museum |
| F_Doshi_Retreat_2025_Weil_am_Rhein.jpg | Doshi Retreat，2025，Weil am Rhein | 同上 design-museum.de 园区页 | PIL JPEG 1200×1200，115KB | 2026-10-26 | © Vitra Design Museum |
| F_Eames_plywood_mould_workshop.jpg | Eames 胶合板热压成型工作室历史照（弯曲模具与模板），对应胶合板工艺 CMF | `https://www.eamesoffice.com/the-work/molded-plywood-group/` | PIL JPEG 1024×711，150KB | 2026-10-26 | © Eames Office, LLC |
| P_LoungeChair_1956_walnut.jpg | Eames Lounge Chair & Ottoman（1956），胡桃木饰面 + 黑色皮，整体 | `https://www.eamesoffice.com/product/eames-lounge-chair-and-ottoman/` | PIL JPEG 2560×2048，185KB | 2026-10-26 | © Eames Office / Vitra |
| P_LoungeChair_1956_side.jpg | 同上，侧面角度 | 同上 | PIL JPEG 2048×2560，803KB | 2026-10-26 | © Eames Office / Vitra |
| P_LoungeChair_1956_moma.jpg | 同上，整体第三视图（670 系列） | 同上 | PIL JPEG 1460×1052，214KB | 2026-10-26 | © Eames Office / Vitra |
| P_LCW_1946_walnut.jpg | Eames LCW（Lounge Chair Wood，1946），胡桃木低木底座 | `https://www.eamesoffice.com/the-work/lcw/` | PIL JPEG 1024×768，34KB | 2026-10-26 | © Eames Office / Vitra |
| P_LCW_1946_detail.jpg | 同上，细节 | 同上 | PIL JPEG 1702×2560，190KB | 2026-10-26 | © Eames Office / Vitra |
| P_DCM_1946.jpg | Eames DCM（Dining Chair Metal，1946），胶合板壳 + 钢棒腿 | `https://www.eamesoffice.com/the-work/dcm/` | PIL JPEG 1995×3000，629KB | 2026-10-26 | © Eames Office / Vitra |
| P_LaChaise_1948_fiberglass.jpg | La Chaise（1948，Eames），白色玻璃钢有机形态 + 钢棒木十字底座 | `https://www.eamesoffice.com/the-work/la-chaise-2-2/` | PIL JPEG 2560×1702，213KB | 2026-10-26 | © Eames Office / Vitra |
| P_LaChaise_1948_making.jpg | La Chaise 制作过程历史照（团队翻制玻璃钢模具） | 同上 | PIL JPEG 2560×1999，613KB | 2026-10-26 | © Eames Office, LLC |
| P_WireDKR_1951_black.jpg | Wire Chair DKR（1951），镀铬钢丝网壳 + 黑色皮革坐垫 | `https://www.eamesoffice.com/the-work/wire-chairs/` | PIL JPEG 776×1000，53KB | 2026-10-26 | © Eames Office / Vitra |
| P_Fiberglass_1950_bases.jpg | Fiberglass/塑料壳椅系列底座工程历史照（Eiffel 等多种金属/木底座） | `https://www.eamesoffice.com/the-work/molded-shell-chairs/` | PIL JPEG 1024×831，119KB | 2026-10-26 | © Eames Office, LLC |
| P_Panton_1967_color_series.jpg | Panton Chair 1967 Mobilia 杂志多色阵列（红/黄/蓝/绿/黑/白），体现材料与色彩沿革 | `https://www.verner-panton.com/en/collection/panton-chair/` | PIL JPEG 676×687，124KB | 2026-10-26 | © Verner Panton Design / Mobilia No.145 1967 |
| P_BallClock_1949_multicolor.jpg | Nelson Ball Clock（1949），彩色木球辐条钟（非鸟钟） | `https://www.konsepti.com/data/files/products/8500/1744619285-5429115_factsheet-wall-clocks-2024-en_master-2.pdf`（200dpi 渲染裁剪） | PIL JPEG 370×330，18KB | 2026-10-26 | © Vitra AG / George Nelson |
| P_Coconut_1955_side.jpg | Coconut Chair（1955）白壳黑皮侧视，钢丝底座（findmy 官方 Storyblok 原图，取代早期低清 factsheet 裁剪） | `https://findmy.vitra.com/en-global/products/lounge-chairs/coconut-chair`（a.storyblok.com/f/118536） | PIL JPEG 2000×2000，171KB | 2026-10-26 | © Vitra AG |
| P_LoungeChair_1956_scene.jpg | Eames Lounge Chair & Ottoman 橡木色家居场景图（白砖墙+花瓶） | `https://findmy.vitra.com/en-global/products/lounge-chairs/lounge-chair`（Storyblok room-image_lc_square） | PIL JPEG 2000×2000，1031KB | 2026-10-26 | © Vitra AG |
| P_DCM_1946_front.jpg | DCM（1946）正面（findmy 官方产品图，与既有 P_DCM_1946 历史照角度互补） | `https://findmy.vitra.com/en-global/products/lounge-chairs/plywood-group-dcm` | PIL JPEG 2000×2000，145KB | 2026-10-26 | © Vitra AG / Eames |
| P_LCW_1946_front.jpg | LCW（1946）正面（findmy 官方产品图） | `https://findmy.vitra.com/en-global/products/lounge-chairs/plywood-group-lcw` | PIL JPEG 2000×2000，189KB | 2026-10-26 | © Vitra AG / Eames |
| P_PlasticSideChair_PSCC_grey.jpg | Eames Plastic Side Chair PSCC（石墨灰壳+五星脚轮底座）——注：为办公转椅变体，非 DSR 钢丝脚 | `https://findmy.vitra.com/en-global/products/chairs/eames-plastic-chair-pscc` | PIL JPEG 2000×2000，130KB | 2026-10-26 | © Vitra AG / Eames |
| P_Fiberglass_RAR_green.jpg | Eames Fiberglass Armchair RAR（1948，灰绿玻璃钢壳+埃菲尔摇椅底） | `https://findmy.vitra.com/en-global/products/lounge-chairs/eames-fiberglass-armchair-rar` | PIL JPEG 2000×2000，181KB | 2026-10-26 | © Vitra AG / Eames |
| P_CompasDirection_1953_desk.jpg | Compas Direction 书桌（Jean Prouvé 1953），橡木桌面+深棕圆规式外张腿 | `https://www.scandinavia-design.fr/VITRA/compas-direction-desk-jean-prouve.html` | PIL JPEG 1920×1414，133KB | 2026-10-26 | © Vitra AG / Jean Prouvé |
| P_EamesHouseBird_black.jpg | Eames House Bird 黑桤木（黑蜡木）鸟摆件，细金属腿——明确为摆件、非钟 | `https://www.scandinavia-design.fr/VITRA/eames-house-bird.html` | PIL JPEG 700×748，26KB | 2026-10-26 | © Vitra AG / Eames |
| P_EamesHouseBird_detail.jpg | 同上，细节角度 | 同上 | PIL JPEG 700×748，46KB | 2026-10-26 | © Vitra AG / Eames |
| P_Panton_1999_pp_red.jpg | Panton Chair 现行聚丙烯（PP）版，正红色一体悬臂全身侧影 | `https://www.scandinavia-design.fr/VITRA/chaise-panton-design-verner-panton-1960.html` | PIL JPEG 1000×1418，62KB | 2026-10-26 | © Vitra AG / Verner Panton |
| P_Panton_1999_pp_black.jpg | 同型号，黑色 PP 版（第二角度/配色） | 同上 | PIL JPEG 872×1134，40KB | 2026-10-26 | © Vitra AG / Verner Panton |
| P_Standard_1934_scene.jpg | Prouvé Standard 椅（1934）家居场景：橡木座背+米白喷粉钢框 | `https://www.scandinavia-design.fr/VITRA/vitra-chaise-standard-classique-jean-prouve.html` | PIL JPEG 1920×938，267KB | 2026-10-26 | © Vitra AG / Jean Prouvé |
| P_Standard_1934_oak.jpg | Standard 椅正面产品图（展示座背与管状后腿） | 同上 | PIL JPEG 500×700，25KB | 2026-10-26 | © Vitra AG / Jean Prouvé |
| P_EMTable_1950_oak.jpg | EM Table（1950）橡木桌面+黑色外张 A 字金属腿+横撑 | `https://www.scandinavia-design.fr/VITRA/vitra-table-em-jean-prouve.html` | PIL JPEG 1862×1030，116KB | 2026-10-26 | © Vitra AG / Jean Prouvé |
| P_EMTable_1950_detail.jpg | 同型号桌腿/横撑细节 | 同上 | PIL JPEG 751×328，20KB | 2026-10-26 | © Vitra AG / Jean Prouvé |
| P_Marshmallow_1956_white.jpg | Marshmallow Sofa（1956，George Nelson）白色圆垫+黑色管状钢架；图为 Vitra Miniatures 1:6 官方微缩模型（忠实再现全尺寸造型，设计博物馆店在售） | `https://shop.design-museum.de/products/miniatur-marshmallow-sofa` | PIL JPEG 1024×1024，44KB | 2026-10-26 | © Vitra AG / George Nelson |
| P_WireDKR_1951_scene.jpg | Wire Chair DKR（1951）黑钢丝网壳+bikini 座垫，家居餐桌场景（与既有产品图角度互补） | `https://www.scandinavia-design.fr/VITRA/chaise-wire-dkr-charles-ray-eames-1950.html` | PIL JPEG 940×940，121KB | 2026-10-26 | © Vitra AG / Eames |
| P_BallClock_1949_wall.jpg | Nelson Ball Clock（1949）彩色木球辐条挂墙产品图（与既有 factsheet 裁剪互补，更清晰） | `https://www.scandinavia-design.fr/VITRA/horloges-murales-design-george-nelson-1948-1960.html` | PIL JPEG 900×861，58KB | 2026-10-26 | © Vitra AG / George Nelson |
| P_Wiggle_1972_scene.jpg | Wiggle Side Chair（1972，Frank Gehry）瓦楞纸板椅家居使用场景（与既有产品图互补） | `https://www.scandinavia-design.fr/VITRA/wiggle-chaise-et-tabouret-frank-gehry.html` | PIL JPEG 940×940，85KB | 2026-10-26 | © Vitra AG / Frank Gehry |

---

## 二、B 组台账（当代产品 P · 空间/体验/渠道 S，共 28 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_AC5Work_2017_swivel.jpg | Antonio Citterio AC 5 Work 2017 转椅，蓝色版，官方目录图 | https://findmy.vitra.com/en-en/products/chairs/ac-5-work | 2000x2000 / 249KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图（storyblok CDN），仅档案使用 |
| P_AlcoveCabin_2012_workstation.jpg | Bouroullec Alcove Cabin 2012 高背工位（含桌/灯），factbook p16 产品带 | https://www.think-furniture.com/content/Vitra_Alcove_Cabin_Factsheet.pdf | 1455x468 / 65KB / JPEG PIL OK（PDF 200dpi 渲染裁产品带） | 2026-10-26 | Vitra 官方 factbook 经销商托管，档案使用 |
| P_Alcove_2006_highback.jpg | Bouroullec Alcove / Alcove Highback 2006/2012 家族，factbook p9 产品带 | https://www.think-furniture.com/content/Vitra_Alcove_Cabin_Factsheet.pdf | 1455x585 / 76KB / JPEG PIL OK | 2026-10-26 | Vitra 官方 factbook，档案使用 |
| P_Allstar_2014_task.jpg | Konstantin Grcic Allstar 2014 办公任务椅，官方目录图 | https://findmy.vitra.com/en-en/products/chairs/allstar | 2000x2000 / 162KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_Anagram_2024_click_modules.jpg | Panter&Tourron Anagram Sofa 2024 click 模块，设计方 Sanity CDN 原图 | https://pantertourron.com/anagram-sofa-vitra | 8192x6144 / 7.4MB / JPEG PIL OK | 2026-10-26 | 设计工作室官方项目图，档案使用 |
| P_ChapTray_2021_tray.jpg | Konstantin Grcic Chap & Chap Tray 2021，官方产品组图（含蓝色托盘） | https://www.vitra.com/fr-ch/product/details/chap | 600x450 / 18KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_GrandRelax_2019_recliner.jpg | Antonio Citterio Grand Relax 2019 躺椅，官方目录图 | https://findmy.vitra.com/en-en/products/lounge-chairs/grand-relax | 2000x2000 / 475KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_HALLounge_2021_highback.jpg | Jasper Morrison HAL Lounge 2021 高背，官方目录图 | https://findmy.vitra.com/en-global/products/lounge-chairs/hal-lounge-chair | 2000x2000 / 455KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_HALWood_2010_shell.jpg | Jasper Morrison HAL Wood / Ply Wood 2010 木壳家族，smow factsheet p1 产品带 | https://fr.smow.ch/pdf/vitra-hal-factsheet-fr-2025.pdf | 1455x538 / 58KB / JPEG PIL OK | 2026-10-26 | Vitra 官方 factsheet 经销商托管 |
| P_Mikado_2024_upholstered.jpg | Barber & Osgerby Mikado 2024 软包椅，官方目录图 | https://findmy.vitra.com/en-en/products/chairs/mikado-side-chair | 2000x2000 / 270KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_Mynt_2025_plywood.jpg | Erwan Bouroullec Mynt 2025 胶合板壳转椅，官方目录图 | https://findmy.vitra.com/en-en/products/chairs/mynt-plywood | 2500x2500 / 307KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_PantonLE_2026_electricblue.jpg | Panton Chair LE 2026 限量版四色（左一电光蓝 electric blue），Vitra 官方新闻图 | https://www.vitra.com/en-us/home | 1440x576 / 153KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图（替代被 429 拦截的 store.vitra.co.jp） |
| P_Polder_2005_asymmetric.jpg | Hella Jongerius Polder Sofa 2005「Pebble Greys」房间场景，拼色不对称+chaise，factbook p9 | https://www.konsepti.com/data/files/products/10939/1745397777-9409474_factbook-polder-2025-en_master.pdf | 3308x2339 / 842KB / JPEG PIL OK | 2026-10-26 | Vitra 官方 factbook 经销商托管 |
| P_Polder_2015_buttons_detail.jpg | Polder 纽扣细节（牛角/橄榄木/竹/贝母，带绿色插针），factbook p8 右半 | https://www.konsepti.com/data/files/products/10939/1745397777-9409474_factbook-polder-2025-en_master.pdf | 1654x2339 / 408KB / JPEG PIL OK | 2026-10-26 | Vitra 官方 factbook |
| P_SlowChair_2006_knit.jpg | Bouroullec Slow Chair 2006 透明针织 sling（粉色版），官方目录图 | https://findmy.vitra.com/en-en/products/lounge-chairs/slow-chair | 2000x2000 / 239KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_SlowSofa_2025_fabric.jpg | Bouroullec Slow Sofa 2025 + Slow Chair 布艺版，factbook p8 跨页 | https://www.scandinavia-design.fr/VITRA/download/9582015_factbook-slow-chair-2025-en_master.pdf | 3308x2339 / 927KB / JPEG PIL OK | 2026-10-26 | Vitra 官方 factbook 经销商托管 |
| P_SoftModular_2016_low.jpg | Jasper Morrison Soft Modular Sofa 2016 黄色模块化，factbook p2 跨页 | https://cdn.shopify.com/s/files/1/0046/7723/8818/files/Factbook_Soft_Modular_Sofa-EN.pdf | 3308x2339 / 1.03MB / JPEG PIL OK | 2026-10-26 | Vitra 官方 factbook（Shopify CDN） |
| P_Softshell_2008_swivel.jpg | Bouroullec Softshell 2008 转椅（酒红），官方目录图 | https://findmy.vitra.com/en-global/products/chairs/softshell-chair | 2000x2000 / 155KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_Suita_2010_modular.jpg | Antonio Citterio Suita 2010 模块化沙发（白色），Vitra 官方产品图 | https://www.vitra.com/en-cn/product/details/suita-sofa-3-seater-tufted | 600x450 / 49KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图 |
| P_Vegetal_2009_branching_chair.jpg | Bouroullec Vegetal Chair 2009 白色枝状注塑椅身，Cooper Hewitt 馆藏对象 2010-41-2 | https://www.si.edu/object/vegetal-chair%3Achndm_2010-41-2 | 800x1066 / 59KB / JPEG PIL OK | 2026-10-26 | Cooper Hewitt/Smithsonian 馆藏照（Vitrgift of Vitra），替代被 403 的 cooperhewitt.org |
| P_Vegetal_2009_stack_structure.jpg | Vegetal 可堆叠/枝状结构（正放+倒扣两椅），designboom 报道图（image courtesy of Vitra） | https://www.designboom.com/design/ronan-erwan-bouroullec-vegetal-chair-for-vitra/ | 550x412 / 25KB / JPEG PIL OK | 2026-10-26 | Vitra 官方新闻图经 designboom |
| P_Vlinder_jacquard_cover.jpg | Hella Jongerius Vlinder Sofa 提花拼布 cover（8 色 7 种提花织法），Vitra 产品图 | https://www.indesignlive.com/singapore/products/hella-jongerius-vitra-vlinder | 1100x733 / 99KB / JPEG PIL OK | 2026-10-26 | Vitra 官方产品图经 indesignlive |
| P_Wiggle_1972_cardboard.jpg | Frank Gehry Wiggle Side Chair 1972 瓦楞纸板 Easy Edges，经销商产品图 | https://www.vertigohome.us/products/vitra-wiggle-side-chair | 600x600 / 45KB / JPEG PIL OK | 2026-10-26 | 经销商官方产品图（替代被 403 的 store.moma.org） |
| S_Balancing_Tools_1984_Oldenburg.jpg | Oldenburg & van Bruggen《Balancing Tools》1984 雕塑，Oldenburg van Bruggen Studio 官方照 | https://www.pacegallery.com/journal/claes-coosje-timeline-large-scale-projects/ | 2000x2666 / 1.06MB / JPEG PIL OK | 2026-10-26 | ©1984 Claes Oldenburg and Coosje van Bruggen Studio，档案使用 |
| S_JD_101HOME_shanghai.jpg | 京东 101HOME 上海首店集合店公共区，京东 corporate blog 官方 og:image | https://jdcorporateblog.com/jd-com-opens-its-first-101home-in-shanghai-bringing-the-art-of-living-to-an-innovative-retail-experience/ | 2560x1708 / 362KB / JPEG PIL OK | 2026-10-26 | 京东官方博客新闻图 |
| S_PietOudolf_garden.jpg | Vitra Campus Piet Oudolf 花园盛花全景（背景 Slide Tower），Marek Iwicki/Dwell 摄影 | https://whipplerussell.com/blog/gardens-as-art-the-designs-of-piet-oudolf | 1600x1066 / 737KB / JPEG PIL OK | 2026-10-26 | 引自 vitra.com 的花园照片，档案使用 |
| S_Slide_Tower_Holler_2014.jpg | Carsten Höller Slide Tower 2014（30.7m 滑梯观景塔），Julien Lanoo/Attilio Maranzano Vitra 新闻照 | https://www.metalocus.es/en/news/vitra-slide-tower-carsten-holler-and-alvaro-siza-promenade | 825x1100 / 233KB / JPEG PIL OK | 2026-10-26 | ©Vitra / Julien Lanoo，档案使用 |
| S_Umbrella_House_Shinohara_2022.jpg | 筱原一男 Umbrella House 2022 复建，design-museum.de 官方图 | https://www.design-museum.de/en/information/vitra-campus.html | 1200x1200 / 399KB / JPEG PIL OK | 2026-10-26 | ©Vitra Design Museum |

---

## 三、已移入 `_unused\`（6 个，未计入入库数）

| 文件名 | 原因 |
|---|---|
| P_Coconut_1955_white.jpg | 与在库同题材重复/被高清版取代/相关性最弱/低清 |
| S_Schaudepot_exterior_Lanoo.jpg | 与在库同题材重复/被高清版取代/相关性最弱/低清 |
| S_Schaudepot_interior_main_hall.jpg | 与在库同题材重复/被高清版取代/相关性最弱/低清 |
| S_VitraCircle_store_Zaandam.jpg | 与在库同题材重复/被高清版取代/相关性最弱/低清 |
| S_VitraDesignMuseum_Gehry_1989.jpg | 与在库同题材重复/被高清版取代/相关性最弱/低清 |
| S_VitraHaus_exterior_day.jpg | 与在库同题材重复/被高清版取代/相关性最弱/低清 |

---

## 四、补图与配额平衡记录（A 组）

### 第二轮定向补图记录（2026-10-26）

- 4 件核心经典款全部补齐：Panton PP 单椅（红+黑 2 张）、Prouvé Standard（场景+产品 2 张）、EM Table（整体+细节 2 张）、Marshmallow Sofa（官方微缩模型 1 张，产品页画廊为 JS 渲染无第二角度，如实记录）。
- 通道：scandinavia-design.fr（Compas 同站，Panton/Standard/EM Table 页 200 直连）+ shop.design-museum.de（search 接口 200，Marshmallow 微缩）。
- 全目录最终总数 **69 张**（Logo 1 + H 4 + F 8 + P 49 + S 5 + 上轮新增合计），非产品图 17 张未动，在 55–75 区间。

### 第三轮收口补图记录（2026-10-26）

- 为 5 个 H3 各补 1 张不同角度/场景，实际成功 3 张：Wire DKR 场景、Ball Clock 挂墙、Wiggle 场景（均 scandinavia-design.fr 200 直连，PIL+目检通过）。
- 未成功 2 项：① Coconut Chair 第二角度——findmy Storyblok 仅公开主图（已用），back/front 配置图需鉴权返回 403；保留既有 P_Coconut_1955_side 作为该 H3 唯一图。② Marshmallow 全尺寸实物——经销商页/smow 等本轮未取到，保留既有 Vitra Miniatures 微缩模型图作为造型说明。
- 全目录最终总数 **72 张**（Logo 1 + H 4 + F 8 + P 52 + S 5 + 历史轮次），非产品图 17 张未动，在 ≤74 上限内。

### 本轮配额平衡与变更记录（2026-10-26 补图轮）

- **移入 `_unused\`（从正文移除）**：
  - `S_Schaudepot_exterior_Lanoo.jpg`——与 F_Schaudepot 同题材，保留更高清的 F_ 版
  - `S_VitraDesignMuseum_Gehry_1989.jpg`——与 F_Vitra_Design_Museum_Gehry 同题材
  - `S_VitraHaus_exterior_day.jpg`——与 F_VitraHaus 同题材
  - `S_Schaudepot_interior_main_hall.jpg`——624×468 最弱且 Schaudepot 已覆盖
  - `S_VitraCircle_store_Zaandam.jpg`——零售门店图，与园区建筑主题相关性最弱
  - `P_Coconut_1955_white.jpg`——早期 factsheet 低清裁剪（540×470/15KB），被 P_Coconut_1955_side（2000×2000）取代
- **大文件瘦身**：`P_Anagram_2024_click_modules.jpg` 由 7197KB（8192×6144）降采样至 2400×1800、720KB（长边 ≤2400，B 组遗留待办，已处理）。
- **非产品图（H+F+S）最终计数**：17 张（H 4 + F 8 + S 5），在 10–17 区间。全目录入库总数 62 张（在 55–75 区间）。

---

---

## 五、未取到清单（A 组）

## 未取到清单（全部通道失败或受限）

1. **H_1950s Birsfelden 店面作坊**：design-museum.de「Project Vitra」展览页与官方 stories 均被 vitra.com Cloudflare 拦截，未获直链原图。
2. **H_1981-07-18 Weil am Rhein 火灾废墟历史照**：design-museum.de Campus Gallery 历史影像未能在可达页面定位直链。
3. **F_Grimshaw 波纹铝皮厂房（1981/1983）**、**F_Álvaro Siza 砖砌厂房（1994）**：design-museum.de 园区列表未给单独图；Wikimedia Commons API TLS 超时不可达。
4. **工艺图缺口**：Eames Lounge Chair 手工包覆工序系列、Panton Chair 注塑 PP 成型/材料沿革单独产品照、Test Center 耐久测试、Aluminium Chair 生产线——`smow.de` newspaper-classics PDF 二次下载失败；store.vitra.co.jp 429。
5. ~~Marshmallow Sofa（1956）~~：已取官方微缩模型图（见上表 P_Marshmallow_1956_white）；全尺寸 18 圆垫沙发另角度未取。
6. ~~Panton Chair 红色单椅成品照~~：已取 P_Panton_1999_pp_red/black；MoMA 3333 著录页仍受 Cloudflare/Commons 不可达所限。
7. ~~Prouvé Standard（1934）、EM Table（1950）~~：已取（scandinavia-design.fr）。仍缺：Chaise Tout Bois（1941）、Antony 2025 限量、Vitra Miniatures 全组陈列照、Standard SP 单独产品图。

> 说明：以上均为多通道尝试后仍失败的项目，已在本台账如实标注，不以低质/错模图充数（遵循指南 12.6 型号校验与宁缺毋滥原则）。

---

## 六、缺口说明（B 组）

## 缺口说明（全部通道失败 / 无真实可追溯图源）

| 需求项 | 失败原因 |
|---|---|
| P_Vegetal_2008_process_sketch（Ronan Bouroullec 草图过程图） | vitra.com/en/stories 主站 403（robots/反爬）；image_search 未检出草图一手图；不采用二手拼凑图 |
| P_Eames Lounge Chair 材料特写（V-Foam/回收铝底座/FSC 木皮） | e-design.top 该 PDF SSL 握手失败；smow 未提供对应材料特写页；列为缺口 |
| P_Laser RE 再生聚酯面料特写 | e-design.top Hack Ecology PDF SSL 失败；无其他可追溯一手面料图 |
| S_Eames 版权区域分割图（Herman Miller vs Vitra 世界地图） | eamesoffice.com/authenticity/furniture-partners 403；archive.org 不可达；image_search 仅返回竞品定位图而非区域授权地图；列为缺口 |
| S_OfficeChairFinder / myVitra 界面截图 | findmy.vitra.com/en-en/questionnaire/chairs 为 JS 动态问卷，非静态图；未做浏览器截图（避免截图非官方图源） |
| C_HermanMiller_Aeron（可选竞品对照） | 任务标注"取不到就跳过"，未作为缺口 |
