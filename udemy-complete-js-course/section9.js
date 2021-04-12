/*
Section 9 Notes on Data Structures, Modern Operators, and Strings
Lecture on Destructuring Arrays
*/

'use strict';



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

// Destructuring is a ES6 feature and its a way of unpacking values from and array or an object into seperate variables. 
// So it bascically breaks down large data into smaller data
// We use destructuring to retrieve elements from an array and store them into variables 

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// that is normally how you select a value from an array, but lets try destructuring 

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// now lets work with the italian restaurant data 

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

/* So this is how you switch variables
const temp = main; 
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

// Now lets do this with destructuring

[main, secondary] = [secondary, main]
console.log(main, secondary);

// we do not need let or const here since are just reassinging the values of the two variables. 

console.log(restaurant.order(2, 0));

// This is how we recieve 2 return values from a function 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// now how do we desturcture on a nested array?

const nested = [2, 4, [5, 6]];
// so how do we get the 2 value inside the inner array?

// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values - you can select default values, so you can have something instead of undefined. this is usful in working with API's. 
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);