// this bit of Javascript is downright Evil

//.....the dreaded while loop. All Javascript and practice about the While Loop will be contained largely to this js file, which is not read by the HTML pages, and therefor should not run. 

// The while loop repeats code to infinity which in turn bricks your web browser or even your computer. On my Zbook X2, with its 15w Quad Core 8th Gen i5 CPU, the base level my CPU is typcially being taxed is about 10% from normal operation. The While loop, aside from bricking the web browser, it taxes my CPU to 100%, I could have waited till my device started to throttle, but in general from the way it taxes a CPU, exparimenting in while loops would better served in desktops with more robust cooling systems. 

while (true) {
  console.log("and again");
}

// had this JS file been attached to html, that little bit of code would have bricked my browser

// the while loop will repreat its code block while the condition is true. If a while loops condition stays true forever, its called an infite loop since it will loop infinitely. Setting it to false is a way to stop a while loop.

while (false) {
  console.log("and again");
}

// another way to stop a while loop is to create a variable outside the loop and set that variable as the condition 

var keepGoing = true;
while(keepGoing === true) {
  console.log("and again");
}

// that code would still run infinite;

var stopMoving = true;
while(stopMoving === true){
  console.log("and again");
  stopMoving = false;
}

// that code only displays the console statement once. Setting the stopMoving to false after the console log, stops the loop after the console.log. 

var myRight = true;
while(myRight === true){
  console.log("my right is always right, but");
  myRight = false;
  console.log(" only when I'm right!")
}

// that code only displays the first console.log statement 

// We can also control the number of times a while loop repeats. You would start with a variable set to a number. We call this variable a "Counter Variable"
//then we use a comparison in the condition to compare the counter variable to a number. In this case, Counter < 4
// then we have to make the condition return false and stop the loop by incremeting the counter variable using counter++

// counter++ increases the counter by one, each time the loop runs its code block

var counter = 1; 
while(counter < 4){
  console.log(counter);
  counter++;
}
// that code returns 1 2 3, since the set the condtion of the loop to stop before hitting 4

while(counter < 10){
  console.log(counter);
  counter++;
}
// that code runs to 9 since we changed the condition of the loop to stop before hitting 10. 
// also changing the counter variables value also changes when the loop starts

counter = 5;
while(counter < 10) {
  console.log(counter);
  counter++;
}
// Since the variable is set to 5, and the condition stops before 10, that code now runs 5 to 9

// And since the whole codebock runs, the order you write the code affects what the console displays.
while(counter < 10) {
  counter++;
  console.log(counter); 
}
// reversing the order of the ++ and the console.log statement makes the code now run from 6 to 10
