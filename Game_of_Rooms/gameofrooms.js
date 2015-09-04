var read = require('read');
var inventory = []
options = {
	
    prompt: "Where do you wanna go next?(PLEASE, Input a valid command: N,S,E,W)\n>"
}
// Our options object, the prompt is simply what will appear in the command line when read is called
function start (room) {
	console.log("You are now at the " + actualroom.name)
	console.log(actualroom.description)
	console.log("You see a " + actualroom.misc)
	read(options, readinput)
}

// The prompt itself, passing options, and using our callback function after input

function readinput (err, cardinal){
	var input = cardinal.split(" ")
	if (input[0] === "Pick") {
		if (input[2] === actualroom.misc) {
			inventory.push(input[2])
			console.log("A " + input[2] + " has been added to your inventory.")
			read(options, readinput);
		}else{
			console.log("There is not any " + input[2] + " to pick up here.");
			read(options, readinput);
		}
	}else if (input[0] === "Inventory"){
		console.log("Items in your inventory:")
		for (var i=0; i<inventory.length; i++) {
		console.log(inventory[i]);
		};
		read(options, readinput);

	}else if (input[0] === "Drop"){
		inventory.splice(inventory.indexOf(input[1]), 1);
		console.log("You dropped a " + input[1] + " from your inventory")
		read(options, readinput);

	}else if (input[0] === "Quit"){

	}else{
		if (actualroom.doors.indexOf(input[0]) > -1){
			if (input[0] === "N"){
				actualroom = actualroom.north;
				start(actualroom)
			} else if (input[0] === "S"){
				actualroom = actualroom.south;
				start(actualroom)
			} else if (input[0] === "E"){
				actualroom = actualroom.east;
				start(actualroom)
			} else if (input[0] === "W"){
				actualroom = actualroom.west;
				start(actualroom)
			} else {
				read(options, readinput);
			}
		} else {
			console.log("You cannot go " + input[0] + " in the " + actualroom.name);
			read(options, readinput);
		}
	}
}
// Outputs whatever the user has entered back to the console

var Room = function(name, description, doors, misc) {
	
	this.name = name;
	this.description = description;
	this.doors = doors;
	this.misc = misc;
};


var room1 = new Room("River Town", "You can see a small river that limits your access to the North and West doors. So you just can go South or East.",["S","E"], "wallet")
var room2 = new Room("Castle", "It seems that no one has been here for a while, I would be a good idea to leave asap. You just see two doors, East and South",["N","S","E"], "candle")
var room3 = new Room("Dark forest", "There's no light here, you barely can see an unpaved road at the West and the door of the Castle at the North.",["N","E"], "key")
var room4 = new Room("Small town", "Welcome to Albuquerque, here you'll find the best lemonade of the country. We just opened a new motorway in the West that will take you to the River Town. We have too an old motorway at the East that will take you to the National Prison. You can always go and have a look to the abandoned house at the South.", ["S","E","W"],"lemonade glass")
var room5 = new Room("Abandoned House", "You are inside the house and you go upstairs. It has incredible views. However, the house doesn't smell so good, so you'd better choose where to go quickly. You can see the Castle at the West, a small town at the North, you can go to the road going south or explore the East, where you see a Phantom town",["N","S","E","W"], "gun")
var room6 = new Room("Unpaved Road", "There's an abandoned house at the North and you can continue walking East through this road or go back to the Dark forest walking to the West.",["N","E","W"], "bag")
var room7 = new Room("National Prison", "The prison alarm just starts to ring, I don't think it's a good idea to be here. You can go west to the Small town or go south to the Shopping Mall.",["S","W"], "knife")
var room8 = new Room("Shopping Mall", "Welcome to the Shopping Mall! You've been walking for ages!  You can have a Hamburguer and rest while you do some shopping... After 2 hours shopping, you feel tired. You can leave by the North entrance that will take you to National Prison, the West entrance that takes you to Abandoned House or to the South, heading to Phantom town.",["N","S","W"], "Hamburguer")
var room9 = new Room("Phantom town", "There's no one here. It's too scary. Just go to the Shopping Mall at the North or to the unpaved road at the West.",["N","W"],"letter")

room1.south = room2
room1.east = room4

room2.north = room1
room2.south =room3
room2.east = room5

room3.north = room2
room3.east = room6

room4.west = room1
room4.south = room5
room4.east = room7

room5.north = room4
room5.east = room8
room5.south = room6
room5.west = room2

room6.north = room5
room6.west = room3
room6.east = room9

room7.west = room4
room7.south = room8

room8.south = room9
room8.north = room7
room8.west = room5

room9.north = room8
room9.west = room6

var actualroom = room1

start(actualroom)


