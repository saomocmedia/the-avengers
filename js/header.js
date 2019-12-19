if (localStorage.getItem("header") === null){
    var header = "<header class=\"section\">\n" +
        "\t<div class=\"container\">\n" +
        "\t\t<div class=\"row\">\n" +
        "\t\t<div class=\"col-md-3 logo text-center\">\n" +
        "\t\t\t<a href=\"#\"><img src=\"../images/logo-tigersugar.png\" alt=\"\"></a>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"col-md-9 banner-top\">\n" +
        "\t\t\t<img src=\"../images/banner-head.jpg\" alt=\"\">\n" +
        "\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t</div>\n" +
        "</header>\n" +
        "<section class=\"section abc\">\n" +
        "\t<div class=\"container\">\n" +
        "\t\t<div class=\"menu\">\n" +
        "\t\t\t<div class=\"row\">\n" +
        "\t\t\t\t<div class=\"col-md-9\">\n" +
        "\t\t\t\t\t<ul>\n" +
        "\t\t\t\t\t\t<li><a href=\"#\">Trang chủ</a></li>\n" +
        "\t\t\t\t\t\t<li><a href=\"view/gioithieu.html\" target=\"_blank\">Giới thiệu</a></li>\n" +
        "\t\t\t\t\t\t<li><a href=\"view/menu.html\" target=\"_blank\">Menu</a></li>\n" +
        "\t\t\t\t\t\t<li><a href=\"view/blog.html\" target=\"_blank\">Tin tức</a></li>\n" +
        "\t\t\t\t\t\t<li><a href=\"view/lienhe.html\" target=\"_blank\">Liên hệ</a></li>\n" +
        "\t\t\t\t\t</ul>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t<div class=\"col-md-3\">\n" +
        "\t\t\t\t\t<span class=\"hotline\"><a href=\"tel:0988888888\">Hotline: 0988888888</a></span>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t</div>\n" +
        "</section>"
    localStorage.setItem("header",header);
}
$("body").prepend(localStorage.getItem("header"));