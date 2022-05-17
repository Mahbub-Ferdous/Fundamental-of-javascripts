// total topics  = split(), slice(), substr(), concat(), substring(), join(), replace(), trim(), padStart(), padEnd(),toString(), charAt():

//padStart(), padEnd(), toString: any content add first or last we use padStar or padEnd

let num = 5;
// toString(): from any data type to string conversion we use it

let text = num.toString(); // call toString() for numaric to string tranformation like parseInt,parseFloat
let starPad = text.padStart(5, "x"); // two parameter define that padStart(digitCount, content) - where digit count means index number and which content we add with start ot ends
let endPad = text.padEnd(5, 0);
console.log(starPad); // ans is xxxx5 cause we padStart() with string text varibele which is '5'
console.log(endPad); // ans is 50000 cause we padStart() with string text varibele which is '5'

// replace(): to replace any sting like full word than we call replace() function and it have two parameter ('oldString', 'newString')

const workPlace = "I am working in Expedia";
const replace = workPlace.replace("Expedia", "Amazon");
console.log(replace); // ans is I am working in Amazon.

// trim(): The trim() method removes whitespace from both sides of a string:

let text1 = "      Hello World!      "; // there have huge white-spacein after and before the main sentence, we should remove all the white space those are not needed  so we call trim() function
let text2 = text1.trim(); // we call trim function
console.log(text2); // ans is 'Hello World!'

// concat(): we can add one string with another string by using + addition and also we can by using concat()function :

let firstName = "Mahbub";
let lastName = "Ferdous";
let fullName = firstName.concat(lastName); // without space
let fullName2 = firstName.concat(" " + lastName); // with space  same system of addition concatenation
console.log(fullName); // ans is MahbubFerdous
console.log(fullName2); //  ans is Mahbub Ferdous

//
let text5 = "HELLO WORLD";
text5[0] = "A";
console.log(text5); // does not work

// split(): A string can be converted to an array with the split() method:
// split with (" "):
const anthem = "Amar Sonar Bangla Ami Tomay Valobashi";
const arrSplit = anthem.split(" "); // we use whit-space for split
console.log(arrSplit); // ans is [ 'Amar', 'Sonar', 'Bangla', 'Ami', 'Tomay', 'Valobashi' ]
// split with (,):
const alphabet = "a,b,c,d,e,f,g";
const split = alphabet.split(","); //  we use (,) comma for splkit the alphabet from string to array
console.log(split); // ans is ['a', 'b', 'c','d', 'e', 'f','g']

// slice():slice() extracts a part of a string and returns the extracted part in a new string.The method takes 2 parameters: the start position, and the end position (end not included)
const slice = anthem.slice(5, 10); // first parameter is start point indexNumber and 2nd end point is 2nd parameter. but end index point counted (endIndex - 1)
const slice2 = anthem.slice(-15, -2); // if we give nagetive value than -1 will be last index
console.log(slice2);
console.log(slice); // ans is Sonar

// substr():
const substr = anthem.substr(5, 12); // 1st parameter start index number and 2nd parameter define 1st parameter to how much digit distance
const substr1 = anthem.substr(5);
const substr2 = anthem.substr(-15, 15); // minus parameter is good for substr
console.log(substr);     // ans is Sonar Bangla
console.log(substr1);   // ans is Sonar Bangla Ami Tomay Valobashi
console.log(substr2);  // ans is Tomay Valobashi

// substring():
const substring = anthem.substring(5,17);
const substring1 = anthem.substring(5);
const substring2 = anthem.substring(-9);
console.log(substring);   // ans is 
console.log(substring1);   // ans is 
console.log(substring2);   // ans is 


