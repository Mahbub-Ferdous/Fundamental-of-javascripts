//// max():

const x = 500;
const y = 350;
const z = 670;
const m = 351;
console.log(Math.max(x, y, z, m)); ////// ans is 670 that is maximum
console.log(Math.min(x, y, z, m)); //// ans is 350 that is minimum number

const xArray = [20, 50, 36, 2, 5, 6, 7, 80, 100, 300];
console.log(Math.max.apply(Math, xArray));           /// ans is 300
console.log(Math.min.apply(Math, xArray));           ///  ans is 2

//// functional ways :

function findMax(a, b, c, d) {
  let e = Math.max(a, b, c, d);
  return e;
}

function findMin(a, b, c, d) {
  let e = Math.min(a, b, c, d);
  return e;
}
let a = 10;
let b = 5;
let c = 34;
let d = 40;
console.log(findMax(a, b, c, d));               /// ans is 40 
console.log(findMin(a, b, c, d));               /// ans is 5

///// function with conditions:

function isMax(p, q, r) {
  if (p > q && p > r) {
    return p;
  } else if (q > p && q > r) {
    return q;
  } else if (r > p && r > q) {
    return r;
  } else {
    return 0;
  }
}
function isMin(p, q, r) {
  if (p < q && p < r) {
    return p;
  } else if (q < p && q < r) {
    return q;
  } else if (r < p && r < q) {
    return r;
  } else {
    return 0;
  }
}

let p = 20;
let q = 30;
let r = 100;
console.log("Big Number is" + " " + isMax(p, q, r));
console.log("Small Number is" + " " + isMin(p, q, r));
