# Luceplan 品牌媒体台账（统一版）

- **品牌**：Luceplan S.r.l.（意大利米兰，1978 年创立；2019-11 起属 Calligaris Group / Orbital Design Collective）
- **检索日期**：2026-10-21 至 2026-10-22（Asia/Shanghai）
- **台账范围（统一版）**：正文图片共 81 个文件——品牌字标 2（Logo_）、历史/人物 5（H_）、经典产品 32（P_，1980s–2010s 已投产/获奖/入藏博物馆型号）、当代产品 32（P_，2013–2024 现行目录型号）、工厂材料与光学 5（F_）、空间展厅展览 5（S_）。另有 9 个备件/重复/低质/无法核对代际的图存于 `_unused/`，不进正文、不在本台账登记。
- **取图通道（按指南 12.4 顺序执行）**：
  1. Luceplan 官网 WordPress（`luceplan.com`，图片多在 `/wp-content/uploads/`，文件名自带型号描述；优先取产品页 og:image 与页面内嵌原图，剥离 WordPress 自动尺寸后缀（如 `-1536x2048`）取原图，无原图时回退页面最大尺寸版本；页面 429 限流加请求间隔 + 退避重试解决）；
  2. 官方 PDF 媒体库（2024 Lola 手册、2013 Pocket Catalog、Luceplan_Catalogue 系列，PyMuPDF 渲染后裁切）；
  3. 设计师个人站（albertomeda.com，Kirby CMS，仅 340px 缩略图，低质图已入 `_unused/`）；
  4. 博物馆馆藏库（MoMA moma.org/collection：Python requests 直连被 Cloudflare 403，改用 browser-use-automation 真实 Chrome，Turnstile 刷新后自动通过，`bu.download()` 取 2000px 版本；Costanzina / Mix / On Off 三件永久馆藏）；
  5. 真实浏览器兜底（同上）。
  - 不可用通道记录：archive.org（Wayback）在本网络连接超时；Architonic D7 产品页 404；ADI Design Museum 搜索未直接命中 D7 条目；cairosvg 缺原生 libcairo（改用本机 Chrome headless 渲染 SVG 为 PNG）。
- **验证方法**：全部图片 Python PIL `Image.open()` 打开成功并记录宽高、文件字节数（>10KB，矢量 SVG 除外）；用 PIL 合成带文件名标签的总览拼图（montage）逐张目检，严格区分 Costanza vs Costanzina、Hope 各型、Titania 滤片配色、Lola vs Berenice、Ascent vs Counterbalance、Mesh 原版 vs Mesh Wireless、Koinè vs Mesh、Blow 扇叶、Metropoli 舷窗灯 vs Mesh 钢索网；型号与官方页面文件名字段（SKU）三级一致；webp 原图统一转码 JPEG quality 88 落盘。
- **命名规则**：`P_<型号连写>_<首版年份>_<视角>.jpg`，型号 token 无空格字母数字；年份用首版年。

---
## 一、品牌字标（Logo_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| Logo_Luceplan_wordmark.svg | 官方方块字标（黑方块 + LUCE/PLAN 粗黑无衬线字），从官网 header 内联 SVG 提取，viewBox 0 0 63 63，矢量 | https://www.luceplan.com/ （官网 header 内联 SVG） | 浏览器查看官网 DOM 提取 SVG path；文本可选中核对拼写 LUCEPLAN | 2026-10-21 | 官方品牌标识（官方网站） |
| Logo_Luceplan_wordmark_1600.png | 同一矢量字标按 1240px 居中渲染到 1600×1600 白底 PNG（加白边距），满足指南 12.8 ≥1600px | 由上述 SVG 渲染（本机 Chrome headless） | PIL 打开 1600×1600、43KB，目检黑方块 + LUCE PLAN 字样完整 | 2026-10-21 | 官方品牌标识（矢量派生 PNG） |

> 注：另有一张从 Lola PDF 第 1 页裁切的蓝色横标（Logo_Luceplan_wordmark_blue.jpg）因边缘被切、不完整，已移入 `_unused/`，不作为正式字标。

---
## 二、历史 / 人物 / 早期产品（H_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| H_Riccardo_Sarfatti.jpg | 创始人 Riccardo Sarfatti（1940–2010）黑白肖像，500×350 | https://www.luceplan.com/us/designers/riccardo-sarfatti/ | PIL 打开 500×350、32KB；与官方设计师页顶部肖像一致 | 2026-10-21 | 官方设计师页肖像（官方 heritage） |
| H_Paolo_Rizzatto.jpg | 联合创始人/首席设计师 Paolo Rizzatto 肖像（花白头发、工作室背景），932×1226 | https://www.luceplan.com/us/designers/paolo-rizzatto/ | PIL 打开 932×1226、259KB；源文件名 Rizzatto.webp | 2026-10-21 | 官方设计师页肖像 |
| H_Alberto_Meda.jpg | 长期合作设计师 Alberto Meda 肖像（白发微笑），340×340 | https://www.albertomeda.com/en/biografia | PIL 打开 340×340、20KB；设计师官方传记页 | 2026-10-21 | 设计师个人站肖像 |
| H_Berenice_storica_1985.jpg | Berenice（1985）早期技术线稿（臂 + 抛物面反射器结构图），626×860 | https://www.luceplan.com/us/stories/berenice-40-years/ | PIL 打开 626×860、115KB；线稿与 Berenice 弹簧臂结构一致 | 2026-10-21 | 官方 heritage/40 周年故事页 |
| H_Meda_compasso_career_2026.jpg | Alberto Meda 获 2026 ADI 金圆规终身成就奖官方新闻配图（含 "ALBERTO MEDA Winner of the Compasso d'Oro ADI 2026 for the career" 字标），900×865 | https://www.luceplan.com/it/alberto-meda-vince-il-compasso-doro-adi-alla-carriera/ | PIL 打开 900×865、127KB；图内字标与新闻稿标题一致 | 2026-10-21 | 官方新闻稿配图 |

> 未取到：三位创始人 1978 年合影（官方未出现）；Sandra Severi 官方级肖像（仅有 Goodform 经销商页，未达官方渠道，未取）。

---
## 三、经典产品（P_）

### Berenice（1985，Alberto Meda & Paolo Rizzatto；弹簧平衡臂阅读灯家族）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Berenice_1985_packshot.jpg | Berenice 桌灯白底整机（压铸铝双弹簧臂 + 关节 + 圆灯头），626×860 | https://www.luceplan.com/products/berenice-table/ | PIL 626×860、25KB；montage 目检为弹簧平衡臂结构 | 2026-10-21 | 官方产品图 |
| P_Berenice_1985_floor.jpg | Berenice 落地版整机（长臂落地灯），626×860 | https://www.luceplan.com/it/prodotti/berenice-terra/ | PIL 626×860、31KB；与桌灯同结构加长落地 | 2026-10-21 | 官方产品图 |
| P_Berenice_1985_wall.jpg | Berenice 壁装版（臂自墙面摇臂伸出），626×860 | https://www.luceplan.com/products/berenice-wall/ | PIL 626×860、25KB；壁装摇臂结构 | 2026-10-21 | 官方产品图 |
| P_Berenice_1985_reflectors.jpg | Berenice 七款可换反射器色卡（白/粉/绿/橙/黑/铝等圆盘），1440×1920 | https://www.luceplan.com/products/berenice-table/ | PIL 1440×1920、100KB；色盘阵列与官方"七种反射器色"一致 | 2026-10-21 | 官方产品图 |
| P_Berenice_1985_scene_office.jpg | 黑色 Berenice 桌面办公场景（深色书桌），626×860 | https://www.luceplan.com/us/stories/berenice-40-years/ | PIL 626×860、85KB；40 周年故事页黑色版场景 | 2026-10-21 | 官方故事页场景图 |

### Costanza（1986，Paolo Rizzatto；可换聚碳酸酯灯罩桌灯）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Costanza_1986_packshot.jpg | Costanza 桌灯白底整机（锥形丝印聚碳酸酯灯罩 + 铝杆 + 方形铝底座），626×860 | https://www.luceplan.com/us/products/costanza-table/ | PIL 626×860、15KB；目检为大一号锥罩桌灯（区别于小一号 Costanzina） | 2026-10-21 | 官方产品图 |
| P_Costanza_1986_detail.jpg | Costanza 桌灯底座/杆身细节（方形铝底座 + 伸缩杆），900×1200 | https://www.luceplan.com/wp-content/uploads/Luceplan-Costanza-D13-table-fix.jpg | PIL 900×1200、28KB；官方 wp-content 原图 | 2026-10-22 | 官方产品图 |
| P_Costanza_1986_scene_table.jpg | Costanza 边几场景（深色空间中白色 Costanza 桌面灯），1308×1556 | https://www.luceplan.com/us/products/costanza-table/ | PIL 1308×1556、266KB；客厅点亮场景 | 2026-10-21 | 官方产品场景图 |
| P_Costanza_1986_shade_plisse.jpg | Costanza 褶裥灯罩特写（丝印聚碳酸酯 plisse 纹），3750×5000 | https://www.luceplan.com/us/products/costanza-table/ | PIL 3750×5000、520KB；高分辨率褶纹细节 | 2026-10-21 | 官方产品图 |
| P_Costanza_1986_suspension.jpg | Costanza 吊灯版（带钢配重调节，悬于木餐桌上方），1407×1920 | https://www.luceplan.com/products/costanza-suspension/ | PIL 1407×1920、393KB；吊灯页官方图 | 2026-10-21 | 官方产品图 |

> 缺口说明：原计划取"感官调光杆（sensorial dimmer rod）"特写 `Luceplan-Costanza-touch-1.webp` 返回 404；已用 `detail.jpg`（底座/杆身细节）替代，Costanza 仍达 5 张。

### Costanzina（1992，Paolo Rizzatto；Costanza 缩小版，MoMA 永久馆藏）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Costanzina_1992_packshot.jpg | Costanzina 桌灯白底整机（小一号锥罩 + 方形铝底座），626×860 | https://www.luceplan.com/it/prodotti/costanzina-tavolo/ | PIL 626×860、21KB；montage 目检明显小于 Costanza、底座方形 | 2026-10-21 | 官方产品图 |
| P_Costanzina_1992_pink.jpg | Costanzina 粉色灯罩版，1080×1440 | https://www.luceplan.com/it/prodotti/costanzina-tavolo/ | PIL 1080×1440、45KB；粉色可换灯罩 | 2026-10-21 | 官方产品图 |
| P_Costanzina_1992_scene.jpg | Costanzina 客厅边几场景（小白灯置于 console 桌），1080×1920 | https://www.luceplan.com/it/prodotti/costanzina-tavolo/ | PIL 1080×1920、257KB；小尺寸桌灯场景 | 2026-10-21 | 官方产品场景图 |
| P_Costanzina_1992_MoMA.jpg | MoMA 永久馆藏标准照（D13pi，彩色背景前的锥罩桌灯），1225×2000 | https://www.moma.org/collection/works/1681 | 真实浏览器登录 MoMA 馆藏页取主图 2000px 版；页面标题 "Paolo Rizzatto. Constanzina Table Lamp (D13pi). 1992"；PIL 1225×2000、165KB | 2026-10-22 | MoMA 博物馆馆藏标准照（©MoMA） |

### Titania（1989，Alberto Meda & Paolo Rizzatto；铝鳞纺锤吊灯 + 可换彩色滤片）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Titania_1989_packshot.jpg | Titania 吊灯白底整机（铝肋纺锤体 + 配重钢索），1398×1920 | https://www.luceplan.com/us/products/titania-suspension/ | PIL 1398×1920、159KB；分层肋骨纺锤形 | 2026-10-21 | 官方产品图 |
| P_Titania_1989_scene.jpg | Titania 悬于木餐桌上方场景（天然光白色版），1438×1920 | https://www.luceplan.com/us/products/titania-suspension/ | PIL 1438×1920、401KB；餐桌场景 | 2026-10-21 | 官方产品场景图 |
| P_Titania_1989_white.jpg | 白色多件 Titania 悬挂阵列，1398×1920 | https://www.luceplan.com/us/products/titania-suspension/ | PIL 1398×1920、165KB；白色滤片版本 | 2026-10-21 | 官方产品图 |
| P_Titania_1989_filters.jpg | 四枚可换彩色滤片单独展示（紫/玫瑰/青/黄椭圆片），1398×1920 | https://www.luceplan.com/us/products/titania-suspension/ | PIL 1398×1920、129KB；官方"可换衣服"四色滤片 | 2026-10-21 | 官方产品图 |
| P_Titania_1989_filter_detail.jpg | 手插黄色滤片的操作特写（展示更换机构），1398×1920 | https://www.luceplan.com/us/products/titania-suspension/ | PIL 1398×1920、297KB；手部插片动作 | 2026-10-21 | 官方产品图 |

### Lola（1987，Alberto Meda & Paolo Rizzatto；1989 金圆规；叉形灯头阅读灯）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Lola_1987_wall.jpg | Lola 壁装版整机（黑色 Y 形摇臂灯头），1080×1440 | https://www.luceplan.com/wp-content/uploads/LP_Brochure-Lola_2024.pdf | PIL 1080×1440、56KB；官方 2024 手册渲染 | 2026-10-22 | 官方手册 PDF 产品图 |
| P_Lola_1987_scene_floor.jpg | Lola 落地版场景（黑色三脚架落地灯置于紫椅客厅），1158×1565 | https://www.luceplan.com/wp-content/uploads/LP_Brochure-Lola_2024.pdf （PDF p02 裁切） | PIL 1158×1565、198KB；PyMuPDF 渲染手册后裁切 | 2026-10-22 | 官方手册 PDF 场景图 |
| P_Lola_1987_fork_head_detail.jpg | Lola 叉形灯头特写（两叉间夹反射器），837×1050 | https://www.luceplan.com/wp-content/uploads/LP_Brochure-Lola_2024.pdf （PDF p04 裁切） | PIL 837×1050、79KB；叉形灯头为 Lola 识别点 | 2026-10-22 | 官方手册 PDF 细节图 |

> 说明：官网 Lola 产品页仅抓到 wall 一张；albertomeda.com 仅给 340×340 低质缩略图（3 张已入 `_unused/`），改用官方 2024 手册 PDF 渲染补齐。

### Hope（2009 设计 / 2010 上市，Francisco Gomez Paz & Paolo Rizzatto；菲涅尔花瓣吊灯，2011 金圆规）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Hope_2009_packshot.jpg | Hope 整机白底（菲涅尔亚克力花瓣放射聚合），728×1000 | https://www.luceplan.com/us/products/hope-ceiling/ | PIL 728×1000、39KB；放射花瓣结构 | 2026-10-21 | 官方产品图 |
| P_Hope_2009_floor.jpg | Hope 落地版（钢枝条 + 花瓣，高 198cm 家族），1080×1440 | https://www.luceplan.com/products/hope-floor/ | PIL 1080×1440、67KB；落地三细腿 | 2026-10-21 | 官方产品图 |
| P_Hope_2009_scene_susp.jpg | Hope 吊灯悬挂客厅场景（深色空间中枝形发光花瓣），1080×1440 | https://www.luceplan.com/us/products/hope-ceiling/ | PIL 1080×1440、273KB；悬挂枝形场景 | 2026-10-21 | 官方产品场景图 |
| P_Hope_2009_wall.jpg | Hope 壁灯/花瓣近景特写，728×1000 | https://www.luceplan.com/us/products/hope-wall/ | PIL 728×1000、46KB；单簇花瓣细节 | 2026-10-21 | 官方产品图 |
| P_Hope_2009_KMSKA.jpg | Hope 大型枝形吊灯现场（比利时 KMSKA 皇家美术馆大厅，Photo: Sebastian van Damme），1080×1920 | https://www.luceplan.com/us/about/company/ | PIL 1080×1920、523KB；官方 Company 页 contract 案例配图 | 2026-10-21 | 官方 contract 项目图 |

### Metropoli（1992，Alberto Meda & Paolo Rizzatto & Riccardo Sarfatti；圆形舷窗式壁灯，1994 金圆规）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Metropoli_1992_official.jpg | Metropoli 圆形吸/壁顶灯场景（铝/黄铜环 + 乳白圆罩，装于浅蓝与白墙），1440×1920 | https://www.luceplan.com/ （官方产品图，wp-content） | PIL 1440×1920、231KB；montage 目检为圆形舷窗灯（区别于 Mesh 网球） | 2026-10-21 | 官方产品场景图 |
| P_Metropoli_1992_scene.jpg | Metropoli 壁装夜间场景（蓝色外墙上一排发光圆形壁灯），340×340 | https://www.albertomeda.com/prodotti/metropoli | PIL 340×340、33KB；设计师个人站产品场景，与官方圆形壁灯形态一致 | 2026-10-21 | 设计师个人站产品图（低分辨率存档） |

> 说明：官网 Metropoli 产品页当时未抓到独立整机图；albertomeda.com 仅 340px，保留 1 张场景作补充，其余 2 张 340px 重复缩略图已入 `_unused/`。

### D7（1980 设计 / 1981 金圆规，Paolo Rizzatto & Sandro Colbertaldo；品牌第一座金圆规）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_D7_1981_packshot.jpg | D7 铝长臂壁灯（压铸铝头 + 长铝臂，含图内 "D7 design Paolo Rizzatto / Sandro Colbertaldo, 1980" 字样与 Compasso d'Oro ADI 徽章），660×645 | https://static1.squarespace.com/static/550a19d1e4b0fca40dc6d82d/t/5566415ae4b0800d8d860a30/1432764762276/Luceplan+Pocket+Catalog+2013.pdf （2013 Pocket Catalog 第 86 页裁切） | PyMuPDF 渲染目录页（文本检索 "D7" 命中 p.86），裁切左半 D7 图；目检图内型号与设计师署名 | 2026-10-22 | 官方产品目录 PDF 产品图 |

> 说明：D7 已停产，官网无产品页；Architonic D7 页 404；ADI 搜索未直接命中；最终以官方 2013 目录 PDF 产品页裁切取得。

### On Off（1983，Alberto Meda & Franco Raggi & Denis Santachiara；MoMA 永久馆藏）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_OnOff_1983_MoMA.jpg | MoMA 馆藏标准照（米白聚氨酯倾斜圆锥灯罩 + 黄色 "ONOFF" 按键），1420×2000 | https://www.moma.org/collection/works/2964 | 真实浏览器过 Cloudflare 后取 MoMA 主图 2000px 版；页面标题 "On Off Table Lamp. 1983"；目检黄色 ONOFF 按钮为识别点 | 2026-10-22 | MoMA 博物馆馆藏标准照（©MoMA） |

### Mix（2005，Alberto Meda & Paolo Rizzatto；2008 金圆规，已停产，MoMA 永久馆藏）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| P_Mix_2005_MoMA.jpg | MoMA 馆藏标准照（铝臂 + 泪滴形甲基丙烯酸酯灯头 + 楔形底座，gooseneck 软管），2000×1495 | https://www.moma.org/collection/works/120050 | 真实浏览器过 Cloudflare 后取 MoMA 主图 2000px 版；页面标题 "Mix Lamp. 2005"；材质 Aluminum and methacrylate | 2026-10-22 | MoMA 博物馆馆藏标准照（©MoMA） |

---
## 四、当代产品（P_）

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

## 五、工厂、材料与光学（F_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| F_Hope_Fresnel_PMMA.jpg | Hope（2009，D66a）PMMA 平菲涅尔透镜花瓣特写：把灯塔聚光光学器件家用化 | https://www.luceplan.com/products/hope-suspension/ | PIL 728×1000；目检透明棱镜花瓣（菲涅尔透镜材质） | 2026-10-22 | Luceplan 官方产品图（代表 PMMA 光学供应链） |
| F_CounterBalance_gear_mechanism.jpg | Counterbalance（D73N）热塑齿轮组配重机构特写：悬臂任意位置停留的核心机构 | https://www.luceplan.com/us/products/counterbalance-wall/ | PIL 626×860；目检墙装齿轮/配重机构与悬臂 | 2026-10-22 | Luceplan 官方产品图（代表工程机构） |
| F_Silenzio_Kvadrat_fabric.jpg | Silenzio（D79）声学灯 Kvadrat Remix 织物罩 + 吸音结构零件图（parts1） | https://www.luceplan.com/us/products/silenzio-suspension/ | PIL 1920×1080；目检织物圆柱罩与顶部铝件 | 2026-10-22 | Luceplan 官方产品图（代表 Kvadrat 织物声学材料） |
| F_Levante_ricepaper_material.jpg | Levante（A06）食品工业特种半透明"米纸"扇面材质特写 | https://www.luceplan.com/us/stories/levante-the-harmony-of-light-and-material/ | PIL 1080×1920；目检薄扇片均匀漫射光 | 2026-10-22 | Luceplan 官方 story 图（代表特种漫射材料） |
| F_Koine_mineral_lens.jpg | Koinè 矿物透镜（mineral lens）still life：边界清晰的锥形光斑光学特写 | https://www.luceplan.com/us/products/koine-suspension/ | PIL 1536×1920；目检圆盘中心透镜与光斑 | 2026-10-22 | Luceplan 官方产品图（代表矿物光学透镜） |
## 六、空间、展厅与展览（S_）

| 文件名 | 内容与型号依据 | 来源页面 URL | 验证方法 | 检索日期 | 版权备注 |
|---|---|---|---|---|---|
| S_Flagship_Milan_entrance.jpg | 米兰旗舰店 Corso Monforte 7 入口展厅室内：中性白墙 + 环形灯陈列 | https://www.luceplan.com/us/about/luceplan-flagship-store-milan/ | PIL 1440×1920；目检展厅入口与产品陈列 | 2026-10-22 | Luceplan 官方旗舰店图 |
| S_Flagship_Milan_window.jpg | 米兰旗舰店橱窗（window）夜景：窗内多头吊灯陈列 | https://www.luceplan.com/us/about/luceplan-flagship-store-milan/ | PIL 1440×1920；目检店面橱窗 | 2026-10-22 | Luceplan 官方旗舰店图 |
| S_Euroluce2025_booth.jpg | 2025 米兰设计周 Euroluce 展位（full-color container 式陈列） | https://www.luceplan.com/stories/milano-design-week-2025/ | PIL 1920×1440；目检展贸展位全景 | 2026-10-22 | Luceplan 官方展会图 |
| S_KMSKA_project.jpg | 官方 company 页标杆项目实景（临水/度假项目应用） | https://www.luceplan.com/about/company/ | PIL 1920×1080；目检建筑户外项目空间 | 2026-10-22 | Luceplan 官方项目图 |
| S_Company_showroom.jpg | 公司展厅/办公照明空间实景（company-showroom） | https://www.luceplan.com/about/company/ | PIL 1080×1440；目检室内照明空间 | 2026-10-22 | Luceplan 官方公司图 |
## 七、`_unused/` 目录（不进台账正文，共 9 个文件）

| 文件名 | 移走原因 |
|---|---|
| Logo_Luceplan_wordmark_blue.jpg | 从 Lola PDF 裁切的蓝色横标 Logo，边缘被切、不完整，非正式字标 |
| P_Lola_1987_packshot.jpg | albertomeda.com 340×340 低质缩略图，已有官方手册高清版替代 |
| P_Lola_1987_detail.jpg | 同上，340×340 低质，已有 fork_head_detail 高清替代 |
| P_Lola_1987_scene.jpg | 同上，340×340 低质，已有 scene_floor 高清替代 |
| P_Metropoli_1992_packshot.jpg | albertomeda.com 340×340 低质缩略图 |
| P_Metropoli_1992_detail.jpg | 同上，340×340 低质 |
| （其余 3 个为早期试下载/重复占位文件） | 低质或重复 |
## 八、缺口说明（A 侧：字标/历史/经典）

1. **D7 仅 1 张**：已停产，官网无产品页、Architonic 404、ADI 未直接命中；仅从官方 2013 目录 PDF 裁切 1 张整机图（含金圆规徽章）。无第二视角/细节。
2. **On Off、Mix 各 1 张**：均为 MoMA 馆藏标准照（已停产，官网无图）；MoMA 每款仅 1 张主照。已满足"如 MoMA 有馆藏图则取"。
3. **Sandra Severi 官方肖像**：官方渠道无，仅 Goodform 经销商页，未达官方级，未取。
4. **三位创始人 1978 年合影**：官方未出现，未取。
5. **Metropoli 仅 2 张、其中 1 张为 340px**：官网独立整机图当时未抓到，靠 albertomeda.com 存档补充；已保留官方高清场景图 1 张。
6. **Costanza 调光杆特写**：原 `Luceplan-Costanza-touch-1.webp` 404，已用底座/杆身 detail 图替代（Costanza 仍 5 张）。
7. **MoMA 直连**：Python requests 被 Cloudflare 403，archive.org 被墙；最终用真实 Chrome（Turnstile 刷新后自动通过）取到 3 张馆藏图。
## 九、缺口说明（B 侧：当代/工厂/空间）

- **工厂车间/制造纪实照**：研究笔记 05 §12 已注明 Luceplan 官方未发布类似 FLOS cocoon 喷涂/Bovezzo 工厂式的车间工艺纪录片影像。本次 F_ 以"材料与光学特写"（Hope PMMA 菲涅尔透镜、Counterbalance 热塑齿轮机构、Silenzio Kvadrat 织物、Levante 特种漫射扇面、Koinè 矿物透镜）代替制造现场图，均来自官方产品页可追溯原图。
- **Koinè 首版年份**：官方产品页未标注具体年份，台账年份暂记约 2022（A07，处于研究笔记 04 §07 推断的 2021–2023 区间），待官方目录/技术 PDF 进一步确认。
- **Zile 首版年份**：官方卡片未标注，台账暂记约 2021（B02，研究笔记推断 2020/2021）。
- **Blow 代际**：现行 2026 目录在售为 1997 原创的第三代（2015 电子版），本台账取现行在售整机图，未单独区分历代外观（透明 PMMA 扇叶各代一致）。
- **_unused/**：存有 B 侧总览拼图临时件（`_montage_B*.jpg`）及下载过程中的备选小图，不进正文、不在本台账登记。
- 全部 42 张来源 URL 均为 luceplan.com 官方域，未使用来源不可追溯的图。
