//Loops -> Loops are used to repeat a block of code multiple times. There are different types of loops in JavaScript, 
//Including: for loop, while loop, do-while loop, and for...in loop.

/* 
For loop: A for loop is used to execute a block of code a specific number of times. 
It consists of three parts: initialization, condition, and increment/decrement.
*/

for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}


//There is no difference if we use pre-increment or post-increment in the for loop, as the increment happens after the block of code is executed in both cases.

for (let i = 0; i < 5; ++i) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}