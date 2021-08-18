// Assignment Code

// Variables for the password length element and it's value
var slider = document.getElementById("pwSlider");
var output = document.getElementById("pwLength");

// Variable for the no option selected error text
var error = document.getElementById("btnError");

// Variable for selecting ALL checkbox type inputs from page
var checkboxes = document.querySelectorAll("input[type=checkbox]");

// Variable for generate button password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

// Generate password based on selected criteria
function generatePassword() {

  var allChars = "";

  var checked = document.querySelectorAll("input:checked");
  for (var i = 0; i < checked.length; i++) {
    if ( checked[i].id == "lowercase") {
      allChars += "abcdefghijklmnopqrstuvwxyz";     
    } else if (checked[i].id == "uppercase") {
      allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (checked[i].id == "numbers") {
      allChars += "0123456789";
    } else {
      allChars += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
  }

  var result = "";

  for (var i = 0; i < slider.value; i++) {
    result += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
    return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// When checkboxes clicked, make sure at least one checkbox is selected to be able to generate password
function checkboxClick() {
  var checked = document.querySelectorAll("input:checked");
  if (checked.length === 0) {
    // No checkboxes selected?  Disable generate password button, and display error text
    generateBtn.disabled = true;
    error.style.visibility = "visible";
  } else {
    // At least one checkbox selected.  Allow generate password button to be clicked, and hide error text
    generateBtn.disabled = false;
    error.style.visibility = "hidden";
  }
}

// Slider function to display and set password length
slider.oninput = function() {
  output.innerHTML = "Password length " + this.value;
}





