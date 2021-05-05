// Quick refresh on Destructing Arrays, let me make my own array mimicking what was in the example.

// Which is a variable storing an object that within it has objects and arrays 

'use strict';

const superHero = {
    name: 'Captain Marvel',
    location: 'Deep Space',
    categories: ['Avenger', 'Kree Enforcer', 'Air Force'],
    allies: ['Nick Fury', 'Star Lord', 'Monica Rambeau'],
    sellingPoints : {
        powerLevels: {
            flight: 1000,
            photonBlasts: 800,
        },
        intellegence: {
            iq: 200,
            eq: 140,
        },
    },





}

console.log(superHero);


console.log(`The most powerful hero in the marvel universe is ${superHero.name}!`);

let [currentJob, formerJob, evenFormerJob] = superHero.categories;
console.log(currentJob, formerJob, evenFormerJob);

// so with the above what I did, I created three new variables, and matched them to the array of categories in the superHero variable.

// just another example doing the same, but declaring each variable seperatly. 

const powers = ['flight', 'strength', 'invunrability'];
const power1 = powers[0];
const power2 = powers[1];
const power3 = powers[2];

console.log(power2);

// so now I'm gonna make some new vairbales. 

let [partner, annoyance, lover] = superHero.allies;
console.log(lover);
// so I made 3 new variables based on her allies, and now I'm going to switch their values

[partner, lover] = [lover, annoyance];
console.log(lover);

// where as the first console.log returned Monica Rambeau, I switched the value of the lover to the annoyance, so now Captian Marvel loves Star lord instead

// Now for destructing a nested array 

const villians = ['Mystique', 'Magneto', 'Juggarnaut', ['Pyro', 'Blob', 'Sabertooth']];

// so how do I get out pyro and blob?

const [,,,[fireDude, fatDude, hairyDude]] = villians;
console.log(fireDude);
console.log(fatDude);
console.log(hairyDude);

// to do that, you need to have the commas, even if I don't declare the outter villain array 
// const [shapeShifter, masterOfMagnet, unstoppable, [fireDude, fatDude]] = villians;
// weirdly, if I don't use the commas, it will take the values from the first string,
// fireDude returns M, fatDude returns Y, and hairyDude returns S, which is the first three letters of Mystique, which is the first value of the outer array
// not sure why it does that. 

// Section 9 at line 121, right before going into destructuring objects. 