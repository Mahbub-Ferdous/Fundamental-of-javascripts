/// what is switch...case?? how it work?? why we use it??

// ans == switch case is such like conditional pogramming if we have lots of value than we can apply it, it is more faster than conditional statements,,, it depends on the situation for usecase

/// structure :
/* 

switch(expression){
    case a:
        //codeblocks
        break;
    case b:
        //codeblocks
        break;
    case n:
        //codeblocks
        break;
    default:
        //codeblocks
        break;
}

*/

var color = "white";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "green":
    console.log("color is red");
    break;
  case "yellow":
    console.log("color is green");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "white":
    console.log("color is white");
    break;
  default:
    console.log("color is default");
}

/////////////////////////////////// condition statement always check all the condition true or false but switch case print the actual true output do not check all the condition so that it is more faster than conditional statements///////////////////////////////////
