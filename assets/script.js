// Assignment Code
var generateBtn = document.querySelector("#generate");

// For user password, use arrays of Lowercase Characters, Uppercase Characters, Numeric Characters & Special Characters

// Array of Lowercase Characters made available for password 
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Array of Uppercase Characters made available for password 
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Array of Numeric Characters made available for password
var numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

// Array of Special Characters made available for password
var specialChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "~"
];

// Given the provided starter code, use function generatePassword()    
function generatePassword() {

  // Create applicable variables: array for available characters, string for end result and boolean flags.
  var availableChars = [];
  var endResult = "";
  var lengthFlag = false;
  var choiceFlag = false;
  var checkedFlag = false;

  // Given the provided numeric range, password must be >= 8 and <= 128. Use the while loop (thank you w3schools for that reminder) and set up an alert to notify the individual of set parameters.  
  while (!lengthFlag) {
    var passwordLength = parseInt(
      prompt("How many characters would you like your password to have?")
    );

    if (passwordLength >= 8 && passwordLength <= 128) {
      alert("You have selected to have " + passwordLength + " characters for your password length.");
      lengthFlag = true;
    }

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be more than 7 characters and less than 129 characters. Please try again.");
    }

    if (Number.isNaN(passwordLength)) {
      alert("Please choose a numeric character within provided range to continue.");
    }
  }

  // While user hasn't 
  while (!choiceFlag) {
    // 
    var confirmLowerCase = confirm("Would you like to include lowercase characters? Click OK to confirm.");
    if (confirmLowerCase) {
      choiceFlag = true;
      availableChars = availableChars.concat(lowerCase)
    }

    var confirmUpperCase = confirm("Would you like to include uppercase characters? Click OK to confirm.");
    if (confirmUpperCase) {
      choiceFlag = true;
      availableChars = availableChars.concat(upperCase)
    }

    var confirmNumbers = confirm("Would you like to include numeric characters? Click OK to confirm.");
    if (confirmNumbers) {
      choiceFlag = true;
      availableChars = availableChars.concat(numbers)
    }

    var confirmSpecialChars = confirm("Would you like to include special characters? Click OK to confirm.");
    if (confirmSpecialChars) {
      choiceFlag = true;
      availableChars = availableChars.concat(specialChars)
    }
    if (!choiceFlag) {
      alert("Must select at least one character type");
    }

  }

  // Use another while loop for conditional expression and for loop nested within it
  while (!checkedFlag) {
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * availableChars.length);
      var randomChar = availableChars[random];
      endResult += randomChar;
    }
    var checked = checkPassword(endResult, confirmLowerCase, confirmUpperCase, confirmNumbers, confirmSpecialChars);
    if (checked) {
      checkedFlag = true;
    } else {
      endResult = "";
    }
  }
  return endResult;
}

// Assume that password is bad until proven otherwise. This function is in place to ensure that the user password meets all of the user's chosen criteria.
function checkPassword(pw, lower, upper, numb, special) {
  var lowerFlag, upperFlag, numbFlag, specialFlag = false;

  //  If user does not want lowercase characters, lowerFlag variable is set to true in order to ensure that the password doesn't fail because of set preference. For example, if the user only wanted numbers and uppercase characters - we don't want the password to fail because it doesn't have lowercase characters. Repeated for every preference.
  if (!lower) {
    lowerFlag = true;
  }
  if (!upper) {
    upperFlag = true;
  }
  if (!numb) {
    numbFlag = true;
  }
  if (!special) {
    specialFlag = true;
  }
  // Iterate over the password's characters and check against every array to see which one it is a part of. Set the corresponding flag to true.
  for (var i = 0; i < pw.length; i++) {
    var currentChar = pw[i];
    if (lowerCase.includes(currentChar)) {
      lowerFlag = true;
    }
    if (upperCase.includes(currentChar)) {
      upperFlag = true;
    }
    if (numbers.includes(currentChar)) {
      numbFlag = true;
    }
    if (specialChars.includes(currentChar)) {
      specialFlag = true;
    }
  }

  if (lowerFlag && upperFlag && numbFlag && specialFlag) {
    // this returns that the password has met all conditions
    return true;
  } else {
    // this returns that the password has NOT met all conditions
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



