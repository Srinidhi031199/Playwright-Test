// Literals:
// They are fixed values that we write directly in our code. 
// They can be of various types, such as numbers, strings, booleans, etc. 
// For example, 
// 10 is a numeric literal, "Hello" is a string literal, and true is a boolean literal.

let age = 25; // numeric literal
let name = "Alice"; // string literal
let isStudent = true; // boolean literal

console.log(age); // Output: 25
console.log(name); // Output: Alice
console.log(isStudent); // Output: true

//Types of literals in JavaScript:
/* 
1. Numeric Literals: Represent numbers, e.g., 42, 3.14, -5.   --> rapidtables.com/convert/number/hex-to-decimal.html
2. String Literals: Represent sequences of characters, e.g., "Hello", 'World'.
3. Boolean Literals: Represent true or false values.
4. Null Literal: Represents the absence of any value, denoted by null.
5. Undefined Literal: Represents an uninitialized variable, denoted by undefined.
6. Object Literals: Represent objects using curly braces {}, e.g., { name: "Alice", age: 30 }.
7. Array Literals: Represent arrays using square brackets [], e.g., [1, 2, 3].
8. Regular Expression Literals: Represent regular expressions using slashes /pattern/, e.g., /abc/.
*/  

/* 
1. Integer - Decimal - 42,0,-7
2. Floating-point - 3.14, -0.001
3. Exponential - 1e6 (which is 1 x 10^6 or 1,000,000)
4. Hexadecimal - 0xFF (which is 255 in decimal)
5. Octal - 0o77 (which is 63 in decimal)
6. Binary - 0b1010 (which is 10 in decimal)
7. Boolean - true, false
8. String - "Hello", 'World'
9. Null - null
10. Undefined - undefined
11. Object - { name: "Alice", age: 30 }
12. Array - [1, 2, 3]
13. Regular Expression - /abc/
*/


//Example for each type of literal:

// Numeric Literals
let integerLiteral = 42;
let floatLiteral = 3.14;
let exponentialLiteral = 1e6; // 1 x 10^6
let hexadecimalLiteral = 0xFF; // 255 in decimal
let octalLiteral = 0o77; // 63 in decimal
let binaryLiteral = 0b1010; // 10 in decimal

// String Literals
let stringLiteral1 = "Hello";
let stringLiteral2 = 'World'; // Both double and single quotes can be used for string literals in JavaScript.

// Boolean Literals
let booleanLiteralTrue = true;
let booleanLiteralFalse = false;

// Null Literal
let nullLiteral = null;

// Undefined Literal
let undefinedLiteral;

// Object Literal
let objectLiteral = { name: "Alice", age: 30 };

// Array Literal
let arrayLiteral = [1, 2, 3];

// Regular Expression Literal
let regexLiteral = /abc/;

//Template Literal (introduced in ES6)
let abc = "Alice";
let templateLiteral = `Hello, ${abc}!`; // Output: Hello, Alice!   
console.log(templateLiteral); // Output: Hello, Alice!


let math = 10 + 5; // This is an expression, not a literal, because it involves an operation (addition) that needs to be evaluated to produce a value. The result of this expression is the numeric literal 15.
console.log(math); // Output: 15

let math1 = `2+2=${2+2}`; // This is a template literal that includes an expression. The expression (2+2) will be evaluated to produce the numeric literal 4, and the resulting string will be "2+2=4".
console.log(math1); // Output: 2+2=4

//to store the path of a file, we can use a string literal:
let filePath = "C:\\Users\\Alice\\Documents\\file.txt"; // Using double backslashes to escape the backslash character in the string literal.
console.log(filePath); // Output: C:\Users\Alice\Documents\file.txt

//Urls can also be stored as string literals:
let url = "https://www.example.com";
console.log(url); // Output: https://www.example.com
