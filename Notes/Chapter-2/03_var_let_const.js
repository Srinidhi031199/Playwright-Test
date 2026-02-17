//var, let, const

//var
var a = 10; //Global Scope
console.log(a); // Output: 10

/*
Function: It is a block of code designed to perform a particular task.
It is executed when "something" invokes it (calls it).
Reusable code that can be called multiple times with different arguments to perform a specific task.
*/

//var also used for re-declaring variables, which can lead to unexpected behavior and bugs in larger codebases.

//function scope
function test() {   //Defining a function named 'test' 
    var a = 20; //Local Scope, 'a' is only accessible within this function
    console.log(a); // Output: 20, because 'a' is accessible within the function scope
    if (true) {
        var a = 30; // 'a' is re-declared and updated within the same function scope
        console.log(a); // Output: 30, because 'a' is updated to 30 within the function scope
    }
    console.log(a); // Output: 30, because 'a' is updated to 30 within the function scope (Manipulation of 'a' within the function scope)
}

 //calling the function 'test' to execute its code
test();

console.log("-----------------------------");

//let
let b = 10; //Global Scope
console.log(b); // Output: 10

//function scope
function testLet() {   //Defining a function named 'testLet' 
    let b = 20; //Local Scope, 'b' is only accessible within this function
    console.log(b); // Output: 20, because 'b' is accessible within the function scope
    if (true) {
        let b = 30; // 'b' is block-scoped and does not affect the outer 'b'
        console.log(b); // Output: 30, because this 'b' is a different variable scoped to the block
    }
    console.log(b); // Output: 20, because the outer 'b' is unaffected by the inner block's 'b' (Encapsulation of 'b' within the block scope)
}

testLet();

console.log("-----------------------------");

//const
const c = 10; //Global Scope
console.log(c); // Output: 10

//function scope
function testConst() {   //Defining a function named 'testConst' 
    const c = 20; //Local Scope, 'c' is only accessible within this function
    console.log(c); // Output: 20, because 'c' is accessible within the function scope
    if (true) {
        const c = 30; // 'c' is block-scoped and does not affect the outer 'c'
        console.log(c); // Output: 30, because this 'c' is a different variable scoped to the block
    }
    console.log(c); // Output: 20, because the outer 'c' is unaffected by the inner block's 'c' (Encapsulation of 'c' within the block scope)
}

testConst();

console.log("-----------------------------");

//var is only used when you don't care about function scope and want to allow re-declaration and updates.
//while let and const provide better control over variable scope and immutability, making them more suitable for modern JavaScript development.