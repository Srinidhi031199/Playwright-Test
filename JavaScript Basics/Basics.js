console.log("Hello World")
console.log("This is a basic JavaScript file.")

// Comment

//Data Types: A data type is the type of data a variable has, like is it a text or is it a number.
// commonly used data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Null and Undefined


//Variables : A variable has a name, and you can store something in it.
var a = 4 //ES5 engine features : (var)

//ES6 engine features : (let, const) 
let b = "Test"

let required = true; //boolean


console.log(typeof (a))
console.log(typeof (b))
console.log(typeof (required))

// we cannot redeclare a variable with let keyword but possible with var keyword

b = a + 10
console.log(b)
console.log(!required)



//Operators : Operators are used to perform operations on variables and values.
/* Arithmetic operators (+, -, etc.)
Assignment operators (=, +=, -=, etc.)
Comparison operators (==, >, <, etc.)
Logical operators (&&, ||, etc.)
Bitwise operators (&, |, etc.)
*/

let sum = a + 10
console.log("Sum is: " + sum)




