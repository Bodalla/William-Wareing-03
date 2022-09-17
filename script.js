
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", charactersPrompt);

function charactersPrompt() {
  var number = prompt("Enter the number of characters you would like your password to be");
    if (number < 9 ) {
      alert("The password must be more than 8 characters")
      };
    if (number > 127) {
      alert("The password must be less than 128 characters")
      };
    if (8<number<128) {
      prompt("Include lowercase letters? Type 'yes' or 'no'");
    };
      prompt("Include uppercase letters? Type 'yes' or 'no'");
      prompt("Include numbers? Type 'yes' or 'no'");
      prompt("Include special characters? Type 'yes' or 'no'");
};
//let number = prompt("Enter the number of characters you would like your password to be");
  



//numericPrompt ();
