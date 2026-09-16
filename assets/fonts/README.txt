展示字体 Erotique 的放置位置
================================

把 Erotique 字体文件放进本目录（文件名区分大小写，建议使用下列任一名称）：

  Erotique.woff2   ← 推荐，体积最小
  Erotique.woff
  Erotique.otf
  Erotique.ttf

然后在项目根目录运行：

  node tools/build_site.js

构建脚本会自动生成 assets/fonts.css 中的 @font-face 规则，首页大标题
（BRAND ASSET LIBRARY）、品牌名与列表中的品牌名称都会改用该字体；
未放入字体文件时，会依次回退到 Bodoni MT / Didot / Georgia 等本机衬线体。

如果字体已安装在操作系统里（字族名为 Erotique），无需放入文件也会自动生效。
