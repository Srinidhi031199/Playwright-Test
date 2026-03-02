//you are working for API Tetsing 
//you have to test the API for different scenarios
//you have to test the API for different status codes

let statusCode = 401;

switch (statusCode) {
    case 200:
        console.log("OK");
        break;
    case 201:
        console.log("Created");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Not Found"); // Output: "Not Found" (Since statusCode is 404, this block of code is executed)
        break;
    default:
        console.log("Unknown Status Code");
}   