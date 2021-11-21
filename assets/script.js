// Assignment Code
var generateBtn = document.querySelector("#generate");

// For user password, I will want to use arrays of Lowercase Characters, Uppercase Characters, Numeric Characters & Special Characters

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

// The README tells me I need to "generate a password". I'm also given a numeric range. Password must be >= 8 and <= 128. Using the "if" statement I can set up an "alert" to notify the individual of the set parameters. I also created "var"'s for person's choice and their end result.

function generatePassword() {

  var passwordLength = parseInt(
    prompt("How many characters would you like your password to have?"), 10
  );

  if (!passwordLength) {
    alert("Please insert a number.")
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("You have selected to have " + passwordLength + " characters for your password length.");
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be more than 7 characters and less than 129 characters. Please try again.");
  }

  if (Number.isNaN(passwordLength)) {
    alert("A character other than a number was entered. Please choose a numeric character within provided range to continue.");
  }

  var personsChoice = [];
  var endResult = [];

  var addLowerCase = confirm("Would you like to include lowercase characters? Click OK to confirm.");
  if (addLowerCase) {
    personsChoice = personsChoice.concat(lowerCase)
  }

  var addUpperCase = confirm("Would you like to include uppercase characters? Click OK to confirm.");
  if (addUpperCase) {
    personsChoice = personsChoice.concat(upperCase)
  }

  var addNumbers = confirm("Would you like to include numeric characters? Click OK to confirm.");
  if (addNumbers) {
    personsChoice = personsChoice.concat(numbers)
  }

  var addSpecialChars = confirm("Would you like to include special characters? Click OK to confirm.");
  if (addSpecialChars) {
    personsChoice = personsChoice.concat(specialChars)
  }

  console.log("User chooses these characters to use for password: " + personsChoice);


  if (personsChoice.length === 0) {
    alert("Must select at least one character type")
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * endResult.length);
    var floored = endResult[random];
    endResult = endResult.concat(floored)
  }

  return endResult;
}

generatePassword();

// NOTES:
// Each confirmation command should work like a true/false
// OK = TRUE , Cancel = FALSE 
// If all characters are "Cancel", prompt/alert "Must select at least one character type"
// At no point should the box say "Undefined" in the generate password field

// Making it do something special so that I get all character types will be the thing that gets me from an A to A+
// Research and review "unshift" & "pop" (Activity 20)
// Do the last two points LAST! (Y, 7, ! = potential const --> see A20)
// Also review A28 Mini Project for boolean formula


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate butto
generateBtn.addEventListener("click", writePassword);



