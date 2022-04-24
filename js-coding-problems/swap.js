//// swap varibele value by using 3rd person varible like temporary varibel temp:

/// first approch using temporary varible

let first = 10;
let second = 20;
console.log(first, second); /// ans (10 20)
let temp = first; //// i want swap the valur of 1st and 2nd so i declared a temp varibele where i put the value of first varible
first = second; ///// now first clear i will put the 2nd value in 1st varible
second = temp; /// now i put temporary value of 1st on temp in second \
console.log(first, second); ///// ans will be swap now(20 10)

//// 2nd approch by using destructuring using array swap:

[first, second] = [second, first]; /// now the result is (20 20)
console.log(first, second); /// it will change again and now ( 10 20 )

/* for multiline comment in javascript visual studio coode shortcart == shift + Ctrl + A */
