// We start here with Arrays. Sometimes making seperate variables for certain data (such as friends name) would make your code longer and complex
// instead of creating seperate variables, you can group all the values into an array using regular brackets []
// the values inside an Array are called elements. 
// this is an array with 3 string values
var friends = ["Tom", "Mia", "Lee"];
console.log(friends);

// that code console logs and array with three elements. In that case Tom is element 0, Mia is 1, and Lee is 2.
// Use commas , to seperate two or more values in an array, and the values are surrounded by a normal "non curly" bracket

// this works with numbers as well, even booleans. an array can store any value in any combination 

// This is an Array with three number values 
var myFavNum = [5, 8, 11];
console.log(myFavNum);

// this is an Array with both boolean value 
var myLuck = [true, false];
console.log(myLuck);

// and this is an Array with a Number, String, and Boolean value.
var myStuff = [10000, "I love money", true];
console.log(myStuff);

// now every element in an array has a numbered position called an index (indices)
// the index always starts at Zero ( 0 ) so the first element is an array is at the zero index, and the 2nd element in the array is at the 1st index. 
// If you want to access a specific element in an array you do so by its index

// This code returns 990 since its at the 2nd index (don't forget the first index is always zero)
var testIndex = [3, 400, 990];
console.log(testIndex[2]);

// you can also assign the element a new variable 

// this bit of code has the first index's ( zero) value at 70. but I changed it to 65 so when console.loging that index, it shows the new value. 
var temp = [70, 60, 80, 100];
temp[0] = 65;
console.log(temp[0]);

// now if you accident forget the 0 index, and call the 4th elment as the 4th index
console.log(temp[4]);
// that console logs "undefined" since there is techncially no 4th index value. There are 4 values but they go from 0-3 not 1-4,

// now you can also add and remove values into an array

// to add we use the instruction " push "

var comics = ["Static", "Icon", "Blood Syndicate"];
comics.push("Hardware");
console.log(comics);

// that code adds the string value "Hardware" into the Array at the 3rd index value 
// adding into an array with the " .push() " always puts the value at the end of the array
// you can also add several values with .push() and seperating them by the comma

comics.push("Superman", "Batman", "Justice League");
console.log(comics);

// now to remove elements from the array you use " .pop() " this will remove the last element in the array
comics.pop();
console.log(comics);
// that pop removes Justice League from the Array;

// you can also store the popped element as a variable 

var favComic = comics.pop();
console.log(favComic);
console.log(comics);

// so favcomic console logs batman is now its only variable and no longer part of the array since I poped it off.

// we can also use lenght after the arrya name and a period to get the number of elements in an array

var computerBrands = ["Microsoft", "Acer", "Hp", "Apple"];
console.log(computerBrands.length);

// that console logs 4 since there are 4 elements in the array (this is more useful the larger the array)
// you can also store the length of the array in a variable.

var length = computerBrands.length;
console.log(length);

// the variable lenght is equal to the lenght of the array in the computerBrands variable 
// hence forth the value of the variable length is 4
// This will work no matter how many elements are in the array
// this even works if there are no elements in the array, if the array has an empty bracket, it returns zero

var laptop = [];
console.log(laptop.length);

// you can also use the length of an array to create conditional statements that depend on the number of elements

var tasks = ["dishes", "windows", "vacuum"];
if (tasks.length > 0) {
    console.log("You still have alot of work to do");
}

// we can also use the length of the array to create for loops that go throgh all the elements

var ememies = ["Joker", "Azula", "Wicked Witch"];

for (var i = 0; i < 3; i++) {
    console.log(i);
}

// that code loops three times, from 0 to 2

// you can also use the lenght of the array

for (var i = 0; i < friends.length; i++) {
    console.log(i);
}

// Now onto Functions, we start by calling function follwed by the functions name, and for now an empty parantheses. followed by curly brakcets where we put the code block
// All Code we want to group toghether goes between the curly braces.

function greetUser() {
    console.log("The Weather today sucks!");
    console.log("Its all rainy and humid!");
}

// Now to run the function (or rather run its code) we have to call the function. we do that by calling its name with the empty parentheses

greetUser();

// that runs the function and in the console it displays both statements within its code block. 

// Functions are a way to group related code. They the function name has more then one word, do not include any space, but camel case it instead. 

// sometimes functions need specific information to help them perform their task. In regards to this you can create variables inside functions

function globalConquest() {
    var plot = " stealing every left shoe in the world!";
    console.log("I shall begin my conquest of the planet by" + plot);
}
globalConquest();

// in that above example, I created a variable with a string value and I combine the console log statement with that variable.

// For functions that do simmilar things, you can pass specific information to just one function instead of repeat the code.

function yuck(food) {
    console.log("I hate " + food);
}
yuck("mushrooms");
yuck("Durian Fruit");

// to pass a value to a fucntion, we add a variable called a parameter inside the parenthese of the function. You can name it whatever you want, and the parameter acts like a variable and stores value.
// in that above example, I named the parameter food. To pass the value to the parameter (food), we place it between the paranthese when we call the function. 
// So in that above example, I called the function Yuck and passed different food values to its food parameter each time I called it. 

// A function can also return a value to the code that called it. To return something from a function, we add the return keyword followed by the value to return, like here with return age;

function userAge(number) {
    var age = "User age: " + number;
    return age;
}
console.log(userAge(22));

// a function can return any kind of value, like string, number, or boolean. this function returns the number value inside result

function timesTen(number) {
    var result = number * 10;
    return result;
}
console.log(timesTen(10));

// We can only return a single value. here we return the boolean value insdie the bariable with return isGreater

function greaterThanTen(number) {
    var isGreater = number > 10;
    return isGreater;
}
console.log(greaterThanTen(30))

// we can store the return value in a variable too. Here we store the return value in result and display it in the console.

function myAge(number) {
    var me = "RJ's age is " + number;
    return me;
}
var result = myAge(36);
console.log(result);

// if you don't include a return statement, the function returns the value undefined.

function myLove(food) {
    var tasty = "I love to eat " + food;
}
var result = myLove("Sushi");
console.log(result);

// since I didn't include the return statement, that code console logs undefined instead of "I love to eat Sushi"

// So to reiterate, we return a value from a function by adding the return keyword followed by the value to return. 
// a function can return any value, string, boolean, or number
// But a function can only return a single value

function giveMeTen() {
    return 10;
}
console.log(giveMeTen());

// left off on Using Multiple Parameters 

// Lets dive into functions with multiple parameters 

// we can add more then one parameter to a function when we need a result from more then one input

function sayName(first, last) {
    console.log("My name is:");
    console.log(first + " " + last);
}
sayName("Alex", "Morgan");

// first is given the string value of Alex and last is given the string value ot Morgan 
// And then they are combined in the console.log statement. 
// When using multiple parameters in a function, you seperate them with a comma.

// just to test out a longer example

function insult(first, second, third, forth, fifth, sixth) {
    console.log(first + second + third + forth + fifth + sixth);
}
insult("You", " are ", "so ", "stupid ", "it ", "hurts!");

// in the above example, the values get passed to the function in the same order the parameters do
// You can add as many parameters as you like
// passing multiple parameters means you can use them to return a new value

function addNumbers(num1, num2) {
    return num1 + num2;
}
var result = addNumbers(1, 2);
console.log(result);

// functions can also incorporate if statements

var pokemonLevel = 75;
if (pokemonLevel > 70) {
    console.log("You are powerful enough for the Elite Four!");
}

// to turn that into a function

function areYouReady() {
    var charizardLevel = 30;
    if (charizardLevel > 70) {
        console.log("You're Charizard is ready to fight the Elite Four!");
    } else {
        console.log("You need to level your Charizard up more!");
    }
}
areYouReady();

// another example

function charizardPower(power) {
    if (power > 65) {
        console.log("Fire Blast Learned");
    } else {
        console.log("Flamethrower Learned")
    }
}
charizardPower(45);

// we can also use loops in functions 

function countToFive() {
    var count = 3;
    while (count <= 5) {
        console.log(count);
        count++;
    }
}
countToFive();

// if we want to avoid resuing loops that always do the same thing, we can add parameters

function countToTen(count) {
    while (count <= 10) {
        console.log(count);
        count++;
    }
}
countToTen(8);

// there are also anonymous functions. They are functions without a specified name and start with the keyword followed by the parameters

var greet = function (user) {
    return "Hello " + user
};
console.log(greet("Tina"));

// you can save a return value to a variable

var greeting = function (user1) {
    return "Hi " + user1
};
var greetTim = greeting("tim");
console.log(greeting);
console.log(greetTim);

// however when you save a return value to a variable, to initial varible prints to the consple the process of getting to the return value, the functions code


// now lets step back and look more at interacting with a webpage

// when adding Javascript to a webpage/HTML you use a script tag <script> and its closing tag </script>
// it always goes at the bottom before the closing body tag

// Now within the HTML we can add ID's to elements. Ids identify HTML elements and help us interact with them using Javascript 

// to set an ID in an HTML element, you add into the opening tag id with an equals and the name of the id in quotes. such as
//  <p id="test">Hello</p>

// within the Javascript , you can access an HTML element by using
//as demonstrated here. I added an id of "title" to the H1 tag in the HTML page
document.getElementById("title").innerHTML;

console.log(document.getElementById("title").innerHTML);

// that code basily reprints the content of the h1 tag to the console
// now to add code into the HTML

document.getElementById("finePrint").innerHTML = "code at your own risk!";

// in the HTML, I left an empty H3 tag set to the id of "finePrint"
// the above Javascript basicly adds the string value to the HTML by targeting the id. so It prints it to the h3 element.
// the " .innerHTML " instruction is for accessing the text of an element
// " document.getElementById() " on its own retrieves the whole element with its tag and text.

// this will also overwrite any existing code, or rather the exisiting string value

document.getElementById("serious").innerHTML = " just kidding!";

// In the HTML page, the h4 tag has the text of "No Joke this can get dangerous"
// the above code updates/replaces that text with "just kidding!"

// we can also create variables and sue them to store the HTML elements we access

var element = document.getElementById("messages")

// in that above example, the variable of element stands for whats in document.getElementById("messages")
// we can access the text of the paragraph through the variable element

console.log(element.innerHTML)
// so in laymens terms, the variable of Element is basicly equal to the entire value of the p tag.
// so when I console log that variable, it will basicly write the the console everything in the p tag.

// we can also use that variable to update the paragraphs content by adding = and the new value 

element.innerHTML = "haha";

console.log(fruit.innerHTML);
fruit.innerHTML = "cherries";
console.log(fruit.innerHTML);

// so to sum up, we store the elements we're accessing through document.getElementById() by using a variable 

// you can also create HTML elements via Javascript by using document.createElement();

var testParagraph = document.createElement("h5");

// so this code bascily creates another p tag on the html, but it has no text, to add text

testParagraph.innerHTML = "Instead of focusing on code, lets travel the world instead!";
// but to get it to show up on the HTML, we need to append it

console.log(testParagraph);
document.body.appendChild(testParagraph);


// for a bit more exparimenting with creating elments, I decided to make a 4th JS script page and a new HTML page of createElement

// now lets diverge in Nesting Elements for example when you have a p element inside a boyd elment, the body element is the parent element and the p is the child element. P is the child of Body, and Body is the Parent of P

// we can use appendChild() to nest an element inside another

var newText = document.getElementById("parent");
var paragraph = document.createElement("p");
paragraph.innerHTML = "Hello World is such a tired statement";
newText.appendChild(paragraph);

// you can also remove an element by using the bodyElement.removeChild();

// for this both the parent and the child element must have ID's 
// We create variables for the element we want to remove and its parent to make the core more readable.

//now to see it in action, hope back over to the removeElement HTML page and its similarlly named script file

// Back to attributes, button clicks are useless without the onclick attribute 

function magic() {
    document.getElementById("prompt").innerHTML = "Hocus Pocus!";
}

// Now onto using Object Properties 

// To access an objects property, we use the object name, a period, and the property name.

var tabletPC = {
    model: "Wacom",
    processor: "15w Core i5",
    price: 1999.99
};
console.log(tabletPC.price);
console.log(tabletPC.model);
console.log(tabletPC.processor);

// just like variables we can update object properties. I will update the processor to a more powerful option

tabletPC.processor = "28w Core i7";
console.log(tabletPC.processor);

// and just like variables you can use self-assignments. Lets assume Wacom has a half off sale

tabletPC.price = tabletPC.price / 2;
// basicly the price is divided by 2

console.log(tabletPC.price);

// we can also add properties to an object. To add a property, we use the object name, a period, and the property. And then we give it a value

var phone = {
    model: "Surface Duo"
};

phone.price = 1399;
phone.color = "Silver";
console.log(phone.price);

// when we add a property after we first create the object, the object gets updated. 

console.log(phone);

//the new property always appears at the end in the list of objects.

// Now for Object Methods 

// We can use a method to display the type property of a object in a game (lets do super powers). A method is a property that contains a function
// object methods are like functions inside an object. It behaves the exact same way as a function
// to access properties while inside the object, you need to use "this" keyword followed by a period and the property name

var power = {
    type: "flight",
    speed: 100,

    showType: function () {
        console.log("Type: " + this.type);

    },
    // Methods often represent behaviors. To make the character flight faster, they need to accelerate 
    // methods allow us to change properties from within the object. to make the hero accelerate, we need to increase speed

    accelerate: function () {
        this.speed = this.speed + 50;
        console.log(this.speed + "km/h");
    }
};

// We access a method the same way we access a property. The only difference is that we add parantheses at the end

power.showType();
power.accelerate();

// to aid in making things overall less error prone and more efficent we can use data structures called classes as templates 

// to create a new class, we start with the class Keyboard, a name, and braces 
// unlike virtually everything else in Javascript, when you create a new class, the name must start with an uppercase letter
// to create new objects, classes need a special method called the constructor(). this method sets the property values for a new object. 
// to specify the unique values a new object will have, we have to send parameters to the contructor method, in this case we pass author and title as parameters to the constructor method.
// before creating a new object property, we need a special keyboard. this. We add this. to refer to the object being created.
// we follow up this. with the property name 
// To finish creating the new object property, we'll assign the author parameter as a value to this.author 

class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}

// to use our class, we start the saem way we'd create a variable, but then add the ' new ' keyword followed by Book()

var book1 = new Book("RL Stine", "Goosebumps");
console.log(book1);
var book2 = new Book("The Illuminati", "The Bible");
console.log(book2);

// we can also ass methods to classes to create interactive objects using the classes as a template

// Adding a method in a class is alot like creating a function except there is no need to use the function keyword
// so in this case, eat will be the method/function 

class VirtualPet {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        if (food === "treats") {
            console.log("nom nom");
        } else {
            console.log("discard");
        }
    }
};

// now before we can use the eat() method, we need to create a new object from the class
// and then to use the eat() method, we need the name of the object, a period, the name of the method, and parantheses 

var pet = new VirtualPet("Tom");
pet.eat();

// you can also add conditional statements.

pet.eat("treats");
pet.eat("garbage");

// now everytime we create an object from a class, we're creating whats called an instance of that class 
// we will create an instance of the User class and store it in the variable user1
// each instance is independent, that means when we create a new instacne it doesn't affect any other instance
// changing a class affects all instances of that class

class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
        this.status = "Hey, I'm flying a dragon";
    }
}
var user1 = new User("Arya");
user1.isOnline = false;
console.log(user1);

var user2 = new User("Bran");
console.log(user2);

var user3 = new User("Jon");
var user4 = new User("Sansa");

// the constructor is what creates an instance. But it doesn't always need to have properties inside of it. it works even when empty
// set the constructor() method as empty for this User class. this means there's nothing in between the braces

class UserX {
    constructor(){

    }
    sayHi(){
        console.log("Hello!");
    }
}
var user1 = new UserX();
user1.sayHi();


// left off on extending classes

// so if we create an Animal Class to bundle to main features of the animals, using inheritence we can extend it with additional functionality for different kinds of animals

// to inheret features from a class, we need to use the extends keyword in the class definition 

//by coding extends, we'll make the Chinchilla class inherit from the Animal class
// inheretence gives a class all the properties of the class its extending or inhereting from.

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Chinchilla extends Animal {
}
var chinchilla = new Chinchilla("Chiney");
console.log(chinchilla);

// since Chinchilla inherets from Animal, its a subclass of Animal, and Animal is the Superclass

//if a subclass doesn't have a constructor() method, the superclass's constructor becomes the default constructor 

console.log(chinchilla.name);

// the subclass also inherets its superclass's methods

class MyPet {
    constructor(name) {
        this.name = name;
    }
    eat(){
        console.log(this.name + " is eating");
    }
}

class Cat extends MyPet {
}

var cat = new Cat ("Wet Pussy");
cat.eat();
// we can make as many subclasses as we want.

class Skunk extends MyPet {    
}

var skunk = new Skunk("Stinky");
skunk.eat();

// inheritance becomes useful when subclasses have additional functionality, like their own methods. 

class Hedgehog extends MyPet{
   spinBash() {
       console.log("My Hedgehog just prefromed a spin dash attack. Go SONIC!!!!");
   } 
}

var hedgehog = new Hedgehog("Sonic");
hedgehog.spinBash();

// inheritence only works one way. Not all instances of Animals are a Hedgehog so they can't access specific hedgehog functionality

// Now methods can be overriden. 

class Human {
    constructor(weapon){    
    }
    recieveDamage() {
        this.health = this.health - 10;
    }
}

class Wizard extends Human {
    recieveDamage() {
        this.health = this.health - 5;
    }
}

var wizard = new Wizard("staff");
wizard.recieveDamage();
console.log(wizard.health);

var human = new Human("ax");
human.recieveDamage();
console.log(human.health);

// for some reason that code it not working. it should return 90 for the human health and 95 for the wizard health, but the console shows it as NaN (not a number)
// I think its missing a variable to establish the health starting point as 100. 

//  well....moving on...since subclasses can have their own properties, we can easily add these extra features to a character. 

class ToughHuman {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
}
class Warrior extends ToughHuman {
    constructor(weapon, warCry) {
        super(weapon);
        this.warCry = warCry;
    }
}
var warrior = new Warrior("sword", "Barritus!");
console.log(warrior.weapon);
console.log(warrior.warCry);