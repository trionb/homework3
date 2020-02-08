// // // Assignment Code
    var generateBtn = document.getElementById("#generate");

    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*","(", ")", "_", "+"]
    
    var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    var combinedArr = [];
    var values =("uppercase", "lowercase", "symbols", "numeric");
    
       //set password length 
    function generate() {  
        var complexity=document.getElementById("#password")
        
        while (isNaN(length) || length < 8 || length > 128) passwordLength = numeric(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

        // var passwordLength =prompt("How many characters would you like your password to contain");
     
    var numericCharacters=confirm("Do you want numeric Characters");

    if(numericCharacters === true) {
        combinedArr = combinedArr.concat(numeric)
    }

     var lowercaseCharacter=confirm("Do you want lowercase Characters");
      if (lowercaseCharacter === true)  {
          combinedArr=combinedArr.concat(lowercase)
      }

     var uppercaseCharacter=confirm("Do you want uppercase Characters");
      if (uppercaseCharacter === true)  {
         combinedArr=combinedArr.concat(uppercase)
      }

     var symbolsCharacter=confirm("Do you want symbol Characters");
     if (symbolsCharacter === true)  {
        combinedArr=combinedArr.concat(symbols)
     }

     var minimumCount =0
     var minimumNumeric = "";
     var minimumLowerCase = "";
     var minimumUpperCase = "";
     var minimumSymbolsCharacters = "";

     var functionArray = {
        getNumeric: function() {
          return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },
    
        getLowerCase: function() {
          return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },
    
        getUpperCase: function() {
          return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },
    
        getSymbolsCharacters: function() {
          return specialCharacters[Math.floor(Math.random() * symbolsCharacters.length)]
        }
        //values

        // values="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    
        // password="";

//create loop
    // for(var i=0; i <= complexity; i++){
    //     password=password+values.charAt(Math.floor(Math.random() *Math.floor(values.length -1)));
    // }

    // document.getElementById("password").value=password
    
}
  
    // function writePassword()    {
    //     var password =generatedPassword();
    //     var passwordText=document.getElementById("password");

    //     passwordText.value= password;
    // }
   
   

    // var passwordLength =prompt("How many characters would you like your password to contain");
     
    // var numericCharacters=confirm("Do you want numeric Characters");

    // if(numericCharacters === true) {
    //     combinedArr = combinedArr.concat(numeric)
    // }

    //  var lowercaseCharacter=confirm("Do you want lowercase Characters");
    //   if (lowercaseCharacter === true)  {
    //       combinedArr=combinedArr.concat(lowercase)
    //   }

    //  var uppercaseCharacter=confirm("Do you want uppercase Characters");
    //   if (uppercaseCharacter === true)  {
    //      combinedArr=combinedArr.concat(uppercase)
    //   }

    //  var symbolsCharacter=confirm("Do you want symbol Characters");
    //  if (symbolsCharacter === true)  {
    //     combinedArr=combinedArr.concat(symbols)
    //  }

    //  var functionArray = {
    //     getNumeric: function() {
    //       return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    //     },
    
    //     getLowerCase: function() {
    //       return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    //     },
    
    //     getUpperCase: function() {
    //       return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    //     },
    
    //     getSymbolsCharacters: function() {
    //       return specialCharacters[Math.floor(Math.random() * symbolsCharacters.length)]
    //     }
 };