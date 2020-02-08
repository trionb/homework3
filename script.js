var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]    
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*","(", ")", "_", "+"]
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] 
var combinedArr = [];

function generate() {    
  var passwordLength = prompt("How many characters would you like your password to contain");

  var numericCharacters=confirm("Do you want numeric Characters");
  console.log("numericCharacters: " + numericCharacters)
  if(numericCharacters === true) {
    console.log("adding numericCharacters");
    combinedArr = combinedArr.concat(numeric)
  }

  var lowercaseCharacter=confirm("Do you want lowercase Characters");
  if (lowercaseCharacter === true)  {
    console.log("adding lowecase");
    combinedArr=combinedArr.concat(lowercase)
  }

  var uppercaseCharacter=confirm("Do you want uppercase Characters");
  if (uppercaseCharacter === true)  {
    console.log("adding uppercaseCharacter");
    combinedArr=combinedArr.concat(uppercase)
  }

  var symbolsCharacter=confirm("Do you want symbol Characters");
  if (symbolsCharacter === true)  {
    console.log("adding symbolsCharacter");
    combinedArr=combinedArr.concat(symbols)
  }

  var password = "";
  for(let i=0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * combinedArr.length);
    var character = combinedArr[random];
    password += character;
  }
  console.log("Password: " + password);
  var passwordText=document.getElementById("password");
  passwordText.value = password;
};



