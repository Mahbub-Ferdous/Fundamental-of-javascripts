/* 
woodForChair = 3cft;                        /// cft == cubic feet
woodForTable = 10cft;
woodForBed  = 50cft;
 */


/// write a function which input 3 parameter are chairQuantity, tableQuantity, bedQuantity and calculate how much wood need to made thoose quantity???


function woodCounter(chairQuantity, tableQuantity, bedQuantity){
    const woodForChair = 3;
    const woodForTable = 10;
    const woodForBed = 50;
    let totalWood = (woodForChair * chairQuantity) + (woodForTable * tableQuantity) + (woodForBed * bedQuantity);
    return totalWood;
}
let total = woodCounter(6,3,3);
console.log(total);                              // ans is 198 cft wood you need to make 6 chaires,3 tables and 3 beds



//// sum of an arrays elements 

let sum = 0;
function sumArray(array){
    for(i = 0; i < array.length; i ++){
        sum += array[i];
    }
    return sum;
}
let array = [1,5,10,15,20,25,30];
let summation = sumArray(array);
console.log(summation);                                      //// ans is 106