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