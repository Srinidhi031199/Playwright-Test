//Arrays: 
//Arrays are used to store multiple values in a single variable.
//Arrays are ordered collections of values.
//Arrays are dynamic, which means they can grow or shrink in size.
//Arrays are indexed, which means they can be accessed using indexes.

let fruits = []; // Empty Array

let fruits1 = ["Apple", "Banana", "Orange"]; // Array with values --> 0, 1, 2

console.log(fruits1); // ["Apple", "Banana", "Orange"]

//Arrays works with indexes --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...]

let resutls = ["pass", "fail", "skip", "pending"];
let mixed = ["Apple", 1, true, null, undefined, "Banana", 2, false, "Orange", 3, true, null, undefined];

console.log(mixed.length); //length is a property not a function. 

console.log(mixed[10]);


//Array constructor

let score = new Array(3);
console.log(score);


