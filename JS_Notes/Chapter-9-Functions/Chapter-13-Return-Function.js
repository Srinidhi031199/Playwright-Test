//Return Values: 

function getStatus(code) {
    if(code >= 200 && code < 300) return "Success";
        if(code >= 400 && code < 500) return "Client Error";
            if(code >= 500) return "Server Eroor";
}

console.log(getStatus(404));
console.log(getStatus(201));
console.log(getStatus(500));

console.log("----------------------------------"); 

//Returns Nothing --> Undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statment
}

logTest("Hi this is a log"); 

console.log("----------------------------------"); 

//Return Multiple values --> Using array or Object

function aaa() {
    return [1,2,3,4,5]; 
}

logTest("Hi this is a log"); 

console.log("----------------------------------"); 