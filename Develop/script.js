// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var numbers =["0123456789"]
var specialCharacters= ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"]
var length
var upper 
var lower 
var number 
var special 



function generatePassword(){

  length = prompt("How Long should the password be?");
  var passwordChar = "";
 
 while ( length < 8 || length > 128){
   alert("Hey it has to be between 8 - 128 ");
  length = Number(prompt("How long would you like your password to be"));
 }
  upper = confirm("Would you like to have upper characters?");
  lower = confirm("Would you like to have lower characters");
  number = confirm("Would you like to have numbers?");
  special  = confirm("would you like to have special characters?");

 while (!upper && !lower && !number && !special){
   alert("Hey buckaroo you didn't put any characters!");
   upper = confirm("Would you like to have upper characters?");
   lower = confirm("Would you like to have lower characters");
   number = confirm("Would you like to have numbers?");
   special  = confirm("would you like to have special characters?");
 }
 if(upper === true){
   passwordChar += upperCase;
 }
 if(lower === true){
   passwordChar += lowerCase;
 }
 if (special === true){
   passwordChar += specialCharacters;
 }
 if(number === true){
   passwordChar += numbers;
 }
 
 var plength ="";

for ( i = 0; i < length; i++){
  plength += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));

  
  }
  return plength;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);