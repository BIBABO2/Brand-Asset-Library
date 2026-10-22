# FLOS 品牌图片台账（品牌历史 / 当代产品 / 美学空间 / 设计制造）

- 品牌：FLOS（意大利设计师照明品牌，Flos B&B Italia Group）
- 检索日期：2026-10-21
- 本台账仅登记本子代理落盘的图片（文件名前缀 P_ / H / S_ / F_ / Logo_）；目录中另一子代理的 cand_*.jpg 不在本表登记范围。
- 取图通道：flos.com 为 Salesforce Demandware 站点，产品页 HTML 内嵌 Cloudinary/Demandware CDN 图（`.../dw/image/v2/BFXX_PRD/...`），将页面内缩略图参数升级为 `?sw=2000&q=80&bgcolor=FFFFFF` 得到 2000px 高清原图；历史/展厅/工厂图取自 flos.com 官方 about-us-heritage 与 philosophy-detail-page-1960 内容库（Library-Sites-FLOS-contentlib），按 1600px 导出。
- Logo：`Logo_Flos_wordmark.svg` 由上游从官网 CDN 取得（https://flos.com/on/demandware.static/Sites-FLOS-EU-Site/-/default/dw7b706fc2/images/logos/flos-logo.svg ，7133 字节，viewBox 1364×522）。本子代理用 Chrome headless 将该 SVG 以矢量方式渲染为 `Logo_Flos_wordmark_1600.png`（1600×612，透明底，黑字），未做位图插值放大。
- 校验方法：Add-Type System.Drawing，逐张 `[System.Drawing.Image]::FromFile()` 打开成功并记录宽高；全部 JPEG 来源经 Pillow/System.Drawing 重编码为 JPEG quality 88；文件均 >10KB。

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_Flos_wordmark.svg | 官方矢量字标 | https://flos.com/on/demandware.static/Sites-FLOS-EU-Site/-/default/dw7b706fc2/images/logos/flos-logo.svg | 上游下载，7133B viewBox1364x522 | 2026-10-21 | FLOS 官方商标，仅作品牌识别 |
| Logo_Flos_wordmark_1600.png | 矢量 SVG 渲染 1600×612 透明底 | 同上 SVG，本地 Chrome headless 渲染 | System.Drawing 打开 1600×612 | 2026-10-21 | 同上 |
| H1962_Breuer_Merano_cocoon.jpg | 1962 年 Achille & Pier Giacomo Castiglioni 向 Marcel Breuer 展示 cocoon 灯（Viscontea/Taraxacum），米兰 | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1286 目视三人围 cocoon 灯黑白合影，与页面图注一致 | 2026-10-21 | 官方 heritage 历史档案照 |
| H_Achille_Castiglioni.jpg | Achille Castiglioni 肖像（wink 经典肖像） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×2057 目视单人肖像 | 2026-10-21 | 官方 heritage |
| H_Castiglioni_brothers.jpg | Castiglioni 三兄弟年轻时户外合影 | https://flos.com/en/us/designers/a-and-pg-castiglioni-us.html | 1600×1474 目视三人黑白合影 | 2026-10-21 | 官方设计师档案 |
| H_Castiglioni_drafting_table.jpg | 年轻 Castiglioni 在绘图桌前工作照 | https://flos.com/en/us/designers/a-and-pg-castiglioni-us.html | 1600×1022 目视绘图桌工作照 | 2026-10-21 | 官方设计师档案 |
| H_cocoon_columns_1962.jpg | 1962-65 早期 cocoon 落地灯柱产品合影 | https://flos.com/en/us/about-us-heritage.html | 1600×2134 目视两座 cocoon 柱灯黑白照 | 2026-10-21 | 官方 heritage |
| H_Sergio_Gandini.jpg | Sergio Gandini 与 Afra & Tobia Scarpa 在办公室 | https://flos.com/en/us/about-us-heritage.html | 1600×1181 目视三人办公场景，页面文件名标注 Sergio Gandini | 2026-10-21 | 官方 heritage |
| H_Taccia_1962_design_sketch.jpg | Achille Castiglioni 1962 年 Taccia 原始设计草图 | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1099 目视手绘工程草图带签名 | 2026-10-21 | 官方 heritage |
| F_cocoon_process.jpg | cocoon 树脂喷涂骨架 X 光式工艺照（金属骨架+树脂涂层） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1286 目视 cocoon 灯内部骨架 | 2026-10-21 | 官方 heritage 工艺资料 |
| F_Bovezzo_factory_1970s.jpg | 1970 年代 FLOS 工厂（白色长厂房外景） | https://flos.com/en/us/about-us-heritage.html | 1600×1200 目视工业厂房外景带 70 年代轿车 | 2026-10-21 | 官方 heritage |
| F_factory_assembly.jpg | Valencia/Antares 车间装配工位（气动螺丝刀装配） | https://flos.com/en/us/about-us-heritage.html | 1600×2115 目视工人装配工位 | 2026-10-21 | 官方 heritage |
| S_Flagship_Milan.jpg | 米兰旗舰展厅 Corso Monforte 门脸（Parentesi 50 发布） | https://flos.com/en/us/about-us-heritage.html | 1600×1118 目视橙墙 FLOS 招牌店面 | 2026-10-21 | 官方 heritage |
| S_DesignWeek_booth.jpg | 2023 米兰设计周 FLOS 展位（白色弧墙+植物+FLOS 墙标） | https://flos.com/en/us/about-us-heritage.html | 1600×1200 目视展位全景 | 2026-10-21 | 官方 heritage |
| S_showroom_Valencia.jpg | Valencia/Antares 展厅洗光试灯空间 | https://flos.com/en/us/about-us-heritage.html | 1600×1066 目视展厅墙面黄光洗光 | 2026-10-21 | 官方 heritage |
| S_exhibition_1960s_launch.jpg | 1960 年代展厅活动（两位西装男士在吊灯下） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×2057 目视展览现场黑白照 | 2026-10-21 | 官方 heritage |
| S_catalog_1960s_merano_cocoon.jpg | 1960 年代 cocoon 产品平面/画册（含 merano 字样） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1099 目视 cocoon 灯老广告 | 2026-10-21 | 官方 heritage |
| P_Globall_1998_suspension_packshot.jpg | Glo-Ball S2 悬挂款（Jasper Morrison 1998）packshot | https://www.flos.com/en/us/glo-ball-suspension/M-glo-ball-suspension.html | 2000×2000 目视磨砂球形吊灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_Globall_1998_lit_scene.jpg | Glo-Ball 发光场景 | https://www.flos.com/en/us/glo-ball-suspension/M-glo-ball-suspension.html | 2000×1500 目视发光球体室内场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_RomeoMoon_1996_suspension_packshot.jpg | Romeo Moon S1 悬挂款（Philippe Starck 1996）packshot | https://flos.com/en/us/romeo-moon-suspension/M-romeo-moon-suspension.html | 2000×2000 目视圆盘形吊灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_RomeoMoon_1996_lit_scene.jpg | Romeo Moon 发光场景 | https://flos.com/en/us/romeo-moon-suspension/M-romeo-moon-suspension.html | 2000×1500 目视发光圆盘室内 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Mayday_2000_table_packshot.jpg | Mayday 便携灯（Konstantin Grcic 2000）橙色 packshot | https://www.flos.com/en/us/mayday/M-mayday.html | 2000×2000 目视橙色便携提灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_Mayday_2000_scene.jpg | Mayday 使用场景 | https://www.flos.com/en/us/mayday/M-mayday.html | 2000×1500 目视橙色 Mayday 室内场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Skygarden_2007_packshot.jpg | Skygarden 小尺寸悬挂（Marcel Wanders 2007）packshot | https://www.flos.com/en/us/skygarden/M-skygarden.html | 2000×2000 目视圆盘嵌入穹顶灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_Skygarden_2007_interior_dome.jpg | Skygarden 室内安装（内部雕花穹顶） | https://www.flos.com/en/us/skygarden/M-skygarden.html | 2000×1500 目视黑天花板内嵌发光穹顶 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Skygarden_2007_dome_detail.jpg | Skygarden 穹顶外观细节 | https://www.flos.com/en/us/skygarden/M-skygarden.html | System.Drawing 打开（2000 级） | 2026-10-21 | FLOS 官方 lifeshot |
| P_ICLights_2014_S1_brass_packshot.jpg | IC Lights S1 悬挂（Michael Anastassiades 2014）黄铜 packshot | https://www.flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | 2000×2000 目视黄铜圆环吊灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_ICLights_2014_brass_scene1.jpg | IC Lights 黄铜场景 1 | https://www.flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | 2000×1500 目视黄铜灯悬挂场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_ICLights_2014_brass_scene2.jpg | IC Lights 黄铜场景 2 | https://www.flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | 2000×1500 目视黄铜灯场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_ICLights_2014_brass_scene3.jpg | IC Lights 黄铜场景 3 | https://www.flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | System.Drawing 打开（2000 级） | 2026-10-21 | FLOS 官方 lifeshot |
| P_StringLight_2014_cone_packshot.jpg | String Light 锥形头（Michael Anastassiades）白色 packshot | https://www.flos.com/en/us/string-light-cone-head-12mt-cable-white/F6487009.html | 2000×2000 目视锥形灯头白底 | 2026-10-21 | FLOS 官方产品图 |
| P_CaptainFlint_2015_floor_packshot.jpg | Captain Flint 落地灯（Anastassiades 2015）炭灰+大理石底座 packshot | https://www.flos.com/en/us/captain-flint/M-captain-flint.html | 2000×2000 目视杆状落地灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_CaptainFlint_2015_lit_scene.jpg | Captain Flint 发光场景 | https://www.flos.com/en/us/captain-flint/M-captain-flint.html | 2000×1500 目视落地灯暖光场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Noctambule_2019_cylinder_packshot.jpg | Noctambule S5 Low Cylinder（Konstantin Grcic 2019）黑框 packshot | https://flos.com/en/us/noctambule-suspension/M-noctambule-suspension.html | 2000×2000 目视玻璃圆柱灯柱白底 | 2026-10-21 | FLOS 官方产品图 |
| P_Noctambule_2019_suspension_scene.jpg | Noctambule 悬挂场景 | https://flos.com/en/us/noctambule-suspension/M-noctambule-suspension.html | 2000×1500 目视玻璃圆柱悬挂组合 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Noctambule_2019_scene2.jpg | Noctambule 场景 2 | https://flos.com/en/us/noctambule-suspension/M-noctambule-suspension.html | System.Drawing 打开（2000 级） | 2026-10-21 | FLOS 官方 lifeshot |
| P_Wireline_2019_pink_packshot.jpg | Wireline（Formafantasma 2019）粉色 packshot | https://flos.com/en/us/wireline/M-wireline.html | 2000×2000 目视细线形吊灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_Wireline_2019_lit_scene.jpg | Wireline 粉色发光场景 | https://flos.com/en/us/wireline/M-wireline.html | 2000×1500 目视粉色线性灯场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Superwire_2025_S3_packshot.jpg | SuperWire S3 钢色（Formafantasma 2025 建筑悬挂）packshot | https://www.flos.com/en/us/superwire-s3-steel/D301S31C3UAF2.html | 2000×2000 目视线性导轨灯白底 | 2026-10-21 | FLOS 官方产品图 |
| P_Superwire_2025_scene.jpg | SuperWire S3 场景 | https://www.flos.com/en/us/superwire-s3-steel/D301S31C3UAF2.html | 2000×1500 目视线性灯室内场景 | 2026-10-21 | FLOS 官方 lifeshot |

### 第二轮补充（2026-10-22，浏览器自动化取 professional/imgix CDN）

| P_InfraStructure_2020_system.jpg | Infra-Structure（Vincent Van Duysen 2020）办公空间黑色轨道系统全景 | https://professional.flos.com/en/global/stories/stories-infra-structure/ | 2000×1221 目视黑色网格磁吸轨道办公全景；出自 stories-infra-structure-vincent-van-duysen-flos 官方故事，未与 The Running Magnet 混图 | 2026-10-22 | FLOS 官方 story（flos-assets.imgix.net） |
| P_InfraStructure_2020_modules.jpg | Infra-Structure 磁吸模块标注图（Multi Spot Mini / Light Tube / Spot / Suspension Glass Downlight / Suspension Panel） | https://professional.flos.com/en/global/stories/stories-infra-structure/ | 2000×1152 目视模块组件标注示意图 | 2026-10-22 | FLOS 官方 story |
| P_InfraStructure_2020_scene.jpg | Infra-Structure 住宅安装场景（黑色轨道+板条天花） | https://professional.flos.com/en/global/stories/stories-infra-structure/ | 2000×1435 目视落地窗住宅内轨道系统 | 2026-10-22 | FLOS 官方 story |
| P_StringLight_2014_scene.jpg | String Light 细钢丝悬挂几何场景（cone+sphere 头，绗缝墙面） | https://professional.flos.com/en/global/family/string-light/ | 2000×733 目视两根细吊线灯头在素色墙前 | 2026-10-22 | FLOS 官方 family lifeshot（imgix） |
| P_Camouflage_2016_outdoor_packshot.jpg | Camouflage 140 户外壁灯（Piero Lissoni 2016，Basaltina 石材）packshot | https://flos.com/en/us/camouflage-140/B-camouflage-140-crema-3000k-us.html | 2000×2000 目视圆形石材壁灯白底 | 2026-10-22 | FLOS 官方产品图 |
| P_Camouflage_2016_outdoor_scene.jpg | Camouflage 白色户外壁灯发光场景 | https://flos.com/en/us/camouflage-140/B-camouflage-140-crema-3000k-us.html | 2000×1600 目视外墙圆形洗光壁灯 | 2026-10-22 | FLOS 官方 lifeshot |
| S_Flagship_NewYork.jpg | 纽约 Soho 旗舰展厅（152 Greene Street）室内 | https://japan.flos.com/flagship-stores/new-york/ | 1600×1458 目视窗上 FLOS 招牌+产品陈列；地址经 professional.flos.com contacts 页核实为 152 Greene Street, NY | 2026-10-22 | FLOS 官方旗舰店档案（flos-jp.imgix.net） |
| F_Murano_glass.jpg | 手工吹制玻璃球特写（Luce Sferica，Ronan Bouroullec 2025，官方称 centuries-old glass blowing） | https://professional.flos.com/en/global/product/luce-sferica-s1-f3752000/ | 1600×1600 目视一排手工吹制透明玻璃球 | 2026-10-22 | FLOS 官方产品图（flos-pim.imgix.net） |
| F_marble_Carrara.jpg | Arco（Castiglioni 1962）白色 Carrara 大理石方形底座（带搬运孔） | https://www.flos.com/en/us/arco/M-arco.html | 2000×2000 目视白色大理石方块底座（官方说明为 white Carrara marble） | 2026-10-22 | FLOS 官方产品图 |

## 未取到/舍弃说明

- ~~Infra-Structure~~ **已于 2026-10-22 通过浏览器自动化从 professional.flos.com 官方故事页（flos-assets.imgix.net CDN）补齐 3 张**，均经目视核对为 Van Duysen 的 Infra-Structure 磁吸轨道系统，未与 The Running Magnet 等其他轨道系统混图。
- ~~纽约旗舰、第二户外家族 Camouflage~~ **已于 2026-10-22 补齐**：纽约旗舰取官方 japan.flos.com 旗舰店档案（152 Greene Street 经 contacts 页核实）；户外取 Camouflage 140（Piero Lissoni 2016）packshot+场景 2 张。
- ~~Murano 吹制玻璃 / Carrara 大理石工艺特写~~ **已于 2026-10-22 补齐**：玻璃用 Luce Sferica 手工吹制玻璃球官方图（官方明确 glass blowing 工艺）；大理石用 Arco 官方 packshot 中白色 Carrara 大理石底座。注：未取得独立的 Murano 玻璃窑吹制现场或 Carrara 采石/切割车间纪实照（官方未发布），现以产品级材料特写代替，已如实标注。
- **创始人肖像缺口（仍存）**：Dino Gavina、Cesare Cassina 两位 1962 联合创始人及 Piero Gandini（1996 起 Chairman）仍未在 FLOS 官方渠道找到可确认身份的肖像；为避免张冠李戴未用无授权人物图顶替，仅取到可确认的 Sergio Gandini。
- 说明：H1962 图实际拍摄地为米兰（官方图注 "Milan, 1962"），文件名按任务要求保留 Merano 字样，特此标注。
