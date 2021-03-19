// 1st Javascript Questions - Triple Add Function 

// My attempt

// create a function that has three numbers and returns all 3 numbers addeded together

//tripleAdd(10)(20)(30);

function trippleAdd(num1) {
    return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3);
        };
    };
};
trippleAdd(10)(20)(30);

// to process this expression, we need a function that returns a function, then returns another function,
// and then returns the total...that is how we can invoke the expression trippleAdd(10)(20)(30) three times.

// this trippleAdd function is known as a couried function 

// a couried functon is the technique of translating one function that takes multiple arguments 
// into a sequence of functions that each take a single argument 

// an example of this function without couriying is

function trippleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;
}
trippleAdd1(10, 20, 30);

// another example of a couried function 

function quadrupleAdd(num1) {
    return function (num2) {
        return function (num3, num4) {
            console.log(num1 + num2 + num3 + num4);
        }
    }
}
quadrupleAdd(10)(20)(30, 40);

//_______________________________________________________________________

// 2nd Question - What is an IIFE? and code our an example of an IIFE that functions properly.

// I have no clue....I have never heard this term before. since its got an "if" in it, I'm going to assume its something like a truethy and falsy, which are statements that could be true or false. 

// and I'm horriably wrong 

// IIFE = "Immediately Invoked Function Expression" which is a function that is executed right after it is created

// as an example, lets take this function 

function doubleNumber(num) {
    console.log(num * 2);
}

doubleNumber(5);

// so to write that function as an IIFE, take away calling it

(function doubleNumber1(num) {
    console.log(num * 2);
})(10);

// the main point of an IIFE is to preserve a private scope in your function as to not accidently overwrite any variable

// One example of that is the dollar sign. Since JQuery uses the $ dollar sign, if you dececlare the $ dolar sign as a variable, 
// you would no longer have access to the jQuery libary. Using an IIFE is a way around that.  

// you can even wrap your entire Javascript file within an IIFE

(function () {
    // functions
    function getTotal(a, b) {
        return a + b;
    }
    // variabales
    var $ = 'currency';
    //conditions 
    if (true) console.log('hello world');
    // and comments. You can store everything inside an IIFE
})();

//_______________________________________________________________________________________

// 3rd JavaScript Question 

// this function creates 5 buttons, but what happens when the 5th button is pressed
/*
function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }
 

createButtons();
*/

// the same thing that happenes when any of the buttons are pressed. In the initial loop, the condition is set to 5
// so any of the buttons when clicked will return that max condition (5) + 1. So all the buttons say this is button 6
// If I make that condition of 5 into a larger number like 10, it will create five more buttons, and when clicked, it will 
// and alert for all 10 buttons will be 'this button is 11' since its now 10 + 1

// now fix this code so that it displays the corrent number when pressed. 

// To do this the best way is to use an IIFE (from the last exercise)
// the IIFE will take in a 'num' as a parameter, and we are going to immediantly invoke our IIFE with the variable I
// then we take all of our onclick functionality and place it inside the IIFE
// and then we replace the 'i' in the onlick with the num variable

/*
function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;

        (function (num) {
            button.onclick = function () {
                alert('This is button ' + num);
            };

        })(i);
        body.appendChild(button);
    }
}

createButtons();
*/
// another way to do this
/*
function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        addClickFunctionality(button, i);
        body.appendChild(button);
    }
}

createButtons();

function addClickFunctionality(button, num){
    button.onclick = function () {
        alert('This is button ' + num);
    };
}
*/

// there is another solution to this problem...almost laughablly simple
// in the initial loop, use let instead of var - that solves the problem on its own.

function createButtons() {
    for (let i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        button.onclick = function () {
            alert('This is button ' + i);
        }
        body.appendChild(button);
    }
}


createButtons();

// using let instead of var works here because let is block scoped, not function scope (of which the var keyword is)

//_____________________________________________________________________________________________

// 4th JavaScript question

// Answer the quesiton, "In Javascript, what is a closure?"

// and then code out an example closure that functons properly. 

// again, I have no clue and never heard of the term.

// So what is a closure? oh hell

/*

A Closure is an inner function that has access to the scope of an enclosing function

A closure has access to variables in 3 seperate spaces
    1. Variables in its own scope
    2. Variables in the scope of the outer function
    3. Variables in the global scope

the Closure also has access to 
    1. its own parameters
    2. Parameters of outer functions 
    
heres an example


*/

// the innerFunc in this code is the Closure, but within it, it can still access both the global variable and the outfunctions variable 

const globalVariable = 'global var';

function outterFunc(param1) {
    const variable1 = 'var one';

    function innerFunc(param2) {
        const variable2 = 'var two';

        console.log('globalVariable: ', globalVariable);
        console.log('variable1: ', variable1);
        console.log('variable2: ', variable2);
        console.log('param1: ', param1);
        console.log('param2: ', param2);
    }

    innerFunc('param one');
}

outterFunc('param two');

//____________________________________________________________________________________

// 5th Javascript Question 

// What is the 'this' keyword and how is it used?

/*

The 'this' keyword literally refers to whatever object it is inside of.

if you to open the console.log and just console.log(this) it would pull up the global window object

The easiest way to understand this is to use it in contect of an object you have created

heres an example using a house object 
in the function instead of calling the object     house.price....you can use this instead since this by default refers to the house object
*/

var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Taylor',
    getPricePerSquareFoot: function () {
        // return house.price / house.squareFeet;
        return this.price / this.squareFeet;
    }

};

// The this keyword will not work outside of the object, like in the console log. 

console.log(house.price);
//console.log(this.owner);
console.log(house.getPricePerSquareFoot());
//_______________________________________________________________________________________

// 6th Javascript Question 
/*
Describe what variable and function hoisting is and how it works.

again....I have no clue what hoisting is

In Javascript variables and functions are hoisted to the top of the scope of which they are declared

Even if you declare a variable down on line 8 or 9, behind the scenes Javascript is hoisting that variable to the top of the file
and sets it there, but does not set it equal to anything. So var color = blue declared by the user on Line 5, is declared by Javascript on line, but given value at line 5

when you declare a function with the var, let, or const keywords, it is called a function expression and its hoisted in the same manner.

functions without those keywords are Function declarations

Its important to note that function expressions and function declarations are hoisted differently.

for Function declarations, the whole function, including its definition are hoisted to the top.
Because of this, if you log, use, or console log a function expression above where it is defined, it should still work fine.

Now if you are declaring variables and functions inside of a parent function (closure), they only hoist to the top of that parent function

Hoisting is essentilly taking the variable and function and putting them to the top of the scope in which they are declared

There are 2 scopes in which a Var variable can be hosited to the top of.
Global Scope or a Functon Scope - this is becasue the Var keyword is function scoped

Let and Const keywords however, are block scoped. Let and Const are still aware of the Global and Function Scope
but the Let and Const keywords are aware of another scope, the Block Scope.

A block scope is present whenever there is a block of code. including but not limited to
for loops, if else statements, while loop, etc

When we use the Let or Const keywords to declare a variable in this block scope, that variable declaraton is only hoisted to the top of the block and is not hoisted to the top of the parent function, or to the top of the global scope.

Lets run thru an example
*/

function getTotal(){
    // console.log(multiplier); accessing var before it is defined will bring up undefined
    // console.log(total); but accessing let or const before they are defined will bring up a reference error since it cannot be accessed at all until it is declared
    let total = 0; // since let is used, total is hoisted to the top of the function 

    for(var i = 0; i < 10; i++) {
        let valueToAdd = i; // since this let is used inside of the for loop, its only hoisted to the top of the loop
        var multiplier = 2; // since var is function scoped and not blocked scope, it is hoisted to the top of the function 
        total += valueToAdd * multiplier;
    }
    return total;
}

getTotal();

// _________________________________________________________________________________

// 7th JavaScript Questions 

// this.color = "red";

var myCar = {
    color: "Blue",
    logColor: function(){
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function(){
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};
myCar.logColor();

// in this exercise, the this keywords is referencing the object it is inside of. Which is myCar
// so this.color = blue
// and that is then stored in the variable self, so self.color is the same things at this.color, so it is also blue
// However for the IIFE, the this keyword does not work since we are now in the scope of the new and unnamed IFFE function
// So the this keyword looses its reference to the myCar object, and only references the global object or the global scope
// and there is no color defined on the global scope, hence why it comes back undefined. 
// but if I add the color to the global scope (above the function) it will then work. 
// Now for the last one, despite being in an IIFE, since it was stored in a variable, it will still reference the myCar object

// this is a big reason why in programming, a variable is made to store the ' this ' keyword

// _______________________________________________________________________________________

// 8th Javascript question 

// What is the difference between the comparison operators == and ===?

//LOL....finally....a question I know.

// my answer - the tripple equal === is a strict equal and does not have type coresion. So the string of '11' is onlt equal to the string of '11', not the number of 11
// the double equal == is also equal but with type conversion, meaning in comparing the String of '11' to the number of 11 could turn equal.

// the offical videos explanation

/*
== (equals) - tests for abstract equality
=== (strict equals) - tests for strict equality

== tests for data type, but === does not test for data type
*/

console.log( 7 == '7');  //true
console.log( 7 === '7'); //false

// so whats happening under javascripts hood?
// comparing a number and a string - the string is converted to a number and the comparsion is made
// comparing a boolean & a non-boolean - the nonboolean is converted to a boolean and the comparsion is made
// comparing an object & a primiitve data-type - the object is converted to a primitive data-type and the comparison is made

// __________________________________________________________

// 9th Javascript Question 

// What will be logged to the console with this code? 

var num = 50;

function logNumber() {
   console.log(num);
   var num = 100;
    
}

logNumber();

// my answer - first it will give an error because the var of num is already declared. Vars can't be revalued, but not by using the var keyword itself. like I would just write num = 100; But that would still need to be after the console.log, not before it. ....and never mind, apparatnly you can redeclare a value while still using the var keyword.

// My answer is wrong- ish, but the real reason for this is scoping. that second var num = 100, is function scoped and the "var num" is put at the top of the function before the console log where as the value is still below it. So console loging it turns up undefined becasue techncially it doesn't have a value yet. 

// ___________________________________________________________________________________

// Question 10 - 'use strict'; What does using 'strict mode' do to your code, and what are the benefits of using it? 

// my answer - it applies stricter rules over your code, in practice this means it will log more errors and data to the console making it easier to troubleshoot. 

// the offical explanation - the main purpose of 'use strict' is to enforce stricter parsing and error handling in your code. 

// benefit 1 - it prevents the use of global variables 
// if you don't use the var, let, or const variables, the variable by default will become a global variable .
city = 'london';
console.log(city);
// this runs fine, but if I place 'use strict' at the top of the page, it will give an error, more or less forcing you to use a var/let/const keyword

// benefit 2 - enforces that all parameter names for a function must be unique 
//this code works now, but with 'use strict' it will give and error becasue the parameter of A is used twice. 
function myFunc(a, a, b){
    console.log(a, a, b)
}
myFunc(1, 2, 3);

// benefit 3 - strict mode throws an error if you try to delete any properties on objects that are no deleteable 
//delete Object.prototype;

// Strict Mode helps us fail fast and fail loudly. 

//______________________________________________________________________________________

// 11th Javascript Question 
// curry this function 

/*
function getProduct(num1, num2) {
    console.log(num1 * num2);
};
getProduct(10, 20);
*/

function getProduct(num1) {
    return function (num2){
        console.log( num1 * num2);
    } ;  
};
getProduct(10)(20);

// heres another example to show how currying can be used in a more practical way 
// assume that distance is always in the unit of kilometers and speed is kilometers per hour
function getTravelTime(distance, speed) {
    console.log(distance / speed);
}
getTravelTime(600, 50);
// so the 50 is the speed, now if you want to calcaulte the mutliple different speeds, you would have to do them seperately 
getTravelTime(400, 50);
getTravelTime(400, 60);
getTravelTime(400, 80);

// you have to constantly reiterate the distance varibale, which can be annoying if its a fixed variable. Like 400 miles between NYC and Boston is never going to change. this is where currying comes in handy.

function getTravelTime2(distance) {
    return function (speed){
        return distance / speed;
    };
}
const travelTimeBostonToNyc = getTravelTime2(400);
console.log(travelTimeBostonToNyc(50));
console.log(travelTimeBostonToNyc(80));
const travelTimeNycToBrisbane = getTravelTime2(20,000)
console.log(travelTimeNycToBrisbane(500));

// since the distance is set to 400, we no longer need to keep re-writing the distance.

// _______________________________________________________________________________________

// 12th Javascript question 

// Write a function that keeps track of how many times it was called and returns that number.
// All functionality should be inside of the function, none outside

// the best way to do this is by building a closure

function myFunc() {
    let count = 0; // first thing is to define a counter

    // this is the closure
    return function(){
        count++;
        return count;
    }
    
}
console.log(myFunc()); // returns 1
console.log(myFunc()); // returns 2
console.log(myFunc()); // returns 3

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());

//______________________________________________________________________________

// 13th Javascript Question 

// what is the value of y when it is logged out?
// what is the value of x when it is logged out?

(function(){
    var x = y = 200;
})();

console.log('y: ', y);
//console.log('x: ', x);

// my guess is 200? 
// y logs at 200, but X is undefined. 

// but why? first this function is an IIFE, and inside is declaring two variables. 

// x gives and error becasue it is function scoped and exists only withing the IIFE and cannot be accessed outside of it. 

// so why is Y defined? it shouldn't for the same reasons X isn't. 

// another way to write this
// var x = y = 200;

// is 

// var y = 200;
// var x = y;

//under the hood, Javascript is declaring y = 200 as a global variabe
// then it is saying x = y with the var keyword

// so y will equal 200 because it is now a global variable. 

// running this in strict mode, (which null and voids the global variables, this will give an error from the start and say Y is not defined. )

// __________________________________________________________________________________

// 14th Javascript question 

// Describe the javascript call() and apply() methods
//address the following
//1. how do they function?
//2. What arguments do they take?
//3. How are they different? 

// the call method is an alternative way of calling your functions

const car1 = {
    brand: 'Porsche',
    getCarDescription: function(cost, year, color) {
        console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The Color is ${color}.\n`);
    }
};

const car2 = {
    brand: 'Lamborghini'
};

// the typical way of calling

car1.getCarDescription(80000, 2010, 'blue');

// now that first const has that getCarDescription function within it. The 2nd const does not....so how do we use that function for the second const? 
// That is where the call method comes into play
// The call method gives you a differnt way of passing arguments into your functions
// It also allows us to change the context of the ' this ' keyword

car1.getCarDescription.call(car2, 200000, 2013, 'yellow');

// so we are calling the getCarDescription method, but now the ' this ' is refering to car2. 

// This is the call method, now lets try to Apply Method 

// for this, lets create a new car, car 3

const car3 = {
    brand: 'Ford'
};

car1.getCarDescription.apply(car3, [35000, 2012, "black"]);

// so the big difference is that with the apply method, the arguments are passed in with an Array. The call method, the arguments are passed in individially. 

//_____________________________________________________________________________________________________________________________________________________

// 15th question - Determine 'list2'

// take a look at this code and what will list2 log out to the console?

const list1 = [1,2,3,4,5];
const list2 = list1;
list1.push(6, 7, 8);
console.log(list2);

// my answer before checking, is list 2 will pull up an array now including 1 to 8

// correct 

// In javascript, when we assigning a variable a piece of data, we are always passing the data by value or reference
// examples of passing by value 
const myNum = 10;
const myString = 'hello world';
const myString2 = myString;

// Now...if the value we are passing includes Objects...which includes Arrays....that data is being passed by reference

// so in context of that above example, list1 and list2 are referencing the same Array

// so the next question is to do the same problem but copy the data value to list 2
// updating list 1 & 2 to list 3 & 4 to retain the old code.

// the first way is to use the slice method which takes the selected elements in an array as a new array object

const list3 = [1,2,3,4,5];
const list4 = list3.slice();
list3.push(6, 7, 8);
console.log(list4);

// another method is to concat the first list item and then put it in an empty array.

const list5 = [1,2,3,4,5];
const list6 = list5.concat([]);
list5.push(6, 7, 8);
console.log(list6);

// so those are two ways to set one array equal to the value of another array without referencing the same data

// ____________________________________________________________________________

// Question 16 - Singly or Double Invoked Function

// build a function called getTotal that can be invoked in 2 different ways, 
// it can be singly invoked with 2 numbers passed in, or doublely invoked (as in currying)
// the function should return to us the total of the two numbers passed into it. 

// so this is the single invoked function 

function getTotal1(num1, num2) {
    console.log(num1 + num2);
}
getTotal1(10, 20);

// here is a double invoked function

function getTotal2(num1) {
    return function (num2){
        console.log (num1 + num2);
    }
}
getTotal2(10)(20); 

// so to create a single function that can do both.....um.....drawing a blank 

// this is the offical explanation 

function getTotal3() {
    var args = Array.prototype.slice.call(arguments);

    if (args.length === 2) {
        return args[0] + args[1];
    }
    else if (args.length === 1) {
        return function(num2) {
            return args[0] + num2;
        };
    }
}

console.log(getTotal3(10, 20));
console.log(getTotal3(5, 40));
console.log(getTotal3(3, 30));
console.log(getTotal3(8, 12));

//____________________________________________________________

// Question 17 - JSON DATA

// 1. describe waht JSON format is
// 2. Delete the data types not premitted in JSON
// 3. Replace placeholder-text with the corresponding data type, properly formatted as JSON.

const myJsonObj = {
    "myString": "some string here",
    "myNumber": 123456, // you can pass in any number, even decimals
    "myNull": null,
    "myBoolean": false,
    // myUndefined: [undefined], this is not allowed in JSON
    "myArray": [20, 30, 40, "orange"],
    // myFuncton: [some function], this is not allowed in JSON
    "myOBject": {
        "name": "same",
        "age": 30
    } 
};

// JSON stands for JavaScript Object Notation
// it is a light-weight format for transfering data 
// it is used because it is easy for humans to understand
// it is also easy for computers to parse and generate.
// it is a very common way to send data from an API 

// JSON accepts all data types except for "undefined" or "functions"
// fyi, functions aren't meant to hold data (even though they techcnially can) functions are meant to parse or use data

// one last thing, in JSON data, every property on an object is a string, so all property names must be wrapped in double quotes
// even property names on nested objects (like objects) have to be double quoted. 

//________________________________________________________________________________________

// question 18 - Order Logged Out 

// take a look at the code shown, when the logNumbers function is ran, what order are the numbers logged out in?

function logNumbers() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
}

logNumbers(); 

// my guess....3, 2, 1, 4......but I feel it might also be 3, 1, 4, 2

// all wrong  lol

// the order is 1, 4, 3 ,2
// 1 is logged first because its a regualar console.log 
// 4 is logged second because its a regualr console.log

// 3 is third, but this one is tricky, even though wrapped in a 0 second time out, (which is pointless) it still effects the time in which it takes to console.log it
// that is because of the event loop in the browser, its a que for all events(click events, ajax, callback functions, etc)
// all those events are pushed into the event que so even though the 0 second timeout has no actual effect on 3, it being pushed into the event que will affect the time the browser reads it
// So while console log 3 is still waiting to be read, console log 4 goes right ahead. 

// 2 is the last number logged out becasue its wrapped in a 1 second wrapped time out, so this would be a second later then everything else, making it last

// so to sum up, the order is as so because of the event loop 

// ___________________________________________________________________________________________

// Question 19 - making an object

// list and describe 3 different ways of making an Object in Javascript

// the first way is to use Object Literal Syntax (the typical and common way of making an object)

const myBoat = {
    length: 24, 
    maxSpeed: 45, 
    passengers: 14,
    getLength: function() {
        return this.length;
    }
}

// the 2nd way is use the new Keyword and Object Constructor 

const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];

student.getClasses = function() {
    return this.classes;
};

// the 3rd way is to use a constructor function 

function Car(color, brand, year){
    this.color = color;
    this.brand = brand;
    this.year = year;
}

Car.prototype.getColor = function() {
    return this.color;
};

const carlysCar = new Car('blue', 'ferarri', 2015);
const rjsCar = new Car('black', 'Honda Accord', 2007);

console.log(carlysCar);
console.log(rjsCar);

// you can also use the getColor method

console.log(carlysCar.getColor());
console.log(rjsCar.getColor());

// so what is a constructor function and what does it do?

// It is a function that creates an object class and then allows you to create multiple instances of that class
// it means you can create alot of objects very easily

// a best practice with constructor functons is use a capital letter in naming the function
// this is to signify that this is a constructor function 



function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

var stephen = new User('stephen', 'frank', 37, 'male');
console.log(stephen);

var user200 = new User('Jill', 'Robinson', 26, 'They');
console.log(user200);

// somewhat a rule bend, in constructor functions, the 'this' keyword does not refer to the functon its in, but rather 'this' will refer to the object that will be created by the constructor function 

//___________________________________________________________________________________

// Question 20 - Types of Data types

// In the below code, what is logged out for all 4 console log statements

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []); 

// so null is part of the object type
// undefined is undefined 
// Objects and Arrays are part of the Object type.
// Rememeber Arrays are Objects!

// this is just how Javascript was written.

// now how can you tell if a piece of data is an object or array if they type returns object?

// for this you can use the 'isArray' method which will return true for Arrays and false for objects

console.log(Array.isArray([]));
console.log(Array.isArray({}));

// another way is by using instanceof, which will also return true or false if its an Array

console.log([] instanceof Array);
console.log({} instanceof Array);

// so to recap....Arrays are Objects and the typeof method cannot distinguish them. 

//___________________________________________________________________________________

// Question 21 - Bind Method 

// Describe the bind() function method
// describe how it works, explains the parameters it takes, and code out an example of how it is used

// The Bind Method allows you to bind the 'this' context of a function to a specific object, somewhat simmilar to the call and apply methods work

this.distance = 10000;

 const roadTrip1 = {
     distance: 3000,
     getDistance: function(unit, caption){
         return this.distance + unit + caption;
     }
 };

 const roadTrip2 = {
     distance: 5000
 };


 const getTripDistance = roadTrip1.getDistance.bind(roadTrip1, 'km');

console.log(getTripDistance(' left to go'));

// in this code, the use of the 'this' in the function sadly refers to the global scope and not the functon scope, so it returns the 10000

// to fix this you have to add .bind() which allows you to set 'this' to any any function 
// you can also pass parameteres into the bind method as well

//_____________________________________________________________________

// Question 22 - Two Objects... in the below code, what is logged in the console, true or false?


const user1 = {
    name: 'Jordan',
    age: 28,
}

const user2 = {
    name: 'Jordan',
    age: 28
}

console.log(user1 == user2);
console.log(user1 === user2);

// both of these expressions return false, but in Javascript, two objects can never be equal to one another, even if they have the same data

// becasue these two objects are totally seperate, they can never be equal. there is one exception.

const user3 = user1;
console.log(user1 == user3);
console.log(user1 === user3);

// this works because user 1 and user 3 are now techncially refrencing the same object

// another way you could make this work is to use JSON strignify. To recap, JSON stringify turns and object into a JSON and then into a string

console.log(JSON.stringify(user1) == JSON.stringify(user2));
console.log(JSON.stringify(user1) === JSON.stringify(user2));

// now that they are turned into strings (which are primative data types, and passed by value not refernece)
//these will now turn equal.

// you could also turn it into an array...but since and array is an object, comparing an Array to an Array is the same as an object
// but if your do a JSON stringify, then it would work.

console.log([] == []);
console.log(JSON.stringify([]) === JSON.stringify([]));

//___________________________________________________________

// question 23 - Array Constructor - What is logged out for each of these console.log statements

var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1); // empty array
console.log('arr2: ', arr2); // with the Array constructor function, if you pass in a single number, it will become the arrays lenght, not the value
console.log('arr3: ', arr3); // a normal array 
console.log('arr4: ', arr4); // an array with one element in it (the array)

// so for the Array Constructor Function - the rules
// - If you pass a Single Argument that is a number, it will return an empty array of that length
// - If you pass a Single Argument that is not a number, it will return an array with just that argument passed as an element
// - if you pass multiple arguments, it will return a new array with all arguments passed in as elements in it

//_______________________________________________________________________________________________

// question 24 - Array Index of

// What will be logged out with each console log?

console.log([10, 20, 30, 40, 50].indexOf(30));  
console.log([{ name: 'Pam'}, { name: 'kent'}].indexOf({name: 'kent'}));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2]));

// 2
// 1 - wrong, but this was a tricky one
// 4
// 1 - wrong, but this was a tricky one

// the 2nd one returns -1, because its viewing that indexOf as a 3rd object, and no objects are equal in javascript

// to not, both strings and arrays have different indexOf methods

// the last one also returns a -1 because an Array is an Object, and like Objects there can't be two of the same Array

// one little loop hole is referencing reference of an Array and not its value

const myArray = [5];
const anotherArray = myArray;
console.log([[1], [2], [3], [4], myArray].indexOf(myArray));
console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray)); // this also returns 4 since its making the same reference

//____________________________________________________________________________

// Question 25 - Equivalent Numbers

// what will be logged to the console, true or false?

console.log(900.9 === 300.3 * 3);

// my gut says false...aha...and I was right 

console.log(900.9 == 300.3 * 3);
console.log(900.9 === 300.3 * 3);

// even these return false 

// these all return false because javascript is somewhat fauly with doing decimals

console.log(300.3 * 3); // this returns 900.9000000000001

// because of that complicate floating point decimal crap....these number just don't come out eqaul, even if they are

console.log(100 === 50 + 50);
// without a decimal, a similar problem returns true

// now there are a few ways to fix this problem, one of which is the toFixed method that returns a number to a set number of decimal places

// the problem with the toFixed method is that is returns as a string (that is stupid)

// so then you need to wrap your expression in the built in number function 

Number((300.3 * 3). toFixed(2));

// another way is to use the toPrecision method that will return a number where the total number of digits won't exceed the number argument passed in 
// sadly this also returns a string, so again you have to wrap it in the number function 

Number((300.3 * 3).toPrecision(12));

// there is another way

((300.3 * 10) * 3) / 10;

// I think I'll just avoid decimals 

//___________________________________________________________________________________

// Question 26 - Objects and Strings

// look at the code and determine what is logged to the console

var string1 = 'Tampa';
var string2 = string1;

string1 = 'Venice';

console.log(string2);

// this returns false, because the changing of venice doesn't effect string 1 

////////

var person1 = {
    name: 'Alex',
    age: 30
};

var person2 = person1;
person2.name = 'Kyle';

console.log(person1);

// this returns with kyle's becasue the person 1 & 2 varibles are both referncing the same value


//_________________________________________________________

// Question 27 - Strings and Arrays - What is logged to the console?

const data1 = 'Jordan Smith';

const data2 = [].filter.call(data1, function(elem, index) {
    return index > 6;
});

console.log(data2);

// my guess, the string of "Smith"

// half right, but also half wrong, it did return "Smith" but broken down as an Array

// [].filter is "array.filter" which is an Array method we are using for a string

// only use 'read-only' methods on strings. Don't use methods that actually manipulate the string 
// use - filter, forEach, map, some, every, etc
// Do Not Use - push, pop, splice, shift, reverse, etc

//__________________________________________________________

// Question 28 - Object Properties - what will be logged to the console?

const a = {};
const b = { name: 'b'};
const c = { name: 'c'};

a[b] = 200;
a[c] = 400;

console.log(a[b]);

// this comes to 400 and I have no idea why

// so this is Object on Object and that is why it is so confusing 

console.log(a);

// sicne its an object on objects...Javascript is essentially trying to turn the b into a string...specifically the string '[object object]'

// so I kind of get the solution, bascilly the a[b] & a[c] are both read as '[object object]'
// which starts at 200, but then gets revalued to 400....thats why it pulls up 400 for both. 
// its basiclly treating it like a revalued variable....if you omit the a[c], it will value to 200

// only strings can be properties on objects
//__________________________________________________________

// Question 29 - X & Y - what is logged to the console for variable x

var x = 10;

function y() {
    x = 100;
    return;
    function x() {}
}

//y();

console.log(x);

// and this gives a type error - no clue

// for some reason it should log 10....the reason for doing so is hoisting. X in the function is only hoisted to its core function, not the top

//__________________________________________________________

// Question 30 - Withdraw from Account - determine what is logged out from this code

const account1 = {
    name: 'Jen',
    totalAmount: 5000,
    deductAmount: function(amount) {
        this.totalAmount -= amount;
        return 'Amount in Account: ' + this.totalAmount;
    },
};

const account2 = {
    name: 'James',
    totalAmount: 8000,
};

const withdrawFromAccount = function(amount) {
    return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)()); // 7500
console.log(withdrawFromAccount(200)()); // 7300

// in the widthdrawFromAccount function, its taking that deduct amount method from account 1 and using it on account 2
// basciy both console.logs are targeting the 2nd account. 

// but the 2nd console log, is now basing Account2's value at 7500 and not 8000 anymore, so when the 2nd console log runs, 
// it returns 7300. 

// And that is it

// All done with this Udemy Course









