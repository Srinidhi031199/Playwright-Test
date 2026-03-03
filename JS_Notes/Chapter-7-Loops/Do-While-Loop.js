// Do...While Loop :
// A do...while loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true.

let retry = 0; 

do { 
    console.log("Execute a code");
    console.log("Retrying......",retry);
    retry++;
} while (retry < 3);

console.log("-----------------------------")

let a =10;
while(a < 10) {
    console.log(a);
    a++;
}
//Output: No output will be printed

console.log("-----------------------------")
do {
    console.log(a);
    a++;
}while(a < 10);

//Output: 10