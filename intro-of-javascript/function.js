//// what is function : certain task command with a function which have parameter and arguments and every function return something.

/// structure :

/*
// function declaration
function-keyword functionName (parameter1, parameter2,...){
    business logic write here              /// this is called funtion body
    return output;
}

// call the function 

functionName();

*/

/// always we can call our declared function in our code when we need them

/* 

function startFan (){
    console.log('go to the switch board')
    console.log('Press the fan switch')
    console.log('accurate the regulator')
}

startFan();

var x = 30
var y = 20;
console.log(x + y);            //// doing some extra code and than again call the startfan function
console.log(x - y);

startFan();

*/

/*
function bringSingara(taka) {            /// taka is parameter we can give 1 and more parameter in a funtion
    console.log('For singara ',taka);
}
bringSingara(50);     /// 50 is called arguments 
bringSingara(100);
bringSingara(200);             //// we can pass different arguments in one function and parameter


function bringTea(taka){
    console.log('for tea '+ taka);
}
bringTea(10);
*/

//// return function :

/*

function bringBeguni (taka){
    console.log('money given :' + taka);
    console.log('go to beguni shop');
    console.log('buy some beguni');
    var beguniPrice = 5;
    var beguniQuantity = taka / beguniPrice;
    var moneyBack = (taka % beguniPrice);
    return moneyBack;                                 /// in return you jsut write the variable name
    // full function return the remaining money
}

var moneyGiven = 104;
var bringBeguni = bringBeguni(moneyGiven);           //// single arguments pass and declare a variable for argument to reserved the value, also whole function call also declared a variable for geting specific return result and store 
console.log('take the ramaining ' + bringBeguni);

*/

/// multiple parameter with addition

function addNumber(num1, num2, num3) {
  /// 3 input parameter
  console.log("arguments :", num1, num2, num3);
  var total = num1 + num2 + num3;
  return total; /// return total add
}

var addNumber = addNumber(115, 33, 49); /// pass 3 argumnets for addition funtion input parameter
console.log(addNumber); /// ans is 197

// sunstraction :

function substractionNumber(num1, num2, num3) {
  console.log("arguments pass :", num1, num2, num3);
  var total = num1 - num2 - num3; /// 30-100-120 == -100 -120 equal -220 and than 30-220 eqaul -190
  return total;
}

var substractionNumber = substractionNumber(30, 100, 120);
console.log("total :" + substractionNumber); //

/// multiplication :

function multipleNumber(num1, num2, num3, num4) {
  console.log("arguments pass :", num1, num2, num3, num4);
  var multipleTotal = num1 * num2 * num3 * num4;
  return multipleTotal;
}

var multipleNumber = multipleNumber(10, 2, 3, 4);
console.log(multipleNumber); ////  ans is 240

/// division:

function divisionNumber(num1, num2, num3) {
  console.log("arguments pass :", num1, num2, num3);
  var divisionTotal = num1 / num2 / num3; /// 50/20/60
  return divisionTotal;
}
var number1 = 50;
var number2 = 20;
var number3 = 60;

var divisionNumber = divisionNumber(number1, number2, number3);
console.log("return :" + divisionNumber);
var result = divisionNumber.toFixed(2); /// add to fixed function for 2 ghot decimel
console.log(parseFloat(result)); /// apply parseFloat for string to number

//// big funtion

function hijibiji(num1, num2, num3, num4, num5) {
  console.log("arguments pass :", num1, num2, num3, num4, num5);
  var task1 = num4 + num5;
  console.log(task1);
  var task2 = num3 * task1;
  console.log(task2);
  var task3 = num2 - task2;
  console.log(task3);
  var task4 = num1 / task3;
  return task4; // ans will be 5 cause 500/ 100
}

var hijibiji = hijibiji(500, 200, 10, 7, 3);
console.log("return :" + hijibiji); /// ans is 5

/// sorol math function:

function mathKhichuri(num1, num2, num3, num4, num5) {
  console.log("arguments pass :", num1, num2, num3, num4, num5);
  var math = num1 + (num2 * num3) / num4 - num5; ///   left to right precedence first *, /, +, - so 1st task (num2*num3) task2 (num2*num3 / num4) task3 (num2*num3/num4 + num1) task 4(num2*num3/num4+num1 - num5) == (20*30)= 600 ,(600/40)= 15, (15+10) = 25, (25-50)=-25 thats th ans
  return math;
}

var mathKhichuri = mathKhichuri(10, 20, 30, 40, 50);
console.log("return:" + mathKhichuri); // ans is -25 cause operator precedence
