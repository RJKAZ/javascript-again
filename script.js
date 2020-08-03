// create a variable with var

//var 

// give that variable a name

var city 

// give that variable a name with two words and camelCase it

var capitalCity 

// variable names cannot have spaces and we give them descriptive names to understand whats inside them. 
// Now lets give that variable a value 

var capitalCity = "Paris";

// always end a value with a semi-colan

// In the above instance, the value of Paris is a string. Strings are words inside quotes that contain leters, symbols, and spaces.

// Now lets get into the console!

console.log("Hello World");

// with that line of code, whatever value is put inside the paranthases, will be displayed to the Console, in this specific case, the console will display the string value "Hello World"

// console log has no limit and you can use it as often as you like. 

//the console log can also display the value of a variable. 

var greeting = "Hello World";
console.log(greeting);

// so above we create the variable of greeting, and we gave it the string value of "Hello World", so when we console.log the variable greeting, it gives us the value of greeting to the console, so in the console we see "Hello World" and not greeting. In the console, you do not have to use var, just the variables name. 

//variables are called variables because they values they store can be changed. by calling the variable's name and using an equal sign, you can give the variable a new value.

var capitalCity = "Paris";
capitalCity = "London";
console.log(capitalCity);

//So since we changed the capitalCity value, when we console.log capitalCity, it writes "London" and not "Paris". And you can revalue variables as much as you want. 

var capitalCity = "Paris";
capitalCity = "London";
capitalCity = "Tokyo";
capitalCity = "Brisbane"
console.log(capitalCity);

// in that above example, the console would display the string value of "Brisbane"

// you can also give a variable the value of another variable by writing the variable name with an equal, and then the name of the variable whos value you want. 

var city1 = "New York City";
var city2 = "Los Angeles";
console.log(city2);
city2 = city1;
console.log(city2);

// So the first console.log returns "Los Angeles" since that was the value of city2. But using the = sign, we gave the variable city2 the value of city1, So now when city2 is console.logged, it will give the value of city1 since that value is now its own.

// You can also add the values of strings togehter with a + sign 

var quote1 = "Its not the fall that hurts, ";
var quote2 = "its the 18 landings";
console.log(quote1 + quote2);

// In the above example, both strings are combined into one in the console. To note the empty space at the end of quote 1, between the comma and quote mark is deliberate so it has the space when its combined with quote2.

// You can also a variables value to a string not stored as a varibale

var quote3 = "Ready, set....";
console.log(quote3 + "GO!!!!");

// We can also store numbers as the value of a variable, they do not have quotes around them. If you did add quotes around the number, it would interpurt the number as a string value and not a number value (which important later on when math gets applied)

var numberOfLikes = 55; 
console.log(numberOfLikes);

// Now lets apply some math, we'll start with basic addition and subtraction 

var number1 = 8 + 1;
console.log(number1);

var number2 = 8 - 1;
console.log(number2);

// See, easy math, since the value of the variable is a math equation, the console logs the result. Now lets try multiplication and division 

var percent = 0.5 * 100;
console.log(percent);

var multiply = 10 * 10;
console.log(multiply);

var divide = 100 / 10;
console.log(divide);

// you can also add variables with number values as well

var num1 = 100;
var num2 = 73;
console.log(num1 + num2);

// So to sum things up, variables can be stored with either Strings or Numbers. But we can also store them as True or False (called Booleans) these values do no have quotes and they are not numeric values. 

// Now onto Boleans, aka True and False, they are special values that don't require quotes but are not numbers. They can be stored to variables just like a string or number. They are useful values for questions like if a light switch is turned on or not.

var correct = true;
console.log(correct);

//false works the same way

var gassy = false;
console.log(gassy);

//If you add quotes to a True/False value, the comptuer will read it as a string. Now there is also a way to negate the True/False value by adding a " ! " before the true/false value. Its called the negation operator 

console.log(!true);
console.log(!false);

// The exclamation point negates/inverts the value of true/false. So !true will equal false and !false will equal True. It works with variables as well

var angry = true;
console.log(!angry);

// Now going back to numbers, lets say we want to compare 2 number values. For this we use the Equality operator " === " which is basicly 3 equal signs

console.log(5 === 5);
console.log(5 === 10);

// console loging 5 === 5 results in true. When comparing there are only two results, true or false. But as with all things, event he Equality operator has its opposite, the inequality operator!

//  instead of three equals in a row, the Ineqaulity operator is an Exclamation Point with two equals in a row =  "  !==  " this checks if a number isn't equal to another

console.log(5 !== 5);
console.log(5 !== 10);

// And you can store the result of a comparsion in a variable

var result1 = 5 !== 5;
var result2 = 5 === 5;
console.log(result1);
console.log(result2);

// Now lets move on to the less-then operator "  <  " which checks if a number is less then another number
var result3 = 1 < 90;
console.log(result3);

// that returns true in the console because 1 is less then 90, it the number wasn't less then 90, it would return false

var result4 = 100 < 90;
console.log(result4);

// same rules apply for the greater then operator "  > " which checks if a number is greater then another number

console.log(101 > 90);
console.log(70 > 90);

var result5 = 1000 > 90;
console.log(result5);

// We can also compare strings using the equality and ineqaulity oprerators 

console.log("apple" === "apple");
console.log("apple" !== "apple");

// and of course this also applies to strings held in variables

var myProblem = "I can't find a job...";
var solution = "..so I will conquor the world instead!";
console.log(myProblem === solution);
console.log(myProblem !== solution);

// Now just to reiterate, values can come in many types, but the big three are Strings, numbers, and booleans. 
// strings are words or numbers wrapped in quotes, numbers are just numbers without quotes, and the boolean value is True or False with no quotes

// Now lets have some fun with Math (I always hated math). By using subtraction "  -  ", addition "  +  ", multiplication "  *  ", and Division "  /  " we can do basic math in a console log or use varibales. This also applies to strings since they can be added together 

console.log(8 + 8);
console.log(90 - 3);
console.log(8 * 9);
console.log(100 / 5);

//numbers you can use any math operator, but for strings you can only use the addition "  +  ", attempting to use -,*,/ with two strings will return NaN (not a number)
console.log("lets go " + "to the shore!");
console.log("lets go " - "to the shore!");
console.log("lets go " * "to the shore!");
console.log("lets go " / "to the shore!");

//it works with variables too

var numbery = 10;
var nymberx = 9;
console.log(numbery + nymberx);

// Now if you add/join a string with a number, the number automatically gets turned into a string
var resultR = "10" + 10;
console.log(resultR);
// that results in the return of the string "1010"

var score = 99;
var resultT = "Your score: " + score;
console.log(resultT);

//just want to test out what happens when you combine strings and numbers, but with the other math operators

console.log("score " + 10);
console.log("score " - 10);
console.log("score " * 10);
console.log("score " / 10);

// same, only additon works, mixing String with numbers with anything but addition results in NaN

// You can also join strings and booleans
console.log("You passed: " + true);
console.log("you passed: " + false);

// now what happends when you try joining a number and a boolean?
console.log(90 + true);
// interesting...so when you combine a number value with true, the result is still a number, but adding it with true increases the number by 1. this results in 91
console.log(90 - true);
// subtractng the number with true decreases it by a number, this results in 89
console.log(90 * true);
console.log(90 / true);

// multiplying and divding a number by true just returns the original number unchanged. In this case 90.

// now what about the false value
console.log(90 + false);
console.log(90 - false);
//so adding or subtracting a number wit the boolean false results in the original number unchanged, it stays 90
console.log(90 * false);
// multiplying a number with a boolean false is the same as multiplying number by 0, in this case result is 0
console.log(900 / false);
// dividing a number by the boolean false has the most unique effect, the results in Infinity. But despite it being a word, it still comes back as a number or boolean value, it doesn't come back as a string

var word1 = 9 / false;
var word2 = " War";
console.log (word1 + word2);
var word3 = "Avengers ";
console.log (word3 + word1 + word2);