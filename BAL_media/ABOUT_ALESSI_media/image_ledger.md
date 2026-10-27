# Alessi 品牌档案图片台账

- 品牌：Alessi（意大利，1921 年 Fratelli Alessi Omegna 创立于皮埃蒙特 Omegna/Crusinallo）
- 检索/下载日期：2026-10-26（UTC+8）
- 媒体目录：`D:\Documents\ChatGPT\Projects\品牌资产库\BAL_media\ABOUT_ALESSI_media\`
- 验证方式：Python PIL 逐张打开校验（格式/宽高/字节数），全部 >10KB 且可正常解码；打不开/小于阈值/疑似备件的移入 `_unused\`
- 命名规范：Logo_Alessi.* 直接放根目录；历史图 `H_<年份>_<主题>.jpg`；工厂图 `F_<主题>.jpg`；空间图 `S_<主题>.jpg`；产品图 `P_<型号>_<年份>_<场景>.jpg`
- 取图通道总结：alessi.com 为 Shopify 架构，主站 HTTP 直连受 429 限流，实际经"真实浏览器加载建立会话 → 页面内同步 XHR 取各产品 `.js` JSON → 从 cdn.shopify.com 官方 CDN 下载原图"完成；MoMA 实时站受 Cloudflare Turnstile 拦截，Juicy Salif 馆藏照经 Wayback Machine 存档取得（原图路径 moma.org/media media-210117，页面对应 works/1825）
- 图源说明：全部 URL 真实可追溯（官方产品页/CDN、官方新闻稿、Paul Smith 官方产品页、MoMA 馆藏页）；无编造 URL；无法取得真实来源的图不采用

---

## 一、品牌标识（封面用，1 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL 结果） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_Alessi.svg | Alessi 现行红色大写字标（2024 Studio TEMP 微调字距版），官方 Shopify CDN 头部 logo-red.svg，fill #FE3B1F，viewBox 0 0 85 25，矢量可无限缩放，已按墨迹包围盒裁切（SVG path 紧贴字形，无多余留白） | https://alessi.com/ （头部 logo-img alt="Alessi"）；CDN: https://cdn.shopify.com/s/files/1/0337/3603/2392/t/396/assets/logo-red.svg | SVG 矢量，1850 bytes，path 紧贴字形（viewBox 0 0 85 25），无需位图裁切 | 2026-10-26 | Alessi S.p.A. 商标/版权所有；报告内仅作品牌识别引用 |

---

## 二、历史图（H_ 前缀，7 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL 结果） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| H_1921_FAO_founding_workshop.jpg | 1921 年 Fratelli Alessi Omegna (FAO) 创立时期工坊/企业照，对应官网历史页 "In 1921, Giovanni Alessi and his brother founded FAO" 段落配图 | https://alessi.com/pages/history （storia_azienda_05_bis.jpg） | JPEG 1440x1584，510,008 bytes，PIL 打开 OK | 2026-10-26 | Alessi S.p.A. 官方历史档案图 |
| H_1920s_early_nickel_silver_products.jpg | 早期镍银/黄铜制品静物（调料组/portacondimenti），对应官网历史页首屏配图 | https://alessi.com/pages/history （storia_portacondimenti.jpg） | JPEG 1440x1584，245,699 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方产品档案图 |
| H_1932_Carlo_Alessi_portrait.jpg | Carlo Alessi（Giovanni 长子）1932 年入司，1930s 中期至 1945 年主力设计师；官方历史页 "In 1932, Carlo Alessi...joined the family firm" 段落配图 | https://alessi.com/pages/history （storia_Carlo_Alessi_UTA_2.jpg） | JPEG 1440x1584，159,133 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方人物/历史档案 |
| H_1945_wire_basket_Ceselleria.jpg | 战后铁丝篮/钢丝篮产品（Ceselleria Alessi 时代），对应官网历史页二战后段落 | https://alessi.com/pages/history （storia_Cestino-filo.jpg） | JPEG 1440x1584，288,043 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方产品档案 |
| H_1950s_ALFRA_stainless_workshop.jpg | 1950 年代转向不锈钢、更名 ALFRA 时期老车间/工厂照片，对应官网历史页 "The company gradually abandoned the use of soft metals in the '50s" | https://alessi.com/pages/history （storia_foto_vecchia.jpg） | JPEG 1440x1584，386,492 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方工厂档案 |
| H_1960s_Ceselleria_alessi_advert.jpg | 1960 年代 Ceselleria Alessi 家用线产品广告/目录图，对应官网历史页 "In the 1960s...Ceselleria Alessi range" | https://alessi.com/pages/history （storia_870adv.jpg） | JPEG 1440x1584，608,675 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方广告档案 |
| H_2019_Oakley_investment_factory_silhouette.jpg | 2019-08-28 Oakley Capital 增资入股新闻稿页头图（Crusinallo 工厂双塔剪影），对应官方新闻稿 "Reorganisation and Development Plan" | https://alessi.com/blogs/news/reorganisation-and-development-plan （articles/2880x1306.jpg） | JPEG 2880x1306，342,648 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方新闻稿配图 |

---

## 三、工厂工艺图（F_ 前缀，1 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL 结果） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| F_Crusinallo_factory_lifestyle_hero.jpg | Alessi 官网 About Us 页首屏图（The Dream Factory 叙事配图，Crusinallo 工厂/生活方式场景），对应官网 "Since 1921, The Dream Factory" | https://alessi.com/pages/about-us （files/29_ALESSI_3560_4-5_72_dpi.jpg） | JPEG 1080x1350，145,159 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方品牌形象图 |

---

## 四、空间/体验图（S_ 前缀，9 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL 结果） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| S_Museo_Alessi_hero_exterior.jpg | Museo Alessi 官网页头图（1998 开馆，Alessandro Mendini 设计，藏 25,000+ 件） | https://alessi.com/pages/museo （1440x576_Blocco_Hero_museo_Desktop.jpg） | JPEG 1440x576，167,287 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方博物馆图 |
| S_Milan_Tokyo_concept_store_hero.jpg | 深泽直人设计的全新概念店 hero 图（米兰 Via Manzoni + 东京南青山同步开业，2025/2026） | https://alessi.com/blogs/news/the-new-alessi-concept-store （hero-store-1.png） | PNG 1440x810，387,801 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店新闻图 |
| S_Fukasawa_concept_store_interior.jpg | 概念店内景（木长桌/产品陈列），深泽直人设计 | 同上（CG2-concep-store.jpg） | JPEG 720x960，94,465 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店图 |
| S_concept_store_interior_display.jpg | 概念店内部产品陈列区 | 同上（store-1.jpg） | JPEG 720x960，124,927 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店图 |
| S_Tokyo_Aoyama_store_night.jpg | 东京南青山概念店外观/夜景（玻璃幕墙两层建筑） | 同上（hero-store-2.png） | PNG 1440x810，344,483 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店图 |
| S_concept_store_cafe_bar.jpg | 概念店内 Caffè Vergnano 体验咖啡吧 | 同上（CG2-concept-store-3.jpg） | JPEG 720x960，170,308 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店图 |
| S_concept_store_display_shelves.jpg | 概念店货架/墙面陈列细节 | 同上（CG3-CS.jpg） | JPEG 720x960，125,498 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店图 |
| S_concept_store_product_display.jpg | 概念店产品陈列台细节 | 同上（CG3-CS-2.jpg） | JPEG 720x960，113,613 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店图 |
| S_concept_store_interior_detail.jpg | 概念店内景细节 | 同上（CG3-CS-3.jpg） | JPEG 720x960，169,785 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方门店图 |

---

## 五、经典产品图（07 Product 章节 · 经典产品故事用，35 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_9090_1978_base_detail.jpg | 9090 加宽感应复底十字结构特写 | https://alessi.com/products/9090-espresso-coffee-maker | PIL 解码通过；1648×2062px；249KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9090_1978_lid_detail.jpg | 9090 壶盖三角提钮特写 | https://alessi.com/products/9090-espresso-coffee-maker | PIL 解码通过；624×788px；26KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9090_1978_lifestyle.jpg | 9090 使用场景（双手开合杠杆锁扣） | https://alessi.com/products/9090-espresso-coffee-maker | PIL 解码通过；1648×2062px；277KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9090_1978_main.jpg | 9090 摩卡壶主图；镜面18/10钢+棕色钢制柄，Richard Sapper 1978/1979，金圆规1979 | https://alessi.com/products/9090-espresso-coffee-maker | PIL 解码通过；1648×2062px；62KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9091_1983_lifestyle.jpg | 9091 倒水使用场景 | https://alessi.com/products/9091-kettle | PIL 解码通过；1648×2062px；432KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9091_1983_main.jpg | 9091 鸣笛水壶主图；不锈钢+黄铜双音哨嘴，Sapper 1983/1984 | https://alessi.com/products/9091-kettle | PIL 解码通过；1648×2062px；96KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9091_1983_whistle_detail.jpg | 9091 黄铜 mi/si 双音鸣笛哨嘴特写 | https://alessi.com/products/9091-kettle | PIL 解码通过；624×788px；59KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9093BB_2025_40th_black_main.jpg | 9093 BB 40周年(2025)全黑哑光版主图，橙鸟哨 | https://alessi.com/fr/products/9093-bb-kettle | PIL 解码通过；1648×2062px；55KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9093BB_2025_blackbird_detail.jpg | 9093 BB 黑壶身鸟哨特写 | https://alessi.com/fr/products/9093-bb-kettle | PIL 解码通过；1648×2062px；81KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9093_1985_bird_detail.jpg | 9093 红色鸟形鸣笛哨嘴特写 | https://alessi.com/products/9093-kettle | PIL 解码通过；1648×2062px；141KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9093_1985_lifestyle.jpg | 9093 端起倒水使用场景 | https://alessi.com/products/9093-kettle | PIL 解码通过；1648×2062px；308KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_9093_1985_main.jpg | 9093 鸟鸣水壶主图；浅蓝手柄+红鸟哨，Michael Graves 1985 | https://alessi.com/products/9093-kettle | PIL 解码通过；1648×2062px；92KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_AnnaG_1994_face_detail.jpg | Anna G. 笑脸头部/双臂杠杆特写 | https://alessi.com/products/anna-g-corkscrew | PIL 解码通过；1648×2062px；123KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_AnnaG_1994_lifestyle.jpg | Anna G. 餐桌开红酒场景 | https://alessi.com/products/anna-g-corkscrew | PIL 解码通过；1648×2062px；211KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_AnnaG_1994_main.jpg | Anna G. 镀铬人形开瓶器主图 AM01 Z，Mendini 1994 | https://alessi.com/products/anna-g-corkscrew | PIL 解码通过；1648×2062px；65KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_Bombe_1945_miljug_detail.jpg | Bombé 奶盅 CA13 壶嘴/壶身特写，展示旋床抛光钢面 | https://www.alessi.it/it/products/bombe-milk-jug-1 | PIL 解码通过；1648×2062px；84KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_Bombe_1945_sugarbowl_main.jpg | Bombé 糖罐 CA14 主图，球形鼓腹+胶木柄 | https://alessi.com/products/bombe-sugar-bowl | PIL 解码通过；1648×2062px；54KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_Bombe_1945_teapot_main.jpg | Bombé 茶壶主图；抛光18/10钢球形鼓腹+胶木黑柄，Carlo Alessi 1945 | https://alessi.com/products/bombe-teapot | PIL 解码通过；1648×2062px；68KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_Bombe_1945_teaset_lifestyle.jpg | Bombé 茶咖具桌面场景（茶壶+糖罐），同系列成套感 | https://alessi.com/products/bombe-teapot | PIL 解码通过；1648×2062px；523KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_Cintura_1986_lifestyle.jpg | La Cintura di Orione 灶台炖煮场景，展示锅具用途 | https://ch.alessi.com/products/la-cintura-di-orione-stockpot | PIL 解码通过；1648×2062px；258KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_Cintura_1986_saucepan_main.jpg | La Cintura di Orione 长柄单柄锅主图，黑长柄+trilamina钢身 | https://www.alessi.it/it/products/la-cintura-di-orione-saucepan | PIL 解码通过；1648×2062px；31KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_Cintura_1986_stockpot_main.jpg | La Cintura di Orione 带盖深炖锅主图（锅具，非咖啡壶），Sapper/Marchesi | https://ch.alessi.com/products/la-cintura-di-orione-stockpot | PIL 解码通过；1648×2062px；54KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_JuicySalif_1988_bw_moma.jpg | MoMA 永久馆藏黑白档案摄影；Philippe Starck《Juicy Salif Lemon Squeezer》1988，object 48.2000.2（David Whitney Collection 捐赠），三脚铝镜面榨汁器正面照 | https://www.moma.org/collection/works/1825 | PIL 解码通过；797×1440px；96KB（>10KB 阈值）；经 Wayback Machine 存档取得（moma.org/media media-210117） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_JuicySalif_1990_lifestyle.jpg | Juicy Salif 挤汁使用场景（对柠檬） | https://alessi.com/products/juicy-salif-citrus-squeezer | PIL 解码通过；1648×2062px；286KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_JuicySalif_1990_main.jpg | Juicy Salif 镜面铸铝三脚榨汁器主图，Philippe Starck 1990 | https://alessi.com/products/juicy-salif-citrus-squeezer | PIL 解码通过；1648×2062px；54KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_LaConica_1984_cone_detail.jpg | La Conica 锥形上半部特写，展示纯几何 | https://alessi.com/products/la-conica-espresso-coffee-maker | PIL 解码通过；1648×2062px；108KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_LaConica_1984_lifestyle.jpg | La Conica 厨房台面使用场景 | https://alessi.com/products/la-conica-espresso-coffee-maker | PIL 解码通过；640×802px；86KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_LaConica_1984_main.jpg | La Conica 摩卡壶主图；球体+圆锥+紫铜复底，Aldo Rossi 1984 | https://alessi.com/products/la-conica-espresso-coffee-maker | PIL 解码通过；1648×2062px；56KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_LaConica_2021_manicolungo_main.jpg | La Conica Manico Lungo 长柄再版(2021)主图，浅蓝长柄+蓝球钮 | https://alessi.com/products/la-conica-manico-lungo-espresso-coffee-maker | PIL 解码通过；1648×2062px；54KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_MokaAlessi_branding_detail.jpg | Moka Alessi 壶身 A di ALESSI / MOKA ALESSI 字样特写 | https://alessi.com/products/moka-alessi-espresso-coffee-maker | PIL 解码通过；1648×2062px；181KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_MokaAlessi_main.jpg | Moka Alessi 入门摩卡壶主图，A di ALESSI 标 | https://alessi.com/products/moka-alessi-espresso-coffee-maker | PIL 解码通过；1648×2062px；71KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_NuovoMilano_1987_flatware_main.jpg | Nuovo Milano 餐具24件组主图，Ettore Sottsass 1987 | https://alessi.com/products/nuovo-milano-cutlery-set-24-pieces | PIL 解码通过；1648×2062px；57KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_NuovoMilano_1987_table.jpg | Nuovo Milano 餐桌摆台场景 | https://alessi.com/products/nuovo-milano-cutlery-set-24-pieces | PIL 解码通过；1648×2062px；182KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_TeaRex_2015_30th_main.jpg | Tea Rex 30周年(2015)龙形哨嘴版主图，玫瑰金龙哨 | https://us.alessi.com/products/tea-rex-kettle | PIL 解码通过；1648×2062px；93KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |
| P_TeaRex_2015_dragon_detail.jpg | Tea Rex 玫瑰金恐龙哨嘴特写 | https://us.alessi.com/products/tea-rex-kettle | PIL 解码通过；1648×2062px；163KB（>10KB 阈值） | 2026-10-26 | Alessi 官方产品图 ©Alessi；MoMA 馆藏照 ©MoMA（内部品牌档案研究用） |

### 经典产品每产品张数统计

| 产品 | 张数 | 文件 |
|---|---|---|
| Bombé 系列 (Carlo Alessi 1945) | 4 | P_Bombe_1945_teapot_main.jpg、P_Bombe_1945_teaset_lifestyle.jpg、P_Bombe_1945_sugarbowl_main.jpg、P_Bombe_1945_miljug_detail.jpg |
| 9090 摩卡壶 (Richard Sapper 1978) | 4 | P_9090_1978_main.jpg、P_9090_1978_lifestyle.jpg、P_9090_1978_base_detail.jpg、P_9090_1978_lid_detail.jpg |
| 9091 鸣笛水壶 (Sapper 1983) | 3 | P_9091_1983_main.jpg、P_9091_1983_whistle_detail.jpg、P_9091_1983_lifestyle.jpg |
| La Conica 摩卡壶 (Aldo Rossi 1984/2021) | 4 | P_LaConica_1984_main.jpg、P_LaConica_1984_cone_detail.jpg、P_LaConica_1984_lifestyle.jpg、P_LaConica_2021_manicolungo_main.jpg |
| 9093 鸟鸣水壶家族 (Graves 1985/2015/2025) | 7 | P_9093_1985_main.jpg、P_9093_1985_bird_detail.jpg、P_9093_1985_lifestyle.jpg、P_TeaRex_2015_30th_main.jpg、P_TeaRex_2015_dragon_detail.jpg、P_9093BB_2025_40th_black_main.jpg、P_9093BB_2025_blackbird_detail.jpg |
| La Cintura di Orione 锅具 (Sapper/Marchesi 1986) | 3 | P_Cintura_1986_stockpot_main.jpg、P_Cintura_1986_saucepan_main.jpg、P_Cintura_1986_lifestyle.jpg |
| Juicy Salif 榨汁器 (Starck 1990) | 3 | P_JuicySalif_1990_main.jpg、P_JuicySalif_1990_lifestyle.jpg、P_JuicySalif_1988_bw_moma.jpg |
| Anna G. 开瓶器 (Mendini 1994) | 3 | P_AnnaG_1994_main.jpg、P_AnnaG_1994_face_detail.jpg、P_AnnaG_1994_lifestyle.jpg |
| Nuovo Milano 餐具 (Sottsass 1987) | 2 | P_NuovoMilano_1987_flatware_main.jpg、P_NuovoMilano_1987_table.jpg |
| Moka Alessi 摩卡壶 | 2 | P_MokaAlessi_main.jpg、P_MokaAlessi_branding_detail.jpg |

---

## 六、当代产品图（P_ 前缀 · 当代产品/系列/联名/2020s 用，10 张）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法（实测尺寸/大小/PIL 结果） | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Mami_1999_stockpot_Giovannoni.jpg | Mami 汤锅（Stefano Giovannoni, 1999 投产），18/10 镜面不锈钢，圆润饱满圆弧把手 | https://alessi.com/products/mami-stockpot （20-01_SG100.jpg） | JPEG 1648x2062，64,088 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方产品图 |
| P_PotsAndPans_2006_set_Morrison.jpg | Pots&Pans 9 件套（Jasper Morrison, 2006 投产），极简直筒、外翻唇边、全钢把手 | https://alessi.com/products/pots-pans-pots-and-pans-set-9-pieces （01-1_AJM100S9.jpg） | JPEG 1648x2062，115,264 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方产品图 |
| P_Edo_2018_stockpot_Urquiola.jpg | Edo 汤锅（Patricia Urquiola, 2018 投产），镜面锅身 + 古铜棕 PVD 薄片把手 | https://alessi.com/products/edo-stockpot （01_PU100.jpg） | JPEG 1648x2062，64,325 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方产品图 |
| P_Convivio_2023_cookware_Chipperfield.jpg | Convivio 锅具套装（David Chipperfield, 2023 投产），哑光不锈钢 + PVD 深色把手 | https://alessi.com/products/convivio-cookware-set （01_DC100S7.jpg） | JPEG 1648x2062，49,742 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方产品图 |
| P_VirgilAbloh_2023_ConversationalObjects_cutlery.jpg | Virgil Abloh × Alessi "Conversational Objects" 餐具套装（2023 米兰设计周发布），18/10 哑光不锈钢刀叉勺四件组 | https://us.alessi.com/products/conversational-objects-cutlery-set （VA02-S4-01.jpg） | JPEG 1648x2062，80,464 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方联名产品图 |
| P_Plisse_2025_kettle_DeLucchi.jpg | Plissé 温控电水壶（Michele De Lucchi, 2025 投产），竖向褶皱纹理外壳 | https://alessi.com/products/plisse-electric-kettle-european-plug-2 （MDL06-DAZ-01） | JPEG 1648x2062，84,649 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方产品图 |
| P_PaulSmith_2024_9093_kettle_stripe.jpg | Alessi × Paul Smith 9093 水壶（Michael Graves 1985 原型 + Paul Smith 多色条纹壶身），Limited Edition | https://www.paulsmith.com/hk/alessi-x-paul-smith-9093-stainless-steel-kettle | JPEG 1228x1719，60,938 bytes，PIL OK | 2026-10-26 | Paul Smith / Alessi 联名官方产品图 |
| P_PaulSmith_2024_AlessandroM_corkscrew_stripe.jpg | Alessi × Paul Smith Alessandro M. 开瓶器（Mendini 人形开瓶器 + Signature Stripe 条纹），Limited Edition | https://www.paulsmith.com/uk/alessi-x-paul-smith-signature-stripe-alessandro-m-bottle-opener | JPEG 1228x1719，46,446 bytes，PIL OK | 2026-10-26 | Paul Smith / Alessi 联名官方产品图 |
| P_Alessi100-001_2022_exhibition_Manzoni.jpg | Alessi 100-001 展览（2022 米兰设计周，Galleria Manzoni），百年厂史微缩模型装置主视觉 | https://se.alessi.com/blogs/events/alessi-100-001-exhibition | JPEG 2880x1306，563,630 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方展览图 |
| P_Alessi100-001_2022_exhibition_installation.jpg | Alessi 100-001 展览装置现场（绿/红招牌，12 价值观叙事展陈） | 同上 | JPEG 1795x2322，405,083 bytes，PIL OK | 2026-10-26 | Alessi S.p.A. 官方展览图 |

---

## 七、渠道证据

（未取得独立的 Bestsellers 栏目全家福 / Limited Editions 栏目陈列 / 天猫旗舰店截图；集合页产品网格由 Shopify JS 动态渲染，直接 HTML 抓取仅返回 hero 图。相关缺口见下方"未取到/舍弃说明"。）

---

## 八、未取到 / 舍弃说明

| 序号 | 缺口条目 | 原因 | 备选方案 |
|---|---|---|---|
| 1 | MoMA 9090 咖啡壶馆藏照 | moma.org 实时站对自动化访问返回 Cloudflare Turnstile 人机验证；改走 Wayback Machine 时 Internet Archive 临时离线；研究笔记亦标注 9090 的 MoMA object 编号「待核实」 | archive.org 恢复后补 moma.org/collection 检索；或经 Art Resource/Scala 授权 |
| 2 | 9090 历史档案（爆炸图/1980 广告/Sapper 草图/工作照） | 官方图库对应内容为 .gif 动图（按规范未纳入静态正文图），静态档案未在产品 JSON 图墙出现 | 9090.gif 官方分解动图后续单独截取 |
| 3 | Tea & Coffee Piazza（1983）/ Tea & Coffee Towers（2000s）银茶具 | 站内搜索确认不在现行在售目录（历史研究项目/限量展览件），官方无现成产品图页 | 历史目录 PDF（casaentera.com 2015 总目录）或 PMA 展览档案 |
| 4 | Bombé 咖啡壶（bombe-coffee-pot）单页 | 欧盟站该 handle 404（英国站存在，跨站未取）；系列已用茶壶/糖罐/奶盅 4 张覆盖 | uk.alessi.com/products/bombe-coffee-pot |
| 5 | 9091「Bird calls」哨子研究木盒档案 / Sapper-Alberto Alessi 合影 | 官方图库为 .gif 动图或未在 product images 数组 | 以黄铜双音哨嘴静态特写替代 |
| 6 | Giovanni / Alberto Alessi 肖像 | 官网历史页配图为工坊/产品照，未标注本人肖像；新闻稿页头为工厂剪影 | Museo Alessi 预约访问；设计媒体（Domus/IFDM）档案 |
| 7 | Alessandro Mendini 1991 Centro Studi 手稿 | 官网历史页 1990s 段落配图未在本次抓取中出现（轮播/懒加载） | 都灵理工学位论文 PDF（webthesis.biblio.polito.it/39177/1/tesi.pdf）截图 |
| 8 | 1983 Tea & Coffee Piazza 展厅黑白照 | 官网历史页 1980s 段落配图未在本次抓取中出现 | alessi.com/pages/history 滚动加载；PMA 展览档案 |
| 9 | 冷压/深拉车间工人工序图 | 官网 commitment/about-us 页仅返回 hero 图，车间纪实图未在 HTML 中 | alessi.it/it/pages/commitment 浏览器滚动加载 |
| 10 | 18/10 抛光钢与缎面钢表面特写 | 官方钢材专题页重定向为 blog 且无图 | 从产品页 9093/La Conica 截取表面细节 |
| 11 | Officina Alessi / Circus / The Jester 开瓶器 | alessi.com/collections/officina-alessi 返回 404；Marcel Wanders 新闻稿 PDF 无法直接解析 | press.marcelwanders.com PDF 截图；us.alessi.com/collections/marcel-wanders |
| 12 | Il Tornitore Matto 器物组 / The Last Pot 骨灰瓮（2025） | 官方产品页/博客 HTML 未提取到图片 URL（JS 动态渲染） | alessi.com/it/pages/il-tornitore-matto；博客页浏览器滚动加载 |
| 13 | MoMA Design Store 内 Alessi 陈列 / Bestsellers 栏目全家福 / Limited Editions 栏目陈列 | store.moma.org 未访问；Shopify 集合页 JS 动态网格 | 浏览器截图 us.alessi.com/collections/bestsellers、alessi.com/collections/limited-editions |
| 14 | 天猫 ALESSI 旗舰店店铺页截图 | 需浏览器登录淘宝/天猫（反爬） | taobao.com 搜索 ALESSI 旗舰店截图 |
| 15 | 2021 百年展主视觉（12 个新项目） | 官网历史页 2020s 段落配图未在本次抓取中出现 | alessi.com/pages/history 滚动加载；salonemilano.it |

---

## 九、统计汇总

| 分类 | 数量 | 备注 |
|---|---|---|
| 品牌标识 Logo | 1 | Logo_Alessi.svg（矢量，官方 CDN） |
| 历史图 H_ | 7 | 1921 FAO → 2019 Oakley |
| 工厂工艺 F_ | 1 | Crusinallo 工厂 hero |
| 空间/体验 S_ | 9 | Museo + 深泽直人概念店（米兰/东京） |
| 经典产品 P_ | 35 | 07 章经典产品故事（10 个产品/系列，每个 2–7 张） |
| 当代产品 P_ | 10 | 厨房线/联名/2020s（另 P_Alessi100-001 展览 2 张计入） |
| 渠道证据 | 0 | 缺口见上表 |
| **合计** | **63** | 62 张位图 + 1 张 SVG，全部通过 PIL 验证（>10KB，可打开） |

- _unused 子目录：已创建；本批无图片因过小/损坏移入（63/63 全部 OK）。经典侧未选中的暂存候选（同产品重复角度/次要变体）留在下载暂存区，未计入正文图库。
