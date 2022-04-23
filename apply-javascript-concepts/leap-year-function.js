/// solve is this year leap year by using js function under conditions:

//// leap year condition :
/* 
1. year % 4 == 0
2. year % 100 !== 0
3. year % 400 == 0
*/


function isLeapYear(year){
    let leapYear = 'is leap year!!!';
    let notLeapYear = 'is not leap year!!!';
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return leapYear;
    }else {
        return notLeapYear;
    }
}

let year = 2100
let isThisLeapYear = isLeapYear(year);
console.log(year + ' ' + isThisLeapYear);   //// this is the proper logic to get is this leap year or not