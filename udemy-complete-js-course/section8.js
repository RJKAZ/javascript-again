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

So Whats inside an execution context? 












*/
