var xyz = document.getElementById('heading1'); //la doi tuong DOM dang tro vao doi tuong co ID la heading 1
// setTimeout(function () {
//   //xyz.innerText = "day la tieu de 10"; // thay the doan text
//   //xyz.innerHTML = "<p style='color:red'>Chuyen thanh chu mau do</p>"; //thay the toan bo content html
//   // xyz.style.color= 'green';
//   // xyz.style.marginLeft = '100px';
//   xyz.innerText = "day la doan text mau hong";
//   xyz.style.color= 'pink';
// },4000);

// var colorsxyz = ["green","red","violet","yellow","orange","pink"];
// var count = 0;
// setInterval(function () {
// 	xyz.style.color = colorsxyz[count%6];
// 	count++;
// },2000);

var heading = document.getElementsByClassName("heading"); //tap hop moi phan tu la 1 doi tuong
for (i=0;i<heading.length;i++){
	heading[i].style.color = "pink";
}

var heading1 = document.getElementsByTagName('h1');
//console.log(heading1);

var abc = document.querySelectorAll("h1.heading");
console.log(abc);

function ONOF() {
	xyz.style.color = "green";
}

function mO() {
	xyz.style.color = "orange";
}
function mO2() {
	xyz.style.color = "blue";
}

function kp(){
	console.log(event.keyCode);
}