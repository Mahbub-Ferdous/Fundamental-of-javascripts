// isArray(): Array.isArray(parameter) == true;

function megaFriend(friends) {
  //error handler
  if (Array.isArray(friends) == false) {
    console.log("This is not an array. Please Input a valid arrays");
  } else {
    let mega = friends[0];
    for (const friend of friends) {
      if (friend.length > mega.length) {
        mega = friend;
      }
    }
    return mega;
  }
}
const friends = ["abir", "sohan", "taohid", "robin", "rashed"];
const bigBondhu = megaFriend(friends); // if anyone input unexpected number or something than we can add an error handler for arrays using isArray()
console.log(bigBondhu); // ans is taohid

// indexOf():
function checkWithIndexOf(name) {
  const friends = ["abir", "sohan", "taohid", "robin", "rashed"];
  if (friends.indexOf(name.toLowerCase()) != -1) {
    console.log(name + " " + "exist using indexOf()");
  } else {
    console.log(name + " " + "is not exit");
  }
}
const userName = "kaka";
console.log(checkWithIndexOf(userName));

// includes():
if (friends.includes("robin".toLowerCase()) == true) {
  console.log("robin exits using includes()");
} else {
  console.log("robin is not exists");
}

// concate():
let number1 = [10, 20, 30, 40, 50];
let number2 = [60, 70, 80, 90, 100];
let newNumber = number1.concat(number2);
console.log(newNumber); // ans is [10, 20, 30, 40,  50,60, 70, 80, 90, 100]

// reverse() method:
const fruits1 = ["mango", "banana", "guava"];
const num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reverse = fruits1.reverse();
console.log(reverse);
console.log(num5.reverse()); //  ans is [9, 8, 7, 6, 5, 4, 3, 2, 1]

// join(): /* split methods splits string object into array of strings and join method changes element of array into a string */

const name1 = ["abid", "badhon", "cynthia", "dalim"];
const name2 = name1.join();
const name3 = name1.join("");
const name4 = name1.join(",");
const name5 = name1.join(", ");
const name6 = name1.join("-");
console.log(name1); // ans is '[ 'abid', 'badhon', 'cynthia', 'dalim' ]'
console.log(name2); // ans is 'abid,badhon,cynthia,dalim'
console.log(name3); // ans is 'abidbadhoncynthiadalim'
console.log(name4); // ans is 'abid,badhon,cynthia,dalim'
console.log(name5); // ans is 'abid, badhon, cynthia, dalim'
console.log(name6); // ans is 'abid-badhon-cynthia-dalim'

// slice(): same as string -

let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(number.slice(3)); // ans is [40, 50, 60, 70, 80, 90, 100]
console.log(number.slice(3, 9)); // ans is [ 40, 50, 60, 70, 80, 90 ]
console.log(number.slice(-6)); // ans is  [ 50, 60, 70, 80, 90, 100 ]
console.log(number.slice(-6, -1)); // ans is [ 50, 60, 70, 80, 90 ]
// slice() is not effected the main arrays permanently it will be slice for that time or you take the portion to work you needed part from an array
console.log(number); // ans is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// splice():

// splice to remove an element from an array:

/* console.log(number.splice(4, 3));//splice(startIndex, howMuchIndexDeleteFromStart)//[50, 60, 70]
console.log(number); //[10,20,30,40,80,90,100] [50, 60, 70] is not available cause when we splice any index from the array it will be parmanently deleted from an array */
/* console.log(number.splice(4,)); // splice means remove from 4 index to last index
console.log(number);    //  ans is [ 10, 20, 30, 40 ] */
console.log(number.splice(4, 3, 500, 600, 700)); // we can remove from 4index to 3 next index and than there position we will adde 500,600,700 . we can also add some element with out remove any element it will happens when we put 0 in the delete parameter
console.log(number); // ans is [10,20,30,40,500,600,700,80,90,100] cause we remove 3 items but addd also three item but we add infinity index

// sort():
const friendsName = [
  "karim",
  "sohan",
  "jannat",
  "taohid",
  "robin",
  "bahar",
  "ashik",
  "faruk",
];
const Number10 = [5, 8, 1, 3, 9, 7, 6, 2, 4];
console.log(friendsName.sort()); // ans ['ashik', 'bahar','faruk', 'jannat','karim', 'robin','sohan', 'taohid']
console.log(Number10.sort()); // ans is - [1, 2, 3, 4, 5, 6, 7, 8, 9]

// javascript up to 10 number sorting is problem so we add a function as a parameter of sort;

/* in javascript to get sorted numbers array than you must sent a parameter of function in sort function which is function(a,b){return a - b;};  */
const nonsortedNumber = [99, 150, 120, 87, 77, 2, 9, 5, 1, 37, 17, 26, 49];
const sortedNumber = nonsortedNumber.sort(function (a, b) {
  return a - b;
});
console.log(sortedNumber); // ans is [1,  2,  5,  9, 17,  26, 37, 49, 77, 87, 99, 120, 150]
