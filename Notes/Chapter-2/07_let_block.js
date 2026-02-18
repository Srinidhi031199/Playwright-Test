let a = "sri"; // Global Scope, 'a' is accessible throughout the entire program
{
    console.log(a); // Output: "sri", because 'a' is accessible within the block scope (Global Scope)
}

console.log("-----------------------------");

let b = "sri"; // Global Scope, 'b' is accessible throughout the entire program

    if (true) {
    console.log(b); //local vaiable , TDZ
    let b = "temp";  //output : ReferenceError: Cannot access 'b' before initialization, because 'b' is not hoisted with let and is in the Temporal Dead Zone (TDZ) until it is declared and initialized within the block scope
    }

console.log("-----------------------------");