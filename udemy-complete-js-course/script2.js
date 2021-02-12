// Coding Challenge 1

// First Group of Data
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// Second group of data
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

let markBmi = markWeight / markHeight ** 2;

console.log( markWeight / markHeight ** 2)
console.log(markBmi);

let johnBmi = johnWeight / (johnHeight * johnHeight);

console.log( johnWeight / johnHeight ** 2)
console.log(johnBmi);

//let markHigherBMI = markBmi > johnBmi;
//console.log(markHigherBMI);

// coding challenge #2

// print a nice output to the console, saying who had the higher BMI, the message is either "Marks BMI is higher then john's!" or
// "John's BMI is higher then Marks!"
// use a template literal to inclide the BMI values in the outputs .

if (markBmi > johnBmi) {
    console.log(`Marks BMI of ${markBmi} is higher than Johns BMI of ${johnBmi}!`)
} else {
    console.log(`Johns BMI of ${johnBmi} is higher than Marks BMI of ${markBmi}!`)
}


// Challenge 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

//Data Set 1
let dolphinsAverage1 = (96 + 108 + 89) /3;
let koalasAverage1 = (88 + 91 + 110) /3;

if (dolphinsAverage1 > koalasAverage1) {
    console.log("The Dolphins Win!!!")
} else if (dolphinsAverage1 === koalasAverage1) {
    console.log("We have a Tie!")
} else {
    console.log("The Koalas Win");
}

//Data Set 2
let dolphinsAverage2 = (97 + 112 + 101) /3;
let koalasAverage2 = (109 + 95 + 123) /3;

if (dolphinsAverage2 > koalasAverage2) {
    console.log("The Dolphins Win!!!")
} else if (dolphinsAverage2 === koalasAverage2) {
    console.log("We have a Tie!")
} else {
    console.log("The Koalas Win");
}

// Data Set 3
let dolphinsAverage3 = (97 + 112 + 101) /3;
let koalasAverage3 = (109 + 95 + 106) /3;

if (dolphinsAverage3 > koalasAverage3) {
    console.log("The Dolphins Win!!!")
} else if (dolphinsAverage3 === koalasAverage3) {
    console.log("We have a Tie!")
} else {
    console.log("The Koalas Win");
}
// the offical answer with the bonus'es
/*
const scoreDolphines = (96 + 109 + 89) / 3;
const scoreKoalas = (88 + 91 + 100) / 3;
console.log(scoreDolphines, scoreKoalas);

if (scoreDolphines > scoreKoalas) {
    console.log('Dolphons win the Trophy');
} else if (scoreKoalas > scoreDolphines) {
    console.log('Koalas Win!');
} else if (scoreDolphines === scoreKoalas) {
    console.log('We have a Tie')
}
*/

// Bonus 1

const scoreDolphines = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphines, scoreKoalas);

if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
    console.log('Dolphons win the Trophy');
} else if (scoreKoalas > scoreDolphines && scoreKoalas >= 100) {
    console.log('Koalas Win!');
} else if (scoreDolphines === scoreKoalas && scoreDolphines >= 100 && scoreKoalas >= 100) {
    console.log('We have a Tie')
} else {
    console.log("No One Wins :( ")
}