/* Hoisting: 
Function declaration are hoisted.
You can call them before thery're defined
Functipn expressions and arrow functions are NOT. 
*/

greet("Alice"); //Declaration - Hoisted, wors before defining. 

function greet(name) {
    return `Hello, ${name}!`;
}
    
console.log(greet("sri"));

//const, let is not allowed in hoisting

// sayHi("Sri"); //Typo Error --> sayHi is not a function 

// const sayHi = function(name) {
//     return `Hi, ${name}!`;

// }