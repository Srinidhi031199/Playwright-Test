//Searching

let results = ["pass", "Fail", "pass", "error", "fail"];

//indexOf
console.log(results.indexOf("pass"));

console.log(results.indexOf("fail"));

console.log(results);

//includes
console.log(results.includes("pass"));

console.log(results.includes("fail"));

console.log(results);


//finds - returns first matching element

let num = [10, 20, 30, 40, 50];
console.log(num.find(x => x > 20));
