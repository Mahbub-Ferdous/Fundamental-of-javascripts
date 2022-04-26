//// find out the largest elements of an array:


/// max element of an array by using function and array:
function largestElement(numbers) {
  let largest = 0;
  for (i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element > largest) {
      //// we check is element greater than largest where largest initial value is 0 and if element is bigger than largest than that will be new largest elements
      largest = element;
    }
  }
  return largest;
}


/// min elements of array by using funtion and loop:


function smallestElement(numbers) {
  let smallest = numbers[0];        /// when we find min number in array than we start with arrays first index and we declared a varible which value  arrays first iindex 
  for (i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element < smallest) {
      //// we check is element less than smallest where smallest initial value is arrays first index and if element is less than smallest than that will be new smallest elements
      smallest = element;
    }
  }
  return smallest;
}
let numbers = [10, 4, 2, 5, 45, 8, 88, 87];
let maxElement = largestElement(numbers);
let minElement = smallestElement(numbers);
let max = largestElement([-1,-6,-12,-17]);
let min = smallestElement([-1,-6,-12,-17]);
console.log(max);                //// max number 0 cause all arrays elements were less than 0
console.log(min);                /// -17 is the smallest number in the arrays
console.log(minElement); /// ans is 2
console.log(maxElement); /// ans is 88







///// another max, min system is :

// max :

function bigElement(num){
    const max = Math.max.apply(Math, num);
    return max;
}
// min :

function smallElement(num){
    const min = Math.min.apply(Math, num);
    return min;
}
let num = [10,80,60,20,35,25,78];
let largest = bigElement(num);
let smallest = smallElement(num);
console.log(smallest);                        /// ans is 10;
console.log(largest);                         /// ans is 80;
