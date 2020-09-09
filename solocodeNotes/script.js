/*

------------VARIABLES -------------------

Variables are containers for storing data. The value of a variable can change throughout the program. 
use the var keyword to declare a variable, and then equals to give the variable a value

var x = 10;

the variable of x is equal to the number 10

Javascript is case sensative. lastName and lastname are two different variables. 

In Javascript the equal sign ( = ) is called the assignment operator, it is not an "equal to" operator. 

as before with the variable of x equaling the number of 10. the variable of x is being assinged the value of 10. 

a variable can be declared without a value. Such a variable would have the value of undefined. 

you can write/output the value of a variable to either the console or the webpage.

var y = "time";

document.write(y);

console.log(y);

Document write will write ot the browser, and console log writes to the console. 

using variables is useful in many ways. You might have a thousand lines of code that includes a single variable. When you change the value of that variable one time , it wil automatically change it in all places were you use it. 

every written instruction in javascript is called a statement, and javascript statements are seperated by semicolans. 

here as some naming rules in javascript.
1. the first character must be a letter, underscore, or a dollar sign. eveyr subsequent charzcter may be letters, digits, underscores, or dollar signs. 
2. numbers are not allowed as the first character
3. variable names cannot include a mathematical or logical operator in the name, for example, 2*something or this+that
4. Javascript names must not contain spaces. 
5. Hypthens are not allowed in Javascript. its reserved for subtracions. 

So if given the question of what characters can be used to start a variable, the answer would be Underscore Signs and letter. 
Not numbers or math operators. 

There are alot of words you can't use when naming a variable. Such terms are reserved by Javascript for other purposes.

float, else, extport, class, var, while, throw, this, etc...those are only some of them. There are alot more...to many to list. 

Aside from the first letter, variable names can be made up of letters, numbers, or underscores.

But Variable names cannot use special characters in the names. %, #, $ are just some examples. 

------------------DATA TYPES --------------

data types refers to the types of vlaues with witch a program can work. JavaScript variables can hold many data types, such as numbers, strings, arrays, and mores. 

unlike other languages, Javascript makes does not define different types of numbers, like integers, short, long, floating point, etc. 

javascript numbers can be written with or without decimals. 

var num1 = 42;
var num2 = 41.99;

variables can be easily changed to other types by assigning it to other data type values

num1 = "Lets go!";

Javascript can also have decimals or "Floating-Point Numbers"

technically Javascript numbers are always stored as double precision floating point numbers. 

A floating point number is simply a number that is allowed to have a decimal point. 

Strings - 

Javascript Strings are used for storing and manipulating text. A string can be any text that appears within quotes. You can use single or double quotes

var name1 = 'jon';
var name2 = "Jon";

You can use quote inside a string, but they can't match the quotes surrounding the string

var quote = " My favorite quote is 'time is priceless'";

there is an work around to get double quotes within double quotes

you can use the escape characters.   \"   or    \'

the backslash itself   \   is the escape character and turns special characters into string characters. It works with any special character

\'
\"
\\
\n
\r
\t
\b
\f

if you begin a string with a single quote, you should end it with the matching quote.  and vice versa with double quotes. 

otherwise javascript becomes confused. 

Boolean values are true or false. 

they are useful when you need a data type with one of two values, yes/no, on/off, true/false 

the boolean value of 0 (zero), null, undefined, or an empty string is false. everything with a real value is true.  


THE IF STATEMENT, THE ELSE STATEMENT, AND THE ELSE IF STATEMENT 

If you want to perfrom different actions based on different conditions you would use an if statement

var myNum1 = 7;
var myNum2 = 10;
if(myNum1 < myNum2) {
  alert("Javascript Rocks");
}

the statement will only be executed if the specific condition is true. 

Also for that code we used the Javascript Alert() method. It is used to generate a popup alert box that contains the information within the parentheses.

var myNum1 = 7;
var myNum2 = 10;
if(myNum1 > myNum2) {
  alert("Javascript Rocks");
}

now by changing the less then sign to a greater then sign with the same code, the condition now equates to false and the alert won't run. 

Also the If must always be lowercase. if you write and if statement with uppercase, it will generate an error. 

To the specific quesiton of what happenes if the tested condition is false, the correct technical answer is 
"The Code does nothing and moves to the next section"

Next we have the else statement. The else statement is used to specify a block of code that will execute if the condition is false. 

if (expression) {
  //exexcuted condition if true
} else {
  //executed condition if false
}

you can skip curly braces if you code under the condition contains only one command. 

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
  alert("This is my first condition");
} else {
  alert("This is my second condition");
}

with that code, since 7 is not greater then 10, it will return the second condition.

there is also another way to do this check by using the ? operator.

a > b ? alert(a) : alert(b)

Now for the else if startmenet. it specifies a new condition if the first condition is false.

an example 

var course = 1;
if (course == 1) {
  document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
  document.write("<h1>CSS Tutotials</h1>");
} else {
  document.write("<h1>JavaScript Tutotials</h1>")
}

that above code says
- if course is equal to 1, output HTML tutorial
- if course is equal to 2, output to CSS tutorial
- if none of the above conditions are true, then output Javascript Tutorial

the final else statment ends the else if statement and should always be written after the if and else if statements. 

you can write as many else if statements as you need with as many conditions as you want to set. But if the if and else statements themselves must be at the top and bottom and can only be used once. 

// left off on the Switch Statment module




*/