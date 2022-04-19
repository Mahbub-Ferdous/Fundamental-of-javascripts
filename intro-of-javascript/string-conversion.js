//// String Concatenation or adding two string :

var firstName = "Mahbub";
var lastName = "Ferdous";
var fullName = firstName + " " + lastName;

// console.log(firstName + lastName);           // this is with out white space menas spacing
// console.log(fullName);                       // this is with white space

//// adding two numaric string :

var onioPrice = "50";
var bananaPrice = "40";
var totalPrice = onioPrice + bananaPrice;

// console.log(totalPrice);      // ans is 5040 thats means numaric string adding like string adding system

//// converting string to integer and float number : when we convert from string to integer or float we call a function called {parseInt} and {parseFloat}:

var bananaPrice2 = "42.33";
var onioPriceNumber = parseInt(onioPrice);
var bananaPriceFloat = parseFloat(bananaPrice2);

// console.log(parseInt(onioPrice));
// console.log(parseFloat(bananaPrice));
// console.log(onioPriceNumber);
// console.log(bananaPriceFloat);

//// if we need to know that our variable value is which data types than we call  typeof() function to know the data types of our value:

var isThere = true;
var isRaining;
var foo = null;

console.log(typeof(onioPrice));
console.log(typeof(onioPriceNumber));
console.log(typeof(bananaPriceFloat));
console.log(typeof(isThere));
console.log(typeof isRaining);
console.log(typeof foo);
