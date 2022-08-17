var a1 = 12 + ""    //Output is "12" as number 12 is converted to string "12"
var a2 = "15" * 2    //Output is 30 as string 15 is converted to number 15
var a3 = "15" - "11" //Output is 4 as both the strings are converted to number
var a4 = undefined + 6 //Output is NaN as undefined could not be converted to number
var a5 = "Hello" + null  //Output is "Hellonull" as null is converted to string "null"
var a6 = null + 25     //Output is 25 as null is converted to 0.
var a7 = true + true //Output is 2 as true is converted to number 1.
var a8 = false + 10 //Output is 10 as false is converted to number 0.
var a9 = 10 * [6] //Output is 60 as [6] is converted to number 6.
var a10 = 10 * [10, 20] //Output is NaN as [10, 20] could not be converted to number
var a11 = [1] + [1,2] //Output is "11,2" as [1] is converted to "1" and [1,2] is converted "1,2". Finally the two are concatenated to give the result "11,2"



console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
