let person = {
 name: "Sri",
 age: 27,
 city: "Bengaluru"
};

console.log(person.name) // "Sri"
console.log(person["age"]) // 27

console.log("---------------")

let key = "name";
console.log(person[key]); // works
console.log(person.key); // undefined

console.log("---------------")

//Addition of properties:
person.gender = "Male";
person["country"] = "India";

//Deletion of properties:
delete person.age;  
console.log(person["age"]) //undefined

console.log("---------------")

console.log(Object.keys(person));

console.log("---------------")

console.log(Object.values(person));

console.log("---------------")

console.log(Object.entries(person));

console.log("---------------")

//Using for...in:
for (let key in person) {
 console.log(key, person[key]);
}
console.log("---------------")

//Using Object.entries():
for (let [key, value] of Object.entries(person)) {
 console.log(key, value);
}

console.log("---------------")