# Luceplan 品牌图片台账（B 侧：当代产品 P_ / 工厂与材料 F_ / 空间与展览 S_）

- 品牌：Luceplan（意大利设计师照明品牌，1978 年创立于米兰；2019 年 11 月起归属 Calligaris Group / Orbital Design Collective）
- 检索日期：2026-10-22
- 台账范围：本台账仅登记 B 侧取图子代理负责的当代产品（P_）、工厂/材料/光学特写（F_）、空间/展厅/展览（S_），共 42 个文件。品牌字标（Logo_）、历史人物（H_）与经典产品（Berenice/Costanza 等）由 A 侧取图子代理登记在 `image_ledger.md`，本台账不重复。
- 取图通道（按指南 12.4 顺序，本次主通道即官方站，未触发兜底）：
  - luceplan.com 为 WordPress 站，产品图位于 `/wp-content/uploads/`；优先取产品页 `og:image` 与页面内嵌原图，下载时剥离 WordPress 自动尺寸后缀（如 `-1536x2048`、`-1024x683`、`-768x1024`）取无后缀原图；无原图时回退到页面列出的最大尺寸版本（≥1080p）。
  - 全部图片来自官方产品页 / 官方 story 页 / 官方 about 页，URL 均可追溯，未使用无法核对型号的第三方图。
- 验证方法：
  - 逐张用 Python PIL `Image.open()` 打开成功并记录宽高；全部文件 >10KB（最小 34KB，最大 864×1536 级原图）。
  - 42 张候选图用 PIL 合成带文件名标签的总览拼图（`_unused/_montage_B*.jpg`），上下两半逐张目检：严格区分 Ascent（细黑杆+钟形灯罩桌灯）与 Counterbalance（长悬臂壁灯/落地灯）、Mesh 原版钢索网穹顶与 Mesh Wireless 智能版、Blow 透明 PMMA 扇叶、Koinè 扁平圆碟与 Mesh 3D 网、Zile 藏铃形 PLA 灯罩。目检结论与官方页面文件名字段（D78/D73/D86/D81/A06/A07/A09/B02/D28 等 SKU）三级一致。
  - webp 原图统一转码为 JPEG quality 88 落盘，命名遵循 `P_<型号><年份>_<视角>.jpg`，型号 token 无空格连写（Ascent/Counterbalance/Mesh/MeshWireless/Compendium/CompendiumCircle/Levante/Koine/Jus/Zile/Blow/Flia/Doi），供校验脚本按型号匹配。

## 一、当代产品（P_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Ascent_2013_packshot.jpg | Ascent（Rybakken 2013，D78）白底整机：黑色阳极氧化细杆 + 钟形反射灯罩 + 方形底座，og:image 主图 | https://www.luceplan.com/us/products/ascent/ | PIL 626×860；目检细杆钟形桌灯，与 D78 文件名一致，非 Counterbalance | 2026-10-22 | Luceplan 官方产品图 |
| P_Ascent_2013_detail_sliding.jpg | Ascent 灯罩沿灯杆上下滑动调光的交互瞬间（motion 系列） | https://www.luceplan.com/us/products/ascent/ | PIL 1920×1280；目检灯罩位于杆下端的点亮姿态 | 2026-10-22 | Luceplan 官方产品图 |
| P_Ascent_2013_scene_project.jpg | Ascent 项目实景：Bergen Academy 书架阅读空间 | https://www.luceplan.com/us/products/ascent/ | PIL 1920×1281；目检书房书架场景，官方 Get inspired 项目图 | 2026-10-22 | Luceplan 官方项目图 |
| P_Counterbalance_2014_wall_packshot.jpg | Counterbalance Wall（Rybakken 2014，D73）整机：长钢悬臂从墙面伸出、LED 灯头、配重平衡 | https://www.luceplan.com/us/products/counterbalance-wall/ | PIL 1080×1440；目检墙装长臂，与 Ascent 桌灯明确区分 | 2026-10-22 | Luceplan 官方产品图 |
| P_Counterbalance_2014_floor_packshot.jpg | Counterbalance Floor（D73t）落地版整机：锥形配重底座 + 长臂灯头 | https://www.luceplan.com/us/products/counterbalance-floor/ | PIL 626×860；目检两台落地长臂灯 | 2026-10-22 | Luceplan 官方产品图 |
| P_Counterbalance_2014_head_detail.jpg | Counterbalance 压铸铝灯头与悬臂连接特写 | https://www.luceplan.com/us/products/counterbalance-wall/ | PIL 1440×1920；目检灯头悬臂节点 | 2026-10-22 | Luceplan 官方产品图 |
| P_Mesh_2015_packshot.jpg | Mesh（Gomez Paz 2015，D86）原版整机：黑色柔性钢索网穹顶、节点 LED 矩阵 | https://www.luceplan.com/us/products/mesh-suspension/ | PIL 1438×1920；目检水滴形钢索网，非扁平 Koinè | 2026-10-22 | Luceplan 官方产品图 |
| P_Mesh_2015_node_detail.jpg | Mesh 钢索交叉节点上的微小 LED 点光源阵列特写 | https://www.luceplan.com/us/products/mesh-suspension/ | PIL 1920×1819；目检网面节点灯点 | 2026-10-22 | Luceplan 官方产品图 |
| P_Mesh_2015_scene_hall.jpg | Mesh 挑高酒店大堂/客厅安装实景（Mesh_sospensione_Hall） | https://www.luceplan.com/us/products/mesh-wireless/ | PIL 850×1203；目检穹顶网灯置于客厅空间 | 2026-10-22 | Luceplan 官方项目图 |
| P_MeshWireless_2015_app_control.jpg | Mesh Wireless（D86 蓝牙智能版）整机：同款钢索网 + 自研 App 控制示意 | https://www.luceplan.com/us/products/mesh-wireless/ | PIL 1920×1080；目检网穹点亮，页面明确标注 wi-fi/wireless 版 | 2026-10-22 | Luceplan 官方产品图 |
| P_MeshWireless_2015_lit.jpg | Mesh Wireless 双穹点亮状态（wireless-ok） | https://www.luceplan.com/us/products/mesh-wireless/ | PIL 1398×1920；目检两台网穹发光 | 2026-10-22 | Luceplan 官方产品图 |
| P_Compendium_2017_suspension_packshot.jpg | Compendium Suspension（Rybakken 2017，D81）线性灯整机：Bronzo scuro 细长悬杆 | https://www.luceplan.com/products/compendium-suspension/ | PIL 1536×2048；目检细长线性悬杆 | 2026-10-22 | Luceplan 官方产品图 |
| P_Compendium_2017_floor_packshot.jpg | Compendium Floor（D81）落地版三色：银/黑/黄铜细长线性落地灯 | https://www.luceplan.com/us/products/compendium-floor/ | PIL 3750×5000；目检三台立式线性灯 | 2026-10-22 | Luceplan 官方产品图 |
| P_Compendium_2017_scene_homeoffice.jpg | Compendium Suspension 家庭办公室场景（homeoffice） | https://www.luceplan.com/products/compendium-suspension/ | PIL 1448×2048；目检书桌上方线性灯 | 2026-10-22 | Luceplan 官方 lifeshot |
| P_Compendium_2017_joint_detail.jpg | Compendium 线性灯端部接头/反射器节点（D81-joint） | https://www.luceplan.com/products/compendium-suspension/ | PIL 1920×1080；目检长杆与家具尺度 | 2026-10-22 | Luceplan 官方产品图 |
| P_CompendiumCircle_2017_packshot.jpg | Compendium Circle（D81C）圆形版本：黑色细圆环吊灯 | https://www.luceplan.com/products/compendium-suspension/ | PIL 3750×5000；目检黑色圆环，与线性版区分 | 2026-10-22 | Luceplan 官方产品图 |
| P_Levante_2021_packshot.jpg | Levante（Marco Spatti 2021，A06）整机：三扇"米纸"半透明扇片相交 | https://www.luceplan.com/us/stories/levante-the-harmony-of-light-and-material/ | PIL 1080×1920；目检白色扇片吊灯 | 2026-10-22 | Luceplan 官方 story 图 |
| P_Levante_2021_installed_open.jpg | Levante 安装于高挑空间的展开状态（open） | https://www.luceplan.com/us/stories/levante-the-harmony-of-light-and-material/ | PIL 1920×1080；目检扇片在窗格空间中 | 2026-10-22 | Luceplan 官方 story 图 |
| P_Levante_2021_fan_material.jpg | Levante 单扇片半透光材质均匀漫射特写 | https://www.luceplan.com/us/stories/levante-the-harmony-of-light-and-material/ | PIL 1080×1920；目检扇面材质 | 2026-10-22 | Luceplan 官方 story 图 |
| P_Koine_2022_packshot.jpg | Koinè（Mandalaki，A07）扁平圆碟吊灯主图：哑光黑圆盘+矿物透镜 | https://www.luceplan.com/us/products/koine-suspension/ | PIL 1440×1920；目检扁平圆盘，与 Mesh 3D 网明确区分 | 2026-10-22 | Luceplan 官方产品图 |
| P_Koine_2022_size_family.jpg | Koinè 多尺寸/厨房岛台两灯组合场景 | https://www.luceplan.com/us/products/koine-suspension/ | PIL 1080×1920；目检双碟悬于岛台 | 2026-10-22 | Luceplan 官方 lifeshot |
| P_Koine_2022_acoustic.jpg | Koinè acoustic 声学版：灰色吸音材质圆碟（sound-absorbing） | https://www.luceplan.com/us/products/koine-suspension/ | PIL 1440×1920；目检灰色声学圆碟 | 2026-10-22 | Luceplan 官方产品图 |
| P_Jus_2024_packshot.jpg | J-us（Zambelli 2024，A09）多头吊灯整机：中央圆柱电轨 + 可插拔臂 | https://www.luceplan.com/us/products/j-us/ | PIL 1080×1440；目检传统多头吊灯形态 | 2026-10-22 | Luceplan 官方产品图 |
| P_Jus_2024_XL_scene.jpg | J-us XL 大尺寸版安装实景（Como 项目） | https://www.luceplan.com/us/products/j-us/ | PIL 1075×1543；目检大尺度吊灯置于空间 | 2026-10-22 | Luceplan 官方项目图 |
| P_Jus_2024_gold_arm.jpg | J-us 缎金（satin gold）铜臂版本 | https://www.luceplan.com/us/products/j-us/ | PIL 1080×1440；目检金色臂吊灯 | 2026-10-22 | Luceplan 官方产品图 |
| P_Zile_2021_pl_packshot.jpg | Zile（Archirivolto，B02）藏铃形 PLA 生物塑料灯罩整机（brick 色） | https://www.luceplan.com/products/zile-suspension/ | PIL 1920×1920；目检钟形灯罩 | 2026-10-22 | Luceplan 官方产品图 |
| P_Zile_2021_kitchen_scene.jpg | Zile 40 版双钟形灯罩置于厨房中岛场景 | https://www.luceplan.com/products/zile-suspension/ | PIL 1398×1920；目检厨房双吊灯 | 2026-10-22 | Luceplan 官方 lifeshot |
| P_Zile_2021_floor_scene.jpg | Zile Floor 落地版客厅场景 | https://www.luceplan.com/products/zile-suspension/ | PIL 746×1024；目检落地钟形灯 | 2026-10-22 | Luceplan 官方 lifeshot |
| P_Blow_1997_packshot.jpg | Blow（Giardini 1997/三代 2015，D28）吊扇灯整机：灯在扇叶之上 + 透明 PMMA 扇叶 | https://www.luceplan.com/us/products/blow-ceiling-fan/ | PIL 1080×1440；目检透明扇叶与上方灯具专利布局 | 2026-10-22 | Luceplan 官方产品图 |
| P_Blow_1997_blade_detail.jpg | Blow 透明甲基丙烯酸酯扇叶纹理与灯体细节 | https://www.luceplan.com/us/products/blow-ceiling-fan/ | PIL 1080×1440；目检扇叶放射纹理 | 2026-10-22 | Luceplan 官方产品图 |
| P_Flia_2020_outdoor.jpg | Flia（Zambelli 2020，A04）户外灯：细碳纤维杆 + 微型灯头夜景 | https://www.luceplan.com/products/flia-outdoor/ | PIL 1080×1440；目检户外细杆灯草地夜景 | 2026-10-22 | Luceplan 官方户外产品图 |
| P_Doi_2021_suspension.jpg | Doi（Meneghello Paolelli，A05）配重圆盘吊灯家族：钢盘 + 电缆灯头 | https://www.luceplan.com/products/doi-suspension/ | PIL 1920×1920；目检多组圆盘配重吊灯 | 2026-10-22 | Luceplan 官方产品图 |

## 二、工厂、材料与光学（F_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| F_Hope_Fresnel_PMMA.jpg | Hope（2009，D66a）PMMA 平菲涅尔透镜花瓣特写：把灯塔聚光光学器件家用化 | https://www.luceplan.com/products/hope-suspension/ | PIL 728×1000；目检透明棱镜花瓣（菲涅尔透镜材质） | 2026-10-22 | Luceplan 官方产品图（代表 PMMA 光学供应链） |
| F_CounterBalance_gear_mechanism.jpg | Counterbalance（D73N）热塑齿轮组配重机构特写：悬臂任意位置停留的核心机构 | https://www.luceplan.com/us/products/counterbalance-wall/ | PIL 626×860；目检墙装齿轮/配重机构与悬臂 | 2026-10-22 | Luceplan 官方产品图（代表工程机构） |
| F_Silenzio_Kvadrat_fabric.jpg | Silenzio（D79）声学灯 Kvadrat Remix 织物罩 + 吸音结构零件图（parts1） | https://www.luceplan.com/us/products/silenzio-suspension/ | PIL 1920×1080；目检织物圆柱罩与顶部铝件 | 2026-10-22 | Luceplan 官方产品图（代表 Kvadrat 织物声学材料） |
| F_Levante_ricepaper_material.jpg | Levante（A06）食品工业特种半透明"米纸"扇面材质特写 | https://www.luceplan.com/us/stories/levante-the-harmony-of-light-and-material/ | PIL 1080×1920；目检薄扇片均匀漫射光 | 2026-10-22 | Luceplan 官方 story 图（代表特种漫射材料） |
| F_Koine_mineral_lens.jpg | Koinè 矿物透镜（mineral lens）still life：边界清晰的锥形光斑光学特写 | https://www.luceplan.com/us/products/koine-suspension/ | PIL 1536×1920；目检圆盘中心透镜与光斑 | 2026-10-22 | Luceplan 官方产品图（代表矿物光学透镜） |

## 三、空间、展厅与展览（S_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| S_Flagship_Milan_entrance.jpg | 米兰旗舰店 Corso Monforte 7 入口展厅室内：中性白墙 + 环形灯陈列 | https://www.luceplan.com/us/about/luceplan-flagship-store-milan/ | PIL 1440×1920；目检展厅入口与产品陈列 | 2026-10-22 | Luceplan 官方旗舰店图 |
| S_Flagship_Milan_window.jpg | 米兰旗舰店橱窗（window）夜景：窗内多头吊灯陈列 | https://www.luceplan.com/us/about/luceplan-flagship-store-milan/ | PIL 1440×1920；目检店面橱窗 | 2026-10-22 | Luceplan 官方旗舰店图 |
| S_Euroluce2025_booth.jpg | 2025 米兰设计周 Euroluce 展位（full-color container 式陈列） | https://www.luceplan.com/stories/milano-design-week-2025/ | PIL 1920×1440；目检展贸展位全景 | 2026-10-22 | Luceplan 官方展会图 |
| S_KMSKA_project.jpg | 官方 company 页标杆项目实景（临水/度假项目应用） | https://www.luceplan.com/about/company/ | PIL 1920×1080；目检建筑户外项目空间 | 2026-10-22 | Luceplan 官方项目图 |
| S_Company_showroom.jpg | 公司展厅/办公照明空间实景（company-showroom） | https://www.luceplan.com/about/company/ | PIL 1080×1440；目检室内照明空间 | 2026-10-22 | Luceplan 官方公司图 |

## 四、缺口与说明

- **工厂车间/制造纪实照**：研究笔记 05 §12 已注明 Luceplan 官方未发布类似 FLOS cocoon 喷涂/Bovezzo 工厂式的车间工艺纪录片影像。本次 F_ 以"材料与光学特写"（Hope PMMA 菲涅尔透镜、Counterbalance 热塑齿轮机构、Silenzio Kvadrat 织物、Levante 特种漫射扇面、Koinè 矿物透镜）代替制造现场图，均来自官方产品页可追溯原图。
- **Koinè 首版年份**：官方产品页未标注具体年份，台账年份暂记约 2022（A07，处于研究笔记 04 §07 推断的 2021–2023 区间），待官方目录/技术 PDF 进一步确认。
- **Zile 首版年份**：官方卡片未标注，台账暂记约 2021（B02，研究笔记推断 2020/2021）。
- **Blow 代际**：现行 2026 目录在售为 1997 原创的第三代（2015 电子版），本台账取现行在售整机图，未单独区分历代外观（透明 PMMA 扇叶各代一致）。
- **_unused/**：存有 B 侧总览拼图临时件（`_montage_B*.jpg`）及下载过程中的备选小图，不进正文、不在本台账登记。
- 全部 42 张来源 URL 均为 luceplan.com 官方域，未使用来源不可追溯的图。
