// Group Case

let brwoser = "Edge";

switch (brwoser) {
    case "Chrome":
    case "Firefox":
    case "Edge":
    case "Safari":
        console.log("Supported Browser");
        break;
    case "Opera":
        console.log("Partially Supported Browser");
        break;
    default:
        console.log("Unsupported Browser");
}   