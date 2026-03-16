//Slicing and Combining

let arr = [1, 2, 3, 4, 5];
let slice = arr.slice(1, 3); // [2, 3] 

console.log(slice);

console.log(arr.slice(-2)); // [4, 5]

console.log(arr.slice(2)); // [3, 4, 5]

// rarely used in automation

// if we give out of index
console.log(arr.slice(2, 6)); // [3, 4, 5] --> Print the data but there will be no exception.

console.log("----------------");

//Concatination

let arr1 = [1, 2, 3, 4, 5];

let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

console.log(a.concat(b, c));

console.log("----------------");


//Spread (Modern Way) - concatination (...)

let d = [...a, ...b, ...c];
console.log(d);

console.log("----------------");


// join 

let s = ["pass", "fail", "skip"].join(" = "); // , | : --> are delimiters

console.log(s);


console.log("----------------");

