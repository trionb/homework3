//Assign Code
var generatebtn=document.getElementById("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*","(", ")", "_", "+"]

var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var combinedArr = [];

var password="";

//Write password to the #password input
    
function writePassword()    {
    var password =generatedPassword("uppercase, lowercase,symbols,numeric");
    var passwordText=document.getElementById("password");
    passwordText.value=result;


    var functionArray = {
        getNumeric: function() {
          return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },
    
        getLowercase: function() {
          return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },
    
        getUppercase: function() {
          return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },
    
        getSymbols: function() {
          return symbols[Math.floor(Math.random() * symbols.length)]
        }
    
    };

}

function generate(){

    var numericCharacters=confirm("Do you want numeric Characters");

    if(numericCharacters === true) {
        combinedArr = combinedArr.concat(numeric)
    } 

    //console.log(numeric);

     var lowercaseCharacter=confirm("Do you want lowercase Characters");
      if (lowercaseCharacter === true)  {
          combinedArr=combinedArr.concat(lowercase)
      }
      //console.log(lowercase);

     var uppercaseCharacter=confirm("Do you want uppercase Characters");
      if (uppercaseCharacter === true)  {
          combinedArr=combinedArr.concat(uppercase)
      }
      //console.log(uppercase);

     var symbolsCharacter=confirm("Do you want symbol Characters");
     if (symbolsCharacter === true)  {
       combinedArr=combinedArr.concat(symbols)
     } 
     //console.log(symbols);
    }
     console.log(combinedArr)
      // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount=0

      // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
    var miniNumerics="";
    var miniLowercase="";
    var miniUppercase="";
    var miniSymbols="";

   
  
     