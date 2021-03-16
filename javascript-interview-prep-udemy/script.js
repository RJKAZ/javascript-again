// 1st Javascript Questions - Triple Add Function 

// My attempt

// create a function that has three numbers and returns all 3 numbers addeded together

//tripleAdd(10)(20)(30);

function trippleAdd(num1){
    return function(num2){
        return function(num3){
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

function trippleAdd1 (num1, num2, num3){
    return num1 + num2 + num3;
}
trippleAdd1(10, 20, 30);

// another example of a couried function 

function quadrupleAdd(num1){
    return function(num2){
        return function (num3, num4){
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

function doubleNumber(num){
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

(function() {
    // functions
    function getTotal(a,b) {
        return a + b;
    }
    // variabales
    var $ = 'currency';
    //conditions 
    if(true) console.log('hello world');
    // and comments. You can store everything inside an IIFE
})();

//____________________________________________________________________

// 3rd JavaScript Question 

// this function creates 5 buttons, but what happens when the 5th button is pressed

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

 // the same thing that happenes when any of the buttons are pressed. In the initial loop, the condition is set to 5
 // so any of the buttons when clicked will return that max condition (5) + 1. So all the buttons say this is button 6
 // If I make that condition of 5 into a larger number like 10, it will create five more buttons, and when clicked, it will 
 // and alert for all 10 buttons will be 'this button is 11' since its now 10 + 1

 // now fix this code so that it displays the corrent number when pressed. 
