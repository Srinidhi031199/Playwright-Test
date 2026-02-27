let status = 0;

switch (status) {
    case false:
        console.log("false matched");   
        break; 
    case 0:
        console.log("0 matched");
        break;
}

//Output: "0 matched" (0 === 0 NOT 0 === false)
//This will output "0 matched" because switch uses strict equality (===) for comparison,
//and the value 0 (number) matches the case 0 (number), while it does not match the case false (boolean).