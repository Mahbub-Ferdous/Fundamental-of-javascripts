///// celsius to fahrenheit :


/* 

celsius to fahrenheit logic = ((celsius * 9/5) + 32)
fahrenheit to celsius logic = ((fahrenheit - 32) *5/9)

*/


function celsToFahrenheit(celsius){
    let fahrenheit = ((celsius * 1.8) + 32);
    return fahrenheit;
}
const toFahrenheit = celsToFahrenheit(15);
console.log(toFahrenheit);                         //// ans is 59 fahrehheit




///// fahrenheit to celsius:

function fahrenheitToCelsius (fahrenheit){
    let celsius = ((fahrenheit - 32) * 5/9);
    return celsius;
}
const toCelsius = fahrenheitToCelsius(59);
console.log(toCelsius);                               ////  ans is 15 celsius 



//// grading system by using condition in functions:

function grading(number,student){
    let aPlus = "got 'A+'";
    let aOnly = "got 'A'";
    let aMinus = "got 'A-'";
    let fail = "got 'f'";
    if(number >= 80 && number <= 100){
        return aPlus;
    }else if (number >= 70 && number <= 79){
        return aOnly;
    }else if(number >= 60 && number <= 69){
        return aMinus;
    }else {
        return fail;
    }
}
let number = 60;
let student = 'Afsana Chowdhury'
const result = grading(number, student);
console.log(student + " " + result);



//// simple interest formula :


/// interest formula == amount * (inerestParcent / 100);

function CalculateInterest(amount, interestParcentage){
    let interest = amount * (interestParcentage / 100);
    return interest;
}
let amount = 70000;
let interestParcentage = 5;
console.log(CalculateInterest(amount, interestParcentage));     ///  ans is 3500 taka;