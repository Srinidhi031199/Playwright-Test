//Operators is JavaScript

/* 
Operators are special symbols or keywords that perform specific operations on one or more operands (values or variables) and produce a result.
They are used to perform various tasks such as arithmetic calculations, comparisons, logical operations, and more.

Types of Operators in JavaScript:

1. Arithmetic Operators: +, -, *, /, %, ++, --
2. Assignment Operators: =, +=, -=, *=, /=, %=
3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
4. Logical Operators: && (AND), || (OR), ! (NOT)
5. Bitwise Operators: &, |, ^, ~, <<, >>, >>     --> Never used in real life, only for learning purpose (never used in Automation)
6. Ternary Operator: condition ? expressionIfTrue : expressionIfFalse
7. Typeof Operator: typeof operand
8. Instanceof Operator: object instanceof constructor
9. Spread Operator: ...
10. Nullish Coalescing Operator: ??
11. Optional Chaining Operator: ?.
12. Comma Operator: ,
13. Exponentiation Operator: **
14. Unary Operators: + (unary plus), - (unary minus), ! (logical NOT), typeof, void, delete
15. Relational Operators: in, instanceof       
16. String Operators: + (concatenation), += (concatenation assignment)  

*/ 

//Assignment Operator

let a = 10; // The assignment operator (=) is used to assign the value 10 to the variable a.

console.log(a); // Output: 10

console.log("------------------------------");

//Arithmetic Operators

let sum = a + 5; // The addition operator (+) is used to add the value of a (which is 10) and 5, resulting in 15.

console.log(sum); // Output: 15

console.log("------------------------------");

let difference = a - 3; // The subtraction operator (-) is used to subtract 3 from the value of a (which is 10), resulting in 7.

console.log(difference); // Output: 7

console.log("------------------------------");

let product = a * 2; // The multiplication operator (*) is used to multiply the value of a (which is 10) by 2, resulting in 20.

console.log(product); // Output: 20

console.log("------------------------------");

let quotient = a / 2; // The division operator (/) is used to divide the value of a (which is 10) by 2, resulting in 5.

console.log(quotient); // Output: 5

console.log("------------------------------");

let remainder = a % 3; // The modulus operator (%) is used to find the remainder when the value of a (which is 10) is divided by 3, resulting in 1.

console.log(remainder); // Output: 1

console.log("------------------------------");

a++; // The increment operator (++) is used to increase the value of a by 1. After this operation, a becomes 11.

console.log(a); // Output: 11

console.log("------------------------------");

a--; // The decrement operator (--) is used to decrease the value of a by 1. After this operation, a goes back to 10.

console.log(a); // Output: 10      

console.log("------------------------------");


// n%2 == 1 --> Odd Number,  n%2 == 0 --> Even Number

console.log(a ** 3); // The exponentiation  operator (**) is used to raise the value of 10 to the power of 3, resulting in 1000. 
