// Assignment code here

var getCharacterCount = function() {
  var characterCount = window.prompt("Input the number of characters you would like your password to be. Minimum 8 and no more than 128.");

  if (characterCount < 8 || characterCount > 128 || isNaN(characterCount)) {
    window.alert("Invalid submission. Please enter a number between 8 and 128.");
    return getCharacterCount();
  }
  return characterCount;
}

var characterCount = getCharacterCount();

var passwordCharacters = function() {

  var characterTypes = {
    lowercase: window.confirm("Do you want to include lowercase characters in your password?"),
    uppercase: window.confirm("Do you want to include uppercase characters in your password?"),
    numericals: window.confirm("Do you want to include number characters in your password?"),
    special: window.confirm("Do you want to include special characters in your password?")
  }
  if (characterTypes.lowercase === true) {
    lowercaseCharacters ="abcdefghijklmnopqrstuvwxyz";
  }
  else {
    lowercaseCharacters = ""
  };
  if (characterTypes.uppercase === true) {
    uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    uppercaseCharacters = ""
  }
  if (characterTypes.special === true) {
    specialCharacters = "!\"@#$/%^&*()_-+=~';:'<,.>/?{}[]|";
  } else {
    specialCharacters = ""
  }
  if (characterTypes.numericals === true) {
    numberCharacters = "0123456789";
  } else {
    numberCharacters = "";
  }
  if (characterTypes.lowercase === false && characterTypes.uppercase === false && characterTypes.special === false && characterTypes.numericals ===false) {
    window.alert("You have to choose at least one type of characters! Please try again.");
    return passwordCharacters();
  } else {
    return lowercaseCharacters + uppercaseCharacters + specialCharacters +numberCharacters};
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);