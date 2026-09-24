# Artemide 品牌图片台账（image_ledger）

- 品牌：Artemide（意大利照明，1960 年由 Ernesto Gismondi 与 Sergio Mazza 创立，总部 Pregnana Milanese）
- 检索日期：2026-09-24
- 取图来源优先级：artemide.com 官方产品页 / 媒体 CDN（/contents/immagini/...）→ 官方历史与设计师页；未使用设计媒体/博物馆/维基图（官方素材充足）
- 通用验证方法：① 官方素材文件名含型号（tizio/tolomeo/nessino/rea/melampo/logico…）+ ② 图片取自该型号官方 subfamily 页 + ③ 目视确认图中产品形态与型号一致；全部文件经 PowerShell 校验存在且 >10KB，并经 System.Drawing 成功打开（排除 404 占位图）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_Artemide_wordmark.svg | Artemide 小写 wordmark（"Artemide."）矢量。提取自 artemide.com 生产环境图标字体 artemide-icons.svg 中 `.icon-artemide-logo`（码点 U+E919）字形，即官网页头同款标识；已做 Y 轴翻转并按字形紧 BBox 裁切（边距≈30 字体单位） | https://www.artemide.com/en/ （字体定义见 https://www.artemide.com/res-2084/css/artemide2.min.css 引用的 artemide-icons.svg） | 官网 CSS 类名 .icon-artemide-logo 对应字形；Chrome headless 渲染目检确认字形为"Artemide"字标；原生矢量，未插值放大 | 2026-09-24 | Artemide S.p.A. 官方商标；仅限品牌档案内部参考使用 |
| Logo_Artemide_wordmark_1600.png | 同上 wordmark 的高清栅格版，实测 1660×520px（透明底黑字），由上述矢量导出（非位图放大） | 同上 | System.Drawing 读取实测 1660×520；≥1600px 达标；由矢量渲染而非算法放大 | 2026-09-24 | 同上 |
| P_Tizio_1972_hero.jpg | Tizio（1972，Richard Sapper）黑色台灯整体，斜向双臂平衡姿态、圆盘底座 | https://www.artemide.com/en/subfamily/18869/tizio | 文件名 yaf_tizio_* 取自 Tizio 官方 subfamily 页；目检为经典黑色 Tizio 双臂结构（红色绝缘子、头顶拨杆） | 2026-09-24 | Artemide 官方产品图，内部参考 |
| P_Tizio_1972_arms.jpg | Tizio 双臂结构/平衡机构特写，戏剧化影棚光，清晰见双平行臂、红色关节件与配重 | https://www.artemide.com/en/subfamily/18869/tizio | 同上三级核对；目检确认双臂结构与散热/关节细节 | 2026-09-24 | 同上 |
| P_Tizio_1972_base.jpg | Tizio 黑色横置姿态，底座散热竖槽（散热器细节）与电源线清晰 | https://www.artemide.com/en/subfamily/18869/tizio | 同上；目检底座散热槽 | 2026-09-24 | 同上 |
| P_Tizio_1972_floor.jpg | Tizio 落地（底座柱）版本三姿态并列，1920×1080 官方环境图 | https://www.artemide.com/en/subfamily/18869/tizio | 文件名 tizio_gallery*；目检为 Tizio Floor（加立柱底座变体），非跨代混用 | 2026-09-24 | 同上 |
| P_Tolomeo_1987_table.jpg | Tolomeo（1987，De Lucchi & Fassina）桌面/台灯镀铬款，条纹圆盘底座、锥形反光罩 | https://www.artemide.com/en/subfamily/1849546/tolomeo-table | 文件名 yaf_tolomeo_tavolo_*；目检镀铬桌面款 | 2026-09-24 | 同上 |
| P_Tolomeo_1987_floor.jpg | Tolomeo 落地（terra）镀铬款，高立杆+圆形底座，悬臂展开 | https://www.artemide.com/en/subfamily/1846322/tolomeo-floor | 文件名 yaf_tolomeo_terra_*；取自落地款官方页 | 2026-09-24 | 同上 |
| P_Tolomeo_1987_cantilever.jpg | Tolomeo 悬臂平衡机构：loft 办公场景中双臂延伸、弹簧平衡臂与灯罩关系，1920×1080 | https://www.artemide.com/en/subfamily/1849546/tolomeo-table | 文件名 tolomeo_tavolo_gallery*；目检悬臂平衡臂机构 | 2026-09-24 | 同上 |
| P_Nessino_1967_hero.jpg | Nessino（1967，Giancarlo Mattioli / Gruppo Città Nuova）橙色 ABS 蘑菇形台灯整体 | https://www.artemide.com/en/subfamily/23264/nessino | 文件名 mu_nessino-arancio-*；目检为标志性橙色蘑菇造型 | 2026-09-24 | 同上 |
| P_Nessino_1967_rubyred.jpg | Nessino Ruby Red 限定版（深红天鹅绒场景，含小尺寸 Nessino 与大尺寸 Nesso 对比），1920×1080 | https://www.artemide.com/en/subfamily/23264/nessino | 文件名 nessino_gallery*；官方 Ruby Red 系列素材；图中为 Nessino 家族配色版 | 2026-09-24 | 同上 |
| P_Rea_wall.jpg | Rea（Neil Poulton）白色双盘壁灯，两片垂直圆盘、间接洗墙光 | https://www.artemide.com/en/subfamily/1551572/rea | 文件名 yaf_rea_*；取自 Rea 官方页；补充产品，1 张 | 2026-09-24 | 同上 |
| P_Melampo_2000_table.jpg | Melampo（Adrien Gardère，约 2000）台灯，倾斜丝绸灯罩、青铜色底座 | https://www.artemide.com/de/subfamily/23472/melampo-table | 文件名 yaf_melampo_tavolo_*；取自 Melampo Table 官方页；补充产品，1 张 | 2026-09-24 | 同上 |
| P_Logico_sospensione.jpg | Logico 吊灯（Gismondi），波浪/多棱乳白玻璃灯罩，细吊线 | https://www.artemide.com/en/subfamily/22481/logico-suspension | 文件名 yaf_logico_sospensione_*；取自 Logico 官方页；补充产品，1 张 | 2026-09-24 | 同上 |
| F_Gismondi.jpg | Ernesto Gismondi（创始人）官方肖像，红底手持其设计的 Nur 灯，960×960 | https://www.artemide.com/en/company/designers/231/ernesto-gismondi | 文件名 designer/4865742 取自 Gismondi 官方设计师页；目检为 Gismondi 本人 | 2026-09-24 | Artemide 官方人物肖像，内部参考 |
| H1972_fabbrica.jpg | 1972 年 Artemide 工厂/总部建筑外景（黑白历史照，屋顶 Artemide 标识） | https://www.artemide.com/en/company/identity | 文件名 static/company/history/fabbrica-1972.jpg；官方历史时间线素材 | 2026-09-24 | Artemide 官方历史档案，内部参考 |
| H1959_alfa.jpg | 早期产品 ALFA（1959，Sergio Mazza，Artemide 首款灯）棚拍黑白历史照 | https://www.artemide.com/en/company/identity | 文件名 history/ALFA.jpg；官方历史素材 | 2026-09-24 | 同上 |
| H1967_eclisse.jpg | Eclisse（1967，Vico Magistretti）工作台历史照，设计师与多盏 Eclisse | https://www.artemide.com/en/company/identity | 文件名 history/eclisse.jpg；官方历史素材 | 2026-09-24 | 同上 |

## 未取到 / 舍弃说明

- **Mezzaluna（de Bevilacqua 半月形洗墙灯）——未取得**。经多轮检索，"Mezzaluna / Mezza Luna" 实为 Bruno Gecchelin 为 Skipper 设计的 1970 年代落地灯，并非 Artemide 产品；Artemide 官网 Carlotta de Bevilacqua 设计师页（/en/company/designers/19607/carlotta-de-bevilacqua）现役产品为 altrove、copernico、linealed-wallwasher、yang-led、empatia 等，无名为 Mezzaluna 的型号。按"拿不准舍弃、不得跨品牌混用"原则，未下载任何疑似图。
- **Edge —— 未取得**。补充产品中未能在 artemide.com 可靠定位到对应官方 subfamily 页与可验证型号图，宁缺毋滥。
- **Pregnana Milanese 现代总部/创新中心外景**：以官方历史时间线中的 1972 工厂外景（H1972_fabbrica.jpg）作为工厂/总部代表图；官网另有 "2015-New-Innovation-Centre" 历史条目，但本次未单独取其现代外景图。

## 备注

- Logo 来源说明：artemide.com 官网页头标识以图标字体（icon-artemide）实现，无独立位图/og:image/JSON-LD 可直接下载；故按官方生产字体中的同名 `.icon-artemide-logo` 矢量字形提取，属官网同款标识的矢量复原，非第三方拼凑，未做任何位图插值放大。
- 全部产品图均来自 artemide.com 官方 CDN（/contents/immagini/），文件名含型号，型号/代际经三级核对，无跨代混用。
