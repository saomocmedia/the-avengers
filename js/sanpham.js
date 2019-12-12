$(".left .btn").bind("click",function () {
    var x= parseInt($(".mid .row .btn").text());
    x= x -1;
    $(".mid .row .btn").text(x);
})
$(".right .btn").bind("click",function () {
    var x= parseInt($(".mid .row .btn").text());
    x= x +1;
    $(".mid .row .btn").text(x);
})

function red1() {
    $(".iconsao1 .glyphicon-star").css("color","red");
}
function red2() {
    $(".iconsao2 .glyphicon-star").css("color","red");
}
function red3() {
    $(".iconsao3 .glyphicon-star").css("color","red");
}
function red4() {
    $(".iconsao4 .glyphicon-star").css("color","red");
}
function red5() {
    $(".iconsao5 .glyphicon-star").css("color","red");
}
function blue() {
    $(".iconsao1 .glyphicon-star").css("color","#81eef0");
    $(".iconsao2 .glyphicon-star").css("color","#81eef0");
    $(".iconsao3 .glyphicon-star").css("color","#81eef0");
    $(".iconsao4 .glyphicon-star").css("color","#81eef0");
    $(".iconsao5 .glyphicon-star").css("color","#81eef0");
}
