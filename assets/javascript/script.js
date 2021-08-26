// Assignment code here

var getCharacterCount = function() {
  var characterCount = window.prompt("Input the number of characters you would like your password to be. Minimum 8 and no more than 128.");

  if (characterCount < 8 || characterCount > 128 || isNaN(characterCount)) {
    window.alert("Invalid submission. Please enter a number between 8 and 128.");
    return getCharacterCount();
  }
  return characterCount;
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