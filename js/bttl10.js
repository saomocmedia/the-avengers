const customer = {
	name:"",
	address:"",
	telephone:"",
	showInfo : function () {//khai bao thong tin
		console.log("showInfo"+this.name+" - "+this.address+" - "+this.telephone);
	},
	setInfo: function (nameX,telephoneX,addressX){ //dang ky khai sinh
		this.name = nameX;
		this.telephone = telephoneX;
		this.address = addressX;
		return this;
	},
};

var customerArray = [];
var c1 = Object.create(customer);
c1.setInfo("Trinh Quang Hoa","99999","Bac Giang");
customerArray.push(c1);

var c2 = Object.create(customer);
customerArray.push(c2.setInfo("Nguyen Van An","08888","Hanoi"));

customerArray.push(Object.create(customer).setInfo("Pham Duc Hiep","07777","Campuchia"));

customerArray.map (function (value,index){
	value.showInfo();
})