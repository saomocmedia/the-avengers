if (localStorage.getItem("header") === null){
    var header = "<header class=\"section\">\n" +
        "        <div class=\"container\">\n" +
        "            <div class=\"logo\">\n" +
        "                <a href=\"#\"><img src=\"../images/logo-tigersugar.png\" alt=\"\"></a>\n" +
        "            </div>\n" +
        "            <div class=\"banner-top\">\n" +
        "            \t<img src=\"../images/banner-head.jpg\" alt=\"\">\n" +
        "            </div>\n" +
        "            <div class=\"cart-icon\">\n" +
        "            \t\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </header>\n" +
        "    <section class=\"section abc\">\n" +
        "    \t<div class=\"container\">\n" +
        "        \t<div class=\"menu\">\n" +
        "                <ul>\n" +
        "                    <li><a href=\"#\">Trang chủ</a></li>\n" +
        "                    <li><a href=\"view/gioithieu.html\" target=\"_blank\">Giới thiệu</a></li>\n" +
        "                    <li><a href=\"view/menu.html\" target=\"_blank\">Menu</a></li>\n" +
        "                    <li><a href=\"view/blog.html\" target=\"_blank\">Tin tức</a></li>\n" +
        "                    <li><a href=\"view/lienhe.html\" target=\"_blank\">Liên hệ</a></li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "\t\t</div>\n" +
        "\t</section>"
    localStorage.setItem("header",header);
}
$("body").prepend(localStorage.getItem("header"));