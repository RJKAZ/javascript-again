'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
      <div class="movements__type
      movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML
    ('afterbegin', html);
  });

};

displayMovements(account1.movements);

console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
Why do Arrays have methods? 
Methods are simply functions we can call on objects, so they are functions attached to objects
So if we have Array Methods, that in turn means Arrays are also objects 
So Arrays are objects and think of the methods as built in tools 

Lets do a test array we can work with
*/ 

let arr = ['a', 'b', 'c', 'd', 'e'];

// the first method we will talk about is the slice method
// The Slice method we can extract any part of an Array without changing the original Array 
// Think of it like taking a slice of Array, hence why its called Slice
// We pass in the index of the item in the array we want to slice it
console.log(arr.slice(2));
// we put this in the console log so we can see it, but this creates a new Array with the first three (0,1,2) indexs of the arr array
console.log(arr.slice(2, 4)); // in this case, the 4 is the end parameter which we don't acctually see. 
// so the length of this the end parameter minus the begining one. 
// like in strings you can also use negative parameters
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// you can also bascily copy an array by calling the slice method without any arguments or parameters
console.log(arr.slice()); 
// that works alot like the spread operator

// left off on 7:44 mark, just finsished Slice Method

// Next up with go to the Splice Method 
// The Splice method works very simmilar to the Slice method except Splice does change the original array.
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

/// what splice does it takes part of the original array and returns what it took, but deletes what was extracted off the original array.


// lets just return the original array
arr = ['a', 'b', 'c', 'd', 'e'];

// Now we have the Reverse Method

const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2);
console.log(arr2.reverse());

// quite simply, it will reverse an arrays order
// However, to note, like the Splice method, the Reverse Method will change the original array.

console.log(arr2);

// The Next method is Concat which will concatanate (join) two arrays
// In this example I'm making a new Letters variable that combines arr and arr2
const letters = arr.concat(arr2);
console.log(letters);

// in a similar sesne this can kind of work like the spread ... operator in that it can create the same effect

console.log([...arr, ...arr2]);

// And we also have the Join method 
console.log(letters.join('-'));
// this bascily turns the array into a string with a sperator specified after join
console.log(letters);
// Join doesn't change the original array
console.log(letters.join('#!'));

//____________________________________________________________________________________________________________

// Looping Arrays: forEACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// so the positve numbers are deposites and the negative numbers are withdrawls

for (const movement of movements) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// the above code will log to the console what you withdrew and what you deposited
// there is another way to achive this with the forEach method

movements.forEach(function(movement) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
})

// another revision of the same code more or less

for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function(mov, i, arr) {
  if(mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  };
});

//_____________________________________________________________________________________

// forEach with Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// in Javascript, an underscore _ can be used in place of a throwaway variable