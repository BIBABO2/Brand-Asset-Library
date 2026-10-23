# VIPP 品牌图片台账（品牌标识 / 历史 / 工厂工艺 / 空间 / 当代产品）

- 品牌：VIPP（丹麦家族工业设计品牌，1939 年创立于 Randers，第三代 Egelund 家族全资持有）
- 检索日期：2026-10-23
- 本台账仅登记本子代理落盘的当代侧图片（文件名前缀 Logo_ / H_ / F_ / S_ / P_Shelter_ / P_LoungeChair_ / P_SwivelChair_ / P_FloorLamp_ / P_DeskLamp_ / P_WallSpot_ / P_SculptureLamp_ / P_PaperFloorLamp_ / P_CabinTable_ / P_Sofa_ / P_Cabinet_ / P_V2Kitchen_ / P_V3Kitchen_ / P_OpenAir_ / P_ColdHawaii_）；目录中另一子代理的经典产品图（P_Vipp12_/14_/15_/16_/17_/18_/7_/9_/521_/524_/526_/530_/BinFamily_/Family_ 等）不在本表登记范围。
- 取图通道：vipp.com 为 Umbraco CMS 站点，媒体 CDN 为 media.umbraco.io/vipp-com-2/；产品页与品牌史页 HTML 内嵌 CDN 图，通过 `?width=1920&format=jpg&quality=90` 参数获取高清版原图。
- Logo：从 vipp.com 首页导航栏提取内联 SVG（viewBox 0 0 52 18，黑色 V-I-P-P 字标），去除 CSS class 属性后保存为 Logo_VIPP.svg；用 Chrome headless 渲染为 Logo_VIPP_1600.png（1600×554，透明底黑字），未做位图插值放大。
- 校验方法：Add-Type System.Drawing，逐张 `[System.Drawing.Image]::FromFile()` 打开成功并记录宽高；全部文件 >10KB；图片来源均为 vipp.com 官方 CDN（media.umbraco.io），来源页面上下文与文件名/型号三级核对。

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_VIPP.svg | 官方矢量字标（V-I-P-P，黑色，viewBox 52×18） | https://vipp.com 首页导航栏内联 SVG | 从首页 HTML 提取，去除 CSS 属性，719 字节 | 2026-10-23 | VIPP 官方商标，仅作品牌识别 |
| Logo_VIPP_1600.png | 矢量 SVG 渲染 1600×554 透明底黑字 | 同上 SVG，本地 Chrome headless 渲染 | System.Drawing 打开 1600×554，24KB | 2026-10-23 | 同上 |
| H_Holger_Nielsen_portrait.jpg | 创始人 Holger Nielsen 肖像（官方文件名 vipp-founder-holger-nielsen-07） | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×1368，目视黑白肖像，与页面"1932 彩票起家"段配图一致 | 2026-10-23 | 官方 heritage 历史档案照 |
| H_Marie_hairdressing_salon_1939.jpg | Marie Nielsen 理发店外观（1939 年第一只桶的诞生地，官方文件名 vipp-marie-nielsens-hairdressingsaloon） | 同上品牌史页 | 1920×1331，目视复古理发店门面彩色照片，与页面"1939"段配图一致 | 2026-10-23 | 官方 heritage |
| H_Marie_Holger_Nielsen_courtyard.jpg | Marie 与 Holger Nielsen 在庭院门口（官方文件名 vipp-marie-holger-nielsen-01） | 同上品牌史页 | 1920×1620，目视两人站在门口的彩色旧照 | 2026-10-23 | 官方 heritage |
| H_Jette_Marie.jpg | 女儿 Jette Egelund 与母亲 Marie（官方文件名 vipp-jette-marie-01） | 同上品牌史页 | 1920×1358，目视两代女性合影 | 2026-10-23 | 官方 heritage |
| H_Jette_Egelund_portrait.jpg | 第二代掌门 Jette Egelund 肖像（官方文件名 vipp-portrait-jette-egelund-01） | 同上品牌史页 | 1920×2880，目视单人肖像竖构图 | 2026-10-23 | 官方 heritage |
| H_1992_Jette_takeover_factory.jpg | 1992 年 Jette 接手时的工厂场景（官方文件名 vipp-story-generation2-01） | 同上品牌史页 | 1920×1299，目视工厂/工作场景，与"1992"段配图一致 | 2026-10-23 | 官方 heritage |
| H_family_3rd_gen_Kasper_Sofie.jpg | 第三代家庭合影（官方文件名 vipp-portrait-family-03，对应 Kasper 与 Sofie） | 同上品牌史页 | 1920×1280，目视多人家庭合影 | 2026-10-23 | 官方 heritage |
| H_Sofie_Egelund_portrait.jpg | 品牌创意负责人 Sofie Christensen Egelund 肖像（官方文件名 sofie-vipp8070） | 同上品牌史页 | 1920×2508，目视单人肖像竖构图 | 2026-10-23 | 官方 heritage |
| F_Randers_factory_workshop.jpg | Randers 早期金属工厂车间（官方文件名 vipp-factory-randers-02） | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×1947，目视工厂车间内部 | 2026-10-23 | 官方 heritage 工厂档案 |
| F_bespoke_process_workshop.jpg | Vipp 定制工艺车间（官方文件名 vipp-bespoke-process-03） | 同上品牌史页 | 1920×2880，目视工作台/工艺场景 | 2026-10-23 | 官方工艺资料 |
| F_powdercoat_steel_detail.jpg | V3 厨房喷粉钢工艺细节特写（官方文件名 vipp-v3-kitchen-pencil-factory-detail-16） | 同上品牌史页 | 1920×2614，目视钢质表面细节 | 2026-10-23 | 官方产品工艺图 |
| S_Studio_NYC_showroom.jpg | Vipp Studio 纽约展厅（官方文件名 vipp-showroom-new-york-04） | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×2731，目视展厅内部陈列 | 2026-10-23 | 官方展厅档案 |
| S_3daysofdesign_Copenhagen.jpg | 哥本哈根 3daysofdesign 设计周活动现场（官方文件名 vipp-3daysofdesign-press-event-17） | 同上品牌史页 | 1920×2880，目视设计周活动人群 | 2026-10-23 | 官方活动档案 |
| S_Copenhagen_museum_exhibition.jpg | 哥本哈根博物馆 Vipp 展览（官方文件名 kbh-museum-89249） | 同上品牌史页 | 1920×2660，目视博物馆展览现场 | 2026-10-23 | 官方展览档案 |
| S_Palazzo_Monti_Residency.jpg | Vipp × Palazzo Monti 艺术家驻留项目（官方文件名 vipp-x-palazzo-monti_26main） | 同上品牌史页 | 1920×2880，目视意大利 Palazzo 建筑空间 | 2026-10-23 | 官方合作项目档案 |
| S_VippHome_flagship_storefront.jpg | Vipp Home 哥本哈根旗舰店外观（官方文件名 vipp-home-outside-02，Ny Østergade 34） | 同上品牌史页 | 1920×2879，目视店面外观 | 2026-10-23 | 官方旗舰店档案 |
| S_VippHome_office_space.jpg | Vipp Home 旗舰店内办公区场景（官方文件名 vipp-home-desk-02） | 同上品牌史页 | 1920×2560，目视店内书桌/办公空间 | 2026-10-23 | 官方旗舰店档案 |
| P_Shelter_2015_exterior_autumn.jpg | Vipp Shelter 秋季外观（黑钢 pod 架于桩基上，瑞典 Lake Immeln，官方文件名 vipp-shelter-fall-outside-05） | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×2880，目视黑色钢结构pod在秋季林景中；年份标注 2015（2014 建成，2015 公开发售，经 Dezeen/WSJ 交叉核实） | 2026-10-23 | 官方产品/建筑图 |
| P_Shelter_2015_exterior_lake.jpg | Vipp Shelter 临湖外观（官方文件名 vipp-shelter-fall-outside-01） | 同上品牌史页 | 1920×1280，目视pod临湖面全景 | 2026-10-23 | 官方产品/建筑图 |
| P_Shelter_2015_exterior_detail.jpg | Vipp Shelter 外观细节（官方文件名 vipp-shelter-fall-outside-09） | https://vipp.com/en/world-of-vipp/our-guesthouses/vipp-shelter | 1920×2880，目视钢结构与玻璃立面细节 | 2026-10-23 | 官方 guesthouse 档案 |
| P_Shelter_2015_interior_lakeview.jpg | Vipp Shelter 内部客厅/湖景面（官方文件名 vipp-shelter-lakeview-04） | https://vipp.com/en/world-of-vipp/our-guesthouses/vipp-shelter | 1920×2880，目视内部落地窗湖景 | 2026-10-23 | 官方 guesthouse 档案 |
| P_Shelter_2015_interior_fireplace.jpg | Vipp Shelter 内部壁炉区（官方文件名 vipp-shelter-fireplace-01） | 同上 guesthouse 页 | 1920×2821，目视内部壁炉与起居空间 | 2026-10-23 | 官方 guesthouse 档案 |
| P_Shelter_2015_interior_kitchen.jpg | Vipp Shelter 内部厨房区（Rasmus Hjortshøj 摄影，官方文件名 r_hjortshoj-vipp-shelter-18） | 同上 guesthouse 页 | 1920×1440，目视内部厨房岛与 Vipp 产品 | 2026-10-23 | 官方 guesthouse 档案 |
| P_LoungeChair_456_black_packshot.jpg | Vipp Lounge Chair 456（2019，Morten Bo Jensen 设计，粉末喷涂铝框架+黑色真皮）官方产品图 | https://vipp.com/en/categories/seating | 1920×2560，目视黑色铝框皮面休闲椅；型号 456 经官方 seating 分类页核对 | 2026-10-23 | 官方产品图 |
| P_SwivelChair_452_camel.jpg | Vipp Swivel Chair 452（2021，雕塑感铝壳旋转椅，camel 色织物）官方产品图 | https://vipp.com/en/categories/seating | 1920×2837，目视驼色旋转椅；型号 452 经官方页核对 | 2026-10-23 | 官方产品图 |
| P_SwivelChair_452_curly_edition.jpg | Vipp Swivel Chair 452 Curly Edition（绵羊皮特别版）官方产品图 | https://vipp.com/en/products/swivel-chair-453 | 1920×1920，目视卷曲羊毛材质旋转椅 | 2026-10-23 | 官方产品图 |
| P_FloorLamp_525_packshot.jpg | Vipp Floor Reading Lamp 525（穿孔金属灯罩+可调臂落地灯）官方产品图 | https://vipp.com/en/categories/lighting | 1920×2559，目视黑色落地阅读灯；型号 525 经官方 lighting 分类页核对 | 2026-10-23 | 官方产品图 |
| P_DeskLamp_521_lifestyle.jpg | Vipp Desk Lamp 521（穿孔灯罩工作台灯）生活场景图 | https://vipp.com/en/categories/lighting | 1920×2559，目视台灯在桌面场景中；型号 521 经官方页核对 | 2026-10-23 | 官方产品 lifeshot |
| P_WallSpot_524_warmgrey.jpg | Vipp Wall Spot 524 墙射灯（暖灰色）官方产品图 | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×2483，目视壁射灯墙面安装；型号 524 经官方页核对 | 2026-10-23 | 官方产品图 |
| P_SculptureLamp_592_marble.jpg | Vipp Sculpture Table Lamp 592（吹制乳白玻璃+深色大理石底座）官方产品图 | https://vipp.com/en/products/sculpture-table-lamp | 1920×2559，目视玻璃雕塑桌灯悬停于大理石底座上；型号 592 经官方页核对 | 2026-10-23 | 官方产品图 |
| P_PaperFloorLamp_581_oak.jpg | Vipp Paper Floor Lamp 581（深色橡木底座纸灯笼落地灯）官方产品图 | https://vipp.com/en/categories/lighting | 1920×2560，目视纸罩橡木落地灯；型号 581 经官方 lighting 分类页核对 | 2026-10-23 | 官方产品图 |
| P_CabinTable_495_marble_oak.jpg | Vipp Cabin Round Table 495（Ø150，灰色大理石台面+深色橡木底座，2020 实木系列）官方产品图 | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×2559，目视大理石圆桌橡木底座；型号 495 经官方 Cabin 系列页核对 | 2026-10-23 | 官方产品图 |
| P_Sofa_632_chimneybrook.jpg | Vipp Sofa 632（Chimney Brook 系列，米色+栗色织物）官方产品图 | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×2606，目视双人沙发；型号 632 经官方产品页核对 | 2026-10-23 | 官方产品图 |
| P_Cabinet_675_lightoak.jpg | Vipp Cabinet System 675（浅橡木柜体系统）官方产品图 | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×1340，目视橡木陈列柜；型号 675 经官方产品页核对 | 2026-10-23 | 官方产品图 |
| P_V2Kitchen_lightoak.jpg | Vipp V2 Kitchen（浅橡木门板模块化厨房）官方产品图 | https://vipp.com/en/categories/lighting | 1920×2689，目视浅橡木厨房整体 | 2026-10-23 | 官方产品图 |
| P_V3Kitchen_coldhawaii.jpg | Vipp V3 Kitchen（Cold Hawaii 冷调厨房）官方产品图 | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×2683，目视 V3 厨房冷调场景 | 2026-10-23 | 官方产品图 |
| P_OpenAir_721_lagrasse_outdoor.jpg | Vipp Open-Air Lagrasse 户外组合（721 双人椅+712 椅+714 茶几，2024 户外系列）官方产品图 | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×1460，目视户外柚木+仿藤组合；型号 721/712/714 经官方 Open-Air 宣传册核对 | 2026-10-23 | 官方产品图 |
| P_OpenAirKitchen_741.jpg | Vipp Open-Air Kitchen 741/742（户外厨房单元）官方产品图 | https://vipp.com/en/world-of-vipp/our-story/heritage/from-marie-to-moma-and-beyond | 1920×1334，目视户外厨房台；型号 741/742 经官方页核对 | 2026-10-23 | 官方产品图 |
| P_ColdHawaii_livingroom.jpg | Vipp Cold Hawaii guesthouse 客厅场景（展示 Vipp 家具/灯具整屋搭配） | https://vipp.com/en/products/sculpture-table-lamp | 1920×2968，目视冷调客厅场景中 Vipp 产品组合 | 2026-10-23 | 官方生活方式图 |
| P_ColdHawaii_bedroom.jpg | Vipp Cold Hawaii guesthouse 卧室场景 | https://vipp.com/en/categories/lighting | 1920×1280，目视卧室场景中 Vipp 灯具/家具 | 2026-10-23 | 官方生活方式图 |

## 未取到/缺口说明

1. **Vipp451 首椅（2019）独立产品图**：vipp.com/en/products/chair 页面在本次多次请求中连接被重置（反爬/限流），未取到 451 椅的独立 packshot；现以同 seating 分类页的 Lounge Chair 456 与 Swivel Chair 452 替代，451 首椅的独立官方图待后续浏览器自动化补齐。
2. **Vipp Cabin 木屋（2020）官方建筑图**：研究笔记旁证其存在（黑色松木板外墙预制小屋），但本次未在官网定位到独立产品页或高分辨率建筑照；现 Shelter 6 张已充分覆盖微型建筑叙事，Cabin 木屋图列为缺口。
3. **灯具家族确切推出年份**：521–530 系列的首发年份官网未标注，推测约 2017–2018，台账中仅标型号不标年份。
4. **Shelter XL / Villa 2019**：经研究笔记证伪，不存在此型号，未取图。
5. **Logo 留白裁剪**：矢量 SVG 直接渲染，viewBox 内墨迹占比已接近 100%（V-I-P-P 字标填满 52×18 画布），无需额外裁剪；PNG 1600×554 为矢量原生比例渲染，非插值放大。