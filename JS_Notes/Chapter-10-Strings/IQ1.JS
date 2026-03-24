// ✅ Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging")); //true

console.log(url.startsWith("https")); //true

console.log(url.endsWith("/dashboard")); //true

console.log("------------------------------------");

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status = log.match(/Status: (\d+)/)[1];

console.log(status); //500

console.log("------------------------------------");

// let env = "staging"; let module = "auth"; let count = 7; 

// let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;

// console.log(testId);

console.log("------------------------------------");