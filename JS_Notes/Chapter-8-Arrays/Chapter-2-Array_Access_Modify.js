// Accessing & Modifying

const { statSync } = require("fs");

let statuses = ["pass", "fail", "skip"];
console.log(statuses[2]);

console.log(statuses[-1]);

//Modifying

statuses[1] = "Blocked"
console.log(statuses);

//Length
console.log(statuses.length);