//True sceanarios for loose equality (==) in JavaScript:
0 == ""     //true
0 == 0     //true
0 == false //true
0 == null  //false
0 == undefined //false
" \t\n" == 0 //true (string with only whitespace is considered equal to 0 in loose equality)


//False scenarios for loose equality (==) in JavaScript:
null == 0 //false
null == false //false
null == undefined //true

undefined == 0 //false
undefined == false //false
undefined == null //true

// In JavaScript, the loose equality operator (==) performs type coercion, which can lead to unexpected results when comparing different types of values. 
// It is generally recommended to use the strict equality operator (===) to avoid these issues and ensure that both the value and type are compared without coercion.


Nan == NaN //false
// In JavaScript, NaN (Not-a-Number) is a special value that represents an undefined or unrepresentable value in numerical calculations. 
// It is important to note that NaN is not equal to itself, which is why the expression NaN == NaN evaluates to false. 
// To check if a value is NaN, you can use the built-in function isNaN() or the Number.isNaN() method.


// === 

console.log(5 === "5"); // Output: false (strict equality, no type coercion, different types) -- compares the datatype and values
console.log(5 === 5);   // Output: true (strict equality, same type and value) -- compares the datatype and values
console.log(null === undefined); // Output: false (strict equality, different types) -- compares the datatype and values
console.log(null === null);      // Output: true (strict equality, same type and value) -- compares the datatype and values
console.log(undefined === undefined); // Output: true (strict equality, same type and value) -- compares the datatype and values        

