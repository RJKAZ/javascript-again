// We start here with Arrays. Sometimes making seperate variables for certain data (such as friends name) would make your code longer and complex
// instead of creating seperate variables, you can group all the values into an array using regular brackets []
// the values inside an Array are called elements. 
// this is an array with 3 string values
var friends = ["Tom", "Mia", "Lee"];
console.log(friends);

// that code console logs and array with three elements. In that case Tom is element 0, Mia is 1, and Lee is 2.
// Use commas , to seperate two or more values in an array, and the values are surrounded by a normal "non curly" bracket

// this works with numbers as well, even booleans. an array can store any value in any combination 

// This is an Array with three number values 
var myFavNum = [ 5, 8, 11];
console.log(myFavNum);

// this is an Array with both boolean value 
var myLuck = [true, false];
console.log(myLuck);

// and this is an Array with a Number, String, and Boolean value.
var myStuff = [ 10000, "I love money", true];
console.log(myStuff);

// now every element in an array has a numbered position called an index (indices)
// the index always starts at Zero ( 0 ) so the first element is an array is at the zero index, and the 2nd element in the array is at the 1st index. 
// If you want to access a specific element in an array you do so by its index

// This code returns 990 since its at the 2nd index (don't forget the first index is always zero)
var testIndex = [ 3, 400, 990];
console.log(testIndex[2]);

// you can also assign the element a new variable 

// this bit of code has the first index's ( zero) value at 70. but I changed it to 65 so when console.loging that index, it shows the new value. 
var temp = [ 70, 60, 80, 100];
temp[0] = 65;
console.log(temp[0]);

// now if you accident forget the 0 index, and call the 4th elment as the 4th index
console.log(temp[4]);
// that console logs "undefined" since there is techncially no 4th index value. There are 4 values but they go from 0-3 not 1-4,

// now you can also add and remove values into an array

// to add we use the instruction " push "

var comics = ["Static", "Icon", "Blood Syndicate"];
comics.push("Hardware");
console.log(comics);

// that code adds the string value "Hardware" into the Array at the 3rd index value 
// adding into an array with the " .push() " always puts the value at the end of the array
// you can also add several values with .push() and seperating them by the comma

comics.push("Superman", "Batman", "Justice League");
console.log(comics);

// now to remove elements from the array you use " .pop() " this will remove the last element in the array
comics.pop();
console.log(comics);
// that pop removes Justice League from the Array;

// you can also store the popped element as a variable 

var favComic = comics.pop();
console.log(favComic);
console.log(comics);

// so favcomic console logs batman is now its only variable and no longer part of the array since I poped it off.

// we can also use lenght after the arrya name and a period to get the number of elements in an array

var computerBrands = ["Microsoft", "Acer", "Hp", "Apple"];
console.log(computerBrands.length);

// that console logs 4 since there are 4 elements in the array (this is more useful the larger the array)
// you can also store the length of the array in a variable.

var length = computerBrands.length; 
console.log(length);

// the variable lenght is equal to the lenght of the array in the computerBrands variable 
// hence forth the value of the variable length is 4
// This will work no matter how many elements are in the array
// this even works if there are no elements in the array, if the array has an empty bracket, it returns zero

var laptop = [];
console.log(laptop.length);

// you can also use the length of an array to create conditional statements that depend on the number of elements

var tasks = ["dishes", "windows", "vacuum"];
if (tasks.length > 0) {
    console.log("You still have alot of work to do");
}

// we can also use the length of the array to create for loops that go throgh all the elements

var ememies = ["Joker", "Azula", "Wicked Witch"];

for (var i = 0; i < 3; i++){
    console.log(i);
}

// that code loops three times, from 0 to 2

// you can also use the lenght of the array

for (var i = 0; i < friends.length; i++){
    console.log(i);
}

// Now onto Functions, we start by calling function follwed by the functions name, and for now an empty parantheses. followed by curly brakcets where we put the code block
// All Code we want to group toghether goes between the curly braces.

function greetUser() {
    console.log("The Weather today sucks!");
    console.log("Its all rainy and humid!");
}

// Now to run the function (or rather run its code) we have to call the function. we do that by calling its name with the empty parentheses

greetUser();

// that runs the function and in the console it displays both statements within its code block. 

// Functions are a way to group related code. They the function name has more then one word, do not include any space, but camel case it instead. 

// sometimes functions need specific information to help them perform their task. In regards to this you can create variables inside functions

function globalConquest() {
    var plot = " stealing every left shoe in the world!";
    console.log("I shall begin my conquest of the planet by" + plot);
}
globalConquest();

// in that above example, I created a variable with a string value and I combine the console log statement with that variable.

// For functions that do simmilar things, you can pass specific information to just one function instead of repeat the code.

function yuck(food) {
    console.log("I hate " + food);
}
yuck("mushrooms");
yuck("Durian Fruit");

// to pass a value to a fucntion, we add a variable called a parameter inside the parenthese of the function. You can name it whatever you want, and the parameter acts like a variable and stores value.
// in that above example, I named the parameter food. To pass the value to the parameter (food), we place it between the paranthese when we call the function. 
// So in that above example, I called the function Yuck and passed different food values to its food parameter each time I called it. 

// A function can also return a value to the code that called it. To return something from a function, we add the return keyword followed by the value to return, like here with return age;

function userAge(number) {
    var age = "User age: " + number;
    return age; 
}
console.log(userAge(22));

// a function can return any kind of value, like string, number, or boolean. this function returns the number value inside result

function timesTen(number) {
    var result = number * 10;
    return result;
}
console.log(timesTen(10));

// We can only return a single value. here we return the boolean value insdie the bariable with return isGreater

function greaterThanTen(number) {
    var isGreater = number > 10;
    return isGreater;
}
console.log(greaterThanTen(30))

// we can store the return value in a variable too. Here we store the return value in result and display it in the console.

function myAge(number) {
    var me = "RJ's age is " + number;
    return me;
}
var result = myAge(36);
console.log(result);

// if you don't include a return statement, the function returns the value undefined.

function myLove(food) {
    var tasty = "I love to eat " + food;
}
var result = myLove("Sushi");
console.log(result);

// since I didn't include the return statement, that code console logs undefined instead of "I love to eat Sushi"

// So to reiterate, we return a value from a function by adding the return keyword followed by the value to return. 
// a function can return any value, string, boolean, or number
// But a function can only return a single value

function giveMeTen() {
    return 10;
}
console.log(giveMeTen());

// left off on Using Multiple Parameters 