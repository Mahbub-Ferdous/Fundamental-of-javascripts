/////what is fibonacci series ?? how its works??

/* Fibonacci series is a mathematical calculations where any next number depend on his/her first number like nextNumber = first1 + first2 
0 1 1 2 3 5 8 13 21 this is fibonecci seris 

// nth = (n-1) + (n-2)
*/

/// now we implement fibonicci series by using loops

const fibo = [0, 1]; //// we all know fibonacci series start with 0 and 1 and that was an array so we declared a constant array with 0,1 elements
for (i = 2; i <= 10; i++) {
  /// why we sttart with i = 2 not i = 0 cause we already have 0,1 so if we start with i = 2 than our fibonacci will be acurate
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo); // ans is [0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55]

/// fibonacci by using function and loop :

function fibonacci(num) {
  const fibo = [0, 1];
  for (i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
let num = 20;
console.log(fibonacci(num)); // ans is [0,    1,    1,   2,   3,    5, 8,   13,   21,  34,  55,   89, 144,  233,  377, 610, 987, 1597, 2584, 4181, 6765]

///// handle unexpected input using simple return:

/* 
when we do not input proper number like we input a string or a negetive number or less than 2 number like 0 or 1 than console will be sent an error message 
*/

function fibonacci(num2) {
  if (typeof num2 != "number") {
    return "This is not number!! Please give a number";
  } else if (num2 < 2) {
    return "This is less than 2!! Please Enter A Positive Number Greater Than 1";
  }
  const fibo = [0, 1];
  for (i = 2; i < num2; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
let num2 = 3;
console.log(fibonacci(num2)); /// when 1st condition true than code end and error out put again when 2nd condition true than code will be end and err msgs but when our input will be greater than 2 than ans is [0,1,1]
