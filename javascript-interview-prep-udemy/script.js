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
      button.onclick = function() {
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
    getPricePerSquareFoot: function() {
        // return house.price / house.squareFeet;
           return this.price / this.squareFeet;
    }

};

// The this keyword will not work outside of the object, like in the console log. 

console.log(house.price);
//console.log(this.owner);
console.log(house.getPricePerSquareFoot());