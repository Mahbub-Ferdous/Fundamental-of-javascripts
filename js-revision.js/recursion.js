/// what is recursion ?? what is recursive method??

/* recursion means when we declared a function we pass input parameter and the business logic were the body of functio and we got a returns but when we call that function inside the funcion not outside the function that is called recursive */

function consoleNumber(i) {
  if (i > 5) {
    return; /// if i > 5 than the function return output and end
  }
  console.log(i);
  consoleNumber(i + 1); /// we call the function inside function means recursive
}
consoleNumber(1);

//// reverse - sum:

let sum = 0;
for (i = 5; i >= 1; i--) {
  sum += i;
}
console.log(sum);

/// recursion ways to find sum:

function sum1(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum1(--i);
}
console.log(sum1(5));
