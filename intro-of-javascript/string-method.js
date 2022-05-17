// case convert = toLowerCase() and toUpperCase():

let userInput = "blackPinK";
let saveUserName = "blaCkpiNK";
if (userInput == saveUserName) {
  console.log("correct");
} else {
  console.log("wrong"); // output is wrong cause case sensetive
}
if (userInput.toLowerCase() == saveUserName.toLowerCase()) {
  console.log("correct");
} else {
  console.log("wrong"); // now ans is correct cause both are now tranfer into lowercase by using toLowerCase().
}
// searcing with indexOf, includes(), startswith, endswith

const products = [
  "Dell hardcore i29 200gb laptop",
  "iphone 1tb camera flashlight Phone",
  "yellow laptop with black camera",
  "1X59 lenovo comercial yoga laptop",
  "LG supernova laptop",
  "HTC low price Phone",
  "Dell purple color phone with Laptop",
];
const searching = "laptop";
//indexOf
const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
// console.log(output);  /// when we revision this note please step by step comment out consol.log for exect function
/* ans is [
    'Dell hardcore i29 200gb laptop',
    'yellow laptop with black camera',
    '1X59 lenovo comercial yoga laptop',
    'LG supernova laptop'
    'purple color phone with Laptop'
] */

// includes():
const quotes = "amar sonar bangla ami tomay valobashi".includes("valo"); // ans is true
console.log(quotes);
for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    output.push(product);
  }
}
// console.log(output);
// startWith(), endsWith():
const quote = "amar sonar bangla ami tomay valobashi".startsWith("amar"); // ans is true
const quote2 = "amar sonar bangla ami tomay valobashi".endsWith("valobashi");
console.log(quote);
console.log(quote2);

//startWith()
let search = "dell";
for (const product of products) {
  if (product.toLowerCase().startsWith(search.toLowerCase())) {
    output.push(product);
  }
}
// console.log(output); //['Dell hardcore i29 200gb laptop','Dell purple color phone with Laptop']
//endsWith():
let find = "phone";
for (const product of products) {
  if (product.toLowerCase().endsWith(find.toLowerCase())) {
    output.push(product);
  }
}
console.log(output); // ans is [ 'iphone 1tb camera flashlight Phone', 'HTC low price Phone' ]
