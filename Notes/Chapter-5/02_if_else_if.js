// if else if statement

let age = 25;

if (age < 18) {
    console.log("You are a minor."); // This block of code will not be executed since age is 25, which is not less than 18
} else if (age >= 18 && age < 65) {
    console.log("You are an adult."); // Output: "You are an adult." (Since age is 25, which is greater than or equal to 18 and less than 65, this block of code is executed)
} else {
    console.log("You are a senior citizen."); // This block of code will not be executed since the previous condition is true
}

// Grade example:

let score = 65;

if (score >= 90) {
    console.log("Grade: A"); 
} else if (score >= 80 && score < 90) {
    console.log("Grade: B"); 
    //console.log("Grade: C"); 
} else if (score >= 60 && score < 70) {
    console.log("Grade: C"); 
} else {
    console.log("Grade: F"); 
}

// The if else if statement allows you to check multiple conditions in a sequential manner, executing the block of code corresponding to the first true condition. It is useful for handling complex decision-making scenarios where there are multiple possible outcomes based on different conditions.