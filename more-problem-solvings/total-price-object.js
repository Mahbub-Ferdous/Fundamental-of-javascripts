//// when we buy one and more products from an ecommerce how we find the total price - cause the products are onjects cause they have one and more properties so we can find the all objects product price and addition them and get a total that we will return ..

const products = [
  { name: "laptop", price: 50000, color: "silver", quantity: 1 },
  { name: "shirt", price: 1500, color: "red", quantity: 4 },
  { name: "watch", price: 1500, color: "golden", quantity: 2 },
  { name: "airpod", price: 3500, color: "white", quantity: 1 },
];

/// with out calculate quantity:

function totalPrice(products) {
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  return total;
}

/// with calculate quantity also :

function totalPriceQuantity(products) {
  let total = 0;
  for (const product of products) {
    let price = product.price;
    let quantity = product.quantity;
    total += price * quantity;
  }
  return total;
}

console.log(totalPrice(products)); /// ans is total price == 56,500
console.log(totalPriceQuantity(products)); ///  ans is 62,500
