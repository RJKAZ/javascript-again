// Java script has a special mode called strict mode to use it, it has to be the first line of code in the script file. (not counting comments)

'use strict';

// strict code makes Javascript more secure. It forbids certain things and produces visible errors in the console. 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// With strict mode not engaged, this above code will not write to the console because there is a 's' missing from hasDriverLicense
// Its a common spelling mistake error, but this one won't produce any error message on its own. and if you add the 's', the code will then work and write to the console.

// with strict mode engaged, it will give us an error of 'hasDriverLicense' is not defined. 

// script mode can also help tell us when we can't use words that are restricted for Javascript since they might get used at a latter date. 

//const interface = 'Audio';
// const private = 534;
// const if = 23

// from this point on with this course, always have strict mode enabled. 

// Now onto Functions

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function 
logger();
// you can call or use the function as many times as you want. 

// the empty brackets after the function name are used for adding parameters. 

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// the code in a function is useless if you never call it. 

//Not all functions need to return something or accept parameters 

// console.log is a function as wekk, but that one is built in

const num = Number('23');

// these functions were function declarations

//let try another function 

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

// there is a way to shorten it

function calcAge2(birthYear) {
    return 2037 - birthYear;
}

calcAge2(1991);

const age2 = calcAge2(1991);
console.log(age2);

// these were examples of function declaration, these here however are function expressions.

// it starts by writing a function without a name, but you keep the perameter and the function body, and you basicly write it into a variable.
// This is a function without a name, also known as an Anonomous Function 

const calcAge3 = function (birthYear) {
    return 2037 - birthYear;
} 

const age3 = calcAge3(1991);
console.log(age3);

// so the function expression works the same way that the function declartion works and they produce the same result. 

// A function is not a type (like string, boolean, number, etc) but it is still a value

// function declartions can be called before they are defined in the code. function expressions cannot

// Now for the 3rd type of function added to Javascript with ES6

// THE ARROW FUNCTION 

const calcAge4 = birthYear => 2037 - birthYear;

// The arrow funciton is alot like a function expression but faster and easier to write. It doesn't need the curly braces, and it returns by default not needing the return keyword (in one line functions anway, more complex, longer arrow functions will require the return)

// to uss it, it works the same way with other functions. 

const age4 = calcAge4(1991);
console.log(age4)


// lets try another arrow function 

const yearsUntilRetirement = birthYear => {
    const age5 = 2037 - birthYear;
    const retirement = 65 - age5;
    return retirement; 
}

console.log(yearsUntilRetirement(1991));

// another example 

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age6 = 2037 - birthYear;
    const retirement2 = 65 - age6;
    return `${firstName} retires in ${retirement2} years`;
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1980, 'Bob'));
    
// Arrow functions do not get a "this" keyword. We will learn the 'this' keyword later. 

