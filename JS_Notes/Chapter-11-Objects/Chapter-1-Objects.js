/* Objects: 
Object is a coolection of Key:Value pair stored in heap memory. 
They are fundamentals to JS and used everywhere. 

example:
let test = {name: "Sri" , age: 27, Phone: 9876543210};

*/ 

// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Sri" };
let student3 = { name: "Nidhi", age: 87, phone: 987654320 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON 
//JSON -> JavaScript Object Notation

let JSON_student4 = { "name": "Sri", "age": 27, "phone": 9876543210 };

// -------


let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]); // (. / [ ] can be used) 

let a1 = { status: 'pass' };
console.log(a1.status);


let b = a;  // b copies the REFERENCE, not the object
b.status = "fail";
console.log(a.status);


// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);

