'use strict';
// Default Parameters

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
checkIn(flight, jonas);
// this returns both in order, since in effect we have two functions manipulating the same object

/*
In programming there are two terms that are used for dealing with functions
1. Passing By Value 
2. Passing By Reference 

To reiterate, JavaScript does not have passing by reference, it only passes by value, even if it looks like it passes by reference
C++ for example you can pass a reference to any value 
So even though for passing in objects, when we pass in the objects Reference, that reference is techncially still a value,
a value that just happens to contain a memory address. 
*/
