//// Comparison means if else statement sometimes it called conditional statement : comparison always return boolean result like - true or false

// basically it is define by comparison operatot like = greater than, less than, equal to, not equal to, less than equal to , greater than equal to, equal value and equal type, not equal value and equal type - {>, <, ==, !=, >=, <=, ===, !===}

var myLove = 99;
var yourLove = 90;

/* 
console.log(myLove > yourLove); // true
console.log(myLove < yourLove); // falsre
console.log(myLove == yourLove); // false
console.log(myLove !== yourLove); // true
console.log(myLove >= yourLove); // true
console.log(myLove <= yourLove); // false
*/

var abir = 80;
var abur = 70;

// console.log(abir === abir);

//// and, or conditional statements  :
// and = && means the 2 portion will be true than the full statement will be true
// or = || means the one portion will be true than the whole condition will be true

var applePrice = 100;
var orangePrice = 90;

/* 
console.log(applePrice > orangePrice && applePrice == orangePrice); /// false cause 1 part is true but it should be both true
console.log(applePrice > orangePrice || applePrice == orangePrice); /// true cause only part true than whole condition will be true
console.log(applePrice > orangePrice && orangePrice < applePrice);  // true cause both true
console.log(applePrice < orangePrice || orangePrice == applePrice);  // false cause no one true
*/

//// if .... else :

var iphonePrice = 90000;
var myBudget = 20000;

/* 
if (iphonePrice > myBudget){
    console.log('No chance to buy this flagship phone, i am poor!!')
} else {
    console.log('i want to buy please')             // the condition is true this reason else do not work
}
*/

/*
if (myBudget > iphonePrice) {
    console.log('Iphone with macbook yeah i am now apple man')
} else {
    console.log('Your Budget actually very low')
}

*/

//// handle multiple conditions :

var isJob = true;
var hasHouse = false;
var hasFlat = true;
var moneySave = 500000;

/* 
if (
  isJob == true &&
  moneySave > 400000 &&
  hasHouse == false &&
  hasFlat == true
) {
  console.log("Colo biye kore feli");
} else {
  console.log("tmr kopale biye nai");
}
*/

/*
if (
  (isJob == true && moneySave > 400000 && hasHouse == true) ||
  hasFlat == true
) {
  console.log("Cholo baby biye kori feli");
} else {
  console.log("kopale biye nai");
}
*/

///// multi stage if else if else conditional statement:

var milkTea = 30;
var butterBread = 20;
var toastBiscuitPrice = 20;
var myBudget = 50;

/*
if (milkTea < myBudget) {
  console.log("dudher cha khamu");
} else if (butterBread < myBudget) {
  console.log("Butter ban o khamu");
} else if (toastBiscuitPrice > myBudget) {
  console.log("toast cha er sathe khamu na");
} else {
  console("kichu khabo na");       /// first condition true that means ans is first condition no one see 
}
*/

var milkTea = 30;
var butterBread = 20;
var toastBiscuitPrice = 20;
var myBudget = 25;

/*
if (milkTea < myBudget) {
  console.log("dudher cha khamu");
} else if (butterBread < myBudget) {
  console.log("Butter ban o khamu");
} else if (toastBiscuitPrice > myBudget) {
  console.log("toast cha er sathe khamu na");       // 1st condition false so go to 2nd condition and 2nd condition true that means ans is 2nd condition
} else {
  console("kichu khabo na");
}
*/

////// nested condition :  nested condition means condition under the conditions ... all condition system is apply in nested conditional apply =

var isFoodPacked = false;

/* 
if (myBudget > toastBiscuitPrice) {
    if (isFoodPacked == true){
        console.log('Biscuits khamu cha diye yea')
    } else {
        console.log('bashi khabar khamu nah')
    }
}
*/




///////// road signal problem cover with conditional statement:


var signal = ['yellow', 'green']


if (signal[0] == ['red']){
    console.log('its totally denger!!!')
}
else if (signal[0] == ['yellow']) {
    console.log('you should stop yourself to cross the road')
}
else if (signal[2] == ['green']){
    console.log('Now you can cross the road')
} else {
    console.log('go go and go')
}
