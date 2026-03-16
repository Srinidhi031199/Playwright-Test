//Checking Arrays

let res = Array.isArray([1, 2, 3]);
let res1 = Array.isArray("a");

console.log(res);
console.log(res1);

console.log("----------------");


//some & every

let r = [85, 76, 98].some(s => s >= 70); //true
console.log(r);

let r1 = [85, 76, 98].every(s => s >= 70); //true 
console.log(r1);