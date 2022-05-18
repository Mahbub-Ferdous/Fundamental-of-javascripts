// when we declared a function with one or two parameter than we pass lots of arguments with the function how can its work
// two parameter and also pass two argumnets
function sum(num1, num2) {
  return num1 + num2;
}
const number = sum(20, 20);
console.log(number); // ans is 40 it is normal function

// but when we declare a function with two parameter but we pass more than two argumnets than whats happend

function summation(num1, num2) {
  // when we pass more arguments than we call it by using for loop
  let sum = 0;
  for (const numb of arguments) {
    // use must be for...of loop
    sum += numb;
  }
  return sum;
}
const number2 = summation(10, 20, 30, 40, 50);
console.log(number2); // ans is 150

// for string concatenation by using more arguments

function getFullName(firstName, lastName) {
  let fullName = "";
  for (const name of arguments) {
    fullName += name + " ";
  }
  return fullName;
}
const personName = getFullName("Asif", "Mohammad", "bin", "saif", "talukder");
console.log(personName);
