// Question 1 

// This program has a problem, what is it?

var a;
var b = (a = 3) ? true : false

console.log(a);  // the code as is, shows the variable a does have the value of 3
console.log(b);  // the code as is, returns true

/* the answers are
a. You cannot use a ternary operator in the right-hand side of an assignment
b. The condition in the ternary statement is using the assignment operator
c. You cannot define a variable without initializing it first
d. The code is using the deprecated var keyword. 
*/

// The Answer is indeed B - The condition in the ternary statement is using the assignment operator

//_____________________________________________________________________________________________________

// Question 2 

/*
Which variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it
a. let
b. all of these answers
c. const
d. var

The Answer is D. var - If you declare a variable with the var keyword, the variable is hoisted to the top of its enclosing scope, either global or function scope. As a result, if you access a variable before declaring it, the variable evaluates to undefined. 

*/

//_______________________________________________________________________________________________________

/* Question 3
Which statement represents the starting code converted to an IIFE (immediatly invoked function expression)

This one I knew

*/