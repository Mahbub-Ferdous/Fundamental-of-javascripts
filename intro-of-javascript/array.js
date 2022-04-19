///// what is array : array is a collections of data.

var ages = [20, 15, 25, 27]; // this is also a data type and also a varible but containes one and more value in this reason it called array the collection of data type

//// lenth of array :

var fruits = ["mango", "banana", "kiwi", "watermelon", "graps"];
var myIntro = "Hi i am mahbub from dhaka bangladesh"; /// string lenth

// lenth

// console.log(fruits.length);
// console.log(myIntro.length);    // string lenth
// console.log(ages.length)

//// indexOf : this method we know what is the index number of the arraya elelments or string eliments

var kiwiIndex = fruits.indexOf("kiwi");
var kIndex = myIntro.indexOf("k");

// console.log(kiwiIndex);
// console.log(kIndex);
// console.log(ages.indexOf(27));
// console.log(ages.indexOf(120));       // ans is (-1) cause 120 is not an element of ages array so if any element does not presence in the array menas his position is -1.

//// we also know the array element by using index number and change arrays elements by using index number:

var secondIndex = fruits[2];
fruits[2] = "orange";

// console.log(secondIndex);
// console.log(fruits);

///// push and pop: add and remove elements in array by using push and pop. for add use push and remove use pop -

// console.log(fruits);
// // fruits.push("guava");
// // console.log(fruits);
// fruits.pop(); // there have not arguments cause pop always remove the last item of the array
// console.log(fruits);
// console.log(fruits.length);
// var lastItem = fruits.pop();       // we remove last item by using pop but we store pop item in a variable name lastItem if we need this anywhere!!
// console.log(lastItem);

//// NB: add and remove by using push and pop always maintain LIFO syatem in stack data structure that means LIFO(Last in first out) when we add something add in last and when we pop or remove something than adding item will be pop so last in first out

//// add and remove first item an array that means stack ds - FIFO(first in first out):

var num1 = [10, 20, 30, 40, 50];
// num1.shift();
// var firstOut = num1.shift();  // ans is [20,30,40,50]
// console.log(firstOut); // ans is 20 we store 1st remove item in a variable
// console.log(num1); // ans is [30, 40, 50 ] we remove the first item

// num1.unshift(5);
// console.log(num1);
// var firstIn = num1.unshift(3);
// console.log(firstIn);
// console.log(num1);

//// NB: LIFO = we use last add item with push() and and first out last item with pop()
//// NB: FIFO = we use first elements add with shift() and we use first elements remove with unshift()



var x = 10;
var y = 20;
var z = x + y ;
console.log('Ans is: ' + x);