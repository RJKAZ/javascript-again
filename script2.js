// this bit of Javascript is downright Evil

//.....the dreaded while loop. All Javascript and practice about the While Loop will be contained largely to this js file, which is not read by the HTML pages, and therefor should not run. 

// The while loop repeats code to infinity which in turn bricks your web browser or even your computer. On my Zbook X2, with its 15w Quad Core 8th Gen i5 CPU, the base level my CPU is typcially being taxed is about 10% from normal operation. The While loop, aside from bricking the web browser, it taxes my CPU to 100%, I could have waited till my device started to throttle, but in general from the way it taxes a CPU, exparimenting in while loops would better served in desktops with more robust cooling systems. 

while (true) {
  console.log("and again");
}

// had this JS file been attached to html, that little bit of code would have bricked my browser

// he while look will repreat its code block while the condition is true. If a while loops condition stays true forever, its called an infite loop since it will loop infinitely. Setting it to false is a way to stop a while loop.

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
