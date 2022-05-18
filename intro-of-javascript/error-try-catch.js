// why we use try..catch : if we write code under try and catch than if we get some error it will be not effected all the code base so that we use try..catch
// we must pass a parameter 'error' on the function of catch

try {
  // Try to run this code
} catch (err) {
  // if any error, Code throws the error
} finally {
  // Always run this code regardless of error or not
  //this block is optional
}

// 
const name = "ami";
try {
  name = "tumi";
} catch (error) {}
console.log(name); // ans is 'ami' cause we cant not change any const value
// but there we donot get any error from the condole cause we use try..catch that means const does not change any way but we can try for avoid the wholr code base error

let name1 = "mahbub";
try {
  name1 = "Mahbub Ferdous";
} catch (error) {}
console.log(name1); // ans is 'Mahbub Ferdous' cause let will be changable and it will be change any way

// error notice :
const name2 = "mahbub";
try {
  name2 = "Mahbub Ferdous";
} catch (error) {
  console.log("getting error", error); // this will give us 'Assignment to constant variable' this types of error but the whole code base will be ok it is not effected the whole code base anyways .
}
console.log(1000);
console.log(name1);

///// so the moral of the story is, when we know that the code will give us an error than that code we will write into try..catch function for what the whole code base does not effected for the error code thats the theory of try..catch.
