
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword(password) {
//   const password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

//["a", "b", ]
var lowerCaseArray="abcdefghjklimnopqrstuvwxyz".split('')
var upperCaseArray="abcdefghjklimnopqrstuvwxyz".toUpperCase().split('')
var numberArray="1234567890".split('')
var specialArray ="~!@#$%^&*".split('')

// Add event listener to generate button
generateBtn.addEventListener("click", 
getNumber
);

function getNumber() {
  var number = prompt("Enter the number of characters you would like your password to be");
    if (number < 9 ) {
      alert("The password must be more than 8 characters");
      getNumber()
      }

     if (number > 127) {
      alert("The password must be less than 128 characters");
      getNumber()
      }

    // return number  
    selectCharacter()
    // generatePassword()
    // writePassword()
}
    //generatePassword()

  
  //let number = prompt("Enter the number of characters you would like your password to be");
  
  var characterPool =[];

  function selectCharacter() {
    // for(var i=0; i<lowerArray.length; i++){characterPool.push(lowerCaseArray[i])}
    
    var answer1 = prompt("Include lowercase letters? Type 'yes' or 'no'");
    if (answer1 ==="yes") {characterPool = [...lowerCaseArray]};

    var answer2 = prompt("Include uppercase letters? Type 'yes' or 'no'");
    if (answer2 ==="yes") {characterPool = [...upperCaseArray]};

    var answer3 = prompt("Include numbers? Type 'yes' or 'no'");
    if (answer3 ==="yes") {characterPool = [...numberArray]}

    var answer4 = prompt("Include special characters? Type 'yes' or 'no'");
    if (answer4 ==="yes") {characterPool = [...specialArray]}

    
    generatePassword(characterPool)
    // prompt("Include uppercase letters? Type 'yes' or 'no'");
    // prompt("Include numbers? Type 'yes' or 'no'");
    // prompt("Include special characters? Type 'yes' or 'no'");
  };
  
  

  function generatePassword(pool){
    var password =[]
    var number = getNumber()
    var pool = selectCharacter()
    for (var i=0; i<number; i++){
      var index = Math.floor( Math.random() * (pool.length))
      var character = pool[index];
      password.push(character)
    }
    
    const password1 = password.join('');
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;
  }

//numericPrompt ();
