// * * * * *
// * * * *
// * * *
// * *
// *

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}


/*
        j
 i  5 | 4 | 3 | 2 | 1
    4 | 3 | 2 | 1
    3 | 2 | 1
    2 | 1
    1

*/ 