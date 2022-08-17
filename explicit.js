var a1 = Number("25") //Output is 25 as "25" string is converted to number 25
var a2 = Number("") //Output is 0 as "" string is converted to 0
var a3 = Number([]) //Output is 0 as [] is converted to 0
var a4 = Number(null) //Output is 0 as null is converted to 0                             //converting to number
var a5 = Number(true) //Output is 1 as true is converted to 1
var a6 = Number(false) //Output is 0 as false is converted to 0
var a7 = Number("Test") //Output is NaN as "Test" could not be converted to number

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);



var b1 = String(25) //Output is "25" as 25 is converted to string "25"
var b2 = String([]) //Output is "" as [] is converted to empty string ""
var b3 = String(null) //Output is "null" as null is converted to string "null"              //coverted to string
var b4 = String(true) //Output is "true" as true is converted to string "true"
var b5 = String(false) //Output is "false" as false is converted to string "false"
var b6 = String({}) //Output is "[object Object]" as {} is converted to string(similar to calling toString() on a object)


console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);





var c1 = Boolean(25) //Output is true
var c2 = Boolean([]) //Output is true
var c3 = Boolean(null) //Output is false                                       //coverted to boolean
var c4 = Boolean({}) //Output is true
var c5 = Boolean("Yeah! I will be converted to Boolean.") //Output is true

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
console.log(c5);