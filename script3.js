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