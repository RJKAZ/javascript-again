// Some Practice to go thru methods

/*
The first method is the Map Method 
The Map method creates a new array with the results of calling a provided function on every element in the array.
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const mapped = arr1.map((element) => element + 30);
console.log(mapped);

// this returns the array with each number added to 30.
// (6) [31, 32, 33, 34, 35, 36]
//_____________________________________________________________

/*
The second method is the Filter Method 
The Filter method creates a new array with only elements that pass the condition inside the provided function 
*/

const arr2 = [1, 2, 3, 4, 5, 6];
const filtered = arr2.filter((element) => element === 2 || element === 4);
console.log(filtered);

// So the condition in the arrow function is any element equal to 2 or 4
// So this returns the (2) [2 , 4]

//_____________________________________________________________

/*
The third method is the Sort Method 
The Sort method is used to arrange/sory the array's elements either in ascending or decending order
*/

const arr3 = [1, 2, 3, 4, 5, 6];
const alphabet = ['f', 'a', 'c', 'v', 'z'];
// how to sort in descending order
descend = arr3.sort((a, b) => (a > b ? -1 : 1));
console.log(descend);
// This returns the numbers array in decending order

// sort in ascending order
ascend = alphabet.sort((a, b) => (a > b ? 1 : -1));
console.log(ascend);
// this returns the alphabet array in order from A to Z

//_____________________________________________________________

// The 4th method is the forEach() method
// this method helsp to loop over Arrays by executing a provided callback function for each element in an array.

const arr4 = [1, 2, 3];
arr1.forEach((element) => {
  console.log(element);
});

// this returns 1-6... I'm not sure why, it should only return 1-3

//______________________________________________________________

// The 5th method is the concat() method
// this method is used to merge two or more arrays and returns a new arry, without changing the existing arrays.

const arr5a = ['a', 'b', 'c'];
const arr5b = ['d', 'e', 'f'];

console.log(arr5a.concat(arr5b)); // this returns both arrays combined into one array

// but the variables still hold the original value of arr5a and arr5b.

//________________________________________________________________

// The 6th method is the every() method
// this method checks every element in the array that passes the condition, returning true or false as appropriate

const arr6 = [1, 2, 3, 4, 5, 6, 7];

// all elemenets are greater then 5
const greaterFive = arr6.every((num) => num > 5);
console.log(greaterFive);
// false

// all elemenets are less then 9
const lessNine = arr6.every((num) => num < 9);
console.log(lessNine);
//true

//____________________________________________________________________

// The 7th method is the some() method
// This method checks if at least one element in the array passes the condition, returning true or false as appropriate

const arr7 = [1, 2, 3, 4, 5, 6, 7];

// at least on one element is greater then 5?
const greaterNum = arr7.some((num) => num > 5);
console.log(greaterNum); // true

// at least one element is less than or eqaul to 0?
const lessNum = arr7.some((num) => num <= 0);
console.log(lessNum); // false

//________________________________________________________________________________

// The 8th method is the includes() method
// this method check if an array includes the element that passes the condition, returning true or false as appropraite

const arr8 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr8.includes(2)); // true
console.log(arr8.includes(8)); // false

//________________________________________________________________________________________

// the 9th method is the join() method
// this method returns a new string by concatenating all of the array's elements seperated by the specified separator

const arr9 = ['m', 'a', 'n', 'd', 'e', 'e', 'p'];
console.log(arr9.join('')); // 'mandeep'

//_______________________________________________________________

// the 10th method is the reduce() method
// This method applies a function against an accumulator and each element in the array to reduce it to a single value

const arr10 = [1, 2, 3, 4, 5, 6];
const reduced = arr10.reduce((total, current) => total + current);
console.log(reduced); // 21

//________________________________________________________________

// the 11th method is the find() method
// This method returns the value of the first element in an array that pass the test in a testing function

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr11.find((element) => element > 5);
console.log(found); // 6

//_________________________________________________________________

// the 12th method is the findIndex() method
// this method returns the index of the first element in an array that pass the test in a testing function

const arr12 = ['Danny', 'Mandeep', 'John', 'Ruby'];
const indexFinder = arr12.findIndex((element) => element === 'Mandeep');
console.log(indexFinder);

// __________________________________________________________________

// The 13th method is the indexOf()
// This method returns the index of the first occurance of the specifiec element in the array, or -1 if it is not found.

const arr13 = ['Danny', 'Mandeep', 'John', 'Ruby'];
const indexFinder1 = arr13.indexOf('Mandeep');
console.log(indexFinder1); // 1

//____________________________________________________________________

// The 14th method is the fill() method
// This method fills the element in an array with a static value and returns the modified array

const arr14 = new Array(3);
console.log(arr14); // [empty, empty, empty]
console.log(arr14.fill(10)); // [10,10,10]

//____________________________________________________________________

// The 15th method is the slice() method 
// This method returns a new array with a specified start to end elements

const arr15 = ["a", "b", "c", "d", "e"];
const sliced = arr15.slice(2, 4);
console.log(sliced);
console.log(arr15);

// to note you set the first and last index, so the index of 2 is C, and while the index of 4 is technically the e, the slice method does not return the end index, so it only returns C & D

//__________________________________________________________________________

// The 16th method is the reverse() method
// This method revers and array in place. Elements at the last index will be first and elements at the 0 index will be last, basicly reversing whatever number or string you use it on.
const arr16 = [1, 2, 3];
  arr16.reverse();
  console.log(arr16);

//________________________________________________________________________

// The 17th method is the push() method 
// This method adds one or more elements to the end of the array and returns the new length of the array.

const fruits = ["Apple", "Peach"];
console.log(fruits.push("Banana")); 
console.log(fruits);




// https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0
