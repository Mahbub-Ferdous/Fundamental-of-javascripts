//// what is factorial math??

// we all knoe the factorial math that is number! :

/* 
1. 2! = 2 * 1 == 2
2. 3! = 3* 2 * 1 == 6
3. 4! = 4* 3 * 2 * 1 == 24
4. 5! = 5 * 4 * 3 * 2 * 1 == 120
5. 6! = 6 * 5 * 4 * 3 * 2 * 1 == 720
6. 7! = 7 * 6* 5 * 4 * 3 * 2 * 1 == 5040

*/



/// find out 7 factorial 

/*

for (i = 1; i <= 7; i++){         /// i = 1 cause factorial 1st multiple with 1 or multiplication start with 1.
    console.log(i);
    let factorial = 1;             /// this not ok cause when we set the factorial value 1 than always loop iterate and factorial always 1.
    factorial = factorial * i;
}

*/



/*

/// so if we start with a variable name factorial = 1 than it will be proper system:


let factorial = 1;
for (i = 1; i <= 7; i++){
    console.log(i);
    factorial = factorial * i;
}
console.log(factorial);          // ans is 5040 cause when loop is iterate i was incresing every iteration by 1 and value of i multiple with factorial and store a new value of factorial varible than again value o i multiple with new value of factorial


//// summation of all iteration number 0 to 20 
let sum = 0;
for (i = 1; i <=5; i++){
    console.log(i);
    sum += i;
}
console.log(sum);                        /// ans will be 210





//// factorial calculation with function for multiple usecase :


function getFactorial (num){
    let factorial = 1;
    for (i = 1; i <= num; i++){
        factorial *= i; 
    }
    return factorial;                  //// we want factorial result so we return it
}

let num = 4;
let calcFact = getFactorial(num);
console.log(calcFact);


//// get summation of factorial by using function


function getFactorialSum(numb){
    let factorial = 1;
    let sum = 0;
    for(i = 1; i <= numb; i++){
        factorial *= i;
        sum += factorial;
    }
    return sum;
}

let numb = 5;
let summation = getFactorialSum(num);
console.log(summation);

*/

///// factorial with while loop with decrementiong :

function decrementFactorial(number){
    let factorial = 1;
    let i = number;
    while (i >= 1){
        factorial *= i;
        i--;
    }
    return factorial;
}
const myFact = decrementFactorial(7);
console.log(myFact);


//// factorial with decrementing for loops:

function decrementFactorial(number){
    let factorial = 1;
    for(i = number; i >= 1; i-- ){
        factorial *= i;
    }
    return factorial;
}
const myFactorial = decrementFactorial(7);
console.log(myFactorial);
