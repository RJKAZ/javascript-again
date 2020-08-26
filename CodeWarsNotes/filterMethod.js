// following a tutorial from https://www.javascripttutorial.net/javascript-array-filter/#:~:text=The%20filter()%20method%20creates,element%20to%20the%20callback%20function.

// one of the most common task when working with an array is to create a new array that contains a subset of elements of the original array.

// so lets take a look at this array of cit objects where each object contains two properties of name and population

let cities = [
    {name: 'Los Angles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006},
    {name: 'Tokyo', population: 37435191},
];

// now to find the city whose population is greater then 3 million, you would typically loop over the array elements using a for loop and test if the value of the population satisifes the condition; like this:

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}

console.log(bigCities);

// that code returns New York and Los Angles,

//but in the Javascript Array provides the filter() method that allows you do this task in a shorter and cleaner way

//heres an example, but I'm going to invert/reverse it to return the lower populated cities 

let smallestCities = cities.filter(function (e) {
    return e.population < 3000000;
})
console.log(smallestCities);

// side note...but what the fuck is the (e)?   .... element? 

// so in that example. we called the filter() method of the cities array object and passed into a function that tests each element. Inside the function, we checked if the population of each city in the array is less then 3 million

// in this case the function returns true; otherwise it returns false. The filter() method includes only the element in the result array if the element satisfies the test in the function that we pass into.

//then since ES6, it is even cleaner when you use the arrow function ( => )

let biggestCity = cities.filter(city => city.population > 10000000);
console.log(biggestCity);

// there, thats much easier to digest, and no more of that goddamned (e)

// Now the Javascript Arry filter()method in detail

arrayObject.filter(callback, contextObject);

// the filter() method creates a new array with all the elements that pass the test implemented by the callback() function.
// Internally, the filter() method iterates over each element of the arry and pass each elemetn to the callback function. 
// If the callback function returns true, it includes the element in the return array.

// the filter() method accepts two named arguments: callback function and an optional object

// like ofther iterative methods of the Array object such as every(), some(), map(), forEach(), the callback function has the following form

function callback(currentElement, index, array){
    // ..
}

// the callback function takes three arguments
// 1. the currentElement argument is the current element in the array that is being processed by the callback function
// 2. the index of the currentElement that is being processed by the callback function.
// 3. the array object being transvered

// the index and array arguments are optional

// the contextObject argument of the filter() method is optional. If you pass the this value, you can reference it by using this keyword inside the callback function.

// it is important to note that the filter() method does not change the original array

// left off on "More JavaScript Array filter() method examples."

