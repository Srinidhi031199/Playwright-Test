//Comparision Operators ( ==, ===, !=, !==, >, <, >=, <= )
// always return boolean value (true or false)

let x = 5;
let y = 10;

console.log(x == y); // The equality operator (==) checks if the value of x is equal to the value of y. In this case, it returns false because 5 is not equal to 10.

console.log("------------------------------");

//Revision
console.log(null === undefined); // Output: false (Strict - checks for both value and type)
console.log(null == undefined);  // Output: true (Loose - performs type coercion)

console.log("------------------------------");

console.log(x != y); // The inequality operator (!=) checks if the value of x is not equal to the value of y. In this case, it returns true because 5 is not equal to 10.

console.log(x > y); // The greater than operator (>) checks if the value of x is greater than the value of y. In this case, it returns false because 5 is not greater than 10.

console.log(x < y); // The less than operator (<) checks if the value of x is less than the value of y. In this case, it returns true because 5 is less than 10.

console.log(x >= y); // The greater than or equal to operator (>=) checks if the value of x is greater than or equal to the value of y. In this case, it returns false because 5 is not greater than or equal to 10.

console.log(x <= y); // The less than or equal to operator (<=) checks if the value of x is less than or equal to the value of y. In this case, it returns true because 5 is less than or equal to 10.  

console.log("------------------------------");

console.log( 5 == "5"); // Output: true (Loose equality - performs type coercion)

console.log( 5 === "5"); // Output: false (Strict equality - checks for both value and type)

console.log("------------------------------");

console.log (5 != "5"); // Output: false (Loose inequality - performs type coercion) int 5 and string "5" are considered equal in loose comparison, so the inequality operator returns false.

console.log (5 != "6"); // Output: true (Loose inequality - performs type coercion)

console.log("------------------------------");

console.log (5 !== "5"); // Output: true (Strict inequality - checks for both value and type)
