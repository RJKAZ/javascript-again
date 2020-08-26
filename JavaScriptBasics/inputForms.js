// to access user input from an included script, we need to add .value at the end of document.getElementById().

// add .value to access the user input in the text field



function registerEmail (){
    var email = document.getElementById("email").value;
    console.log(email);
    document.getElementById("message").innerHTML = email + " is your email address.";
}

function registerAddress (){
    var address = document.getElementById("address").value;
    console.log(address);
    document.getElementById("message2").innerHTML = address + " is your address.";
}

function registerSoul (){
    var soul = document.getElementById("soul").value;
    console.log(soul);
    document.getElementById("message3").innerHTML = soul + " is the value of my soul.";
}

function sendReview (){
    var review = document.getElementById("review").value;
    console.log(review);
    document.getElementById("review2").innerHTML = review + " Is the review you wish to submit!.";
}

// We need the submit button and a function to access user input because the elments value changes when a user interacts with it. 

// remember, to access user input, you need to add .value after document.getElementById();

// If you set an input elements value to an empty string, it will remove the text inside the input field and show the placeholder attributes value