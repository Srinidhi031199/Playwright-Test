//Function with multiple ways. 

//Normal Function
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is Fine!")
    }
}

validateStatusCode(201);


//function as expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is Fine!")
    }
}
validateStatusCode_Exp(300);

//function as a arrow function

 const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is Fine!")
    }
}
validateStatusCode_Arrow(201);
