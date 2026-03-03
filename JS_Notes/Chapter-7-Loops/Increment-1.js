let a = 10;
let b = ++a; // pre-increment: a is incremented before being assigned to b
console.log(a); // Output: 11
console.log(b); // Output: 11

/*
E R T --> Expression Result Table

Expression | Result | Table
-------------------------------
Line No | Expression      | Result
1       | let a = 10;     | a = 10
2       | let b = ++a;    | a = 11, b = 11
3       | console.log(a); | Output: 11
4       | console.log(b); | Output: 11
*/

console.log("------------------------------");

let c = 10;
console.log(c++ + c) ; // post-increment: c is used in the expression before being incremented
console.log(c); // Output: 12

/*
E R T --> Expression Result Table

Expression | Result | Table
-------------------------------
Line No | Expression          | Result
1       | let c = 10;        | c = 10
2       | console.log(c++ + c) | Output: 21 (c++ is 10, c is 11)
3       | console.log(c);     | Output: 11 (c is now 11 after post-increment)
*/  

console.log("------------------------------");

let d = 10;
console.log(d++ + ++d); 
console.log(d); // Output: 12   

/*
E R T --> Expression Result Table

Expression | Result | Table
-------------------------------
Line No | Expression          | Result
1       | let d = 10;        | d = 10
2       | console.log(d++ + ++d) | Output: 22 (d++ is 10, ++d is 12)
3       | console.log(d);     | Output: 12 (d is now 12 after post-increment and pre-increment)
*/  

console.log("------------------------------");

let e = 10;
console.log(++e + ++e); 
console.log(e); // Output: 12

/*
E R T --> Expression Result Table

Expression | Result | Table
-------------------------------
Line No | Expression          | Result
1       | let e = 10;     | e = 10
2       | console.log(++e + ++e) | Output: 23 (++e is 11, ++e is 12)
3       | console.log(e);     | Output: 12 (e is now 12 after two pre-increments)
*/      

console.log("------------------------------");

// decrement operator

let f = 10;
console.log(f-- + f); 
console.log(f); // Output: 9

/*
E R T --> Expression Result Table

Expression | Result | Table
-------------------------------
Line No | Expression          | Result
1       | let f = 10;     | f = 10
2       | console.log(f-- + f) | Output: 19 (f-- is 10, f is 9)
3       | console.log(f);     | Output: 9 (f is now 9 after post-decrement)
*/

console.log("------------------------------");
