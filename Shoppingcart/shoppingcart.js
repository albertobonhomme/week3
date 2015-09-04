var Item = function(name, price) {
	
	this.name = name;
	this.price = price;
};


var Shopping_cart = function() {
	
	this.items = [];
	this.totalprice = 0;
};

	Shopping_cart.prototype.add_item = function (item) {
		
		this.items.push(item);
		console.log("Adding " + item.name + " to the cart at a price of " + item.price);
	};

	Shopping_cart.prototype.total = function() {
		
		var total = this.totalprice
		var numberofitems = this.items.length
		
		this.items.forEach(function(item){
			total += item.price;
		});


		if (numberofitems > 5) {
			return ((total * 0.9) - this.discounts());
		} else {
			return (total - this.discounts());
		};
		
	};

	Shopping_cart.prototype.discounts = function() {
		

		return (this.applesdiscount() + this.discountoranges())
	}

	Shopping_cart.prototype.applesdiscount = function() {
		
		var numberofapples = 0
		
		this.items.forEach(function(item){
			if (item.name === "apple") {
				numberofapples +=1
			};
		});
		if (numberofapples === 1) {
			return 0
		}else{
			return (Math.floor(numberofapples / 2) * apple.price)
		}
		
	}

	Shopping_cart.prototype.discountoranges = function() {

		var numberoforanges = 0
		
		this.items.forEach(function(item){
			if (item.name === "orange") {
				numberoforanges +=1;
			};
		});

		if (numberoforanges > 5) {
			if (Math.floor((numberoforanges / 5) % 2) === 0) {
				return ((Math.floor(numberoforanges/10) * 5) * 0.5 * orange.price);
			} else {
				return (((Math.floor(numberoforanges/10)) * 5 + (numberoforanges % 5)) * 0.5 * orange.price);
			};
		} else {
			return 0;
		}

	} 


var apple = new Item("apple", 10)
var orange = new Item("orange", 5)
var grapes = new Item("grapes", 15)
var banana = new Item("banana", 20)
var watermelon = new Item("watermelon", 50)

var myshoppingcart = new Shopping_cart()


myshoppingcart.add_item(apple)
myshoppingcart.add_item(apple)
myshoppingcart.add_item(grapes)
myshoppingcart.add_item(watermelon)
myshoppingcart.add_item(watermelon)
myshoppingcart.add_item(watermelon)
myshoppingcart.add_item(watermelon)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)
myshoppingcart.add_item(orange)


console.log(myshoppingcart.total())