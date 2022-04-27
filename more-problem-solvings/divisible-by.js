///// write some codding chalenge

//// 1. foobar        // if any number divisible 3 than output 'foo', any number divisible 5 than output 'bar' if any number divisible by 3 and 5 than output is 'foobar'

/// 2. fizzbuzz       // if any number divisible 2 than output 'fizz' any number divisible 4 than output 'buzz' if any number divisible by 2 and 5 than output is 'fizzbuzz'

/// 1.foobar

for (i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {            /// why we write 3rd condition in first cause some number divisible by 3 and 5 but when one condition true its execute and start iteration again so that we we cant find any both conditional output 
    console.log('foobar');
  }else if (i % 3 == 0) {
    console.log("foo");
  }else if (i % 5 == 0) {
    console.log('bar');
  }else {
    console.log(i);
  }
}



/// 2. fizzbuzz

for(i = 1; i <= 50; i++){
    if(i % 2 == 0 && i % 4 == 0){
        console.log('fizzbuzz');
    }else if(i % 2 == 0){
        console.log('fizz');
    }else if(i % 4 == 0){
        console.log('buzz')
    }else{
        console.log(i);
    }
}
