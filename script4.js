function myFunction(){
  // creating the variable called para and setting it to create a p element
  var para = document.createElement("p");
  // this is to write the variable para to the HTML with the string value of "This is a paragraph"
  para.innerHTML = "This is a paragraph.";
  // to is to get the DIV we want the HTML to appear in, and then we append the variable.
  document.getElementById("myDIV").appendChild(para);
}

function addToDiv(){
  var test = document.createElement("p");
  test.innerHTML = "lets have some fun";
  document.getElementById("myDIV2").appendChild(test);
}
addToDiv();

var test2 = document.createElement("h2");
test2.innerHTML = "Cause lord knows I know how to have a good time!";
document.getElementById("myDIV2").appendChild(test2);


