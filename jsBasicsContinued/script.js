// lets do a refresh of some things Javascript 

// What is a Script? Scripts are programs that accompany web pages

// a Variable (var) is a container that helps us remember information for later

// we create then with the word " var " and a name or identifer and give them a value with a equals sign

var friendName = "Tim";
var favNumber = 10;
var amILucky = true;

console.log(friendName);
console.log(favNumber);
console.log(amILucky);
document.write(friendName);
document.write(favNumber);
document.write(amILucky);

// So I created 3 variables, one a string, one a number, and one a boolean true or false value.
// I gave them their names, their values and I wrote them both to the console and the HTML.
// I wrote to the console with a console.log() statement
// and I wrote to the HTML with a document.write() statement...this one basicly joined them all into a single string in the html. Using document.write() properly is a bit more complicated, but we'll get into that later. 

// variable names/identifers should always be lower case, and if they are multiple words, no spaces and camel cased instead. (1st word lower case, and each additional word starts with uppercase.

// there are some works that you can't name a variable. like Var. you can't name a var var;

// to display data from Javascript, there are multiple ways

// as already established console.log() passes to the browser console, and document.write passes to the actual webpage/html

// Strings are any value between quotes, they can be single quotes or double quotes. Double are more common. 

// typically you want to end the end of a javascript statement with a semi-colan ; its techncally optional, but the best practice is to use them. 

// now there are ways to write notes in Javascript that gets ignored by the browser.

// the // I have been using is to ignore single lines

// multiple lines we can use this

/* 
She sells 
sea shells
by the 
sea shore!
*/

// one rule with variables....they can't contain semicolans in them since the semicolan is what ends a statement. 

// also if a variable doesn't have a value, it comes up undefined

// Now for using numbers as variables, you can use whole numbers of decimals. Whole numbers are also knowm as integers 

// Behind the scenes, all numbers in Javascript are decimals numbers. 
// Decimal numbers are sometimes refered to as floats
// the maximum number of decimal places Javascript can handle is 17. 

// you can also return the type of Data
//If you want to know what type of data a variable contains, you add typeof to the console log statement

var name = "Mr Fluffypants";
var age = 10;
var luck = false;

console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (luck));

// by adding type of to the console log statement, those three above codes return string, numbers, and boolean, instead of the actual values. 

// with Numbers we can do math...or to phrase that in another way
// with Integers we can do arithmetic 

// plue + minus - mulitplicaion * and division /

var r = 4 + 2;
var pi = 3.14874872872
console.log(2 + r * pi);
document.write(0 * pi);

// when working with numbers there is also whats know as increment and decrement operator. 
// they are operators that add or subtract 1 to the number

var age = 10;
age++;
console.log(age);

var age2 = 30;
age2--;
console.log(age2);

// certain assignment operators can change values as well. 
// +=   -=   *=   /=

var num1 = 1.9;
num1 -= 0.4;
console.log(num1);

var num2 = 23;
num2 += 100;
console.log(num2);

var num3 = 2;
num3 *= 4;
console.log(num3);

var num4 = 10;
num4 /= 2;
console.log(num4);

// strings can also be added to each other

var a = "Thanos wants the ";
var b = "Infinity Stones";
var c = a + b;
console.log(c);
console.log(a + b);

// strings you can only add, you can subtract them

// term clarification, if you add two Strings together, you are " Concatenating" them together

// here's an example of a code that displays 42 years in hours(including leap years)

var age;
age = 42;
var days = age * 365;
days += (age / 4); //leap year
var hours = days * 24;
console.log(hours);

// Now lets focus more on Booleans

// a single = is used to designate a value
// a double == is used to determin equality between two values

var equality1 = 3 == 3;
var equality2 = "apples" == "oranges";
console.log(equality1);
console.log(equality2);

// the first one returns true, and the second one returns false 

// true and false are boolean values. 

// the equality operator == returns a boolean value, but we also get a boolean value when we check for < less then or > greater then 

var boolean = 3 > 6;
console.log(boolean);

// you can also use greater then or eqaul or less then or equal 

var boolean2 = 2 > 2;
var boolean3 = 2 >= 2;
console.log(boolean2);
console.log(boolean3);

// we can also flip the rules with an excalmation point !

var boolean4 = 3 != 1;
console.log(boolean4);

// using != will result in true if the values are not equal

var boolean5 = 3 != 3;
console.log(boolean5);

// and if the values are equal, using != will return false

// in cases where you may want to compare a number with a string, Javascript will by default convert the string into a number

var boolean6 = 3 == "3";
console.log(boolean6);

// so comparing the number 3 with the string "3", javascript will automatically convert the string of 3 to the number 3, thats why that returns true

// now there is also the tripple equal operator === 
// it is a comparison operator that requires the value and type to be equal

var boolean7 = 3 === "3";
console.log(boolean7);

// so where as usingg == returned true for boolean 6, === returns false for boolean 7;

// Now if you want to make sure that more then just a single condition is met to return true, you can use the "logical and"

// logical and = &&

var x = 5 < 10 && 10 < 15;
console.log(x);

// alternatvily ig you ony require one out of two comparisons to be be true we can use the logical or

// logical or = ||

var y = 5 > 10 || 10 > 15;
console.log(y);

// this returns false since neither is true

var t = 5 > 10 || 10 > 15 || 100 > 15;
console.log(t);

// this returns true becasue at least one is true.

// we also have whats called a logical not

// logical not = !  , this will change the boolean to its opposite value

var boolean8 = true;
var opposite = !boolean8;
console.log(opposite);

// the exclamation point alone is the logical note. if a condition is true, then the logitcal not operator will make it false and vice versa. 

// there are also conditional operators (all known as ternary operators)

var times = 7;
var advice = times >= 10 ? "Go to bed" : "Stay up";
console.log(advice);

// Now to put Booleans into action, lets incorporate the "if keyword"

// the if keyword allows us to execute a piece of code based on a condition, a boolean value

var temp = 50;
if (temp > 100) {
    console.log("Boy, its hot!")
}

// the code block in the braces is executed if the condition we've specifed in the parentheses is true.

// we can also use the else keyword if we want to execute a different code block when the condition in the if statement returns false.

var temp2 = 100;
if (temp > 100) {
    console.log("Boy, its hot as heck out!");
} else {
    console.log("Yeah, this is how hot it normally is here!");
}

// and else statement will only run if the if statement's condition isn't met
// and if two scenarios aren't enough, you can use the else if statement to bring in another condition

var temp3 = 20;
if (temp3 > 100) {
    console.log("hot as hell in here!");
} else if (temp3 < 32) {
    console.log("Damn, did hell freeze over, it is brick in here!");
} else {
    console.log("ah just right!")
}

// you can create as many else if statements that you want, just remember to keep all the logic straight 

var rbName = "Bitch Pudding";
if (rbName == "Fudge Turnover") {
    console.log("He loves back cherries!");
} else if (rbName == "Granie Gramcrakcers") {
    console.log("Glad she is dead!");
} else if (rbName == "Rasberry Parfait") {
    console.log("She also dead!");
} else if (rbName == "Black Cherry Pie") {
    console.log("OH NO, someone stole my black cherry!");
} else if (rbName == "Strawberry Shortcake") {
    console.log("Strawberry land is very sheltered!");
} else {
    console.log("Blam Bitches!");
};

console.log(rbName);
rbname = "Black Cherry Pie";
console.log(rbname);

// we can also put an if statement inside another if statement in order to reduce the number of times we check a condition 

var luckyNumber = 5;
if (luckyNumber >= 0) {
    if (luckyNumber < 10) {
        console.log("its a digit!");
    } else {
        console.log("Its not a digit!");
    }
}

// that was an example of nesting. The inner statement is only relevent if the outer if statement evalutes to true. 

// you can also get the same functionality by using locical operators && 

var u = 5;
if (u >= 0 && u < 10) {
    console.log("Its a digit!");
} else {
    console.log("Its not a digit");
}

// Now if you have alot of conditions that look at the same variable, it might make sense to use " switch " or to use a switch statement instead

var buddy = "Gene";
switch (buddy) {
    case "Gene":
        console.log("dependable");
        break;
    case "Aaron":
        console.log("bastard");
        break;
    case "Bethany":
        console.log("good riddens!");
        break;
    default:
        console.log("Unknown");
}

// Switch statements look for matches in the cawes we define with the " case " keyword. At the end of a case, we use " break " to exit the statement.

// the break keyword is very important becasue without it, the switch statement will run all the way to the end of the code block. 

// meaning with the breaks, it will run just the run console log of Gene, without the breaks it will run all 4 console log statements. 

// when you use non-boolean values, they are automatically converted into boolean values

var sidekick = "Robin";
if (sidekick) {
    console.log("did a spin kick!");
} else {
    console.log("oh dang its Batgirl!");
}

// since it returns true, the first console statement displays

// However this not not mean EVERY non-boolean value returns true 

var value = 0;
if(value) {
    console.log("Triggered");
} else {
    console.log("Not Triggered");
}

// values like "  0 , "" , and undefined " have no real value and return false.

// however, " false " is treated like a string and like any other string will return true.

// so what are some things we learned about Conditions and Conditional Statements?
// 1. Conditions result in boolean values
// 2. we can perform different actions based on different conditions 
// 3. if statements are conditional statements. 

var students = 6;
if (students > 8) {
    console.log("Bus");
} else if (students > 4) {
    console.log("Van");
} else {
    console.log("Car");
}

// it doesn't matter whats in the string variable, as long as it isn't an empty string, the condition will return true.

// Now lets move onto Strings. They are more powerful then we think. We already established we can add strings together with the + operator, but there is another way to concatenate them.

var part1 = "The Legend ";
var part2 = "of Korra";
var s = part1.concat(part2);
console.log(s);

// If you want, instead of using the + operator, we can use the .concat() method instead. 

// strings also have a length property to tell use how many characters they have

var wonder1 = "Princess Diana ";
var wonder2 = "of Thyemescara";
var w = wonder1 + wonder2;
console.log(s.length);

// Everything between the quotation marks, even the spaces counts as characters. 

// few little rules. When we use double quotes to create a string, we can't use double quotes within the string. When we use single quotes, we can't really use apostrophes 

// var quote1 = " I always used to say "Its not the fall that hurts", ";
// var quote2 = "its the 18 landings";
// console.log(quote1);

// see...when I take out the notes...having that quote inside the quote ruins it.

var quote1 = " I always used to say 'Its not the fall that hurts, ";
var quote2 = "its the 18 landings'";
console.log(quote1 + quote2);

// to get that code to work I had to use single quotes instead. 

// an alternate way to do this is by place a " \ " before the quote thats within the string. Its a practice called escaping

var quote3 = " my favorite quote is \"I have traveled the road less traveled.\" ";
console.log(quote3);

// so \" at the start of the quote and \" at the end of the quote

//  \ is called the escape character

// We can also extract a piece of a string with the slice() method

var t = "Time to get going!"
console.log(t.slice(12,17));

// this returns just "going" because the numbers we pass into the slice() method are the start and end postion of the string we want to extract

// also, it we use negative values the position is counted from the end of the string.

// There is also the substr() method, it behaves like the slice() method, but the second value we give it specifies the length of the piece we want to extract. 

var g = "I'm sorry to say this, but I am so Gassy right now!";
console.log(g.substr(10));

// the second number is optional, if we don't provide it, the piece spans all the way to the end of the original string.
// so by using just the 10, it starts at the 10's spot which is the t in to. 

// we can also use the replace() method to search and replace occurrences of a string within a string. 

var insult1 = "Oh...its you...";
var insult2 = insult1.replace("you" , "Nick");
console.log(insult1);
console.log(insult2);

// the replace() method searchs for the value we give it, and in return gives us a string within with the occurances are replaced. 

// we can also change a string to lowercase letters using toLowerCase() method. you can also do the reverse witha toUpperCase() method

var batman = "Adam West";
var batman2 = batman.toUpperCase();
var batman3 = batman.toLowerCase();
console.log(batman);
console.log(batman2);
console.log(batman3);

// trick question, if you are asked "Which of these statements are true about strings"

// the option for "Their length() method return the number of characters in a string"

// that is not true, length isn't an actual method, it doesn't use parentheses, so it is a property instead. 

// Now lets get back into numbers, where we have proporties and methods as well

var age = 42;
var height = 1.72;
console.log(typeof age);

var eyeColor = "blue";
console.log(typeof eyeColor);

// the typeof property will give you the type of the string. In Javascript there is only a sinlge type of number, number, 

// when we try to use a value of a data type that isn't made for a certain operation, Javasript tries to convert it to a data type that is. 

var num5 = "10" + 10;
console.log(num5);
console.log(typeof num5);

// combining the string of 10 with the number 10, Javascript will return the string of 1010. This is a result of an automatic type conversion. 

// another concept of Javascript is NaN, which tells us a value is not a number. This applies to performing arithmetic(math) with non-numeric characters

var num6 = 20 / "Robin";
console.log(num6);
console.log(typeof num6);

// even though Nan is not a number, its data type is still classified as number. 

// we can also trun numeric strings into numbers either by using parseInt() for whole numbers or parseFloat() for floating-point numbers (decimals)

var s = "49.99 USD";
var price1 = parseInt(s);
var price2 = parseFloat(s);
console.log(price1 + " " + price2);

// that returns 49 49.99 to the console. Parsing is the process of analyzing and processing a string
// these strings can contain non-numeric characters as long as they start with a number. 

// we also have access to Math.round() method. it rounds a number up or down to its nearest whole number

var num7 = 10.8892879;
var num8 = Math.round(num7);
console.log(num8);

// so that code returns 11. FYI...make sure the "M" in Math.round is always uppercase. 

// and values below 0.5 will round down, and 0.5 upwards will round up

// Math is an object that contains several constants like Math.PI and methods like Math.random() that help us solve mathematical problems

var num9 = Math.PI;
var random = Math.random();
console.log(num9);
console.log(random); 

// so Math.PI is a constant, a variable that can't be changed. Where as Math.random() produces a random number between 0 and 1

// another object, Date, it lets us work with dates and times. The difference between Date and Math is that we use the word new to create a so called instance of it. 

var date = new Date("1984-04-19");
document.write(date);

//even though we defined the value as "1984-04-19", using date takes it a step further and returns "Wed Apr 18, 1984 19:00:00 GTM -0500 Eastern Standard Time" 

// As dates are objects themseves dates do have a bunch of methods that help us use them. 

var todayDate = new Date("2020-08-27");
var year = todayDate.getFullYear();
var month = todayDate.getMonth() + 1;
var day = todayDate.getDate();
console.log(year + "/" + month + "/" + day);

// there is also a getDay() method, but it returns the weekday from 0 to 6, not the day of the month. 

// we can use these dates in a number of ways. We can change then, compare them, and display them. 

var d1 = new Date(1985, 10, 21);
var d2 = new Date(d1.getTime());
d2.setFullYear(2015);

if (d1 < d2) {
    console.log(d1.toDateString() + " is \"less\" than " + d2.toDateString());
} else {
    console.log(d1.toDateString() + " isn't \"greater\" than " + d2.toDateString());
}

// to reiterate, Multiplication and Division with a non-numeric string result in NaN.

var num9 = 5 * "Suprise";
console.log(num9);

// when using parseFloat(), if the string doesn't start with a number, using parseFloat() will return a NaN.

// heres just another example of using Math.random and Math.round 

var random;
random = Math.random();
random *= 10;
random = Math.round(random);
console.log(random);

// and here are three facts of the Date object
// 1. Date instances have methods that help is work with them
// 2. We create instances of it with the new keywod
// 3. An instance of the Date object represents a particular date and time

// A false thing about the Date Object, is that Data contains mathematical constants and methods. This is false.  

// Now lets get into Arrays 

// An array is a special kind of variable that contains several values of either the same type, or even different types

var things = ["raindrops", "roses", "whiskers", "cats"];
console.log(things);

// we create an array when we assign values in brackets to a variable. You can also use an empty bracket to create an empty array

var things2 = [];
console.log(things2);

// the empty bracket [] is also known as the " Array Literal" and we can use multiple values, a single value, or no values at all. 

// to access the values in an array, you have to target the values position in the array. They are called index positions. To access the value, you put its index in brackets after the array name. 

var things3 = ["blue", "red", "orange", "purple"];
console.log(things3[0]);

// indexs start at zero/0 ...so the 1st value is always at the 0/zero index. The 2nd value is at the 1st index, the 3rd value at the 2nd index, and so on. 

// Since Arrays are objects as well, they have a bunch of methods at their disposal as well. 

var powers = ["flight", "invisability", "super speed", "super strength"];
console.log(powers.toString());

// the method .toString() will convert the array into a comma seperated array
// the same applies to join() if we don't give it a string as an operator.

console.log(powers.join());

// join() from what I can tell is the same as toString()

// there is also a property that tells us how long an array is. it is the .length property (this is not a method, does not have a () )

console.log(powers.length);

// .length here returns 4 since there are 4 values in the array. 

// we can not only access a value, but change of update exisitng values by its index. 

powers[0] = "telekenisis";
console.log(powers);

// by accessing the 0 zero index, I changed the first value of flight to telekenisis. 
powers[4] = "razor sharp claws";
console.log(powers);

// and by accessing the 4th index (which didn't exisit) it adds the new value to that empty index. 

// we can also add values to the end of the array by using the push() method

powers.push("Weather Manipulation");
console.log(powers);

// we can also remove values from the array using the pop() method

powers.pop();
console.log(powers);

// the pop() method always removes the last value of the array

// and after we pop that value away, we can store it in a variable if we want to use it for something else

var stolenPower = powers.pop();
console.log(powers);
console.log(stolenPower);

// We've already created strings from arrays. But we can also create arrays from strings

// now if we want to remove a value from the beggining of the array. the shift() method 

powers.shift();
console.log(powers);

// shift() removes a value from the begining and moves (or shifts) all the other values to a lower index. 

// it has an opposite method as well, the unshift() method

powers.unshift("Phasing");
console.log(powers);

// the unshift() method adds a value at the beginning of an array, and all other values in turn get pushed up to a higher index. 

// there is also a method that can add, insert, replace and remove values, it is the splice() method

powers.splice(1, 1);
console.log(powers);

// to explain how the slice method works, it takes two numbers, and after that, a variable number of values

// the numbers needed for splice() are for the index, and how many values we want to remove at that index. The optional values we provide will be added at the index. 

// and we can also use the sort() method to sort an array in apphabetical order. if we want to reverse that order we can use reverse() on the array

powers.sort();
console.log(powers);

powers.reverse();
console.log(powers);

// when we use a method after another on an object in the same statement, we're said to chain these methods. 

var sentence = "I need almond flour and eggs for this recipe";
var stringSplit = sentence.split(" and ");
console.log(stringSplit);

// We can use a strings split() method with a seperator to split the string into an array of so-called substrings. 

// here are some true statements about arrays 
// 1. As objects, they have methods to work with them
// 2. they can store several values
// 3. they can store values of different types. 

// and we have 4 methods in which we can add value to the array 

var pets = []

pets[pets.length] = "Kittens";
console.log(pets);

pets.splice(0,0, "Dogs");
console.log(pets);

pets.unshift("Hamster");
console.log(pets);

pets.push("Chinchilla");
console.log(pets);

// no an example of removing a value from an array

var pokemon = ["Pikachu", "Jigglypuff", "Charizard", "Squirtle", "Pikablu", "Sparrow" ];

pokemon.shift();
console.log(pokemon);

pokemon.splice(0, 1);
console.log(pokemon);

pokemon.pop();
console.log(pokemon);

// and this is a big no no

var sentence = "I have several leather-bound books in my apartment.";
var words = sentence.split();
words.reverse();
sentence = words.join(" ");
console.log(sentence);

// that code does not acctually split the string into an array

// the split() method needs ( " " ) as a seperator to split the contents of the sentecne into individual words. 

var names = ["Heuy", "Dewy", "Louie", "Donald"];
names.push("Scrouge");
names.sort();
names.reverse();
var s = names.join(", ");
console.log(s);

// New lets move on to Loops

// sometimes for readability and simplicitiy we want to avoid pieces of code that perform very similar actions

var numbers = [3, 7, 14, 15, 22, 41];
numbers[0]++;
numbers[1]++;
numbers[2]++;
numbers[3]++;
numbers[4]++;
numbers[5]++;
console.log(numbers);

// what that code does is access each value in the index, 0-5 since there 6 numbers, and it uses the increment operator to increase each number by 1. 

//however, in that code, you had to apply it 6 times, creating alot of reduant code. This is where loops come in handy. 

// lets begin with a for loop.

var s = "";
for(var i = 0; i < 5; i++) {
    s += i;
}
console.log(s);

// in the parentheses after the word for, we put a control variable and a way to make the condition false at some point. 

// to apply this to the earlier example

var numbers2 = [3, 7, 14, 15, 22, 41];
for(var i = 0; i < numbers2.length; i++) {
    numbers2[i]++;
}
console.log(numbers2);

// so the loop starts wih 0, var i = 0, is decarling the index (i) at 0, and loops untill I meets whatever condition you specifiy. In this case, untill i isn't < less then the numbers length.

// there is also the " in " keyword, which represents another way to loop through an array

var cuteThings = ["raindrops", "roses", "whiskers", "kittens"];
for (var cuteThing in cuteThings) {
    console.log(cuteThings[cuteThing]);
}

// everytime the loop runs, cuteThing hold a different index number from the cuteThings array

// Another loop, the While loop, loops throuhg a piece of code as long as a condition is met to be true

var numberLoop = [3, 7, 14, 15, 22, 41];
var i = 0;
while (i < numberLoop.length) {
    numberLoop[i]++;
    i++;
}
console.log(numberLoop);

// We use the while keyword to create the while loop. as these loops don't have control variables, we need to make sure that the condition becomes false.

// a slight variation is the do-while loop, which uses the keyword do and while

var numberLoop1 = [3, 7, 14, 15, 22, 41];
var i = 0;
do {
    numberLoop1[i]++;
    i++;
}
while(i < numberLoop1.length); 
console.log(numberLoop1);

// A do while loop runs at least once, even if the condition is false. That's because the loop runs the piece of code before it checks the condition

// at times you may want to stop looping early, for which we can use the break keyword

for (var i = 0; i < 5; i++) {
    if (i == 1) {
        break;
    }
    console.log("Counting to " + i);
}

// The loop checks the condition in the if statement every time is comes around. When the condition is met, it'll break out of the loop.

// alternativly, if we want to skip a specific iteration but continue with the loop, we can use continue.

for(var i = 0; i < 5; i++) {
    if(i == 1) {
        continue;
    }
    console.log("Counting to " + i);
}

// the continue keyword is useful if we need to skip a specific iteration of a loop

// Two true things about Loops
// 1. They can run pieces of code with different values
// 2. they can repeat pieces of code for as often as we want. 

// lets do another while loop example

var digits = [2, 4, 7.5, 8, 11.5, 21];
var i = 0;
while (i < digits.length) {
    digits[i] = numbers[i] * 2;
    i++;
}
console.log(digits);

// that while loops simply doubles every number in the digits array. 

// and to reiterate, the break keyword will interupt a loop, and the continue keyword will only skip an iteration. 

// Now lets move on to Functions

// In a nutshell, functions are blocks of code that perfrom a specific task.

var r1 = 12;
var area1 = r1 * r1 * Math.PI;
console.log(area1);

// that code calculates the area of a circle. If you want to reuse that code, or that calcuation, you can store it in a function. 

// in order to create a function, we use the fucntion keyword, a unique name, and a pair of parentheses. Once created, we can reuse it whenever we want.

function sayHello() {
    console.log("Hello");
}
// and to run the function, just call the function
sayHello();

// Much like how we passed values to methods (like console.log()), we can do the same with functions if we include a parameter

function calculateArea(radius) {
    var result = radius * radius * Math.PI;
    console.log(result);
}
calculateArea(10);

// Parameters are temporary variables that we define in the parentheses after the function name and use to access values that we pass to the function.

// we can also create functions with multiple parameters. in the function definition, we simply separate them with commas

function insert(array, value, index) {
    array.splice(index, 0, value);
}
var thongs = ["raindrops", "roses", "kittens"];
insert(thongs, "whiskers", 2);
console.log(thongs);

// just like many method return values, we can have a function give back a value by putting a return keyword befroe the value we want to return

function calculateA(radius) {
    var result = radius * radius * Math.PI;
    return result;
}
var area = calculateA(10);
console.log(area);

// the return keyword allows us to get result from the function 

// we can also store functions in variables. After we assigned a function to a variable, we can use the variable just like function 

var add = function(n1, n2) { return n1 + n2};
var numberx = add(1, 1);
console.log(numberx); 

// great. if we assign a function to a variable without parantheses, the variable would store the function itself, as opposed to the value it returns
// this is also known as a function expression 

// what is true of functions?
// 1. they're reuseable blocks of code that perform specific tasks
// 2. We invoke them with their name and parentheses
// 3. we create them with the function keyword

function convert(a) {
    
    for (i = 0; i < a.length; i++) {
        var c = [];
        c.push(parseInt(a[i]));
         

    }
    return c;
}

// remember we can use function declatations or function expressions to define functions. Assigning a function in parentheses or using it with arguments invokes it

function add(a, b) {
    return a + b;
}

var add = function() {return a + b};

// so both of those are correct 

// Now what is wrong with this code?

function calculatePeriphery(r) {
    var result = 2 * r * Math.PI;
    return result;
    console.log(result);
}
var p = calculatePeriphery(5.5);

// the problem with that function is the return keyword stops the execution of the function. The console.log becomes unreachable. 

// What is true about Parameters and Arguments?
// 1. Parameters are temporary variables that we can use within a function
// 2. arguments are actual values that we pass to a function when we invoke it.
// 3. parameters have a name

// Now onto Objects 