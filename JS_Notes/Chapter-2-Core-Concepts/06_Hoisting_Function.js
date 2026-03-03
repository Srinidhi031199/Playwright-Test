/* Hoisting example with functions */

// Example of hoisting with function declarations

//Step1 - Defining a function before it is declared

function getUserStatus() { //Defining a function named 'getUserStatus'

    // var status_code is hoisted to the top of the function scope, but it is not initialized until the line where it is declared.
    
    console.log(status_code); // Output: undefined, because 'status_code' is hoisted but not initialized

    var status_code = "Active"; // Declaration and initialization of 'status_code'

    console.log(status_code); // Output: "Active", because 'status_code' is now initialized

}

//Step2 - Calling the function 'getUserStatus' to execute its code
getUserStatus(); // Calling the function 'getUserStatus' to execute its code