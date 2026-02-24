// typeof operator : typeof operand

console.log(typeof 42); // Output: "number" (The typeof operator returns the type of the operand, which is "number" for the value 42)

console.log(typeof "Hello"); // Output: "string" (The typeof operator returns the type of the operand, which is "string" for the value "Hello")

console.log(typeof true); // Output: "boolean" (The typeof operator returns the type of the operand, which is "boolean" for the value true)

console.log(typeof undefined); // Output: "undefined" (The typeof operator returns the type of the operand, which is "undefined" for the value undefined)

console.log(typeof null); // Output: "object" (The typeof operator returns "object" for null due to a historical bug in JavaScript)

console.log(typeof {}); // Output: "object" (The typeof operator returns the type of the operand, which is "object" for an empty object literal)

console.log(typeof []); // Output: "object" (The typeof operator returns "object" for arrays, as they are a type of object in JavaScript)

console.log(typeof function() {}); // Output: "function" (The typeof operator returns "function" for function expressions)

console.log("------------------------------");

// The typeof operator is useful for checking the type of a variable or value at runtime, which can help prevent errors and ensure that your code behaves as expected.      