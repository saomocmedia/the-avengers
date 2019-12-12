var h1 = $("#heading1"); //tao 1 selector tuong duong voi css ben kia viet vao
var hh = $(".heading");
//var varName = $("selector of css");
//h1.css("color","red");
$(".heading").css("color","pink");
$("input[name=email]").css("font-size","12px");
$("input[type=text]").css("font-size","12px");

$(".heading").css({
	"background-color":"green",
	"padding-top":"40px",
	"font-size":"30px",
});
var newtext = $(".heading").text()+"xin chao abc xyz";
$(".heading").text(newtext);

$(".heading").html("<p>FPT Aptech</p>");//lam lai thay the
$(".heading").append("<p>Chao mung gia nhap</p>");//chen them vao

// $(".heading").addClass("t1909e");
// $(".heading").removeClass("t1909e");

if($(".heading").hasClass("t1909e")){
	$(".heading").removeClass("t1909e");
}else{
	$(".heading").addClass("t1909e");
}

function ON(){
	//$(".heading").show();
	$(".heading").slideDown(300);//fadeIn
}

function OFF(){
	//$(".heading").hide();
	$(".heading").slideUp(300);//fadeOut
}

function ONOFF(){
	$(".heading").slideToggle();//toggle,fadeToggle ...
}

function BIGSIZE(){
	var h = $(".heading").height();
	//var w = $(".heading").width();
	h = h + 50;
	$(".heading").animate({ //animate: tao su dich chuyen
		"height": h + "px"
	},300);
}

function SMALLSIZE(){
	var h = $(".heading").height();
	h = h - 50;
	$(".heading").animate({
		"height": h + "px"
	},300);
}

$(".btn-on").bind("click",function(){
	$(this).css("color","red");
	$(".btn-off").css("color","#000");
	$(".heading").slideDown();
});

$(".btn-off").bind("click",function(){
	$(this).css("color","red");
	$(".btn-on").css("color","#000");
	$(".heading").slideUp();
});

$(".btn-onoff").bind("click",function(){
	$(".heading").slideToggle();
});

$(".menu ul > li").bind("mouseenter",function(){
	var sub = $(this).find(".submenu");
	$(sub).slideDown();
});
$(".menu ul > li").bind("mouseleave",function(){
	$(".submenu").hide();
});

//xoa 5 khoi truoc roi tu them chinh no (this)
















