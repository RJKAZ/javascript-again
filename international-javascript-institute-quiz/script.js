/* Question 1
Fill in the blank space in the code below. The output of the console after running the iterate function should be:
item: 1;
item: 2;
item: 3;

function iterate(______data) {
    data.forEach(function(item) {
        console.log('item: ' + item) 
    })
}

iterate(1, 2, 3)
*/ 

function iterate(...data) {
    data.forEach(function(item) {
        console.log('item: ' + item) 
    })
}

iterate(1, 2, 3)

// AH- the Spread Operator is the solution, 

//___________________________________________________________________________________________________________________________________

/*Question 2
What is the value of the variables total and i after the code has been executed.
*/ 

var numbers = [1, 2, 3, 4, 5];
var total = 0;
i = 0;

function averageValue(numbers) {
    var averageValue = 0;
    if (numbers.length > 0) {
        for(i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        averageValue = total / numbers.length;
    }
    return averageValue;
}
var average = console.log(averageValue(numbers));

// the total is = 3 and the i = 0

//________________________________________________________________________________________________________________________________________

/*Question 3
Select all proper ways to extract piece "program" of the text "metaprogramming"
var text = "metaprogramming";

*/ 

var text = "metaprogramming";

console.log(text.substr(4, 11));

//_______________________________________________________________________________________________________________________________________

/*Question 4 
What is the value of the sum variable 
var sum = 0.1 + 0.7;
*/

var sum = 0.1 + 0.7;
console.log(sum);

// the answer is 0.7999999999  ... the reason why thats the answer 
/* Because internally, computers use a format (binary floating-point) that cannot accurately represent a number like 0.1, 0.2 or 0.3 at all.
When the code is compiled or interpreted, your “0.1” is already rounded to the nearest number in that format, 
which results in a small rounding error even before the calculation happens.
*/

var sum2 = 0.3 + 0.7;
console.log(sum2);

// changing the values, only with 0.1 and 0.2 does this seem to be the case. 0.3 and up it seems to work as it should. 

//________________________________________________________________________________________________________________________________________

/* Question 5
What is the value of the z variable? 
function multiply(int x, int y): float {
    return x * y;
}

var a = 2.0, b = 3.0;
var z = multiply(a, b);

1. 6
2. 6.0
3. Undefined
4. This code will cause a syntax error

*/ 

// putting this code out of notes gives the answer, This code will cause a syntax error

//__________________________________________________________________________________________________________________________________

/* Question 6
Complete the code below to output to the console text "woof woof"

function Animal() {
    this.sound = 'animal sound';
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

function Dog() {
    this.sound = 'woof woof';
}

dog.___________ = new Animal();

var dog = new Dog();
dog.makeSound(); // woof woof

*/ 

function Animal() {
    this.sound = 'animal sound';
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

function Dog() {
    this.sound = 'woof woof';
}

Dog.prototype = new Animal();

var dog = new Dog();
dog.makeSound(); // woof woof

// the answer was prototype which I've never encountered before

//__________________________________________________________________________________________________

// Question 7 
