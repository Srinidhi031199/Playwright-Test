//Shallow Copy

let original = [1, 2, 3];
let shallow = [...original];

console.log(shallow);
console.log(original === shallow);

console.log("----------------");

//Copy
let copy = original.slice();
console.log(copy);

let copy1 = Array.from(original);
console.log(copy1);

let copy2 = original.concat();
console.log(copy2);

console.log("----------------");

//Deep Copy

let deep = JSON.parse(JSON.stringify(original));
console.log(deep);
console.log(original === deep);