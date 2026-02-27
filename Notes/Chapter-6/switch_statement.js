//Switch Statement --> Comparing against multiple values

// Always uses stict equality (===) for comparison, which means it does not perform type coercion.

let day = 3; // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

// ensure week has only 7 days (0‑6)
if (day < 0 || day > 6) {
    console.log("Invalid day value: week only has 7 days (0‑6)");
} else {
    switch (day) {
        case 0: 
            console.log("Sunday - Rest Day");
            break;
        case 1:
            console.log("Monday - Sprint Planning");
            break;
        case 2:     
            console.log("Tuesday - Development");
            break;
        case 3:
            console.log("Wednesday - Code Review");
            break;
        case 4:
            console.log("Thursday - Testing");
            break;
        case 5:
            console.log("Friday - Deployment");
            break;
        case 6:
            console.log("Saturday - Relax");
            break;
        default:
            console.log("Weekend");
    }
}       