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

// for this I will make a new object (I hate jumping up in the code)

const superVillian = {
    name: 'Doctor Doom',
    lair: 'Latvaria',
    categories: ['Dark Avenger', 'Monarch of Latvaria', 'Smartest Man in the World'],
    enemmies: ['Reed Richards', 'Tony Stark', 'Galactus'],
    sellingPoints : {
        powerLevels: {
            magicPowers: 1000,
            advancedTech: 3000,
        },
        intellegence: {
            iq: 2000,
            eq: 5,
        },
    },

}

console.log(superVillian);

const { lair, enemmies } = superVillian;
console.log(lair, enemmies);

const {
    lair: evilhideout,
    enemmies: ArchNemesis,
} = superVillian;

console.log(evilhideout, ArchNemesis);

// so I was able to pull the lair variable and the enemmies array from the superVillian variable 
// and then I was able to rename lair to evilhideout, and archNemesis

console.log(lair, enemmies);

// however the old variables still remain, so its not so much I make renamed the varriable, but I created new variables that point to the same data

// now there are ways to fully revalue the variable

let blue = 'The Space Stone';
let yellow = 'The Mind Stone';
let red = 'The Reality Stone';
let purple = 'The Power Stone';
let green = 'The Time Stone';
let orange = 'The Soul Stone';
console.log(blue, yellow, red, purple, green, orange);
// This console log returns the color with its corresponding infinity stone

const infinityGauntlet = {blue: 'Space', yellow: 'Mind', red: 'Reality', purple: 'Power', green: 'Time', orange: 'Soul'};

({blue, yellow, red, purple, green, orange} = infinityGauntlet);
console.log(blue, yellow, red, purple, green, orange);
// the same console log now returns the values revalued with their core power instead. 

// Now lets get to the spread operator 

// first let me try to add to this array the old fashioned way
const topCities = ['New York', 'London', 'Tokyo'];
const moreCities = ['Dallas', 'Bozeman', topCities[0], topCities[1], topCities[2]];
console.log(topCities);
console.log(moreCities);

// a quicker way to do that is with the spread operator. 
const evenMoreCities = ['Brisbane', 'PhomnPenn', 'Baku', ...moreCities];
console.log(evenMoreCities);

// to recap we can use the Spread Opperator to take all the values our of an array, it can be used everytime we have code seperated by commas

console.log(...evenMoreCities);
console.log(evenMoreCities);

// left off on code line 200 of section 9 

// need to start eariler courses