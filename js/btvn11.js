// //Cach 1
// function changeTab(n){
// 	$(".list-tab a").remove("active");
// 	$(".content-group li").removeClass("active");
// 	$(".list-tab a.tab-"+n).addClass("active");
// 	$(".content-group .li-"+n).addClass("active");
// }



//Cach 2: loi ich che giau vi sao chay duoc
$("a[data-toggle=tab]").bind('click', function() {//vet tat ca doi tuong a co gia tri la data-toggle="tab"
	$("a[data-toggle=tab").removeClass('active');//xoa toan bo tab
	$(this).addClass('active');//lay chinh tab cua no
	$(".content-group li").removeClass('active');//an tat ca content
	var target = $(this).attr("data-target");//lay gia tri thuoc tinh hien len "li-1"
	$("."+target).addClass('active');//cho hien thi len
});