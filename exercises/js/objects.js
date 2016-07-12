//Object with five properties.
var plan1 = {
	name: "Basic",
	price: 3.99,
	space: 100,
	transfer: 1000,
	pages: 10
};

//Constructor function with six properties and one method.

function Plan (name, price, space, transfer, pages, discountMoths){
	this.name = name;
	this.price = price;
	this.space = space;
	this.transfer = transfer;
	this.pages = pages;
	this.discountMoths = discountMoths;
	this.calcAnnual = function(percentIfDisc){
		var bestPrice = this.price;
		var currDate = new Date();
		var thisMo = currDate.getMonth();
		for(var i = 0; i < this.discountMoths.length; i++){
			if(this.discountMoths[i] === thisMo){
				bestPrice = this.price * percentIfDisc;
				break;
			}
		}
		return bestPrice * 12;
	};
}

// Creating the Objects
var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [6,7]);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50, [6,7,11]);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500[6,7]);

//Prototype.- It shares the method with all objects. It isn't a copy.
Plan.prototype.calcAnnual = function(percentIfDisc){
	var bestPrice = this.price;
	var currDate = new Date();
	var thisMo = currDate.getMonth();
	for(var i = 0; i < this.discountMoths.length; i++){
		if(this.discountMoths[i] === thisMo){
			bestPrice = this.price * percentIfDisc;
			break;
		}
	}
		return bestPrice * 12;
};

//To share the same property
Plan.prototype.cancellable = true;

plan1.prototype.cancellable = false; //exception

//Cheking if a property exist in a particular object
var gotTheProperty = "price" in plan1;