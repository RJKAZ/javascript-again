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

/* Coding Challenge #4

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
*/

/*
let bill = 250;
let tip;
if (bill >= 50 && bill <= 300) {
    tip = (15 / 275) * 250;
} else {
    tip = (20 / 275) * 250;
}

console.log( bill + tip);
// and math failure on my end
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`)


// Javascript Fundamentals Part 2

// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
*/
/*
const calcAverage = (score1, score2, score3) => {
    const averageScore = (score1 + score2, + score3) / 3;
    return averageScore;
}

console.log(calcAverage(44, 23, 71));


function checkWinner = ()
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//test 1
let dolphineScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);
console.log(dolphineScore, koalaScore);

const checkWinner = function(dolphineAvg, koalasAvg) {
    if (dolphineAvg >= 2 * koalasAvg ) {
        console.log(`Dolphines win! (${dolphineAvg} vs. ${koalasAvg}) `)
    } else if (koalasAvg >= 2 * dolphineAvg) {
        console.log(`Koalas win! (${koalasAvg} vs. ${dolphineAvg}) `)
    } else {
        console.log('No team wins');
    }
    
} 

checkWinner(dolphineScore, koalaScore)
// then with pluggin in random number values 
checkWinner(576, 111);

// test 2

dolphineScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);
console.log(dolphineScore, koalaScore)
checkWinner(dolphineScore, koalaScore)


// Part 2 Coding Challenge 2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �
*/

// this was my attempt that does work

/*
function calcTip(bill) {
    const tip = bill * 0.2;
    console.log(bill + tip); 

}

calcTip(100)

const total = [ 125, 555, 44]

calcTip(total[0]);
calcTip(total[1]);
calcTip(total[2]);
*/

// And this is the offical example

// the solution as a function expresion 

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// the solution with an arrow function 

const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
// bonus
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


// Part 2 Coding Challenge 3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
*/

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },

}





const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },

}

markMiller.calcBMI();
johnSmith.calcBMI();

console.log(johnSmith.bmi, markMiller.bmi);

if(markMiller.bmi > johnSmith.bmi) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s BMI (${johnSmith.bmi})`)
} else if (johnSmith.bmi > markMiller.bmi) {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s BMI (${markMiller.bmi})`)
}
