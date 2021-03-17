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

