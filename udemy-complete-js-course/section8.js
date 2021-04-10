/*

Lecture Notes - 

JavaScript is a high-level, object-reiented, multi-paradigm progaming language....but thats just the surface.

another definition

JavaScript is a High-Level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.  

So lets deconstructe these terms

1. High-Level - 

any computer program needs resources. A Low-level language , the developer has to manage resources (ram, cpu, power, etc) all manually. 

High-Level languages like JavaScript and Phyton, you do not have to manage resources, everything happens automatically thru abstractions that take that work away from the developer. 

This makes the programs easier to use and learn, with the one downside is that high level will never be as fast or optomised as a low-level.

------------------------------------------------------------

2. Garbage-Collected

One of the powerful tools that takes memory management away from the developer is garbage collection. Its a algorithim inside of Javascript that removes or "cleans" the memory so we don't have to. A benefit of a high-level language

-------------------------------------------------------------

3. Interpreted or Just-in-Time compiled

By default, every computer processor only reads in binary, all zeros and ones. Every program has to be written in zeros and ones. (also known as Machine Code). JavaScript as we Humans read and write it, is an abstraction over machine code. But it ultiamtly needs to be converted to machine code. That is called compiling, or interpurting. This is required of all programming languages since no one writes machine code manually.

In Javascript, this compiling/interpurting happens inside the Javascript engine by default

--------------------------------------------------------------------

4. Multi-Paradigm 

A Paradigm is an approach and mindset of strcuturing code, which will direct your coding style and technique. 

Most paradigms are Imperative Vs Declarative

There are three main types of programming 
  1. Procedural Programming - (organizing code in a very linear way with some functions in between, bascilly we have been doing in this course thus far)
  2. Object-Oriented Programming (OOP) 
  3. Functional Programming (FP)

Many Programing languages are only Procedural or only Object orietned, but Javascript does all of it, making it very flexiable and versititle, allowing us to do whatever we want with it. 

-------------------------------------------------------------------------

Prototype-Based Object-Oriented

Firstly, almost everything in JavaScript is an object, excpet for primative values such as numbers and strings, etc

But Arrays are objects, and tpyicall the push method wouldn't work on it. It does so because of Prototype inheritence

We create Arrays from an array blueprint (template) and that is the prototype which contains the array methods
Our Arrays inherits methods from the prototype so we can use them on our arrays.

This is elaborated on later in Object Orietned Programing



-------------------------------------------------------------------------

First Class Functions 

Functions are treated as regular variables so we can pass them into other functions and return functions from functions

This allows for funtional programming in JavaScript.

--------------------------------------------------------------------------

Dynamic

As in Dynamicly typed, in Javascript we don't assign data types to variables, instead that only becomes known when the javascript engine executs the code
Also the type of variables can be changed as we change their values

This is not true of other languages, like Java, C, and Ruby where you have to manually assign variables to types, which has the benefit of cutting down on bugs

----------------------------------------------------------------------------

Single Threaded & Non Blocking Event loop (these are best explained together)

The Concurrency Model: is how the JavaScript Engine Handles multiple Tasks happening at the same time

This is needed becasue JavaScript runs in one Single Thread, so it can only do one thing at a time. 

So what about a long running task? Sounds like it it would block the single thread, however we want non-blocking behavior

We achieve that by using an event loop. It takes long running tasks, executes them in the background, and puts them back in the main thread once they are finished. 

To Note this is a massive over simplifcation of these concepts. 

----------------------------------------------------------------------------

Notes on the JavaScript Engine and Runtime 

The JavaScript engine is a program that executes JavaScript code.

Every Browser has its own JavaScript engine, but the most well known is googles V8 engine

The V8 engine powers Google Chrome but also NodeJS

All JavaScript Engines have a Call Stack and a Heap

The Call Stack is where our code is acctually executed using something called an Execution Context

Then the Heap, is an unstructured memory pool which stores all the objects our applications needs

So How is our code compiled to Machine Code? 

Computer Science Side Note: Compilation VS. Interpretation 

Compilation: The Entire code is converted into Machine code at once, and written to a binary file that can be executed by a computer

Source Code (Step 1 => Compilation) Portable File: Machine Code (Step 2 => Execution) Program Running 

The Execution can take place well after the Compilation 

Interpretation: Interpreter runs through the source code and executes it line by line

Source Code (Step 1 => Execution line by line) Program Running 

With Interpretation, the source code still needs to be converted to machine code, but it does so right before its executed and not ahead of time

The Problem with Interpreative Languages is that they are much much slower then compiled.

JavaScript used to be interpretered, but modern JavaScript switched to Compilation: 

although many people still view it as interpretered

Most JavaScript engins use a mix of Interpretation and Compilation which is called

Just-in-Time (JIT) Compilation - Entire Code is converted into Machine code at once, then executed immediately.

Source Code (Step 1 => Compilation) Machine Code (Step 2 => Execution) Program Running
What JIT leaves out is the portable file. So there no portable file to execute, but rather the execution happens immediantly after compilaton. 

This is also an oversimplification 

So once JavaScript code enters a JavaScript engine, the engine Parses the code in the Abstract Syntax Tree(AST)

The AST breaks down the JavaScript code into a tree like data stucture, but this is not related at all to the DOM Tree

The AST is just a representaton of our entire code inside the engine 

The Next step is Compilation which takes the generated AST and compiles it into Machine Code

That Machine Code then gets executed right away, however that Machine Code isn't optimized 

So While the Machine Code is already executed, in the background, that machine code is being optimized and recompiled, and the unoptimized code is replaced with the optomized code. 

Different Engines do this in different ways, but this is how modern JavaScript is run

So Now whats a JavaScript RunTime?

Runtime in the Browser is a container including all the things that we need to use JavaScript

The Heart of any JavaScript Runtime is its JavaScript Engine

Without an Engine, there is no Runtime, and thus no JavaScript at all

However the Engine Alone is not enough, in order to work properly, you also need access to the web apis

The Web APIs include the DOM, Timers, Fetch APIs, etc.....even the Console.log. So the WEB APIs are the functionalities provided to the engine, accessible on window object 

Again, those WEB API's are not part of the Javascript language itself, JavaScript just gets access to them via the global window object

The Web APIs are however part of the Runtime

All JavaScript runtimes also have whats called a CALLBACK QUEUE that contains all the callback functions that are ready to be executed. 

Such as Click, Timer, Data, etc.....which are event handler functions but also callback functions 

So as the event happens, the click...the callback function will be called, so the first thing that happens is the callback function is placed in the callback queue

then when the callstack is empty, the callback function is passed to the callstack so that is can be executed 

this happens by something called the event loop

So the Event Loop takes Callback functions from the callback queue and puts them into the callstack so they can be executed

And its important to remember that JavaScript can exist outside of the browser, for example in Node JS

The Node JS Runtime looks very simmilar, just without the browser, there are no WEB API's since its the browser that provides them. 

Node JS Runtime however uses C++ bindings and thread pools which are topics for another lecture. 

----------------------------------------------------------------------

What is an Execution Context?

From Compilation --> A global Execution is created for the top level code, 
Creation of GLobal execution context (for top-level code)

Top Level Code is Code that is not inside a function (which is good because functions should only function when called) So on a regular javascript file, the top level code is the varibales, const, let, var, etc that are on the global scope, as well as function names. However the functions themsevles and all the code in them is not. 

So a Execution Context is an enviroment in which a piece of JavaScript is executed. Stores all the nesessary information for some code to be executed. 

In every JavaScript Project, no matter how large, there is Exactly one global execution context. There is never more then one and it is always there as the default context created for top level code. 

So from Compliation --> 
1. The Creation fo the global context for the top level code -->
2. The Execution of the top level code (inside the global execution context)
3. Execution of functions and waiting for callbacks. (methods as well, since they are functions attached to objects. )

all these execution functions together make up the callstack 

So when all the functions are done executing, the engine will wait for future callbacks

-----------------------------------------------------------

So whats insie and execution context?

Each function gets it own execution context as soon as it is called

So all the variables declared inside a function will end up in its variable environment

However functions can still access a variable outside its enviroment...this is becasue of the scope chain

The Scope Chain consists of references to variables located outside of the current function, and to keep track of the scope chain, it is stored in each execution context. 

Each context also gets a special variable called the "This" keyword

So whats inside an Execution Context 
1. The Variable Enviroment
  a. let, const, and var declarations
  b. Functions
  c. Argument Object
2. The Scope Chain
3. The This keyword

this is all generated in the creation phase which occurs right before execution

One thing to keep in mind, execution contexts belonging to Arrow Functions do not get their own argument keyword, nor do they get the this keyword

----------------------------------------------

Now going back to the Call Stack, just what is it? 

Its a place where execution contexts get stacked on top of each other to keep track of where we are in the execution.
So the execution context on top of the stack is the one that is currently running. 

----------------------------------------------------

Now lets move on to Scope Concepts. 

Scoping: is how our programs variables are oranized and accessed. "where do variables live? or "Where can we access a certain variable, and where not?"
Lexical Scoping: Which is scoping controlled by the placement of functions and block in the code. 

Scope: Space or Environment in which a certain variable is declared(variable enviroment in case of functions) There is a global scope, function scope, and a block scope

Scope of a variable: The Region of our code where a certain variable can be accessed. 

The Global Scope: is for our top level code. Variables declared outside of any function or block. Variables declared in Global Scope are accessible everywhere

The Function Scope: Every function created has its own scope. and variables declared within are only accessible inside the function, not outside it. This is also called the local scope

All Functions create their own scope, Function declarations, Function Expressions, and Arrow functions all have their own scope.

And with ES6, we now also have Block Scopes: Variables are accessible only inside a block, however this only applies to Let and Const. 

So if you have a if/else statement or a for loop inside of a function, and you declare a let or const variable in those specifc curly braces of the if/else/loop, that variable can only be accessed in the block and nowhere else outside of it. 

Also with ES6, all functions are also block scoped when using Strict Mode. 

Scopes have access to variables from all outer scopes

So....Child Scopes have access to the parent scopes, but parent scopes do not have access to the child scopes

left off at 17:40

So the Call Stack goes in the order in which functions are called. 
The Scope Chain  goes in the order in which functions are written in the code, so the Scope Chain has nothing to do with order in which functions are called

--- so to summaries alot of this. 

Scoping asks the question "where do variables live?" or "where can we access a certain variable, and where not?"

There are 3 types of scope in Javascript, The global scope, the function scope (defined by functions), and the block scope (defined by code blocks)

Only let and const variables are block scoped. Variables with var end up in the closest function scope. 

In Javascript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.

Every scope always has access to all the variables from all its outer scopes. This is the scope chain!

When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable its looking for. this is called variable lookup

the scope chain is a one way street. A scope will never ever hacve access to the variables of an inner scope (unless they use Var I guess lol)?

The scope chain in a certain scope is equal to adding together all the variable enviroments of all the parent scopes

the scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all. 

Also, one side effect of scopes is that you can acctually have the same variable name used twice.

like 

const firstName = 'Jonas' in the global scope

const firstName = "Terry" in the function or block scope. 

You can have both variables named firstName since they are in different scopes and thus not the same variable. 

--------------------------------------------------------------

Hoisting in JavaScript 

Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".

so behind the scenes - 

Before execution, the code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object. 


Function declarations are - are Hoisted, the initial value is the Actual Function, and the scope is Block
var variable declarations - are Hoisted, the initial value is undefined, and the scope is function
let and const variables   - are not hoisted...techncially they are yes, but not in practice. The initial value is uninitialized
  or TDZ (temporal dead zone), and they are blocked scoped.
Function expressions and Arrow Functions - For those it depeneds if they were created using var or let/const

Why is there a TDZ(Temporal Dead Zone)?

It was created in ES6 , and it makes it easier to avoid and catch errors. Accessing variables before declaration is a bad practice and should be avoided, hence forth we will get an error if we try.

TDZ also makes the const variables actually work as they are supposted to, Const for example cannot be redefined, so setting a const as undefined before execution expecting to get redefined is against its rule and thus a loop hole. The TDZ closes that loophole.

If Hoisting creates so many problems, why does it exist?

The creator of JavaScript enabled hositing because it allows 
1. using functions before actual declaration (useful for recursion)
2. var hoisting is just a byproduct of hoisting functions 
3. JavaScript wasn't meant to become such a huge programing language, so things like var hositing can't be removed. hence why let and const were added. 


--------------------------------------------------------------------

So lets get some additional practice with Hoisitng 
first lets create one of each variable 
*/

// and log them to the console before we declare them;

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// the first console log does return an undefinted, because while Var is hoisted, but hoisted to the value of undefinied.

// the other two however bring back a reference error because they are stuck in the temporal dead zone.

// lets try functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// this creates the same results. The first function works, but since the other two are consts, they remain in the temporal deadzone.

// if I change addExpr and addArrow to Var instead of Const, then they will return undefined.

// another Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// So the overall takeaways - just don't use Var, stick with let and const. and just declare the variables at the top of the page on the global scope. That solves many hoisitng related problems.

// And declare all your functions first, but only after the variable declarations

// another example

var x = 1;
let y = 1;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

/*
------------------------------------------------------------------

Now lets Discuss the ' this ' keyword

'This' keyword is a special variable that is created for every execution context (every function).
It takes the value of (or rather points to) the "owner" of the function in which the this keyword is used. 

'this' is not static. it depends on how the function is called, and its value is only assigned when the function is actually called.

Method -> 'this' = the object calling the method

Simple Function Call -> 'this' = undefinied (in strict mode only, without strict it will point to a global object like the window)

Arrow Functions -> 'this' = 'this' of the surrounding function (lexical this). Arrow functions do not get their own 'this'

Event listener -> 'this' = Dom element that the handler is attached to.

Its important to note that 'this' does not point to the function itself. And also not the its variable environment. 
*/

// So in practice ------

console.log(this);

// this returns the window element

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

// in that above code, with strict mode enabled, the 'this' keyword would return undefined

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

// that code returns the window scope becasue it is an arrow function, and it does not get its own 'this', it defaults to the parent element which is window.

// so lets try it inside another example

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    const self = this; // self or that
    const isMellenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMellenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstname}`);
  },
};
jonas.greet();
jonas.calcAge();

// jonas.calcAge();

// in that above case, 'this' will refer to the jonas object

// now one final example

// const matilda = {
//  year: 2017,
// };

// now we can give the calcAge function in Jonas's to matilida using method borrowing.

// matilda.calcAge = jonas.calcAge;

// so this copies the calcAge function into the Matilda object

// matilda.calcAge();

// in that case 'this' will refer to Matilda not Jonas, since it is Matilda calling it

// const f = jonas.calcAge;

// so when we borrow again, but this time a function into another variable

// f();

// this turns out both undefined and type error. Becasue this F is just a regular functon call,
// there is no owner of F at this point, so 'this' becomes undefined.

// Now with Arrow Functions vs Regular Functions

/*
Never use an Arrow Functon as a Method 

*/

// Arguments keyword

const addExprs = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExprs(2, 5);
// even though it only takes in two arguments, you an add more technically
addExprs(2, 5, 8, 12);

var addArrow1 = (a, b) => {
  console.log(arguments);
  return a + b;
};

//addArrow(2, 5, 8);

// So the Arguments keyword does exist in regular functions,  just not in arrow functions

// largely though with Modern JavaScript, the Argument Keyword is not nessesary anymore.

// -------------------------------------------------------------------------------------

// Primatives VS. Objects (primitive vs reference types) Notes

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// this turns out the way we would expect because old age is refering the inital value of age given its placement in the code

const me1 = {
  name: 'jonas',
  age: 30,
};

const friend = me1;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me1);

// however in this example, it doesn't turn out the way we expect. both ages become 27, why does this work this way?

/*

So JavaScript has primative data types = Number, Strings, Boolean, Undefined, Null, Symbol, and BigInt.

Everything else is basicly an object; Object Literals, Array's, Functions and many more.
These are refered to as refernece types

So Primatives are Primative Types, and Objects are Reference Types. 

In regards to this remember how JavaScript works beneath the engine. 

It has 2 componenets, the Call Stack and the Heap

The Call Stack is where functions are executed and the Heap is where objects are stored in memory 

So All Objects (or Reference Types) will get stored in the Memory Heap 

Now Primitive's are stored in the Call Stack, or rather they are stored in their execuition context. 

So back to those earlier examples, the first example is only primatives so they are all stored in the call stack. Where as the 2nd example, and Object or Reference Type is stored in the Heap.

So when the Me Object is accessed in the Callstack, instead of referencing somewhere else on the call stack, its refrencing whats stored in the Heap 

So when we try to change the value in the Me object for the friend object, its still refering to the object in the heap, so by changing the value in the heap, we are changing it for both since they both are refering to the heap.

So when you think you are copying an object, you are actually creating a new variable that just points to the same object. 

There are a few other topics that are very important with how JavaScript works behind the scenese, but we'll go over those in other topics. 

1. Prototypal Inheritance - We will address in Object Oriented Programming (OPP)
2. Event Loop - We will address in the Asynchronous javaScript: Promises, Async/Await and Ajax
3. How the DOM really works. - We will address in the Advnaced Dom and Events 

________________________________________________________________________________________

*/