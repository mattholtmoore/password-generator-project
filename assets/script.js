// Assignment Code
var generateBtn = document.querySelector("#generate");

// For a secure password, I will want to use a list of lowercase letter, uppercase letters, numbers & special characters

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@", "^", "_", "~"]

// The README tells me I need to "generate a password", so that's what I call it. I'm also given a numeric range. Password must be >= 8 and <= 128. 

function generatePassword() {
  var passwordLength = prompt("Insert a number between 8 to 128")

  if (passwordLength < 8) {
    alert("Password must be a number between 8 and 128");
    return;
  }
  if (passwordLength > 128) {
        alert("Password must be a number between 8 and 128")
        return;
  }
}

const


    // for (let i = 0; i < 4; i++) {
    //   var random = Math.random() * letters.length;
    //   var floored = Math.floor(random);
    //   console.log(letters[floored]);
    // }





    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
