// Assignment code here
var upppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var numericCharacters = "1234567890"
var specialCharacters = "$#!&%^*()"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

function generatePassword() {
  // prompt user to get criteria and store results
  
  var passwordLength =  window.prompt('What will be your password length? Must be between 8 to 128 characters.');
  passwordLength = parseInt(passwordLength);

  if(passwordLength >= 8 && passwordLength <= 128) {
    console.log("Correct number chosen")
    randomPassword(passwordLength)
  } else {
    alert("Please enter password length between 8-128")
    generatePassword();
  }
}


function randomPassword(passwordLength) {
  let userChoiceString = ""
  let upperCaseConfirm = confirm ("Would you like uppercase in your password?")
  if (upperCaseConfirm === true) {
  userChoiceString = userChoiceString.concat(upppercaseCharacters)
  }
  let lowerCaseConfirm = confirm ("Would you like lowercase in your password?")
  if (lowerCaseConfirm === true) {
    userChoiceString = userChoiceString.concat(lowercaseCharacters)
    }
  let numericConfirm = confirm ("Would you like numeric in your password?")
  if (numericConfirm === true) {
    userChoiceString = userChoiceString.concat(numericCharacters)
    }
  let specialcharactersConfirm = confirm ("Would you like special characters in your password?")
  if (specialcharactersConfirm === true) {
    userChoiceString = userChoiceString.concat(specialCharacters)
    }
  console.log(upperCaseConfirm, lowerCaseConfirm, numericConfirm, specialcharactersConfirm)
  console.log(userChoiceString)
  let userChoiceArray = userChoiceString.split("")
  console.log(userChoiceArray)

  let newPassword = ""

  for(let i = 0; i < passwordLength; i++) {
    let index = Math.floor (Math.random() * userChoiceArray.length)
    let randomCharacter = userChoiceArray[index]
    newPassword = newPassword + randomCharacter
  
  }
  console.log(newPassword)
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
