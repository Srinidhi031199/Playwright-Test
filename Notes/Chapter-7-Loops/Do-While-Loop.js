// Do...While Loop :
// A do...while loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true.

let retry = 0; 

do { 
    console.log("Execute a code");
    console.log("Retrying......",retry);
    retry++;
} while (retry < 3);

