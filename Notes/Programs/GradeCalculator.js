//write a program to calcukate and display the grade of a student based on their score
//eg A,B,C,D & F based on the following grading scale: 
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60

let score = 35; 

if (score >= 90 && score <=100)
{
    console.log("Grade: A");
}
else if (score >= 80 && score < 89)
{
    console.log("Grade: B");
}
else if (score >= 70 && score < 79)
{
    console.log("Grade: C");
}
else if (score >= 60 && score < 69)
{
    console.log("Grade: D");
}
else
{
    console.log("Grade: F");
}