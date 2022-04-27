// prime number find



function isPrime(num) {
  if(num < 2){
  	return 'This is not Prime!! please enter a number greater than 2';
  }else if (typeof num != 'number'){
  	return 'This is not a number!! please enter a valid number';
  }
  for (let i = 2; i < num; i++){
    if( num % i == 0){
      return 'is not Prime Number';
    }
  }
  return 'is prime number';
}
let num = 91;
let prime = isPrime(num);
console.log(num + ' ' + prime);



/////  arrays even number findind:


function evenElement(numbers) {
    const even = [];
    for (let i = 0; i < numbers.length; i++) {
      let element = numbers[i];
      if (element % 2 == 0) {
        even[i] = element;
      }
    }
    return even;
  }
  let num1 = [10,4,45,8,87];
  let even = evenElement(num1);
  console.log(even);