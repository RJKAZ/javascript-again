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

