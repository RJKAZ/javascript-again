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

// -----------------------------------------------------------------------

// Now lets get back to the "and" and "or" operators ( && AND || )
// And how we can use them for short circuiting

// Here are some rules regarding the || (or) operator 
// 1.  Can use any data type
// 2. Can return any data type
// 3. Short Circuit evaluations (Short circuiting)
console.log(3 || 'Jonas');

// in case of the '||' operator, short circuiting means that if the first value is truthy, it will
// immediantly return that first value, which is what the above console.log demonstrates by returning 3 which is a truthy value 
// So if the 1st value is truthy, the 2nd value (the other operand) will not even be evaluated 
// JavaScript won't even read it, hence why its called Short Circutiing 

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// in this example, "Hello" is the first truthy value
// undefined, 0, and '' are falsy

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10 
console.log(guests2);

console.log('----- AND ------');

// in Short Circuting, the AND operator works in the complete opposite way that the OR operator does. 
// left off around the 10min mark

console.log( 0 && 'Jonas');

// basicly with the && operator, if the first value is falsy, it will return falsey and not even look at the 2nd value 


console.log( 7 && 'Jonas');
console.log( 7 || 'Jonas');

console.log('Hello' && 23 && null && 'jonas');
// Null is the output because it is the first falsy value

console.log('Hello' || 23 || null || 'jonas');
// 'Hello' is the output because it is the first truthy value

//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// DO NOT REPLACE if/else with &&/||

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// there is another operator the Nullish Coalescing Operator ??

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); 

//  This operator ?? works with the concept of nullish value instead of truthy and falsey 
// Nullish: null and undefined (Not 0 or 'empty string')

//_______________________________________________________

// Now lets focus on Looping Arrays the For-of-loop

// so lets say we want to loop over the entire menu 

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);

// So the for-of-loop will loop over the entire array, and at each iteration it will give us access to the current element

// which in this example is 'item', so when logged to the conosle, we get each element logged one by one 

// now what if we wanted the current index, not just the element?

// this is a pain in the for-of-loop
for (const item of menu2.entries()) {
  console.log(item);
}

for (const item of menu2.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`)
}

// since item is now an array, we can destructure it

for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`)
}

//____________________________________________________

// Now lets discuess Enhanced Object Literals 

// and in the lecture he changed all the data, so I'm not sure how to make notes without bricking the rest of the page. \
//study this more sepretly
//_______________________________________________________________

// So lets try leaning Optional Chaining 

// so lets say we wanted to get the opening hours of the restaurant for monday


if (restaurant.openingHours && restaurant.openingHours.mon)
 console.log(restaurant.openingHours.mon.open);

// With optional chaining 
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example - lets loop over this array and log to the console if the restautant is open or closed on each day
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// the above is a perfect example of Optional Chaining and the Nullish Coalescing Operator

// Optional chainging also works on calling methods

console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// Optional Chaining even works on Arrays and we can use it to
// check if an array is empty

// Arrays
// const users = [
//  {name: 'Jonas', email: 'hello@jonas.io'}];
const users = []

console.log(users[0]?.name ?? 'User array empty')

// so to write that without operational chaining

if(users.length > 0) console.log(users[0].name); 
else console.log('user array empty');

//-______________________________________________________

// Looping Objects: Object Keys, Values, and Entries

//Property Names 

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `;
};
console.log(openStr);

// Property Values

const values = Object.values(openingHours)
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//______________________________________________________________________

// Now lets discuss Sets 

// a set is a collection of unique values, so by its very nature it can't have any duplicates which makes it useful in certain situations 

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
// in this case, it ignores the duplicates and only logs the set as 3.

// the order of elements within a set is irrelevant 

// both sets and strings are iterables

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

// so within sets, you have some methods, you can see the size, return a boolean for something in the set, add, and delete into the set, or clear the whole set, but one thing you can't do is pull up by an index
//console.log(ordersSet[1]);
// Trying to pull up the 1st index value of a set won't work because sets don't have index values
// This is because there is no point to get data out of a set, because if you need to get data out of something, you would just use an Array 
// For sets all we need to know if a value is in a set or not

// Since sets are iterables, they can be looped over

for (const order of ordersSet) console.log(order);

// the main purpose of a Set is remove duplicates from an Array
// Heres an example an array of staff at a restaurnt with multiple waiters and chefs as a resturant would have. 

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);

// now what if we just wanted to pull the positions out of that to see what postitions there are.
// to do that, we create a set

const staffUnique = new Set(staff);
console.log(staffUnique);
// now to turn the set into an Array
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Kazanowski').size);

// so to sum things up, Sets are not intended to replace Arrays at all, and although sets have some use, they are not nearly as important as Arrays 


//_____________________________________________________________

// Now lets learn about Maps, which are alot more useful then sets

// In JavaScript, a Map is a data structure we can use to map values to keys
// like in objects, in Maps, data is stored in key value pairs

// The main difference between an Object and a Map, is that in Maps, the key can have any type
// Compared to objects, where most values are strings, this is important
// The keys can even be objects, arrays, or other maps

// lets create a restaurant map
// Maps are eaiser to create by leaving them empty at first and then filling them in later
// and we pass them in using the set method

const rest = new Map();
rest.set('name', 'Bubbas Pizza Shack');
rest.set(1, 'Brisbane, AU')
console.log(rest.set(2, 'Cairns, AU'));

rest
  .set('categories', ['cheese', 'saussage', 'pepperoni', 'bacon'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are Closed :(')


// even though the console.log is above these sets, it still reflect the changes they make 

// to read data from a map, you use the get method, and pass in the name of the key 

  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 21;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

  // other map methods include the 'has' - 'delete' - 'size' - 'clear' methods 

  console.log(rest.has('categories'));
  rest.delete(2);
  // rest.clear();
  rest.set([1,2], 'Test');
  // rest.set(document.querySelector('h1'), 'Heading');
  console.log(rest);
  console.log(rest.size);

  console.log(rest.get([1, 2]));
  // this console log returns undefined because even though they are written the same, in the Heap, they are consider unique and have a different place in memory 

  // a workaround to get access an array stored in a map

  const array2 = [3,4];
  rest.set(array2, 'Test2');
  console.log(rest.get(array2));
  // by establishing array2 as a const, and calling that array by name, it will refer to the same data/memory

  // Maps and Sets were both introduced in ES6

  // There is also another way to populate a map without using the set method 

  const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct!'],
    [false, 'Try Again!'],
  ]);

  console.log(question);

  // if this map/array structure looks similar, it should, its from the same 
  // structure returned from calling Object.entries


  // Given the simmilarity to objects, there is a way to convert objects to maps

  
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));

  console.log(hoursMap);

  // Iteration is also possible on maps, so you can use a for loop

  // Quiz App
  console.log(question.get('question'));

  for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }

  // const answer = Number(prompt('Your answer'));
  // console.log(answer)
  // console.log(question.get(question.get('correct') === answer));

  // Sometimes it is also nessesary to convert a map back into an Array 
  // to do so, you build a new array and then unpack using the spread operator 

  console.log([...question]);

  // you also have acces to other array methods

  //console.log(question.entries());
  console.log([...question.keys()]);
  console.log([...question.values()]);

  // _________________________________________________________________

  // So Objects, Arrays, Sets, and Maps, which data structure do I use? 

  // there are 3 sources of data
  // 1. From the Program itself: Data written directly in source code (status messages)
  // 2. From the UI: Data input from the user or data written in the DOM (tasks in a todo app)
  // 3. From external sources: Data fetched for example from Web API (recipe objects);

  // Reminder - API = Application programing interface 

  // So no matter what the data comes from or what the data is, we usually have
  // Collections of Data
  // these collections need to be stored somewhere, hence Data Structures 
  // JavaScript has 4, Arrays, Objects, Sets, Maps

  // If you have a simple list of data, you use an Array or a Set
  // If you need key/value pairs, you use an Object or a Map

  // with Key/Value pairs, the keys allow us to describe values 
  // with a simple list like an array, we just have the value without any description
  
  // Web API's are the most common source of data in JavaScript 
  // Most API's return data in JSON format which uses the same formatting as JavaScript objects and Arrays 

  // On a Side note, there are also two additional data strucutres built into JavaScript,  WeakMap and WeakSet
  // Other Coding Languages, there are alot more data strucutres. Such as Stacks, Ques, Linked Lists, Trees, and Hash Tables

  /* 
  So for Arrays Vs Sets - we should use them for simple sets of values when we do not need to describe the value

  We use Arrays when 
  1. When we need an ordered list of values (that might contain duplicates)
  2. Use when you need to manipulate data

  We use Sets when 
  1. You need to work with unique values
  2. Use when High Performance is really important 
  3. Use to remove duplicates from Arrays

  so Sets aren't intended to replace arrays, but to compliment them when dealing with unique values

  So for Objects VS Maps - we should use them when we need to describe values using keys

  We use Objects when
  1. More Traditional key/value store (maps is only from ES6 and up)
  2. Easier to write and access values with ' . ' and ' [] '
  3. Use when you need to include functions (methods)
  4. Use when working with JSON (can convert to map)

  We use Maps for
  1. Better performance
  2. Keys can have any data type
  3. Easy to iterate
  4. Easy to compute size
  5. Use when you simply need to map keys to values
  6. Use when you need keys that are not strings 

  although Maps are technically superior, Objects, since they are legacy are far more wildly used






  */


