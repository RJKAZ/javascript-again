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

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
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

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

// that is one way to do it, but lets try the spread operator  ' ... '

const newArr = [1, 2, ...arr1];
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

// So the spread operator takes all the elements from the array, but unlike destructuring, it does not make any new variables. 
// Because of that, the spread operator can only be used in places were we would write values seperated by commas

// copy array 
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 Arrays 
const menuJoined = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuJoined);

//even thought the spread operator works on Arrays,it acctualy just works on all iterables
// Iterables are things like arrays, strings, maps, or sets....just not Objects 

// Now since strings are also Iterables, you can also use the spread operator on them as well

const str = "Jonas";
const letters = [...str, ' ', 's.'];
console.log(letters);

// but even with strings, you can only use the spread operator when building an array or passing values into a function. 

console.log(letters);
console.log(...str);
console.log('j', 'o');
//template literals won't work with these
// console.log(`${...str} Schmedtmann`);

// lets do a real world example - added an orderPasta function to the top code 

const ingredients = [
  //prompt("Let\'s make pasta! Ingredient 1?"), 
  //prompt("Ingredient 2?"),
  //prompt("Ingredient 3?")  
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Pizza Shack';
console.log(restaurantCopy.name);
console.log(restaurantName);

// ----------------------------------------------------------------------------------------------------

// Now Notes of Rest Pattern and Parameters

// The Rest Pattern looks the same as the spread operator with three dots, but it does the opposite. 

// So we use the Spread Operator to build new Arrays or pass multiple values into a function. Or we can use it to spread an array into individual elements

// Now the Rest Pattern does the opposite and takes multiple seperate elments and condenses them into an Array.

// So Spread is to unpack elements from an Array and Rest Pattern is to pack elements into an Array

// Spread on the Right of =
const arr2 = [1, 2, ... [3, 4]];

// Rest on the Left of =
const [m, n, ...others] = [1, 2, 3, 4, 5];
console.log(m, n, others);

const [pizza, , risotto, ...otherFood ] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// now the rest element must be the last element, hence forth there an only be one rest 

// this also works in objects, now remaing elements will be collected into a new object instead of a new array

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 1st Part was Destructuring 
// 2nd Part is Functions

//left off at 9:10

// Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);

};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const e = [23, 5, 7];
add(...e);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// so to recap, both the spread and the rest syntax look exactly the same, but they work in opposite ways depending on where they are used. 

// And Spread is used where we would write values seperated by commas, and the Rest is used where we would otherwise write variable names seperated by commas (so not values)

