//// if we need to know that our variable value is which data types than we call  typeof() function to know the data types of our value:
var onioPrice = "50";
var bananaPrice = "42.33";
let password = 12345678910;
var onioPriceNumber = parseInt(onioPrice);
var bananaPriceFloat = parseFloat(bananaPrice);
var isThere = true;
var isRaining;
var foo = null;

// console.log(typeof onioPrice);
// console.log(typeof onioPriceNumber);
// console.log(typeof bananaPriceFloat);
// console.log(typeof isThere);
// console.log(typeof isRaining);
// console.log(typeof foo);

//// date(): if we know todays date and time than we call  dat function

var today = Date();
var today2 = new Date();

// console.log(today);
// console.log(today2);

//// float addition special conflict : in javascript when we addition 2 float number than it will gives us huse 0 to solve this we call toFixed() function and put how much decimal point we need than is will gives us string than we transfer it on float number and this reason we dont use js in data science

var number = 0.2;
var number2 = 0.4;

console.log(number + number2);
var total = number + number2;
console.log(total.toFixed(1));
var total = total.toFixed(1);
console.log(parseFloat(total)); //// now the float number is properly float number

console.log(password.toString()); /// this gonna be from numaric to a string method = varName.toString()
