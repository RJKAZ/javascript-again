'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    //console.log(str);  this doest work since str is block scoped and we are outside the scope
    console.log(millenial); // but this one will work becasue its using the Var variable, which cannot be block scoped, so it defaults to function scope.
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
// you can't access the age element from here because it is function scoped and we are outside the function.
// printAge();
// ditto with calling the function, with both the age variable and calling the printAge function, we are out of the scope.
