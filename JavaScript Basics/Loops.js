const flag = true

if (flag) {
    // For Loop : A for loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly.
    for (let i = 0; i < 5; i++) {
        console.log("For Loop iteration: " + i)
    }
}

if (flag) 
    {
    console.log("Flag is true")
    } 
else 
    {
    console.log("Flag is false")
    }

// While Loop : A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition.
let count = 0
while (count < 3) {
    console.log("While Loop count: " + count)
    count++
}

//example

let i = 0
while (i < 5) {
    i++
    console.log(i)
}

// Do...While Loop : A do...while loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true.
let j = 0
do {
    console.log("Do...While Loop j: " + j)
    j++
} while (j < 3)

//example
let k = 0
do {
    k++
} while (k < 5);
console.log(k)

//example: 
//2 and 5
for (let n = 1; n <= 100; n++) {
    if (n%2 == 0 && n%5 == 0)
    console.log(n)
}