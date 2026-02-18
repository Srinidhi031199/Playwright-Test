/* operators and operands

Operators are symbols that perform operations on operands (values or variables). They can be categorized into several types:

1. Arithmetic Operators: These operators perform mathematical operations on numbers.
  - Addition (+): Adds two operands.
  - Subtraction (-): Subtracts the second operand from the first.
  - Multiplication (*): Multiplies two operands.
  - Division (/): Divides the first operand by the second.
  - Modulus (%): Returns the remainder of a division operation.

2. Assignment Operators: These operators assign values to variables.
  - Assignment (=): Assigns a value to a variable.
  - Addition Assignment (+=): Adds a value to a variable and assigns the result to that variable.
  - Subtraction Assignment (-=): Subtracts a value from a variable and assigns the result to that variable.
  - Multiplication Assignment (*=): Multiplies a variable by a value and assigns the result to that variable.
  - Division Assignment          


3. Comparison Operators: These operators compare two values and return a boolean result (true or false).
  - Equal to (==): Checks if two operands are equal (type coercion may occur).
  - Strict Equal to (===): Checks if two operands are equal and of the same type.    
  - Not Equal to (!=): Checks if two operands are not equal (type coercion may occur).
  - Strict Not Equal to (!==): Checks if two operands are not equal or not of the same type.
  - Greater than (>): Checks if the left operand is greater than the right operand.
  - Less than (<): Checks if the left operand is less than the right operand.
  - Greater than or equal to (>=): Checks if the left operand is greater than or equal to the right operand.
  - Less than or equal to (<=): Checks if the left operand is less than or equal to the right operand.

4. Logical Operators: These operators are used to combine multiple boolean expressions and return a boolean result.
  - Logical AND (&&): Returns true if both operands are true, otherwise returns false.
  - Logical OR (||): Returns true if at least one of the operands is true, otherwise returns false.
  - Logical NOT (!): Returns true if the operand is false, and false if the operand is true.

5. Bitwise Operators: These operators perform bit-level operations on binary representations of numbers.
  - Bitwise AND (&): Performs a bitwise AND operation.
  - Bitwise OR (|): Performs a bitwise OR operation.
  - Bitwise XOR (^): Performs a bitwise XOR operation.
  - Bitwise NOT (~): Performs a bitwise NOT operation.
  - Left Shift (<<): Shifts bits to the left.
  - Right Shift (>>): Shifts bits to the right.

6. Ternary Operator: This operator is a shorthand for an if-else statement and takes three operands.
  - Ternary Operator (condition ? expression1 : expression2): Evaluates the condition and returns expression1 if the condition is true, otherwise returns expression2.

7. Type Operators: These operators are used to check the type of a variable or value.
  - typeof: Returns a string indicating the type of the operand.
  - instanceof: Checks if an object is an instance of a specific class or constructor function.

8. Other Operators: There are also other operators in JavaScript, such as the comma operator (,) which allows multiple expressions to be evaluated in a single statement, and the delete operator which is used to remove properties from objects.

console.log("---------------------------------------------");
Overall, operators are essential for performing various operations on data in JavaScript, and understanding how they work is crucial for writing effective code.  
console.log("---------------------------------------------");

Operands are the values or variables that operators act upon. They can be literals (e.g., numbers, strings) or variables that hold values.
For example, in the expression "5 + 3", the operands are "5" and "3", and the operator is "+". In the expression "x * y", the operands are the variables "x" and "y", and the operator is "*".

*/ 

// Example of operators and operands

let a = 10; // 'a' is an operand, '=' is an assignment operator, and '10' is a literal operand
let b = 20; // 'b' is an operand, '=' is an assignment operator, and '20' is a literal operand

let sum = a + b; // 'sum' is an operand, '=' is an assignment operator, 'a' and 'b' are operands, and '+' is an arithmetic operator

console.log(sum); // Output: 30, because the value of 'sum' is the result of adding 'a' and 'b'