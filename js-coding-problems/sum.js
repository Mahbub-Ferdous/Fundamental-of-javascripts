////// sum of all arrays elements ::

let num = [10, 30, 20, 15, 12, 34, 56];
let sum = 0;
for (var i = 0; i < num.length; i++) {
  let element = num[i];
  sum += element;
}
console.log(sum); /// ans is 177

function arrayTotal(number) {
  let sum = 0;
  for (i = 0; i < number.length; i++) {
    let element = number[i];
    sum += element;
  }
  return sum;
}
const number = [10, 30, 15, 5, 25, 35, 50, 60, 70];
const arraySum = arrayTotal(number);
console.log(arraySum); /// ans is 300
