let x = 10;
if (x>5)
    console.log("x is greater than 5"); // Output: "x is greater than 5" (Since x is 10, which is greater than 5, this block of code is executed)

console.log("-------------------------");
/* 
1. why does if([]) evaluate to true in JavaScript?
In JavaScript, an empty array ([]) is considered a truthy value.
An empty array [] is an object, and all objects in JavaScript are truthy.

2. Should I use if(response) or if(response !== null) to check if a response is valid?
It depends on the context of your code and what you consider a "valid" response.
* if(response): This checks if the response is truthy. It will evaluate to true for any value that is not falsy (e.g., null, undefined, 0, "", false). 
    - If you want to check if the response exists and is not falsy, this is a common approach.

* if(response !== null): This specifically checks if the response is not null. It will evaluate to true for any value that is not null, including undefined, 0, "", false, and other falsy values. 
    - If you want to ensure that the response is not null but are okay with other falsy values, this might be more appropriate.

In general, using if(response) is often sufficient for checking if a response is valid in many cases, but if you need to specifically check for null values, then using if(response !== null) would be the better choice.


3. What is the difference between if(x == 5) and if(x === 5) in JavaScript?
The difference between if(x == 5) and if(x === 5) in JavaScript lies in the type of comparison being performed:

* if(x == 5): This is a loose equality comparison. 
    - It checks for value equality but allows for type coercion. 
    - If x is a string "5", it will be considered equal to the number 5 because JavaScript will convert the string to a number before comparing.

* if(x === 5): This is a strict equality comparison. 
    - It checks for both value and type equality. In this case, if x is a string "5", it will not be considered equal to the number 5 because they are of different types.

In general, it is recommended to use strict equality (===) to avoid unexpected results due to type coercion, unless you have a specific reason to allow for type conversion.


4. Can we have else if without an else block in JavaScript?
Yes, you can have an else if block without an else block in JavaScript. 
The else if block is used to check multiple conditions after the initial if statement. 

    - In Automation we always use final else block to handle any cases that do not meet the specified conditions.

*/
