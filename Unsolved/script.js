// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  console.log('started');
  //variable for character set

  var characterSet = "";
  var lowercaseLetters = false;
  var uppercaseLetters = false;
  var numericCharacters = false;
  var specialCharacters = false;
  var inputCheck = false;

  //prompt choose length of password 8-128
  var passwordLength = prompt("For password length enter a number between 8 - 128.");
  //console.log(passwordLength);

  var numberOfChar = Number(passwordLength);
  //console.log(passwordLength);



// check for positive integer between 8-128
  console.log(Number.isInteger(numberOfChar));
  

  //user validation
  while (inputCheck === false) {
    if (Number.isInteger(numberOfChar) && passwordLength >= 8 && passwordLength <= 128) {
      //console.log('Yay');
      inputCheck = true;
    } else {
      console.log('error')
      var passwordLength = prompt("Try again, for password length enter a number between 8 - 128.");
      var numberOfChar = Number(passwordLength);
    }

    //console.log("test1");
  }

  //console.log('moving on');


  //prompt do you want lowercase?
  lowercaseLetters = confirm('Do you want lowercase characters in your password?');

  //prompt do you want uppercase?
  uppercaseLetters = confirm('Do you want uppercase characters in your password?');

  //prompt do you want numeric?
  numericCharacters = confirm('Do you want numeric characters in your password?');

  //prompt do you want special characters?
  specialCharacters = confirm('Do you want special characters in your password?');


  console.log(lowercaseLetters);
  console.log(uppercaseLetters);
  console.log(numericCharacters);
  console.log(specialCharacters);

  //add lowercase to charSet
  if (lowercaseLetters) {
    characterSet = characterSet + 'abcdefghijklmnopqrstuvwxyz';
  }
  
  //add uppercase to charSet
  if (uppercaseLetters) {
    characterSet = characterSet + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  //add numeric to charSet
  if (numericCharacters) {
    characterSet = characterSet + '1234567890';
  }

  //add special to charSet
  if (specialCharacters) {
    characterSet = characterSet + '!@#$%^&*()'
  }


  //check that at least one type of character was selected.

  //build character set

  //random generator for picking characters from variable iterate once for each number of characters

  //return password








}