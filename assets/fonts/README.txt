展示字体说明
================

首选字体：Erotique
  站点会优先使用本机已安装的 Erotique（@font-face 的 local() 源）；
  把 Erotique.woff2 / .woff / .otf / .ttf 放进本目录后重新构建，
  访客端也会统一使用 Erotique。

兜底字体：BrandDisplay（Cormorant Garamond，法式 Garamond 风格，OFL 开源许可）
  在 Erotique 不可用时渲染，避免出现生硬的本机 Didone 字体。

  BrandDisplay-400.woff2       常规
  BrandDisplay-500.woff2       中粗
  BrandDisplay-400i.woff2      斜体
  BrandDisplay-400-ext.woff2   扩展拉丁字符
  BrandDisplay-500-ext.woff2
  BrandDisplay-400i-ext.woff2
  OFL-CormorantGaramond.txt    字体许可

命名规则：BrandDisplay-<字重><i=斜体><-ext=扩展拉丁>.woff2。
新增文件后运行 node tools/build_site.js，构建脚本会按文件名自动生成
assets/fonts.css 里的 @font-face 规则（含 unicode-range）。

如果要改用其他字体，把字体文件按同样规则命名放进本目录即可；
若放入 Erotique.woff2（或 .woff/.otf/.ttf），会被注册为 Erotique 字族，
在 assets/site.css 的 --display 变量里把它排到 BrandDisplay 之前即可优先使用。
