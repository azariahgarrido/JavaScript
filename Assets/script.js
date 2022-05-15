// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

number = "0123456789";
letters = "abcdefghijklmnopqrstuvwxyz";
lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
character = "!@#$%^&*()";

function generatePassword() {

  length = prompt("Enter the number of characters you'd like for your new password (Select a number between 8-128)");
  
  if (length < 8 || length > 128) {
    alert("Please make a valid entry");
  }
  
  else if (length > 8 && length < 128) {

    numbers = confirm("Include numbers in your new password?");
    specialCharacter = confirm("Include special characters in your new password?");
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confirm("Include lowercase letters?");

  };
  
  if (numbers && specialCharacter && upperCase && lowerCase) {
    selection = character.concat(number, letters, lettersUp, character);
  }
  
  else if (numbers && specialCharacter && upperCase) {
    selection = character.concat(number, lettersUp, character);
  } else if (specialCharacter && upperCase && lowerCase) {
    selection = character.concat(letters, lettersUp, character);
  } else if (upperCase && lowerCase && numbers) {
    selection = lettersUp.concat(letters, number, lettersUp);
  } else if (lowerCase && numbers && specialCharacter) {
    selection = letters.concat(number, character, letters);
  }
 
  else if (specialCharacter && numbers) {
    selection = character.concat(number, character);
  } else if (numbers && upperCase) {
    selection = number.concat(lettersUp, number);
  } else if (upperCase && lowerCase) {
    selection = lettersUp.concat(letters, lettersUp);
  } else if (lowerCase && numbers) {
    selection = letters.concat(number, letters);
  } else if (lowerCase && specialCharacter) {
    selection = letters.concat(character, letters);
  } else if (specialCharacter && upperCase) {
    selection = character.concat(lettersUp, character);
  }
 
  else if (specialCharacter) {
    selection = character.concat(character);
  } else if (numbers) {
    selection = number.concat(number);
  } else if (lowerCase) {
    selection = letters.concat(letters);
  } else if (upperCase) {
    selection = lettersUp.concat(lettersUp);
  };

  // length === selection;

  return selection;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
