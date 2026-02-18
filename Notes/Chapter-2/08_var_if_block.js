var a = "sri";
if (true) {
    console.log(a); // Output: "sri", because 'a' is accessible within the block scope (Global Scope)
    var a = "temp"; // 'a' is re-declared and updated within the same function scope //output: sri, because 'a' is hoisted to the top of the function scope and initialized with "sri" before it is updated to "temp"
}
