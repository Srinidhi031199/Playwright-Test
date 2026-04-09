//   *
//  ***
// ***** 

let n = 5;
for (let i = 1; i <= n; i++) {

    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);

}

//most difficult pattern to print, but we can break it down into three parts: 
//spaces, stars, and spaces. The number of spaces before the stars is n - i, and the number of stars is 2 * i - 1. 
// We can use two nested loops to generate the spaces and stars for each row.