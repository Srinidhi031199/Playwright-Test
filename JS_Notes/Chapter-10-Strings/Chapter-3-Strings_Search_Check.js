// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
url.includes("staging");       // true
url.includes("production");    // false

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true

// indexOf / lastIndexOf
console.log(url.indexOf("a")); //10
console.log(url.lastIndexOf("a")); //24
console.log(url.indexOf("nothere")); // -1 because nothing is there

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex -> Regular Expression
console.log(url.search(/login/)); // regex --> 28. because login is present at 28th index

url.search(/\d+/);  // \d --> digit