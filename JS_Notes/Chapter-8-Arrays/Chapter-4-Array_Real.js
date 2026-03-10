let browser = ["Chrome", "firefox", 'safari', 'opera'];

console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

console.log("----------------------");

let removed = browser.shift();

console.log(browser);
console.log(removed);

console.log("----------------------");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
}