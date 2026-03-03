//Logical Operators --> && (AND), || (OR), ! (NOT)

/*
And Operator (&&)
A B | Z
0 0 | 0
0 1 | 0
1 0 | 0
1 1 | 1 --> Z is true only when both A and B are true
*/ 

/* 
OR Operator (||)
A B | Z
0 0 | 0
0 1 | 1
1 0 | 1
1 1 | 1 --> Z is true when either A or B is true (or both)
*/

/*
NOT Operator (!)
A | Z
0 | 1
1 | 0 --> Z is the opposite of A
*/

console.log("------------------------------");

//Examples:
let a = true;
let b = false;  

console.log(a && b); // Output: false (AND operator returns true only if both operands are true)

console.log(a || b); // Output: true (OR operator returns true if at least one operand is true)

console.log(!a); // Output: false (NOT operator returns the opposite of the operand)

console.log(!b); // Output: true (NOT operator returns the opposite of the operand)

console.log("------------------------------");
