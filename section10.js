'use strict';
// Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
  // in this above code, the price has to come after numPassengers since numPassengers is used in the prices calculation
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

// How Passing Arguments Works: Value VS Reference

// so we create an object

const flight = 'UA115';
const reese = {
  name: 'Reese Kaz',
  passport: 239873839,
};

// now we create a check in function

const checkIn = function (flightNum, passenger) {
  // we change the flight number and passenger name, just some changes this check-in function does
  flightNum = 'UA999';
  passenger.name = 'Mr. ' + passenger.name;
  //now we have the check-in function verify the passport number is correct
  if (passenger.passport === 239873839) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, reese);
console.log(flight);
console.log(reese);

// breaking it down
// when the check-in function is called, 'flight' is a primative data type
// its just a string, so when you pass that into the function, 'flightNum' becomes a copy of 'flight'
// So 'flightNum just contains a copy, not the original value
// the same as writing flightNum = flight;

// Now the reese Object on the other hand, is passed into the function as passenger
// and then we changed that passenger object, which in turn also changed the reese object
// why is that?
// So when we pass a reference type into a function, whats copied is really just the reference to the object in the memory heap

// its the same as doing this
const flightNum = flight;
const passenger = reese;

// so when we try to copy and object, we are really just copying the reference to that object in the memory heap
// but they both still point to the same object in memory
// so manipulating the passenger object, it is exactly the same as manipulating the reese object
// Since they are both the same object in the memory heap
// So passing a primative type into a function is the same as making a copy of it outside of the function with the same value
// On the other hand when we pass an object into a function, it is just like copying an object so any change in the copy will happen in the original

// so lets do another example

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(reese);
checkIn(flight, reese);
// this returns both in order, since in effect we have two functions manipulating the same object

/*
In programming there are two terms that are used for dealing with functions
1. Passing By Value 
2. Passing By Reference 

To reiterate, JavaScript does not have passing by reference, it only passes by value, even if it looks like it passes by reference
C++ for example you can pass a reference to any value 
So even though for passing in objects, when we pass in the objects Reference, that reference is techncially still a value,
a value that just happens to contain a memory address. 


//__________________________________________________________________________________________________

 First Class VS Higher Order Functions

1. JavaScript treats functions as first class functions
2. This means that functions are simply values
3. Functions are just another "type" of object

Since objects are values, so to are functions, and this has many benefits
1. We can store functions in variables or properties
2. We can pass functions as arguments to other functions
3. We can return fucntions from functions
4. We can call methods on functions 


Now there are also Higher Order Functions
1. It is a function that recieves another function an an argument, that returns a new function, or both.
2. This is only possible because of first class functions
3. An example of this is the addEventListener. It is a higher order function because it is a function that recieves another function, which in this case would eb a Callback function (that function you pass into it). Its called Callback function becasue that function will get 'called" by the higher order function 
4. but it is still a function that returns a new function

Now lets create out own higher order functions.

we will create a function that takes other functions as input 
We will start by making two very simple string transformation functions
*/

// this code takes a string and takes all the empty spaces and returns them with an empty string, and then also converts it to lowercase, essentially turning multiple words into one longer word

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// so we will use these two functions to create a higher order function

const transformer = function (str, fn) {
  //so this function will take in both a string and a function, so this is a higher order function
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// another example - JavaScript uses Callbacks all the time

const happyFace = function () {
  console.log(':)');
};
document.body.addEventListener('click', happyFace);
['Jonas', 'Martha, Adam'].forEach(happyFace);

// callback functions are great for Javascript because they allow us to split up our code into more reusable and intterconnected parts

//The other big benefit of callbacks functions is they allow us to create Abstraction

// Absrraction basicly hides low level code (or level of detail) so we can focus on higher level code ( I think)

// so in relation, the higher level function doesn't care how the lower level functions accomplish their code, just that they accomplish it. Its focused on the higher level big picture, and not the low level functions

//_____________________________________
// FUNCTIONS RETURNING FUNCTIONS

// so this is a simple greet functon that takes in a function and returns another function
//

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// challenge to do this in a quicker way (but more confusing since its an arrow function returning another arrow function)
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

//_____________________________________________________________

// THE CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lutthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schedtamnn');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// does not work because book is just a regular function, so the this keyword will return undefined
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// now the apply method does almost the same thing as the call method, but it doesn't receive a list of items, but rathe an array

const flightData = [582, 'Goerge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// the apply method isn't really used much in modern day javascript anymore.

book.call(swiss, ...flightData);

// for modern javascript its preferable to just use the call method and then the spread operator to spread out the array

// Now onto the Bind Method

// Like the Call Method, the Bind Method also allows us to set the "this" keyword, but bind does not immediantly call the function
// instead it returns a new function where the this keyword is bound. So its set into what value we pass into bind.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookXL = book.bind(swiss);

bookEW(23, 'Steven Willaims');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// The Bind method is very useful when used together with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// that code returns NaN becuase the 'this' keyword is technially refering to the ('.buy')
// It does this becasue when using event listeners, the 'this' keyword will always point to the element the event listner is attached to
// to fix this we need to manual define the 'this' keyword, so we use the bind method which will return a new function

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
