/* 
1. What happens if you forget to include the break statement in a switch case in JavaScript?
Ans - If you forget to include the break statement in a switch case in JavaScript, the code will "fall through" to the next case. 
    - This means that after executing the code for the matched case, it will continue to execute the code for the subsequent cases until it encounters a break statement or reaches the end of the switch block. 
    - This can lead to unintended behavior and may cause bugs in your program if you are not careful.

2. What does switch use (==) or (===) for comparison in JavaScript?
Ans - The switch statement in JavaScript uses strict equality (===) for comparison. 
    - This means that the value being compared must be of the same type and have the same value for the case to match. 
    - For example, if you have a case for the number 0, it will not match a case for the boolean false, even though they are both falsy values, because they are of different types.

3. When should I use switch statements instead of if-else statements in JavaScript?
Ans - You should consider using switch statements instead of if-else statements in JavaScript when you have a variable that can take on multiple discrete values and you want to execute different code based on those values. 
    - Switch statements can be more concise and easier to read than multiple if-else statements when dealing with many conditions. 
    - They are particularly useful when you have a large number of cases to handle, as they can help improve the readability of your code by reducing the amount of nesting and making it clear that you are checking for multiple specific values of a single variable.


4. In QA and Automation, when would you prefer using a switch statement over an if-else statement?
Ans - In QA and Automation, you might prefer using a switch statement over an if-else statement when you have a scenario where you need to handle multiple specific cases based on the value of a variable, such as different test scenarios, response codes, or user inputs. 
    - For example, if you are handling different HTTP status codes in an API response, a switch statement can make it clearer and more organized than a series of if-else statements. 
    - It can also improve readability and maintainability of your code when dealing with multiple discrete values that require different handling logic.    

*/

//Ternary Operator can be used as switch statement for simple conditions, but it is not suitable for complex scenarios with multiple cases.
console.log("-------------------------");

let status = "active";

let message = (status === "active") ? "Status is active" :
              (status === "inactive") ? "Status is inactive" :
              (status === "pending") ? "Status is pending" :
              "Unknown status";

console.log(message); // Output: "Status is active"

console.log("-------------------------");

let name1 = "" ? "Has Name" : "No Name";
console.log(name1); // Output: "No Name" (Since an empty string is falsy, the ternary operator evaluates to "No Name")

console.log("-------------------------");

let name2 = "" || "Default Name";
console.log(name2); // Output: "Default Name" (Since an empty string is falsy, the logical OR operator evaluates to "Default Name")

console.log("-------------------------");

let name3 = 0 || "Default Name";
console.log(name3); // Output: "Default Name" (Since 0 is falsy, the logical OR operator evaluates to "Default Name")

console.log("-------------------------");

let name4 = true ? "" : "Default Name";
console.log(name4); // Output: "Default Name" (Since an empty string is not null or undefined, the nullish coalescing operator evaluates to "Default Name")

console.log("-------------------------");

let name5 = undefined ?? "Default Name";
console.log(name5); // Output: "Default Name" (Since undefined is nullish, the nullish coalescing operator evaluates to "Default Name")

console.log("-------------------------");