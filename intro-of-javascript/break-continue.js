//// break and continue : basically it works with loop more. if we want to stop any iteration of any loop than we use break, and if we stop indivisual iteration but full iteration will be done than we use continue.

/*
var i = 0;
while(i < 10){
    console.log(i);
    if (i == 6){
        break;                    /// we write a condition on loop and if i = 6 than stop the loop so when output is 6 the loop will be stop 
    }
    i++;
}
*/

/* 

var personName = ['haris', 'biplop', 'sohan', 'tarek'];
var i = 0;
while (i < personName.length){
    console.log(personName[i]);
    if(i == 2){
        break;                       /// the loop will break or stop when index 2 sohan will print
    }
    i++;
}

*/

var laptops = [
  { brand: "lenovo", model: "G40", price: 23000 },
  { brand: "apple", model: "macbookpro", price: 80000 },
  { brand: "hp", model: "hp elite pro", price: 60000 },
];

/* 

var i = 0;
while (i < laptop.length){
    console.log(laptop[i]);
    if (i == 1){
        break;                        /// its an array of obejct or json so we can stop index number 1 
    }
    i++;
}

*/

for (i = 0; i < laptops.length; i++) {
  var laptop = laptops[i];
  if (i === 1) {
    continue;
  }
  console.log(laptop); /// ans will be lenovo and hp cause when we command continuee statement on if statement in a loop than if the condition is true than loop skip the iteration and continue with next
}

/////////// in while loop break and continue write after console.log and before increment but in for loop increment with condition so we wrote condition and continue first then consol.log
