// Some Practice to go thru methods

/*
The first method is the Map Method 
The Map method creates a new array with the results of calling a provided function on every element in the array.
*/

const arr1 = [1, 2, 3, 4, 5, 6];
    const mapped = arr1.map(element => element + 30);
    console.log(mapped);

    // this returns the array with each number added to 30.
    // (6) [31, 32, 33, 34, 35, 36] 
//_____________________________________________________________

/*
The second method is the Filter Method 
The Filter method creates a new array with only elements that pass the condition inside the provided function 
*/

const arr2 = [1, 2, 3, 4, 5, 6];
    const filtered = arr2.filter(element => element === 2 || element === 4);
    console.log(filtered);

    // So the condition in the arrow function is any element equal to 2 or 4
    // So this returns the (2) [2 , 4]

//_____________________________________________________________

/*
The thurd method is the Sort Method 
The Sort method is used to arrange/sory the array's elements either in ascending or decending order
*/

const arr3 = [1, 2, 3, 4, 5, 6];
    const alphabet = ["f", "a", "c", "v", "z"];
    // how to sort in descending order
    descend = arr3.sort((a, b) => a > b ? -1 : 1);
    console.log(descend);
    // This returns the numbers array in decending order

    // sort in ascending order
    ascend = alphabet.sort((a, b) => a > b ? 1 : -1);
    console.log(ascend); 
    // this returns the alphabet array in order from A to Z



//_____________________________________________________________

// https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0