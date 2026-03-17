//Arrow Function (ES6) --> ECMAScript6 --> JavaScript

const greet = function(name){
    return `Hello, ${name}!`;
}


//Arrow Function
//remove the function, return, curly braces & use => 
const greet1 = (name1) => `Hello, ${name1}!`;

console.log(greet("Sri"));
console.log(greet1("Nidhi"));

//another example
//Multi line needs curly braces 
const getResult = (score) => {
    if (score >= 70) return "Pass";
    return "Fail"
};

getResult(35);

