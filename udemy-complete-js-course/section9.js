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
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time} `
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Destructuring is a ES6 feature and its a way of unpacking values from and array or an object into seperate variables.
// So it bascically breaks down large data into smaller data
// We use destructuring to retrieve elements from an array and store them into variables

const arr = [2, 3, 4];
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

[main, secondary] = [secondary, main];
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
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Now lets focus on destructuring objects

// to the above Restaraunt Object, I added in an object for opening hours on thu - sun.

// to destructure objects, we use curly braces

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// the 2nd console log pulls the same data, but we were able to rename the variables
// openingHours becomes hours, and categories becomes tags, etc.

// Default Values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables

let s = 111;
let t = 999;
const obj = { s: 23, t: 7, q: 14 };

// for this code to work, you need to wrap this in braces.
({ s, t } = obj);
console.log(s, t);

// Now lets try Nested Objects
// start with opening hours and retrieve Saturday

const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

// ----------------------------------------------------------------------

// Now lets talk about the Spread Operator

// so as an example, let say you wanted to add to an array

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// that is one way to do it, but lets try the spread operator  ' ... '

const newArr = [1, 2, ...arr];
console.log(newArr);

// and this gives the same result.

// The Spread operator takes all the values out of the array and is like writing them manually.

// So we can use the spread operator everytime we would write multiple code sperated by commas.  Such as Array literals

console.log(...newArr);
// is the same as writing
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// keep in mind, this is creating a completely new array.

// in a way the spread operator is similar to destructuing.

// left off on 6:14 in the video
