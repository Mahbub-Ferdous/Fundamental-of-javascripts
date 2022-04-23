//// find even or odd by using function:

/* 

function evenOrOdd(number) {
  if (number % 2 == 0) {
    console.log(number + " " + "is even number");
  } else {
    console.log(number + " " + "is odd number");         //// thisis not the proper system to make function for even or odd.
  }
  return;
}
let num = 16;
let isEvenOrOdd = evenOrOdd(num);
console.log(isEvenOrOdd);

*/

function isEvenOrOdd(number) {
  let evenOutput = "This is even Number";
  let oddOutput = "This is odd number";
  if (number % 2 == 0) {
    return evenOutput;
  } else {
    return oddOutput;
  }
}

let inputNumber = 16;
let evenOrOdd = isEvenOrOdd(inputNumber);
console.log(inputNumber + " " + evenOrOdd); ///// this is the better solution for even or odd with console.log
