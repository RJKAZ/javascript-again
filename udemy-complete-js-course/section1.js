// JavaScript Fundamentals - Part 1

//  Lecture 01: Values and Variables 
// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
// 2. Log their values to the console


const country = "USA";
const continent = "North America";
let population = 328000000;

console.log(country);
console.log(continent);
console.log(population);

//  LECTURE 02: Data Types
//  1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
//  2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console

let isIsland = false;
let language;
console.log(isIsland);
console.log(language);

// LECTURE 03: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = "English";
console.log(language);
//country = "Europe";

//Lecture 04 notes - 

// Math operators 
const now = 2021;
const ageRj = now - 1984;
const ageChris = now - 2001;
console.log(ageRj, ageChris);

console.log(ageRj * 2, ageChris / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 (2 * 2 * 2)

// now for concatinating strings together
const firstName = "Dark";
const lastName = "Helment";
console.log( firstName + lastName);
console.log(firstName + ' ' + lastName);

// assignment operators 

let x = 10 + 5; // x = 15
x += 10;  // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// comparison operators (true/false/Booleans) > , < , >= , <=  
console.log(ageRj > ageChris); // equats to true since RJ's age is greater then chris's
console.log(ageChris >= 18);
console.log(ageChris < 10);

const isFullAge = ageChris >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2019);
//In javascript some operators work either right to left, or left to right

//this is an example of a left to right
console.log(25 - 10 - 5);

let z, y;
z = y = 25 - 10 - 5  // z = y = 10
console.log(z, y);

const averageAge = ageChris + ageRj / 2;
console.log(ageRj, ageChris, averageAge);
// doing it like this shows the averageAge at 38.5 which higher then both ages and thus it is impossiable for an average. This is because of the order Javascript is reading this.
// this is where parrenthaese come in handy 
const averageAge2 = (ageChris + ageRj) /2;
console.log(averageAge2);
// adding the parantheses will allow the actual average to be determined. 

// in the above example, Javqascript will subtraction operator first before equal operator  
// So the subtraction is done first left to right, and then the equal operators are done right to left. 


/* LECTURE 04: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

console.log(population / 2);
population += 1;
console.log(population);
population += 1;
console.log(population);

let finland = 60000000;

console.log(population >= finland);

const averageCountry = 33000000;

console.log(population <= averageCountry);

const description = "Portgual is in Europe, and its 11 million people speak portuguese";
console.log(description);

// Template Literals 

const myName = 'jonas';
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + myName + ', a ' + (year - birthYear) + ' year old ' + job + '!'
console.log(jonas);

// when adding/concatinating numbers and strings together, Javascript will turn the numbers to strings. 

// As complicated as that sentance was to put together, since ES6, and easier way to do it is with Template Literals 
// FYI - Template Literals use Backticks

const jonasNew = `I'm ${myName}, a ${year-birthYear} year old ${job}!`;
console.log(jonasNew);

// backticks can also be used for any regular string

console.log(`Just a regular String`);

// another great use of template literals is to create multi-line strings 

// this old method of adding new lines is done by \n\

console.log('String with \n\ multiple \n\ lines');

// with template literals, you don't need the \n\, you just create a new line

console.log(`String
multiple
lines`);


// Small Templete Literal Challenge - From the above parts, recreate the description variable but this time using a templete literal

// const description = "Portgual is in Europe, and its 11 million people speak portuguese";
// console.log(description);

// To make things a bit easier, I will make new varibles and new data

const president ="Joe Biden"
const wonCountry = "United States"
const votes = 81000000;

const outcome = "Joe Biden is the president of the United States, and won with 81,000,000 votes!" 

const newOutcome = `${president} is the president of the ${wonCountry}, and won with ${votes} votes!`

console.log(outcome);
console.log(newOutcome);


// Notes on taking decisions if/else statements

const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sarah can start driving 😎');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years 😥`);
}

// This is all known as the if/else control structure. Javascript has many others

let bornYear = 2012;

let century; 

if (bornYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Notes Type Conversion 


// you have to be careful with types

const inputYear = '1991';
console.log(inputYear + 18)

// since inputYears value is a string, adding a number value to a string value will result in a string result. 

//there is a way to convert a string to a number

console.log(Number(inputYear));

// using the Number() in the console log, it will turn the string value to a number value

console.log(Number(inputYear), inputYear);

//this would return both the number value and the string value 

console.log(Number(inputYear) + 18)

// and this allows us to add to the number value 

// this only works with strings that contains numbers, if you use this method on a string of letters, it returns a NaN (not a number)
console.log(Number('Jonas'));

//however NaN is still techncially a number value despite not being a number 
console.log(typeof NaN);

// you can even do the reverse

console.log(String(23));
console.log(String(23), 23);

// In both cases, you have to use a capital 'S'tring or 'N'umber

// Notes on Type Coercion 
// Which is bascily Javascript doing this shit on its own.
// in the below example, the + + triggers the coercion

console.log('I am ' + 23 + ' years old')

// When adding Strings and Numbers the + operator will always turn the number to a string
// Other coding languages don't have Type Coercion 

// however the - operator does the reverse and when subtracting strings with numbers, will turn the string to a number

console.log('23' - '10' - 3);  // returns the number 10
console.log('23' + '10' + 3);  // returns the string 23103

// in terms of multipilication & Division, it has no choice but to turn the strings to numbers, there is no other way it could work
console.log('23' * '2');
console.log('23' / '2');

// this is also true with logical operaters 
console.log('23' > '18');
console.log('19' < '100');

// + plus is the only opertor where it doens't turn the string to numbers

let n = '1' + 1; // this equals the string of '11'
n = n - 1; // so n = the string of '11', but now subtracting 1, turns the 11 string to a number and then subtracts 1
console.log(n); // leaving 10

// Notes for Truthy and Falsey Values 

// Falsey Values that aren't currently false, but will be when you convert them into a Boolean

// There are 5 falsy values: 0 , '' (empty string), undefined, null, NaN

// False itself being the epitome of false is not included with false since it is always false

console.log(Boolean(0));     //turning 0 to boolean returns false, hence it is falsey
console.log(Boolean(undefined)); // //turning undefined to boolean returns false, hence it is falsey
console.log(Boolean('Jonas')); // This turns true, any string that is not an empty string is a truthy
console.log(Boolean({}));  // this is an empty object, and it is also a truthy value
console.log(Boolean(''));  // this is an empty string, and it is a falsey value

// this has very little value in regular usage of Javascript. It really comes into play in conditional operators. 

const money = 0;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

//This comes back as you should get a job since the value is 0 and all 0 is falsey

let height;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is Undefined');
}

// This one comes back as Height is undefined, becasue litterally the height is undeffined. 

// However, if you give height the value of 0, it will still return falsey, even if the 0 height is intended. Any other number will work. But 0 no matter what is falsy. 
// this is kind of considered a bug in javascript. 

// Notes on Equlality Operators 

const newage = 18;
if(newage === 18) console.log('Your just became an Adult');

// little note, if your if statement just has a single if and no other elses, you don't need curly braces { }

// the operator === means equal to and it returns a true or false (Boolean) value

// === is the strict equality operator, it does not perform type coercion and only returns true when the values are exact 

// == double equals in the loose eqaulity operator and it does perform type coercion

// like if you write in the console comparing the string of 18 to the number 18
// '18' === 18  will return false
// '18' == 18   will return true since it turns the string to a number with type coercion 

// best practice is to always use strict equality... if you really need type coercion its better to convert the value manually before the comparrison 
// pretend == doens't even exist 

// prompt("Whats your favorite number")

const favorite = "Whats your favorite numbers?";
console.log(favorite);
console.log(typeof favorite);


if (favorite === 23) { // 23 the string == 23 the number
    console.log('Cool, 23 is an amazing numbers');
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 sucks')    
} else {
    console.log("All numbers matter");
}

// there is also a different operator !==

if(favorite !== 23) console.log('why not 23?')

// Boolean Logic: The AND , OR , & NOT Operators


const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B

console.log(hasDriversLicense && hasGoodVision) 
//since both are true using the && (and) operator returns true

const hasDriversLicense1 = true;
const hasGoodVision1 = false;
console.log(hasDriversLicense1 && hasGoodVision1);
// In this one I changed one of the values to false, so using the && (and) operator with a true and a false will return false. 

// Now using the || (or) operator 
console.log(hasDriversLicense1 || hasGoodVision1); 
// since one of the variables is true, with the || (or) operator it returns true

// And lastly we have the ! (not) operator
console.log(!hasDriversLicense1);
// The ! (not) operator will change the true to what it is not, which is false, and vice versa
console.log(!hasGoodVision1); 

const shouldDrive =  hasDriversLicense1 && hasGoodVision1;

if(shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('someone else should drive...')
}

// alternatively you could write it like this without creating an additional variable

if(hasDriversLicense1 && hasGoodVision1) {
    console.log('Sarah is able to drive');
} else {
    console.log('someone else should drive...')
}

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log('someone else should drive...')
}

// You can also use the operators more then once

const isTired = true; // variable c
console.log(hasDriversLicense || hasGoodVision || isTired);
// since all three are true, with the || (or) operator,  it all comes out as true
console.log(hasDriversLicense && hasGoodVision && isTired);
// since all three are ture, with the && (and) operator, it all comes out as true
console.log(hasDriversLicense && hasGoodVision1 && isTired);
// since one of them is now false, the whole thing is false

// So if she has a drivers licesne, and if she has good vision, and if she isn't tired, then Sarah is able to drive. 
// true and true and false = false
if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('someone else should drive...')
}
 
// The Switch Statement Notes

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default: 
        console.log('not a valid day!');

}

/// and the switch statement converted to if/else if

if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesday') {
    console.log('Day off, try to have to some fun');
} else if (day === 'thursday') {
    console.log('Write Code Examples');
} else if (day === 'friday') {
    console.log('Record Videos');
} else if (day === 'saturday') {
    console.log('get plastered');
} else if (day === 'sunday') {
    console.log('sober up!');
} else {
    console.log('not a valid day')
}


// the difference between Statements and Expressions

// an Xxpression is a piece of code that equals/produces a value   3 + 4, or even just a single number. Whatever code produces a value you can const

// A Statement is a larger piece of code that does not equal a value on itself


// in the below example, even though this creates a variable, it doesn't create a value

if (23>10) {
    const str = "23 is bigger";
}

// In a template Literal, you can only insert expressions, not statements

console.log(`I'm ${2037 - 1991} years old.`)

// The Conditional (Ternary) Operator 

// Simmilar to an if/else statement, but all in one line

const newAge = 23;
newAge >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!')

// an operator is an expression that always returns a value

const drink = newAge >= 18 ? 'wine' : 'water';
console.log(drink);

// The main benefit to this method is that you can create and use varibales within it. With if/else you have to create the variables outside it.

let drink2;
if(newAge >= 18) {
    drink2 = 'Beer';
} else {
    drink2 = "juice";
}
console.log(drink2)

// the Ternerary Operator is also a way to use a conditional inside of a template literal 

console.log(`I like to drink ${newAge >= 18 ? 'wine' : 'water'}`)

// The ternerary Operator isn't meant to replace If/else. If/else still has its uses, usually for much longer pieces of code. The ternerary Operator is best suited for quick and short code where a decision is needed. 



















