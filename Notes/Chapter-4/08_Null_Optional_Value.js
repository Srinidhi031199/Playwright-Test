//Null and Optional Values in JavaScript

let val = null ?? "Default Value"; // The nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined.

console.log(val); // Output: "Default Value" (Since val is null, the nullish coalescing operator returns "Default Value")

val = val + " is not null"; // Concatenating the string to val

console.log(val); // Output: "Default Value is not null" (The value of val is now "Default Value is not null" after concatenation)

// very useful when you want to provide a default value for a variable that may be null or undefined, without having to check for those conditions explicitly.
// useful in Test data handling. 