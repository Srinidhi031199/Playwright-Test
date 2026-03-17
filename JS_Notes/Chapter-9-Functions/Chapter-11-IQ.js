function getStatus(code) {
    if (code >= 200 && code <= 300) return "Success";
    if (code >= 400 && code <= 500) return "Client error";
    if (code >= 500) return "Server Error";
}

getStatus(200);
getStatus(404);
getStatus(500);


console.log("_______________________")

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement 
}

let result = logTest("Login");
console.log(result);

console.log("_______________________")