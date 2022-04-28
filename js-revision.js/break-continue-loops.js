const products = [
  { name: "lenovo laptop", price: 45000 },
  { name: "asus laptop", price: 62000 },
  { name: "wristfit watch", price: 5000 },
  { name: "macbook laptop", price: 90000 },
  { name: "apple smart watch", price: 15000 },
  { name: "oneplus watch", price: 4000 },
  { name: "dell gaming laptop", price: 50000 },
];

for (const product of products) {
  if (product.price == 5000) {
    continue; /// 3rd property which price is 5000 and loop already skip this elements for continue logic
  } else if (product.price < 5000) {
    break; /// when loop going to 6th property this price is 4000 which is less than 5000 so that the loop stoped cause there have break logic
  }
  console.log(product);
}
