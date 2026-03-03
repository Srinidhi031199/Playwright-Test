let testScore = 85;
if (testScore < 0 || testScore > 100) {
    console.log("Invalid Score");
} else {
switch (true) {
    case (testScore >= 95):
        console.log("Outstanding - Top Performer");
        break;
    case (testScore >= 85):
        console.log("Excellent - Exceeds Expectations");
        break;
    case (testScore >= 75):
        console.log("Good - Meets Expectations");
        break;
    case (testScore >= 50):
        console.log("Satisfactory - Needs Improvement");            
        break;      
    case (testScore <= 35):
        console.log("Poor - Failing Grade");
        break;
    default:
        console.log("Invalid Score");
}
}