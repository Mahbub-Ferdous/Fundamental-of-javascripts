/////  we apply length function also to get string length like arrays and also find index or index number wise elements but we cant push or pop or change any elements of a string like arrays

let myString = "How are you";
let x = myString.length;
console.log(x); ////  ans will be 11 cause the length of string is 11
let y = myString[1];
console.log(y); ///    index of 1 in the string is 'o'
let z = myString.indexOf("a");
console.log(z); ////       'a' elements index is 4

/// but most inportant is that we can't apply all arrays method like index wise elements change, pop(), push(), shift(),unshift() etc...

//// we can use for...of loops for string like

for (const char of myString) {
  console.log(char); // ans will be printed one by one elements in the string
}



//// reverse a strings: now we can reverse a string elements by using function, loop



function reverseString(text){
    let reverse = '';                      /// initial a string for reverse greetings 
    for(const char of text){
        reverse = char + reverse;             /// 1st we put reverse element than before we put next elements 
    }
    return reverse;
}
const greetings = 'Hello, How Are You';
const reverse = reverseString(greetings);
console.log(reverse);                             //// ans will be uoY erA ,olleH

