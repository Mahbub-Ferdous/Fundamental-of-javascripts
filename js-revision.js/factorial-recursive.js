//// factorial function recursion:

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(--i);
}
console.log(factorial(7));                // ans is 5040