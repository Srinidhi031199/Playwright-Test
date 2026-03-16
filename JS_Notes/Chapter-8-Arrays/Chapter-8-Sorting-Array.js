//sorting

let fruits = ["banana", "grapes", "orange", "mango"];
fruits.sort();
console.log(fruits);

//sorts the given array in alphabetical order

let num = [1, 10, 3, 2, 11]; // wrong output becasue it compares the strings. (1,10,11,2,3)
num.sort();
console.log(num);

console.log("------------------------------");

num.sort((a, b) => a - b); // correct output (1,2,3,10,11) using Function
console.log(num);

console.log("------------------------------");

num.sort((a, b) => b - a); // correct output (11,10,3,2,1) using Function
console.log(num);

console.log("------------------------------");


