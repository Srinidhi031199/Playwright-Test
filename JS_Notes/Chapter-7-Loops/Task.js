let a = 5;
let b = a++ + a;
let c = a++ + ++a + ++a + ++a + a++;
console.log(a); // Output: 11
console.log(b); // Output: 11
console.log(c); // Output: 55

/*
E R T --> Expression Result Table

Expression | Result | Table
-------------------------------
Line No | Expression          | Result
1       | let a = 5;          | a = 5
2       | let b = a++ + a;    | b = 5 + 6, a = 6 (post-increment) b = 11
3       | let c = a++ + ++a + ++a + ++a + a++; | c = 6 + 8 + 9 + 10 + 10, a = 11 (post-increment and pre-increment)c = 6 + 8 + 9 + 10 + 10 = 43
4       | console.log(a);     | Output: 11
5       | console.log(b);     | Output: 11
6       | console.log(c);     | Output: 43
*/  


