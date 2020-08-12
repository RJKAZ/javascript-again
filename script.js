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

// got a little off track there, but now getting back to comparisons, instead of just less then or greater then, we can also add equal to. " <= " and " >= "

console.log(1 <= 10);
console.log(1 >= 10);
console.log(1 >= 1);
console.log(100 <= 100);

// as with most things this also applies to variables

var nu1 = 9;
var nu2 = 200;
var nuResult = nu1 <= nu2;
console.log(nuResult);

//Now lets move on to logic starting with the if statement. The If statement allows us to write code that adapts to situations. It runs code only if the boolean its relying on is true. 

//since this condition is true, the console log statement runs 
if (true) {
  console.log("Hi man!");
}

//since this condition is false, the console log statement doesn't run 
if (false) {
  console.log("Hi man!");
}

// Values like true are conditionals, and statements that rely on conditions are conditionals. The condition is what decides if the code runs or not. And the condition is place within the parantheses
//Here are a few other slightly more complex examples setting the condtion itself beyond true or false 

// for this one, I set up two variables, and the condition is if the first variable is equal to the number 9. It is, so the code runs.
var ifTest1 = 9
var ifTest2 = 20
if (ifTest1 = 9){
  console.log("it works");
}
//using those same two variables, I set the condtion using the inequality operator. If the two variables are not equal the code runs true and thus the console.log statement still runs. 
if (ifTest1 !== ifTest2) {
  console.log("These numbers are not equal");
}

// everything between the curly braces is whats called a Code Block. There is no limit to much code we can put into it. 

if (true) {
  console.log("Fuzzy Wuzzy");
  console.log("was a bear");
  console.log("Fuzzy Wuzzy");
  console.log("had no hair");
  console.log("So Fuzzy Wuzzy");
  console.log("wasn't very fuzzy, was he?");
}

var greet = true;
if (greet) {
  console.log("even variables can be conditionals");
}

// just some more examples

var favArtist = "sejic";
if (favArtist === "sejic") {
  console.log( favArtist + " is my favorite artist!");
}

var favArtist = "sejic";
if (favArtist !== "Romita Jr") {
  console.log( "yuck, I hate Romita's art");
}

//the next logical step up from an if statment is now to incorporate a Else statment. if the " if " dicates what a function does when true, a " else " statment dicates what happens when false is selected. 

// Else always goes after if

var isDay = true;
if (isDay) {
  console.log("Turn the lights off!");
} else {
  console.log("Turn the lights on!");
}

var isDay = false;
if (isDay) {
  console.log("Turn the lights off!");
} else {
  console.log("Turn the lights on!");
}

// The else statment doesn't need it own condition, thats becasue it handles the cases where the if's condition is false. 

var hero = "Batman";
if (hero === "Batman") {
  console.log("Batman is the coolest hero!");
} else {
  console.log("Wonder Woman can kick Batmans ass!");
}

var hero = "Batman";
if (hero === "Wonder Woman") {
  console.log("Batman is the coolest hero!");
} else {
  console.log("Wonder Woman can kick Batmans ass!");
}

// increasing the complexity of an if/else statment 

var money = 800;
var macbookPrice = 1300;

if (money >= macbookPrice) {
  console.log("enjoy you're brand new Macbook!");
} else {
  var left = macbookPrice - money;
  console.log("You need " + left + " more to get a Macbook, might I suggest an HP instead?");
}

var hour = 9;
if (hour < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Night");
}

// and where as the else doesn't require a condition, you can add one by making the else into an else if.

var hour = 14;
if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 17) {
  console.log("Good Afternoon")
} else {
  console.log("Good Evening");
}

var hour2 = 20;
if (hour2 < 12) {
  console.log("Good Morning");
} else if (hour2 < 17) {
  console.log("Good Afternoon")
} else {
  console.log("Good Evening");
}

// As long as they go after the "If" and before the "Else", you put in as many "else if" as you like

//when we create a variable we assign it a value
var wallet = 3;
console.log(wallet);
//but there is also Self-Assingment when we set a variable to its own value. 
var wallet2 = 5
wallet2 = wallet2;
console.log(wallet2);

// in this same sense, you can also increase or decrease variables set to numbers

var wallet3 = 8;
wallet3 = wallet3 + 9;
console.log(wallet3);

// Self assing variables let us track data that changes over time. 

var wallet4 = 9;
wallet4 = wallet4 + 9;
wallet4 = wallet4 - 2;
console.log(wallet4);

// it works in a simmialr way with variables set to strings.

var friend = "Friend Name: ";
friend = friend + "John";
friend = friend + " Barreto";
console.log(friend);

// Self Assinging is a powerful programing concept becasue it lets us track data changes over time.

// now there is a shortcut 
var wallet5 = 20;
wallet5 += 1;
console.log(wallet5);

// instead of doing wallet5 = wallet5 + 1, instead you can just use wallet5 += 1; It also has its subtraction conterpart

var wallet6 = 3;
wallet6 -= 1;
console.log(wallet6);

// for increaseing or decreasing by a single number you can also use a " ++ " or " -- "

var wallet7 = 9;
wallet7 ++;
console.log(wallet7);

var wallet8 = 10;
wallet8 --;
console.log(wallet8);

// just curious what happens when you try this with a string

var wallet9 = "My Wallet";
wallet9 ++;
console.log(wallet9);

// this brings up NaN "Not a number"