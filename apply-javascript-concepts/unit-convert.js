///// unit converting :

//// inch to feet:

let inches = 132;
let feet = inches / 12;
console.log(feet);

/// feet to inches:

let totalfeet = 12;
let inch = totalfeet * 12;
console.log(inch);

///// in this type which is done one and more we basically use a function and than just call funnction and pass our desire arguments:

// inch to feet using function:

function inchToFeet(inches) {
  let toFeet = inches / 12;
  return toFeet;
}

let returnFeets = inchToFeet(120);
console.log(returnFeets);
var x = 144;
let xFeets = inchToFeet(x);
console.log(xFeets);

/// feet to inch using function :

function feetToInch(feets) {
  let toInches = feets * 12;
  return toInches;
}
let returnInches = feetToInch(15);
console.log(returnInches);

/// miles to kilometer :

function milesToKm(miles) {
  let toKm = miles * 1.6;
  return toKm;
}

let miles = 10;
let returnKM = milesToKm(miles);
console.log(returnKM);

//// km to miles using function:

function kmToMiles(kms) {
  let toMiles = kms / 1.6;
  return toMiles;
}

let kms = 16;
let returnMiles = kmToMiles(kms);
console.log(returnMiles);
