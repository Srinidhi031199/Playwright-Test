//Closures
// A closure is when a function remembers variables from its outer scope even after the outer function has finished executing. 

function outer() { 
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
        return inner;    // you can return the inner using closure concept. 
}

let fn_inner = outer();

fn_inner();

