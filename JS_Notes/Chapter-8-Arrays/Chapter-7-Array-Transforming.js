let scores = [45, 85, 80, 70, 60];

//map

let newScores = scores.map(function (score) {
    return score * 2;
});

console.log(newScores);

console.log("--------------")

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);


console.log("--------------")

//filter --> filters the array based on a condition --> keeps element that pass the condition

let passScores = scores.filter(s => s >= 70);
console.log(passScores);

console.log("--------------")

//reduce --> accumulates toa single value

let total = scores.reduce((sum, score) => sum + score, 0);
console.log(total);

console.log("--------------")

//flat --> flattens the array --> never used in real world
let nested = [1, 2, [3, 4, [5, 6]]];
console.log(nested.flat());
console.log(nested.flat(2));
console.log(nested.flat(Infinity));

console.log("--------------")