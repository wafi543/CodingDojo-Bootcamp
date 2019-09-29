var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};
var bees = { character: "Bees"};
var owl = { character: "Owl"};
var robin = { character: "Christopher Robin"};
var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
var kango = { character: "Kango"};
var eeyore = { character: "Eeyore"};
var heffalumps = { character: "heffalumps"};

tigger.north = pooh;
tigger.north.east = bees;
tigger.north.west = piglet;

pooh.south = tigger;
pooh.east = tigger.north.east;
pooh.west = tigger.north.west;
pooh.north = robin;
pooh.north.east = rabbit;
pooh.north.west = owl;

piglet.east = tigger.north;
piglet.north = pooh.north.west;
piglet.north.east = pooh.north;

bees.west = tigger.north;
bees.north = pooh.north.east;
bees.north.west = pooh.north;
bees.north.east = gopher;

owl.south = tigger.north.west;
owl.south.east = tigger.north;
owl.east = pooh.north;

robin.south = tigger.north;
robin.south.east = tigger.north.east;
robin.south.west = tigger.north.west;
robin.east = bees.north.east;
robin.west = pooh.north.west;
robin.north = kango;

rabbit.south = tigger.north.east;
rabbit.south.west = tigger.north;
rabbit.east = bees.north.east;
rabbit.west = pooh.north;
rabbit.west.north = robin.north;

gopher.west = pooh.north.east;
gopher.west.south = tigger.north.east;

kango.south = pooh.north;
kango.south.east = pooh.north.east;
kango.south.west = pooh.north.west;
kango.north = eeyore;

eeyore.south = robin.north;
eeyore.east = heffalumps;

heffalumps.west = kango.north;

