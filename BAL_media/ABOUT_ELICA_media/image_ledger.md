# Elica 品牌档案图片台账

- **品牌**：Elica（意大利厨房电器品牌；总部位于马尔凯大区 Fabriano，Elica S.p.A.）
- **检索/下载日期**：2026-10-26（UTC+8，Asia/Shanghai）
- **媒体目录**：`D:\Documents\ChatGPT\Projects\品牌资产库\BAL_media\ABOUT_ELICA_media\`
- **验证方式**：Python + Pillow（PIL）逐张 `Image.open().load()` 实测格式/宽高/字节数；全部 >10KB 且可解码；型号与画面经人工目检核对；不合格件移入 `_unused\`
- **命名规范**：`Logo_*` 根目录；`H_<年份>_<主题>.jpg`；`F_<主题>.jpg`；`S_<主题>.jpg`；`P_<型号>_<年份>_<场景>.jpg`；文件名无空格/中文
- **配额核对**：全目录入库 **87 张**（Logo 1 · H 3 · F 5 · S 5 · P 73），目标 85–100 ✓；非产品图（H+F+S）**13 张**；产品图 P **73 张**（产品图占大头）；`_unused\` 暂存 9 个
- **目录规模（2026-10-27 配图复核后）**：根目录 **107 个图片文件**（Logo 1 · H 3 · F 5 · S 5 · P 93，另含本台账文件）；本轮新增 20 张官方原图，旧图暂留以便回滚
- **取图通道总结（A 组：Logo/H/F/S/经典产品）**：
  - 成功：①官方品牌故事页 elica.com（创始人肖像、字标年代线）；②设计媒体 designboom Fabriano 工厂探访（总装/车间/钣金/表面/仓储，© designboom）；③设计媒体/经销商图（appliancist、archiexpo、archiproducts、busyboo、vision-i、hkele、amazon.co.uk 等官方/授权托管产品图）；④EuroCucina/Archiproducts 展位图。
  - 被拦截/未取：官网 elica.com 产品详情 CDN 直链未批量解析（Cloudflare/动态）；Pescecappa（Gaetano Pesce 限量）、Wall Carpet（1999）、Modula（2000）、Victoria/Ola Evolution 等早期型号在公开图床无可核验大图，未采（宁缺毋滥，见末尾清单）。
  - **并行组说明**：同目录内 P_NikolaTesla*、P_BoxinAdvance、P_CloudSeven、P_HaikuDryIsland、P_IkonaMaxxiPure、P_Juno、P_Lhov、P_Thin、P_AriachefPro、P_Edith_2015 等当代（2015–2025）产品图为 B 组（当代产品组）并行入库，**不计入本 A 组台账**，本报告不采集、不移动。
- **取图通道总结（B 组：当代产品）**：
  | 通道 | 结果 |
  |---|---|
  | ① 官方产品页 og:image / JSON-LD / CDN 原图（elica.com `/storage/Variant/`、`/storage/ProductFamily/`、`/storage/ProductFamily/Gallery/`、`/assets/elica/images/<model>/`） | **成功，主力通道**。官网本轮未触发 Cloudflare Turnstile 拦截（requests 直连 200）；取 `/storage/thumbs/` 缩略图的去尺寸后缀原图（`/storage/ProductFamily/Gallery/<name>.jpg`），单图 0.2–3.1 MB。 |
  | ② 官方媒体库/新闻稿附件（corporate.elica.com `/storage/CorporateNews/`） | **成功**。用于 Ariachef Pro 2025 大阪 Expo 金圆规官方新闻稿配图。 |
  | ③ 设计媒体与奖项档案（Dezeen/Designboom/Red Dot/ADI） | 本轮未额外使用——官方 CDN 原图已满足数量与质量；Red Dot 档案 Edith 页（red-dot.org/project/edith-32554）作为型号年份旁证，未直接取图（避免与 A 组重复）。 |
  | ④ 浏览器兜底（browser-use-automation） | **未触发**。官网直连成功，无需真实浏览器加载。 |
  | ⑤ Wikimedia Commons / 博物馆档案 | 未使用（官方素材已覆盖）。 |
  | ⑥ Internet Archive 快照 | 未使用。 |
- **版权与来源原则**：全部 URL 真实可追溯、无编造；无法取得真实来源的图不采用（宁缺毋滥，指南 12.6）；馆藏/新闻/设计方图片按各自版权备注标注，报告引用保留权利方署名

---

## 一、A 组台账（Logo · 历史 H · 工厂工艺 F · 空间 S · 经典产品 P，共 42 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_ELICA_current_2024.png | 当前官方小写字标（2024 Landor 版），官网现行品牌标识 | https://www.rologo.com/y-j-w-y-y-d-l-d-c-f-d-q-g-s-e-f-b-d-x-b-s.html | PIL OK；裁后 1827×556 / 85,656 B（原 2000×700 / 116,611 B） | 2026-10-26 | © Elica S.p.A.（字标） |
| H_1970_logo_evolution.jpg | Elica 字标年代线（1970s→2024 五版演变，含创始人早期照片） | https://www.rologo.com/y-j-w-y-y-d-l-d-c-f-d-q-g-s-e-f-b-d-x-b-s.html | PIL OK；2000×700 / 155,997 B | 2026-10-26 | © Elica S.p.A. / Landor |
| H_1970_ermanno_casoli_portrait.jpg | 创始人 Ermanno Casoli 肖像（1970 年创立者，官方品牌故事页） | https://www.elica.com/SK-sk/brand-story | PIL OK；392×392 / 13,116 B | 2026-10-26 | © Elica S.p.A. |
| H_1990_francesco_casoli_desk.jpg | Francesco Casoli（创始人之子，1990 接掌 CEO）年代办公桌照 | https://www.elica.com/SK-sk/brand-story | PIL OK；720×720 / 49,403 B | 2026-10-26 | © Elica S.p.A. |
| F_fabriano_assembly_line.jpg | Fabriano 工厂总装线全景（工人绿工装） | https://www.designboom.com/design/elica-factory-visit/ | PIL OK；818×545 / 493,777 B | 2026-10-26 | © designboom |
| F_fabriano_factory_floor.jpg | Fabriano 工厂车间全景（红工装工人/物料） | https://www.designboom.com/design/elica-factory-visit/ | PIL OK；818×544 / 524,053 B | 2026-10-26 | © designboom |
| F_sheetmetal_bending.jpg | 钣金成形：Trumpf 折弯机加工烟机外壳 | https://www.designboom.com/design/elica-factory-visit/ | PIL OK；818×545 / 407,903 B | 2026-10-26 | © designboom |
| F_surface_finishing.jpg | 表面处理：工人抛光/精整烟机罩壳（绿色挂架） | https://www.designboom.com/design/elica-factory-visit/ | PIL OK；818×544 / 96,233 B | 2026-10-26 | © designboom |
| F_warehouse_racks.jpg | 厂区仓储/物料架（叉车与绿色料架） | https://www.designboom.com/design/elica-factory-visit/ | PIL OK；818×544 / 95,154 B | 2026-10-26 | © designboom |
| S_eurocucina_2016_portrait_wall.jpg | EuroCucina 2016 展位（Labics 设计，人像墙装置） | https://vz-1257297167.cos.eu-frankfurt.myqcloud.com/projects/180968/elica-stand-at-eurocucina.html | PIL OK；780×520 / 143,075 B | 2026-10-26 | © Elica S.p.A. / Labics |
| S_eurocucina_2024_booth_exterior.jpg | EuroCucina 2024 展位外观（Calvi Brambilla 设计，金属格栅框） | https://www.design-hbo.com/archives/12108 | PIL OK；720×405 / 36,507 B | 2026-10-26 | © Elica S.p.A. / Calvi Brambilla |
| S_eurocucina_2024_interior.jpg | EuroCucina 2024 展位彩色空间（黄墙展陈） | https://www.archiproducts.com/zh/elica | PIL OK；525×350 / 14,384 B | 2026-10-26 | © Elica S.p.A. |
| S_eurocucina_red_carpet.jpg | EuroCucina 展位红毯玻璃长台空间 | https://www.archiproducts.com/zh/elica | PIL OK；525×394 / 28,528 B | 2026-10-26 | © Elica S.p.A. |
| S_eurocucina_2024_gradient.jpg | EuroCucina 2024 展位渐变光环境空间 | http://mp.weixin.qq.com/s?__biz=MjM5NjY3ODE0MA==&idx=2&mid=2652402695 | PIL OK；547×399 / 19,513 B | 2026-10-26 | © Elica S.p.A. / Salone Molano |
| P_Tamaya_1987_chimney.jpg | Tamaya 1987 不锈钢烟囱式烟机（Phoenix Design；型号 TAMAYA_60_HP） | https://www.amazon.co.uk/elica-tamaya-60-hp-tamaya-high-performance-60cm-chimney-hood-stainless-steel/dp/B0098JFNFG | PIL OK；1000×781 / 74,566 B | 2026-10-26 | © Elica S.p.A. |
| P_Tamaya_1987_woodwall.jpg | Tamaya 不锈钢烟囱烟机（深木纹墙场景） | https://www.myareadesign.it/fr/electromenager/hottes-de-design/hottes-murales/elica-hotte-murale-montee-tamaya.3.1.44.gp.3844.uw | PIL OK；670×393 / 221,382 B | 2026-10-26 | © Elica S.p.A. |
| P_OM_2004_wall_white.jpg | OM 2004 首台立式烟机（白色玻璃，Om Air 再版；Crisà） | http://www.appliancist.com/cooking/hoods_vents/elica-om-wall-hood-2014.html | PIL OK；460×660 / 26,708 B | 2026-10-26 | © Elica S.p.A. |
| P_OM_2004_wall_black.jpg | OM 2004 立式烟机（黑色玻璃款） | http://www.appliancist.com/cooking/hoods_vents/elica-om-wall-hood-2014.html | PIL OK；460×660 / 117,764 B | 2026-10-26 | © Elica S.p.A. |
| P_MiniOM_2005_white.jpg | Mini OM 紧凑型立式烟机（白玻璃方圆形） | https://hkele.com.hk/ELICA/MINI-OM-WHITE- | PIL OK；500×500 / 22,388 B | 2026-10-26 | © Elica S.p.A. |
| P_MiniOM_2005_green.jpg | Mini OM 彩色版（Apple Green 玻璃） | https://appliancist.com/cooking/hoods_vents/mini-om-range-hood-in-colors.html | PIL OK；350×340 / 36,962 B | 2026-10-26 | © Elica S.p.A. |
| P_MiniOM_2005_black.jpg | Mini OM 黑玻璃方圆形（产品场景） | https://card.weibo.com/article/m/show/id/2309404492632540709201 | PIL OK；1400×1050 / 261,141 B | 2026-10-26 | © Elica S.p.A. |
| P_Star_2005_island.jpg | Star 2005 首盏吊灯式岛式烟机（水晶球，47cm） | https://www.vision-i.com.hk/products/elica-star-47cm | PIL OK；800×613 / 40,145 B | 2026-10-26 | © Elica S.p.A. |
| P_Stream_2005_gold.jpg | Stream 2005（Evolution 系列金色玻璃吊灯烟机） | https://appliancist.com/cooking/hoods_vents/new-victoria-and-stream-hoods-from-elica-bring-beauty-and-elegance.html | PIL OK；440×500 / 17,670 B | 2026-10-26 | © Elica S.p.A. |
| P_Audrey_evolution_pendant.jpg | Audrey（2005 Evolution 吊灯烟机系列，深色锥形） | https://appliancist.com/hoods_vents/page/2?start=75 | PIL OK；460×560 / 92,304 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Edith_evolution_official.jpg | Edith 白色圆穹吊灯烟机（官方高清产品图，Evolution 谱系） | https://elicachina.cn/yj.html | PIL OK；800×1200 / 558,632 B | 2026-10-26 | © Elica S.p.A. |
| P_Edith_evolution_dome.jpg | Edith（Evolution 系列圆穹吊灯烟机，深灰亮面） | https://appliancist.com/cooking/hoods_vents/elica-audrey-and-edith-evolution-kitchen-hoods.html | PIL OK；460×591 / 113,718 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Edith_evolution_white.jpg | Edith（白色圆穹吊灯烟机） | https://appliancist.com/cooking/hoods_vents/elica-audrey-and-edith-evolution-kitchen-hoods.html | PIL OK；460×590 / 12,272 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Edith_evolution_scene.jpg | Edith 白色吊灯烟机（水泥岛台厨房场景） | https://mobile-phone.taobao.com/detail/UlFBZm13VTh6a3ZlZUpVMlFRQVlDZz09.html | PIL OK；750×750 / 99,380 B | 2026-10-26 | © Elica S.p.A. |
| P_Edith_evolution_scene2.jpg | Edith 双白色吊灯（灰墙双岛场景） | https://www.archiexpo.cn/prod/elica/product-9829-2530106.html | PIL OK；500×373 / 26,139 B | 2026-10-26 | © Elica S.p.A. |
| P_Edith_classic_product.jpg | Edith Classic 白色吊灯烟机（吊线产品图） | https://merhitrading.com/ | PIL OK；493×552 / 10,455 B | 2026-10-26 | © Elica S.p.A. |
| P_Space_2007_round_black.jpg | Space 2007 圆形壁挂烟机（黑玻璃+中央不锈钢条，"最静音"） | https://www.busyboo.com/2015/02/02/kitchen-hood-elica/ | PIL OK；800×800 / 85,472 B | 2026-10-26 | © Elica S.p.A. |
| P_Space_2007_detail.jpg | Space 圆形烟机（灰面控制条细节） | http://www.16pic.com/3d/pic_3912445.html | PIL OK；496×581 / 13,239 B | 2026-10-26 | © Elica S.p.A. |
| P_Feel_2010_panels.jpg | Feel 2010 首台感应烟机（白盘+彩色可换面板） | https://www.vision-i.com.hk/products/elica-feel-80cm | PIL OK；500×375 / 36,078 B | 2026-10-26 | © Elica S.p.A. |
| P_Seashell_hanging_white.jpg | Seashell 悬挂椭圆吊灯烟机（亮白，Crisà） | https://www.cuisissimo.com/ | PIL OK；1400×1400 / 42,651 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Seashell_hanging_chrome.jpg | Seashell 镜面不锈钢悬挂款 | https://www.archiexpo.cn/prod/elica/product-9829-2530128.html | PIL OK；500×500 / 24,216 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Seashell_scene.jpg | Seashell 白色悬挂烟机（灰墙岛台场景） | https://www.deyeehome.com/mobile/goods.php?goodsid=45606 | PIL OK；750×573 / 239,100 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Nuage_wall_scene.jpg | Nuage 曲面壁挂烟机（白灰背板，Crisà） | https://appliancist.com/cooking/hoods_vents/elica-nuage-wall-range-hood.html | PIL OK；460×700 / 151,897 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Nuage_wall_green.jpg | Nuage 绿色可换面板款（厨房场景） | https://appliancist.com/cooking/hoods_vents/elica-nuage-wall-range-hood.html | PIL OK；460×670 / 24,789 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Nuage_wall_product.jpg | Nuage 曲面壁挂烟机（产品角度） | https://www.archiproducts.com/en/resellers/puro-living-design_648246 | PIL OK；840×630 / 24,143 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Nuage_concrete.jpg | Nuage 混凝土质感背板款（可贴石膏/涂料融合墙面） | https://hkele.com.hk/en/%E5%BB%8A%E6%88%BF%E9%9B%BB%E5%99%A8-Cooking/%E6%8A%BD%E6%B2%B9%E7%85%99%E6%A9%9F-Hoods/NUAGE | PIL OK；500×500 / 72,373 B | 2026-10-26 | © Elica S.p.A. / Crisà |
| P_Alba_wall.jpg | Alba 金字塔/壁挂玻璃烟机（Magic Wand 遥控） | https://appliancist.com/cooking/hoods_vents/elica-ventilation-hoods-new-gorgeous-designs.html | PIL OK；460×450 / 62,595 B | 2026-10-26 | © Elica S.p.A. |
| P_Haiku_island.jpg | Haiku Island 不锈钢岛式烟机（集成照明） | https://archiproducts.com/en/products/elica/stainless-steel-island-hood-with-integrated-lighting-haiku-island_711005 | PIL OK；840×630 / 20,192 B | 2026-10-26 | © Elica S.p.A. |

---

## 二、B 组台账（当代产品 P，共 45 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_NikolaTeslaOne_2016_topview.jpg | NikolaTesla One 83cm 黑色下吸电磁炉顶视图；素材文件名 `nikolatesla-one-black-83x515x21-top-ol.png`；2016 发布、2018 金圆规 | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-one | PIL 解码通过；5000×5000；1,316,184 B（>10KB） | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaOne_2016_hero_raw.jpg | NikolaTesla One 系列主视觉（真实产品渲染图，绿色背景）；素材 `NIKOLATESLA_one-RAW-black_83.png`（2026-10-27 由工程尺寸图替换为真实产品图） | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-one | PIL 通过；5000×5000；2,054,977 B | 2026-10-27 | © Elica S.p.A. |
| P_NikolaTeslaOne_2016_detail_kitchen.jpg | NikolaTesla One 厨房台面实景（灰色石材台面嵌入式安装）；`/storage/ProductFamily/fcbf1479a8b2734444a2ad9a9810b808.jpg` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-one | PIL 通过；4000×4000；604,391 B | 2026-10-27 | © Elica S.p.A. |
| P_NikolaTeslaOne_2016_kitchen_wood.jpg | NikolaTesla One 厨房安装实景（深棕木纹橱柜+黑色台面中岛）；`/storage/ProductFamily/d9511a5fef5b404ce9c876acc04b3fe4.jpg` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-one | PIL 通过；4000×4000；1,902,989 B | 2026-10-27 | © Elica S.p.A. |
| P_NikolaTeslaSwitch_2018_topview.jpg | NikolaTesla Switch 黑色下吸顶视图；`nikolatesla-switch-black-36-top-ol1.png`；隐形吸芯+旋盖开关 | https://www.elica.com/CA-en/cooktops/downdraft/nikolatesla-switch | PIL 通过；5000×5000；1,187,835 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaSwitch_2018_hero.jpg | NikolaTesla Switch 主视觉；`/storage/ProductFamily/9f2706bd…jpg` | https://www.elica.com/CA-en/cooktops/downdraft/nikolatesla-switch | PIL 通过；4000×4000；3,143,085 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaSwitch_2018_gallery.jpg | NikolaTesla Switch 画廊场景；`/storage/ProductFamily/Gallery/13c0f57a…jpg` | https://www.elica.com/CA-en/cooktops/downdraft/nikolatesla-switch | PIL 通过；4000×3241；1,864,870 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaUnplugged_2021_topview.jpg | NikolaTesla Unplugged 黑色 90 顶视图；`nikolatesla-unplugged-black-90x53x21-top-ol.png`；回潮物理旋钮 | https://www.elica.com/BA-en/hobs/extractor/nikolatesla-unplugged | PIL 通过；5000×5000；1,173,157 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaUnplugged_2021_gallery.jpg | Unplugged 黑色画廊；`Gallery/nikolatesla-unplugged-black-gallery.jpg` | https://www.elica.com/BA-en/hobs/extractor/nikolatesla-unplugged | PIL 通过；4000×2476；1,523,055 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaUnplugged_2021_room.jpg | Unplugged 房间实景；`Gallery/nikolatesla-unplugged-room.jpg` | https://www.elica.com/BA-en/hobs/extractor/nikolatesla-unplugged | PIL 通过；4000×2650；1,169,651 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaUnplugged_2021_room2.jpg | Unplugged 房间实景 2；`Gallery/nikolatesla-unplugged-room-01.jpg` | https://www.elica.com/BA-en/hobs/extractor/nikolatesla-unplugged | PIL 通过；4000×2476；1,101,727 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaUnplugged_2021_ambient.jpg | Unplugged 氛围图；`Gallery/nt-unplugged-nera-as.jpg` | https://www.elica.com/BA-en/hobs/extractor/nikolatesla-unplugged | PIL 通过；4000×2475；1,638,276 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaFit_2022_topview.jpg | NikolaTesla Fit RAW 黑 72 顶视图；`NIKOLATESLAFIT+RAWBRFBO72.png` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-fit | PIL 通过；5000×5000；1,418,338 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaFit_2022_gallery.jpg | Fit 60 画廊；`Gallery/nikolatesla-fit-60-gallery.jpg` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-fit | PIL 通过；4000×2476；2,011,180 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaFit_2022_room.jpg | Fit 房间实景；`Gallery/nikolatesla-fit-room-001.jpg` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-fit | PIL 通过；4000×4000；3,111,317 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaFit_2022_ambient.jpg | Fit 2022 氛围图；`Gallery/nt-fit-as-2022-ok.jpg` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-fit | PIL 通过；4000×2475；1,228,369 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaLibra_2022_topview.jpg | NikolaTesla Libra 黑 83 顶视图（灶+秤三合一）；`nikolatesla-libra-black-83x515x21-top-ol.png` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-fit | PIL 通过；5000×5000；1,053,017 B | 2026-10-26 | © Elica S.p.A. |
| P_NikolaTeslaPrimeS_2020_topview.jpg | NikolaTesla Prime S 黑 83 顶视图；`nikolatesla-prime-s-black-83x515x25-top-ol.png` | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-one | PIL 通过；5000×5000；1,376,052 B | 2026-10-26 | © Elica S.p.A. |
| P_Lhov_2024_hero_space.jpg | Lhov 主视觉（中岛台+黑色电器+汤锅场景）；`lhov/space-optimizer.jpg`（2026-10-27 由工程尺寸图替换为真实场景图） | https://www.elica.com/GE-ru/lhov | PIL 通过；1440×800；111,877 B | 2026-10-27 | © Elica S.p.A. |
| P_Lhov_2024_detail_allinone.jpg | Lhov 集成柜体形态（柜体+蒸烤一体机场景）；`lhov/lhov-all-you-need.jpg` | https://www.elica.com/GE-ru/lhov | PIL 通过；1440×808；45,971 B | 2026-10-27 | © Elica S.p.A. |
| P_Lhov_2024_profile_kitchen.jpg | Lhov 厨房与餐厅一体空间实景（深灰台面+汤锅冒汽）；官方杂志《The Square》相关报道配图 | https://www.elica.com/IT-en/magazine/in-evidence/fabrizio-crisa-brings-home-a-second-compasso-doro-award | PIL 通过；3823×2159；1,307,877 B | 2026-10-27 | © Elica S.p.A. |
| P_Lhov_2024_oven.jpg | Lhov 烤箱腔特写；`lhov/oven-hero.jpg` | https://www.elica.com/GE-ru/lhov | PIL 通过；1440×808；130,276 B | 2026-10-26 | © Elica S.p.A. |
| P_Lhov_2024_hob.jpg | Lhov 灶台上方视角；`lhov/over-the-hob.jpg` | https://www.elica.com/GE-ru/lhov | PIL 通过；1440×800；116,349 B | 2026-10-26 | © Elica S.p.A. |
| P_Lhov_2024_control.jpg | Lhov 智能控制界面；`lhov/smart-control.jpg` | https://www.elica.com/GE-ru/lhov | PIL 通过；2880×1616；145,031 B | 2026-10-26 | © Elica S.p.A. |
| P_Lhov_2024_single.jpg | Lhov 单机黑玻璃齐平；`lhov/solo-lhov.jpg` | https://www.elica.com/GE-ru/lhov | PIL 通过；3000×1704；536,138 B | 2026-10-26 | © Elica S.p.A. |
| P_IkonaMaxxiPure_2022_topview.jpg | Ikona Maxxi Pure 黑 120 岛式烟机顶视（烟+空气净化二合一）；`ikona-maxxi-pure-black-120x44-down-ol.png` | https://www.elica.com/MD-en/ikona-maxxi-pure | PIL 通过；5000×5000；1,005,928 B | 2026-10-26 | © Elica S.p.A. |
| P_IkonaMaxxiPure_2022_front.jpg | Ikona Maxxi Pure 正面；`IKONAMAXXIPURE_BLMAT_120_FRONT_OL.png` | https://www.elica.com/MD-en/ikona-maxxi-pure | PIL 通过；5000×5000；890,426 B | 2026-10-26 | © Elica S.p.A. |
| P_IkonaMaxxiPure_2022_room.jpg | Ikona Maxxi Pure 房间实景 1；`Gallery/ikona-maxxi-pure-room-001.jpg` | https://www.elica.com/MD-en/ikona-maxxi-pure | PIL 通过；4000×4000；2,091,927 B | 2026-10-26 | © Elica S.p.A. |
| P_IkonaMaxxiPure_2022_room2.jpg | Ikona Maxxi Pure 房间实景 2；`Gallery/ikona-maxxi-pure-room-002.jpg` | https://www.elica.com/MD-en/ikona-maxxi-pure | PIL 通过；4000×4000；1,314,388 B | 2026-10-26 | © Elica S.p.A. |
| P_IkonaMaxxiPure_2022_ambient.jpg | Ikona Maxxi 氛围；`Gallery/ikona-maxxi-room-01.jpg` | https://www.elica.com/MD-en/ikona-maxxi-pure | PIL 通过；4000×2477；1,340,275 B | 2026-10-26 | © Elica S.p.A. |
| P_BoxinAdvance_2021_product.jpg | Boxin Advance 不锈钢 60 嵌入式烟机产品图；`boxin-advance-inox-60-down-ol.png` | https://www.elica.com/MK-en/hoods/integrated/boxin-advance | PIL 通过；5000×5000；1,156,026 B | 2026-10-26 | © Elica S.p.A. |
| P_BoxinAdvance_2021_variant.jpg | Boxin Advance 变体；`BOXIN_ADVANCE_IX_60_DOWN_OL.png` | https://www.elica.com/MK-en/hoods/integrated/boxin-advance | PIL 通过；5000×5000；1,566,595 B | 2026-10-26 | © Elica S.p.A. |
| P_BoxinAdvance_2021_scene.jpg | Boxin Advance 安装场景；`/storage/ProductFamily/09058674…jpg` | https://www.elica.com/MK-en/hoods/integrated/boxin-advance | PIL 通过；4000×2827；832,009 B | 2026-10-26 | © Elica S.p.A. |
| P_HaikuDryIsland_2021_product.jpg | Haiku Dry Island 黑 120 岛式烟机（防冷凝）；`HaikuDryIsland_black_120_def_.png` | https://www.elica.com/WW-en/hoods/island/haiku-dry-island | PIL 通过；4096×4096；673,249 B | 2026-10-26 | © Elica S.p.A. |
| P_HaikuDryIsland_2021_down.jpg | Haiku island 不锈钢 32×32 下视；`haiku-island-inox-32x32-down-ol.png` | https://www.elica.com/WW-en/hoods/island/haiku-dry-island | PIL 通过；5000×5000；942,414 B | 2026-10-26 | © Elica S.p.A. |
| P_HaikuDryIsland_2021_scene2.jpg | Haiku Dry Island 厨房实景（中岛灶台+悬挂黑色烟机+落地窗）；`/storage/ProductFamily/haiku_pf2.jpg`（2026-10-27 由轴测工程图替换为真实场景图） | https://www.elica.com/WW-en/hoods/island/haiku-dry-island | PIL 通过；4000×4000；2,096,006 B | 2026-10-27 | © Elica S.p.A. |
| P_Edith_2015_front.jpg | Edith 白色 50 吊灯烟机正面（2015 iF+Red Dot）；`edith-white-50-front-ol.png` | https://www.elica.com/MD-en/ikona-maxxi-pure | PIL 通过；5000×5000；673,798 B | 2026-10-26 | © Elica S.p.A. |
| P_Juno_2015_front.jpg | Juno 黑色 50 吊灯烟机正面；`juno-black-50-front-ol.png` | https://www.elica.com/MD-en/ikona-maxxi-pure | PIL 通过；5000×5000；845,221 B | 2026-10-26 | © Elica S.p.A. |
| P_Thin_2020_product.jpg | Thin 不锈钢 90 超薄壁挂烟机产品图；`thin-inox-90-down-ol.png` | https://www.elica.com/IT-en/hoods/wall/thin | PIL 通过；5000×5000；1,277,646 B | 2026-10-26 | © Elica S.p.A. |
| P_CloudSeven_2020_product.jpg | Cloud Seven 不锈钢 90 吊顶烟机产品图；`cloud-seven-inox-90-down-ol.png` | https://www.elica.com/IT-en/hoods/ceiling/cloud-seven | PIL 通过；5000×5000；956,373 B | 2026-10-26 | © Elica S.p.A. |
| P_CloudSeven_2020_room.jpg | Cloud Seven 房间实景 1；`Gallery/cloud-seven-room-001.jpg` | https://www.elica.com/IT-en/hoods/ceiling/cloud-seven | PIL 通过；4000×4000；2,188,754 B | 2026-10-26 | © Elica S.p.A. |
| P_CloudSeven_2020_room2.jpg | Cloud Seven 房间实景 2；`Gallery/cloud-seven-room.jpg` | https://www.elica.com/IT-en/hoods/ceiling/cloud-seven | PIL 通过；4000×2560；1,138,203 B | 2026-10-26 | © Elica S.p.A. |
| P_AriachefPro_2025_photo.jpg | Ariachef Pro 移动烹饪+下吸系统官方新闻稿图（2025 大阪 Expo 金圆规国际奖）；`corporate/storage/CorporateNews/mg-6640-0-…jpg` | https://corporate.elica.com/en/media/elica-group-wins-third-compasso-d-oro-and-honourable-mention-at-expo-osaka | PIL 通过；2000×1125；368,169 B | 2026-10-26 | © Elica S.p.A.（官方新闻稿） |
| P_AriachefPro_2025_photo2.jpg | Ariachef Pro 官方新闻稿图 2；`CorporateNews/mg-6854-0-…jpg` | https://corporate.elica.com/en/media/elica-group-wins-third-compasso-d-oro-and-honourable-mention-at-expo-osaka | PIL 通过；2000×1125；373,658 B | 2026-10-26 | © Elica S.p.A.（官方新闻稿） |
| P_AriachefPro_2025_scene.jpg | Ariachef Pro 场景图；`CorporateNews/img-scene01-1-…jpg` | https://corporate.elica.com/en/media/elica-group-wins-third-compasso-d-oro-and-honourable-mention-at-expo-osaka | PIL 通过；2204×1925；739,417 B | 2026-10-26 | © Elica S.p.A.（官方新闻稿） |

---

## 三、已移入 `_unused\`（+7 = 16 个，未计入入库数）

| 文件名 | 原因 |
|---|---|
| P_NikolaTeslaOne_2016_hero.jpg | 工程尺寸图/线框图，2026-10-27 由真实产品渲染图 P_NikolaTeslaOne_2016_hero_raw.jpg 替换 |
| P_NikolaTeslaOne_2016_detail.jpg | 工程尺寸图（带尺寸标注线稿），2026-10-27 由官方厨房实景 P_NikolaTeslaOne_2016_detail_kitchen.jpg 替换 |
| P_NikolaTeslaOne_2016_kitchen.jpg | 工程尺寸图，2026-10-27 由官方木纹橱柜实景 P_NikolaTeslaOne_2016_kitchen_wood.jpg 替换 |
| P_HaikuDryIsland_2021_scene.jpg | 轴测工程图（OCR 检出 filtering/duct-out 尺寸标注），2026-10-27 由实景 P_HaikuDryIsland_2021_scene2.jpg 替换 |
| P_Lhov_2024_hero.jpg | 工程尺寸图（OCR 大量尺寸标注 296/315.4/898-1198 等），2026-10-27 由场景图 P_Lhov_2024_hero_space.jpg 替换 |
| P_Lhov_2024_detail.jpg | 工程尺寸图，2026-10-27 由集成柜体场景 P_Lhov_2024_detail_allinone.jpg 替换 |
| P_Lhov_2024_profile.jpg | 工程尺寸图（OCR 尺寸 680/598-898-1198/ø149 等），2026-10-27 由厨房实景 P_Lhov_2024_profile_kitchen.jpg 替换 |


---

## 四、补图与配额平衡记录（A 组）



---

## 五、未取到清单（A 组）

## 未取到清单

1. **Pescecappa**（Gaetano Pesce 设计，2007 前后限量 15 件鱼形烟机）：公开图床无可核验大图，未采。
2. **Wall Carpet**（1999，David Lewis 设计的织物墙面式烟机）：检索仅返回通用"墙面织物板"无关图，无 Elica 官方图，未采。
3. **Modula**（2000，Castiglia Associati 挤压铝条壁挂烟机）：公开图床无可核验 Elica 产品图，未采。
4. **Victoria / Ola Evolution**（2005 Evolution 吊灯烟机系列另外两款）：公开图床仅检索到 Stream 金款，Victoria/Ola 无清晰可核验图，未采。
5. **P_ 经典产品数量 28（配额 30–38）**：差 2 张。原因：上述早期型号（Pescecappa/Wall Carpet/Modula/Victoria/Ola）公开可核验大图稀缺；其余已确认型号的可用角度已采齐，避免以低质/不可核验图凑数。如需补足，建议第二轮用浏览器自动化登录 elica.com 官方产品档案/媒体库或 designboom、Architettura Italiana 档案补高分辨率原图。
6. **F_ 马达/降噪单元与过滤件特写**：designboom 工厂探访图以总装/钣金/表面/仓储为主，马达业务单元（EMC FIME）与过滤材料特写无独立可下载图，未单独采。
7. **官方 SVG 矢量字标**：官网页头字标为位图（2024 版），未取到官方 .svg 源文件；seeklogo 标注有 SVG 但需登录/付费，未采。

## 复检修正记录（2026-10-26 第二轮）

- 按 10,240B（10KB）硬门槛全量复检 A 组：唯一未达标为 `P_Audrey_evolution_white.jpg`（实测 10,070B < 10,240B），已移入 `_unused\`。
- 同来源（appliancist）补取的 Audrey 白色锥形点灯视角 `XYa5TgKu2O` 实测同为 10,070B（同一低缓存图），一并移入 `_unused\`，未采用。
- 改以 elica 中国官网高清产品图 `P_Edith_evolution_official.jpg`（800×1200 / 558,632 B）补位，维持 A 组合计 42 张。
- 复检后 A 组全部文件均 >10,240B 且 Pillow 可解码。

---

## 六、缺口说明（B 组）

## 缺口说明

1. **Virtus 烤箱线（2026 Red Dot）**：官网 `/IT-en/ovens/virtus` 返回 404，2026 新品页路径未在本轮探测中定位；电子媒体（electromarket.com 等）仅转述无官方高清产品图。待补：官网烤箱分类页或 Red Dot 2026 档案配图。
2. **Serendipity 壁挂烟机**：`/IT-en/hoods/wall/serendipity`、`/JO-en/hoods/wall/serendipity` 均返回空壳/404（JS 渲染或路径变更），未取到独立产品图；该型号在研究笔记中仅作材质/控制界面旁证，不影响当代产品主线。
3. **NikolaTesla Prime 独立产品页**：`/DE-en/hobs/extractor/nikolatesla-prime` 返回 200 但页面内无独立 `/storage/` 产品图（仅导航/跨型号缩略）；本组以 Prime S 顶视图（`nikolatesla-prime-s-black-83x515x25-top-ol.png`）代表 Prime 子线，Prime 与 Prime S 的严格区分图待补。
4. **Ariachef Pro 纯产品白底图**：官方新闻稿为活动/场景照（2000×1125 横构图），未取到抠白底产品单件图；如需正文纯产品图，需待 Elica 媒体库（press kit）开放或设计媒体（Dezeen/Designboom）产品档案配图。
5. **Thin Island（120cm 岛式款）独立图**：本轮仅取 Thin 壁挂 90 产品图；Thin Island 岛式款页面未单独探测到，待补。
6. **ID Technology 自有 induction 线（2026 EuroCucina 发布）**：尚未见官网独立产品页与高清产品图，属 2026 最新发布，待官网产品线更新后补采。
7. **Edith/Juno 场景图**：本组各仅取 1 张正面产品图；其厨房悬挂场景/灯光氛围图 A 组已另行采集（命名为 `P_Edith_evolution_*`、`P_Edith_classic_product` 等），本组不重复，避免与 A 组撞图。

---

## 七、2026-10-27 绿底、黑底与产品故事配图复核

本轮只修订 ELICA 报告及本媒体目录。新增图片均为官方页面原始文件，未进行抠底、换底、尺寸标注或裁切；优先以安装场景、使用状态和不同角度替换绿底、黑底素材图，并保留必要产品图与场景图搭配。

| 文件名 | 型号与画面依据 | 来源页面 | 实测尺寸 / 大小 | 检索日期 |
|---|---|---|---|---|
| P_NikolaTeslaOne_2016_raw_official.png | NikolaTesla One 黑色 83 厘米吸风灶官方透明底原始 PNG；替换原绿底 JPG | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-one | 5000×5000 / 1324 KB；ARGB | 2026-10-27 |
| P_Thin_2020_product_official.png | Thin 不锈钢 90 厘米超薄壁挂烟机官方透明底原始 PNG；替换原绿底 JPG | https://www.elica.com/IT-en/hoods/wall/thin | 5000×5000 / 1425 KB；ARGB | 2026-10-27 |
| P_Juno_2015_front_official.png | Juno 黑色 50 厘米吊灯式烟机官方透明底原始 PNG；替换原绿底 JPG | https://www.elica.com/IT-en/hoods/island/juno | 5000×5000 / 578 KB；ARGB | 2026-10-27 |
| P_Juno_2015_detail.jpg | Juno 底部灯带、金属格栅与滤网的同型号仰视细节 | https://www.elica.com/IT-en/hoods/island/juno | 4000×4000 / 1839 KB | 2026-10-27 |
| P_NikolaTeslaPrimeS_2020_room.jpg | Prime S 黑色吸风灶嵌入开放厨房岛台的官方产品页横幅 | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-prime-s | 3344×3344 / 1051 KB | 2026-10-27 |
| P_NikolaTeslaLibra_2018_kitchen.jpg | Libra 黑色吸风灶在窗边岛台的官方安装场景，排烟缝处于升起状态 | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-libra | 4000×2990 / 888 KB | 2026-10-27 |
| P_Space_2007_kitchen_scene2.jpg | SPACE 圆形烟机在紧凑厨房中的官方社媒安装场景，替代原黑底控制条素材 | https://in.pinterest.com/elicahilife/space/ | 2652×3536 / 349 KB | 2026-10-27 |
| P_Edith_2015_white_front.png | Édith 白色 50 厘米吊灯式烟机官方透明底原始 PNG | https://www.elica.com/IT-en/hoods/island/edith | 5000×5000 / 411 KB；ARGB | 2026-10-27 |
| P_Edith_2015_black_variant.jpg | Édith 深色圆穹款官方产品角度图 | https://www.elica.com/IT-en/hoods/island/edith | 6000×5275 / 2076 KB | 2026-10-27 |
| P_Edith_2015_kitchen.jpg | Édith 单灯中岛厨房安装场景 | https://www.elica.com/IT-en/hoods/island/edith | 4000×3064 / 575 KB | 2026-10-27 |
| P_Edith_2015_kitchen_duo.jpg | Édith 双灯长中岛厨房安装场景 | https://www.elica.com/IT-en/hoods/island/edith | 4000×3000 / 580 KB | 2026-10-27 |
| P_HaikuDryIsland_2021_detail.jpg | Haiku Dry Island 黑色岛式烟机控制面板与薄体前缘细节 | https://www.elica.com/WW-en/hoods/island/haiku-dry-island | 4000×4000 / 938 KB | 2026-10-27 |
| P_HaikuDryIsland_2021_room.jpg | Haiku Dry Island 黑色岛机在开放厨房中的安装场景 | https://www.elica.com/WW-en/hoods/island/haiku-dry-island | 4000×4000 / 1718 KB | 2026-10-27 |
| P_NikolaTeslaSwitch_2018_wide_kitchen.jpg | Switch 黑色吸风灶在落地窗开放厨房中的安装场景 | https://www.elica.com/CA-en/cooktops/downdraft/nikolatesla-switch | 4000×2785 / 641 KB | 2026-10-27 |
| P_NikolaTeslaFit_2022_room2.jpg | Fit 吸风灶嵌入紧凑厨房台面的第二组官方场景 | https://www.elica.com/IT-en/hobs/extractor/nikolatesla-fit | 4000×4000 / 1291 KB | 2026-10-27 |
| P_NikolaTeslaUnplugged_2021_detail.jpg | Unplugged 黑色吸风灶、物理旋钮与锅具同框的官方台面场景 | https://www.elica.com/BA-en/hobs/extractor/nikolatesla-unplugged | 4000×2669 / 1494 KB | 2026-10-27 |
| P_IkonaMaxxiPure_2022_kitchen_threequarter.jpg | Ikona Maxxi Pure 黑色岛机与净化模块的三分之四厨房场景 | https://www.elica.com/MD-en/ikona-maxxi-pure | 4000×4000 / 1267 KB | 2026-10-27 |
| P_IkonaMaxxiPure_2022_kitchen_wide.jpg | Ikona Maxxi Pure 在开放厨房与客厅连通空间中的全景图 | https://www.elica.com/MD-en/ikona-maxxi-pure | 4000×2828 / 585 KB | 2026-10-27 |
| P_BoxinAdvance_2021_detail_open.jpg | Boxin Advance 前挡板自动翻出、吸烟口显露的安装细节 | https://www.elica.com/MK-en/hoods/integrated/boxin-advance | 4000×2827 / 601 KB | 2026-10-27 |
| P_BoxinAdvance_2021_steam.jpg | Boxin Advance 柜下吸烟口处理水汽的烹饪场景 | https://www.elica.com/MK-en/hoods/integrated/boxin-advance | 4000×2827 / 460 KB | 2026-10-27 |
