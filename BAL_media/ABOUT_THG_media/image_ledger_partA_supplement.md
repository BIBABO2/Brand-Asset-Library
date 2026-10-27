# THG Paris A组补充图片台账 — image_ledger_partA_supplement.md

- 检索日期：2026-10-27
- 本文件为 partA 的补充，不修改已有台账
- 验证方法：Python 3.14 + Pillow 12.3，逐张 `Image.open().load()` 解码

---

## 补充取图总结

| 组别 | 目标 | 实到 | 状态 |
|---|---|---|---|
| 1. Pétale de Cristal × Baccarat | 3 | 5 | 超额完成 |
| 2. Art Déco A54 | 3 | 7 | 超额完成 |
| 3. Faubourg G2 | 3 | 2 | 不足（CDN diapos 为占位图，仅取到 banner+product） |
| 4. Poèmes Chantal Thomass | 2–3 | 4 | 超额完成 |
| 5. 巴黎展厅 | 2–3 | 3 | 完成（含精品店内景+展会+合作品牌墙） |
| 6. 饰面色板 | 2 | 2 | 完成 |
| 7. 宫殿酒店项目 | 3 | 3 | 完成（香格里拉×2 + 雅典娜广场×1） |
| 8. 游艇定制 | 1 | 3 | 超额完成（Orient Express Corinthian 三角度） |
| **合计** | **18–22** | **29** | |

### 失败/缺口说明

- **Faubourg G2**：CDN `/content/collections/G2J/COLL_G2J_Diapo_*.jpg` 全部返回 50640B 占位图，说明该系列无轮播 diapo。仅取到 banner（media-library）+ 产品白底图（37367-A02.png）。白瓷版/Howlite 版需后续从 PDF 目录提取。
- **巴黎 152 bd Haussmann 旗舰店外观实景照**：未找到独立街拍/媒体报道图。现有展厅图为 THG 精品店内景（玻璃门廊+中央展柜）及展会展位，非奥斯曼大道旗舰店外观。
- **Poèmes 图片分辨率偏低**（360×480–640×480）：来源为 2010 年 Maison à Part 在线文章，原图已无法获取更高分辨率。
- **Hotel de Crillon / Dorchester London / George V Spa**：未找到带明确 THG 龙头标识的官方实拍图。香格里拉巴黎浴室图（Pierre-Yves Rochon 设计，THG 合同目录列明参考项目）可作替代。

---

## 逐图台账

### 1. Pétale de Cristal × Baccarat（U6E, 2012, Pierre-Yves Rochon）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_PetaleDeCristal_2012_banner.jpg | U6E 系列 banner（fine gold thread 透明水晶金边版） | https://www.thg-paris.com/france/en/collection/petale-de-cristal-clear-crystal-fine-gold-thread | 1600×1000 | 78,933 |
| P_PetaleDeCristal_2012_scene_01.jpg | 系列场景图1 | 同上 | 1600×2133 | 130,918 |
| P_PetaleDeCristal_2012_scene_02.jpg | 系列场景图2 | 同上 | 1600×2133 | 206,449 |
| P_PetaleDeCristal_2012_scene_03.jpg | 系列场景图3 | 同上 | 1600×2133 | 300,155 |
| P_PetaleDeCristal_2012_scene_04.jpg | 系列场景图4 | 同上 | 1600×2133 | 288,151 |

### 2. Art Déco A54（Delépine, 1970s）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_ArtDeco_1970s_01.jpg | A54 系列 Diapo 01 | CDN: /content/collections/A54/COLL_A54_Diapo_01.jpg | 1600×2133 | 240,076 |
| P_ArtDeco_1970s_02.jpg | A54 系列 Diapo 02 | CDN: COLL_A54_Diapo_02.jpg | 1600×2133 | 395,287 |
| P_ArtDeco_1970s_03.jpg | A54 系列 Diapo 03 | CDN: COLL_A54_Diapo_03.jpg | 1600×2133 | 178,213 |
| P_ArtDeco_1970s_04.jpg | A54 系列 Diapo 04 | CDN: COLL_A54_Diapo_04.jpg | 1600×2133 | 292,013 |
| P_ArtDeco_1970s_05.jpg | A54 系列 Diapo 05 | CDN: COLL_A54_Diapo_05.jpg | 1600×2133 | 370,438 |
| P_ArtDeco_1970s_06.jpg | A54 系列 Diapo 06 | CDN: COLL_A54_Diapo_06.jpg | 1600×2133 | 212,784 |
| P_ArtDeco_1970s_07.jpg | A54 系列 Diapo 07 | CDN: COLL_A54_Diapo_07.jpg | 1600×2133 | 96,632 |

### 3. Faubourg G2J（Pierre-Yves Rochon, 2005起）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_Faubourg_G2J_banner.jpg | G2J 白瓷杠杆版 banner | https://www.thg-paris.com/international/en/collection/faubourg-white-porcelain-with-lever/152m | 1600×1000 | 150,475 |
| P_Faubourg_G2J_product_chrome.jpg | 产品 37367-A02 铬色白底图 | CDN: /content/products/37367/37367-A02.png | 1200×1200 | 283,987 |

### 4. Poèmes（Chantal Thomass × Bernardaud, ~2009–2010）

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| P_Poemes_2009_bathroom_overview.jpg | Poèmes 浴室全景（Chantal Thomass 为 THG 设计） | https://www.maisonapart.com/edito/.../chantal-thomass...d-3765.php | 360×480 | 25,878 |
| P_Poemes_2009_accessories_detail.jpg | Poèmes 配件细节（Bernardaud 瓷） | 同上 | 360×480 | 25,992 |
| P_Poemes_2009_basin_mixer.jpg | Poèmes 三孔面盆龙头（铬色） | 同上 | 360×480 | 23,678 |
| P_Poemes_2009_bathtub.jpg | Poèmes 浴缸（Aquilex 白瓷底座） | 同上 | 640×480 | 13,445 |

### 5. 展厅/空间 S 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| S_showroom_THG_boutique_interior.jpg | THG 精品店内景（玻璃门廊+中央圆形展柜） | http://mp.weixin.qq.com/s/Sgz45relp1kFdDV-IQ41hQ | 1080×558 | 101,816 |
| S_showroom_tradeshow_booth_products.jpg | THG 展会展位（雨燕系列+考维尔+Icon-X 展示台） | https://www.trendshome.com.cn/detail/28904 | 866×1299 | 89,856 |
| S_showroom_boutique_gold_wall_partners.jpg | THG 精品店金色墙面（Baccarat/Christofle/Daum/Haviland/Lalique/Bernardaud 合作品牌墙） | http://www.upchengdu.com/forum.php?tid=40627 | 1920×1441 | 205,507 |

### 6. 饰面色板 F 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| F_finishes_panel_01.jpg | Amalgame 色板/饰面排列（amalgame-coloris-02） | https://www.thg-paris.com/international/en/blog/thg-paris-tap-finishes | 1600×1135 | 145,306 |
| F_finishes_guillochage_detail.jpg | Amalgame 雕花白瓷工艺细节（guillochage03） | https://www.thg-paris.com/uk/fr/projets/sur-mesure | 1600×1199 | 155,477 |

### 7. 宫殿级酒店项目 S 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| S_hotel_ShangriLa_Paris_bathroom.jpg | 香格里拉巴黎酒店浴室（Pierre-Yves Rochon 设计，THG 合同目录列明参考项目） | https://www.outoria.com/travel/shangri-la-paris/ | 1800×1200 | 180,314 |
| S_hotel_ShangriLa_Paris_blue_suite.jpg | 香格里拉巴黎蓝色套房浴室（金箔/蓝丝绒/古典线脚） | https://guide.michelin.com/sg/zh_CN/hotels-stays/paris/shangrila-hotel-paris-545 | 1072×1072 | 291,850 |
| S_hotel_PlazaAthenee_Eiffel_suite.jpg | 雅典娜广场酒店艾菲尔套房浴室（马赛克浴缸+铁塔景观镜） | https://www.fivestaralliance.com/paris/signature-eiffel-suites-at-hotel-plaza-athenee | 800×401 | 81,739 |

### 8. 游艇定制 S 组补充

| 文件名 | 内容依据 | 来源 URL | 宽高 | 字节 |
|---|---|---|---|---|
| S_yachting_OrientExpress_Corinthian_suite.jpg | Orient Express Corinthian 游艇套房浴室（Grand Central/Estrella 系列） | https://www.thg-paris.com/uk/fr/orient-express-corinthian | 1600×2400 | 424,816 |
| S_yachting_OrientExpress_Corinthian_deck.jpg | 游艇甲板层（deck7） | 同上 | 1600×1067 | 279,102 |
| S_yachting_OrientExpress_Corinthian_Bonifacio.jpg | 游艇停泊 Bonifacio 外景 | 同上 | 1600×1718 | 485,684 |
