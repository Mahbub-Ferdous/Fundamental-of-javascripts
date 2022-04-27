//// find the cheapest phone from an object array::

const phones = [
  {
    name: "Samsung s20",
    price: 40000,
    color: "black",
    camera: 50,
    storage: 128,
  },
  { name: "Iphone 6s", price: 32000, color: "silver", camera: 12, storage: 64 },
  { name: "Nokia XL", price: 9000, color: "green", camera: 10, storage: 8 },
  {
    name: "Walton Primo",
    price: 10000,
    color: "black",
    camera: 16,
    storage: 16,
  },
  {
    name: "Xiaomi 7pro",
    price: 18000,
    color: "black",
    camera: 16,
    storage: 32,
  },
  { name: "Oneplus 9r", price: 45000, color: "black", camera: 32, storage: 64 },
];

 /// cheapest phone find
 
let cheapestPhone = phones[0]; /// we declared that 0 index is the cheapest phone
for (const phone of phones) {
  if (phone.price < cheapestPhone.price) {   // why we took phone.price cause we know to select any object and his properties like object.propertyName
    cheapestPhone = phone;
  }
}
console.log(cheapestPhone);                /// cheapest phone is nokia xl 

/// expensive phone finding

let expensivePhone = phones[0];
for (const phone of phones) {
  if (phone.price > expensivePhone.price) {
    expensivePhone = phone;
  }
}

console.log(expensivePhone); //// expensive phone is oneplus 9r 


