console.log("Null and Undefined Literals in JavaScript");

console.log(null === undefined); // Output: false (Strict - checks for both value and type)
console.log(null == undefined);  // Output: true (Loose - performs type coercion)

// Explanation:
// The strict equality operator (===) checks for both value and type, so null and undefined are not equal because they are of different types.
// The loose equality operator (==) performs type coercion, so it considers null and undefined to be equal because they both represent the absence of a value.

//Differece between == and === in JavaScript:
// The == operator (loose equality) compares two values for equality after performing type coercion if necessary. 
// It allows for type conversion, which means that it can consider different types to be equal if their values are equivalent after coercion.

// The === operator (strict equality) compares two values for equality without performing type coercion. 
// It checks both the value and the type, so it only returns true if both operands are of the same type and have the same value.

// Example:
console.log(5 == "5");  // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion, different types)   

//Example: 

let a = 5; // = is used to assign the value 5 to the variable a

console.log(5 == "5");  // Output: true (loose equality, type coercion occurs) -- compares the datatype and values


console.log(5 === "5"); // Output: false (strict equality, no type coercion, different types) -- compares the datatype and values