///// you must see the math function of javascript == just search in google like - javascript random math

///// abs() == absolute value of number means if you write negetive number if you call abs() function than the negetive number will be positive : if you call all math function than code will be ==== Math.callFunction

const myNumber = -50;
const output = Math.abs(myNumber);
console.log(output); /// ans will be 50

//// ceil() == if we have fraction number but we want nearest upper integer number so than we call ceiling function means ceil() than it will change the value nearest upper integer number  like --- 5.5896 call ceil() function it will turn into -- 6 that is the nearest integer number.

const myNum = 9.0000001;
const output1 = Math.ceil(myNum);
console.log(output1); // ans will be 10 which is nearest smaller integer number

///// floor()== if we have fraction number but we want nearest lower integer number so than we call floor function means floor() than it will change the value nearest lower integer number  like --- 5.5896 call floor() function it will turn into -- 5 that is the nearest integer number.

const num = 9.99999;
const output2 = Math.floor(num);
console.log(output2); /// anas will be 9 cause 9 is the nearest lower number

///// round() == if we have fraction number but we want nearest integer number so than we call round function for round figure means round() than it will change the value nearest integer number. like --- 5.5896 call roundd() function it will turn into -- 6 that is the nearest integer number also 5.44444 and call round() function it will be turn into --- 5 cause that is the nearest integer so it is depend on  (0.5>=) upper  or (0.5<) lower

const num2 = 5.999;
const output3 = Math.round(num2);
console.log(output3); // ans is 6 cause it is greater than .5 so that

///// random() == if you call random function it will give you always 0 to 1 fractu=ion random number if you multiple any number with random that will br give always 0 to multiple number output like :

const num3 = Math.random() * 4;
const output4 = Math.round(num3);
console.log(output4); //// it will use some games like card, ludu, uno etc
