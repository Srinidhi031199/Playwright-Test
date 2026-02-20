//null and typeof

//Null --> It represents the intentional absence of any object value. 
//It is a primitive value that indicates that a variable has no value or that an object property does not exist. 
// When you assign null to a variable, it means that the variable is explicitly set to have no value.

let myVariable = null; // myVariable is explicitly set to have no value
let searchResult = null; // searchResult is explicitly set to have no value

console.log(myVariable); // Output: null

console.log(searchResult); // Output: null

let declaratedVariable; // declaredVariable is declared but not initialized, so it is undefined

console.log(declaratedVariable); // Output: undefined


// typeof operator --> It is a unary operator that returns a string indicating the type of the unevaluated operand.
// It can be used to determine the type of a variable or expression at runtime.

console.log(typeof myVariable); // Output: "object" (this is a known quirk in JavaScript, as null is considered an object)
console.log(typeof searchResult); // Output: "object"
console.log(typeof declaratedVariable); // Output: "undefined"

// Note: The typeof operator returns "object" for null, which is a historical bug in JavaScript. 
// It is important to remember that null is not actually an object, but rather a primitive value that represents the absence of any object value.