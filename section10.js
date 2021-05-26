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

// Imediantly Invoked Function Expressions ... The IIFE

/*
Sometime we need a function that is only used once and can then dissapear 
*/

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// Now even if I don't intend to run this function ever again, I technically could if I wanted to
// Like there is nothing stopping us from running the code again

// So what we want to do is instead run a function imediantly without saving it anywhere, kind of like the function self destructs after use so you can only use it the one time

// a workaround is to basicly create a function without a name, which normally Javascript will not let you do
// so to trick the Javascript into running it, you wrap the whole thing in paraneteses and Javascript will then change from expecting a Statement to instead expecting an expression
// and then your add the () at the end to instantly call it.

(function () {
  console.log('Now this truely wont ever run again');
})();

// so this function will now run as a function as an expression, and since it has no name, you can't technically call it again

// This is known as the IIFE - Imediantly Invoked Function Expression

// An even faster way of doing it is with an Arrow Function

(() => console.log('This will also never run again'))();

// Now why do we have this in Javascript, its important to understand that Functions create scopes
// One scope does not have access to variables from an inner scope
// Where as innerscopes have access to the global scope, but global scope does not have access to the inner scopes. Its purely a one way street.

// this is known as Data Encapsulation

// Just or reiterate, Block scoping was introduced with Let and Const. Variables declated with Var will work because Var will ignore the block its scoped in
// For purposes of security, IIFE aren't really used to so much, but if you need a function called only once, they still have their purpose.

// NOW FOR CLOSURES - ONE OF THE HARDEST JAVASCRIPT FUNCTIONS TO UNDERSTAND
// Closures aren't commonly used so its not likely you'll delibretly create one like an Array or a new Function
// In certain situations, Closures kind of happen automatically.
// So lets create the situation that enabled a closure
// Below is a function that creates another function that increases the passenger count
/*
So, to explain this below function in better detail 

So in the Call Stack (the order in which functions were called)
So beofre we call secureBooking, it is in the global execution context 
and in there, the Global EC, we only have that secureBooking function, so that is all that is in the Global Scope
Then once we call secureBooking, a new execution context is pushed on top of the execution stack
Now each execution context has a variable envirorment where it contains all its local variables.
This new execution context contains the passengerCount which is set to 0
So passengerCount is now in the local scope, and this scope can access all variables of the parent scope, which in this case is just the global scope
And then a new function is called and stored in the booker variable, so the global context not contains the booker variable
So when the secureBooking function returns, its execution context pops off the callstack and dissapears 
This all stuff we have gone over, just going over the callstack and scope chain 
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// So having called the function 3 times, it increments it each call, from 1 to 2 to 3 passengers
// But how can this be? Since the secureBooking function has already finished, so its execution context should be gone as well
// What makes this possibale is a closure. Techncially calling the function 3 times should always return 1 passenger, but somehow it continues to have access to the passenegerCount varibale that should also be gone

// So in a nutshell, a Closure makes a function remember all the variables that existed at the functions birthplace
// So secureBooking is the birthplace of the function

/*
So after booker() is called the first time and finishes executing, its execution context leaves the call stack
When called again, another execution context is placed on top of the call stack and its empty since it has no variables declared in the function 

The secret of the closure is that any function always has access to the variable enviroment of the execution context in which the function was created. 
So the Booker variable was born in the execution context of the secureBooking function, so it can still access the passengerCount variable  

to reiterate since this is kind of confusing

1. A function has access to the variable enviroment of the execution context in which it was created
2. The Closure is that variable enviroment (VE) attached to the function, exactly as it was at the time and place the function was created. 

so the passengerScope variable will always exist in the scope in which the booker function was created.

Closures essentially preserve the scope chain, even when the scope is destroyed at the loss of its execution context

And the function will bascily carry it forever

Thanks to the closure, the function does not lose access to variables that existed at the functions birthplace. 

Here are some formal defintions of closures

Def 1 - A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

Def 2 - A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughtout time. 

Def 3 - A closure makes sure that a function doesn't loose connection to variables that existed at the functions birth place;

Def 4 - A closure is like a backpack that a function carries wherever it goes. This backpack has all the variables that were present in the enviroment where the function was created. 

IMPORTENT TO REMEMBER - We do NOT Have to manually create closures, this a JavaScript feature that happens automatically. 
We can't even access closed over variables explicitly. A closure is NOT a tangible JavaScript object.

So while we can't acctually access these variables directly, we can look with console.

*/

console.dir(booker);

// Another look at Closures - these two examples will demonstrate that you don't need to return a function from another functon in order to create a closure

// example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// reassigning f function

h();
f();
console.dir(f);

// example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
