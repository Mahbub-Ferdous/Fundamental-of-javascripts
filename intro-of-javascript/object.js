/// what is object : any kinds of things are called object, objects always define with some properties: property have two part = 1. key 2. value

/* 
structure :

variable-keyword objectName = {key: value, key1: value1}       // if keyname is one or more than we write it under the cautation, and string valur also write under the cautation
*/

var student1 = {
  id: 99,
  name: "Mahbub Tanvir",
  registration_number: 12345678,
  division: "Science",
  marks: 810,
  grade: "A+",
  gmail: "mahbubtanvir33@gmail.com",
};

var car1 = {
  name: "honda civic 2015",
  brand: "honda",
  price: 2000000,
  color: "perl",
};

var book = {
  title: "Start With Why",
  author: "Simon Sinek",
  price: 200,
  pages: 500,
  publisher: "Penguin",
};

console.log(book);

/// indevisual property in output :
// if you get single property from a objects :
// structure = objectName.propertyName

console.log(book.publisher); ////  ans is penguin

// put the property in a variable:

var price = book.price;
console.log(price);

//// set a object property value : means change property value :

////  adding a property in onject:

/// structure === objectName.newPropertyName = newpropetyValue;

book.edition = "6th"; //  a new edition 7th come so change it from 6th to 7th edition
console.log(book);

/// remove a property from objects :

// structure === delete-keyword objectName.propertyNAme  [ the property will be deleted or remove from the objects]

delete student1.registration_number;
console.log(student1);

////  change property value from objrct :

/// structure ==== objectName.propertyName = changingValue;

//  in book objects a new edition 7th come so change it from 6th to 7th edition

book.edition = "7th";
console.log(book); /// the edition property of book objects will be 7th edition



/////////////////////////// all this object.propertyName method we can also use == objectName['propertyName'] = propertyValue;


////////////////////////// we can also declared a variable and put the propertyName on it than we can acces everything on tha system befor