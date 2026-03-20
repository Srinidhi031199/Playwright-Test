//Scope in functions 
/*
Scope: Where variables are accessible. 
    * Global Scope: Accessible everywhere.
    * Function Scope: Accessible within the function. 
    * Blocked Scope: Accessible within { } (let, const)
*/ 


let env="staging"; //Global Scope

//------------------------------------
//function scope
function setupConfig() {
    let timeout = 3000; //local scope 
    console.log(env); // can access global
    console.log(timeout); //can access local
}

setupConfig();
 console.log(env); 
 //console.log(timeout); //Reference error --> Not accessible outside


//------------------------------------

//Nested Scope

function outer() {
    let x = 10; 

    function inner() {
        let y = 20; 
        console.log(x); //Inner can access the outer's variable
    }

    inner();
    console.log(y);  // Outer cannot access inner's variable --> Block Scoped
}




