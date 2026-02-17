//Identifier, Literals, Operators

/* 
Identifier: 
A name given to a variable, function, or label in JavaScript. 
Identifiers must follow specific rules and conventions to be valid. 
They can consist of letters, digits, underscores, and dollar signs, but must not start with a digit.

In JavaScript, identifiers are used to name variables, functions, and other entities in our code, allowing us to reference and manipulate them throughout our program.

Rules for Valid Identifiers:
1. Must start with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($).
2. Can contain letters, digits (0-9), underscores, and dollar signs.
3. Cannot be a reserved keyword in JavaScript (e.g., var, function, if, else, etc.).
4. Are case-sensitive (e.g., myVariable and myvariable are different identifiers).

Examples of Valid Identifiers:
- myVariable
- _myVariable
- $myVariable
- variable123

Examples of Invalid Identifiers:
- 123variable (starts with a digit)
- my-variable (contains a hyphen)
- var (reserved keyword)

*/

var a = 10; // 'a' is an identifier for a variable that holds the value 10
a = 20; // We can reassign a new value to 'a' since it is a variable
console.log(a); // This will print the value of 'a' to the console, which is 20

// In JavaScript semicolons are optional, but it is a good practice to use them to avoid potential issues with automatic semicolon insertion (ASI).
// In the example above, we have used semicolons at the end of each statement for clarity and to follow best practices.

/*
Literals:
They are fixed values that we write directly in our code. 
They can be of various types, such as numbers, strings, booleans, etc. 
For example, 
10 is a numeric literal, "Hello" is a string literal, and true is a boolean literal.

Operators:
They are symbols that perform operations on operands. 
For example, + is an addition operator, 
- is a subtraction operator, 
* is a multiplication operator, and 
/ is a division operator. 
Operators can be used to perform calculations, compare values, and manipulate data in various ways.

In the example above, we used the assignment operator (=) to assign the value 10 to the variable 'a', and 
then we reassigned it to 20. We also used the console.log() function to print the value of 'a' to the console.
*/