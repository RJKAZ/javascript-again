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

// Now onto Data Strutures with Arrays 

// an array is like a big container you can throw multiple variables into to be used later.

// the two most important data structures in Javascript are Arrays and Objects

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// instead of declared each friend as a seperate variable, we can use an array instead. 

const friends = ['Michael' , 'Steven' , 'Peter']
console.log(friends);

// an array can hold as many values as you'd like as can hold any combination of strings and numbers

// this is a different way of creating an array using the Array function 

const years = new Array(1991, 1984, 2008, 2020)

// this method requires the "new"

// the normal way of just using the brackets is called the literal synthax. 

// now to access the data in the array. you use the array's name with square brackets indicating its location in the array. The first place is always 0, or rather the 0 index, and the the 2nd item is at the first index.
// So to Console log the first friend of micheal, you console log the friends array with the zero index.

console.log(friends[0])
console.log(friends[2])

// you can also pull up information like the number of elements in an array like the .length function

console.log(friends.length);

// by calling the array's name and adding a .length to it, it will return the number of values in the array, in this case 3. Unlike the Array itself, the .lenght starts at 1.

// there all sorts of little "." addons that can be used with arrays. 

// Like if you have a really long array and just want to return the last value in the array
console.log(friends[friends.length -1])
// you can use any expression (and expresson returns a value, unlike statements)
// for this use of arrays, you can only use expressions, not statements. 

// you can also remove and add data to an array
//this below code acceses the second index (3rd name) in the array and rewrites it.

friends[2] = 'Jay'

// the somewhat tricky part of this is that the friends variable was declared as a const, but I was still able to change this. The unchangeable nature of Const's only applies to primative values, of which an Array is not. 

const enemies = ['tim'];
console.log(enemies);

enemies[0] = "nick";
console.log(enemies);

// however you cannot replace the entire array, back to the friends example,
// friends = ['bob', 'Alice'];
// console.log(friends)

//arrays can also hold different types of data at the same time

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//exercise

// You can not do operations with Arrays...although possible, they won't give you the answer you'd expect

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const newYears = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));

// you can however take a single value from an Array to use

const ages1 = calcAge(newYears[0]);
const ages2 = calcAge(newYears[1]);
const ages3 = calcAge(newYears[newYears.length -1 ]);
console.log(ages1, ages2, ages3);

const ages = [calcAge(newYears[0]), calcAge(newYears[1]), calcAge(newYears[newYears.length -1])];
console.log(ages);





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


// Introduction to Objects 

// they are javascript other Data Structure (along with Arrays)

//Objects define key value pairs. Like consider this Array

const reeseArray = [ 'Reese', 'Kaz', 2021 - 1984, 'web developer', ['Gene', 'Arthur', 'Steve']];

// that array has information like a first name, a last name, age, occupation, friends, etc....but those distincations aren't made clear in the code. 
// You can do work arounds like targeting its location in the array like "the 3rd index is the occupation", but those values are defined in Arrays.

//Thats where Object come in. Objects use curley braces like functions, instead of brackets like arrays, so to write that array as an object...

const reese = {
    firstName: 'Reese',
    lastName: 'Kaz',
    age: 2021-1984,
    job: 'web developer',
    friends: ['Gene', 'Arthur', 'Steve']
};

// the keys (or values) are called properties, so it would be correct to say the object Reese has 5 properties. 

// Like Arrays, Objects are used to group related data. One key difference from Arrays is that in objects, the order of the values is not important

// Where as Arrays can only be accessed by their order number, the order in an Array is very important. And object because it can be pulled up by the names of its properties, isn't as important. 

// So Arrays are for ordered data, and Objects are for unstructured data. 

// Now we get into how to retrive data held in an object

console.log(reese);

// objects console.log just fine. 

// Now to get data out, we use the dot notation 

console.log(reese.lastName)

// another way is the bracket notation

console.log(reese['lastName']);

const nameKey = 'Name';
console.log(reese['first' + nameKey]);
console.log(reese['last' + nameKey]);

// brackets will not work with the dot notion. 
// dot notation you have to use the actual name, but bracket notation, you can use a computed name. Like combinng a first and last name

const interestedIn = /*prompt*/('What do you want to know about Reese? Choose between firstName, lastName, age, job, and friends');
console.log(interestedIn);

// now when you try to access a property in an object that doens't exist, you get a undefined. 
console.log(reese.interestedIn);

// so for this we use the bracket notation
console.log(reese[interestedIn]);
// which pulls up the correct property.

// left off at 9:46 mark

if(reese[interestedIn]) {
    console.log(reese[interestedIn]);
} else {
    console.log('Wrong Request! Choose Between firstName, lastName, age, job, and friends')
}

// Now to use these Notion methods of add new properties 
// adding with dot notation
reese.location = 'Brisbane';
// and adding with bracket notation 
reese['twitter'] = 'reesespieces';
console.log(reese);

//Challenge 
// "Reese has 3 friends, and his best friend is called Gene"

console.log(`${reese.firstName} has ${reese.friends.length} friends, and his best friend is called ${reese.friends[0]}`);

// You can also do function expressions (not declarations) in Objects, the main difference in the syntax

const andrew = {
    firstName: 'Andrew',   // string value
    lastName: 'Kahill', //string value
    birthYear: 1978,  // number value
    job: 'teacher',  // string value
    friends: ['John', 'Stacey', 'Anthony'], // array value
    hasDriversLicense: true,  // boolean value

    calcAge: function(birthYear){  //function value 
        return 2037 - birthYear;
    }
};

// calcAge is not a regular variable, but a property of the Andrew Object
// using the dot notation
console.log(andrew.calcAge(1991));
// and using the bracket notation 
console.log(andrew['calcAge'](1991));

// left off at 7:11 on #44
