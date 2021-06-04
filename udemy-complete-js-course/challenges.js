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

console.log(markWeight / markHeight ** 2);
console.log(markBmi);

let johnBmi = johnWeight / (johnHeight * johnHeight);

console.log(johnWeight / johnHeight ** 2);
console.log(johnBmi);

//let markHigherBMI = markBmi > johnBmi;
//console.log(markHigherBMI);

// coding challenge #2

// print a nice output to the console, saying who had the higher BMI, the message is either "Marks BMI is higher then john's!" or
// "John's BMI is higher then Marks!"
// use a template literal to inclide the BMI values in the outputs .

if (markBmi > johnBmi) {
  console.log(
    `Marks BMI of ${markBmi} is higher than Johns BMI of ${johnBmi}!`
  );
} else {
  console.log(
    `Johns BMI of ${johnBmi} is higher than Marks BMI of ${markBmi}!`
  );
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
let dolphinsAverage1 = (96 + 108 + 89) / 3;
let koalasAverage1 = (88 + 91 + 110) / 3;

if (dolphinsAverage1 > koalasAverage1) {
  console.log('The Dolphins Win!!!');
} else if (dolphinsAverage1 === koalasAverage1) {
  console.log('We have a Tie!');
} else {
  console.log('The Koalas Win');
}

//Data Set 2
let dolphinsAverage2 = (97 + 112 + 101) / 3;
let koalasAverage2 = (109 + 95 + 123) / 3;

if (dolphinsAverage2 > koalasAverage2) {
  console.log('The Dolphins Win!!!');
} else if (dolphinsAverage2 === koalasAverage2) {
  console.log('We have a Tie!');
} else {
  console.log('The Koalas Win');
}

// Data Set 3
let dolphinsAverage3 = (97 + 112 + 101) / 3;
let koalasAverage3 = (109 + 95 + 106) / 3;

if (dolphinsAverage3 > koalasAverage3) {
  console.log('The Dolphins Win!!!');
} else if (dolphinsAverage3 === koalasAverage3) {
  console.log('We have a Tie!');
} else {
  console.log('The Koalas Win');
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
} else if (
  scoreDolphines === scoreKoalas &&
  scoreDolphines >= 100 &&
  scoreKoalas >= 100
) {
  console.log('We have a Tie');
} else {
  console.log('No One Wins :( ');
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
${bill + tip}`);

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

const checkWinner = function (dolphineAvg, koalasAvg) {
  if (dolphineAvg >= 2 * koalasAvg) {
    console.log(`Dolphines win! (${dolphineAvg} vs. ${koalasAvg}) `);
  } else if (koalasAvg >= 2 * dolphineAvg) {
    console.log(`Koalas win! (${koalasAvg} vs. ${dolphineAvg}) `);
  } else {
    console.log('No team wins');
  }
};

checkWinner(dolphineScore, koalaScore);
// then with pluggin in random number values
checkWinner(576, 111);

// test 2

dolphineScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);
console.log(dolphineScore, koalaScore);
checkWinner(dolphineScore, koalaScore);

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

/*const calcTip = function(bill) {
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

*/
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
};

const johnSmith = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markMiller.calcBMI();
johnSmith.calcBMI();

console.log(johnSmith.bmi, markMiller.bmi);

if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s BMI (${johnSmith.bmi})`
  );
} else if (johnSmith.bmi > markMiller.bmi) {
  console.log(
    `${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s BMI (${markMiller.bmi})`
  );
}

// Part 2 - Coding Challenge #4

/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// so we need to loop over the bills array to fill up the tips and total arrays

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); // passing in the bills at its current position
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// Bonus

const calcAverageNew = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i] this is the same as the line below
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(calcAverageNew([2, 3, 7]));
console.log(calcAverageNew(totals));
console.log(calcAverageNew(tips));

// Section 9 Coding Challenge

/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// so the players Array has two arrays in it, so we need to destructure that array

const [players1, players2] = game.players;
console.log(players1, players2);

//  2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called
//    'team1', 'draw' and 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
*/

//1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2. Use a loop to calculate the average odd and log it to the console (We already
//  studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//    Odd of victory Bayern Munich: 1.33
//    Odd of draw: 3.25
//    Odd of victory Borrussia Dortmund: 6.5
//    Get the team names directly from the game object, don't hardcode them
//    (except for "draw"). Hint: Note how the odds and the game objects have the
//    same property names �

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

/* 4. Bonus: Create an object called 'scorers' which contains the names of the
 players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/

/* _____________________________________________________________________

Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:

1. Create an array 'events' of the different game events that happened (no 
duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �
 const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ])

 */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = ['GOAL', 'Substitution', 'Yellow card', 'Red card'];
// console.log(events);  - lol, ok, read that wrong, it wanted me to make the array the harder way using a set

// const events = new Set(gameEvents.values())
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);

// although the pop methods deletes something, it still returns what it deletes
// so adding pop takes the last element out of the array and gives it to us

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
 document.body.append(document.createElement('textarea'));
 document.body.append(document.createElement('button'));
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// A closer look at Functions Coding Challenge

/*
A Closer Look at Functions
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �


const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // this generates [0, 0, 0, 0] More in the next section
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // get answer - part 1
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}
        \n(Write option number)`
      )
    );
    console.log(answer);
    // Register Answer Part 2
    typeof answer === 'number' && 'answer' < this.
    answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');    
  },

  displayResults(type = 'array' ) {
    if(type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //poll results are 12, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};
// poll.registerNewAnswer();

// 2. Call this method whenever the user clicks the "Answer poll" button.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.
  bind(poll));

  poll.displayResults.call({answers: [5, 2, 3] }, 'string');
*/

// Redoing this Coding Challange since I don't understand it

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // this generates [0, 0, 0, 0] More in the next section
  answers: new Array(4).fill(0),
  //create the new method
  registerNewAnswer() {
    // To get the Answer -
    // for the prompt we will pass in the questions and options in the pool object to make prompt
    // the '\n' is to make a newline
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}
        \n(Write option number)`
      )
    );
    console.log(answer);
    //Register Answer
    // first we check if the answer is indeed a number and if the answer is below the length of the array
    // the last part is important since there are only 3 options, clearly an answer of 10 wouldn't work.
    // So it must stay below the length of the options array, this is also a great use of short cuircuting with the && operator
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // for that, the first 2 condtions have to be true, otherwise it shortcuricutis and the final part won't run
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  // now we create another method to display the results
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//poll.registerNewAnswer();

// now we need to create the functiionality with the Answer Poll Button on the HTML - this is likely where I messed up on
// the code before, clearly I wasn't paying attention

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); // because of bind, the 'this' keyword will refer to the poll object
// this doesn't initially work since the 'this' keyword would point to this object, as in the poll button itself
// as far as event handlers, the 'this' keyword will always refer to the element to which it is attached
// to fix this, we need to bind the 'this' keyword and set it to the Poll object and not the poll button

/*
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
*/

// bonus test data
// Data 1: [5, 2, 3]
// Data 2: [1, 5, 3, 9, 6, 1]
// for the bonus we need a new 'this' so we use the call method

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// ____________________________________________________________________________________________

// Closure Coding Challenge

// the challenge is to take this IIFE and attach an event listener that changes the color of the h1 element to blue each time the body element is clicked. DO NOT SELECT THE H1 element again

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/*
SO why does that work? How does the callback function get access to the header variable? 

So when that first part of the code runs, the const header is run and gone, meaning by the time the callback function to change the color is clicked, that variable is long gone. 

However since its part of the same IIFE function and thus exisited where it was born, it can still access that varaible despite it no longer being there.
it takes advantage of the closure. 
The Header variable is in the backpack of the callback function 



*/

/*

The Complete JavaScript Course 23
Working With Arrays
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀

*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });

  console.log(dogsJuliaCorrected);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//-----------------------------------
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test data sets
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
GOOD LUCK 😀

*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  //console.log(humanAges);
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // 2 3. (2+3)/2 = 2.5.
  // or
  // 2/2+2/3 = 2.5

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

// The Next Challenge is to re-write the previous function, but as an arrow function and using chaining.


const calcAverageHumanAge = ages => 
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);