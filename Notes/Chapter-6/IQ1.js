let fruit = "Apple";

switch (fruit) {
    case "Apple":
        console.log("This is an Apple");
    case "Banana":
        console.log("This is a Banana");
    case "Orange":
        console.log("This is an Orange");
    default:
        console.log("Unknown Fruit");
}

/*
This will execute all the cases after the matching case (Apple), 
Because there are no break statements to stop the execution.

- Use break statements to prevent fall-through and ensure that only the matching case is executed.

*/ 