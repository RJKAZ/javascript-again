// Redoing the coding challenges thus far for practice. 

// Coding Challange 1 - Mark and John are comparing their BMI's, 
// 1. store Mark and Johns Mass and height in variables
// 2. calculate both BMI's using the formular
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John

let marksHeight = 1.69;
let marksMass = 78;

let johnsHeight = 1.95;
let johnsMass = 92

let marksBmi = marksMass / marksHeight ** 2;
console.log(marksBmi);

let johnsBmi = johnsMass / johnsHeight ** 2;
console.log(johnsBmi)

let markHigherBMI = marksBmi > johnsBmi;
console.log(markHigherBMI);

// now for coding challenge #2, we are going to improve this. 
//1. print a console log output saying who has the higher BMI
//2. Use a template literal to included the BMI values in the outputs

if (marksBmi > johnsBmi) {
  console.log(`Marks BMI of ${marksBmi} is greater then Johns BMI of ${johnsBmi}`);
} else {
  console.log(`Johns BMI of ${johnsBmi} is greater than Marks BMI of ${marksBmi}`);
}

// now I'm gonna jump to part 2's coding challange #3 since that continues the whole mark/john BMI thing.

// lets use objects to implement the calculations 
// create a 'calcBMI' method on each object to calculate the BMI
// store the BMI value to a property and also return it from the method. 
// log to the console who has a higher BMI together with the full name and the respective BMI. 

let markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
  
};

let johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height **2;
    return this.bmi;
  },
};

markMiller.calcBMI();
johnSmith.calcBMI();

console.log(johnSmith.bmi, markMiller.bmi);

if(markMiller.bmi > johnSmith.bmi) {
  console.log(`${markMiller.fullName}'s BMI (${
    markMiller.bmi}) is higher than ${johnSmith.fullName}'s BMI (${johnSmith.bmi})`)
} else if (johnSmith.bmi > markMiller.bmi) {
  console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s BMI (${mark.miller.bmi})`)
}

// ________________________________________________________________________________________________________


// Coding Challenge #3 - Two Gymnastics teams, the Dolphons and Koalas compete three times and the winner with the highest average gets a trophy

// 1. calcuate the average score for each team, using the test data below
// 2. compare the teams average scores to determine the winner of the competeition and print it to the console. dont' forget there can be a draw. 

// Data 1-  Dolphines socre 96, 108, 89, and Koalas score 88, 91, 110

let dolphinesAverage = (96 + 108 + 89) / 3;
console.log(dolphinesAverage);

let koalasAverage = (81 + 91 + 100) / 3;
console.log(dolphinesAverage);

if (dolphinesAverage >= koalasAverage) {
  console.log("The Dolphines have won!")
} else if (dolphinesAverage === koalasAverage) {
  console.log("The teams tied!");
} else {
  console.log("Koalas win!");
}

// Bonus question - include a requirment for a minimum score of 100. with this rule, a team only wins if it has a higher score then the other team. and the same time a score of at least 100 points (use a logical operator to test for minimum scores as well as multiple else-if blocks)