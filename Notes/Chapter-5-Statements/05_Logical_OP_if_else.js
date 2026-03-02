let username =  "Sri";
let password = "12345";
let isAccountLocked = false;

if ((username === "Sri" && password === "12345") && !isAccountLocked) {
    console.log("Login successful!"); // Output: "Login successful!" (Since the username and password are correct and the account is not locked, this block of code is executed)
} else if (isAccountLocked) {
    console.log("Account is locked. Please contact support."); // This block of code will not be executed since the account is not locked       
}   