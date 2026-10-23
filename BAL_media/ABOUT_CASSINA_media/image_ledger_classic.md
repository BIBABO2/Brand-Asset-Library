# Cassina 品牌图片台账（经典产品侧）

- 品牌：Cassina（意大利 Cassina S.p.A.，Haworth 集团旗下；iMaestri 大师再版系列 + I Contemporanei 当代线）
- 检索日期：2026-10-23
- 台账范围：本取图子代理负责的经典产品图，共 32 张 P_ 产品图，全部存于本目录。品牌字标/历史/工厂/空间/当代产品由另一子代理负责，不在本台账。
- 取图通道：cassina.com 为 Adobe AEM 站点，产品图存于 DAM（`/content/dam/ld/cassina/products/.../<SKU>/<子目录>/<文件>.jpg`）。直接 curl 带浏览器 UA 抓取产品页 HTML，从页面内嵌 DAM 路径提取原图（`01_hero`/`02_ambienti`/`03_dettagli`/`06_caratteristiche`/`14_plp`），下载原图分辨率 1664×832 至 5760×2960 不等。
- 型号校验：每张图均来自对应 SKU 官方产品页（三级核对：官方 DAM 文件路径含 SKU 编号 + 页面 alt/目录名 + 页面上下文）；32 张用 System.Drawing 合成带文件名标签的 4 列总览拼图逐张目检，重点区分 LC2（petit 小尺度单人扶手椅）/LC3（grand 大尺度单人扶手椅）/LC4（弓形躺椅）三者形态。
- 归属校正（据 research_notes/03_classic_products.md）：Veliero 为 Franco Albini 1940 原型、Cassina 2011 再版（非 Perriand）；Julep 非 Cassina 产品（实为 Tacchini/Jonas Wagell），以 Gio Ponti×Cassina 的 Superleggera（1957）与 Leggera（1952）替代；Le Bambole 为 B&B Italia 产品，未取入本目录。

## 一、iMaestri 大师系列（LC2 / LC3 / LC4 / Red and Blue / Willow / Veliero）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_LC2_1928_packshot.jpg | LC2（2 Fauteuil Grand Confort petit modèle）单人扶手椅官方白底：镀铬无缝钢管矩形笼 + 灰色独立软垫块；SKU 002-lc2-poltrona | https://www.cassina.com/ww/en/products/lc2-poltrona.html | DAM 路径 14_plp；System.Drawing 1664×832；拼图目检单人小尺度扶手椅，与 LC3 大尺度区分 | 2026-10-23 | Cassina 官方产品图 |
| P_LC2_1928_scene_living.jpg | LC2 扶手椅客厅场景（两只浅蓝皮扶手椅并列于壁炉前） | https://www.cassina.com/ww/en/products/lc2-poltrona.html | DAM 路径 02_ambienti；5391×2770；目检两只 petit 尺度扶手椅 | 2026-10-23 | Cassina 官方 lifeshot |
| P_LC2_1928_detail_tubestructure.jpg | LC2 棕色马鞍革扶手椅镀铬钢管框架与软垫特写 | https://www.cassina.com/ww/en/products/lc2-poltrona.html | DAM 路径 03_dettagli；3840×2160；目检外露钢管笼与棕色软垫 | 2026-10-23 | Cassina 官方产品图 |
| P_LC3_1928_packshot.jpg | LC3（3 Fauteuil Grand Confort grand modèle）大尺度单人扶手椅官方图：米白皮革、明显比 LC2 更深更宽；SKU 003-lc3-poltrona | https://www.cassina.com/ww/en/products/lc3-poltrona.html | DAM 路径 01_hero；5760×2960；拼图目检 grand 尺度扶手椅（旁为绿色雕塑落地灯），与 LC2 小尺度区分 | 2026-10-23 | Cassina 官方产品图 |
| P_LC3_1928_scene_living.jpg | LC3 扶手椅客厅场景（米色扶手椅置于品红墙面旁） | https://www.cassina.com/ww/en/products/lc3-poltrona.html | DAM 路径 02_ambienti；3525×2240；目检 grand 尺度单人扶手椅 | 2026-10-23 | Cassina 官方 lifeshot |
| P_LC3_1928_detail_tubestructure.jpg | LC3 米色扶手椅钢管框架与独立软垫结构特写 | https://www.cassina.com/ww/en/products/lc3-poltrona.html | DAM 路径 03_dettagli；3840×2160；目检钢管笼与软垫 | 2026-10-23 | Cassina 官方产品图 |
| P_LC4_1928_packshot.jpg | LC4（4 Chaise longue à réglage continu）黑色马鞍革弓形躺椅官方白底：弯管架搁于 H 形底座 + 圆柱颈枕；SKU 004-lc4-...cuoio | https://www.cassina.com/ww/en/products/lc4-chaise-longue-reglage-continu-cuoio.html | DAM 路径 14_plp；1664×832；拼图目检为长条形躺椅（非扶手椅），与 LC2/LC3 明确区分 | 2026-10-23 | Cassina 官方产品图 |
| P_LC4_1928_detail_tubestructure.jpg | LC4 镀铬弯管结构与 H 形底座、弹性织带承托特写 | https://www.cassina.com/ww/en/products/lc4-chaise-longue-reglage-continu-cuoio.html | DAM 路径 03_dettagli/01；3000×2000；目检弓形钢管架与底座接触点 | 2026-10-23 | Cassina 官方产品图 |
| P_LC4_1928_detail_pose.jpg | LC4 躺椅使用姿态（弓形架斜搁于 H 底座、颈枕就位） | https://www.cassina.com/ww/en/products/lc4-chaise-longue-reglage-continu-cuoio.html | DAM 路径 03_dettagli/02；3000×2000；目检连续调节姿态；官方口径为 réglage continu（无官方"7 档"） | 2026-10-23 | Cassina 官方产品图 |
| P_RedBlue_1918_packshot.jpg | Red and Blue Chair（Rietveld 1918 椅形/约 1923 施三原色）官方白底：红靠背、蓝座面、黑框架、黄色端帽的解构木椅；SKU 635-red-and-blue | https://www.cassina.com/ww/en/products/red-and-blue-online.html | DAM 路径 14_plp；1664×832；拼图目检经典三原色红蓝椅 | 2026-10-23 | Cassina 官方产品图 |
| P_RedBlue_1918_detail_structure.jpg | 红蓝椅侧视：实心山毛榉杆件相互穿插悬空堆叠结构 | https://www.cassina.com/ww/en/products/red-and-blue-online.html | DAM 路径 03_dettagli/01；3840×2160；目检红背蓝座与黑色杆件穿插 | 2026-10-23 | Cassina 官方产品图 |
| P_RedBlue_1918_detail_colorblocks.jpg | 红蓝椅黑/红/蓝/黄三原色杆件与直角节点结构特写 | https://www.cassina.com/ww/en/products/red-and-blue-online.html | DAM 路径 06_caratteristiche/01；1752×1024；目检原色块与黄端帽节点 | 2026-10-23 | Cassina 官方产品图 |
| P_Willow_1904_packshot.jpg | Willow 1（Mackintosh 约 1904 用于格拉斯哥 Willow Tea Rooms）黑色高背格子扶手椅官方白底；SKU 312-willow-1 | https://www.cassina.com/ww/en/products/willow-1.html | DAM 路径 14_plp；1664×832；拼图目检黑色半圆高背 + 米色座垫王座式扶手椅 | 2026-10-23 | Cassina 官方产品图 |
| P_Willow_1904_detail_highback.jpg | Willow 1 半圆高背王座式侧视（高背在低矮空间中的仪式感） | https://www.cassina.com/ww/en/products/willow-1.html | DAM 路径 03_dettagli/01；3840×2160；目检高背比例与黑色木格 | 2026-10-23 | Cassina 官方产品图 |
| P_Willow_1904_detail_lattice.jpg | Willow 1 顶部黑色几何格子（格栅）靠背特写 | https://www.cassina.com/ww/en/products/willow-1.html | DAM 路径 06_caratteristiche/01；1752×1024；目检 Mackintosh 几何格子纹样 | 2026-10-23 | Cassina 官方产品图 |
| P_Veliero_1940_packshot.jpg | Veliero 838（Franco Albini 1940 原型、Cassina 2011 再版）帆船式斜柱玻璃书架官方白底：X 形斜桅立柱撑不对称玻璃层板；SKU 838-veliero | https://www.cassina.com/nl/en/products/veliero.html | DAM 路径 14_plp；1664×832；拼图目检 X 形斜桅书架（非 Perriand 作品，归属已校正） | 2026-10-23 | Cassina 官方产品图 |
| P_Veliero_1940_detail_boatmast.jpg | Veliero 斜桅立柱撑玻璃层板的客厅安装场景（违背重力的平衡感） | https://www.cassina.com/nl/en/products/veliero.html | DAM 路径 01_hero；5760×2960；目检斜桅与成组玻璃搁板 | 2026-10-23 | Cassina 官方 lifeshot |
| P_Veliero_1940_detail_glasshelves.jpg | Veliero 斜柱、钢化夹层玻璃搁板与金属节点特写 | https://www.cassina.com/nl/en/products/veliero.html | DAM 路径 03_dettagli/01；3840×2160；目检斜桅节点与透明玻璃层板 | 2026-10-23 | Cassina 官方产品图 |

## 二、Gio Ponti × Cassina 经典（替代任务书误植的 Julep）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Superleggera_1957_packshot.jpg | 699 Superleggera（Gio Ponti 1957）极细白蜡木骨椅餐厅场景官方图；SKU 699-superleggera | https://www.cassina.com/ww/en/products/superleggera.html | DAM 路径 01_hero；5760×2960；拼图目检细腿木骨餐椅成组 | 2026-10-23 | Cassina 官方产品图 |
| P_Superleggera_1957_scene.jpg | Superleggera 橙座细框椅单体（轻量结构） | https://www.cassina.com/ww/en/products/superleggera.html | DAM 路径 03_dettagli/02；3840×2160；目检极细木框与橙色座面 | 2026-10-23 | Cassina 官方产品图 |
| P_Superleggera_1957_detail_frame.jpg | Superleggera 极细白蜡木框架与藤座交接特写 | https://www.cassina.com/ww/en/products/superleggera.html | DAM 路径 03_dettagli/01；3840×2160；目检细腿与藤座 | 2026-10-23 | Cassina 官方产品图 |
| P_Leggera_1952_packshot.jpg | 646 Leggera（Gio Ponti 1952）喷漆圆钢管 + 木座椅官方白底；SKU 646-leggera | https://www.cassina.com/it/it/prodotti/leggera-pro.html | DAM 路径 14_plp；1664×832；拼图目检黑色钢管框 + 木座靠背 | 2026-10-23 | Cassina 官方产品图 |
| P_Leggera_1952_scene.jpg | Leggera 椅子大空间/客厅场景 | https://www.cassina.com/it/it/prodotti/leggera-pro.html | DAM 路径 01_hero；5760×2960；目检钢管木椅于室内 | 2026-10-23 | Cassina 官方 lifeshot |
| P_Leggera_1952_detail_structure.jpg | Leggera 喷漆圆钢管框架与青绿色座面结构特写 | https://www.cassina.com/it/it/prodotti/leggera-pro.html | DAM 路径 03_dettagli/02；3840×2160；目检圆管框架与座面连接 | 2026-10-23 | Cassina 官方产品图 |

## 三、1970s–80s 当代经典（Maralunga / Cab）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Maralunga_1973_packshot.jpg | Maralunga 40（Vico Magistretti 1973，1979 Compasso d'Oro）黄色双人沙发官方白底：自行车链条可调头枕；SKU 675-maralunga | https://www.cassina.com/ww/en/products/maralunga.html | DAM 路径 14_plp；1664×832；拼图目检黄色沙发与可翻折头枕 | 2026-10-23 | Cassina 官方产品图 |
| P_Maralunga_1973_scene_living.jpg | Maralunga 深蓝沙发豪华客厅场景 | https://www.cassina.com/ww/en/products/maralunga.html | DAM 路径 01_hero；5760×2960；目检成组深蓝沙发于挑高空间 | 2026-10-23 | Cassina 官方 lifeshot |
| P_Maralunga_1973_detail_headrest.jpg | Maralunga 灰色沙发头枕翻折调节特写（自行车链条机构） | https://www.cassina.com/ww/en/products/maralunga.html | DAM 路径 03_dettagli/01；3840×2160；目检头枕翻折形态 | 2026-10-23 | Cassina 官方产品图 |
| P_Maralunga_1973_scene_detail.jpg | Maralunga 深蓝成组沙发大厅场景（尺度关系） | https://www.cassina.com/ww/en/products/maralunga.html | DAM 路径 02_ambienti/03；4000×2240；目检沙发群组与空间 | 2026-10-23 | Cassina 官方 lifeshot |
| P_Cab_1977_packshot.jpg | Cab 412（Mario Bellini 1977）棕红马鞍革餐椅官方白底：整张皮套钢管骨架；SKU 412-cab-412 | https://www.cassina.com/ww/en/products/cab-412.html | DAM 路径 14_plp；1664×832；拼图目检皮革包裹的自支撑餐椅 | 2026-10-23 | Cassina 官方产品图 |
| P_Cab_1977_scene.jpg | Cab 412 墨绿皮椅餐厅场景（配红色玻璃花瓶与深色餐桌） | https://www.cassina.com/ww/en/products/cab-412.html | DAM 路径 01_hero；3840×2160；目检墨绿 Cab 椅于古典餐厅 | 2026-10-23 | Cassina 官方 lifeshot |
| P_Cab_1977_detail_leather.jpg | Cab 412 整张马鞍革套钢管骨架特写（墨绿，缝线与拉链收边） | https://www.cassina.com/ww/en/products/cab-412.html | DAM 路径 03_dettagli/01；3840×2160；目检皮革饰面与边缘缝线 | 2026-10-23 | Cassina 官方产品图 |
| P_Cab_1977_detail_skeleton.jpg | Cab 412 皮革与外露钢管"皮肤覆骨骼"结构特写（深蓝） | https://www.cassina.com/ww/en/products/cab-412.html | DAM 路径 03_dettagli/05；3840×2160；目检皮套与钢管骨架关系 | 2026-10-23 | Cassina 官方产品图 |

## 缺口与取舍说明

- **Julep（任务书 Gio Ponti/约 1938）**：经 research_notes 核实，Cassina 目录查无此品；现存 Julep 沙发为 Tacchini（Jonas Wagell）产品，与 Cassina/Gio Ponti 无关。本侧不采用任何 Julep 图，改以 Gio Ponti×Cassina 的 **Superleggera（1957）** 与 **Leggera（1952）** 各 3 张替代，合计 6 张，填补 Ponti 合作产品线。
- **Le Bambole（任务书 Mario Bellini 1972）**：为 B&B Italia（C&B Italia）产品，非 Cassina；按更正要求未取入本目录。其故事若由主代理写入，需另向 B&B Italia 子代理/渠道取图，不在本侧。
- **Veliero 归属**：任务书原记作 Charlotte Perriand 约 1946，经核实为 Franco Albini 1940 原型、Cassina 2011 再版；文件名用 `P_Veliero_1940_…`，图源为 Cassina 官方 838-veliero SKU 页。
- **LC4"7 种标准姿态"**：官方口径为"连续调节（réglage continu）"，未找到官方列出的 7 档；本侧细节图取钢管结构与一张使用姿态，未编造姿态数量。
- **数量核对**：本侧共 32 张 P_ 图，覆盖 10 个型号（LC2/LC3/LC4 各 3、RedBlue/Willow/Veliero/Superleggera/Leggera 各 3、Maralunga/Cab 各 4），每型号 3–4 张，落在 2–5 张额度内；全部 >10KB（最小 Leggera packshot 59KB）且 System.Drawing 可正常打开。
- 未使用 _unused/ 存放备件；无重复文件（已目检剔除 Superleggera 与 hero 图重复项，改取 dettagli_2）。
