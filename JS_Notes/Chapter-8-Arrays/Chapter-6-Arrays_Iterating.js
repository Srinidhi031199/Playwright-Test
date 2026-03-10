//Iterate - Go from one to another 

let test = ["login", "register", "logout"];

for (let i = 0; i < test.length; i++) {
    console.log(test[i]);
}

console.log("----------------------");
//for of loop

for (let t of test) {  // of will give you values of the array 
    console.log(t);
}

console.log("----------------------");
//for...of (cleanest of values)
for (let test1 of test) {
    console.log(test1);
}

console.log("----------------------");
//for each loop

test.forEach((test, index) => {
    console.log(`${test} ${index}`);
});

console.log("----------------------");

let students = ["sri", "Nidhi", "Srini", "nidhi"]

for (student in students) {   // in will give you index of the array 
    console.log(student, "-->", students[student]);

}