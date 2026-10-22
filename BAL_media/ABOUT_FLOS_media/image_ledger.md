# FLOS 品牌图片台账（统一版）

- 品牌：FLOS（意大利设计师照明品牌，Flos B&B Italia Group）
- 检索日期：2026-10-21 至 2026-10-22
- 台账范围：正文引用的全部图片（2 字标 + 7 历史 H_ + 4 工厂/材料 F_ + 6 空间 S_ + 60 产品 P_，共 79 个文件；报告正文实际嵌入 77 张，`Logo_Flos_wordmark_1600.png` 为矢量渲染备用件）。
- 另有 17 张备件图/重复图存于 `_unused/`，不进正文、不在本台账登记。
- 取图通道：
  - flos.com 为 Salesforce Demandware 站点，产品页 HTML 内嵌 Cloudinary/Demandware CDN 图（`.../dw/image/v2/BFXX_PRD/...`），将页面缩略图参数升级为 `?sw=2000&q=80&bgcolor=FFFFFF` 得到 2000px 高清原图；
  - professional.flos.com 图片走 imgix CDN（`flos-assets.imgix.net` / `flos-pim.imgix.net`），取参数 `?w=2000&q=80`；
  - 历史/展厅/工厂图取自 flos.com 官方 about-us-heritage 与 philosophy-detail-page-1960 内容库（Library-Sites-FLOS-contentlib），按 1600px 导出。
- 验证方法：
  - 品牌/当代侧：Add-Type System.Drawing，逐张 `[System.Drawing.Image]::FromFile()` 打开成功并记录宽高；全部 JPEG 重编码为 JPEG quality 88；文件均 >10KB。
  - 经典侧：47 张候选图用 .NET System.Drawing 合成带文件名标签的 6 列总览拼图（montage），逐张目检型号、代际与配色；Taraxacum 1（1960 cocoon 白纤维星团）与 Taraxacum 88（1988 抛光铝三角二十面体 + 60 只裸 Globolux 灯泡）严格区分；剔除备件图与重复图后定名。

## 一、品牌字标

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_Flos_wordmark.svg | 官方矢量字标 | https://flos.com/on/demandware.static/Sites-FLOS-EU-Site/-/default/dw7b706fc2/images/logos/flos-logo.svg | 7133B，viewBox 1364×522，浏览器直接打开 | 2026-10-21 | FLOS 官方商标，仅作封面品牌识别 |
| Logo_Flos_wordmark_1600.png | 由上述 SVG 矢量渲染 1600×612 透明底黑字（备用，未入正文） | 同上 SVG，本地 Chrome headless 渲染 | System.Drawing 打开 1600×612，无位图插值放大 | 2026-10-21 | 同上 |

## 二、历史照片（H_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| H1962_Breuer_Merano_cocoon.jpg | 1962 年 Achille & Pier Giacomo Castiglioni 向 Marcel Breuer 展示 cocoon 灯（Viscontea/Taraxacum），官方图注 Milan, 1962 | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1286，目视三人围 cocoon 灯黑白合影，与页面图注一致 | 2026-10-21 | 官方 heritage 历史档案照 |
| H_Achille_Castiglioni.jpg | Achille Castiglioni 经典肖像（眨眼） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×2057，目视单人肖像 | 2026-10-21 | 官方 heritage |
| H_Castiglioni_brothers.jpg | Castiglioni 兄弟年轻时户外合影 | https://flos.com/en/us/designers/a-and-pg-castiglioni-us.html | 1600×1474，目视多人黑白合影 | 2026-10-21 | 官方设计师档案 |
| H_Castiglioni_drafting_table.jpg | 年轻 Castiglioni 在绘图桌前工作照 | https://flos.com/en/us/designers/a-and-pg-castiglioni-us.html | 1600×1022，目视绘图桌工作照 | 2026-10-21 | 官方设计师档案 |
| H_cocoon_columns_1962.jpg | 1962–65 早期 cocoon 落地灯柱产品黑白合影 | https://flos.com/en/us/about-us-heritage.html | 1600×2134，目视两座 cocoon 柱灯黑白照 | 2026-10-21 | 官方 heritage |
| H_Sergio_Gandini.jpg | Sergio Gandini 与 Afra & Tobia Scarpa 在办公室 | https://flos.com/en/us/about-us-heritage.html | 1600×1181，目视三人办公场景，页面文件名标注 Sergio Gandini | 2026-10-21 | 官方 heritage |
| H_Taccia_1962_design_sketch.jpg | Achille Castiglioni 1962 年 Taccia 原始设计草图 | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1099，目视手绘工程草图带签名 | 2026-10-21 | 官方 heritage |

## 三、工厂与材料（F_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| F_Bovezzo_factory_1970s.jpg | 1970 年代 FLOS Bovezzo（Brescia）新厂白色长厂房外景 | https://flos.com/en/us/about-us-heritage.html | 1600×1200，目视工业厂房外景带 70 年代轿车 | 2026-10-21 | 官方 heritage |
| F_cocoon_process.jpg | cocoon 树脂喷涂钢骨架的工艺照（金属骨架 + 树脂纤维层） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1286，目视 cocoon 灯内部骨架与纤维层 | 2026-10-21 | 官方 heritage 工艺资料 |
| F_factory_assembly.jpg | Valencia/Antares 车间装配工位（气动螺丝刀装配） | https://flos.com/en/us/about-us-heritage.html | 1600×2115，目视工人装配工位 | 2026-10-21 | 官方 heritage |
| F_Murano_glass.jpg | 手工吹制玻璃球特写（Luce Sferica，官方称 centuries-old glass blowing 工艺，代表 FLOS 口吹玻璃供应链） | https://professional.flos.com/en/global/product/luce-sferica-s1-f3752000/ | 1600×1600，目视一排手工吹制透明玻璃球 | 2026-10-22 | FLOS 官方产品图（flos-pim.imgix.net） |

## 四、空间与展览（S_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| S_catalog_1960s_merano_cocoon.jpg | 1960 年代 cocoon 产品平面画册（含 Merano 字样） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×1099，目视 cocoon 灯老广告页 | 2026-10-21 | 官方 heritage |
| S_DesignWeek_booth.jpg | 米兰设计周 FLOS 展位（白色弧墙 + 植物 + FLOS 墙标） | https://flos.com/en/us/about-us-heritage.html | 1600×1200，目视展位全景 | 2026-10-21 | 官方 heritage |
| S_exhibition_1960s_launch.jpg | 1960 年代展厅/发布活动（两位西装男士在吊灯下） | https://flos.com/en/us/philosophy-detail-page-1960.html | 1600×2057，目视展览现场黑白照 | 2026-10-21 | 官方 heritage |
| S_Flagship_Milan.jpg | 米兰旗舰展厅 Corso Monforte 9 门脸（Parentesi 50 发布） | https://flos.com/en/us/about-us-heritage.html | 1600×1118，目视橙墙 FLOS 招牌店面 | 2026-10-21 | 官方 heritage |
| S_Flagship_NewYork.jpg | 纽约 Soho 旗舰展厅（152 Greene Street）室内 | https://japan.flos.com/flagship-stores/new-york/ | 1600×1458，目视窗上 FLOS 招牌 + 产品陈列；地址经 professional.flos.com contacts 页核实 | 2026-10-22 | FLOS 官方旗舰店档案（flos-jp.imgix.net） |
| S_showroom_Valencia.jpg | Valencia/Antares 展厅洗光试灯空间（Flos Architectural 运营总部） | https://flos.com/en/us/about-us-heritage.html | 1600×1066，目视展厅墙面黄光洗光 | 2026-10-21 | 官方 heritage |

## 五、经典产品（1960–1970 年代，P_）

> 取图来源均为 FLOS 官方产品页/专业站 CDN 原图（Demandware `BFXX_PRD` 与 flospro S3/imgix）；每张经 47 图带标签总览拼图逐张目检，型号、代际、配色与官方页面一致。

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Arco_1962_packshot.jpg | Arco（Castiglioni 1962）官方白底整机：Carrara 大理石底座 + 不锈钢拱臂 | https://flos.com/en/us/arco-steel-incandescent-arco/FU030000.html | 2000px 目检大理石底座+拱臂+铝反射器 | 2026-10-22 | FLOS 官方产品图 |
| P_Arco_1962_marble_base_hole.jpg | Arco 白色 Carrara 大理石底座搬运圆孔特写 | https://flos.com/en/us/arco-steel-incandescent-arco/FU030000.html | 目检斜切倒角大理石块 + 贯穿圆孔 | 2026-10-22 | FLOS 官方产品图 |
| P_Arco_1962_scene_dining.jpg | Arco 横跨餐桌上方的餐厅场景 | https://www.flos.com/en/us/stories/arco-a-design-icon-us.html | 目检拱臂横跨餐桌、光源悬于桌面正中 | 2026-10-22 | FLOS 官方 story lifeshot |
| P_Arco_1962_scene_living.jpg | Arco 客厅场景（暖光、暗调空间） | https://www.flos.com/en/us/stories/arco-a-design-icon-us.html | 目检客厅环境与拱臂比例 | 2026-10-22 | FLOS 官方 story lifeshot |
| P_Arco_2012_LED_scene.jpg | Arco LED 版（2012，50 周年再版）场景 | https://flos.com/en/nl/arco/M-arco.html | 目检 LED 版整机形态与原版一致 | 2026-10-22 | FLOS 官方产品图 |
| P_Taccia_1962_packshot.jpg | Taccia（Castiglioni 1962）黑色灯体现行版白底整机 | https://flos.com/en/us/taccia/M-taccia.html | 目检倒扣玻璃碗 + 阳极氧化铝柱 + 镀镍底座 | 2026-10-22 | FLOS 官方产品图 |
| P_Taccia_1962_glass_bowl.jpg | Taccia 透明口吹玻璃碗与反射器特写 | https://flos.com/en/us/taccia/M-taccia.html | 目检抛物面玻璃碗与铝反射器内外双色处理 | 2026-10-22 | FLOS 官方产品图 |
| P_Taccia_1962_aluminum_base.jpg | Taccia 阳极氧化铝灯体与底座细节 | https://flos.com/en/us/taccia/M-taccia.html | 目检灯柱散热槽与底座旋钮调光器 | 2026-10-22 | FLOS 官方产品图 |
| P_Taccia_1962_scene.jpg | Taccia 点亮的边柜场景（间接光上打天花板） | https://flos.com/en/us/taccia/M-taccia.html | 目检玻璃碗转向、暖光漫射 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Toio_1962_packshot.jpg | Toio LED（Castiglioni 1962）白底整机：车规大灯 + 六方黄铜杆 + 角铁底座 | https://www.flos.com/en/dk/toio-led/M-toio.html | 目检外露变压器、钓鱼竿导环、船用系缆羊角 | 2026-10-22 | FLOS 官方产品图 |
| P_Toio_1962_headlamp_detail.jpg | Toio 伸缩式汽车前大灯灯头特写 | https://www.flos.com/en/dk/toio-led/M-toio.html | 目检车规大灯总成与镀铬杆顶连接件 | 2026-10-22 | FLOS 官方产品图 |
| P_Toio_1962_uplight_scene.jpg | Toio 向上反射的使用场景 | https://www.flos.com/en/dk/toio-led/M-toio.html | 目检大灯上仰、光束打向天花板 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Parentesi_1971_red_packshot.jpg | Parentesi（Castiglioni & Manzù 1971）红色 50 周年版白底 | https://www.flos.com/en/fi/parentesi-on-off/M-parentesi.html | 目检天花-地面张拉钢索与管形灯头 | 2026-10-22 | FLOS 官方产品图 |
| P_Parentesi_1971_red_scene.jpg | Parentesi 红色版场景（灯头悬于钢索） | https://www.flos.com/en/fi/parentesi-on-off/M-parentesi.html | 目检钢索垂直张拉、灯头高度 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Parentesi_1971_black_scene.jpg | Parentesi 黑色版室内场景 | https://www.flos.com/en/fi/parentesi-on-off/M-parentesi.html | 目检黑色灯头与室内环境 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Snoopy_1967_packshot.jpg | Snoopy（Castiglioni 1967）现行版白底整机（橙色搪瓷反射器 + 大理石底座） | https://www.flos.com/en/sk/snoopy/M-snoopy.html | 目检斜切 Carrara 大理石块与狗鼻轮廓灯罩 | 2026-10-22 | FLOS 官方产品图 |
| P_Snoopy_1967_lit_scene.jpg | Snoopy 点亮场景（光向下直射桌面） | https://www.flos.com/en/sk/snoopy/M-snoopy.html | 目检暖光下射与桌面光斑 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Snoopy_1967_white_scene.jpg | Snoopy 白色版桌面场景 | https://www.flos.com/en/sk/snoopy/M-snoopy.html | 目检白色大理石与白色反射器配色 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Viscontea_1960_packshot.jpg | Viscontea（Castiglioni 1960）cocoon 卵球形吊灯白底 | https://flos.com/en/us/viscontea-white-halogen/FU800109.html | 目检白色钢架 + cocoon 树脂茧形漫射体 | 2026-10-22 | FLOS 官方产品图 |
| P_Viscontea_1960_cocoon_detail.jpg | Viscontea cocoon 纤维层特写 | https://flos.com/en/us/viscontea-white-halogen/FU800109.html | 目检树脂纤维缠绕的半透膜纹理 | 2026-10-22 | FLOS 官方产品图 |
| P_Taraxacum_1960_packshot.jpg | Taraxacum 1（Castiglioni 1960）原版 cocoon 蒲公英吊灯白底 | https://www.flos.com/fr/fr/taraxacum-1-white-halog%C3%A8ne-taraxacum-1/F7401009.html | 目检白色 thermo-lacquered 钢架 + cocoon 树脂球（非铝三角） | 2026-10-22 | FLOS 官方产品图 |
| P_Taraxacum_1960_scene_loft.jpg | Taraxacum 1 cocoon 版挑高空间场景 | https://www.flos.com/fr/fr/taraxacum-1-white-halog%C3%A8ne-taraxacum-1/F7401009.html | 目检蓬松白色纤维球悬挂于阁楼空间 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Taraxacum88_1988_packshot.jpg | Taraxacum 88（Achille Castiglioni 1988）白底：20 片抛光铝三角拼成二十面体 + 60 只裸 Globolux 灯泡 | https://www.flos.com/it/it/taraxacum-88/M-taraxacum-88.html | 目检抛光铝三角骨架与裸灯泡（非 cocoon） | 2026-10-22 | FLOS 官方产品图 |
| P_Taraxacum88_1988_bulb_detail.jpg | Taraxacum 88 铝三角节点与 Globolux 灯泡特写 | https://www.flos.com/it/it/taraxacum-88/M-taraxacum-88.html | 目检压制抛光铝片与灯座排列 | 2026-10-22 | FLOS 官方产品图 |
| P_Taraxacum88_1988_scene_living.jpg | Taraxacum 88 客厅场景 | https://www.flos.com/it/it/taraxacum-88/M-taraxacum-88.html | 目检铝球点亮、裸灯泡向四周放射 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Taraxacum88_1988_scene_dining.jpg | Taraxacum 88 餐厅场景 | https://www.flos.com/it/it/taraxacum-88/M-taraxacum-88.html | 目检大尺寸球体与餐桌尺度关系 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Gatto_1960_packshot.jpg | Gatto Piccolo（Castiglioni 1960）cocoon 小桌灯白底 | https://www.flos.com/es/es/gatto/M-gatto.html | 目检细钢腿 + 茧状小灯罩 | 2026-10-22 | FLOS 官方产品图 |
| P_Gatto_1960_lit_scene.jpg | Gatto 点亮场景（cocoon 柔光） | https://www.flos.com/es/es/gatto/M-gatto.html | 目检茧罩透出的暖光 | 2026-10-22 | FLOS 官方 lifeshot |
| P_SplugenBrau_1961_packshot.jpg | Splügen Bräu（Castiglioni 1961）旋压抛光铝碟形吊灯白底 | https://flos.com/en/us/spluegen-braeu-aluminium-incandescent/FU640000.html | 目检抛物线亮面铝碟与白色吸顶盘 | 2026-10-22 | FLOS 官方产品图 |
| P_SplugenBrau_1961_scene.jpg | Splügen Bräu 餐厅/吧台成群悬挂场景 | https://flos.com/en/us/spluegen-braeu-aluminium-incandescent/FU640000.html | 目检多只铝碟聚拢排列的光斑效果 | 2026-10-22 | FLOS 官方 lifeshot |
| P_Luminator_packshot.jpg | Luminator（Castiglioni 1954，FLOS 1994 再版）三脚间接光落地灯白底 | https://www.flos.com/en/it/luminator/M-luminator.html | 目检三根镀锌腿 + 细铁杆 + 顶部反射灯泡 | 2026-10-22 | FLOS 官方产品图 |

## 六、当代产品（1996–2025，P_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_RomeoMoon_1996_suspension_packshot.jpg | Romeo Moon S1（Philippe Starck 1996）棱纹玻璃吊灯白底 | https://www.flos.com/en/us/romeo-moon-suspension/M-romeo-moon-suspension.html | 2000×2000 目检双层玻璃圆盘吊灯 | 2026-10-21 | FLOS 官方产品图 |
| P_RomeoMoon_1996_lit_scene.jpg | Romeo Moon 发光场景 | https://www.flos.com/en/us/romeo-moon-suspension/M-romeo-moon-suspension.html | 2000×1500 目检发光圆盘室内 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Globall_1998_suspension_packshot.jpg | Glo-Ball S2（Jasper Morrison 1998）酸蚀乳白玻璃球吊灯白底 | https://www.flos.com/en/us/glo-ball-suspension/M-glo-ball-suspension.html | 2000×2000 目检磨砂球形吊灯 | 2026-10-21 | FLOS 官方产品图 |
| P_Globall_1998_lit_scene.jpg | Glo-Ball 满月式发光场景 | https://www.flos.com/en/us/glo-ball-suspension/M-glo-ball-suspension.html | 2000×1500 目检发光球体室内场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Mayday_2000_table_packshot.jpg | Mayday（Konstantin Grcic 2000）橙色聚丙烯便携灯白底 | https://www.flos.com/en/us/mayday/M-mayday.html | 2000×2000 目检锥形提灯、三角挂孔与绕线把手 | 2026-10-21 | FLOS 官方产品图 |
| P_Mayday_2000_scene.jpg | Mayday 桌面/手提使用场景 | https://www.flos.com/en/us/mayday/M-mayday.html | 2000×1500 目检橙色 Mayday 室内场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Skygarden_2007_packshot.jpg | Skygarden（Marcel Wanders 2007）半球石膏内穹吊灯白底 | https://www.flos.com/en/us/skygarden/M-skygarden.html | 2000×2000 目检极简半球外壳 | 2026-10-21 | FLOS 官方产品图 |
| P_Skygarden_2007_interior_dome.jpg | Skygarden 仰拍内部石膏穹顶与不锈钢雕花 | https://www.flos.com/en/us/skygarden/M-skygarden.html | 2000×1500 目检穹顶内花卉浆果浮雕 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Skygarden_2007_dome_detail.jpg | Skygarden 穹顶外观与安装细节 | https://www.flos.com/en/us/skygarden/M-skygarden.html | 2000 级目检半球外壳与吸顶结构 | 2026-10-21 | FLOS 官方 lifeshot |
| P_ICLights_2014_S1_brass_packshot.jpg | IC Lights S1（Michael Anastassiades 2014）黄铜框架吊灯白底 | https://flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | 2000×2000 目检黄铜细杆平衡乳白玻璃球 | 2026-10-21 | FLOS 官方产品图 |
| P_ICLights_2014_brass_scene1.jpg | IC Lights 黄铜场景 1 | https://flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | 2000×1500 目检黄铜灯平衡场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_ICLights_2014_brass_scene2.jpg | IC Lights 黄铜场景 2 | https://flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | 2000×1500 目检玻璃球与杆端平衡瞬间 | 2026-10-21 | FLOS 官方 lifeshot |
| P_ICLights_2014_brass_scene3.jpg | IC Lights 黄铜场景 3 | https://flos.com/en/us/ic-lights-suspension/M-ic-lights-suspension.html | 2000 级目检暗调空间点光 | 2026-10-21 | FLOS 官方 lifeshot |
| P_StringLight_2014_cone_packshot.jpg | String Light Cone（Anastassiades 2014）锥形灯头白色白底 | https://flos.com/en/us/string-light-cone-head-12mt-cable-white/F6487009.html | 2000×2000 目检压铸铝锥头与同轴电缆 | 2026-10-21 | FLOS 官方产品图 |
| P_StringLight_2014_scene.jpg | String Light 细钢丝悬挂几何场景（cone/sphere 头） | https://professional.flos.com/en/global/family/string-light/ | 2000×733 目检两根细吊线划过素色墙面 | 2026-10-22 | FLOS 官方 family lifeshot（imgix） |
| P_CaptainFlint_2015_floor_packshot.jpg | Captain Flint 室内落地灯（Anastassiades 2015）炭灰杆 + 大理石圆柱底座白底 | https://flos.com/en/us/captain-flint/M-captain-flint.html | 2000×2000 目检旋压锥头 + 大理石底座 | 2026-10-21 | FLOS 官方产品图 |
| P_CaptainFlint_2015_lit_scene.jpg | Captain Flint 暖光阅读场景 | https://flos.com/en/us/captain-flint/M-captain-flint.html | 2000×1500 目检落地灯暖光场景 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Noctambule_2019_cylinder_packshot.jpg | Noctambule（Konstantin Grcic 2019）透明玻璃圆柱模块白底 | https://flos.com/en/us/noctambule-suspension/M-noctambule-suspension.html | 2000×2000 目检互锁透明圆柱 + 节点环 | 2026-10-21 | FLOS 官方产品图 |
| P_Noctambule_2019_suspension_scene.jpg | Noctambule 高柱悬挂组合场景 | https://flos.com/en/us/noctambule-suspension/M-noctambule-suspension.html | 2000×1500 目检多模块光柱 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Noctambule_2019_scene2.jpg | Noctambule 夜晚节点 LED 环点亮场景 | https://flos.com/en/us/noctambule-suspension/M-noctambule-suspension.html | 2000 级目检玻璃柱近乎隐形、节点发光 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Wireline_2019_pink_packshot.jpg | Wireline（Formafantasma 2019）粉色扁平橡胶电缆悬吊玻璃管吊灯白底 | https://flos.com/en/us/wireline/M-wireline.html | 2000×2000 目检透明玻璃圆管 + 粉色扁平电缆 | 2026-10-21 | FLOS 官方产品图 |
| P_Wireline_2019_lit_scene.jpg | Wireline 粉色发光线性场景 | https://flos.com/en/us/wireline/M-wireline.html | 2000×1500 目检玻璃管暖光、电缆入顶 | 2026-10-21 | FLOS 官方 lifeshot |
| P_Superwire_2025_S3_packshot.jpg | SuperWire S3（Formafantasma 2025）模块化系统钢色白底 | https://flos.com/en/us/superwire-s3-steel/D301S31C3UAF2.html | 2000×2000 目检线性模块与接头 | 2026-10-21 | FLOS 官方产品图 |
| P_Superwire_2025_scene.jpg | SuperWire S3 空间场景 | https://flos.com/en/us/superwire-s3-steel/D301S31C3UAF2.html | 2000×1500 目检线性灯组横跨空间 | 2026-10-21 | FLOS 官方 lifeshot |
| P_InfraStructure_2020_system.jpg | Infra-Structure（Vincent Van Duysen 2020）办公空间黑色管状磁吸轨道全景 | https://professional.flos.com/en/global/stories/stories-infra-structure/ | 2000×1221 目检黑色管状轨道网络，未与 The Running Magnet 混图 | 2026-10-22 | FLOS 官方 story（imgix） |
| P_InfraStructure_2020_modules.jpg | Infra-Structure 磁吸灯头模块标注图（Multi Spot Mini / Light Tube / Spot / Suspension 等） | https://professional.flos.com/en/global/stories/stories-infra-structure/ | 2000×1152 目检模块组件标注示意 | 2026-10-22 | FLOS 官方 story |
| P_InfraStructure_2020_scene.jpg | Infra-Structure 住宅安装场景（黑色轨道 + 板条天花） | https://professional.flos.com/en/global/stories/stories-infra-structure/ | 2000×1435 目检落地窗住宅内轨道系统 | 2026-10-22 | FLOS 官方 story |
| P_Camouflage_2016_outdoor_packshot.jpg | Camouflage 140 户外壁灯（Piero Lissoni 2016，石材面板）白底 | https://flos.com/en/us/camouflage-140/B-camouflage-140-crema-3000k-us.html | 2000×2000 目检圆形石材壁灯 | 2026-10-22 | FLOS 官方产品图 |
| P_Camouflage_2016_outdoor_scene.jpg | Camouflage 关灯与石材墙面融为一体的户外场景 | https://flos.com/en/us/camouflage-140/B-camouflage-140-crema-3000k-us.html | 2000×1600 目检外墙圆形洗光壁灯 | 2026-10-22 | FLOS 官方 lifeshot |

## 未取到/舍弃说明

- **创始人肖像缺口**：Dino Gavina、Cesare Cassina 两位 1962 联合创始人及 Piero Gandini（1996 起 Chairman）未在 FLOS 官方渠道找到可确认身份的肖像；为避免张冠李戴，未用无授权人物图顶替，仅取到可确认的 Sergio Gandini。
- Taccia bronze 阳极版、Arco K（2020 水晶底座限量版）无专图；Parentesi 标准黑/灰版仅取得黑色场景图，packshot 用红色 50 周年版；Murano 玻璃窑吹制现场、Carrara 采石/切割车间纪实照官方未发布，以产品级材料特写（F_Murano_glass、Arco 底座特写）代替。
- `_unused/` 存 17 张：Toio 灯杆、Parentesi 红色灯头管、Snoopy 反射器、Taccia 反射器等备件特写，Arco LED 与 Taraxacum 88 的重复 hero 图，多余 Arco 场景图，以及与 Arco packshot 重复的 F_marble_Carrara.jpg。
