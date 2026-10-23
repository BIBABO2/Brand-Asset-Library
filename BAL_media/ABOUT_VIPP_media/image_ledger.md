# VIPP 品牌图片台账（经典产品线侧）

- 品牌：VIPP（丹麦家族设计品牌，Holger Nielsen 1939 年创立脚踏桶，Egelund 家族第三代持有）
- 检索日期：2026-10-23
- 台账范围：经典产品线侧——脚踏垃圾桶家族（Vipp12/14/15/16/17/18/52/Rubbish）、Vipp Lighting（Vipp530/521/526/524，2017 首发）、厨卫配件（Vipp9/9W/7），共 34 个文件（含 1 张 MoMA 馆藏缩略图）。
- 品牌/历史/工厂/空间/当代产品由另一子代理负责，前缀不重叠（本侧全部以 P_Vipp 或 P_BinFamily 开头）。
- 取图通道：
  - vipp.com 为 Thor Commerce（Shopify 类）站点，产品主图走 `cdn.thorcommerce.io/vipp/{hash}/{uuid}.jpg`，去查询参数取原图（1800×1800 白底 packshot）；
  - 场景/lifestyle 图走 `media.umbraco.io/vipp-com-2/{guid}/{描述性文件名}.jpg`，去查询参数取原图（1500–2560px）；
  - MoMA 馆藏图（moma.org/collection/works/130957）受 Cloudflare 防护，仅取得 366×512 缩略图（9KB），高分辨率原图未能通过自动下载获取。
- 验证方法：
  - 逐张用 Python PIL `Image.open()` 打开成功并记录宽高；全部文件 >10KB（MoMA 缩略图 9KB 除外，单独标注）；
  - 目视抽查 Vipp16/Vipp17 packshot（黑色旋钮把手 vs 不锈钢环把手区分型号）、Vipp530 桌灯（冲孔灯罩+拉绳坠头）、Vipp9 皂液器（不锈钢泵头）、Bin Family 全景图，型号与官方产品页 alt 描述一致。
- 型号口径校正（经官方产品页 + MoMA 馆藏页交叉核实）：
  - 现行脚踏桶型号体系为 Vipp12(3L)/Vipp13(4L)/Vipp14(8L)/Vipp15(14L)/Vipp16(18L)/Vipp17(30L)——不存在官方"Bin 18/Bin 50"命名；
  - MoMA 馆藏为 object 1332.2009 "Pedal Bin (model 15), 1939"（镀铬/喷粉/电镀钢 + 橡胶/塑料），2009 年 11 月入藏；
  - Vipp Lighting 首发于 2017-11-29（非 2000s），首席设计师 Morten Bo Jensen（2006 年起），非 Jette Egelund 个人设计；
  - 未检索到 Red Dot / iF 获奖记录，不标注奖项来源图。

## 一、脚踏垃圾桶家族（核心产品线）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Vipp16_white_packshot.jpg | Vipp16 Pedal Bin 18L/5Gal 白色版白底整机：喷粉钢桶身+不锈钢圆拱顶盖+黑色旋钮侧把手+黑色脚踏+底部橡胶圈；alt 标注 "Vipp Pedal Bin 18 L / 5 Gal - vipp16 - White" | https://vipp.com/en/products/pedal-bin-18-l-5-gal | 1800×1800 JPEG，56KB，PIL 打开成功；目视白色桶身+不锈钢圆顶盖+黑色旋钮把手，与官方产品页一致 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp16_beige_scene.jpg | Vipp16 米色（beige）版场景/lifestyle 图；alt 标注 "Vipp16 Pedal Bin Beige 03" | https://vipp.com/en/products/pedal-bin-18-l-5-gal | 2251×3000 JPEG，3148KB，PIL 打开成功；目视米色桶身场景照 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp16_white_scene1.jpg | Vipp16 白色版场景/第二角度；同 alt "Vipp Pedal Bin 18 L / 5 Gal - vipp16 - White" | https://vipp.com/en/products/pedal-bin-18-l-5-gal | 1800×1800 JPEG，65KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp17_white_packshot.jpg | Vipp17 Pedal Bin 30L/8Gal（现行最大脚踏桶）白色版白底整机：不锈钢环侧把手（区别于 Vipp16 的黑色旋钮）+黑色脚踏；alt 标注 "Vipp Pedal Bin 30 L / 8 Gal - vipp17 - White" | https://vipp.com/en/products/pedal-bin-30-l-8-gal | 1800×1800 JPEG，59KB，PIL 打开成功；目视更高桶身+不锈钢环把手，与 Vipp16 黑色旋钮区分 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp17_beige_scene.jpg | Vipp17 米色版场景图；alt 标注 "Vipp 17 Pedal Bin Beige 01" | https://vipp.com/en/products/pedal-bin-30-l-8-gal | 2251×3000 JPEG，3697KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp15_white_packshot.jpg | Vipp15 Pedal Bin 14L/4Gal 白色版白底整机——此尺寸即 MoMA 馆藏 model 15 对应现行产品；alt 标注 "Vipp Pedal Bin 14 L / 4 Gal - vipp15 - White" | https://vipp.com/en/products/pedal-bin-14-l-4-gal | 1800×1800 JPEG，58KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp15_white_scene.jpg | Vipp15 白色版场景/第二角度 | https://vipp.com/en/products/pedal-bin-14-l-4-gal | 1800×1800 JPEG，63KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp14_white_packshot.jpg | Vipp14 Pedal Bin 8L/2Gal 白色版白底整机；alt 标注 "Vipp Pedal Bin 8 L / 2 Gal - vipp14 - White" | https://vipp.com/en/products/vipp14-bin | 1800×1800 JPEG，47KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp14_white_scene.jpg | Vipp14 白色版场景/lifestyle；alt 标注 "Vipp 14 Pedal Bin White 01" | https://vipp.com/en/products/vipp14-bin | 1500×2000 JPEG，1627KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp12_black_packshot.jpg | Vipp12 Pedal Bin 3L/0.8Gal（最小脚踏桶）黑色版白底整机；alt 标注 "Vipp Pedal Bin 3 L / 0.8 Gal - vipp12 - Black" | https://vipp.com/en/products/pedal-bin-3-l | 1800×1800 JPEG，75KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp12_beige_detail.jpg | Vipp12 米色版细节特写/crop；alt 标注 "Vipp 12 Pedal Bin Beige 02 Crop"（PNG 透明底） | https://vipp.com/en/products/pedal-bin-3-l | 1920×2446 PNG，7647KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（media.umbraco.io） |
| P_Vipp18_black_packshot.jpg | Vipp18 Open Top Bin 22L/6Gal 敞口桶黑色版白底整机（无脚踏、敞口）；alt 标注 "Vipp Open Top Bin 22 L / 6 Gal - vipp18 - Black/Black lid" | https://vipp.com/en/products/open-top-bin-22-l-6-gal | 1800×1800 JPEG，56KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp18_black_scene.jpg | Vipp18 黑色版场景/第二角度 | https://vipp.com/en/products/open-top-bin-22-l-6-gal | 1800×1800 JPEG，56KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp52_black_packshot.jpg | Vipp52 Office Bin 35L 办公桶黑色版白底整机；alt 标注 "Vipp Office Bin - vipp52 - Black" | https://vipp.com/en/products/office-bin | 1800×1800 JPEG，123KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp15_rubbish_packshot.jpg | Vipp15 "Rubbish" 可持续版：不改 1939 外形，桶身用 70% 回收塑料+30% 木屑压制纤维材料，保留不锈钢圆顶盖；alt 标注 "Vipp 15 Rubbish Bts 02" | https://vipp.com/en/products/rubbish | 1500×2000 JPEG，1028KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（media.umbraco.io） |
| P_BinFamily_series_overview.jpg | 脚踏桶家族全景（Vipp12–17 系列并排），官方类目页 hero 图；alt 标注 "Bin Series Overview" | https://vipp.com/en/categories/bins | 10000×5625 JPEG，6423KB，PIL 打开成功；超高分辨率家族合影 | 2026-10-23 | VIPP 官方品牌素材（media.umbraco.io） |
| P_VippFamily_stainless_combo.jpg | 2024 年 85 周年 uncoated 不锈钢原色家族合影（Stainless Steel Collection）；alt 标注 "Vipp Pedal Bins Stainless Steel Combo 01" | https://vipp.com/en/collections/stainless-steel-collection | 1920×2880 PNG，4881KB，PIL 打开成功 | 2026-10-23 | VIPP 官方品牌素材（media.umbraco.io） |
| P_Vipp15_MoMA_collection.jpg | MoMA 馆藏 Pedal Bin (model 15), 1939（object 1332.2009）官方馆藏照：米色桶身+镀铬圆拱顶盖+黑色旋钮侧把手+黑色脚踏；© 2026 Kasper Egelund。**注意：此图仅 366×512 / 9KB，为 MoMA 网站缩略图，因 Cloudflare 防护未能取得高分辨率原图。** | https://www.moma.org/collection/works/130957 | 366×512 JPEG，9KB（低于 10KB 阈值），PIL 打开成功；目视米色桶身+镀铬圆顶+黑色旋钮，与 MoMA 著录一致 | 2026-10-23 | MoMA 馆藏藏品照（© Kasper Egelund），仅作博物馆馆藏记录配图 |

## 二、Vipp Lighting（2017 首发系列）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Vipp530_black_packshot.jpg | Vipp530 Table Lamp 桌灯黑色版白底整机：冲孔金属灯罩+哑光玻璃漫射+细杆+圆形底座+钢坠拉绳开关；alt 标注 "Vipp Table Lamp - vipp530 - Black" | https://vipp.com/en/products/table-lamp | 1800×1800 JPEG，89KB，PIL 打开成功；目视冲孔灯罩+拉绳坠头，与官方描述一致 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp530_scene.jpg | Vipp530 桌灯场景/lifestyle（softpacks）；alt 标注 "Vipp 530 Table Lamp Softpacks 1 Web" | https://vipp.com/en/products/table-lamp | 1280×1706 JPEG，455KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp530_lit_scene.jpg | Vipp530 桌灯点亮场景（第二角度） | https://vipp.com/en/products/table-lamp | 2000×2000 JPEG，110KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（cdn.thorcommerce.io） |
| P_Vipp521_packshot.jpg | Vipp521 Desk Lamp 可调臂桌灯黑色版白底整机：可调臂+指旋螺丝+实心底座+冲孔灯罩；alt 标注 "Vipp Desk Lamp - vipp521 - Desk Stand" | https://vipp.com/en/products/desk-lamp | 1800×1800 JPEG，73KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp521_off_scene.jpg | Vipp521 关灯场景（Jette 01 OFF Low）；alt 标注 "Vipp521 Desk Lamp Jette 01 OFF Low" | https://vipp.com/en/products/desk-lamp | 2560×3412 JPEG，678KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp521_on_scene.jpg | Vipp521 点亮场景（Jette 01 ON Low）；alt 标注 "Vipp521 Desk Lamp Jette 01 ON Low" | https://vipp.com/en/products/desk-lamp | 2560×3412 JPEG，682KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp526_small_packshot.jpg | Vipp526 Pendant 吊灯小尺寸版白底整机：冲孔灯罩+哑光玻璃；alt 标注 "Vipp Pendant - vipp526-528 - Small" | https://vipp.com/en/products/pendant | 1800×1800 JPEG，76KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp526_scene.jpg | Vipp526 吊灯场景/lifestyle；alt 标注 "Vipp 526 Pendant Lamp 01" | https://vipp.com/en/products/pendant | 1500×2000 JPEG，1314KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp524_warmgrey_packshot.jpg | Vipp524 Wall Spot 壁射灯暖灰版白底整机：最小款冲孔灯罩；alt 标注 "Vipp Wall Spot - vipp524 - Warm Grey" | https://vipp.com/en/products/wall-spot | 1800×1800 JPEG，79KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp524_warmgrey_scene.jpg | Vipp524 壁射灯暖灰版场景；alt 标注 "Vipp 524 Wall Spot Warm Grey 05" | https://vipp.com/en/products/wall-spot | 1500×2000 JPEG，1375KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |

## 三、厨卫配件

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Vipp9_white_packshot.jpg | Vipp9 Soap Dispenser 台式皂液器白色版白底整机：喷粉钢桶身+不锈钢定制泵头+黑色橡胶底；alt 标注 "Vipp Soap Dispenser - vipp9 - White" | https://vipp.com/en/products/soap-dispenser | 1800×1800 JPEG，58KB，PIL 打开成功；目视白色圆柱桶身+不锈钢泵头，与官方描述一致 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp9_black_scene.jpg | Vipp9 皂液器黑色版场景；alt 标注 "Vipp 9 Soap Dispenser Black 01" | https://vipp.com/en/products/soap-dispenser | 1080×1678 JPEG，524KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp9W_beige_packshot.jpg | Vipp9W Soap Dispenser Wall 壁挂皂液器米色版白底整机：可从壁挂支架取下+锁定机构；alt 标注 "Vipp Soap Dispenser Wall - vipp9 - Beige" | https://vipp.com/en/products/soap-dispenser-wall | 1800×1800 JPEG，106KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp9W_farmhouse_scene.jpg | Vipp9W 壁挂皂液器 Farmhouse 浴室场景；alt 标注 "Vipp Farmhouse Bathroom 01" | https://vipp.com/en/products/soap-dispenser-wall | 1280×1706 JPEG，352KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |
| P_Vipp7_white_packshot.jpg | Vipp7 Toothbrush Holder 牙刷杯白色版白底整机：喷粉钢+可拆卸橡胶内隔+防滑橡胶底；alt 标注 "Vipp Toothbrush Holder - vipp7 - White" | https://vipp.com/en/products/toothbrush-holder | 1800×1800 JPEG，53KB，PIL 打开成功 | 2026-10-23 | VIPP 官方产品图（cdn.thorcommerce.io） |
| P_Vipp7_bathroom_scene.jpg | Vipp7 牙刷杯 Cold Hawaii 浴室细节场景；alt 标注 "Vipp Cold Hawaii Bathroom Detail 01" | https://vipp.com/en/products/toothbrush-holder | 2560×3691 JPEG，855KB，PIL 打开成功 | 2026-10-23 | VIPP 官方 lifeshot（media.umbraco.io） |

## 未取到/舍弃说明

- **MoMA 馆藏高清图缺口**：moma.org/collection/works/130957 受 Cloudflare 严格防护，HTTP 直接请求与浏览器自动访问均被拦截，仅取得 366×512 / 9KB 缩略图（P_Vipp15_MoMA_collection.jpg）。高分辨率 MoMA 藏品照需通过 Art Resource / Scala Archives 授权获取，未纳入本批。
- **"Bin 50 / 50 升"型号不存在**：经官方产品页与研究笔记核实，现行脚踏桶最大为 Vipp17（30L），无 50L 型号；任务书"Bin 50"口径已修正为 Vipp17（30L）。是否存在过已停产的 50L 商用型号未获官方记录。
- **Vipp13（4L）未单独取图**：Vipp13 与 Vipp12/14 同属小型脚踏桶家族，本批已取 Vipp12（3L）packshot 与 Vipp14（8L）packshot 覆盖小尺寸段；Vipp13 如需可后续补充。
- **镜子/纸巾架/墙面桶未取**：研究笔记确认现行 vipp.com 配件目录中无独立镜子、纸巾架、墙面桶型号页（疑似停产或归入浴室模块 981 系列），未强行取图。
- **Art Bins 艺术桶**：2005 年起 150+ 艺术家联名涂装桶（Karim Rashid、Yoko Ono、Calvin Klein 等）属品牌支线，本批未取；如需可从 vipp.com/en/world-of-vipp/our-story/heritage/20-years-of-art-bins 补充。
- **Henri Teal 联名色**：Vipp16 的 HENRI 联名限量色（teal）产品页返回 404，本批未取该特殊配色图。
- **Red Dot / iF 奖项图**：未检索到 Vipp 经典产品获奖记录，不标注奖项来源图。
- `_unused/` 子目录已创建，本批无备件/重复图移入。
