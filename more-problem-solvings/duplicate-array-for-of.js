//// now we use for of loop system for remove duplicate arrays elements::

//// remove duplicate string from an array by using function, for..of loop and condition:

const names = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "ebul",
  "fabul",
  "abul",
  "cabul",
  "abul",
  "babul",
  "cabul",
  "abul",
  "abul",
];

function removeDuplicate(names) {
  const unique = []; /// we declared a empty array cause we put our all unique elements from names array by using for..of loop iteration
  for (const element of names) {
    /// we apply for..of loops
    if (unique.indexOf(element) == -1) {
      /// index -1 means that elements not in the array so if the condition true than elements will push the new unique array, if the elements alredy exits than this condition not applicable than again iteration will start
      unique.push(element); /// we push our new elements with checking
    }
  }
  return unique; /// in there we returns all our new unique array
}
let uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

//// remove duplicate number from an array by using function, for..of loop and condition:

//// this is for loop basic iteration sytem :

const number = [10, 20, 30, 10, 40, 50, 60, 10, 20, 30, 10, 20, 30];

function removeDuplicateNumber(number) {
  const unique = [];
  for (i = 0; i < number.length; i++) {
    // const element = number[i];
    if (unique.indexOf(number[i]) == -1) {
      unique.push(number[i]);
    }
  }
  return unique;
}
let uniqueNumber = removeDuplicateNumber(number);
console.log(uniqueNumber);

//// for...of :

function removeDuplicateNum(numbers) {
  const unique = [];
  for (let element of numbers) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}
const numbers = [10, 20, 30, 10, 40, 50, 60, 10, 20, 30, 10, 20, 30];
let uniqueNum = removeDuplicateNum(numbers);
console.log(uniqueNum);

//// only positive number return :

const numbers1 = [1, 0, 3, -5, -8, 10, 15, 20, 2, -19, -99];
let positiveNumber = [];
for (const number of numbers1) {
  if (number >= 0) {
    positiveNumber.push(numbers1);
  } else {
    break;
  }
}
console.log(positiveNumber);

//// i have an array and find positive and negetive value and put them on different two arrays which call positive array and negetive array >>>> nb: positve number logic is number >= 0

const numbers2 = [1, 0, 3, -5, -8, 10, 15, 20, 2, -19, -99];
let positiveNumber1 = [];
let negetiveNumber = [];
for (const number of numbers2) {
  if (number >= 0) {
    positiveNumber1.push(number);
  } else {
    negetiveNumber.push(number);
  }
}
console.log(positiveNumber1);
console.log(negetiveNumber);
