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

// Now we move to Functions calling other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitBlender(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const newJuice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return newJuice
}

console.log(fruitBlender(2, 3));


// another function within a function exampel 

const ageCalc = function (bornYear) {
    return 2037 - bornYear;
} 

const yearsUntilFreedom = function (birthYear, firstName) {
    const currentAge = ageCalc(birthYear);
    const freedom = 65 - currentAge;
    
    if(freedom > 0) {
        console.log(`${firstName} retires in ${freedom} years`);
        return freedom;
        
    } else {
        console.log(`${firstName} has already retired`);
        return -1; 
    }


   
}

console.log(yearsUntilFreedom(1991, 'Jones'));
console.log(yearsUntilFreedom(1950, 'Mike'));


// so to reitereate about functions

// Function Declaration = Function that can be used before it is declared
// Function Expression = Essentially a function value stored in a variable
// Arrow Function = A special kind of Expression Function, best for quick and short code

// three different way of writing functions, but they all work in a similar way, they recieve input data, transform data, and then output data

// Now Javascript has some built in functions that can be used directly on Arrays, these are called Methods 

// Think of methods as Array Operations. There are countless different Methods, but here are the most common/used ones. 

const buddies = ['Micheal', 'Steven', 'Peter']
// to add an element to the end of an array, you use the push method
buddies.push('Nick');
console.log(buddies);
//you can also store methods into variables
const newBuddies = buddies.push('tim');
console.log(newBuddies);

// Now if you want to an an element to the beggining of the array, there is the unshift method

buddies.unshift('Micky');
console.log(buddies);

// Now to remove an element
// The Pop method is the reverse of the push method, and will remove the last item in the array. Since it will always take the last of the array, you don't need to pass an argument into it. 
buddies.pop();
console.log(buddies);

const popped = buddies.pop();
console.log(popped);
console.log(buddies);

// Now to remove the first element from the array, you use the shift method without any argument

buddies.shift();
console.log(buddies);

// there is also a method to tell us the postion of an element in an array, the indexOf method

console.log(buddies.indexOf('Peter'));
// steven is the 3rd name, but the 2nd index, so 2 returns. 

//Now if you use the indexOf method for a name that isn't in the array, it will return -1
console.log(buddies.indexOf('Max'));

// Similar to the indexOf method, the includes method will verify true or false if a name is in the array.
console.log(buddies.includes('Peter'));
console.log(buddies.includes('Bob')); 

// Now methods do not do type conversion 
buddies.push(23);
console.log(buddies);
console.log(buddies.includes('23'));

// So adding in the number 23 won't equal the string of 23. 

if (buddies.includes('Peter')) {
    console.log("You have a buddy called Peter");
}







