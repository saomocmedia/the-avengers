var x;
x = 10;
var y = 20;

//console.log("Tong cua x+y= ");
//console.log(x+y);
x = "hello";
//console.log("tong cua x+y= ");
//console.log(x+y);
//console.log(x+(y+10));

var arr = [];
arr[0] = 123;
arr[1] = "xin chao";
arr[3] = [1,2,3,4];
arr[3][4] = [4,3,2,"world"];
//console.log(arr);

arr.push(4);/*push = nap them vao*/
arr.push(7);
arr.push(9);
//console.log(arr);

var xyz = [];
for (var i=0;i<100;i++){
	xyz.push(123+i);
}
xyz.push(9999);
xyz.push(9999);
xyz.push(9999);
xyz.push(9999);
for(i=0;i<xyz.length;i++){
	if(xyz[i] %2 ==0){
		console.log(xyz[i]);
	}	
}
xyz.map(function (value,index){//day la kieu vong lap foreach 
	if(value%2==0){
		console.log("gia tri: "+value+" tai vi tri: "+index);
	}	
});

tinhtong(6,61);
inratong(5,71);
inratong(4,"hello");
function tinhtong(a,b){
	return a+b;
}
function inratong(a,b){ //khai bao ham
	console.log(a+b);
}
tt= ()=>{ // => chinh la function, day la cach viet moi
	console.log("xin chao cac ban");
};
tt();

ketqua();
function ketqua() {
	var x = parseInt(Math.random()*10);
	console.log("ngau nhien"+x);
	var x1 = firstFibo(x);
	var x2 = firstFibo(x1);
	nextFibo(x1,x2,x+1000000000);
	console.log("Count: "+xyz);
}
function firstFibo(a) {
	x1 = 0;x2=1;x3=1;
	for (;x1+x2<a;){
		x1=x2;
		x2=x3;
		x3=x1+x2;
	}
	return x2+x3;
}
function nextFibo(x1,x2,max) {
	if (x1 <= max){
		console.log(x1);
	}
	if (x2 <=max){
		console.log(x2);
	}
	for (;x1+x2<max;){
		x3 = x1+x2;
		console.log(x3);
		x1=x2;
		x2=x3;
	}
}

//alert("cam tre em duoi 18 tuoi");
//prompt("nhap tuoi");
//var pr = prompt("nhập tuổi");
//console.log(pr);

//var cf = confirm("are you sure");
//console.log(cf);

//setTimeout(funtion () {} , 3000);
setTimeout(function () {
	alert("day la viec lam sau 3s");
}, 3000);

var i=0;
var ss = setInterval(function (){
	i++;
	console.log("Het 3s - lan thu "+i);
	if(i>10){
		clearInterval(ss);
	}
},3000);

var person = {
				name:"Lê Văn Nam",
				age: 18,
				address:'Hà Nội',
				mark: 5,
				className:'T1909E'
			};
//cách dùng thuộc tính: object_name.attribute
console.log(person.name+' - '+person.age+' - '+person.address+' - '+person.className+' - '+person.mark);
person.mark = 8;
console.log(person.name+' - '+person.age+' - '+person.address+' - '+person.className+' - '+person.mark);
//tạo thêm thuộc tính
person.prevMark = 5;

// var dog = {
// 	dogType: "Bergie",
// 	telephone: "0912345678",
// 	jump : function () {
// 		console.log("jumping...");
// 	},
// 	calling: function() {
// 		console.log("calling..."+this.telephone);
// 	}
// };
// //objectName.methodName()
// dog.jump();
// dog.calling();

const dog = {
	dogType: "Bergie",
	telephone: "0912345678",
	jump : function () {
		console.log("jumping...");
	},
	calling: function() {
		console.log("calling..."+this.telephone);
	},
	gogo: function (){
		let self = this;
		setInterval(function (){
			console.log("go go "+self.dogType);
			},3000
		);
		console.log("go go "+this.dogType);
	}
};

var dog1 = Object.create(dog);
var dog2 = Object.create(dog);
var dog3 = Object.create(dog);
var dog4 = Object.create(dog);

//objectName.methodName()
dog1.dogType = "Alaska";
dog2.dogType = "Husky";
dog3.dogType = "Becgie";
dog4.dogType = "Shiba";

dog1.gogo();
dog2.gogo();
dog3.gogo();
dog4.gogo();



