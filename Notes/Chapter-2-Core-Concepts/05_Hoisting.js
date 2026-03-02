/*
Hoisting:
Hositing is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. 
This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
*/

// Example of hoisting with variables declared using var
console.log(x); // Output: undefined, because 'x' is hoisted but not initialized

var x = 5; // Declaration and initialization of 'x'

console.log(x); // Output: 5, because 'x' is now initialized

//Phase 1 - Memory Creation Phase: During this phase, the JavaScript engine allocates memory for variables and functions. 
//It hoists the declarations to the top of their scope, but the initializations are not hoisted. So, 'x' is declared and allocated memory, but it is not initialized yet, resulting in 'undefined'.

//Phase 2 - Code Execution Phase: During this phase, the JavaScript engine executes the code line by line. 
//When it reaches the line where 'x' is initialized with the value 5, it assigns that value to 'x'. Before this line, 'x' is still 'undefined' because the initialization has not occurred yet.

console.log("-----------------------------");

// another example

console.log(test); // Output: undefined, because 'test' is hoisted but not initialized

var test = "Sri"; // Declaration and initialization of 'test'

console.log(test); // Output: "Sri", because 'test' is now initialized

console.log("-----------------------------");
//another example with let and const

//let
console.log(name); // Output: ReferenceError: Cannot access 'name' before initialization, because 'name' is not hoisted with let

let name = "sri"; // Declaration and initialization of 'name'

console.log(name); // Output: "sri", because 'name' is now initialized

console.log("-----------------------------");

//const
console.log(status); // Output: ReferenceError: Cannot access 'status' before initialization, because 'status' is not hoisted with const

const status = "Active"; // Declaration and initialization of 'status'

console.log(status); // Output: "Active", because 'status' is now initialized

console.log("-----------------------------");

// TDZ --> Temporal Dead Zone, the period between the start of a block and the point where a variable is declared.
// During the TDZ, any attempt to access the variable will result in a ReferenceError, as the variable is not yet initialized and cannot be accessed until it is declared.
//Example of TDZ with let
/*
console.log(username); ----------
console.log(age);                | --> TDZ, because 'username' and 'age' are not hoisted with let
console.log(isLoggedIn); --------

let username = "sri";

console.log(username); // Output: "sri", because 'username' is now initialized
*/

console.log("-----------------------------");