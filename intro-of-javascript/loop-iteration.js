//// there have 3 types of loop, why we use loop - one task doing one and more and more than we use loop.
//// 3 types of loop = 1. while loop  2. do...whilw loop   3 for loop

///// while loops:

/* 
while loop structure :

while (condition) {
    statement output ;
    increment (++ or --)
}
*/

var rostGiven = 0;

/* 
while (rostGiven < 7){
    console.log('Please give me rost!!!')
    rostGiven++;
    console.log(rostGiven);      /// now you can crate a breakpoint for debug in line no 20 and than run and debug than you can understand properly what will happend in while loop iteration
}
*/

//// array and string loops:
/* 
var name = ['bijoy', 'ashik', 'sohan', 'mahbub', 'robin']

var i = 0;
while (i < name.length){
    console.log('My Name Is :' + name[i]);
    i++;
}
*/

//// even number
/* 
var i = 2;
var oddNumberLength = 100;
while (i <= oddNumberLength){
    console.log(i);
    i+=2;
    
}
*/

//// print 1 to 50 by using while loop:

/* 
var number = 1;

while (number <= 50) {
    console.log(number);
    number ++;
}
*/

///// for loop:

// structure:

/*
for (statement-1:initialize, statement-2:condition, statement-2: increment) {
    iterated output statements
}
*/

/* 
// odd number using for loop
for (i = 1; i <= 20; i+=2){
    console.log(i);
}
*/

/* 
// even number using for loop :

for (i = 2; i <= 20; i+=2){
    console.log(i);
}
*/

/* 
// even number from 100 to 1 means reverse:

for (i = 100; i >= 1; i-=2){
    console.log(i);
}
*/

/* 
// odd number from 50 to 0 means reverse:

for (i = 49; i >=0; i-=2){
    console.log(i);
}
*/

/* 
////////////// array with for loop :


var number = [10,15,18,20,25,28,38,48,58];
var number2 = [];

for (i = 0; i < number.length; i++){
    number2 = number[i];
    console.log(number2);
}
*/

/* 
////// array with string using for loop:

var cityName = ['dhaka', 'london', 'berlin', 'birmingham', 'porthsmouth', 'mancester'];

for (i = 0; i < cityName.length; i++){
    var newCity = cityName[i];
    console.log('This is '+newCity+' City');
}
*/
