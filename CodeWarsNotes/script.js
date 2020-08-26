// Ok, so the first code wars problem is implement a difference function, which subtracts one list from another and returns the result.
// it should remove all values from the list a, which are present in list b

arrayDiff1([1,2],[1]) == [2]

// so in that above code, the first list has the numbers 1 & 2. The 2nd list only has the number 1
// The point of this function is remove all values from the 1st list that are also in the 2nd list.
// since both lists have the number 1, thats the number that has to be removed. 
//that just leaves the number 2 in the first array.

//and whatever value is removed, all occurances of it must be removed

arrayDiff2([1,2,2,2,3], [2]) == [1,3]

//in that one the number 2 is the one deleated.

// so the starter function is

function arrayDiff(a, b){

}

//now the very question says "and RETURNS the result"

// so that should be my first hint that the return keyword is going to be needed

// now I have to google the answer, but I'm not sure why it works, but I'm gonna try and figure it out
//so this is the answer

return a.filter(val => !b.includes(val));

// so it starts off with return and calls the first value with a .filter after it.

// and I never used a .filter before...lol so let me figure that out. 