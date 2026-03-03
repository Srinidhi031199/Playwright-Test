let value = "5";

switch (value) {
    case 5:
        console.log("Number 5");
        break;
    case "5":
        console.log("String '5'");
        break;
}

// This will output "String '5'" because switch uses strict equality (===) for comparison,
// and the value "5" (string) matches the case "5" (string), while it does not match the case 5 (number).   

