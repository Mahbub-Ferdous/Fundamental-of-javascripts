/// normally we declared a varible with var it means its a global varible and always changable:

/* 

var num = 7;
console.log(num);
var num = 10;
console.log(num);
var num = 15;
console.log(num);

*/

//// let is also changable and global varible but when we use it on blockquates or in scope than it will be only for scope varible we cant access it out side the scope like var. and we cannot redeclared let in scope.

/* 

var x = 7;
function test(){
    let x = 5;
    let x = 6;                     /// there have error 
    return x;
}
var result = test();
console.log(result);
console.log(x);

*/

// let x = 20;
// let x = 17; /// getting error cause you do not declaree let in a same variable name..

////////  const : if we need some varible which we use everywhere but do not declared again like we say its a constant variable , this types of varible we use const like the value of pi, export or require any nodejs modules

const pi = 3.1416;

const express = require(express);
const mongoose = require(mongoose);
const fs = require(fs);
