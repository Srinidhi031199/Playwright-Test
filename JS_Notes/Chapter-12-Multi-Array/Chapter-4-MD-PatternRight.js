// n = 5a
// *
// * *
// * * *

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        //row = row + "* ";
        row += "* ";
    }
    console.log(row.trim()); //remove trailing space
}

//if we don't use trim() we will have extra space at the end of each line, which may not be desirable.

/*
        i
        1   j
        1 | 2
        1 | 2 | 3
        1 | 2 | 3 | 4
        1 | 2 | 3 | 4 | 5

*/